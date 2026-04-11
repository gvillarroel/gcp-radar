---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.645Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery public holidays_and_events_for_forecasting dataset"
feature_slug: "bigquery-public-holidays-and-events-for-forecasting-dataset"
latest_feature_date: "2023-07-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create"
keywords:
  - "holidays_and_events_for_forecasting"
  - "public holidays and events dataset"
  - "forecasting holidays lookup"
  - "forecasting holidays table"
  - "public holidays dataset"
  - "holiday lookup table"
  - "bigquery-public-data.ml_datasets"
---

# BigQuery public holidays_and_events_for_forecasting dataset

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

A new public table, bigquery-public-data.ml_datasets.holidays_and_events_for_forecasting, is available for built-in holiday lookup in BigQuery ML time series forecasting.

## Extended Definition

BigQuery ML references a public table in the `bigquery-public-data` dataset called the *holidays and events for forecasting* table for holiday-based forecasting data. In `CREATE MODEL` usage, holiday names must match values represented in this public table, and the table can be queried directly (for example by `region`) to inspect available holidays for use in forecasting.

## Evidence Summary

The cited BigQuery ML CREATE MODEL reference page documents the public holidays/events forecasting table, describes how its holiday names are used by model options, and shows how to query it by region.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create)

## Supporting Pages

### Use BigQuery ML to predict penguin weight \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/linear-regression-tutorial](https://docs.cloud.google.com/bigquery/docs/linear-regression-tutorial)
- Source ID: `site-docs-root-2`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- Select the model you'll use for predictions. read gbq model loads model data from BigQuery, but you could also use the model object object from previous steps. model = bpd . read gbq model ( your model id , For example: "bqml tutorial.penguins model", ) Load data from BigQuery bq df = bpd . read gbq ( "bigquery-public-data.ml datasets.penguins" ) Use 'contains' function to filter by island containing the string "Biscoe". biscoe data = bq df . loc [ bq df [ "island" ] . str . contains ( "Biscoe" )] result = model . predict ( biscoe data ) Expected output results: predicted body mass g species island culmen length mm culmen depth mm body mass g flipper length mm sex 23 4681.782896 Gentoo penguin (Pygoscelis papua) Biscoe <NA> <NA> <NA> <NA> <NA> 332 4740.7907 Gentoo penguin (Pygoscelis papua) Biscoe 46.2 14.4 214.0 4650.0 <NA> 160 4731.310452 Gentoo penguin (Pygoscelis papua) Biscoe 44.5 14.3 216.0 4100.0 <NA> The results should look similar to the following: Explain the prediction results SQL To understand why the model is generating these prediction results, you can use the ML.EXPLAIN PREDICT function .
- For more information, see Set up ADC for a local development environment . from bigframes.ml.linear model import LinearRegression import bigframes.pandas as bpd Load data from BigQuery bq df = bpd . read gbq ( "bigquery-public-data.ml datasets.penguins" ) Drop rows with nulls to get training data training data = bq df . dropna ( subset = [ "body mass g" ]) Specify your feature (or input) columns and the label (or output) column: feature columns = training data . drop ( columns = [ "body mass g" ]) label columns = training data [[ "body mass g" ]] Create the linear model model = LinearRegression () model . fit ( feature columns , label columns ) model . to gbq ( your model id , # For example: "bqml tutorial.penguins model" replace = True , ) It takes about 30 seconds to create the model.
- This query's SELECT statement uses the following columns in the bigquery-public-data.ml datasets.penguins table to predict a penguin's weight: species : the species of penguin. island : the island that the penguin resides on. culmen length mm : the length of the penguin's culmen in millimeters. culmen depth mm : the depth of the penguin's culmen in millimeters. flipper length mm : the length of the penguin's flippers in millimeters. sex : the sex of the penguin.
- Go to BigQuery In the query editor, run the following query to retrain the model: #standardSQL CREATE OR REPLACE MODEL bqml tutorial.penguins model OPTIONS ( model type = 'linear reg' , input label cols = [ 'body mass g' ] , enable global explain = TRUE ) AS SELECT FROM bigquery-public-data.ml datasets.penguins WHERE body mass g IS NOT NULL ; In the query editor, run the following query to get global explanations: SELECT FROM ML .

### Export a BigQuery ML model for online prediction \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/export-model-tutorial](https://docs.cloud.google.com/bigquery/docs/export-model-tutorial)
- Source ID: `site-docs-root-2`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- This training job should take around 2 hours to complete. bq query -- use legacy sql = false \ 'CREATE MODEL bqml tutorial.automl iris model OPTIONS (model type="automl classifier", budget hours=1, input label cols=["species"]) AS SELECT EXCEPT(multiplier) FROM bigquery-public-data.ml datasets.iris, unnest(GENERATE ARRAY(1, 10)) as multiplier;' Export the model Export the model to a Cloud Storage bucket using the bq command-line tool .
- This training job should take approximately 7 minutes to complete. bq query -- use legacy sql = false \ 'CREATE MODEL bqml tutorial.boosted tree iris model OPTIONS (model type="boosted tree classifier", max iterations=10, input label cols=["species"]) AS SELECT FROM bigquery-public-data.ml datasets.iris;' Export the model Export the model to a Cloud Storage bucket using the bq command-line tool .
- This training job should take approximately 1 minute to complete. bq query -- use legacy sql = false \ 'CREATE MODEL bqml tutorial.iris model OPTIONS (model type="logistic reg", max iterations=10, input label cols=["species"]) AS SELECT FROM bigquery-public-data.ml datasets.iris;' Export the model Export the model to a Cloud Storage bucket using the bq command-line tool .

### The CREATE MODEL statement \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create)
- Source ID: `site-docs-root`
- Final score: 20
- Re-rank relevance: N/A

Evidence snippets:
- Use one of the following options: The holiday name as it is represented in the bigquery-public-data.ml datasets.holidays and events for forecasting public table, including case.
- You can see the holidays for a region by running SELECT FROM bigquery-public-data.ml datasets.holidays and events for forecasting WHERE region = region .

