---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.772Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "AUTO_ARIMA_MAX_ORDER training option"
feature_slug: "auto-arima-max-order-training-option"
latest_feature_date: "2020-08-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create-time-series"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create-multivariate-time-series"
  - "https://docs.cloud.google.com/bigquery/docs/arima-multiple-time-series-forecasting-tutorial"
keywords:
  - "auto"
  - "arima"
  - "max"
  - "order"
  - "training"
  - "option"
  - "bigquery"
  - "ml"
---

# AUTO_ARIMA_MAX_ORDER training option

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery ML time series models support the AUTO_ARIMA_MAX_ORDER training option.

## Extended Definition

BigQuery ML time series models support the AUTO_ARIMA_MAX_ORDER training option.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create-time-series](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create-time-series)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create-multivariate-time-series](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create-multivariate-time-series)
- [https://docs.cloud.google.com/bigquery/docs/arima-multiple-time-series-forecasting-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-multiple-time-series-forecasting-tutorial)

## Supporting Pages

### The CREATE MODEL statement for ARIMA_PLUS models | BigQuery | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create-time-series](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create-time-series)
- Source ID: `feature-recovery-http`
- Final score: 308
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- CREATE MODEL syntax { CREATE MODEL | CREATE MODEL IF NOT EXISTS | CREATE OR REPLACE MODEL } model_name OPTIONS( model_option_list ) AS { query_statement | ( training_data AS ( query_statement ), custom_holiday AS ( holiday_statement ) ) } model_option_list : MODEL_TYPE = 'ARIMA_PLUS' [, TIME_SERIES_TIMESTAMP_COL = string_value ] [, TIME_SERIES_DATA_COL = string_value ] [, TIME_SERIES_ID_COL = { string_value | string_array } ] [, HORIZON = int64_value ] [, AUTO_ARIMA = { TRUE | FALSE } ] [, AUTO_ARIMA_MAX_ORDER = int64_value ] [, AUTO_ARIMA_MIN_ORDER = int64_value ] [, NON_SEASONAL_ORDER = (int64_value, int64_value, int64_value) ] [, DATA_FREQUENCY = { 'AUTO_FREQUENCY' | 'PER_MINUTE' | 'HOURLY' | 'DAILY' | 'WEEKLY' | 'MONTHLY' | 'QUARTERLY' | 'YEARLY' } ] [, INCLUDE_DRIFT = { TRUE | FALSE } ] [, HOLIDAY_REGION = string_value | string_array ] [, CLEAN_SPIKES_AND_DIPS = { TRUE | FALSE } ] [, ADJUST_STEP_CHANGES = { TRUE | FALSE } ] [, TIME_SERIES_LENGTH_FRACTION = float64_value ] [, MIN_TIME_SERIES_LENGTH = int64_value ] [, MAX_TIME_SERIES_LENGTH = int64_value ] [, TREND_SMOOTHING_WINDOW_SIZE = int64_value ] [, DECOMPOSE_TIME_SERIES = { TRUE | FALSE } ] [, FORECAST_LIMIT_LOWER_BOUND = float64_value ] [, FORECAST_LIMIT_UPPER_BOUND = float64_value ] [, SEASONALITIES = string_array ] [, HIERARCHICAL_TIME_SERIES_COLS = { string_array } ] [, KMS_KEY_NAME = string_value ] CREATE MODEL Creates and trains a new model in the specified dataset.
- Note: the number of bytes processed by the input SELECT statement is multiplied by the number of candidate models, which is controlled by the AUTO_ARIMA_MAX_ORDER and AUTO_ARIMA_MIN_ORDER options.
- If a shorter training time is important to your use case, use a smaller value for AUTO_ARIMA_MAX_ORDER .
- You can use the AUTO_ARIMA_MAX_ORDER option to balance between query run time and forecast accuracy.

### The CREATE MODEL statement for ARIMA_PLUS_XREG models | BigQuery | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create-multivariate-time-series](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create-multivariate-time-series)
- Source ID: `feature-recovery-http`
- Final score: 300
- Re-rank relevance: N/A

Evidence snippets:
- CREATE MODEL syntax { CREATE MODEL | CREATE MODEL IF NOT EXISTS | CREATE OR REPLACE MODEL } model_name OPTIONS( model_option_list ) AS { query_statement | ( training_data AS ( query_statement ), custom_holiday AS ( holiday_statement ) ) } model_option_list : MODEL_TYPE = 'ARIMA_PLUS_XREG' [, TIME_SERIES_TIMESTAMP_COL = string_value ] [, TIME_SERIES_DATA_COL = string_value ] [, TIME_SERIES_ID_COL = { string_value | string_array } ] [, HORIZON = int64_value ] [, AUTO_ARIMA = { TRUE | FALSE } ] [, AUTO_ARIMA_MAX_ORDER = int64_value ] [, AUTO_ARIMA_MIN_ORDER = int64_value ] [, NON_SEASONAL_ORDER = (int64_value, int64_value, int64_value) ] [, DATA_FREQUENCY = { 'AUTO_FREQUENCY' | 'PER_MINUTE' | 'HOURLY' | 'DAILY' | 'WEEKLY' | 'MONTHLY' | 'QUARTERLY' | 'YEARLY' } ] [, INCLUDE_DRIFT = { TRUE | FALSE } ] [, HOLIDAY_REGION = string_value | string_array ] [, CLEAN_SPIKES_AND_DIPS = { TRUE | FALSE } ] [, ADJUST_STEP_CHANGES = { TRUE | FALSE } ] [, TIME_SERIES_LENGTH_FRACTION = float64_value ] [, MIN_TIME_SERIES_LENGTH = int64_value ] [, MAX_TIME_SERIES_LENGTH = int64_value ] [, TREND_SMOOTHING_WINDOW_SIZE = int64_value ] [, L2_REG = float64_value ] [, MODEL_REGISTRY = { 'VERTEX_AI' } ] [, VERTEX_AI_MODEL_ID = string_value ] [, VERTEX_AI_MODEL_VERSION_ALIASES = string_array ] [, KMS_KEY_NAME = string_value ] CREATE MODEL Creates and trains a new model in the specified dataset.
- Note: the number of bytes processed by the input SELECT statement is multiplied by the number of candidate models, which is controlled by the AUTO_ARIMA_MAX_ORDER and AUTO_ARIMA_MIN_ORDER options.
- If a shorter training time is important to your use case, use a smaller value for AUTO_ARIMA_MAX_ORDER .
- You can use the AUTO_ARIMA_MAX_ORDER option to balance between query run time and forecast accuracy.

### "Forecast multiple time series with an ARIMA_PLUS univariate model \_|\_\

- URL: [https://docs.cloud.google.com/bigquery/docs/arima-multiple-time-series-forecasting-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-multiple-time-series-forecasting-tutorial)
- Source ID: `site-docs-reference`
- Final score: 88
- Re-rank relevance: N/A

Evidence snippets:
- Go to BigQuery In the query editor, paste in the following query and click Run : CREATE OR REPLACE MODEL bqml tutorial.nyc citibike arima model group OPTIONS ( model type = 'ARIMA PLUS' , time series timestamp col = 'date' , time series data col = 'num trips' , time series id col = 'start station name' , auto arima max order = 5 ) AS SELECT start station name , EXTRACT ( DATE from starttime ) AS date , COUNT ( ) AS num trips FROM bigquery-public-data.new york.citibike trips WHERE start station name LIKE '%Central Park%' GROUP BY start station name , date ; The query takes approximately 24 seconds to complete, after which you can access the nyc citibike arima model group model.
- This shrinks the search space of hyperparameter tuning in the auto.ARIMA algorithm. auto arima max order = 5 , ) df = bpd . read gbq ( "bigquery-public-data.new york.citibike trips" ) This query creates twelve time series models, one for each of the twelve Citi Bike start stations in the input data.
- The auto arima max order option of the CREATE MODEL statement controls the search space for hyperparameter tuning in the auto.ARIMA algorithm.
- ARIMAPlus ( To reduce the query runtime with the compromise of a potential slight drop in model quality, you could decrease the value of the auto arima max order.

