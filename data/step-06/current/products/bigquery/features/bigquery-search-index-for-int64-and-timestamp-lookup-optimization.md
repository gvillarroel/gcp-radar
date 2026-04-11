---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.551Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery search index for INT64 and TIMESTAMP lookup optimization"
feature_slug: "bigquery-search-index-for-int64-and-timestamp-lookup-optimization"
latest_feature_date: "2024-05-20"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
  - "https://docs.cloud.google.com/bigquery/docs/ai-introduction"
keywords:
  - "search index for INT64"
  - "search index for TIMESTAMP"
  - "search index lookup"
  - "lookup optimization"
  - "INT64 search index"
  - "TIMESTAMP search index"
  - "CREATE SEARCH INDEX"
  - "SEARCH INDEX"
---

# BigQuery search index for INT64 and TIMESTAMP lookup optimization

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery search indexes can be used to optimize lookups on INT64 and TIMESTAMP data types.

## Extended Definition

BigQuery supports a `CREATE SEARCH INDEX` DDL statement to create a search index on one or more table columns (including nested fields), with index-level and column-level options such as analyzer and column granularity. Search indexes are designed to improve query performance for search-style workloads, including queries that use the `SEARCH` function and related operators. The provided excerpts do not explicitly confirm a datatype-specific feature limited to INT64 or TIMESTAMP lookup optimization, though INT64 appears in examples and `SEARCH INDEX` behavior is described generally.

## Evidence Summary

The pages collectively confirm how to define and configure search indexes and that they are intended for query performance improvements, but they do not directly document INT64/TIMESTAMP-specific lookup optimization as a separate feature.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- [https://docs.cloud.google.com/bigquery/docs/ai-introduction](https://docs.cloud.google.com/bigquery/docs/ai-introduction)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 48
- Re-rank relevance: N/A

Evidence snippets:
- Example The following example assigns the project my project to the prod reservation for query jobs: CREATE ASSIGNMENT admin project.region-us.prod.my assignment OPTIONS ( assignee = 'projects/my project' , job type = 'QUERY' ); The following example assigns an organization to the prod reservation for pipeline jobs, such as load and extract jobs: CREATE ASSIGNMENT admin project.region-us.prod.my assignment OPTIONS ( assignee = 'organizations/1234' , job type = 'PIPELINE' ); CREATE SEARCH INDEX statement Creates a new search index on one or more columns of a table.
- CREATE TABLE dataset . complex table ( a STRING , my struct STRUCT < string field STRING , int field INT64 > , b ARRAY < STRING > ); CREATE SEARCH INDEX my index ON dataset . complex table ( a OPTIONS ( index granularity = 'GLOBAL' ), my struct , b ) OPTIONS ( analyzer = 'NO OP ANALYZER' , default index column granularity = 'COLUMN' ); CREATE VECTOR INDEX statement Creates a new vector index on a column of a table.
- Syntax CREATE SEARCH INDEX [ IF NOT EXISTS ] index name ON table name ( { ALL COLUMNS [ WITH COLUMN OPTIONS ( column [ , ... ] ) ] column [ , ... ]} ) [ OPTIONS ( index option list ) ] column := column name [ OPTIONS ( index column option list ) ] Arguments IF NOT EXISTS : If there is already a search index by that name on the table, do nothing.
- CREATE TABLE dataset . my table ( a STRING , b INT64 ); CREATE SEARCH INDEX my index ON dataset . my table ( ALL COLUMNS ); The following example creates a search index on columns a , my struct.string field , and b that uses the NO OP ANALYZER text analyzer.

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- November 03, 2025 Libraries Go 1.72.0 (2025-10-28) Features bigquery/reservation: Add new BACKGROUND CHANGE DATA CAPTURE , BACKGROUND COLUMN METADATA INDEX , and BACKGROUND SEARCH INDEX REFRESH reservation assignment types ( 182df61 ) bigquery/reservation: Add new reservation IAM policy get/set/test methods ( 182df61 ) bigquery/reservation: Add support for creation and modification of new reservation groups ( 182df61 ) bigquery: Expose continuous query in config ( #13130 ) ( 2f0942b ) Bug Fixes bigquery/v2: Upgrade gRPC service registration func ( 8fffca2 ) bigquery: Upgrade gRPC service registration func ( 8fffca2 ) October 31, 2025 Feature We have increased the row capacity for pivot tables backed by BigQuery in Connected Sheets from 100,000 to 200,000 rows.
- March 26, 2025 Feature You can now set the column granularity when you create a search index , which stores additional column information in your search index to further optimize your search query performance.
- Feature You can set the column granularity when you create a search index , which stores additional column information in your search index to further optimize your search query performance.
- You can now use the INFORMATION SCHEMA.SEARCH INDEXES BY ORGANIZATION view to understand your current consumption towards that limit, broken down by projects and tables.

### Introduction to AI in BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/ai-introduction](https://docs.cloud.google.com/bigquery/docs/ai-introduction)
- Source ID: `site-docs-root`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- You can improve search performance by creating a search index , which lets BigQuery optimize queries that use the SEARCH function, as well as other functions and operators.
- For more information about searching your data, see Search indexed data and Introduction to vector search .
- For more information, see Search indexed data .

