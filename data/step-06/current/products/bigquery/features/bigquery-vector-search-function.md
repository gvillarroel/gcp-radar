---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.488Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery VECTOR_SEARCH function"
feature_slug: "bigquery-vector-search-function"
latest_feature_date: "2024-09-04"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/vector-index-text-search-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/vector-search-intro"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "nearest neighbor"
  - "semantic similarity function"
  - "top_k parameter"
  - "VECTOR_SEARCH syntax"
  - "VECTOR_SEARCH function"
  - "semantic search"
  - "text embeddings search"
  - "VECTOR_SEARCH"
---

# BigQuery VECTOR_SEARCH function

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

BigQuery now supports the VECTOR_SEARCH function to find semantically similar entities from embeddings; Adds the VECTOR_SEARCH function for semantic similarity search over embeddings.

## Extended Definition

BigQuery’s VECTOR SEARCH function performs semantic similarity search over embedding data in SQL, using a vector index on an embedding column to return nearest-neighbor results for text or other vector-based retrieval tasks. When a vector index is used, VECTOR SEARCH runs Approximate Nearest Neighbor search (with a speed-versus-recall trade-off) and its behavior can be configured via options such as distance type and IVF algorithm settings.

## Evidence Summary

These official pages show that VECTOR SEARCH is the BigQuery SQL function used for vector/semantic search over embeddings, describe ANN-based vector index usage, and document configurable search parameters like distance type and IVF options.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/vector-index-text-search-tutorial](https://docs.cloud.google.com/bigquery/docs/vector-index-text-search-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/vector-search-intro](https://docs.cloud.google.com/bigquery/docs/vector-search-intro)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### "Perform semantic search and retrieval-augmented generation \_|\_ BigQuery\

- URL: [https://docs.cloud.google.com/bigquery/docs/vector-index-text-search-tutorial](https://docs.cloud.google.com/bigquery/docs/vector-index-text-search-tutorial)
- Source ID: `site-docs-root-2`
- Final score: 82
- Re-rank relevance: STRONG
- Re-rank rationale: The page is a tutorial explicitly on semantic search using BigQuery's VECTOR SEARCH function and explains how to query embeddings with it.

Evidence snippets:
- Create a vector index If you create a vector index on an embedding column, a vector search performed on that column uses the Approximate Nearest Neighbor search technique.
- Perform a text similarity search using the vector index Use the VECTOR SEARCH function to search for relevant patents that match embeddings generated from a text query.
- Using the VECTOR SEARCH function with the embeddings to search for similar text.
- GENERATE TEXT ( MODEL bqml tutorial.text model , ( SELECT CONCAT ( 'Propose some project ideas to improve user password security using the context below: ' , STRING AGG ( FORMAT ( "patent title: %s, patent abstract: %s" , base . title , base . abstract ), ', \n ' ) ) AS prompt , FROM VECTOR SEARCH ( TABLE bqml tutorial.embeddings , 'embedding' , ( SELECT embedding , content AS query FROM AI .

### "Introduction to embeddings and vector search \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/vector-search-intro](https://docs.cloud.google.com/bigquery/docs/vector-search-intro)
- Source ID: `site-docs-root`
- Final score: 74
- Re-rank relevance: MODERATE
- Re-rank rationale: The page provides foundational context for semantic similarity over embeddings and how BigQuery performs vector search, but it does not clearly state function-level syntax in the excerpt.

Evidence snippets:
- When a vector index is used, the VECTOR SEARCH and AI.SEARCH functions use the Approximate Nearest Neighbor search technique to improve vector search performance, with the trade-off of reducing recall and so returning more approximate results.
- Learn how to perform a vector search using the VECTOR SEARCH function .
- Generate and search multimodal embeddings Perform semantic search and retrieval-augmented generation Autonomous embedding generation Preview This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- Some possible use cases are as follows: Retrieval-augmented generation (RAG) : Parse documents, perform vector search on content, and generate summarized answers to natural language questions using Gemini models, all within BigQuery.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 40
- Re-rank relevance: N/A

Evidence snippets:
- If you specify a value for the distance type argument of the VECTOR SEARCH function , that value is used instead of the vector index's distance type value. ivf options JSON-formatted STRING The options to use with the IVF algorithm.
- When you use the VECTOR SEARCH function to search the vector data, it can use these partitions to reduce the amount of data it needs to read in order to determine a result.
- Higher values create more lists, so you can set the fraction lists to search option of the VECTOR SEARCH function to scan a smaller percentage of the index.
- The index creation itself always uses EUCLIDEAN distance for training but the distance used in the VECTOR SEARCH function can be different.

