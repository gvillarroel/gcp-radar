---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.791Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery Parquet logical type loading for ENUM and LIST"
feature_slug: "bigquery-parquet-logical-type-loading-for-enum-and-list"
latest_feature_date: "2021-04-09"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference"
keywords:
  - "Parquet logical type ENUM"
  - "ENUM to STRING conversion"
  - "ENUM to BYTES conversion"
  - "Parquet ENUM"
  - "load Parquet logical types"
  - "Parquet logical type LIST"
  - "LIST schema inference"
  - "Parquet LIST"
---

# BigQuery Parquet logical type loading for ENUM and LIST

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery now supports improved loading of Parquet ENUM and LIST logical types, including ENUM-to-STRING/BYTES conversion and LIST schema inference.

## Extended Definition

BigQuery now supports improved loading of Parquet ENUM and LIST logical types, including ENUM-to-STRING/BYTES conversion and LIST schema inference.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)

## Supporting Pages

### bq command-line tool reference \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- Source ID: `site-docs-reference`
- Final score: 42
- Re-rank relevance: N/A

Evidence snippets:
- Use one of the following values: DAY HOUR MONTH YEAR --use avro logical types={true false} If the FORMAT part of the --external table definition flag is set to AVRO , then this flag specifies whether to convert logical types into their corresponding types (such as TIMESTAMP ) instead of only using their raw types (such as INTEGER ). --parquet enable list inference={true false} If the FORMAT part of the --external table definition flag is set to PARQUET , then this flag specifies whether to use schema inference for Parquet LIST logical types. --parquet enum as string={true false} If the FORMAT part of the --external table definition flag is set to PARQUET , then this flag specifies whether to infer Parquet ENUM logical types as STRING values.
- The default is false . --parquet enable list inference={true false} If the --source format flag is set to PARQUET , then this flag indicates whether to use schema inference for Parquet LIST logical types. --reference file schema uri= URI Specifies the path to a reference file with the expected table schema for creating external tables.
- You must set the --metadata cache mode flag if you set the --max staleness flag with the bq mk command . --parquet enable list inference={true false} If source format is set to PARQUET , then this flag specifies whether to use schema inference for Parquet LIST logical types.
- Repeat this flag to specify multiple target types. --parquet enum as string={true false} If the --source format flag is set to PARQUET , and you want BigQuery to infer Parquet ENUM logical types as STRING values, then set this flag to true .

