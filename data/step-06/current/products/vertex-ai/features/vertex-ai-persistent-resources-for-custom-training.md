---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:02:17.113Z"
product_name: "Vertex AI"
product_slug: "vertex-ai"
feature_name: "Vertex AI persistent resources for custom training"
feature_slug: "vertex-ai-persistent-resources-for-custom-training"
latest_feature_date: "2023-08-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks"
  - "https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-custom/training"
  - "https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-custom"
keywords:
  - "vertex"
  - "ai"
  - "persistent"
  - "resources"
  - "custom"
  - "training"
  - "introduced"
  - "providing"
---

# Vertex AI persistent resources for custom training

Product: Vertex AI
Coverage: MEDIUM

## Step 02 Summary

Vertex AI introduced persistent resources for custom training, providing a long-running compute cluster that can be reused for multiple custom training jobs without repeated provisioning.

## Extended Definition

Vertex AI introduced persistent resources for custom training, providing a long-running compute cluster that can be reused for multiple custom training jobs without repeated provisioning.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks](https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks)
- [https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-custom/training](https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-custom/training)
- [https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-custom](https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-custom)

## Supporting Pages

### Custom training notebook tutorials \_|\_ Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks](https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks)
- Source ID: `site-docs-reference-2`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- Execute pipeline using componentlevel settings for machine resources Convert the selfcontained training component into a Vertex AI CustomJob .
- Tutorial steps Installation of required libraries Reading the dataset from a Cloud Storage bucket Performing exploratory analysis on the dataset Preprocessing the dataset Training a random forest model using scikitlearn Saving the model to a Cloud Storage bucket Creating a Vertex AI model resource and deploying to an endpoint Running the WhatIf Tool on test data Undeploying the model and cleaning up the model resources Colab GitHub Vertex AI Workbench Vertex AI Workbench BigQuery ML Churn prediction for game developers using Google Analytics 4 and BigQuery ML .
- Tutorial steps Create utility functions to download data and prepare csv files for creating Vertex AI managed dataset Download Data Prepare CSV Files for creating managed dataset Create custom training Python package Create TensorFlow Serving container Run custom Python package training with managed text dataset Deploy a model and create an endpoint on Vertex AI Predict on the endpoint Create a Batch Prediction job on the model Colab Colab Enterprise GitHub Vertex AI Workbench Tabular Workflow for TabNet Vertex AI Explanations with TabNet models .
- Tutorial steps Create custom Ray on Vertex AI container image Create a Ray cluster on Vertex AI using custom container image Run Spark interactively on the cluster using RayDP Run Spark application on cluster via Ray Job API Read files from Google Cloud Storage in Spark application Pandas UDF in Spark application on Ray on Vertex AI Delete the Ray cluster on Vertex AI Colab Colab Enterprise GitHub Vertex AI Workbench Vertex AI Training Vertex AI Reduction Server PyTorch distributed training with Vertex AI Reduction Server .

### "Hello custom training: Train a custom image classification model \_|\_ Vertex\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-custom/training](https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-custom/training)
- Source ID: `site-docs-reference-2`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- To learn more, run the following notebooks in the environment of your choice: "Use the Vertex AI SDK for Python to train and deploy a custom image classification model for batch prediction.": Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub "Use the Vertex AI SDK for Python to train and deploy a custom image classification model for online prediction.": Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub This page shows you how to run a TensorFlow Keras training application on Vertex AI.
- Activate Cloud Shell In the Cloud Shell session, run the following command: cd hello-custom-sample Run a custom training pipeline This section describes using the training package that you uploaded to Cloud Storage to run a Vertex AI custom training pipeline.
- After a few moments, you can view this resource on the Custom jobs page of the Training section: Go to Custom jobs The custom job runs the training application using the computing resources that you specified in this section.
- Home Documentation AI and ML Vertex AI Send feedback Hello custom training: Train a custom image classification model Stay organized with collections Save and categorize content based on your preferences.

### "Hello custom training: Set up your project and environment \_|\_ Vertex\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-custom](https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-custom)
- Source ID: `site-docs-reference-2`
- Final score: 142
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Download sample code Download sample code to use for the rest of the tutorial. gcloud storage cp gs://cloud-samples-data/ai-platform/hello-custom/hello-custom-sample-v1.tar.gz - tar -xzv To optionally view the sample code files, run the following command: ls -lpR hello-custom-sample The hello-custom-sample directory has four items: trainer/ : A directory of TensorFlow Keras code for training the flower classification model. setup.py : A configuration file for packaging the trainer/ directory into a Python source distribution that Vertex AI can use. function/ : A directory of Python code for a Cloud Run function that can receive and preprocess prediction requests from a web browser, send them to Vertex AI, process the prediction responses, and send them back to the browser. webapp/ : A directory with code and markup for a web app that gets flower classification predictions from Vertex AI.
- Home Documentation AI and ML Vertex AI Send feedback Hello custom training: Set up your project and environment Stay organized with collections Save and categorize content based on your preferences.
- As you follow the tutorial, use the bucket for several purposes: Store training code for Vertex AI to use in a custom training job.
- What's next Follow the next page of this tutorial to run a custom training job on Vertex AI.

