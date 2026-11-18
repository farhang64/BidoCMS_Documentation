# Generate and edit images with AI

Use **Images → Generate image** to create an image in the current regular folder. To work from an existing original, select an image and open **Details → Source**.

## Generate a new image

1. Open a regular image album folder and select **Generate image**.
2. Choose an enabled provider key and model.
3. Enter **Your prompt**. Add reference images if applicable.
4. Depending on the selected model, review **Aspect ratio**, **Quality**, and the other available options. Fields can include **Action**, **Constraints**, and **Image name**.
5. Review **Final prompt** when displayed, then select **Generate image**.
6. Wait for the job to finish. The image is saved in the current folder and opened in the album.

## Edit an existing image

1. Open the image's **Source** tab and choose an enabled provider key.
2. Select **Freehand outline**, **Point-by-point outline**, or **Rectangle** to guide the main edit area. Release to finish a freehand shape. For point-by-point, finish with Enter or a double-click. Use **Undo selection** or **Clear selections** to correct the guide. With the canvas focused, Escape cancels the current outline and Delete or Backspace removes a point or the latest guide.
3. Enable **Edit without an area guide** to use the prompt alone.
4. Select **Edit with AI**, describe the desired change, then choose **Generate edited image**.
5. Review the new image stored in the original folder.

The selected regions guide the edit. The model can adjust the rest of the image as well. An edited result is a new album image. Use [image size variants](media-image-sizes.md) when the goal is cropping, scale, rotation, or a specific output size.

If the form reports a missing AI connection, check the enabled API key and model in **AI & Agent**. If a selection is too large to send, use a smaller original image or use the whole-image option when suitable.

[Image album](media-image-album.md) · [Image descriptions](media-image-metadata.md)
