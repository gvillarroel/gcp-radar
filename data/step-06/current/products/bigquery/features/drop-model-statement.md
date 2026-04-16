---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.815Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "DROP MODEL statement"
feature_slug: "drop-model-statement"
latest_feature_date: "2019-05-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create"
  - "https://docs.cloud.google.com/bigquery/docs/hyperparameter-tuning-tutorial"
keywords:
  - "drop"
  - "model"
  - "statement"
  - "bigquery"
  - "ml"
  - "supports"
  - "ddl"
  - "deleting"
---

# DROP MODEL statement

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery ML supports the DROP MODEL DDL statement for deleting models.

## Extended Definition

BigQuery ML supports the DROP MODEL DDL statement for deleting models.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create)
- [https://docs.cloud.google.com/bigquery/docs/hyperparameter-tuning-tutorial](https://docs.cloud.google.com/bigquery/docs/hyperparameter-tuning-tutorial)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 157
- Re-rank relevance: N/A

Evidence snippets:
- Examples The following example sets a new description on a table column called price : ALTER TABLE mydataset . mytable ALTER COLUMN price SET OPTIONS ( description = 'Price per unit' ); The following example sets a new description on a view column called total : ALTER VIEW mydataset . myview ALTER COLUMN total SET OPTIONS ( description = 'Total sales of the product' ); ALTER COLUMN DROP NOT NULL statement Removes a NOT NULL constraint from a column in a table in BigQuery.
- Syntax DROP ROW ACCESS POLICY [ IF EXISTS ] row access policy name ON table name ; DROP ALL ROW ACCESS POLICIES ON table name ; Arguments IF EXISTS : If no row-level access policy exists with that name, the statement has no effect. row access policy name : The name of the row-level access policy that you are deleting.
- DROP : The query deleted the DDL target. ddlTargetTable : When you submit a CREATE TABLE/VIEW statement or a DROP TABLE/VIEW statement, the target table is returned as an object with 3 fields: "projectId": string "datasetId": string "tableId": string Java Call the BigQuery.create() method to start a query job.
- Examples The following example removes the NOT NULL constraint from a column called mycolumn : ALTER TABLE mydataset . mytable ALTER COLUMN mycolumn DROP NOT NULL ALTER COLUMN SET DATA TYPE statement Changes the data type of a column in a table in BigQuery to a less restrictive data type.

### The CREATE MODEL statement \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create)
- Source ID: `site-docs-root`
- Final score: 151
- Re-rank relevance: N/A

Evidence snippets:
- You can view specific CREATE MODEL statements by clicking the MODEL TYPE name in the following list, in the table of contents in the left panel, or in the create model link in the End-to-end user journey for each model . { CREATE MODEL CREATE MODEL IF NOT EXISTS CREATE OR REPLACE MODEL } model name [TRANSFORM ( select list )] [INPUT ( field name field type ) OUTPUT ( field name field type )] [REMOTE WITH CONNECTION { connection name DEFAULT}] [OPTIONS( model option list )] [ AS { query statement ( training data AS ( query statement ), custom holiday AS ( holiday statement ) )}] model option list: MODEL TYPE = { 'LINEAR REG' 'LOGISTIC REG' 'KMEANS' 'MATRIX FACTORIZATION' 'PCA' 'AUTOENCODER' 'AUTOML CLASSIFIER' 'AUTOML REGRESSOR' 'BOOSTED TREE CLASSIFIER' 'BOOSTED TREE REGRESSOR' 'RANDOM FOREST CLASSIFIER' 'RANDOM FOREST REGRESSOR' 'DNN CLASSIFIER' 'DNN REGRESSOR' 'DNN LINEAR COMBINED CLASSIFIER' 'DNN LINEAR COMBINED REGRESSOR' 'ARIMA PLUS' 'ARIMA PLUS XREG' 'TENSORFLOW' 'TENSORFLOW LITE' 'ONNX' 'XGBOOST' 'CONTRIBUTION ANALYSIS' } [, MODEL REGISTRY = { 'VERTEX AI' } ] [, VERTEX AI MODEL ID = string value ] [, VERTEX AI MODEL VERSION ALIASES = string array ] [, INPUT LABEL COLS = string array ] [, MAX ITERATIONS = int64 value ] [, EARLY STOP = { TRUE FALSE } ] [, MIN REL PROGRESS = float64 value ] [, DATA SPLIT METHOD = { 'AUTO SPLIT' 'RANDOM' 'CUSTOM' 'SEQ' 'NO SPLIT' } ] [, DATA SPLIT EVAL FRACTION = float64 value ] [, DATA SPLIT TEST FRACTION = float64 value ] [, DATA SPLIT COL = string value ] [, OPTIMIZE STRATEGY = { 'AUTO STRATEGY' 'BATCH GRADIENT DESCENT' 'NORMAL EQUATION' } ] [, L1 REG = float64 value ] [, L2 REG = float64 value ] [, LEARN RATE STRATEGY = { 'LINE SEARCH' 'CONSTANT' } ] [, LEARN RATE = float64 value ] [, LS INIT LEARN RATE = float64 value ] [, WARM START = { TRUE FALSE } ] [, AUTO CLASS WEIGHTS = { TRUE FALSE } ] [, CLASS WEIGHTS = struct array ] [, INSTANCE WEIGHT COL = string value ] [, NUM CLUSTERS = int64 value ] [, KMEANS INIT METHOD = { 'RANDOM' 'KMEANS++' 'CUSTOM' } ] [, KMEANS INIT COL = string value ] [, DISTANCE TYPE = { 'EUCLIDEAN' 'COSINE' } ] [, STANDARDIZE FEATURES = { TRUE FALSE } ] [, MODEL PATH = string value ] [, BUDGET HOURS = float64 value ] [, OPTIMIZATION OBJECTIVE = { string value struct value } ] [, FEEDBACK TYPE = {'EXPLICIT' 'IMPLICIT'} ] [, NUM FACTORS = int64 value ] [, USER COL = string value ] [, ITEM COL = string value ] [, RATING COL = string value ] [, WALS ALPHA = float64 value ] [, BOOSTER TYPE = { 'gbtree' 'dart'} ] [, NUM PARALLEL TREE = int64 value ] [, DART NORMALIZE TYPE = { 'tree' 'forest'} ] [, TREE METHOD = { 'auto' 'exact' 'approx' 'hist'} ] [, MIN TREE CHILD WEIGHT = float64 value ] [, COLSAMPLE BYTREE = float64 value ] [, COLSAMPLE BYLEVEL = float64 value ] [, COLSAMPLE BYNODE = float64 value ] [, MIN SPLIT LOSS = float64 value ] [, MAX TREE DEPTH = int64 value ] [, SUBSAMPLE = float64 value ] [, ACTIVATION FN = { 'RELU' 'RELU6' 'CRELU' 'ELU' 'SELU' 'SIGMOID' 'TANH' } ] [, BATCH SIZE = int64 value ] [, DROPOUT = float64 value ] [, HIDDEN UNITS = int array ] [, OPTIMIZER = { 'ADAGRAD' 'ADAM' 'FTRL' 'RMSPROP' 'SGD' } ] [, TIME SERIES TIMESTAMP COL = string value ] [, TIME SERIES DATA COL = string value ] [, TIME SERIES ID COL = { string value string array } ] [, HORIZON = int64 value ] [, AUTO ARIMA = { TRUE FALSE } ] [, AUTO ARIMA MAX ORDER = int64 value ] [, AUTO ARIMA MIN ORDER = int64 value ] [, NON SEASONAL ORDER = (int64 value, int64 value, int64 value) ] [, DATA FREQUENCY = { 'AUTO FREQUENCY' 'PER MINUTE' 'HOURLY' 'DAILY' 'WEEKLY' ... } ] [, FORECAST LIMIT LOWER BOUND = float64 value ] [, FORECAST LIMIT UPPER BOUND = float64 value ] [, INCLUDE DRIFT = { TRUE FALSE } ] [, HOLIDAY REGION = { 'GLOBAL' 'NA' 'JAPAC' 'EMEA' 'LAC' 'AE' ... } ] [, CLEAN SPIKES AND DIPS = { TRUE FALSE } ] [, ADJUST STEP CHANGES = { TRUE FALSE } ] [, DECOMPOSE TIME SERIES = { TRUE FALSE } ] [, HIERARCHICAL TIME SERIES COLS = { string array } ] [, ENABLE GLOBAL EXPLAIN = { TRUE FALSE } ] [, APPROX GLOBAL FEATURE CONTRIB = { TRUE FALSE }] [, INTEGRATED GRADIENTS NUM STEPS = int64 value ] [, CALCULATE P VALUES = { TRUE FALSE } ] [, FIT INTERCEPT = { TRUE FALSE } ] [, CATEGORY ENCODING METHOD = { 'ONE HOT ENCODING' 'DUMMY ENCODING' 'LABEL ENCODING' 'TARGET ENCODING' } ] [, { ENDPOINT = string value HUGGING FACE MODEL ID = string value MODEL GARDEN MODEL NAME = string value } ] [, HUGGING FACE TOKEN = string value ] [, MACHINE TYPE = string value ] [, MIN REPLICA COUNT = int64 value ] [, MAX REPLICA COUNT = int64 value ] [, RESERVATION AFFINITY TYPE = { 'NO RESERVATION' 'ANY RESERVATION' 'SPECIFIC RESERVATION' } ] [, RESERVATION AFFINITY KEY = string value ] [, RESERVATION AFFINITY VALUES = string array ] [, ENDPOINT IDLE TTL = interval value ] [, REMOTE SERVICE TYPE = { 'CLOUD AI VISION V1' 'CLOUD AI NATURAL LANGUAGE V1' 'CLOUD AI TRANSLATE V3' } ] [, XGBOOST VERSION = { '0.9' '1.1' } ] [, TF VERSION = { '1.15' '2.8.0' '2.17.0' } ] [, NUM TRIALS = int64 value , ] [, MAX PARALLEL TRIALS = int64 value ] [, HPARAM TUNING ALGORITHM = { 'VIZIER DEFAULT' 'RANDOM SEARCH' 'GRID SEARCH' } ] [, HPARAM TUNING OBJECTIVES = { 'R2 SCORE' 'ROC AUC' ... } ] [, NUM PRINCIPAL COMPONENTS = int64 value ] [, PCA EXPLAINED VARIANCE RATIO = float64 value ] [, SCALE FEATURES = { TRUE FALSE } ] [, PCA SOLVER = { 'FULL' 'RANDOMIZED' 'AUTO' } ] [, TIME SERIES LENGTH FRACTION = float64 value ] [, MIN TIME SERIES LENGTH = int64 value ] [, MAX TIME SERIES LENGTH = int64 value ] [, TREND SMOOTHING WINDOW SIZE = int64 value ] [, SEASONALITIES = string array ] [, PROMPT COL = string value ] [, LEARNING RATE MULTIPLIER = float64 value ] [, ACCELERATOR TYPE = { 'GPU' 'TPU' } ] [, EVALUATION TASK = { 'TEXT GENERATION' 'CLASSIFICATION' 'SUMMARIZATION' 'QUESTION ANSWERING' 'UNSPECIFIED' } ] [, DOCUMENT PROCESSOR = string value ] [, SPEECH RECOGNIZER = string value ] [, KMS KEY NAME = string value ] [, CONTRIBUTION METRIC = string value ] [, DIMENSION ID COLS = string array ] [, IS TEST COL = string value ] [, MIN APRIORI SUPPORT = float64 value ] [, PRUNING METHOD = {'NO PRUNING', 'PRUNE REDUNDANT INSIGHTS'} ] [, TOP K INSIGHTS BY APRIORI SUPPORT = int64 value ] CREATE MODEL Creates and trains a new model in the specified dataset.
- For example, if you have time series data from 2018 to 2022 and would like to forecast for 2023, you get the best result by providing the custom holiday information for all of those years, similar to the following: CREATE OR REPLACE MODEL mydataset.arima model OPTIONS ( model type = 'ARIMA PLUS' , holiday region = 'US' ,...) AS ( training data AS ( SELECT FROM mydataset.timeseries data ), custom holiday AS ( SELECT 'US' AS region , 'Halloween' AS holiday name , primary date , 5 AS preholiday days , 1 AS postholiday days FROM UNNEST ( [ DATE ( '2018-10-31' ), DATE ( '2019-10-31' ), DATE ( '2020-10-31' ), DATE ( '2021-10-31' ), DATE ( '2022-10-31' ), DATE ( '2023-10-31' ) ] ) AS primary date ) ) Supported inputs The CREATE MODEL statement supports the following data types for input label, data split columns and input feature columns.
- For more information about supported SQL statements and functions for each model type, see the following documents: End-to-end user journeys for generative AI models End-to-end user journeys for time series forecasting models End-to-end user journeys for ML models End-to-end user journeys for imported models Contribution analysis user journey Required permissions To create a dataset to store the model, you need the bigquery.datasets.create IAM permission.
- To try using the TRANSFORM clause, try the Use the BigQuery ML TRANSFORM clause for feature engineering tutorial or the Create Model With Inline Transpose notebook. select list You can pass columns from query statement through to model training without transformation by either using , EXCEPT() , or by listing the column names directly.

### "Improve model performance with hyperparameter tuning \_|\_ BigQuery \_|\_\

- URL: [https://docs.cloud.google.com/bigquery/docs/hyperparameter-tuning-tutorial](https://docs.cloud.google.com/bigquery/docs/hyperparameter-tuning-tutorial)
- Source ID: `site-docs-reference-2`
- Final score: 117
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- PREDICT ( MODEL bqml tutorial.hp taxi tip model , ( SELECT FROM bqml tutorial.taxi tip input LIMIT 5 )); The results look similar to the following: +----------+--------------------+-----------+---------------------+---------------------+-----------------+---------------+-----------+--------------------+--------------+-------------+-------+---------+--------------+---------------+--------------+--------------------+---------------------+----------------+-----------------+-------+ trial id predicted label vendor id pickup datetime dropoff datetime passenger count trip distance rate code store and fwd flag payment type fare amount extra mta tax tolls amount imp surcharge total amount pickup location id dropoff location id data file year data file month label +----------+--------------------+-----------+---------------------+---------------------+-----------------+---------------+-----------+--------------------+--------------+-------------+-------+---------+--------------+---------------+--------------+--------------------+---------------------+----------------+-----------------+-------+ 7 1.343367839584448 2 2018-01-15 18:55:15 2018-01-15 18:56:18 1 0 1 N 1 0 0 0 0 0 0 193 193 2018 1 0 7 -1.176072791783461 1 2018-01-08 10:26:24 2018-01-08 10:26:37 1 0 5 N 3 0.01 0 0 0 0.3 0.31 158 158 2018 1 0 7 3.839580104168765 1 2018-01-22 10:58:02 2018-01-22 12:01:11 1 16.1 1 N 1 54.5 0 0.5 0 0.3 55.3 140 91 2018 1 0 7 4.677393985230036 1 2018-01-16 10:14:35 2018-01-16 11:07:28 1 18 1 N 2 54.5 0 0.5 0 0.3 55.3 138 67 2018 1 0 7 7.938988937253062 2 2018-01-16 07:05:15 2018-01-16 08:06:31 1 17.8 1 N 1 54.5 0 0.5 0 0.3 66.36 132 255 2018 1 11.06 +----------+--------------------+-----------+---------------------+---------------------+-----------------+---------------+-----------+--------------------+--------------+-------------+-------+---------+--------------+---------------+--------------+--------------------+---------------------+----------------+-----------------+-------+ Clean up To avoid incurring charges to your Google Cloud account for the resources used in this tutorial, either delete the project that contains the resources, or keep the project and delete the individual resources.
- Go to BigQuery In the query editor, paste in the following query and click Run : CREATE OR REPLACE TABLE bqml tutorial.taxi tip input AS SELECT EXCEPT ( tip amount ), tip amount AS label FROM bigquery-public-data.new york taxi trips.tlc yellow trips 2018 WHERE tip amount IS NOT NULL LIMIT 100000 ; Create a baseline linear regression model Create a linear regression model without hyperparameter tuning and train it on the taxi tip input table data.
- Go to BigQuery In the query editor, paste in the following query and click Run : CREATE OR REPLACE MODEL bqml tutorial.hp taxi tip model OPTIONS ( MODEL TYPE = 'LINEAR REG' , NUM TRIALS = 20 , MAX PARALLEL TRIALS = 2 , L1 REG = HPARAM RANGE ( 0 , 5 )) AS SELECT FROM bqml tutorial.taxi tip input ; The query takes approximately 20 minutes to complete.
- To create the model, you need the following permissions: bigquery.jobs.create bigquery.models.create bigquery.models.getData bigquery.models.updateData To run inference, you need the following permissions: bigquery.models.getData bigquery.jobs.create For more information about IAM roles and permissions in BigQuery, see Introduction to IAM .

