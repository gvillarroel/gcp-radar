---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:18.648Z"
product_name: "Generative AI on Vertex AI"
product_slug: "generative-ai-on-vertex-ai"
feature_name: "T5Gemma"
feature_slug: "t5gemma"
latest_feature_date: "2025-12-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/quickstart"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/control-model-access"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/deprecations/partner-models"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/deploy/overview"
keywords:
  - "t5gemma"
  - "is"
  - "available"
  - "through"
  - "model"
  - "garden"
  - "vertex"
  - "ai"
---

# T5Gemma

Product: Generative AI on Vertex AI
Coverage: MEDIUM

## Step 02 Summary

T5Gemma is available through Model Garden; T5Gemma is a model available through Vertex AI Model Garden.

## Extended Definition

T5Gemma is available through Model Garden; T5Gemma is a model available through Vertex AI Model Garden.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/quickstart](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/quickstart)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/control-model-access](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/control-model-access)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/deprecations/partner-models](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/deprecations/partner-models)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/deploy/overview](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/deploy/overview)

## Supporting Pages

### "Test model capabilities in Model Garden \_|\_ Generative AI on Vertex AI\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/quickstart](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/quickstart)
- Source ID: `site-docs-root`
- Final score: 300
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Required roles for users To get the permissions that you need to test model capabilities in Model Garden, ask your administrator to grant you the following IAM roles on your Google Cloud project: Service Usage Admin ( roles/serviceusage.serviceUsageAdmin ) Artifact Registry Administrator ( roles/artifactregistry.admin ) Cloud Run Admin ( roles/run.admin ) Storage Admin ( roles/storage.admin ) Vertex AI User ( roles/aiplatform.user ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Home Documentation AI and ML Vertex AI Generative AI on Vertex AI Guides Send feedback Test model capabilities in Model Garden Stay organized with collections Save and categorize content based on your preferences.
- Model Garden deploys your selected model in Vertex AI and deploys the sample app on a Cloud Run instance that uses the deployed model's endpoint.
- The application is no longer available through the URL.

### "Control access to Model Garden models \_|\_ Generative AI on Vertex AI \_\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/control-model-access](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/control-model-access)
- Source ID: `site-docs-root`
- Final score: 270
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Allow a set of models and deny all other models The following example allows actions on a specific set of models. name : organizations/ ORGANIZATION ID /policies/vertexai.allowedModels spec : rules : values : allowedValues : - publishers/meta/models/llama3:deploy - publishers/google/models/gemini-2.0-flash-001:tune - publishers/hf-google/models/gemma-2b:deploy Enable web search for partner models To enable the web search feature for partner models, you can specify the following: All features for all models from a specific publisher, for example: publishers/anthropic All features for a specific model, for example: publishers/anthropic/models/ MODEL NAME The web search feature for a specific model, for example: publishers/anthropic/models/ MODEL NAME :web search The following example enables web search for all models from Anthropic: name : organizations/ ORGANIZATION ID /policies/vertexai.allowedPartnerModelFeatures spec : rules : values : allowedValues : Allow all features of this publisher - publishers/anthropic Allow all features of this model - publishers/anthropic/models/ MODEL NAME Allow this feature - publishers/anthropic/models/ MODEL NAME :web search What's next Guide Use models in Model Garden Use generative models from Model Garden in the Google Cloud Console.
- By default, anyone with permissions to use Vertex AI can use Model Garden to discover, customize, and deploy a wide variety of Google and third-party models.
- Deny a set of models and allow all other models The following example denies actions on a specific set of models. name : organizations/ ORGANIZATION ID /policies/vertexai.allowedModels spec : rules : values : deniedValues : - publishers/meta/models/llama3:deploy - publishers/google/models/gemini-2.0-flash-001:tune - publishers/hf-google/models/gemma-2b:deploy Replace ORGANIZATION ID with the ID of your Google Cloud organization.
- Home Documentation AI and ML Vertex AI Generative AI on Vertex AI Guides Send feedback Control access to Model Garden models Stay organized with collections Save and categorize content based on your preferences.

### "Model deprecations (MaaS) \_|\_ Generative AI on Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/deprecations/partner-models](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/deprecations/partner-models)
- Source ID: `site-docs-root`
- Final score: 266
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Try in Vertex AI Model ID claude-3-5-sonnet-v2 Launch stage GA Supported inputs & outputs Inputs: Text , Code , Images Outputs: Text Token limits Maximum input tokens: 200,000 Maximum output tokens: 8,000 Capabilities Supported Batch predictions Prompt caching Function calling Count tokens Not supported Extended thinking Usage types Supported Fixed quota Provisioned Throughput Not supported Technical specifications Images Limitation and specifications: See Vision in Anthropic's documentation Documents Limitation and specifications: See PDF support in Anthropic's documentation Knowledge cutoff date August 2024 Versions claude-3-5-sonnet-v2 Launch stage: Generally available Release date: October 22, 2024 Supported regions Model availability (Includes fixed quota & Provisioned Throughput) United States us-east5 Europe europe-west1 Global global endpoint ML processing United States Multi-region Europe Multi-region Quota limits us-east5: QPM: 90 TPM: 540,000 (input and output) Context length: 200,000 europe-west1: QPM: 55 TPM: 330,000 (input and output) Context length: 200,000 global endpoint: QPM: 25 TPM: 140,000 (input and output) Context length: 200,000 Pricing See Pricing .
- Model ID claude-3-5-sonnet Launch stage GA Supported inputs & outputs Inputs: Text , Code , Images Outputs: Text Token limits Maximum input tokens: 200,000 Maximum output tokens: 8,000 Capabilities Supported Prompt caching Function calling Count tokens Not supported Batch predictions Extended thinking Usage types Supported Fixed quota Provisioned Throughput Not supported Technical specifications Images Limitation and specifications: See Vision in Anthropic's documentation Documents Limitation and specifications: See PDF support in Anthropic's documentation Knowledge cutoff date April 2024 Versions claude-3-5-sonnet Launch stage: Generally available Release date: June 20, 2024 Supported regions Model availability (Includes fixed quota & Provisioned Throughput) United States us-east5 Europe europe-west1 Asia Pacific asia-southeast1 ML processing United States Multi-region Europe Multi-region Asia Pacific asia-southeast1 Quota limits us-east5: QPM: 80 TPM: 350,000 (input and output) Context length: 200,000 europe-west1: QPM: 130 TPM: 600,000 (input and output) Context length: 200,000 asia-southeast1: QPM: 35 TPM: 150,000 (input and output) Context length: 200,000 Pricing See Pricing .
- View model card in Model Garden Model ID claude-3-5-haiku Launch stage deprecated Supported inputs & outputs Inputs: Text , Code , Images Outputs: Text Token limits Maximum input tokens: 200,000 Maximum output tokens: 8,000 Capabilities Supported Batch predictions Prompt caching Function calling Count tokens Not supported Extended thinking Usage types Supported Fixed quota Provisioned Throughput Not supported Technical specifications Images Limitation and specifications: See Vision in Anthropic's documentation Documents Limitation and specifications: See PDF support in Anthropic's documentation Knowledge cutoff date July 2024 Versions claude-3-5-haiku Launch stage: Deprecated Release date: October 22, 2024 Supported regions Model availability (Includes fixed quota & Provisioned Throughput) United States us-east5 Europe europe-west1 ML processing United States Multi-region Europe Multi-region Quota limits us-east5: QPM: 80 TPM: 350,000 (input and output) Context length: 200,000 europe-west1: QPM: 90 TPM: 400,000 (input and output) Context length: 200,000 Pricing See Pricing .
- View model card in Model Garden Model ID jamba-1.5-large Launch stage Preview Supported inputs & outputs Inputs: Text , Documents Outputs: Text Usage types Supported Fixed quota Not supported Provisioned Throughput Knowledge cutoff date March 2024 Versions jamba-1.5-large Launch stage: Preview Release date: August 22, 2024 Supported regions Model availability United States us-central1 Europe europe-west4 ML processing United States Multi-region Quota limits us-central1: QPM: 20 TPM: 20,000 Context length: 256,000 europe-west4: QPM: 20 TPM: 20,000 Context length: 256,000 Pricing See Pricing .

### "Deploy generative AI models \_|\_ Generative AI on Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/deploy/overview](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/deploy/overview)
- Source ID: `site-docs-root`
- Final score: 262
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Go to Model Garden Each model card displays one or more of the following deployment options: Deploy button: Most of the generative models in the Model Garden have a Deploy button that walks you through deploying to Vertex AI.
- In the Model Garden, these are models that aren't labeled as API available or Vertex AI Studio —for example, Llama 2.
- For models without managed APIs, you are billed for the machine hours that are used by your endpoint at the same rate as Vertex AI online predictions.
- Deploy a tuned model Tuned models are automatically uploaded to the Vertex AI Model Registry and deployed to a Vertex AI shared public endpoint .

