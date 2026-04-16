---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:02:17.154Z"
product_name: "Vertex AI"
product_slug: "vertex-ai"
feature_name: "A2 machine types for Vertex AI Prediction"
feature_slug: "a2-machine-types-for-vertex-ai-prediction"
latest_feature_date: "2022-11-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_list_notebook_runtime_templates"
  - "https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_list_notebook_runtimes"
  - "https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/overview"
keywords:
  - "a2"
  - "machine"
  - "types"
  - "vertex"
  - "ai"
  - "prediction"
  - "now"
  - "supports"
---

# A2 machine types for Vertex AI Prediction

Product: Vertex AI
Coverage: MEDIUM

## Step 02 Summary

Vertex AI Prediction now supports serving prediction workloads on A2 machine types.

## Extended Definition

Vertex AI Prediction now supports serving prediction workloads on A2 machine types.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_list_notebook_runtime_templates](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_list_notebook_runtime_templates)
- [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_list_notebook_runtimes](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_list_notebook_runtimes)
- [https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/overview](https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/overview)

## Supporting Pages

### "MCP Tools Reference: aiplatform.googleapis.com \_|\_ Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_list_notebook_runtime_templates](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_list_notebook_runtime_templates)
- Source ID: `site-api-reference`
- Final score: 112
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- See the list of machine types supported for prediction See the list of machine types supported for custom training .
- For field names both snake case and camelCase are supported. notebookRuntimeTemplate supports = and !=. notebookRuntimeTemplate represents the NotebookRuntimeTemplate ID, i.e. the last segment of the NotebookRuntimeTemplate's resource name . display name supports = and != labels supports general map functions that is: labels.key=value - key:value equality `labels.key: or labels:key - key existence A key including a space must be quoted. labels."a key" . notebookRuntimeType supports = and !=. notebookRuntimeType enum: [USER DEFINED, ONE CLICK]. machineType supports = and !=. acceleratorType supports = and !=.
- For accelerator optimized machine types ( https://cloud.google.com/compute/docs/accelerator-optimized-machines) , One may set the accelerator count from 1 to N for machine with N GPUs.
- NotebookRuntimeTemplate JSON representation { "name" : string , "displayName" : string , "description" : string , "isDefault" : boolean , "machineSpec" : { object ( MachineSpec ) } , "dataPersistentDiskSpec" : { object ( PersistentDiskSpec ) } , "networkSpec" : { object ( NetworkSpec ) } , "serviceAccount" : string , "etag" : string , "labels" : { string : string , ... } , "idleShutdownConfig" : { object ( NotebookIdleShutdownConfig ) } , "eucConfig" : { object ( NotebookEucConfig ) } , "createTime" : string , "updateTime" : string , "notebookRuntimeType" : enum ( NotebookRuntimeType ) , "shieldedVmConfig" : { object ( ShieldedVmConfig ) } , "networkTags" : [ string ] , "encryptionSpec" : { object ( EncryptionSpec ) } , "softwareConfig" : { object ( NotebookSoftwareConfig ) } } Fields name string The resource name of the NotebookRuntimeTemplate. displayName string Required.

### "MCP Tools Reference: aiplatform.googleapis.com \_|\_ Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_list_notebook_runtimes](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_list_notebook_runtimes)
- Source ID: `site-api-reference`
- Final score: 112
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- See the list of machine types supported for prediction See the list of machine types supported for custom training .
- API version is UI only: uiState supports = and !=. uiState enum: [UI RESOURCE STATE UNSPECIFIED, UI RESOURCE STATE BEING CREATED, UI RESOURCE STATE ACTIVE, UI RESOURCE STATE BEING DELETED, UI RESOURCE STATE CREATION FAILED]. notebookRuntimeType supports = and !=. notebookRuntimeType enum: [USER DEFINED, ONE CLICK]. machineType supports = and !=. acceleratorType supports = and !=.
- For accelerator optimized machine types ( https://cloud.google.com/compute/docs/accelerator-optimized-machines) , One may set the accelerator count from 1 to N for machine with N GPUs.
- NotebookRuntime JSON representation { "name" : string , "runtimeUser" : string , "notebookRuntimeTemplateRef" : { object ( NotebookRuntimeTemplateRef ) } , "proxyUri" : string , "createTime" : string , "updateTime" : string , "healthState" : enum ( HealthState ) , "displayName" : string , "description" : string , "serviceAccount" : string , "runtimeState" : enum ( RuntimeState ) , "isUpgradable" : boolean , "labels" : { string : string , ... } , "expirationTime" : string , "version" : string , "notebookRuntimeType" : enum ( NotebookRuntimeType ) , "machineSpec" : { object ( MachineSpec ) } , "dataPersistentDiskSpec" : { object ( PersistentDiskSpec ) } , "networkSpec" : { object ( NetworkSpec ) } , "idleShutdownConfig" : { object ( NotebookIdleShutdownConfig ) } , "eucConfig" : { object ( NotebookEucConfig ) } , "shieldedVmConfig" : { object ( ShieldedVmConfig ) } , "networkTags" : [ string ] , "softwareConfig" : { object ( NotebookSoftwareConfig ) } , "encryptionSpec" : { object ( EncryptionSpec ) } , "satisfiesPzs" : boolean , "satisfiesPzi" : boolean } Fields name string Output only.

### About Vertex AI Feature Store \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/overview](https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/overview)
- Source ID: `site-docs-reference-3`
- Final score: 104
- Re-rank relevance: N/A

Evidence snippets:
- Online serving Vertex AI Feature Store provides the following types of online serving for real-time online predictions: Bigtable online serving is useful for serving large data volumes (terabytes of data).
- Vertex AI Feature Store terms Terms related to feature engineering feature engineering Feature engineering is the process of transforming raw machine learning (ML) data into features that can be used to train ML models or to make inferences. feature In machine learning (ML), a feature is a characteristic or attribute of an instance or entity that's used as an input to train an ML model or to make inferences. feature value A feature value corresponds to the actual and measurable value of a feature (attribute) of an instance or entity.
- There are two types of Vertex AI Feature Store resources in the Feature Registry: Feature Registry resources for feature data Feature Registry resources for feature monitoring Feature Registry resources for feature data To register your feature data in the Feature Registry, you need to create the following Vertex AI Feature Store resources: Feature group ( FeatureGroup ): A FeatureGroup resource is associated with a specific BigQuery source table or view.
- Offline serving for batch predictions or model training Because you don't need to copy or import your feature data from BigQuery to a separate offline store in Vertex AI, you can use the data management and export capabilities of BigQuery to do the following: Query feature data, including historical data at a point in time .

