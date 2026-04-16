---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T17:42:01.334Z"
product_name: "Vertex AI Workbench"
product_slug: "vertex-ai-workbench"
feature_name: "Vertex AI Workbench runtime access error messaging"
feature_slug: "vertex-ai-workbench-runtime-access-error-messaging"
latest_feature_date: "2022-09-20"
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
  - "runtime"
  - "access"
  - "error"
  - "messaging"
  - "messages"
---

# Vertex AI Workbench runtime access error messaging

Product: Vertex AI Workbench
Coverage: MEDIUM

## Step 02 Summary

Error messages were improved when a service account cannot access the runtime.

## Extended Definition

Error messages were improved when a service account cannot access the runtime.

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
- Final score: 99
- Re-rank relevance: N/A

Evidence snippets:
- Following system labels exist for NotebookRuntime: "aiplatform.googleapis.com/notebook runtime gce instance id": output only, its value is the Compute Engine instance id. "aiplatform.googleapis.com/colab enterprise entry service": its value is either "bigquery" or "vertex"; if absent, it should be "vertex".
- Deprecated: This field is no longer used and the "Vertex AI Notebook Service Account" ( service-PROJECT NUMBER@gcp-sa-aiplatform-vm.iam.gserviceaccount.com ) is used for the runtime workload identity.
- Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. details[] object A list of messages that carry the error details.
- The proxy endpoint used to access the NotebookRuntime. createTime string ( Timestamp format) Output only.

### "MCP Tools Reference: aiplatform.googleapis.com \_|\_ Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_create_notebook_runtime_template](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_create_notebook_runtime_template)
- Source ID: `site-api-reference`
- Final score: 95
- Re-rank relevance: N/A

Evidence snippets:
- Deprecated: This field is ignored and the "Vertex AI Notebook Service Account" ( service-PROJECT NUMBER@gcp-sa-aiplatform-vm.iam.gserviceaccount.com ) is used for the runtime workload identity.
- Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. details[] object A list of messages that carry the error details.
- NotebookRuntimeTemplate JSON representation { "name" : string , "displayName" : string , "description" : string , "isDefault" : boolean , "machineSpec" : { object ( MachineSpec ) } , "dataPersistentDiskSpec" : { object ( PersistentDiskSpec ) } , "networkSpec" : { object ( NetworkSpec ) } , "serviceAccount" : string , "etag" : string , "labels" : { string : string , ... } , "idleShutdownConfig" : { object ( NotebookIdleShutdownConfig ) } , "eucConfig" : { object ( NotebookEucConfig ) } , "createTime" : string , "updateTime" : string , "notebookRuntimeType" : enum ( NotebookRuntimeType ) , "shieldedVmConfig" : { object ( ShieldedVmConfig ) } , "networkTags" : [ string ] , "encryptionSpec" : { object ( EncryptionSpec ) } , "softwareConfig" : { object ( NotebookSoftwareConfig ) } } Fields name string The resource name of the NotebookRuntimeTemplate. displayName string Required.
- Curl Request curl --location 'https://aiplatform.googleapis.com/mcp/generate' \ --header 'content-type: application/json' \ --header 'accept: application/json, text/event-stream' \ --data '{ "method": "tools/call", "params": { "name": "colab enterprise create notebook runtime template", "arguments": { // provide these details according to the tool' s MCP specification } } , "jsonrpc" : "2.0" , "id" : 1 } ' Input Schema Request message for NotebookService.CreateNotebookRuntimeTemplate .

### "Vertex AI Workbench managed notebooks access control \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/access-control](https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/access-control)
- Source ID: `site-docs-reference-2`
- Final score: 82
- Re-rank relevance: N/A

Evidence snippets:
- Basic roles (Owner, Editor, and Viewer) provide access control to your Vertex AI Workbench resources at the project level, and are common to all Google Cloud services.
- To add, update, or remove these roles in your Vertex AI Workbench project, see the documentation on managing access to projects, folders, and organizations .
- This page describes how to use Identity and Access Management (IAM) and an access mode to manage access to Vertex AI Workbench managed notebooks resources.
- Vertex AI Workbench uses IAM to manage access to managed notebooks instances and an access mode to manage access to each instance's JupyterLab interface.

