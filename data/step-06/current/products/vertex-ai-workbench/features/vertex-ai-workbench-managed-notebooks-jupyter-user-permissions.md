---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T17:42:01.095Z"
product_name: "Vertex AI Workbench"
product_slug: "vertex-ai-workbench"
feature_name: "Vertex AI Workbench managed notebooks Jupyter user permissions"
feature_slug: "vertex-ai-workbench-managed-notebooks-jupyter-user-permissions"
latest_feature_date: "2024-07-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/workbench/user-managed/iam"
  - "https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/access-control"
  - "https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/manage-access-jupyterlab"
keywords:
  - "vertex"
  - "ai"
  - "workbench"
  - "managed"
  - "notebooks"
  - "jupyter"
  - "user"
  - "permissions"
---

# Vertex AI Workbench managed notebooks Jupyter user permissions

Product: Vertex AI Workbench
Coverage: MEDIUM

## Step 02 Summary

Resolved permission conflicts between the Jupyter user and the google-sudoers account in managed notebooks.

## Extended Definition

Resolved permission conflicts between the Jupyter user and the google-sudoers account in managed notebooks.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/workbench/user-managed/iam](https://docs.cloud.google.com/vertex-ai/docs/workbench/user-managed/iam)
- [https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/access-control](https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/access-control)
- [https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/manage-access-jupyterlab](https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/manage-access-jupyterlab)

## Supporting Pages

### "Vertex AI Workbench user-managed notebooks access control \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/workbench/user-managed/iam](https://docs.cloud.google.com/vertex-ai/docs/workbench/user-managed/iam)
- Source ID: `site-docs-reference-2`
- Final score: 221
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, you can grant users roles/notebooks.viewer permissions at the project level so that they can view all Vertex AI Workbench resources in the project, and then you can grant each user roles/notebooks.admin permissions on a specific user-managed notebooks instance so that they have all of the admin abilities to administer that instance.
- Vertex AI Workbench uses IAM to manage access to user-managed notebooks instances and an access mode to manage access to each instance's JupyterLab interface.
- This page describes how to use Identity and Access Management (IAM) and an access mode to manage access to Vertex AI Workbench user-managed notebooks resources.
- To continue using Vertex AI Workbench, we recommend that you migrate your user-managed notebooks instances to Vertex AI Workbench instances .

### "Manage access to a Vertex AI Workbench managed notebooks instance's JupyterLab\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/manage-access-jupyterlab](https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/manage-access-jupyterlab)
- Source ID: `site-docs-reference-2`
- Final score: 196
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Manage access to a managed notebooks instance's JupyterLab interface Vertex AI Workbench managed notebooks is deprecated .
- This page describes how to grant access to the JupyterLab interface of a Vertex AI Workbench managed notebooks instance.
- JupyterLab access modes Managed notebooks instances support the following access modes: Single user only : The Single user only access mode grants access only to the user that you specify.
- To continue using Vertex AI Workbench, we recommend that you migrate your managed notebooks instances to Vertex AI Workbench instances .

### "Vertex AI Workbench managed notebooks access control \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/access-control](https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/access-control)
- Source ID: `site-docs-reference-2`
- Final score: 193
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, you can grant users roles/notebooks.viewer permissions at the project level so that they can view all Vertex AI Workbench resources in the project, and then you can grant each user roles/notebooks.admin permissions on a specific managed notebooks instance so that they have all of the admin abilities to administer that instance.
- Vertex AI Workbench uses IAM to manage access to managed notebooks instances and an access mode to manage access to each instance's JupyterLab interface.
- This page describes how to use Identity and Access Management (IAM) and an access mode to manage access to Vertex AI Workbench managed notebooks resources.
- To continue using Vertex AI Workbench, we recommend that you migrate your managed notebooks instances to Vertex AI Workbench instances .

