---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.791Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Stored procedures"
feature_slug: "stored-procedures"
latest_feature_date: "2020-03-30"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/dml-syntax"
  - "https://docs.cloud.google.com/bigquery/docs/time-series-forecasting-holidays-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/vector-index-text-search-tutorial"
keywords:
  - "stored"
  - "procedures"
  - "bigquery"
  - "supports"
  - "reusable"
  - "procedural"
  - "sql"
  - "logic"
---

# Stored procedures

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery supports stored procedures for reusable procedural SQL logic; BigQuery stored procedures let users save and run reusable procedural SQL logic.

## Extended Definition

BigQuery supports stored procedures for reusable procedural SQL logic; BigQuery stored procedures let users save and run reusable procedural SQL logic.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/dml-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/dml-syntax)
- [https://docs.cloud.google.com/bigquery/docs/time-series-forecasting-holidays-tutorial](https://docs.cloud.google.com/bigquery/docs/time-series-forecasting-holidays-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/vector-index-text-search-tutorial](https://docs.cloud.google.com/bigquery/docs/vector-index-text-search-tutorial)

## Supporting Pages

### "Data manipulation language (DML) statements in GoogleSQL \_|\_ BigQuery\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/dml-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/dml-syntax)
- Source ID: `site-docs-reference`
- Final score: 58
- Re-rank relevance: N/A

Evidence snippets:
- On-demand query size calculation If you use on-demand billing, BigQuery charges for data manipulation language (DML) statements based on the number of bytes processed by the statement.
- Data manipulation language (DML) statements in GoogleSQL The BigQuery data manipulation language (DML) enables you to update, insert, and delete data from your BigQuery tables.
- Home Documentation Data analytics BigQuery Reference Send feedback Stay organized with collections Save and categorize content based on your preferences.

### "Perform semantic search and retrieval-augmented generation \_|\_ BigQuery\

- URL: [https://docs.cloud.google.com/bigquery/docs/vector-index-text-search-tutorial](https://docs.cloud.google.com/bigquery/docs/vector-index-text-search-tutorial)
- Source ID: `site-docs-reference-2`
- Final score: 56
- Re-rank relevance: N/A

Evidence snippets:
- Create a dataset named bqml tutorial with the data location set to US . bq mk --dataset \ --location=US \ --description "BigQuery ML tutorial dataset." \ bqml tutorial Confirm that the dataset was created: bq ls API Call the datasets.insert method with a defined dataset resource . { "datasetReference" : { "datasetId" : "bqml tutorial" } } Create the remote model for text embedding generation Create a remote model that represents a hosted Vertex AI text embedding generation model: In the Google Cloud console, go to the BigQuery page.
- Methods for improving security in data... +-----------------------------+--------------------+-------------------------------------------------+-------------------------------------------------+ Create the remote model for text generation Create a remote model that represents a hosted Vertex AI text generation model: In the Google Cloud console, go to the BigQuery page.
- Set service account permissions: resourcemanager.projects.getIamPolicy and resourcemanager.projects.setIamPolicy Create a model and run inference: bigquery.jobs.create bigquery.models.create bigquery.models.getData bigquery.models.updateData bigquery.models.updateMetadata You might also be able to get these permissions with custom roles or other predefined roles .
- Go to BigQuery In the query editor, run the following statement: CREATE OR REPLACE MODEL bqml tutorial.embedding model REMOTE WITH CONNECTION DEFAULT OPTIONS ( ENDPOINT = 'text-embedding-005' ); The query takes several seconds to complete, after which the model embedding model can be accessed through the Explorer pane.

### "Use custom holidays in an ARIMA_PLUS time-series forecasting model \_|\_\

- URL: [https://docs.cloud.google.com/bigquery/docs/time-series-forecasting-holidays-tutorial](https://docs.cloud.google.com/bigquery/docs/time-series-forecasting-holidays-tutorial)
- Source ID: `site-docs-reference-2`
- Final score: 54
- Re-rank relevance: N/A

Evidence snippets:
- Go to BigQuery In the SQL editor pane, run the following SQL statement: CREATE OR REPLACE MODEL bqml tutorial.forecast googleio with custom holiday OPTIONS ( model type = 'ARIMA PLUS' , holiday region = 'US' , time series timestamp col = 'date' , time series data col = 'views' , data frequency = 'DAILY' , horizon = 365 ) AS ( training data AS ( SELECT FROM bqml tutorial.googleio page views WHERE date '2022-01-01' ), custom holiday AS ( SELECT 'US' AS region , 'GoogleIO' AS holiday name , primary date , 1 AS preholiday days , 2 AS postholiday days FROM UNNEST ( [ DATE ( '2017-05-17' ), DATE ( '2018-05-08' ), DATE ( '2019-05-07' ), -- cancelled in 2020 due to pandemic DATE ( '2021-05-18' ), DATE ( '2022-05-11' ) ] ) AS primary date ) ); Visualize the forecasted results After you create the model using custom holidays, join the original data from the bqml tutorial.googleio page views table with the forecasted value from the ML.EXPLAIN FORECAST function , and then visualize it by using Data Studio : Go to the BigQuery page.
- Go to BigQuery In the SQL editor pane, run the following SQL statement: SELECT "original" AS model type , FROM ml . evaluate ( MODEL bqml tutorial.forecast googleio , ( SELECT FROM bqml tutorial.googleio page views WHERE date >= '2022-05-08' AND date '2022-05-12' ), STRUCT ( 365 AS horizon , TRUE AS perform aggregation )) UNION ALL SELECT "with custom holiday" AS model type , FROM ml . evaluate ( MODEL bqml tutorial.forecast googleio with custom holiday , ( SELECT FROM bqml tutorial.googleio page views WHERE date >= '2022-05-08' AND date '2022-05-12' ), STRUCT ( 365 AS horizon , TRUE AS perform aggregation )); The results show that the second model offers a significant performance improvement: Clean up Caution : Deleting a project has the following effects: Everything in the project is deleted.
- Go to BigQuery In the SQL editor pane, run the following SQL statement: CREATE OR REPLACE MODEL bqml tutorial.forecast googleio OPTIONS ( model type = 'ARIMA PLUS' , holiday region = 'US' , time series timestamp col = 'date' , time series data col = 'views' , data frequency = 'DAILY' , horizon = 365 ) AS SELECT FROM bqml tutorial.googleio page views WHERE date '2022-01-01' ; Visualize the forecasted results After you create the model using built-in holidays, join the original data from the bqml tutorial.googleio page views table with the forecasted value from the ML.EXPLAIN FORECAST function , and then visualize it by using Data Studio : Go to the BigQuery page.
- Go to BigQuery In the SQL editor pane, run the following SQL statement: CREATE OR REPLACE TABLE bqml tutorial.googleio page views AS SELECT DATETIME TRUNC ( datehour , DAY ) AS date , SUM ( views ) AS views FROM bigquery-public-data.wikipedia.pageviews WHERE datehour >= '2017-01-01' AND datehour '2023-01-01' AND title = 'Google I/O' GROUP BY DATETIME TRUNC ( datehour , DAY ) Create a time-series forecasting model that uses built-in holidays Create a model that forecasts daily page views for the Wikipedia "Google I/O" page, based on page view data before 2022 and taking built-in holidays into account: Go to the BigQuery page.

