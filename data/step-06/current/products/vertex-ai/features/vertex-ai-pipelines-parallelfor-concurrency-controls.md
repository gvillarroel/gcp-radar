---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:02:17.160Z"
product_name: "Vertex AI"
product_slug: "vertex-ai"
feature_name: "Vertex AI Pipelines ParallelFor concurrency controls"
feature_slug: "vertex-ai-pipelines-parallelfor-concurrency-controls"
latest_feature_date: "2022-09-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/pipelines/introduction"
  - "https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/image-classification"
  - "https://docs.cloud.google.com/vertex-ai/docs/experiments/compare-analyze-runs"
keywords:
  - "vertex"
  - "ai"
  - "pipelines"
  - "parallelfor"
  - "concurrency"
  - "controls"
  - "now"
  - "supports"
---

# Vertex AI Pipelines ParallelFor concurrency controls

Product: Vertex AI
Coverage: MEDIUM

## Step 02 Summary

Vertex AI Pipelines now supports limiting concurrent or parallel task runs within a pipeline run via the dsl.ParallelFor API.

## Extended Definition

Vertex AI Pipelines now supports limiting concurrent or parallel task runs within a pipeline run via the dsl.ParallelFor API.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/pipelines/introduction](https://docs.cloud.google.com/vertex-ai/docs/pipelines/introduction)
- [https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/image-classification](https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/image-classification)
- [https://docs.cloud.google.com/vertex-ai/docs/experiments/compare-analyze-runs](https://docs.cloud.google.com/vertex-ai/docs/experiments/compare-analyze-runs)

## Supporting Pages

### Introduction to Vertex AI Pipelines \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/pipelines/introduction](https://docs.cloud.google.com/vertex-ai/docs/pipelines/introduction)
- Source ID: `site-docs-reference-2`
- Final score: 75
- Re-rank relevance: N/A

Evidence snippets:
- In this stage, you need to perform the following steps: Choose an ML framework : Vertex AI Pipelines supports ML pipelines defined using the TFX or Kubeflow Pipelines framework.
- Structure of an ML pipeline Pipeline tasks and components Life cycle of an ML pipeline Use Vertex ML Metadata to track the lineage of ML artifacts Add pipeline runs to experiments Note: If you're experienced in creating ML pipelines using the Kubeflow Pipelines SDK and want to understand the differences between Vertex AI Pipelines and Kubeflow Pipelines, see Migrate from Kubeflow Pipelines to Vertex AI Pipelines .
- To learn more, run the "Vertex AI Pipelines: Lightweight Python function-based components, and component I/O" notebook in one of the following environments: Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub Vertex AI Pipelines lets you automate, monitor, and govern your machine learning (ML) systems in a serverless manner by using ML pipelines to orchestrate your ML workflows.
- Using Vertex AI Pipelines, you can create an ML pipeline run in the following ways: Use the compiled YAML definition of a pipeline Use a pipeline template from the Template Gallery For more information about how to create a pipeline run, see Run a pipeline .

### Compare and analyze runs \_|\_ Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/experiments/compare-analyze-runs](https://docs.cloud.google.com/vertex-ai/docs/experiments/compare-analyze-runs)
- Source ID: `site-docs-reference-3`
- Final score: 68
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation AI and ML Vertex AI Send feedback Compare and analyze runs Stay organized with collections Save and categorize content based on your preferences.
- Compare runs Using the Vertex AI SDK for Python, you can retrieve the data associated with your experiment.
- You can use the Vertex AI SDK for Python to view Vertex AI Experiments runs data and compare the runs.

### "Fine-tune an image classification model with custom data on Vertex AI Pipelines\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/image-classification](https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/image-classification)
- Source ID: `site-docs-reference-2`
- Final score: 61
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation AI and ML Vertex AI Send feedback Fine-tune an image classification model with custom data on Vertex AI Pipelines Stay organized with collections Save and categorize content based on your preferences.
- This tutorial shows you how to use Vertex AI Pipelines to run an end-to-end ML workflow, including the following tasks: Import and transform data.
- Monitor the pipeline In the Google Cloud console, in the Vertex AI section, go to the Pipelines page and open the Runs tab.
- Go to Pipeline runs What's next To learn more about Vertex AI Pipelines, see Introduction to Vertex AI Pipelines .

