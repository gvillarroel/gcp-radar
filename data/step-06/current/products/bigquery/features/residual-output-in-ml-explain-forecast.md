---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.516Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Residual output in ML.EXPLAIN_FORECAST"
feature_slug: "residual-output-in-ml-explain-forecast"
latest_feature_date: "2024-01-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/arima-multiple-time-series-forecasting-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/arima-single-time-series-forecasting-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/time-series-forecasting-holidays-tutorial"
keywords:
  - "residual"
  - "output"
  - "ml"
  - "explain"
  - "forecast"
  - "bigquery"
  - "adds"
  - "column"
---

# Residual output in ML.EXPLAIN_FORECAST

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery ML adds a residual column to ML.EXPLAIN_FORECAST output for ARIMA_PLUS and ARIMA_PLUS_XREG models.

## Extended Definition

BigQuery ML adds a residual column to ML.EXPLAIN_FORECAST output for ARIMA_PLUS and ARIMA_PLUS_XREG models.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/arima-multiple-time-series-forecasting-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-multiple-time-series-forecasting-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/arima-single-time-series-forecasting-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-single-time-series-forecasting-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/time-series-forecasting-holidays-tutorial](https://docs.cloud.google.com/bigquery/docs/time-series-forecasting-holidays-tutorial)

## Supporting Pages

### "Forecast a single time series with an ARIMA_PLUS univariate model \_|\_\

- URL: [https://docs.cloud.google.com/bigquery/docs/arima-single-time-series-forecasting-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-single-time-series-forecasting-tutorial)
- Source ID: `site-docs-reference`
- Final score: 192
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up ADC for a local development environment . ex pred = model . predict explain ( horizon = 30 , confidence level = 0.8 ) print ( ex pred . head ( 4 )) Expected output: time series timestamp time series type time series data time series adjusted data standard error confidence level prediction interval lower bound prediction interval upper bound trend seasonal period yearly seasonal period quarterly seasonal period monthly seasonal period weekly seasonal period daily holiday effect spikes and dips step changes residual 0 2016-08-01 00:00:00+00:00 history 1711.0 505.716474 206.939556 <NA> <NA> <NA> 0.0 <NA> <NA> <NA> 169.611938 <NA> <NA> <NA> 1205.283526 336.104536 1 2016-08-02 00:00:00+00:00 history 2140.0 623.137701 206.939556 <NA> <NA> <NA> 336.104428 <NA> <NA> <NA> 287.033273 <NA> <NA> <NA> 1205.283526 311.578773 2 2016-08-03 00:00:00+00:00 history 2890.0 1008.655091 206.939556 <NA> <NA> <NA> 563.514213 <NA> <NA> <NA> 445.140878 <NA> <NA> <NA> 1205.283526 676.061383 3 2016-08-04 00:00:00+00:00 history 3161.0 1389.40959 206.939556 <NA> <NA> <NA> 986.317236 <NA> <NA> <NA> 403.092354 <NA> <NA> <NA> 1205.283526 566.306884 4 2016-08-05 00:00:00+00:00 history 2702.0 1394.395741 206.939556 <NA> <NA> <NA> 1248.707386 <NA> <NA> <NA> 145.688355 <NA> <NA> <NA> 1205.283526 102.320733 5 2016-08-06 00:00:00+00:00 history 1663.0 437.09243 206.939556 <NA> <NA> <NA> 1188.59004 <NA> <NA> <NA> -751.49761 <NA> <NA> <NA> 1205.283526 20.624044 If you would like to visualize the results, you can use Data Studio as described in the Visualize the input data section to create a chart, using the following columns as metrics: time series data prediction interval lower bound prediction interval upper bound trend seasonal period weekly step changes Clean up To avoid incurring charges to your Google Cloud account for the resources used in this tutorial, either delete the project that contains the resources, or keep the project and delete the individual resources.
- Read and visualize the time series you want to forecast. df = bpd . read gbq ( "bigquery-public-data.google analytics sample.ga sessions " ) parsed date = bpd . to datetime ( df . date , format = "%Y%m %d " , utc = True ) parsed date . name = "parsed date" visits = df [ "totals" ] . struct . field ( "visits" ) visits . name = "total visits" total visits = visits . groupby ( parsed date ) . sum () Expected output: total visits.head() parsed date 2016-08-01 00:00:00+00:00 1711 2016-08-02 00:00:00+00:00 2140 2016-08-03 00:00:00+00:00 2890 2016-08-04 00:00:00+00:00 3161 2016-08-05 00:00:00+00:00 2702 Name: total visits, dtype: Int64 total visits . plot . line () The result is similar to the following: Create the time series model Create a time series model to forecast total site visits as represented by totals.visits column, and train it on the Google Analytics 360 data.
- EXPLAIN FORECAST ( MODEL bqml tutorial.ga arima model , STRUCT ( 30 AS horizon , 0.8 AS confidence level )); The results should look similar to the following: The output rows are ordered chronologically by the time series timestamp column value.
- For more information about the output columns, see ML.EXPLAIN FORECAST function .

### "Forecast multiple time series with an ARIMA_PLUS univariate model \_|\_\

- URL: [https://docs.cloud.google.com/bigquery/docs/arima-multiple-time-series-forecasting-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-multiple-time-series-forecasting-tutorial)
- Source ID: `site-docs-reference`
- Final score: 192
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up ADC for a local development environment . explain = model . predict explain ( horizon = 3 , confidence level = 0.9 ) print ( explain . peek ( 5 )) Expected output: time series timestamp start station name time series type time series data time series adjusted data standard error confidence level prediction interval lower bound prediction interval upper bound trend seasonal period yearly seasonal period quarterly seasonal period monthly seasonal period weekly seasonal period daily holiday effect spikes and dips step changes residual 0 2013-07-01 00:00:00+00:00 Central Park S & 6 Ave history 69.0 154.168527 32.572948 <NA> <NA> <NA> 0.0 35.477484 <NA> <NA> -28.402102 <NA> <NA> 0.0 -85.168527 147.093145 1 2013-07-01 00:00:00+00:00 Grand Army Plaza & Central Park S history 79.0 79.0 24.982769 <NA> <NA> <NA> 0.0 43.46428 <NA> <NA> -30.01599 <NA> <NA> 0.0 0.0 65.55171 2 2013-07-02 00:00:00+00:00 Central Park S & 6 Ave history 180.0 204.045651 32.572948 <NA> <NA> <NA> 147.093045 72.498327 <NA> <NA> -15.545721 <NA> <NA> 0.0 -85.168527 61.122876 3 2013-07-02 00:00:00+00:00 Grand Army Plaza & Central Park S history 129.0 99.556269 24.982769 <NA> <NA> <NA> 65.551665 45.836432 <NA> <NA> -11.831828 <NA> <NA> 0.0 0.0 29.443731 4 2013-07-03 00:00:00+00:00 Central Park S & 6 Ave history 115.0 205.968236 32.572948 <NA> <NA> <NA> 191.32754 59.220766 <NA> <NA> -44.580071 <NA> <NA> 0.0 -85.168527 -5.799709 The output rows are ordered first by time series timestamp , then chronologically by the start station name column value.
- For more information about the output columns, see ML.EXPLAIN FORECAST .
- BigQuery DataFrames You can get explainability metrics in addition to forecast data by using the predict explain function.
- The results should look like the following: For more information about the output columns, see ML.FORECAST function .

### "Use custom holidays in an ARIMA_PLUS time-series forecasting model \_|\_\

- URL: [https://docs.cloud.google.com/bigquery/docs/time-series-forecasting-holidays-tutorial](https://docs.cloud.google.com/bigquery/docs/time-series-forecasting-holidays-tutorial)
- Source ID: `site-docs-reference-2`
- Final score: 124
- Re-rank relevance: N/A

Evidence snippets:
- Go to BigQuery In the SQL editor pane, run the following SQL statement: CREATE OR REPLACE MODEL bqml tutorial.forecast googleio with custom holiday OPTIONS ( model type = 'ARIMA PLUS' , holiday region = 'US' , time series timestamp col = 'date' , time series data col = 'views' , data frequency = 'DAILY' , horizon = 365 ) AS ( training data AS ( SELECT FROM bqml tutorial.googleio page views WHERE date '2022-01-01' ), custom holiday AS ( SELECT 'US' AS region , 'GoogleIO' AS holiday name , primary date , 1 AS preholiday days , 2 AS postholiday days FROM UNNEST ( [ DATE ( '2017-05-17' ), DATE ( '2018-05-08' ), DATE ( '2019-05-07' ), -- cancelled in 2020 due to pandemic DATE ( '2021-05-18' ), DATE ( '2022-05-11' ) ] ) AS primary date ) ); Visualize the forecasted results After you create the model using custom holidays, join the original data from the bqml tutorial.googleio page views table with the forecasted value from the ML.EXPLAIN FORECAST function , and then visualize it by using Data Studio : Go to the BigQuery page.
- Go to BigQuery In the SQL editor pane, run the following SQL statement: CREATE OR REPLACE MODEL bqml tutorial.forecast googleio OPTIONS ( model type = 'ARIMA PLUS' , holiday region = 'US' , time series timestamp col = 'date' , time series data col = 'views' , data frequency = 'DAILY' , horizon = 365 ) AS SELECT FROM bqml tutorial.googleio page views WHERE date '2022-01-01' ; Visualize the forecasted results After you create the model using built-in holidays, join the original data from the bqml tutorial.googleio page views table with the forecasted value from the ML.EXPLAIN FORECAST function , and then visualize it by using Data Studio : Go to the BigQuery page.
- HOLIDAY INFO ( MODEL bqml tutorial.forecast googleio with custom holiday ); The results show both Google I/O and the built-in holidays in the list of holidays: Evaluate the effects of the custom holidays Evaluate the effects of the custom holidays on the forecasted results by using the ML.EXPLAIN FORECAST function : Go to the BigQuery page.
- Go to BigQuery In the SQL editor pane, run the following SQL statement: SELECT original . date , original . views AS original views , explain forecast . time series adjusted data AS adjusted views without custom holiday , FROM bqml tutorial.googleio page views original INNER JOIN ( SELECT FROM ML .

