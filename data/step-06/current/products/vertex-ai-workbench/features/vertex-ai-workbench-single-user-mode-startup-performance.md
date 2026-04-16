---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T17:42:01.354Z"
product_name: "Vertex AI Workbench"
product_slug: "vertex-ai-workbench"
feature_name: "Vertex AI Workbench single-user mode startup performance"
feature_slug: "vertex-ai-workbench-single-user-mode-startup-performance"
latest_feature_date: "2022-08-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials"
  - "https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-automl/error-analysis"
  - "https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_create_notebook_runtime"
keywords:
  - "vertex"
  - "ai"
  - "workbench"
  - "single"
  - "user"
  - "mode"
  - "startup"
  - "performance"
---

# Vertex AI Workbench single-user mode startup performance

Product: Vertex AI Workbench
Coverage: MEDIUM

## Step 02 Summary

Opening an instance in Single User mode was optimized to avoid slowed instance startup.

## Extended Definition

Opening an instance in Single User mode was optimized to avoid slowed instance startup.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials)
- [https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-automl/error-analysis](https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-automl/error-analysis)
- [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_create_notebook_runtime](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_create_notebook_runtime)

## Supporting Pages

### Vertex AI model evaluation notebook tutorials \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials)
- Source ID: `site-docs-root`
- Final score: 115
- Re-rank relevance: N/A

Evidence snippets:
- Tutorial steps Setup a service account and a Cloud Storage bucket Create a Vertex AI TensorBoard instance Create and run a custom training job that enables Profiler View the Profiler dashboard to debug your model training performance Colab Colab Enterprise GitHub Vertex AI Workbench Profiler Vertex AI TensorBoard Profile model training performance using Cloud Profiler in custom training with prebuilt container .
- Tutorial steps Prepare your custom training code and load your training code as a Python package to a prebuilt container Create and run a custom training job that enables Profiler View the Profiler dashboard to debug your model training performance Colab Colab Enterprise GitHub Vertex AI Workbench Vertex AI TensorBoard Vertex AI Pipelines Vertex AI TensorBoard integration with Vertex AI Pipelines .
- Colab Colab Enterprise GitHub Vertex AI Workbench Profiler Vertex AI TensorBoard Profile model training performance using Cloud Profiler .
- Colab Colab Enterprise GitHub Vertex AI Workbench Cloud Profiler Profile model training performance using Cloud Profiler .

### "Hello image data: Evaluating and analyzing model performance \_|\_ Vertex\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-automl/error-analysis](https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-automl/error-analysis)
- Source ID: `site-docs-root`
- Final score: 100
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation AI and ML Vertex AI Send feedback Hello image data: Evaluating and analyzing model performance Stay organized with collections Save and categorize content based on your preferences.
- What's next If you're happy with the model performance, follow the next page of this tutorial to deploy your trained AutoML model to an endpoint and send an image to the model for prediction.
- Reviewing similar images from the training set can help you identify these samples and add similar images into the training set to further improve the model performance on these cases.
- Analyze test results If you want to continue improving the model performance, the first step is often to examine the error cases and investigate the potential causes.

### "MCP Tools Reference: aiplatform.googleapis.com \_|\_ Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_create_notebook_runtime](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_create_notebook_runtime)
- Source ID: `site-api-reference`
- Final score: 92
- Re-rank relevance: N/A

Evidence snippets:
- If accelerator count is less than or equal to N / 2, Vertex will co-schedule the replicas of the model into the same VM to save cost.
- If accelerator count is 1, 2, 3, or 4, Vertex will co-schedule 8, 4, 2, or 2 replicas of the model into the same VM to save cost.
- NotebookRuntime JSON representation { "name" : string , "runtimeUser" : string , "notebookRuntimeTemplateRef" : { object ( NotebookRuntimeTemplateRef ) } , "proxyUri" : string , "createTime" : string , "updateTime" : string , "healthState" : enum ( HealthState ) , "displayName" : string , "description" : string , "serviceAccount" : string , "runtimeState" : enum ( RuntimeState ) , "isUpgradable" : boolean , "labels" : { string : string , ... } , "expirationTime" : string , "version" : string , "notebookRuntimeType" : enum ( NotebookRuntimeType ) , "machineSpec" : { object ( MachineSpec ) } , "dataPersistentDiskSpec" : { object ( PersistentDiskSpec ) } , "networkSpec" : { object ( NetworkSpec ) } , "idleShutdownConfig" : { object ( NotebookIdleShutdownConfig ) } , "eucConfig" : { object ( NotebookEucConfig ) } , "shieldedVmConfig" : { object ( ShieldedVmConfig ) } , "networkTags" : [ string ] , "softwareConfig" : { object ( NotebookSoftwareConfig ) } , "encryptionSpec" : { object ( EncryptionSpec ) } , "satisfiesPzs" : boolean , "satisfiesPzi" : boolean } Fields name string Output only.
- NotebookSoftwareConfig JSON representation { "env" : [ { object ( EnvVar ) } ] , "postStartupScriptConfig" : { object ( PostStartupScriptConfig ) } , // Union field runtime image can be only one of the following: "colabImage" : { object ( ColabImage ) } // End of list of possible types for union field runtime image . } Fields env[] object ( EnvVar ) Optional.

