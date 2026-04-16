---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.636Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Sparse input support in BigQuery ML"
feature_slug: "sparse-input-support-in-bigquery-ml"
latest_feature_date: "2023-01-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create"
  - "https://docs.cloud.google.com/bigquery/docs/boosted-tree-classifier-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/create-machine-learning-model"
keywords:
  - "sparse"
  - "input"
  - "bigquery"
  - "ml"
  - "model"
  - "training"
  - "supports"
  - "mostly"
---

# Sparse input support in BigQuery ML

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery ML model training supports sparse input data with mostly zero or empty values.

## Extended Definition

BigQuery ML model training supports sparse input data with mostly zero or empty values.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create)
- [https://docs.cloud.google.com/bigquery/docs/boosted-tree-classifier-tutorial](https://docs.cloud.google.com/bigquery/docs/boosted-tree-classifier-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/create-machine-learning-model](https://docs.cloud.google.com/bigquery/docs/create-machine-learning-model)

## Supporting Pages

### The CREATE MODEL statement \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create)
- Source ID: `site-docs-root`
- Final score: 117
- Re-rank relevance: N/A

Evidence snippets:
- For example, if you have time series data from 2018 to 2022 and would like to forecast for 2023, you get the best result by providing the custom holiday information for all of those years, similar to the following: CREATE OR REPLACE MODEL mydataset.arima model OPTIONS ( model type = 'ARIMA PLUS' , holiday region = 'US' ,...) AS ( training data AS ( SELECT FROM mydataset.timeseries data ), custom holiday AS ( SELECT 'US' AS region , 'Halloween' AS holiday name , primary date , 5 AS preholiday days , 1 AS postholiday days FROM UNNEST ( [ DATE ( '2018-10-31' ), DATE ( '2019-10-31' ), DATE ( '2020-10-31' ), DATE ( '2021-10-31' ), DATE ( '2022-10-31' ), DATE ( '2023-10-31' ) ] ) AS primary date ) ) Supported inputs The CREATE MODEL statement supports the following data types for input label, data split columns and input feature columns.
- Supported data types for input label cols include: Model type Supported label types regression models INT64 NUMERIC BIGNUMERIC FLOAT64 classification models Any groupable data type Supported data types for data split columns BigQuery ML supports different GoogleSQL data types depending on the data split method.
- Supported data types for input label columns BigQuery ML supports different GoogleSQL data types depending on the model type.
- You can view specific CREATE MODEL statements by clicking the MODEL TYPE name in the following list, in the table of contents in the left panel, or in the create model link in the End-to-end user journey for each model . { CREATE MODEL CREATE MODEL IF NOT EXISTS CREATE OR REPLACE MODEL } model name [TRANSFORM ( select list )] [INPUT ( field name field type ) OUTPUT ( field name field type )] [REMOTE WITH CONNECTION { connection name DEFAULT}] [OPTIONS( model option list )] [ AS { query statement ( training data AS ( query statement ), custom holiday AS ( holiday statement ) )}] model option list: MODEL TYPE = { 'LINEAR REG' 'LOGISTIC REG' 'KMEANS' 'MATRIX FACTORIZATION' 'PCA' 'AUTOENCODER' 'AUTOML CLASSIFIER' 'AUTOML REGRESSOR' 'BOOSTED TREE CLASSIFIER' 'BOOSTED TREE REGRESSOR' 'RANDOM FOREST CLASSIFIER' 'RANDOM FOREST REGRESSOR' 'DNN CLASSIFIER' 'DNN REGRESSOR' 'DNN LINEAR COMBINED CLASSIFIER' 'DNN LINEAR COMBINED REGRESSOR' 'ARIMA PLUS' 'ARIMA PLUS XREG' 'TENSORFLOW' 'TENSORFLOW LITE' 'ONNX' 'XGBOOST' 'CONTRIBUTION ANALYSIS' } [, MODEL REGISTRY = { 'VERTEX AI' } ] [, VERTEX AI MODEL ID = string value ] [, VERTEX AI MODEL VERSION ALIASES = string array ] [, INPUT LABEL COLS = string array ] [, MAX ITERATIONS = int64 value ] [, EARLY STOP = { TRUE FALSE } ] [, MIN REL PROGRESS = float64 value ] [, DATA SPLIT METHOD = { 'AUTO SPLIT' 'RANDOM' 'CUSTOM' 'SEQ' 'NO SPLIT' } ] [, DATA SPLIT EVAL FRACTION = float64 value ] [, DATA SPLIT TEST FRACTION = float64 value ] [, DATA SPLIT COL = string value ] [, OPTIMIZE STRATEGY = { 'AUTO STRATEGY' 'BATCH GRADIENT DESCENT' 'NORMAL EQUATION' } ] [, L1 REG = float64 value ] [, L2 REG = float64 value ] [, LEARN RATE STRATEGY = { 'LINE SEARCH' 'CONSTANT' } ] [, LEARN RATE = float64 value ] [, LS INIT LEARN RATE = float64 value ] [, WARM START = { TRUE FALSE } ] [, AUTO CLASS WEIGHTS = { TRUE FALSE } ] [, CLASS WEIGHTS = struct array ] [, INSTANCE WEIGHT COL = string value ] [, NUM CLUSTERS = int64 value ] [, KMEANS INIT METHOD = { 'RANDOM' 'KMEANS++' 'CUSTOM' } ] [, KMEANS INIT COL = string value ] [, DISTANCE TYPE = { 'EUCLIDEAN' 'COSINE' } ] [, STANDARDIZE FEATURES = { TRUE FALSE } ] [, MODEL PATH = string value ] [, BUDGET HOURS = float64 value ] [, OPTIMIZATION OBJECTIVE = { string value struct value } ] [, FEEDBACK TYPE = {'EXPLICIT' 'IMPLICIT'} ] [, NUM FACTORS = int64 value ] [, USER COL = string value ] [, ITEM COL = string value ] [, RATING COL = string value ] [, WALS ALPHA = float64 value ] [, BOOSTER TYPE = { 'gbtree' 'dart'} ] [, NUM PARALLEL TREE = int64 value ] [, DART NORMALIZE TYPE = { 'tree' 'forest'} ] [, TREE METHOD = { 'auto' 'exact' 'approx' 'hist'} ] [, MIN TREE CHILD WEIGHT = float64 value ] [, COLSAMPLE BYTREE = float64 value ] [, COLSAMPLE BYLEVEL = float64 value ] [, COLSAMPLE BYNODE = float64 value ] [, MIN SPLIT LOSS = float64 value ] [, MAX TREE DEPTH = int64 value ] [, SUBSAMPLE = float64 value ] [, ACTIVATION FN = { 'RELU' 'RELU6' 'CRELU' 'ELU' 'SELU' 'SIGMOID' 'TANH' } ] [, BATCH SIZE = int64 value ] [, DROPOUT = float64 value ] [, HIDDEN UNITS = int array ] [, OPTIMIZER = { 'ADAGRAD' 'ADAM' 'FTRL' 'RMSPROP' 'SGD' } ] [, TIME SERIES TIMESTAMP COL = string value ] [, TIME SERIES DATA COL = string value ] [, TIME SERIES ID COL = { string value string array } ] [, HORIZON = int64 value ] [, AUTO ARIMA = { TRUE FALSE } ] [, AUTO ARIMA MAX ORDER = int64 value ] [, AUTO ARIMA MIN ORDER = int64 value ] [, NON SEASONAL ORDER = (int64 value, int64 value, int64 value) ] [, DATA FREQUENCY = { 'AUTO FREQUENCY' 'PER MINUTE' 'HOURLY' 'DAILY' 'WEEKLY' ... } ] [, FORECAST LIMIT LOWER BOUND = float64 value ] [, FORECAST LIMIT UPPER BOUND = float64 value ] [, INCLUDE DRIFT = { TRUE FALSE } ] [, HOLIDAY REGION = { 'GLOBAL' 'NA' 'JAPAC' 'EMEA' 'LAC' 'AE' ... } ] [, CLEAN SPIKES AND DIPS = { TRUE FALSE } ] [, ADJUST STEP CHANGES = { TRUE FALSE } ] [, DECOMPOSE TIME SERIES = { TRUE FALSE } ] [, HIERARCHICAL TIME SERIES COLS = { string array } ] [, ENABLE GLOBAL EXPLAIN = { TRUE FALSE } ] [, APPROX GLOBAL FEATURE CONTRIB = { TRUE FALSE }] [, INTEGRATED GRADIENTS NUM STEPS = int64 value ] [, CALCULATE P VALUES = { TRUE FALSE } ] [, FIT INTERCEPT = { TRUE FALSE } ] [, CATEGORY ENCODING METHOD = { 'ONE HOT ENCODING' 'DUMMY ENCODING' 'LABEL ENCODING' 'TARGET ENCODING' } ] [, { ENDPOINT = string value HUGGING FACE MODEL ID = string value MODEL GARDEN MODEL NAME = string value } ] [, HUGGING FACE TOKEN = string value ] [, MACHINE TYPE = string value ] [, MIN REPLICA COUNT = int64 value ] [, MAX REPLICA COUNT = int64 value ] [, RESERVATION AFFINITY TYPE = { 'NO RESERVATION' 'ANY RESERVATION' 'SPECIFIC RESERVATION' } ] [, RESERVATION AFFINITY KEY = string value ] [, RESERVATION AFFINITY VALUES = string array ] [, ENDPOINT IDLE TTL = interval value ] [, REMOTE SERVICE TYPE = { 'CLOUD AI VISION V1' 'CLOUD AI NATURAL LANGUAGE V1' 'CLOUD AI TRANSLATE V3' } ] [, XGBOOST VERSION = { '0.9' '1.1' } ] [, TF VERSION = { '1.15' '2.8.0' '2.17.0' } ] [, NUM TRIALS = int64 value , ] [, MAX PARALLEL TRIALS = int64 value ] [, HPARAM TUNING ALGORITHM = { 'VIZIER DEFAULT' 'RANDOM SEARCH' 'GRID SEARCH' } ] [, HPARAM TUNING OBJECTIVES = { 'R2 SCORE' 'ROC AUC' ... } ] [, NUM PRINCIPAL COMPONENTS = int64 value ] [, PCA EXPLAINED VARIANCE RATIO = float64 value ] [, SCALE FEATURES = { TRUE FALSE } ] [, PCA SOLVER = { 'FULL' 'RANDOMIZED' 'AUTO' } ] [, TIME SERIES LENGTH FRACTION = float64 value ] [, MIN TIME SERIES LENGTH = int64 value ] [, MAX TIME SERIES LENGTH = int64 value ] [, TREND SMOOTHING WINDOW SIZE = int64 value ] [, SEASONALITIES = string array ] [, PROMPT COL = string value ] [, LEARNING RATE MULTIPLIER = float64 value ] [, ACCELERATOR TYPE = { 'GPU' 'TPU' } ] [, EVALUATION TASK = { 'TEXT GENERATION' 'CLASSIFICATION' 'SUMMARIZATION' 'QUESTION ANSWERING' 'UNSPECIFIED' } ] [, DOCUMENT PROCESSOR = string value ] [, SPEECH RECOGNIZER = string value ] [, KMS KEY NAME = string value ] [, CONTRIBUTION METRIC = string value ] [, DIMENSION ID COLS = string array ] [, IS TEST COL = string value ] [, MIN APRIORI SUPPORT = float64 value ] [, PRUNING METHOD = {'NO PRUNING', 'PRUNE REDUNDANT INSIGHTS'} ] [, TOP K INSIGHTS BY APRIORI SUPPORT = int64 value ] CREATE MODEL Creates and trains a new model in the specified dataset.

### "Perform classification with a boosted trees model \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/boosted-tree-classifier-tutorial](https://docs.cloud.google.com/bigquery/docs/boosted-tree-classifier-tutorial)
- Source ID: `site-docs-reference`
- Final score: 105
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Go to BigQuery In the query editor, paste in the following query and click Run : CREATE MODEL bqml tutorial.tree model OPTIONS ( MODEL TYPE = 'BOOSTED TREE CLASSIFIER' , BOOSTER TYPE = 'GBTREE' , NUM PARALLEL TREE = 1 , MAX ITERATIONS = 50 , TREE METHOD = 'HIST' , EARLY STOP = FALSE , SUBSAMPLE = 0.85 , INPUT LABEL COLS = [ 'income bracket' ] ) AS SELECT EXCEPT ( dataframe ) FROM bqml tutorial.input data WHERE dataframe = 'training' ; After the query completes, the tree model model can be accessed through the Explorer pane.
- PREDICT ( MODEL bqml tutorial.tree model , ( SELECT FROM bqml tutorial.input data WHERE dataframe = 'prediction' ) ); The first few columns of the results should look similar to the following: +---------------------------+--------------------------------------+-------------------------------------+ predicted income bracket predicted income bracket probs.label predicted income bracket probs.prob +---------------------------+--------------------------------------+-------------------------------------+ <=50K >50K 0.05183430016040802 +---------------------------+--------------------------------------+-------------------------------------+ <50K 0.94816571474075317 +---------------------------+--------------------------------------+-------------------------------------+ <=50K >50K 0.00365859130397439 +---------------------------+--------------------------------------+-------------------------------------+ <50K 0.99634140729904175 +---------------------------+--------------------------------------+-------------------------------------+ <=50K >50K 0.037775970995426178 +---------------------------+--------------------------------------+-------------------------------------+ <50K 0.96222406625747681 +---------------------------+--------------------------------------+-------------------------------------+ BigQuery DataFrames Before trying this sample, follow the BigQuery DataFrames setup instructions in the BigQuery quickstart using BigQuery DataFrames .
- EVALUATE ( MODEL bqml tutorial.tree model , ( SELECT FROM bqml tutorial.input data WHERE dataframe = 'evaluation' ) ); The results should look similar to the following: +---------------------+---------------------+---------------------+-------------------+---------------------+---------------------+ precision recall accuracy f1 score log loss roc auc +---------------------+---------------------+---------------------+-------------------+-------------------------------------------+ 0.67192429022082023 0.57880434782608692 0.83942963422194672 0.621897810218978 0.34405456040833338 0.88733566433566435 +---------------------+---------------------+ --------------------+-------------------+---------------------+---------------------+ BigQuery DataFrames Before trying this sample, follow the BigQuery DataFrames setup instructions in the BigQuery quickstart using BigQuery DataFrames .
- Select model you'll use for predictions. read gbq model loads model data from BigQuery, but you could also use the tree model object from previous steps. tree model = bpd . read gbq model ( your model id , # For example: "your-project.bqml tutorial.tree model" ) input data is defined in an earlier step. prediction data = input data [ input data [ "dataframe" ] == "prediction" ] predictions = tree model . predict ( prediction data ) predictions . peek () Output: predicted income bracket predicted income bracket probs.label predicted income bracket probs.prob <=50K >50K 0.05183430016040802 <50K 0.94816571474075317 <=50K >50K 0.00365859130397439 <50K 0.99634140729904175 <=50K >50K 0.037775970995426178 <50K 0.96222406625747681 The predicted income bracket contains the predicted value from the model.

### Create an ML model in BigQuery ML by using SQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/create-machine-learning-model](https://docs.cloud.google.com/bigquery/docs/create-machine-learning-model)
- Source ID: `site-docs-root`
- Final score: 105
- Re-rank relevance: N/A

Evidence snippets:
- When training the model, BigQuery ML automatically splits the input data into training and evaluation sets , in order to avoid overfitting the model.
- Use the Google Cloud console to see how the model's loss changes over the model's training iterations: In the Google Cloud console, go to the BigQuery page.
- EVALUATE ( MODEL bqml tutorial.sample model , ( SELECT IF ( totals . transactions IS NULL , 0 , 1 ) AS label , IFNULL ( device . operatingSystem , "" ) AS os , device . isMobile AS is mobile , IFNULL ( geoNetwork . country , "" ) AS country , IFNULL ( totals . pageviews , 0 ) AS pageviews FROM bigquery-public-data.google analytics sample.ga sessions WHERE TABLE SUFFIX BETWEEN '20170701' AND '20170801' )) The results should look like the following: +--------------------+---------------------+---------------------+---------------------+---------------------+--------------------+ precision recall accuracy f1 score log loss roc auc +--------------------+---------------------+---------------------+---------------------+---------------------+--------------------+ 0.468503937007874 0.11080074487895716 0.98534315834767638 0.17921686746987953 0.04624221101176898 0.98174125874125873 +--------------------+---------------------+---------------------+---------------------+---------------------+--------------------+ Because you performed a logistic regression, the results include the following columns: precision : a metric for classification models.
- PREDICT ( MODEL bqml tutorial.sample model , ( SELECT IFNULL ( device . operatingSystem , "" ) AS os , device . isMobile AS is mobile , IFNULL ( totals . pageviews , 0 ) AS pageviews , IFNULL ( geoNetwork . country , "" ) AS country , fullVisitorId FROM bigquery-public-data.google analytics sample.ga sessions WHERE TABLE SUFFIX BETWEEN '20170701' AND '20170801' )) GROUP BY fullVisitorId ORDER BY total predicted purchases DESC LIMIT 10 The results should look like the following: +---------------------+---------------------------+ fullVisitorId total predicted purchases +---------------------+---------------------------+ 9417857471295131045 4 112288330928895942 2 2158257269735455737 2 489038402765684003 2 057693500927581077 2 2969418676126258798 2 5073919761051630191 2 7420300501523012460 2 0456807427403774085 2 2105122376016897629 2 +---------------------+---------------------------+ BigQuery DataFrames Before trying this sample, follow the BigQuery DataFrames setup instructions in the BigQuery quickstart using BigQuery DataFrames .

