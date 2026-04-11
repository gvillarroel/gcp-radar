---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.696Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery ML integration with Vertex AI Model Registry"
feature_slug: "bigquery-ml-integration-with-vertex-ai-model-registry"
latest_feature_date: "2023-01-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-ml-remote-model-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/locations"
keywords:
  - "register model in registry"
  - "model lifecycle operations"
  - "Model Registry integration"
  - "Vertex AI Model Registry"
  - "model registry support"
  - "registry integration"
  - "model lifecycle"
  - "BigQuery ML integration"
---

# BigQuery ML integration with Vertex AI Model Registry

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery ML is generally available with Vertex AI Model Registry for model lifecycle operations.

## Extended Definition

This feature covers BigQuery ML’s support for integrating remote model workflows with Vertex AI Model Registry by importing models into the registry as part of model usage workflows. The BigQuery documentation for remote models explicitly describes importing a pretrained model into Vertex AI Model Registry and references model versioning and model import guidance, indicating registry-based model lifecycle management, and the BigQuery locations page notes that Vertex AI Model Registry integration is only supported for single-region integrations.

## Evidence Summary

The cited tutorial and locations pages confirm model-import integration with Vertex AI Model Registry for BigQuery ML remote models and specify a single-region constraint for that integration.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/bigquery-ml-remote-model-tutorial](https://docs.cloud.google.com/bigquery/docs/bigquery-ml-remote-model-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/locations](https://docs.cloud.google.com/bigquery/docs/locations)

## Supporting Pages

### "Make predictions with remote models on Vertex AI \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/bigquery-ml-remote-model-tutorial](https://docs.cloud.google.com/bigquery/docs/bigquery-ml-remote-model-tutorial)
- Source ID: `site-docs-root`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- Import the model to the Vertex AI Model Registry In this tutorial you use a pretrained TensorFlow model that is available in Cloud Storage at gs://cloud-samples-data/bigquery/ml/remote model tutorial/ .
- To learn more about model versioning in Vertex AI Model Registry, see Model versioning with Model Registry .
- To learn more about importing models in Vertex AI Model Registry, see Import models to Vertex AI .
- Objectives Import a pretrained TensorFlow model into the Vertex AI Model Registry.

### BigQuery locations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/locations](https://docs.cloud.google.com/bigquery/docs/locations)
- Source ID: `site-docs-root`
- Final score: 28
- Re-rank relevance: N/A

Evidence snippets:
- Regional locations The following table contains information about supported locations for all model types other than remote models: Region description Region name Imported models Built-in model training DNN/Autoencoder/ Boosted Tree/ Wide-and-Deep models training AutoML model training Hyperparameter tuning Vertex AI Model Registry integration Americas Columbus, Ohio us-east5 ● ● Dallas us-south1 ● ● Iowa us-central1 ● ● ● ● ● ● Las Vegas us-west4 ● ● ● ● Los Angeles us-west2 ● ● ● ● Mexico northamerica-south1 ● ● Montréal northamerica-northeast1 ● ● ● ● ● ● Northern Virginia us-east4 ● ● ● ● ● ● Oregon us-west1 ● ● ● ● ● Salt Lake City us-west3 ● ● ● São Paulo southamerica-east1 ● ● ● ● Santiago southamerica-west1 ● ● South Carolina us-east1 ● ● ● ● ● Toronto northamerica-northeast2 ● ● ● Europe Belgium europe-west1 ● ● ● ● ● ● Berlin europe-west10 ● ● Finland europe-north1 ● ● ● Frankfurt europe-west3 ● ● ● ● ● ● London europe-west2 ● ● ● ● ● ● Madrid europe-southwest1 ● ● Milan europe-west8 ● ● Netherlands europe-west4 ● ● ● ● ● ● Paris europe-west9 ● ● Stockholm europe-north2 ● ● Turin europe-west12 ● Warsaw europe-central2 ● ● Zürich europe-west6 ● ● ● ● ● ● Asia Pacific Bangkok asia-southeast3 ● ● Delhi asia-south2 ● ● Hong Kong asia-east2 ● ● ● ● ● ● Jakarta asia-southeast2 ● ● ● Melbourne australia-southeast2 ● ● Mumbai asia-south1 ● ● ● ● ● Osaka asia-northeast2 ● ● ● Seoul asia-northeast3 ● ● ● ● ● ● Singapore asia-southeast1 ● ● ● ● ● ● Sydney australia-southeast1 ● ● ● ● ● ● Taiwan asia-east1 ● ● ● ● ● ● Tokyo asia-northeast1 ● ● ● ● ● ● Middle East Dammam me-central2 ● Doha me-central1 ● Tel Aviv me-west1 ● ● Africa Johannesburg africa-south1 ● ● Multi-regional locations All supported models other than remote models are supported in the US and EU multi-regions.
- Vertex AI Model Registry integration is supported only for single region integrations.

