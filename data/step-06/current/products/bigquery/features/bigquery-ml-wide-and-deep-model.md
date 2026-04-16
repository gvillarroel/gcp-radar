---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.693Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery ML Wide-and-Deep model"
feature_slug: "bigquery-ml-wide-and-deep-model"
latest_feature_date: "2022-03-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create-wnd-models"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create"
keywords:
  - "bigquery"
  - "ml"
  - "wide"
  - "deep"
  - "model"
  - "supports"
  - "training"
  - "models"
---

# BigQuery ML Wide-and-Deep model

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery ML supports training Wide-and-Deep models for classification and regression workloads; BigQuery ML supports Wide-and-Deep classifier and regressor models through DNN_LINEAR_COMBINED model types.

## Extended Definition

BigQuery ML supports training Wide-and-Deep models for classification and regression workloads; BigQuery ML supports Wide-and-Deep classifier and regressor models through DNN_LINEAR_COMBINED model types.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create-wnd-models](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create-wnd-models)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create)

## Supporting Pages

### The CREATE MODEL statement for Wide-and-Deep models | BigQuery | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create-wnd-models](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create-wnd-models)
- Source ID: `feature-recovery-http`
- Final score: 388
- Re-rank relevance: N/A

Evidence snippets:
- For more information about the training objectives and hyperparameters supported for wide-and-deep classification models, see DNN_LINEAR_COMBINED_CLASSIFIER .
- For more information about the training objectives and hyperparameters supported for wide-and-deep regression models, see DNN_LINEAR_COMBINED_REGRESSOR .
- HPARAM_TUNING_OBJECTIVES Syntax For DNN_LINEAR_COMBINED_CLASSIFIER models: HPARAM_TUNING_OBJECTIVES = { 'PRECISION' | 'RECALL' | 'ACCURACY' | 'F1_SCORE' | 'LOG_LOSS' | 'ROC_AUC' } For DNN_LINEAR_COMBINED_REGRESSOR models: HPARAM_TUNING_OBJECTIVES = { 'MEAN_ABSOLUTE_ERROR' | 'MEAN_SQUARED_ERROR' | 'MEAN_SQUARED_LOG_ERROR' | 'MEDIAN_ABSOLUTE_ERROR' | 'R2_SCORE' | 'EXPLAINED_VARIANCE' } Description The hyperparameter tuning objective for the model; only one objective is supported.
- Limitations CREATE MODEL statements must comply with the following rules: For DNN_LINEAR_COMBINED_CLASSIFIER models, the label column can contain up to 1,000 unique values; that is, the number of classes is less than or equal to 1,000.

### The CREATE MODEL statement | BigQuery | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create)
- Source ID: `feature-recovery-http`
- Final score: 274
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- CREATE MODEL statement for DNN models 'DNN_LINEAR_COMBINED_CLASSIFIER' Create a Wide-and-Deep Classifier model.
- CREATE MODEL statement for DNN models 'DNN_LINEAR_COMBINED_REGRESSOR' Create a Wide-and-Deep Regressor model.
- You can view specific CREATE MODEL statements by clicking the MODEL_TYPE name in the following list, in the table of contents in the left panel, or in the create model link in the End-to-end user journey for each model . { CREATE MODEL | CREATE MODEL IF NOT EXISTS | CREATE OR REPLACE MODEL } model_name [TRANSFORM ( select_list )] [INPUT ( field_name field_type ) OUTPUT ( field_name field_type )] [REMOTE WITH CONNECTION {` connection_name ` | DEFAULT}] [OPTIONS( model_option_list )] [ AS { query_statement | ( training_data AS ( query_statement ), custom_holiday AS ( holiday_statement ) )}] model_option_list: MODEL_TYPE = { 'LINEAR_REG' | 'LOGISTIC_REG' | 'KMEANS' | 'MATRIX_FACTORIZATION' | 'PCA' | 'AUTOENCODER' | 'AUTOML_CLASSIFIER' | 'AUTOML_REGRESSOR' | 'BOOSTED_TREE_CLASSIFIER' | 'BOOSTED_TREE_REGRESSOR' | 'RANDOM_FOREST_CLASSIFIER' | 'RANDOM_FOREST_REGRESSOR' | 'DNN_CLASSIFIER' | 'DNN_REGRESSOR' | 'DNN_LINEAR_COMBINED_CLASSIFIER' | 'DNN_LINEAR_COMBINED_REGRESSOR' | 'ARIMA_PLUS' | 'ARIMA_PLUS_XREG' | 'TENSORFLOW' | 'TENSORFLOW_LITE' | 'ONNX' | 'XGBOOST' | 'CONTRIBUTION_ANALYSIS' } [, MODEL_REGISTRY = { 'VERTEX_AI' } ] [, VERTEX_AI_MODEL_ID = string_value ] [, VERTEX_AI_MODEL_VERSION_ALIASES = string_array ] [, INPUT_LABEL_COLS = string_array ] [, MAX_ITERATIONS = int64_value ] [, EARLY_STOP = { TRUE | FALSE } ] [, MIN_REL_PROGRESS = float64_value ] [, DATA_SPLIT_METHOD = { 'AUTO_SPLIT' | 'RANDOM' | 'CUSTOM' | 'SEQ' | 'NO_SPLIT' } ] [, DATA_SPLIT_EVAL_FRACTION = float64_value ] [, DATA_SPLIT_TEST_FRACTION = float64_value ] [, DATA_SPLIT_COL = string_value ] [, OPTIMIZE_STRATEGY = { 'AUTO_STRATEGY' | 'BATCH_GRADIENT_DESCENT' | 'NORMAL_EQUATION' } ] [, L1_REG = float64_value ] [, L2_REG = float64_value ] [, LEARN_RATE_STRATEGY = { 'LINE_SEARCH' | 'CONSTANT' } ] [, LEARN_RATE = float64_value ] [, LS_INIT_LEARN_RATE = float64_value ] [, WARM_START = { TRUE | FALSE } ] [, AUTO_CLASS_WEIGHTS = { TRUE | FALSE } ] [, CLASS_WEIGHTS = struct_array ] [, INSTANCE_WEIGHT_COL = string_value ] [, NUM_CLUSTERS = int64_value ] [, KMEANS_INIT_METHOD = { 'RANDOM' | 'KMEANS++' | 'CUSTOM' } ] [, KMEANS_INIT_COL = string_value ] [, DISTANCE_TYPE = { 'EUCLIDEAN' | 'COSINE' } ] [, STANDARDIZE_FEATURES = { TRUE | FALSE } ] [, MODEL_PATH = string_value ] [, BUDGET_HOURS = float64_value ] [, OPTIMIZATION_OBJECTIVE = { string_value | struct_value } ] [, FEEDBACK_TYPE = {'EXPLICIT' | 'IMPLICIT'} ] [, NUM_FACTORS = int64_value ] [, USER_COL = string_value ] [, ITEM_COL = string_value ] [, RATING_COL = string_value ] [, WALS_ALPHA = float64_value ] [, BOOSTER_TYPE = { 'gbtree' | 'dart'} ] [, NUM_PARALLEL_TREE = int64_value ] [, DART_NORMALIZE_TYPE = { 'tree' | 'forest'} ] [, TREE_METHOD = { 'auto' | 'exact' | 'approx' | 'hist'} ] [, MIN_TREE_CHILD_WEIGHT = float64_value ] [, COLSAMPLE_BYTREE = float64_value ] [, COLSAMPLE_BYLEVEL = float64_value ] [, COLSAMPLE_BYNODE = float64_value ] [, MIN_SPLIT_LOSS = float64_value ] [, MAX_TREE_DEPTH = int64_value ] [, SUBSAMPLE = float64_value ] [, ACTIVATION_FN = { 'RELU' | 'RELU6' | 'CRELU' | 'ELU' | 'SELU' | 'SIGMOID' | 'TANH' } ] [, BATCH_SIZE = int64_value ] [, DROPOUT = float64_value ] [, HIDDEN_UNITS = int_array ] [, OPTIMIZER = { 'ADAGRAD' | 'ADAM' | 'FTRL' | 'RMSPROP' | 'SGD' } ] [, TIME_SERIES_TIMESTAMP_COL = string_value ] [, TIME_SERIES_DATA_COL = string_value ] [, TIME_SERIES_ID_COL = { string_value | string_array } ] [, HORIZON = int64_value ] [, AUTO_ARIMA = { TRUE | FALSE } ] [, AUTO_ARIMA_MAX_ORDER = int64_value ] [, AUTO_ARIMA_MIN_ORDER = int64_value ] [, NON_SEASONAL_ORDER = (int64_value, int64_value, int64_value) ] [, DATA_FREQUENCY = { 'AUTO_FREQUENCY' | 'PER_MINUTE' | 'HOURLY' | 'DAILY' | 'WEEKLY' | ... } ] [, FORECAST_LIMIT_LOWER_BOUND = float64_value ] [, FORECAST_LIMIT_UPPER_BOUND = float64_value ] [, INCLUDE_DRIFT = { TRUE | FALSE } ] [, HOLIDAY_REGION = { 'GLOBAL' | 'NA' | 'JAPAC' | 'EMEA' | 'LAC' | 'AE' | ... } ] [, CLEAN_SPIKES_AND_DIPS = { TRUE | FALSE } ] [, ADJUST_STEP_CHANGES = { TRUE | FALSE } ] [, DECOMPOSE_TIME_SERIES = { TRUE | FALSE } ] [, HIERARCHICAL_TIME_SERIES_COLS = { string_array } ] [, ENABLE_GLOBAL_EXPLAIN = { TRUE | FALSE } ] [, APPROX_GLOBAL_FEATURE_CONTRIB = { TRUE | FALSE }] [, INTEGRATED_GRADIENTS_NUM_STEPS = int64_value ] [, CALCULATE_P_VALUES = { TRUE | FALSE } ] [, FIT_INTERCEPT = { TRUE | FALSE } ] [, CATEGORY_ENCODING_METHOD = { 'ONE_HOT_ENCODING' | 'DUMMY_ENCODING' | 'LABEL_ENCODING' | 'TARGET_ENCODING' } ] [, { ENDPOINT = string_value | HUGGING_FACE_MODEL_ID = string_value | MODEL_GARDEN_MODEL_NAME = string_value } ] [, HUGGING_FACE_TOKEN = string_value ] [, MACHINE_TYPE = string_value ] [, MIN_REPLICA_COUNT = int64_value ] [, MAX_REPLICA_COUNT = int64_value ] [, RESERVATION_AFFINITY_TYPE = { 'NO_RESERVATION' | 'ANY_RESERVATION' | 'SPECIFIC_RESERVATION' } ] [, RESERVATION_AFFINITY_KEY = string_value ] [, RESERVATION_AFFINITY_VALUES = string_array ] [, ENDPOINT_IDLE_TTL = interval_value ] [, REMOTE_SERVICE_TYPE = { 'CLOUD_AI_VISION_V1' | 'CLOUD_AI_NATURAL_LANGUAGE_V1' | 'CLOUD_AI_TRANSLATE_V3' } ] [, XGBOOST_VERSION = { '0.9' | '1.1' } ] [, TF_VERSION = { '1.15' | '2.8.0' | '2.17.0' } ] [, NUM_TRIALS = int64_value , ] [, MAX_PARALLEL_TRIALS = int64_value ] [, HPARAM_TUNING_ALGORITHM = { 'VIZIER_DEFAULT' | 'RANDOM_SEARCH' | 'GRID_SEARCH' } ] [, HPARAM_TUNING_OBJECTIVES = { 'R2_SCORE' | 'ROC_AUC' | ... } ] [, NUM_PRINCIPAL_COMPONENTS = int64_value ] [, PCA_EXPLAINED_VARIANCE_RATIO = float64_value ] [, SCALE_FEATURES = { TRUE | FALSE } ] [, PCA_SOLVER = { 'FULL' | 'RANDOMIZED' | 'AUTO' } ] [, TIME_SERIES_LENGTH_FRACTION = float64_value ] [, MIN_TIME_SERIES_LENGTH = int64_value ] [, MAX_TIME_SERIES_LENGTH = int64_value ] [, TREND_SMOOTHING_WINDOW_SIZE = int64_value ] [, SEASONALITIES = string_array ] [, PROMPT_COL = string_value ] [, LEARNING_RATE_MULTIPLIER = float64_value ] [, ACCELERATOR_TYPE = { 'GPU' | 'TPU' } ] [, EVALUATION_TASK = { 'TEXT_GENERATION' | 'CLASSIFICATION' | 'SUMMARIZATION' | 'QUESTION_ANSWERING' | 'UNSPECIFIED' } ] [, DOCUMENT_PROCESSOR = string_value ] [, SPEECH_RECOGNIZER = string_value ] [, KMS_KEY_NAME = string_value ] [, CONTRIBUTION_METRIC = string_value ] [, DIMENSION_ID_COLS = string_array ] [, IS_TEST_COL = string_value ] [, MIN_APRIORI_SUPPORT = float64_value ] [, PRUNING_METHOD = {'NO_PRUNING', 'PRUNE_REDUNDANT_INSIGHTS'} ] [, TOP_K_INSIGHTS_BY_APRIORI_SUPPORT = int64_value ] CREATE MODEL Creates and trains a new model in the specified dataset.
- To use a default connection , specify specify DEFAULT instead of the connection name. model_option_list CREATE MODEL supports the following options: MODEL_TYPE Syntax MODEL_TYPE = { 'LINEAR_REG' | 'LOGISTIC_REG' | 'KMEANS' | 'PCA' | 'MATRIX_FACTORIZATION' | 'AUTOENCODER' | 'AUTOML_REGRESSOR' | 'AUTOML_CLASSIFIER' | 'BOOSTED_TREE_CLASSIFIER' | 'BOOSTED_TREE_REGRESSOR' | 'RANDOM_FOREST_CLASSIFIER' | 'RANDOM_FOREST_REGRESSOR' | 'DNN_CLASSIFIER' | 'DNN_REGRESSOR' | 'DNN_LINEAR_COMBINED_CLASSIFIER' | 'DNN_LINEAR_COMBINED_REGRESSOR' | 'ARIMA_PLUS' | 'ARIMA_PLUS_XREG' | 'TENSORFLOW' | 'TENSORFLOW_LITE' | 'ONNX' | 'XGBOOST' | 'CONTRIBUTION_ANALYSIS' } Description Specify the model type.

### Anomaly detection overview \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/anomaly-detection-overview](https://docs.cloud.google.com/bigquery/docs/anomaly-detection-overview)
- Source ID: `site-docs-reference-5`
- Final score: 88
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you already have labeled data that identifies anomalies, you can perform anomaly detection by using the ML.PREDICT function with one of the following supervised machine learning models: Linear and logistic regression models Boosted trees models Random forest models Deep neural network (DNN) models Wide & Deep models AutoML models Recommended knowledge By using the default settings in the CREATE MODEL statements and the inference functions, you can create and use an anomaly detection model even without much ML knowledge.
- Use the AI.DETECT ANOMALIES function or ML.DETECT ANOMALIES function with one of the following models to detect anomalies in training data or new serving data: Data type Model types Function What the function does Time series TimesFM AI.DETECT ANOMALIES Detect the anomalies in the time series.
- If you aren't certain what counts as anomalous data, or you don't have labeled data to train a model on, you can use unsupervised machine learning to perform anomaly detection.
- Home Documentation Data analytics BigQuery Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.

