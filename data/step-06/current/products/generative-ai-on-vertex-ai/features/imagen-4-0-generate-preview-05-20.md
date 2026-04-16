---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:18.643Z"
product_name: "Generative AI on Vertex AI"
product_slug: "generative-ai-on-vertex-ai"
feature_name: "imagen-4.0-generate-preview-05-20"
feature_slug: "imagen-4-0-generate-preview-05-20"
latest_feature_date: "2026-02-17"
deprecation_date: "2026-03-19"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/quickstart-image-generate-console"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/get-multimodal-embeddings"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/quickstarts/quickstart-multimodal"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/flex-paygo"
keywords:
  - "imagen"
  - "generate"
  - "preview"
  - "05"
  - "20"
  - "deprecated"
  - "generation"
  - "endpoint"
---

# imagen-4.0-generate-preview-05-20

Product: Generative AI on Vertex AI
Coverage: MEDIUM

## Step 02 Summary

A deprecated Imagen 4.0 generation preview endpoint scheduled for shutdown on 2026-03-19; deprecated on 2026-03-19.

## Extended Definition

A deprecated Imagen 4.0 generation preview endpoint scheduled for shutdown on 2026-03-19; deprecated on 2026-03-19.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/quickstart-image-generate-console](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/quickstart-image-generate-console)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/get-multimodal-embeddings](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/get-multimodal-embeddings)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/quickstarts/quickstart-multimodal](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/quickstarts/quickstart-multimodal)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/flex-paygo](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/flex-paygo)

## Supporting Pages

### "Generate and edit images on Vertex AI \_|\_ Generative AI on Vertex AI \_\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/quickstart-image-generate-console](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/quickstart-image-generate-console)
- Source ID: `site-docs-root`
- Final score: 187
- Re-rank relevance: N/A

Evidence snippets:
- Client () TODO(developer): Update and un-comment below line output file = "output-image.png" image = client . models . generate images ( model = "imagen-4.0-generate-001" , prompt = "A dog reading a newspaper" , config = GenerateImagesConfig ( image size = "2K" , ), ) image . generated images [ 0 ] . image . save ( output file ) print ( f "Created output image using { len ( image . generated images [ 0 ] . image . image bytes ) } bytes" ) Example response: Created output image using 1234567 bytes REST Set environment variables: export GOOGLE CLOUD PROJECT = GOOGLE CLOUD PROJECT # Replace with your Google Cloud project export GOOGLE CLOUD LOCATION = us-central1 # Replace with the appropriate location for your project Run the following: curl -X POST \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json; charset=utf-8" \ "https:// ${ GOOGLE CLOUD LOCATION } -aiplatform.googleapis.com/v1/projects/ ${ GOOGLE CLOUD PROJECT } /locations/ ${ GOOGLE CLOUD LOCATION } /publishers/google/models/imagen-4.0-generate-preview-05-20:predict" -d \ $'{ "instances": [ { "prompt": "a cat reading a book" } ], "parameters": { "sampleCount": 1 } }' The model returns a base64 image bytes object.
- Try image generation (Vertex AI Studio) Try Imagen in a Colab With Gemini and Imagen, you can do the following: Generate novel images using only a text prompt (text-to-image AI generation).
- Prompts for preceding images These images are generated using the general Imagen 3 image generation model ( imagen-3.0-generate-002 ) and the following prompts: Claymation scene.
- Reference: generate images Learn about optional and required fields when sending an Imagen image generation request.

### "Get multimodal embeddings \_|\_ Generative AI on Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/get-multimodal-embeddings](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/get-multimodal-embeddings)
- Source ID: `site-docs-root`
- Final score: 151
- Re-rank relevance: N/A

Evidence snippets:
- 128 dimensions: { "predictions": [ { "imageEmbedding": [ 0.0279239565, [...128 dimension vector...] 0.00403284049 ], "textEmbedding": [ 0.202921599, [...128 dimension vector...] -0.0365431122 ] } ], "deployedModelId": " DEPLOYED MODEL ID " } 256 dimensions: { "predictions": [ { "imageEmbedding": [ 0.248620048, [...256 dimension vector...] -0.0646447465 ], "textEmbedding": [ 0.0757875815, [...256 dimension vector...] -0.02749932 ] } ], "deployedModelId": " DEPLOYED MODEL ID " } 512 dimensions: { "predictions": [ { "imageEmbedding": [ -0.0523675755, [...512 dimension vector...] -0.0444030389 ], "textEmbedding": [ -0.0592851527, [...512 dimension vector...] 0.0350437127 ] } ], "deployedModelId": " DEPLOYED MODEL ID " } Python import vertexai from vertexai.vision models import Image , MultiModalEmbeddingModel TODO(developer): Update & uncomment line below PROJECT ID = "your-project-id" vertexai . init ( project = PROJECT ID , location = "us-central1" ) TODO(developer): Try different dimenions: 128, 256, 512, 1408 embedding dimension = 128 model = MultiModalEmbeddingModel . from pretrained ( "multimodalembedding@001" ) image = Image . load from file ( "gs://cloud-samples-data/vertex-ai/llm/prompts/landmark1.png" ) embeddings = model . get embeddings ( image = image , contextual text = "Colosseum" , dimension = embedding dimension , ) print ( f "Image Embedding: { embeddings . image embedding } " ) print ( f "Text Embedding: { embeddings . text embedding } " ) Example response: Image Embedding: [0.0622573346, -0.0406507477, 0.0260440577, ...] Text Embedding: [0.27469793, -0.146258667, 0.0222803634, ...] Go import ( "context" "encoding/json" "fmt" "io" aiplatform "cloud.google.com/go/aiplatform/apiv1beta1" aiplatformpb "cloud.google.com/go/aiplatform/apiv1beta1/aiplatformpb" "google.golang.org/api/option" "google.golang.org/protobuf/encoding/protojson" "google.golang.org/protobuf/types/known/structpb" ) // generateWithLowerDimension shows how to generate lower-dimensional embeddings for text and image inputs. func generateWithLowerDimension ( w io .
- Fprintf ( w , "Video embedding (length=%d): %v\n" , len ( videoEmbedding ), videoEmbedding ) // Example response: // Image embedding (length=1408): [-0.01558477 0.0258355 0.016342038 ... ] // Text embedding (length=1408): [-0.005894961 0.008349559 0.015355394 ... ] // Video embedding (length=1408): [-0.018867437 0.013997682 0.0012682161 ... ] return nil } Use gemini-embedding-2-preview The gemini-embedding-2-preview model accepts interleaved inputs across image, text, document, audio, and video modalities.
- For more information, see the Python API reference documentation . import vertexai from vertexai.vision models import Image , MultiModalEmbeddingModel , Video from vertexai.vision models import VideoSegmentConfig TODO(developer): Update & uncomment line below PROJECT ID = "your-project-id" vertexai . init ( project = PROJECT ID , location = "us-central1" ) model = MultiModalEmbeddingModel . from pretrained ( "multimodalembedding@001" ) image = Image . load from file ( "gs://cloud-samples-data/vertex-ai/llm/prompts/landmark1.png" ) video = Video . load from file ( "gs://cloud-samples-data/vertex-ai-vision/highway vehicles.mp4" ) embeddings = model . get embeddings ( image = image , video = video , video segment config = VideoSegmentConfig ( end offset sec = 1 ), contextual text = "Cars on Highway" , ) print ( f "Image Embedding: { embeddings . image embedding } " ) Video Embeddings are segmented based on the video segment config. print ( "Video Embeddings:" ) for video embedding in embeddings . video embeddings : print ( f "Video Segment: { video embedding . start offset sec } - { video embedding . end offset sec } " ) print ( f "Embedding: { video embedding . embedding } " ) print ( f "Text Embedding: { embeddings . text embedding } " ) Example response: Image Embedding: [-0.0123144267, 0.0727186054, 0.000201397663, ...] Video Embeddings: Video Segment: 0.0 - 1.0 Embedding: [-0.0206376351, 0.0345234685, ...] Text Embedding: [-0.0207006838, -0.00251058186, ...] Go Before trying this sample, follow the Go setup instructions in the Vertex AI quickstart using client libraries .
- Response (7 second video, no videoSegmentConfig specified): { "predictions": [ { "videoEmbeddings": [ { "endOffsetSec": 7, "embedding": [ -0.0045467657, 0.0258095954, 0.0146885719, 0.00945400633, [...] -0.0023291884, -0.00493789, 0.00975185353, 0.0168156829 ], "startOffsetSec": 0 } ] } ], "deployedModelId": " DEPLOYED MODEL ID " } Response (59 second video, with the following video segment config: "videoSegmentConfig": { "startOffsetSec": 0, "endOffsetSec": 60, "intervalSec": 10 } ): { "predictions": [ { "videoEmbeddings": [ { "endOffsetSec": 10, "startOffsetSec": 0, "embedding": [ -0.00683252793, 0.0390476175, [...] 0.00657121744, 0.013023301 ] }, { "startOffsetSec": 10, "endOffsetSec": 20, "embedding": [ -0.0104404651, 0.0357737206, [...] 0.00509833824, 0.0131902946 ] }, { "startOffsetSec": 20, "embedding": [ -0.0113538112, 0.0305239167, [...] -0.00195809244, 0.00941874553 ], "endOffsetSec": 30 }, { "embedding": [ -0.00299320649, 0.0322436653, [...] -0.00993082579, 0.00968887936 ], "startOffsetSec": 30, "endOffsetSec": 40 }, { "endOffsetSec": 50, "startOffsetSec": 40, "embedding": [ -0.00591270532, 0.0368893594, [...] -0.00219071587, 0.0042470959 ] }, { "embedding": [ -0.00458270218, 0.0368121453, [...] -0.00317760976, 0.00595594104 ], "endOffsetSec": 59, "startOffsetSec": 50 } ] } ], "deployedModelId": " DEPLOYED MODEL ID " } Python To learn how to install or update the Vertex AI SDK for Python, see Install the Vertex AI SDK for Python .

### "Vertex AI quickstart \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/quickstarts/quickstart-multimodal](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/quickstarts/quickstart-multimodal)
- Source ID: `site-docs-root`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- GOOGLE CLOUD LOCATION 'global' ; async function generateContent ( projectId = GOOGLE CLOUD PROJECT , location = GOOGLE CLOUD LOCATION ) { const client = new GoogleGenAI ({ vertexai : true , project : projectId , location : location , }); const response = await client . models . generateContent ({ model : 'gemini-3-flash-preview' , contents : 'How does AI work?' , }); console . log ( response . text ); return response . text ; } Java import com.google.genai.Client ; import com.google.genai.types.GenerateContentResponse ; import com.google.genai.types.HttpOptions ; public class TextGenerationWithText { public static void main ( String [] args ) { // TODO ( developer ): Replace these variables before running the sample .
- Generate images Note: Image generation with Gemini is in preview.
- Then find the nearest palindrome to it.' , config : { tools : [{ codeExecution : {}}], temperature : 0 , }, }); console . debug ( response . executableCode ); // Example response : // Code : // function fibonacci ( n ) { // if ( n < = 0 ) { // return 0 ; // } else if ( n === 1 ) { // return 1 ; // } else { // let a = 0 , b = 1 ; // for ( let i = 2 ; i < = n ; i ++ ) { // [ a , b ] = [ b , a + b ]; // } // return b ; // } // } // // const fib20 = fibonacci ( 20 ); // console . log ( fib20 =$ { fib20 } ); console . debug ( response . codeExecutionResult ); // Outcome : // fib20 = 6765 return response . codeExecutionResult ; } Java import com.google.genai.Client ; import com.google.genai.types.GenerateContentConfig ; import com.google.genai.types.GenerateContentResponse ; import com.google.genai.types.HttpOptions ; import com.google.genai.types.Tool ; import com.google.genai.types.ToolCodeExecution ; public class ToolsCodeExecWithText { public static void main ( String [] args ) { // TODO ( developer ): Replace these variables before running the sample .
- GOOGLE CLOUD LOCATION 'global' ; async function generateContent ( projectId = GOOGLE CLOUD PROJECT , location = GOOGLE CLOUD LOCATION ) { const client = new GoogleGenAI ({ vertexai : true , project : projectId , location : location , }); const image = { fileData : { fileUri : 'gs://cloud-samples-data/generative-ai/image/scones.jpg' , mimeType : 'image/jpeg' , }, }; const response = await client . models . generateContent ({ model : 'gemini-2.5-flash' , contents : [ image , 'What is shown in this image?' ], }); console . log ( response . text ); return response . text ; } Java import com.google.genai.Client ; import com.google.genai.types.Content ; import com.google.genai.types.GenerateContentResponse ; import com.google.genai.types.HttpOptions ; import com.google.genai.types.Part ; public class TextGenerationWithTextAndImage { public static void main ( String [] args ) { // TODO ( developer ): Replace these variables before running the sample .

### Flex PayGo \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/flex-paygo](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/flex-paygo)
- Source ID: `site-docs-root`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- Flex PayGo doesn't support regional or multi-regional endpoints. gemini-3.1-flash-lite-preview gemini-3.1-flash-image-preview gemini-3.1-pro-preview gemini-3-flash-preview gemini-3-pro-image-preview Request payload limit Flex PayGo requests have a total payload size limit of 20 MB for requests where the payload is included directly in the request body.
- The timeout is specified in seconds. curl -X POST \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json; charset=utf-8" \ -H "X-Server-Timeout: 600" \ -H "X-Vertex-AI-LLM-Request-Type: shared" \ -H "X-Vertex-AI-LLM-Shared-Request-Type: flex" \ "https://aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/global/publishers/google/models/ MODEL ID :generateContent" -d \ $'{ "contents": { "role": "model", "parts": { "text": " PROMPT TEXT " } } }' You should receive a JSON response similar to the following. { "candidates" : [ { "content" : { "role" : "model" , "parts" : [ { "text" : "Response to sample request." } ] } , "finishReason" : "STOP" } ] , "usageMetadata" : { "promptTokenCount" : 3 , "candidatesTokenCount" : 900 , "totalTokenCount" : 1957 , "trafficType" : "ON DEMAND FLEX" , "thoughtsTokenCount" : 1054 } } Note the following in the URL for this sample: Use the generateContent method to request that the response is returned after it's fully generated.
- The timeout is specified in seconds. curl -X POST \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json; charset=utf-8" \ -H "X-Server-Timeout: 600" \ -H "X-Vertex-AI-LLM-Shared-Request-Type: flex" \ "https://aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/global/publishers/google/models/ MODEL ID :generateContent" -d \ $'{ "contents": { "role": "model", "parts": { "text": " PROMPT TEXT " } } }' You should receive a JSON response similar to the following. { "candidates" : [ { "content" : { "role" : "model" , "parts" : [ { "text" : "Response to sample request." } ] } , "finishReason" : "STOP" } ] , "usageMetadata" : { "promptTokenCount" : 3 , "candidatesTokenCount" : 900 , "totalTokenCount" : 1957 , "trafficType" : "ON DEMAND FLEX" , "thoughtsTokenCount" : 1054 } } Note the following in the URL for this sample: Use the generateContent method to request that the response is returned after it's fully generated.
- If your request was processed using Flex PayGo, the trafficType field is set to ON DEMAND FLEX . { "candidates": [ { "content": { "role": "model", "parts": [ { "text": "Response to sample request." } ] }, "finishReason": "STOP" } ], "usageMetadata": { "promptTokenCount": 3, "candidatesTokenCount": 900, "totalTokenCount": 1957, "trafficType": "ON DEMAND FLEX", "thoughtsTokenCount": 1054 } } Additional quota for Flex PayGo In addition to the available quotas for content generation requests (including Provisioned Throughput quota for spillover traffic), requests utilizing Flex PayGo are subject to the following quota: Description QPM for each base model in a project Quota for each base model in a project requests utilizing Flex PayGo 3000 What's next Resource Generative AI quotas and limits Quotas and limits related specifically to generative AI on Vertex AI.

