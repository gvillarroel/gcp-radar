---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.591Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery query editor result charting"
feature_slug: "bigquery-query-editor-result-charting"
latest_feature_date: "2024-02-15"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/arima-plus-xreg-single-time-series-forecasting-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/arima-plus-xreg-multiple-time-series-forecasting-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/arima-time-series-forecasting-with-limits-tutorial"
keywords:
  - "result charting"
  - "query result visualization"
  - "query results chart"
  - "result chart"
  - "Chart tab"
  - "Charts tab"
  - "query editor"
---

# BigQuery query editor result charting

Product: BigQuery
Coverage: LOW

## Step 02 Summary

Displays a visualization of query results in the BigQuery query editor’s Chart tab after query execution.

## Extended Definition

The referenced BigQuery documentation snippets show that users run SQL in the BigQuery query editor and can optionally visualize query output, such as input time-series data, as part of the workflow. The snippets also show sending query output to Looker Studio for visualization, which confirms result-consumption via charting/visual views, but they do not explicitly describe a dedicated in-editor "Chart tab" feature.

## Evidence Summary

The cited pages provide indirect evidence of visualization behavior around query execution and external dashboard handoff, but not explicit confirmation of a named charting tab in the BigQuery query editor UI.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/arima-plus-xreg-single-time-series-forecasting-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-plus-xreg-single-time-series-forecasting-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/arima-plus-xreg-multiple-time-series-forecasting-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-plus-xreg-multiple-time-series-forecasting-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/arima-time-series-forecasting-with-limits-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-time-series-forecasting-with-limits-tutorial)

## Supporting Pages

### "Forecast a single time series with a multivariate model \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/arima-plus-xreg-single-time-series-forecasting-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-plus-xreg-single-time-series-forecasting-tutorial)
- Source ID: `site-docs-reference`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- Go to BigQuery In the query editor, paste in the following query and click Run : CREATE TABLE bqml tutorial.seattle air quality daily AS WITH pm25 daily AS ( SELECT avg ( arithmetic mean ) AS pm25 , date local AS date FROM bigquery-public-data.epa historical air quality.pm25 nonfrm daily summary WHERE city name = 'Seattle' AND parameter name = 'Acceptable PM2.5 AQI & Speciation Mass' GROUP BY date local ), wind speed daily AS ( SELECT avg ( arithmetic mean ) AS wind speed , date local AS date FROM bigquery-public-data.epa historical air quality.wind daily summary WHERE city name = 'Seattle' AND parameter name = 'Wind Speed - Resultant' GROUP BY date local ), temperature daily AS ( SELECT avg ( first max value ) AS temperature , date local AS date FROM bigquery-public-data.epa historical air quality.temperature daily summary WHERE city name = 'Seattle' AND parameter name = 'Outdoor Temperature' GROUP BY date local ) SELECT pm25 daily . date AS date , pm25 , wind speed , temperature FROM pm25 daily JOIN wind speed daily USING ( date ) JOIN temperature daily USING ( date ); Visualize the input data Before creating the model, you can optionally visualize your input time series data to get a sense of the distribution.
- Go to BigQuery In the query editor, paste in the following query and click Run : CREATE OR REPLACE MODEL bqml tutorial.seattle pm25 xreg model OPTIONS ( MODEL TYPE = 'ARIMA PLUS XREG' , time series timestamp col = 'date' , # Identifies the column that contains time points time series data col = 'pm25' ) # Identifies the column to forecast AS SELECT date , # The column that contains time points pm25 , # The column to forecast temperature , # Temperature input to use in forecasting wind speed # Wind speed input to use in forecasting FROM bqml tutorial.seattle air quality daily WHERE date BETWEEN DATE ( '2012-01-01' ) AND DATE ( '2020-12-31' ); The query takes about 20 seconds to complete, after which you can access the seattle pm25 xreg model model.
- Go to BigQuery In the query editor, paste in the following query and click Run : SELECT FROM bqml tutorial.seattle air quality daily ; When the query completes, click Open in > Looker Studio .
- Go to BigQuery In the query editor, paste in the following query and click Run : SELECT FROM ML .

### "Forecast multiple time series with a multivariate model \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/arima-plus-xreg-multiple-time-series-forecasting-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-plus-xreg-multiple-time-series-forecasting-tutorial)
- Source ID: `site-docs-reference`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- Go to BigQuery In the query editor, paste in the following query and click Run : CREATE OR REPLACE TABLE bqml tutorial.iowa liquor sales with weather AS WITH sales AS ( SELECT DATE , store number , item number , bottles sold , SAFE CAST ( SAFE CAST ( zip code AS FLOAT64 ) AS INT64 ) AS zip code FROM bigquery-public-data.iowa liquor sales.sales AS sales WHERE SAFE CAST ( zip code AS FLOAT64 ) IS NOT NULL ), aggregated sales AS ( SELECT DATE , store number , item number , ANY VALUE ( zip code ) AS zip code , SUM ( bottles sold ) AS bottles sold , FROM sales GROUP BY DATE , store number , item number ), weather AS ( SELECT DATE , SAFE CAST ( postal code AS INT64 ) AS zip code , avg temperature air 2m f AS temperature , avg humidity specific 2m gpkg AS humidity , FROM bigquery-public-data.covid19 weathersource com.postal code day history WHERE country = 'US' AND SAFE CAST ( postal code AS INT64 ) IS NOT NULL ) SELECT aggregated sales . date , aggregated sales . store number , aggregated sales . item number , aggregated sales . bottles sold , weather . temperature AS temperature , weather . humidity AS humidity FROM aggregated sales LEFT JOIN weather ON aggregated sales . zip code = weather . zip code AND aggregated sales .
- Go to BigQuery In the query editor, paste in the following query and click Run : CREATE OR REPLACE MODEL bqml tutorial.multi time series arimax model OPTIONS ( model type = 'ARIMA PLUS XREG' , time series id col = [ 'store number' , 'item number' ] , time series data col = 'bottles sold' , time series timestamp col = 'date' ) AS SELECT FROM bqml tutorial.iowa liquor sales with weather WHERE DATE DATE ( '2022-09-01' ); The query takes approximately 38 minutes to complete, after which you can access the multi time series arimax model model.
- Go to BigQuery In the query editor, paste in the following query and click Run : SELECT FROM ML .
- Go to BigQuery In the query editor, paste in the following query and click Run : SELECT FROM ML .

### "Limit forecasted values for an ARIMA_PLUS time series model \_|\_ BigQuery\

- URL: [https://docs.cloud.google.com/bigquery/docs/arima-time-series-forecasting-with-limits-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-time-series-forecasting-with-limits-tutorial)
- Source ID: `site-docs-root`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- Enter the following GoogleSQL query in the query editor. #standardSQL CREATE OR REPLACE MODEL bqml tutorial . nyc citibike arima model OPTIONS ( model type = 'ARIMA PLUS' , time series timestamp col = 'date' , time series data col = 'num trips' , time series id col = 'start station id' , forecast limit lower bound = 0 ) AS SELECT EXTRACT ( DATE FROM starttime ) AS date , COUNT ( ) AS num trips , start station id FROM bigquery-public-data . new york . citibike trips WHERE starttime > '2014-07-11' AND starttime '2015-02-11' GROUP BY date , start station id ; Click Run .
- Enter the following GoogleSQL query in the query editor. #standardSQL CREATE OR REPLACE MODEL bqml tutorial . nyc citibike arima model OPTIONS ( model type = 'ARIMA PLUS' , time series timestamp col = 'date' , time series data col = 'num trips' , time series id col = 'start station id' ) AS SELECT EXTRACT ( DATE FROM starttime ) AS date , COUNT ( ) AS num trips , start station id FROM bigquery-public-data . new york . citibike trips WHERE starttime > '2014-07-11' AND starttime '2015-02-11' GROUP BY date , start station id ; Click Run .
- Enter the following GoogleSQL query in the query editor. #standardSQL SELECT forecast timestamp AS forecast timestamp , start station id AS start station id , history value AS history value , forecast value AS forecast value FROM ( ( SELECT DATE ( forecast timestamp ) AS forecast timestamp , NULL AS history value , forecast value AS forecast value , start station id AS start station id , FROM ML .
- Enter the following GoogleSQL query in the query editor. #standardSQL SELECT forecast timestamp AS forecast timestamp , start station id AS start station id , history value AS history value , forecast value AS forecast value FROM ( ( SELECT DATE ( forecast timestamp ) AS forecast timestamp , NULL AS history value , forecast value AS forecast value , start station id AS start station id , FROM ML .

