---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.528Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Custom holiday modeling for time series models"
feature_slug: "custom-holiday-modeling-for-time-series-models"
latest_feature_date: "2023-11-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/time-series-forecasting-holidays-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/arima-plus-xreg-single-time-series-forecasting-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/arima-speed-up-tutorial"
keywords:
  - "custom"
  - "holiday"
  - "modeling"
  - "time"
  - "series"
  - "models"
  - "bigquery"
  - "ml"
---

# Custom holiday modeling for time series models

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery ML time series forecasting supports custom holiday modeling and holiday effect explanations.

## Extended Definition

BigQuery ML time series forecasting supports custom holiday modeling and holiday effect explanations.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/time-series-forecasting-holidays-tutorial](https://docs.cloud.google.com/bigquery/docs/time-series-forecasting-holidays-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/arima-plus-xreg-single-time-series-forecasting-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-plus-xreg-single-time-series-forecasting-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/arima-speed-up-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-speed-up-tutorial)

## Supporting Pages

### "Use custom holidays in an ARIMA_PLUS time-series forecasting model \_|\_\

- URL: [https://docs.cloud.google.com/bigquery/docs/time-series-forecasting-holidays-tutorial](https://docs.cloud.google.com/bigquery/docs/time-series-forecasting-holidays-tutorial)
- Source ID: `site-docs-reference-2`
- Final score: 257
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Go to BigQuery In the SQL editor pane, run the following SQL statement: CREATE OR REPLACE MODEL bqml tutorial.forecast googleio with custom holiday OPTIONS ( model type = 'ARIMA PLUS' , holiday region = 'US' , time series timestamp col = 'date' , time series data col = 'views' , data frequency = 'DAILY' , horizon = 365 ) AS ( training data AS ( SELECT FROM bqml tutorial.googleio page views WHERE date '2022-01-01' ), custom holiday AS ( SELECT 'US' AS region , 'GoogleIO' AS holiday name , primary date , 1 AS preholiday days , 2 AS postholiday days FROM UNNEST ( [ DATE ( '2017-05-17' ), DATE ( '2018-05-08' ), DATE ( '2019-05-07' ), -- cancelled in 2020 due to pandemic DATE ( '2021-05-18' ), DATE ( '2022-05-11' ) ] ) AS primary date ) ); Visualize the forecasted results After you create the model using custom holidays, join the original data from the bqml tutorial.googleio page views table with the forecasted value from the ML.EXPLAIN FORECAST function , and then visualize it by using Data Studio : Go to the BigQuery page.
- Go to BigQuery In the SQL editor pane, run the following SQL statement: SELECT original . date , original . views AS original views , explain forecast . time series adjusted data AS adjusted views without custom holiday , FROM bqml tutorial.googleio page views original INNER JOIN ( SELECT FROM ML .
- Go to BigQuery In the SQL editor pane, run the following SQL statement: SELECT original . date , original . views AS original views , explain forecast . time series adjusted data AS adjusted views with custom holiday , FROM bqml tutorial.googleio page views original INNER JOIN ( SELECT FROM ML .
- Go to BigQuery In the SQL editor pane, run the following SQL statement: CREATE OR REPLACE MODEL bqml tutorial.forecast googleio OPTIONS ( model type = 'ARIMA PLUS' , holiday region = 'US' , time series timestamp col = 'date' , time series data col = 'views' , data frequency = 'DAILY' , horizon = 365 ) AS SELECT FROM bqml tutorial.googleio page views WHERE date '2022-01-01' ; Visualize the forecasted results After you create the model using built-in holidays, join the original data from the bqml tutorial.googleio page views table with the forecasted value from the ML.EXPLAIN FORECAST function , and then visualize it by using Data Studio : Go to the BigQuery page.

### "Forecast a single time series with a multivariate model \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/arima-plus-xreg-single-time-series-forecasting-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-plus-xreg-single-time-series-forecasting-tutorial)
- Source ID: `site-docs-reference`
- Final score: 215
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The has holiday effect , has spikes and dips , and has step changes columns provide information about the input time series data, and are not related to the ARIMA modeling.
- Setting this option allows a more accurate modeling on holiday time points if there are any holiday patterns in the time series.
- Go to BigQuery In the query editor, paste in the following query and click Run : CREATE TABLE bqml tutorial.seattle air quality daily AS WITH pm25 daily AS ( SELECT avg ( arithmetic mean ) AS pm25 , date local AS date FROM bigquery-public-data.epa historical air quality.pm25 nonfrm daily summary WHERE city name = 'Seattle' AND parameter name = 'Acceptable PM2.5 AQI & Speciation Mass' GROUP BY date local ), wind speed daily AS ( SELECT avg ( arithmetic mean ) AS wind speed , date local AS date FROM bigquery-public-data.epa historical air quality.wind daily summary WHERE city name = 'Seattle' AND parameter name = 'Wind Speed - Resultant' GROUP BY date local ), temperature daily AS ( SELECT avg ( first max value ) AS temperature , date local AS date FROM bigquery-public-data.epa historical air quality.temperature daily summary WHERE city name = 'Seattle' AND parameter name = 'Outdoor Temperature' GROUP BY date local ) SELECT pm25 daily . date AS date , pm25 , wind speed , temperature FROM pm25 daily JOIN wind speed daily USING ( date ) JOIN temperature daily USING ( date ); Visualize the input data Before creating the model, you can optionally visualize your input time series data to get a sense of the distribution.
- Go to BigQuery In the query editor, paste in the following query and click Run : CREATE OR REPLACE MODEL bqml tutorial.seattle pm25 xreg model OPTIONS ( MODEL TYPE = 'ARIMA PLUS XREG' , time series timestamp col = 'date' , # Identifies the column that contains time points time series data col = 'pm25' ) # Identifies the column to forecast AS SELECT date , # The column that contains time points pm25 , # The column to forecast temperature , # Temperature input to use in forecasting wind speed # Wind speed input to use in forecasting FROM bqml tutorial.seattle air quality daily WHERE date BETWEEN DATE ( '2012-01-01' ) AND DATE ( '2020-12-31' ); The query takes about 20 seconds to complete, after which you can access the seattle pm25 xreg model model.

### "Scale an ARIMA_PLUS univariate time series model to millions of time series\

- URL: [https://docs.cloud.google.com/bigquery/docs/arima-speed-up-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-speed-up-tutorial)
- Source ID: `site-docs-reference`
- Final score: 209
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Go to BigQuery In the query editor, paste in the following query and click Run : CREATE OR REPLACE MODEL bqml tutorial.liquor forecast by product OPTIONS ( MODEL TYPE = 'ARIMA PLUS' , TIME SERIES TIMESTAMP COL = 'date' , TIME SERIES DATA COL = 'total bottles sold' , TIME SERIES ID COL = [ 'store number' , 'item description' ] , HOLIDAY REGION = 'US' , AUTO ARIMA MAX ORDER = 2 , MAX TIME SERIES LENGTH = 30 ) AS SELECT store number , item description , date , SUM ( bottles sold ) as total bottles sold FROM bigquery-public-data.iowa liquor sales.sales WHERE date BETWEEN DATE ( "2015-01-01" ) AND DATE ( "2021-12-31" ) GROUP BY store number , item description , date ; The query takes about 1 hour 16 minutes to complete.
- Go to BigQuery In the query editor, paste in the following query and click Run : CREATE OR REPLACE MODEL bqml tutorial.nyc citibike arima model max order 2 fast training OPTIONS ( model type = 'ARIMA PLUS' , time series timestamp col = 'date' , time series data col = 'num trips' , time series id col = 'start station name' , auto arima max order = 2 , max time series length = 30 ) AS SELECT FROM bqml tutorial.nyc citibike time series WHERE date '2016-06-01' ; The query takes about 35 seconds to complete.
- FROM input time series AS table 1 INNER JOIN ( SELECT start station name , COUNT ( ) AS num points FROM input time series GROUP BY start station name ) table 2 ON table 1 . start station name = table 2 . start station name WHERE num points > 400 ; Create a model to multiple time-series with default parameters You want to forecast the number of bike trips for each Citi Bike station, which requires many time series models; one for each Citi Bike station that is included in the input data.
- Go to BigQuery In the query editor, paste in the following query and click Run : CREATE OR REPLACE MODEL bqml tutorial.nyc citibike arima model max order 2 OPTIONS ( model type = 'ARIMA PLUS' , time series timestamp col = 'date' , time series data col = 'num trips' , time series id col = 'start station name' , auto arima max order = 2 ) AS SELECT FROM bqml tutorial.nyc citibike time series WHERE date '2016-06-01' ; The query takes about 2 minutes to complete.

