---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:18.723Z"
product_name: "Generative AI on Vertex AI"
product_slug: "generative-ai-on-vertex-ai"
feature_name: "Gemini presencePenalty parameter"
feature_slug: "gemini-presencepenalty-parameter"
latest_feature_date: "2024-05-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/quickstarts/quickstart"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/get-multimodal-embeddings"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-your-search-api"
keywords:
  - "gemini"
  - "presencepenalty"
  - "parameter"
  - "models"
  - "the"
  - "to"
  - "encourage"
  - "more"
---

# Gemini presencePenalty parameter

Product: Generative AI on Vertex AI
Coverage: MEDIUM

## Step 02 Summary

Gemini models support the presencePenalty parameter to encourage more diverse content.

## Extended Definition

Gemini models support the presencePenalty parameter to encourage more diverse content.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/quickstarts/quickstart](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/quickstarts/quickstart)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/get-multimodal-embeddings](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/get-multimodal-embeddings)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-your-search-api](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-your-search-api)

## Supporting Pages

### "Quickstart: Send text prompts to Gemini using Vertex AI Studio \_|\_ Generative\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/quickstarts/quickstart](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/quickstarts/quickstart)
- Source ID: `site-docs-root`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
- In this quickstart, you: Send these prompts to the Gemini API using samples from the generative AI prompt gallery, including the following: A summarization text prompt A code generation prompt View the code used to generate the responses Before you begin prompting in Vertex AI Studio This quickstart requires you to complete the following steps to set up a Google Cloud project and enable the Vertex AI API.
- Each prompt is preconfigured with specified model and parameter values so you can open the sample prompt and click Submit to generate a response.
- You can use Vertex AI Studio to design, test, and manage prompts for Google's Gemini large language models (LLMs) and third-party models.

### "Generative AI glossary \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai)
- Source ID: `site-docs-root`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- PT is a fixed-cost monthly or weekly subscription that reserves throughput for specified models and locations For more information, see Provisioned Throughput overview . quantization Quantization is a model optimization technique used to reduce the precision of the numbers used to represent a model's parameters.
- Phrased differently, a model is the set of parameters and structure needed for a system to make inferences. model distillation (knowledge distillation, teacher-student models) Model distillation is a technique that allows a smaller student model to learn from a larger teacher model.
- For more information, see Overview of prompting strategies . prompt engineering (prompt design) Prompt engineering in generative AI is the process of crafting effective prompts to elicit desired outputs from large language models (LLMs).
- For more information, see Introduction to Vertex AI Model Monitoring . model resource name The resource name for a model is as follows: projects/<PROJECT ID>/locations/<LOCATION ID>/models/<MODEL ID> .

### "Get multimodal embeddings \_|\_ Generative AI on Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/get-multimodal-embeddings](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/get-multimodal-embeddings)
- Source ID: `site-docs-root`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up authentication for a local development environment . / TODO(developer): Uncomment these variables before running the sample.\ (Not necessary if passing values as arguments) / // const project = 'YOUR PROJECT ID'; // const location = 'YOUR PROJECT LOCATION'; // const baseImagePath = 'YOUR BASE IMAGE PATH'; // const textPrompt = 'YOUR TEXT PROMPT'; const aiplatform = require ( ' @google-cloud/aiplatform ' ); // Imports the Google Cloud Prediction service client const { PredictionServiceClient } = aiplatform . v1 ; // Import the helper module for converting arbitrary protobuf.Value objects. const { helpers } = aiplatform ; // Specifies the location of the api endpoint const clientOptions = { apiEndpoint : 'us-central1-aiplatform.googleapis.com' , }; const publisher = 'google' ; const model = 'multimodalembedding@001' ; // Instantiates a client const predictionServiceClient = new PredictionServiceClient ( clientOptions ); async function predictImageFromImageAndText () { // Configure the parent resource const endpoint = projects/ ${ project } /locations/ ${ location } /publishers/ ${ publisher } /models/ ${ model } ; const fs = require ( 'fs' ); const imageFile = fs . readFileSync ( baseImagePath ); // Convert the image data to a Buffer and base64 encode it. const encodedImage = Buffer . from ( imageFile ). toString ( 'base64' ); const prompt = { text : textPrompt , image : { bytesBase64Encoded : encodedImage , }, }; const instanceValue = helpers . toValue ( prompt ); const instances = [ instanceValue ]; const parameter = { sampleCount : 1 , }; const parameters = helpers . toValue ( parameter ); const request = { endpoint , instances , parameters , }; // Predict request const [ response ] = await predictionServiceClient . predict ( request ); console . log ( 'Get image embedding response' ); const predictions = response . predictions ; console . log ( '\tPredictions :' ); for ( const prediction of predictions ) { console . log ( \t\tPrediction : ${ JSON . stringify ( prediction ) } ); } } await predictImageFromImageAndText (); Java Before trying this sample, follow the Java setup instructions in the Vertex AI quickstart using client libraries .
- For more information, see the Python API reference documentation . import vertexai from vertexai.vision models import Image , MultiModalEmbeddingModel , Video from vertexai.vision models import VideoSegmentConfig TODO(developer): Update & uncomment line below PROJECT ID = "your-project-id" vertexai . init ( project = PROJECT ID , location = "us-central1" ) model = MultiModalEmbeddingModel . from pretrained ( "multimodalembedding@001" ) image = Image . load from file ( "gs://cloud-samples-data/vertex-ai/llm/prompts/landmark1.png" ) video = Video . load from file ( "gs://cloud-samples-data/vertex-ai-vision/highway vehicles.mp4" ) embeddings = model . get embeddings ( image = image , video = video , video segment config = VideoSegmentConfig ( end offset sec = 1 ), contextual text = "Cars on Highway" , ) print ( f "Image Embedding: { embeddings . image embedding } " ) Video Embeddings are segmented based on the video segment config. print ( "Video Embeddings:" ) for video embedding in embeddings . video embeddings : print ( f "Video Segment: { video embedding . start offset sec } - { video embedding . end offset sec } " ) print ( f "Embedding: { video embedding . embedding } " ) print ( f "Text Embedding: { embeddings . text embedding } " ) Example response: Image Embedding: [-0.0123144267, 0.0727186054, 0.000201397663, ...] Video Embeddings: Video Segment: 0.0 - 1.0 Embedding: [-0.0206376351, 0.0345234685, ...] Text Embedding: [-0.0207006838, -0.00251058186, ...] Go Before trying this sample, follow the Go setup instructions in the Vertex AI quickstart using client libraries .
- For more information, see the Python API reference documentation . import vertexai from vertexai.vision models import MultiModalEmbeddingModel , Video from vertexai.vision models import VideoSegmentConfig TODO(developer): Update & uncomment line below PROJECT ID = "your-project-id" vertexai . init ( project = PROJECT ID , location = "us-central1" ) model = MultiModalEmbeddingModel . from pretrained ( "multimodalembedding@001" ) embeddings = model . get embeddings ( video = Video . load from file ( "gs://cloud-samples-data/vertex-ai-vision/highway vehicles.mp4" ), video segment config = VideoSegmentConfig ( end offset sec = 1 ), ) Video Embeddings are segmented based on the video segment config. print ( "Video Embeddings:" ) for video embedding in embeddings . video embeddings : print ( f "Video Segment: { video embedding . start offset sec } - { video embedding . end offset sec } " ) print ( f "Embedding: { video embedding . embedding } " ) Example response: Video Embeddings: Video Segment: 0.0 - 1.0 Embedding: [-0.0206376351, 0.0123456789, ...] Go Before trying this sample, follow the Go setup instructions in the Vertex AI quickstart using client libraries .
- EmbedContentConfig ( output dimensionality = 128 ), ) Normalize the output embedding. embedding values np = np . array ( response . embeddings [ 0 ] . values ) normed embedding = embedding values np / np . linalg . norm ( embedding values np ) print ( f "Normed embedding length: { len ( normed embedding ) } " ) print ( f "Norm of normed embedding: { np . linalg . norm ( normed embedding ) : .6f } " ) # Should be very close to 1 Get multimodal embeddings REST PROJECT ID = "YOUR PROJECT ID" LOCATION = "us-central1" curl -X POST \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ "https:// ${ LOCATION } -aiplatform.googleapis.com/v1/projects/ ${ PROJECT ID } /locations/ ${ LOCATION } /publishers/google/models/gemini-embedding-2-preview:embedContent" \ -d '{ "content": { "parts": [ { "text": "Whats this" }, { "file data": { "mime type": "video/mp4", "file uri": "gs://cloud-samples-data/generative-ai/video/pixel8.mp4" } } ] } }' Python from google import genai from google.genai import types Initialize the client. client = genai .

### "Grounding with your search API \_|\_ Generative AI on Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-your-search-api](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-your-search-api)
- Source ID: `site-docs-root`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- It specifies that the gateway expects a POST request to the /v0/search path and requires an API key sent as a query parameter named key . swagger: '2.0' info: title: Custom Search API for Gemini Grounding description: Wraps an internal search function , secured by API Key for Gemini. version: 1 .0.0 schemes: - https produces: - application/json consumes: - application/json paths: /v0/search: # TODO: This will be part of API endpoint URL change if necessary post: summary: Custom search endpoint for Gemini operationId: customSearchForGemini # TODO: Change if needed x-google-backend: address: YOUR CLOUD FUNCTION TRIGGER URL # TODO: Replace with your Cloud Function trigger URL parameters: - name: body in : body required: true schema: type: object properties: query: type: string security: - api key query: [] responses: '200' : description: Search results schema: type: array items: type: object properties: snippet: type: string uri: type: string '400' : description: Invalid request '401' : description: Unauthorized ( Missing or invalid API key ) '500' : description: Internal server error securityDefinitions: api key query: type: apiKey name: key # Gemini will send its API key using this query parameter name in : query Important: Replace YOUR CLOUD FUNCTION TRIGGER URL with the trigger URL that you noted when deploying your Cloud Functions.
- Client ( http options = HttpOptions ( api version = "v1" )) Replace with your API details EXTERNAL API ENDPOINT = "YOUR EXTERNAL API ENDPOINT" # e.g., https://YOUR GATEWAY HOSTNAME/v0/search EXTERNAL API KEY = "YOUR EXTERNAL API KEY" tool = Tool ( retrieval = Retrieval ( external api = ExternalApi ( api spec = "SIMPLE SEARCH" , endpoint = EXTERNAL API ENDPOINT , api auth = { "apiKeyConfig" : { "apiKeyString" : EXTERNAL API KEY } } ) ) ) response = client . models . generate content ( model = "gemini-2.5-flash" , # Or another supported model contents = "What can you tell me about product Y based on my API?" , # Your query config = GenerateContentConfig ( tools = [ tool ], ), ) print ( response . text ) REST Before using any of the request data, make the following replacements: LOCATION : The region to process the request.
- Configure the externalApi tool When making a request to the Gemini API, include the tools parameter with a retrieval tool configured for the externalApi .
- Gemini uses these snippets as a source of truth to generate a more accurate and grounded response.

