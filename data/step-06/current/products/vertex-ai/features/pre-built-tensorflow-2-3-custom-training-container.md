---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:02:17.190Z"
product_name: "Vertex AI"
product_slug: "vertex-ai"
feature_name: "Pre-built TensorFlow 2.3 custom training container"
feature_slug: "pre-built-tensorflow-2-3-custom-training-container"
latest_feature_date: "2021-01-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks"
  - "https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-custom/training"
  - "https://docs.cloud.google.com/vertex-ai/docs/start/training-guide"
keywords:
  - "pre"
  - "built"
  - "tensorflow"
  - "custom"
  - "training"
  - "container"
  - "now"
  - "available"
---

# Pre-built TensorFlow 2.3 custom training container

Product: Vertex AI
Coverage: MEDIUM

## Step 02 Summary

A pre-built container is now available for running custom training jobs using TensorFlow 2.3.

## Extended Definition

A pre-built container is now available for running custom training jobs using TensorFlow 2.3.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks](https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks)
- [https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-custom/training](https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-custom/training)
- [https://docs.cloud.google.com/vertex-ai/docs/start/training-guide](https://docs.cloud.google.com/vertex-ai/docs/start/training-guide)

## Supporting Pages

### Custom training notebook tutorials \_|\_ Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks](https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks)
- Source ID: `site-docs-reference-2`
- Final score: 236
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Tutorial steps Create utility functions to download data and prepare csv files for creating Vertex AI managed dataset Download Data Prepare CSV Files for creating managed dataset Create custom training Python package Create TensorFlow Serving container Run custom Python package training with managed text dataset Deploy a model and create an endpoint on Vertex AI Predict on the endpoint Create a Batch Prediction job on the model Colab Colab Enterprise GitHub Vertex AI Workbench Tabular Workflow for TabNet Vertex AI Explanations with TabNet models .
- Tutorial steps Setup a service account and a Cloud Storage bucket Create a Vertex AI TensorBoard instance Create and run a custom training job that enables Profiler View the Profiler dashboard to debug your model training performance Colab Colab Enterprise GitHub Vertex AI Workbench Profiler Vertex AI TensorBoard Profile model training performance using Cloud Profiler in custom training with prebuilt container .
- Tutorial steps Prepare your custom training code and load your training code as a Python package to a prebuilt container Create and run a custom training job that enables Profiler View the Profiler dashboard to debug your model training performance Colab Colab Enterprise GitHub Vertex AI Workbench Vertex AI TensorBoard Vertex AI Pipelines Vertex AI TensorBoard integration with Vertex AI Pipelines .
- Tutorial steps Create a PyTorch distributed training application Package the training application with prebuilt containers Create a custom job on Vertex AI with Reduction Server Submit and monitor the job Colab Colab Enterprise GitHub Vertex AI Workbench Custom training Custom training using Python package, managed text dataset, and TF Serving container .

### "Hello custom training: Train a custom image classification model \_|\_ Vertex\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-custom/training](https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-custom/training)
- Source ID: `site-docs-reference-2`
- Final score: 206
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To learn more, run the following notebooks in the environment of your choice: "Use the Vertex AI SDK for Python to train and deploy a custom image classification model for batch prediction.": Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub "Use the Vertex AI SDK for Python to train and deploy a custom image classification model for online prediction.": Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub This page shows you how to run a TensorFlow Keras training application on Vertex AI.
- On the Training container step, provide Vertex AI with information it needs to use the training package that you uploaded to Cloud Storage: Select Prebuilt container .
- In the Prebuilt container settings section, do the following: In the Model framework drop-down list, select TensorFlow .
- You can now view your new training pipeline , which is named hello custom , on the Training page. (You might need to refresh the page.) The training pipeline does two main things: The training pipeline creates a custom job resource named hello custom-custom-job .

### Custom training beginner's guide \_|\_ Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/start/training-guide](https://docs.cloud.google.com/vertex-ai/docs/start/training-guide)
- Source ID: `site-docs-reference-2`
- Final score: 182
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Notebooks To see examples of how to enable Profiler for a custom training job, run the following notebooks in the environment of your choice: "Training, tuning and deploying a PyTorch text sentiment classification model on Vertex AI": Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub "Get started with Vertex AI Distributed Training": Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub "Run hyperparameter tuning for a TensorFlow model": Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub "Vertex AI TensorBoard custom training with prebuilt container": Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub "PyTorch distributed training with Vertex AI Reduction Server": Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub "Custom training and batch prediction (image classification)": Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub "Custom training and online prediction (image classification)": Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub Video Training custom models Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Under the Training Container section, select either prebuilt or custom container, depending on how you packaged your application.
- Recommended training application structure If you choose to package up your code as a Python source distribution or as a custom container, it's recommended that you structure your application as follows: training-application-dir/ ....setup.py ....Dockerfile trainer/ ....task.py ....model.py ....utils.py Create a directory to store all of your training application code, in this case, training-application-dir .
- You can use this option if all of the code needed to execute your training application is in one Python file and one of the prebuilt Vertex AI training containers has all of the libraries needed to run your application.

