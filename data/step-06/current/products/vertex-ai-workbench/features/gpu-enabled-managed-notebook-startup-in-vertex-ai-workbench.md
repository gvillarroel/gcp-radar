---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T17:42:01.338Z"
product_name: "Vertex AI Workbench"
product_slug: "vertex-ai-workbench"
feature_name: "GPU-enabled managed notebook startup in Vertex AI Workbench"
feature_slug: "gpu-enabled-managed-notebook-startup-in-vertex-ai-workbench"
latest_feature_date: "2022-08-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_create_notebook_runtime_template"
  - "https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_create_notebook_runtime"
  - "https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials"
keywords:
  - "gpu"
  - "enabled"
  - "managed"
  - "notebook"
  - "startup"
  - "vertex"
  - "ai"
  - "workbench"
---

# GPU-enabled managed notebook startup in Vertex AI Workbench

Product: Vertex AI Workbench
Coverage: MEDIUM

## Step 02 Summary

Managed notebook instances start correctly after a GPU is added.

## Extended Definition

Managed notebook instances start correctly after a GPU is added.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_create_notebook_runtime_template](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_create_notebook_runtime_template)
- [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_create_notebook_runtime](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_create_notebook_runtime)
- [https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials)

## Supporting Pages

### "MCP Tools Reference: aiplatform.googleapis.com \_|\_ Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_create_notebook_runtime_template](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_create_notebook_runtime_template)
- Source ID: `site-api-reference`
- Final score: 119
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- NotebookSoftwareConfig JSON representation { "env" : [ { object ( EnvVar ) } ] , "postStartupScriptConfig" : { object ( PostStartupScriptConfig ) } , // Union field runtime image can be only one of the following: "colabImage" : { object ( ColabImage ) } // End of list of possible types for union field runtime image . } Fields env[] object ( EnvVar ) Optional.
- The Compute Engine tags to add to runtime (see Tagging instances ). encryptionSpec object ( EncryptionSpec ) Customer-managed encryption key spec for the notebook runtime. softwareConfig object ( NotebookSoftwareConfig ) Optional.
- This config will only be set when idle shutdown is enabled. eucConfig object ( NotebookEucConfig ) EUC configuration of the NotebookRuntimeTemplate. createTime string ( Timestamp format) Output only.
- Deprecated: This field is ignored and the "Vertex AI Notebook Service Account" ( service-PROJECT NUMBER@gcp-sa-aiplatform-vm.iam.gserviceaccount.com ) is used for the runtime workload identity.

### "MCP Tools Reference: aiplatform.googleapis.com \_|\_ Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_create_notebook_runtime](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/colab_enterprise_create_notebook_runtime)
- Source ID: `site-api-reference`
- Final score: 107
- Re-rank relevance: N/A

Evidence snippets:
- NotebookSoftwareConfig JSON representation { "env" : [ { object ( EnvVar ) } ] , "postStartupScriptConfig" : { object ( PostStartupScriptConfig ) } , // Union field runtime image can be only one of the following: "colabImage" : { object ( ColabImage ) } // End of list of possible types for union field runtime image . } Fields env[] object ( EnvVar ) Optional.
- Following system labels exist for NotebookRuntime: "aiplatform.googleapis.com/notebook runtime gce instance id": output only, its value is the Compute Engine instance id. "aiplatform.googleapis.com/colab enterprise entry service": its value is either "bigquery" or "vertex"; if absent, it should be "vertex".
- Deprecated: This field is no longer used and the "Vertex AI Notebook Service Account" ( service-PROJECT NUMBER@gcp-sa-aiplatform-vm.iam.gserviceaccount.com ) is used for the runtime workload identity.
- In this way, by default EUC will be enabled for NotebookRuntimeTemplate. bypassActasCheck boolean Output only.

### "Vertex Explainable AI notebook tutorials \_|\_ Vertex AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials)
- Source ID: `site-docs-root`
- Final score: 106
- Re-rank relevance: N/A

Evidence snippets:
- Tutorial steps Create utility functions to download data and prepare csv files for creating Vertex AI managed dataset Download Data Prepare CSV Files for creating managed dataset Create custom training Python package Create TensorFlow Serving container Run custom Python package training with managed text dataset Deploy a model and create an endpoint on Vertex AI Predict on the endpoint Create a Batch Prediction job on the model Colab Colab Enterprise GitHub Vertex AI Workbench Tabular Workflow for TabNet Vertex AI Explanations with TabNet models .
- Tutorial steps Using Python & SQL to query public data in BigQuery Exploring the dataset using BigQuery INFORMATION SCHEMA Creating interactive elements to help explore interesting parts of the data Doing some exploratory correlation and time series analysis Creating static and interactive outputs (data tables and plots) in the notebook Saving some outputs to Cloud Storage Colab Colab Enterprise GitHub Vertex AI Workbench Vertex AI Workbench Custom training Build a fraud detection model on Vertex AI .
- List of notebooks Select a service AutoML BigQuery BigQuery ML Custom training Image Ray on Vertex AI Tabular Text Vector Search Vertex AI Experiments Vertex AI Feature Store Vertex AI Inference Vertex AI model evaluation Vertex AI Model Monitoring Vertex AI Model Registry Vertex AI Pipelines Vertex AI TensorBoard Vertex AI Vizier Vertex AI Workbench Vertex Explainable AI Vertex ML Metadata Services Description Open in Classification for tabular data AutoML tabular training and prediction .
- Tutorial steps Fetch the required data from BigQuery Preprocess the data Train a TensorFlow (>=2.4) classification model Evaluate the loss for the trained model Automate the notebook execution using the executor feature Save the model to a Cloud Storage path Clean up the created resources Colab Colab Enterprise GitHub Vertex AI Workbench Vertex AI Workbench Vertex Explainable AI Taxi fare prediction using the Chicago Taxi Trips dataset .

