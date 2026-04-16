---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:18.702Z"
product_name: "Generative AI on Vertex AI"
product_slug: "generative-ai-on-vertex-ai"
feature_name: "Instruct Customization"
feature_slug: "instruct-customization"
latest_feature_date: "2024-12-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/control-model-access"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/express-mode/vertex-ai-studio-express-mode-quickstart"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-for-tuned-gemini"
keywords:
  - "instruct"
  - "customization"
  - "mode"
  - "for"
  - "style"
  - "transfer"
  - "driven"
  - "by"
---

# Instruct Customization

Product: Generative AI on Vertex AI
Coverage: MEDIUM

## Step 02 Summary

A customization mode for style transfer driven by instructions.

## Extended Definition

A customization mode for style transfer driven by instructions.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/control-model-access](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/control-model-access)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/express-mode/vertex-ai-studio-express-mode-quickstart](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/express-mode/vertex-ai-studio-express-mode-quickstart)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-for-tuned-gemini](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-for-tuned-gemini)

## Supporting Pages

### "Deploy and inference Gemma using Model Garden and Vertex AI GPU-backed endpoints\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial)
- Source ID: `site-docs-root`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- Deploy a model The following example deploys the gemma-3-1b-it model to a new Vertex AI endpoint in us-central1 by using default configurations. terraform { required providers { google = { source = "hashicorp/google" version = "6.45.0" } } } provider "google" { region = "us-central1" } resource "google vertex ai endpoint with model garden deployment" "gemma deployment" { publisher model name = "publishers/google/models/gemma3@gemma-3-1b-it" location = "us-central1" model config { accept eula = True } } To deploy a model with customization, see Vertex AI Endpoint with Model Garden Deployment for details.
- For more information, see Set up authentication for a local development environment . async function gemma2PredictGpu ( predictionServiceClient ) { // Imports the Google Cloud Prediction Service Client library const { // TODO(developer): Uncomment PredictionServiceClient before running the sample. // PredictionServiceClient, helpers , } = require ( ' @google-cloud/aiplatform ' ); / TODO(developer): Update these variables before running the sample. / const projectId = 'your-project-id' ; const endpointRegion = 'your-vertex-endpoint-region' ; const endpointId = 'your-vertex-endpoint-id' ; // Default configuration const config = { maxOutputTokens : 1024 , temperature : 0.9 , topP : 1.0 , topK : 1 }; // Prompt used in the prediction const prompt = 'Why is the sky blue?' ; // Encapsulate the prompt in a correct format for GPUs // Example format: [{inputs: 'Why is the sky blue?', parameters: {temperature: 0.9}}] const input = { inputs : prompt , parameters : config , }; // Convert input message to a list of GAPIC instances for model input const instances = [ helpers . toValue ( input )]; // TODO(developer): Uncomment apiEndpoint and predictionServiceClient before running the sample. // const apiEndpoint = ${endpointRegion}-aiplatform.googleapis.com; // Create a client // predictionServiceClient = new PredictionServiceClient({apiEndpoint}); // Call the Gemma2 endpoint const gemma2Endpoint = projects/ ${ projectId } /locations/ ${ endpointRegion } /endpoints/ ${ endpointId } ; const [ response ] = await predictionServiceClient . predict ({ endpoint : gemma2Endpoint , instances , }); const predictions = response . predictions ; const text = predictions [ 0 ]. stringValue ; console . log ( 'Predictions:' , text ); return text ; } module . exports = gemma2PredictGpu ; // TODO(developer): Uncomment below lines before running the sample. // gemma2PredictGpu(...process.argv.slice(2)).catch(err => { // console.error(err.message); // process.exitCode = 1; // }); Java Before trying this sample, follow the Java setup instructions in the Vertex AI quickstart using client libraries .
- Run the following command in the terminal to create or overwrite this file in the current directory: @' { "hugging face model id": " MODEL ID ", "hugging face access token": " ACCESS TOKEN ", "model config": { "accept eula": "true" } } '@ Out-File -FilePath request.json -Encoding utf8 Then execute the following command to send your REST request: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION :deploy" Select-Object -Expand Content You receive a JSON response similar to the following. { "name": "projects/ PROJECT ID /locations/us-central1 LOCATION /operations/ OPERATION ID ", "metadata": { "@type": "type.googleapis.com/google.cloud.aiplatform.v1.DeployOperationMetadata", "genericMetadata": { "createTime": "2025-03-13T21:44:44.538780Z", "updateTime": "2025-03-13T21:44:44.538780Z" }, "publisherModel": "publishers/ PUBLISHER NAME /model/ MODEL NAME ", "destination": "projects/ PROJECT ID /locations/ LOCATION ", "projectNumber": " PROJECT ID " } } Deploy a model with customizations Before using any of the request data, make the following replacements: LOCATION : A region where the model is deployed.
- Run the following command in the terminal to create or overwrite this file in the current directory: cat > request.json MODEL ID ", "deploy config": { "dedicated resources": { "machine spec": { "machine type": " MACHINE TYPE ", "accelerator type": " ACCELERATOR TYPE ", "accelerator count": ACCELERATOR COUNT , "reservation affinity": { "reservation affinity type": "ANY RESERVATION" } }, "spot": "false" } }, "model config": { "accept eula": "true", "container spec": { "image uri": " IMAGE URI ", "args": [ CONTAINER ARGS ], "ports": [ { "container port": CONTAINER PORT } ] } }, "deploy config": { "fast tryout enabled": false }, } EOF Then execute the following command to send your REST request: curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION :deploy" PowerShell Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login .

### "Control access to Model Garden models \_|\_ Generative AI on Vertex AI \_\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/control-model-access](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/control-model-access)
- Source ID: `site-docs-root`
- Final score: 129
- Re-rank relevance: N/A

Evidence snippets:
- Set a policy for partner model features You can allow or deny web search for partner models by using the vertexai.allowedPartnerModelFeatures constraint.
- Set a policy for model actions You can set a policy for Model Garden by using the Google Cloud console or the Google Cloud CLI.
- Allow a set of models and deny all other models The following example allows actions on a specific set of models. name : organizations/ ORGANIZATION ID /policies/vertexai.allowedModels spec : rules : values : allowedValues : - publishers/meta/models/llama3:deploy - publishers/google/models/gemini-2.0-flash-001:tune - publishers/hf-google/models/gemma-2b:deploy Enable web search for partner models To enable the web search feature for partner models, you can specify the following: All features for all models from a specific publisher, for example: publishers/anthropic All features for a specific model, for example: publishers/anthropic/models/ MODEL NAME The web search feature for a specific model, for example: publishers/anthropic/models/ MODEL NAME :web search The following example enables web search for all models from Anthropic: name : organizations/ ORGANIZATION ID /policies/vertexai.allowedPartnerModelFeatures spec : rules : values : allowedValues : Allow all features of this publisher - publishers/anthropic Allow all features of this model - publishers/anthropic/models/ MODEL NAME Allow this feature - publishers/anthropic/models/ MODEL NAME :web search What's next Guide Use models in Model Garden Use generative models from Model Garden in the Google Cloud Console.
- Model actions For each model, you can allow or deny the following actions: predict : Specifies whether users can make online and batch predictions against a model with a managed API (model as a service). deploy : For models without a managed API, specifies whether users can deploy models on Google Cloud.

### "Tutorial: Vertex AI Studio in express mode \_|\_ Generative AI on Vertex\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/express-mode/vertex-ai-studio-express-mode-quickstart](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/express-mode/vertex-ai-studio-express-mode-quickstart)
- Source ID: `site-docs-root`
- Final score: 129
- Re-rank relevance: N/A

Evidence snippets:
- A response like the following is returned in the Response box: Here are some good names for a flower shop specializing in dried flowers, categorized by style: Elegant & Romantic: Everlasting Bloom The Dried Flower Garden Bloom & Branch ...
- This quickstart shows you how to perform the following tasks in Vertex AI Studio in express mode: View and try a list of sample prompts.
- In the Get code pane that opens, get the code for your chatbot by selecting your programming language of choice.
- Before you begin Before performing the tasks described on this page, sign up for express mode .

### "Context Caching for Fine-tuned Gemini Models \_|\_ Generative AI on Vertex\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-for-tuned-gemini](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-for-tuned-gemini)
- Source ID: `site-docs-root`
- Final score: 127
- Re-rank relevance: N/A

Evidence snippets:
- HTTP method and URL: POST https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /cachedContents Request JSON body: { "model": "projects/ PROJECT ID /locations/ LOCATION /models/ MODEL ID @ MODEL VERSION ", "displayName": " CACHE DISPLAY NAME ", "contents": [{ "role": "user", "parts": [{ "fileData": { "mimeType": " MIME TYPE ", "fileUri": " CONTENT TO CACHE URI " } }] }] } To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- When you use a context cache, you can't specify the following properties: GenerativeModel.system instructions GenerativeModel.tool config GenerativeModel.tools REST You can use REST to specify a context cache with a prompt by using the Vertex AI API to send a POST request to the publisher model endpoint.
- Response { "candidates": [ { "content": { "role": "model", "parts": [ { "text": " MODEL RESPONSE " } ] }, "finishReason": "STOP", "safetyRatings": [ { "category": "HARM CATEGORY HATE SPEECH", "probability": "NEGLIGIBLE", "probabilityScore": 0.21866937, "severity": "HARM SEVERITY NEGLIGIBLE", "severityScore": 0.19946389 }, { "category": "HARM CATEGORY DANGEROUS CONTENT", "probability": "MEDIUM", "probabilityScore": 0.6880493, "severity": "HARM SEVERITY MEDIUM", "severityScore": 0.43374163 }, { "category": "HARM CATEGORY HARASSMENT", "probability": "NEGLIGIBLE", "probabilityScore": 0.4442634, "severity": "HARM SEVERITY LOW", "severityScore": 0.37903354 }, { "category": "HARM CATEGORY SEXUALLY EXPLICIT", "probability": "NEGLIGIBLE", "probabilityScore": 0.10502681, "severity": "HARM SEVERITY LOW", "severityScore": 0.28170192 } ] } ], "usageMetadata": { "promptTokenCount": 55927, "candidatesTokenCount": 105, "totalTokenCount": 56032 } } Example curl command LOCATION = "us-central1" PROJECT ID = "test-project" ENDPOINT ID = 987654321 curl -X POST \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ "https:// ${ LOCATION } -aiplatform.googleapis.com/v1/projects/ ${ PROJECT ID } /locations/ ${ LOCATION } /endpoints/ ${ ENDPOINT ID } :generateContent" -d \ '{ "cachedContent": "projects/${PROJECT NUMBER}/locations/${LOCATION}/cachedContents/${CACHE ID}", "contents": [ {"role":"user","parts":[{"text":"What are the benefits of exercise?"}]} ], "generationConfig": { "maxOutputTokens": 8192, "temperature": 1, "topP": 0.95, }, "safetySettings": [ { "category": "HARM CATEGORY HATE SPEECH", "threshold": "BLOCK MEDIUM AND ABOVE" }, { "category": "HARM CATEGORY DANGEROUS CONTENT", "threshold": "BLOCK MEDIUM AND ABOVE" }, { "category": "HARM CATEGORY SEXUALLY EXPLICIT", "threshold": "BLOCK MEDIUM AND ABOVE" }, { "category": "HARM CATEGORY HARASSMENT", "threshold": "BLOCK MEDIUM AND ABOVE" } ], }' Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /cachedContents" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "name": "projects/ PROJECT NUMBER /locations/us-central1/cachedContents/ CACHE ID ", "model": "projects/ PROJECT ID /locations/ LOCATION /models/ MODEL ID @ MODEL VERSION ", "createTime": "2024-06-04T01:11:50.808236Z", "updateTime": "2024-06-04T01:11:50.808236Z", "expireTime": "2024-06-04T02:11:50.794542Z" } Example curl command LOCATION = "us-central1" MODEL ID = "model-id" PROJECT ID = "test-project" MODEL VERSION = 1 MIME TYPE = "video/mp4" CACHED CONTENT URI = "gs://path-to-bucket/video-file-name.mp4" curl -X POST \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ https:// ${ LOCATION } -aiplatform.googleapis.com/v1/projects/ ${ PROJECT ID } /locations/ ${ LOCATION } /cachedContents -d \ '{ "model":"projects/${PROJECT ID}/locations/${LOCATION}/models/${MODEL ID}@${MODEL VERSION}", "contents": [ { "role": "user", "parts": [ { "fileData": { "mimeType": "${MIME TYPE}", "fileUri": "${CACHED CONTENT URI}" } } ] } ] }' Use a context cache for a fine-tuned model The procedure for using a context cache for a fine-tuned model largely follows the steps outlined in Use a context cache .

