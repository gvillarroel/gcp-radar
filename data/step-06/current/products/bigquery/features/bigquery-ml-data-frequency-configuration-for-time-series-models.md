---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.814Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery ML data frequency configuration for time series models"
feature_slug: "bigquery-ml-data-frequency-configuration-for-time-series-models"
latest_feature_date: "2020-09-29"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/arima-multiple-time-series-forecasting-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/arima-plus-xreg-multiple-time-series-forecasting-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/arima-speed-up-tutorial"
keywords:
  - "time-series data frequency"
  - "TIME_SERIES_ID_COL"
  - "DATA_FREQUENCY"
  - "data frequency"
  - "time series forecasting"
  - "multiple time series"
  - "CREATE MODEL options"
  - "forecasting option"
---

# BigQuery ML data frequency configuration for time series models

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery ML time series models now allow the DATA_FREQUENCY parameter to be set when forecasting multiple time series using TIME_SERIES_ID_COL.

## Extended Definition

BigQuery ML time series models now allow the DATA_FREQUENCY parameter to be set when forecasting multiple time series using TIME_SERIES_ID_COL.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/arima-multiple-time-series-forecasting-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-multiple-time-series-forecasting-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/arima-plus-xreg-multiple-time-series-forecasting-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-plus-xreg-multiple-time-series-forecasting-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/arima-speed-up-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-speed-up-tutorial)

## Supporting Pages

### "Forecast multiple time series with an ARIMA_PLUS univariate model \_|\_\

- URL: [https://docs.cloud.google.com/bigquery/docs/arima-multiple-time-series-forecasting-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-multiple-time-series-forecasting-tutorial)
- Source ID: `site-docs-reference`
- Final score: 72
- Re-rank relevance: WEAK
- Re-rank rationale: It discusses forecasting multiple time series in BigQuery ML, but does not describe the DATA_FREQUENCY parameter or related configuration.

Evidence snippets:
- Go to BigQuery In the query editor, paste in the following query and click Run : CREATE OR REPLACE MODEL bqml tutorial.nyc citibike arima model group OPTIONS ( model type = 'ARIMA PLUS' , time series timestamp col = 'date' , time series data col = 'num trips' , time series id col = 'start station name' , auto arima max order = 5 ) AS SELECT start station name , EXTRACT ( DATE from starttime ) AS date , COUNT ( ) AS num trips FROM bigquery-public-data.new york.citibike trips WHERE start station name LIKE '%Central Park%' GROUP BY start station name , date ; The query takes approximately 24 seconds to complete, after which you can access the nyc citibike arima model group model.
- What's next Learn how to forecast a single time series with a univariate model Learn how to forecast a single time series with a multivariate model Learn how to scale a univariate model when forecasting multiple time series over many rows .
- You use the time series id col option of the CREATE MODEL statement to specify one or more columns in the input data that you want to get forecasts for, in this case the Citi Bike station, as represented by the start station name column.
- Home Documentation Data analytics BigQuery Guides Send feedback Forecast multiple time series with an ARIMA PLUS univariate model Stay organized with collections Save and categorize content based on your preferences.

### "Forecast multiple time series with a multivariate model \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/arima-plus-xreg-multiple-time-series-forecasting-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-plus-xreg-multiple-time-series-forecasting-tutorial)
- Source ID: `site-docs-reference`
- Final score: 60
- Re-rank relevance: MODERATE
- Re-rank rationale: The page is a multiple-time-series forecasting tutorial that implies multiseries setup, but the provided excerpt does not explicitly mention the DATA_FREQUENCY/TIME_SERIES_ID_COL configuration.

Evidence snippets:
- Go to BigQuery In the query editor, paste in the following query and click Run : CREATE OR REPLACE MODEL bqml tutorial.multi time series arimax model OPTIONS ( model type = 'ARIMA PLUS XREG' , time series id col = [ 'store number' , 'item number' ] , time series data col = 'bottles sold' , time series timestamp col = 'date' ) AS SELECT FROM bqml tutorial.iowa liquor sales with weather WHERE DATE DATE ( '2022-09-01' ); The query takes approximately 38 minutes to complete, after which you can access the multi time series arimax model model.
- What's next Learn how to forecast a single time series with a univariate model Learn how to forecast multiple time series with a univariate model Learn how to scale a univariate model when forecasting multiple time series over many rows .
- In time series forecasting, the prediction interval, as represented by the prediction interval lower bound and prediction interval upper bound column values, is as important as the forecast value column value.
- Home Documentation Data analytics BigQuery Guides Send feedback Forecast multiple time series with a multivariate model Stay organized with collections Save and categorize content based on your preferences.

### "Scale an ARIMA_PLUS univariate time series model to millions of time series\

- URL: [https://docs.cloud.google.com/bigquery/docs/arima-speed-up-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-speed-up-tutorial)
- Source ID: `site-docs-reference`
- Final score: 54
- Re-rank relevance: WEAK
- Re-rank rationale: It discusses forecasting multiple time series by identifier column, but does not reference DATA_FREQUENCY configuration for TIME_SERIES_ID_COL explicitly.

Evidence snippets:
- Before reading this tutorial, you should read Forecast multiple time series with a univariate model and Large-scale time series forecasting best practices .
- Go to BigQuery In the query editor, paste in the following query and click Run : CREATE OR REPLACE MODEL bqml tutorial.liquor forecast by product OPTIONS ( MODEL TYPE = 'ARIMA PLUS' , TIME SERIES TIMESTAMP COL = 'date' , TIME SERIES DATA COL = 'total bottles sold' , TIME SERIES ID COL = [ 'store number' , 'item description' ] , HOLIDAY REGION = 'US' , AUTO ARIMA MAX ORDER = 2 , MAX TIME SERIES LENGTH = 30 ) AS SELECT store number , item description , date , SUM ( bottles sold ) as total bottles sold FROM bigquery-public-data.iowa liquor sales.sales WHERE date BETWEEN DATE ( "2015-01-01" ) AND DATE ( "2021-12-31" ) GROUP BY store number , item description , date ; The query takes about 1 hour 16 minutes to complete.
- Go to BigQuery In the query editor, paste in the following query and click Run : CREATE OR REPLACE MODEL bqml tutorial.nyc citibike arima model max order 2 fast training OPTIONS ( model type = 'ARIMA PLUS' , time series timestamp col = 'date' , time series data col = 'num trips' , time series id col = 'start station name' , auto arima max order = 2 , max time series length = 30 ) AS SELECT FROM bqml tutorial.nyc citibike time series WHERE date '2016-06-01' ; The query takes about 35 seconds to complete.
- Go to BigQuery In the query editor, paste in the following query and click Run : CREATE OR REPLACE MODEL bqml tutorial.nyc citibike arima model max order 2 OPTIONS ( model type = 'ARIMA PLUS' , time series timestamp col = 'date' , time series data col = 'num trips' , time series id col = 'start station name' , auto arima max order = 2 ) AS SELECT FROM bqml tutorial.nyc citibike time series WHERE date '2016-06-01' ; The query takes about 2 minutes to complete.

