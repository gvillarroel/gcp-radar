---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.589Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery ML.GENERATE_EMBEDDING function with remote models"
feature_slug: "bigquery-ml-generate-embedding-function-with-remote-models"
latest_feature_date: "2024-02-22"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/vector-index-text-search-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/vector-search-intro"
  - "https://docs.cloud.google.com/bigquery/docs/generate-text-embedding-tutorial-open-models"
keywords:
  - "ML.GENERATE_EMBEDDING with REMOTE"
  - "GENERATE_EMBEDDING function"
  - "remote model embeddings"
  - "ML.GENERATE_EMBEDDING()"
  - "ML.GENERATE_EMBEDDING"
  - "embedding generation"
  - "GENERATE_EMBEDDING"
---

# BigQuery ML.GENERATE_EMBEDDING function with remote models

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

Enables using ML.GENERATE_EMBEDDING with a remote model to generate text embeddings in BigQuery.

## Extended Definition

In BigQuery, the AI.GENERATE EMBEDDING function can generate text embeddings from BigQuery data by invoking a user-defined remote model, enabling retrieval-oriented workflows like semantic search and retrieval-augmented generation. The docs show the workflow as: create a remote model (for example, from an open-source embedding model) and then run SQL such as GENERATE EMBEDDING(MODEL <remote model>, <input text/rows>), returning embedding vectors (and status metadata) that can be stored and queried. Evidence also notes this embedding-generation capability is documented as being in a preview-like pre-GA offering context.

## Evidence Summary

The cited BigQuery documentation pages provide direct SQL examples and tutorial guidance showing AI.GENERATE EMBEDDING used with remote models to generate text embeddings (including output fields and downstream semantic-search usage).

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/vector-index-text-search-tutorial](https://docs.cloud.google.com/bigquery/docs/vector-index-text-search-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/vector-search-intro](https://docs.cloud.google.com/bigquery/docs/vector-search-intro)
- [https://docs.cloud.google.com/bigquery/docs/generate-text-embedding-tutorial-open-models](https://docs.cloud.google.com/bigquery/docs/generate-text-embedding-tutorial-open-models)

## Supporting Pages

### "Perform semantic search and retrieval-augmented generation \_|\_ BigQuery\

- URL: [https://docs.cloud.google.com/bigquery/docs/vector-index-text-search-tutorial](https://docs.cloud.google.com/bigquery/docs/vector-index-text-search-tutorial)
- Source ID: `site-docs-root-2`
- Final score: 74
- Re-rank relevance: STRONG
- Re-rank rationale: It explicitly creates a BigQuery ML remote model over Vertex AI and uses AI.GENERATE EMBEDDING to generate text embeddings.

Evidence snippets:
- Embedding generation using the AI.GENERATE EMBEDDING function might fail due to Vertex AI LLM quotas or service unavailability.
- Generate text embeddings Generate text embeddings from patent abstracts using the AI.GENERATE EMBEDDING function , and then write them to a BigQuery table so that they can be searched.
- Using the remote model with the AI.GENERATE EMBEDDING function to generate embeddings from text in a BigQuery table.
- GENERATE EMBEDDING ( MODEL bqml tutorial.embedding model , ( SELECT 'improving password security' AS content )) ), top k => 5 , options => '{"fraction lists to search": 0.01}' ) The output is similar to the following: +-----------------------------+--------------------+-------------------------------------------------+-------------------------------------------------+ query publication number title abstract +-----------------------------+--------------------+-------------------------------------------------+-------------------------------------------------+ improving password security SG-120868-A1 Data storage device security method and a...

### "Introduction to embeddings and vector search \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/vector-search-intro](https://docs.cloud.google.com/bigquery/docs/vector-search-intro)
- Source ID: `site-docs-root`
- Final score: 56
- Re-rank relevance: N/A

Evidence snippets:
- Use the following topics to try embedding generation in BigQuery ML: Generate text , images , or video by using the AI.GENERATE EMBEDDING function.
- Generate and search multimodal embeddings Perform semantic search and retrieval-augmented generation Autonomous embedding generation Preview This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- Note: To give feedback or request support for this feature, contact bq-vector-search@google.com You can use autonomous embedding generation to simplify the process of creating, maintaining, and querying embeddings.
- For multimodal embedding models, AI.GENERATE EMBEDDING also works with visual content from either standard table columns that contain ObjectRef values , or from object tables .

### "Generate text embeddings by using an open model and the AI.GENERATE_EMBEDDING\

- URL: [https://docs.cloud.google.com/bigquery/docs/generate-text-embedding-tutorial-open-models](https://docs.cloud.google.com/bigquery/docs/generate-text-embedding-tutorial-open-models)
- Source ID: `site-docs-root-2`
- Final score: 48
- Re-rank relevance: WEAK
- Re-rank rationale: The page focuses on AI.GENERATE_EMBEDDING and does not discuss ML.GENERATE_EMBEDDING directly, though it shows the broader remote-model embedding workflow.

Evidence snippets:
- Generate text embeddings by using an open model and the AI.GENERATE EMBEDDING function This tutorial shows you how to create a remote model that's based on the open-source text embedding model Qwen3-Embedding-0.6B , and then how to use that model with the AI.GENERATE EMBEDDING function to embed movie reviews from the bigquery-public-data.imdb.reviews public table.
- Perform text embedding Perform text embedding on IMDB movie reviews by using the remote model and the AI.GENERATE EMBEDDING function: In the Google Cloud console, go to the BigQuery page.
- GENERATE EMBEDDING ( MODEL bqml tutorial . qwen3 embedding model , ( SELECT review AS content , FROM bigquery - public - data . imdb . reviews LIMIT 5 ) ); The results include the following columns: embedding : an array of double to represent the generated embeddings. status : the API response status for the corresponding row.

