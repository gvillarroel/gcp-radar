---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:18.636Z"
product_name: "Generative AI on Vertex AI"
product_slug: "generative-ai-on-vertex-ai"
feature_name: "veo-3.0-generate-001"
feature_slug: "veo-3-0-generate-001"
latest_feature_date: "2026-03-24"
deprecation_date: "2026-06-30"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/video/video-gen-prompt-guide"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/video/responsible-ai-and-usage-guidelines"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/content-credentials"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/get-multimodal-embeddings"
keywords:
  - "veo"
  - "generate"
  - "001"
  - "deprecated"
  - "video"
  - "generation"
  - "endpoint"
  - "scheduled"
---

# veo-3.0-generate-001

Product: Generative AI on Vertex AI
Coverage: MEDIUM

## Step 02 Summary

A deprecated Veo 3.0 video generation endpoint scheduled for shutdown on 2026-06-30; deprecated on 2026-06-30.

## Extended Definition

A deprecated Veo 3.0 video generation endpoint scheduled for shutdown on 2026-06-30; deprecated on 2026-06-30.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/video/video-gen-prompt-guide](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/video/video-gen-prompt-guide)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/video/responsible-ai-and-usage-guidelines](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/video/responsible-ai-and-usage-guidelines)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/content-credentials](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/content-credentials)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/get-multimodal-embeddings](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/get-multimodal-embeddings)

## Supporting Pages

### "Veo on Vertex AI video generation prompt guide \_|\_ Generative AI on Vertex\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/video/video-gen-prompt-guide](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/video/video-gen-prompt-guide)
- Source ID: `site-docs-root`
- Final score: 209
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- What's next Best practices for Veo on Vertex AI Generate videos with Veo on Vertex AI from text prompts Generate videos with Veo on Vertex AI from an image Generate videos with Veo on Vertex AI using first and last video frames Extend Veo on Vertex AI-generate videos Understand responsible AI and usage guidelines for Veo on Vertex AI Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation AI and ML Vertex AI Generative AI on Vertex AI Guides Send feedback Veo on Vertex AI video generation prompt guide Stay organized with collections Save and categorize content based on your preferences.
- Anatomy of a Veo prompt When you use Veo to generate videos, using the correct keywords and prompt structure helps the model to generate the content that you want.
- Safety filters Veo applies safety filters across Vertex AI to help ensure that generated videos and uploaded photos don't contain offensive content.

### "Responsible AI for Veo on Vertex AI video generation \_|\_ Generative AI\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/video/responsible-ai-and-usage-guidelines](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/video/responsible-ai-and-usage-guidelines)
- Source ID: `site-docs-root`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation AI and ML Vertex AI Generative AI on Vertex AI Guides Send feedback Responsible AI for Veo on Vertex AI video generation Stay organized with collections Save and categorize content based on your preferences.
- Safety filter code categories Depending on the safety filters that you configure, your output may contain a safety code similar to: "Veo could not generate videos because the input image violates Vertex AI's usage guidelines.
- Safety filters Veo on Vertex AI offers several ways to input prompts to generate videos, including text, video, and images.
- The following table displays the support code to safety category mappings: Support code Safety category Description 58061214 17301594 Child Rejects requests to generate content depicting children if personGeneration isn't set to "allow all" or if the project isn't on the allowlist for this feature.

### "Content Credentials \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/content-credentials](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/content-credentials)
- Source ID: `site-docs-root`
- Final score: 139
- Re-rank relevance: N/A

Evidence snippets:
- All images or videos created or modified using the listed models are automatically digitally signed by Google LLC. "Google Media Processing Services" is specified as the app or device used in the Content Credential. gemini-3.1-flash-image-preview gemini-3-pro-image-preview gemini-2.5-flash-image imagen-3.0-generate-002 imagen-3.0-generate-001 imagen-3.0-fast-generate-001 imagen-3.0-capability-001 imagen-4.0-generate-001 imagen-4.0-fast-generate-001 imagen-4.0-ultra-generate-001 virtual-try-on-001 veo-2.0-generate-001 veo-2.0-generate-exp veo-2.0-generate-preview veo-3.0-generate-preview veo-3.0-fast-generate-preview veo-3.0-generate-001 veo-3.0-fast-generate-001 veo-3.1-generate-preview veo-3.1-fast-generate-preview veo-3.1-generate-001 veo-3.1-fast-generate-001 veo-3.1-lite-generate-001 lyria-3-clip-preview lyria-3-pro-preview What's next Guide Generate and edit images with Gemini Use Gemini's image generation models (Nano Banana and Nano Banana Pro) to create and edit images.
- How to Use Content Credentials If you generate a media file, such as an image, using a supported Google model, Content Credentials are automatically added and signed by Google LLC.
- Content Credentials provide a transparent look into the origin and history of media files, for example, images, video files, audio files, and documents.
- Even an AI-generated image is regarded as "authentic" if it has valid Content Credentials that describe how it was created or modified.

### "Get multimodal embeddings \_|\_ Generative AI on Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/get-multimodal-embeddings](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/get-multimodal-embeddings)
- Source ID: `site-docs-root`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up authentication for a local development environment . / TODO(developer): Uncomment these variables before running the sample.\ (Not necessary if passing values as arguments) / // const project = 'YOUR PROJECT ID'; // const location = 'YOUR PROJECT LOCATION'; // const baseImagePath = 'YOUR BASE IMAGE PATH'; // const textPrompt = 'YOUR TEXT PROMPT'; const aiplatform = require ( ' @google-cloud/aiplatform ' ); // Imports the Google Cloud Prediction service client const { PredictionServiceClient } = aiplatform . v1 ; // Import the helper module for converting arbitrary protobuf.Value objects. const { helpers } = aiplatform ; // Specifies the location of the api endpoint const clientOptions = { apiEndpoint : 'us-central1-aiplatform.googleapis.com' , }; const publisher = 'google' ; const model = 'multimodalembedding@001' ; // Instantiates a client const predictionServiceClient = new PredictionServiceClient ( clientOptions ); async function predictImageFromImageAndText () { // Configure the parent resource const endpoint = projects/ ${ project } /locations/ ${ location } /publishers/ ${ publisher } /models/ ${ model } ; const fs = require ( 'fs' ); const imageFile = fs . readFileSync ( baseImagePath ); // Convert the image data to a Buffer and base64 encode it. const encodedImage = Buffer . from ( imageFile ). toString ( 'base64' ); const prompt = { text : textPrompt , image : { bytesBase64Encoded : encodedImage , }, }; const instanceValue = helpers . toValue ( prompt ); const instances = [ instanceValue ]; const parameter = { sampleCount : 1 , }; const parameters = helpers . toValue ( parameter ); const request = { endpoint , instances , parameters , }; // Predict request const [ response ] = await predictionServiceClient . predict ( request ); console . log ( 'Get image embedding response' ); const predictions = response . predictions ; console . log ( '\tPredictions :' ); for ( const prediction of predictions ) { console . log ( \t\tPrediction : ${ JSON . stringify ( prediction ) } ); } } await predictImageFromImageAndText (); Java Before trying this sample, follow the Java setup instructions in the Vertex AI quickstart using client libraries .
- 128 dimensions: { "predictions": [ { "imageEmbedding": [ 0.0279239565, [...128 dimension vector...] 0.00403284049 ], "textEmbedding": [ 0.202921599, [...128 dimension vector...] -0.0365431122 ] } ], "deployedModelId": " DEPLOYED MODEL ID " } 256 dimensions: { "predictions": [ { "imageEmbedding": [ 0.248620048, [...256 dimension vector...] -0.0646447465 ], "textEmbedding": [ 0.0757875815, [...256 dimension vector...] -0.02749932 ] } ], "deployedModelId": " DEPLOYED MODEL ID " } 512 dimensions: { "predictions": [ { "imageEmbedding": [ -0.0523675755, [...512 dimension vector...] -0.0444030389 ], "textEmbedding": [ -0.0592851527, [...512 dimension vector...] 0.0350437127 ] } ], "deployedModelId": " DEPLOYED MODEL ID " } Python import vertexai from vertexai.vision models import Image , MultiModalEmbeddingModel TODO(developer): Update & uncomment line below PROJECT ID = "your-project-id" vertexai . init ( project = PROJECT ID , location = "us-central1" ) TODO(developer): Try different dimenions: 128, 256, 512, 1408 embedding dimension = 128 model = MultiModalEmbeddingModel . from pretrained ( "multimodalembedding@001" ) image = Image . load from file ( "gs://cloud-samples-data/vertex-ai/llm/prompts/landmark1.png" ) embeddings = model . get embeddings ( image = image , contextual text = "Colosseum" , dimension = embedding dimension , ) print ( f "Image Embedding: { embeddings . image embedding } " ) print ( f "Text Embedding: { embeddings . text embedding } " ) Example response: Image Embedding: [0.0622573346, -0.0406507477, 0.0260440577, ...] Text Embedding: [0.27469793, -0.146258667, 0.0222803634, ...] Go import ( "context" "encoding/json" "fmt" "io" aiplatform "cloud.google.com/go/aiplatform/apiv1beta1" aiplatformpb "cloud.google.com/go/aiplatform/apiv1beta1/aiplatformpb" "google.golang.org/api/option" "google.golang.org/protobuf/encoding/protojson" "google.golang.org/protobuf/types/known/structpb" ) // generateWithLowerDimension shows how to generate lower-dimensional embeddings for text and image inputs. func generateWithLowerDimension ( w io .
- For more information, see the Python API reference documentation . import vertexai from vertexai.vision models import Image , MultiModalEmbeddingModel , Video from vertexai.vision models import VideoSegmentConfig TODO(developer): Update & uncomment line below PROJECT ID = "your-project-id" vertexai . init ( project = PROJECT ID , location = "us-central1" ) model = MultiModalEmbeddingModel . from pretrained ( "multimodalembedding@001" ) image = Image . load from file ( "gs://cloud-samples-data/vertex-ai/llm/prompts/landmark1.png" ) video = Video . load from file ( "gs://cloud-samples-data/vertex-ai-vision/highway vehicles.mp4" ) embeddings = model . get embeddings ( image = image , video = video , video segment config = VideoSegmentConfig ( end offset sec = 1 ), contextual text = "Cars on Highway" , ) print ( f "Image Embedding: { embeddings . image embedding } " ) Video Embeddings are segmented based on the video segment config. print ( "Video Embeddings:" ) for video embedding in embeddings . video embeddings : print ( f "Video Segment: { video embedding . start offset sec } - { video embedding . end offset sec } " ) print ( f "Embedding: { video embedding . embedding } " ) print ( f "Text Embedding: { embeddings . text embedding } " ) Example response: Image Embedding: [-0.0123144267, 0.0727186054, 0.000201397663, ...] Video Embeddings: Video Segment: 0.0 - 1.0 Embedding: [-0.0206376351, 0.0345234685, ...] Text Embedding: [-0.0207006838, -0.00251058186, ...] Go Before trying this sample, follow the Go setup instructions in the Vertex AI quickstart using client libraries .
- Response (7 second video, no videoSegmentConfig specified): { "predictions": [ { "videoEmbeddings": [ { "endOffsetSec": 7, "embedding": [ -0.0045467657, 0.0258095954, 0.0146885719, 0.00945400633, [...] -0.0023291884, -0.00493789, 0.00975185353, 0.0168156829 ], "startOffsetSec": 0 } ] } ], "deployedModelId": " DEPLOYED MODEL ID " } Response (59 second video, with the following video segment config: "videoSegmentConfig": { "startOffsetSec": 0, "endOffsetSec": 60, "intervalSec": 10 } ): { "predictions": [ { "videoEmbeddings": [ { "endOffsetSec": 10, "startOffsetSec": 0, "embedding": [ -0.00683252793, 0.0390476175, [...] 0.00657121744, 0.013023301 ] }, { "startOffsetSec": 10, "endOffsetSec": 20, "embedding": [ -0.0104404651, 0.0357737206, [...] 0.00509833824, 0.0131902946 ] }, { "startOffsetSec": 20, "embedding": [ -0.0113538112, 0.0305239167, [...] -0.00195809244, 0.00941874553 ], "endOffsetSec": 30 }, { "embedding": [ -0.00299320649, 0.0322436653, [...] -0.00993082579, 0.00968887936 ], "startOffsetSec": 30, "endOffsetSec": 40 }, { "endOffsetSec": 50, "startOffsetSec": 40, "embedding": [ -0.00591270532, 0.0368893594, [...] -0.00219071587, 0.0042470959 ] }, { "embedding": [ -0.00458270218, 0.0368121453, [...] -0.00317760976, 0.00595594104 ], "endOffsetSec": 59, "startOffsetSec": 50 } ] } ], "deployedModelId": " DEPLOYED MODEL ID " } Python To learn how to install or update the Vertex AI SDK for Python, see Install the Vertex AI SDK for Python .

