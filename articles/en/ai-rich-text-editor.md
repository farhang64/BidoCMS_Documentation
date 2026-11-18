# Use AI in the rich-text editor

Where the BidoCMS rich-text editor displays its AI action, it can answer a question about the current document or edit its content. The action uses saved AI credentials and an available text model.

## Work with a passage or the full document

1. Open the existing editor in the desired content language.
2. Select a passage first if the change should target only that text.
3. Open the editor's AI conversation and verify the **Selected passage** preview. Choose **Remove** in that preview to clear it and work with the document as a whole.
4. Select a saved credential and compatible model. Enter an instruction, such as “Shorten this paragraph to three sentences and preserve the booking link.”
5. Choose **Send**. Each message sends the full editor document and, if present, the marked passage to the chosen model. The instruction can be up to 6,000 characters.
6. Read the answer and check the editor. A reply-only answer does not replace content. An accepted edit may replace the selected passage or the complete editor document according to the instruction.
7. Use the surrounding editor's normal save workflow after reviewing the result. Follow the page's normal publishing workflow if the change should appear publicly.

## Revert or retry an edit

- Use **Revert AI edit** to restore the preceding document when it still matches the AI revision.
- If the editor says the document changed while waiting, review the latest content, select the passage again if needed and resend.
- If unsupported markup prevented the edit, try a simpler change or select a smaller passage.
- If the **Send** button is disabled, enter an instruction and select a compatible key and model. The button is also disabled while a request is pending.

[Manage AI provider keys](ai-provider-keys.md)
