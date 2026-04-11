---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.456Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery stored column usage reporting for vector search"
feature_slug: "bigquery-stored-column-usage-reporting-for-vector-search"
latest_feature_date: "2025-01-28"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/vector-search-intro"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/vector-index-text-search-tutorial"
keywords:
  - "vector-search query jobs"
  - "column usage reporting"
  - "vector search usage"
  - "stored column usage"
  - "stored-column usage"
  - "query job metadata"
  - "stored columns"
  - "vector search"
---

# BigQuery stored column usage reporting for vector search

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery now exposes stored column usage information for vector-search query jobs that use stored columns.

## Extended Definition

The provided official BigQuery documentation confirms support for vector search workflows using `VECTOR SEARCH` (and related functions like `AI.SEARCH`) with vector indexes and ANN-related options, including distance type, index partitioning behavior, and IVF scanning settings for query execution. However, the excerpts do not provide direct evidence that BigQuery exposes a separate "stored column usage reporting" feature for vector-search query jobs.

## Evidence Summary

These pages document how to define and run vector search in BigQuery, but the supplied excerpts do not mention stored-column usage reporting metadata or reporting for vector-search query jobs.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/vector-search-intro](https://docs.cloud.google.com/bigquery/docs/vector-search-intro)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/vector-index-text-search-tutorial](https://docs.cloud.google.com/bigquery/docs/vector-index-text-search-tutorial)

## Supporting Pages

### "Introduction to embeddings and vector search \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/vector-search-intro](https://docs.cloud.google.com/bigquery/docs/vector-search-intro)
- Source ID: `site-docs-root`
- Final score: 46
- Re-rank relevance: N/A

Evidence snippets:
- When a vector index is used, the VECTOR SEARCH and AI.SEARCH functions use the Approximate Nearest Neighbor search technique to improve vector search performance, with the trade-off of reducing recall and so returning more approximate results.
- Some possible use cases are as follows: Retrieval-augmented generation (RAG) : Parse documents, perform vector search on content, and generate summarized answers to natural language questions using Gemini models, all within BigQuery.
- Try the Search embeddings with vector search tutorial to learn how to create a vector index, and then do a vector search for embeddings both with and without the index.
- Vector search is a technique to compare similar objects using embeddings, and it is used to power Google products, including Google Search, YouTube, and Google Play.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- If you specify a value for the distance type argument of the VECTOR SEARCH function , that value is used instead of the vector index's distance type value. ivf options JSON-formatted STRING The options to use with the IVF algorithm.
- When you use the VECTOR SEARCH function to search the vector data, it can use these partitions to reduce the amount of data it needs to read in order to determine a result.
- Higher values create more lists, so you can set the fraction lists to search option of the VECTOR SEARCH function to scan a smaller percentage of the index.
- For more information, see TreeAH index . distance type STRING Specifies the default distance type to use when performing a vector search using this index.

### "Perform semantic search and retrieval-augmented generation \_|\_ BigQuery\

- URL: [https://docs.cloud.google.com/bigquery/docs/vector-index-text-search-tutorial](https://docs.cloud.google.com/bigquery/docs/vector-index-text-search-tutorial)
- Source ID: `site-docs-root-2`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- GENERATE TEXT ( MODEL bqml tutorial.text model , ( SELECT CONCAT ( 'Propose some project ideas to improve user password security using the context below: ' , STRING AGG ( FORMAT ( "patent title: %s, patent abstract: %s" , base . title , base . abstract ), ', \n ' ) ) AS prompt , FROM VECTOR SEARCH ( TABLE bqml tutorial.embeddings , 'embedding' , ( SELECT embedding , content AS query FROM AI .
- Go to BigQuery In the query editor, run the following SQL statement: SELECT query . query , base . publication number , base . title , base . abstract FROM VECTOR SEARCH ( TABLE bqml tutorial.embeddings , 'embedding' , ( SELECT embedding , content AS query FROM AI .
- Generate text augmented by vector search results Feed the search results as prompts to generate text with the AI.GENERATE TEXT function In the Google Cloud console, go to the BigQuery page.
- Create a vector index If you create a vector index on an embedding column, a vector search performed on that column uses the Approximate Nearest Neighbor search technique.

