---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:18.640Z"
product_name: "Generative AI on Vertex AI"
product_slug: "generative-ai-on-vertex-ai"
feature_name: "Gemini 3.1 Flash Image"
feature_slug: "gemini-3-1-flash-image"
latest_feature_date: "2026-02-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/quickstart-image-generate-console"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-search"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/img-gen-prompt-guide"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/faq"
keywords:
  - "gemini"
  - "flash"
  - "image"
  - "an"
  - "generation"
  - "model"
  - "with"
  - "improved"
---

# Gemini 3.1 Flash Image

Product: Generative AI on Vertex AI
Coverage: MEDIUM

## Step 02 Summary

An image generation model with improved pricing and latency.

## Extended Definition

An image generation model with improved pricing and latency.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/quickstart-image-generate-console](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/quickstart-image-generate-console)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-search](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-search)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/img-gen-prompt-guide](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/img-gen-prompt-guide)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/faq](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/faq)

## Supporting Pages

### "Generate and edit images on Vertex AI \_|\_ Generative AI on Vertex AI \_\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/quickstart-image-generate-console](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/quickstart-image-generate-console)
- Source ID: `site-docs-root`
- Final score: 225
- Re-rank relevance: N/A

Evidence snippets:
- With Gemini and Imagen on Vertex AI on Vertex AI, application developers can build next-generation AI products that transform their user's imagination into high-quality visual assets using AI generation, in seconds.
- Try image generation (Vertex AI Studio) Try Imagen in a Colab With Gemini and Imagen, you can do the following: Generate novel images using only a text prompt (text-to-image AI generation).
- When to use Gemini or Imagen on Vertex AI In addition to using Gemini's built-in image generation capabilities, you can also access Imagen , our specialized image generation model.
- Client () TODO(developer): Update and un-comment below line output file = "output-image.png" image = client . models . generate images ( model = "imagen-4.0-generate-001" , prompt = "A dog reading a newspaper" , config = GenerateImagesConfig ( image size = "2K" , ), ) image . generated images [ 0 ] . image . save ( output file ) print ( f "Created output image using { len ( image . generated images [ 0 ] . image . image bytes ) } bytes" ) Example response: Created output image using 1234567 bytes REST Set environment variables: export GOOGLE CLOUD PROJECT = GOOGLE CLOUD PROJECT # Replace with your Google Cloud project export GOOGLE CLOUD LOCATION = us-central1 # Replace with the appropriate location for your project Run the following: curl -X POST \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json; charset=utf-8" \ "https:// ${ GOOGLE CLOUD LOCATION } -aiplatform.googleapis.com/v1/projects/ ${ GOOGLE CLOUD PROJECT } /locations/ ${ GOOGLE CLOUD LOCATION } /publishers/google/models/imagen-4.0-generate-preview-05-20:predict" -d \ $'{ "instances": [ { "prompt": "a cat reading a book" } ], "parameters": { "sampleCount": 1 } }' The model returns a base64 image bytes object.

### "Grounding with Google Search \_|\_ Generative AI on Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-search](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-search)
- Source ID: `site-docs-root`
- Final score: 221
- Re-rank relevance: N/A

Evidence snippets:
- There is a slight chance of rain on both days.\n" } ] }, "finishReason": "STOP", "groundingMetadata": { "webSearchQueries": [ "weather in Chicago this weekend" ], "searchEntryPoint": { "renderedContent": "..." }, "groundingChunks": [ { "web": { "uri": "https://www.google.com/search?q=weather+in+Chicago,+IL", "title": "Weather information for locality: Chicago, administrative area: IL", "domain": "google.com" } }, { "web": { "uri": "...", "title": "weatherbug.com", "domain": "weatherbug.com" } } ], "groundingSupports": [ { "segment": { "startIndex": 85, "endIndex": 214, "text": "The temperature will be between 49°F (9°C) and 55°F (13°C) on Saturday and between 51°F (11°C) and 56°F (13°C) on Sunday." }, "groundingChunkIndices": [ 0 ], "confidenceScores": [ 0.8662828 ] }, { "segment": { "startIndex": 215, "endIndex": 261, "text": "There is a slight chance of rain on both days." }, "groundingChunkIndices": [ 1, 0 ], "confidenceScores": [ 0.62836814, 0.6488607 ] } ], "retrievalMetadata": {} } } ], "usageMetadata": { "promptTokenCount": 10, "candidatesTokenCount": 98, "totalTokenCount": 108, "trafficType": "ON DEMAND", "promptTokensDetails": [ { "modality": "TEXT", "tokenCount": 10 } ], "candidatesTokensDetails": [ { "modality": "TEXT", "tokenCount": 98 } ] }, "modelVersion": "gemini-2.0-flash", "createTime": "2025-05-19T14:42:55.000643Z", "responseId": "b0MraIMFoqnf-Q-D66G4BQ" } Grounding with Google Image Search Preview This product or feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- Grounding with Google Image Search is available in Preview only for the Gemini 3.1 Flash Image model .
- GOOGLE CLOUD LOCATION 'global' ; async function generateGoogleSearch ( projectId = GOOGLE CLOUD PROJECT , location = GOOGLE CLOUD LOCATION ) { const client = new GoogleGenAI ({ vertexai : true , project : projectId , location : location , }); const response = await client . models . generateContent ({ model : 'gemini-2.5-flash' , contents : 'When is the next total solar eclipse in the United States?' , config : { tools : [ { googleSearch : {}, }, ], }, }); console . log ( response . text ); // Example response : // 'The next total solar eclipse in United States will occur on ...' return response . text ; } REST Before using any of the request data, make the following replacements: LOCATION : The region to process the request.
- HTTP method and URL: POST https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /publishers/google/models/ MODEL ID :generateContent Request JSON body: { "contents": [ { "role": "user", "parts": [ { "text": " SEARCH TERM " } ] } ], "tools": [ { "googleSearch": { "searchTypes": { "imageSearch": {}, "webSearch": {} } } } ], "model": "projects/ PROJECT ID /locations/ LOCATION /publishers/google/models/ MODEL ID " } To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

### "Prompt and image attribute guide \_|\_ Generative AI on Vertex AI \_|\_\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/img-gen-prompt-guide](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/img-gen-prompt-guide)
- Source ID: `site-docs-root`
- Final score: 202
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Prompt: an expansive mountain range, landscape wide angle 10mm Model: Imagen 3 ( imagen-3.0-generate-002 ) Prompt: a photo of the moon, astro photography, wide angle 10mm Model: Imagen 3 ( imagen-3.0-generate-002 ) What's next Read articles about Imagen and other Generative AI on Vertex AI products: A developer's guide to getting started with Imagen 3 on Vertex AI New generative media models and tools, built with and for creators New in Gemini: Custom Gems and improved image generation with Imagen 3 Google DeepMind: Imagen 3 - Our highest quality text-to-image model Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Camera Proximity - Close up, taken from far away Prompt: A close-up photo of coffee beans Prompt: A zoomed out photo of a small bag of coffee beans in a messy kitchen Camera Position - aerial, from below Prompt: aerial photo of urban city with skyscrapers Prompt: A photo of a forest canopy with blue skies from below Lighting - natural, dramatic, warm, cold Prompt: studio photo of a modern arm chair, natural lighting Prompt: studio photo of a modern arm chair, dramatic lighting Camera Settings - motion blur, soft focus, bokeh, portrait Prompt: photo of a city with skyscrapers from the inside of a car with motion blur Prompt: soft focus photograph of a bridge in an urban city at night Lens types - 35mm, 50mm, fisheye, wide angle, macro Prompt: photo of a leaf, macro lens Prompt: street photography, new york city, fisheye lens Film types - black and white, polaroid Prompt: a polaroid portrait of a dog wearing sunglasses Prompt: black and white photo of a dog wearing sunglasses Image source: Each image was generated using its corresponding text prompt with the Imagen 3 model.
- Prompt (no negative prompt): 4K video game concept art, urban jungle, cyberpunk city, detailed rendering Prompt: 4K video game concept art, urban jungle, cyberpunk city, detailed rendering Negative prompt: greenery, plants, forest, trees Prompt (no negative prompt): Illustration of a mythical wyvern flying over mountains Prompt: Illustration of a mythical wyvern flying over mountains Negative prompt: snow, frost Photorealistic images Different versions of the image generation model might offer a mix of artistic and photorealistic output.
- The following are some ideas of historical painting or art styles that you can try. "generate an image in the style of [art period or movement] : a wind farm" Prompt: generate an image in the style of an impressionist painting : a wind farm Prompt: generate an image in the style of a renaissance painting : a wind farm Prompt: generate an image in the style of pop art : a wind farm Image source: Each image was generated using its corresponding text prompt with the Imagen 3 model.

### "Frequently asked questions \_|\_ Generative AI on Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/faq](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/faq)
- Source ID: `site-docs-root`
- Final score: 197
- Re-rank relevance: N/A

Evidence snippets:
- The following table shows the comparison between our Gemini 2 models: Model name Description Upgrade path for Gemini 2.5 Pro Strongest model quality (especially for code and world knowledge), with a 1M token-long context window Gemini 1.5 Pro users who want better quality, or who are particularly invested in long context and code Gemini 2.0 Flash Workhorse model for all daily tasks and features enhanced performance and supports real-time Live API Gemini 1.5 Flash users who want a model with significantly better quality that's slightly slower Gemini 1.5 Pro users who want slightly better quality and real-time latency Gemini 2.0 Flash-Lite Our most cost effective offering to support high throughput Gemini 1.5 Flash users who want better quality for the same price and speed Customers looking for the fastest model in the Gemini 2 family To see all benchmark capabilities for Gemini 2, visit the Google DeepMind documentation .
- The Gemini 2 models feature the following upgrades over our 1.5 models: Improved multilingual capabilities: Gemini 2 models show strong advancements in multilingual understanding, with increased scores in the Global MMLU (Lite) benchmark.
- While the experimental version of Gemini 2.0 Flash supports image generation, Gemini 2 does not currently support image generation in our generally available models.
- This powerful model offers high-quality images, low-latency generation, and flexible editing options.

