---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T17:42:01.301Z"
product_name: "Vertex AI Workbench"
product_slug: "vertex-ai-workbench"
feature_name: "Vertex AI Workbench managed notebook runtime idle-shutdown activity detection"
feature_slug: "vertex-ai-workbench-managed-notebook-runtime-idle-shutdown-activity-detection"
latest_feature_date: "2023-03-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_create_notebook_runtime"
  - "https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_create_notebook_runtime_template"
  - "https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/access-control"
keywords:
  - "vertex"
  - "ai"
  - "workbench"
  - "managed"
  - "notebook"
  - "runtime"
  - "idle"
  - "shutdown"
---

# Vertex AI Workbench managed notebook runtime idle-shutdown activity detection

Product: Vertex AI Workbench
Coverage: MEDIUM

## Step 02 Summary

Fixed a bug where managed notebook runtimes with idle shutdown enabled failed to detect activity before shutting down.

## Extended Definition

Fixed a bug where managed notebook runtimes with idle shutdown enabled failed to detect activity before shutting down.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_create_notebook_runtime](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_create_notebook_runtime)
- [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_create_notebook_runtime_template](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_create_notebook_runtime_template)
- [https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/access-control](https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/access-control)

## Supporting Pages

### "MCP Tools Reference: aiplatform.googleapis.com \_|\_ Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_create_notebook_runtime](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_create_notebook_runtime)
- Source ID: `site-api-reference`
- Final score: 153
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- NotebookRuntime JSON representation { "name" : string , "runtimeUser" : string , "notebookRuntimeTemplateRef" : { object ( NotebookRuntimeTemplateRef ) } , "proxyUri" : string , "createTime" : string , "updateTime" : string , "healthState" : enum ( HealthState ) , "displayName" : string , "description" : string , "serviceAccount" : string , "runtimeState" : enum ( RuntimeState ) , "isUpgradable" : boolean , "labels" : { string : string , ... } , "expirationTime" : string , "version" : string , "notebookRuntimeType" : enum ( NotebookRuntimeType ) , "machineSpec" : { object ( MachineSpec ) } , "dataPersistentDiskSpec" : { object ( PersistentDiskSpec ) } , "networkSpec" : { object ( NetworkSpec ) } , "idleShutdownConfig" : { object ( NotebookIdleShutdownConfig ) } , "eucConfig" : { object ( NotebookEucConfig ) } , "shieldedVmConfig" : { object ( ShieldedVmConfig ) } , "networkTags" : [ string ] , "softwareConfig" : { object ( NotebookSoftwareConfig ) } , "encryptionSpec" : { object ( EncryptionSpec ) } , "satisfiesPzs" : boolean , "satisfiesPzi" : boolean } Fields name string Output only.
- Example: "3.5s" . idleShutdownDisabled boolean Whether Idle Shutdown is disabled in this NotebookRuntimeTemplate.
- The idle shutdown configuration of the notebook runtime. eucConfig object ( NotebookEucConfig ) Output only.
- Network spec of the notebook runtime. idleShutdownConfig object ( NotebookIdleShutdownConfig ) Output only.

### "MCP Tools Reference: aiplatform.googleapis.com \_|\_ Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_create_notebook_runtime_template](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_create_notebook_runtime_template)
- Source ID: `site-api-reference`
- Final score: 153
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- NotebookRuntimeTemplate JSON representation { "name" : string , "displayName" : string , "description" : string , "isDefault" : boolean , "machineSpec" : { object ( MachineSpec ) } , "dataPersistentDiskSpec" : { object ( PersistentDiskSpec ) } , "networkSpec" : { object ( NetworkSpec ) } , "serviceAccount" : string , "etag" : string , "labels" : { string : string , ... } , "idleShutdownConfig" : { object ( NotebookIdleShutdownConfig ) } , "eucConfig" : { object ( NotebookEucConfig ) } , "createTime" : string , "updateTime" : string , "notebookRuntimeType" : enum ( NotebookRuntimeType ) , "shieldedVmConfig" : { object ( ShieldedVmConfig ) } , "networkTags" : [ string ] , "encryptionSpec" : { object ( EncryptionSpec ) } , "softwareConfig" : { object ( NotebookSoftwareConfig ) } } Fields name string The resource name of the NotebookRuntimeTemplate. displayName string Required.
- This config will only be set when idle shutdown is enabled. eucConfig object ( NotebookEucConfig ) EUC configuration of the NotebookRuntimeTemplate. createTime string ( Timestamp format) Output only.
- Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } . idleShutdownConfig object ( NotebookIdleShutdownConfig ) The idle shutdown configuration of NotebookRuntimeTemplate.
- Example: "3.5s" . idleShutdownDisabled boolean Whether Idle Shutdown is disabled in this NotebookRuntimeTemplate.

### "Vertex AI Workbench managed notebooks access control \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/access-control](https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/access-control)
- Source ID: `site-docs-reference-2`
- Final score: 125
- Re-rank relevance: N/A

Evidence snippets:
- For example, you can grant users roles/notebooks.viewer permissions at the project level so that they can view all Vertex AI Workbench resources in the project, and then you can grant each user roles/notebooks.admin permissions on a specific managed notebooks instance so that they have all of the admin abilities to administer that instance.
- This page describes how to use Identity and Access Management (IAM) and an access mode to manage access to Vertex AI Workbench managed notebooks resources.
- Vertex AI Workbench uses IAM to manage access to managed notebooks instances and an access mode to manage access to each instance's JupyterLab interface.
- To continue using Vertex AI Workbench, we recommend that you migrate your managed notebooks instances to Vertex AI Workbench instances .

