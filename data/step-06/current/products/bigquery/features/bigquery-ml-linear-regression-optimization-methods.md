---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.860Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery ML linear regression optimization methods"
feature_slug: "bigquery-ml-linear-regression-optimization-methods"
latest_feature_date: "2019-01-29"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create"
  - "https://docs.cloud.google.com/python/docs/reference/bigquery/latest/google.cloud.bigquery.enums.AutoRowIDs"
  - "https://docs.cloud.google.com/bigquery/docs/linear-regression-tutorial"
keywords:
  - "BATCH_GRADIENT_DESCENT"
  - "NORMAL_EQUATION"
  - "BQML linear regression"
  - "optimization_method"
  - "optimization method"
  - "linear regression"
  - "CREATE MODEL options"
  - "AUTO"
---

# BigQuery ML linear regression optimization methods

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery ML added support for automatic, batch gradient descent, and normal equation optimization for linear regression models.

## Extended Definition

BigQuery ML added support for automatic, batch gradient descent, and normal equation optimization for linear regression models.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create)
- [https://docs.cloud.google.com/python/docs/reference/bigquery/latest/google.cloud.bigquery.enums.AutoRowIDs](https://docs.cloud.google.com/python/docs/reference/bigquery/latest/google.cloud.bigquery.enums.AutoRowIDs)
- [https://docs.cloud.google.com/bigquery/docs/linear-regression-tutorial](https://docs.cloud.google.com/bigquery/docs/linear-regression-tutorial)

## Supporting Pages

### The CREATE MODEL statement \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create)
- Source ID: `site-docs-root`
- Final score: 48
- Re-rank relevance: N/A

Evidence snippets:
- You can view specific CREATE MODEL statements by clicking the MODEL TYPE name in the following list, in the table of contents in the left panel, or in the create model link in the End-to-end user journey for each model . { CREATE MODEL CREATE MODEL IF NOT EXISTS CREATE OR REPLACE MODEL } model name [TRANSFORM ( select list )] [INPUT ( field name field type ) OUTPUT ( field name field type )] [REMOTE WITH CONNECTION { connection name DEFAULT}] [OPTIONS( model option list )] [ AS { query statement ( training data AS ( query statement ), custom holiday AS ( holiday statement ) )}] model option list: MODEL TYPE = { 'LINEAR REG' 'LOGISTIC REG' 'KMEANS' 'MATRIX FACTORIZATION' 'PCA' 'AUTOENCODER' 'AUTOML CLASSIFIER' 'AUTOML REGRESSOR' 'BOOSTED TREE CLASSIFIER' 'BOOSTED TREE REGRESSOR' 'RANDOM FOREST CLASSIFIER' 'RANDOM FOREST REGRESSOR' 'DNN CLASSIFIER' 'DNN REGRESSOR' 'DNN LINEAR COMBINED CLASSIFIER' 'DNN LINEAR COMBINED REGRESSOR' 'ARIMA PLUS' 'ARIMA PLUS XREG' 'TENSORFLOW' 'TENSORFLOW LITE' 'ONNX' 'XGBOOST' 'CONTRIBUTION ANALYSIS' } [, MODEL REGISTRY = { 'VERTEX AI' } ] [, VERTEX AI MODEL ID = string value ] [, VERTEX AI MODEL VERSION ALIASES = string array ] [, INPUT LABEL COLS = string array ] [, MAX ITERATIONS = int64 value ] [, EARLY STOP = { TRUE FALSE } ] [, MIN REL PROGRESS = float64 value ] [, DATA SPLIT METHOD = { 'AUTO SPLIT' 'RANDOM' 'CUSTOM' 'SEQ' 'NO SPLIT' } ] [, DATA SPLIT EVAL FRACTION = float64 value ] [, DATA SPLIT TEST FRACTION = float64 value ] [, DATA SPLIT COL = string value ] [, OPTIMIZE STRATEGY = { 'AUTO STRATEGY' 'BATCH GRADIENT DESCENT' 'NORMAL EQUATION' } ] [, L1 REG = float64 value ] [, L2 REG = float64 value ] [, LEARN RATE STRATEGY = { 'LINE SEARCH' 'CONSTANT' } ] [, LEARN RATE = float64 value ] [, LS INIT LEARN RATE = float64 value ] [, WARM START = { TRUE FALSE } ] [, AUTO CLASS WEIGHTS = { TRUE FALSE } ] [, CLASS WEIGHTS = struct array ] [, INSTANCE WEIGHT COL = string value ] [, NUM CLUSTERS = int64 value ] [, KMEANS INIT METHOD = { 'RANDOM' 'KMEANS++' 'CUSTOM' } ] [, KMEANS INIT COL = string value ] [, DISTANCE TYPE = { 'EUCLIDEAN' 'COSINE' } ] [, STANDARDIZE FEATURES = { TRUE FALSE } ] [, MODEL PATH = string value ] [, BUDGET HOURS = float64 value ] [, OPTIMIZATION OBJECTIVE = { string value struct value } ] [, FEEDBACK TYPE = {'EXPLICIT' 'IMPLICIT'} ] [, NUM FACTORS = int64 value ] [, USER COL = string value ] [, ITEM COL = string value ] [, RATING COL = string value ] [, WALS ALPHA = float64 value ] [, BOOSTER TYPE = { 'gbtree' 'dart'} ] [, NUM PARALLEL TREE = int64 value ] [, DART NORMALIZE TYPE = { 'tree' 'forest'} ] [, TREE METHOD = { 'auto' 'exact' 'approx' 'hist'} ] [, MIN TREE CHILD WEIGHT = float64 value ] [, COLSAMPLE BYTREE = float64 value ] [, COLSAMPLE BYLEVEL = float64 value ] [, COLSAMPLE BYNODE = float64 value ] [, MIN SPLIT LOSS = float64 value ] [, MAX TREE DEPTH = int64 value ] [, SUBSAMPLE = float64 value ] [, ACTIVATION FN = { 'RELU' 'RELU6' 'CRELU' 'ELU' 'SELU' 'SIGMOID' 'TANH' } ] [, BATCH SIZE = int64 value ] [, DROPOUT = float64 value ] [, HIDDEN UNITS = int array ] [, OPTIMIZER = { 'ADAGRAD' 'ADAM' 'FTRL' 'RMSPROP' 'SGD' } ] [, TIME SERIES TIMESTAMP COL = string value ] [, TIME SERIES DATA COL = string value ] [, TIME SERIES ID COL = { string value string array } ] [, HORIZON = int64 value ] [, AUTO ARIMA = { TRUE FALSE } ] [, AUTO ARIMA MAX ORDER = int64 value ] [, AUTO ARIMA MIN ORDER = int64 value ] [, NON SEASONAL ORDER = (int64 value, int64 value, int64 value) ] [, DATA FREQUENCY = { 'AUTO FREQUENCY' 'PER MINUTE' 'HOURLY' 'DAILY' 'WEEKLY' ... } ] [, FORECAST LIMIT LOWER BOUND = float64 value ] [, FORECAST LIMIT UPPER BOUND = float64 value ] [, INCLUDE DRIFT = { TRUE FALSE } ] [, HOLIDAY REGION = { 'GLOBAL' 'NA' 'JAPAC' 'EMEA' 'LAC' 'AE' ... } ] [, CLEAN SPIKES AND DIPS = { TRUE FALSE } ] [, ADJUST STEP CHANGES = { TRUE FALSE } ] [, DECOMPOSE TIME SERIES = { TRUE FALSE } ] [, HIERARCHICAL TIME SERIES COLS = { string array } ] [, ENABLE GLOBAL EXPLAIN = { TRUE FALSE } ] [, APPROX GLOBAL FEATURE CONTRIB = { TRUE FALSE }] [, INTEGRATED GRADIENTS NUM STEPS = int64 value ] [, CALCULATE P VALUES = { TRUE FALSE } ] [, FIT INTERCEPT = { TRUE FALSE } ] [, CATEGORY ENCODING METHOD = { 'ONE HOT ENCODING' 'DUMMY ENCODING' 'LABEL ENCODING' 'TARGET ENCODING' } ] [, { ENDPOINT = string value HUGGING FACE MODEL ID = string value MODEL GARDEN MODEL NAME = string value } ] [, HUGGING FACE TOKEN = string value ] [, MACHINE TYPE = string value ] [, MIN REPLICA COUNT = int64 value ] [, MAX REPLICA COUNT = int64 value ] [, RESERVATION AFFINITY TYPE = { 'NO RESERVATION' 'ANY RESERVATION' 'SPECIFIC RESERVATION' } ] [, RESERVATION AFFINITY KEY = string value ] [, RESERVATION AFFINITY VALUES = string array ] [, ENDPOINT IDLE TTL = interval value ] [, REMOTE SERVICE TYPE = { 'CLOUD AI VISION V1' 'CLOUD AI NATURAL LANGUAGE V1' 'CLOUD AI TRANSLATE V3' } ] [, XGBOOST VERSION = { '0.9' '1.1' } ] [, TF VERSION = { '1.15' '2.8.0' '2.17.0' } ] [, NUM TRIALS = int64 value , ] [, MAX PARALLEL TRIALS = int64 value ] [, HPARAM TUNING ALGORITHM = { 'VIZIER DEFAULT' 'RANDOM SEARCH' 'GRID SEARCH' } ] [, HPARAM TUNING OBJECTIVES = { 'R2 SCORE' 'ROC AUC' ... } ] [, NUM PRINCIPAL COMPONENTS = int64 value ] [, PCA EXPLAINED VARIANCE RATIO = float64 value ] [, SCALE FEATURES = { TRUE FALSE } ] [, PCA SOLVER = { 'FULL' 'RANDOMIZED' 'AUTO' } ] [, TIME SERIES LENGTH FRACTION = float64 value ] [, MIN TIME SERIES LENGTH = int64 value ] [, MAX TIME SERIES LENGTH = int64 value ] [, TREND SMOOTHING WINDOW SIZE = int64 value ] [, SEASONALITIES = string array ] [, PROMPT COL = string value ] [, LEARNING RATE MULTIPLIER = float64 value ] [, ACCELERATOR TYPE = { 'GPU' 'TPU' } ] [, EVALUATION TASK = { 'TEXT GENERATION' 'CLASSIFICATION' 'SUMMARIZATION' 'QUESTION ANSWERING' 'UNSPECIFIED' } ] [, DOCUMENT PROCESSOR = string value ] [, SPEECH RECOGNIZER = string value ] [, KMS KEY NAME = string value ] [, CONTRIBUTION METRIC = string value ] [, DIMENSION ID COLS = string array ] [, IS TEST COL = string value ] [, MIN APRIORI SUPPORT = float64 value ] [, PRUNING METHOD = {'NO PRUNING', 'PRUNE REDUNDANT INSIGHTS'} ] [, TOP K INSIGHTS BY APRIORI SUPPORT = int64 value ] CREATE MODEL Creates and trains a new model in the specified dataset.
- To use a default connection , specify specify DEFAULT instead of the connection name. model option list CREATE MODEL supports the following options: MODEL TYPE Syntax MODEL TYPE = { 'LINEAR REG' 'LOGISTIC REG' 'KMEANS' 'PCA' 'MATRIX FACTORIZATION' 'AUTOENCODER' 'AUTOML REGRESSOR' 'AUTOML CLASSIFIER' 'BOOSTED TREE CLASSIFIER' 'BOOSTED TREE REGRESSOR' 'RANDOM FOREST CLASSIFIER' 'RANDOM FOREST REGRESSOR' 'DNN CLASSIFIER' 'DNN REGRESSOR' 'DNN LINEAR COMBINED CLASSIFIER' 'DNN LINEAR COMBINED REGRESSOR' 'ARIMA PLUS' 'ARIMA PLUS XREG' 'TENSORFLOW' 'TENSORFLOW LITE' 'ONNX' 'XGBOOST' 'CONTRIBUTION ANALYSIS' } Description Specify the model type.
- Contribution analysis AS All model types support the following AS clause syntax for specifying the training data: AS query statement For time series forecasting models that have a DATA FREQUENCY value of either DAILY or AUTO FREQUENCY , you can optionally use the following AS clause syntax to perform custom holiday modeling in addition to specifying the training data: AS ( training data AS ( query statement ), custom holiday AS ( holiday statement ) ) query statement The query statement argument specifies the query that is used to generate the training data.
- Linear & logistic regression , Boosted trees , Random forest , DNN , Wide & Deep , Kmeans , Matrix factorization , Autoencoder DATA SPLIT METHOD The method to split input data into training and evaluation sets when not running hyperparameter tuning, or into training, evaluation, and test sets when running hyperparameter tuning.

### "Class AutoRowIDs (3.40.1) \_|\_ Python client libraries \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/python/docs/reference/bigquery/latest/google.cloud.bigquery.enums.AutoRowIDs](https://docs.cloud.google.com/python/docs/reference/bigquery/latest/google.cloud.bigquery.enums.AutoRowIDs)
- Source ID: `site-python-reference`
- Final score: 40
- Re-rank relevance: N/A

Evidence snippets:
- Version latest keyboard arrow down 3.40.1 (latest) 3.40.0 3.39.0 3.38.0 3.37.0 3.36.0 3.35.1 3.34.0 3.33.0 3.31.0 3.30.0 3.29.0 3.27.0 3.26.0 3.25.0 3.24.0 3.23.1 3.22.0 3.21.0 3.20.1 3.19.0 3.18.0 3.17.2 3.16.0 3.15.0 3.14.1 3.13.0 3.12.0 3.11.4 3.4.0 3.3.6 3.2.0 3.1.0 3.0.1 2.34.4 2.33.0 2.32.0 2.31.0 2.30.1 2.29.0 2.28.1 2.27.1 2.26.0 2.25.2 2.24.1 2.23.3 2.22.1 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.1 2.15.0 2.14.0 2.13.1 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.2 2.5.0 2.4.0 2.3.1 2.2.0 2.1.0 2.0.0 1.28.2 1.27.2 1.26.1 1.25.0 1.24.0 1.23.1 1.22.0 1.21.0 1.20.0 1.19.0 1.18.0 1.17.0 1.16.0 AutoRowIDs ( value ) How to handle automatic insert IDs when inserting rows as a stream.
- Home Documentation Developer tools Python Client libraries Send feedback Class AutoRowIDs (3.40.1) Stay organized with collections Save and categorize content based on your preferences.

### Use BigQuery ML to predict penguin weight \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/linear-regression-tutorial](https://docs.cloud.google.com/bigquery/docs/linear-regression-tutorial)
- Source ID: `site-docs-root-2`
- Final score: 38
- Re-rank relevance: N/A

Evidence snippets:
- A normal equation optimization strategy is automatically used for this training, so only one iteration is required to converge to the final model.
- Using the trained model and utilizing data specific to Biscoe Island, explain the predictions of the top 3 features explained = model . predict explain ( biscoe data , top k features = 3 ) Expected results: predicted body mass g top feature attributions baseline prediction value prediction value approximation error species island culmen length mm culmen depth mm flipper length mm body mass g sex 0 5413.510134 [{'feature': 'island', 'attribution': 7348.877... -5320.222128 5413.510134 0.0 Gentoo penguin (Pygoscelis papua) Biscoe 45.2 16.4 223.0 5950.0 MALE 1 4768.351092 [{'feature': 'island', 'attribution': 7348.877... -5320.222128 4768.351092 0.0 Gentoo penguin (Pygoscelis papua) Biscoe 46.5 14.5 213.0 4400.0 FEMALE 2 3235.896372 [{'feature': 'island', 'attribution': 7348.877... -5320.222128 3235.896372 0.0 Adelie Penguin (Pygoscelis adeliae) Biscoe 37.7 16.0 183.0 3075.0 FEMALE 3 5349.603734 [{'feature': 'island', 'attribution': 7348.877... -5320.222128 5349.603734 0.0 Gentoo penguin (Pygoscelis papua) Biscoe 46.4 15.6 221.0 5000.0 MALE 4 4637.165037 [{'feature': 'island', 'attribution': 7348.877... -5320.222128 4637.165037 0.0 Gentoo penguin (Pygoscelis papua) Biscoe 46.1 13.2 211.0 4500.0 FEMALE For linear regression models, Shapley values are used to generate feature attribution values for each feature in the model.
- For more information, see Set up ADC for a local development environment . import bigframes.pandas as bpd Select the model you will be evaluating. read gbq model loads model data from BigQuery, but you could also use the model object from the previous steps. model = bpd . read gbq model ( your model id , # For example: "bqml tutorial.penguins model" ) Score the model with input data defined in an earlier step to compare model predictions on feature columns to true labels in label columns. score = model . score ( feature columns , label columns ) Expected output results: index mean absolute error mean squared error mean squared log error median absolute error r2 score explained variance 0 227.012237 81838.159892 0.00507 173.080816 0.872377 0.872377 1 rows x 6 columns The results should look similar to the following: Because you performed a linear regression, the results include the following columns: mean absolute error mean squared error mean squared log error median absolute error r2 score explained variance An important metric in the evaluation results is the R 2 score .
- Client () bqclient . create dataset ( "bqml tutorial" , exists ok = True ) Create the model Create a linear regression model using the Analytics sample dataset for BigQuery.

