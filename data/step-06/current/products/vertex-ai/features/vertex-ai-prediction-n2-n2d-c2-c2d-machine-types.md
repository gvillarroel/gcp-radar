---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:02:17.142Z"
product_name: "Vertex AI"
product_slug: "vertex-ai"
feature_name: "Vertex AI Prediction N2/N2D/C2/C2D machine types"
feature_slug: "vertex-ai-prediction-n2-n2d-c2-c2d-machine-types"
latest_feature_date: "2023-03-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/general/custom-service-account"
  - "https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint"
  - "https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-custom/serving"
keywords:
  - "vertex"
  - "ai"
  - "prediction"
  - "n2"
  - "n2d"
  - "c2"
  - "c2d"
  - "machine"
---

# Vertex AI Prediction N2/N2D/C2/C2D machine types

Product: Vertex AI
Coverage: MEDIUM

## Step 02 Summary

Vertex AI Prediction now supports using N2, N2D, C2, and C2D machine types to serve predictions.

## Extended Definition

Vertex AI Prediction now supports using N2, N2D, C2, and C2D machine types to serve predictions.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/general/custom-service-account](https://docs.cloud.google.com/vertex-ai/docs/general/custom-service-account)
- [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint)
- [https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-custom/serving](https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-custom/serving)

## Supporting Pages

### Use a custom service account \_|\_ Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/general/custom-service-account](https://docs.cloud.google.com/vertex-ai/docs/general/custom-service-account)
- Source ID: `site-docs-reference-3`
- Final score: 75
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Execute the gcloud ai endpoints deploy-model command: Linux, macOS, or Cloud Shell Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud ai endpoints deploy-model ENDPOINT ID \ --region = LOCATION \ --model = MODEL ID \ --display-name = DEPLOYED MODEL NAME \ --machine-type = MACHINE TYPE \ --min-replica-count = MIN REPLICA COUNT \ --max-replica-count = MAX REPLICA COUNT \ --traffic-split = 0 = 100 \ --service-account = CUSTOM SERVICE ACCOUNT Windows (PowerShell) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud ai endpoints deploy-model ENDPOINT ID --region = LOCATION --model = MODEL ID --display-name = DEPLOYED MODEL NAME --machine-type = MACHINE TYPE --min-replica-count = MIN REPLICA COUNT --max-replica-count = MAX REPLICA COUNT --traffic-split = 0 = 100 --service-account = CUSTOM SERVICE ACCOUNT Windows (cmd.exe) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud ai endpoints deploy-model ENDPOINT ID ^ --region = LOCATION ^ --model = MODEL ID ^ --display-name = DEPLOYED MODEL NAME ^ --machine-type = MACHINE TYPE ^ --min-replica-count = MIN REPLICA COUNT ^ --max-replica-count = MAX REPLICA COUNT ^ --traffic-split = 0 = 100 ^ --service-account = CUSTOM SERVICE ACCOUNT API Follow Deploying a model using the Vertex AI API .
- Optional : If the user-managed service account is in a different project than your training jobs, you must grant the Service Account Token Creator role (roles/iam.serviceAccountTokenCreator) to the Vertex AI Service Agent of the project where you're using Vertex AI. gcloud iam service-accounts add-iam-policy-binding \ --role = roles/iam.serviceAccountTokenCreator \ --member = serviceAccount: AI PLATFORM SERVICE AGENT \ CUSTOM SERVICE ACCOUNT Optional : If you also plan to use the user-managed service account for predictions, then you must grant the Service Account Admin role ( roles/iam.serviceAccountAdmin ) to the Vertex AI Service Agent of the project where you're using Vertex AI: gcloud iam service-accounts add-iam-policy-binding \ --role = roles/iam.serviceAccountAdmin \ --member = serviceAccount: AI PLATFORM SERVICE AGENT \ CUSTOM SERVICE ACCOUNT Replace the following: AI PLATFORM SERVICE AGENT : The email address of your project's Vertex AI Service Agent, which has the following format: service- PROJECT NUMBER @gcp-sa-aiplatform.iam.gserviceaccount.com To find the Vertex AI Service Agent, go to the IAM page in the Google Cloud console.
- Access Google Cloud services in your code If you configure Vertex AI to use a custom service account by following the instructions in preceding sections, then your training container or your prediction container can access any Google Cloud services and resources that the service account has access to.
- When you deploy a custom-trained Model resource to an Endpoint resource to serve online predictions, you can configure Vertex AI to use a custom service account in the container that serves predictions, whether it is a prebuilt container or a custom container .

### "Hello custom training: Serve predictions from a custom image classification\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-custom/serving](https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-custom/serving)
- Source ID: `site-docs-reference-2`
- Final score: 67
- Re-rank relevance: N/A

Evidence snippets:
- Activate Cloud Shell In the Cloud Shell session, run the following command: cd hello-custom-sample Create an endpoint To get online predictions from the ML model that you trained when following the previous page of this tutorial, create a Vertex AI endpoint .
- Home Documentation AI and ML Vertex AI Send feedback Hello custom training: Serve predictions from a custom image classification model Stay organized with collections Save and categorize content based on your preferences.
- Additionally, functions run using a service account with the Editor role by default , which includes the aiplatform.endpoints.predict permission necessary to get predictions from your Vertex AI endpoint.
- The Vertex AI endpoint expects prediction requests in the format of the trained TensorFlow Keras graph's first layer: a tensor of normalized floats with fixed dimensions.

### "MCP Tools Reference: aiplatform.googleapis.com \_|\_ Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint)
- Source ID: `site-api-reference-2`
- Final score: 67
- Re-rank relevance: N/A

Evidence snippets:
- Supported metrics: For Online Prediction: aiplatform.googleapis.com/prediction/online/accelerator/duty cycle aiplatform.googleapis.com/prediction/online/cpu/utilization aiplatform.googleapis.com/prediction/online/request count pubsub.googleapis.com/subscription/num undelivered messages prometheus.googleapis.com/vertex dcgm fi dev gpu util prometheus.googleapis.com/vertex vllm gpu cache usage perc prometheus.googleapis.com/vertex vllm num requests waiting target integer The target resource utilization in percentage (1% - 100%) for the given metric; once the real usage deviates from the target by a certain percentage, the machine replicas change.
- Required except for Large Model Deploy use cases. prediction resources can be only one of the following: dedicatedResources object ( DedicatedResources ) A description of resources that are dedicated to the DeployedModel, and that need a higher degree of manual configuration. automaticResources object ( AutomaticResources ) A description of resources that to large degree are decided by Vertex AI, and require only a modest additional configuration. sharedResources string The resource name of the shared DeploymentResourcePool to deploy on.
- Format: https://{endpoint id}.{region}-{uid}.prediction.vertexai.goog . clientConnectionConfig object ( ClientConnectionConfig ) Configurations that are applied to the endpoint for online prediction. satisfiesPzs boolean Output only.
- See the list of machine types supported for prediction See the list of machine types supported for custom training .

