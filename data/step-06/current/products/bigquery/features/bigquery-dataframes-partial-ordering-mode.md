---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.485Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery DataFrames partial ordering mode"
feature_slug: "bigquery-dataframes-partial-ordering-mode"
latest_feature_date: "2024-09-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
keywords:
  - "query plan optimization"
  - "partial ordering mode"
  - "query execution plan"
  - "partial_ordering"
  - "partial ordering"
  - "mode for DataFrames"
  - "BigQuery DataFrames"
---

# BigQuery DataFrames partial ordering mode

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery DataFrames now support a partial ordering mode for generating more efficient query plans.

## Extended Definition

BigQuery DataFrames partial ordering mode is a DataFrames feature that can be used to generate more efficient query execution plans. The provided evidence indicates this mode is intended to improve query generation efficiency, but only at a high level.

## Evidence Summary

The BigQuery release notes directly state that partial ordering mode can be used in BigQuery DataFrames to generate efficient queries, but the excerpts do not provide operational details or usage parameters.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)

## Supporting Pages

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 34
- Re-rank relevance: N/A

Evidence snippets:
- April 17, 2025 Feature You can use partial ordering mode in BigQuery DataFrames to generate efficient queries.
- Feature You can now use BigQuery DataFrames version 2.0 , which makes security and performance improvements to the BigQuery DataFrames API, adds new features, and introduces breaking changes.
- Use generative AI to analyze multimodal data and generate embeddings by using BigQuery ML SQL functions or BigQuery DataFrames methods with Gemini and multimodal embedding models.
- Feature You can now use BigQuery and BigQuery DataFrames to enable multimodal analysis, transformation, and data engineering (ELT) workflows in both SQL and Python.

### "Limit forecasted values for an ARIMA_PLUS time series model \_|\_ BigQuery\

- URL: [https://docs.cloud.google.com/bigquery/docs/arima-time-series-forecasting-with-limits-tutorial](https://docs.cloud.google.com/bigquery/docs/arima-time-series-forecasting-with-limits-tutorial)
- Source ID: `site-docs-root`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- Create a dataset named bqml tutorial with the data location set to US . bq mk --dataset \ --location=US \ --description "BigQuery ML tutorial dataset." \ bqml tutorial Confirm that the dataset was created: bq ls API Call the datasets.insert method with a defined dataset resource . { "datasetReference" : { "datasetId" : "bqml tutorial" } } BigQuery DataFrames Before trying this sample, follow the BigQuery DataFrames setup instructions in the BigQuery quickstart using BigQuery DataFrames .
- In the Visualization configuration pane, choose Bar for the Visualization type : BigQuery DataFrames Before trying this sample, follow the BigQuery DataFrames setup instructions in the BigQuery quickstart using BigQuery DataFrames .
- For more information, see the BigQuery DataFrames reference documentation .
- For more information, see the BigQuery DataFrames reference documentation .

