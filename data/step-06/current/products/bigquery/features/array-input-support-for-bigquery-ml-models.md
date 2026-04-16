---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.561Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "ARRAY input support for BigQuery ML models"
feature_slug: "array-input-support-for-bigquery-ml-models"
latest_feature_date: "2023-08-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create"
  - "https://docs.cloud.google.com/bigquery/docs/inference-tutorial-mobilenet"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-types"
keywords:
  - "array"
  - "input"
  - "bigquery"
  - "ml"
  - "models"
  - "supports"
  - "type"
  - "feature"
---

# ARRAY input support for BigQuery ML models

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery ML supports the ARRAY type as an input feature type for models.

## Extended Definition

BigQuery ML supports the ARRAY type as an input feature type for models.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create)
- [https://docs.cloud.google.com/bigquery/docs/inference-tutorial-mobilenet](https://docs.cloud.google.com/bigquery/docs/inference-tutorial-mobilenet)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-types](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-types)

## Supporting Pages

### The CREATE MODEL statement \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create)
- Source ID: `site-docs-root`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- See XGBoost INPUT OUTPUT clause for more details. field type Remote models support the following BigQuery data types for INPUT and OUTPUT clauses: Simple type: BOOL , INT64 , FLOAT64 , NUMERIC , BIGNUMERIC , STRING ARRAY <Simple type> XGBoost models only support numeric types for the INPUT field type and FLOAT64 for the OUTPUT field type. connection name BigQuery uses a CLOUD RESOURCE connection to interact with your Vertex AI endpoint.
- Supported data types for input label cols include: Model type Supported label types regression models INT64 NUMERIC BIGNUMERIC FLOAT64 classification models Any groupable data type Supported data types for data split columns BigQuery ML supports different GoogleSQL data types depending on the data split method.
- You can view specific CREATE MODEL statements by clicking the MODEL TYPE name in the following list, in the table of contents in the left panel, or in the create model link in the End-to-end user journey for each model . { CREATE MODEL CREATE MODEL IF NOT EXISTS CREATE OR REPLACE MODEL } model name [TRANSFORM ( select list )] [INPUT ( field name field type ) OUTPUT ( field name field type )] [REMOTE WITH CONNECTION { connection name DEFAULT}] [OPTIONS( model option list )] [ AS { query statement ( training data AS ( query statement ), custom holiday AS ( holiday statement ) )}] model option list: MODEL TYPE = { 'LINEAR REG' 'LOGISTIC REG' 'KMEANS' 'MATRIX FACTORIZATION' 'PCA' 'AUTOENCODER' 'AUTOML CLASSIFIER' 'AUTOML REGRESSOR' 'BOOSTED TREE CLASSIFIER' 'BOOSTED TREE REGRESSOR' 'RANDOM FOREST CLASSIFIER' 'RANDOM FOREST REGRESSOR' 'DNN CLASSIFIER' 'DNN REGRESSOR' 'DNN LINEAR COMBINED CLASSIFIER' 'DNN LINEAR COMBINED REGRESSOR' 'ARIMA PLUS' 'ARIMA PLUS XREG' 'TENSORFLOW' 'TENSORFLOW LITE' 'ONNX' 'XGBOOST' 'CONTRIBUTION ANALYSIS' } [, MODEL REGISTRY = { 'VERTEX AI' } ] [, VERTEX AI MODEL ID = string value ] [, VERTEX AI MODEL VERSION ALIASES = string array ] [, INPUT LABEL COLS = string array ] [, MAX ITERATIONS = int64 value ] [, EARLY STOP = { TRUE FALSE } ] [, MIN REL PROGRESS = float64 value ] [, DATA SPLIT METHOD = { 'AUTO SPLIT' 'RANDOM' 'CUSTOM' 'SEQ' 'NO SPLIT' } ] [, DATA SPLIT EVAL FRACTION = float64 value ] [, DATA SPLIT TEST FRACTION = float64 value ] [, DATA SPLIT COL = string value ] [, OPTIMIZE STRATEGY = { 'AUTO STRATEGY' 'BATCH GRADIENT DESCENT' 'NORMAL EQUATION' } ] [, L1 REG = float64 value ] [, L2 REG = float64 value ] [, LEARN RATE STRATEGY = { 'LINE SEARCH' 'CONSTANT' } ] [, LEARN RATE = float64 value ] [, LS INIT LEARN RATE = float64 value ] [, WARM START = { TRUE FALSE } ] [, AUTO CLASS WEIGHTS = { TRUE FALSE } ] [, CLASS WEIGHTS = struct array ] [, INSTANCE WEIGHT COL = string value ] [, NUM CLUSTERS = int64 value ] [, KMEANS INIT METHOD = { 'RANDOM' 'KMEANS++' 'CUSTOM' } ] [, KMEANS INIT COL = string value ] [, DISTANCE TYPE = { 'EUCLIDEAN' 'COSINE' } ] [, STANDARDIZE FEATURES = { TRUE FALSE } ] [, MODEL PATH = string value ] [, BUDGET HOURS = float64 value ] [, OPTIMIZATION OBJECTIVE = { string value struct value } ] [, FEEDBACK TYPE = {'EXPLICIT' 'IMPLICIT'} ] [, NUM FACTORS = int64 value ] [, USER COL = string value ] [, ITEM COL = string value ] [, RATING COL = string value ] [, WALS ALPHA = float64 value ] [, BOOSTER TYPE = { 'gbtree' 'dart'} ] [, NUM PARALLEL TREE = int64 value ] [, DART NORMALIZE TYPE = { 'tree' 'forest'} ] [, TREE METHOD = { 'auto' 'exact' 'approx' 'hist'} ] [, MIN TREE CHILD WEIGHT = float64 value ] [, COLSAMPLE BYTREE = float64 value ] [, COLSAMPLE BYLEVEL = float64 value ] [, COLSAMPLE BYNODE = float64 value ] [, MIN SPLIT LOSS = float64 value ] [, MAX TREE DEPTH = int64 value ] [, SUBSAMPLE = float64 value ] [, ACTIVATION FN = { 'RELU' 'RELU6' 'CRELU' 'ELU' 'SELU' 'SIGMOID' 'TANH' } ] [, BATCH SIZE = int64 value ] [, DROPOUT = float64 value ] [, HIDDEN UNITS = int array ] [, OPTIMIZER = { 'ADAGRAD' 'ADAM' 'FTRL' 'RMSPROP' 'SGD' } ] [, TIME SERIES TIMESTAMP COL = string value ] [, TIME SERIES DATA COL = string value ] [, TIME SERIES ID COL = { string value string array } ] [, HORIZON = int64 value ] [, AUTO ARIMA = { TRUE FALSE } ] [, AUTO ARIMA MAX ORDER = int64 value ] [, AUTO ARIMA MIN ORDER = int64 value ] [, NON SEASONAL ORDER = (int64 value, int64 value, int64 value) ] [, DATA FREQUENCY = { 'AUTO FREQUENCY' 'PER MINUTE' 'HOURLY' 'DAILY' 'WEEKLY' ... } ] [, FORECAST LIMIT LOWER BOUND = float64 value ] [, FORECAST LIMIT UPPER BOUND = float64 value ] [, INCLUDE DRIFT = { TRUE FALSE } ] [, HOLIDAY REGION = { 'GLOBAL' 'NA' 'JAPAC' 'EMEA' 'LAC' 'AE' ... } ] [, CLEAN SPIKES AND DIPS = { TRUE FALSE } ] [, ADJUST STEP CHANGES = { TRUE FALSE } ] [, DECOMPOSE TIME SERIES = { TRUE FALSE } ] [, HIERARCHICAL TIME SERIES COLS = { string array } ] [, ENABLE GLOBAL EXPLAIN = { TRUE FALSE } ] [, APPROX GLOBAL FEATURE CONTRIB = { TRUE FALSE }] [, INTEGRATED GRADIENTS NUM STEPS = int64 value ] [, CALCULATE P VALUES = { TRUE FALSE } ] [, FIT INTERCEPT = { TRUE FALSE } ] [, CATEGORY ENCODING METHOD = { 'ONE HOT ENCODING' 'DUMMY ENCODING' 'LABEL ENCODING' 'TARGET ENCODING' } ] [, { ENDPOINT = string value HUGGING FACE MODEL ID = string value MODEL GARDEN MODEL NAME = string value } ] [, HUGGING FACE TOKEN = string value ] [, MACHINE TYPE = string value ] [, MIN REPLICA COUNT = int64 value ] [, MAX REPLICA COUNT = int64 value ] [, RESERVATION AFFINITY TYPE = { 'NO RESERVATION' 'ANY RESERVATION' 'SPECIFIC RESERVATION' } ] [, RESERVATION AFFINITY KEY = string value ] [, RESERVATION AFFINITY VALUES = string array ] [, ENDPOINT IDLE TTL = interval value ] [, REMOTE SERVICE TYPE = { 'CLOUD AI VISION V1' 'CLOUD AI NATURAL LANGUAGE V1' 'CLOUD AI TRANSLATE V3' } ] [, XGBOOST VERSION = { '0.9' '1.1' } ] [, TF VERSION = { '1.15' '2.8.0' '2.17.0' } ] [, NUM TRIALS = int64 value , ] [, MAX PARALLEL TRIALS = int64 value ] [, HPARAM TUNING ALGORITHM = { 'VIZIER DEFAULT' 'RANDOM SEARCH' 'GRID SEARCH' } ] [, HPARAM TUNING OBJECTIVES = { 'R2 SCORE' 'ROC AUC' ... } ] [, NUM PRINCIPAL COMPONENTS = int64 value ] [, PCA EXPLAINED VARIANCE RATIO = float64 value ] [, SCALE FEATURES = { TRUE FALSE } ] [, PCA SOLVER = { 'FULL' 'RANDOMIZED' 'AUTO' } ] [, TIME SERIES LENGTH FRACTION = float64 value ] [, MIN TIME SERIES LENGTH = int64 value ] [, MAX TIME SERIES LENGTH = int64 value ] [, TREND SMOOTHING WINDOW SIZE = int64 value ] [, SEASONALITIES = string array ] [, PROMPT COL = string value ] [, LEARNING RATE MULTIPLIER = float64 value ] [, ACCELERATOR TYPE = { 'GPU' 'TPU' } ] [, EVALUATION TASK = { 'TEXT GENERATION' 'CLASSIFICATION' 'SUMMARIZATION' 'QUESTION ANSWERING' 'UNSPECIFIED' } ] [, DOCUMENT PROCESSOR = string value ] [, SPEECH RECOGNIZER = string value ] [, KMS KEY NAME = string value ] [, CONTRIBUTION METRIC = string value ] [, DIMENSION ID COLS = string array ] [, IS TEST COL = string value ] [, MIN APRIORI SUPPORT = float64 value ] [, PRUNING METHOD = {'NO PRUNING', 'PRUNE REDUNDANT INSIGHTS'} ] [, TOP K INSIGHTS BY APRIORI SUPPORT = int64 value ] CREATE MODEL Creates and trains a new model in the specified dataset.
- For example, if you have time series data from 2018 to 2022 and would like to forecast for 2023, you get the best result by providing the custom holiday information for all of those years, similar to the following: CREATE OR REPLACE MODEL mydataset.arima model OPTIONS ( model type = 'ARIMA PLUS' , holiday region = 'US' ,...) AS ( training data AS ( SELECT FROM mydataset.timeseries data ), custom holiday AS ( SELECT 'US' AS region , 'Halloween' AS holiday name , primary date , 5 AS preholiday days , 1 AS postholiday days FROM UNNEST ( [ DATE ( '2018-10-31' ), DATE ( '2019-10-31' ), DATE ( '2020-10-31' ), DATE ( '2021-10-31' ), DATE ( '2022-10-31' ), DATE ( '2023-10-31' ) ] ) AS primary date ) ) Supported inputs The CREATE MODEL statement supports the following data types for input label, data split columns and input feature columns.

### "Tutorial: Run inference on an object table by using a feature vector model\

- URL: [https://docs.cloud.google.com/bigquery/docs/inference-tutorial-mobilenet](https://docs.cloud.google.com/bigquery/docs/inference-tutorial-mobilenet)
- Source ID: `site-docs-reference-2`
- Final score: 156
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To load the model into BigQuery ML, you need the following permissions: bigquery.jobs.create bigquery.models.create bigquery.models.getData bigquery.models.updateData To run inference, you need the following permissions: bigquery.tables.getData on the object table bigquery.models.getData on the model bigquery.jobs.create Costs In this document, you use the following billable components of Google Cloud: BigQuery : You incur storage costs for the object table you create in BigQuery.
- DECODE IMAGE ( data ), 224 , 224 , FALSE ) AS inputs FROM mobilenet inference test . sample images ) ); The results should look similar to the following: -------------------------------------------------------------------------------------------------------------- feature vector uri inputs — ------------------------------------------------------------------------------------------------------------- 0 .
- Go to BigQuery In the Editor pane, run the following SQL statement: CREATE MODEL mobilenet inference test.mobilenet OPTIONS ( model type = 'TENSORFLOW' , model path = 'gs:// BUCKET NAME /mobilenet/ ' ); Replace BUCKET NAME with the name of the bucket you previously created.
- Enable the APIs Create a reservation To use an imported model with an object table, you must create a reservation that uses the BigQuery Enterprise or Enterprise Plus edition , and then create a reservation assignment that uses the QUERY job type.

### Data types \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-types](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-types)
- Source ID: `site-docs-reference`
- Final score: 149
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- NULL s and the array type Currently, GoogleSQL for BigQuery has the following rules with respect to NULL s and arrays: An array can be NULL .
- For example, this query returns the current DATE and the following DATE s at 1 WEEK intervals up to and including a later DATE : SELECT GENERATE DATE ARRAY ( '2017-11-21' , '2017-12-31' , INTERVAL 1 WEEK ) AS date array ; / --------------------------------------------------------------------------+ date array +--------------------------------------------------------------------------+ [2017-11-21, 2017-11-28, 2017-12-05, 2017-12-12, 2017-12-19, 2017-12-26] +-------------------------------------------------------------------------- / Boolean type Name Description BOOL BOOLEAN Boolean values are represented by the keywords TRUE and FALSE (case-insensitive).
- If you write Items to a table from the previous query, then each array is written as an empty array: SELECT numbers , description , numbers IS NULL AS numbers null FROM Items ; / ---------+----------------------+--------------+ numbers description numbers null +---------+----------------------+--------------+ [] Empty array in query false [] NULL array in query false +---------+----------------------+-------------- / GoogleSQL for BigQuery raises an error if the query result has an array which contains NULL elements, although such an array can be used inside the query.
- Special floating point values are grouped in the following way, including both grouping done by a GROUP BY clause and grouping done by the DISTINCT keyword: NULL NaN — All NaN values are considered equal when grouping. -inf 0 or -0 — All zero values are considered equal when grouping. +inf Grouping with arrays An ARRAY type is groupable if its element type is groupable.

