---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:15:29.083Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Auto embedding generation"
feature_slug: "auto-embedding-generation"
latest_feature_date: "2025-11-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/ai/generate-manage-auto-embeddings-for-tables"
  - "https://docs.cloud.google.com/alloydb/docs/reference/model-endpoint"
  - "https://docs.cloud.google.com/alloydb/docs/ai/perform-vector-search"
keywords:
  - "creates"
  - "generation"
  - "embeddings"
  - "embedding"
  - "large"
  - "scale"
  - "auto"
---

# Auto embedding generation

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

Auto embedding generation creates large-scale embeddings in AlloyDB for semantic search and retrieval-augmented generation workloads.

## Extended Definition

Auto embedding generation creates large-scale embeddings in AlloyDB for semantic search and retrieval-augmented generation workloads.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/ai/generate-manage-auto-embeddings-for-tables](https://docs.cloud.google.com/alloydb/docs/ai/generate-manage-auto-embeddings-for-tables)
- [https://docs.cloud.google.com/alloydb/docs/reference/model-endpoint](https://docs.cloud.google.com/alloydb/docs/reference/model-endpoint)
- [https://docs.cloud.google.com/alloydb/docs/ai/perform-vector-search](https://docs.cloud.google.com/alloydb/docs/ai/perform-vector-search)

## Supporting Pages

### "Generate and manage auto vector embeddings for large tables \_|\_ AlloyDB\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/generate-manage-auto-embeddings-for-tables](https://docs.cloud.google.com/alloydb/docs/ai/generate-manage-auto-embeddings-for-tables)
- Source ID: `site-docs-reference`
- Final score: 275
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This solution is particularly useful for facilitating semantic search and Retrieval Augmented Generation (RAG) on text content, including the following: Creating initial vector embedding for a new table Generating embeddings after a large data import Refreshing embeddings after significant data changes Maintaining embeddings incrementally Understand auto vector embeddings Auto vector embeddings in AlloyDB provide a scalable way to automate the generation and maintenance of vector embeddings for your data.
- For large datasets, you can improve performance by refreshing embeddings for distinct partitions in parallel from different database connections: To refresh the entire table, run the following: CALL ai . refresh embeddings ( table name = > 'documents' , -- This is the root partitioned table embedding column = > 'content embeddings' ); To refresh a single partition, run the following: CALL ai . refresh embeddings ( table name = > 'documents eu' , embedding column = > 'content embeddings' ); Refresh embeddings for newly added or attached partitions The auto-embedding feature supports generating embeddings for partitions that are incorporated into your main table after the initial setup.
- CALL ai . refresh embeddings ( table name = > 'user reviews' , embedding column = > 'content embeddings' , batch size = > 50 -- Optional override ); Note: If you encounter an error like AutoEmbeddingGeneration: Request size is greater than 4MB , it means the request size for a batch has exceeded the maximum supported size of 4MB.
- Home Documentation Databases AlloyDB for PostgreSQL Guides Send feedback Generate and manage auto vector embeddings for large tables Stay organized with collections Save and categorize content based on your preferences.

### "Model endpoint management reference \_|\_ AlloyDB for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/model-endpoint](https://docs.cloud.google.com/alloydb/docs/reference/model-endpoint)
- Source ID: `site-api-reference`
- Final score: 139
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following example curl request creates embeddings based on the prompt and the model endpoint: curl -m 100 -X POST https://cymbal.com/models/text/embeddings/v1 \ -H "Content-Type: application/json" -d '{"prompt": ["AlloyDB Embeddings"]}' The following example response is returned: [[ 0.3522231 -0.35932037 0.10156056 0.17734447 -0.11606089 -0.17266059 0.02509351 0.20305622 -0.09787305 -0.12154685 -0.17313677 -0.08075467 0.06821183 -0.06896557 0.1171584 -0.00931572 0.11875633 -0.00077482 0.25604948 0.0519384 0.2034983 -0.09952664 0.10347155 -0.11935943 -0.17872004 -0.08706985 -0.07056875 -0.05929353 0.4177883 -0.14381726 0.07934926 0.31368294 0.12543282 0.10758053 -0.30210832 -0.02951015 0.3908268 -0.03091059 0.05302926 -0.00114946 -0.16233777 0.1117468 -0.1315904 0.13947351 -0.29569918 -0.12330773 -0.04354299 -0.18068913 0.14445548 0.19481727 ]] Based on this input and response, we can infer the following: The model expects JSON input through the prompt field.
- AlloyDB reserves, and creates, the ai schema. ai.text embedding() / google ml.text embedding() function The following shows how to generate text embeddings: SELECT ai . text embedding ( model id = > ' MODEL ID ' , content = > ' CONTENT ' ); Parameter Description MODEL ID A unique ID for the model endpoint that you define.
- The following example shows the header generation function that is used for this text embedding model endpoint when it is registered with model endpoint management: CREATE OR REPLACE FUNCTION header gen fn ( model id VARCHAR ( 100 ), input text TEXT ) RETURNS JSON LANGUAGE plpgsql AS $$ BEGIN RETURN json build object ( 'version' , '2024-01-01' ):: JSON ; END ; $$ ; Header generation function using API Key The following examples show how to set up authentication using the API key. embedding model CREATE OR REPLACE FUNCTION header gen func ( model id VARCHAR ( 100 ), input text TEXT ) RETURNS JSON LANGUAGE plpgsql AS $$ variable conflict use variable BEGIN RETURN json build object ( 'Authorization' , ' API KEY ' ):: JSON ; END ; $$ ; Replace the API KEY with the API key of the model provider. generic model CREATE OR REPLACE FUNCTION header gen func ( model id VARCHAR ( 100 ), response json JSON ) RETURNS JSON LANGUAGE plpgsql AS $$ variable conflict use variable DECLARE transformed output REAL []; BEGIN -- code to add Auth token to API request RETURN json build object ( 'x-api-key' , ' API KEY ' , 'anthropic-version' , '2023-06-01' ):: JSON ; END ; $$ ; Replace the API KEY with the API key of the model provider.
- The following example shows the input and output transform functions that is used for this model endpoint when it is registered with model endpoint management: input transform function CREATE OR REPLACE FUNCTION cymbal text input transform ( model id VARCHAR ( 100 ), input text TEXT ) RETURNS JSON LANGUAGE plpgsql AS $$ DECLARE transformed input JSON ; model qualified name TEXT ; BEGIN SELECT json build object ( 'prompt' , json build array ( input text )):: JSON INTO transformed input ; RETURN transformed input ; END ; $$ ; output transform function CREATE OR REPLACE FUNCTION cymbal text output transform ( model id VARCHAR ( 100 ), response json JSON ) RETURNS REAL [] LANGUAGE plpgsql AS $$ DECLARE transformed output REAL []; BEGIN SELECT ARRAY ( SELECT json array elements text ( response json - > 0 )) INTO transformed output ; RETURN transformed output ; END ; $$ ; HTTP header generation function The following shows signature for the header generation function that can be used with the google ml.embedding() prediction function when registering other text embedding model endpoints.

### "Perform a vector search \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/perform-vector-search](https://docs.cloud.google.com/alloydb/docs/ai/perform-vector-search)
- Source ID: `site-docs-reference-2`
- Final score: 127
- Re-rank relevance: N/A

Evidence snippets:
- To learn more about using ScaNN at scale, see Getting started with Vector Embeddings with AlloyDB AI .
- Note: If you have more than 100k rows in a table, we don't recommend using the embedding() function to generate stored embeddings on existing data in a table.
- To learn how to perform a vector search with Vertex AI embeddings, see Getting started with Vector Embeddings with AlloyDB AI .
- Get started with vector embeddings using AlloyDB AI .

