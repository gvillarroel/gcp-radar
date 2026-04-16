---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:52.771Z"
product_name: "Colab Enterprise"
product_slug: "colab-enterprise"
feature_name: "Python 3.11 support"
feature_slug: "python-3-11-support"
latest_feature_date: "2025-05-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/colab/docs/runtimes"
  - "https://docs.cloud.google.com/colab/docs/default-runtimes-with-gpus"
  - "https://docs.cloud.google.com/colab/docs/cmek"
  - "https://docs.cloud.google.com/colab/docs/idle-shutdown"
keywords:
  - "python"
  - "11"
  - "colab"
  - "enterprise"
  - "supports"
  - "for"
  - "runtimes"
  - "and"
---

# Python 3.11 support

Product: Colab Enterprise
Coverage: MEDIUM

## Step 02 Summary

Colab Enterprise supports Python 3.11 for runtimes and runtime templates.

## Extended Definition

Colab Enterprise supports Python 3.11 for runtimes and runtime templates.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/colab/docs/runtimes](https://docs.cloud.google.com/colab/docs/runtimes)
- [https://docs.cloud.google.com/colab/docs/default-runtimes-with-gpus](https://docs.cloud.google.com/colab/docs/default-runtimes-with-gpus)
- [https://docs.cloud.google.com/colab/docs/cmek](https://docs.cloud.google.com/colab/docs/cmek)
- [https://docs.cloud.google.com/colab/docs/idle-shutdown](https://docs.cloud.google.com/colab/docs/idle-shutdown)

## Supporting Pages

### "Runtimes and runtime templates \_|\_ Colab Enterprise \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/colab/docs/runtimes](https://docs.cloud.google.com/colab/docs/runtimes)
- Source ID: `site-docs-root`
- Final score: 275
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Runtimes and runtime templates This page describes runtimes and runtime templates for Colab Enterprise.
- Supported Python versions Colab Enterprise supports Python versions for specific periods of time.
- Python version End of patch and support date End of availability date Python 3.12 To be determined To be determined Python 3.11 To be determined To be determined Python 3.10 February 23, 2026 August 17, 2026 Understand end of support dates Support for a Python version ends according to the following dates: End of patch and support date : After this date, the following changes take place: You can't create runtime templates that use this Python version.
- If you use default runtimes without accelerators, Colab Enterprise creates one default runtime without accelerators and its corresponding runtime template, per project, per region.

### "Enable default runtimes with GPUs \_|\_ Colab Enterprise \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/colab/docs/default-runtimes-with-gpus](https://docs.cloud.google.com/colab/docs/default-runtimes-with-gpus)
- Source ID: `site-iam-reference`
- Final score: 213
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Enable the APIs Required roles To ensure that your user account has the necessary permissions to enable default runtimes with GPUs in Colab Enterprise, ask your administrator to grant the Colab Enterprise Admin ( roles/aiplatform.colabEnterpriseAdmin ) IAM role to your user account on the project.
- Accelerator availability Colab Enterprise supports default runtimes with the following accelerator types: L4 T4 To learn about the regional availability of these accelerators, see Using accelerators .
- Enable GPUs for default runtimes To enable GPUs for default runtimes, do the following: In the Google Cloud console, go to the Colab Enterprise My notebooks page.
- This document is intended for Colab Enterprise administrators who want to enable default runtimes with GPUs for other users in their organization.

### "Use customer-managed encryption keys (CMEK) \_|\_ Colab Enterprise \_|\_\

- URL: [https://docs.cloud.google.com/colab/docs/cmek](https://docs.cloud.google.com/colab/docs/cmek)
- Source ID: `site-iam-reference`
- Final score: 199
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Configure CMEK for your runtimes The following sections describe how to create a key ring and key in Cloud Key Management Service, grant Colab Enterprise encrypter and decrypter permissions for your key, and create a runtime template configures to use CMEK.
- CMEK for Colab Enterprise You can use CMEK to encrypt Colab Enterprise runtimes and notebook files (notebooks).
- Before you begin This guide assumes that you use two separate Google Cloud projects to configure CMEK for Colab Enterprise runtimes: A project for managing your encryption key (referred to as the "Cloud KMS project").
- Supported keys Colab Enterprise supports the following types of CMEK keys: Cloud KMS software keys Cloud Hardware Security Module (HSM) keys Key availability varies by key type and region.

### Idle shutdown \_|\_ Colab Enterprise \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/colab/docs/idle-shutdown](https://docs.cloud.google.com/colab/docs/idle-shutdown)
- Source ID: `site-iam-reference`
- Final score: 179
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Overview To help manage costs, Colab Enterprise runtimes shut down after being idle for a specific time period by default.
- Execute the following command: Linux, macOS, or Cloud Shell Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud colab runtime-templates create --display-name = DISPLAY NAME \ --idle-shutdown-timeout = INACTIVITY DURATION \ --project = PROJECT ID \ --region = REGION Windows (PowerShell) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud colab runtime-templates create --display-name = DISPLAY NAME --idle-shutdown-timeout = INACTIVITY DURATION --project = PROJECT ID ` --region = REGION Windows (cmd.exe) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud colab runtime-templates create --display-name = DISPLAY NAME ^ --idle-shutdown-timeout = INACTIVITY DURATION ^ --project = PROJECT ID ^ --region = REGION For more information about the command for creating a runtime template from the command line, see the gcloud CLI documentation .
- Enable the APIs Required roles To get the permissions that you need to create a runtime in Colab Enterprise, ask your administrator to grant you the Colab Enterprise Admin ( roles/aiplatform.colabEnterpriseAdmin ) IAM role on the project.
- Home Documentation AI and ML Colab Enterprise Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.

