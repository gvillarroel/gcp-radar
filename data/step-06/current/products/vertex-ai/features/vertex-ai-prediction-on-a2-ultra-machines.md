---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:02:17.107Z"
product_name: "Vertex AI"
product_slug: "vertex-ai"
feature_name: "Vertex AI Prediction on A2 Ultra machines"
feature_slug: "vertex-ai-prediction-on-a2-ultra-machines"
latest_feature_date: "2023-09-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_list_notebook_runtimes"
  - "https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_list_notebook_runtime_templates"
  - "https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/overview"
keywords:
  - "vertex"
  - "ai"
  - "prediction"
  - "a2"
  - "ultra"
  - "machines"
  - "now"
  - "supports"
---

# Vertex AI Prediction on A2 Ultra machines

Product: Vertex AI
Coverage: MEDIUM

## Step 02 Summary

Vertex AI now supports serving predictions on A2 Ultra machines in the specified regions, with each machine using NVIDIA A100 80GB GPUs.

## Extended Definition

Vertex AI now supports serving predictions on A2 Ultra machines in the specified regions, with each machine using NVIDIA A100 80GB GPUs.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_list_notebook_runtimes](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_list_notebook_runtimes)
- [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_list_notebook_runtime_templates](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_list_notebook_runtime_templates)
- [https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/overview](https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/overview)

## Supporting Pages

### "MCP Tools Reference: aiplatform.googleapis.com \_|\_ Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_list_notebook_runtime_templates](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_list_notebook_runtime_templates)
- Source ID: `site-api-reference`
- Final score: 76
- Re-rank relevance: N/A

Evidence snippets:
- NotebookRuntimeTemplate JSON representation { "name" : string , "displayName" : string , "description" : string , "isDefault" : boolean , "machineSpec" : { object ( MachineSpec ) } , "dataPersistentDiskSpec" : { object ( PersistentDiskSpec ) } , "networkSpec" : { object ( NetworkSpec ) } , "serviceAccount" : string , "etag" : string , "labels" : { string : string , ... } , "idleShutdownConfig" : { object ( NotebookIdleShutdownConfig ) } , "eucConfig" : { object ( NotebookEucConfig ) } , "createTime" : string , "updateTime" : string , "notebookRuntimeType" : enum ( NotebookRuntimeType ) , "shieldedVmConfig" : { object ( ShieldedVmConfig ) } , "networkTags" : [ string ] , "encryptionSpec" : { object ( EncryptionSpec ) } , "softwareConfig" : { object ( NotebookSoftwareConfig ) } } Fields name string The resource name of the NotebookRuntimeTemplate. displayName string Required.
- For field names both snake case and camelCase are supported. notebookRuntimeTemplate supports = and !=. notebookRuntimeTemplate represents the NotebookRuntimeTemplate ID, i.e. the last segment of the NotebookRuntimeTemplate's resource name . display name supports = and != labels supports general map functions that is: labels.key=value - key:value equality `labels.key: or labels:key - key existence A key including a space must be quoted. labels."a key" . notebookRuntimeType supports = and !=. notebookRuntimeType enum: [USER DEFINED, ONE CLICK]. machineType supports = and !=. acceleratorType supports = and !=.
- MachineSpec JSON representation { "machineType" : string , "acceleratorType" : enum ( AcceleratorType ) , "acceleratorCount" : integer , "gpuPartitionSize" : string , "tpuTopology" : string , "reservationAffinity" : { object ( ReservationAffinity ) } } Fields machineType string Immutable.
- Home Documentation AI and ML Vertex AI Reference Send feedback MCP Tools Reference: aiplatform.googleapis.com Stay organized with collections Save and categorize content based on your preferences.

### "MCP Tools Reference: aiplatform.googleapis.com \_|\_ Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_list_notebook_runtimes](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_list_notebook_runtimes)
- Source ID: `site-api-reference`
- Final score: 76
- Re-rank relevance: N/A

Evidence snippets:
- NotebookRuntime JSON representation { "name" : string , "runtimeUser" : string , "notebookRuntimeTemplateRef" : { object ( NotebookRuntimeTemplateRef ) } , "proxyUri" : string , "createTime" : string , "updateTime" : string , "healthState" : enum ( HealthState ) , "displayName" : string , "description" : string , "serviceAccount" : string , "runtimeState" : enum ( RuntimeState ) , "isUpgradable" : boolean , "labels" : { string : string , ... } , "expirationTime" : string , "version" : string , "notebookRuntimeType" : enum ( NotebookRuntimeType ) , "machineSpec" : { object ( MachineSpec ) } , "dataPersistentDiskSpec" : { object ( PersistentDiskSpec ) } , "networkSpec" : { object ( NetworkSpec ) } , "idleShutdownConfig" : { object ( NotebookIdleShutdownConfig ) } , "eucConfig" : { object ( NotebookEucConfig ) } , "shieldedVmConfig" : { object ( ShieldedVmConfig ) } , "networkTags" : [ string ] , "softwareConfig" : { object ( NotebookSoftwareConfig ) } , "encryptionSpec" : { object ( EncryptionSpec ) } , "satisfiesPzs" : boolean , "satisfiesPzi" : boolean } Fields name string Output only.
- For field names both snake case and camelCase are supported. notebookRuntime supports = and !=. notebookRuntime represents the NotebookRuntime ID, i.e. the last segment of the NotebookRuntime's resource name . displayName supports = and != and regex. notebookRuntimeTemplate supports = and !=. notebookRuntimeTemplate represents the NotebookRuntimeTemplate ID, i.e. the last segment of the NotebookRuntimeTemplate's resource name . healthState supports = and !=. healthState enum: [HEALTHY, UNHEALTHY, HEALTH STATE UNSPECIFIED]. runtimeState supports = and !=. runtimeState enum: [RUNTIME STATE UNSPECIFIED, RUNNING, BEING STARTED, BEING STOPPED, STOPPED, BEING UPGRADED, ERROR, INVALID]. runtimeUser supports = and !=.
- LabelsEntry JSON representation { "key" : string , "value" : string } Fields key string value string MachineSpec JSON representation { "machineType" : string , "acceleratorType" : enum ( AcceleratorType ) , "acceleratorCount" : integer , "gpuPartitionSize" : string , "tpuTopology" : string , "reservationAffinity" : { object ( ReservationAffinity ) } } Fields machineType string Immutable.
- API version is UI only: uiState supports = and !=. uiState enum: [UI RESOURCE STATE UNSPECIFIED, UI RESOURCE STATE BEING CREATED, UI RESOURCE STATE ACTIVE, UI RESOURCE STATE BEING DELETED, UI RESOURCE STATE CREATION FAILED]. notebookRuntimeType supports = and !=. notebookRuntimeType enum: [USER DEFINED, ONE CLICK]. machineType supports = and !=. acceleratorType supports = and !=.

### About Vertex AI Feature Store \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/overview](https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/overview)
- Source ID: `site-docs-reference-3`
- Final score: 70
- Re-rank relevance: N/A

Evidence snippets:
- Offline serving for batch predictions or model training Because you don't need to copy or import your feature data from BigQuery to a separate offline store in Vertex AI, you can use the data management and export capabilities of BigQuery to do the following: Query feature data, including historical data at a point in time .
- Online serving Vertex AI Feature Store provides the following types of online serving for real-time online predictions: Bigtable online serving is useful for serving large data volumes (terabytes of data).
- Resource version metadata Vertex AI Feature Store only supports the version 0 for features.
- Optimized online serving in Vertex AI Feature Store supports embedding management.

