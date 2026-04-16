---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.236Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner PostgreSQL ML_PREDICT_ROW() function"
feature_slug: "spanner-postgresql-ml-predict-row-function"
latest_feature_date: "2024-04-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/ml-tutorial"
  - "https://docs.cloud.google.com/spanner/docs/backfill-embeddings"
  - "https://docs.cloud.google.com/spanner/docs/information-schema-pg"
keywords:
  - "predict"
  - "generate"
  - "postgresql"
  - "adds"
---

# Spanner PostgreSQL ML_PREDICT_ROW() function

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Adds the ML_PREDICT_ROW() SQL function to Spanner for PostgreSQL to generate predictions directly from SQL.

## Extended Definition

Adds the ML_PREDICT_ROW() SQL function to Spanner for PostgreSQL to generate predictions directly from SQL.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/ml-tutorial](https://docs.cloud.google.com/spanner/docs/ml-tutorial)
- [https://docs.cloud.google.com/spanner/docs/backfill-embeddings](https://docs.cloud.google.com/spanner/docs/backfill-embeddings)
- [https://docs.cloud.google.com/spanner/docs/information-schema-pg](https://docs.cloud.google.com/spanner/docs/information-schema-pg)

## Supporting Pages

### Generate ML predictions using SQL \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/ml-tutorial](https://docs.cloud.google.com/spanner/docs/ml-tutorial)
- Source ID: `site-docs-root`
- Final score: 122
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Spanner Vertex AI integration gives you the ability to generate predictions using your SQL code by calling the ML.PREDICT function for GoogleSQL or the spanner.ML PREDICT ROW function for PostgreSQL.
- PostgreSQL Use the ML PREDICT ROW PostgreSQL function with the model selected from the Model Garden to generate your prediction.
- PostgreSQL Use the ML.PREDICT PostgreSQL function with the model in a Vertex AI endpoint to generate your prediction.
- PREDICT ( MODEL GeminiPro , ( SELECT "Is 7 a prime number?" AS prompt ), STRUCT ( 256 AS maxOutputTokens , 0.2 AS temperature , 40 as topK , 0.95 AS topP ) ); Expected output The expected out is as follows: + --------------------+ content + --------------------+ "Yes" + --------------------+ PostgreSQL Run the model select spanner . ml predict row ( '{ "endpoint": "projects/ PROJECT ID /locations/us-central1/publishers/google/models/gemini-pro", "default batch size": 1 }' :: jsonb , '{ "instances":[{"prompt": "Is 7 a prime number?"}], "parameters":{"maxOutputTokens":256, "topK": 40, "topP":0.96, "temperature":0.2} }' ); Expected output The expected out is the following: +--------------------+ content +--------------------+ "Yes" +--------------------+ Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "Generate vector embeddings for textual data in bulk using partitioned DML\

- URL: [https://docs.cloud.google.com/spanner/docs/backfill-embeddings](https://docs.cloud.google.com/spanner/docs/backfill-embeddings)
- Source ID: `site-docs-root`
- Final score: 110
- Re-rank relevance: N/A

Evidence snippets:
- ML PREDICT ROW ( 'projects/ PROJECT /locations/ LOCATION /publishers/google/models/ $MODEL NAME ' , JSONB BUILD OBJECT ( 'instances' , JSONB BUILD ARRAY ( JSONB BUILD OBJECT ( 'content' , description )))) FROM Products LIMIT 10 ; Replace the following: PROJECT : the project hosting the Vertex AI endpoint LOCATION : the location of the Vertex AI endpoint MODEL NAME : the name of the Vertex AI text embedding model Update the source table to include additional columns to store the embeddings Next, update the source table schema to include an additional column of the data type ARRAY<FLOAT32> to store the generated embeddings: GoogleSQL ALTER TABLE TABLE NAME ADD COLUMN EMBEDDING COLUMN NAME ARRAY<FLOAT32> ; Replace the following: TABLE NAME : the name of the source table EMBEDDING COLUMN NAME : the name of the column in which you want to add generated embeddings PostgreSQL ALTER TABLE TABLE NAME ADD COLUMN EMBEDDING COLUMN NAME real []; Replace the following: TABLE NAME : the name of the source table EMBEDDING COLUMN NAME : the name of the column in which you want to add generated embeddings For example, using the products table example, run: GoogleSQL ALTER TABLE Products ADD COLUMN desc embed ARRAY<FLOAT32> ; PostgreSQL ALTER TABLE Products ADD COLUMN desc embed real []; You can add another column to manage the version of the embedding model.
- ML PREDICT ROW ( 'projects/ PROJECT /locations/ LOCATION /publishers/google/models/ $MODEL NAME ' , JSONB BUILD OBJECT ( 'instances' , JSONB BUILD ARRAY ( JSONB BUILD OBJECT ( 'content' , DATA COLUMN NAME ))) ) / @ remote udf max rows per rpc= MAX ROWS / - > 'predictions' - > 0 - > 'embeddings' - > 'values' ), EMBEDDING VERSION COLUMN = MODEL VERSION WHERE FILTER CONDITION ; Replace the following: TABLE NAME : the name of the table with the textual data EMBEDDING COLUMN NAME : the name of the column in which you want to add generated embeddings DATA COLUMN NAME : the name of the column with the textual data PROJECT : the project hosting the Vertex AI endpoint LOCATION : the location of the Vertex AI endpoint MODEL NAME : the name of the Vertex AI embedding model MODEL VERSION : the version of the Vertex AI embedding model MAX ROWS : the maximum number of rows per RPC EMBEDDING VERSION COLUMN : the column that manages the version of the text embedding model used to backfill your embeddings FILTER CONDITION : a partitionable filter condition that you want to apply An example backfill query for the products table: GoogleSQL UPDATE products SET products . desc embed = ( SELECT embeddings . values FROM SAFE .
- EMBEDDING VERSION COLUMN = MODEL VERSION WHERE FILTER CONDITION ; Replace the following: TABLE NAME : the name of the table with the textual data EMBEDDING COLUMN NAME : the name of the column in which you want to add generated embeddings DATA COLUMN NAME : the name of the column with the textual data MODEL NAME : the name of the Vertex AI embedding model MAX ROWS : the maximum number of rows per RPC EMBEDDING VERSION COLUMN : the column that manages the version of the embedding model used to backfill your embeddings MODEL VERSION : the version of the text embedding model FILTER CONDITION : a partitionable filter condition that you want to apply Using SAFE.ML.PREDICT returns NULL for failed requests.
- GoogleSQL CREATE TABLE Products ( product id INT64 NOT NULL , name STRING ( MAX ), description STRING ( MAX ) ) PRIMARY KEY ( product id ); PostgreSQL CREATE TABLE Products ( product id INT8 NOT NULL , name TEXT , description TEXT , PRIMARY KEY ( product id ) ); Your goal is to generate vector embeddings for the description column in this table to find similar items to recommend to customers to improve their shopping experience using vector search .

### "Information schema for PostgreSQL-dialect databases \_|\_ Spanner \_|\_\

- URL: [https://docs.cloud.google.com/spanner/docs/information-schema-pg](https://docs.cloud.google.com/spanner/docs/information-schema-pg)
- Source ID: `site-docs-reference`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- The GoogleSQL-specific columns can shift in position if PostgreSQL adds new columns to an information schema table.
- Automatically generated constraint names use a different format than open source PostgreSQL databases.
- Examples Return information about each table in the user's schema: SELECT t . table schema , t . table catalog , t . table name , t . parent table name FROM information schema . tables AS t WHERE t . table schema NOT IN ( 'pg catalog' , 'information schema' , 'SPANNER SYS' ) AND t . table type = 'BASE TABLE' ORDER BY t . table catalog , t . table schema , t . table name Return the name of all tables and views in the information schema for PostgreSQL-dialect databases: SELECT table name FROM information schema . tables WHERE table schema = "information schema" Return information about columns in the user table my table in the default schema: SELECT t . ordinal position , t . column name , t . data type , t . spanner type , t . is nullable FROM information schema . columns AS t WHERE t . table schema = 'public' AND t . table name = 'my table' ORDER BY t . ordinal position Return information about each index in the default schema in the current database: ## What's next {: #whats-next} + Learn about available Introspection tools to help you investigate database issues.
- For PostgreSQL-dialect databases, the default is public . change stream name character varying The name of the change stream. option name character varying The name of the change stream option. option type character varying The data type of the change stream option. option value character varying The value of the change stream option. change stream privileges This row-filtered view lists all fine-grained access control privileges granted on all change streams to any database role, including public .

