---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.691Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Search indexes and SEARCH function"
feature_slug: "search-indexes-and-search-function"
latest_feature_date: "2022-04-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/vector-search-intro"
  - "https://docs.cloud.google.com/bigquery/docs/information-schema-indexes-by-organization"
keywords:
  - "search"
  - "indexes"
  - "let"
  - "googlesql"
  - "efficiently"
  - "find"
  - "unstructured"
  - "text"
---

# Search indexes and SEARCH function

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Search indexes and the SEARCH function let GoogleSQL efficiently find data in unstructured text and semi-structured data.

## Extended Definition

Search indexes and the SEARCH function let GoogleSQL efficiently find data in unstructured text and semi-structured data.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/vector-search-intro](https://docs.cloud.google.com/bigquery/docs/vector-search-intro)
- [https://docs.cloud.google.com/bigquery/docs/information-schema-indexes-by-organization](https://docs.cloud.google.com/bigquery/docs/information-schema-indexes-by-organization)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- CREATE TABLE dataset . my table ( a STRING , b INT64 ); CREATE SEARCH INDEX my index ON dataset . my table ( ALL COLUMNS ); The following example creates a search index on columns a , my struct.string field , and b that uses the NO OP ANALYZER text analyzer.
- For examples of JSON-formatted strings with different text analyzers, see Work with text analyzers . data types ARRAY<STRING> Example: data types=['STRING', 'INT64', 'TIMESTAMP'] An array of data types to set when creating a search index.
- The supported values are 'LOG ANALYZER' , 'NO OP ANALYZER' , and 'PATTERN ANALYZER' . analyzer options JSON-formatted STRING The text analyzer configurations to set when creating a search index.
- The following options are supported: NAME VALUE Details analyzer STRING Example: analyzer='LOG ANALYZER' The text analyzer to use to generate tokens for the search index.

### "Introduction to embeddings and vector search \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/vector-search-intro](https://docs.cloud.google.com/bigquery/docs/vector-search-intro)
- Source ID: `site-docs-root`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- When you use vector indexes with vector search, you can take advantage of foundational technologies like inverted file indexing (IVF) and the ScaNN algorithm .
- Try the Perform semantic search and retrieval-augmented generation tutorial to learn how to do the following tasks: Generate text embeddings.
- For a notebook that illustrates this scenario, see Log Anomaly Detection & Investigation with Text Embeddings + BigQuery Vector Search .
- You can find the index storage size by using the INFORMATION SCHEMA.VECTOR INDEXES view .

### SEARCH_INDEXES_BY_ORGANIZATION view \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/information-schema-indexes-by-organization](https://docs.cloud.google.com/bigquery/docs/information-schema-indexes-by-organization)
- Source ID: `site-docs-reference-3`
- Final score: 133
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- AND search index . index status details . throttle status != 'BASE TABLE TOO SMALL' GROUP BY search index . project id , search index . use background reservation The result is similar to the following: +---------------------+----------------------------+---------------------+ project id use background reservation total logical bytes +---------------------+----------------------------+---------------------+ projecta true 971329178274633 +---------------------+----------------------------+---------------------+ projectb false 834638211024843 +---------------------+----------------------------+---------------------+ projectc false 562910385625126 +---------------------+----------------------------+---------------------+ Find throttled search indexes This following example returns all search indexes that are throttled within the organization and region: SELECT project id , index schema , table name , index name FROM region - us .
- SEARCH INDEXES BY ORGANIZATION WHERE -- Excludes search indexes that are permanently disabled. index status != 'PERMANENTLY DISABLED' AND index status details . throttle status IN ( 'ORGANIZATION LIMIT EXCEEDED' , 'BASE TABLE TOO LARGE' ) The result is similar to the following: +--------------------+--------------------+---------------+----------------+ project id index schema table name index name +--------------------+--------------------+---------------+----------------+ projecta dataset us table1 index1 projectb dataset us table1 index1 +--------------------+--------------------+---------------+----------------+ Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- AND search index . use background reservation = false -- Outputs the total indexed base table size if it exceeds 100 TB, -- otherwise, doesn't return any output. ) SELECT FROM indexed base table size WHERE total logical bytes >= 109951162777600 -- 100 TB The result is similar to the following: +---------------------+ total logical bytes +---------------------+ 109951162777601 +---------------------+ Find total indexed base table size by projects in a region The following example gives the breakdown on each project in a US multi-region with the total size of indexed base tables: SELECT search index . project id , search index . use background reservation , SUM ( base table . total logical bytes ) AS total logical bytes FROM region - us .
- Schema The INFORMATION SCHEMA.SEARCH INDEXES BY ORGANIZATION view has the following schema: Column name Data type Value project id STRING The name of the project that contains the dataset. project number STRING The project number that contains the dataset. index catalog STRING The name of the project that contains the dataset. index schema STRING The name of the dataset that contains the index. table name STRING The name of the base table that the index is created on. index name STRING The name of the search index. index status STRING The status of the index can be one of the following: ACTIVE : the index is usable or being created.

