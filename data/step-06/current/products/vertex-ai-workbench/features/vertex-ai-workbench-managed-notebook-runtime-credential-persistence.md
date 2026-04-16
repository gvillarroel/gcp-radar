---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T17:42:01.298Z"
product_name: "Vertex AI Workbench"
product_slug: "vertex-ai-workbench"
feature_name: "Vertex AI Workbench managed notebook runtime credential persistence"
feature_slug: "vertex-ai-workbench-managed-notebook-runtime-credential-persistence"
latest_feature_date: "2023-03-27"
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
  - "notebook"
  - "runtime"
  - "credential"
  - "persistence"
---

# Vertex AI Workbench managed notebook runtime credential persistence

Product: Vertex AI Workbench
Coverage: MEDIUM

## Step 02 Summary

Fixed credential handling so end-user credentials remain preserved after managed notebook runtime shutdown.

## Extended Definition

Fixed credential handling so end-user credentials remain preserved after managed notebook runtime shutdown.

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
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- For example, you can grant users roles/notebooks.viewer permissions at the project level so that they can view all Vertex AI Workbench resources in the project, and then you can grant each user roles/notebooks.admin permissions on a specific user-managed notebooks instance so that they have all of the admin abilities to administer that instance.
- This page describes how to use Identity and Access Management (IAM) and an access mode to manage access to Vertex AI Workbench user-managed notebooks resources.
- Vertex AI Workbench uses IAM to manage access to user-managed notebooks instances and an access mode to manage access to each instance's JupyterLab interface.
- To continue using Vertex AI Workbench, we recommend that you migrate your user-managed notebooks instances to Vertex AI Workbench instances .

### "Vertex AI Workbench managed notebooks access control \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/access-control](https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/access-control)
- Source ID: `site-docs-reference-2`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- For example, you can grant users roles/notebooks.viewer permissions at the project level so that they can view all Vertex AI Workbench resources in the project, and then you can grant each user roles/notebooks.admin permissions on a specific managed notebooks instance so that they have all of the admin abilities to administer that instance.
- This page describes how to use Identity and Access Management (IAM) and an access mode to manage access to Vertex AI Workbench managed notebooks resources.
- Vertex AI Workbench uses IAM to manage access to managed notebooks instances and an access mode to manage access to each instance's JupyterLab interface.
- To continue using Vertex AI Workbench, we recommend that you migrate your managed notebooks instances to Vertex AI Workbench instances .

### "Manage access to a Vertex AI Workbench managed notebooks instance's JupyterLab\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/manage-access-jupyterlab](https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/manage-access-jupyterlab)
- Source ID: `site-docs-reference-2`
- Final score: 115
- Re-rank relevance: N/A

Evidence snippets:
- To continue using Vertex AI Workbench, we recommend that you migrate your managed notebooks instances to Vertex AI Workbench instances .
- Manage access to a managed notebooks instance's JupyterLab interface Vertex AI Workbench managed notebooks is deprecated .
- This page describes how to grant access to the JupyterLab interface of a Vertex AI Workbench managed notebooks instance.
- The following are examples of single user access metadata entries: proxy-mode=mail proxy-user-mail=user@example.com When you select the Service account access mode, Vertex AI Workbench stores a proxy-mode=service account metadata entry.

