---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.447Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery search index column granularity"
feature_slug: "bigquery-search-index-column-granularity"
latest_feature_date: "2025-03-26"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
keywords:
  - "search index granularity"
  - "index column granularity"
  - "query performance index"
  - "column granularity"
  - "search index column"
  - "index configuration"
  - "search indexes"
---

# BigQuery search index column granularity

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

BigQuery search indexes can now be created with configurable column granularity to improve query performance.

## Extended Definition

BigQuery search indexes now support a configurable `default index column granularity` setting at index creation time, which controls how much additional per-column information is stored in the index to tune search behavior. The index definition can specify a default granularity for all indexed columns and override it for individual columns (for example, `GLOBAL` and `COLUMN` shown in syntax examples), and this feature is documented as improving search query performance.

## Evidence Summary

The BigQuery DDL reference defines the search index syntax and granularity options/overrides, while the release notes confirm the March 26, 2025 feature launch and its purpose of further optimizing search query performance.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 46
- Re-rank relevance: N/A

Evidence snippets:
- CREATE TABLE dataset . complex table ( a STRING , my struct STRUCT < string field STRING , int field INT64 > , b ARRAY < STRING > ); CREATE SEARCH INDEX my index ON dataset . complex table ( a OPTIONS ( index granularity = 'GLOBAL' ), my struct , b ) OPTIONS ( analyzer = 'NO OP ANALYZER' , default index column granularity = 'COLUMN' ); CREATE VECTOR INDEX statement Creates a new vector index on a column of a table.
- If data types is not set, STRING fields are indexed by default. default index column granularity STRING Example: default index column granularity='GLOBAL' The default granularity of information to store for each indexed column.
- This setting overrides the default granularity specified in the default index column granularity field of the index options.
- It sets the default index column granularity to COLUMN and overrides the setting for column a to GLOBAL .

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- March 26, 2025 Feature You can now set the column granularity when you create a search index , which stores additional column information in your search index to further optimize your search query performance.
- Feature You can set the column granularity when you create a search index , which stores additional column information in your search index to further optimize your search query performance.
- You can now use the INFORMATION SCHEMA.SEARCH INDEXES BY ORGANIZATION view to understand your current consumption towards that limit, broken down by projects and tables.
- June 26, 2025 Feature BigQuery search indexes provide free index management until your organization reaches the limit in a given region.

