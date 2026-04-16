---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:18.698Z"
product_name: "Generative AI on Vertex AI"
product_slug: "generative-ai-on-vertex-ai"
feature_name: "Controlled Customization"
feature_slug: "controlled-customization"
latest_feature_date: "2024-12-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial-tpu"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/quickstart"
keywords:
  - "controlled"
  - "customization"
  - "mode"
  - "that"
  - "uses"
  - "canny"
  - "edge"
  - "and"
---

# Controlled Customization

Product: Generative AI on Vertex AI
Coverage: MEDIUM

## Step 02 Summary

A customization mode that uses canny edge and scribble guidance.

## Extended Definition

A customization mode that uses canny edge and scribble guidance.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial-tpu](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial-tpu)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/quickstart](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/quickstart)

## Supporting Pages

### "Deploy and inference Gemma using Model Garden and Vertex AI GPU-backed endpoints\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial)
- Source ID: `site-docs-root`
- Final score: 179
- Re-rank relevance: N/A

Evidence snippets:
- Run the following command in the terminal to create or overwrite this file in the current directory: @' { "hugging face model id": " MODEL ID ", "hugging face access token": " ACCESS TOKEN ", "model config": { "accept eula": "true" } } '@ Out-File -FilePath request.json -Encoding utf8 Then execute the following command to send your REST request: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION :deploy" Select-Object -Expand Content You receive a JSON response similar to the following. { "name": "projects/ PROJECT ID /locations/us-central1 LOCATION /operations/ OPERATION ID ", "metadata": { "@type": "type.googleapis.com/google.cloud.aiplatform.v1.DeployOperationMetadata", "genericMetadata": { "createTime": "2025-03-13T21:44:44.538780Z", "updateTime": "2025-03-13T21:44:44.538780Z" }, "publisherModel": "publishers/ PUBLISHER NAME /model/ MODEL NAME ", "destination": "projects/ PROJECT ID /locations/ LOCATION ", "projectNumber": " PROJECT ID " } } Deploy a model with customizations Before using any of the request data, make the following replacements: LOCATION : A region where the model is deployed.
- Run the following command in the terminal to create or overwrite this file in the current directory: cat > request.json MODEL ID ", "deploy config": { "dedicated resources": { "machine spec": { "machine type": " MACHINE TYPE ", "accelerator type": " ACCELERATOR TYPE ", "accelerator count": ACCELERATOR COUNT , "reservation affinity": { "reservation affinity type": "ANY RESERVATION" } }, "spot": "false" } }, "model config": { "accept eula": "true", "container spec": { "image uri": " IMAGE URI ", "args": [ CONTAINER ARGS ], "ports": [ { "container port": CONTAINER PORT } ] } }, "deploy config": { "fast tryout enabled": false }, } EOF Then execute the following command to send your REST request: curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION :deploy" PowerShell Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login .
- HTTP method and URL: POST https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION :deploy Request JSON body: { "publisher model name": " MODEL ID ", "deploy config": { "dedicated resources": { "machine spec": { "machine type": " MACHINE TYPE ", "accelerator type": " ACCELERATOR TYPE ", "accelerator count": ACCELERATOR COUNT , "reservation affinity": { "reservation affinity type": "ANY RESERVATION" } }, "spot": "false" } }, "model config": { "accept eula": "true", "container spec": { "image uri": " IMAGE URI ", "args": [ CONTAINER ARGS ], "ports": [ { "container port": CONTAINER PORT } ] } }, "deploy config": { "fast tryout enabled": false }, } To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Run the following command in the terminal to create or overwrite this file in the current directory: cat > request.json MODEL ID ", "hugging face access token": " ACCESS TOKEN ", "model config": { "accept eula": "true" } } EOF Then execute the following command to send your REST request: curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION :deploy" PowerShell Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login .

### "Deploy and inference Gemma using Model Garden and Vertex AI TPU-backed endpoints\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial-tpu](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial-tpu)
- Source ID: `site-docs-root`
- Final score: 141
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up authentication for a local development environment . // Imports the Google Cloud Prediction Service Client library const { // TODO(developer): Uncomment PredictionServiceClient before running the sample. // PredictionServiceClient, helpers , } = require ( ' @google-cloud/aiplatform ' ); / TODO(developer): Update these variables before running the sample. / const projectId = 'your-project-id' ; const endpointRegion = 'your-vertex-endpoint-region' ; const endpointId = 'your-vertex-endpoint-id' ; // Prompt used in the prediction const prompt = 'Why is the sky blue?' ; // Encapsulate the prompt in a correct format for TPUs // Example format: [{prompt: 'Why is the sky blue?', temperature: 0.9}] const input = { prompt , // Parameters for default configuration maxOutputTokens : 1024 , temperature : 0.9 , topP : 1.0 , topK : 1 , }; // Convert input message to a list of GAPIC instances for model input const instances = [ helpers . toValue ( input )]; // TODO(developer): Uncomment apiEndpoint and predictionServiceClient before running the sample. // const apiEndpoint = ${endpointRegion}-aiplatform.googleapis.com; // Create a client // predictionServiceClient = new PredictionServiceClient({apiEndpoint}); // Call the Gemma2 endpoint const gemma2Endpoint = projects/ ${ projectId } /locations/ ${ endpointRegion } /endpoints/ ${ endpointId } ; const [ response ] = await predictionServiceClient . predict ({ endpoint : gemma2Endpoint , instances , }); const predictions = response . predictions ; const text = predictions [ 0 ]. stringValue ; console . log ( 'Predictions:' , text ); Java Before trying this sample, follow the Java setup instructions in the Vertex AI quickstart using client libraries .
- Objectives This tutorial shows you how to perform the following tasks: Deploy the Gemma 2 2B open model to a TPU backed endpoint by using Model Garden Use the PredictionServiceClient to get online predictions Costs In this document, you use the following billable components of Google Cloud: A ct5lp-hightpu-1t machine type with one TPU V5 accelerator Vertex AI prediction and explanation To generate a cost estimate based on your projected usage, use the pricing calculator .
- The aiplatform Go client library Go support for Protocol Buffers Google API Extensions for Go (gax-go) go get cloud.google.com/go/aiplatform go get google.golang.org/protobuf go get github.com/googleapis/gax-go/v2 Deploy Gemma using Model Garden You deploy the Gemma 2 2B model to a ct5lp-hightpu-1t Compute Engine machine type that is optimized for small to medium scale training.
- In the confirmation prompt, click Delete . gcloud To delete the model using the Google Cloud CLI, provide the model's display name and region to the gcloud ai models delete command. gcloud ai models delete DEPLOYED MODEL NAME \ --project = PROJECT ID \ --region = LOCATION ID Replace DEPLOYED MODEL NAME with the model's display name.

### "Generative AI glossary \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai)
- Source ID: `site-docs-root`
- Final score: 124
- Re-rank relevance: N/A

Evidence snippets:
- Phrased differently, a model is the set of parameters and structure needed for a system to make inferences. model distillation (knowledge distillation, teacher-student models) Model distillation is a technique that allows a smaller student model to learn from a larger teacher model.
- For deployed models, continuous monitoring and capturing of common data points and edge cases help improve future validation efforts. vector A vector refers to a numerical representation of text, images, or videos that captures relationships between inputs.
- However, for generative tasks like summarization and text generation, other metrics like Rough-L score might be more appropriate. feature In machine learning (ML), a feature is a characteristic or attribute of an instance or entity that's used as an input to train an ML model or to make inferences. feature extraction In the context of generative AI, feature extraction refers to the process of identifying and selecting relevant features from input data to be used in model training.
- Examples include learning rate, dropout rate, and number of training steps. partition In Slurm, a logical grouping of nodes, often used to separate nodes with different hardware configurations. performance tier A configuration setting for a Managed Lustre instance that defines its throughput speed (in MBps per TiB) and affects its minimum and maximum capacity. perplexity Perplexity is a metric used to evaluate the performance of language models.

### "Test model capabilities in Model Garden \_|\_ Generative AI on Vertex AI\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/quickstart](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/quickstart)
- Source ID: `site-docs-root`
- Final score: 124
- Re-rank relevance: N/A

Evidence snippets:
- Model Garden deploys your selected model in Vertex AI and deploys the sample app on a Cloud Run instance that uses the deployed model's endpoint.
- Required roles for users To get the permissions that you need to test model capabilities in Model Garden, ask your administrator to grant you the following IAM roles on your Google Cloud project: Service Usage Admin ( roles/serviceusage.serviceUsageAdmin ) Artifact Registry Administrator ( roles/artifactregistry.admin ) Cloud Run Admin ( roles/run.admin ) Storage Admin ( roles/storage.admin ) Vertex AI User ( roles/aiplatform.user ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- When you launch Spaces, you have a working web application that's ready to use with far less manual effort than deploying a model and building an app to use the model's endpoint.
- Required roles To test model capabilities in Model Garden, ensure that both you and the Compute Engine default service account have the required IAM roles.

