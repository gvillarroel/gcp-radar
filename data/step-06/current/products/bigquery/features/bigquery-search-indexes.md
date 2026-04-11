---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.746Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery search indexes"
feature_slug: "bigquery-search-indexes"
latest_feature_date: "2022-04-07"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
  - "https://docs.cloud.google.com/bigquery/docs/ai-introduction"
keywords:
  - "index for semi-structured data"
  - "indexing unstructured data"
  - "search index definition"
  - "DROP SEARCH INDEX"
  - "CREATE SEARCH INDEX"
  - "SEARCH INDEX DDL"
  - "search index"
  - "SEARCH INDEX"
---

# BigQuery search indexes

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery now supports creating search indexes to efficiently find data elements in unstructured and semi-structured data.

## Extended Definition

BigQuery now supports creating search indexes to efficiently find data elements in unstructured and semi-structured data.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- [https://docs.cloud.google.com/bigquery/docs/ai-introduction](https://docs.cloud.google.com/bigquery/docs/ai-introduction)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 62
- Re-rank relevance: N/A

Evidence snippets:
- Example The following example assigns the project my project to the prod reservation for query jobs: CREATE ASSIGNMENT admin project.region-us.prod.my assignment OPTIONS ( assignee = 'projects/my project' , job type = 'QUERY' ); The following example assigns an organization to the prod reservation for pipeline jobs, such as load and extract jobs: CREATE ASSIGNMENT admin project.region-us.prod.my assignment OPTIONS ( assignee = 'organizations/1234' , job type = 'PIPELINE' ); CREATE SEARCH INDEX statement Creates a new search index on one or more columns of a table.
- CREATE TABLE dataset . complex table ( a STRING , my struct STRUCT < string field STRING , int field INT64 > , b ARRAY < STRING > ); CREATE SEARCH INDEX my index ON dataset . complex table ( a OPTIONS ( index granularity = 'GLOBAL' ), my struct , b ) OPTIONS ( analyzer = 'NO OP ANALYZER' , default index column granularity = 'COLUMN' ); CREATE VECTOR INDEX statement Creates a new vector index on a column of a table.
- Syntax CREATE SEARCH INDEX [ IF NOT EXISTS ] index name ON table name ( { ALL COLUMNS [ WITH COLUMN OPTIONS ( column [ , ... ] ) ] column [ , ... ]} ) [ OPTIONS ( index option list ) ] column := column name [ OPTIONS ( index column option list ) ] Arguments IF NOT EXISTS : If there is already a search index by that name on the table, do nothing.
- Syntax DROP SEARCH INDEX [ IF EXISTS ] index name ON table name Arguments IF EXISTS : If no search index exists with that name on the table, the statement has no effect. index name : The name of the search index to be deleted. table name : The name of the table with the index.

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 28
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

