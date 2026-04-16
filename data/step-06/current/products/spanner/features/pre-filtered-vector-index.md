---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.178Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Pre-filtered vector index"
feature_slug: "pre-filtered-vector-index"
latest_feature_date: "2025-05-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/information-schema-pg"
  - "https://docs.cloud.google.com/spanner/docs/vector-search-tutorial"
  - "https://docs.cloud.google.com/spanner/docs/information-schema"
keywords:
  - "filtered"
  - "creating"
  - "vector"
  - "index"
  - "supports"
---

# Pre-filtered vector index

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner now supports creating pre-filtered vector indexes that restrict ANN searches to rows matching a specified filter condition, improving search performance and recall.

## Extended Definition

Spanner now supports creating pre-filtered vector indexes that restrict ANN searches to rows matching a specified filter condition, improving search performance and recall.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/information-schema-pg](https://docs.cloud.google.com/spanner/docs/information-schema-pg)
- [https://docs.cloud.google.com/spanner/docs/vector-search-tutorial](https://docs.cloud.google.com/spanner/docs/vector-search-tutorial)
- [https://docs.cloud.google.com/spanner/docs/information-schema](https://docs.cloud.google.com/spanner/docs/information-schema)

## Supporting Pages

### "Information schema for PostgreSQL-dialect databases \_|\_ Spanner \_|\_\

- URL: [https://docs.cloud.google.com/spanner/docs/information-schema-pg](https://docs.cloud.google.com/spanner/docs/information-schema-pg)
- Source ID: `site-docs-reference`
- Final score: 85
- Re-rank relevance: N/A

Evidence snippets:
- Possible values and the states they represent are: NULL : the index type is PRIMARY KEY PREPARE : creating empty tables for a new index WRITE ONLY : backfilling data for a new index WRITE ONLY CLEANUP : cleaning up a new index WRITE ONLY VALIDATE UNIQUE : checking uniqueness of data in a new index READ WRITE : normal index operation spanner is managed character varying Whether the index is managed by Spanner.
- The values include PRIMARY KEY , LOCAL , or GLOBAL . parent table name character varying Secondary indexes can be interleaved in a parent table, as discussed in Creating a secondary index .
- In accordance with the SQL standard, the string is either YES or NO , rather than a Boolean value. is null filtered character varying Whether the index includes entries with NULL values.
- Examples Return information about each table in the user's schema: SELECT t . table schema , t . table catalog , t . table name , t . parent table name FROM information schema . tables AS t WHERE t . table schema NOT IN ( 'pg catalog' , 'information schema' , 'SPANNER SYS' ) AND t . table type = 'BASE TABLE' ORDER BY t . table catalog , t . table schema , t . table name Return the name of all tables and views in the information schema for PostgreSQL-dialect databases: SELECT table name FROM information schema . tables WHERE table schema = "information schema" Return information about columns in the user table my table in the default schema: SELECT t . ordinal position , t . column name , t . data type , t . spanner type , t . is nullable FROM information schema . columns AS t WHERE t . table schema = 'public' AND t . table name = 'my table' ORDER BY t . ordinal position Return information about each index in the default schema in the current database: ## What's next {: #whats-next} + Learn about available Introspection tools to help you investigate database issues.

### "Get started using Spanner for generative AI applications \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/spanner/docs/vector-search-tutorial](https://docs.cloud.google.com/spanner/docs/vector-search-tutorial)
- Source ID: `site-docs-root`
- Final score: 83
- Re-rank relevance: N/A

Evidence snippets:
- The following topics help you learn how to: Create an Google Cloud project Create a Spanner instance Create a database Create an embedding model Load data into Spanner Generate embeddings for data Perform KNN vector similarity search Scale vector search with a vector index Clean up resources To learn about Spanner pricing details, see Spanner pricing .
- To scale and use ANN vector search in Spanner, do the following: Create a vector index Modify your query to use an ANN distance function Create a vector index Spanner accelerates ANN vector searches by using a specialized vector index that leverages Google Research's Scalable Nearest Neighbor (ScaNN) .
- Copy and paste the following DDL statement to create the vector index: CREATE VECTOR INDEX ProductDescriptionEmbeddingIndex ON products ( productDescriptionEmbedding ) WHERE productDescriptionEmbedding IS NOT NULL OPTIONS ( distance type = 'COSINE' ); Click Run .
- Use the FORCE INDEX hint to reference the new vector index: @{force index=ProductDescriptionEmbeddingIndex} Use the APPROX COSINE DISTANCE vector distance function instead of COSINE DISTANCE .

### "Information schema for GoogleSQL-dialect databases \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/information-schema](https://docs.cloud.google.com/spanner/docs/information-schema)
- Source ID: `site-docs-reference`
- Final score: 77
- Re-rank relevance: N/A

Evidence snippets:
- PARENT TABLE NAME STRING Secondary indexes can be interleaved in a parent table, as discussed in Creating a secondary index .
- Possible values and the states they represent are: PREPARE : creating empty tables for a new index.
- IS NULL FILTERED BOOL Whether the index includes entries with NULL values.
- INDEX COLUMNS This row-filtered table lists the columns in an index.

