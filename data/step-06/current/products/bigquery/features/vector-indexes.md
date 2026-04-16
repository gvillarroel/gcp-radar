---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.514Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Vector indexes"
feature_slug: "vector-indexes"
latest_feature_date: "2024-01-31"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/vector-search-intro"
  - "https://docs.cloud.google.com/bigquery/docs/inference-tutorial-mobilenet"
keywords:
  - "vector"
  - "indexes"
  - "bigquery"
  - "supports"
  - "accelerate"
  - "search"
  - "approximate"
  - "results"
---

# Vector indexes

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery supports vector indexes to accelerate VECTOR_SEARCH with approximate results.

## Extended Definition

BigQuery supports vector indexes to accelerate VECTOR_SEARCH with approximate results.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/vector-search-intro](https://docs.cloud.google.com/bigquery/docs/vector-search-intro)
- [https://docs.cloud.google.com/bigquery/docs/inference-tutorial-mobilenet](https://docs.cloud.google.com/bigquery/docs/inference-tutorial-mobilenet)

## Supporting Pages

### "Introduction to embeddings and vector search \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/vector-search-intro](https://docs.cloud.google.com/bigquery/docs/vector-search-intro)
- Source ID: `site-docs-root`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- When a vector index is used, the VECTOR SEARCH and AI.SEARCH functions use the Approximate Nearest Neighbor search technique to improve vector search performance, with the trade-off of reducing recall and so returning more approximate results.
- Limitations Queries that contain the VECTOR SEARCH or AI.SEARCH function aren't accelerated by BigQuery BI Engine .
- Some possible use cases are as follows: Retrieval-augmented generation (RAG) : Parse documents, perform vector search on content, and generate summarized answers to natural language questions using Gemini models, all within BigQuery.
- When you use vector indexes with vector search, you can take advantage of foundational technologies like inverted file indexing (IVF) and the ScaNN algorithm .

### "Tutorial: Run inference on an object table by using a feature vector model\

- URL: [https://docs.cloud.google.com/bigquery/docs/inference-tutorial-mobilenet](https://docs.cloud.google.com/bigquery/docs/inference-tutorial-mobilenet)
- Source ID: `site-docs-reference-2`
- Final score: 23
- Re-rank relevance: N/A

Evidence snippets:
- DECODE IMAGE ( data ), 224 , 224 , FALSE ) AS inputs FROM mobilenet inference test . sample images ) ); The results should look similar to the following: -------------------------------------------------------------------------------------------------------------- feature vector uri inputs — ------------------------------------------------------------------------------------------------------------- 0 .
- Go to BigQuery In the Editor pane, run the following SQL statement: CREATE EXTERNAL TABLE mobilenet inference test . sample images WITH CONNECTION us.lake-connection OPTIONS ( object metadata = 'SIMPLE' , uris = [ 'gs:// BUCKET NAME /flowers/ ' ] ); Replace BUCKET NAME with the name of the bucket you previously created. bq In Cloud Shell, run the bq mk command to create the connection: bq mk --table \ --external table definition = 'gs:// BUCKET NAME /flowers/ @us.lake-connection' \ --object metadata = SIMPLE \ mobilenet inference test.sample images Replace BUCKET NAME with the name of the bucket you previously created.
- To load the model into BigQuery ML, you need the following permissions: bigquery.jobs.create bigquery.models.create bigquery.models.getData bigquery.models.updateData To run inference, you need the following permissions: bigquery.tables.getData on the object table bigquery.models.getData on the model bigquery.jobs.create Costs In this document, you use the following billable components of Google Cloud: BigQuery : You incur storage costs for the object table you create in BigQuery.
- To create the connection resource, you need the following permissions: bigquery.connections.create bigquery.connections.get To grant permissions to the connection's service account, you need the following permission: resourcemanager.projects.setIamPolicy To create the object table, you need the following permissions: bigquery.tables.create bigquery.tables.update bigquery.connections.delegate To create the bucket, you need the storage.buckets.create permission.

### SEARCH_INDEXES view \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/information-schema-indexes](https://docs.cloud.google.com/bigquery/docs/information-schema-indexes)
- Source ID: `site-docs-reference-3`
- Final score: 21
- Re-rank relevance: N/A

Evidence snippets:
- SEARCH INDEXES WHERE index status = 'ACTIVE' ; The results should look like the following: +-------------+-------------+--------------------------------------------------------------------------------------+---------------------+----------------+ table name index name ddl coverage percentage analyzer +-------------+-------------+--------------------------------------------------------------------------------------+---------------------+----------------+ small table names index CREATE SEARCH INDEX names index ON my project.my dataset.small table(names) 0 NO OP ANALYZER large table logs index CREATE SEARCH INDEX logs index ON my project.my dataset.large table(ALL COLUMNS) 100 LOG ANALYZER +-------------+-------------+--------------------------------------------------------------------------------------+---------------------+----------------+ Troubleshooting To enable this view, you can set the value of enable info schema storage to TRUE on your project or organization.
- Schema When you query the INFORMATION SCHEMA.SEARCH INDEXES view, the query results contain one row for each search index in a dataset.
- The INFORMATION SCHEMA.SEARCH INDEXES view has the following schema: Column name Data type Value index catalog STRING The name of the project that contains the dataset. index schema STRING The name of the dataset that contains the index. table name STRING The name of the base table that the index is created on. index name STRING The name of the index. index status STRING The status of the index: ACTIVE , PENDING DISABLEMENT , TEMPORARILY DISABLED , or PERMANENTLY DISABLED .
- The following table explains the region scope for this view: View Name Resource scope Region scope [ PROJECT ID .] DATASET ID .INFORMATION SCHEMA.SEARCH INDEXES Dataset level Dataset location Replace the following: Optional: PROJECT ID : the ID of your Google Cloud project.

