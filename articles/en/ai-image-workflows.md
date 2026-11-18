# Generate, edit and describe images with AI

Image AI tools use credentials from **AI & Agent → AI settings** and save their results in the **Images** workspace. Each action displays only supported key and model combinations.

## Generate a new image

1. Open **Images** and navigate to the folder where the result belongs.
2. Use the AI image generation control to open **Generate an image**.
3. Select a saved API key and model, and enter **Your prompt**.
4. Optionally use the prompt-category dropdowns and supply an **Action**, **Constraints** or **Image name**. Read the assembled **Final prompt** before submitting. A prompt longer than 12,000 characters must be shortened.
5. Choose **Aspect ratio** from Square (1:1), Landscape (3:2) or Portrait (2:3). The **Quality** choices depend on the model and can be automatic.
6. Add reference images if the model supports them. References are ordered. The upload controls allow up to four reference uploads, 3 MiB for an individual file and 8 MiB combined. Some models allow fewer.
7. Select **Generate image** and wait for the new file to appear in the current folder. Requests can take a few minutes.

## Edit an existing image

1. Open the source image in the image editor.
2. Choose an enabled key for image editing and, if appropriate, select the area of interest.
3. Open **Edit with AI**, select the model and describe the change you want. For a masked edit, the original image and its mask are included automatically. Optional additional references follow the source.
4. Select **Generate edited image**.
5. Open the new image in the original folder and check the entire result. The selection guides the edit, and the model can change surrounding pixels for visual consistency. BidoCMS saves the entire result as a new image, keeping the original available.

If the service asks you to retry after a response could not be received, repeat the action in the same dialog to retrieve the request safely.

## Generate alternative text, title and caption

1. Open the image's **Details** and choose the AI descriptions action.
2. Select a key and vision-capable model.
3. Review or edit the standard prompt. Use **Reset to standard prompt** to restore the default text.
4. Select **Include website context** if the optional context saved in **Site → General** should guide the descriptions. The panel enables the option initially when context exists.
5. Choose **Generate and save for all languages**. This writes the alternative text, title and caption for each configured website language.
6. Verify the visible descriptions and adjust the copy for the image's actual editorial use. If another editor changed the fields during generation, review the current values before retrying.

[Manage AI provider keys](ai-provider-keys.md)
