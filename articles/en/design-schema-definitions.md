# Schema definitions and JSON-LD formats

Open **Schema → Definitions** to view and manage reusable structured-data definitions. The list can include built-in presets marked with a star, theme-imported schemas, and custom schemas.

## Create a definition

1. Select **Add schema** and open the new card.
2. Enter **Schema name** without spaces. The CMS displays the resulting root **@type (auto)**.
3. Enter the **Format (JSON-LD body only)**. The publisher adds root `@context` and `@type`.
4. Use **Add input** for any values the template should fill. Enter the key, label, type, description, and whether the value is required.
5. Select **Save**.
6. Assign the definition to a theme page type or an individual page. Use **Pages → Schema → Generated schema preview** to verify the output.

## Input parameters

| Setting | Purpose |
| --- | --- |
| Key (snake_case) | Stable name such as `business_name`. Use the same name in the format placeholder. |
| Label | Human-readable label for the input. |
| Type | **Text**, **Long text**, **Number**, **Boolean**, **URL**, **Date**, or **Array**. |
| Required | Flags a required input in the definition. |
| Description | Explains what the input represents. |
| Array item fields | Defines the properties repeated for each array entry. Each field has a key, label, type, and required flag. |

Text-like placeholders use double braces, for example `"{{business_name}}"`. An array format should contain a representative object whose field placeholders can be expanded for each row. Verify the actual generated values in the preview. The default builder supplies common fields such as title, description, canonical URL, created date, and primary image. Breadcrumb and FAQ presets have additional built-in data sources. Theme-provided schema builders can populate other values.

## Manage an existing definition

Open its card to inspect the body and inputs. Built-in presets show a stable **Reference key** and allow edits to format and input parameters. Their preset names and root types are fixed, and preset cards cannot be deleted. Custom definitions have a **Delete** action where allowed. Before deleting or renaming a custom definition, check its page type and page assignments. When a theme also supplies a schema builder for a reference, verify the definition's behavior on a generated page.

## Built-in reference keys

The table lists the preset names and input keys declared by BidoCMS. A template still needs source data for the relevant fields. Check the public JSON-LD with the page schema preview and a test publish.

| Reference key | JSON-LD type | Configurable input keys |
| --- | --- | --- |
| `article` | `Article` | `headline`, `description`, `author_name`, `date_published`, `image_url` |
| `breadcrumb` | `BreadcrumbList` | `item_list_element` (`position`, `item_id`, `item_name`) |
| `faq` | `FAQPage` | `main_entity` (`question`, `answer`) |
| `q&a` | `QAPage` | `main_entity` (`question`, `answer`) |
| `product` | `Product` | `name`, `description`, `sku`, `price`, `currency`, `image_url` |
| `local-business` | `LocalBusiness` | `name`, `street_address`, `city`, `telephone`, `url` |
| `organization` | `Organization` | `name`, `url`, `logo_url` |
| `website` | `WebSite` | `name`, `url`, `search_url` |
| `webpage` | `WebPage` | `name`, `description`, `url` |
| `person` | `Person` | `name`, `job_title`, `image_url`, `url` |
| `event` | `Event` | `name`, `start_date`, `end_date`, `location`, `description` |
| `recipe` | `Recipe` | `name`, `description`, `prep_time`, `cook_time`, `image_url` |
| `video` | `VideoObject` | `name`, `description`, `thumbnail_url`, `upload_date`, `content_url` |
| `book` | `Book` | `name`, `author_name`, `isbn`, `image_url` |
| `movie` | `Movie` | `name`, `description`, `date_published`, `image_url` |
| `course` | `Course` | `name`, `description`, `provider_name`, `url` |
| `job-posting` | `JobPosting` | `title`, `description`, `date_posted`, `employment_type`, `hiring_organization` |
| `how-to` | `HowTo` | `name`, `description`, `steps` (`step_name`, `step_text`) |
| `review-snippet` | `Review` | `item_name`, `author_name`, `rating_value`, `review_body` |
| `carousel` | `ItemList` | `list_name`, `item_list_element` (`position`, `item_name`, `item_url`) |
| `dataset` | `Dataset` | `name`, `description`, `url` |
| `logo` | `Organization` | `name`, `logo_url` |
| `image-metadata` | `ImageObject` | `name`, `content_url`, `caption` |
| `sitelinks-search-box` | `WebSite` | `name`, `url`, `search_url_template` |
| `speakable` | `WebPage` | `name`, `url`, `speakable_text` |
| `education-q&a` | `QAPage` | `educational_level`, `main_entity` (`question`, `answer`) |
| `employer-aggregate-rating` | `EmployerAggregateRating` | `employer_name`, `rating_value`, `review_count` |
| `estimated-salary` | `MonetaryAmountDistribution` | `currency`, `median`, `duration` |
| `fact-check` | `ClaimReview` | `claim`, `rating`, `url` |
| `learning-video` | `VideoObject` | `name`, `description`, `educational_level`, `content_url` |
| `math-solvers` | `MathSolver` | `name`, `url` |
| `practice-problems` | `Quiz` | `name`, `questions` (`question`, `answer`) |
| `home-activities` | `ItemList` | `list_name`, `item_list_element` (`position`, `activity_name`, `activity_url`) |

[Assign defaults by page type](design-schema-page-types.md) · [Preview page schema](content-page-schema.md)
