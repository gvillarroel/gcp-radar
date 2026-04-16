---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T17:42:01.018Z"
product_name: "Vertex AI Workbench"
product_slug: "vertex-ai-workbench"
feature_name: "Vertex AI Workbench instance provisioning with proxy access disabled"
feature_slug: "vertex-ai-workbench-instance-provisioning-with-proxy-access-disabled"
latest_feature_date: "2025-08-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/manage-access-jupyterlab"
  - "https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/manage-access-jupyterlab"
  - "https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/manage-access"
keywords:
  - "vertex"
  - "ai"
  - "workbench"
  - "instance"
  - "provisioning"
  - "proxy"
  - "access"
  - "disabled"
---

# Vertex AI Workbench instance provisioning with proxy access disabled

Product: Vertex AI Workbench
Coverage: MEDIUM

## Step 02 Summary

Vertex AI Workbench instances were patched so that provisioning no longer stalls when proxy access is disabled.

## Extended Definition

Vertex AI Workbench instances were patched so that provisioning no longer stalls when proxy access is disabled.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/manage-access-jupyterlab](https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/manage-access-jupyterlab)
- [https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/manage-access-jupyterlab](https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/manage-access-jupyterlab)
- [https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/manage-access](https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/manage-access)

## Supporting Pages

### "Manage access to a Vertex AI Workbench instance's JupyterLab interface \_\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/manage-access-jupyterlab](https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/manage-access-jupyterlab)
- Source ID: `site-docs-reference-2`
- Final score: 152
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following are examples of single user access metadata entries: proxy-mode=mail proxy-user-mail=user@example.com When you select the Service account access mode, Vertex AI Workbench stores a proxy-mode=service account metadata entry.
- Grant access to multiple users through a service account Create a Vertex AI Workbench instance with the following specifications: In the Create instance dialog, in the IAM and security section, select the Service account access mode.
- JupyterLab access modes Vertex AI Workbench instances support the following access modes: Single user only : The Single user only access mode grants access only to the user that you specify.
- Create a Vertex AI Workbench instance with the following specifications: In the Create instance dialog, in the IAM and security section, select the Single user only access mode.

### "Manage access to a Vertex AI Workbench managed notebooks instance's JupyterLab\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/manage-access-jupyterlab](https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/manage-access-jupyterlab)
- Source ID: `site-docs-reference-2`
- Final score: 134
- Re-rank relevance: N/A

Evidence snippets:
- The following are examples of single user access metadata entries: proxy-mode=mail proxy-user-mail=user@example.com When you select the Service account access mode, Vertex AI Workbench stores a proxy-mode=service account metadata entry.
- Manage access to a managed notebooks instance's JupyterLab interface Vertex AI Workbench managed notebooks is deprecated .
- When you select the Single user only access mode, Vertex AI Workbench stores a value for proxy-mode and proxy-user-mail .
- This page describes how to grant access to the JupyterLab interface of a Vertex AI Workbench managed notebooks instance.

### Manage access to a Vertex AI Workbench instance \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/manage-access](https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/manage-access)
- Source ID: `site-docs-reference-2`
- Final score: 121
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Before using any of the command data below, make the following replacements: INSTANCE NAME : the name of your instance PROJECT ID : your Google Cloud project ID LOCATION : the zone where your instance is located Save the following content in a file called request.json : { "policy" : { "bindings" : [ { "role" : "roles/notebooks.viewer" , "members" : [ "user:email@example.com" ] }, { "role" : "roles/notebooks.admin" , "members" : [ "user:eve@example.com" ] } ], "etag" : "BwWWja0YfJA=" , "version" : 3 } } Execute the following command: Linux, macOS, or Cloud Shell Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud workbench instances set-iam-policy INSTANCE NAME \ --project = PROJECT ID \ --location = LOCATION \ request.json --format = json Windows (PowerShell) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud workbench instances set-iam-policy INSTANCE NAME --project = PROJECT ID --location = LOCATION request.json --format = json Windows (cmd.exe) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud workbench instances set-iam-policy INSTANCE NAME ^ --project = PROJECT ID ^ --location = LOCATION ^ request.json --format = json Grant access to the JupyterLab interface Granting a principal access to a Vertex AI Workbench instance doesn't grant the ability to use the instance's JupyterLab interface.
- Grant access to Vertex AI Workbench instances To grant users permission to access a specific Vertex AI Workbench instance, set an IAM policy on the instance. gcloud To grant a role to a principal on a Vertex AI Workbench instance, use the get-iam-policy command to retrieve the current policy, edit the current policy's access, and then use the set-iam-policy command to update the policy on the instance.
- API To grant a role to a principal on a Vertex AI Workbench instance, use the getIamPolicy method to retrieve the current policy, edit the current policy's access, and then use the setIamPolicy method to update the policy on the instance.
- Grant access to the JupyterLab interface Granting a principal access to a Vertex AI Workbench instance doesn't grant the ability to use the instance's JupyterLab interface.

