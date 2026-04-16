---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:52.769Z"
product_name: "Colab Enterprise"
product_slug: "colab-enterprise"
feature_name: "Visualization cells"
feature_slug: "visualization-cells"
latest_feature_date: "2025-10-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/colab/docs/use-code-completion"
  - "https://docs.cloud.google.com/colab/docs/experiments"
  - "https://docs.cloud.google.com/colab/docs/create-console-quickstart"
  - "https://docs.cloud.google.com/colab/docs/create-runtime"
keywords:
  - "visualization"
  - "cells"
  - "let"
  - "you"
  - "create"
  - "interactive"
  - "and"
  - "editable"
---

# Visualization cells

Product: Colab Enterprise
Coverage: MEDIUM

## Step 02 Summary

Visualization cells let you create interactive and editable charts directly in a Colab Enterprise notebook.

## Extended Definition

Visualization cells let you create interactive and editable charts directly in a Colab Enterprise notebook.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/colab/docs/use-code-completion](https://docs.cloud.google.com/colab/docs/use-code-completion)
- [https://docs.cloud.google.com/colab/docs/experiments](https://docs.cloud.google.com/colab/docs/experiments)
- [https://docs.cloud.google.com/colab/docs/create-console-quickstart](https://docs.cloud.google.com/colab/docs/create-console-quickstart)
- [https://docs.cloud.google.com/colab/docs/create-runtime](https://docs.cloud.google.com/colab/docs/create-runtime)

## Supporting Pages

### "Use code completion and code generation \_|\_ Colab Enterprise \_|\_ Google\

- URL: [https://docs.cloud.google.com/colab/docs/use-code-completion](https://docs.cloud.google.com/colab/docs/use-code-completion)
- Source ID: `site-docs-root`
- Final score: 141
- Re-rank relevance: N/A

Evidence snippets:
- Use code completion and code generation This document describes how you can use Gemini in Colab Enterprise, which is a product in the Gemini for Google Cloud portfolio, to help you write and generate code in a Colab Enterprise notebook.
- For more ways to write and edit code with Gemini assistance, see the following: Chat about your notebook with Gemini Explain code cells Explain and fix errors Use the Data Science Agent Learn how Gemini for Google Cloud uses your data .
- For example, if you enter import p , Colab Enterprise might suggest a code completion that imports pandas as pd followed by a line that reads a CSV file and stores the contents in a pandas dataframe.
- Enable the APIs Required roles To get the permissions that you need to use Gemini in Colab Enterprise, ask your administrator to grant you the following IAM roles on the project: Colab Enterprise User ( roles/aiplatform.colabEnterpriseUser ) Gemini for Google Cloud User ( roles/cloudaicompanion.user ) For more information about granting roles, see Manage access to projects, folders, and organizations .

### Create an experiment \_|\_ Colab Enterprise \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/colab/docs/experiments](https://docs.cloud.google.com/colab/docs/experiments)
- Source ID: `site-iam-reference`
- Final score: 137
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you need to create your Cloud Storage bucket, find and uncomment the following line of code: ! gcloud storage buckets create {BUCKET URI} --location={REGION} --project={PROJECT ID} Run the code cells that the side panel added to your notebook.
- You can create, manage, and delete runs by using Vertex AI Experiments in the Google Cloud console or through the Vertex AI API.
- Vertex AI Experiments Vertex AI Experiments helps you track and analyze different model architectures, hyperparameters, and training environments by letting you track the steps, inputs, and outputs of an experiment run.
- Create and view an experiment You can create and view the results of an experiment by using the side panel in Colab Enterprise.

### "Quickstart: Create a Colab Enterprise notebook by using the Google Cloud\

- URL: [https://docs.cloud.google.com/colab/docs/create-console-quickstart](https://docs.cloud.google.com/colab/docs/create-console-quickstart)
- Source ID: `site-docs-root`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- Enable the APIs Required roles To get the permissions that you need to create a Colab Enterprise notebook and run the notebook's code on a runtime, ask your administrator to grant you the Colab Enterprise User ( roles/aiplatform.colabEnterpriseUser ) IAM role on the project.
- Clean up To avoid incurring charges to your Google Cloud account for the resources used in this tutorial, either delete the project that contains the resources, or keep the project and delete the individual resources.
- When you finish the tasks that are described in this document, you can avoid continued billing by deleting the resources that you created.
- Select See, edit, configure, and delete your Google Cloud data... to grant Colab Enterprise access to your user credentials.

### Create a runtime in Colab Enterprise \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/colab/docs/create-runtime](https://docs.cloud.google.com/colab/docs/create-runtime)
- Source ID: `site-iam-reference`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- Execute the following command: Linux, macOS, or Cloud Shell Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud colab runtimes create --display-name = " DISPLAY NAME " \ --runtime-template = RUNTIME TEMPLATE ID \ --project = PROJECT ID \ --region = REGION Windows (PowerShell) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud colab runtimes create --display-name = " DISPLAY NAME " --runtime-template = RUNTIME TEMPLATE ID --project = PROJECT ID ` --region = REGION Windows (cmd.exe) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud colab runtimes create --display-name = " DISPLAY NAME " ^ --runtime-template = RUNTIME TEMPLATE ID ^ --project = PROJECT ID ^ --region = REGION By default, when you create a runtime, you automatically have the required permissions to start and delete that runtime.
- By default, when you create a runtime, you automatically have the required permissions to start and delete that runtime. gcloud Before using any of the command data below, make the following replacements: DISPLAY NAME : the display name for your runtime.
- Create a runtime This page shows you how to create, start, and delete a runtime in Colab Enterprise.
- The following sample uses the google colab runtime Terraform resource to create a Colab Enterprise runtime. resource "google colab runtime template" "my template" { name = "{{index $.Vars "runtime name"}}" display name = "Runtime template full" location = "us-central1" description = "Full runtime template" machine spec { machine type = "n1-standard-2" accelerator type = "NVIDIA TESLA T4" accelerator count = "1" } data persistent disk spec { disk type = "pd-standard" disk size gb = 200 } network spec { enable internet access = true } labels = { k = "val" } idle shutdown config { idle timeout = "3600s" } euc config { euc disabled = true } shielded vm config { enable secure boot = true } network tags = [ "abc", "def" ] encryption spec { kms key name = "{{index $.Vars "key name"}}" } } resource "google colab runtime" "{{$.PrimaryResourceId}}" { name = "{{index $.Vars "runtime name"}}" location = "us-central1" notebook runtime template ref { notebook runtime template = google colab runtime template.my template.id } display name = "Runtime full" runtime user = "gterraformtestuser@gmail.com" description = "Full runtime" desired state = "ACTIVE" auto upgrade = true depends on = [ google colab runtime template.my template ] } Troubleshoot This section shows you how to resolve issues with creating runtimes in Colab Enterprise.

