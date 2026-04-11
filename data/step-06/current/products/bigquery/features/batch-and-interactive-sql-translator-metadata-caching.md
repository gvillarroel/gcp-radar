---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.396Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Batch and interactive SQL translator metadata caching"
feature_slug: "batch-and-interactive-sql-translator-metadata-caching"
latest_feature_date: "2025-09-09"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference"
  - "https://docs.cloud.google.com/bigquery/docs/migration-intro"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-bigquery/latest/com.google.cloud.bigquery"
keywords:
  - "translator metadata caching"
  - "interactive translator"
  - "SQL translator cache"
  - "translation latency"
  - "batch translator"
  - "SQL translator"
  - "metadata cache"
---

# Batch and interactive SQL translator metadata caching

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery’s batch and interactive translators now cache metadata to improve SQL translation latency.

## Extended Definition

BigQuery Migration Service offers two SQL translation modes: a batch SQL translator for bulk SQL migration and an interactive SQL translator for translating individual queries. BigQuery also exposes a metadata cache mode for table metadata (configurable as automatic or manual and including refresh behavior), but the provided excerpts do not explicitly state that this cache is used by those SQL translators or that it directly lowers translation latency.

## Evidence Summary

The migration documentation confirms batch and interactive SQL translator modes, while the CLI and Java references confirm BigQuery metadata cache configuration and metadata-cache-related stats, but none of the provided snippets directly tie metadata caching to translator latency improvement.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- [https://docs.cloud.google.com/bigquery/docs/migration-intro](https://docs.cloud.google.com/bigquery/docs/migration-intro)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-bigquery/latest/com.google.cloud.bigquery](https://docs.cloud.google.com/java/docs/reference/google-cloud-bigquery/latest/com.google.cloud.bigquery)

## Supporting Pages

### bq command-line tool reference \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- Source ID: `site-docs-reference`
- Final score: 28
- Re-rank relevance: N/A

Evidence snippets:
- You must set the --metadata cache mode flag if you set the --max staleness flag with the bq mk command . --parquet enable list inference={true false} If source format is set to PARQUET , then this flag specifies whether to use schema inference for Parquet LIST logical types.
- For more information, see Merge two commitments . --metadata cache mode= METADATA CACHE MODE Enables metadata cache for an external table with a connection.
- The default is false . --metadata cache mode= STRING Specifies whether the metadata cache for the table is refreshed automatically or manually.
- Set to AUTOMATIC for the metadata cache to be refreshed at a system-defined interval, usually somewhere between 30 and 60 minutes.

### Introduction to BigQuery Migration Service \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/migration-intro](https://docs.cloud.google.com/bigquery/docs/migration-intro)
- Source ID: `site-docs-root`
- Final score: 28
- Re-rank relevance: N/A

Evidence snippets:
- You can use the batch SQL translator to migrate your SQL scripts in bulk, or the interactive SQL translator to translate individual queries.
- For more information on using the interactive SQL translator, see Interactive SQL translator .
- For more information on batch SQL translator, see Batch SQL translator .

### "Package com.google.cloud.bigquery (2.62.0) \_|\_ Java client libraries \_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-bigquery/latest/com.google.cloud.bigquery](https://docs.cloud.google.com/java/docs/reference/google-cloud-bigquery/latest/com.google.cloud.bigquery)
- Source ID: `site-java-reference`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- Table Metadata Cache Usage Represents Table level detail on the usage of metadata caching. com. google. cloud. bigquery.
- Metadata Cache Stats Represents statistics for metadata caching in BigLake tables.

