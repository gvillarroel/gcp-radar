---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.511Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery JupyterLab plugin"
feature_slug: "bigquery-jupyterlab-plugin"
latest_feature_date: "2024-06-25"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/linear-regression-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/arima-single-time-series-forecasting-tutorial"
keywords:
  - "notebook deployment to Cloud Composer"
  - "BigQuery JupyterLab plugin"
  - "JupyterLab and BigQuery integration"
  - "JupyterLab integration"
  - "BigQuery notebook plugin"
  - "notebooks using BigQuery DataFrames"
  - "BigQuery DataFrames"
---

# BigQuery JupyterLab plugin

Product: BigQuery
Coverage: LOW

## Step 02 Summary

The BigQuery JupyterLab plugin now enables data exploration, use of BigQuery DataFrames in notebooks, and notebook deployment to Cloud Composer.

## Extended Definition

Based on the provided excerpts, the evidence only supports that BigQuery workflows in the docs reference using BigQuery DataFrames in sample notebooks or scripts, indicating notebook-oriented DataFrame usage for BigQuery ML tasks. The excerpts do not explicitly describe the BigQuery JupyterLab plugin feature itself, and they do not provide evidence for notebook deployment to Cloud Composer.

## Evidence Summary

The cited pages repeatedly reference BigQuery DataFrames setup and usage in ML tutorials, but do not document the JupyterLab plugin’s integration capabilities or Cloud Composer deployment.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/linear-regression-tutorial](https://docs.cloud.google.com/bigquery/docs/linear-regression-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/arima-single-time-series-forecasting-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-single-time-series-forecasting-tutorial)

## Supporting Pages

### Use BigQuery ML to predict penguin weight \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/linear-regression-tutorial](https://docs.cloud.google.com/bigquery/docs/linear-regression-tutorial)
- Source ID: `site-docs-root-2`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- Create a dataset named bqml tutorial with the data location set to US . bq mk --dataset \ --location=US \ --description "BigQuery ML tutorial dataset." \ bqml tutorial Confirm that the dataset was created: bq ls API Call the datasets.insert method with a defined dataset resource . { "datasetReference" : { "datasetId" : "bqml tutorial" } } BigQuery DataFrames Before trying this sample, follow the BigQuery DataFrames setup instructions in the BigQuery quickstart using BigQuery DataFrames .
- EVALUATE ( MODEL bqml tutorial.penguins model , ( SELECT FROM bigquery-public-data.ml datasets.penguins WHERE body mass g IS NOT NULL )); BigQuery DataFrames Before trying this sample, follow the BigQuery DataFrames setup instructions in the BigQuery quickstart using BigQuery DataFrames .
- PREDICT ( MODEL bqml tutorial.penguins model , ( SELECT FROM bigquery-public-data.ml datasets.penguins WHERE island = 'Biscoe' )); BigQuery DataFrames Before trying this sample, follow the BigQuery DataFrames setup instructions in the BigQuery quickstart using BigQuery DataFrames .
- GLOBAL EXPLAIN ( MODEL bqml tutorial.penguins model ) The results should look similar to the following: BigQuery DataFrames Before trying this sample, follow the BigQuery DataFrames setup instructions in the BigQuery quickstart using BigQuery DataFrames .

### "Forecast a single time series with an ARIMA_PLUS univariate model \_|\_\

- URL: [https://docs.cloud.google.com/bigquery/docs/arima-single-time-series-forecasting-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-single-time-series-forecasting-tutorial)
- Source ID: `site-docs-reference`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- Create a dataset named bqml tutorial with the data location set to US . bq mk --dataset \ --location=US \ --description "BigQuery ML tutorial dataset." \ bqml tutorial Confirm that the dataset was created: bq ls API Call the datasets.insert method with a defined dataset resource . { "datasetReference" : { "datasetId" : "bqml tutorial" } } BigQuery DataFrames Before trying this sample, follow the BigQuery DataFrames setup instructions in the BigQuery quickstart using BigQuery DataFrames .
- ARIMA EVALUATE ( MODEL bqml tutorial.ga arima model ); The results should look similar to the following: BigQuery DataFrames Before trying this sample, follow the BigQuery DataFrames setup instructions in the BigQuery quickstart using BigQuery DataFrames .
- FORECAST ( MODEL bqml tutorial.ga arima model , STRUCT ( 30 AS horizon , 0.8 AS confidence level )); The results should look similar to the following: BigQuery DataFrames Forecast future time series values by using the predict function.
- BigQuery DataFrames Before trying this sample, follow the BigQuery DataFrames setup instructions in the BigQuery quickstart using BigQuery DataFrames .

