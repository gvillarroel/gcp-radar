---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T17:42:01.122Z"
product_name: "Vertex AI Workbench"
product_slug: "vertex-ai-workbench"
feature_name: "Vertex AI Workbench instance NVIDIA driver version"
feature_slug: "vertex-ai-workbench-instance-nvidia-driver-version"
latest_feature_date: "2024-03-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/rest/v1/projects.locations.instances/getInstanceHealth"
  - "https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/manage-access"
  - "https://docs.cloud.google.com/vertex-ai/docs/workbench/instances"
keywords:
  - "vertex"
  - "ai"
  - "workbench"
  - "instance"
  - "nvidia"
  - "driver"
  - "version"
  - "instances"
---

# Vertex AI Workbench instance NVIDIA driver version

Product: Vertex AI Workbench
Coverage: MEDIUM

## Step 02 Summary

Vertex AI Workbench instances were updated to NVIDIA R535 drivers.

## Extended Definition

Vertex AI Workbench instances were updated to NVIDIA R535 drivers.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/rest/v1/projects.locations.instances/getInstanceHealth](https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/rest/v1/projects.locations.instances/getInstanceHealth)
- [https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/manage-access](https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/manage-access)
- [https://docs.cloud.google.com/vertex-ai/docs/workbench/instances](https://docs.cloud.google.com/vertex-ai/docs/workbench/instances)

## Supporting Pages

### "Method: projects.locations.instances.getInstanceHealth \_|\_ Vertex AI \_\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/rest/v1/projects.locations.instances/getInstanceHealth](https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/rest/v1/projects.locations.instances/getInstanceHealth)
- Source ID: `site-api-reference-2`
- Final score: 133
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation AI and ML Vertex AI Reference Send feedback Method: projects.locations.instances.getInstanceHealth Stay organized with collections Save and categorize content based on your preferences.
- Format: projects/{projectId}/locations/{location}/instances/{instanceId} Authorization requires the following IAM permission on the specified resource name : notebooks.instances.getHealth Request body The request body must be empty.
- UNHEALTHY The instance is known to be in an unhealthy state (for example, critical daemons are not running) Applies to ACTIVE state.
- HTTP request GET https://notebooks.googleapis.com/v1/{name}:getInstanceHealth Path parameters Parameters name string Required.

### Manage access to a Vertex AI Workbench instance \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/manage-access](https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/manage-access)
- Source ID: `site-docs-reference-2`
- Final score: 128
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Before using any of the command data below, make the following replacements: INSTANCE NAME : the name of your instance PROJECT ID : your Google Cloud project ID LOCATION : the zone where your instance is located Save the following content in a file called request.json : { "policy" : { "bindings" : [ { "role" : "roles/notebooks.viewer" , "members" : [ "user:email@example.com" ] }, { "role" : "roles/notebooks.admin" , "members" : [ "user:eve@example.com" ] } ], "etag" : "BwWWja0YfJA=" , "version" : 3 } } Execute the following command: Linux, macOS, or Cloud Shell Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud workbench instances set-iam-policy INSTANCE NAME \ --project = PROJECT ID \ --location = LOCATION \ request.json --format = json Windows (PowerShell) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud workbench instances set-iam-policy INSTANCE NAME --project = PROJECT ID --location = LOCATION request.json --format = json Windows (cmd.exe) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud workbench instances set-iam-policy INSTANCE NAME ^ --project = PROJECT ID ^ --location = LOCATION ^ request.json --format = json Grant access to the JupyterLab interface Granting a principal access to a Vertex AI Workbench instance doesn't grant the ability to use the instance's JupyterLab interface.
- Grant access to Vertex AI Workbench instances To grant users permission to access a specific Vertex AI Workbench instance, set an IAM policy on the instance. gcloud To grant a role to a principal on a Vertex AI Workbench instance, use the get-iam-policy command to retrieve the current policy, edit the current policy's access, and then use the set-iam-policy command to update the policy on the instance.
- Retrieve the current policy Before using any of the command data below, make the following replacements: INSTANCE NAME : the name of your instance PROJECT ID : your Google Cloud project ID LOCATION : the zone where your instance is located Execute the following command: Linux, macOS, or Cloud Shell Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud workbench instances get-iam-policy INSTANCE NAME \ --project = PROJECT ID \ --location = LOCATION Windows (PowerShell) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud workbench instances get-iam-policy INSTANCE NAME --project = PROJECT ID --location = LOCATION Windows (cmd.exe) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud workbench instances get-iam-policy INSTANCE NAME ^ --project = PROJECT ID ^ --location = LOCATION The response is the text of your instance's IAM policy.
- Before using any of the request data, make the following replacements: PROJECT ID : your Google Cloud project ID LOCATION : the zone where your instance is located INSTANCE NAME : the name of your instance HTTP method and URL: POST https://notebooks.googleapis.com/v2/projects/ PROJECT ID /locations/ LOCATION /instances/ INSTANCE NAME :setIamPolicy Request JSON body: { "policy": { "bindings": [ { "role": "roles/notebooks.viewer", "members": [ "user:email@example.com" ] }, { "role": "roles/notebooks.admin", "members": [ "user:eve@example.com" ] } ], "etag": "BwWWja0YfJA=", "version": 3 } } To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

### Vertex AI Workbench instances documentation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/workbench/instances](https://docs.cloud.google.com/vertex-ai/docs/workbench/instances)
- Source ID: `site-docs-reference`
- Final score: 113
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Documentation resources Find quickstarts and guides, review key references, and get help with common issues. format list numbered Guides Create a Vertex AI Workbench instance Introduction to Vertex AI Workbench instances Query data in BigQuery from within JupyterLab info Manage your environment Add a conda environment Manage your conda environment Change machine type and configure GPUs of a Vertex AI Workbench instance info Resources Pricing Release notes Get support Related videos Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation AI and ML Vertex AI Vertex AI Workbench Vertex AI Workbench instances documentation Read product documentation Vertex AI Workbench instances are Jupyter notebook-based development environments for the entire data science workflow.
- Vertex AI Workbench instances are prepackaged with JupyterLab and have a preinstalled suite of deep learning packages, including support for the TensorFlow and PyTorch frameworks.

