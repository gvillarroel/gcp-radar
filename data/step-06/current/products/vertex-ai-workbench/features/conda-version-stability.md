---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T17:42:01.046Z"
product_name: "Vertex AI Workbench"
product_slug: "vertex-ai-workbench"
feature_name: "Conda version stability"
feature_slug: "conda-version-stability"
latest_feature_date: "2024-09-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/workbench/introduction"
  - "https://docs.cloud.google.com/vertex-ai/docs/workbench/instances"
  - "https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/manage-access"
keywords:
  - "conda"
  - "version"
  - "stability"
  - "vertex"
  - "ai"
  - "workbench"
  - "instances"
  - "now"
---

# Conda version stability

Product: Vertex AI Workbench
Coverage: MEDIUM

## Step 02 Summary

Vertex AI Workbench instances now avoid the M124-introduced regression that downgraded Conda to an older version.

## Extended Definition

Vertex AI Workbench instances now avoid the M124-introduced regression that downgraded Conda to an older version.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/workbench/introduction](https://docs.cloud.google.com/vertex-ai/docs/workbench/introduction)
- [https://docs.cloud.google.com/vertex-ai/docs/workbench/instances](https://docs.cloud.google.com/vertex-ai/docs/workbench/instances)
- [https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/manage-access](https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/manage-access)

## Supporting Pages

### Introduction to Vertex AI Workbench \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/workbench/introduction](https://docs.cloud.google.com/vertex-ai/docs/workbench/introduction)
- Source ID: `site-docs-root`
- Final score: 80
- Re-rank relevance: N/A

Evidence snippets:
- Add conda environments Vertex AI Workbench instances use kernels based on conda environments.
- Although the use of custom virtual machine (VM) images or Deep Learning VM images with Vertex AI Workbench instances can be possible, Vertex AI Workbench doesn't provide any support for unexpected behaviors or malfunctions when using those images.
- When you use Access Context Manager and Chrome Enterprise Premium to protect Vertex AI Workbench instances with context-aware access controls, access is evaluated each time the user authenticates to the instance.
- To edit a Vertex AI Workbench instance's underlying VM, use the projects.locations.instances.patch method in the Notebooks API or the gcloud workbench instances update command in the Google Cloud SDK.

### Manage access to a Vertex AI Workbench instance \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/manage-access](https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/manage-access)
- Source ID: `site-docs-reference-2`
- Final score: 69
- Re-rank relevance: N/A

Evidence snippets:
- Before using any of the command data below, make the following replacements: INSTANCE NAME : the name of your instance PROJECT ID : your Google Cloud project ID LOCATION : the zone where your instance is located Save the following content in a file called request.json : { "policy" : { "bindings" : [ { "role" : "roles/notebooks.viewer" , "members" : [ "user:email@example.com" ] }, { "role" : "roles/notebooks.admin" , "members" : [ "user:eve@example.com" ] } ], "etag" : "BwWWja0YfJA=" , "version" : 3 } } Execute the following command: Linux, macOS, or Cloud Shell Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud workbench instances set-iam-policy INSTANCE NAME \ --project = PROJECT ID \ --location = LOCATION \ request.json --format = json Windows (PowerShell) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud workbench instances set-iam-policy INSTANCE NAME --project = PROJECT ID --location = LOCATION request.json --format = json Windows (cmd.exe) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud workbench instances set-iam-policy INSTANCE NAME ^ --project = PROJECT ID ^ --location = LOCATION ^ request.json --format = json Grant access to the JupyterLab interface Granting a principal access to a Vertex AI Workbench instance doesn't grant the ability to use the instance's JupyterLab interface.
- Grant access to Vertex AI Workbench instances To grant users permission to access a specific Vertex AI Workbench instance, set an IAM policy on the instance. gcloud To grant a role to a principal on a Vertex AI Workbench instance, use the get-iam-policy command to retrieve the current policy, edit the current policy's access, and then use the set-iam-policy command to update the policy on the instance.
- Retrieve the current policy Before using any of the command data below, make the following replacements: INSTANCE NAME : the name of your instance PROJECT ID : your Google Cloud project ID LOCATION : the zone where your instance is located Execute the following command: Linux, macOS, or Cloud Shell Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud workbench instances get-iam-policy INSTANCE NAME \ --project = PROJECT ID \ --location = LOCATION Windows (PowerShell) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud workbench instances get-iam-policy INSTANCE NAME --project = PROJECT ID --location = LOCATION Windows (cmd.exe) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud workbench instances get-iam-policy INSTANCE NAME ^ --project = PROJECT ID ^ --location = LOCATION The response is the text of your instance's IAM policy.
- Before using any of the request data, make the following replacements: PROJECT ID : your Google Cloud project ID LOCATION : the zone where your instance is located INSTANCE NAME : the name of your instance HTTP method and URL: POST https://notebooks.googleapis.com/v2/projects/ PROJECT ID /locations/ LOCATION /instances/ INSTANCE NAME :setIamPolicy Request JSON body: { "policy": { "bindings": [ { "role": "roles/notebooks.viewer", "members": [ "user:email@example.com" ] }, { "role": "roles/notebooks.admin", "members": [ "user:eve@example.com" ] } ], "etag": "BwWWja0YfJA=", "version": 3 } } To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

### Vertex AI Workbench instances documentation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/workbench/instances](https://docs.cloud.google.com/vertex-ai/docs/workbench/instances)
- Source ID: `site-docs-reference`
- Final score: 67
- Re-rank relevance: N/A

Evidence snippets:
- Documentation resources Find quickstarts and guides, review key references, and get help with common issues. format list numbered Guides Create a Vertex AI Workbench instance Introduction to Vertex AI Workbench instances Query data in BigQuery from within JupyterLab info Manage your environment Add a conda environment Manage your conda environment Change machine type and configure GPUs of a Vertex AI Workbench instance info Resources Pricing Release notes Get support Related videos Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation AI and ML Vertex AI Vertex AI Workbench Vertex AI Workbench instances documentation Read product documentation Vertex AI Workbench instances are Jupyter notebook-based development environments for the entire data science workflow.
- Vertex AI Workbench instances are prepackaged with JupyterLab and have a preinstalled suite of deep learning packages, including support for the TensorFlow and PyTorch frameworks.

