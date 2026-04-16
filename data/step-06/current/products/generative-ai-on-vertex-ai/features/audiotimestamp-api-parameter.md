---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:18.712Z"
product_name: "Generative AI on Vertex AI"
product_slug: "generative-ai-on-vertex-ai"
feature_name: "audioTimestamp API parameter"
feature_slug: "audiotimestamp-api-parameter"
latest_feature_date: "2024-09-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-your-search-api"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial-tpu"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-parallel"
keywords:
  - "audiotimestamp"
  - "api"
  - "parameter"
  - "this"
  - "was"
  - "added"
  - "in"
  - "public"
---

# audioTimestamp API parameter

Product: Generative AI on Vertex AI
Coverage: MEDIUM

## Step 02 Summary

This API parameter was added in Public Preview.

## Extended Definition

This API parameter was added in Public Preview.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-your-search-api](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-your-search-api)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial-tpu](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial-tpu)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-parallel](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-parallel)

## Supporting Pages

### "Deploy and inference Gemma using Model Garden and Vertex AI GPU-backed endpoints\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial)
- Source ID: `site-docs-root`
- Final score: 194
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up authentication for a local development environment . async function gemma2PredictGpu ( predictionServiceClient ) { // Imports the Google Cloud Prediction Service Client library const { // TODO(developer): Uncomment PredictionServiceClient before running the sample. // PredictionServiceClient, helpers , } = require ( ' @google-cloud/aiplatform ' ); / TODO(developer): Update these variables before running the sample. / const projectId = 'your-project-id' ; const endpointRegion = 'your-vertex-endpoint-region' ; const endpointId = 'your-vertex-endpoint-id' ; // Default configuration const config = { maxOutputTokens : 1024 , temperature : 0.9 , topP : 1.0 , topK : 1 }; // Prompt used in the prediction const prompt = 'Why is the sky blue?' ; // Encapsulate the prompt in a correct format for GPUs // Example format: [{inputs: 'Why is the sky blue?', parameters: {temperature: 0.9}}] const input = { inputs : prompt , parameters : config , }; // Convert input message to a list of GAPIC instances for model input const instances = [ helpers . toValue ( input )]; // TODO(developer): Uncomment apiEndpoint and predictionServiceClient before running the sample. // const apiEndpoint = ${endpointRegion}-aiplatform.googleapis.com; // Create a client // predictionServiceClient = new PredictionServiceClient({apiEndpoint}); // Call the Gemma2 endpoint const gemma2Endpoint = projects/ ${ projectId } /locations/ ${ endpointRegion } /endpoints/ ${ endpointId } ; const [ response ] = await predictionServiceClient . predict ({ endpoint : gemma2Endpoint , instances , }); const predictions = response . predictions ; const text = predictions [ 0 ]. stringValue ; console . log ( 'Predictions:' , text ); return text ; } module . exports = gemma2PredictGpu ; // TODO(developer): Uncomment below lines before running the sample. // gemma2PredictGpu(...process.argv.slice(2)).catch(err => { // console.error(err.message); // process.exitCode = 1; // }); Java Before trying this sample, follow the Java setup instructions in the Vertex AI quickstart using client libraries .
- QUERY PARAMETERS " Select-Object -Expand Content You receive a JSON response similar to the following. { "publisherModels": [ { "name": "publishers/google/models/gemma3", "versionId": "gemma-3-1b-it", "openSourceCategory": "GOOGLE OWNED OSS WITH GOOGLE CHECKPOINT", "supportedActions": { "openNotebook": { "references": { "us-central1": { "uri": "https://colab.research.google.com/github/GoogleCloudPlatform/vertex-ai-samples/blob/main/notebooks/community/model garden/model garden gradio streaming chat completions.ipynb" } }, "resourceTitle": "Notebook", "resourceUseCase": "Chat Completion Playground", "resourceDescription": "Chat with deployed Gemma 2 endpoints via Gradio UI." }, "deploy": { "modelDisplayName": "gemma-3-1b-it", "containerSpec": { "imageUri": "us-docker.pkg.dev/vertex-ai/vertex-vision-model-garden-dockers/pytorch-vllm-serve:20250312 0916 RC01", "args": [ "python", "-m", "vllm.entrypoints.api server", "--host=0.0.0.0", "--port=8080", "--model=gs://vertex-model-garden-restricted-us/gemma3/gemma-3-1b-it", "--tensor-parallel-size=1", "--swap-space=16", "--gpu-memory-utilization=0.95", "--disable-log-stats" ], "env": [ { "name": "MODEL ID", "value": "google/gemma-3-1b-it" }, { "name": "DEPLOY SOURCE", "value": "UI NATIVE MODEL" } ], "ports": [ { "containerPort": 8080 } ], "predictRoute": "/generate", "healthRoute": "/ping" }, "dedicatedResources": { "machineSpec": { "machineType": "g2-standard-12", "acceleratorType": "NVIDIA L4", "acceleratorCount": 1 } }, "publicArtifactUri": "gs://vertex-model-garden-restricted-us/gemma3/gemma3.tar.gz", "deployTaskName": "vLLM 128K context", "deployMetadata": { "sampleRequest": "{\n \"instances\": [\n {\n \"@requestFormat\": \"chatCompletions\",\n \"messages\": [\n {\n \"role\": \"user\",\n \"content\": \"What is machine learning?\"\n }\n ],\n \"max tokens\": 100\n }\n ]\n}\n" } }, ...
- String projectId = "YOUR PROJECT ID" ; String endpointRegion = "us-east4" ; String endpointId = "YOUR ENDPOINT ID" ; PredictionServiceSettings predictionServiceSettings = PredictionServiceSettings . newBuilder () . setEndpoint ( String . format ( "%s-aiplatform.googleapis.com:443" , endpointRegion )) . build (); PredictionServiceClient predictionServiceClient = PredictionServiceClient . create ( predictionServiceSettings ); Gemma2PredictGpu creator = new Gemma2PredictGpu ( predictionServiceClient ); creator . gemma2PredictGpu ( projectId , endpointRegion , endpointId ); } // Demonstrates how to run inference on a Gemma2 model // deployed to a Vertex AI endpoint with GPU accelerators. public String gemma2PredictGpu ( String projectId , String region , String endpointId ) throws IOException { Map<String , Object > paramsMap = new HashMap <> (); paramsMap . put ( "temperature" , 0.9 ); paramsMap . put ( "maxOutputTokens" , 1024 ); paramsMap . put ( "topP" , 1.0 ); paramsMap . put ( "topK" , 1 ); Value parameters = mapToValue ( paramsMap ); // Prompt used in the prediction String instance = "{ \"inputs\": \"Why is the sky blue?\"}" ; Value .
- Run the following command in the terminal to create or overwrite this file in the current directory: @' { "publisher model name": " MODEL ID ", "deploy config": { "dedicated resources": { "machine spec": { "machine type": " MACHINE TYPE ", "accelerator type": " ACCELERATOR TYPE ", "accelerator count": ACCELERATOR COUNT , "reservation affinity": { "reservation affinity type": "ANY RESERVATION" } }, "spot": "false" } }, "model config": { "accept eula": "true", "container spec": { "image uri": " IMAGE URI ", "args": [ CONTAINER ARGS ], "ports": [ { "container port": CONTAINER PORT } ] } }, "deploy config": { "fast tryout enabled": false }, } '@ Out-File -FilePath request.json -Encoding utf8 Then execute the following command to send your REST request: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION :deploy" Select-Object -Expand Content You receive a JSON response similar to the following. { "name": "projects/ PROJECT ID /locations/ LOCATION /operations/ OPERATION ID ", "metadata": { "@type": "type.googleapis.com/google.cloud.aiplatform.v1.DeployOperationMetadata", "genericMetadata": { "createTime": "2025-03-13T21:44:44.538780Z", "updateTime": "2025-03-13T21:44:44.538780Z" }, "publisherModel": "publishers/google/models/gemma3@gemma-3-1b-it", "destination": "projects/ PROJECT ID /locations/ LOCATION ", "projectNumber": " PROJECT ID " } } Console In the Google Cloud console, go to the Model Garden page.

### "Grounding with your search API \_|\_ Generative AI on Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-your-search-api](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-your-search-api)
- Source ID: `site-docs-root`
- Final score: 188
- Re-rank relevance: N/A

Evidence snippets:
- It specifies that the gateway expects a POST request to the /v0/search path and requires an API key sent as a query parameter named key . swagger: '2.0' info: title: Custom Search API for Gemini Grounding description: Wraps an internal search function , secured by API Key for Gemini. version: 1 .0.0 schemes: - https produces: - application/json consumes: - application/json paths: /v0/search: # TODO: This will be part of API endpoint URL change if necessary post: summary: Custom search endpoint for Gemini operationId: customSearchForGemini # TODO: Change if needed x-google-backend: address: YOUR CLOUD FUNCTION TRIGGER URL # TODO: Replace with your Cloud Function trigger URL parameters: - name: body in : body required: true schema: type: object properties: query: type: string security: - api key query: [] responses: '200' : description: Search results schema: type: array items: type: object properties: snippet: type: string uri: type: string '400' : description: Invalid request '401' : description: Unauthorized ( Missing or invalid API key ) '500' : description: Internal server error securityDefinitions: api key query: type: apiKey name: key # Gemini will send its API key using this query parameter name in : query Important: Replace YOUR CLOUD FUNCTION TRIGGER URL with the trigger URL that you noted when deploying your Cloud Functions.
- Gemini sends this API key as a query parameter named key .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud au t h pri nt - access - t oke n $headers = @ { "Authorization" = "Bearer $cred" } I n voke - WebReques t - Me t hod POST - Headers $headers - Co ntent Type : "application/json; charset=utf-8" - I n File reques t .jso n ` - Uri "https:// LOCATION -aiplatform.googleapis.com/v1beta1/projects/ PROJECT ID /locations/ LOCATION /publishers/google/models/ MODEL ID :generateContent" Selec t - Objec t -E xpa n d Co ntent You should receive a JSON response similar to the following: { "candidates" : [ { "content" : { "role" : "model" , "parts" : [ { "text" : "You can make an appointment on the website https://dmv.gov/" } ] }, "finishReason" : "STOP" , "safetyRatings" : [ "..." ], "groundingMetadata" : { "retrievalQueries" : [ "How to make appointment to renew driving license?" ], "groundingChunks" : [ { "retrievedContext" : { "uri" : "https://..." , "snippet" : "Snippet text about driving license renewal" } } ], "groundingSupport" : [ { "segment" : { "startIndex" : 25 , "endIndex" : 147 }, "segment text" : "ipsum lorem ..." , "supportChunkIndices" : [ 1 , 2 ], "confidenceScore" : [ 0.9541752 , 0.97726375 ] }, { "segment" : { "startIndex" : 294 , "endIndex" : 439 }, "segment text" : "ipsum lorem ..." , "supportChunkIndices" : [ 1 ], "confidenceScore" : [ 0.9541752 , 0.9325467 ] } ] } } ], "usageMetadata" : { "..." } } Set up a search API endpoint If you don't have an existing API endpoint that meets the requirements, this section guides you through setting one up using Cloud Functions and API Gateway.
- The original query was: " + user query , "uri" : "https://example.com/docs/fixed-test-data" }, { "snippet" : "Another piece of fixed information to demonstrate the list format." , "uri" : "https://example.com/another-fixed-source" } ] --- END OF FIXED RESPONSE --- return jsonify ( fixed results ) requirements.py functions-framework> = 3 .0.0 Flask > = 2 .0.0 Deployment: Navigate to the directory containing main.py and requirements.txt and run: gcloud functions deploy custom search wrapper \ --runtime python311 \ --trigger-http \ --entry-point custom search wrapper \ --region YOUR REGION \ --allow-unauthenticated \ --gen2 Replace YOUR REGION with your chosen Google Cloud region, such as us-central1 . --allow-unauthenticated is specified because API Gateway handles authentication.

### "Deploy and inference Gemma using Model Garden and Vertex AI TPU-backed endpoints\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial-tpu](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial-tpu)
- Source ID: `site-docs-root`
- Final score: 186
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up authentication for a local development environment . // Imports the Google Cloud Prediction Service Client library const { // TODO(developer): Uncomment PredictionServiceClient before running the sample. // PredictionServiceClient, helpers , } = require ( ' @google-cloud/aiplatform ' ); / TODO(developer): Update these variables before running the sample. / const projectId = 'your-project-id' ; const endpointRegion = 'your-vertex-endpoint-region' ; const endpointId = 'your-vertex-endpoint-id' ; // Prompt used in the prediction const prompt = 'Why is the sky blue?' ; // Encapsulate the prompt in a correct format for TPUs // Example format: [{prompt: 'Why is the sky blue?', temperature: 0.9}] const input = { prompt , // Parameters for default configuration maxOutputTokens : 1024 , temperature : 0.9 , topP : 1.0 , topK : 1 , }; // Convert input message to a list of GAPIC instances for model input const instances = [ helpers . toValue ( input )]; // TODO(developer): Uncomment apiEndpoint and predictionServiceClient before running the sample. // const apiEndpoint = ${endpointRegion}-aiplatform.googleapis.com; // Create a client // predictionServiceClient = new PredictionServiceClient({apiEndpoint}); // Call the Gemma2 endpoint const gemma2Endpoint = projects/ ${ projectId } /locations/ ${ endpointRegion } /endpoints/ ${ endpointId } ; const [ response ] = await predictionServiceClient . predict ({ endpoint : gemma2Endpoint , instances , }); const predictions = response . predictions ; const text = predictions [ 0 ]. stringValue ; console . log ( 'Predictions:' , text ); Java Before trying this sample, follow the Java setup instructions in the Vertex AI quickstart using client libraries .
- String projectId = "YOUR PROJECT ID" ; String endpointRegion = "us-west1" ; String endpointId = "YOUR ENDPOINT ID" ; PredictionServiceSettings predictionServiceSettings = PredictionServiceSettings . newBuilder () . setEndpoint ( String . format ( "%s-aiplatform.googleapis.com:443" , endpointRegion )) . build (); PredictionServiceClient predictionServiceClient = PredictionServiceClient . create ( predictionServiceSettings ); Gemma2PredictTpu creator = new Gemma2PredictTpu ( predictionServiceClient ); creator . gemma2PredictTpu ( projectId , endpointRegion , endpointId ); } // Demonstrates how to run inference on a Gemma2 model // deployed to a Vertex AI endpoint with TPU accelerators. public String gemma2PredictTpu ( String projectId , String region , String endpointId ) throws IOException { Map<String , Object > paramsMap = new HashMap <> (); paramsMap . put ( "temperature" , 0.9 ); paramsMap . put ( "maxOutputTokens" , 1024 ); paramsMap . put ( "topP" , 1.0 ); paramsMap . put ( "topK" , 1 ); Value parameters = mapToValue ( paramsMap ); // Prompt used in the prediction String instance = "{ \"prompt\": \"Why is the sky blue?\"}" ; Value .
- Builder instanceValue = Value . newBuilder (); JsonFormat . parser (). merge ( instance , instanceValue ); // Encapsulate the prompt in a correct format for TPUs // Example format: [{'prompt': 'Why is the sky blue?', 'temperature': 0.9}] List<Value> instances = new ArrayList <> (); instances . add ( instanceValue . build ()); EndpointName endpointName = EndpointName . of ( projectId , region , endpointId ); PredictResponse predictResponse = this . predictionServiceClient . predict ( endpointName , instances , parameters ); String textResponse = predictResponse . getPredictions ( 0 ). getStringValue (); System . out . println ( textResponse ); return textResponse ; } private static Value mapToValue ( Map<String , Object > map ) throws InvalidProtocolBufferException { Gson gson = new Gson (); String json = gson . toJson ( map ); Value .
- JsonFormat ; import java.io.IOException ; import java.util.ArrayList ; import java.util.HashMap ; import java.util.List ; import java.util.Map ; public class Gemma2PredictTpu { private final PredictionServiceClient predictionServiceClient ; // Constructor to inject the PredictionServiceClient public Gemma2PredictTpu ( PredictionServiceClient predictionServiceClient ) { this . predictionServiceClient = predictionServiceClient ; } public static void main ( String [] args ) throws IOException { // TODO(developer): Replace these variables before running the sample.

### "Grounding with Parallel Web Search \_|\_ Generative AI on Vertex AI \_|\_\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-parallel](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-parallel)
- Source ID: `site-docs-root`
- Final score: 172
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Grounding with Parallel on Vertex AI is a Separate Offering (as defined in your Google Cloud Agreement) that connects Gemini models to public web data provided by Parallel Web Systems' search API .
- Supported models This section lists the models that support Grounding with Parallel Web Search Before you begin To use Grounding with Parallel, you need to get an API key from Parallel's web site .
- Parallel Web Systems offers a search API that provides access to publicly available web data that's optimized for use by large language models for grounding.
- This API key is used in your request to Gemini.

