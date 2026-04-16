---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:18.730Z"
product_name: "Generative AI on Vertex AI"
product_slug: "generative-ai-on-vertex-ai"
feature_name: "SynthID digital watermark"
feature_slug: "synthid-digital-watermark"
latest_feature_date: "2024-04-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/quickstart-image-generate-console"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/img-gen-prompt-guide"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/content-credentials"
keywords:
  - "synthid"
  - "digital"
  - "watermark"
  - "imagen"
  - "imagegeneration"
  - "006"
  - "enables"
  - "the"
---

# SynthID digital watermark

Product: Generative AI on Vertex AI
Coverage: MEDIUM

## Step 02 Summary

Imagen 2 imagegeneration@006 enables the SynthID digital watermark by default.

## Extended Definition

Imagen 2 imagegeneration@006 enables the SynthID digital watermark by default.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/quickstart-image-generate-console](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/quickstart-image-generate-console)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/img-gen-prompt-guide](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/img-gen-prompt-guide)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/content-credentials](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/content-credentials)

## Supporting Pages

### "Generative AI glossary \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai)
- Source ID: `site-docs-root`
- Final score: 73
- Re-rank relevance: N/A

Evidence snippets:
- The digital content should be tracked to the movement of the camera or glasses (depending on how the scene is rendered) so that it appears as if it is part of the real world. authentication The process of verifying the identity of a client (which might be a user or another process) for the purposes of gaining access to a secured system.
- By understanding the relationships between words, generative AI models can create new content that is both coherent and relevant. zero-shot prompt (direct prompting) In generative AI, a zero-shot prompt is a prompt that enables a large language model (LLM) to perform a task without any additional training or examples.
- This process is also known as "operationalizing a machine learning model" or "putting a machine learning model into production." Inference is an important step in the machine learning workflow, since it enables models to be used to make inferences on new data.
- Augmented Reality (AR) Blending rendered digital content with real-world content, either via a display such as in a phone or as an overlay to the world seen through optics like glasses.

### "Generate and edit images on Vertex AI \_|\_ Generative AI on Vertex AI \_\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/quickstart-image-generate-console](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/quickstart-image-generate-console)
- Source ID: `site-docs-root`
- Final score: 69
- Re-rank relevance: N/A

Evidence snippets:
- Client () TODO(developer): Update and un-comment below line output file = "output-image.png" image = client . models . generate images ( model = "imagen-4.0-generate-001" , prompt = "A dog reading a newspaper" , config = GenerateImagesConfig ( image size = "2K" , ), ) image . generated images [ 0 ] . image . save ( output file ) print ( f "Created output image using { len ( image . generated images [ 0 ] . image . image bytes ) } bytes" ) Example response: Created output image using 1234567 bytes REST Set environment variables: export GOOGLE CLOUD PROJECT = GOOGLE CLOUD PROJECT # Replace with your Google Cloud project export GOOGLE CLOUD LOCATION = us-central1 # Replace with the appropriate location for your project Run the following: curl -X POST \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json; charset=utf-8" \ "https:// ${ GOOGLE CLOUD LOCATION } -aiplatform.googleapis.com/v1/projects/ ${ GOOGLE CLOUD PROJECT } /locations/ ${ GOOGLE CLOUD LOCATION } /publishers/google/models/imagen-4.0-generate-preview-05-20:predict" -d \ $'{ "instances": [ { "prompt": "a cat reading a book" } ], "parameters": { "sampleCount": 1 } }' The model returns a base64 image bytes object.
- Try more examples To learn more, run the following notebooks in the environment of your choice: "Gemini 3 Pro Image Generation in Vertex AI": Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub "Gemini 2.5 Flash Image Generation in Vertex AI": Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub "Imagen 4 Image Generation": Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub "Imagen 3 Image Editing": Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub For a full list of Jupyter notebook tutorials using Imagen, see the Generative AI on Vertex AI cookbook .
- With Gemini and Imagen on Vertex AI on Vertex AI, application developers can build next-generation AI products that transform their user's imagination into high-quality visual assets using AI generation, in seconds.
- Try image generation (Vertex AI Studio) Try Imagen in a Colab With Gemini and Imagen, you can do the following: Generate novel images using only a text prompt (text-to-image AI generation).

### "Prompt and image attribute guide \_|\_ Generative AI on Vertex AI \_|\_\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/img-gen-prompt-guide](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/img-gen-prompt-guide)
- Source ID: `site-docs-root`
- Final score: 69
- Re-rank relevance: N/A

Evidence snippets:
- Prompt: a digital render of a massive skyscraper, modern, grand, epic with a beautiful sunset in the background (9:16 aspect ratio) Negative prompts The previous examples focus on writing prompts for what you want Imagen to create, but you can also provide a negative prompt along with the original prompt to help the product generate or edit images.
- Camera Proximity - Close up, taken from far away Prompt: A close-up photo of coffee beans Prompt: A zoomed out photo of a small bag of coffee beans in a messy kitchen Camera Position - aerial, from below Prompt: aerial photo of urban city with skyscrapers Prompt: A photo of a forest canopy with blue skies from below Lighting - natural, dramatic, warm, cold Prompt: studio photo of a modern arm chair, natural lighting Prompt: studio photo of a modern arm chair, dramatic lighting Camera Settings - motion blur, soft focus, bokeh, portrait Prompt: photo of a city with skyscrapers from the inside of a car with motion blur Prompt: soft focus photograph of a bridge in an urban city at night Lens types - 35mm, 50mm, fisheye, wide angle, macro Prompt: photo of a leaf, macro lens Prompt: street photography, new york city, fisheye lens Film types - black and white, polaroid Prompt: a polaroid portrait of a dog wearing sunglasses Prompt: black and white photo of a dog wearing sunglasses Image source: Each image was generated using its corresponding text prompt with the Imagen 3 model.
- Use case Lens type Focal lengths Additional details People (portraits) Prime, zoom 24-35mm black and white film, Film noir, Depth of field, duotone (mention two colors) Food, insects, plants (objects, still life) Macro 60-105mm High detail, precise focusing, controlled lighting Sports, wildlife (motion) Telephoto zoom 100-400mm Fast shutter speed, Action or movement tracking Astronomical, landscape (wide-angle) Wide-angle 10-24mm Long exposure times, sharp focus, long exposure, smooth water or clouds Portraits Use case Lens type Focal lengths Additional details People (portraits) Prime, zoom 24-35mm black and white film, Film noir, Depth of field, duotone (mention two colors) Using several keywords from the table, Imagen can generate the following portraits.
- Prompt: an expansive mountain range, landscape wide angle 10mm Model: Imagen 3 ( imagen-3.0-generate-002 ) Prompt: a photo of the moon, astro photography, wide angle 10mm Model: Imagen 3 ( imagen-3.0-generate-002 ) What's next Read articles about Imagen and other Generative AI on Vertex AI products: A developer's guide to getting started with Imagen 3 on Vertex AI New generative media models and tools, built with and for creators New in Gemini: Custom Gems and improved image generation with Imagen 3 Google DeepMind: Imagen 3 - Our highest quality text-to-image model Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "Content Credentials \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/content-credentials](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/content-credentials)
- Source ID: `site-docs-root`
- Final score: 61
- Re-rank relevance: N/A

Evidence snippets:
- All images or videos created or modified using the listed models are automatically digitally signed by Google LLC. "Google Media Processing Services" is specified as the app or device used in the Content Credential. gemini-3.1-flash-image-preview gemini-3-pro-image-preview gemini-2.5-flash-image imagen-3.0-generate-002 imagen-3.0-generate-001 imagen-3.0-fast-generate-001 imagen-3.0-capability-001 imagen-4.0-generate-001 imagen-4.0-fast-generate-001 imagen-4.0-ultra-generate-001 virtual-try-on-001 veo-2.0-generate-001 veo-2.0-generate-exp veo-2.0-generate-preview veo-3.0-generate-preview veo-3.0-fast-generate-preview veo-3.0-generate-001 veo-3.0-fast-generate-001 veo-3.1-generate-preview veo-3.1-fast-generate-preview veo-3.1-generate-001 veo-3.1-fast-generate-001 veo-3.1-lite-generate-001 lyria-3-clip-preview lyria-3-pro-preview What's next Guide Generate and edit images with Gemini Use Gemini's image generation models (Nano Banana and Nano Banana Pro) to create and edit images.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]
- On the other hand, if you're viewing a file with Content Credentials in a C2PA-compatible application, you can view the file's history, such as the device, app, or service used to create and edit the file.
- Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

