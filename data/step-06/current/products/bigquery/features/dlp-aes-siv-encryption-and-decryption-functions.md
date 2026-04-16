---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.542Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "DLP AES-SIV encryption and decryption functions"
feature_slug: "dlp-aes-siv-encryption-and-decryption-functions"
latest_feature_date: "2023-10-16"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/arima-multiple-time-series-forecasting-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/arima-plus-xreg-multiple-time-series-forecasting-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/timesfm-time-series-forecasting-tutorial"
keywords:
  - "dlp"
  - "aes"
  - "siv"
  - "encryption"
  - "decryption"
  - "functions"
  - "bigquery"
  - "supports"
---

# DLP AES-SIV encryption and decryption functions

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery supports DLP functions for AES-SIV encryption and decryption interoperability with Cloud DLP.

## Extended Definition

BigQuery supports DLP functions for AES-SIV encryption and decryption interoperability with Cloud DLP.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/arima-multiple-time-series-forecasting-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-multiple-time-series-forecasting-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/arima-plus-xreg-multiple-time-series-forecasting-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-plus-xreg-multiple-time-series-forecasting-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/timesfm-time-series-forecasting-tutorial](https://docs.cloud.google.com/bigquery/docs/timesfm-time-series-forecasting-tutorial)

## Supporting Pages

### "Forecast multiple time series with an ARIMA_PLUS univariate model \_|\_\

- URL: [https://docs.cloud.google.com/bigquery/docs/arima-multiple-time-series-forecasting-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-multiple-time-series-forecasting-tutorial)
- Source ID: `site-docs-reference`
- Final score: 52
- Re-rank relevance: N/A

Evidence snippets:
- Go to BigQuery In the query editor, paste in the following query and click Run : CREATE OR REPLACE MODEL bqml tutorial.nyc citibike arima model group OPTIONS ( model type = 'ARIMA PLUS' , time series timestamp col = 'date' , time series data col = 'num trips' , time series id col = 'start station name' , auto arima max order = 5 ) AS SELECT start station name , EXTRACT ( DATE from starttime ) AS date , COUNT ( ) AS num trips FROM bigquery-public-data.new york.citibike trips WHERE start station name LIKE '%Central Park%' GROUP BY start station name , date ; The query takes approximately 24 seconds to complete, after which you can access the nyc citibike arima model group model.
- Create a dataset named bqml tutorial with the data location set to US . bq mk --dataset \ --location=US \ --description "BigQuery ML tutorial dataset." \ bqml tutorial Confirm that the dataset was created: bq ls API Call the datasets.insert method with a defined dataset resource . { "datasetReference" : { "datasetId" : "bqml tutorial" } } BigQuery DataFrames Before trying this sample, follow the BigQuery DataFrames setup instructions in the BigQuery quickstart using BigQuery DataFrames .
- To create the model, you need the following permissions: bigquery.jobs.create bigquery.models.create bigquery.models.getData bigquery.models.updateData To run inference, you need the following permissions: bigquery.models.getData bigquery.jobs.create For more information about IAM roles and permissions in BigQuery, see Introduction to IAM .
- This shrinks the search space of hyperparameter tuning in the auto.ARIMA algorithm. auto arima max order = 5 , ) df = bpd . read gbq ( "bigquery-public-data.new york.citibike trips" ) This query creates twelve time series models, one for each of the twelve Citi Bike start stations in the input data.

### "Forecast multiple time series with a multivariate model \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/arima-plus-xreg-multiple-time-series-forecasting-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-plus-xreg-multiple-time-series-forecasting-tutorial)
- Source ID: `site-docs-reference`
- Final score: 48
- Re-rank relevance: N/A

Evidence snippets:
- Go to BigQuery In the query editor, paste in the following query and click Run : CREATE OR REPLACE TABLE bqml tutorial.iowa liquor sales with weather AS WITH sales AS ( SELECT DATE , store number , item number , bottles sold , SAFE CAST ( SAFE CAST ( zip code AS FLOAT64 ) AS INT64 ) AS zip code FROM bigquery-public-data.iowa liquor sales.sales AS sales WHERE SAFE CAST ( zip code AS FLOAT64 ) IS NOT NULL ), aggregated sales AS ( SELECT DATE , store number , item number , ANY VALUE ( zip code ) AS zip code , SUM ( bottles sold ) AS bottles sold , FROM sales GROUP BY DATE , store number , item number ), weather AS ( SELECT DATE , SAFE CAST ( postal code AS INT64 ) AS zip code , avg temperature air 2m f AS temperature , avg humidity specific 2m gpkg AS humidity , FROM bigquery-public-data.covid19 weathersource com.postal code day history WHERE country = 'US' AND SAFE CAST ( postal code AS INT64 ) IS NOT NULL ) SELECT aggregated sales . date , aggregated sales . store number , aggregated sales . item number , aggregated sales . bottles sold , weather . temperature AS temperature , weather . humidity AS humidity FROM aggregated sales LEFT JOIN weather ON aggregated sales . zip code = weather . zip code AND aggregated sales .
- You also create the following additional columns that you can use as input variables for the model: date : the date of the order store number : the unique number of the store that placed the order item number : the unique number of the item that was ordered bottles sold : the number of bottles ordered of the associated item temperature : the average temperature at the store location on the order date humidity : the average humidity at the store location on the order date Follow these steps to create the input data table: In the Google Cloud console, go to the BigQuery page.
- Go to BigQuery In the query editor, paste in the following query and click Run : CREATE OR REPLACE MODEL bqml tutorial.multi time series arimax model OPTIONS ( model type = 'ARIMA PLUS XREG' , time series id col = [ 'store number' , 'item number' ] , time series data col = 'bottles sold' , time series timestamp col = 'date' ) AS SELECT FROM bqml tutorial.iowa liquor sales with weather WHERE DATE DATE ( '2022-09-01' ); The query takes approximately 38 minutes to complete, after which you can access the multi time series arimax model model.
- Create a dataset named bqml tutorial with the data location set to US . bq mk --dataset \ --location=US \ --description "BigQuery ML tutorial dataset." \ bqml tutorial Confirm that the dataset was created: bq ls API Call the datasets.insert method with a defined dataset resource . { "datasetReference" : { "datasetId" : "bqml tutorial" } } Create a table of input data Create a table of data that you can use to train and evaluate the model.

### "Forecast multiple time series with a TimesFM univariate model \_|\_ BigQuery\

- URL: [https://docs.cloud.google.com/bigquery/docs/timesfm-time-series-forecasting-tutorial](https://docs.cloud.google.com/bigquery/docs/timesfm-time-series-forecasting-tutorial)
- Source ID: `site-docs-reference-2`
- Final score: 48
- Re-rank relevance: N/A

Evidence snippets:
- FORECAST ( ( SELECT TIMESTAMP TRUNC ( start date , HOUR ) as trip hour , subscriber type , COUNT ( ) as num trips FROM bigquery-public-data.san francisco bikeshare.bikeshare trips WHERE start date >= TIMESTAMP ( '2018-01-01' ) GROUP BY TIMESTAMP TRUNC ( start date , HOUR ), subscriber type ), horizon => 720 , confidence level => 0.95 , timestamp col => 'trip hour' , data col => 'num trips' , id cols => [ 'subscriber type' ] ); The results look similar to the following: +---------------------+--------------------------+------------------+------------------+---------------------------------+---------------------------------+--------------------+ subscriber type forecast timestamp forecast value confidence level prediction interval lower bound prediction interval upper bound ai forecast status +---------------------+--------------------------+------------------+------------------+---------------------------------+---------------------------------+--------------------+ Subscriber 2018-05-01 00:00:00 UTC 26.3045959...
- FORECAST ( ( SELECT TIMESTAMP TRUNC ( start date , HOUR ) as trip hour , COUNT ( ) as num trips FROM bigquery-public-data.san francisco bikeshare.bikeshare trips WHERE subscriber type = 'Subscriber' AND start date >= TIMESTAMP ( '2018-01-01' ) GROUP BY TIMESTAMP TRUNC ( start date , HOUR ) ), horizon => 720 , confidence level => 0.95 , timestamp col => 'trip hour' , data col => 'num trips' ); The results look similar to the following: +-------------------------+-------------------+------------------+---------------------------------+---------------------------------+--------------------+ forecast timestamp forecast value confidence level prediction interval lower bound prediction interval upper bound ai forecast status +-------------------------+-------------------+------------------+---------------------------------+---------------------------------+--------------------+ 2018-05-01 00:00:00 UTC 26.3045959...
- FORECAST ( ( SELECT TIMESTAMP TRUNC ( start date , HOUR ) as trip hour , COUNT ( ) as num trips FROM bigquery-public-data.san francisco bikeshare.bikeshare trips WHERE subscriber type = 'Subscriber' AND start date >= TIMESTAMP ( '2018-01-01' ) GROUP BY TIMESTAMP TRUNC ( start date , HOUR ) ), horizon => 720 , confidence level => 0.95 , timestamp col => 'trip hour' , data col => 'num trips' , output historical time series => true ); When the query is finished running, click the Visualization tab in the Query results pane.
- Home Documentation Data analytics BigQuery Guides Send feedback Forecast multiple time series with a TimesFM univariate model Stay organized with collections Save and categorize content based on your preferences.

