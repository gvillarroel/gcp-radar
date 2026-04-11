---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.747Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery ML and Vertex AI Model Registry integration"
feature_slug: "bigquery-ml-and-vertex-ai-model-registry-integration"
latest_feature_date: "2022-04-01"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/export-model-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-ml-remote-model-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference"
keywords:
  - "BQML Model Registry"
  - "BQML to Vertex"
  - "register model"
  - "model deployment from BigQuery ML"
  - "Vertex AI Model Registry"
  - "BigQuery to Vertex integration"
  - "Model Registry"
  - "BigQuery ML model"
---

# BigQuery ML and Vertex AI Model Registry integration

Product: BigQuery
Coverage: LOW

## Step 02 Summary

This feature integrates BigQuery ML with Vertex AI Model Registry so models can be managed and deployed directly from the registry.

## Extended Definition

This feature integrates BigQuery ML with Vertex AI Model Registry so models can be managed and deployed directly from the registry.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/export-model-tutorial](https://docs.cloud.google.com/bigquery/docs/export-model-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/bigquery-ml-remote-model-tutorial](https://docs.cloud.google.com/bigquery/docs/bigquery-ml-remote-model-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)

## Supporting Pages

### Export a BigQuery ML model for online prediction \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/export-model-tutorial](https://docs.cloud.google.com/bigquery/docs/export-model-tutorial)
- Source ID: `site-docs-root-2`
- Final score: 62
- Re-rank relevance: MODERATE
- Re-rank rationale: The page directly references Vertex AI Model Registry as an alternative deployment path, but does not provide the full integration workflow.

Evidence snippets:
- Note: Exporting your models is not required for deployment on Vertex AI if you are using the Vertex AI Model Registry.
- To learn more about the registry, see Manage BigQuery ML models in the Model Registry .
- For additional ways to export models, see Export BigQuery ML models . bq extract --destination format ML XGBOOST BOOSTER -m bqml tutorial.boosted tree iris model gs://some/gcs/path/boosted tree iris model Local deployment and serving In the exported files, there is a main.py file for local run.
- For additional ways to export models, see Exporting BigQuery ML models . bq extract -m bqml tutorial.automl iris model gs://some/gcs/path/automl iris model Local deployment and serving For details about building AutoML containers, see Export AutoML tabular models .

### "Make predictions with remote models on Vertex AI \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/bigquery-ml-remote-model-tutorial](https://docs.cloud.google.com/bigquery/docs/bigquery-ml-remote-model-tutorial)
- Source ID: `site-docs-root`
- Final score: 50
- Re-rank relevance: N/A

Evidence snippets:
- Import the model to the Vertex AI Model Registry In this tutorial you use a pretrained TensorFlow model that is available in Cloud Storage at gs://cloud-samples-data/bigquery/ml/remote model tutorial/ .
- To learn more about model versioning in Vertex AI Model Registry, see Model versioning with Model Registry .
- To learn more about importing models in Vertex AI Model Registry, see Import models to Vertex AI .
- Objectives Import a pretrained TensorFlow model into the Vertex AI Model Registry.

### bq command-line tool reference \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- Source ID: `site-docs-reference`
- Final score: 34
- Re-rank relevance: N/A

Evidence snippets:
- If the configuration setting is not specified, the default value is true ; the query uses legacy SQL. --vertex ai model id= VERTEX AI MODEL ID When specified, updates the model ID for a BigQuery ML model that is registered in the Vertex AI Model Registry. --view= QUERY When specified, updates the SQL query for a view. --view udf resource= FILE Updates the Cloud Storage URI or the path to a local code file that is loaded and evaluated immediately as a user-defined function resource in a view's SQL query.
- To use this flag, you must specify a table definition with the --external table definition flag. --model={true false} or -m={true false} To update metadata for a BigQuery ML model, set to true .
- Use one of the following values: QUERY PIPELINE ML EXTERNAL --model={true false} or -m={true false} To show information about a BigQuery ML model, set to true .
- Possible values are the following: INFO WARNING ERROR --models={true false} or -m={true false} To list BigQuery ML models, set to true .

