---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T17:42:01.407Z"
product_name: "Vertex AI Workbench"
product_slug: "vertex-ai-workbench"
feature_name: "VPC Service Controls support in Vertex AI Workbench"
feature_slug: "vpc-service-controls-support-in-vertex-ai-workbench"
latest_feature_date: "2022-04-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/workbench/introduction"
  - "https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/iam"
  - "https://docs.cloud.google.com/vertex-ai/docs/workbench/instances"
keywords:
  - "vpc"
  - "controls"
  - "vertex"
  - "ai"
  - "workbench"
  - "instances"
  - "can"
  - "secured"
---

# VPC Service Controls support in Vertex AI Workbench

Product: Vertex AI Workbench
Coverage: MEDIUM

## Step 02 Summary

Workbench instances can be secured using VPC Service Controls.

## Extended Definition

Workbench instances can be secured using VPC Service Controls.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/workbench/introduction](https://docs.cloud.google.com/vertex-ai/docs/workbench/introduction)
- [https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/iam](https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/iam)
- [https://docs.cloud.google.com/vertex-ai/docs/workbench/instances](https://docs.cloud.google.com/vertex-ai/docs/workbench/instances)

## Supporting Pages

### Introduction to Vertex AI Workbench \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/workbench/introduction](https://docs.cloud.google.com/vertex-ai/docs/workbench/introduction)
- Source ID: `site-docs-root`
- Final score: 59
- Re-rank relevance: N/A

Evidence snippets:
- When you use Access Context Manager and Chrome Enterprise Premium to protect Vertex AI Workbench instances with context-aware access controls, access is evaluated each time the user authenticates to the instance.
- Although the use of custom virtual machine (VM) images or Deep Learning VM images with Vertex AI Workbench instances can be possible, Vertex AI Workbench doesn't provide any support for unexpected behaviors or malfunctions when using those images.
- To edit a Vertex AI Workbench instance's underlying VM, use the projects.locations.instances.patch method in the Notebooks API or the gcloud workbench instances update command in the Google Cloud SDK.
- If you have specific compliance or regulatory requirements related to the keys that protect your data, you can use customer-managed encryption keys (CMEK) with your Vertex AI Workbench instances.

### Vertex AI Workbench instances access control \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/iam](https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/iam)
- Source ID: `site-docs-reference-2`
- Final score: 59
- Re-rank relevance: N/A

Evidence snippets:
- Vertex AI Workbench uses IAM to manage access to instances and an access mode to manage access to each instance's JupyterLab interface.
- For example, you can grant users roles/notebooks.viewer permissions at the project level so that they can view all Vertex AI Workbench resources in the project, and then you can grant each user roles/notebooks.admin permissions on a specific Vertex AI Workbench instance so that they have all of the admin abilities to administer that instance.
- Types of IAM roles There are different types of IAM roles that can be used in Vertex AI Workbench: Predefined roles let you grant a set of related permissions to your Vertex AI Workbench resources at the project level.
- Control access to an instance's JupyterLab interface with the access mode You control access to a Vertex AI Workbench instance's JupyterLab interface through the instance's access mode.

### Vertex AI Workbench instances documentation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/workbench/instances](https://docs.cloud.google.com/vertex-ai/docs/workbench/instances)
- Source ID: `site-docs-reference`
- Final score: 53
- Re-rank relevance: N/A

Evidence snippets:
- Documentation resources Find quickstarts and guides, review key references, and get help with common issues. format list numbered Guides Create a Vertex AI Workbench instance Introduction to Vertex AI Workbench instances Query data in BigQuery from within JupyterLab info Manage your environment Add a conda environment Manage your conda environment Change machine type and configure GPUs of a Vertex AI Workbench instance info Resources Pricing Release notes Get support Related videos Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation AI and ML Vertex AI Vertex AI Workbench Vertex AI Workbench instances documentation Read product documentation Vertex AI Workbench instances are Jupyter notebook-based development environments for the entire data science workflow.
- Vertex AI Workbench instances are prepackaged with JupyterLab and have a preinstalled suite of deep learning packages, including support for the TensorFlow and PyTorch frameworks.

