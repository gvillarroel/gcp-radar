---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.743Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "ARIMA model type"
feature_slug: "arima-model-type"
latest_feature_date: "2021-04-19"
deprecation_date: "2021-04-19"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/arima-multiple-time-series-forecasting-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/arima-time-series-forecasting-with-limits-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/time-series-forecasting-holidays-tutorial"
keywords:
  - "arima"
  - "model"
  - "type"
  - "legacy"
  - "bigquery"
  - "ml"
  - "forecasting"
  - "superseded"
---

# ARIMA model type

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

The ARIMA model type is the legacy BigQuery ML forecasting model superseded by ARIMA_PLUS; deprecated on 2021-04-19.

## Extended Definition

The ARIMA model type is the legacy BigQuery ML forecasting model superseded by ARIMA_PLUS; deprecated on 2021-04-19.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/arima-multiple-time-series-forecasting-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-multiple-time-series-forecasting-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/arima-time-series-forecasting-with-limits-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-time-series-forecasting-with-limits-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/time-series-forecasting-holidays-tutorial](https://docs.cloud.google.com/bigquery/docs/time-series-forecasting-holidays-tutorial)

## Supporting Pages

### "Forecast multiple time series with an ARIMA_PLUS univariate model \_|\_\

- URL: [https://docs.cloud.google.com/bigquery/docs/arima-multiple-time-series-forecasting-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-multiple-time-series-forecasting-tutorial)
- Source ID: `site-docs-reference`
- Final score: 217
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Go to BigQuery In the query editor, paste in the following query and click Run : CREATE OR REPLACE MODEL bqml tutorial.nyc citibike arima model group OPTIONS ( model type = 'ARIMA PLUS' , time series timestamp col = 'date' , time series data col = 'num trips' , time series id col = 'start station name' , auto arima max order = 5 ) AS SELECT start station name , EXTRACT ( DATE from starttime ) AS date , COUNT ( ) AS num trips FROM bigquery-public-data.new york.citibike trips WHERE start station name LIKE '%Central Park%' GROUP BY start station name , date ; The query takes approximately 24 seconds to complete, after which you can access the nyc citibike arima model group model.
- This shrinks the search space of hyperparameter tuning in the auto.ARIMA algorithm. auto arima max order = 5 , ) df = bpd . read gbq ( "bigquery-public-data.new york.citibike trips" ) This query creates twelve time series models, one for each of the twelve Citi Bike start stations in the input data.
- Home Documentation Data analytics BigQuery Guides Send feedback Forecast multiple time series with an ARIMA PLUS univariate model Stay organized with collections Save and categorize content based on your preferences.
- SQL In the following query, the OPTIONS(model type='ARIMA PLUS', time series timestamp col='date', ...) clause indicates that you are creating an ARIMA -based time series model.

### "Limit forecasted values for an ARIMA_PLUS time series model \_|\_ BigQuery\

- URL: [https://docs.cloud.google.com/bigquery/docs/arima-time-series-forecasting-with-limits-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-time-series-forecasting-with-limits-tutorial)
- Source ID: `site-docs-reference`
- Final score: 217
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This option causes the model to only forecast values that are greater than 0, based on the values in the column specified by the time series data col argument, in this case num trips . #standardSQL CREATE OR REPLACE MODEL bqml tutorial . nyc citibike arima model OPTIONS ( model type = 'ARIMA PLUS' , time series timestamp col = 'date' , time series data col = 'num trips' , time series id col = 'start station id' , forecast limit lower bound = 0 ) AS SELECT EXTRACT ( DATE FROM starttime ) AS date , COUNT ( ) AS num trips , start station id FROM bigquery-public-data . new york . citibike trips WHERE starttime > '2014-07-11' AND starttime '2015-02-11' GROUP BY date , start station id ; Run the CREATE MODEL query to create and train your model: In the Google Cloud console, click the Compose new query button.
- The CREATE MODEL statement creates and trains a model named bqml tutorial.nyc citibike arima model . #standardSQL CREATE OR REPLACE MODEL bqml tutorial . nyc citibike arima model OPTIONS ( model type = 'ARIMA PLUS' , time series timestamp col = 'date' , time series data col = 'num trips' , time series id col = 'start station id' ) AS SELECT EXTRACT ( DATE FROM starttime ) AS date , COUNT ( ) AS num trips , start station id FROM bigquery-public-data . new york . citibike trips WHERE starttime > '2014-07-11' AND starttime '2015-02-11' GROUP BY date , start station id ; The OPTIONS(model type='ARIMA PLUS', time series timestamp col='date', ...) clause indicates that you are creating an ARIMA -based time series model.
- Enter the following GoogleSQL query in the query editor. #standardSQL CREATE OR REPLACE MODEL bqml tutorial . nyc citibike arima model OPTIONS ( model type = 'ARIMA PLUS' , time series timestamp col = 'date' , time series data col = 'num trips' , time series id col = 'start station id' , forecast limit lower bound = 0 ) AS SELECT EXTRACT ( DATE FROM starttime ) AS date , COUNT ( ) AS num trips , start station id FROM bigquery-public-data . new york . citibike trips WHERE starttime > '2014-07-11' AND starttime '2015-02-11' GROUP BY date , start station id ; Click Run .
- Enter the following GoogleSQL query in the query editor. #standardSQL CREATE OR REPLACE MODEL bqml tutorial . nyc citibike arima model OPTIONS ( model type = 'ARIMA PLUS' , time series timestamp col = 'date' , time series data col = 'num trips' , time series id col = 'start station id' ) AS SELECT EXTRACT ( DATE FROM starttime ) AS date , COUNT ( ) AS num trips , start station id FROM bigquery-public-data . new york . citibike trips WHERE starttime > '2014-07-11' AND starttime '2015-02-11' GROUP BY date , start station id ; Click Run .

### "Use custom holidays in an ARIMA_PLUS time-series forecasting model \_|\_\

- URL: [https://docs.cloud.google.com/bigquery/docs/time-series-forecasting-holidays-tutorial](https://docs.cloud.google.com/bigquery/docs/time-series-forecasting-holidays-tutorial)
- Source ID: `site-docs-reference-2`
- Final score: 213
- Re-rank relevance: N/A

Evidence snippets:
- Go to BigQuery In the SQL editor pane, run the following SQL statement: CREATE OR REPLACE MODEL bqml tutorial.forecast googleio with custom holiday OPTIONS ( model type = 'ARIMA PLUS' , holiday region = 'US' , time series timestamp col = 'date' , time series data col = 'views' , data frequency = 'DAILY' , horizon = 365 ) AS ( training data AS ( SELECT FROM bqml tutorial.googleio page views WHERE date '2022-01-01' ), custom holiday AS ( SELECT 'US' AS region , 'GoogleIO' AS holiday name , primary date , 1 AS preholiday days , 2 AS postholiday days FROM UNNEST ( [ DATE ( '2017-05-17' ), DATE ( '2018-05-08' ), DATE ( '2019-05-07' ), -- cancelled in 2020 due to pandemic DATE ( '2021-05-18' ), DATE ( '2022-05-11' ) ] ) AS primary date ) ); Visualize the forecasted results After you create the model using custom holidays, join the original data from the bqml tutorial.googleio page views table with the forecasted value from the ML.EXPLAIN FORECAST function , and then visualize it by using Data Studio : Go to the BigQuery page.
- Go to BigQuery In the SQL editor pane, run the following SQL statement: CREATE OR REPLACE MODEL bqml tutorial.forecast googleio OPTIONS ( model type = 'ARIMA PLUS' , holiday region = 'US' , time series timestamp col = 'date' , time series data col = 'views' , data frequency = 'DAILY' , horizon = 365 ) AS SELECT FROM bqml tutorial.googleio page views WHERE date '2022-01-01' ; Visualize the forecasted results After you create the model using built-in holidays, join the original data from the bqml tutorial.googleio page views table with the forecasted value from the ML.EXPLAIN FORECAST function , and then visualize it by using Data Studio : Go to the BigQuery page.
- Go to BigQuery In the SQL editor pane, run the following SQL statement: SELECT "original" AS model type , FROM ml . evaluate ( MODEL bqml tutorial.forecast googleio , ( SELECT FROM bqml tutorial.googleio page views WHERE date >= '2022-05-08' AND date '2022-05-12' ), STRUCT ( 365 AS horizon , TRUE AS perform aggregation )) UNION ALL SELECT "with custom holiday" AS model type , FROM ml . evaluate ( MODEL bqml tutorial.forecast googleio with custom holiday , ( SELECT FROM bqml tutorial.googleio page views WHERE date >= '2022-05-08' AND date '2022-05-12' ), STRUCT ( 365 AS horizon , TRUE AS perform aggregation )); The results show that the second model offers a significant performance improvement: Clean up Caution : Deleting a project has the following effects: Everything in the project is deleted.
- Go to BigQuery In the SQL editor pane, run the following SQL statement: CREATE OR REPLACE TABLE bqml tutorial.googleio page views AS SELECT DATETIME TRUNC ( datehour , DAY ) AS date , SUM ( views ) AS views FROM bigquery-public-data.wikipedia.pageviews WHERE datehour >= '2017-01-01' AND datehour '2023-01-01' AND title = 'Google I/O' GROUP BY DATETIME TRUNC ( datehour , DAY ) Create a time-series forecasting model that uses built-in holidays Create a model that forecasts daily page views for the Wikipedia "Google I/O" page, based on page view data before 2022 and taking built-in holidays into account: Go to the BigQuery page.

