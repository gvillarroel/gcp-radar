---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:18.648Z"
product_name: "Generative AI on Vertex AI"
product_slug: "generative-ai-on-vertex-ai"
feature_name: "Cloud API Registry"
feature_slug: "cloud-api-registry"
latest_feature_date: "2025-12-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/get-multimodal-embeddings"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-maps"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial-tpu"
keywords:
  - "api"
  - "registry"
  - "is"
  - "available"
  - "in"
  - "the"
  - "console"
  - "preview"
---

# Cloud API Registry

Product: Generative AI on Vertex AI
Coverage: MEDIUM

## Step 02 Summary

Cloud API Registry is available in the Google Cloud console in Preview for managing MCP servers and tools.

## Extended Definition

Cloud API Registry is available in the Google Cloud console in Preview for managing MCP servers and tools.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/get-multimodal-embeddings](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/get-multimodal-embeddings)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-maps](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-maps)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial-tpu](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial-tpu)

## Supporting Pages

### "Get multimodal embeddings \_|\_ Generative AI on Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/get-multimodal-embeddings](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/get-multimodal-embeddings)
- Source ID: `site-docs-root`
- Final score: 231
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up authentication for a local development environment . / TODO(developer): Uncomment these variables before running the sample.\ (Not necessary if passing values as arguments) / // const project = 'YOUR PROJECT ID'; // const location = 'YOUR PROJECT LOCATION'; // const baseImagePath = 'YOUR BASE IMAGE PATH'; // const textPrompt = 'YOUR TEXT PROMPT'; const aiplatform = require ( ' @google-cloud/aiplatform ' ); // Imports the Google Cloud Prediction service client const { PredictionServiceClient } = aiplatform . v1 ; // Import the helper module for converting arbitrary protobuf.Value objects. const { helpers } = aiplatform ; // Specifies the location of the api endpoint const clientOptions = { apiEndpoint : 'us-central1-aiplatform.googleapis.com' , }; const publisher = 'google' ; const model = 'multimodalembedding@001' ; // Instantiates a client const predictionServiceClient = new PredictionServiceClient ( clientOptions ); async function predictImageFromImageAndText () { // Configure the parent resource const endpoint = projects/ ${ project } /locations/ ${ location } /publishers/ ${ publisher } /models/ ${ model } ; const fs = require ( 'fs' ); const imageFile = fs . readFileSync ( baseImagePath ); // Convert the image data to a Buffer and base64 encode it. const encodedImage = Buffer . from ( imageFile ). toString ( 'base64' ); const prompt = { text : textPrompt , image : { bytesBase64Encoded : encodedImage , }, }; const instanceValue = helpers . toValue ( prompt ); const instances = [ instanceValue ]; const parameter = { sampleCount : 1 , }; const parameters = helpers . toValue ( parameter ); const request = { endpoint , instances , parameters , }; // Predict request const [ response ] = await predictionServiceClient . predict ( request ); console . log ( 'Get image embedding response' ); const predictions = response . predictions ; console . log ( '\tPredictions :' ); for ( const prediction of predictions ) { console . log ( \t\tPrediction : ${ JSON . stringify ( prediction ) } ); } } await predictImageFromImageAndText (); Java Before trying this sample, follow the Java setup instructions in the Vertex AI quickstart using client libraries .
- EmbedContentConfig ( output dimensionality = 128 ), ) Normalize the output embedding. embedding values np = np . array ( response . embeddings [ 0 ] . values ) normed embedding = embedding values np / np . linalg . norm ( embedding values np ) print ( f "Normed embedding length: { len ( normed embedding ) } " ) print ( f "Norm of normed embedding: { np . linalg . norm ( normed embedding ) : .6f } " ) # Should be very close to 1 Get multimodal embeddings REST PROJECT ID = "YOUR PROJECT ID" LOCATION = "us-central1" curl -X POST \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ "https:// ${ LOCATION } -aiplatform.googleapis.com/v1/projects/ ${ PROJECT ID } /locations/ ${ LOCATION } /publishers/google/models/gemini-embedding-2-preview:embedContent" \ -d '{ "content": { "parts": [ { "text": "Whats this" }, { "file data": { "mime type": "video/mp4", "file uri": "gs://cloud-samples-data/generative-ai/video/pixel8.mp4" } } ] } }' Python from google import genai from google.genai import types Initialize the client. client = genai .
- Example usage in Python Generate embedding for a search query def prepare query ( query ): return f "task: search result query: { query } " Generate embedding for a search document def prepare document ( content , title = None ): if title is None : title = "none" return f "title: { title } text: { content } " Generate embedding for classification def prepare classification input ( content ): return f "task: classification query: { content } " API usage API limits The following limits apply when you use the gemini-embedding-2-preview model.
- For more information, see the Python API reference documentation . import vertexai from vertexai.vision models import Image , MultiModalEmbeddingModel , Video from vertexai.vision models import VideoSegmentConfig TODO(developer): Update & uncomment line below PROJECT ID = "your-project-id" vertexai . init ( project = PROJECT ID , location = "us-central1" ) model = MultiModalEmbeddingModel . from pretrained ( "multimodalembedding@001" ) image = Image . load from file ( "gs://cloud-samples-data/vertex-ai/llm/prompts/landmark1.png" ) video = Video . load from file ( "gs://cloud-samples-data/vertex-ai-vision/highway vehicles.mp4" ) embeddings = model . get embeddings ( image = image , video = video , video segment config = VideoSegmentConfig ( end offset sec = 1 ), contextual text = "Cars on Highway" , ) print ( f "Image Embedding: { embeddings . image embedding } " ) Video Embeddings are segmented based on the video segment config. print ( "Video Embeddings:" ) for video embedding in embeddings . video embeddings : print ( f "Video Segment: { video embedding . start offset sec } - { video embedding . end offset sec } " ) print ( f "Embedding: { video embedding . embedding } " ) print ( f "Text Embedding: { embeddings . text embedding } " ) Example response: Image Embedding: [-0.0123144267, 0.0727186054, 0.000201397663, ...] Video Embeddings: Video Segment: 0.0 - 1.0 Embedding: [-0.0206376351, 0.0345234685, ...] Text Embedding: [-0.0207006838, -0.00251058186, ...] Go Before trying this sample, follow the Go setup instructions in the Vertex AI quickstart using client libraries .

### "Grounding with Google Maps in Vertex AI \_|\_ Generative AI on Vertex AI\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-maps](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-maps)
- Source ID: `site-docs-root`
- Final score: 220
- Re-rank relevance: N/A

Evidence snippets:
- The Routing tool supports the following: Modes of transportation : Routing for driving, walking, bicycling, transit, and two-wheeled motorized vehicles (not all travel modes are available in all countries) Multiple waypoints : Up to 13 intermediate stops between origin and destination Real-time traffic : Accounting for current traffic conditions to provide accurate "live" travel times rather than static averages The following are examples of the types of questions that the Routing tool supports: Proximity based on travel time : "What are some American restaurants within a 10-minute walk from the Hilton Hotel on 1335 6th Ave in NYC?" Commute estimation : "How long does it take to take public transit from Pike Place Market to Capitol Hill in Seattle?" Understand the response When a prompt triggers the Routing tool, the model generates a natural language answer backed by structured metadata.
- HTTP method and URL: POST https:// LOCATION -aiplatform.googleapis.com/v1beta1/projects/ PROJECT ID /locations/ LOCATION /publishers/google/models/ MODEL ID :generateContent Request JSON body: { "contents": [{ "role": "user", "parts": [{ "text": " PROMPT " }] }], "tools": [{ "googleMaps": { "enableWidget": " ENABLE WIDGET " } }], "toolConfig": { "retrievalConfig": { "latLng": { "latitude": LATITUDE , "longitude": LONGITUDE }, "languageCode": "en US" } }, "model": "projects/ PROJECT ID /locations/ LOCATION /publishers/google/models/ MODEL ID " } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json ` -Uri "https:// LOCATION -aiplatform.googleapis.com/v1beta1/projects/ PROJECT ID /locations/ LOCATION /publishers/google/models/ MODEL ID :generateContent" Select-Object -Expand Content You should receive a JSON response similar to the following: { "candidates": [ { "content": { "role": "model", "parts": [ { "text": "\"The Italian Place\" in Alexandria, VA, is good for children and offers takeout.
- This code sample demonstrates a place source and a place answer source in the response: "groundingChunks" : [ { "maps" : { "uri" : "{Link to Maps Content}" , "title" : "{Name of Maps Place}" , "placeId" : "{Place ID}" , "placeAnswerSources" : { "reviewSnippets" : [ { "reviewId" : "{Review ID}" , "googleMapsUri" : "{Link to Maps Content}" , "title" : "{Title of review}" } ] } }, } ], Routing Preview — Grounding with Google Search This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .

### "Deploy and inference Gemma using Model Garden and Vertex AI GPU-backed endpoints\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial)
- Source ID: `site-docs-root`
- Final score: 219
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up authentication for a local development environment . async function gemma2PredictGpu ( predictionServiceClient ) { // Imports the Google Cloud Prediction Service Client library const { // TODO(developer): Uncomment PredictionServiceClient before running the sample. // PredictionServiceClient, helpers , } = require ( ' @google-cloud/aiplatform ' ); / TODO(developer): Update these variables before running the sample. / const projectId = 'your-project-id' ; const endpointRegion = 'your-vertex-endpoint-region' ; const endpointId = 'your-vertex-endpoint-id' ; // Default configuration const config = { maxOutputTokens : 1024 , temperature : 0.9 , topP : 1.0 , topK : 1 }; // Prompt used in the prediction const prompt = 'Why is the sky blue?' ; // Encapsulate the prompt in a correct format for GPUs // Example format: [{inputs: 'Why is the sky blue?', parameters: {temperature: 0.9}}] const input = { inputs : prompt , parameters : config , }; // Convert input message to a list of GAPIC instances for model input const instances = [ helpers . toValue ( input )]; // TODO(developer): Uncomment apiEndpoint and predictionServiceClient before running the sample. // const apiEndpoint = ${endpointRegion}-aiplatform.googleapis.com; // Create a client // predictionServiceClient = new PredictionServiceClient({apiEndpoint}); // Call the Gemma2 endpoint const gemma2Endpoint = projects/ ${ projectId } /locations/ ${ endpointRegion } /endpoints/ ${ endpointId } ; const [ response ] = await predictionServiceClient . predict ({ endpoint : gemma2Endpoint , instances , }); const predictions = response . predictions ; const text = predictions [ 0 ]. stringValue ; console . log ( 'Predictions:' , text ); return text ; } module . exports = gemma2PredictGpu ; // TODO(developer): Uncomment below lines before running the sample. // gemma2PredictGpu(...process.argv.slice(2)).catch(err => { // console.error(err.message); // process.exitCode = 1; // }); Java Before trying this sample, follow the Java setup instructions in the Vertex AI quickstart using client libraries .
- Run the following command in the terminal to create or overwrite this file in the current directory: @' { "publisher model name": " MODEL ID ", "deploy config": { "dedicated resources": { "machine spec": { "machine type": " MACHINE TYPE ", "accelerator type": " ACCELERATOR TYPE ", "accelerator count": ACCELERATOR COUNT , "reservation affinity": { "reservation affinity type": "ANY RESERVATION" } }, "spot": "false" } }, "model config": { "accept eula": "true", "container spec": { "image uri": " IMAGE URI ", "args": [ CONTAINER ARGS ], "ports": [ { "container port": CONTAINER PORT } ] } }, "deploy config": { "fast tryout enabled": false }, } '@ Out-File -FilePath request.json -Encoding utf8 Then execute the following command to send your REST request: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION :deploy" Select-Object -Expand Content You receive a JSON response similar to the following. { "name": "projects/ PROJECT ID /locations/ LOCATION /operations/ OPERATION ID ", "metadata": { "@type": "type.googleapis.com/google.cloud.aiplatform.v1.DeployOperationMetadata", "genericMetadata": { "createTime": "2025-03-13T21:44:44.538780Z", "updateTime": "2025-03-13T21:44:44.538780Z" }, "publisherModel": "publishers/google/models/gemma3@gemma-3-1b-it", "destination": "projects/ PROJECT ID /locations/ LOCATION ", "projectNumber": " PROJECT ID " } } Console In the Google Cloud console, go to the Model Garden page.
- The aiplatform Go client library Go support for Protocol Buffers Google API Extensions for Go (gax-go) go get cloud.google.com/go/aiplatform go get google.golang.org/protobuf go get github.com/googleapis/gax-go/v2 Deploy Gemma using Model Garden You can deploy the Gemma 3 1B by using its model card in the Google Cloud console or programmatically.
- Delete the model Console Go to the Model Registry page from the Vertex AI section in the Google Cloud console.

### "Deploy and inference Gemma using Model Garden and Vertex AI TPU-backed endpoints\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial-tpu](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial-tpu)
- Source ID: `site-docs-root`
- Final score: 211
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up authentication for a local development environment . // Imports the Google Cloud Prediction Service Client library const { // TODO(developer): Uncomment PredictionServiceClient before running the sample. // PredictionServiceClient, helpers , } = require ( ' @google-cloud/aiplatform ' ); / TODO(developer): Update these variables before running the sample. / const projectId = 'your-project-id' ; const endpointRegion = 'your-vertex-endpoint-region' ; const endpointId = 'your-vertex-endpoint-id' ; // Prompt used in the prediction const prompt = 'Why is the sky blue?' ; // Encapsulate the prompt in a correct format for TPUs // Example format: [{prompt: 'Why is the sky blue?', temperature: 0.9}] const input = { prompt , // Parameters for default configuration maxOutputTokens : 1024 , temperature : 0.9 , topP : 1.0 , topK : 1 , }; // Convert input message to a list of GAPIC instances for model input const instances = [ helpers . toValue ( input )]; // TODO(developer): Uncomment apiEndpoint and predictionServiceClient before running the sample. // const apiEndpoint = ${endpointRegion}-aiplatform.googleapis.com; // Create a client // predictionServiceClient = new PredictionServiceClient({apiEndpoint}); // Call the Gemma2 endpoint const gemma2Endpoint = projects/ ${ projectId } /locations/ ${ endpointRegion } /endpoints/ ${ endpointId } ; const [ response ] = await predictionServiceClient . predict ({ endpoint : gemma2Endpoint , instances , }); const predictions = response . predictions ; const text = predictions [ 0 ]. stringValue ; console . log ( 'Predictions:' , text ); Java Before trying this sample, follow the Java setup instructions in the Vertex AI quickstart using client libraries .
- Delete the model Console Go to the Model Registry page from the Vertex AI section in the Google Cloud console.
- String projectId = "YOUR PROJECT ID" ; String endpointRegion = "us-west1" ; String endpointId = "YOUR ENDPOINT ID" ; PredictionServiceSettings predictionServiceSettings = PredictionServiceSettings . newBuilder () . setEndpoint ( String . format ( "%s-aiplatform.googleapis.com:443" , endpointRegion )) . build (); PredictionServiceClient predictionServiceClient = PredictionServiceClient . create ( predictionServiceSettings ); Gemma2PredictTpu creator = new Gemma2PredictTpu ( predictionServiceClient ); creator . gemma2PredictTpu ( projectId , endpointRegion , endpointId ); } // Demonstrates how to run inference on a Gemma2 model // deployed to a Vertex AI endpoint with TPU accelerators. public String gemma2PredictTpu ( String projectId , String region , String endpointId ) throws IOException { Map<String , Object > paramsMap = new HashMap <> (); paramsMap . put ( "temperature" , 0.9 ); paramsMap . put ( "maxOutputTokens" , 1024 ); paramsMap . put ( "topP" , 1.0 ); paramsMap . put ( "topK" , 1 ); Value parameters = mapToValue ( paramsMap ); // Prompt used in the prediction String instance = "{ \"prompt\": \"Why is the sky blue?\"}" ; Value .
- For more information, see the Python API reference documentation . """ Sample to run inference on a Gemma2 model deployed to a Vertex AI endpoint with TPU accellerators. """ from google.cloud import aiplatform from google.protobuf import json format from google.protobuf.struct pb2 import Value TODO(developer): Update & uncomment lines below PROJECT ID = "your-project-id" ENDPOINT REGION = "your-vertex-endpoint-region" ENDPOINT ID = "your-vertex-endpoint-id" Default configuration config = { "max tokens" : 1024 , "temperature" : 0.9 , "top p" : 1.0 , "top k" : 1 } Prompt used in the prediction prompt = "Why is the sky blue?" Encapsulate the prompt in a correct format for TPUs Example format: [{'prompt': 'Why is the sky blue?', 'temperature': 0.9}] input = { "prompt" : prompt } input . update ( config ) Convert input message to a list of GAPIC instances for model input instances = [ json format .

