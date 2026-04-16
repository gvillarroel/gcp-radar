---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.589Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "ML.HOLIDAY_INFO"
feature_slug: "ml-holiday-info"
latest_feature_date: "2023-07-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/time-series-forecasting-holidays-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/arima-time-series-forecasting-with-limits-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/arima-single-time-series-forecasting-tutorial"
keywords:
  - "ml"
  - "holiday"
  - "info"
  - "returns"
  - "list"
  - "holidays"
  - "modeled"
  - "arima"
---

# ML.HOLIDAY_INFO

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

ML.HOLIDAY_INFO returns the list of holidays modeled by an ARIMA_PLUS or ARIMA_PLUS_XREG time series forecasting model.

## Extended Definition

ML.HOLIDAY_INFO returns the list of holidays modeled by an ARIMA_PLUS or ARIMA_PLUS_XREG time series forecasting model.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/time-series-forecasting-holidays-tutorial](https://docs.cloud.google.com/bigquery/docs/time-series-forecasting-holidays-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/arima-time-series-forecasting-with-limits-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-time-series-forecasting-with-limits-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/arima-single-time-series-forecasting-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-single-time-series-forecasting-tutorial)

## Supporting Pages

### "Use custom holidays in an ARIMA_PLUS time-series forecasting model \_|\_\

- URL: [https://docs.cloud.google.com/bigquery/docs/time-series-forecasting-holidays-tutorial](https://docs.cloud.google.com/bigquery/docs/time-series-forecasting-holidays-tutorial)
- Source ID: `site-docs-reference-2`
- Final score: 284
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- HOLIDAY INFO ( MODEL bqml tutorial.forecast googleio with custom holiday ); The results show both Google I/O and the built-in holidays in the list of holidays: Evaluate the effects of the custom holidays Evaluate the effects of the custom holidays on the forecasted results by using the ML.EXPLAIN FORECAST function : Go to the BigQuery page.
- Inspect holiday information Inspect the list of holidays that were taken into account during modeling by using the ML.HOLIDAY INFO function : Go to the BigQuery page.
- Go to BigQuery In the SQL editor pane, run the following SQL statement: CREATE OR REPLACE MODEL bqml tutorial.forecast googleio with custom holiday OPTIONS ( model type = 'ARIMA PLUS' , holiday region = 'US' , time series timestamp col = 'date' , time series data col = 'views' , data frequency = 'DAILY' , horizon = 365 ) AS ( training data AS ( SELECT FROM bqml tutorial.googleio page views WHERE date '2022-01-01' ), custom holiday AS ( SELECT 'US' AS region , 'GoogleIO' AS holiday name , primary date , 1 AS preholiday days , 2 AS postholiday days FROM UNNEST ( [ DATE ( '2017-05-17' ), DATE ( '2018-05-08' ), DATE ( '2019-05-07' ), -- cancelled in 2020 due to pandemic DATE ( '2021-05-18' ), DATE ( '2022-05-11' ) ] ) AS primary date ) ); Visualize the forecasted results After you create the model using custom holidays, join the original data from the bqml tutorial.googleio page views table with the forecasted value from the ML.EXPLAIN FORECAST function , and then visualize it by using Data Studio : Go to the BigQuery page.
- Go to BigQuery In the SQL editor pane, run the following SQL statement: CREATE OR REPLACE MODEL bqml tutorial.forecast googleio OPTIONS ( model type = 'ARIMA PLUS' , holiday region = 'US' , time series timestamp col = 'date' , time series data col = 'views' , data frequency = 'DAILY' , horizon = 365 ) AS SELECT FROM bqml tutorial.googleio page views WHERE date '2022-01-01' ; Visualize the forecasted results After you create the model using built-in holidays, join the original data from the bqml tutorial.googleio page views table with the forecasted value from the ML.EXPLAIN FORECAST function , and then visualize it by using Data Studio : Go to the BigQuery page.

### "Limit forecasted values for an ARIMA_PLUS time series model \_|\_ BigQuery\

- URL: [https://docs.cloud.google.com/bigquery/docs/arima-time-series-forecasting-with-limits-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-time-series-forecasting-with-limits-tutorial)
- Source ID: `site-docs-reference`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- This allows a more accurate modeling on those United States holidays time points if there are indeed United States holiday patterns in the time series.
- This allows a more accurate modeling on those United States holidays time points if there are indeed United States holiday patterns in the time series.
- Note: You might wonder if United States holidays have an impact on the time series.
- Note: You might wonder if United States holidays have an impact on the time series.

### "Forecast a single time series with an ARIMA_PLUS univariate model \_|\_\

- URL: [https://docs.cloud.google.com/bigquery/docs/arima-single-time-series-forecasting-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-single-time-series-forecasting-tutorial)
- Source ID: `site-docs-reference`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up ADC for a local development environment . ex pred = model . predict explain ( horizon = 30 , confidence level = 0.8 ) print ( ex pred . head ( 4 )) Expected output: time series timestamp time series type time series data time series adjusted data standard error confidence level prediction interval lower bound prediction interval upper bound trend seasonal period yearly seasonal period quarterly seasonal period monthly seasonal period weekly seasonal period daily holiday effect spikes and dips step changes residual 0 2016-08-01 00:00:00+00:00 history 1711.0 505.716474 206.939556 <NA> <NA> <NA> 0.0 <NA> <NA> <NA> 169.611938 <NA> <NA> <NA> 1205.283526 336.104536 1 2016-08-02 00:00:00+00:00 history 2140.0 623.137701 206.939556 <NA> <NA> <NA> 336.104428 <NA> <NA> <NA> 287.033273 <NA> <NA> <NA> 1205.283526 311.578773 2 2016-08-03 00:00:00+00:00 history 2890.0 1008.655091 206.939556 <NA> <NA> <NA> 563.514213 <NA> <NA> <NA> 445.140878 <NA> <NA> <NA> 1205.283526 676.061383 3 2016-08-04 00:00:00+00:00 history 3161.0 1389.40959 206.939556 <NA> <NA> <NA> 986.317236 <NA> <NA> <NA> 403.092354 <NA> <NA> <NA> 1205.283526 566.306884 4 2016-08-05 00:00:00+00:00 history 2702.0 1394.395741 206.939556 <NA> <NA> <NA> 1248.707386 <NA> <NA> <NA> 145.688355 <NA> <NA> <NA> 1205.283526 102.320733 5 2016-08-06 00:00:00+00:00 history 1663.0 437.09243 206.939556 <NA> <NA> <NA> 1188.59004 <NA> <NA> <NA> -751.49761 <NA> <NA> <NA> 1205.283526 20.624044 If you would like to visualize the results, you can use Data Studio as described in the Visualize the input data section to create a chart, using the following columns as metrics: time series data prediction interval lower bound prediction interval upper bound trend seasonal period weekly step changes Clean up To avoid incurring charges to your Google Cloud account for the resources used in this tutorial, either delete the project that contains the resources, or keep the project and delete the individual resources.
- The summary() function shows you the evaluation metrics of all the candidate models evaluated during the process of automatic hyperparameter tuning. summary = model . summary ( show all candidate models = True , ) print ( summary . peek ()) Expected output: row non seasonal p non seasonal d non seasonal q has drift log likelihood AIC variance seasonal periods has holiday effect has spikes and dips has step changes error message 0 0 1 3 True -2464.255656 4938.511313 42772.506055 ['WEEKLY'] False False True 1 2 1 0 False -2473.141651 4952.283303 44942.416463 ['WEEKLY'] False False True 2 1 1 0 False -2479.880885 4963.76177 46642.953433 ['WEEKLY'] False False True 3 0 1 1 False -2470.632377 4945.264753 44319.379307 ['WEEKLY'] False False True 4 2 1 1 True -2463.671247 4937.342493 42633.299513 ['WEEKLY'] False False True The non seasonal p , non seasonal d , non seasonal q , and has drift output columns define an ARIMA model in the training pipeline.
- For more information, see Set up ADC for a local development environment . coef = model . coef print ( coef . peek ()) Expected output: ar coefficients ma coefficients intercept or drift 0 [0.40944762] [-0.81168198] 0.0 The ar coefficients output column shows the model coefficients of the autoregressive (AR) part of the ARIMA model.
- For more information, see Set up ADC for a local development environment . from bigframes.ml import forecasting import bigframes.pandas as bpd Create a time series model to forecast total site visits: The auto arima option defaults to True, so the auto.ARIMA algorithm automatically tunes the hyperparameters in the model.

