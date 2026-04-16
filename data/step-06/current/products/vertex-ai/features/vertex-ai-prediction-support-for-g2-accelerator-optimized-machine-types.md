---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:02:17.137Z"
product_name: "Vertex AI"
product_slug: "vertex-ai"
feature_name: "Vertex AI Prediction support for G2 accelerator-optimized machine types"
feature_slug: "vertex-ai-prediction-support-for-g2-accelerator-optimized-machine-types"
latest_feature_date: "2023-05-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_update_notebook_runtime_template"
  - "https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_notebook_execution_schedule"
  - "https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint"
keywords:
  - "vertex"
  - "ai"
  - "prediction"
  - "g2"
  - "accelerator"
  - "optimized"
  - "machine"
  - "types"
---

# Vertex AI Prediction support for G2 accelerator-optimized machine types

Product: Vertex AI
Coverage: MEDIUM

## Step 02 Summary

Vertex AI Prediction now supports serving predictions on G2 accelerator-optimized machine types, each with a fixed number of NVIDIA L4 GPUs.

## Extended Definition

Vertex AI Prediction now supports serving predictions on G2 accelerator-optimized machine types, each with a fixed number of NVIDIA L4 GPUs.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_update_notebook_runtime_template](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_update_notebook_runtime_template)
- [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_notebook_execution_schedule](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_notebook_execution_schedule)
- [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint)

## Supporting Pages

### "MCP Tools Reference: aiplatform.googleapis.com \_|\_ Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_update_notebook_runtime_template](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_update_notebook_runtime_template)
- Source ID: `site-api-reference`
- Final score: 146
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For accelerator optimized machine types ( https://cloud.google.com/compute/docs/accelerator-optimized-machines) , One may set the accelerator count from 1 to N for machine with N GPUs.
- For accelerator optimized machine types ( https://cloud.google.com/compute/docs/accelerator-optimized-machines) , One may set the accelerator count from 1 to N for machine with N GPUs.
- See the list of machine types supported for prediction See the list of machine types supported for custom training .
- See the list of machine types supported for prediction See the list of machine types supported for custom training .

### "MCP Tools Reference: aiplatform.googleapis.com \_|\_ Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_notebook_execution_schedule](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_notebook_execution_schedule)
- Source ID: `site-docs-reference`
- Final score: 146
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For accelerator optimized machine types ( https://cloud.google.com/compute/docs/accelerator-optimized-machines) , One may set the accelerator count from 1 to N for machine with N GPUs.
- For accelerator optimized machine types ( https://cloud.google.com/compute/docs/accelerator-optimized-machines) , One may set the accelerator count from 1 to N for machine with N GPUs.
- See the list of machine types supported for prediction See the list of machine types supported for custom training .
- See the list of machine types supported for prediction See the list of machine types supported for custom training .

### "MCP Tools Reference: aiplatform.googleapis.com \_|\_ Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint)
- Source ID: `site-api-reference-2`
- Final score: 142
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Supported metrics: For Online Prediction: aiplatform.googleapis.com/prediction/online/accelerator/duty cycle aiplatform.googleapis.com/prediction/online/cpu/utilization aiplatform.googleapis.com/prediction/online/request count pubsub.googleapis.com/subscription/num undelivered messages prometheus.googleapis.com/vertex dcgm fi dev gpu util prometheus.googleapis.com/vertex vllm gpu cache usage perc prometheus.googleapis.com/vertex vllm num requests waiting target integer The target resource utilization in percentage (1% - 100%) for the given metric; once the real usage deviates from the target by a certain percentage, the machine replicas change.
- For accelerator optimized machine types ( https://cloud.google.com/compute/docs/accelerator-optimized-machines) , One may set the accelerator count from 1 to N for machine with N GPUs.
- See the list of machine types supported for prediction See the list of machine types supported for custom training .
- DeployedModel JSON representation { "id" : string , "model" : string , "gdcConnectedModel" : string , "modelVersionId" : string , "displayName" : string , "createTime" : string , "explanationSpec" : { object ( ExplanationSpec ) } , "disableExplanations" : boolean , "serviceAccount" : string , "enableContainerLogging" : boolean , "disableContainerLogging" : boolean , "enableAccessLogging" : boolean , "privateEndpoints" : { object ( PrivateEndpoints ) } , "fasterDeploymentConfig" : { object ( FasterDeploymentConfig ) } , "rolloutOptions" : { object ( RolloutOptions ) } , "status" : { object ( Status ) } , "systemLabels" : { string : string , ... } , "checkpointId" : string , "speculativeDecodingSpec" : { object ( SpeculativeDecodingSpec ) } , // Union field prediction resources can be only one of the following: "dedicatedResources" : { object ( DedicatedResources ) } , "automaticResources" : { object ( AutomaticResources ) } , "sharedResources" : string , "fullFineTunedResources" : { object ( FullFineTunedResources ) } // End of list of possible types for union field prediction resources . } Fields id string Immutable.

