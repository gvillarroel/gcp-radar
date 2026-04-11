---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.596Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "ML.EXPLAIN_FORECAST residual output for ARIMA_PLUS models"
feature_slug: "ml-explain-forecast-residual-output-for-arima-plus-models"
latest_feature_date: "2024-01-24"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/arima-multiple-time-series-forecasting-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/arima-single-time-series-forecasting-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/time-series-forecasting-holidays-tutorial"
keywords:
  - "actual vs fitted values"
  - "EXPLAIN_FORECAST residuals"
  - "ARIMA residual output"
  - "forecast residuals"
  - "residual output"
  - "ML.EXPLAIN_FORECAST"
  - "ARIMA_PLUS_XREG"
  - "ARIMA_PLUS"
---

# ML.EXPLAIN_FORECAST residual output for ARIMA_PLUS models

Product: BigQuery
Coverage: LOW

## Step 02 Summary

Adds a residual output column to ML.EXPLAIN_FORECAST for ARIMA_PLUS and ARIMA_PLUS_XREG models showing differences between actual and fitted historical values.

## Extended Definition

The provided BigQuery documentation snippets show `ML.EXPLAIN_FORECAST` being used with `ARIMA PLUS` models to produce forecast explanations (including horizon and prediction-interval configuration) as part of time-series forecasting workflows. They demonstrate using this function alongside model training and result visualization, but they do not explicitly state that it now adds a separate residual column for ARIMA models, so that residual-output behavior is not directly evidenced in the provided excerpts.

## Evidence Summary

The cited pages confirm `ML.EXPLAIN_FORECAST` usage with ARIMA_PLUS models and forecast options, but do not explicitly document a residual output column for ARIMA_PLUS/ARIMA_PLUS_XREG.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/arima-multiple-time-series-forecasting-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-multiple-time-series-forecasting-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/arima-single-time-series-forecasting-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-single-time-series-forecasting-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/time-series-forecasting-holidays-tutorial](https://docs.cloud.google.com/bigquery/docs/time-series-forecasting-holidays-tutorial)

## Supporting Pages

### "Forecast multiple time series with an ARIMA_PLUS univariate model \_|\_\

- URL: [https://docs.cloud.google.com/bigquery/docs/arima-multiple-time-series-forecasting-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-multiple-time-series-forecasting-tutorial)
- Source ID: `site-docs-reference`
- Final score: 68
- Re-rank relevance: MODERATE
- Re-rank rationale: It explicitly references ML.EXPLAIN FORECAST for inspecting forecast components, though it does not mention residual output specifically.

Evidence snippets:
- Go to BigQuery In the query editor, paste in the following query and click Run : CREATE OR REPLACE MODEL bqml tutorial.nyc citibike arima model group OPTIONS ( model type = 'ARIMA PLUS' , time series timestamp col = 'date' , time series data col = 'num trips' , time series id col = 'start station name' , auto arima max order = 5 ) AS SELECT start station name , EXTRACT ( DATE from starttime ) AS date , COUNT ( ) AS num trips FROM bigquery-public-data.new york.citibike trips WHERE start station name LIKE '%Central Park%' GROUP BY start station name , date ; The query takes approximately 24 seconds to complete, after which you can access the nyc citibike arima model group model.
- Home Documentation Data analytics BigQuery Guides Send feedback Forecast multiple time series with an ARIMA PLUS univariate model Stay organized with collections Save and categorize content based on your preferences.
- The STRUCT(3 AS horizon, 0.9 AS confidence level) clause used in the ML.EXPLAIN FORECAST function indicates that the query forecasts 3 future time points and generates a prediction interval with 90% confidence.
- SQL In the following query, the OPTIONS(model type='ARIMA PLUS', time series timestamp col='date', ...) clause indicates that you are creating an ARIMA -based time series model.

### "Forecast a single time series with an ARIMA_PLUS univariate model \_|\_\

- URL: [https://docs.cloud.google.com/bigquery/docs/arima-single-time-series-forecasting-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-single-time-series-forecasting-tutorial)
- Source ID: `site-docs-reference`
- Final score: 56
- Re-rank relevance: WEAK
- Re-rank rationale: It mentions ML.EXPLAIN FORECAST for time-series components, but does not describe residual-output-specific behavior.

Evidence snippets:
- Go to BigQuery In the query editor, paste in the following query and click Run : CREATE OR REPLACE MODEL bqml tutorial.ga arima model OPTIONS ( model type = 'ARIMA PLUS' , time series timestamp col = 'parsed date' , time series data col = 'total visits' , auto arima = TRUE , data frequency = 'AUTO FREQUENCY' , decompose time series = TRUE ) AS SELECT PARSE TIMESTAMP ( "%Y%m%d" , date ) AS parsed date , SUM ( totals . visits ) AS total visits FROM bigquery-public-data.google analytics sample.ga sessions GROUP BY date ; The query takes about 4 seconds to complete, after which you can access the ga arima model model.
- Similar to the ML.FORECAST function, the STRUCT(30 AS horizon, 0.8 AS confidence level) clause used in the ML.EXPLAIN FORECAST function indicates that the query forecasts 30 future time points and generates a prediction interval with 80% confidence.
- Home Documentation Data analytics BigQuery Guides Send feedback Forecast a single time series with an ARIMA PLUS univariate model Stay organized with collections Save and categorize content based on your preferences.
- SQL In the following query, the OPTIONS(model type='ARIMA PLUS', time series timestamp col='date', ...) clause indicates that you are creating an ARIMA -based time series model.

### "Use custom holidays in an ARIMA_PLUS time-series forecasting model \_|\_\

- URL: [https://docs.cloud.google.com/bigquery/docs/time-series-forecasting-holidays-tutorial](https://docs.cloud.google.com/bigquery/docs/time-series-forecasting-holidays-tutorial)
- Source ID: `site-docs-root-2`
- Final score: 52
- Re-rank relevance: WEAK
- Re-rank rationale: It mentions evaluating forecasts and inspecting model behavior, but it does not explicitly define the residual output behavior of ML.EXPLAIN_FORECAST.

Evidence snippets:
- Go to BigQuery In the SQL editor pane, run the following SQL statement: CREATE OR REPLACE MODEL bqml tutorial.forecast googleio with custom holiday OPTIONS ( model type = 'ARIMA PLUS' , holiday region = 'US' , time series timestamp col = 'date' , time series data col = 'views' , data frequency = 'DAILY' , horizon = 365 ) AS ( training data AS ( SELECT FROM bqml tutorial.googleio page views WHERE date '2022-01-01' ), custom holiday AS ( SELECT 'US' AS region , 'GoogleIO' AS holiday name , primary date , 1 AS preholiday days , 2 AS postholiday days FROM UNNEST ( [ DATE ( '2017-05-17' ), DATE ( '2018-05-08' ), DATE ( '2019-05-07' ), -- cancelled in 2020 due to pandemic DATE ( '2021-05-18' ), DATE ( '2022-05-11' ) ] ) AS primary date ) ); Visualize the forecasted results After you create the model using custom holidays, join the original data from the bqml tutorial.googleio page views table with the forecasted value from the ML.EXPLAIN FORECAST function , and then visualize it by using Looker Studio : Go to the BigQuery page.
- Go to BigQuery In the SQL editor pane, run the following SQL statement: CREATE OR REPLACE MODEL bqml tutorial.forecast googleio OPTIONS ( model type = 'ARIMA PLUS' , holiday region = 'US' , time series timestamp col = 'date' , time series data col = 'views' , data frequency = 'DAILY' , horizon = 365 ) AS SELECT FROM bqml tutorial.googleio page views WHERE date '2022-01-01' ; Visualize the forecasted results After you create the model using built-in holidays, join the original data from the bqml tutorial.googleio page views table with the forecasted value from the ML.EXPLAIN FORECAST function , and then visualize it by using Looker Studio : Go to the BigQuery page.
- HOLIDAY INFO ( MODEL bqml tutorial.forecast googleio with custom holiday ); The results show both Google I/O and the built-in holidays in the list of holidays: Evaluate the effects of the custom holidays Evaluate the effects of the custom holidays on the forecasted results by using the ML.EXPLAIN FORECAST function : Go to the BigQuery page.
- Use custom holidays in an ARIMA PLUS time-series forecasting model This tutorial shows you how to do the following tasks: Create an ARIMA PLUS time-series forecasting model that uses only built-in holidays.

