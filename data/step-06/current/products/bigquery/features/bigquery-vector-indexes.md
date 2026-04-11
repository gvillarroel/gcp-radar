---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.487Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery vector indexes"
feature_slug: "bigquery-vector-indexes"
latest_feature_date: "2024-09-04"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/vector-search-intro"
  - "https://docs.cloud.google.com/bigquery/docs/vector-index-text-search-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "approximate nearest neighbor"
  - "ANN index"
  - "ANN search"
  - "VECTOR_SEARCH acceleration"
  - "CREATE VECTOR INDEX"
  - "vector indexes"
  - "embedding index"
  - "vector index"
---

# BigQuery vector indexes

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

BigQuery now supports vector indexes to improve VECTOR_SEARCH query performance with approximate-result tradeoffs; Introduces vector indexes to accelerate VECTOR_SEARCH with more efficient (approximate) similarity retrieval.

## Extended Definition

BigQuery vector indexes are index structures created with the `CREATE VECTOR INDEX` DDL statement on an embedding column of a standard table to speed up semantic similarity queries. They are used by `VECTOR SEARCH` and `AI.SEARCH` and implement Approximate Nearest Neighbor retrieval (including approaches such as IVF and ScaNN), which improves performance with reduced recall compared with exact retrieval. Index creation, options (for example index type and distance type), and readiness status can be managed and verified through documented SQL syntax and the `INFORMATION_SCHEMA.VECTOR_INDEXES` metadata view.

## Evidence Summary

The cited BigQuery docs define vector indexes, explain their ANN-based acceleration of vector search, show DDL creation/option syntax, and describe how to monitor index readiness via `INFORMATION_SCHEMA.VECTOR INDEXES`.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/vector-search-intro](https://docs.cloud.google.com/bigquery/docs/vector-search-intro)
- [https://docs.cloud.google.com/bigquery/docs/vector-index-text-search-tutorial](https://docs.cloud.google.com/bigquery/docs/vector-index-text-search-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### "Introduction to embeddings and vector search \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/vector-search-intro](https://docs.cloud.google.com/bigquery/docs/vector-search-intro)
- Source ID: `site-docs-root`
- Final score: 86
- Re-rank relevance: STRONG
- Re-rank rationale: The page explicitly introduces vector search in BigQuery and calls out using vector indexes (including IVF and ScaNN) for scaling similarity search.

Evidence snippets:
- CREATE VECTOR INDEX statement: There is no charge for the processing required to build and refresh your vector indexes as long as the total size of the indexed table data is below your per-organization limit .
- When a vector index is used, the VECTOR SEARCH and AI.SEARCH functions use the Approximate Nearest Neighbor search technique to improve vector search performance, with the trade-off of reducing recall and so returning more approximate results.
- When you use vector indexes with vector search, you can take advantage of foundational technologies like inverted file indexing (IVF) and the ScaNN algorithm .
- Pricing The VECTOR SEARCH and AI.SEARCH functions and the CREATE VECTOR INDEX statement use BigQuery compute pricing .

### "Perform semantic search and retrieval-augmented generation \_|\_ BigQuery\

- URL: [https://docs.cloud.google.com/bigquery/docs/vector-index-text-search-tutorial](https://docs.cloud.google.com/bigquery/docs/vector-index-text-search-tutorial)
- Source ID: `site-docs-root-2`
- Final score: 64
- Re-rank relevance: STRONG
- Re-rank rationale: The tutorial includes creating a vector index over embeddings specifically to improve semantic search performance.

Evidence snippets:
- Go to BigQuery In the query editor, run the following SQL statement: SELECT table name , index name , index status , coverage percentage , last refresh time , disable reason FROM PROJECT ID .bqml tutorial.INFORMATION SCHEMA.VECTOR INDEXES Replace PROJECT ID with your project ID.
- You can check whether the index is ready to be used by querying the INFORMATION SCHEMA.VECTOR INDEXES view and verifying that the coverage percentage column value is greater than 0 and the last refresh time column value isn't NULL .
- Create a vector index If you create a vector index on an embedding column, a vector search performed on that column uses the Approximate Nearest Neighbor search technique.
- To create a vector index, use the CREATE VECTOR INDEX data definition language (DDL) statement: Go to the BigQuery page.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 58
- Re-rank relevance: N/A

Evidence snippets:
- Examples The following examples show how to create vector indexes with different options.
- Details You can only create vector indexes on standard tables .
- This example creates a vector index of type IVF on the embedding column of my table : CREATE VECTOR INDEX my index ON my dataset . my table ( embedding ) OPTIONS ( index type = 'IVF' ); The following example creates a vector index on the embedding column of my table , and specifies the distance type to use and the IVF options: CREATE VECTOR INDEX my index ON my dataset . my table ( embedding ) OPTIONS ( index type = 'IVF' , distance type = 'COSINE' , ivf options = '{"num lists":2500}' ); The following example creates a vector index on the embedding column of my table , and specifies the distance type to use and the TREE AH options: CREATE VECTOR INDEX my index ON my dataset . my table ( embedding ) OPTIONS ( index type = 'TREE AH' , distance type = 'EUCLIDEAN' , tree ah options = '{"normalization type": "L2"}' ); CREATE DATA POLICY statement Preview This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- CREATE TABLE dataset . complex table ( a STRING , my struct STRUCT < string field STRING , int field INT64 > , b ARRAY < STRING > ); CREATE SEARCH INDEX my index ON dataset . complex table ( a OPTIONS ( index granularity = 'GLOBAL' ), my struct , b ) OPTIONS ( analyzer = 'NO OP ANALYZER' , default index column granularity = 'COLUMN' ); CREATE VECTOR INDEX statement Creates a new vector index on a column of a table.

