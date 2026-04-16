---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.318Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "ALTER VECTOR INDEX REBUILD statement"
feature_slug: "alter-vector-index-rebuild-statement"
latest_feature_date: "2025-07-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/vector-search-intro"
  - "https://docs.cloud.google.com/bigquery/docs/autonomous-embedding-generation"
keywords:
  - "alter"
  - "vector"
  - "index"
  - "rebuild"
  - "statement"
  - "rebuilds"
  - "when"
  - "table"
---

# ALTER VECTOR INDEX REBUILD statement

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

The ALTER VECTOR INDEX REBUILD statement rebuilds a vector index when table data has changed enough to require it.

## Extended Definition

The ALTER VECTOR INDEX REBUILD statement rebuilds a vector index when table data has changed enough to require it.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/vector-search-intro](https://docs.cloud.google.com/bigquery/docs/vector-search-intro)
- [https://docs.cloud.google.com/bigquery/docs/autonomous-embedding-generation](https://docs.cloud.google.com/bigquery/docs/autonomous-embedding-generation)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 275
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Examples The following example rebuilds the index1 vector index on the sales table: ALTER VECTOR INDEX IF EXISTS index1 ON mydataset . sales REBUILD ; ALTER DATA POLICY statement Preview This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- Syntax ALTER VECTOR INDEX [ IF EXISTS ] index name ON table name REBUILD ; Arguments IF EXISTS : If no vector index exists with that name, the statement has no effect. index name : The name of the vector index to rebuild. table name : The name of the table that the vector index is on.
- Details Use the ALTER VECTOR INDEX REBUILD statement to rebuild an active vector index on a table without having to drop the vector index, and without any index downtime.
- To run the ALTER VECTOR INDEX REBUILD statement, you must create a reservation assignment with a job type of BACKGROUND for the project that contains the table.

### "Introduction to embeddings and vector search \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/vector-search-intro](https://docs.cloud.google.com/bigquery/docs/vector-search-intro)
- Source ID: `site-docs-root`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- CREATE VECTOR INDEX statement: There is no charge for the processing required to build and refresh your vector indexes as long as the total size of the indexed table data is below your per-organization limit .
- When a vector index is used, the VECTOR SEARCH and AI.SEARCH functions use the Approximate Nearest Neighbor search technique to improve vector search performance, with the trade-off of reducing recall and so returning more approximate results.
- When you use vector indexes with vector search, you can take advantage of foundational technologies like inverted file indexing (IVF) and the ScaNN algorithm .
- Pricing The VECTOR SEARCH and AI.SEARCH functions and the CREATE VECTOR INDEX statement use BigQuery compute pricing .

### Autonomous embedding generation \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/autonomous-embedding-generation](https://docs.cloud.google.com/bigquery/docs/autonomous-embedding-generation)
- Source ID: `site-docs-reference-5`
- Final score: 160
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- INSERT INTO mydataset . products ( name , description ) VALUES ( "Lounger chair" , "A comfortable chair for relaxing in." ), ( "Super slingers" , "An exciting board game for the whole family." ), ( "Encyclopedia set" , "A collection of informational books." ); You can optionally create a vector index on the table to speed up searching.
- Add an automatically generated embedding column to an existing table You can also add an automatically generated embedding column to an existing table by using an ALTER TABLE ADD COLUMN statement .
- TABLE ; After you have the table with embeddings, you can create a vector index on the STRUCT column that contains the automatically generated embedding.
- When you call a search function, such as VECTOR SEARCH or AI.SEARCH , rows with missing embeddings in the base table are skipped during the search.

