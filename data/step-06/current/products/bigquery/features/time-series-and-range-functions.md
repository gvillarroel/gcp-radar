---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.430Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Time series and range functions"
feature_slug: "time-series-and-range-functions"
latest_feature_date: "2024-08-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/timesfm-time-series-forecasting-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/timesfm-anomaly-detection-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/arima-speed-up-tutorial"
keywords:
  - "time"
  - "series"
  - "range"
  - "functions"
  - "bigquery"
  - "provides"
  - "analysis"
---

# Time series and range functions

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery provides time series and range functions to support time series analysis; BigQuery provides time series and range functions for time series analysis.

## Extended Definition

BigQuery provides time series and range functions to support time series analysis; BigQuery provides time series and range functions for time series analysis.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/timesfm-time-series-forecasting-tutorial](https://docs.cloud.google.com/bigquery/docs/timesfm-time-series-forecasting-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/timesfm-anomaly-detection-tutorial](https://docs.cloud.google.com/bigquery/docs/timesfm-anomaly-detection-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/arima-speed-up-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-speed-up-tutorial)

## Supporting Pages

### "Forecast multiple time series with a TimesFM univariate model \_|\_ BigQuery\

- URL: [https://docs.cloud.google.com/bigquery/docs/timesfm-time-series-forecasting-tutorial](https://docs.cloud.google.com/bigquery/docs/timesfm-time-series-forecasting-tutorial)
- Source ID: `site-docs-reference-2`
- Final score: 151
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- FORECAST ( ( SELECT TIMESTAMP TRUNC ( start date , HOUR ) as trip hour , COUNT ( ) as num trips FROM bigquery-public-data.san francisco bikeshare.bikeshare trips WHERE subscriber type = 'Subscriber' AND start date >= TIMESTAMP ( '2018-01-01' ) GROUP BY TIMESTAMP TRUNC ( start date , HOUR ) ), horizon => 720 , confidence level => 0.95 , timestamp col => 'trip hour' , data col => 'num trips' , output historical time series => true ); When the query is finished running, click the Visualization tab in the Query results pane.
- Home Documentation Data analytics BigQuery Guides Send feedback Forecast multiple time series with a TimesFM univariate model Stay organized with collections Save and categorize content based on your preferences.
- FORECAST ( ( SELECT TIMESTAMP TRUNC ( start date , HOUR ) as trip hour , subscriber type , COUNT ( ) as num trips FROM bigquery-public-data.san francisco bikeshare.bikeshare trips WHERE start date >= TIMESTAMP ( '2018-01-01' ) GROUP BY TIMESTAMP TRUNC ( start date , HOUR ), subscriber type ), horizon => 720 , confidence level => 0.95 , timestamp col => 'trip hour' , data col => 'num trips' , id cols => [ 'subscriber type' ] ); The results look similar to the following: +---------------------+--------------------------+------------------+------------------+---------------------------------+---------------------------------+--------------------+ subscriber type forecast timestamp forecast value confidence level prediction interval lower bound prediction interval upper bound ai forecast status +---------------------+--------------------------+------------------+------------------+---------------------------------+---------------------------------+--------------------+ Subscriber 2018-05-01 00:00:00 UTC 26.3045959...
- FORECAST ( ( SELECT TIMESTAMP TRUNC ( start date , HOUR ) as trip hour , COUNT ( ) as num trips FROM bigquery-public-data.san francisco bikeshare.bikeshare trips WHERE subscriber type = 'Subscriber' AND start date >= TIMESTAMP ( '2018-01-01' ) GROUP BY TIMESTAMP TRUNC ( start date , HOUR ) ), horizon => 720 , confidence level => 0.95 , timestamp col => 'trip hour' , data col => 'num trips' ); The results look similar to the following: +-------------------------+-------------------+------------------+---------------------------------+---------------------------------+--------------------+ forecast timestamp forecast value confidence level prediction interval lower bound prediction interval upper bound ai forecast status +-------------------------+-------------------+------------------+---------------------------------+---------------------------------+--------------------+ 2018-05-01 00:00:00 UTC 26.3045959...

### "Detect anomalies in multiple time series with the TimesFM model \_|\_ BigQuery\

- URL: [https://docs.cloud.google.com/bigquery/docs/timesfm-anomaly-detection-tutorial](https://docs.cloud.google.com/bigquery/docs/timesfm-anomaly-detection-tutorial)
- Source ID: `site-docs-reference-2`
- Final score: 144
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Data analytics BigQuery Guides Send feedback Detect anomalies in multiple time series with the TimesFM model Stay organized with collections Save and categorize content based on your preferences.
- The resulting chart looks similar to the following: You can identify the anomalies where the time series data value falls outside the lower bound and upper bound range.
- This tutorial teaches you how to use the AI.DETECT ANOMALIES function with BigQuery ML's built-in TimesFM model to detect anomalies in time series data.
- DETECT ANOMALIES ( ( SELECT FROM bike share trips WHERE trip hour >= TIMESTAMP ( '2017-07-01' ) AND trip hour TIMESTAMP ( '2017-08-01' ) ), ( SELECT FROM bike share trips WHERE trip hour >= TIMESTAMP ( '2017-08-01' ) AND trip hour TIMESTAMP ( '2017-09-01' ) ), anomaly prob threshold => 0.95 , timestamp col => 'trip hour' , data col => 'num trips' , id cols => [ 'subscriber type' ] ); The results look similar to the following: +-----------------+-------------------------+------------------+------------+--------------------+---------------------+---------------------+---------------------------+ subscriber type time series timestamp time series data is anomaly lower bound upper bound anomaly probability ai detect anomalies status +-----------------+-------------------------+------------------+------------+--------------------+---------------------+---------------------+---------------------------+ Customer 2017-08-01 00:00:00 UTC 13.0 false -1.97939332204...

### "Scale an ARIMA_PLUS univariate time series model to millions of time series\

- URL: [https://docs.cloud.google.com/bigquery/docs/arima-speed-up-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-speed-up-tutorial)
- Source ID: `site-docs-reference`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- Go to BigQuery In the query editor, paste in the following query and click Run : CREATE OR REPLACE MODEL bqml tutorial.liquor forecast by product OPTIONS ( MODEL TYPE = 'ARIMA PLUS' , TIME SERIES TIMESTAMP COL = 'date' , TIME SERIES DATA COL = 'total bottles sold' , TIME SERIES ID COL = [ 'store number' , 'item description' ] , HOLIDAY REGION = 'US' , AUTO ARIMA MAX ORDER = 2 , MAX TIME SERIES LENGTH = 30 ) AS SELECT store number , item description , date , SUM ( bottles sold ) as total bottles sold FROM bigquery-public-data.iowa liquor sales.sales WHERE date BETWEEN DATE ( "2015-01-01" ) AND DATE ( "2021-12-31" ) GROUP BY store number , item description , date ; The query takes about 1 hour 16 minutes to complete.
- Go to BigQuery In the query editor, paste in the following query and click Run : CREATE OR REPLACE MODEL bqml tutorial.nyc citibike arima model max order 2 fast training OPTIONS ( model type = 'ARIMA PLUS' , time series timestamp col = 'date' , time series data col = 'num trips' , time series id col = 'start station name' , auto arima max order = 2 , max time series length = 30 ) AS SELECT FROM bqml tutorial.nyc citibike time series WHERE date '2016-06-01' ; The query takes about 35 seconds to complete.
- Go to BigQuery In the query editor, paste in the following query and click Run : CREATE OR REPLACE MODEL bqml tutorial.nyc citibike arima model max order 2 OPTIONS ( model type = 'ARIMA PLUS' , time series timestamp col = 'date' , time series data col = 'num trips' , time series id col = 'start station name' , auto arima max order = 2 ) AS SELECT FROM bqml tutorial.nyc citibike time series WHERE date '2016-06-01' ; The query takes about 2 minutes to complete.
- Go to BigQuery In the query editor, paste in the following query and click Run : CREATE OR REPLACE MODEL bqml tutorial.nyc citibike arima model default OPTIONS ( model type = 'ARIMA PLUS' , time series timestamp col = 'date' , time series data col = 'num trips' , time series id col = 'start station name' ) AS SELECT FROM bqml tutorial . nyc citibike time series WHERE date '2016-06-01' ; The query takes about 15 minutes to complete.

