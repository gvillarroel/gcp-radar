---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:18.644Z"
product_name: "Generative AI on Vertex AI"
product_slug: "generative-ai-on-vertex-ai"
feature_name: "imagen-product-recontext-preview-06-30"
feature_slug: "imagen-product-recontext-preview-06-30"
latest_feature_date: "2026-02-17"
deprecation_date: "2026-03-19"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/get-multimodal-embeddings"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/deprecations/partner-models"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/task-types"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/quickstart-image-generate-console"
keywords:
  - "imagen"
  - "product"
  - "recontext"
  - "preview"
  - "06"
  - "30"
  - "deprecated"
  - "recontextualization"
---

# imagen-product-recontext-preview-06-30

Product: Generative AI on Vertex AI
Coverage: MEDIUM

## Step 02 Summary

A deprecated Imagen product recontextualization preview endpoint scheduled for shutdown on 2026-03-19; deprecated on 2026-03-19.

## Extended Definition

A deprecated Imagen product recontextualization preview endpoint scheduled for shutdown on 2026-03-19; deprecated on 2026-03-19.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/get-multimodal-embeddings](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/get-multimodal-embeddings)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/deprecations/partner-models](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/deprecations/partner-models)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/task-types](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/task-types)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/quickstart-image-generate-console](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/quickstart-image-generate-console)

## Supporting Pages

### "Get multimodal embeddings \_|\_ Generative AI on Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/get-multimodal-embeddings](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/get-multimodal-embeddings)
- Source ID: `site-docs-root`
- Final score: 127
- Re-rank relevance: N/A

Evidence snippets:
- 128 dimensions: { "predictions": [ { "imageEmbedding": [ 0.0279239565, [...128 dimension vector...] 0.00403284049 ], "textEmbedding": [ 0.202921599, [...128 dimension vector...] -0.0365431122 ] } ], "deployedModelId": " DEPLOYED MODEL ID " } 256 dimensions: { "predictions": [ { "imageEmbedding": [ 0.248620048, [...256 dimension vector...] -0.0646447465 ], "textEmbedding": [ 0.0757875815, [...256 dimension vector...] -0.02749932 ] } ], "deployedModelId": " DEPLOYED MODEL ID " } 512 dimensions: { "predictions": [ { "imageEmbedding": [ -0.0523675755, [...512 dimension vector...] -0.0444030389 ], "textEmbedding": [ -0.0592851527, [...512 dimension vector...] 0.0350437127 ] } ], "deployedModelId": " DEPLOYED MODEL ID " } Python import vertexai from vertexai.vision models import Image , MultiModalEmbeddingModel TODO(developer): Update & uncomment line below PROJECT ID = "your-project-id" vertexai . init ( project = PROJECT ID , location = "us-central1" ) TODO(developer): Try different dimenions: 128, 256, 512, 1408 embedding dimension = 128 model = MultiModalEmbeddingModel . from pretrained ( "multimodalembedding@001" ) image = Image . load from file ( "gs://cloud-samples-data/vertex-ai/llm/prompts/landmark1.png" ) embeddings = model . get embeddings ( image = image , contextual text = "Colosseum" , dimension = embedding dimension , ) print ( f "Image Embedding: { embeddings . image embedding } " ) print ( f "Text Embedding: { embeddings . text embedding } " ) Example response: Image Embedding: [0.0622573346, -0.0406507477, 0.0260440577, ...] Text Embedding: [0.27469793, -0.146258667, 0.0222803634, ...] Go import ( "context" "encoding/json" "fmt" "io" aiplatform "cloud.google.com/go/aiplatform/apiv1beta1" aiplatformpb "cloud.google.com/go/aiplatform/apiv1beta1/aiplatformpb" "google.golang.org/api/option" "google.golang.org/protobuf/encoding/protojson" "google.golang.org/protobuf/types/known/structpb" ) // generateWithLowerDimension shows how to generate lower-dimensional embeddings for text and image inputs. func generateWithLowerDimension ( w io .
- Response (7 second video, no videoSegmentConfig specified): { "predictions": [ { "videoEmbeddings": [ { "endOffsetSec": 7, "embedding": [ -0.0045467657, 0.0258095954, 0.0146885719, 0.00945400633, [...] -0.0023291884, -0.00493789, 0.00975185353, 0.0168156829 ], "startOffsetSec": 0 } ] } ], "deployedModelId": " DEPLOYED MODEL ID " } Response (59 second video, with the following video segment config: "videoSegmentConfig": { "startOffsetSec": 0, "endOffsetSec": 60, "intervalSec": 10 } ): { "predictions": [ { "videoEmbeddings": [ { "endOffsetSec": 10, "startOffsetSec": 0, "embedding": [ -0.00683252793, 0.0390476175, [...] 0.00657121744, 0.013023301 ] }, { "startOffsetSec": 10, "endOffsetSec": 20, "embedding": [ -0.0104404651, 0.0357737206, [...] 0.00509833824, 0.0131902946 ] }, { "startOffsetSec": 20, "embedding": [ -0.0113538112, 0.0305239167, [...] -0.00195809244, 0.00941874553 ], "endOffsetSec": 30 }, { "embedding": [ -0.00299320649, 0.0322436653, [...] -0.00993082579, 0.00968887936 ], "startOffsetSec": 30, "endOffsetSec": 40 }, { "endOffsetSec": 50, "startOffsetSec": 40, "embedding": [ -0.00591270532, 0.0368893594, [...] -0.00219071587, 0.0042470959 ] }, { "embedding": [ -0.00458270218, 0.0368121453, [...] -0.00317760976, 0.00595594104 ], "endOffsetSec": 59, "startOffsetSec": 50 } ] } ], "deployedModelId": " DEPLOYED MODEL ID " } Python To learn how to install or update the Vertex AI SDK for Python, see Install the Vertex AI SDK for Python .
- The following sample response is shortened for space. { "predictions": [ { "textEmbedding": [ 0.0105433334, -0.00302835181, 0.00656806398, 0.00603460241, [...] 0.00445805816, 0.0139605571, -0.00170318608, -0.00490092579 ], "videoEmbeddings": [ { "startOffsetSec": 0, "endOffsetSec": 7, "embedding": [ -0.00673126569, 0.0248149596, 0.0128901172, 0.0107588246, [...] -0.00180952181, -0.0054573305, 0.0117037306, 0.0169312079 ] } ], "imageEmbedding": [ -0.00728622358, 0.031021487, -0.00206603738, 0.0273937676, [...] -0.00204976718, 0.00321615417, 0.0121978866, 0.0193375275 ] } ], "deployedModelId": " DEPLOYED MODEL ID " } Python To learn how to install or update the Vertex AI SDK for Python, see Install the Vertex AI SDK for Python .
- The following table illustrates the default and available lower dimensions available for each model: Model Default dimensions (highest) Supported dimensions (range) Recommended lower dimensions gemini-embedding-2-preview 3072 128 to 3072 128, 768 or 1536 multimodalembedding@001 1408 128 to 1408 128, 256, or 512 Use the following samples to generate embeddings with lower dimensions: REST Lower dimensions can be accessed by adding the parameters.dimension field.

### "Model deprecations (MaaS) \_|\_ Generative AI on Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/deprecations/partner-models](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/deprecations/partner-models)
- Source ID: `site-docs-root`
- Final score: 87
- Re-rank relevance: N/A

Evidence snippets:
- Model ID claude-3-7-sonnet Launch stage deprecated Supported inputs & outputs Inputs: Text , Code , Images Outputs: Text Token limits Maximum input tokens: 200,000 Maximum output tokens: 128,000 Capabilities Supported Batch predictions Prompt caching Function calling Count tokens Not supported Extended thinking Usage types Supported Fixed quota Provisioned Throughput Not supported Technical specifications Images Limitation and specifications: See Vision in Anthropic's documentation Documents Limitation and specifications: See PDF support in Anthropic's documentation Knowledge cutoff date November 2024 Versions claude-3-7-sonnet Launch stage: Deprecated Release date: March 20, 2025 Supported regions Model availability (Includes fixed quota & Provisioned Throughput) United States us-east5 Europe europe-west1 Global global endpoint ML processing United States Multi-region Europe Multi-region Quota limits us-east5: QPM: 55 TPM: 500,000 ( uncached input and output) Context length: 200,000 europe-west1: QPM: 40 TPM: 300,000 ( uncached input and output) Context length: 200,000 global endpoint: QPM: 35 TPM: 300,000 ( uncached input and output) Context length: 200,000 Pricing See Pricing .
- Claude 3 Opus Anthropic's Claude 3 Opus is deprecated as of June 30, 2025 and will be shut down on August 1, 2025 .
- Model ID claude-3-5-sonnet Launch stage GA Supported inputs & outputs Inputs: Text , Code , Images Outputs: Text Token limits Maximum input tokens: 200,000 Maximum output tokens: 8,000 Capabilities Supported Prompt caching Function calling Count tokens Not supported Batch predictions Extended thinking Usage types Supported Fixed quota Provisioned Throughput Not supported Technical specifications Images Limitation and specifications: See Vision in Anthropic's documentation Documents Limitation and specifications: See PDF support in Anthropic's documentation Knowledge cutoff date April 2024 Versions claude-3-5-sonnet Launch stage: Generally available Release date: June 20, 2024 Supported regions Model availability (Includes fixed quota & Provisioned Throughput) United States us-east5 Europe europe-west1 Asia Pacific asia-southeast1 ML processing United States Multi-region Europe Multi-region Asia Pacific asia-southeast1 Quota limits us-east5: QPM: 80 TPM: 350,000 (input and output) Context length: 200,000 europe-west1: QPM: 130 TPM: 600,000 (input and output) Context length: 200,000 asia-southeast1: QPM: 35 TPM: 150,000 (input and output) Context length: 200,000 Pricing See Pricing .
- Model ID claude-3-haiku Launch stage deprecated Supported inputs & outputs Inputs: Text , Code , Images Outputs: Text Token limits Maximum input tokens: 200,000 Maximum output tokens: 8,000 Capabilities Supported Prompt caching Function calling Count tokens Not supported Batch predictions Extended thinking Usage types Supported Fixed quota Provisioned Throughput Not supported Technical specifications Images Limitation and specifications: See Vision in Anthropic's documentation Documents Limitation and specifications: See PDF support in Anthropic's documentation Knowledge cutoff date August 2023 Versions claude-3-haiku Launch stage: Deprecated Release date: March 19, 2024 Supported regions Model availability (Includes fixed quota & Provisioned Throughput) United States us-east5 Europe europe-west1 Asia Pacific asia-southeast1 ML processing United States Multi-region Europe Multi-region Asia Pacific asia-southeast1 Quota limits us-east5: QPM: 245 TPM: 600,000 (input and output) Context length: 200,000 europe-west1: QPM: 75 TPM: 181,000 (input and output) Context length: 200,000 asia-southeast1: QPM: 70 TPM: 174,000 (input and output) Context length: 200,000 Pricing See Pricing .

### "Choose an embeddings task type \_|\_ Generative AI on Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/task-types](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/task-types)
- Source ID: `site-docs-root`
- Final score: 74
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see the Python API reference documentation . from vertexai.language models import TextEmbeddingInput , TextEmbeddingModel MODEL NAME = "gemini-embedding-001" DIMENSIONALITY = 3072 def embed text ( texts : list [ str ] = [ "Retrieve a function that adds two numbers" ], task : str = "CODE RETRIEVAL QUERY" , model name : str = "gemini-embedding-001" , dimensionality : int None = 3072 , ) - > list [ list [ float ]]: """Embeds texts with a pre-trained, foundational model.""" model = TextEmbeddingModel . from pretrained ( model name ) kwargs = dict ( output dimensionality = dimensionality ) if dimensionality else {} embeddings = [] gemini-embedding-001 takes one input at a time for text in texts : text input = TextEmbeddingInput ( text , task ) embedding = model . get embeddings ([ text input ], kwargs ) print ( embedding ) Example response: [[0.006135190837085247, -0.01462465338408947, 0.004978656303137541, ...]] embeddings . append ( embedding [ 0 ] . values ) return embeddings if name == " main " : Embeds code block with a pre-trained, foundational model.
- The following limitations apply when using these models: Don't use these preview models on mission critical or production systems.
- Consider the following real-world scenarios where assessing input similarity would be useful: For a recommendation system, you want to identify items (e.g., products, articles, movies) that are semantically similar to a user's preferred items, providing personalized recommendations and enhancing user satisfaction.
- Consider the following real-world scenario where retrieval queries would be useful: For an ecommerce platform, you want to use embeddings to enable users to search for products using both text queries and images, providing a more intuitive and engaging shopping experience.

### "Generate and edit images on Vertex AI \_|\_ Generative AI on Vertex AI \_\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/quickstart-image-generate-console](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/quickstart-image-generate-console)
- Source ID: `site-docs-root`
- Final score: 74
- Re-rank relevance: N/A

Evidence snippets:
- Client () TODO(developer): Update and un-comment below line output file = "output-image.png" image = client . models . generate images ( model = "imagen-4.0-generate-001" , prompt = "A dog reading a newspaper" , config = GenerateImagesConfig ( image size = "2K" , ), ) image . generated images [ 0 ] . image . save ( output file ) print ( f "Created output image using { len ( image . generated images [ 0 ] . image . image bytes ) } bytes" ) Example response: Created output image using 1234567 bytes REST Set environment variables: export GOOGLE CLOUD PROJECT = GOOGLE CLOUD PROJECT # Replace with your Google Cloud project export GOOGLE CLOUD LOCATION = us-central1 # Replace with the appropriate location for your project Run the following: curl -X POST \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json; charset=utf-8" \ "https:// ${ GOOGLE CLOUD LOCATION } -aiplatform.googleapis.com/v1/projects/ ${ GOOGLE CLOUD PROJECT } /locations/ ${ GOOGLE CLOUD LOCATION } /publishers/google/models/imagen-4.0-generate-preview-05-20:predict" -d \ $'{ "instances": [ { "prompt": "a cat reading a book" } ], "parameters": { "sampleCount": 1 } }' The model returns a base64 image bytes object.
- With Gemini and Imagen on Vertex AI on Vertex AI, application developers can build next-generation AI products that transform their user's imagination into high-quality visual assets using AI generation, in seconds.
- Try more examples To learn more, run the following notebooks in the environment of your choice: "Gemini 3 Pro Image Generation in Vertex AI": Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub "Gemini 2.5 Flash Image Generation in Vertex AI": Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub "Imagen 4 Image Generation": Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub "Imagen 3 Image Editing": Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub For a full list of Jupyter notebook tutorials using Imagen, see the Generative AI on Vertex AI cookbook .
- Try image generation (Vertex AI Studio) Try Imagen in a Colab With Gemini and Imagen, you can do the following: Generate novel images using only a text prompt (text-to-image AI generation).

