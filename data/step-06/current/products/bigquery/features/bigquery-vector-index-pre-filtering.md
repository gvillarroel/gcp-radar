---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.553Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery vector index pre-filtering"
feature_slug: "bigquery-vector-index-pre-filtering"
latest_feature_date: "2024-05-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/vector-search-intro"
  - "https://docs.cloud.google.com/bigquery/docs/vector-index-text-search-tutorial"
keywords:
  - "vector index prefiltering"
  - "vector prefilter"
  - "vector query efficiency"
  - "vector pre-filtering"
  - "pre-filter"
  - "CREATE VECTOR INDEX"
  - "vector index"
  - "vector search"
---

# BigQuery vector index pre-filtering

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery now supports storing columns in vector indexes and applying pre-filters in vector searches to improve query efficiency.

## Extended Definition

BigQuery supports ANN-based vector search using vector indexes created with `CREATE VECTOR INDEX` on a table column (including options for index type and distance configuration). In vector searches, BigQuery can use index parameters such as a `fraction lists to search` value to scan only part of the index lists (for example, 0.01 of 500 lists), which improves efficiency and introduces an accuracy/recall trade-off. The cited material confirms this behavior is approximate, not exact, but does not explicitly label it as a dedicated "pre-filtering" feature.

## Evidence Summary

These pages document how to create and use BigQuery vector indexes and describe ANN vector search behavior, including configurable list-scan fraction that narrows index coverage for faster but less exact results.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/vector-search-intro](https://docs.cloud.google.com/bigquery/docs/vector-search-intro)
- [https://docs.cloud.google.com/bigquery/docs/vector-index-text-search-tutorial](https://docs.cloud.google.com/bigquery/docs/vector-index-text-search-tutorial)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 74
- Re-rank relevance: N/A

Evidence snippets:
- This example creates a vector index of type IVF on the embedding column of my table : CREATE VECTOR INDEX my index ON my dataset . my table ( embedding ) OPTIONS ( index type = 'IVF' ); The following example creates a vector index on the embedding column of my table , and specifies the distance type to use and the IVF options: CREATE VECTOR INDEX my index ON my dataset . my table ( embedding ) OPTIONS ( index type = 'IVF' , distance type = 'COSINE' , ivf options = '{"num lists":2500}' ); The following example creates a vector index on the embedding column of my table , and specifies the distance type to use and the TREE AH options: CREATE VECTOR INDEX my index ON my dataset . my table ( embedding ) OPTIONS ( index type = 'TREE AH' , distance type = 'EUCLIDEAN' , tree ah options = '{"normalization type": "L2"}' ); CREATE DATA POLICY statement Preview This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- CREATE TABLE dataset . complex table ( a STRING , my struct STRUCT < string field STRING , int field INT64 > , b ARRAY < STRING > ); CREATE SEARCH INDEX my index ON dataset . complex table ( a OPTIONS ( index granularity = 'GLOBAL' ), my struct , b ) OPTIONS ( analyzer = 'NO OP ANALYZER' , default index column granularity = 'COLUMN' ); CREATE VECTOR INDEX statement Creates a new vector index on a column of a table.
- If you specify a value for the distance type argument of the VECTOR SEARCH function , that value is used instead of the vector index's distance type value. ivf options JSON-formatted STRING The options to use with the IVF algorithm.
- A vector index lets you perform a vector search more quickly, with the trade-off of reducing recall and so returning more approximate results.

### "Introduction to embeddings and vector search \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/vector-search-intro](https://docs.cloud.google.com/bigquery/docs/vector-search-intro)
- Source ID: `site-docs-root`
- Final score: 74
- Re-rank relevance: WEAK
- Re-rank rationale: The page mentions vector indexes and search internals, but it does not explicitly describe pre-filtering behavior in vector search.

Evidence snippets:
- Pricing The VECTOR SEARCH and AI.SEARCH functions and the CREATE VECTOR INDEX statement use BigQuery compute pricing .
- When a vector index is used, the VECTOR SEARCH and AI.SEARCH functions use the Approximate Nearest Neighbor search technique to improve vector search performance, with the trade-off of reducing recall and so returning more approximate results.
- CREATE VECTOR INDEX statement: There is no charge for the processing required to build and refresh your vector indexes as long as the total size of the indexed table data is below your per-organization limit .
- Try the Search embeddings with vector search tutorial to learn how to create a vector index, and then do a vector search for embeddings both with and without the index.

### "Perform semantic search and retrieval-augmented generation \_|\_ BigQuery\

- URL: [https://docs.cloud.google.com/bigquery/docs/vector-index-text-search-tutorial](https://docs.cloud.google.com/bigquery/docs/vector-index-text-search-tutorial)
- Source ID: `site-docs-root-2`
- Final score: 48
- Re-rank relevance: WEAK
- Re-rank rationale: The page covers creating vector indexes for semantic search performance, but does not describe applying pre-filters in vector searches.

Evidence snippets:
- Create a vector index If you create a vector index on an embedding column, a vector search performed on that column uses the Approximate Nearest Neighbor search technique.
- Perform a text similarity search using the vector index Use the VECTOR SEARCH function to search for relevant patents that match embeddings generated from a text query.
- The vector index you created has 500 lists, so the fraction lists to search value of .01 indicates that this vector search scans five of those lists.
- To create a vector index, use the CREATE VECTOR INDEX data definition language (DDL) statement: Go to the BigQuery page.

