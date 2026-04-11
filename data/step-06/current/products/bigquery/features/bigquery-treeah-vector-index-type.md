---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.429Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery TreeAH vector index type"
feature_slug: "bigquery-treeah-vector-index-type"
latest_feature_date: "2025-05-14"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
  - "https://docs.cloud.google.com/bigquery/docs/vector-search-intro"
keywords:
  - "Tree-AH index type"
  - "Tree AH"
  - "ScaNN vector index"
  - "BigQuery vector indexes"
  - "TreeAH index"
  - "CREATE VECTOR INDEX"
  - "ScaNN"
  - "TreeAH"
---

# BigQuery TreeAH vector index type

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

BigQuery vector indexes now support the TreeAH index type, using Google's ScaNN algorithm for efficient batch processing.

## Extended Definition

TreeAH is a BigQuery vector index type created with the CREATE VECTOR INDEX statement using OPTIONS (index type = 'TREE AH'), with optional distance and TreeAH-specific options such as normalization type. It uses Google’s ScaNN algorithm for vector search and is optimized for efficient batch processing, handling roughly a few thousand to hundreds of thousands of embeddings per batch. TreeAH indexes can be partitioned via the PARTITION BY clause of CREATE VECTOR INDEX, and this partitioning behavior is referenced as preview-related in the DDL documentation.

## Evidence Summary

The release notes confirm TreeAH support, ScaNN usage, batch-processing performance, and partitioning support, while the DDL and vector search pages define the CREATE VECTOR INDEX syntax/behavior and position TreeAH as a ScaNN-based BigQuery vector index technology.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- [https://docs.cloud.google.com/bigquery/docs/vector-search-intro](https://docs.cloud.google.com/bigquery/docs/vector-search-intro)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 84
- Re-rank relevance: N/A

Evidence snippets:
- This example creates a vector index of type IVF on the embedding column of my table : CREATE VECTOR INDEX my index ON my dataset . my table ( embedding ) OPTIONS ( index type = 'IVF' ); The following example creates a vector index on the embedding column of my table , and specifies the distance type to use and the IVF options: CREATE VECTOR INDEX my index ON my dataset . my table ( embedding ) OPTIONS ( index type = 'IVF' , distance type = 'COSINE' , ivf options = '{"num lists":2500}' ); The following example creates a vector index on the embedding column of my table , and specifies the distance type to use and the TREE AH options: CREATE VECTOR INDEX my index ON my dataset . my table ( embedding ) OPTIONS ( index type = 'TREE AH' , distance type = 'EUCLIDEAN' , tree ah options = '{"normalization type": "L2"}' ); CREATE DATA POLICY statement Preview This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- For more information, see TreeAH index . distance type STRING Specifies the default distance type to use when performing a vector search using this index.
- You can only partition TreeAH indexes. ( Preview ) index option list : The list of options to set on the vector index.
- TREE AH : Uses Google's ScaNN algorithm .

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 32
- Re-rank relevance: N/A

Evidence snippets:
- Feature Vector indexes support the TreeAH index type , which uses Google's ScaNN algorithm.
- The TreeAH index is optimized for efficient batch processing, capable of handling anywhere from a few thousand to hundreds of thousands of embeddings at once.
- Feature You can now use the use the PARTITION BY clause of the CREATE VECTOR INDEX statement to partition TreeAH vector indexes .

### "Introduction to embeddings and vector search \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/vector-search-intro](https://docs.cloud.google.com/bigquery/docs/vector-search-intro)
- Source ID: `site-docs-root`
- Final score: 28
- Re-rank relevance: N/A

Evidence snippets:
- CREATE VECTOR INDEX statement: There is no charge for the processing required to build and refresh your vector indexes as long as the total size of the indexed table data is below your per-organization limit .
- When you use vector indexes with vector search, you can take advantage of foundational technologies like inverted file indexing (IVF) and the ScaNN algorithm .
- Pricing The VECTOR SEARCH and AI.SEARCH functions and the CREATE VECTOR INDEX statement use BigQuery compute pricing .
- On-demand: You are charged for the amount of bytes scanned in the base table, the index, and the search query.

