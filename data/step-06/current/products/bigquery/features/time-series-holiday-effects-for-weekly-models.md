---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.776Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Time series holiday effects for weekly models"
feature_slug: "time-series-holiday-effects-for-weekly-models"
latest_feature_date: "2021-07-26"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/arima-multiple-time-series-forecasting-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create"
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
keywords:
  - "holiday seasonality"
  - "holiday regressors"
  - "weekly time series"
  - "time series holiday feature"
  - "holiday effects"
  - "time series forecasting"
  - "time series models"
---

# Time series holiday effects for weekly models

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery ML time series models now support holiday effects for weekly time series in addition to daily series.

## Extended Definition

BigQuery ML time series models now support holiday effects for weekly time series in addition to daily series.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/arima-multiple-time-series-forecasting-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-multiple-time-series-forecasting-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create)
- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)

## Supporting Pages

### "Forecast multiple time series with an ARIMA_PLUS univariate model \_|\_\

- URL: [https://docs.cloud.google.com/bigquery/docs/arima-multiple-time-series-forecasting-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-multiple-time-series-forecasting-tutorial)
- Source ID: `site-docs-reference`
- Final score: 46
- Re-rank relevance: N/A

Evidence snippets:
- DataFrame ( { "num trips" : df . starttime , "date" : df [ "starttime" ] . dt . date , } ) date = df [ "starttime" ] . dt . date df . groupby ([ date ]) num trips = features . groupby ([ "date" ]) . count () Results from running "print(num trips)" num trips date 2013-07-01 16650 2013-07-02 22745 2013-07-03 21864 2013-07-04 22326 2013-07-05 21842 2013-07-06 20467 2013-07-07 20477 2013-07-08 21615 2013-07-09 26641 2013-07-10 25732 2013-07-11 24417 2013-07-12 19006 2013-07-13 26119 2013-07-14 29287 2013-07-15 28069 2013-07-16 29842 2013-07-17 30550 2013-07-18 28869 2013-07-19 26591 2013-07-20 25278 2013-07-21 30297 2013-07-22 25979 2013-07-23 32376 2013-07-24 35271 2013-07-25 31084 num trips . plot . line ( Rotate the x labels so they are more visible. rot = 45 , ) Create the time series model You want to forecast the number of bike trips for each Citi Bike station, which requires many time series models; one for each Citi Bike station that is included in the input data.
- This shrinks the search space of hyperparameter tuning in the auto.ARIMA algorithm. auto arima max order = 5 , ) df = bpd . read gbq ( "bigquery-public-data.new york.citibike trips" ) This query creates twelve time series models, one for each of the twelve Citi Bike start stations in the input data.
- Use the to gbq() method to write to a permanent location. model . to gbq ( your model id , # For example: "bqml tutorial.nyc citibike arima model", replace = True , ) This creates twelve time series models, one for each of the twelve Citi Bike start stations in the input data.
- In time series forecasting, the prediction interval, as represented by the prediction interval lower bound and prediction interval upper bound column values, is as important as the forecast value column value.

### The CREATE MODEL statement \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create)
- Source ID: `site-docs-root`
- Final score: 44
- Re-rank relevance: N/A

Evidence snippets:
- CREATE MODEL statement for Autoencoder model Time series forecasting 'ARIMA PLUS' (previously 'ARIMA' ) Univariate time-series forecasting with many modeling components under the hood such as ARIMA model for the trend, STL and ETS for seasonality, and holiday effects.
- Contribution analysis AS All model types support the following AS clause syntax for specifying the training data: AS query statement For time series forecasting models that have a DATA FREQUENCY value of either DAILY or AUTO FREQUENCY , you can optionally use the following AS clause syntax to perform custom holiday modeling in addition to specifying the training data: AS ( training data AS ( query statement ), custom holiday AS ( holiday statement ) ) query statement The query statement argument specifies the query that is used to generate the training data.
- For more information about supported SQL statements and functions for each model type, see the following documents: End-to-end user journeys for generative AI models End-to-end user journeys for time series forecasting models End-to-end user journeys for ML models End-to-end user journeys for imported models Contribution analysis user journey Required permissions To create a dataset to store the model, you need the bigquery.datasets.create IAM permission.
- CREATE MODEL statement for time series models 'ARIMA PLUS XREG' Multivariate time-series forecasting using linear regression and ARIMA PLUS as the underlying techniques.

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 28
- Re-rank relevance: N/A

Evidence snippets:
- This paper describes the algorithms behind the ARIMA PLUS and ARIMA PLUS XREG models for time series forecasting and anomaly detection, and demonstrates the high performance, scalability, explainability, and customizability of the models.
- November 06, 2025 Announcement The research paper ARIMA PLUS: Large-scale, Accurate, Automatic and Interpretable In-Database Time Series Forecasting and Anomaly Detection in Google BigQuery is now publicly available.
- Feature In BigQuery ML, you can now forecast multiple time series at once by using the new TIME SERIES ID COL option that is available in ARIMA PLUS XREG multivariate time series models.
- Feature In BigQuery ML, you can now forecast multiple time series at once by using the TIME SERIES ID COL option that is available in ARIMA PLUS XREG multivariate time series models.

