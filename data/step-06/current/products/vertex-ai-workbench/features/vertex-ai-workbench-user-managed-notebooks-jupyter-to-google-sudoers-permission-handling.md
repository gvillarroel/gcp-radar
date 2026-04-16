---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T17:42:01.101Z"
product_name: "Vertex AI Workbench"
product_slug: "vertex-ai-workbench"
feature_name: "Vertex AI Workbench user-managed notebooks Jupyter-to-google-sudoers permission handling"
feature_slug: "vertex-ai-workbench-user-managed-notebooks-jupyter-to-google-sudoers-permission-handling"
latest_feature_date: "2024-07-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/manage-access-jupyterlab"
  - "https://docs.cloud.google.com/vertex-ai/docs/workbench/user-managed/iam"
  - "https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/manage-access"
keywords:
  - "vertex"
  - "ai"
  - "workbench"
  - "user"
  - "managed"
  - "notebooks"
  - "jupyter"
  - "sudoers"
---

# Vertex AI Workbench user-managed notebooks Jupyter-to-google-sudoers permission handling

Product: Vertex AI Workbench
Coverage: MEDIUM

## Step 02 Summary

Fixes a permissions conflict between the Jupyter user and google-sudoers for Vertex AI Workbench user-managed notebooks.

## Extended Definition

Fixes a permissions conflict between the Jupyter user and google-sudoers for Vertex AI Workbench user-managed notebooks.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/manage-access-jupyterlab](https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/manage-access-jupyterlab)
- [https://docs.cloud.google.com/vertex-ai/docs/workbench/user-managed/iam](https://docs.cloud.google.com/vertex-ai/docs/workbench/user-managed/iam)
- [https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/manage-access](https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/manage-access)

## Supporting Pages

### "Manage access to a Vertex AI Workbench managed notebooks instance's JupyterLab\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/manage-access-jupyterlab](https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/manage-access-jupyterlab)
- Source ID: `site-docs-reference-2`
- Final score: 193
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Manage access to a managed notebooks instance's JupyterLab interface Vertex AI Workbench managed notebooks is deprecated .
- This page describes how to grant access to the JupyterLab interface of a Vertex AI Workbench managed notebooks instance.
- JupyterLab access modes Managed notebooks instances support the following access modes: Single user only : The Single user only access mode grants access only to the user that you specify.
- To continue using Vertex AI Workbench, we recommend that you migrate your managed notebooks instances to Vertex AI Workbench instances .

### "Vertex AI Workbench user-managed notebooks access control \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/workbench/user-managed/iam](https://docs.cloud.google.com/vertex-ai/docs/workbench/user-managed/iam)
- Source ID: `site-docs-reference-2`
- Final score: 185
- Re-rank relevance: N/A

Evidence snippets:
- Vertex AI Workbench uses IAM to manage access to user-managed notebooks instances and an access mode to manage access to each instance's JupyterLab interface.
- For example, you can grant users roles/notebooks.viewer permissions at the project level so that they can view all Vertex AI Workbench resources in the project, and then you can grant each user roles/notebooks.admin permissions on a specific user-managed notebooks instance so that they have all of the admin abilities to administer that instance.
- This page describes how to use Identity and Access Management (IAM) and an access mode to manage access to Vertex AI Workbench user-managed notebooks resources.
- To continue using Vertex AI Workbench, we recommend that you migrate your user-managed notebooks instances to Vertex AI Workbench instances .

### "Manage access to a Vertex AI Workbench managed notebooks instance \_|\_\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/manage-access](https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/manage-access)
- Source ID: `site-docs-reference-2`
- Final score: 159
- Re-rank relevance: N/A

Evidence snippets:
- To continue using Vertex AI Workbench, we recommend that you migrate your managed notebooks instances to Vertex AI Workbench instances .
- This guide describes how you can grant access to a specific Vertex AI Workbench managed notebooks instance.
- Manage access to a managed notebooks instance Vertex AI Workbench managed notebooks is deprecated .
- Learn about the IAM roles available to Vertex AI Workbench managed notebooks .

