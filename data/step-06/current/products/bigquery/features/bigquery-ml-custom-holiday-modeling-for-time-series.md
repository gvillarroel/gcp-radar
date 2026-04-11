---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.605Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery ML custom holiday modeling for time series"
feature_slug: "bigquery-ml-custom-holiday-modeling-for-time-series"
latest_feature_date: "2023-11-06"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/time-series-forecasting-holidays-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/arima-plus-xreg-single-time-series-forecasting-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/arima-single-time-series-forecasting-tutorial"
keywords:
  - "time series holiday modeling"
  - "holiday info table"
  - "ML.HOLIDAY_INFO"
  - "holiday effects"
  - "time series model options"
  - "ML.EXPLAIN_FORECAST"
  - "custom holidays"
  - "custom_holidays"
---

# BigQuery ML custom holiday modeling for time series

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

BigQuery ML time series models can define custom holidays, expose them through ML.HOLIDAY_INFO, and explain holiday effects via ML.EXPLAIN_FORECAST.

## Extended Definition

BigQuery ML ARIMA_PLUS time-series forecasting supports custom holiday modeling by including a custom holiday definition in model creation, as shown in the holidays tutorial workflow for events like Google I/O. The modeled holidays can be surfaced with `ML.HOLIDAY_INFO`, which returns both built-in and custom holiday entries for the model, and their impact can be interpreted using `ML.EXPLAIN_FORECAST` (including forecast components and nonzero holiday effects). `ML.EXPLAIN_FORECAST` is the explainability path used to attribute effects such as holiday-driven changes in forecasted values.

## Evidence Summary

The pages document how to define custom holidays in ARIMA_PLUS forecasting models, inspect those holidays via ML.HOLIDAY_INFO, and use ML.EXPLAIN_FORECAST to explain holiday and component-level forecast effects.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/time-series-forecasting-holidays-tutorial](https://docs.cloud.google.com/bigquery/docs/time-series-forecasting-holidays-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/arima-plus-xreg-single-time-series-forecasting-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-plus-xreg-single-time-series-forecasting-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/arima-single-time-series-forecasting-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-single-time-series-forecasting-tutorial)

## Supporting Pages

### "Use custom holidays in an ARIMA_PLUS time-series forecasting model \_|\_\

- URL: [https://docs.cloud.google.com/bigquery/docs/time-series-forecasting-holidays-tutorial](https://docs.cloud.google.com/bigquery/docs/time-series-forecasting-holidays-tutorial)
- Source ID: `site-docs-root-2`
- Final score: 78
- Re-rank relevance: STRONG
- Re-rank rationale: The tutorial directly explains how to create ARIMA_PLUS models with custom holidays and assess their forecast impact.

Evidence snippets:
- Go to BigQuery In the SQL editor pane, run the following SQL statement: CREATE OR REPLACE MODEL bqml tutorial.forecast googleio with custom holiday OPTIONS ( model type = 'ARIMA PLUS' , holiday region = 'US' , time series timestamp col = 'date' , time series data col = 'views' , data frequency = 'DAILY' , horizon = 365 ) AS ( training data AS ( SELECT FROM bqml tutorial.googleio page views WHERE date '2022-01-01' ), custom holiday AS ( SELECT 'US' AS region , 'GoogleIO' AS holiday name , primary date , 1 AS preholiday days , 2 AS postholiday days FROM UNNEST ( [ DATE ( '2017-05-17' ), DATE ( '2018-05-08' ), DATE ( '2019-05-07' ), -- cancelled in 2020 due to pandemic DATE ( '2021-05-18' ), DATE ( '2022-05-11' ) ] ) AS primary date ) ); Visualize the forecasted results After you create the model using custom holidays, join the original data from the bqml tutorial.googleio page views table with the forecasted value from the ML.EXPLAIN FORECAST function , and then visualize it by using Looker Studio : Go to the BigQuery page.
- HOLIDAY INFO ( MODEL bqml tutorial.forecast googleio with custom holiday ); The results show both Google I/O and the built-in holidays in the list of holidays: Evaluate the effects of the custom holidays Evaluate the effects of the custom holidays on the forecasted results by using the ML.EXPLAIN FORECAST function : Go to the BigQuery page.
- EXPLAIN FORECAST ( model bqml tutorial.forecast googleio with custom holiday , STRUCT ( 365 AS horizon )) WHERE holiday effect != 0 ; The results show that Google I/O contributes a large amount of holiday effect to the forecasted results: Compare model performance Use the ML.EVALUATE function to compare the performance of the first model created without custom holidays and the second model created with custom holidays.
- To take this variation into account, create a model that forecasts page views for the Wikipedia "Google I/O" page through 2022, based on page view data from before 2022, and using custom holidays to represent the Google I/O event each year.

### "Forecast a single time series with a multivariate model \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/arima-plus-xreg-single-time-series-forecasting-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-plus-xreg-single-time-series-forecasting-tutorial)
- Source ID: `site-docs-reference`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- Similar to the ML.FORECAST function, the STRUCT(30 AS horizon, 0.8 AS confidence level) clause used in the ML.EXPLAIN FORECAST function indicates that the query forecasts 30 future time points and generates a prediction interval with 80% confidence.
- Retrieving components of the time series, such as seasonality, trend, and feature attributions, by using the ML.EXPLAIN FORECAST function .
- Explain the forecasting results You can get explainability metrics in addition to forecast data by using the ML.EXPLAIN FORECAST function.
- The ML.EXPLAIN FORECAST function forecasts future time series values and also returns all the separate components of the time series.

### "Forecast a single time series with an ARIMA_PLUS univariate model \_|\_\

- URL: [https://docs.cloud.google.com/bigquery/docs/arima-single-time-series-forecasting-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-single-time-series-forecasting-tutorial)
- Source ID: `site-docs-reference`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- Similar to the ML.FORECAST function, the STRUCT(30 AS horizon, 0.8 AS confidence level) clause used in the ML.EXPLAIN FORECAST function indicates that the query forecasts 30 future time points and generates a prediction interval with 80% confidence.
- Explain the forecasting results SQL You can get explainability metrics in addition to forecast data by using the ML.EXPLAIN FORECAST function.
- The ML.EXPLAIN FORECAST function forecasts future time series values and also returns all the separate components of the time series.
- Retrieving components of the time series, such as seasonality and trend, by using the ML.EXPLAIN FORECAST function .

