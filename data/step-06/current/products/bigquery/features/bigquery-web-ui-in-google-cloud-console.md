---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.872Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery web UI in Google Cloud Console"
feature_slug: "bigquery-web-ui-in-google-cloud-console"
latest_feature_date: "2018-07-19"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
  - "https://docs.cloud.google.com/bigquery/docs/arima-plus-xreg-single-time-series-forecasting-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/arima-single-time-series-forecasting-tutorial"
keywords:
  - "web-based BigQuery interface"
  - "Google Cloud Console BigQuery"
  - "BigQuery web UI"
  - "Cloud Console UI"
  - "BigQuery console"
  - "BigQuery Console"
  - "query history"
  - "query editor"
---

# BigQuery web UI in Google Cloud Console

Product: BigQuery
Coverage: LOW

## Step 02 Summary

The BigQuery web interface in the Google Cloud Console entered a Beta release.

## Extended Definition

The BigQuery web interface in the Google Cloud Console entered a Beta release.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- [https://docs.cloud.google.com/bigquery/docs/arima-plus-xreg-single-time-series-forecasting-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-plus-xreg-single-time-series-forecasting-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/arima-single-time-series-forecasting-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-single-time-series-forecasting-tutorial)

## Supporting Pages

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- This pricing update applies to the following third-party connectors when they are generally available (GA) : Facebook Ads MySQL Oracle PostgreSQL Salesforce Salesforce Marketing Cloud ServiceNow Other third-party connectors planned for future releases August 18, 2025 Libraries Java 2.54.1 (2025-08-13) Bug Fixes Adapt graalvm config to arrow update ( #3928 ) ( ecfabc4 ) Dependencies Update dependency com.google.cloud:sdk-platform-java-config to v3.51.0 ( #3924 ) ( cb66be5 ) Feature In the BigQuery console, you can now use the Reference panel to do the following: In the query editor, you can use the Reference panel to preview the schema details of tables, snapshots, views, and materialized views, or open these resources in a new tab.
- Feature In the BigQuery console, in the Welcome tab, you can now try the Apache Spark demo notebook that walks you through the basics of Spark notebook and showcases serverless Spark in BigQuery .
- March 03, 2025 Libraries Python 3.30.0 (2025-02-26) Features Add roundingmode enum, wiring, and tests ( #2121 ) ( 3a48948 ) Adds foreign type info attribute to table class and adds unit tests. ( #2126 ) ( 2c19681 ) Support resource tags for table ( #2093 ) ( d4070ca ) Bug Fixes Avoid blocking in download thread when using BQ Storage API ( #2034 ) ( 54c8d07 ) Retry 404 errors in Client.query(...) ( #2135 ) ( c6d5f8a ) Dependencies Updates required checks list in github ( #2136 ) ( fea49ff ) Use pandas-gbq to determine schema in load table from dataframe ( #2095 ) ( 7603bd7 ) Documentation Update magics.rst ( #2125 ) ( b5bcfb3 ) Libraries Java 2.48.1 (2025-02-26) Dependencies Update actions/upload-artifact action to v4.6.1 ( #3691 ) ( 9c0edea ) Update dependency com.google.api.grpc:proto-google-cloud-bigqueryconnection-v1 to v2.60.0 ( #3680 ) ( 6d9a40d ) Update dependency com.google.apis:google-api-services-bigquery to v2-rev20250216-2.0.0 ( #3688 ) ( e3beb6f ) Update dependency com.google.cloud:google-cloud-datacatalog-bom to v1.64.0 ( #3681 ) ( 9e4e261 ) Update dependency com.google.cloud:sdk-platform-java-config to v3.44.0 ( #3694 ) ( f69fbd3 ) Update dependency com.google.oauth-client:google-oauth-client-java6 to v1.38.0 ( #3685 ) ( 53bd7af ) Update dependency com.google.oauth-client:google-oauth-client-jetty to v1.38.0 ( #3686 ) ( d71b2a3 ) Update ossf/scorecard-action action to v2.4.1 ( #3690 ) ( cdb61fe ) Feature Gemini in BigQuery can help you complete Python code with contextually appropriate recommendations that are based on content in the query editor.
- October 02, 2025 Feature You can now use the notebook gallery in the BigQuery web UI as your central hub for discovering and using prebuilt notebook templates.

### "Forecast a single time series with a multivariate model \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/arima-plus-xreg-single-time-series-forecasting-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-plus-xreg-single-time-series-forecasting-tutorial)
- Source ID: `site-docs-reference`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- Go to BigQuery In the query editor, paste in the following query and click Run : CREATE TABLE bqml tutorial.seattle air quality daily AS WITH pm25 daily AS ( SELECT avg ( arithmetic mean ) AS pm25 , date local AS date FROM bigquery-public-data.epa historical air quality.pm25 nonfrm daily summary WHERE city name = 'Seattle' AND parameter name = 'Acceptable PM2.5 AQI & Speciation Mass' GROUP BY date local ), wind speed daily AS ( SELECT avg ( arithmetic mean ) AS wind speed , date local AS date FROM bigquery-public-data.epa historical air quality.wind daily summary WHERE city name = 'Seattle' AND parameter name = 'Wind Speed - Resultant' GROUP BY date local ), temperature daily AS ( SELECT avg ( first max value ) AS temperature , date local AS date FROM bigquery-public-data.epa historical air quality.temperature daily summary WHERE city name = 'Seattle' AND parameter name = 'Outdoor Temperature' GROUP BY date local ) SELECT pm25 daily . date AS date , pm25 , wind speed , temperature FROM pm25 daily JOIN wind speed daily USING ( date ) JOIN temperature daily USING ( date ); Visualize the input data Before creating the model, you can optionally visualize your input time series data to get a sense of the distribution.
- Go to BigQuery In the query editor, paste in the following query and click Run : CREATE OR REPLACE MODEL bqml tutorial.seattle pm25 xreg model OPTIONS ( MODEL TYPE = 'ARIMA PLUS XREG' , time series timestamp col = 'date' , # Identifies the column that contains time points time series data col = 'pm25' ) # Identifies the column to forecast AS SELECT date , # The column that contains time points pm25 , # The column to forecast temperature , # Temperature input to use in forecasting wind speed # Wind speed input to use in forecasting FROM bqml tutorial.seattle air quality daily WHERE date BETWEEN DATE ( '2012-01-01' ) AND DATE ( '2020-12-31' ); The query takes about 20 seconds to complete, after which you can access the seattle pm25 xreg model model.
- Go to BigQuery In the query editor, paste in the following query and click Run : SELECT FROM bqml tutorial.seattle air quality daily ; When the query completes, click Open in > Looker Studio .
- Go to BigQuery In the query editor, paste in the following query and click Run : SELECT FROM ML .

### "Forecast a single time series with an ARIMA_PLUS univariate model \_|\_\

- URL: [https://docs.cloud.google.com/bigquery/docs/arima-single-time-series-forecasting-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-single-time-series-forecasting-tutorial)
- Source ID: `site-docs-reference`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- Go to BigQuery In the query editor, paste in the following query and click Run : CREATE OR REPLACE MODEL bqml tutorial.ga arima model OPTIONS ( model type = 'ARIMA PLUS' , time series timestamp col = 'parsed date' , time series data col = 'total visits' , auto arima = TRUE , data frequency = 'AUTO FREQUENCY' , decompose time series = TRUE ) AS SELECT PARSE TIMESTAMP ( "%Y%m%d" , date ) AS parsed date , SUM ( totals . visits ) AS total visits FROM bigquery-public-data.google analytics sample.ga sessions GROUP BY date ; The query takes about 4 seconds to complete, after which you can access the ga arima model model.
- Go to BigQuery In the query editor, paste in the following query and click Run : SELECT PARSE TIMESTAMP ( "%Y%m%d" , date ) AS parsed date , SUM ( totals . visits ) AS total visits FROM bigquery-public-data.google analytics sample.ga sessions GROUP BY date ; When the query completes, click Open in > Looker Studio .
- Go to BigQuery In the query editor, paste in the following query and click Run : SELECT FROM ML .
- Go to BigQuery In the query editor, paste in the following query and click Run : SELECT FROM ML .

