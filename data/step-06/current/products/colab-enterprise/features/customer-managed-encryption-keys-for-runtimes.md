---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:52.778Z"
product_name: "Colab Enterprise"
product_slug: "colab-enterprise"
feature_name: "Customer-managed encryption keys for runtimes"
feature_slug: "customer-managed-encryption-keys-for-runtimes"
latest_feature_date: "2024-06-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/colab/docs/cmek"
  - "https://docs.cloud.google.com/colab/docs/introduction"
  - "https://docs.cloud.google.com/colab/docs/default-runtimes-with-gpus"
  - "https://docs.cloud.google.com/colab/docs/runtimes"
keywords:
  - "customer"
  - "managed"
  - "encryption"
  - "keys"
  - "for"
  - "runtimes"
  - "can"
  - "be"
---

# Customer-managed encryption keys for runtimes

Product: Colab Enterprise
Coverage: MEDIUM

## Step 02 Summary

Customer-managed encryption keys can be used to protect Colab Enterprise runtimes.

## Extended Definition

Customer-managed encryption keys can be used to protect Colab Enterprise runtimes.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/colab/docs/cmek](https://docs.cloud.google.com/colab/docs/cmek)
- [https://docs.cloud.google.com/colab/docs/introduction](https://docs.cloud.google.com/colab/docs/introduction)
- [https://docs.cloud.google.com/colab/docs/default-runtimes-with-gpus](https://docs.cloud.google.com/colab/docs/default-runtimes-with-gpus)
- [https://docs.cloud.google.com/colab/docs/runtimes](https://docs.cloud.google.com/colab/docs/runtimes)

## Supporting Pages

### "Use customer-managed encryption keys (CMEK) \_|\_ Colab Enterprise \_|\_\

- URL: [https://docs.cloud.google.com/colab/docs/cmek](https://docs.cloud.google.com/colab/docs/cmek)
- Source ID: `site-iam-reference`
- Final score: 290
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you want to control your encryption keys, then you can use customer-managed encryption keys (CMEKs) in Cloud KMS with CMEK-integrated services including Colab Enterprise.
- For more information about your encryption options, see Customer-managed encryption keys (CMEK) .
- Before you begin This guide assumes that you use two separate Google Cloud projects to configure CMEK for Colab Enterprise runtimes: A project for managing your encryption key (referred to as the "Cloud KMS project").
- Because the repository is hidden, you can't modify its encryption settings as you would with other Dataform repositories.

### Introduction to Colab Enterprise \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/colab/docs/introduction](https://docs.cloud.google.com/colab/docs/introduction)
- Source ID: `site-api-reference`
- Final score: 212
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you have specific compliance or regulatory requirements related to the keys that protect your data, you can use customer-managed encryption keys (CMEK) with your Colab Enterprise runtimes and notebooks.
- For more information, see Use customer-managed encryption keys (CMEK) .
- Use with customer-managed encryption keys (CMEK) By default, Google Cloud automatically encrypts data when it is at rest using encryption keys managed by Google.
- If you want to, you can configure runtimes for specific needs, but Colab Enterprise starts them for you and shuts them down when you no longer need them.

### "Enable default runtimes with GPUs \_|\_ Colab Enterprise \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/colab/docs/default-runtimes-with-gpus](https://docs.cloud.google.com/colab/docs/default-runtimes-with-gpus)
- Source ID: `site-iam-reference`
- Final score: 143
- Re-rank relevance: N/A

Evidence snippets:
- Enable the APIs Required roles To ensure that your user account has the necessary permissions to enable default runtimes with GPUs in Colab Enterprise, ask your administrator to grant the Colab Enterprise Admin ( roles/aiplatform.colabEnterpriseAdmin ) IAM role to your user account on the project.
- After the new default runtime template with GPUs is created, any user with the aiplatform.notebookRuntimes.assign permission on the project and the aiplatform.notebookRuntimeTemplates.apply permission on the runtime template can create and use a default runtime with GPUs.
- Users who are granted the dataform.repositories.list permission or the Code Creator ( roles/dataform.codeCreator ) role in a project can list the names of code assets in that project by using the Dataform API or the Dataform command-line interface (CLI).
- Overview To enable users to switch to a default runtime with GPUs, an administrator ( roles/aiplatform.colabEnterpriseAdmin ) or a user account with the aiplatform.notebookRuntimeTemplates.create permission must first create a default runtime with GPUs.

### "Runtimes and runtime templates \_|\_ Colab Enterprise \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/colab/docs/runtimes](https://docs.cloud.google.com/colab/docs/runtimes)
- Source ID: `site-docs-root`
- Final score: 134
- Re-rank relevance: N/A

Evidence snippets:
- Python version End of patch and support date End of availability date Python 3.12 To be determined To be determined Python 3.11 To be determined To be determined Python 3.10 February 23, 2026 August 17, 2026 Understand end of support dates Support for a Python version ends according to the following dates: End of patch and support date : After this date, the following changes take place: You can't create runtime templates that use this Python version.
- Runtimes can be shared by notebooks You can connect more than one notebook to the same runtime but this isn't recommended.
- Runtimes and runtime templates This page describes runtimes and runtime templates for Colab Enterprise.
- You can change the number of minutes of inactivity before shutdown, or you can disable idle shutdown.

