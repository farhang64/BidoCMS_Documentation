# Configure AI provider keys

Open **AI & Agent → AI settings** to turn AI features on and manage named provider API keys. In an AI tool, pick the saved key and a compatible model for the requested action.

## Enable AI and add a key

1. Select **Enable AI features** and choose **Save settings**.
2. Under **Provider API keys**, locate **Add an API key**.
3. Enter a clear **Key name**, such as Editorial text or Marketing images.
4. Select the **Provider**. The capability list explains which actions the provider supports. Where available, use **Manage [provider] API keys** to reach its key console.
5. Paste the **Provider API key**. The form accepts 16–2,048 non-space characters. Choose **Enable this key** to make the key available for use.
6. Select **Add key**. The saved card displays its name, provider, a masked hint and Enabled or Disabled status.

The provider catalog includes OpenAI, Google Gemini, Anthropic Claude, xAI, Mistral AI, Groq, DeepSeek, OpenRouter, Together AI, Fireworks AI, Cerebras, SambaNova and Cohere. The available model list is looked up against the selected key and filtered by action, so the same provider can show different choices for text, image generation, image editing or image descriptions.

## Edit, rotate or remove a saved key

| Action | What happens |
| --- | --- |
| Edit → Save key | Change the name or enabled state. With the same provider, leave the secret field blank to keep the current value. |
| Edit → change provider | Enter a key for the new provider before saving. |
| Edit → enter a replacement key | Updates the credential while keeping its saved entry. Recheck any scheduled agents that depend on its model. |
| Delete → Keep key | Closes the confirmation and keeps the saved credential. |
| Delete → Delete key | Removes the saved credential. To use it again, add the key anew. |

BidoCMS encrypts saved keys and shows only masked hints. The separate AI service receives the selected key for the provider request. The key can be used only within the supported actions. Provider billing and model access apply to AI requests.

## If a tool has no model choices

Check that AI is enabled, the intended key is enabled, and the provider supports the operation. Use the model picker refresh control after changing provider credentials or account access. For image descriptions choose a key with a vision-capable model. If the AI service is temporarily unavailable, this panel can still let you manage saved keys.

[Use AI in an editor](ai-rich-text-editor.md) · [Generate and edit images](ai-image-workflows.md) · [Build theme components from Figma](design-theme-figma.md) · [Install an agent](ai-agent-install.md)
