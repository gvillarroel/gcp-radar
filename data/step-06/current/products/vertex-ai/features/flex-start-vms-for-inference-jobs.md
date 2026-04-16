---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:02:17.062Z"
product_name: "Vertex AI"
product_slug: "vertex-ai"
feature_name: "Flex-start VMs for inference jobs"
feature_slug: "flex-start-vms-for-inference-jobs"
latest_feature_date: "2025-07-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint"
  - "https://docs.cloud.google.com/vertex-ai/docs/start/training-methods"
  - "https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks"
keywords:
  - "flex"
  - "start"
  - "vms"
  - "inference"
  - "jobs"
  - "flexible"
  - "powered"
  - "dynamic"
---

# Flex-start VMs for inference jobs

Product: Vertex AI
Coverage: MEDIUM

## Step 02 Summary

Flexible-start VMs powered by Dynamic Workload Scheduler allow running inference workloads at discounted rates, with a preview release focused on short-duration jobs.

## Extended Definition

Flexible-start VMs powered by Dynamic Workload Scheduler allow running inference workloads at discounted rates, with a preview release focused on short-duration jobs.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint)
- [https://docs.cloud.google.com/vertex-ai/docs/start/training-methods](https://docs.cloud.google.com/vertex-ai/docs/start/training-methods)
- [https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks](https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks)

## Supporting Pages

### "MCP Tools Reference: aiplatform.googleapis.com \_|\_ Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint)
- Source ID: `site-api-reference-2`
- Final score: 140
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- DedicatedResources JSON representation { "machineSpec" : { object ( MachineSpec ) } , "minReplicaCount" : integer , "maxReplicaCount" : integer , "requiredReplicaCount" : integer , "initialReplicaCount" : integer , "autoscalingMetricSpecs" : [ { object ( AutoscalingMetricSpec ) } ] , "spot" : boolean , "flexStart" : { object ( FlexStart ) } , "scaleToZeroSpec" : { object ( ScaleToZeroSpec ) } } Fields machineSpec object ( MachineSpec ) Required.
- MonitoredResourceLabelsEntry JSON representation { "key" : string , "value" : string } Fields key string value string FlexStart JSON representation { "maxRuntimeDuration" : string } Fields maxRuntimeDuration string ( Duration format) The max duration of the deployment is max runtime duration.
- If true, schedule the deployment workload on spot VMs . flexStart object ( FlexStart ) Optional.
- The following table lists the number of model inference units for different model types: Gemini 2.5 Flash Foundation FMIU: 25 Expansion FMIU: 4 Gemini 2.5 Pro Foundation FMIU: 32 Expansion FMIU: 16 Veo 3.0 (undistilled) Foundation FMIU: 63 Expansion FMIU: 7 Veo 3.0 (distilled) Foundation FMIU: 30 Expansion FMIU: 10 Timestamp JSON representation { "seconds" : string , "nanos" : integer } Fields seconds string ( int64 format) Represents seconds of UTC time since Unix epoch 1970-01-01T00:00:00Z.

### Choose a training method \_|\_ Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/start/training-methods](https://docs.cloud.google.com/vertex-ai/docs/start/training-methods)
- Source ID: `site-docs-reference-required-4`
- Final score: 101
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Ray on Vertex AI provides a managed environment with configurable compute resources, integration with services like Vertex AI Inference and BigQuery, and flexible networking options for developing and running distributed workloads.
- You have complete control over training application functionality, from single-node jobs to massive, multi-node distributed training.
- Involves code development, but job start-up is faster as resources are already reserved, eliminating queues and provisioning time.
- Model development is fast as BigQuery ML leverages the BigQuery computational engine for training, evaluation, and inference.

### Custom training notebook tutorials \_|\_ Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks](https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks)
- Source ID: `site-docs-reference-2`
- Final score: 90
- Re-rank relevance: N/A

Evidence snippets:
- Colab Colab Enterprise GitHub Vertex AI Workbench getting predictions from a custom trained model Get started with TensorFlow Serving with Vertex AI Inference .
- Colab Colab Enterprise GitHub Vertex AI Workbench Vertex AI Inference Get started with NVIDIA Triton server .
- Tutorial steps Create a local BigQuery table in your project Train a BigQuery ML model Evaluate the BigQuery ML model Export the BigQuery ML model as a cloud model Upload the exported model as a Vertex AI model resource Hyperparameter tune a BigQuery ML model with Vertex AI Vizier Automatically register a BigQuery ML model to Vertex AI Model Registry Colab Colab Enterprise GitHub Vertex AI Workbench Custom training Vertex AI Inference Deploying Iris-detection model using FastAPI and Vertex AI custom container serving .
- List of notebooks Select a service AutoML BigQuery BigQuery ML Custom training Image Ray on Vertex AI Tabular Text Vector Search Vertex AI Experiments Vertex AI Feature Store Vertex AI Inference Vertex AI model evaluation Vertex AI Model Monitoring Vertex AI Model Registry Vertex AI Pipelines Vertex AI TensorBoard Vertex AI Vizier Vertex AI Workbench Vertex Explainable AI Vertex ML Metadata Services Description Open in Classification for tabular data AutoML tabular training and prediction .

