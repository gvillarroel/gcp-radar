---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.324Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery search index column granularity configuration"
feature_slug: "bigquery-search-index-column-granularity-configuration"
latest_feature_date: "2026-04-02"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
keywords:
  - "index column granularity"
  - "column-level granularity"
  - "CREATE SEARCH INDEX"
  - "search index DDL"
  - "column granularity"
  - "index granularity"
  - "search indexes"
---

# BigQuery search index column granularity configuration

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

BigQuery search indexes now support setting column granularity at index creation time to improve search query performance.

## Extended Definition

BigQuery SEARCH INDEX creation supports column-level granularity configuration through `CREATE SEARCH INDEX`, including a `default index column granularity` for the index and an `index granularity` option per indexed column. These settings determine how much column information is stored for each indexed column, and the per-column setting can override the index default. Google Cloud release notes describe this as a feature that can further optimize search query performance.

## Evidence Summary

The DDL reference documents the supported search index granularity options and override behavior, while the release notes confirm that setting column granularity during search index creation is an introduced feature aimed at improving query performance.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 80
- Re-rank relevance: N/A

Evidence snippets:
- CREATE TABLE dataset . complex table ( a STRING , my struct STRUCT < string field STRING , int field INT64 > , b ARRAY < STRING > ); CREATE SEARCH INDEX my index ON dataset . complex table ( a OPTIONS ( index granularity = 'GLOBAL' ), my struct , b ) OPTIONS ( analyzer = 'NO OP ANALYZER' , default index column granularity = 'COLUMN' ); CREATE VECTOR INDEX statement Creates a new vector index on a column of a table.
- If data types is not set, STRING fields are indexed by default. default index column granularity STRING Example: default index column granularity='GLOBAL' The default granularity of information to store for each indexed column.
- For more information, see Index with column granularity . index column option list NAME VALUE Details index granularity STRING Example: index granularity='GLOBAL' The granularity of information to store for the indexed column.
- This setting overrides the default granularity specified in the default index column granularity field of the index options.

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- March 26, 2025 Feature You can now set the column granularity when you create a search index , which stores additional column information in your search index to further optimize your search query performance.
- Feature You can set the column granularity when you create a search index , which stores additional column information in your search index to further optimize your search query performance.
- You can now use the INFORMATION SCHEMA.SEARCH INDEXES BY ORGANIZATION view to understand your current consumption towards that limit, broken down by projects and tables.
- June 26, 2025 Feature BigQuery search indexes provide free index management until your organization reaches the limit in a given region.

