---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.776Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Matrix Factorization models"
feature_slug: "matrix-factorization-models"
latest_feature_date: "2020-08-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/bigqueryml-mf-explicit-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/bigqueryml-mf-implicit-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create"
keywords:
  - "matrix"
  - "factorization"
  - "models"
  - "bigquery"
  - "ml"
  - "supports"
  - "recommendation"
  - "workloads"
---

# Matrix Factorization models

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery ML supports Matrix Factorization models for recommendation workloads; BigQuery ML supports Matrix Factorization models for recommendation workloads.

## Extended Definition

BigQuery ML supports Matrix Factorization models for recommendation workloads; BigQuery ML supports Matrix Factorization models for recommendation workloads.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/bigqueryml-mf-explicit-tutorial](https://docs.cloud.google.com/bigquery/docs/bigqueryml-mf-explicit-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/bigqueryml-mf-implicit-tutorial](https://docs.cloud.google.com/bigquery/docs/bigqueryml-mf-implicit-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create)

## Supporting Pages

### "Create recommendations based on explicit feedback with a matrix factorization\

- URL: [https://docs.cloud.google.com/bigquery/docs/bigqueryml-mf-explicit-tutorial](https://docs.cloud.google.com/bigquery/docs/bigqueryml-mf-explicit-tutorial)
- Source ID: `site-docs-reference`
- Final score: 207
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Data analytics BigQuery Guides Send feedback Create recommendations based on explicit feedback with a matrix factorization model Stay organized with collections Save and categorize content based on your preferences.
- Go to BigQuery In the query editor, paste in the following query and click Run : CREATE OR REPLACE MODEL bqml tutorial.mf explicit OPTIONS ( MODEL TYPE = 'matrix factorization' , FEEDBACK TYPE = 'explicit' , USER COL = 'user id' , ITEM COL = 'item id' , L2 REG = 9.83 , NUM FACTORS = 34 ) AS SELECT user id , item id , rating FROM bqml tutorial.ratings ; The query takes about 10 minutes to complete, after which the mf explicit model appears in the Explorer pane.
- For more information, see Set up ADC for a local development environment . from bigframes.ml import decomposition import bigframes.pandas as bpd Load data from BigQuery bq df = bpd . read gbq ( "bqml tutorial.ratings" , columns = ( "user id" , "item id" , "rating" ) ) Create the Matrix Factorization model model = decomposition .
- Matrix factorization models are trained using the Alternating Least Squares algorithm when you use explicit feedback as training data.

### "Create recommendations based on implicit feedback with a matrix factorization\

- URL: [https://docs.cloud.google.com/bigquery/docs/bigqueryml-mf-implicit-tutorial](https://docs.cloud.google.com/bigquery/docs/bigqueryml-mf-implicit-tutorial)
- Source ID: `site-docs-reference`
- Final score: 207
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Data analytics BigQuery Guides Send feedback Create recommendations based on implicit feedback with a matrix factorization model Stay organized with collections Save and categorize content based on your preferences.
- Go to BigQuery In the query editor, paste in the following query and click Run : CREATE OR REPLACE MODEL bqml tutorial.mf implicit OPTIONS ( MODEL TYPE = 'matrix factorization' , FEEDBACK TYPE = 'implicit' , USER COL = 'visitorId' , ITEM COL = 'contentId' , RATING COL = 'rating' , L2 REG = 30 , NUM FACTORS = 15 ) AS SELECT visitorId , contentId , 0.3 ( 1 + ( session duration - 57937 ) / 57937 ) AS rating FROM bqml tutorial.analytics session data WHERE 0.3 ( 1 + ( session duration - 57937 ) / 57937 ) 1 ; The query takes about 10 minutes to complete, after which the mf implicit model appears in the Explorer pane.
- Matrix factorization models are trained using the Weighted-Alternating Least Squares algorithm when you use implicit feedback as training data.
- You then use the matrix factorization model to generate content recommendations for site users.

### The CREATE MODEL statement \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create)
- Source ID: `site-docs-root`
- Final score: 155
- Re-rank relevance: N/A

Evidence snippets:
- CREATE MODEL statement for K-means models Collaborative Filtering 'MATRIX FACTORIZATION' Matrix factorization for recommendation systems.
- To use a default connection , specify specify DEFAULT instead of the connection name. model option list CREATE MODEL supports the following options: MODEL TYPE Syntax MODEL TYPE = { 'LINEAR REG' 'LOGISTIC REG' 'KMEANS' 'PCA' 'MATRIX FACTORIZATION' 'AUTOENCODER' 'AUTOML REGRESSOR' 'AUTOML CLASSIFIER' 'BOOSTED TREE CLASSIFIER' 'BOOSTED TREE REGRESSOR' 'RANDOM FOREST CLASSIFIER' 'RANDOM FOREST REGRESSOR' 'DNN CLASSIFIER' 'DNN REGRESSOR' 'DNN LINEAR COMBINED CLASSIFIER' 'DNN LINEAR COMBINED REGRESSOR' 'ARIMA PLUS' 'ARIMA PLUS XREG' 'TENSORFLOW' 'TENSORFLOW LITE' 'ONNX' 'XGBOOST' 'CONTRIBUTION ANALYSIS' } Description Specify the model type.
- Supported data types for input label cols include: Model type Supported label types regression models INT64 NUMERIC BIGNUMERIC FLOAT64 classification models Any groupable data type Supported data types for data split columns BigQuery ML supports different GoogleSQL data types depending on the data split method.
- Imported TensorFlow model , Imported TensorFlow lite model , Imported ONNX model , Imported XGBoost model FEEDBACK TYPE Specifies feedback type for matrix factorization models which changes the algorithm that is used during training.

