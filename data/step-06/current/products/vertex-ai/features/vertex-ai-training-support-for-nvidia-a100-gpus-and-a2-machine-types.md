---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:02:17.178Z"
product_name: "Vertex AI"
product_slug: "vertex-ai"
feature_name: "Vertex AI training support for NVIDIA A100 GPUs and A2 machine types"
feature_slug: "vertex-ai-training-support-for-nvidia-a100-gpus-and-a2-machine-types"
latest_feature_date: "2021-06-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_notebook_execution_schedule"
  - "https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_update_notebook_runtime_template"
  - "https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks"
keywords:
  - "vertex"
  - "ai"
  - "training"
  - "nvidia"
  - "a100"
  - "gpus"
  - "a2"
  - "machine"
---

# Vertex AI training support for NVIDIA A100 GPUs and A2 machine types

Product: Vertex AI
Coverage: MEDIUM

## Step 02 Summary

Vertex AI training now supports NVIDIA A100 GPUs and accelerator-optimized A2 machine types for training, and these must be used together.

## Extended Definition

Vertex AI training now supports NVIDIA A100 GPUs and accelerator-optimized A2 machine types for training, and these must be used together.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_notebook_execution_schedule](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_notebook_execution_schedule)
- [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_update_notebook_runtime_template](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_update_notebook_runtime_template)
- [https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks](https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks)

## Supporting Pages

### "MCP Tools Reference: aiplatform.googleapis.com \_|\_ Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_notebook_execution_schedule](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_notebook_execution_schedule)
- Source ID: `site-docs-reference`
- Final score: 142
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, if the request is for 8 units of NVIDIA A100 GPUs, and gpu partition size="1g.10gb", the service will create 8 7 = 56 partitioned MIG instances.
- For example, if the request is for 8 units of NVIDIA A100 GPUs, and gpu partition size="1g.10gb", the service will create 8 7 = 56 partitioned MIG instances.
- For accelerator optimized machine types ( https://cloud.google.com/compute/docs/accelerator-optimized-machines) , One may set the accelerator count from 1 to N for machine with N GPUs.
- For accelerator optimized machine types ( https://cloud.google.com/compute/docs/accelerator-optimized-machines) , One may set the accelerator count from 1 to N for machine with N GPUs.

### "MCP Tools Reference: aiplatform.googleapis.com \_|\_ Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_update_notebook_runtime_template](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_update_notebook_runtime_template)
- Source ID: `site-api-reference`
- Final score: 134
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, if the request is for 8 units of NVIDIA A100 GPUs, and gpu partition size="1g.10gb", the service will create 8 7 = 56 partitioned MIG instances.
- For example, if the request is for 8 units of NVIDIA A100 GPUs, and gpu partition size="1g.10gb", the service will create 8 7 = 56 partitioned MIG instances.
- For accelerator optimized machine types ( https://cloud.google.com/compute/docs/accelerator-optimized-machines) , One may set the accelerator count from 1 to N for machine with N GPUs.
- For accelerator optimized machine types ( https://cloud.google.com/compute/docs/accelerator-optimized-machines) , One may set the accelerator count from 1 to N for machine with N GPUs.

### Custom training notebook tutorials \_|\_ Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks](https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks)
- Source ID: `site-docs-reference-2`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- Tutorial steps Create a shell script to start an ETCD cluster on the master node Create a training script using code from PyTorch Elastic's GitHub repository Create containers that download the data, and start an ETCD cluster on the host Train the model using multiple nodes with GPUs Colab Colab Enterprise GitHub Vertex AI Workbench Custom training Distributed XGBoost training with Dask .
- Execute pipeline using componentlevel settings for machine resources Convert the selfcontained training component into a Vertex AI CustomJob .
- In this tutorial, you train a machine learning model custom container image approach for custom training in Vertex AI.
- Tutorial steps Installation of required libraries Reading the dataset from a Cloud Storage bucket Performing exploratory analysis on the dataset Preprocessing the dataset Training a random forest model using scikitlearn Saving the model to a Cloud Storage bucket Creating a Vertex AI model resource and deploying to an endpoint Running the WhatIf Tool on test data Undeploying the model and cleaning up the model resources Colab GitHub Vertex AI Workbench Vertex AI Workbench BigQuery ML Churn prediction for game developers using Google Analytics 4 and BigQuery ML .

