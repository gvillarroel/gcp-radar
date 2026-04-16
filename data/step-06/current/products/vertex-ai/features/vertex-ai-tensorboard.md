---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:02:17.170Z"
product_name: "Vertex AI"
product_slug: "vertex-ai"
feature_name: "Vertex AI TensorBoard"
feature_slug: "vertex-ai-tensorboard"
latest_feature_date: "2021-12-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/experiments/tensorboard-overview"
  - "https://docs.cloud.google.com/vertex-ai/docs/experiments/intro-vertex-ai-experiments"
  - "https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials"
keywords:
  - "vertex"
  - "ai"
  - "tensorboard"
  - "provides"
  - "ga"
  - "experiment"
  - "tracking"
  - "visualization"
---

# Vertex AI TensorBoard

Product: Vertex AI
Coverage: MEDIUM

## Step 02 Summary

Vertex AI TensorBoard provides GA support for experiment tracking and visualization within Vertex AI.

## Extended Definition

Vertex AI TensorBoard provides GA support for experiment tracking and visualization within Vertex AI.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/experiments/tensorboard-overview](https://docs.cloud.google.com/vertex-ai/docs/experiments/tensorboard-overview)
- [https://docs.cloud.google.com/vertex-ai/docs/experiments/intro-vertex-ai-experiments](https://docs.cloud.google.com/vertex-ai/docs/experiments/intro-vertex-ai-experiments)
- [https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials)

## Supporting Pages

### Introduction to Vertex AI TensorBoard \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/experiments/tensorboard-overview](https://docs.cloud.google.com/vertex-ai/docs/experiments/tensorboard-overview)
- Source ID: `site-docs-reference-3`
- Final score: 197
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Vertex AI TensorBoard provides various detailed visualizations, that includes: tracking and visualizing metrics such as loss and accuracy over time, visualizing model computational graphs (ops and layers), viewing histograms of weights, biases, or other tensors as they change over time, projecting embeddings to a lower dimensional space, and displaying image, text, and audio samples.
- In addition to the powerful visualizations from TensorBoard, Vertex AI TensorBoard provides: a persistent, shareable link to your experiment's, Vertex AI TensorBoard experiment, tight integrations with Vertex AI services for model training, enterprise-grade security, privacy, and compliance.
- Vertex AI TensorBoard is an enterprise-ready managed version of Open Source TensorBoard (TB), which is a Google Open Source project for machine learning experiment visualization.
- Vertex AI TensorBoard and the Google Cloud console The Google Cloud console is used to: create or delete Vertex AI TensorBoard instances, create Vertex AI Experiments , view Vertex AI TensorBoard instance storage size → associated costs, view associated Vertex AI Experiments, Custom Jobs, and Pipeline Runs , visualize some time series metrics .

### Introduction to Vertex AI Experiments \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/experiments/intro-vertex-ai-experiments](https://docs.cloud.google.com/vertex-ai/docs/experiments/intro-vertex-ai-experiments)
- Source ID: `site-docs-reference-3`
- Final score: 153
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For other ML frameworks, Vertex AI Experiments provides a framework neutral Vertex AI SDK for Python that you can use. (see: Prebuilt containers for TensorFlow, scikit-learn, PyTorch, XGBoost).
- For some ML frameworks, such as TensorFlow, Vertex AI Experiments provides deep integrations into the framework that makes the user experience automagical.
- The Vertex AI SDK for Python provides APIs to consume experiments, experiment runs, experiment run parameters, metrics, and artifacts.
- Vertex AI Experiments, along with Vertex ML Metadata , provides a way to find the artifacts tracked in an experiment.

### "Vertex Explainable AI notebook tutorials \_|\_ Vertex AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials)
- Source ID: `site-docs-reference-2`
- Final score: 125
- Re-rank relevance: N/A

Evidence snippets:
- List of notebooks Select a service AutoML BigQuery BigQuery ML Custom training Image Ray on Vertex AI Tabular Text Vector Search Vertex AI Experiments Vertex AI Feature Store Vertex AI Inference Vertex AI model evaluation Vertex AI Model Monitoring Vertex AI Model Registry Vertex AI Pipelines Vertex AI TensorBoard Vertex AI Vizier Vertex AI Workbench Vertex Explainable AI Vertex ML Metadata Services Description Open in Classification for tabular data AutoML tabular training and prediction .
- Tutorial steps Execute module for preprocessing data Create a dataset artifact Log parameters Execute module for training the model Log parameters Create model artifact Assign tracking lineage to dataset, model and parameters Colab Colab Enterprise GitHub Vertex AI Workbench Vertex AI Experiments Track parameters and metrics for locally trained models .
- Tutorial steps Formalize a training component Build a training pipeline Run several pipeline jobs and log their results Compare different pipeline jobs Colab Colab Enterprise GitHub Vertex AI Workbench Vertex AI TensorBoard Delete Outdated Experiments in Vertex AI TensorBoard .
- Tutorial steps log the model parameters log the loss and metrics on every epoch to Vertex AI TensorBoard log the evaluation metrics Colab Colab Enterprise GitHub Vertex AI Workbench Vertex AI Experiments Vertex AI Pipelines Compare pipeline runs with Vertex AI Experiments .

