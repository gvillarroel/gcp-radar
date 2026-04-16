---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:02:17.161Z"
product_name: "Vertex AI"
product_slug: "vertex-ai"
feature_name: "Vertex AI Pipelines task-level retries"
feature_slug: "vertex-ai-pipelines-task-level-retries"
latest_feature_date: "2022-07-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/pipelines/introduction"
  - "https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks"
  - "https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_notebook_execution_schedule"
keywords:
  - "vertex"
  - "ai"
  - "pipelines"
  - "task"
  - "level"
  - "retries"
  - "added"
  - "configuring"
---

# Vertex AI Pipelines task-level retries

Product: Vertex AI
Coverage: MEDIUM

## Step 02 Summary

Vertex AI Pipelines added support for configuring task-level retry counts so tasks can be retried a specified number of times before failing.

## Extended Definition

Vertex AI Pipelines added support for configuring task-level retry counts so tasks can be retried a specified number of times before failing.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/pipelines/introduction](https://docs.cloud.google.com/vertex-ai/docs/pipelines/introduction)
- [https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks](https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks)
- [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_notebook_execution_schedule](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_notebook_execution_schedule)

## Supporting Pages

### Introduction to Vertex AI Pipelines \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/pipelines/introduction](https://docs.cloud.google.com/vertex-ai/docs/pipelines/introduction)
- Source ID: `site-docs-reference-2`
- Final score: 103
- Re-rank relevance: N/A

Evidence snippets:
- Structure of an ML pipeline Pipeline tasks and components Life cycle of an ML pipeline Use Vertex ML Metadata to track the lineage of ML artifacts Add pipeline runs to experiments Note: If you're experienced in creating ML pipelines using the Kubeflow Pipelines SDK and want to understand the differences between Vertex AI Pipelines and Kubeflow Pipelines, see Migrate from Kubeflow Pipelines to Vertex AI Pipelines .
- When you run your ML pipeline, Vertex AI Pipelines executes these tasks in the sequence described in the DAG.
- To learn more, run the "Vertex AI Pipelines: Lightweight Python function-based components, and component I/O" notebook in one of the following environments: Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub Vertex AI Pipelines lets you automate, monitor, and govern your machine learning (ML) systems in a serverless manner by using ML pipelines to orchestrate your ML workflows.
- When you compile your ML pipeline, the pipelines SDK you're using (Kubeflow Pipelines or TFX) analyzes the data dependencies between these tasks and creates the following workflow DAG: Prepare data doesn't rely on other tasks within the same ML pipeline for inputs.

### "MCP Tools Reference: aiplatform.googleapis.com \_|\_ Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_notebook_execution_schedule](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_notebook_execution_schedule)
- Source ID: `site-docs-reference`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- This property is managed by clients (such as Vertex AI Pipelines) and the system does not prescribe or check the validity of state transitions. etag string An eTag used to perform consistent read-modify-write updates.
- This property is managed by clients (such as Vertex AI Pipelines) and the system does not prescribe or check the validity of state transitions. etag string An eTag used to perform consistent read-modify-write updates.
- This property is managed by clients (such as Vertex AI Pipelines), and the system does not prescribe or check the validity of state transitions. schemaTitle string The title of the schema describing the metadata.
- This property is managed by clients (such as Vertex AI Pipelines), and the system does not prescribe or check the validity of state transitions. schemaTitle string The title of the schema describing the metadata.

### Custom training notebook tutorials \_|\_ Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks](https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks)
- Source ID: `site-docs-reference-2`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- Execute pipeline using customjoblevel settings for machine resources Colab GitHub Vertex AI Workbench Vertex AI Pipelines AutoML components AutoML image classification pipelines using google-cloud-pipeline-components .
- List of notebooks Select a service AutoML BigQuery BigQuery ML Custom training Image Ray on Vertex AI Tabular Text Vector Search Vertex AI Experiments Vertex AI Feature Store Vertex AI Inference Vertex AI model evaluation Vertex AI Model Monitoring Vertex AI Model Registry Vertex AI Pipelines Vertex AI TensorBoard Vertex AI Vizier Vertex AI Workbench Vertex Explainable AI Vertex ML Metadata Services Description Open in Classification for tabular data AutoML tabular training and prediction .
- Tutorial steps Prepare your custom training code and load your training code as a Python package to a prebuilt container Create and run a custom training job that enables Profiler View the Profiler dashboard to debug your model training performance Colab Colab Enterprise GitHub Vertex AI Workbench Vertex AI TensorBoard Vertex AI Pipelines Vertex AI TensorBoard integration with Vertex AI Pipelines .
- Tutorial steps Create a KFP pipeline using control flow components Compile the KFP pipeline Execute the KFP pipeline using Vertex AI Pipelines Colab Colab Enterprise GitHub Vertex AI Workbench Vertex AI Pipelines Custom training components Custom training with pre-built Google Cloud Pipeline Components .

