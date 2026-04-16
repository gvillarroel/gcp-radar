---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T17:42:01.032Z"
product_name: "Vertex AI Workbench"
product_slug: "vertex-ai-workbench"
feature_name: "Vertex AI Workbench instances authorized SSH key home directory ownership"
feature_slug: "vertex-ai-workbench-instances-authorized-ssh-key-home-directory-ownership"
latest_feature_date: "2025-01-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/workbench/instances"
  - "https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/iam"
  - "https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/rest/v1/projects.locations.instances/getInstanceHealth"
keywords:
  - "vertex"
  - "ai"
  - "workbench"
  - "instances"
  - "authorized"
  - "ssh"
  - "key"
  - "home"
---

# Vertex AI Workbench instances authorized SSH key home directory ownership

Product: Vertex AI Workbench
Coverage: MEDIUM

## Step 02 Summary

Fixes an issue where home directory ownership could be incorrect when using authorized SSH keys with Vertex AI Workbench instances.

## Extended Definition

Fixes an issue where home directory ownership could be incorrect when using authorized SSH keys with Vertex AI Workbench instances.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/workbench/instances](https://docs.cloud.google.com/vertex-ai/docs/workbench/instances)
- [https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/iam](https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/iam)
- [https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/rest/v1/projects.locations.instances/getInstanceHealth](https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/rest/v1/projects.locations.instances/getInstanceHealth)

## Supporting Pages

### Vertex AI Workbench instances access control \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/iam](https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/iam)
- Source ID: `site-docs-reference-2`
- Final score: 71
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation AI and ML Vertex AI Vertex AI Workbench Send feedback Stay organized with collections Save and categorize content based on your preferences.
- Vertex AI Workbench uses IAM to manage access to instances and an access mode to manage access to each instance's JupyterLab interface.
- For example, you can grant users roles/notebooks.viewer permissions at the project level so that they can view all Vertex AI Workbench resources in the project, and then you can grant each user roles/notebooks.admin permissions on a specific Vertex AI Workbench instance so that they have all of the admin abilities to administer that instance.
- Types of IAM roles There are different types of IAM roles that can be used in Vertex AI Workbench: Predefined roles let you grant a set of related permissions to your Vertex AI Workbench resources at the project level.

### Vertex AI Workbench instances documentation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/workbench/instances](https://docs.cloud.google.com/vertex-ai/docs/workbench/instances)
- Source ID: `site-docs-reference`
- Final score: 67
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation AI and ML Vertex AI Vertex AI Workbench Vertex AI Workbench instances documentation Read product documentation Vertex AI Workbench instances are Jupyter notebook-based development environments for the entire data science workflow.
- Documentation resources Find quickstarts and guides, review key references, and get help with common issues. format list numbered Guides Create a Vertex AI Workbench instance Introduction to Vertex AI Workbench instances Query data in BigQuery from within JupyterLab info Manage your environment Add a conda environment Manage your conda environment Change machine type and configure GPUs of a Vertex AI Workbench instance info Resources Pricing Release notes Get support Related videos Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Vertex AI Workbench instances are prepackaged with JupyterLab and have a preinstalled suite of deep learning packages, including support for the TensorFlow and PyTorch frameworks.

### "Method: projects.locations.instances.getInstanceHealth \_|\_ Vertex AI \_\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/rest/v1/projects.locations.instances/getInstanceHealth](https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/rest/v1/projects.locations.instances/getInstanceHealth)
- Source ID: `site-api-reference-2`
- Final score: 63
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation AI and ML Vertex AI Reference Send feedback Method: projects.locations.instances.getInstanceHealth Stay organized with collections Save and categorize content based on your preferences.
- Format: projects/{projectId}/locations/{location}/instances/{instanceId} Authorization requires the following IAM permission on the specified resource name : notebooks.instances.getHealth Request body The request body must be empty.

