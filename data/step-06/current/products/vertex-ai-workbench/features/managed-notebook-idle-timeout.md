---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T17:42:01.386Z"
product_name: "Vertex AI Workbench"
product_slug: "vertex-ai-workbench"
feature_name: "Managed notebook idle timeout"
feature_slug: "managed-notebook-idle-timeout"
latest_feature_date: "2022-04-06"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_create_notebook_runtime"
  - "https://docs.cloud.google.com/vertex-ai/docs/pipelines/forecasting-component"
  - "https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-automl/error-analysis"
keywords:
  - "managed"
  - "notebook"
  - "idle"
  - "timeout"
  - "vertex"
  - "ai"
  - "workbench"
  - "supports"
---

# Managed notebook idle timeout

Product: Vertex AI Workbench
Coverage: LOW

## Step 02 Summary

Vertex AI Workbench supports idle shutdown for managed notebook instances to help control costs.

## Extended Definition

Vertex AI Workbench supports idle shutdown for managed notebook instances to help control costs.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_create_notebook_runtime](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_create_notebook_runtime)
- [https://docs.cloud.google.com/vertex-ai/docs/pipelines/forecasting-component](https://docs.cloud.google.com/vertex-ai/docs/pipelines/forecasting-component)
- [https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-automl/error-analysis](https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-automl/error-analysis)

## Supporting Pages

### Forecasting components \_|\_ Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/pipelines/forecasting-component](https://docs.cloud.google.com/vertex-ai/docs/pipelines/forecasting-component)
- Source ID: `site-api-reference`
- Final score: 38
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- VertexNotificationEmailOp Version history and release notes To learn more about the version history and changes to the Google Cloud Pipeline Components SDK, see the Google Cloud Pipeline Components SDK Release Notes .
- Home Documentation AI and ML Vertex AI Reference Send feedback Forecasting components Stay organized with collections Save and categorize content based on your preferences.

### "Hello image data: Evaluating and analyzing model performance \_|\_ Vertex\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-automl/error-analysis](https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-automl/error-analysis)
- Source ID: `site-docs-root`
- Final score: 34
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation AI and ML Vertex AI Send feedback Hello image data: Evaluating and analyzing model performance Stay organized with collections Save and categorize content based on your preferences.

### "MCP Tools Reference: aiplatform.googleapis.com \_|\_ Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_create_notebook_runtime](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_create_notebook_runtime)
- Source ID: `site-api-reference`
- Final score: 34
- Re-rank relevance: N/A

Evidence snippets:
- Format: projects/{project id or number}/regions/{region}/subnetworks/{subnetwork id} NotebookIdleShutdownConfig JSON representation { "idleTimeout" : string , "idleShutdownDisabled" : boolean } Fields idleTimeout string ( Duration format) Required.
- In Notebook, Idle Timeout is accurate to minute so the range of idle timeout (second) is: 10 60 1440 60.
- NotebookRuntime JSON representation { "name" : string , "runtimeUser" : string , "notebookRuntimeTemplateRef" : { object ( NotebookRuntimeTemplateRef ) } , "proxyUri" : string , "createTime" : string , "updateTime" : string , "healthState" : enum ( HealthState ) , "displayName" : string , "description" : string , "serviceAccount" : string , "runtimeState" : enum ( RuntimeState ) , "isUpgradable" : boolean , "labels" : { string : string , ... } , "expirationTime" : string , "version" : string , "notebookRuntimeType" : enum ( NotebookRuntimeType ) , "machineSpec" : { object ( MachineSpec ) } , "dataPersistentDiskSpec" : { object ( PersistentDiskSpec ) } , "networkSpec" : { object ( NetworkSpec ) } , "idleShutdownConfig" : { object ( NotebookIdleShutdownConfig ) } , "eucConfig" : { object ( NotebookEucConfig ) } , "shieldedVmConfig" : { object ( ShieldedVmConfig ) } , "networkTags" : [ string ] , "softwareConfig" : { object ( NotebookSoftwareConfig ) } , "encryptionSpec" : { object ( EncryptionSpec ) } , "satisfiesPzs" : boolean , "satisfiesPzi" : boolean } Fields name string Output only.
- Following system labels exist for NotebookRuntime: "aiplatform.googleapis.com/notebook runtime gce instance id": output only, its value is the Compute Engine instance id. "aiplatform.googleapis.com/colab enterprise entry service": its value is either "bigquery" or "vertex"; if absent, it should be "vertex".

