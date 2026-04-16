---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T17:42:01.216Z"
product_name: "Vertex AI Workbench"
product_slug: "vertex-ai-workbench"
feature_name: "Vertex AI Workbench idle timeout"
feature_slug: "vertex-ai-workbench-idle-timeout"
latest_feature_date: "2023-09-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_create_notebook_runtime_template"
  - "https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_create_notebook_runtime"
  - "https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/iam"
keywords:
  - "vertex"
  - "ai"
  - "workbench"
  - "idle"
  - "timeout"
  - "instances"
  - "configuration"
  - "inactive"
---

# Vertex AI Workbench idle timeout

Product: Vertex AI Workbench
Coverage: MEDIUM

## Step 02 Summary

Workbench instances support an idle timeout configuration for inactive notebook sessions; Vertex AI Workbench instances support an idle timeout setting for notebook environments.

## Extended Definition

Workbench instances support an idle timeout configuration for inactive notebook sessions; Vertex AI Workbench instances support an idle timeout setting for notebook environments.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_create_notebook_runtime_template](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_create_notebook_runtime_template)
- [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_create_notebook_runtime](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_create_notebook_runtime)
- [https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/iam](https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/iam)

## Supporting Pages

### "MCP Tools Reference: aiplatform.googleapis.com \_|\_ Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_create_notebook_runtime_template](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_create_notebook_runtime_template)
- Source ID: `site-api-reference`
- Final score: 104
- Re-rank relevance: N/A

Evidence snippets:
- Format: projects/{project id or number}/regions/{region}/subnetworks/{subnetwork id} LabelsEntry JSON representation { "key" : string , "value" : string } Fields key string value string NotebookIdleShutdownConfig JSON representation { "idleTimeout" : string , "idleShutdownDisabled" : boolean } Fields idleTimeout string ( Duration format) Required.
- This config will only be set when idle shutdown is enabled. eucConfig object ( NotebookEucConfig ) EUC configuration of the NotebookRuntimeTemplate. createTime string ( Timestamp format) Output only.
- Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } . idleShutdownConfig object ( NotebookIdleShutdownConfig ) The idle shutdown configuration of NotebookRuntimeTemplate.
- In Notebook, Idle Timeout is accurate to minute so the range of idle timeout (second) is: 10 60 1440 60.

### "MCP Tools Reference: aiplatform.googleapis.com \_|\_ Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_create_notebook_runtime](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_create_notebook_runtime)
- Source ID: `site-api-reference`
- Final score: 96
- Re-rank relevance: N/A

Evidence snippets:
- Format: projects/{project id or number}/regions/{region}/subnetworks/{subnetwork id} NotebookIdleShutdownConfig JSON representation { "idleTimeout" : string , "idleShutdownDisabled" : boolean } Fields idleTimeout string ( Duration format) Required.
- The idle shutdown configuration of the notebook runtime. eucConfig object ( NotebookEucConfig ) Output only.
- In Notebook, Idle Timeout is accurate to minute so the range of idle timeout (second) is: 10 60 1440 60.
- NotebookRuntime JSON representation { "name" : string , "runtimeUser" : string , "notebookRuntimeTemplateRef" : { object ( NotebookRuntimeTemplateRef ) } , "proxyUri" : string , "createTime" : string , "updateTime" : string , "healthState" : enum ( HealthState ) , "displayName" : string , "description" : string , "serviceAccount" : string , "runtimeState" : enum ( RuntimeState ) , "isUpgradable" : boolean , "labels" : { string : string , ... } , "expirationTime" : string , "version" : string , "notebookRuntimeType" : enum ( NotebookRuntimeType ) , "machineSpec" : { object ( MachineSpec ) } , "dataPersistentDiskSpec" : { object ( PersistentDiskSpec ) } , "networkSpec" : { object ( NetworkSpec ) } , "idleShutdownConfig" : { object ( NotebookIdleShutdownConfig ) } , "eucConfig" : { object ( NotebookEucConfig ) } , "shieldedVmConfig" : { object ( ShieldedVmConfig ) } , "networkTags" : [ string ] , "softwareConfig" : { object ( NotebookSoftwareConfig ) } , "encryptionSpec" : { object ( EncryptionSpec ) } , "satisfiesPzs" : boolean , "satisfiesPzi" : boolean } Fields name string Output only.

### Vertex AI Workbench instances access control \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/iam](https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/iam)
- Source ID: `site-docs-reference-2`
- Final score: 58
- Re-rank relevance: N/A

Evidence snippets:
- Vertex AI Workbench uses IAM to manage access to instances and an access mode to manage access to each instance's JupyterLab interface.
- For example, you can grant users roles/notebooks.viewer permissions at the project level so that they can view all Vertex AI Workbench resources in the project, and then you can grant each user roles/notebooks.admin permissions on a specific Vertex AI Workbench instance so that they have all of the admin abilities to administer that instance.
- Types of IAM roles There are different types of IAM roles that can be used in Vertex AI Workbench: Predefined roles let you grant a set of related permissions to your Vertex AI Workbench resources at the project level.
- Control access to an instance's JupyterLab interface with the access mode You control access to a Vertex AI Workbench instance's JupyterLab interface through the instance's access mode.

