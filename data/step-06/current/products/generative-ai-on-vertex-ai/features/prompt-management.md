---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:18.661Z"
product_name: "Generative AI on Vertex AI"
product_slug: "generative-ai-on-vertex-ai"
feature_name: "Prompt management"
feature_slug: "prompt-management"
latest_feature_date: "2025-10-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial-tpu"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/quickstarts/deploy-vais-prompt"
keywords:
  - "prompt"
  - "management"
  - "provides"
  - "tooling"
  - "to"
  - "manage"
  - "and"
  - "version"
---

# Prompt management

Product: Generative AI on Vertex AI
Coverage: MEDIUM

## Step 02 Summary

Prompt management provides tooling to manage and version prompts in Vertex AI.

## Extended Definition

Prompt management provides tooling to manage and version prompts in Vertex AI.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial-tpu](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial-tpu)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/quickstarts/deploy-vais-prompt](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/quickstarts/deploy-vais-prompt)

## Supporting Pages

### "Deploy and inference Gemma using Model Garden and Vertex AI GPU-backed endpoints\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial)
- Source ID: `site-docs-root`
- Final score: 192
- Re-rank relevance: N/A

Evidence snippets:
- Maven with BOM Add the following HTML to your pom.xml : <dependencyManagement> <dependencies> <dependency> <artifactId>libraries-bom</artifactId> <groupId>com.google.cloud</groupId> <scope>import</scope> <type>pom</type> <version>26.34.0</version> </dependency> </dependencies> </dependencyManagement> <dependencies> <dependency> <groupId>com.google.cloud</groupId> <artifactId>google-cloud-aiplatform</artifactId> </dependency> <dependency> <groupId>com.google.protobuf</groupId> <artifactId>protobuf-java-util</artifactId> </dependency> <dependency> <groupId>com.google.code.gson</groupId> <artifactId>gson</artifactId> </dependency> </dependencies> Maven without BOM Add the following to your pom.xml : <dependency> <groupId>com.google.cloud</groupId> <artifactId>google-cloud-aiplatform</artifactId> <version>1.1.0</version> </dependency> <dependency> <groupId>com.google.protobuf</groupId> <artifactId>protobuf-java-util</artifactId> <version>5.28</version> </dependency> <dependency> <groupId>com.google.code.gson</groupId> <artifactId>gson</artifactId> <version>2.11.0</version> </dependency> Gradle without BOM Add the following to your build.gradle : implementation 'com.google.cloud:google-cloud-aiplatform:1.1.0' Go Install these Go packages by running the following commands.
- For more information, see Set up authentication for a local development environment . async function gemma2PredictGpu ( predictionServiceClient ) { // Imports the Google Cloud Prediction Service Client library const { // TODO(developer): Uncomment PredictionServiceClient before running the sample. // PredictionServiceClient, helpers , } = require ( ' @google-cloud/aiplatform ' ); / TODO(developer): Update these variables before running the sample. / const projectId = 'your-project-id' ; const endpointRegion = 'your-vertex-endpoint-region' ; const endpointId = 'your-vertex-endpoint-id' ; // Default configuration const config = { maxOutputTokens : 1024 , temperature : 0.9 , topP : 1.0 , topK : 1 }; // Prompt used in the prediction const prompt = 'Why is the sky blue?' ; // Encapsulate the prompt in a correct format for GPUs // Example format: [{inputs: 'Why is the sky blue?', parameters: {temperature: 0.9}}] const input = { inputs : prompt , parameters : config , }; // Convert input message to a list of GAPIC instances for model input const instances = [ helpers . toValue ( input )]; // TODO(developer): Uncomment apiEndpoint and predictionServiceClient before running the sample. // const apiEndpoint = ${endpointRegion}-aiplatform.googleapis.com; // Create a client // predictionServiceClient = new PredictionServiceClient({apiEndpoint}); // Call the Gemma2 endpoint const gemma2Endpoint = projects/ ${ projectId } /locations/ ${ endpointRegion } /endpoints/ ${ endpointId } ; const [ response ] = await predictionServiceClient . predict ({ endpoint : gemma2Endpoint , instances , }); const predictions = response . predictions ; const text = predictions [ 0 ]. stringValue ; console . log ( 'Predictions:' , text ); return text ; } module . exports = gemma2PredictGpu ; // TODO(developer): Uncomment below lines before running the sample. // gemma2PredictGpu(...process.argv.slice(2)).catch(err => { // console.error(err.message); // process.exitCode = 1; // }); Java Before trying this sample, follow the Java setup instructions in the Vertex AI quickstart using client libraries .
- QUERY PARAMETERS " Select-Object -Expand Content You receive a JSON response similar to the following. { "publisherModels": [ { "name": "publishers/google/models/gemma3", "versionId": "gemma-3-1b-it", "openSourceCategory": "GOOGLE OWNED OSS WITH GOOGLE CHECKPOINT", "supportedActions": { "openNotebook": { "references": { "us-central1": { "uri": "https://colab.research.google.com/github/GoogleCloudPlatform/vertex-ai-samples/blob/main/notebooks/community/model garden/model garden gradio streaming chat completions.ipynb" } }, "resourceTitle": "Notebook", "resourceUseCase": "Chat Completion Playground", "resourceDescription": "Chat with deployed Gemma 2 endpoints via Gradio UI." }, "deploy": { "modelDisplayName": "gemma-3-1b-it", "containerSpec": { "imageUri": "us-docker.pkg.dev/vertex-ai/vertex-vision-model-garden-dockers/pytorch-vllm-serve:20250312 0916 RC01", "args": [ "python", "-m", "vllm.entrypoints.api server", "--host=0.0.0.0", "--port=8080", "--model=gs://vertex-model-garden-restricted-us/gemma3/gemma-3-1b-it", "--tensor-parallel-size=1", "--swap-space=16", "--gpu-memory-utilization=0.95", "--disable-log-stats" ], "env": [ { "name": "MODEL ID", "value": "google/gemma-3-1b-it" }, { "name": "DEPLOY SOURCE", "value": "UI NATIVE MODEL" } ], "ports": [ { "containerPort": 8080 } ], "predictRoute": "/generate", "healthRoute": "/ping" }, "dedicatedResources": { "machineSpec": { "machineType": "g2-standard-12", "acceleratorType": "NVIDIA L4", "acceleratorCount": 1 } }, "publicArtifactUri": "gs://vertex-model-garden-restricted-us/gemma3/gemma3.tar.gz", "deployTaskName": "vLLM 128K context", "deployMetadata": { "sampleRequest": "{\n \"instances\": [\n {\n \"@requestFormat\": \"chatCompletions\",\n \"messages\": [\n {\n \"role\": \"user\",\n \"content\": \"What is machine learning?\"\n }\n ],\n \"max tokens\": 100\n }\n ]\n}\n" } }, ...
- Clean Up To delete the endpoint and model deployment, run the following command: terraform destroy Inference Gemma 3 1B with the PredictionServiceClient After you deploy Gemma 3 1B, you use the PredictionServiceClient to get online predictions for the prompt: "Why is the sky blue?" Code parameters The PredictionServiceClient code samples require you to update the following.

### "Deploy and inference Gemma using Model Garden and Vertex AI TPU-backed endpoints\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial-tpu](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial-tpu)
- Source ID: `site-docs-root`
- Final score: 192
- Re-rank relevance: N/A

Evidence snippets:
- Maven with BOM Add the following HTML to your pom.xml : <dependencyManagement> <dependencies> <dependency> <artifactId>libraries-bom</artifactId> <groupId>com.google.cloud</groupId> <scope>import</scope> <type>pom</type> <version>26.34.0</version> </dependency> </dependencies> </dependencyManagement> <dependencies> <dependency> <groupId>com.google.cloud</groupId> <artifactId>google-cloud-aiplatform</artifactId> </dependency> <dependency> <groupId>com.google.protobuf</groupId> <artifactId>protobuf-java-util</artifactId> </dependency> <dependency> <groupId>com.google.code.gson</groupId> <artifactId>gson</artifactId> </dependency> </dependencies> Maven without BOM Add the following to your pom.xml : <dependency> <groupId>com.google.cloud</groupId> <artifactId>google-cloud-aiplatform</artifactId> <version>1.1.0</version> </dependency> <dependency> <groupId>com.google.protobuf</groupId> <artifactId>protobuf-java-util</artifactId> <version>5.28</version> </dependency> <dependency> <groupId>com.google.code.gson</groupId> <artifactId>gson</artifactId> <version>2.11.0</version> </dependency> Gradle without BOM Add the following to your build.gradle : implementation 'com.google.cloud:google-cloud-aiplatform:1.1.0' Go Install these Go packages by running the following commands.
- For more information, see Set up authentication for a local development environment . // Imports the Google Cloud Prediction Service Client library const { // TODO(developer): Uncomment PredictionServiceClient before running the sample. // PredictionServiceClient, helpers , } = require ( ' @google-cloud/aiplatform ' ); / TODO(developer): Update these variables before running the sample. / const projectId = 'your-project-id' ; const endpointRegion = 'your-vertex-endpoint-region' ; const endpointId = 'your-vertex-endpoint-id' ; // Prompt used in the prediction const prompt = 'Why is the sky blue?' ; // Encapsulate the prompt in a correct format for TPUs // Example format: [{prompt: 'Why is the sky blue?', temperature: 0.9}] const input = { prompt , // Parameters for default configuration maxOutputTokens : 1024 , temperature : 0.9 , topP : 1.0 , topK : 1 , }; // Convert input message to a list of GAPIC instances for model input const instances = [ helpers . toValue ( input )]; // TODO(developer): Uncomment apiEndpoint and predictionServiceClient before running the sample. // const apiEndpoint = ${endpointRegion}-aiplatform.googleapis.com; // Create a client // predictionServiceClient = new PredictionServiceClient({apiEndpoint}); // Call the Gemma2 endpoint const gemma2Endpoint = projects/ ${ projectId } /locations/ ${ endpointRegion } /endpoints/ ${ endpointId } ; const [ response ] = await predictionServiceClient . predict ({ endpoint : gemma2Endpoint , instances , }); const predictions = response . predictions ; const text = predictions [ 0 ]. stringValue ; console . log ( 'Predictions:' , text ); Java Before trying this sample, follow the Java setup instructions in the Vertex AI quickstart using client libraries .
- In the confirmation prompt, click Delete . gcloud To delete the model using the Google Cloud CLI, provide the model's display name and region to the gcloud ai models delete command. gcloud ai models delete DEPLOYED MODEL NAME \ --project = PROJECT ID \ --region = LOCATION ID Replace DEPLOYED MODEL NAME with the model's display name.
- In the confirmation prompt, click Confirm . gcloud To undeploy the model and delete the endpoint using the Google Cloud CLI, follow these steps.

### "Generative AI glossary \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai)
- Source ID: `site-docs-root`
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- Ray on Vertex AI SDK for Python Ray on Vertex AI SDK for Python is a version of the Vertex AI SDK for Python that includes the functionality of the Ray Client, Ray BigQuery connector, Ray cluster management on Vertex AI, and inferences on Vertex AI.
- For more information, see Use generative AI for utilization management . data parallelism A way of scaling training or inference that replicates an entire model onto multiple devices and then passes a subset of the input data to each device.
- For example, if a nearest neighbor query for 20 nearest neighbors returned 19 of the "ground truth" nearest neighbors, the recall is 19/20x100 = 95%. recipe In the context of Managed Training, a recipe is a comprehensive and reusable package that contains everything needed to execute a specific large-scale training workload. recommendation system A recommendation system is a machine learning-based system that helps users find compelling content in a large corpus.
- Examples include learning rate, dropout rate, and number of training steps. partition In Slurm, a logical grouping of nodes, often used to separate nodes with different hardware configurations. performance tier A configuration setting for a Managed Lustre instance that defines its throughput speed (in MBps per TiB) and affects its minimum and maximum capacity. perplexity Perplexity is a metric used to evaluate the performance of language models.

### "Quickstart: Deploy your Vertex AI Studio prompt as a web application \_\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/quickstarts/deploy-vais-prompt](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/quickstarts/deploy-vais-prompt)
- Source ID: `site-docs-root`
- Final score: 149
- Re-rank relevance: N/A

Evidence snippets:
- Required roles To get the permissions that you need to deploy a Vertex AI Studio prompt as a web application, ask your administrator to grant you the following IAM roles on your project: Vertex AI User ( roles/aiplatform.user ) Enable the required APIs: Service Usage Admin ( roles/serviceusage.serviceUsageAdmin ) Grant required roles to the Compute Engine default service account: Project IAM Admin ( roles/resourcemanager.projectIamAdmin ) Deploy a Cloud Run application: Cloud Run Admin ( roles/run.admin ) Cloud Run Source Developer ( roles/run.sourceDeveloper ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Open the web application and submit the prompt Click Open in the Manage web app dialog to access the deployed application.
- In this quick start, you will: Create a prompt with prompt variables Deploy your prompt as a web application Monitor deployment progress and test the deployed application Update and re-deploy your prompt Test out prompt submission with multimodal supports Before you start If you have never used Vertex AI Studio before, you can follow another quickstart guide or take the Google Cloud Skills Boost course to learn the basics of Vertex AI Studio.
- Vertex AI Service Agent ( roles/aiplatform.serviceAgent ) Cloud Build Service Account ( roles/cloudbuild.builds.builder ) For more information about granting roles, see Manage access to projects, folders, and organizations .

