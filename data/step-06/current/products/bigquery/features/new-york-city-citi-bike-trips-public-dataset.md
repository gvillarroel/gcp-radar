---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.901Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "New York City Citi Bike Trips public dataset"
feature_slug: "new-york-city-citi-bike-trips-public-dataset"
latest_feature_date: "2016-12-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/quickstarts/query-public-dataset-console"
  - "https://docs.cloud.google.com/bigquery/docs/arima-multiple-time-series-forecasting-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/arima-time-series-forecasting-with-limits-tutorial"
keywords:
  - "york"
  - "city"
  - "citi"
  - "bike"
  - "trips"
  - "public"
  - "dataset"
  - "bigquery"
---

# New York City Citi Bike Trips public dataset

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

The BigQuery public datasets program includes the New York City Citi Bike Trips dataset.

## Extended Definition

The BigQuery public datasets program includes the New York City Citi Bike Trips dataset.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/quickstarts/query-public-dataset-console](https://docs.cloud.google.com/bigquery/docs/quickstarts/query-public-dataset-console)
- [https://docs.cloud.google.com/bigquery/docs/arima-multiple-time-series-forecasting-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-multiple-time-series-forecasting-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/arima-time-series-forecasting-with-limits-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-time-series-forecasting-with-limits-tutorial)

## Supporting Pages

### "Forecast multiple time series with an ARIMA_PLUS univariate model \_|\_\

- URL: [https://docs.cloud.google.com/bigquery/docs/arima-multiple-time-series-forecasting-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-multiple-time-series-forecasting-tutorial)
- Source ID: `site-docs-reference`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- Go to BigQuery In the query editor, paste in the following query and click Run : CREATE OR REPLACE MODEL bqml tutorial.nyc citibike arima model group OPTIONS ( model type = 'ARIMA PLUS' , time series timestamp col = 'date' , time series data col = 'num trips' , time series id col = 'start station name' , auto arima max order = 5 ) AS SELECT start station name , EXTRACT ( DATE from starttime ) AS date , COUNT ( ) AS num trips FROM bigquery-public-data.new york.citibike trips WHERE start station name LIKE '%Central Park%' GROUP BY start station name , date ; The query takes approximately 24 seconds to complete, after which you can access the nyc citibike arima model group model.
- This shrinks the search space of hyperparameter tuning in the auto.ARIMA algorithm. auto arima max order = 5 , ) df = bpd . read gbq ( "bigquery-public-data.new york.citibike trips" ) This query creates twelve time series models, one for each of the twelve Citi Bike start stations in the input data.
- Go to BigQuery In the query editor, paste in the following query and click Run : SELECT EXTRACT ( DATE from starttime ) AS date , COUNT ( ) AS num trips FROM bigquery-public-data.new york.citibike trips GROUP BY date ; When the query completes, click Open in > Data Studio .
- For more information, see Set up ADC for a local development environment . import bigframes.pandas as bpd df = bpd . read gbq ( "bigquery-public-data.new york.citibike trips" ) features = bpd .

### Try BigQuery using the sandbox \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/quickstarts/query-public-dataset-console](https://docs.cloud.google.com/bigquery/docs/quickstarts/query-public-dataset-console)
- Source ID: `site-docs-root`
- Final score: 190
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In the query editor , enter the following query: SELECT start station name , start station latitude , start station longitude , ST GEOGPOINT ( start station longitude , start station latitude ) AS geo location , COUNT ( ) AS num trips FROM bigquery-public-data.new york.citibike trips GROUP BY 1 , 2 , 3 ORDER BY num trips DESC LIMIT 100 ; If the query is valid, then a check mark appears along with the amount of data that the query processes.
- Query a public dataset In the following steps, you query the citibike trips table to determine the 100 most popular Citi Bike stations in the NYC Citi Bike Trips public dataset.
- This dataset includes Citi Bike trips since Citi Bike launched in September 2013.
- In this tutorial you query the NYC Citi Bike Trips dataset.

### "Limit forecasted values for an ARIMA_PLUS time series model \_|\_ BigQuery\

- URL: [https://docs.cloud.google.com/bigquery/docs/arima-time-series-forecasting-with-limits-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-time-series-forecasting-with-limits-tutorial)
- Source ID: `site-docs-reference`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- In the following sample, bigquery-public-data.new york.citibike trips indicates that you are querying the citibike trips table in the new york dataset. import bigframes.pandas as bpd df = bpd . read gbq ( "bigquery-public-data.new york.citibike trips" ) features = bpd .
- SQL In the following query, the FROM bigquery-public-data.new york.citibike trips clause indicates that you are querying the citibike trips table in the new york dataset.
- This option causes the model to only forecast values that are greater than 0, based on the values in the column specified by the time series data col argument, in this case num trips . #standardSQL CREATE OR REPLACE MODEL bqml tutorial . nyc citibike arima model OPTIONS ( model type = 'ARIMA PLUS' , time series timestamp col = 'date' , time series data col = 'num trips' , time series id col = 'start station id' , forecast limit lower bound = 0 ) AS SELECT EXTRACT ( DATE FROM starttime ) AS date , COUNT ( ) AS num trips , start station id FROM bigquery-public-data . new york . citibike trips WHERE starttime > '2014-07-11' AND starttime '2015-02-11' GROUP BY date , start station id ; Run the CREATE MODEL query to create and train your model: In the Google Cloud console, click the Compose new query button.
- The CREATE MODEL statement creates and trains a model named bqml tutorial.nyc citibike arima model . #standardSQL CREATE OR REPLACE MODEL bqml tutorial . nyc citibike arima model OPTIONS ( model type = 'ARIMA PLUS' , time series timestamp col = 'date' , time series data col = 'num trips' , time series id col = 'start station id' ) AS SELECT EXTRACT ( DATE FROM starttime ) AS date , COUNT ( ) AS num trips , start station id FROM bigquery-public-data . new york . citibike trips WHERE starttime > '2014-07-11' AND starttime '2015-02-11' GROUP BY date , start station id ; The OPTIONS(model type='ARIMA PLUS', time series timestamp col='date', ...) clause indicates that you are creating an ARIMA -based time series model.

