---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.665Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "ARIMA_PLUS multi-region HOLIDAY_REGION support"
feature_slug: "arima-plus-multi-region-holiday-region-support"
latest_feature_date: "2022-09-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/arima-multiple-time-series-forecasting-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/arima-single-time-series-forecasting-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/time-series-forecasting-holidays-tutorial"
keywords:
  - "arima"
  - "plus"
  - "multi"
  - "region"
  - "holiday"
  - "models"
  - "multiple"
  - "strings"
---

# ARIMA_PLUS multi-region HOLIDAY_REGION support

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

ARIMA_PLUS models support multiple region strings in the HOLIDAY_REGION option to use the union of holidays.

## Extended Definition

ARIMA_PLUS models support multiple region strings in the HOLIDAY_REGION option to use the union of holidays.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/arima-multiple-time-series-forecasting-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-multiple-time-series-forecasting-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/arima-single-time-series-forecasting-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-single-time-series-forecasting-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/time-series-forecasting-holidays-tutorial](https://docs.cloud.google.com/bigquery/docs/time-series-forecasting-holidays-tutorial)

## Supporting Pages

### "Forecast multiple time series with an ARIMA_PLUS univariate model \_|\_\

- URL: [https://docs.cloud.google.com/bigquery/docs/arima-multiple-time-series-forecasting-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-multiple-time-series-forecasting-tutorial)
- Source ID: `site-docs-reference`
- Final score: 303
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Data analytics BigQuery Guides Send feedback Forecast multiple time series with an ARIMA PLUS univariate model Stay organized with collections Save and categorize content based on your preferences.
- You can create multiple models to do this, but that can be a tedious and time-consuming process, especially when you have a large number of time series.
- Instead, you can use a single query to create and fit a set of time series models in order to forecast multiple time series at once.
- Go to BigQuery In the query editor, paste in the following query and click Run : CREATE OR REPLACE MODEL bqml tutorial.nyc citibike arima model group OPTIONS ( model type = 'ARIMA PLUS' , time series timestamp col = 'date' , time series data col = 'num trips' , time series id col = 'start station name' , auto arima max order = 5 ) AS SELECT start station name , EXTRACT ( DATE from starttime ) AS date , COUNT ( ) AS num trips FROM bigquery-public-data.new york.citibike trips WHERE start station name LIKE '%Central Park%' GROUP BY start station name , date ; The query takes approximately 24 seconds to complete, after which you can access the nyc citibike arima model group model.

### "Forecast a single time series with an ARIMA_PLUS univariate model \_|\_\

- URL: [https://docs.cloud.google.com/bigquery/docs/arima-single-time-series-forecasting-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-single-time-series-forecasting-tutorial)
- Source ID: `site-docs-reference`
- Final score: 265
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The summary() function shows you the evaluation metrics of all the candidate models evaluated during the process of automatic hyperparameter tuning. summary = model . summary ( show all candidate models = True , ) print ( summary . peek ()) Expected output: row non seasonal p non seasonal d non seasonal q has drift log likelihood AIC variance seasonal periods has holiday effect has spikes and dips has step changes error message 0 0 1 3 True -2464.255656 4938.511313 42772.506055 ['WEEKLY'] False False True 1 2 1 0 False -2473.141651 4952.283303 44942.416463 ['WEEKLY'] False False True 2 1 1 0 False -2479.880885 4963.76177 46642.953433 ['WEEKLY'] False False True 3 0 1 1 False -2470.632377 4945.264753 44319.379307 ['WEEKLY'] False False True 4 2 1 1 True -2463.671247 4937.342493 42633.299513 ['WEEKLY'] False False True The non seasonal p , non seasonal d , non seasonal q , and has drift output columns define an ARIMA model in the training pipeline.
- ARIMAPlus () model . auto arima = True model . data frequency = "auto frequency" model . decompose time series = True Use the data loaded in the previous step to fit the model training data = total visits . to frame () . reset index ( drop = False ) X = training data [[ "parsed date" ]] y = training data [[ "total visits" ]] model . fit ( X , y ) Evaluate the candidate models SQL Evaluate the time series models by using the ML.ARIMA EVALUATE function.
- Go to BigQuery In the query editor, paste in the following query and click Run : CREATE OR REPLACE MODEL bqml tutorial.ga arima model OPTIONS ( model type = 'ARIMA PLUS' , time series timestamp col = 'parsed date' , time series data col = 'total visits' , auto arima = TRUE , data frequency = 'AUTO FREQUENCY' , decompose time series = TRUE ) AS SELECT PARSE TIMESTAMP ( "%Y%m%d" , date ) AS parsed date , SUM ( totals . visits ) AS total visits FROM bigquery-public-data.google analytics sample.ga sessions GROUP BY date ; The query takes about 4 seconds to complete, after which you can access the ga arima model model.
- What's next Learn how to forecast a single time series with a multivariate model Learn how to forecast multiple time series with a univariate model Learn how to scale a univariate model when forecasting multiple time series over many rows .

### "Use custom holidays in an ARIMA_PLUS time-series forecasting model \_|\_\

- URL: [https://docs.cloud.google.com/bigquery/docs/time-series-forecasting-holidays-tutorial](https://docs.cloud.google.com/bigquery/docs/time-series-forecasting-holidays-tutorial)
- Source ID: `site-docs-reference-2`
- Final score: 265
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Go to BigQuery In the SQL editor pane, run the following SQL statement: CREATE OR REPLACE MODEL bqml tutorial.forecast googleio with custom holiday OPTIONS ( model type = 'ARIMA PLUS' , holiday region = 'US' , time series timestamp col = 'date' , time series data col = 'views' , data frequency = 'DAILY' , horizon = 365 ) AS ( training data AS ( SELECT FROM bqml tutorial.googleio page views WHERE date '2022-01-01' ), custom holiday AS ( SELECT 'US' AS region , 'GoogleIO' AS holiday name , primary date , 1 AS preholiday days , 2 AS postholiday days FROM UNNEST ( [ DATE ( '2017-05-17' ), DATE ( '2018-05-08' ), DATE ( '2019-05-07' ), -- cancelled in 2020 due to pandemic DATE ( '2021-05-18' ), DATE ( '2022-05-11' ) ] ) AS primary date ) ); Visualize the forecasted results After you create the model using custom holidays, join the original data from the bqml tutorial.googleio page views table with the forecasted value from the ML.EXPLAIN FORECAST function , and then visualize it by using Data Studio : Go to the BigQuery page.
- Go to BigQuery In the SQL editor pane, run the following SQL statement: CREATE OR REPLACE MODEL bqml tutorial.forecast googleio OPTIONS ( model type = 'ARIMA PLUS' , holiday region = 'US' , time series timestamp col = 'date' , time series data col = 'views' , data frequency = 'DAILY' , horizon = 365 ) AS SELECT FROM bqml tutorial.googleio page views WHERE date '2022-01-01' ; Visualize the forecasted results After you create the model using built-in holidays, join the original data from the bqml tutorial.googleio page views table with the forecasted value from the ML.EXPLAIN FORECAST function , and then visualize it by using Data Studio : Go to the BigQuery page.
- Use custom holidays in an ARIMA PLUS time-series forecasting model This tutorial shows you how to do the following tasks: Create an ARIMA PLUS time-series forecasting model that uses only built-in holidays.
- Create an ARIMA PLUS time-series forecasting model that uses custom holidays in addition to built-in holidays.

