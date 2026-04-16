---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:18.715Z"
product_name: "Generative AI on Vertex AI"
product_slug: "generative-ai-on-vertex-ai"
feature_name: "Token listing and counting in Vertex AI SDK for Python"
feature_slug: "token-listing-and-counting-in-vertex-ai-sdk-for-python"
latest_feature_date: "2024-08-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial-tpu"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-maps"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/batch-prediction-genai-embeddings"
keywords:
  - "token"
  - "listing"
  - "and"
  - "counting"
  - "in"
  - "vertex"
  - "ai"
  - "sdk"
---

# Token listing and counting in Vertex AI SDK for Python

Product: Generative AI on Vertex AI
Coverage: MEDIUM

## Step 02 Summary

The Vertex AI SDK for Python can list and count prompt tokens without making API calls.

## Extended Definition

The Vertex AI SDK for Python can list and count prompt tokens without making API calls.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial-tpu](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial-tpu)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-maps](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-maps)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/batch-prediction-genai-embeddings](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/batch-prediction-genai-embeddings)

## Supporting Pages

### "Deploy and inference Gemma using Model Garden and Vertex AI GPU-backed endpoints\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial)
- Source ID: `site-docs-root`
- Final score: 352
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see Set up authentication for a local development environment . async function gemma2PredictGpu ( predictionServiceClient ) { // Imports the Google Cloud Prediction Service Client library const { // TODO(developer): Uncomment PredictionServiceClient before running the sample. // PredictionServiceClient, helpers , } = require ( ' @google-cloud/aiplatform ' ); / TODO(developer): Update these variables before running the sample. / const projectId = 'your-project-id' ; const endpointRegion = 'your-vertex-endpoint-region' ; const endpointId = 'your-vertex-endpoint-id' ; // Default configuration const config = { maxOutputTokens : 1024 , temperature : 0.9 , topP : 1.0 , topK : 1 }; // Prompt used in the prediction const prompt = 'Why is the sky blue?' ; // Encapsulate the prompt in a correct format for GPUs // Example format: [{inputs: 'Why is the sky blue?', parameters: {temperature: 0.9}}] const input = { inputs : prompt , parameters : config , }; // Convert input message to a list of GAPIC instances for model input const instances = [ helpers . toValue ( input )]; // TODO(developer): Uncomment apiEndpoint and predictionServiceClient before running the sample. // const apiEndpoint = ${endpointRegion}-aiplatform.googleapis.com; // Create a client // predictionServiceClient = new PredictionServiceClient({apiEndpoint}); // Call the Gemma2 endpoint const gemma2Endpoint = projects/ ${ projectId } /locations/ ${ endpointRegion } /endpoints/ ${ endpointId } ; const [ response ] = await predictionServiceClient . predict ({ endpoint : gemma2Endpoint , instances , }); const predictions = response . predictions ; const text = predictions [ 0 ]. stringValue ; console . log ( 'Predictions:' , text ); return text ; } module . exports = gemma2PredictGpu ; // TODO(developer): Uncomment below lines before running the sample. // gemma2PredictGpu(...process.argv.slice(2)).catch(err => { // console.error(err.message); // process.exitCode = 1; // }); Java Before trying this sample, follow the Java setup instructions in the Vertex AI quickstart using client libraries .
- QUERY PARAMETERS " Select-Object -Expand Content You receive a JSON response similar to the following. { "publisherModels": [ { "name": "publishers/google/models/gemma3", "versionId": "gemma-3-1b-it", "openSourceCategory": "GOOGLE OWNED OSS WITH GOOGLE CHECKPOINT", "supportedActions": { "openNotebook": { "references": { "us-central1": { "uri": "https://colab.research.google.com/github/GoogleCloudPlatform/vertex-ai-samples/blob/main/notebooks/community/model garden/model garden gradio streaming chat completions.ipynb" } }, "resourceTitle": "Notebook", "resourceUseCase": "Chat Completion Playground", "resourceDescription": "Chat with deployed Gemma 2 endpoints via Gradio UI." }, "deploy": { "modelDisplayName": "gemma-3-1b-it", "containerSpec": { "imageUri": "us-docker.pkg.dev/vertex-ai/vertex-vision-model-garden-dockers/pytorch-vllm-serve:20250312 0916 RC01", "args": [ "python", "-m", "vllm.entrypoints.api server", "--host=0.0.0.0", "--port=8080", "--model=gs://vertex-model-garden-restricted-us/gemma3/gemma-3-1b-it", "--tensor-parallel-size=1", "--swap-space=16", "--gpu-memory-utilization=0.95", "--disable-log-stats" ], "env": [ { "name": "MODEL ID", "value": "google/gemma-3-1b-it" }, { "name": "DEPLOY SOURCE", "value": "UI NATIVE MODEL" } ], "ports": [ { "containerPort": 8080 } ], "predictRoute": "/generate", "healthRoute": "/ping" }, "dedicatedResources": { "machineSpec": { "machineType": "g2-standard-12", "acceleratorType": "NVIDIA L4", "acceleratorCount": 1 } }, "publicArtifactUri": "gs://vertex-model-garden-restricted-us/gemma3/gemma3.tar.gz", "deployTaskName": "vLLM 128K context", "deployMetadata": { "sampleRequest": "{\n \"instances\": [\n {\n \"@requestFormat\": \"chatCompletions\",\n \"messages\": [\n {\n \"role\": \"user\",\n \"content\": \"What is machine learning?\"\n }\n ],\n \"max tokens\": 100\n }\n ]\n}\n" } }, ...
- Install and update the Vertex AI SDK for Python by running this command. pip3 install --upgrade "google-cloud-aiplatform>=1.64" Install the Protocol Buffers library for Python by running this command. pip3 install --upgrade "protobuf>=5.28" Node.js Install or update the aiplatform SDK for Node.js by running the following command. npm install @google-cloud/aiplatform Java To add google-cloud-aiplatform as a dependency, add the appropriate code for your environment.
- Before you begin This tutorial requires you to: Set up a Google Cloud project and enable the Vertex AI API On your local machine: Install, initialize, and authenticate with the Google Cloud CLI Install the SDK for your language Set up a Google Cloud project Set up your Google Cloud project and enable the Vertex AI API.

### "Deploy and inference Gemma using Model Garden and Vertex AI TPU-backed endpoints\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial-tpu](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial-tpu)
- Source ID: `site-docs-root`
- Final score: 332
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see Set up authentication for a local development environment . // Imports the Google Cloud Prediction Service Client library const { // TODO(developer): Uncomment PredictionServiceClient before running the sample. // PredictionServiceClient, helpers , } = require ( ' @google-cloud/aiplatform ' ); / TODO(developer): Update these variables before running the sample. / const projectId = 'your-project-id' ; const endpointRegion = 'your-vertex-endpoint-region' ; const endpointId = 'your-vertex-endpoint-id' ; // Prompt used in the prediction const prompt = 'Why is the sky blue?' ; // Encapsulate the prompt in a correct format for TPUs // Example format: [{prompt: 'Why is the sky blue?', temperature: 0.9}] const input = { prompt , // Parameters for default configuration maxOutputTokens : 1024 , temperature : 0.9 , topP : 1.0 , topK : 1 , }; // Convert input message to a list of GAPIC instances for model input const instances = [ helpers . toValue ( input )]; // TODO(developer): Uncomment apiEndpoint and predictionServiceClient before running the sample. // const apiEndpoint = ${endpointRegion}-aiplatform.googleapis.com; // Create a client // predictionServiceClient = new PredictionServiceClient({apiEndpoint}); // Call the Gemma2 endpoint const gemma2Endpoint = projects/ ${ projectId } /locations/ ${ endpointRegion } /endpoints/ ${ endpointId } ; const [ response ] = await predictionServiceClient . predict ({ endpoint : gemma2Endpoint , instances , }); const predictions = response . predictions ; const text = predictions [ 0 ]. stringValue ; console . log ( 'Predictions:' , text ); Java Before trying this sample, follow the Java setup instructions in the Vertex AI quickstart using client libraries .
- Install and update the Vertex AI SDK for Python by running this command. pip3 install --upgrade "google-cloud-aiplatform>=1.64" Install the Protocol Buffers library for Python by running this command. pip3 install --upgrade "protobuf>=5.28" Node.js Install or update the aiplatform SDK for Node.js by running the following command. npm install @google-cloud/aiplatform Java To add google-cloud-aiplatform as a dependency, add the appropriate code for your environment.
- Before you begin This tutorial requires you to: Set up a Google Cloud project and enable the Vertex AI API On your local machine: Install, initialize, and authenticate with the Google Cloud CLI Install the SDK for your language Set up a Google Cloud project Set up your Google Cloud project and enable the Vertex AI API.
- Set up the SDK for your programming language To set up the environment used in this tutorial, you install the Vertex AI SDK for your language and the Protocol Buffers library.

### "Grounding with Google Maps in Vertex AI \_|\_ Generative AI on Vertex AI\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-maps](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-maps)
- Source ID: `site-docs-root`
- Final score: 332
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The contextual widget is rendered using the context token, googleMapsWidgetContextToken , which is returned in the Vertex AI API response and can be used to render visual content.
- The Routing tool supports the following: Modes of transportation : Routing for driving, walking, bicycling, transit, and two-wheeled motorized vehicles (not all travel modes are available in all countries) Multiple waypoints : Up to 13 intermediate stops between origin and destination Real-time traffic : Accounting for current traffic conditions to provide accurate "live" travel times rather than static averages The following are examples of the types of questions that the Routing tool supports: Proximity based on travel time : "What are some American restaurants within a 10-minute walk from the Hilton Hotel on 1335 6th Ave in NYC?" Commute estimation : "How long does it take to take public transit from Pike Place Market to Capitol Hill in Seattle?" Understand the response When a prompt triggers the Routing tool, the model generates a natural language answer backed by structured metadata.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json ` -Uri "https:// LOCATION -aiplatform.googleapis.com/v1beta1/projects/ PROJECT ID /locations/ LOCATION /publishers/google/models/ MODEL ID :generateContent" Select-Object -Expand Content You should receive a JSON response similar to the following: { "candidates": [ { "content": { "role": "model", "parts": [ { "text": "\"The Italian Place\" in Alexandria, VA, is good for children and offers takeout.
- Save the request body in a file named request.json , and execute the following command: curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https:// LOCATION -aiplatform.googleapis.com/v1beta1/projects/ PROJECT ID /locations/ LOCATION /publishers/google/models/ MODEL ID :generateContent" PowerShell (Windows) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login .

### "Get batch text embeddings inferences \_|\_ Generative AI on Vertex AI \_\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/batch-prediction-genai-embeddings](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings/batch-prediction-genai-embeddings)
- Source ID: `site-docs-root`
- Final score: 314
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Set environment variables to use the Gen AI SDK with Vertex AI: Replace the GOOGLE CLOUD PROJECT and GOOGLE CLOUD LOCATION values with appropriate values for your project. export GOOGLE CLOUD PROJECT = GOOGLE CLOUD PROJECT export GOOGLE CLOUD LOCATION = us-central1 export GOOGLE GENAI USE VERTEXAI = True import ( "context" "fmt" "io" "time" "google.golang.org/genai" ) // generateBatchEmbeddings shows how to run a batch embeddings prediction job . func generateBatchEmbeddings ( w io .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://us-central1-aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/us-central1/batchPredictionJobs" Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/123456789012/locations/us-central1/batchPredictionJobs/1234567890123456789", "displayName": "BP sample publisher BQ 20230712 134650", "model": "projects/{PROJECT ID}/locations/us-central1/models/textembedding-gecko", "inputConfig": { "instancesFormat": "bigquery", "bigquerySource": { "inputUri": "bq://project name.dataset name.text input" } }, "modelParameters": {}, "outputConfig": { "predictionsFormat": "bigquery", "bigqueryDestination": { "outputUri": "bq://project name.llm dataset.embedding out BP sample publisher BQ 20230712 134650" } }, "state": "JOB STATE PENDING", "createTime": "2023-07-12T20:46:52.148717Z", "updateTime": "2023-07-12T20:46:52.148717Z", "labels": { "owner": "sample owner", "product": "llm" }, "modelVersionId": "1", "modelMonitoringStatus": {} } The response includes a unique identifier for the batch job.
- Save the request body in a file named request.json , and execute the following command: curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://us-central1-aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/us-central1/batchPredictionJobs" PowerShell Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login .
- Set environment variables to use the Gen AI SDK with Vertex AI: Replace the GOOGLE CLOUD PROJECT and GOOGLE CLOUD LOCATION values with appropriate values for your project. export GOOGLE CLOUD PROJECT = GOOGLE CLOUD PROJECT export GOOGLE CLOUD LOCATION = us-central1 export GOOGLE GENAI USE VERTEXAI = True import time from google import genai from google.genai.types import CreateBatchJobConfig , JobState , HttpOptions client = genai .

