---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.420Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery vector indexes"
feature_slug: "bigquery-vector-indexes"
latest_feature_date: "2024-09-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/vector-search-intro"
keywords:
  - "bigquery"
  - "vector"
  - "indexes"
  - "accelerate"
  - "search"
  - "trade"
  - "off"
  - "toward"
---

# BigQuery vector indexes

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery vector indexes accelerate VECTOR_SEARCH with a trade-off toward more approximate results.

## Extended Definition

BigQuery vector indexes accelerate VECTOR_SEARCH with a trade-off toward more approximate results.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/vector-search-intro](https://docs.cloud.google.com/bigquery/docs/vector-search-intro)

## Supporting Pages

### "Introduction to embeddings and vector search \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/vector-search-intro](https://docs.cloud.google.com/bigquery/docs/vector-search-intro)
- Source ID: `site-docs-root`
- Final score: 76
- Re-rank relevance: N/A

Evidence snippets:
- Limitations Queries that contain the VECTOR SEARCH or AI.SEARCH function aren't accelerated by BigQuery BI Engine .
- When a vector index is used, the VECTOR SEARCH and AI.SEARCH functions use the Approximate Nearest Neighbor search technique to improve vector search performance, with the trade-off of reducing recall and so returning more approximate results.
- Some possible use cases are as follows: Retrieval-augmented generation (RAG) : Parse documents, perform vector search on content, and generate summarized answers to natural language questions using Gemini models, all within BigQuery.
- When you use vector indexes with vector search, you can take advantage of foundational technologies like inverted file indexing (IVF) and the ScaNN algorithm .

### SEARCH_INDEXES view \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/information-schema-indexes](https://docs.cloud.google.com/bigquery/docs/information-schema-indexes)
- Source ID: `site-docs-reference-3`
- Final score: 71
- Re-rank relevance: N/A

Evidence snippets:
- SEARCH INDEXES WHERE index status = 'ACTIVE' ; The results should look like the following: +-------------+-------------+--------------------------------------------------------------------------------------+---------------------+----------------+ table name index name ddl coverage percentage analyzer +-------------+-------------+--------------------------------------------------------------------------------------+---------------------+----------------+ small table names index CREATE SEARCH INDEX names index ON my project.my dataset.small table(names) 0 NO OP ANALYZER large table logs index CREATE SEARCH INDEX logs index ON my project.my dataset.large table(ALL COLUMNS) 100 LOG ANALYZER +-------------+-------------+--------------------------------------------------------------------------------------+---------------------+----------------+ Troubleshooting To enable this view, you can set the value of enable info schema storage to TRUE on your project or organization.
- The INFORMATION SCHEMA.SEARCH INDEXES view has the following schema: Column name Data type Value index catalog STRING The name of the project that contains the dataset. index schema STRING The name of the dataset that contains the index. table name STRING The name of the base table that the index is created on. index name STRING The name of the index. index status STRING The status of the index: ACTIVE , PENDING DISABLEMENT , TEMPORARILY DISABLED , or PERMANENTLY DISABLED .
- The following table explains the region scope for this view: View Name Resource scope Region scope [ PROJECT ID .] DATASET ID .INFORMATION SCHEMA.SEARCH INDEXES Dataset level Dataset location Replace the following: Optional: PROJECT ID : the ID of your Google Cloud project.
- Required permissions To see search index metadata, you need the bigquery.tables.get or bigquery.tables.list Identity and Access Management (IAM) permission on the table with the index.

### SEARCH_INDEXES_BY_ORGANIZATION view \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/information-schema-indexes-by-organization](https://docs.cloud.google.com/bigquery/docs/information-schema-indexes-by-organization)
- Source ID: `site-docs-reference-3`
- Final score: 71
- Re-rank relevance: N/A

Evidence snippets:
- Required permissions To query the INFORMATION SCHEMA.SEARCH INDEXES BY ORGANIZATION view, you need the following Identity and Access Management (IAM) permissions for your organization: bigquery.tables.get bigquery.tables.list Each of the following predefined IAM roles includes the preceding permissions: roles/bigquery.admin roles/bigquery.dataViewer roles/bigquery.dataEditor roles/bigquery.metadataViewer This schema view is only available to users with defined Google Cloud organizations .
- You can use the INFORMATION SCHEMA.SEARCH INDEXES BY ORGANIZATION view to understand your current consumption towards that limit, broken down by projects and tables.
- SEARCH INDEXES BY ORGANIZATION view BigQuery search indexes provide free index management until your organization reaches the limit in a given region.
- AND search index . index status details . throttle status != 'BASE TABLE TOO SMALL' GROUP BY search index . project id , search index . use background reservation The result is similar to the following: +---------------------+----------------------------+---------------------+ project id use background reservation total logical bytes +---------------------+----------------------------+---------------------+ projecta true 971329178274633 +---------------------+----------------------------+---------------------+ projectb false 834638211024843 +---------------------+----------------------------+---------------------+ projectc false 562910385625126 +---------------------+----------------------------+---------------------+ Find throttled search indexes This following example returns all search indexes that are throttled within the organization and region: SELECT project id , index schema , table name , index name FROM region - us .

