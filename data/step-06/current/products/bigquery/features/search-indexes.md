---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.647Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Search indexes"
feature_slug: "search-indexes"
latest_feature_date: "2022-10-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/information-schema-indexes"
  - "https://docs.cloud.google.com/bigquery/docs/information-schema-indexes-by-organization"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "search"
  - "indexes"
  - "accelerate"
  - "finding"
  - "specific"
  - "elements"
  - "unstructured"
  - "text"
---

# Search indexes

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Search indexes accelerate finding specific data elements in unstructured text and semi-structured data with GoogleSQL.

## Extended Definition

Search indexes accelerate finding specific data elements in unstructured text and semi-structured data with GoogleSQL.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/information-schema-indexes](https://docs.cloud.google.com/bigquery/docs/information-schema-indexes)
- [https://docs.cloud.google.com/bigquery/docs/information-schema-indexes-by-organization](https://docs.cloud.google.com/bigquery/docs/information-schema-indexes-by-organization)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### SEARCH_INDEXES view \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/information-schema-indexes](https://docs.cloud.google.com/bigquery/docs/information-schema-indexes)
- Source ID: `site-docs-reference-3`
- Final score: 176
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- SEARCH INDEXES WHERE index status = 'ACTIVE' ; The results should look like the following: +-------------+-------------+--------------------------------------------------------------------------------------+---------------------+----------------+ table name index name ddl coverage percentage analyzer +-------------+-------------+--------------------------------------------------------------------------------------+---------------------+----------------+ small table names index CREATE SEARCH INDEX names index ON my project.my dataset.small table(names) 0 NO OP ANALYZER large table logs index CREATE SEARCH INDEX logs index ON my project.my dataset.large table(ALL COLUMNS) 100 LOG ANALYZER +-------------+-------------+--------------------------------------------------------------------------------------+---------------------+----------------+ Troubleshooting To enable this view, you can set the value of enable info schema storage to TRUE on your project or organization.
- The INFORMATION SCHEMA.SEARCH INDEXES view has the following schema: Column name Data type Value index catalog STRING The name of the project that contains the dataset. index schema STRING The name of the dataset that contains the index. table name STRING The name of the base table that the index is created on. index name STRING The name of the index. index status STRING The status of the index: ACTIVE , PENDING DISABLEMENT , TEMPORARILY DISABLED , or PERMANENTLY DISABLED .
- 0% means the index is not usable in a SEARCH query, even if some data has already been indexed. unindexed row count INTEGER The number of rows in the base table that have not been indexed. total logical bytes INTEGER The number of billable logical bytes for the index. total storage bytes INTEGER The number of billable storage bytes for the index. analyzer STRING The text analyzer to use to generate tokens for the search index.
- The following table explains the region scope for this view: View Name Resource scope Region scope [ PROJECT ID .] DATASET ID .INFORMATION SCHEMA.SEARCH INDEXES Dataset level Dataset location Replace the following: Optional: PROJECT ID : the ID of your Google Cloud project.

### SEARCH_INDEXES_BY_ORGANIZATION view \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/information-schema-indexes-by-organization](https://docs.cloud.google.com/bigquery/docs/information-schema-indexes-by-organization)
- Source ID: `site-docs-reference-3`
- Final score: 164
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- AND search index . index status details . throttle status != 'BASE TABLE TOO SMALL' GROUP BY search index . project id , search index . use background reservation The result is similar to the following: +---------------------+----------------------------+---------------------+ project id use background reservation total logical bytes +---------------------+----------------------------+---------------------+ projecta true 971329178274633 +---------------------+----------------------------+---------------------+ projectb false 834638211024843 +---------------------+----------------------------+---------------------+ projectc false 562910385625126 +---------------------+----------------------------+---------------------+ Find throttled search indexes This following example returns all search indexes that are throttled within the organization and region: SELECT project id , index schema , table name , index name FROM region - us .
- SEARCH INDEXES BY ORGANIZATION WHERE -- Excludes search indexes that are permanently disabled. index status != 'PERMANENTLY DISABLED' AND index status details . throttle status IN ( 'ORGANIZATION LIMIT EXCEEDED' , 'BASE TABLE TOO LARGE' ) The result is similar to the following: +--------------------+--------------------+---------------+----------------+ project id index schema table name index name +--------------------+--------------------+---------------+----------------+ projecta dataset us table1 index1 projectb dataset us table1 index1 +--------------------+--------------------+---------------+----------------+ Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Schema The INFORMATION SCHEMA.SEARCH INDEXES BY ORGANIZATION view has the following schema: Column name Data type Value project id STRING The name of the project that contains the dataset. project number STRING The project number that contains the dataset. index catalog STRING The name of the project that contains the dataset. index schema STRING The name of the dataset that contains the index. table name STRING The name of the base table that the index is created on. index name STRING The name of the search index. index status STRING The status of the index can be one of the following: ACTIVE : the index is usable or being created.
- Required permissions To query the INFORMATION SCHEMA.SEARCH INDEXES BY ORGANIZATION view, you need the following Identity and Access Management (IAM) permissions for your organization: bigquery.tables.get bigquery.tables.list Each of the following predefined IAM roles includes the preceding permissions: roles/bigquery.admin roles/bigquery.dataViewer roles/bigquery.dataEditor roles/bigquery.metadataViewer This schema view is only available to users with defined Google Cloud organizations .

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- Note: Constraints cannot be specified on ARRAY or STRUCT elements. column := column name column schema column schema := { simple type STRUCT<field list> ARRAY<array element schema> } [ PRIMARY KEY NOT ENFORCED REFERENCES table name ( column name ) NOT ENFORCED ] [ DEFAULT default expression GENERATED ALWAYS AS ( generation expression ) STORED OPTIONS ( generation option list ) ] [ NOT NULL ] [ OPTIONS ( column option list ) ] simple type := { data type STRING COLLATE collate specification } field list := field name column schema [ , ... ] array element schema := { simple type STRUCT<field list> } [ NOT NULL ] column name is the name of the column.
- CREATE TABLE dataset . my table ( a STRING , b INT64 ); CREATE SEARCH INDEX my index ON dataset . my table ( ALL COLUMNS ); The following example creates a search index on columns a , my struct.string field , and b that uses the NO OP ANALYZER text analyzer.
- For examples of JSON-formatted strings with different text analyzers, see Work with text analyzers . data types ARRAY<STRING> Example: data types=['STRING', 'INT64', 'TIMESTAMP'] An array of data types to set when creating a search index.
- The supported values are 'LOG ANALYZER' , 'NO OP ANALYZER' , and 'PATTERN ANALYZER' . analyzer options JSON-formatted STRING The text analyzer configurations to set when creating a search index.

