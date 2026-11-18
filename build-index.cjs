'use strict';

const { createHash } = require('node:crypto');
const fs = require('node:fs');
const path = require('node:path');
const posix = path.posix;

const ROOT = __dirname;
const LOCALES = [{ id: 'en', label: 'English' }];
const DEFAULT_LOCALE = 'en';
const EDITORIAL_SECTIONS = [
    ['start', 'Getting started'],
    ['account', 'Account and security'],
    ['dashboard', 'Notifications and reporting'],
    ['site', 'Site and publishing'],
    ['content', 'Pages and content'],
    ['media', 'Images and media'],
    ['design', 'Themes and schema'],
    ['ai', 'AI and agents'],
    ['analytics', 'Page analytics'],
    ['integrations', 'Integrations and social'],
    ['settings', 'Settings'],
    ['users', 'Users and roles'],
    ['operations', 'Operations and maintenance'],
    ['tools', 'MCP and other tools'],
];
const SECTIONS = EDITORIAL_SECTIONS.map(([id, title]) => ({ id, title }));
const SECTION_ORDER = new Map(SECTIONS.map(({ id }, index) => [id, index]));
const SLUG = /^[a-z\d]+(?:-[a-z\d]+)*$/u;
const IMAGE = /^images\/[a-z\d-]+\/[\w/.-]+\.(?:avif|gif|jpe?g|png|webp)$/iu;
const FENCE = /^ {0,3}(\x60{3,}|~{3,})(.*)$/u;
const HEADING = /^ {0,3}(#{1,6})[ \t]+(.+?)\s*#*\s*$/u;
const INLINE_LINK = /(!?)\[(?<label>(?:[^\]\\]|\\.)*)\]\(\s*(?:<(?<angle>[^>\n]+)>|(?<bare>(?:[^()\s\\]|\\.|[(][^()\n]*[)])+))(?:\s+["'][^"'\n]*["'])?\s*\)/gu;
const HEADING_LIMIT = 160;
const CHUNK_TARGET = 5000;

function fail(label, message) {
    throw new Error(label + ': ' + message);
}

function read(relative) {
    return fs.readFileSync(path.join(ROOT, relative), 'utf8');
}

function readJson(relative) {
    return JSON.parse(read(relative));
}

function assertFile(relative, label) {
    const filename = path.join(ROOT, relative);
    const stats = fs.lstatSync(filename, { throwIfNoEntry: false });
    if (!stats?.isFile() || !stats.size) fail(label, 'missing or empty file ' + relative);
    const absolute = fs.realpathSync(filename);
    if (!absolute.startsWith(fs.realpathSync(ROOT) + path.sep)) fail(label, 'path leaves repository: ' + relative);
}

function rewriteLinks(line, map) {
    return line.replace(INLINE_LINK, (...args) => map(args[1] === '!', args.at(-1)));
}

function inlineText(value) {
    return rewriteLinks(value, (image, { label }) => image ? '' : label)
        .replace(/\\([\x60*_\[\]()<>{}|!#\\])/gu, '$1')
        .replace(/(\*{1,3}|_{1,3}|~~|\x60+)(?=\S)(.*?\S)\1/gu, '$2')
        .replace(/&amp;/gu, '&')
        .trim();
}

function headingSlug(title, used) {
    const base = title.normalize('NFKC').toLowerCase().replace(/[^\p{L}\p{N}\s-]/gu, '')
        .trim().replace(/\s+/gu, '-').slice(0, HEADING_LIMIT - 8) || 'section';
    let headingId = base;
    for (let duplicate = 1; used.has(headingId); duplicate += 1) headingId = base + '-' + duplicate;
    used.add(headingId);
    return headingId;
}

function parseArticle(locale, filename) {
    const id = filename.slice(0, -3);
    const relative = 'articles/' + locale + '/' + filename;
    const section = id.split('-')[0];
    if (!SLUG.test(id) || !SECTION_ORDER.has(section)) fail(relative, 'unknown article ID or section');
    assertFile(relative, relative);
    const source = read(relative);
    const lines = source.split(/\r?\n/u);
    if (!/^# \S/u.test(lines[0])) fail(relative, 'start with an H1');

    const headings = [];
    const links = [];
    const sections = [];
    const used = new Set();
    let fence;
    let active;
    let title;
    for (const [index, line] of lines.entries()) {
        const delimiter = FENCE.exec(line);
        if (delimiter) {
            const marker = delimiter[1];
            if (!fence) fence = marker;
            else if (marker[0] === fence[0] && marker.length >= fence.length && !delimiter[2].trim()) fence = null;
            continue;
        }
        const heading = !fence && HEADING.exec(line);
        if (heading) {
            const level = heading[1].length;
            const label = inlineText(heading[2]);
            if (!label) fail(relative, 'empty heading at line ' + (index + 1));
            if (level === 1) {
                if (title) fail(relative, 'only one H1 is allowed');
                title = label;
            }
            const entry = { id: level === 1 ? '' : headingSlug(label, used), title: label, level };
            if (level > 1) headings.push(entry);
            active = { heading: label, anchor: entry.id, lines: [] };
            sections.push(active);
            continue;
        }
        if (!fence) {
            for (const match of line.matchAll(INLINE_LINK)) {
                const { label, angle, bare } = match.groups;
                links.push({ image: Boolean(match[1]), label, target: angle ?? bare, line: index + 1 });
            }
        }
        if (active) active.lines.push(fence ? line : inlineText(line.replace(/^ {0,3}(?:>\s*)+/u, '')));
    }
    if (fence) fail(relative, 'unclosed code fence');
    if (!title || !headings.length) fail(relative, 'expected a title and at least one section heading');
    const intro = sections[0].lines.join('\n').trim().split(/\n[ \t]*\n/u)[0].replace(/\s+/gu, ' ');
    if (!intro) fail(relative, 'add a lead paragraph after the title');

    return { id, locale, section, title, description: intro, path: relative, headings, sections, links, source, menuIds: [], routes: [], keywords: [] };
}

function buildRoutes(english) {
    const menuCatalog = readJson('menu-catalog.json');
    const menuMap = require('./menu-map.cjs');
    if (!Array.isArray(menuCatalog)) fail('menu-catalog.json', 'expected a menu array');
    const menuEntries = new Map();
    for (const menu of menuCatalog) {
        if (!/^[a-z][a-z\d]*(?:\.[a-z][a-z\d]*)*$/iu.test(menu?.id ?? '') || typeof menu.label !== 'string'
            || !menu.label.trim() || !Object.hasOwn(menu, 'parent') || menuEntries.has(menu.id)) {
            fail('menu-catalog.json', 'invalid or duplicate menu entry ' + menu?.id);
        }
        menuEntries.set(menu.id, menu);
    }
    for (const menuId of Object.keys(menuMap)) {
        if (!menuEntries.has(menuId)) fail('menu-map.cjs', 'unknown menu ID ' + menuId);
    }
    function breadcrumb(menu, seen = new Set()) {
        if (!menu.parent) return menu.label;
        const parent = menuEntries.get(menu.parent);
        if (!parent || seen.has(menu.id)) fail('menu-catalog.json', 'invalid parent chain at ' + menu.id);
        seen.add(menu.id);
        return breadcrumb(parent, seen) + ' → ' + menu.label;
    }
    for (const [menuId, menu] of menuEntries) {
        const targets = menuMap[menuId];
        if (!Array.isArray(targets) || !targets.length || new Set(targets).size !== targets.length) {
            fail('menu-map.cjs', 'expected distinct article IDs for ' + menuId);
        }
        const route = breadcrumb(menu);
        for (const target of targets) {
            const article = english.get(target);
            if (!article) fail('menu-map.cjs', 'missing English article ' + target + ' for ' + menuId);
            article.menuIds.push(menuId);
            article.routes.push(route);
            article.keywords.push(menu.label);
        }
    }
    return menuCatalog;
}

function validateImages(articles) {
    const captions = readJson('image-captions.json');
    if (!Array.isArray(captions)) fail('image-captions.json', 'expected an image array');
    const assets = new Map();
    const ids = new Set();
    for (const { id, file, alt, article, width, height } of captions) {
        const locale = file?.split('/')[1];
        if (!SLUG.test(id ?? '') || ids.has(id) || !IMAGE.test(file ?? '') || assets.has(file)
            || !articles.has('articles/' + locale + '/' + article + '.md') || typeof alt !== 'string' || !alt.trim()
            || !Number.isInteger(width) || width <= 0 || !Number.isInteger(height) || height <= 0) {
            fail('image-captions.json', 'invalid or duplicate image entry ' + id);
        }
        assertFile(file, 'image-captions.json');
        assets.set(file, { article, alt });
        ids.add(id);
    }
    return assets;
}

function validateLinks(articles, images) {
    const referencedImages = new Set();
    for (const article of articles.values()) {
        for (const { image, label, target, line } of article.links) {
            const at = article.path + ':' + line;
            if (/^https:\/\//iu.test(target) && !image) {
                const url = new URL(target);
                if (!url.hostname || url.username || url.password) fail(at, 'invalid HTTPS link ' + target);
                continue;
            }
            if (/^(?:[a-z][a-z\d+.-]*:|\/\/)/iu.test(target) || target.includes('\\')) {
                fail(at, 'unsupported link ' + target);
            }
            const [rawPath, rawFragment] = target.split('#', 2);
            const destination = rawPath ? posix.normalize(posix.join(posix.dirname(article.path), decodeURIComponent(rawPath))) : article.path;
            if (destination === '..' || destination.startsWith('../') || rawPath.startsWith('/')) {
                fail(at, 'link must stay within the repository: ' + target);
            }
            if (image) {
                if (!label.trim() || !images.has(destination)) fail(at, 'image needs alt text and a catalog entry: ' + target);
                referencedImages.add(destination);
                continue;
            }
            const articleTarget = articles.get(destination);
            assertFile(destination, at);
            if (articleTarget && rawFragment && !articleTarget.headings.some(heading => heading.id === decodeURIComponent(rawFragment))) {
                fail(at, 'unknown heading fragment ' + target);
            }
        }
    }
    for (const asset of images.keys()) {
        if (!referencedImages.has(asset)) fail('image-captions.json', 'screenshot is not linked by an article: ' + asset);
    }
}

function sourceRevision(articles, assets) {
    const hash = createHash('sha256');
    const revisionFiles = ['build-index.cjs', 'menu-catalog.json', 'menu-map.cjs', 'image-captions.json',
        ...articles.keys(), ...assets.keys()].sort();
    for (const relative of revisionFiles) {
        const content = fs.readFileSync(path.join(ROOT, relative));
        hash.update(relative + '\0' + content.length + '\0').update(content);
    }
    return hash.digest('hex');
}

function citation(article, anchor) {
    const url = new URL('https://bidocms.com/docs/');
    url.searchParams.set('article', article.id);
    if (article.locale !== DEFAULT_LOCALE) url.searchParams.set('lang', article.locale);
    if (anchor) url.hash = anchor;
    return url.href;
}

function bodyParts(lines) {
    const blocks = lines.join('\n').trim().split(/\n\s*\n/u).filter(Boolean);
    const parts = [];
    let accumulated = '';
    for (const block of blocks) {
        if (accumulated && accumulated.length + block.length + 2 > CHUNK_TARGET) {
            parts.push(accumulated);
            accumulated = '';
        }
        accumulated += (accumulated ? '\n\n' : '') + block;
    }
    if (accumulated) parts.push(accumulated);
    return parts;
}

function makeIndexes() {
    const articles = new Map();
    for (const { id: locale } of LOCALES) {
        const directory = path.join(ROOT, 'articles', locale);
        for (const filename of fs.readdirSync(directory).filter(name => name.endsWith('.md')).sort()) {
            const article = parseArticle(locale, filename);
            articles.set(article.path, article);
        }
    }
    const english = new Map([...articles.values()].filter(article => article.locale === DEFAULT_LOCALE)
        .map(article => [article.id, article]));
    if (!english.size) fail('articles/' + DEFAULT_LOCALE, 'no articles found');
    const menuCatalog = buildRoutes(english);
    const images = validateImages(articles);
    validateLinks(articles, images);

    const ordered = [...articles.values()].sort((left, right) =>
        SECTION_ORDER.get(left.section) - SECTION_ORDER.get(right.section)
        || left.locale.localeCompare(right.locale, 'en') || left.id.localeCompare(right.id, 'en'));
    const version = { schemaVersion: 1, sourceRevision: sourceRevision(articles, images) };
    const manifest = { ...version, defaultLocale: DEFAULT_LOCALE, locales: LOCALES, sections: SECTIONS, articles: [], menuCatalog };
    const search = { ...version, articles: [] };
    const assistant = { ...version, chunks: [] };

    for (const article of ordered) {
        const { id, locale, section, title, description, path: relative, headings, sections } = article;
        const mapped = english.get(id) ?? article;
        const unique = values => [...new Set(values)];
        const menuIds = unique(mapped.menuIds);
        const routes = unique(mapped.routes);
        const keywords = unique([...mapped.keywords, id.replaceAll('-', ' ')]);
        manifest.articles.push({ id, locale, section, title, description, path: relative, keywords, headings, routes, menuIds });
        const searchText = sections.map(entry => [entry.heading, ...entry.lines].join('\n')).join('\n');
        search.articles.push({ id, locale, text: searchText.replace(/\s+/gu, ' ').trim() });
        for (const { heading, anchor, lines } of sections) {
            const parts = bodyParts(lines);
            for (const [index, body] of parts.entries()) {
                const url = citation(article, anchor);
                const key = locale + '/' + id + '#' + anchor + ':' + (index + 1);
                assistant.chunks.push({ id: key, articleId: id, locale, title, heading, anchor, body, url, menuIds });
            }
        }
    }
    return { 'manifest.json': manifest, 'search-index.json': search, 'assistant-index.json': assistant };
}

function main(arguments_) {
    if (arguments_.length > 1 || (arguments_.length && arguments_[0] !== '--check')) {
        fail('Arguments', 'usage: node build-index.cjs [--check]');
    }
    const check = arguments_[0] === '--check';
    const indexes = makeIndexes();
    for (const [filename, value] of Object.entries(indexes)) {
        const output = JSON.stringify(value, null, 2) + '\n';
        if (check) {
            if (read(filename) !== output) fail(filename, 'out of date. Run node build-index.cjs.');
        } else {
            fs.writeFileSync(path.join(ROOT, filename), output);
        }
    }
    console.log(indexes['manifest.json'].articles.length + ' articles and ' + indexes['assistant-index.json'].chunks.length
        + ' assistant chunks ' + (check ? 'verified.' : 'indexed.'));
}

try {
    main(process.argv.slice(2));
} catch (error) {
    console.error(error.message);
    process.exitCode = 1;
}
