---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:02:17.099Z"
product_name: "Vertex AI"
product_slug: "vertex-ai"
feature_name: "text-unicorn model for PaLM 2 for Text"
feature_slug: "text-unicorn-model-for-palm-2-for-text"
latest_feature_date: "2023-11-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_notebook_execution_schedule"
  - "https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials"
  - "https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint"
keywords:
  - "text"
  - "unicorn"
  - "model"
  - "palm"
  - "size"
  - "released"
  - "generally"
  - "available"
---

# text-unicorn model for PaLM 2 for Text

Product: Vertex AI
Coverage: MEDIUM

## Step 02 Summary

The text-unicorn PaLM 2 for Text model size is released as generally available, offering improved response quality and reasoning over text-bison.

## Extended Definition

The text-unicorn PaLM 2 for Text model size is released as generally available, offering improved response quality and reasoning over text-bison.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_notebook_execution_schedule](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_notebook_execution_schedule)
- [https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials)
- [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint)

## Supporting Pages

### "MCP Tools Reference: aiplatform.googleapis.com \_|\_ Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_notebook_execution_schedule](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_notebook_execution_schedule)
- Source ID: `site-docs-reference`
- Final score: 135
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The size of this field should not exceed 200KB. description string Description of the Context LabelsEntry JSON representation { "key" : string , "value" : string } Fields key string value string PipelineTaskDetail JSON representation { "taskId" : string , "parentTaskId" : string , "taskName" : string , "createTime" : string , "startTime" : string , "endTime" : string , "executorDetail" : { object ( PipelineTaskExecutorDetail ) } , "state" : enum ( State ) , "execution" : { object ( Execution ) } , "error" : { object ( Status ) } , "pipelineTaskStatus" : [ { object ( PipelineTaskStatus ) } ] , "inputs" : { string : { object ( ArtifactList ) } , ... } , "outputs" : { string : { object ( ArtifactList ) } , ... } , "taskUniqueName" : string } Fields taskId string ( int64 format) Output only.
- The size of this field should not exceed 200KB. description string Description of the Context LabelsEntry JSON representation { "key" : string , "value" : string } Fields key string value string PipelineTaskDetail JSON representation { "taskId" : string , "parentTaskId" : string , "taskName" : string , "createTime" : string , "startTime" : string , "endTime" : string , "executorDetail" : { object ( PipelineTaskExecutorDetail ) } , "state" : enum ( State ) , "execution" : { object ( Execution ) } , "error" : { object ( Status ) } , "pipelineTaskStatus" : [ { object ( PipelineTaskStatus ) } ] , "inputs" : { string : { object ( ArtifactList ) } , ... } , "outputs" : { string : { object ( ArtifactList ) } , ... } , "taskUniqueName" : string } Fields taskId string ( int64 format) Output only.
- Refer to Nvidia GPU Partitioning for the available partition sizes.
- Refer to Nvidia GPU Partitioning for the available partition sizes.

### Vertex AI model evaluation notebook tutorials \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials)
- Source ID: `site-docs-reference-2`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- Learn how to provide text input to Large Language Models available on Vertex AI to test, tune, and deploy generative AI language models.
- Tutorial steps Create utility functions to download data and prepare csv files for creating Vertex AI managed dataset Download Data Prepare CSV Files for creating managed dataset Create custom training Python package Create TensorFlow Serving container Run custom Python package training with managed text dataset Deploy a model and create an endpoint on Vertex AI Predict on the endpoint Create a Batch Prediction job on the model Colab Colab Enterprise GitHub Vertex AI Workbench Tabular Workflow for TabNet Vertex AI Explanations with TabNet models .
- List of notebooks Select a service AutoML BigQuery BigQuery ML Custom training Image Ray on Vertex AI Tabular Text Vector Search Vertex AI Experiments Vertex AI Feature Store Vertex AI Inference Vertex AI model evaluation Vertex AI Model Monitoring Vertex AI Model Registry Vertex AI Pipelines Vertex AI TensorBoard Vertex AI Vizier Vertex AI Workbench Vertex Explainable AI Vertex ML Metadata Services Description Open in Classification for tabular data AutoML tabular training and prediction .
- Tutorial steps Download pretrained model from TensorFlow Hub Upload model for deployment Deploy model for online prediction Make online prediction with explanations Make batch predictions with explanations Colab Colab Enterprise GitHub Vertex AI Workbench Vertex Explainable AI Explaining text classification with Vertex Explainable AI .

### "MCP Tools Reference: aiplatform.googleapis.com \_|\_ Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint)
- Source ID: `site-api-reference-2`
- Final score: 119
- Re-rank relevance: N/A

Evidence snippets:
- RolloutOptions JSON representation { "previousDeployedModel" : string , "revisionNumber" : integer , // Union field max unavailable can be only one of the following: "maxUnavailableReplicas" : integer , "maxUnavailablePercentage" : integer // End of list of possible types for union field max unavailable . // Union field max surge can be only one of the following: "maxSurgeReplicas" : integer , "maxSurgePercentage" : integer // End of list of possible types for union field max surge . } Fields previousDeployedModel string ID of the DeployedModel that this deployment should replace. revisionNumber integer Output only.
- Refer to Nvidia GPU Partitioning for the available partition sizes.
- The number of available replicas of the deployed model.
- DeployedModel JSON representation { "id" : string , "model" : string , "gdcConnectedModel" : string , "modelVersionId" : string , "displayName" : string , "createTime" : string , "explanationSpec" : { object ( ExplanationSpec ) } , "disableExplanations" : boolean , "serviceAccount" : string , "enableContainerLogging" : boolean , "disableContainerLogging" : boolean , "enableAccessLogging" : boolean , "privateEndpoints" : { object ( PrivateEndpoints ) } , "fasterDeploymentConfig" : { object ( FasterDeploymentConfig ) } , "rolloutOptions" : { object ( RolloutOptions ) } , "status" : { object ( Status ) } , "systemLabels" : { string : string , ... } , "checkpointId" : string , "speculativeDecodingSpec" : { object ( SpeculativeDecodingSpec ) } , // Union field prediction resources can be only one of the following: "dedicatedResources" : { object ( DedicatedResources ) } , "automaticResources" : { object ( AutomaticResources ) } , "sharedResources" : string , "fullFineTunedResources" : { object ( FullFineTunedResources ) } // End of list of possible types for union field prediction resources . } Fields id string Immutable.

