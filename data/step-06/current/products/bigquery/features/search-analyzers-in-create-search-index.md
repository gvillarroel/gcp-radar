---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.582Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Search analyzers in CREATE SEARCH INDEX"
feature_slug: "search-analyzers-in-create-search-index"
latest_feature_date: "2024-03-18"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "search index analyzers"
  - "CREATE SEARCH INDEX ... ANALYZER"
  - "PATTERN_ANALYZER"
  - "search index analyzer"
  - "SEARCH INDEX analyzer"
  - "analyzer configuration"
  - "LOG_ANALYZER"
  - "CREATE SEARCH INDEX"
---

# Search analyzers in CREATE SEARCH INDEX

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

BigQuery now supports search index analyzer configuration in CREATE SEARCH INDEX, including LOG_ANALYZER and PATTERN_ANALYZER for use with SEARCH.

## Extended Definition

In BigQuery, the `CREATE SEARCH INDEX` statement supports an `analyzer` option that accepts text-based analyzer configuration for a search index. The documented supported values include `LOG ANALYZER`, `PATTERN ANALYZER`, and `NO OP ANALYZER`, and `LOG`/`PATTERN` are explicitly supported when configuring analyzer options.

## Evidence Summary

The referenced BigQuery SQL DDL page explicitly states analyzer options for `CREATE SEARCH INDEX`, including supported analyzer values and usage conditions for `LOG ANALYZER` and `PATTERN ANALYZER`.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 50
- Re-rank relevance: N/A

Evidence snippets:
- The supported values are 'LOG ANALYZER' , 'NO OP ANALYZER' , and 'PATTERN ANALYZER' . analyzer options JSON-formatted STRING The text analyzer configurations to set when creating a search index.
- Supported when analyzer is equal to 'LOG ANALYZER' or 'PATTERN ANALYZER' .
- Example The following example assigns the project my project to the prod reservation for query jobs: CREATE ASSIGNMENT admin project.region-us.prod.my assignment OPTIONS ( assignee = 'projects/my project' , job type = 'QUERY' ); The following example assigns an organization to the prod reservation for pipeline jobs, such as load and extract jobs: CREATE ASSIGNMENT admin project.region-us.prod.my assignment OPTIONS ( assignee = 'organizations/1234' , job type = 'PIPELINE' ); CREATE SEARCH INDEX statement Creates a new search index on one or more columns of a table.
- CREATE TABLE dataset . complex table ( a STRING , my struct STRUCT < string field STRING , int field INT64 > , b ARRAY < STRING > ); CREATE SEARCH INDEX my index ON dataset . complex table ( a OPTIONS ( index granularity = 'GLOBAL' ), my struct , b ) OPTIONS ( analyzer = 'NO OP ANALYZER' , default index column granularity = 'COLUMN' ); CREATE VECTOR INDEX statement Creates a new vector index on a column of a table.

