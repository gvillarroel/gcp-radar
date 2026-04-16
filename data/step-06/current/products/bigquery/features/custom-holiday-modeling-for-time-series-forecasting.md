---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.587Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Custom holiday modeling for time series forecasting"
feature_slug: "custom-holiday-modeling-for-time-series-forecasting"
latest_feature_date: "2023-07-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/time-series-forecasting-holidays-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/arima-single-time-series-forecasting-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/arima-time-series-forecasting-with-limits-tutorial"
keywords:
  - "custom"
  - "holiday"
  - "modeling"
  - "time"
  - "series"
  - "forecasting"
  - "bigquery"
  - "ml"
---

# Custom holiday modeling for time series forecasting

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery ML supports custom holiday modeling for ARIMA_PLUS and ARIMA_PLUS_XREG time series forecasting models.

## Extended Definition

BigQuery ML supports custom holiday modeling for ARIMA_PLUS and ARIMA_PLUS_XREG time series forecasting models.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/time-series-forecasting-holidays-tutorial](https://docs.cloud.google.com/bigquery/docs/time-series-forecasting-holidays-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/arima-single-time-series-forecasting-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-single-time-series-forecasting-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/arima-time-series-forecasting-with-limits-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-time-series-forecasting-with-limits-tutorial)

## Supporting Pages

### "Use custom holidays in an ARIMA_PLUS time-series forecasting model \_|\_\

- URL: [https://docs.cloud.google.com/bigquery/docs/time-series-forecasting-holidays-tutorial](https://docs.cloud.google.com/bigquery/docs/time-series-forecasting-holidays-tutorial)
- Source ID: `site-docs-reference-2`
- Final score: 319
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Go to BigQuery In the SQL editor pane, run the following SQL statement: CREATE OR REPLACE MODEL bqml tutorial.forecast googleio with custom holiday OPTIONS ( model type = 'ARIMA PLUS' , holiday region = 'US' , time series timestamp col = 'date' , time series data col = 'views' , data frequency = 'DAILY' , horizon = 365 ) AS ( training data AS ( SELECT FROM bqml tutorial.googleio page views WHERE date '2022-01-01' ), custom holiday AS ( SELECT 'US' AS region , 'GoogleIO' AS holiday name , primary date , 1 AS preholiday days , 2 AS postholiday days FROM UNNEST ( [ DATE ( '2017-05-17' ), DATE ( '2018-05-08' ), DATE ( '2019-05-07' ), -- cancelled in 2020 due to pandemic DATE ( '2021-05-18' ), DATE ( '2022-05-11' ) ] ) AS primary date ) ); Visualize the forecasted results After you create the model using custom holidays, join the original data from the bqml tutorial.googleio page views table with the forecasted value from the ML.EXPLAIN FORECAST function , and then visualize it by using Data Studio : Go to the BigQuery page.
- Go to BigQuery In the SQL editor pane, run the following SQL statement: CREATE OR REPLACE TABLE bqml tutorial.googleio page views AS SELECT DATETIME TRUNC ( datehour , DAY ) AS date , SUM ( views ) AS views FROM bigquery-public-data.wikipedia.pageviews WHERE datehour >= '2017-01-01' AND datehour '2023-01-01' AND title = 'Google I/O' GROUP BY DATETIME TRUNC ( datehour , DAY ) Create a time-series forecasting model that uses built-in holidays Create a model that forecasts daily page views for the Wikipedia "Google I/O" page, based on page view data before 2022 and taking built-in holidays into account: Go to the BigQuery page.
- Go to BigQuery In the SQL editor pane, run the following SQL statement: SELECT original . date , original . views AS original views , explain forecast . time series adjusted data AS adjusted views without custom holiday , FROM bqml tutorial.googleio page views original INNER JOIN ( SELECT FROM ML .
- Go to BigQuery In the SQL editor pane, run the following SQL statement: SELECT original . date , original . views AS original views , explain forecast . time series adjusted data AS adjusted views with custom holiday , FROM bqml tutorial.googleio page views original INNER JOIN ( SELECT FROM ML .

### "Forecast a single time series with an ARIMA_PLUS univariate model \_|\_\

- URL: [https://docs.cloud.google.com/bigquery/docs/arima-single-time-series-forecasting-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-single-time-series-forecasting-tutorial)
- Source ID: `site-docs-reference`
- Final score: 265
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Setting this option allows a more accurate modeling on holiday time points if there are any holiday patterns in the time series.
- For more information, see Set up ADC for a local development environment . ex pred = model . predict explain ( horizon = 30 , confidence level = 0.8 ) print ( ex pred . head ( 4 )) Expected output: time series timestamp time series type time series data time series adjusted data standard error confidence level prediction interval lower bound prediction interval upper bound trend seasonal period yearly seasonal period quarterly seasonal period monthly seasonal period weekly seasonal period daily holiday effect spikes and dips step changes residual 0 2016-08-01 00:00:00+00:00 history 1711.0 505.716474 206.939556 <NA> <NA> <NA> 0.0 <NA> <NA> <NA> 169.611938 <NA> <NA> <NA> 1205.283526 336.104536 1 2016-08-02 00:00:00+00:00 history 2140.0 623.137701 206.939556 <NA> <NA> <NA> 336.104428 <NA> <NA> <NA> 287.033273 <NA> <NA> <NA> 1205.283526 311.578773 2 2016-08-03 00:00:00+00:00 history 2890.0 1008.655091 206.939556 <NA> <NA> <NA> 563.514213 <NA> <NA> <NA> 445.140878 <NA> <NA> <NA> 1205.283526 676.061383 3 2016-08-04 00:00:00+00:00 history 3161.0 1389.40959 206.939556 <NA> <NA> <NA> 986.317236 <NA> <NA> <NA> 403.092354 <NA> <NA> <NA> 1205.283526 566.306884 4 2016-08-05 00:00:00+00:00 history 2702.0 1394.395741 206.939556 <NA> <NA> <NA> 1248.707386 <NA> <NA> <NA> 145.688355 <NA> <NA> <NA> 1205.283526 102.320733 5 2016-08-06 00:00:00+00:00 history 1663.0 437.09243 206.939556 <NA> <NA> <NA> 1188.59004 <NA> <NA> <NA> -751.49761 <NA> <NA> <NA> 1205.283526 20.624044 If you would like to visualize the results, you can use Data Studio as described in the Visualize the input data section to create a chart, using the following columns as metrics: time series data prediction interval lower bound prediction interval upper bound trend seasonal period weekly step changes Clean up To avoid incurring charges to your Google Cloud account for the resources used in this tutorial, either delete the project that contains the resources, or keep the project and delete the individual resources.
- Read and visualize the time series you want to forecast. df = bpd . read gbq ( "bigquery-public-data.google analytics sample.ga sessions " ) parsed date = bpd . to datetime ( df . date , format = "%Y%m %d " , utc = True ) parsed date . name = "parsed date" visits = df [ "totals" ] . struct . field ( "visits" ) visits . name = "total visits" total visits = visits . groupby ( parsed date ) . sum () Expected output: total visits.head() parsed date 2016-08-01 00:00:00+00:00 1711 2016-08-02 00:00:00+00:00 2140 2016-08-03 00:00:00+00:00 2890 2016-08-04 00:00:00+00:00 3161 2016-08-05 00:00:00+00:00 2702 Name: total visits, dtype: Int64 total visits . plot . line () The result is similar to the following: Create the time series model Create a time series model to forecast total site visits as represented by totals.visits column, and train it on the Google Analytics 360 data.
- Go to BigQuery In the query editor, paste in the following query and click Run : CREATE OR REPLACE MODEL bqml tutorial.ga arima model OPTIONS ( model type = 'ARIMA PLUS' , time series timestamp col = 'parsed date' , time series data col = 'total visits' , auto arima = TRUE , data frequency = 'AUTO FREQUENCY' , decompose time series = TRUE ) AS SELECT PARSE TIMESTAMP ( "%Y%m%d" , date ) AS parsed date , SUM ( totals . visits ) AS total visits FROM bigquery-public-data.google analytics sample.ga sessions GROUP BY date ; The query takes about 4 seconds to complete, after which you can access the ga arima model model.

### "Limit forecasted values for an ARIMA_PLUS time series model \_|\_ BigQuery\

- URL: [https://docs.cloud.google.com/bigquery/docs/arima-time-series-forecasting-with-limits-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-time-series-forecasting-with-limits-tutorial)
- Source ID: `site-docs-reference`
- Final score: 261
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This allows a more accurate modeling on those United States holidays time points if there are indeed United States holiday patterns in the time series.
- This allows a more accurate modeling on those United States holidays time points if there are indeed United States holiday patterns in the time series.
- This option causes the model to only forecast values that are greater than 0, based on the values in the column specified by the time series data col argument, in this case num trips . #standardSQL CREATE OR REPLACE MODEL bqml tutorial . nyc citibike arima model OPTIONS ( model type = 'ARIMA PLUS' , time series timestamp col = 'date' , time series data col = 'num trips' , time series id col = 'start station id' , forecast limit lower bound = 0 ) AS SELECT EXTRACT ( DATE FROM starttime ) AS date , COUNT ( ) AS num trips , start station id FROM bigquery-public-data . new york . citibike trips WHERE starttime > '2014-07-11' AND starttime '2015-02-11' GROUP BY date , start station id ; Run the CREATE MODEL query to create and train your model: In the Google Cloud console, click the Compose new query button.
- The CREATE MODEL statement creates and trains a model named bqml tutorial.nyc citibike arima model . #standardSQL CREATE OR REPLACE MODEL bqml tutorial . nyc citibike arima model OPTIONS ( model type = 'ARIMA PLUS' , time series timestamp col = 'date' , time series data col = 'num trips' , time series id col = 'start station id' ) AS SELECT EXTRACT ( DATE FROM starttime ) AS date , COUNT ( ) AS num trips , start station id FROM bigquery-public-data . new york . citibike trips WHERE starttime > '2014-07-11' AND starttime '2015-02-11' GROUP BY date , start station id ; The OPTIONS(model type='ARIMA PLUS', time series timestamp col='date', ...) clause indicates that you are creating an ARIMA -based time series model.

