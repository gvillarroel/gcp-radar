---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.773Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Time series models"
feature_slug: "time-series-models"
latest_feature_date: "2020-08-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/arima-multiple-time-series-forecasting-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/arima-speed-up-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/arima-plus-xreg-single-time-series-forecasting-tutorial"
keywords:
  - "time"
  - "series"
  - "models"
  - "bigquery"
  - "ml"
  - "supports"
  - "forecasting"
---

# Time series models

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery ML supports time series models for forecasting; BigQuery ML supports time series models for forecasting.

## Extended Definition

BigQuery ML supports time series models for forecasting; BigQuery ML supports time series models for forecasting.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/arima-multiple-time-series-forecasting-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-multiple-time-series-forecasting-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/arima-speed-up-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-speed-up-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/arima-plus-xreg-single-time-series-forecasting-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-plus-xreg-single-time-series-forecasting-tutorial)

## Supporting Pages

### "Forecast multiple time series with an ARIMA_PLUS univariate model \_|\_\

- URL: [https://docs.cloud.google.com/bigquery/docs/arima-multiple-time-series-forecasting-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-multiple-time-series-forecasting-tutorial)
- Source ID: `site-docs-reference`
- Final score: 231
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This shrinks the search space of hyperparameter tuning in the auto.ARIMA algorithm. auto arima max order = 5 , ) df = bpd . read gbq ( "bigquery-public-data.new york.citibike trips" ) This query creates twelve time series models, one for each of the twelve Citi Bike start stations in the input data.
- DataFrame ( { "num trips" : df . starttime , "date" : df [ "starttime" ] . dt . date , } ) date = df [ "starttime" ] . dt . date df . groupby ([ date ]) num trips = features . groupby ([ "date" ]) . count () Results from running "print(num trips)" num trips date 2013-07-01 16650 2013-07-02 22745 2013-07-03 21864 2013-07-04 22326 2013-07-05 21842 2013-07-06 20467 2013-07-07 20477 2013-07-08 21615 2013-07-09 26641 2013-07-10 25732 2013-07-11 24417 2013-07-12 19006 2013-07-13 26119 2013-07-14 29287 2013-07-15 28069 2013-07-16 29842 2013-07-17 30550 2013-07-18 28869 2013-07-19 26591 2013-07-20 25278 2013-07-21 30297 2013-07-22 25979 2013-07-23 32376 2013-07-24 35271 2013-07-25 31084 num trips . plot . line ( Rotate the x labels so they are more visible. rot = 45 , ) Create the time series model You want to forecast the number of bike trips for each Citi Bike station, which requires many time series models; one for each Citi Bike station that is included in the input data.
- Go to BigQuery In the query editor, paste in the following query and click Run : CREATE OR REPLACE MODEL bqml tutorial.nyc citibike arima model group OPTIONS ( model type = 'ARIMA PLUS' , time series timestamp col = 'date' , time series data col = 'num trips' , time series id col = 'start station name' , auto arima max order = 5 ) AS SELECT start station name , EXTRACT ( DATE from starttime ) AS date , COUNT ( ) AS num trips FROM bigquery-public-data.new york.citibike trips WHERE start station name LIKE '%Central Park%' GROUP BY start station name , date ; The query takes approximately 24 seconds to complete, after which you can access the nyc citibike arima model group model.
- ARIMA EVALUATE ( MODEL bqml tutorial.nyc citibike arima model group ); The results should look like the following: While auto.ARIMA evaluates dozens of candidate ARIMA models for each time series, ML.ARIMA EVALUATE by default only outputs the information of the best model to make the output table compact.

### "Scale an ARIMA_PLUS univariate time series model to millions of time series\

- URL: [https://docs.cloud.google.com/bigquery/docs/arima-speed-up-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-speed-up-tutorial)
- Source ID: `site-docs-reference`
- Final score: 217
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Go to BigQuery In the query editor, paste in the following query and click Run : CREATE OR REPLACE MODEL bqml tutorial.liquor forecast by product OPTIONS ( MODEL TYPE = 'ARIMA PLUS' , TIME SERIES TIMESTAMP COL = 'date' , TIME SERIES DATA COL = 'total bottles sold' , TIME SERIES ID COL = [ 'store number' , 'item description' ] , HOLIDAY REGION = 'US' , AUTO ARIMA MAX ORDER = 2 , MAX TIME SERIES LENGTH = 30 ) AS SELECT store number , item description , date , SUM ( bottles sold ) as total bottles sold FROM bigquery-public-data.iowa liquor sales.sales WHERE date BETWEEN DATE ( "2015-01-01" ) AND DATE ( "2021-12-31" ) GROUP BY store number , item description , date ; The query takes about 1 hour 16 minutes to complete.
- Go to BigQuery In the query editor, paste in the following query and click Run : CREATE OR REPLACE MODEL bqml tutorial.nyc citibike arima model max order 2 fast training OPTIONS ( model type = 'ARIMA PLUS' , time series timestamp col = 'date' , time series data col = 'num trips' , time series id col = 'start station name' , auto arima max order = 2 , max time series length = 30 ) AS SELECT FROM bqml tutorial.nyc citibike time series WHERE date '2016-06-01' ; The query takes about 35 seconds to complete.
- FROM input time series AS table 1 INNER JOIN ( SELECT start station name , COUNT ( ) AS num points FROM input time series GROUP BY start station name ) table 2 ON table 1 . start station name = table 2 . start station name WHERE num points > 400 ; Create a model to multiple time-series with default parameters You want to forecast the number of bike trips for each Citi Bike station, which requires many time series models; one for each Citi Bike station that is included in the input data.
- Go to BigQuery In the query editor, paste in the following query and click Run : CREATE OR REPLACE MODEL bqml tutorial.nyc citibike arima model max order 2 OPTIONS ( model type = 'ARIMA PLUS' , time series timestamp col = 'date' , time series data col = 'num trips' , time series id col = 'start station name' , auto arima max order = 2 ) AS SELECT FROM bqml tutorial.nyc citibike time series WHERE date '2016-06-01' ; The query takes about 2 minutes to complete.

### "Forecast a single time series with a multivariate model \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/arima-plus-xreg-single-time-series-forecasting-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-plus-xreg-single-time-series-forecasting-tutorial)
- Source ID: `site-docs-reference`
- Final score: 215
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Go to BigQuery In the query editor, paste in the following query and click Run : CREATE OR REPLACE MODEL bqml tutorial.seattle pm25 xreg model OPTIONS ( MODEL TYPE = 'ARIMA PLUS XREG' , time series timestamp col = 'date' , # Identifies the column that contains time points time series data col = 'pm25' ) # Identifies the column to forecast AS SELECT date , # The column that contains time points pm25 , # The column to forecast temperature , # Temperature input to use in forecasting wind speed # Wind speed input to use in forecasting FROM bqml tutorial.seattle air quality daily WHERE date BETWEEN DATE ( '2012-01-01' ) AND DATE ( '2020-12-31' ); The query takes about 20 seconds to complete, after which you can access the seattle pm25 xreg model model.
- Go to BigQuery In the query editor, paste in the following query and click Run : CREATE TABLE bqml tutorial.seattle air quality daily AS WITH pm25 daily AS ( SELECT avg ( arithmetic mean ) AS pm25 , date local AS date FROM bigquery-public-data.epa historical air quality.pm25 nonfrm daily summary WHERE city name = 'Seattle' AND parameter name = 'Acceptable PM2.5 AQI & Speciation Mass' GROUP BY date local ), wind speed daily AS ( SELECT avg ( arithmetic mean ) AS wind speed , date local AS date FROM bigquery-public-data.epa historical air quality.wind daily summary WHERE city name = 'Seattle' AND parameter name = 'Wind Speed - Resultant' GROUP BY date local ), temperature daily AS ( SELECT avg ( first max value ) AS temperature , date local AS date FROM bigquery-public-data.epa historical air quality.temperature daily summary WHERE city name = 'Seattle' AND parameter name = 'Outdoor Temperature' GROUP BY date local ) SELECT pm25 daily . date AS date , pm25 , wind speed , temperature FROM pm25 daily JOIN wind speed daily USING ( date ) JOIN temperature daily USING ( date ); Visualize the input data Before creating the model, you can optionally visualize your input time series data to get a sense of the distribution.
- What's next Learn how to forecast a single time series with a univariate model Learn how to forecast multiple time series with a univariate model Learn how to scale a univariate model when forecasting multiple time series over many rows .
- In time series forecasting, the prediction interval, as represented by the prediction interval lower bound and prediction interval upper bound column values, is as important as the forecast value column value.

