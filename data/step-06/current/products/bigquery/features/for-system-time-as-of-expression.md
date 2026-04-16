---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.871Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "FOR SYSTEM_TIME AS OF expression"
feature_slug: "for-system-time-as-of-expression"
latest_feature_date: "2017-11-02"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-load-data-from-bigquery"
  - "https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-load-data-from-bigquery-job"
  - "https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-load-data-from-csv"
keywords:
  - "system"
  - "time"
  - "expression"
  - "bigquery"
  - "supports"
  - "clause"
---

# FOR SYSTEM_TIME AS OF expression

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery supports the FOR SYSTEM_TIME AS OF expression in the FROM clause.

## Extended Definition

BigQuery supports the FOR SYSTEM_TIME AS OF expression in the FROM clause.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-load-data-from-bigquery](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-load-data-from-bigquery)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-load-data-from-bigquery-job](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-load-data-from-bigquery-job)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-load-data-from-csv](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-load-data-from-csv)

## Supporting Pages

### "Create a BigQuery DataFrame from a finished query job \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-load-data-from-bigquery-job](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-load-data-from-bigquery-job)
- Source ID: `site-docs-reference-required-15`
- Final score: 46
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Client ( project = project , location = location ) Job ID inserted based on the query results selcted to explore job id = JOB ID job = client . get job ( job id ) destination = str ( job . destination ) Load data from a BigQuery table using BigFrames DataFrames: bq df = bpd . read gbq table ( destination ) What's next To search and filter code samples for other Google Cloud products, see the Google Cloud sample browser .
- For more information, see Set up authentication for client libraries . from google.cloud import bigquery import bigframes.pandas as bpd Project ID inserted based on the query results selected to explore project = your project id Location inserted based on the query results selected to explore location = "us" client = bigquery .
- Home Documentation Data analytics BigQuery Samples Create a BigQuery DataFrame from a finished query job Stay organized with collections Save and categorize content based on your preferences.
- Use the BigQuery DataFrames API to explore the results of a query job that may have been started elsewhere, such as from the BigQuery Console or bq CLI.

### Create a BigQuery DataFrame from a CSV file in GCS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-load-data-from-csv](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-load-data-from-csv)
- Source ID: `site-docs-reference-required-15`
- Final score: 46
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see Set up authentication for client libraries . import bigframes.pandas as bpd filepath or buffer = "gs://cloud-samples-data/bigquery/us-states/us-states.csv" df from gcs = bpd . read csv ( filepath or buffer ) Display the first few rows of the DataFrame: df from gcs . head () What's next To search and filter code samples for other Google Cloud products, see the Google Cloud sample browser .
- Home Documentation Data analytics BigQuery Samples Create a BigQuery DataFrame from a CSV file in GCS Stay organized with collections Save and categorize content based on your preferences.
- Code sample Python Before trying this sample, follow the Python setup instructions in the BigQuery quickstart using client libraries .
- Use the BigQuery DataFrames API to turn a CSV file in Google Cloud Storage into a BigQuery DataFrame.

### Create a BigQuery DataFrame from a table \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-load-data-from-bigquery](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-load-data-from-bigquery)
- Source ID: `site-docs-reference-required-15`
- Final score: 46
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create a DataFrame from a BigQuery table: import bigframes.pandas as bpd query or table = "bigquery-public-data.ml datasets.penguins" bq df = bpd . read gbq ( query or table ) What's next To search and filter code samples for other Google Cloud products, see the Google Cloud sample browser .
- Use the BigQuery DataFrames API to turn a table into a BigQuery DataFrame Code sample Python Before trying this sample, follow the Python setup instructions in the BigQuery quickstart using client libraries .
- Home Documentation Data analytics BigQuery Samples Create a BigQuery DataFrame from a table Stay organized with collections Save and categorize content based on your preferences.
- For more information, see the BigQuery Python API reference documentation .

