---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.570Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery materialized views max_staleness option"
feature_slug: "bigquery-materialized-views-max-staleness-option"
latest_feature_date: "2024-04-04"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference"
keywords:
  - "processing freshness tuning"
  - "freshness and cost control"
  - "CREATE MATERIALIZED VIEW OPTIONS max_staleness"
  - "materialized view staleness"
  - "max_staleness option"
  - "staleness setting"
  - "max_staleness"
  - "MAX_STALENESS"
---

# BigQuery materialized views max_staleness option

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

BigQuery materialized views now support the max_staleness option to control staleness and processing cost for large, frequently changing datasets.

## Extended Definition

`max_staleness` is an `OPTIONS` parameter for BigQuery materialized views (set with `CREATE MATERIALIZED VIEW`), whose value is an `INTERVAL` that defines the maximum allowed staleness for materialized view processing. It is documented as improving performance consistency and controlling processing cost for large, frequently changing datasets, and it is disabled by default. The corresponding bq CLI supports `--max staleness`, and its description indicates it controls how fresh materialized view or external table metadata/queries may be when the flag is used.

## Evidence Summary

The DDL reference defines the `max staleness` option for materialized views (type, example, default, and staleness/cost behavior), while the bq CLI reference documents the equivalent `--max staleness` flag and its applicability to materialized views and external tables.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- NAME and VALUE must be one of the following combinations: NAME VALUE Details enable refresh BOOLEAN Example: enable refresh=false Default: true refresh interval minutes FLOAT64 Example: refresh interval minutes=20 Default: refresh interval minutes=30 expiration timestamp TIMESTAMP Example: expiration timestamp=TIMESTAMP "2025-01-01 00:00:00 UTC" This property is equivalent to the expirationTime table resource property. expiration timestamp is optional and not used by default. max staleness INTERVAL Example: max staleness=INTERVAL "4:0:0" HOUR TO SECOND The max staleness property provides consistently high performance with controlled costs when processing large, frequently changing datasets. max staleness is disabled by default. allow non incremental definition BOOLEAN Example: allow non incremental definition=true The allow non incremental definition property supports an expanded range of SQL queries to create materialized views. allow non incremental definition=true is disabled by default.
- NAME and VALUE must be one of the following combinations: NAME VALUE Details enable refresh BOOLEAN Example: enable refresh=false Default: true refresh interval minutes FLOAT64 Example: refresh interval minutes=20 Default: refresh interval minutes=30 expiration timestamp TIMESTAMP Example: expiration timestamp=TIMESTAMP "2025-01-01 00:00:00 UTC" This property is equivalent to the expirationTime table resource property. expiration timestamp is optional and not used by default. max staleness INTERVAL Example: max staleness=INTERVAL "4:0:0" HOUR TO SECOND The max staleness property provides consistently high performance with controlled costs when processing large, frequently changing datasets. max staleness is disabled by default. allow non incremental definition BOOLEAN Example: allow non incremental definition=true The allow non incremental definition property supports an expanded range of SQL queries to create materialized views. allow non incremental definition=true is disabled by default.
- CREATE OR REPLACE EXTERNAL TABLE mydataset . newtable ( x INT64 , y STRING , z BOOL ) WITH CONNECTION myconnection OPTIONS ( format = "PARQUET" , max staleness = STALENESS INTERVAL , metadata cache mode = 'AUTOMATIC' ); The following example creates an external table from multiple URIs.
- For example, with change data capture , when this option is set, the table copy operation is denied if data is more stale than the max staleness value. max staleness is disabled by default. enable fine grained mutations BOOL In preview .

### bq command-line tool reference \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- Source ID: `site-docs-reference`
- Final score: 20
- Re-rank relevance: N/A

Evidence snippets:
- You must set the --metadata cache mode flag if you set the --max staleness flag with the bq mk command . --parquet enable list inference={true false} If source format is set to PARQUET , then this flag specifies whether to use schema inference for Parquet LIST logical types.
- Repeat this flag to specify multiple labels. --max staleness= INTERVAL Specifies whether cached metadata is used by operations against the table, and how fresh the cached metadata must be in order for the operation to use it.
- For more information, see Idle slots . --max staleness= INTERVAL Specifies an INTERVAL value that determines the maximum staleness allowed when querying a materialized view or an external table.

