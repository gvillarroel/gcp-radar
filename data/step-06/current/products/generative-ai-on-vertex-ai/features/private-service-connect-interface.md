---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:18.666Z"
product_name: "Generative AI on Vertex AI"
product_slug: "generative-ai-on-vertex-ai"
feature_name: "Private Service Connect interface"
feature_slug: "private-service-connect-interface"
latest_feature_date: "2025-08-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial-tpu"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/deploy/overview"
keywords:
  - "private"
  - "connect"
  - "interface"
  - "agent"
  - "engine"
  - "can"
  - "be"
  - "deployed"
---

# Private Service Connect interface

Product: Generative AI on Vertex AI
Coverage: MEDIUM

## Step 02 Summary

Agent Engine can be deployed in a private VPC environment using a Private Service Connect interface.

## Extended Definition

Agent Engine can be deployed in a private VPC environment using a Private Service Connect interface.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial-tpu](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial-tpu)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/deploy/overview](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/deploy/overview)

## Supporting Pages

### "Generative AI glossary \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai)
- Source ID: `site-docs-root`
- Final score: 177
- Re-rank relevance: N/A

Evidence snippets:
- It's an execution instance of your ML pipeline definition, which is defined as a set of ML tasks interconnected by input-output dependencies. pipeline run One or more Vertex PipelineJobs can be associated with an experiment where each PipelineJob is represented as a single run.
- The artifacts of the run are inferred from artifacts produced by that PipelineJob. private services access Private services access is a private connection between your Virtual Private Cloud (VPC) network and networks owned by Google or third-party service providers.
- Agents can be used in various applications, such as natural language processing, machine learning, and robotics.
- Agent Engine handles the infrastructure to scale agents in production so you can focus on creating applications.

### "Deploy and inference Gemma using Model Garden and Vertex AI GPU-backed endpoints\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial)
- Source ID: `site-docs-root`
- Final score: 133
- Re-rank relevance: N/A

Evidence snippets:
- To check the deployment status, you can try one of the following methods: 1) Look for endpoint ENDPOINT DISPLAY NAME at the [Vertex AI] -> [Online prediction] tab in Cloud Console 2) Use gcloud ai operations describe OPERATION ID --region= LOCATION to find the status of the deployment long-running operation To see details about your deployment, run the gcloud ai endpoints list --list-model-garden-endpoints-only command: gcloud ai endpoints list --list-model-garden-endpoints-only \ --region = LOCATION ID Replace LOCATION ID with the region where you deployed the model.
- Note: You can only delete the endpoint after all models have been undeployed from it.
- Run the following command in the terminal to create or overwrite this file in the current directory: @' { "hugging face model id": " MODEL ID ", "hugging face access token": " ACCESS TOKEN ", "model config": { "accept eula": "true" } } '@ Out-File -FilePath request.json -Encoding utf8 Then execute the following command to send your REST request: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION :deploy" Select-Object -Expand Content You receive a JSON response similar to the following. { "name": "projects/ PROJECT ID /locations/us-central1 LOCATION /operations/ OPERATION ID ", "metadata": { "@type": "type.googleapis.com/google.cloud.aiplatform.v1.DeployOperationMetadata", "genericMetadata": { "createTime": "2025-03-13T21:44:44.538780Z", "updateTime": "2025-03-13T21:44:44.538780Z" }, "publisherModel": "publishers/ PUBLISHER NAME /model/ MODEL NAME ", "destination": "projects/ PROJECT ID /locations/ LOCATION ", "projectNumber": " PROJECT ID " } } Deploy a model with customizations Before using any of the request data, make the following replacements: LOCATION : A region where the model is deployed.
- Run the following command in the terminal to create or overwrite this file in the current directory: @' { "publisher model name": " MODEL ID ", "model config": { "accept eula": "true" } } '@ Out-File -FilePath request.json -Encoding utf8 Then execute the following command to send your REST request: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION :deploy" Select-Object -Expand Content You receive a JSON response similar to the following. { "name": "projects/ PROJECT ID /locations/ LOCATION /operations/ OPERATION ID ", "metadata": { "@type": "type.googleapis.com/google.cloud.aiplatform.v1.DeployOperationMetadata", "genericMetadata": { "createTime": "2025-03-13T21:44:44.538780Z", "updateTime": "2025-03-13T21:44:44.538780Z" }, "publisherModel": "publishers/google/models/gemma3@gemma-3-1b-it", "destination": "projects/ PROJECT ID /locations/ LOCATION ", "projectNumber": " PROJECT ID " } } Deploy a Hugging Face model Before using any of the request data, make the following replacements: LOCATION : A region where the model is deployed.

### "Deploy and inference Gemma using Model Garden and Vertex AI TPU-backed endpoints\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial-tpu](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial-tpu)
- Source ID: `site-docs-root`
- Final score: 125
- Re-rank relevance: N/A

Evidence snippets:
- Note: You can only delete the endpoint after all models have been undeployed from it.
- For more information, see the Python API reference documentation . """ Sample to run inference on a Gemma2 model deployed to a Vertex AI endpoint with TPU accellerators. """ from google.cloud import aiplatform from google.protobuf import json format from google.protobuf.struct pb2 import Value TODO(developer): Update & uncomment lines below PROJECT ID = "your-project-id" ENDPOINT REGION = "your-vertex-endpoint-region" ENDPOINT ID = "your-vertex-endpoint-id" Default configuration config = { "max tokens" : 1024 , "temperature" : 0.9 , "top p" : 1.0 , "top k" : 1 } Prompt used in the prediction prompt = "Why is the sky blue?" Encapsulate the prompt in a correct format for TPUs Example format: [{'prompt': 'Why is the sky blue?', 'temperature': 0.9}] input = { "prompt" : prompt } input . update ( config ) Convert input message to a list of GAPIC instances for model input instances = [ json format .
- JsonFormat ; import java.io.IOException ; import java.util.ArrayList ; import java.util.HashMap ; import java.util.List ; import java.util.Map ; public class Gemma2PredictTpu { private final PredictionServiceClient predictionServiceClient ; // Constructor to inject the PredictionServiceClient public Gemma2PredictTpu ( PredictionServiceClient predictionServiceClient ) { this . predictionServiceClient = predictionServiceClient ; } public static void main ( String [] args ) throws IOException { // TODO(developer): Replace these variables before running the sample.
- Background () // Note: client can be initialized in the following way: // apiEndpoint := fmt.Sprintf("%s-aiplatform.googleapis.com:443", location) // client, err := aiplatform.NewPredictionClient(ctx, option.WithEndpoint(apiEndpoint)) // if err != nil { // return fmt.Errorf("unable to create prediction client: %v", err) // } // defer client.Close() gemma2Endpoint := fmt .

### "Deploy generative AI models \_|\_ Generative AI on Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/deploy/overview](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/deploy/overview)
- Source ID: `site-docs-root`
- Final score: 125
- Re-rank relevance: N/A

Evidence snippets:
- Ensure capacity for deployed models with Compute Engine reservations You can deploy Model Garden models on VM resources that have been allocated through Compute Engine reservations.
- Limitations A tuned Gemini model can only be deployed to a shared public endpoint.
- Deploy a generative model that doesn't have a managed API To use a model from the Model Garden that doesn't have a managed API, you must upload the model to Model Registry and deploy it to an endpoint before you can send prompt requests.
- There are two types of generative models that must be deployed: Tuned models , which you create by tuning a supported foundation model with your own data.

