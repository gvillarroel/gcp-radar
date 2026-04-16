---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.703Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery ML autoencoder model"
feature_slug: "bigquery-ml-autoencoder-model"
latest_feature_date: "2021-12-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create"
  - "https://docs.cloud.google.com/bigquery/docs/generate-text-embedding-tutorial-open-models"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-e2e-journey"
keywords:
  - "bigquery"
  - "ml"
  - "autoencoder"
  - "model"
  - "supports"
  - "models"
  - "feature"
  - "embedding"
---

# BigQuery ML autoencoder model

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery ML supports autoencoder models for feature embedding and unsupervised anomaly detection.

## Extended Definition

BigQuery ML supports autoencoder models for feature embedding and unsupervised anomaly detection.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create)
- [https://docs.cloud.google.com/bigquery/docs/generate-text-embedding-tutorial-open-models](https://docs.cloud.google.com/bigquery/docs/generate-text-embedding-tutorial-open-models)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-e2e-journey](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-e2e-journey)

## Supporting Pages

### "Generate text embeddings by using an open model and the AI.GENERATE_EMBEDDING\

- URL: [https://docs.cloud.google.com/bigquery/docs/generate-text-embedding-tutorial-open-models](https://docs.cloud.google.com/bigquery/docs/generate-text-embedding-tutorial-open-models)
- Source ID: `site-docs-reference`
- Final score: 155
- Re-rank relevance: N/A

Evidence snippets:
- Set service account permissions: resourcemanager.projects.getIamPolicy and resourcemanager.projects.setIamPolicy Deploy and undeploy a Vertex AI model: aiplatform.endpoints.deploy aiplatform.endpoints.undeploy Create a model and run inference: bigquery.jobs.create bigquery.models.create bigquery.models.getData bigquery.models.updateData bigquery.models.updateMetadata You might also be able to get these permissions with custom roles or other predefined roles .
- Go to BigQuery In the query editor, run the following statement: CREATE OR REPLACE MODEL bqml tutorial . qwen3 embedding model REMOTE WITH CONNECTION DEFAULT OPTIONS ( HUGGING FACE MODEL ID = 'Qwen/Qwen3-Embedding-0.6B' ); The query takes up to 20 minutes to complete, after which the qwen3 embedding model model appears in the bqml tutorial dataset in the Explorer pane.
- Generate text embeddings by using an open model and the AI.GENERATE EMBEDDING function This tutorial shows you how to create a remote model that's based on the open-source text embedding model Qwen3-Embedding-0.6B , and then how to use that model with the AI.GENERATE EMBEDDING function to embed movie reviews from the bigquery-public-data.imdb.reviews public table.
- GENERATE EMBEDDING ( MODEL bqml tutorial . qwen3 embedding model , ( SELECT review AS content , FROM bigquery - public - data . imdb . reviews LIMIT 5 ) ); The results include the following columns: embedding : an array of double to represent the generated embeddings. status : the API response status for the corresponding row.

### The CREATE MODEL statement \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create)
- Source ID: `site-docs-root`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- Supported data types for input label cols include: Model type Supported label types regression models INT64 NUMERIC BIGNUMERIC FLOAT64 classification models Any groupable data type Supported data types for data split columns BigQuery ML supports different GoogleSQL data types depending on the data split method.
- CREATE MODEL statement for PCA models 'AUTOENCODER' Create an Autoencoder model for anomaly detection, dimensionality reduction, and embedding purposes.
- You can view specific CREATE MODEL statements by clicking the MODEL TYPE name in the following list, in the table of contents in the left panel, or in the create model link in the End-to-end user journey for each model . { CREATE MODEL CREATE MODEL IF NOT EXISTS CREATE OR REPLACE MODEL } model name [TRANSFORM ( select list )] [INPUT ( field name field type ) OUTPUT ( field name field type )] [REMOTE WITH CONNECTION { connection name DEFAULT}] [OPTIONS( model option list )] [ AS { query statement ( training data AS ( query statement ), custom holiday AS ( holiday statement ) )}] model option list: MODEL TYPE = { 'LINEAR REG' 'LOGISTIC REG' 'KMEANS' 'MATRIX FACTORIZATION' 'PCA' 'AUTOENCODER' 'AUTOML CLASSIFIER' 'AUTOML REGRESSOR' 'BOOSTED TREE CLASSIFIER' 'BOOSTED TREE REGRESSOR' 'RANDOM FOREST CLASSIFIER' 'RANDOM FOREST REGRESSOR' 'DNN CLASSIFIER' 'DNN REGRESSOR' 'DNN LINEAR COMBINED CLASSIFIER' 'DNN LINEAR COMBINED REGRESSOR' 'ARIMA PLUS' 'ARIMA PLUS XREG' 'TENSORFLOW' 'TENSORFLOW LITE' 'ONNX' 'XGBOOST' 'CONTRIBUTION ANALYSIS' } [, MODEL REGISTRY = { 'VERTEX AI' } ] [, VERTEX AI MODEL ID = string value ] [, VERTEX AI MODEL VERSION ALIASES = string array ] [, INPUT LABEL COLS = string array ] [, MAX ITERATIONS = int64 value ] [, EARLY STOP = { TRUE FALSE } ] [, MIN REL PROGRESS = float64 value ] [, DATA SPLIT METHOD = { 'AUTO SPLIT' 'RANDOM' 'CUSTOM' 'SEQ' 'NO SPLIT' } ] [, DATA SPLIT EVAL FRACTION = float64 value ] [, DATA SPLIT TEST FRACTION = float64 value ] [, DATA SPLIT COL = string value ] [, OPTIMIZE STRATEGY = { 'AUTO STRATEGY' 'BATCH GRADIENT DESCENT' 'NORMAL EQUATION' } ] [, L1 REG = float64 value ] [, L2 REG = float64 value ] [, LEARN RATE STRATEGY = { 'LINE SEARCH' 'CONSTANT' } ] [, LEARN RATE = float64 value ] [, LS INIT LEARN RATE = float64 value ] [, WARM START = { TRUE FALSE } ] [, AUTO CLASS WEIGHTS = { TRUE FALSE } ] [, CLASS WEIGHTS = struct array ] [, INSTANCE WEIGHT COL = string value ] [, NUM CLUSTERS = int64 value ] [, KMEANS INIT METHOD = { 'RANDOM' 'KMEANS++' 'CUSTOM' } ] [, KMEANS INIT COL = string value ] [, DISTANCE TYPE = { 'EUCLIDEAN' 'COSINE' } ] [, STANDARDIZE FEATURES = { TRUE FALSE } ] [, MODEL PATH = string value ] [, BUDGET HOURS = float64 value ] [, OPTIMIZATION OBJECTIVE = { string value struct value } ] [, FEEDBACK TYPE = {'EXPLICIT' 'IMPLICIT'} ] [, NUM FACTORS = int64 value ] [, USER COL = string value ] [, ITEM COL = string value ] [, RATING COL = string value ] [, WALS ALPHA = float64 value ] [, BOOSTER TYPE = { 'gbtree' 'dart'} ] [, NUM PARALLEL TREE = int64 value ] [, DART NORMALIZE TYPE = { 'tree' 'forest'} ] [, TREE METHOD = { 'auto' 'exact' 'approx' 'hist'} ] [, MIN TREE CHILD WEIGHT = float64 value ] [, COLSAMPLE BYTREE = float64 value ] [, COLSAMPLE BYLEVEL = float64 value ] [, COLSAMPLE BYNODE = float64 value ] [, MIN SPLIT LOSS = float64 value ] [, MAX TREE DEPTH = int64 value ] [, SUBSAMPLE = float64 value ] [, ACTIVATION FN = { 'RELU' 'RELU6' 'CRELU' 'ELU' 'SELU' 'SIGMOID' 'TANH' } ] [, BATCH SIZE = int64 value ] [, DROPOUT = float64 value ] [, HIDDEN UNITS = int array ] [, OPTIMIZER = { 'ADAGRAD' 'ADAM' 'FTRL' 'RMSPROP' 'SGD' } ] [, TIME SERIES TIMESTAMP COL = string value ] [, TIME SERIES DATA COL = string value ] [, TIME SERIES ID COL = { string value string array } ] [, HORIZON = int64 value ] [, AUTO ARIMA = { TRUE FALSE } ] [, AUTO ARIMA MAX ORDER = int64 value ] [, AUTO ARIMA MIN ORDER = int64 value ] [, NON SEASONAL ORDER = (int64 value, int64 value, int64 value) ] [, DATA FREQUENCY = { 'AUTO FREQUENCY' 'PER MINUTE' 'HOURLY' 'DAILY' 'WEEKLY' ... } ] [, FORECAST LIMIT LOWER BOUND = float64 value ] [, FORECAST LIMIT UPPER BOUND = float64 value ] [, INCLUDE DRIFT = { TRUE FALSE } ] [, HOLIDAY REGION = { 'GLOBAL' 'NA' 'JAPAC' 'EMEA' 'LAC' 'AE' ... } ] [, CLEAN SPIKES AND DIPS = { TRUE FALSE } ] [, ADJUST STEP CHANGES = { TRUE FALSE } ] [, DECOMPOSE TIME SERIES = { TRUE FALSE } ] [, HIERARCHICAL TIME SERIES COLS = { string array } ] [, ENABLE GLOBAL EXPLAIN = { TRUE FALSE } ] [, APPROX GLOBAL FEATURE CONTRIB = { TRUE FALSE }] [, INTEGRATED GRADIENTS NUM STEPS = int64 value ] [, CALCULATE P VALUES = { TRUE FALSE } ] [, FIT INTERCEPT = { TRUE FALSE } ] [, CATEGORY ENCODING METHOD = { 'ONE HOT ENCODING' 'DUMMY ENCODING' 'LABEL ENCODING' 'TARGET ENCODING' } ] [, { ENDPOINT = string value HUGGING FACE MODEL ID = string value MODEL GARDEN MODEL NAME = string value } ] [, HUGGING FACE TOKEN = string value ] [, MACHINE TYPE = string value ] [, MIN REPLICA COUNT = int64 value ] [, MAX REPLICA COUNT = int64 value ] [, RESERVATION AFFINITY TYPE = { 'NO RESERVATION' 'ANY RESERVATION' 'SPECIFIC RESERVATION' } ] [, RESERVATION AFFINITY KEY = string value ] [, RESERVATION AFFINITY VALUES = string array ] [, ENDPOINT IDLE TTL = interval value ] [, REMOTE SERVICE TYPE = { 'CLOUD AI VISION V1' 'CLOUD AI NATURAL LANGUAGE V1' 'CLOUD AI TRANSLATE V3' } ] [, XGBOOST VERSION = { '0.9' '1.1' } ] [, TF VERSION = { '1.15' '2.8.0' '2.17.0' } ] [, NUM TRIALS = int64 value , ] [, MAX PARALLEL TRIALS = int64 value ] [, HPARAM TUNING ALGORITHM = { 'VIZIER DEFAULT' 'RANDOM SEARCH' 'GRID SEARCH' } ] [, HPARAM TUNING OBJECTIVES = { 'R2 SCORE' 'ROC AUC' ... } ] [, NUM PRINCIPAL COMPONENTS = int64 value ] [, PCA EXPLAINED VARIANCE RATIO = float64 value ] [, SCALE FEATURES = { TRUE FALSE } ] [, PCA SOLVER = { 'FULL' 'RANDOMIZED' 'AUTO' } ] [, TIME SERIES LENGTH FRACTION = float64 value ] [, MIN TIME SERIES LENGTH = int64 value ] [, MAX TIME SERIES LENGTH = int64 value ] [, TREND SMOOTHING WINDOW SIZE = int64 value ] [, SEASONALITIES = string array ] [, PROMPT COL = string value ] [, LEARNING RATE MULTIPLIER = float64 value ] [, ACCELERATOR TYPE = { 'GPU' 'TPU' } ] [, EVALUATION TASK = { 'TEXT GENERATION' 'CLASSIFICATION' 'SUMMARIZATION' 'QUESTION ANSWERING' 'UNSPECIFIED' } ] [, DOCUMENT PROCESSOR = string value ] [, SPEECH RECOGNIZER = string value ] [, KMS KEY NAME = string value ] [, CONTRIBUTION METRIC = string value ] [, DIMENSION ID COLS = string array ] [, IS TEST COL = string value ] [, MIN APRIORI SUPPORT = float64 value ] [, PRUNING METHOD = {'NO PRUNING', 'PRUNE REDUNDANT INSIGHTS'} ] [, TOP K INSIGHTS BY APRIORI SUPPORT = int64 value ] CREATE MODEL Creates and trains a new model in the specified dataset.
- For example, if you have time series data from 2018 to 2022 and would like to forecast for 2023, you get the best result by providing the custom holiday information for all of those years, similar to the following: CREATE OR REPLACE MODEL mydataset.arima model OPTIONS ( model type = 'ARIMA PLUS' , holiday region = 'US' ,...) AS ( training data AS ( SELECT FROM mydataset.timeseries data ), custom holiday AS ( SELECT 'US' AS region , 'Halloween' AS holiday name , primary date , 5 AS preholiday days , 1 AS postholiday days FROM UNNEST ( [ DATE ( '2018-10-31' ), DATE ( '2019-10-31' ), DATE ( '2020-10-31' ), DATE ( '2021-10-31' ), DATE ( '2022-10-31' ), DATE ( '2023-10-31' ) ] ) AS primary date ) ) Supported inputs The CREATE MODEL statement supports the following data types for input label, data split columns and input feature columns.

### "End-to-end user journeys for ML models \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-e2e-journey](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-e2e-journey)
- Source ID: `site-docs-root`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- Model use user journeys The following table describes the statements and functions you can use to evaluate, explain, and get predictions from models: Model category Model type Evaluation Inference AI explanation Model monitoring Supervised learning Linear & logistic regression ML.EVALUATE ML.CONFUSION MATRIX 1 ML.ROC CURVE 2 ML.PREDICT ML.TRANSFORM ML.EXPLAIN PREDICT 3 ML.GLOBAL EXPLAIN ML.ADVANCED WEIGHTS 5 ML.DESCRIBE DATA ML.VALIDATE DATA DRIFT ML.VALIDATE DATA SKEW ML.TFDV DESCRIBE ML.TFDV VALIDATE Deep neural networks (DNN) ML.EVALUATE ML.CONFUSION MATRIX 1 ML.ROC CURVE 2 ML.PREDICT ML.TRANSFORM ML.EXPLAIN PREDICT 3 ML.GLOBAL EXPLAIN ML.ADVANCED WEIGHTS 5 ML.DESCRIBE DATA ML.VALIDATE DATA DRIFT ML.VALIDATE DATA SKEW ML.TFDV DESCRIBE ML.TFDV VALIDATE Wide & Deep networks ML.EVALUATE ML.CONFUSION MATRIX 1 ML.ROC CURVE 2 ML.PREDICT ML.TRANSFORM ML.EXPLAIN PREDICT 3 ML.GLOBAL EXPLAIN ML.ADVANCED WEIGHTS 5 ML.DESCRIBE DATA ML.VALIDATE DATA DRIFT ML.VALIDATE DATA SKEW ML.TFDV DESCRIBE ML.TFDV VALIDATE Boosted trees ML.EVALUATE ML.CONFUSION MATRIX 1 ML.ROC CURVE 2 ML.PREDICT ML.TRANSFORM ML.EXPLAIN PREDICT 3 ML.GLOBAL EXPLAIN ML.FEATURE IMPORTANCE 4 ML.DESCRIBE DATA ML.VALIDATE DATA DRIFT ML.VALIDATE DATA SKEW ML.TFDV DESCRIBE ML.TFDV VALIDATE Random forest ML.EVALUATE ML.CONFUSION MATRIX 1 ML.ROC CURVE 2 ML.PREDICT ML.TRANSFORM ML.EXPLAIN PREDICT 3 ML.GLOBAL EXPLAIN ML.FEATURE IMPORTANCE 4 ML.DESCRIBE DATA ML.VALIDATE DATA DRIFT ML.VALIDATE DATA SKEW ML.TFDV DESCRIBE ML.TFDV VALIDATE AutoML classification & regression ML.EVALUATE ML.CONFUSION MATRIX 1 ML.ROC CURVE 2 ML.PREDICT ML.GLOBAL EXPLAIN ML.DESCRIBE DATA ML.VALIDATE DATA DRIFT ML.VALIDATE DATA SKEW ML.TFDV DESCRIBE ML.TFDV VALIDATE Unsupervised learning K-means ML.EVALUATE ML.PREDICT ML.DETECT ANOMALIES ML.TRANSFORM N/A ML.DESCRIBE DATA ML.VALIDATE DATA DRIFT ML.VALIDATE DATA SKEW ML.TFDV DESCRIBE ML.TFDV VALIDATE Matrix factorization ML.EVALUATE ML.RECOMMEND ML.GENERATE EMBEDDING N/A N/A Principal component analysis (PCA) ML.EVALUATE ML.PREDICT ML.GENERATE EMBEDDING ML.DETECT ANOMALIES ML.TRANSFORM N/A ML.DESCRIBE DATA ML.VALIDATE DATA DRIFT ML.VALIDATE DATA SKEW ML.TFDV DESCRIBE ML.TFDV VALIDATE Autoencoder ML.EVALUATE ML.PREDICT ML.GENERATE EMBEDDING ML.DETECT ANOMALIES ML.RECONSTRUCTION LOSS ML.TRANSFORM N/A ML.DESCRIBE DATA ML.VALIDATE DATA DRIFT ML.VALIDATE DATA SKEW ML.TFDV DESCRIBE ML.TFDV VALIDATE Transform-only Transform-only N/A ML.TRANSFORM N/A N/A 1 ML.CONFUSION MATRIX is only applicable to classification models.
- BigQuery ML offers the following types of ML models: Supervised learning models: Linear and logistic regression Deep neural network (DNN) Wide & Deep Boosted trees Random forest AutoML Unsupervised learning models: K-means clustering Matrix factorization Autoencoder Principal component analysis (PCA) Transform-only models: Transform-only models aren't typical ML models but are instead artifacts that transform raw data into features.
- Model creation user journeys The following table describes the statements and functions you can use to create and tune models: Model category Model type Model creation Feature preprocessing Hyperparameter tuning 1 Model weights Feature & training info Tutorials Supervised learning Linear & logistic regression CREATE MODEL Automatic preprocessing Manual preprocessing Hyperparameter tuning ML.TRIAL INFO ML.WEIGHTS ML.FEATURE INFO ML.TRAINING INFO Use linear regression to predict penguin weight Perform classification with a logistic regression model Deep neural networks (DNN) CREATE MODEL Automatic preprocessing Manual preprocessing Hyperparameter tuning ML.TRIAL INFO N/A 2 ML.FEATURE INFO ML.TRAINING INFO N/A Wide & Deep networks CREATE MODEL Automatic preprocessing Manual preprocessing Hyperparameter tuning ML.TRIAL INFO N/A 2 ML.FEATURE INFO ML.TRAINING INFO N/A Boosted trees CREATE MODEL Automatic preprocessing Manual preprocessing Hyperparameter tuning ML.TRIAL INFO N/A 2 ML.FEATURE INFO ML.TRAINING INFO Perform classification with a boosted trees model Random forest CREATE MODEL Automatic preprocessing Manual preprocessing Hyperparameter tuning ML.TRIAL INFO N/A 2 ML.FEATURE INFO ML.TRAINING INFO N/A AutoML classification & regression CREATE MODEL AutoML automatically performs feature engineering AutoML automatically performs hyperparameter tuning N/A 2 ML.FEATURE INFO ML.TRAINING INFO N/A Unsupervised learning K-means CREATE MODEL Automatic preprocessing Manual preprocessing Hyperparameter tuning ML.TRIAL INFO ML.CENTROIDS ML.FEATURE INFO ML.TRAINING INFO Find clusters in bike station data Matrix factorization CREATE MODEL N/A Hyperparameter tuning ML.TRIAL INFO ML.WEIGHTS ML.FEATURE INFO ML.TRAINING INFO Generate movie recommendations using explicit feedback Generate content recommendations using implicit feedback Principal component analysis (PCA) CREATE MODEL Automatic preprocessing Manual preprocessing N/A ML.PRINCIPAL COMPONENTS ML.PRINCIPAL COMPONENT INFO ML.FEATURE INFO ML.TRAINING INFO N/A Autoencoder CREATE MODEL Automatic preprocessing Manual preprocessing Hyperparameter tuning ML.TRIAL INFO N/A 2 ML.FEATURE INFO ML.TRAINING INFO N/A Transform-only Transform-only CREATE MODEL Manual preprocessing N/A N/A ML.FEATURE INFO N/A 1 For a step-by-step example of using hyperparameter tuning, see Improve model performance with hyperparameter tuning .
- To see the weights of the model, you can export the model from BigQuery ML to Cloud Storage and then use the XGBoost library or the TensorFlow library to visualize the tree structure for tree models or the graph structure for neural networks.

