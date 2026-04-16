---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:18.716Z"
product_name: "Generative AI on Vertex AI"
product_slug: "generative-ai-on-vertex-ai"
feature_name: "Imagen 3 aspect ratios"
feature_slug: "imagen-3-aspect-ratios"
latest_feature_date: "2024-07-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/img-gen-prompt-guide"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/get-multimodal-embeddings"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/quickstart-image-generate-console"
keywords:
  - "imagen"
  - "aspect"
  - "ratios"
  - "supports"
  - "additional"
  - "for"
  - "generated"
  - "images"
---

# Imagen 3 aspect ratios

Product: Generative AI on Vertex AI
Coverage: MEDIUM

## Step 02 Summary

Imagen 3 supports additional aspect ratios for generated images.

## Extended Definition

Imagen 3 supports additional aspect ratios for generated images.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/img-gen-prompt-guide](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/img-gen-prompt-guide)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/get-multimodal-embeddings](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/get-multimodal-embeddings)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/quickstart-image-generate-console](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/quickstart-image-generate-console)

## Supporting Pages

### "Prompt and image attribute guide \_|\_ Generative AI on Vertex AI \_|\_\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/img-gen-prompt-guide](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/img-gen-prompt-guide)
- Source ID: `site-docs-root`
- Final score: 173
- Re-rank relevance: N/A

Evidence snippets:
- Prompt: a winning touchdown, fast shutter speed, movement tracking Model: Imagen 3 ( imagen-3.0-generate-002 ) Prompt: A deer running in the forest, fast shutter speed, movement tracking Model: Imagen 3 ( imagen-3.0-generate-002 ) Wide-angle Use case Lens type Focal lengths Additional details Astronomical, landscape (wide-angle) Wide-angle 10-24mm Long exposure times, sharp focus, long exposure, smooth water or clouds Using several keywords from the table, Imagen can generate the following wide-angle images.
- Prompt: a digital render of a massive skyscraper, modern, grand, epic with a beautiful sunset in the background (9:16 aspect ratio) Negative prompts The previous examples focus on writing prompts for what you want Imagen to create, but you can also provide a negative prompt along with the original prompt to help the product generate or edit images.
- Camera Proximity - Close up, taken from far away Prompt: A close-up photo of coffee beans Prompt: A zoomed out photo of a small bag of coffee beans in a messy kitchen Camera Position - aerial, from below Prompt: aerial photo of urban city with skyscrapers Prompt: A photo of a forest canopy with blue skies from below Lighting - natural, dramatic, warm, cold Prompt: studio photo of a modern arm chair, natural lighting Prompt: studio photo of a modern arm chair, dramatic lighting Camera Settings - motion blur, soft focus, bokeh, portrait Prompt: photo of a city with skyscrapers from the inside of a car with motion blur Prompt: soft focus photograph of a bridge in an urban city at night Lens types - 35mm, 50mm, fisheye, wide angle, macro Prompt: photo of a leaf, macro lens Prompt: street photography, new york city, fisheye lens Film types - black and white, polaroid Prompt: a polaroid portrait of a dog wearing sunglasses Prompt: black and white photo of a dog wearing sunglasses Image source: Each image was generated using its corresponding text prompt with the Imagen 3 model.
- Prompt: A woman, 35mm portrait, blue and grey duotones Model: Imagen 3 ( imagen-3.0-generate-002 ) Prompt: A woman, 35mm portrait, film noir Model: Imagen 3 ( imagen-3.0-generate-002 ) Objects Use case Lens type Focal lengths Additional details Food, insects, plants (objects, still life) Macro 60-105mm High detail, precise focusing, controlled lighting Using several keywords from the table, Imagen can generate the following object images.

### "Get multimodal embeddings \_|\_ Generative AI on Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/get-multimodal-embeddings](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/get-multimodal-embeddings)
- Source ID: `site-docs-root`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- String project = "YOUR PROJECT ID" ; String textPrompt = "YOUR TEXT PROMPT" ; String baseImagePath = "YOUR BASE IMAGE PATH" ; // Learn how to use text prompts to update an image: // https://cloud.google.com/vertex-ai/docs/generative-ai/image/edit-images Map<String , Object > parameters = new HashMap<String , Object > (); parameters . put ( "sampleCount" , 1 ); String location = "us-central1" ; String publisher = "google" ; String model = "multimodalembedding@001" ; predictImageFromImageAndText ( project , location , publisher , model , textPrompt , baseImagePath , parameters ); } // Update images using text prompts public static void predictImageFromImageAndText ( String project , String location , String publisher , String model , String textPrompt , String baseImagePath , Map<String , Object > parameters ) throws IOException { final String endpoint = String . format ( "%s-aiplatform.googleapis.com:443" , location ); final PredictionServiceSettings predictionServiceSettings = PredictionServiceSettings . newBuilder (). setEndpoint ( endpoint ). build (); // Initialize client that will be used to send requests.
- Supported models You can get multimodal embeddings by using the following models: gemini-embedding-2-preview multimodalembedding@001 Best practices Consider the following input aspects when using the multimodal embeddings model: Text in images - The model can distinguish text in images, similar to optical character recognition (OCR).
- Language English Image formats BMP, GIF, JPG, PNG Image size Base64-encoded images: 20 MB (when transcoded to PNG) Cloud Storage images: 20MB (original file format) The maximum image size accepted is 20 MB.
- You might need to perform additional setup tasks to use other Google Cloud products.

### "Generative AI glossary \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai)
- Source ID: `site-docs-root`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- This is done by transforming existing examples to create additional, varied examples, which can improve model performance, especially when the original dataset is limited. bounding box A bounding box for an object in the video frame can be specified in either of two ways (i) Using 2 vertices consisting of a set of x,y coordinates if they are diagonally opposite points of the rectangle.
- By understanding the relationships between words, generative AI models can create new content that is both coherent and relevant. zero-shot prompt (direct prompting) In generative AI, a zero-shot prompt is a prompt that enables a large language model (LLM) to perform a task without any additional training or examples.
- For deployed models, continuous monitoring and capturing of common data points and edge cases help improve future validation efforts. vector A vector refers to a numerical representation of text, images, or videos that captures relationships between inputs.
- It is also crucial in understanding experiments and debugging problems with the system. data augmentation Artificially boosting the range and number of training examples by transforming existing examples to create additional examples.

### "Generate and edit images on Vertex AI \_|\_ Generative AI on Vertex AI \_\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/quickstart-image-generate-console](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/quickstart-image-generate-console)
- Source ID: `site-docs-root`
- Final score: 125
- Re-rank relevance: N/A

Evidence snippets:
- Client () TODO(developer): Update and un-comment below line output file = "output-image.png" image = client . models . generate images ( model = "imagen-4.0-generate-001" , prompt = "A dog reading a newspaper" , config = GenerateImagesConfig ( image size = "2K" , ), ) image . generated images [ 0 ] . image . save ( output file ) print ( f "Created output image using { len ( image . generated images [ 0 ] . image . image bytes ) } bytes" ) Example response: Created output image using 1234567 bytes REST Set environment variables: export GOOGLE CLOUD PROJECT = GOOGLE CLOUD PROJECT # Replace with your Google Cloud project export GOOGLE CLOUD LOCATION = us-central1 # Replace with the appropriate location for your project Run the following: curl -X POST \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json; charset=utf-8" \ "https:// ${ GOOGLE CLOUD LOCATION } -aiplatform.googleapis.com/v1/projects/ ${ GOOGLE CLOUD PROJECT } /locations/ ${ GOOGLE CLOUD LOCATION } /publishers/google/models/imagen-4.0-generate-preview-05-20:predict" -d \ $'{ "instances": [ { "prompt": "a cat reading a book" } ], "parameters": { "sampleCount": 1 } }' The model returns a base64 image bytes object.
- Prompts for preceding images These images are generated using the general Imagen 3 image generation model ( imagen-3.0-generate-002 ) and the following prompts: Claymation scene.
- The following samples show a simplified case for generating images, but you can use additional parameters to tailor the generated images to your needs.
- Image credit: All images generated using Imagen on Vertex AI.

