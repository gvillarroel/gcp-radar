---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T17:42:01.097Z"
product_name: "Vertex AI Workbench"
product_slug: "vertex-ai-workbench"
feature_name: "Vertex AI Workbench instances Jupyter-to-google-sudoers permission handling"
feature_slug: "vertex-ai-workbench-instances-jupyter-to-google-sudoers-permission-handling"
latest_feature_date: "2024-07-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/iam"
  - "https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/manage-access-jupyterlab"
  - "https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/manage-access-jupyterlab"
keywords:
  - "vertex"
  - "ai"
  - "workbench"
  - "instances"
  - "jupyter"
  - "sudoers"
  - "permission"
  - "handling"
---

# Vertex AI Workbench instances Jupyter-to-google-sudoers permission handling

Product: Vertex AI Workbench
Coverage: MEDIUM

## Step 02 Summary

Fixes a permissions conflict between the Jupyter user and google-sudoers for Vertex AI Workbench instances.

## Extended Definition

Fixes a permissions conflict between the Jupyter user and google-sudoers for Vertex AI Workbench instances.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/iam](https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/iam)
- [https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/manage-access-jupyterlab](https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/manage-access-jupyterlab)
- [https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/manage-access-jupyterlab](https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/manage-access-jupyterlab)

## Supporting Pages

### Vertex AI Workbench instances access control \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/iam](https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/iam)
- Source ID: `site-docs-reference-2`
- Final score: 117
- Re-rank relevance: N/A

Evidence snippets:
- Vertex AI Workbench uses IAM to manage access to instances and an access mode to manage access to each instance's JupyterLab interface.
- For example, you can grant users roles/notebooks.viewer permissions at the project level so that they can view all Vertex AI Workbench resources in the project, and then you can grant each user roles/notebooks.admin permissions on a specific Vertex AI Workbench instance so that they have all of the admin abilities to administer that instance.
- Types of IAM roles There are different types of IAM roles that can be used in Vertex AI Workbench: Predefined roles let you grant a set of related permissions to your Vertex AI Workbench resources at the project level.
- Control access to an instance's JupyterLab interface with the access mode You control access to a Vertex AI Workbench instance's JupyterLab interface through the instance's access mode.

### "Manage access to a Vertex AI Workbench managed notebooks instance's JupyterLab\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/manage-access-jupyterlab](https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/manage-access-jupyterlab)
- Source ID: `site-docs-reference-2`
- Final score: 109
- Re-rank relevance: N/A

Evidence snippets:
- To continue using Vertex AI Workbench, we recommend that you migrate your managed notebooks instances to Vertex AI Workbench instances .
- Manage access to a managed notebooks instance's JupyterLab interface Vertex AI Workbench managed notebooks is deprecated .
- This page describes how to grant access to the JupyterLab interface of a Vertex AI Workbench managed notebooks instance.
- The following are examples of single user access metadata entries: proxy-mode=mail proxy-user-mail=user@example.com When you select the Service account access mode, Vertex AI Workbench stores a proxy-mode=service account metadata entry.

### "Manage access to a Vertex AI Workbench instance's JupyterLab interface \_\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/manage-access-jupyterlab](https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/manage-access-jupyterlab)
- Source ID: `site-docs-reference-2`
- Final score: 103
- Re-rank relevance: N/A

Evidence snippets:
- JupyterLab access modes Vertex AI Workbench instances support the following access modes: Single user only : The Single user only access mode grants access only to the user that you specify.
- Manage access to an instance's JupyterLab interface This page describes how to grant access to the JupyterLab interface of a Vertex AI Workbench instance.
- Access limitations Granting a principal access to a Vertex AI Workbench instance's JupyterLab interface doesn't grant access to the instance itself.
- You control access to a Vertex AI Workbench instance's JupyterLab interface through the instance's access mode.

