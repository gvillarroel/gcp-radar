---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:52.779Z"
product_name: "Colab Enterprise"
product_slug: "colab-enterprise"
feature_name: "Notebook sharing and collaboration"
feature_slug: "notebook-sharing-and-collaboration"
latest_feature_date: "2023-10-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/colab/docs/runtimes"
  - "https://docs.cloud.google.com/colab/docs/manage-access-notebook"
  - "https://docs.cloud.google.com/colab/docs/default-runtimes-with-gpus"
  - "https://docs.cloud.google.com/colab/docs/chat"
keywords:
  - "notebook"
  - "sharing"
  - "and"
  - "collaboration"
  - "colab"
  - "enterprise"
  - "supports"
  - "with"
---

# Notebook sharing and collaboration

Product: Colab Enterprise
Coverage: MEDIUM

## Step 02 Summary

Colab Enterprise supports notebook sharing and collaboration with IAM-based access control; Colab Enterprise supports notebook sharing and collaboration with IAM-based access control.

## Extended Definition

Colab Enterprise supports notebook sharing and collaboration with IAM-based access control; Colab Enterprise supports notebook sharing and collaboration with IAM-based access control.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/colab/docs/runtimes](https://docs.cloud.google.com/colab/docs/runtimes)
- [https://docs.cloud.google.com/colab/docs/manage-access-notebook](https://docs.cloud.google.com/colab/docs/manage-access-notebook)
- [https://docs.cloud.google.com/colab/docs/default-runtimes-with-gpus](https://docs.cloud.google.com/colab/docs/default-runtimes-with-gpus)
- [https://docs.cloud.google.com/colab/docs/chat](https://docs.cloud.google.com/colab/docs/chat)

## Supporting Pages

### "Runtimes and runtime templates \_|\_ Colab Enterprise \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/colab/docs/runtimes](https://docs.cloud.google.com/colab/docs/runtimes)
- Source ID: `site-docs-root`
- Final score: 225
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Workflow You can create a Colab Enterprise notebook and run code in it without needing to understand runtimes.
- Save the request body in a file named request.json , and execute the following command: curl -X PATCH \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https:// REGION -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ REGION /notebookRuntimeTemplates/ NOTEBOOK RUNTIME TEMPLATE ID ?updateMask=software config.colab image.release name" PowerShell Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login .
- HTTP method and URL: PATCH https:// REGION -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ REGION /notebookRuntimeTemplates/ NOTEBOOK RUNTIME TEMPLATE ID ?updateMask=software config.colab image.release name Request JSON body: { softwareConfig: { colabImage: { releaseName: " RELEASE NAME " } } } To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- This means that to create a default runtime, if there is no existing default runtime template, users with the Colab Enterprise User role must also have a role that includes the aiplatform.notebookRuntimeTemplates.create permission.

### Manage access to a Colab Enterprise notebook \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/colab/docs/manage-access-notebook](https://docs.cloud.google.com/colab/docs/manage-access-notebook)
- Source ID: `site-iam-reference`
- Final score: 223
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- When you turn off output saving for a selected notebook, Colab Enterprise deletes all output saved in the notebook file and doesn't save the output of subsequent runs.
- Home Documentation AI and ML Colab Enterprise Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- Manage access to a notebook This page describes how you can grant and revoke access to a Colab Enterprise notebook (IPYNB file).
- See the following table: Principal Example user account Single user user@gmail.com Google group admins@googlegroups.com Google Workspace domain example.com Turn off notebook output saving To prevent sharing saved notebook output with other users who have access to the notebook file, you can turn off notebook output saving.

### "Enable default runtimes with GPUs \_|\_ Colab Enterprise \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/colab/docs/default-runtimes-with-gpus](https://docs.cloud.google.com/colab/docs/default-runtimes-with-gpus)
- Source ID: `site-iam-reference`
- Final score: 214
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Overview To enable users to switch to a default runtime with GPUs, an administrator ( roles/aiplatform.colabEnterpriseAdmin ) or a user account with the aiplatform.notebookRuntimeTemplates.create permission must first create a default runtime with GPUs.
- Accelerator availability Colab Enterprise supports default runtimes with the following accelerator types: L4 T4 To learn about the regional availability of these accelerators, see Using accelerators .
- After Colab Enterprise connects to the default runtime, in the top right corner of your notebook, click the button to switch to a default runtime with GPUs.
- Home Documentation AI and ML Colab Enterprise Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.

### "Chat about your notebook with Gemini \_|\_ Colab Enterprise \_|\_ Google\

- URL: [https://docs.cloud.google.com/colab/docs/chat](https://docs.cloud.google.com/colab/docs/chat)
- Source ID: `site-iam-reference`
- Final score: 208
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation AI and ML Colab Enterprise Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- Use chat To chat about your notebook with Gemini, do the following: In the Google Cloud console, go to the Colab Enterprise My notebooks page.
- This document is intended for data analysts, data scientists, and data developers who work with Colab Enterprise.
- Enable the APIs Required roles To get the permissions that you need to use Gemini in Colab Enterprise, ask your administrator to grant you the following IAM roles on the project: Colab Enterprise User ( roles/aiplatform.colabEnterpriseUser ) Gemini for Google Cloud User ( roles/cloudaicompanion.user ) For more information about granting roles, see Manage access to projects, folders, and organizations .

