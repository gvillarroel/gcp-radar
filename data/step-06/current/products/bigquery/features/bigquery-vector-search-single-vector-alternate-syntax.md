---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.339Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery VECTOR_SEARCH single-vector alternate syntax"
feature_slug: "bigquery-vector-search-single-vector-alternate-syntax"
latest_feature_date: "2026-03-05"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/vector-search-intro"
  - "https://docs.cloud.google.com/bigquery/docs/vector-index-text-search-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial"
keywords:
  - "alternate VECTOR_SEARCH form"
  - "VECTOR_SEARCH optimization"
  - "vector search performance"
  - "single-vector syntax"
  - "single vector query"
  - "VECTOR_SEARCH"
---

# BigQuery VECTOR_SEARCH single-vector alternate syntax

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery added an alternate syntax for VECTOR_SEARCH to improve query performance when searching for a single vector.

## Extended Definition

BigQuery supports vector similarity search through the `VECTOR SEARCH` SQL form, which is used in queries by specifying a vector table, the vector column, and a subquery-based query vector (for example, generated via AI-generated embeddings). When a vector index is used, VECTOR SEARCH applies approximate nearest-neighbor search to improve vector search performance, with the trade-off of reduced recall and more approximate results. The provided excerpts do not explicitly confirm a documented alternate syntax specifically for single-vector queries, so that specific feature distinction is weakly evidenced here.

## Evidence Summary

These pages document core VECTOR_SEARCH usage and behavior with vector indexes in BigQuery, but do not clearly describe a separate "alternate" single-vector syntax.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/vector-search-intro](https://docs.cloud.google.com/bigquery/docs/vector-search-intro)
- [https://docs.cloud.google.com/bigquery/docs/vector-index-text-search-tutorial](https://docs.cloud.google.com/bigquery/docs/vector-index-text-search-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial](https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial)

## Supporting Pages

### "Introduction to embeddings and vector search \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/vector-search-intro](https://docs.cloud.google.com/bigquery/docs/vector-search-intro)
- Source ID: `site-docs-root`
- Final score: 50
- Re-rank relevance: N/A

Evidence snippets:
- When a vector index is used, the VECTOR SEARCH and AI.SEARCH functions use the Approximate Nearest Neighbor search technique to improve vector search performance, with the trade-off of reducing recall and so returning more approximate results.
- Some possible use cases are as follows: Retrieval-augmented generation (RAG) : Parse documents, perform vector search on content, and generate summarized answers to natural language questions using Gemini models, all within BigQuery.
- Try the Search embeddings with vector search tutorial to learn how to create a vector index, and then do a vector search for embeddings both with and without the index.
- Vector search is a technique to compare similar objects using embeddings, and it is used to power Google products, including Google Search, YouTube, and Google Play.

### "Perform semantic search and retrieval-augmented generation \_|\_ BigQuery\

- URL: [https://docs.cloud.google.com/bigquery/docs/vector-index-text-search-tutorial](https://docs.cloud.google.com/bigquery/docs/vector-index-text-search-tutorial)
- Source ID: `site-docs-root-2`
- Final score: 34
- Re-rank relevance: N/A

Evidence snippets:
- This technique improves vector search performance, with the trade-off of reducing recall and so returning more approximate results.
- GENERATE TEXT ( MODEL bqml tutorial.text model , ( SELECT CONCAT ( 'Propose some project ideas to improve user password security using the context below: ' , STRING AGG ( FORMAT ( "patent title: %s, patent abstract: %s" , base . title , base . abstract ), ', \n ' ) ) AS prompt , FROM VECTOR SEARCH ( TABLE bqml tutorial.embeddings , 'embedding' , ( SELECT embedding , content AS query FROM AI .
- Go to BigQuery In the query editor, run the following SQL statement: SELECT query . query , base . publication number , base . title , base . abstract FROM VECTOR SEARCH ( TABLE bqml tutorial.embeddings , 'embedding' , ( SELECT embedding , content AS query FROM AI .
- Generate text augmented by vector search results Feed the search results as prompts to generate text with the AI.GENERATE TEXT function In the Google Cloud console, go to the BigQuery page.

### "Analyze multimodal data with SQL and BigQuery DataFrames \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial](https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial)
- Source ID: `site-docs-root-2`
- Final score: 28
- Re-rank relevance: N/A

Evidence snippets:
- DataFrame ( { "uri" : [ "gs://cloud-samples-data/bigquery/tutorials/cymbal-pets/images/cozy-naps-cat-scratching-post-with-condo.png" ] } ) . cache () df image [ "image" ] = bbq . obj . make ref ( df image [ "uri" ], "us.cymbal conn" ) df search = bbq . ai . generate embedding ( embedding model , bbq . obj . get access url ( bbq . obj . fetch metadata ( df image [ "image" ]), "R" ), ) search result = bbq . vector search ( "cymbal pets.products embedding" , "embedding" , df search [ "embedding" ] ) search result The results look similar to the following: +-----------------+-----------------+----------------+----------------------------------------------+--------------------+-------------------------------+------------------------------------------------+----------------+ query.embedding base.product id base.embedding base.image.uri base.image.version base.image.authorizer base.image.details distance +-----------------+-----------------+----------------+----------------------------------------------+--------------------+-------------------------------+------------------------------------------------+----------------+ -0.0112330541 181 -0.0112330541 gs://cloud-samples-data/bigquery/ 12345678910 myproject.region.myconnection {"gcs metadata":{"content type": 0.0 0.0142525584 0.0142525584 tutorials/cymbal-pets/images/ "image/png","md5 hash":"21234567hst16555w60j", 0.0135886827 0.0135886827 cozy-naps-cat-scratching-post-with-condo.png "size":828318,"updated":1742492688982000}} 0.0149955815 0.0149955815 ... ... +-----------------+-----------------+----------------+----------------------------------------------+--------------------+-------------------------------+------------------------------------------------+----------------+ -0.0112330541 187 -0.0190353896 gs://cloud-samples-data/bigquery/ 23456789101 myproject.region.myconnection {"gcs metadata":{"content type": 0.4216330832..
- To disable the voice message, record a blank message (hold VOICE button for 10 seconds without speaking). (Meal Enabled) 6.5 Low Food Level Indicator: +-------------------------------------------------------------------------------------------------------------------------------------------+ ... +-------------------------------------------------------------------------------------------------------------------------------------------+ Generate embeddings and perform a vector search Generate embeddings from image data, and then use the embeddings to return similar images by using vector search .
- For more information, see Set up ADC for a local development environment . df products mm [ "content" ] = bbq . obj . get access url ( df products mm [ "image" ], "R" ) df embed = bbq . ai . generate embedding ( embedding model , df products mm [[ "content" , "product id" ]] ) df embed . to gbq ( "cymbal pets.products embedding" , if exists = "replace" ) Run the following to run a vector search to return product images that are similar to the given input image: SQL SELECT FROM VECTOR SEARCH ( TABLE cymbal pets . products embedding , 'embedding' , ( SELECT embedding FROM AI .
- A vector index lets you perform the vector search more quickly, with the trade-off of reducing recall and so returning more approximate results.

