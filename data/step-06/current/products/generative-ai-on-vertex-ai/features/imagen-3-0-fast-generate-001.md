---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:18.700Z"
product_name: "Generative AI on Vertex AI"
product_slug: "generative-ai-on-vertex-ai"
feature_name: "imagen-3.0-fast-generate-001"
feature_slug: "imagen-3-0-fast-generate-001"
latest_feature_date: "2024-12-10"
deprecation_date: "2026-06-30"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/content-credentials"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/quickstart-image-generate-console"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/img-gen-prompt-guide"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai"
keywords:
  - "imagen"
  - "fast"
  - "generate"
  - "001"
  - "deprecated"
  - "generation"
  - "endpoint"
  - "scheduled"
---

# imagen-3.0-fast-generate-001

Product: Generative AI on Vertex AI
Coverage: MEDIUM

## Step 02 Summary

A deprecated Imagen 3.0 fast generation endpoint scheduled for shutdown on 2026-06-30; A low-latency Imagen 3 image generation model now generally available to all users; deprecated on 2026-06-30.

## Extended Definition

A deprecated Imagen 3.0 fast generation endpoint scheduled for shutdown on 2026-06-30; A low-latency Imagen 3 image generation model now generally available to all users; deprecated on 2026-06-30.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/content-credentials](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/content-credentials)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/quickstart-image-generate-console](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/quickstart-image-generate-console)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/img-gen-prompt-guide](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/img-gen-prompt-guide)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai)

## Supporting Pages

### "Content Credentials \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/content-credentials](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/content-credentials)
- Source ID: `site-docs-root`
- Final score: 162
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- All images or videos created or modified using the listed models are automatically digitally signed by Google LLC. "Google Media Processing Services" is specified as the app or device used in the Content Credential. gemini-3.1-flash-image-preview gemini-3-pro-image-preview gemini-2.5-flash-image imagen-3.0-generate-002 imagen-3.0-generate-001 imagen-3.0-fast-generate-001 imagen-3.0-capability-001 imagen-4.0-generate-001 imagen-4.0-fast-generate-001 imagen-4.0-ultra-generate-001 virtual-try-on-001 veo-2.0-generate-001 veo-2.0-generate-exp veo-2.0-generate-preview veo-3.0-generate-preview veo-3.0-fast-generate-preview veo-3.0-generate-001 veo-3.0-fast-generate-001 veo-3.1-generate-preview veo-3.1-fast-generate-preview veo-3.1-generate-001 veo-3.1-fast-generate-001 veo-3.1-lite-generate-001 lyria-3-clip-preview lyria-3-pro-preview What's next Guide Generate and edit images with Gemini Use Gemini's image generation models (Nano Banana and Nano Banana Pro) to create and edit images.
- How to Use Content Credentials If you generate a media file, such as an image, using a supported Google model, Content Credentials are automatically added and signed by Google LLC.
- Even an AI-generated image is regarded as "authentic" if it has valid Content Credentials that describe how it was created or modified.
- For example, if you use an AI tool to generate an image, the Content Credentials will indicate that the image was AI-generated.

### "Generate and edit images on Vertex AI \_|\_ Generative AI on Vertex AI \_\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/quickstart-image-generate-console](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/quickstart-image-generate-console)
- Source ID: `site-docs-root`
- Final score: 125
- Re-rank relevance: N/A

Evidence snippets:
- Client () TODO(developer): Update and un-comment below line output file = "output-image.png" image = client . models . generate images ( model = "imagen-4.0-generate-001" , prompt = "A dog reading a newspaper" , config = GenerateImagesConfig ( image size = "2K" , ), ) image . generated images [ 0 ] . image . save ( output file ) print ( f "Created output image using { len ( image . generated images [ 0 ] . image . image bytes ) } bytes" ) Example response: Created output image using 1234567 bytes REST Set environment variables: export GOOGLE CLOUD PROJECT = GOOGLE CLOUD PROJECT # Replace with your Google Cloud project export GOOGLE CLOUD LOCATION = us-central1 # Replace with the appropriate location for your project Run the following: curl -X POST \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json; charset=utf-8" \ "https:// ${ GOOGLE CLOUD LOCATION } -aiplatform.googleapis.com/v1/projects/ ${ GOOGLE CLOUD PROJECT } /locations/ ${ GOOGLE CLOUD LOCATION } /publishers/google/models/imagen-4.0-generate-preview-05-20:predict" -d \ $'{ "instances": [ { "prompt": "a cat reading a book" } ], "parameters": { "sampleCount": 1 } }' The model returns a base64 image bytes object.
- Try image generation (Vertex AI Studio) Try Imagen in a Colab With Gemini and Imagen, you can do the following: Generate novel images using only a text prompt (text-to-image AI generation).
- Prompts for preceding images These images are generated using the general Imagen 3 image generation model ( imagen-3.0-generate-002 ) and the following prompts: Claymation scene.
- Reference: generate images Learn about optional and required fields when sending an Imagen image generation request.

### "Prompt and image attribute guide \_|\_ Generative AI on Vertex AI \_|\_\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/img-gen-prompt-guide](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/img-gen-prompt-guide)
- Source ID: `site-docs-root`
- Final score: 115
- Re-rank relevance: N/A

Evidence snippets:
- Use case Lens type Focal lengths Additional details People (portraits) Prime, zoom 24-35mm black and white film, Film noir, Depth of field, duotone (mention two colors) Food, insects, plants (objects, still life) Macro 60-105mm High detail, precise focusing, controlled lighting Sports, wildlife (motion) Telephoto zoom 100-400mm Fast shutter speed, Action or movement tracking Astronomical, landscape (wide-angle) Wide-angle 10-24mm Long exposure times, sharp focus, long exposure, smooth water or clouds Portraits Use case Lens type Focal lengths Additional details People (portraits) Prime, zoom 24-35mm black and white film, Film noir, Depth of field, duotone (mention two colors) Using several keywords from the table, Imagen can generate the following portraits.
- Prompt: an expansive mountain range, landscape wide angle 10mm Model: Imagen 3 ( imagen-3.0-generate-002 ) Prompt: a photo of the moon, astro photography, wide angle 10mm Model: Imagen 3 ( imagen-3.0-generate-002 ) What's next Read articles about Imagen and other Generative AI on Vertex AI products: A developer's guide to getting started with Imagen 3 on Vertex AI New generative media models and tools, built with and for creators New in Gemini: Custom Gems and improved image generation with Imagen 3 Google DeepMind: Imagen 3 - Our highest quality text-to-image model Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Prompt: a winning touchdown, fast shutter speed, movement tracking Model: Imagen 3 ( imagen-3.0-generate-002 ) Prompt: A deer running in the forest, fast shutter speed, movement tracking Model: Imagen 3 ( imagen-3.0-generate-002 ) Wide-angle Use case Lens type Focal lengths Additional details Astronomical, landscape (wide-angle) Wide-angle 10-24mm Long exposure times, sharp focus, long exposure, smooth water or clouds Using several keywords from the table, Imagen can generate the following wide-angle images.
- Prompt: leaf of a prayer plant, macro lens, 60mm Model: Imagen 3 ( imagen-3.0-generate-002 ) Prompt: a plate of pasta, 100mm Macro lens Model: Imagen 3 ( imagen-3.0-generate-002 ) Motion Use case Lens type Focal lengths Additional details Sports, wildlife (motion) Telephoto zoom 100-400mm Fast shutter speed, Action or movement tracking Using several keywords from the table, Imagen can generate the following motion images.

### "Generative AI glossary \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai)
- Source ID: `site-docs-root`
- Final score: 113
- Re-rank relevance: N/A

Evidence snippets:
- In the context of text generation, it's plausible-sounding random falsehoods within its generated text content. heuristic A simple and quickly implemented solution to a problem.
- Applications can utilize embeddings to process and generate language, recognizing complex meanings and semantic relationships specific to the content. embedding vector A dense, often low-dimensional, vector representation of an item such that, if two items are semantically similar, their respective embeddings are located near each other in the embedding vector space. encoder In general, any ML system that converts from a raw, sparse, or external representation into a more processed, denser, or more internal representation.
- However, for generative tasks like summarization and text generation, other metrics like Rough-L score might be more appropriate. feature In machine learning (ML), a feature is a characteristic or attribute of an instance or entity that's used as an input to train an ML model or to make inferences. feature extraction In the context of generative AI, feature extraction refers to the process of identifying and selecting relevant features from input data to be used in model training.
- In sequence-to-sequence tasks, a decoder starts with the internal state generated by the encoder to predict the next sequence. deep neural network (DNN) A neural network with multiple hidden layers, typically programmed through deep learning techniques. depth The sum of the following in a neural network: 1. the number of hidden layers 2. the number of output layers, which is typically one 3. the number of any embedding layers.

