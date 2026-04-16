---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T17:42:01.314Z"
product_name: "Vertex AI Workbench"
product_slug: "vertex-ai-workbench"
feature_name: "Vertex AI Workbench user-managed notebook instance creation warning fix"
feature_slug: "vertex-ai-workbench-user-managed-notebook-instance-creation-warning-fix"
latest_feature_date: "2023-01-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/workbench/user-managed/iam"
  - "https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/manage-access-jupyterlab"
  - "https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/manage-access"
keywords:
  - "vertex"
  - "ai"
  - "workbench"
  - "user"
  - "managed"
  - "notebook"
  - "instance"
  - "creation"
---

# Vertex AI Workbench user-managed notebook instance creation warning fix

Product: Vertex AI Workbench
Coverage: MEDIUM

## Step 02 Summary

Vertex AI Workbench fixed a bug that showed a jupyter lab build warning when creating new user-managed notebook instances.

## Extended Definition

Vertex AI Workbench fixed a bug that showed a jupyter lab build warning when creating new user-managed notebook instances.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/workbench/user-managed/iam](https://docs.cloud.google.com/vertex-ai/docs/workbench/user-managed/iam)
- [https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/manage-access-jupyterlab](https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/manage-access-jupyterlab)
- [https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/manage-access](https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/manage-access)

## Supporting Pages

### "Vertex AI Workbench user-managed notebooks access control \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/workbench/user-managed/iam](https://docs.cloud.google.com/vertex-ai/docs/workbench/user-managed/iam)
- Source ID: `site-docs-reference-2`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- For example, you can grant users roles/notebooks.viewer permissions at the project level so that they can view all Vertex AI Workbench resources in the project, and then you can grant each user roles/notebooks.admin permissions on a specific user-managed notebooks instance so that they have all of the admin abilities to administer that instance.
- Vertex AI Workbench uses IAM to manage access to user-managed notebooks instances and an access mode to manage access to each instance's JupyterLab interface.
- To continue using Vertex AI Workbench, we recommend that you migrate your user-managed notebooks instances to Vertex AI Workbench instances .
- This page describes how to use Identity and Access Management (IAM) and an access mode to manage access to Vertex AI Workbench user-managed notebooks resources.

### "Manage access to a Vertex AI Workbench managed notebooks instance's JupyterLab\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/manage-access-jupyterlab](https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/manage-access-jupyterlab)
- Source ID: `site-docs-reference-2`
- Final score: 183
- Re-rank relevance: N/A

Evidence snippets:
- To continue using Vertex AI Workbench, we recommend that you migrate your managed notebooks instances to Vertex AI Workbench instances .
- Manage access to a managed notebooks instance's JupyterLab interface Vertex AI Workbench managed notebooks is deprecated .
- This page describes how to grant access to the JupyterLab interface of a Vertex AI Workbench managed notebooks instance.
- Grant access to multiple users through a service account Create a managed notebooks instance with the following specifications: In the Create instance dialog, in the IAM and security section, select the Service account access mode.

### "Manage access to a Vertex AI Workbench managed notebooks instance \_|\_\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/manage-access](https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/manage-access)
- Source ID: `site-docs-reference-2`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- To continue using Vertex AI Workbench, we recommend that you migrate your managed notebooks instances to Vertex AI Workbench instances .
- This guide describes how you can grant access to a specific Vertex AI Workbench managed notebooks instance.
- Manage access to a managed notebooks instance Vertex AI Workbench managed notebooks is deprecated .
- Before using any of the request data, make the following replacements: INSTANCE NAME : The name of your managed notebooks instance HTTP method and URL: POST https://notebooks.googleapis.com/v1/ INSTANCE NAME :setIamPolicy Request JSON body: { "policy": { "bindings": [ { "role": "roles/notebooks.viewer", "members": [ "user:email@example.com" ] }, { "role": "roles/notebooks.admin", "members": [ "user:eve@example.com" ] } ], "etag": "BwWWja0YfJA=", "version": 3 } } To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

