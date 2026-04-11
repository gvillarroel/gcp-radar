---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.447Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery SQL translation metadata caching"
feature_slug: "bigquery-sql-translation-metadata-caching"
latest_feature_date: "2025-03-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/tables"
keywords:
  - "repeated translation requests"
  - "cached metadata"
  - "query translation cache"
  - "metadata caching"
  - "translation cache"
  - "metadata cache"
  - "SQL translation"
---

# BigQuery SQL translation metadata caching

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery SQL translation now supports metadata caching to reduce latency on repeated translation requests.

## Extended Definition

BigQuery supports enabling metadata caching for SQL translation so that repeated translation requests can have significantly lower latency. The feature was announced in BigQuery release notes on March 27, 2025. The provided excerpts confirm the behavior at a high level, but they do not provide detailed cache configuration or lifecycle parameters specific to SQL translation.

## Evidence Summary

The release notes explicitly add SQL translation metadata caching with latency improvement for subsequent requests, while DDL/table pages document general BigQuery cached-metadata behavior for table operations.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 40
- Re-rank relevance: N/A

Evidence snippets:
- CREATE OR REPLACE EXTERNAL TABLE mydataset . newtable ( x INT64 , y STRING , z BOOL ) WITH CONNECTION myconnection OPTIONS ( format = "PARQUET" , max staleness = STALENESS INTERVAL , metadata cache mode = 'AUTOMATIC' ); The following example creates an external table from multiple URIs.
- If the cached metadata is older than that, the operation falls back to retrieving metadata from Cloud Storage instead. null marker STRING The string that represents NULL values in a CSV file.
- Specifies whether cached metadata is used by operations against the table, and how fresh the cached metadata must be in order for the operation to use it.
- With this value, operations against the table use cached metadata if it has been refreshed within the past 4 hours.

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- March 27, 2025 Feature You can now enable metadata caching for SQL translation , which can significantly reduce latency for subsequent translation requests.
- Feature You can now use the interactive SQL translator , the translation API , and the batch SQL translator to translate the following SQL dialects into GoogleSQL: Apache Impala SQL GoogleSQL (BigQuery) Impala SQL translation can be used to migrate Cloudera and Apache Hadoop SQL workloads that use Impala as a query engine.
- Feature You can now use the BigQuery Migration Service MCP server to perform SQL translation tasks, including translating SQL queries into GoogleSQL syntax, generating DDL statements from SQL input queries, and getting explanations of SQL translations.
- Feature BigQuery now offers the following Gemini-enhanced SQL translation features: Create Gemini-based configuration YAML files to generate AI suggestions for batch or interactive SQL translations.

### Create and use tables \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
- Source ID: `site-docs-root`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- If the cached metadata is older than that, the operation falls back to retrieving metadata from Cloud Storage instead. null marker STRING The string that represents NULL values in a CSV file.
- Specifies whether cached metadata is used by operations against the table, and how fresh the cached metadata must be in order for the operation to use it.
- With this value, operations against the table use cached metadata if it has been refreshed within the past 4 hours.
- To enable metadata caching, specify an interval literal value between 30 minutes and 7 days.

