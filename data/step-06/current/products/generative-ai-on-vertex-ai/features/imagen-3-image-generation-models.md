---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:18.716Z"
product_name: "Generative AI on Vertex AI"
product_slug: "generative-ai-on-vertex-ai"
feature_name: "Imagen 3 image generation models"
feature_slug: "imagen-3-image-generation-models"
latest_feature_date: "2024-07-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/quickstart-image-generate-console"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/faq"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/img-gen-prompt-guide"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai"
keywords:
  - "imagen"
  - "image"
  - "generation"
  - "models"
  - "the"
  - "are"
  - "generally"
  - "available"
---

# Imagen 3 image generation models

Product: Generative AI on Vertex AI
Coverage: MEDIUM

## Step 02 Summary

The Imagen 3 image generation models are generally available to approved users.

## Extended Definition

The Imagen 3 image generation models are generally available to approved users.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/quickstart-image-generate-console](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/quickstart-image-generate-console)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/faq](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/faq)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/img-gen-prompt-guide](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/img-gen-prompt-guide)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai)

## Supporting Pages

### "Generate and edit images on Vertex AI \_|\_ Generative AI on Vertex AI \_\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/quickstart-image-generate-console](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/quickstart-image-generate-console)
- Source ID: `site-docs-root`
- Final score: 224
- Re-rank relevance: N/A

Evidence snippets:
- Client () TODO(developer): Update and un-comment below line output file = "output-image.png" image = client . models . generate images ( model = "imagen-4.0-generate-001" , prompt = "A dog reading a newspaper" , config = GenerateImagesConfig ( image size = "2K" , ), ) image . generated images [ 0 ] . image . save ( output file ) print ( f "Created output image using { len ( image . generated images [ 0 ] . image . image bytes ) } bytes" ) Example response: Created output image using 1234567 bytes REST Set environment variables: export GOOGLE CLOUD PROJECT = GOOGLE CLOUD PROJECT # Replace with your Google Cloud project export GOOGLE CLOUD LOCATION = us-central1 # Replace with the appropriate location for your project Run the following: curl -X POST \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json; charset=utf-8" \ "https:// ${ GOOGLE CLOUD LOCATION } -aiplatform.googleapis.com/v1/projects/ ${ GOOGLE CLOUD PROJECT } /locations/ ${ GOOGLE CLOUD LOCATION } /publishers/google/models/imagen-4.0-generate-preview-05-20:predict" -d \ $'{ "instances": [ { "prompt": "a cat reading a book" } ], "parameters": { "sampleCount": 1 } }' The model returns a base64 image bytes object.
- Prompts for preceding images These images are generated using the general Imagen 3 image generation model ( imagen-3.0-generate-002 ) and the following prompts: Claymation scene.
- Model versions There are multiple image generation models that you can use.
- Try more examples To learn more, run the following notebooks in the environment of your choice: "Gemini 3 Pro Image Generation in Vertex AI": Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub "Gemini 2.5 Flash Image Generation in Vertex AI": Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub "Imagen 4 Image Generation": Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub "Imagen 3 Image Editing": Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub For a full list of Jupyter notebook tutorials using Imagen, see the Generative AI on Vertex AI cookbook .

### "Frequently asked questions \_|\_ Generative AI on Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/faq](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/faq)
- Source ID: `site-docs-root`
- Final score: 186
- Re-rank relevance: N/A

Evidence snippets:
- While the experimental version of Gemini 2.0 Flash supports image generation, Gemini 2 does not currently support image generation in our generally available models.
- How do the Gemini 2 models compare to the 1.5 generation?
- How does Gemini 2 image generation compare to Imagen 3?
- The following table shows the comparison between our Gemini 2 models: Model name Description Upgrade path for Gemini 2.5 Pro Strongest model quality (especially for code and world knowledge), with a 1M token-long context window Gemini 1.5 Pro users who want better quality, or who are particularly invested in long context and code Gemini 2.0 Flash Workhorse model for all daily tasks and features enhanced performance and supports real-time Live API Gemini 1.5 Flash users who want a model with significantly better quality that's slightly slower Gemini 1.5 Pro users who want slightly better quality and real-time latency Gemini 2.0 Flash-Lite Our most cost effective offering to support high throughput Gemini 1.5 Flash users who want better quality for the same price and speed Customers looking for the fastest model in the Gemini 2 family To see all benchmark capabilities for Gemini 2, visit the Google DeepMind documentation .

### "Prompt and image attribute guide \_|\_ Generative AI on Vertex AI \_|\_\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/img-gen-prompt-guide](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/img-gen-prompt-guide)
- Source ID: `site-docs-root`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- Prompt: an expansive mountain range, landscape wide angle 10mm Model: Imagen 3 ( imagen-3.0-generate-002 ) Prompt: a photo of the moon, astro photography, wide angle 10mm Model: Imagen 3 ( imagen-3.0-generate-002 ) What's next Read articles about Imagen and other Generative AI on Vertex AI products: A developer's guide to getting started with Imagen 3 on Vertex AI New generative media models and tools, built with and for creators New in Gemini: Custom Gems and improved image generation with Imagen 3 Google DeepMind: Imagen 3 - Our highest quality text-to-image model Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Prompt: A park in the spring next to a lake Prompt: A park in the spring next to a lake, the sun sets across the lake, golden hour Prompt: A park in the spring next to a lake, the sun sets across the lake, golden hour, red wildflowers Imagen 3 prompt writing View Imagen for Generation model card Imagen 3 can transform your ideas into detailed images, whether your prompts are short or long and detailed.
- The following are some ideas of historical painting or art styles that you can try. "generate an image in the style of [art period or movement] : a wind farm" Prompt: generate an image in the style of an impressionist painting : a wind farm Prompt: generate an image in the style of a renaissance painting : a wind farm Prompt: generate an image in the style of pop art : a wind farm Image source: Each image was generated using its corresponding text prompt with the Imagen 3 model.
- Camera Proximity - Close up, taken from far away Prompt: A close-up photo of coffee beans Prompt: A zoomed out photo of a small bag of coffee beans in a messy kitchen Camera Position - aerial, from below Prompt: aerial photo of urban city with skyscrapers Prompt: A photo of a forest canopy with blue skies from below Lighting - natural, dramatic, warm, cold Prompt: studio photo of a modern arm chair, natural lighting Prompt: studio photo of a modern arm chair, dramatic lighting Camera Settings - motion blur, soft focus, bokeh, portrait Prompt: photo of a city with skyscrapers from the inside of a car with motion blur Prompt: soft focus photograph of a bridge in an urban city at night Lens types - 35mm, 50mm, fisheye, wide angle, macro Prompt: photo of a leaf, macro lens Prompt: street photography, new york city, fisheye lens Film types - black and white, polaroid Prompt: a polaroid portrait of a dog wearing sunglasses Prompt: black and white photo of a dog wearing sunglasses Image source: Each image was generated using its corresponding text prompt with the Imagen 3 model.

### "Generative AI glossary \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai)
- Source ID: `site-docs-root`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- Imagen Imagen is a text-to-image generative AI service available through the Vertex AI platform.
- Examples include learning rate, dropout rate, and number of training steps. partition In Slurm, a logical grouping of nodes, often used to separate nodes with different hardware configurations. performance tier A configuration setting for a Managed Lustre instance that defines its throughput speed (in MBps per TiB) and affects its minimum and maximum capacity. perplexity Perplexity is a metric used to evaluate the performance of language models.
- Similar or related words or text tend to have similar embeddings, which means they are closer together in the high-dimensional vector space. embedding space (latent space) In Generative AI, embedding space refers to a numerical representation of text, images, or videos that captures relationships between inputs.
- Perplexity is a commonly used metric for evaluating language models and is often used to compare the performance of different models or to track the progress of a model during training. pipeline ML pipelines are portable and scalable ML workflows that are based on containers.

