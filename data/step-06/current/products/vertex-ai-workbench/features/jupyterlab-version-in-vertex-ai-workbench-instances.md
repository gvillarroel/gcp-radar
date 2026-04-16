---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T17:42:01.183Z"
product_name: "Vertex AI Workbench"
product_slug: "vertex-ai-workbench"
feature_name: "JupyterLab version in Vertex AI Workbench instances"
feature_slug: "jupyterlab-version-in-vertex-ai-workbench-instances"
latest_feature_date: "2023-12-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/manage-access"
  - "https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/iam"
  - "https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/manage-access-jupyterlab"
keywords:
  - "jupyterlab"
  - "version"
  - "vertex"
  - "ai"
  - "workbench"
  - "instances"
  - "were"
  - "updated"
---

# JupyterLab version in Vertex AI Workbench instances

Product: Vertex AI Workbench
Coverage: MEDIUM

## Step 02 Summary

Vertex AI Workbench instances were updated to JupyterLab 3.6.6.

## Extended Definition

Vertex AI Workbench instances were updated to JupyterLab 3.6.6.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/manage-access](https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/manage-access)
- [https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/iam](https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/iam)
- [https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/manage-access-jupyterlab](https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/manage-access-jupyterlab)

## Supporting Pages

### Manage access to a Vertex AI Workbench instance \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/manage-access](https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/manage-access)
- Source ID: `site-docs-reference-2`
- Final score: 137
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Before using any of the command data below, make the following replacements: INSTANCE NAME : the name of your instance PROJECT ID : your Google Cloud project ID LOCATION : the zone where your instance is located Save the following content in a file called request.json : { "policy" : { "bindings" : [ { "role" : "roles/notebooks.viewer" , "members" : [ "user:email@example.com" ] }, { "role" : "roles/notebooks.admin" , "members" : [ "user:eve@example.com" ] } ], "etag" : "BwWWja0YfJA=" , "version" : 3 } } Execute the following command: Linux, macOS, or Cloud Shell Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud workbench instances set-iam-policy INSTANCE NAME \ --project = PROJECT ID \ --location = LOCATION \ request.json --format = json Windows (PowerShell) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud workbench instances set-iam-policy INSTANCE NAME --project = PROJECT ID --location = LOCATION request.json --format = json Windows (cmd.exe) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud workbench instances set-iam-policy INSTANCE NAME ^ --project = PROJECT ID ^ --location = LOCATION ^ request.json --format = json Grant access to the JupyterLab interface Granting a principal access to a Vertex AI Workbench instance doesn't grant the ability to use the instance's JupyterLab interface.
- Grant access to Vertex AI Workbench instances To grant users permission to access a specific Vertex AI Workbench instance, set an IAM policy on the instance. gcloud To grant a role to a principal on a Vertex AI Workbench instance, use the get-iam-policy command to retrieve the current policy, edit the current policy's access, and then use the set-iam-policy command to update the policy on the instance.
- Grant access to the JupyterLab interface Granting a principal access to a Vertex AI Workbench instance doesn't grant the ability to use the instance's JupyterLab interface.
- However, even granting a principal full access to a Vertex AI Workbench instance doesn't grant the ability to use the instance's JupyterLab interface.

### Vertex AI Workbench instances access control \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/iam](https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/iam)
- Source ID: `site-docs-reference-2`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- Vertex AI Workbench uses IAM to manage access to instances and an access mode to manage access to each instance's JupyterLab interface.
- Control access to an instance's JupyterLab interface with the access mode You control access to a Vertex AI Workbench instance's JupyterLab interface through the instance's access mode.
- However, even granting a principal full access to a Vertex AI Workbench instance doesn't grant the ability to use the instance's JupyterLab interface.
- You set a JupyterLab access mode when you create a Vertex AI Workbench instance.

### "Manage access to a Vertex AI Workbench managed notebooks instance's JupyterLab\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/manage-access-jupyterlab](https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/manage-access-jupyterlab)
- Source ID: `site-docs-reference-2`
- Final score: 104
- Re-rank relevance: N/A

Evidence snippets:
- To continue using Vertex AI Workbench, we recommend that you migrate your managed notebooks instances to Vertex AI Workbench instances .
- Manage access to a managed notebooks instance's JupyterLab interface Vertex AI Workbench managed notebooks is deprecated .
- This page describes how to grant access to the JupyterLab interface of a Vertex AI Workbench managed notebooks instance.
- The following are examples of single user access metadata entries: proxy-mode=mail proxy-user-mail=user@example.com When you select the Service account access mode, Vertex AI Workbench stores a proxy-mode=service account metadata entry.

