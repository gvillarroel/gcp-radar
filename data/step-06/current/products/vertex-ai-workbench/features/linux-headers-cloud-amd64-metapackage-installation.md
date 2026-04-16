---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T17:42:01.109Z"
product_name: "Vertex AI Workbench"
product_slug: "vertex-ai-workbench"
feature_name: "linux-headers-cloud-amd64 metapackage installation"
feature_slug: "linux-headers-cloud-amd64-metapackage-installation"
latest_feature_date: "2024-05-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/workbench/user-managed/iam"
  - "https://docs.cloud.google.com/vertex-ai/docs/authentication"
  - "https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/manage-access-jupyterlab"
keywords:
  - "linux"
  - "headers"
  - "amd64"
  - "metapackage"
  - "installation"
  - "vertex"
  - "ai"
  - "workbench"
---

# linux-headers-cloud-amd64 metapackage installation

Product: Vertex AI Workbench
Coverage: MEDIUM

## Step 02 Summary

Vertex AI Workbench user-managed notebooks install the linux-headers-cloud-amd64 metapackage to enable faster Nvidia driver recompilation after kernel upgrades.

## Extended Definition

Vertex AI Workbench user-managed notebooks install the linux-headers-cloud-amd64 metapackage to enable faster Nvidia driver recompilation after kernel upgrades.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/workbench/user-managed/iam](https://docs.cloud.google.com/vertex-ai/docs/workbench/user-managed/iam)
- [https://docs.cloud.google.com/vertex-ai/docs/authentication](https://docs.cloud.google.com/vertex-ai/docs/authentication)
- [https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/manage-access-jupyterlab](https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/manage-access-jupyterlab)

## Supporting Pages

### "Vertex AI Workbench user-managed notebooks access control \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/workbench/user-managed/iam](https://docs.cloud.google.com/vertex-ai/docs/workbench/user-managed/iam)
- Source ID: `site-docs-reference-2`
- Final score: 78
- Re-rank relevance: N/A

Evidence snippets:
- For example, you can grant users roles/notebooks.viewer permissions at the project level so that they can view all Vertex AI Workbench resources in the project, and then you can grant each user roles/notebooks.admin permissions on a specific user-managed notebooks instance so that they have all of the admin abilities to administer that instance.
- Types of IAM roles There are different types of IAM roles that can be used in Vertex AI Workbench: Predefined roles let you grant a set of related permissions to your Vertex AI Workbench resources at the project level.
- Basic roles (Owner, Editor, and Viewer) provide access control to your Vertex AI Workbench resources at the project level, and are common to all Google Cloud services.
- This page describes how to use Identity and Access Management (IAM) and an access mode to manage access to Vertex AI Workbench user-managed notebooks resources.

### Authenticate to Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/authentication](https://docs.cloud.google.com/vertex-ai/docs/authentication)
- Source ID: `site-api-reference`
- Final score: 63
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Execute the following command: curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://iam.googleapis.com/v1/projects/ PROJECT ID /serviceAccounts" PowerShell (Windows) Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers ` -Uri "https://iam.googleapis.com/v1/projects/ PROJECT ID /serviceAccounts" Select-Object -Expand Content For more information about authenticating using REST and gRPC, see Authenticate for using REST .
- If you're trying to authenticate to Vertex AI Workbench, see Authenticate to Vertex AI Workbench .
- What's next Learn how to authenticate to Vertex AI Workbench.
- After installation, initialize the Google Cloud CLI by running the following command: gcloud init If you're using an external identity provider (IdP), you must first sign in to the gcloud CLI with your federated identity .

### "Manage access to a Vertex AI Workbench managed notebooks instance's JupyterLab\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/manage-access-jupyterlab](https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/manage-access-jupyterlab)
- Source ID: `site-docs-reference-2`
- Final score: 60
- Re-rank relevance: N/A

Evidence snippets:
- The following are examples of single user access metadata entries: proxy-mode=mail proxy-user-mail=user@example.com When you select the Service account access mode, Vertex AI Workbench stores a proxy-mode=service account metadata entry.
- Home Documentation AI and ML Vertex AI Vertex AI Workbench Send feedback Stay organized with collections Save and categorize content based on your preferences.
- To continue using Vertex AI Workbench, we recommend that you migrate your managed notebooks instances to Vertex AI Workbench instances .
- Manage access to a managed notebooks instance's JupyterLab interface Vertex AI Workbench managed notebooks is deprecated .

