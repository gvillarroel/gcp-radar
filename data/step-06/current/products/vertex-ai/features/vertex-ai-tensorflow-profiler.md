---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:02:17.146Z"
product_name: "Vertex AI"
product_slug: "vertex-ai"
feature_name: "Vertex AI TensorFlow Profiler"
feature_slug: "vertex-ai-tensorflow-profiler"
latest_feature_date: "2022-12-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/experiments/tensorboard-profiler"
  - "https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials"
  - "https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/overview"
keywords:
  - "vertex"
  - "ai"
  - "tensorflow"
  - "profiler"
  - "now"
  - "generally"
  - "available"
  - "debugging"
---

# Vertex AI TensorFlow Profiler

Product: Vertex AI
Coverage: MEDIUM

## Step 02 Summary

Vertex AI TensorFlow Profiler is now generally available for debugging model training performance in custom training jobs.

## Extended Definition

Vertex AI TensorFlow Profiler is now generally available for debugging model training performance in custom training jobs.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/experiments/tensorboard-profiler](https://docs.cloud.google.com/vertex-ai/docs/experiments/tensorboard-profiler)
- [https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials)
- [https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/overview](https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/overview)

## Supporting Pages

### "Enable Cloud Profiler for debugging model training performance debugging\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/experiments/tensorboard-profiler](https://docs.cloud.google.com/vertex-ai/docs/experiments/tensorboard-profiler)
- Source ID: `site-docs-reference-3`
- Final score: 134
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Notebook To see examples of how to profile model training performance, run the following notebooks in the environment of your choice: "Profile model training performance using Cloud Profiler": Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub "Profile model training performance using Cloud Profiler in custom training with prebuilt container": Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub What's next See the Tensorflow Profiler documentation to learn about the profiler tools and how to use them to optimize model performance.
- Home Documentation AI and ML Vertex AI Send feedback Enable Cloud Profiler for debugging model training performance debugging Stay organized with collections Save and categorize content based on your preferences.
- Enable Profiler To enable Profiler for your training job, add the following to your training script: Add the cloud profiler import at your top level imports: from google.cloud.aiplatform.training utils import cloud profiler Initialize the cloud profiler plugin by adding: cloud profiler . init () Example Here's a sample training script: #!/usr/bin/env python import tensorflow as tf import argparse import os from google.cloud.aiplatform.training utils import cloud profiler import time """Train an mnist model and use cloud profiler for profiling.""" def create model (): model = tf . keras . models .
- ArgumentParser () parser . add argument ( "--epochs" , type = int , default = 100 , help = "Number of epochs to run model." ) parser . add argument ( "--distributed" , action = "store true" , help = "Use MultiWorkerMirroredStrategy" ) args = parser . parse args () main ( args ) Access the Profiler dashboard Once you have configured your training script to enable Profiler, run the training script with a Vertex AI TensorBoard instance .

### "Introduction to Vertex Explainable AI \_|\_ Vertex AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/overview](https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/overview)
- Source ID: `site-docs-reference-3`
- Final score: 81
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- References For feature attribution, the implementations of sampled Shapley, integrated gradients, and XRAI are based on the following references, respectively: Bounding the Estimation Error of Sampling-based Shapley Value Approximation Axiomatic Attribution for Deep Networks XRAI: Better Attributions Through Regions Notebooks To get started using Vertex Explainable AI, use these notebooks: Notebook Explainability method ML framework Modality Task GitHub link example-based explanations TensorFlow image Train a classification model that predicts the class of the provided input image and get online explanations GitHub link feature-based AutoML tabular Train a binary classification model that predicts whether a bank custom purchased a term deposit and get batch explanations GitHub link feature-based AutoML tabular Train a classification model that predicts the type of Iris flower species and get online explanations GitHub link feature-based (sampled Shapley) scikit-learn tabular Train a linear regression model that predicts taxi fares and get online explanations GitHub link feature-based (integrated gradients) TensorFlow image Train a classification model that predicts the class of the provided input image and get batch explanations GitHub link feature-based (integrated gradients) TensorFlow image Train a classification model that predicts the class of the provided input image and get online explanations GitHub link feature-based (integrated gradients) TensorFlow tabular Train a regression model that predicts the median price of a house and get batch explanations GitHub link feature-based (integrated gradients) TensorFlow tabular Train a regression model that predicts the median price of a house and get online explanations GitHub link feature-based (sampled Shapley) TensorFlow text Train a LSTM model that classifies movie reviews as positive or negative using the text of the review and get online explanations Educational resources The following resources provide further useful educational material: Explainable AI for Practitioners Interpretable Machine Learning: Shapley values Ankur Taly's Integrated Gradients GitHub repository .
- This section provides a brief conceptual overview of the feature attribution methods available with Vertex AI.
- Access to Vertex Explainable AI will no longer be available on or after March 16, 2027.
- If you request explanations , you get the predicted class along with an overlay for the image, showing which areas in the image contributed most strongly to the resulting inference: A photo of a daisy with feature attribution overlay Supported model types Feature attribution is supported for all types of models (both AutoML and custom-trained), frameworks (TensorFlow, scikit, XGBoost), BigQuery ML models, and modalities (images, text, tabular).

### "Vertex Explainable AI notebook tutorials \_|\_ Vertex AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials)
- Source ID: `site-docs-reference-2`
- Final score: 76
- Re-rank relevance: N/A

Evidence snippets:
- Tutorial steps Create utility functions to download data and prepare csv files for creating Vertex AI managed dataset Download Data Prepare CSV Files for creating managed dataset Create custom training Python package Create TensorFlow Serving container Run custom Python package training with managed text dataset Deploy a model and create an endpoint on Vertex AI Predict on the endpoint Create a Batch Prediction job on the model Colab Colab Enterprise GitHub Vertex AI Workbench Tabular Workflow for TabNet Vertex AI Explanations with TabNet models .
- Tutorial steps Fetch the required data from BigQuery Preprocess the data Train a TensorFlow (>=2.4) classification model Evaluate the loss for the trained model Automate the notebook execution using the executor feature Save the model to a Cloud Storage path Clean up the created resources Colab Colab Enterprise GitHub Vertex AI Workbench Vertex AI Workbench Vertex Explainable AI Taxi fare prediction using the Chicago Taxi Trips dataset .
- Tutorial steps Setup a service account and a Cloud Storage bucket Create a Vertex AI TensorBoard instance Create and run a custom training job that enables Profiler View the Profiler dashboard to debug your model training performance Colab Colab Enterprise GitHub Vertex AI Workbench Profiler Vertex AI TensorBoard Profile model training performance using Cloud Profiler in custom training with prebuilt container .
- Tutorial steps Prepare your custom training code and load your training code as a Python package to a prebuilt container Create and run a custom training job that enables Profiler View the Profiler dashboard to debug your model training performance Colab Colab Enterprise GitHub Vertex AI Workbench Vertex AI TensorBoard Vertex AI Pipelines Vertex AI TensorBoard integration with Vertex AI Pipelines .

