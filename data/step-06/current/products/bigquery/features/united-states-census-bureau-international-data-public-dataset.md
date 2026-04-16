---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.889Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "United States Census Bureau International Data public dataset"
feature_slug: "united-states-census-bureau-international-data-public-dataset"
latest_feature_date: "2017-05-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/tables"
  - "https://docs.cloud.google.com/bigquery/docs/arima-time-series-forecasting-with-limits-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/information-schema-columns"
keywords:
  - "united"
  - "states"
  - "census"
  - "bureau"
  - "international"
  - "public"
  - "dataset"
  - "bigquery"
---

# United States Census Bureau International Data public dataset

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

The BigQuery public datasets program includes the United States Census Bureau International Data dataset.

## Extended Definition

The BigQuery public datasets program includes the United States Census Bureau International Data dataset.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
- [https://docs.cloud.google.com/bigquery/docs/arima-time-series-forecasting-with-limits-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-time-series-forecasting-with-limits-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/information-schema-columns](https://docs.cloud.google.com/bigquery/docs/information-schema-columns)

## Supporting Pages

### "Limit forecasted values for an ARIMA_PLUS time series model \_|\_ BigQuery\

- URL: [https://docs.cloud.google.com/bigquery/docs/arima-time-series-forecasting-with-limits-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-time-series-forecasting-with-limits-tutorial)
- Source ID: `site-docs-reference`
- Final score: 111
- Re-rank relevance: N/A

Evidence snippets:
- In the following sample, bigquery-public-data.new york.citibike trips indicates that you are querying the citibike trips table in the new york dataset. import bigframes.pandas as bpd df = bpd . read gbq ( "bigquery-public-data.new york.citibike trips" ) features = bpd .
- SQL In the following query, the FROM bigquery-public-data.new york.citibike trips clause indicates that you are querying the citibike trips table in the new york dataset.
- This option causes the model to only forecast values that are greater than 0, based on the values in the column specified by the time series data col argument, in this case num trips . #standardSQL CREATE OR REPLACE MODEL bqml tutorial . nyc citibike arima model OPTIONS ( model type = 'ARIMA PLUS' , time series timestamp col = 'date' , time series data col = 'num trips' , time series id col = 'start station id' , forecast limit lower bound = 0 ) AS SELECT EXTRACT ( DATE FROM starttime ) AS date , COUNT ( ) AS num trips , start station id FROM bigquery-public-data . new york . citibike trips WHERE starttime > '2014-07-11' AND starttime '2015-02-11' GROUP BY date , start station id ; Run the CREATE MODEL query to create and train your model: In the Google Cloud console, click the Compose new query button.
- The CREATE MODEL statement creates and trains a model named bqml tutorial.nyc citibike arima model . #standardSQL CREATE OR REPLACE MODEL bqml tutorial . nyc citibike arima model OPTIONS ( model type = 'ARIMA PLUS' , time series timestamp col = 'date' , time series data col = 'num trips' , time series id col = 'start station id' ) AS SELECT EXTRACT ( DATE FROM starttime ) AS date , COUNT ( ) AS num trips , start station id FROM bigquery-public-data . new york . citibike trips WHERE starttime > '2014-07-11' AND starttime '2015-02-11' GROUP BY date , start station id ; The OPTIONS(model type='ARIMA PLUS', time series timestamp col='date', ...) clause indicates that you are creating an ARIMA -based time series model.

### Create and use tables \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
- Source ID: `site-docs-root`
- Final score: 111
- Re-rank relevance: N/A

Evidence snippets:
- Because the table you're querying is in another project, the bigquery-public-data project, you add the project ID to the dataset in the following format: project id . dataset .INFORMATION SCHEMA. view ; for example, bigquery-public-data.census bureau usa.INFORMATION SCHEMA.TABLES .
- TABLES WHERE table name = 'population by zip 2010' ; The result is similar to the following: +------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ table name ddl +------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ population by zip 2010 CREATE TABLE bigquery-public-data.census bureau usa.population by zip 2010 ( geo id STRING OPTIONS(description="Geo code"), zipcode STRING NOT NULL OPTIONS(description="Five digit ZIP Code Tabulation Area Census Code"), population INT64 OPTIONS(description="The total count of the population for this segment."), minimum age INT64 OPTIONS(description="The minimum age in the age range.
- In this example, the value is bigquery-public-data.census bureau usa.INFORMATION SCHEMA.TABLES .
- SELECT EXCEPT ( is updatable ) FROM bigquery-public-data . census bureau usa .

### COLUMNS view \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/information-schema-columns](https://docs.cloud.google.com/bigquery/docs/information-schema-columns)
- Source ID: `site-api-reference`
- Final score: 99
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Because the table you're querying is in another project, the bigquery-public-data project, you add the project ID to the dataset in the following format: project id . dataset .INFORMATION SCHEMA. view ; for example, bigquery-public-data.census bureau usa.INFORMATION SCHEMA.TABLES .
- SELECT EXCEPT ( is updatable ) FROM bigquery-public-data . census bureau usa .
- Example The following example retrieves metadata from the INFORMATION SCHEMA.COLUMNS view for the population by zip 2010 table in the census bureau usa dataset.
- This dataset is part of the BigQuery public dataset program .

