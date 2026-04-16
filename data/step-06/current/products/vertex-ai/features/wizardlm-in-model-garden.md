---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:02:17.090Z"
product_name: "Vertex AI"
product_slug: "vertex-ai"
feature_name: "WizardLM in Model Garden"
feature_slug: "wizardlm-in-model-garden"
latest_feature_date: "2024-02-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint"
  - "https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials"
  - "https://docs.cloud.google.com/vertex-ai/docs/reference/rest"
keywords:
  - "wizardlm"
  - "model"
  - "garden"
  - "was"
  - "added"
  - "instruction"
  - "tuned"
  - "large"
---

# WizardLM in Model Garden

Product: Vertex AI
Coverage: MEDIUM

## Step 02 Summary

WizardLM was added to Model Garden as an instruction-tuned large language model.

## Extended Definition

WizardLM was added to Model Garden as an instruction-tuned large language model.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint)
- [https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials)
- [https://docs.cloud.google.com/vertex-ai/docs/reference/rest](https://docs.cloud.google.com/vertex-ai/docs/reference/rest)

## Supporting Pages

### "MCP Tools Reference: aiplatform.googleapis.com \_|\_ Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint)
- Source ID: `site-api-reference-2`
- Final score: 114
- Re-rank relevance: N/A

Evidence snippets:
- DeployedModel JSON representation { "id" : string , "model" : string , "gdcConnectedModel" : string , "modelVersionId" : string , "displayName" : string , "createTime" : string , "explanationSpec" : { object ( ExplanationSpec ) } , "disableExplanations" : boolean , "serviceAccount" : string , "enableContainerLogging" : boolean , "disableContainerLogging" : boolean , "enableAccessLogging" : boolean , "privateEndpoints" : { object ( PrivateEndpoints ) } , "fasterDeploymentConfig" : { object ( FasterDeploymentConfig ) } , "rolloutOptions" : { object ( RolloutOptions ) } , "status" : { object ( Status ) } , "systemLabels" : { string : string , ... } , "checkpointId" : string , "speculativeDecodingSpec" : { object ( SpeculativeDecodingSpec ) } , // Union field prediction resources can be only one of the following: "dedicatedResources" : { object ( DedicatedResources ) } , "automaticResources" : { object ( AutomaticResources ) } , "sharedResources" : string , "fullFineTunedResources" : { object ( FullFineTunedResources ) } // End of list of possible types for union field prediction resources . } Fields id string Immutable.
- Required except for Large Model Deploy use cases. prediction resources can be only one of the following: dedicatedResources object ( DedicatedResources ) A description of resources that are dedicated to the DeployedModel, and that need a higher degree of manual configuration. automaticResources object ( AutomaticResources ) A description of resources that to large degree are decided by Vertex AI, and require only a modest additional configuration. sharedResources string The resource name of the shared DeploymentResourcePool to deploy on.
- FullFineTunedResources JSON representation { "deploymentType" : enum ( DeploymentType ) , "modelInferenceUnitCount" : integer } Fields deploymentType enum ( DeploymentType ) Required.
- Runtime status of the deployed model. systemLabels map (key: string, value: string) System labels to apply to Model Garden deployments.

### Vertex AI model evaluation notebook tutorials \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials)
- Source ID: `site-docs-reference-2`
- Final score: 105
- Re-rank relevance: N/A

Evidence snippets:
- In this tutorial, you use Vertex AI to get predictions from an RLHF-tuned large-language model.
- Colab Colab Enterprise GitHub Vertex AI Workbench Overview of Generative AI support on Vertex AI Vertex AI LLM Batch Inference with RLHF-tuned Models .
- Learn how to provide text input to Large Language Models available on Vertex AI to test, tune, and deploy generative AI language models.
- Tutorial steps Colab GitHub Vertex AI Workbench PaLM API Using the Vertex AI SDK with Large Language Models .

### Vertex AI API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/reference/rest](https://docs.cloud.google.com/vertex-ai/docs/reference/rest)
- Source ID: `site-api-reference`
- Final score: 84
- Re-rank relevance: N/A

Evidence snippets:
- REST Resource: v1beta1.projects.locations.tuningJobs Methods cancel POST /v1beta1/{name}:cancel Cancels a tuning job. create POST /v1beta1/{parent}/tuningJobs Creates a tuning job. get GET /v1beta1/{name} Gets a tuning job. list GET /v1beta1/{parent}/tuningJobs Lists tuning jobs in a location. rebaseTunedModel POST /v1beta1/{parent}/tuningJobs:rebaseTunedModel Rebase a tuned model.
- REST Resource: v1.projects.locations.tuningJobs Methods cancel POST /v1/{name}:cancel Cancels a tuning job. create POST /v1/{parent}/tuningJobs Creates a tuning job. get GET /v1/{name} Gets a tuning job. list GET /v1/{parent}/tuningJobs Lists tuning jobs in a location. rebaseTunedModel POST /v1/{parent}/tuningJobs:rebaseTunedModel Rebase a tuned model.
- REST Resource: v1beta1.projects.modelGardenEula Methods accept POST /v1beta1/{parent}/modelGardenEula:accept Accepts the EULA acceptance status of a publisher model. check POST /v1beta1/{parent}/modelGardenEula:check Checks the EULA acceptance status of a publisher model.
- REST Resource: v1beta1.publishers.models Methods get GET /v1beta1/{name} Gets a Model Garden publisher model. list GET /v1beta1/{parent}/models Lists publisher models in Model Garden.

