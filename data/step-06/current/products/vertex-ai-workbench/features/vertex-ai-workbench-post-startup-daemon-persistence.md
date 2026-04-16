---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T17:42:00.996Z"
product_name: "Vertex AI Workbench"
product_slug: "vertex-ai-workbench"
feature_name: "Vertex AI Workbench post-startup daemon persistence"
feature_slug: "vertex-ai-workbench-post-startup-daemon-persistence"
latest_feature_date: "2026-01-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_create_notebook_runtime"
  - "https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_create_notebook_runtime_template"
  - "https://docs.cloud.google.com/vertex-ai/docs/authentication"
keywords:
  - "vertex"
  - "ai"
  - "workbench"
  - "post"
  - "startup"
  - "daemon"
  - "persistence"
  - "processes"
---

# Vertex AI Workbench post-startup daemon persistence

Product: Vertex AI Workbench
Coverage: MEDIUM

## Step 02 Summary

Daemon processes launched by post-startup scripts in Vertex AI Workbench instances now continue running after the script finishes.

## Extended Definition

Daemon processes launched by post-startup scripts in Vertex AI Workbench instances now continue running after the script finishes.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_create_notebook_runtime](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_create_notebook_runtime)
- [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_create_notebook_runtime_template](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_create_notebook_runtime_template)
- [https://docs.cloud.google.com/vertex-ai/docs/authentication](https://docs.cloud.google.com/vertex-ai/docs/authentication)

## Supporting Pages

### "MCP Tools Reference: aiplatform.googleapis.com \_|\_ Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_create_notebook_runtime](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_create_notebook_runtime)
- Source ID: `site-api-reference`
- Final score: 58
- Re-rank relevance: N/A

Evidence snippets:
- NotebookSoftwareConfig JSON representation { "env" : [ { object ( EnvVar ) } ] , "postStartupScriptConfig" : { object ( PostStartupScriptConfig ) } , // Union field runtime image can be only one of the following: "colabImage" : { object ( ColabImage ) } // End of list of possible types for union field runtime image . } Fields env[] object ( EnvVar ) Optional.
- PostStartupScriptConfig JSON representation { "postStartupScript" : string , "postStartupScriptUrl" : string , "postStartupScriptBehavior" : enum ( PostStartupScriptBehavior ) } Fields postStartupScript string Optional.
- Example: gs://bucket/script.sh postStartupScriptBehavior enum ( PostStartupScriptBehavior ) Optional.
- Maximum limit is 100. postStartupScriptConfig object ( PostStartupScriptConfig ) Optional.

### "MCP Tools Reference: aiplatform.googleapis.com \_|\_ Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_create_notebook_runtime_template](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_create_notebook_runtime_template)
- Source ID: `site-api-reference`
- Final score: 58
- Re-rank relevance: N/A

Evidence snippets:
- NotebookSoftwareConfig JSON representation { "env" : [ { object ( EnvVar ) } ] , "postStartupScriptConfig" : { object ( PostStartupScriptConfig ) } , // Union field runtime image can be only one of the following: "colabImage" : { object ( ColabImage ) } // End of list of possible types for union field runtime image . } Fields env[] object ( EnvVar ) Optional.
- PostStartupScriptConfig JSON representation { "postStartupScript" : string , "postStartupScriptUrl" : string , "postStartupScriptBehavior" : enum ( PostStartupScriptBehavior ) } Fields postStartupScript string Optional.
- Example: gs://bucket/script.sh postStartupScriptBehavior enum ( PostStartupScriptBehavior ) Optional.
- Maximum limit is 100. postStartupScriptConfig object ( PostStartupScriptConfig ) Optional.

### Authenticate to Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/authentication](https://docs.cloud.google.com/vertex-ai/docs/authentication)
- Source ID: `site-api-reference`
- Final score: 50
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you're trying to authenticate to Vertex AI Workbench, see Authenticate to Vertex AI Workbench .
- What's next Learn how to authenticate to Vertex AI Workbench.
- You can access the API in the following ways: Client libraries Google Cloud CLI REST Client libraries The Vertex AI client libraries provide high-level language support for authenticating to Vertex AI programmatically.
- Google Cloud CLI When you use the gcloud CLI to access Vertex AI, you log in to the gcloud CLI with a user account, which provides the credentials used by the gcloud CLI commands.

