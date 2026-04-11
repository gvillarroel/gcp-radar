---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.338Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery AI.GENERATE_EMBEDDING with remote embedding models"
feature_slug: "bigquery-ai-generate-embedding-with-remote-embedding-models"
latest_feature_date: "2026-03-06"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/generate-text-embedding-tutorial-open-models"
  - "https://docs.cloud.google.com/bigquery/docs/vector-index-text-search-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/vector-search-intro"
keywords:
  - "embedding generation in SQL"
  - "CREATE MODEL options REMOTE"
  - "remote model inference"
  - "remote embedding model"
  - "AI.GENERATE_EMBEDDING"
  - "AI function embedding"
  - "GENERATE_EMBEDDING"
  - "MODEL_TYPE REMOTE"
---

# BigQuery AI.GENERATE_EMBEDDING with remote embedding models

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

BigQuery now supports using the AI.GENERATE_EMBEDDING function with remote models created in BigQuery for generating embeddings.

## Extended Definition

BigQuery supports embedding generation in SQL through the `AI.GENERATE_EMBEDDING` function, including models defined as remote models in BigQuery ML. The documented workflows show creating a remote model (for example from an open-source embedding model) and calling `GENERATE EMBEDDING` in SQL to produce embeddings for text from table columns, with results including embedding vectors (and associated status for each row). For supported model types, the function also applies to structured table data and can be used with multimodal content sources.

## Evidence Summary

These pages document how to create and use remote models in BigQuery ML with `AI.GENERATE_EMBEDDING`, including SQL examples for generating text (and supported multimodal) embeddings from table data and the expected output shape.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/generate-text-embedding-tutorial-open-models](https://docs.cloud.google.com/bigquery/docs/generate-text-embedding-tutorial-open-models)
- [https://docs.cloud.google.com/bigquery/docs/vector-index-text-search-tutorial](https://docs.cloud.google.com/bigquery/docs/vector-index-text-search-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/vector-search-intro](https://docs.cloud.google.com/bigquery/docs/vector-search-intro)

## Supporting Pages

### "Generate text embeddings by using an open model and the AI.GENERATE_EMBEDDING\

- URL: [https://docs.cloud.google.com/bigquery/docs/generate-text-embedding-tutorial-open-models](https://docs.cloud.google.com/bigquery/docs/generate-text-embedding-tutorial-open-models)
- Source ID: `site-docs-root-2`
- Final score: 84
- Re-rank relevance: STRONG
- Re-rank rationale: The tutorial is centered on calling AI.GENERATE_EMBEDDING with a remote model to generate text embeddings, including required setup and IAM permissions.

Evidence snippets:
- Generate text embeddings by using an open model and the AI.GENERATE EMBEDDING function This tutorial shows you how to create a remote model that's based on the open-source text embedding model Qwen3-Embedding-0.6B , and then how to use that model with the AI.GENERATE EMBEDDING function to embed movie reviews from the bigquery-public-data.imdb.reviews public table.
- Perform text embedding Perform text embedding on IMDB movie reviews by using the remote model and the AI.GENERATE EMBEDDING function: In the Google Cloud console, go to the BigQuery page.
- GENERATE EMBEDDING ( MODEL bqml tutorial . qwen3 embedding model , ( SELECT review AS content , FROM bigquery - public - data . imdb . reviews LIMIT 5 ) ); The results include the following columns: embedding : an array of double to represent the generated embeddings. status : the API response status for the corresponding row.

### "Perform semantic search and retrieval-augmented generation \_|\_ BigQuery\

- URL: [https://docs.cloud.google.com/bigquery/docs/vector-index-text-search-tutorial](https://docs.cloud.google.com/bigquery/docs/vector-index-text-search-tutorial)
- Source ID: `site-docs-root-2`
- Final score: 56
- Re-rank relevance: STRONG
- Re-rank rationale: The documentation explicitly combines remote BigQuery models with the AI.GENERATE EMBEDDING function to generate embeddings.

Evidence snippets:
- Generate text embeddings Generate text embeddings from patent abstracts using the AI.GENERATE EMBEDDING function , and then write them to a BigQuery table so that they can be searched.
- Embedding generation using the AI.GENERATE EMBEDDING function might fail due to Vertex AI LLM quotas or service unavailability.
- Using the remote model with the AI.GENERATE EMBEDDING function to generate embeddings from text in a BigQuery table.
- GENERATE EMBEDDING ( MODEL bqml tutorial.embedding model , ( SELECT 'improving password security' AS content )) ), top k => 5 , options => '{"fraction lists to search": 0.01}' ) The output is similar to the following: +-----------------------------+--------------------+-------------------------------------------------+-------------------------------------------------+ query publication number title abstract +-----------------------------+--------------------+-------------------------------------------------+-------------------------------------------------+ improving password security SG-120868-A1 Data storage device security method and a...

### "Introduction to embeddings and vector search \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/vector-search-intro](https://docs.cloud.google.com/bigquery/docs/vector-search-intro)
- Source ID: `site-docs-root`
- Final score: 48
- Re-rank relevance: N/A

Evidence snippets:
- For multimodal embedding models, AI.GENERATE EMBEDDING also works with visual content from either standard table columns that contain ObjectRef values , or from object tables .
- Generate a table of embeddings You can use the AI.GENERATE EMBEDDING to create a table that has embeddings for all of the data in a column of your input table.
- Use the following topics to try embedding generation in BigQuery ML: Generate text , images , or video by using the AI.GENERATE EMBEDDING function.
- For all types of supported models, AI.GENERATE EMBEDDING works with structured data in standard tables .

