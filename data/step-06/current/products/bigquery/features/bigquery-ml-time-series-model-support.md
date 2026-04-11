---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.816Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery ML time series model support"
feature_slug: "bigquery-ml-time-series-model-support"
latest_feature_date: "2020-08-27"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/arima-time-series-forecasting-with-limits-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/arima-speed-up-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/arima-multiple-time-series-forecasting-tutorial"
keywords:
  - "time series forecasting"
  - "CREATE MODEL time series"
  - "time series training"
  - "ARIMA_PLUS model"
  - "forecast function"
  - "model type ARIMA"
  - "time series model"
  - "ARIMA_PLUS"
---

# BigQuery ML time series model support

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery ML time series model support is now generally available.

## Extended Definition

BigQuery ML time series model support is now generally available.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/arima-time-series-forecasting-with-limits-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-time-series-forecasting-with-limits-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/arima-speed-up-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-speed-up-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/arima-multiple-time-series-forecasting-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-multiple-time-series-forecasting-tutorial)

## Supporting Pages

### "Limit forecasted values for an ARIMA_PLUS time series model \_|\_ BigQuery\

- URL: [https://docs.cloud.google.com/bigquery/docs/arima-time-series-forecasting-with-limits-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-time-series-forecasting-with-limits-tutorial)
- Source ID: `site-docs-root`
- Final score: 118
- Re-rank relevance: WEAK
- Re-rank rationale: It demonstrates time series model usage in BigQuery ML but does not discuss lifecycle status or general availability details.

Evidence snippets:
- The CREATE MODEL statement creates and trains a model named bqml tutorial.nyc citibike arima model . #standardSQL CREATE OR REPLACE MODEL bqml tutorial . nyc citibike arima model OPTIONS ( model type = 'ARIMA PLUS' , time series timestamp col = 'date' , time series data col = 'num trips' , time series id col = 'start station id' ) AS SELECT EXTRACT ( DATE FROM starttime ) AS date , COUNT ( ) AS num trips , start station id FROM bigquery-public-data . new york . citibike trips WHERE starttime > '2014-07-11' AND starttime '2015-02-11' GROUP BY date , start station id ; The OPTIONS(model type='ARIMA PLUS', time series timestamp col='date', ...) clause indicates that you are creating an ARIMA -based time series model.
- This option causes the model to only forecast values that are greater than 0, based on the values in the column specified by the time series data col argument, in this case num trips . #standardSQL CREATE OR REPLACE MODEL bqml tutorial . nyc citibike arima model OPTIONS ( model type = 'ARIMA PLUS' , time series timestamp col = 'date' , time series data col = 'num trips' , time series id col = 'start station id' , forecast limit lower bound = 0 ) AS SELECT EXTRACT ( DATE FROM starttime ) AS date , COUNT ( ) AS num trips , start station id FROM bigquery-public-data . new york . citibike trips WHERE starttime > '2014-07-11' AND starttime '2015-02-11' GROUP BY date , start station id ; Run the CREATE MODEL query to create and train your model: In the Google Cloud console, click the Compose new query button.
- Enter the following GoogleSQL query in the query editor. #standardSQL CREATE OR REPLACE MODEL bqml tutorial . nyc citibike arima model OPTIONS ( model type = 'ARIMA PLUS' , time series timestamp col = 'date' , time series data col = 'num trips' , time series id col = 'start station id' , forecast limit lower bound = 0 ) AS SELECT EXTRACT ( DATE FROM starttime ) AS date , COUNT ( ) AS num trips , start station id FROM bigquery-public-data . new york . citibike trips WHERE starttime > '2014-07-11' AND starttime '2015-02-11' GROUP BY date , start station id ; Click Run .
- Enter the following GoogleSQL query in the query editor. #standardSQL CREATE OR REPLACE MODEL bqml tutorial . nyc citibike arima model OPTIONS ( model type = 'ARIMA PLUS' , time series timestamp col = 'date' , time series data col = 'num trips' , time series id col = 'start station id' ) AS SELECT EXTRACT ( DATE FROM starttime ) AS date , COUNT ( ) AS num trips , start station id FROM bigquery-public-data . new york . citibike trips WHERE starttime > '2014-07-11' AND starttime '2015-02-11' GROUP BY date , start station id ; Click Run .

### "Scale an ARIMA_PLUS univariate time series model to millions of time series\

- URL: [https://docs.cloud.google.com/bigquery/docs/arima-speed-up-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-speed-up-tutorial)
- Source ID: `site-docs-reference`
- Final score: 114
- Re-rank relevance: WEAK
- Re-rank rationale: It demonstrates time series model usage in practice, yet it provides no explicit GA/launch status information for the broader time series feature set.

Evidence snippets:
- The OPTIONS(model type='ARIMA PLUS', time series timestamp col='date', ...) clause indicates that you are creating a set of ARIMA -based time-series ARIMA PLUS models.
- Go to BigQuery In the query editor, paste in the following query and click Run : CREATE OR REPLACE MODEL bqml tutorial.liquor forecast by product OPTIONS ( MODEL TYPE = 'ARIMA PLUS' , TIME SERIES TIMESTAMP COL = 'date' , TIME SERIES DATA COL = 'total bottles sold' , TIME SERIES ID COL = [ 'store number' , 'item description' ] , HOLIDAY REGION = 'US' , AUTO ARIMA MAX ORDER = 2 , MAX TIME SERIES LENGTH = 30 ) AS SELECT store number , item description , date , SUM ( bottles sold ) as total bottles sold FROM bigquery-public-data.iowa liquor sales.sales WHERE date BETWEEN DATE ( "2015-01-01" ) AND DATE ( "2021-12-31" ) GROUP BY store number , item description , date ; The query takes about 1 hour 16 minutes to complete.
- Go to BigQuery In the query editor, paste in the following query and click Run : CREATE OR REPLACE MODEL bqml tutorial.nyc citibike arima model max order 2 fast training OPTIONS ( model type = 'ARIMA PLUS' , time series timestamp col = 'date' , time series data col = 'num trips' , time series id col = 'start station name' , auto arima max order = 2 , max time series length = 30 ) AS SELECT FROM bqml tutorial.nyc citibike time series WHERE date '2016-06-01' ; The query takes about 35 seconds to complete.
- Go to BigQuery In the query editor, paste in the following query and click Run : CREATE OR REPLACE MODEL bqml tutorial.nyc citibike arima model max order 2 OPTIONS ( model type = 'ARIMA PLUS' , time series timestamp col = 'date' , time series data col = 'num trips' , time series id col = 'start station name' , auto arima max order = 2 ) AS SELECT FROM bqml tutorial.nyc citibike time series WHERE date '2016-06-01' ; The query takes about 2 minutes to complete.

### "Forecast multiple time series with an ARIMA_PLUS univariate model \_|\_\

- URL: [https://docs.cloud.google.com/bigquery/docs/arima-multiple-time-series-forecasting-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-multiple-time-series-forecasting-tutorial)
- Source ID: `site-docs-reference`
- Final score: 100
- Re-rank relevance: WEAK
- Re-rank rationale: It demonstrates time series model usage in BigQuery ML, but does not state lifecycle status or GA availability.

Evidence snippets:
- SQL In the following query, the OPTIONS(model type='ARIMA PLUS', time series timestamp col='date', ...) clause indicates that you are creating an ARIMA -based time series model.
- Go to BigQuery In the query editor, paste in the following query and click Run : CREATE OR REPLACE MODEL bqml tutorial.nyc citibike arima model group OPTIONS ( model type = 'ARIMA PLUS' , time series timestamp col = 'date' , time series data col = 'num trips' , time series id col = 'start station name' , auto arima max order = 5 ) AS SELECT start station name , EXTRACT ( DATE from starttime ) AS date , COUNT ( ) AS num trips FROM bigquery-public-data.new york.citibike trips WHERE start station name LIKE '%Central Park%' GROUP BY start station name , date ; The query takes approximately 24 seconds to complete, after which you can access the nyc citibike arima model group model.
- This tutorial teaches you how to use an ARIMA PLUS univariate time series model to forecast the future value of a given column, based on the historical values for that column.
- DataFrame ( { "num trips" : df . starttime , "date" : df [ "starttime" ] . dt . date , } ) date = df [ "starttime" ] . dt . date df . groupby ([ date ]) num trips = features . groupby ([ "date" ]) . count () Results from running "print(num trips)" num trips date 2013-07-01 16650 2013-07-02 22745 2013-07-03 21864 2013-07-04 22326 2013-07-05 21842 2013-07-06 20467 2013-07-07 20477 2013-07-08 21615 2013-07-09 26641 2013-07-10 25732 2013-07-11 24417 2013-07-12 19006 2013-07-13 26119 2013-07-14 29287 2013-07-15 28069 2013-07-16 29842 2013-07-17 30550 2013-07-18 28869 2013-07-19 26591 2013-07-20 25278 2013-07-21 30297 2013-07-22 25979 2013-07-23 32376 2013-07-24 35271 2013-07-25 31084 num trips . plot . line ( Rotate the x labels so they are more visible. rot = 45 , ) Create the time series model You want to forecast the number of bike trips for each Citi Bike station, which requires many time series models; one for each Citi Bike station that is included in the input data.

