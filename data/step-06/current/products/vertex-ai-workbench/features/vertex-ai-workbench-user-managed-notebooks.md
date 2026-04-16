---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T17:42:01.030Z"
product_name: "Vertex AI Workbench"
product_slug: "vertex-ai-workbench"
feature_name: "Vertex AI Workbench user-managed notebooks"
feature_slug: "vertex-ai-workbench-user-managed-notebooks"
latest_feature_date: "2025-03-12"
deprecation_date: "2025-01-30"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/workbench/user-managed/iam"
  - "https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/authentication"
  - "https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/manage-access"
keywords:
  - "vertex"
  - "ai"
  - "workbench"
  - "user"
  - "managed"
  - "notebooks"
  - "m128"
  - "release"
---

# Vertex AI Workbench user-managed notebooks

Product: Vertex AI Workbench
Coverage: MEDIUM

## Step 02 Summary

The M128 release provides miscellaneous package updates for Vertex AI Workbench user-managed notebooks; A security patch in the M125 release fixed adm and docker permission handling for user-managed notebooks when root access is not enabled; deprecated on 2025-01-30.

## Extended Definition

The M128 release provides miscellaneous package updates for Vertex AI Workbench user-managed notebooks; A security patch in the M125 release fixed adm and docker permission handling for user-managed notebooks when root access is not enabled; deprecated on 2025-01-30.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/workbench/user-managed/iam](https://docs.cloud.google.com/vertex-ai/docs/workbench/user-managed/iam)
- [https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/authentication](https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/authentication)
- [https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/manage-access](https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/manage-access)

## Supporting Pages

### "Vertex AI Workbench user-managed notebooks access control \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/workbench/user-managed/iam](https://docs.cloud.google.com/vertex-ai/docs/workbench/user-managed/iam)
- Source ID: `site-docs-reference-2`
- Final score: 269
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, you can grant users roles/notebooks.viewer permissions at the project level so that they can view all Vertex AI Workbench resources in the project, and then you can grant each user roles/notebooks.admin permissions on a specific user-managed notebooks instance so that they have all of the admin abilities to administer that instance.
- This page describes how to use Identity and Access Management (IAM) and an access mode to manage access to Vertex AI Workbench user-managed notebooks resources.
- Vertex AI Workbench uses IAM to manage access to user-managed notebooks instances and an access mode to manage access to each instance's JupyterLab interface.
- To continue using Vertex AI Workbench, we recommend that you migrate your user-managed notebooks instances to Vertex AI Workbench instances .

### Authenticate to Vertex AI Workbench \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/authentication](https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/authentication)
- Source ID: `site-docs-reference-2`
- Final score: 169
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- What's next Learn more about access control for Vertex AI Workbench instances: Vertex AI Workbench instances access control Manage access to a Vertex AI Workbench instance Manage access to JupyterLab in Vertex AI Workbench instances Learn more about access control for Vertex AI Workbench user-managed notebooks instances: User-managed notebooks access control Manage access to a Vertex AI Workbench user-managed notebooks instance Manage access to JupyterLab in user-managed notebooks Learn more about access control for Vertex AI Workbench managed notebooks instances: Managed notebooks access control Manage access to a managed notebooks instance Manage access to JupyterLab in managed notebooks Learn about Google Cloud authentication methods .
- Google Cloud CLI When you use the gcloud CLI to access Vertex AI Workbench, you log in to the gcloud CLI with a user account, which provides the credentials used by the gcloud CLI commands.
- You can access the API in the following ways: Client libraries Google Cloud CLI REST Client libraries The Vertex AI Workbench client libraries provide high-level language support for authenticating to Vertex AI Workbench programmatically.
- Home Documentation AI and ML Vertex AI Vertex AI Workbench Reference Send feedback Authenticate to Vertex AI Workbench Stay organized with collections Save and categorize content based on your preferences.

### "Manage access to a Vertex AI Workbench managed notebooks instance \_|\_\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/manage-access](https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/manage-access)
- Source ID: `site-docs-reference-2`
- Final score: 137
- Re-rank relevance: N/A

Evidence snippets:
- To continue using Vertex AI Workbench, we recommend that you migrate your managed notebooks instances to Vertex AI Workbench instances .
- This guide describes how you can grant access to a specific Vertex AI Workbench managed notebooks instance.
- Manage access to a managed notebooks instance Vertex AI Workbench managed notebooks is deprecated .
- Learn about the IAM roles available to Vertex AI Workbench managed notebooks .

