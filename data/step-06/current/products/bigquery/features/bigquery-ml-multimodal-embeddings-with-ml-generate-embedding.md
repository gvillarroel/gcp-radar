---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.480Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery ML multimodal embeddings with ML.GENERATE_EMBEDDING"
feature_slug: "bigquery-ml-multimodal-embeddings-with-ml-generate-embedding"
latest_feature_date: "2024-09-24"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/vector-search-intro"
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
  - "https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial"
keywords:
  - "multimodalembedding LLM"
  - "CREATE MODEL with GENERATE_EMBEDDING"
  - "MULTIMODALEMBEDDING"
  - "multimodal embeddings"
  - "multimodal embedding"
  - "ML.GENERATE_EMBEDDING"
  - "video embeddings"
  - "image embeddings"
---

# BigQuery ML multimodal embeddings with ML.GENERATE_EMBEDDING

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

BigQuery ML now supports ML.GENERATE_EMBEDDING with a Vertex AI multimodalembedding LLM to produce text, image, and video embeddings; BigQuery ML preview support for ML.GENERATE_EMBEDDING using a Vertex AI multimodalembedding LLM to create text-and-image embeddings.

## Extended Definition

BigQuery ML supports multimodal embedding generation via a SQL function for creating embeddings (documented as ML.GENERATE EMBEDDING, with AI.GENERATE EMBEDDING described as the newer preferred equivalent with the same functionality and simplified output naming). The workflow is to configure a remote model that points to a Vertex AI multimodal embedding endpoint (for example `multimodalembedding@001`) and run the BigQuery ML function or BigQuery DataFrames method on multimodal inputs, including visual content stored as `ObjectRef` columns or object tables, to create vectors for semantic search/retrieval tasks. The available documentation also labels this multimodal embedding capability as preview/Pre-GA.

## Evidence Summary

These pages confirm that BigQuery ML multimodal embeddings are produced through SQL/DataFrames workflows using Vertex AI multimodal embedding remote models, with both ML.GENERATE EMBEDDING and AI.GENERATE EMBEDDING references and preview status noted.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/vector-search-intro](https://docs.cloud.google.com/bigquery/docs/vector-search-intro)
- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- [https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial](https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial)

## Supporting Pages

### "Introduction to embeddings and vector search \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/vector-search-intro](https://docs.cloud.google.com/bigquery/docs/vector-search-intro)
- Source ID: `site-docs-root`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- Generate and search multimodal embeddings Perform semantic search and retrieval-augmented generation Autonomous embedding generation Preview This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- For multimodal embedding models, AI.GENERATE EMBEDDING also works with visual content from either standard table columns that contain ObjectRef values , or from object tables .

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- Use generative AI to analyze multimodal data and generate embeddings by using BigQuery ML SQL functions or BigQuery DataFrames methods with Gemini and multimodal embedding models.
- AI.GENERATE EMBEDDING is the new, preferred version of ML.GENERATE EMBEDDING , which has the same functionality but with simplified column output names.
- Try this feature with the Generate text embeddings by using an open model and the ML.GENERATE EMBEDDING function tutorial.
- You can then use the ML.GENERATE EMBEDDING function with this remote model to generate embeddings.

### "Analyze multimodal data with SQL and BigQuery DataFrames \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial](https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial)
- Source ID: `site-docs-root-2`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up ADC for a local development environment . gemini model = bbq . ml . create model ( "cymbal pets.gemini" , replace = True , connection name = "us.cymbal conn" , options = { "endpoint" : "gemini-2.5-flash" }, ) Create an embedding generation model Create a BigQuery ML remote model that represents a Vertex AI multimodal embedding model: Run the following to create the remote model: SQL CREATE OR REPLACE MODEL cymbal pets.embedding model REMOTE WITH CONNECTION us.cymbal conn OPTIONS ( ENDPOINT = 'multimodalembedding@001' ); BigQuery DataFrames Before trying this sample, follow the BigQuery DataFrames setup instructions in the BigQuery quickstart using BigQuery DataFrames .
- For more information, see Set up ADC for a local development environment . embedding model = bbq . ml . create model ( "cymbal pets.embedding model" , replace = True , connection name = "us.cymbal conn" , options = { "endpoint" : "multimodalembedding@001" }, ) Create a products mm table with multimodal data Create a products mm table that contains an image column populated with product images from the product images object table.

