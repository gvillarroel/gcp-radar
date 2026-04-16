---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T17:42:01.322Z"
product_name: "Vertex AI Workbench"
product_slug: "vertex-ai-workbench"
feature_name: "Vertex AI Workbench GPU instance startup"
feature_slug: "vertex-ai-workbench-gpu-instance-startup"
latest_feature_date: "2022-11-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/rest/v1/projects.locations.instances/getInstanceHealth"
  - "https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_create_notebook_runtime_template"
  - "https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_create_notebook_runtime"
keywords:
  - "vertex"
  - "ai"
  - "workbench"
  - "gpu"
  - "instance"
  - "startup"
  - "fix"
  - "enables"
---

# Vertex AI Workbench GPU instance startup

Product: Vertex AI Workbench
Coverage: MEDIUM

## Step 02 Summary

A fix enables Vertex AI Workbench instances with GPUs to start correctly.

## Extended Definition

A fix enables Vertex AI Workbench instances with GPUs to start correctly.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/rest/v1/projects.locations.instances/getInstanceHealth](https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/rest/v1/projects.locations.instances/getInstanceHealth)
- [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_create_notebook_runtime_template](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_create_notebook_runtime_template)
- [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_create_notebook_runtime](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_create_notebook_runtime)

## Supporting Pages

### "Method: projects.locations.instances.getInstanceHealth \_|\_ Vertex AI \_\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/rest/v1/projects.locations.instances/getInstanceHealth](https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/rest/v1/projects.locations.instances/getInstanceHealth)
- Source ID: `site-api-reference-2`
- Final score: 93
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation AI and ML Vertex AI Reference Send feedback Method: projects.locations.instances.getInstanceHealth Stay organized with collections Save and categorize content based on your preferences.
- Format: projects/{projectId}/locations/{location}/instances/{instanceId} Authorization requires the following IAM permission on the specified resource name : notebooks.instances.getHealth Request body The request body must be empty.
- UNHEALTHY The instance is known to be in an unhealthy state (for example, critical daemons are not running) Applies to ACTIVE state.
- HTTP request GET https://notebooks.googleapis.com/v1/{name}:getInstanceHealth Path parameters Parameters name string Required.

### "MCP Tools Reference: aiplatform.googleapis.com \_|\_ Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_create_notebook_runtime](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_create_notebook_runtime)
- Source ID: `site-api-reference`
- Final score: 83
- Re-rank relevance: N/A

Evidence snippets:
- Following system labels exist for NotebookRuntime: "aiplatform.googleapis.com/notebook runtime gce instance id": output only, its value is the Compute Engine instance id. "aiplatform.googleapis.com/colab enterprise entry service": its value is either "bigquery" or "vertex"; if absent, it should be "vertex".
- ShieldedVmConfig JSON representation { "enableSecureBoot" : boolean } Fields enableSecureBoot boolean Defines whether the instance has Secure Boot enabled.
- NotebookSoftwareConfig JSON representation { "env" : [ { object ( EnvVar ) } ] , "postStartupScriptConfig" : { object ( PostStartupScriptConfig ) } , // Union field runtime image can be only one of the following: "colabImage" : { object ( ColabImage ) } // End of list of possible types for union field runtime image . } Fields env[] object ( EnvVar ) Optional.
- PostStartupScriptConfig JSON representation { "postStartupScript" : string , "postStartupScriptUrl" : string , "postStartupScriptBehavior" : enum ( PostStartupScriptBehavior ) } Fields postStartupScript string Optional.

### "MCP Tools Reference: aiplatform.googleapis.com \_|\_ Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_create_notebook_runtime_template](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_create_notebook_runtime_template)
- Source ID: `site-api-reference`
- Final score: 83
- Re-rank relevance: N/A

Evidence snippets:
- ShieldedVmConfig JSON representation { "enableSecureBoot" : boolean } Fields enableSecureBoot boolean Defines whether the instance has Secure Boot enabled.
- NotebookSoftwareConfig JSON representation { "env" : [ { object ( EnvVar ) } ] , "postStartupScriptConfig" : { object ( PostStartupScriptConfig ) } , // Union field runtime image can be only one of the following: "colabImage" : { object ( ColabImage ) } // End of list of possible types for union field runtime image . } Fields env[] object ( EnvVar ) Optional.
- The Compute Engine tags to add to runtime (see Tagging instances ). encryptionSpec object ( EncryptionSpec ) Customer-managed encryption key spec for the notebook runtime. softwareConfig object ( NotebookSoftwareConfig ) Optional.
- PostStartupScriptConfig JSON representation { "postStartupScript" : string , "postStartupScriptUrl" : string , "postStartupScriptBehavior" : enum ( PostStartupScriptBehavior ) } Fields postStartupScript string Optional.

