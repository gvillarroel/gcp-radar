---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:02:17.183Z"
product_name: "Vertex AI"
product_slug: "vertex-ai"
feature_name: "Vertex AI ML Metadata"
feature_slug: "vertex-ai-ml-metadata"
latest_feature_date: "2021-05-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/ml-metadata/ml-metadata-notebook-tutorials"
  - "https://docs.cloud.google.com/vertex-ai/docs/experiments/intro-vertex-ai-experiments"
  - "https://docs.cloud.google.com/vertex-ai/docs/pipelines/introduction"
keywords:
  - "vertex"
  - "ai"
  - "ml"
  - "metadata"
  - "captures"
  - "artifacts"
  - "produced"
  - "system"
---

# Vertex AI ML Metadata

Product: Vertex AI
Coverage: MEDIUM

## Step 02 Summary

Vertex AI ML Metadata captures metadata and artifacts produced by an ML system so teams can analyze overall ML system performance.

## Extended Definition

Vertex AI ML Metadata captures metadata and artifacts produced by an ML system so teams can analyze overall ML system performance.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/ml-metadata/ml-metadata-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/ml-metadata/ml-metadata-notebook-tutorials)
- [https://docs.cloud.google.com/vertex-ai/docs/experiments/intro-vertex-ai-experiments](https://docs.cloud.google.com/vertex-ai/docs/experiments/intro-vertex-ai-experiments)
- [https://docs.cloud.google.com/vertex-ai/docs/pipelines/introduction](https://docs.cloud.google.com/vertex-ai/docs/pipelines/introduction)

## Supporting Pages

### "Vertex ML Metadata notebook tutorials \_|\_ Vertex AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/ml-metadata/ml-metadata-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/ml-metadata/ml-metadata-notebook-tutorials)
- Source ID: `site-docs-reference-2`
- Final score: 133
- Re-rank relevance: N/A

Evidence snippets:
- Colab Colab Enterprise GitHub Vertex AI Workbench Vertex ML Metadata Vertex AI Pipelines Track artifacts and metrics across Vertex AI Pipelines runs using Vertex ML Metadata .
- Learn how to track artifacts and metrics with Vertex ML Metadata in Vertex AI Pipeline runs.
- List of notebooks Select a service AutoML BigQuery BigQuery ML Custom training Image Ray on Vertex AI Tabular Text Vector Search Vertex AI Experiments Vertex AI Feature Store Vertex AI Inference Vertex AI model evaluation Vertex AI Model Monitoring Vertex AI Model Registry Vertex AI Pipelines Vertex AI TensorBoard Vertex AI Vizier Vertex AI Workbench Vertex Explainable AI Vertex ML Metadata Services Description Open in Classification for tabular data AutoML tabular training and prediction .
- Tutorial steps Prepare the training script Submit a Ray job using the Ray Jobs API Download a trained image model from PyTorch Create a custom model handler Package model artifacts in a model archive file Register model in Vertex AI Model Registry Deploy model in Vertex AI Endpoint Make online predictions Colab Colab Enterprise GitHub Vertex AI Workbench Ray on Vertex AI overview Ray on Vertex AI cluster management .

### Introduction to Vertex AI Experiments \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/experiments/intro-vertex-ai-experiments](https://docs.cloud.google.com/vertex-ai/docs/experiments/intro-vertex-ai-experiments)
- Source ID: `site-docs-reference-3`
- Final score: 111
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Vertex AI Experiments, along with Vertex ML Metadata , provides a way to find the artifacts tracked in an experiment.
- The metrics are inferred from the system.Metric artifacts produced by that PipelineJob.
- Vertex AI Experiments terms Experiment, experiment run, and pipeline run experiment An experiment is a context that can contain a set of n experiment runs in addition to pipeline runs where a user can investigate, as a group, different configurations such as input artifacts or hyperparameters.
- Data models and concepts Vertex AI Experiments is a context in Vertex ML Metadata where an experiment can contain n experiment runs in addition to n pipeline runs.

### Introduction to Vertex AI Pipelines \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/pipelines/introduction](https://docs.cloud.google.com/vertex-ai/docs/pipelines/introduction)
- Source ID: `site-docs-reference-2`
- Final score: 99
- Re-rank relevance: N/A

Evidence snippets:
- Structure of an ML pipeline Pipeline tasks and components Life cycle of an ML pipeline Use Vertex ML Metadata to track the lineage of ML artifacts Add pipeline runs to experiments Note: If you're experienced in creating ML pipelines using the Kubeflow Pipelines SDK and want to understand the differences between Vertex AI Pipelines and Kubeflow Pipelines, see Migrate from Kubeflow Pipelines to Vertex AI Pipelines .
- To understand changes in the performance or accuracy of your ML system, you need to analyze the metadata and the lineage of ML artifacts from your ML pipeline runs.
- For information about capturing and storing pipeline run metadata using Vertex ML Metadata, see Use Vertex ML Metadata to track the lineage of ML artifacts .
- For more information about tracking the lineage of ML artifacts using Vertex ML Metadata and Knowledge Catalog, see Track the lineage of pipeline artifacts .

