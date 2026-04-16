---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.293Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "JSON function path mode"
feature_slug: "json-function-path-mode"
latest_feature_date: "2025-09-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions"
  - "https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql"
  - "https://docs.cloud.google.com/bigquery/docs/export-model-tutorial"
keywords:
  - "json"
  - "path"
  - "mode"
  - "some"
  - "bigquery"
  - "functions"
  - "option"
  - "jsonpath"
---

# JSON function path mode

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Some BigQuery JSON functions support a mode option for JSONPath matching flexibility.

## Extended Definition

Some BigQuery JSON functions support a mode option for JSONPath matching flexibility.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions)
- [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)
- [https://docs.cloud.google.com/bigquery/docs/export-model-tutorial](https://docs.cloud.google.com/bigquery/docs/export-model-tutorial)

## Supporting Pages

### JSON functions \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions)
- Source ID: `site-docs-reference-required-8`
- Final score: 234
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- JSON-formatted string: '{"a": [["b", "c"], "d"], "e":"f"}' JSON path: "$.a[0][1]" JSON result: "c" Modes for JSONPath Some JSON functions that take a JSONPath let you specify a mode that indicates how the JSONPath matches the JSON data structure.
- The following modes are supported: Mode Description Example JSONPath strict (default) The JSONPath must structurally match the JSON data "$.class.students" lax Implicitly adapts the path to the structure of the JSON data.
- If this optional parameter isn't provided, then the JSONPath $ symbol is applied, which means that all of the data is analyzed.
- If this optional parameter isn't provided, then the JSONPath $ symbol is applied, which means that all of the data is analyzed.

### "Legacy SQL Syntax, Functions and Operators \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)
- Source ID: `site-docs-reference`
- Final score: 175
- Re-rank relevance: N/A

Evidence snippets:
- Examples: PARSE PACKED IP('48.49.50.51') returns 'MDEyMw==' PARSE PACKED IP('3031:3233:3435:3637:3839:4041:4243:4445') returns 'MDEyMzQ1Njc4OUBBQkNERQ==' JSON functions BigQuery's JSON functions give you the ability to find values within your stored JSON data, by using JSONPath -like expressions.
- Syntax JSON functions JSON EXTRACT() Selects a value according to the JSONPath expression and returns a JSON string.
- JSON functions JSON EXTRACT() Selects a value according to the JSONPath expression and returns a JSON string.
- JSON EXTRACT SCALAR( json , json path ) Selects a value in json according to the JSONPath expression json path . json path must be a string constant.

### Export a BigQuery ML model for online prediction \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/export-model-tutorial](https://docs.cloud.google.com/bigquery/docs/export-model-tutorial)
- Source ID: `site-docs-reference`
- Final score: 171
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- 3) (optional) Get information about your new version: gcloud ai-platform versions describe $VERSION NAME --model $MODEL NAME You should see output similar to this: createTime : ' 2020 - 02 - 07 T00 : 35 : 42 Z ' deploymentUri : gs : //some/gcs/path/boosted tree iris model etag : rp090ebEnQk = machineType : mls1 - c1 - m2 name : projects / [ YOUR - PROJECT - ID ] / models / BOOSTED TREE IRIS MODEL / versions / v1 packageUris : - gs : //some/gcs/path/boosted tree iris model/xgboost predictor-0.1.tar.gz predictionClass : predictor .
- Copy exported model files to a local directory mkdir automl serving dir gcloud storage cp gs://some/gcs/path/automl iris model/ automl serving dir/ --recursive Pull AutoML Docker image docker pull gcr.io/cloud-automl-tables-public/model server Start Docker container docker run - v pwd / automl serving dir :/ models / default / 0000001 - p 8080 : 8080 - it gcr . io / cloud - automl - tables - public / model server Run the prediction 1) Create a newline-delimited JSON file for inputs.
- For additional ways to export models, see Export BigQuery ML models . bq extract --destination format ML XGBOOST BOOSTER -m bqml tutorial.boosted tree iris model gs://some/gcs/path/boosted tree iris model Local deployment and serving In the exported files, there is a main.py file for local run.
- For additional ways to export models, see Exporting BigQuery ML models . bq extract -m bqml tutorial.automl iris model gs://some/gcs/path/automl iris model Local deployment and serving For details about building AutoML containers, see Export AutoML tabular models .

