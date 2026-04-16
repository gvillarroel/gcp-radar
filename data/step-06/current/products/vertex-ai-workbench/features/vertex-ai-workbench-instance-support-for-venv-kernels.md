---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T17:42:01.173Z"
product_name: "Vertex AI Workbench"
product_slug: "vertex-ai-workbench"
feature_name: "Vertex AI Workbench instance support for venv kernels"
feature_slug: "vertex-ai-workbench-instance-support-for-venv-kernels"
latest_feature_date: "2024-01-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/rest/v1/projects.locations.instances/getInstanceHealth"
  - "https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/manage-access"
  - "https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/manage-access-jupyterlab"
keywords:
  - "vertex"
  - "ai"
  - "workbench"
  - "instance"
  - "venv"
  - "kernels"
  - "was"
  - "added"
---

# Vertex AI Workbench instance support for venv kernels

Product: Vertex AI Workbench
Coverage: MEDIUM

## Step 02 Summary

Support for venv kernels was added to Vertex AI Workbench instances.

## Extended Definition

Support for venv kernels was added to Vertex AI Workbench instances.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/rest/v1/projects.locations.instances/getInstanceHealth](https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/rest/v1/projects.locations.instances/getInstanceHealth)
- [https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/manage-access](https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/manage-access)
- [https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/manage-access-jupyterlab](https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/manage-access-jupyterlab)

## Supporting Pages

### "Method: projects.locations.instances.getInstanceHealth \_|\_ Vertex AI \_\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/rest/v1/projects.locations.instances/getInstanceHealth](https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/rest/v1/projects.locations.instances/getInstanceHealth)
- Source ID: `site-api-reference-2`
- Final score: 94
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation AI and ML Vertex AI Reference Send feedback Method: projects.locations.instances.getInstanceHealth Stay organized with collections Save and categorize content based on your preferences.
- Format: projects/{projectId}/locations/{location}/instances/{instanceId} Authorization requires the following IAM permission on the specified resource name : notebooks.instances.getHealth Request body The request body must be empty.
- UNHEALTHY The instance is known to be in an unhealthy state (for example, critical daemons are not running) Applies to ACTIVE state.
- HTTP request GET https://notebooks.googleapis.com/v1/{name}:getInstanceHealth Path parameters Parameters name string Required.

### "Manage access to a Vertex AI Workbench instance's JupyterLab interface \_\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/manage-access-jupyterlab](https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/manage-access-jupyterlab)
- Source ID: `site-docs-reference-2`
- Final score: 62
- Re-rank relevance: N/A

Evidence snippets:
- Grant access to multiple users through a service account Create a Vertex AI Workbench instance with the following specifications: In the Create instance dialog, in the IAM and security section, select the Service account access mode.
- JupyterLab access modes Vertex AI Workbench instances support the following access modes: Single user only : The Single user only access mode grants access only to the user that you specify.
- Create a Vertex AI Workbench instance with the following specifications: In the Create instance dialog, in the IAM and security section, select the Single user only access mode.
- Note: When you create a Vertex AI Workbench instance with Single user only access, your instance completes the boot process using the Compute Engine default service account.

### Manage access to a Vertex AI Workbench instance \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/manage-access](https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/manage-access)
- Source ID: `site-docs-reference-2`
- Final score: 62
- Re-rank relevance: N/A

Evidence snippets:
- Before using any of the command data below, make the following replacements: INSTANCE NAME : the name of your instance PROJECT ID : your Google Cloud project ID LOCATION : the zone where your instance is located Save the following content in a file called request.json : { "policy" : { "bindings" : [ { "role" : "roles/notebooks.viewer" , "members" : [ "user:email@example.com" ] }, { "role" : "roles/notebooks.admin" , "members" : [ "user:eve@example.com" ] } ], "etag" : "BwWWja0YfJA=" , "version" : 3 } } Execute the following command: Linux, macOS, or Cloud Shell Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud workbench instances set-iam-policy INSTANCE NAME \ --project = PROJECT ID \ --location = LOCATION \ request.json --format = json Windows (PowerShell) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud workbench instances set-iam-policy INSTANCE NAME --project = PROJECT ID --location = LOCATION request.json --format = json Windows (cmd.exe) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud workbench instances set-iam-policy INSTANCE NAME ^ --project = PROJECT ID ^ --location = LOCATION ^ request.json --format = json Grant access to the JupyterLab interface Granting a principal access to a Vertex AI Workbench instance doesn't grant the ability to use the instance's JupyterLab interface.
- Grant access to Vertex AI Workbench instances To grant users permission to access a specific Vertex AI Workbench instance, set an IAM policy on the instance. gcloud To grant a role to a principal on a Vertex AI Workbench instance, use the get-iam-policy command to retrieve the current policy, edit the current policy's access, and then use the set-iam-policy command to update the policy on the instance.
- API To grant a role to a principal on a Vertex AI Workbench instance, use the getIamPolicy method to retrieve the current policy, edit the current policy's access, and then use the setIamPolicy method to update the policy on the instance.
- Grant access to the JupyterLab interface Granting a principal access to a Vertex AI Workbench instance doesn't grant the ability to use the instance's JupyterLab interface.

