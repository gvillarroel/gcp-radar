---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T17:42:01.011Z"
product_name: "Vertex AI Workbench"
product_slug: "vertex-ai-workbench"
feature_name: "Google Cloud CLI preset properties for Vertex AI Workbench"
feature_slug: "google-cloud-cli-preset-properties-for-vertex-ai-workbench"
latest_feature_date: "2025-10-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-custom"
  - "https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-automl"
  - "https://docs.cloud.google.com/vertex-ai/docs/tutorials/tabular-automl/setup"
keywords:
  - "cli"
  - "preset"
  - "properties"
  - "vertex"
  - "ai"
  - "workbench"
  - "prepopulates"
  - "project"
---

# Google Cloud CLI preset properties for Vertex AI Workbench

Product: Vertex AI Workbench
Coverage: MEDIUM

## Step 02 Summary

Prepopulates project and region properties when using Google Cloud CLI commands with Vertex AI Workbench instances.

## Extended Definition

Prepopulates project and region properties when using Google Cloud CLI commands with Vertex AI Workbench instances.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-custom](https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-custom)
- [https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-automl](https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-automl)
- [https://docs.cloud.google.com/vertex-ai/docs/tutorials/tabular-automl/setup](https://docs.cloud.google.com/vertex-ai/docs/tutorials/tabular-automl/setup)

## Supporting Pages

### "Hello custom training: Set up your project and environment \_|\_ Vertex\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-custom](https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-custom)
- Source ID: `site-docs-root`
- Final score: 58
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation AI and ML Vertex AI Send feedback Hello custom training: Set up your project and environment Stay organized with collections Save and categorize content based on your preferences.
- This page walks through setting up your Google Cloud project to use Vertex AI and downloading some TensorFlow code for training.
- Download sample code Download sample code to use for the rest of the tutorial. gcloud storage cp gs://cloud-samples-data/ai-platform/hello-custom/hello-custom-sample-v1.tar.gz - tar -xzv To optionally view the sample code files, run the following command: ls -lpR hello-custom-sample The hello-custom-sample directory has four items: trainer/ : A directory of TensorFlow Keras code for training the flower classification model. setup.py : A configuration file for packaging the trainer/ directory into a Python source distribution that Vertex AI can use. function/ : A directory of Python code for a Cloud Run function that can receive and preprocess prediction requests from a web browser, send them to Vertex AI, process the prediction responses, and send them back to the browser. webapp/ : A directory with code and markup for a web app that gets flower classification predictions from Vertex AI.
- If Cloud Shell does not display ( PROJECT ID )$ in its prompt (where PROJECT ID is replaced by your Google Cloud project ID), then run the following command to configure Cloud Shell to use your project: gcloud config set project PROJECT ID Create a Cloud Storage bucket Create a regional Cloud Storage bucket in the us-central1 region to use for the rest of this tutorial.

### "Hello image data: Set up your project and environment \_|\_ Vertex AI \_\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-automl](https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-automl)
- Source ID: `site-docs-root`
- Final score: 58
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation AI and ML Vertex AI Send feedback Hello image data: Set up your project and environment Stay organized with collections Save and categorize content based on your preferences.
- You'll set up your Google Cloud project to use Vertex AI.
- Enable the IAM, Compute Engine, Notebooks, Cloud Storage, and Vertex AI APIs: Roles required to enable APIs To enable APIs, you need the Service Usage Admin IAM role ( roles/serviceusage.serviceUsageAdmin ), which contains the serviceusage.services.enable permission.
- Run the following command once for each of the following IAM roles: roles/aiplatform.user, roles/storage.admin gcloud projects add-iam-policy-binding PROJECT ID --member = "user: USER IDENTIFIER " --role = ROLE Replace the following: PROJECT ID : Your project ID.

### "Hello tabular data: Set up your project and environment \_|\_ Vertex AI\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/tutorials/tabular-automl/setup](https://docs.cloud.google.com/vertex-ai/docs/tutorials/tabular-automl/setup)
- Source ID: `site-docs-root`
- Final score: 58
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation AI and ML Vertex AI Send feedback Hello tabular data: Set up your project and environment Stay organized with collections Save and categorize content based on your preferences.
- For this part of the tutorial, you set up your Google Cloud project to use Vertex AI and a Cloud Storage bucket that contains the documents for training your AutoML model.
- Enable the IAM, Compute Engine, Notebooks, Cloud Storage, and Vertex AI APIs: Roles required to enable APIs To enable APIs, you need the Service Usage Admin IAM role ( roles/serviceusage.serviceUsageAdmin ), which contains the serviceusage.services.enable permission.
- Run the following command once for each of the following IAM roles: roles/aiplatform.user, roles/storage.admin gcloud projects add-iam-policy-binding PROJECT ID --member = "user: USER IDENTIFIER " --role = ROLE Replace the following: PROJECT ID : Your project ID.

