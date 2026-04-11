---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:07:37.583Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Dataflow vector embedding ETL for AlloyDB"
feature_slug: "dataflow-vector-embedding-etl-for-alloydb"
latest_feature_date: "2025-05-07"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/ai/build-etl-pipeline-alloydb-dataflow"
  - "https://docs.cloud.google.com/alloydb/docs/ai/generate-manage-auto-embeddings-for-tables"
  - "https://docs.cloud.google.com/alloydb/docs/reference/model-endpoint"
keywords:
  - "Dataflow vector embedding pipeline"
  - "Dataflow job for embeddings"
  - "embedding ingestion pipeline"
  - "Dataflow embedding pipeline"
  - "ingest embeddings into AlloyDB"
  - "vector embedding ETL"
  - "embedding ETL"
  - "generate embeddings"
---

# Dataflow vector embedding ETL for AlloyDB

Product: AlloyDB
Coverage: LOW

## Step 02 Summary

AlloyDB supports building a Dataflow-based vector embedding ETL pipeline to generate and ingest embeddings into AlloyDB.

## Extended Definition

AlloyDB supports building a Dataflow-based vector embedding ETL pipeline to generate and ingest embeddings into AlloyDB.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/ai/build-etl-pipeline-alloydb-dataflow](https://docs.cloud.google.com/alloydb/docs/ai/build-etl-pipeline-alloydb-dataflow)
- [https://docs.cloud.google.com/alloydb/docs/ai/generate-manage-auto-embeddings-for-tables](https://docs.cloud.google.com/alloydb/docs/ai/generate-manage-auto-embeddings-for-tables)
- [https://docs.cloud.google.com/alloydb/docs/reference/model-endpoint](https://docs.cloud.google.com/alloydb/docs/reference/model-endpoint)

## Supporting Pages

### "Build realtime vector embedding pipeline for AlloyDB with Dataflow \_|\_\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/build-etl-pipeline-alloydb-dataflow](https://docs.cloud.google.com/alloydb/docs/ai/build-etl-pipeline-alloydb-dataflow)
- Source ID: `site-docs-root`
- Final score: 40
- Re-rank relevance: STRONG
- Re-rank rationale: It provides direct setup and implementation guidance for a Dataflow/Apache Beam pipeline that generates and writes vector embeddings into AlloyDB for PostgreSQL.

Evidence snippets:
- Configure the embedding handler to generate embeddings The VertexAITextEmbeddings() class defines the text embedding model that creates vector embeddings.
- The pipeline uses this sample data as input, along with the embedding model, to generate embeddings.
- For more information, see Generate embeddings with HuggingFace .

### "Generate and manage auto vector embeddings for large tables \_|\_ AlloyDB\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/generate-manage-auto-embeddings-for-tables](https://docs.cloud.google.com/alloydb/docs/ai/generate-manage-auto-embeddings-for-tables)
- Source ID: `site-docs-root-2`
- Final score: 26
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Newly added partition: if you add a new partition to the table, you can generate embeddings for it by calling ai.refresh embeddings on the new partition. -- Add a new partition CREATE TABLE documents africa PARTITION OF documents FOR VALUES IN ( 'africa' ); -- Refresh embeddings for the new partition CALL ai . refresh embeddings ( table name = > 'documents africa' , embedding column = > 'content embeddings' ); Newly attached partition: to attach an existing table as a partition, first use the ai.embedding prepare partition procedure to ensure its schema is compatible with the partitioned table.
- OpenAI embedding model To generate embeddings using the registered text-embedding-3-small model endpoint provided by OpenAI, run the following statement: CALL ai . initialize embeddings ( model id = > 'text-embedding-3-small' , table name = > 'user reviews' , content column = > 'content' , embedding column = > 'content embeddings' ); Custom embedding models For your own or externally supported models, you must define input and output transform functions and register them with ai.create model .
- To regenerate embeddings for the entire table or to recover from an interrupted ai.initialize embeddings() call in this mode, you must first drop the configuration using the ai.drop embedding config() function and then reissue the ai.initialize embeddings() call.
- This process, which often uses a mechanism similar to a database trigger to automatically generate embeddings when the content column is updated, can introduce overhead and slow down update operations.

### "Model endpoint management reference \_|\_ AlloyDB for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/model-endpoint](https://docs.cloud.google.com/alloydb/docs/reference/model-endpoint)
- Source ID: `site-api-reference`
- Final score: 24
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You must create a transform input function to transform input of the prediction function to the model specific input, and a transform output function to transform model specific output to the prediction function output.The function is also available in the ai schema The following shows how to generate embeddings: SELECT google ml . embedding ( model id = > ' MODEL ID ' , content = > ' CONTENT ' ); Parameter Description MODEL ID A unique ID for the model endpoint that you define.
- Prediction functions Use this reference to understand parameters for functions that let you generate embeddings or invoke predictions. google ml.embedding() function For text embedding models without built-in support, the input and output parameters are unique to a model and need to be transformed for the function to call the model.
- Here is the review: ai.generate() / google ml.generate() function The following shows how to generate embeddings using the default embedding model: SELECT ai . generate ( model id = > ' MODEL ID ' , prompt = > ' PROMPT ' ); Parameter Description MODEL ID (Optional) A unique ID for the model endpoint that you define.
- The ai schema provides the following functions to generate embeddings using the models registered under the ai schema: The ai.text embedding ( Preview ) SQL function in the AI functions, which generates single text embedding for a given query when using multimodal endpoint.

