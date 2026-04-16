---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.781Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "XGBoost boosted tree models in BigQuery ML"
feature_slug: "xgboost-boosted-tree-models-in-bigquery-ml"
latest_feature_date: "2020-06-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/boosted-tree-classifier-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create"
  - "https://docs.cloud.google.com/bigquery/docs/export-model-tutorial"
keywords:
  - "xgboost"
  - "boosted"
  - "tree"
  - "models"
  - "bigquery"
  - "ml"
  - "supports"
  - "through"
---

# XGBoost boosted tree models in BigQuery ML

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery ML supports boosted tree models using XGBoost through preview AI Platform integration.

## Extended Definition

BigQuery ML supports boosted tree models using XGBoost through preview AI Platform integration.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/boosted-tree-classifier-tutorial](https://docs.cloud.google.com/bigquery/docs/boosted-tree-classifier-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create)
- [https://docs.cloud.google.com/bigquery/docs/export-model-tutorial](https://docs.cloud.google.com/bigquery/docs/export-model-tutorial)

## Supporting Pages

### "Perform classification with a boosted trees model \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/boosted-tree-classifier-tutorial](https://docs.cloud.google.com/bigquery/docs/boosted-tree-classifier-tutorial)
- Source ID: `site-docs-reference`
- Final score: 161
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Go to BigQuery In the query editor, paste in the following query and click Run : CREATE MODEL bqml tutorial.tree model OPTIONS ( MODEL TYPE = 'BOOSTED TREE CLASSIFIER' , BOOSTER TYPE = 'GBTREE' , NUM PARALLEL TREE = 1 , MAX ITERATIONS = 50 , TREE METHOD = 'HIST' , EARLY STOP = FALSE , SUBSAMPLE = 0.85 , INPUT LABEL COLS = [ 'income bracket' ] ) AS SELECT EXCEPT ( dataframe ) FROM bqml tutorial.input data WHERE dataframe = 'training' ; After the query completes, the tree model model can be accessed through the Explorer pane.
- Home Documentation Data analytics BigQuery Guides Send feedback Perform classification with a boosted trees model Stay organized with collections Save and categorize content based on your preferences.
- Objectives This tutorial guides you through completing the following tasks: Creating a boosted trees model to predict census respondents' income bracket by using the CREATE MODEL statement .
- PREDICT ( MODEL bqml tutorial.tree model , ( SELECT FROM bqml tutorial.input data WHERE dataframe = 'prediction' ) ); The first few columns of the results should look similar to the following: +---------------------------+--------------------------------------+-------------------------------------+ predicted income bracket predicted income bracket probs.label predicted income bracket probs.prob +---------------------------+--------------------------------------+-------------------------------------+ <=50K >50K 0.05183430016040802 +---------------------------+--------------------------------------+-------------------------------------+ <50K 0.94816571474075317 +---------------------------+--------------------------------------+-------------------------------------+ <=50K >50K 0.00365859130397439 +---------------------------+--------------------------------------+-------------------------------------+ <50K 0.99634140729904175 +---------------------------+--------------------------------------+-------------------------------------+ <=50K >50K 0.037775970995426178 +---------------------------+--------------------------------------+-------------------------------------+ <50K 0.96222406625747681 +---------------------------+--------------------------------------+-------------------------------------+ BigQuery DataFrames Before trying this sample, follow the BigQuery DataFrames setup instructions in the BigQuery quickstart using BigQuery DataFrames .

### The CREATE MODEL statement \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create)
- Source ID: `site-docs-root`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- To use a default connection , specify specify DEFAULT instead of the connection name. model option list CREATE MODEL supports the following options: MODEL TYPE Syntax MODEL TYPE = { 'LINEAR REG' 'LOGISTIC REG' 'KMEANS' 'PCA' 'MATRIX FACTORIZATION' 'AUTOENCODER' 'AUTOML REGRESSOR' 'AUTOML CLASSIFIER' 'BOOSTED TREE CLASSIFIER' 'BOOSTED TREE REGRESSOR' 'RANDOM FOREST CLASSIFIER' 'RANDOM FOREST REGRESSOR' 'DNN CLASSIFIER' 'DNN REGRESSOR' 'DNN LINEAR COMBINED CLASSIFIER' 'DNN LINEAR COMBINED REGRESSOR' 'ARIMA PLUS' 'ARIMA PLUS XREG' 'TENSORFLOW' 'TENSORFLOW LITE' 'ONNX' 'XGBOOST' 'CONTRIBUTION ANALYSIS' } Description Specify the model type.
- CREATE MODEL statement for generalized linear models 'BOOSTED TREE CLASSIFIER' Create a boosted tree classifier model using the XGBoost library.
- CREATE MODEL statement for generalized linear models 'BOOSTED TREE REGRESSOR' Create a boosted tree regressor model using the XGBoost library.
- CREATE MODEL statement for boosted tree models 'RANDOM FOREST CLASSIFIER' Create a random forest classifier model using the XGBoost library.

### Export a BigQuery ML model for online prediction \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/export-model-tutorial](https://docs.cloud.google.com/bigquery/docs/export-model-tutorial)
- Source ID: `site-docs-reference`
- Final score: 124
- Re-rank relevance: N/A

Evidence snippets:
- For additional ways to export models, see Export BigQuery ML models . bq extract --destination format ML XGBOOST BOOSTER -m bqml tutorial.boosted tree iris model gs://some/gcs/path/boosted tree iris model Local deployment and serving In the exported files, there is a main.py file for local run.
- 3) (optional) Get information about your new version: gcloud ai-platform versions describe $VERSION NAME --model $MODEL NAME You should see output similar to this: createTime : ' 2020 - 02 - 07 T00 : 35 : 42 Z ' deploymentUri : gs : //some/gcs/path/boosted tree iris model etag : rp090ebEnQk = machineType : mls1 - c1 - m2 name : projects / [ YOUR - PROJECT - ID ] / models / BOOSTED TREE IRIS MODEL / versions / v1 packageUris : - gs : //some/gcs/path/boosted tree iris model/xgboost predictor-0.1.tar.gz predictionClass : predictor .
- Create a model resource MODEL NAME="BOOSTED TREE IRIS MODEL" gcloud ai-platform models create $MODEL NAME Create a model version 1) Set the environment variables: MODEL DIR="gs://some/gcs/path/boosted tree iris model" VERSION NAME="v1" 2) Create the version: gcloud beta ai-platform versions create $VERSION NAME --model= $MODEL NAME --origin= $MODEL DIR --package-uris= ${ MODEL DIR } /xgboost predictor-0.1.tar.gz --prediction-class=predictor.Predictor --runtime-version=1.15 This step might take a few minutes to complete.
- This training job should take approximately 7 minutes to complete. bq query -- use legacy sql = false \ 'CREATE MODEL bqml tutorial.boosted tree iris model OPTIONS (model type="boosted tree classifier", max iterations=10, input label cols=["species"]) AS SELECT FROM bigquery-public-data.ml datasets.iris;' Export the model Export the model to a Cloud Storage bucket using the bq command-line tool .

