---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.798Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery ML model export for online prediction"
feature_slug: "bigquery-ml-model-export-for-online-prediction"
latest_feature_date: "2020-11-23"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/export-model-tutorial"
keywords:
  - "online prediction"
  - "BQML model export"
  - "model artifact"
  - "model to GCS"
  - "export model to Cloud Storage"
  - "BigQuery ML model export"
  - "EXPORT MODEL"
---

# BigQuery ML model export for online prediction

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery ML made exporting models to Cloud Storage and using them for online prediction generally available; BigQuery ML now supports exporting models to Cloud Storage and using them for online prediction in beta.

## Extended Definition

BigQuery ML made exporting models to Cloud Storage and using them for online prediction generally available; BigQuery ML now supports exporting models to Cloud Storage and using them for online prediction in beta.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/export-model-tutorial](https://docs.cloud.google.com/bigquery/docs/export-model-tutorial)

## Supporting Pages

### Export a BigQuery ML model for online prediction \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/export-model-tutorial](https://docs.cloud.google.com/bigquery/docs/export-model-tutorial)
- Source ID: `site-docs-root-2`
- Final score: 78
- Re-rank relevance: STRONG
- Re-rank rationale: This is the tutorial’s primary subject and it explains exporting models and deploying them for online prediction.

Evidence snippets:
- 3) (optional) Get information about your new version: gcloud ai-platform versions describe $VERSION NAME --model $MODEL NAME You should see output similar to this: createTime: '2020-02-28T16:30:45Z' deploymentUri: gs://your bucket name framework: TENSORFLOW machineType: mls1-c1-m2 name: projects/[YOUR-PROJECT-ID]/models/IRIS MODEL/versions/v1 pythonVersion: '2.7' runtimeVersion: '1.15' state: READY Online prediction For more information about running online predictions against a deployed model, see Get online inferences from a custom trained model .
- For example, input.json file with the following contents: {"instances": [{"sepal length":5.0, "sepal width":2.0, "petal length":3.5, "petal width":1.0}, {"sepal length":5.3, "sepal width":3.7, "petal length":1.5, "petal width":0.2}]} 2) Make the predict call: curl - X POST --data @input.json http://localhost:8080/predict Online deployment and serving Online prediction for AutoML regressor and AutoML classifier models is not supported in Vertex AI.
- For additional ways to export models, see Export BigQuery ML models . bq extract --destination format ML XGBOOST BOOSTER -m bqml tutorial.boosted tree iris model gs://some/gcs/path/boosted tree iris model Local deployment and serving In the exported files, there is a main.py file for local run.
- For additional ways to export models, see Exporting BigQuery ML models . bq extract -m bqml tutorial.automl iris model gs://some/gcs/path/automl iris model Local deployment and serving For details about building AutoML containers, see Export AutoML tabular models .

