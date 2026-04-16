---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.235Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner LangChain integration"
feature_slug: "spanner-langchain-integration"
latest_feature_date: "2024-04-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/backfill-embeddings"
  - "https://docs.cloud.google.com/spanner/docs/ml-tutorial-embeddings"
  - "https://docs.cloud.google.com/spanner/docs/backup/restore-backup-overview"
keywords:
  - "document"
  - "langchain"
  - "store"
  - "integration"
  - "vector"
  - "supports"
---

# Spanner LangChain integration

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner now supports integration with LangChain for vector store, document loader, and chat message history objects.

## Extended Definition

Spanner now supports integration with LangChain for vector store, document loader, and chat message history objects.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/backfill-embeddings](https://docs.cloud.google.com/spanner/docs/backfill-embeddings)
- [https://docs.cloud.google.com/spanner/docs/ml-tutorial-embeddings](https://docs.cloud.google.com/spanner/docs/ml-tutorial-embeddings)
- [https://docs.cloud.google.com/spanner/docs/backup/restore-backup-overview](https://docs.cloud.google.com/spanner/docs/backup/restore-backup-overview)

## Supporting Pages

### "Generate vector embeddings for textual data in bulk using partitioned DML\

- URL: [https://docs.cloud.google.com/spanner/docs/backfill-embeddings](https://docs.cloud.google.com/spanner/docs/backfill-embeddings)
- Source ID: `site-docs-root`
- Final score: 99
- Re-rank relevance: N/A

Evidence snippets:
- This document explains how to generate and backfill vector embeddings in bulk for textual data ( STRING or JSON ) that is stored in Spanner using SQL and the Vertex AI text embedding models .
- Home Documentation Databases Spanner Guides Send feedback Generate vector embeddings for textual data in bulk using partitioned DML Stay organized with collections Save and categorize content based on your preferences.
- ML PREDICT ROW ( 'projects/ PROJECT /locations/ LOCATION /publishers/google/models/ $MODEL NAME ' , JSONB BUILD OBJECT ( 'instances' , JSONB BUILD ARRAY ( JSONB BUILD OBJECT ( 'content' , description )))) FROM Products LIMIT 10 ; Replace the following: PROJECT : the project hosting the Vertex AI endpoint LOCATION : the location of the Vertex AI endpoint MODEL NAME : the name of the Vertex AI text embedding model Update the source table to include additional columns to store the embeddings Next, update the source table schema to include an additional column of the data type ARRAY<FLOAT32> to store the generated embeddings: GoogleSQL ALTER TABLE TABLE NAME ADD COLUMN EMBEDDING COLUMN NAME ARRAY<FLOAT32> ; Replace the following: TABLE NAME : the name of the source table EMBEDDING COLUMN NAME : the name of the column in which you want to add generated embeddings PostgreSQL ALTER TABLE TABLE NAME ADD COLUMN EMBEDDING COLUMN NAME real []; Replace the following: TABLE NAME : the name of the source table EMBEDDING COLUMN NAME : the name of the column in which you want to add generated embeddings For example, using the products table example, run: GoogleSQL ALTER TABLE Products ADD COLUMN desc embed ARRAY<FLOAT32> ; PostgreSQL ALTER TABLE Products ADD COLUMN desc embed real []; You can add another column to manage the version of the embedding model.
- GoogleSQL CREATE TABLE Products ( product id INT64 NOT NULL , name STRING ( MAX ), description STRING ( MAX ) ) PRIMARY KEY ( product id ); PostgreSQL CREATE TABLE Products ( product id INT8 NOT NULL , name TEXT , description TEXT , PRIMARY KEY ( product id ) ); Your goal is to generate vector embeddings for the description column in this table to find similar items to recommend to customers to improve their shopping experience using vector search .

### Get Vertex AI text embeddings \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/ml-tutorial-embeddings](https://docs.cloud.google.com/spanner/docs/ml-tutorial-embeddings)
- Source ID: `site-docs-root`
- Final score: 82
- Re-rank relevance: N/A

Evidence snippets:
- ML PREDICT ROW ( 'projects/ PROJECT /locations/ LOCATION /publishers/google/models/ $MODEL NAME ' , JSONB BUILD OBJECT ( 'instances' , JSONB BUILD ARRAY ( JSONB BUILD OBJECT ( 'content' , $ 1 , 'task type' , 'RETRIEVAL QUERY' ) ), 'parameters' , JSONB BUILD OBJECT ( 'outputDimensionality' , 768 ) ) ) - > 'predictions' - > 0 - > 'embeddings' - > 'values' ) ) AS distance FROM Products p ORDER BY distance LIMIT 5 ; Replace the following: PROJECT : the project hosting the Vertex AI endpoint LOCATION : the location of the Vertex AI endpoint MODEL NAME : the name of the Vertex AI text embedding model Store text embeddings After generating the embeddings in a read-only transaction, store them in Spanner so they can be managed with your operational data.
- ML PREDICT ROW ( 'projects/ PROJECT /locations/ LOCATION /publishers/google/models/ $MODEL NAME ' , JSONB BUILD OBJECT ( 'instances' , JSONB BUILD ARRAY ( JSONB BUILD OBJECT ( 'content' , $ 1 ))) ) - > 'predictions' - > 0 - > 'embeddings' - > 'values' ) WHERE id = $ 2 ; Replace the following: PROJECT : the project hosting the Vertex AI endpoint LOCATION : the location of the Vertex AI endpoint MODEL NAME : the name of the Vertex AI text embedding model What's next Learn how to use Vertex AI Vector Search to search for semantically similar items.
- ML PREDICT ROW ( 'projects/ PROJECT /locations/ LOCATION /publishers/google/models/ $MODEL NAME ' , '{"instances": [{"content": "A product description"}]}' :: jsonb ) - > 'predictions' - > 0 - > 'embeddings' - > 'values' ; Replace the following: PROJECT : the project hosting the Vertex AI endpoint LOCATION : the location of the Vertex AI endpoint MODEL NAME : the name of the Vertex AI text embedding model To generate embeddings for data stored in a table, use the following SQL: SELECT id , spanner .
- ML PREDICT ROW ( 'projects/ PROJECT /locations/ LOCATION /publishers/google/models/ $MODEL NAME ' , JSONB BUILD OBJECT ( 'instances' , JSONB BUILD ARRAY ( JSONB BUILD OBJECT ( 'content' , p . description , 'task type' , 'RETRIEVAL DOCUMENT' ) ), 'parameters' , JSONB BUILD OBJECT ( 'outputDimensionality' , 768 ) ) ) - > 'predictions' - > 0 - > 'embeddings' - > 'values' ); SELECT p . product id , p . name , p . description , spanner .

### Restore overview \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/backup/restore-backup-overview](https://docs.cloud.google.com/spanner/docs/backup/restore-backup-overview)
- Source ID: `site-docs-root`
- Final score: 78
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Databases Spanner Guides Send feedback Restore overview Stay organized with collections Save and categorize content based on your preferences.
- You can use restore from a backup in the following ways: In the Google Cloud console Using the Google Cloud CLI Using the client libraries Using the REST or RPC APIs How database restoration from a backup works When you restore a Spanner database, you must specify a source backup and a new target database.
- If you need to restore from a backup in a different region or project for compliance or business continuity reasons, you can copy the backup to an instance in a separate region or project, then restore from the copied backup.
- Note the following caveats regarding the CREATING state: If you are restoring to a different instance, the restore operation belongs to the instance containing the restored database, not the instance containing the backup.

