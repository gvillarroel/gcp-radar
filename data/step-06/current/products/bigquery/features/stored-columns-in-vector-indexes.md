---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.462Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Stored columns in vector indexes"
feature_slug: "stored-columns-in-vector-indexes"
latest_feature_date: "2024-05-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/vector-search-intro"
  - "https://docs.cloud.google.com/bigquery/docs/autonomous-embedding-generation"
keywords:
  - "stored"
  - "columns"
  - "vector"
  - "indexes"
  - "bigquery"
  - "can"
  - "store"
  - "improve"
---

# Stored columns in vector indexes

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery vector indexes can store columns to improve query efficiency.

## Extended Definition

BigQuery vector indexes can store columns to improve query efficiency.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/vector-search-intro](https://docs.cloud.google.com/bigquery/docs/vector-search-intro)
- [https://docs.cloud.google.com/bigquery/docs/autonomous-embedding-generation](https://docs.cloud.google.com/bigquery/docs/autonomous-embedding-generation)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 148
- Re-rank relevance: N/A

Evidence snippets:
- You can add Spark properties using the following format: [("key1","value1"),("key2", "value2")] For example: bq query --nouse legacy sql --dry run 'CREATE PROCEDURE my bq project.my dataset.spark proc() WITH CONNECTION my-project-id.us.my-connection OPTIONS( engine="SPARK", main file uri="gs://my-bucket/my-pyspark-main.py", properties=[ ("spark.executor.instances", "3"), ("spark.yarn.am.memory", "3g") ]) LANGUAGE PYTHON' Error in query string: Invalid value: \ Invalid properties: \ Attempted to set unsupported properties: \ [ spark:spark.yarn.am.memory ] at [ 1 :1 ] Note: You can use the BigQuery dry run feature to validate your stored procedure without creating it. main file uri STRING The Cloud Storage URI of the main Python, Scala, or Java JAR file of the Spark application.
- Syntax CREATE [ OR REPLACE ] VECTOR INDEX [ IF NOT EXISTS ] index name ON table name ( column name ) [ STORING ( stored column name [ , ... ] ) ] [ PARTITION BY partition expression ] OPTIONS ( index option list ); Arguments OR REPLACE : Replaces any vector index with the same name if it exists.
- Required permissions To get the permissions that you need to alter vector indexes, ask your administrator to grant you the BigQuery Data Editor ( roles/bigquery.dataEditor ) or BigQuery Data Owner ( roles/bigquery.dataOwner ) IAM role on your table.
- BigQuery supports stored procedures for Apache Spark that are written in Python, Java, or Scala. pyspark code : The PySpark code for the stored procedure for Apache Spark if you want to pass the body of the procedure inline.

### "Introduction to embeddings and vector search \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/vector-search-intro](https://docs.cloud.google.com/bigquery/docs/vector-search-intro)
- Source ID: `site-docs-root`
- Final score: 148
- Re-rank relevance: N/A

Evidence snippets:
- The amount of bytes stored as embeddings and indexes are subject to active storage costs .
- The results are stored in BigQuery.
- When a vector index is used, the VECTOR SEARCH and AI.SEARCH functions use the Approximate Nearest Neighbor search technique to improve vector search performance, with the trade-off of reducing recall and so returning more approximate results.
- Some possible use cases are as follows: Retrieval-augmented generation (RAG) : Parse documents, perform vector search on content, and generate summarized answers to natural language questions using Gemini models, all within BigQuery.

### Autonomous embedding generation \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/autonomous-embedding-generation](https://docs.cloud.google.com/bigquery/docs/autonomous-embedding-generation)
- Source ID: `site-docs-reference-5`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- Note: To give feedback or request support for this feature, contact bq-vector-search@google.com This document describes how to use autonomous embedding generation for your data, which lets BigQuery maintain a column of embeddings on a table based on a source column.
- EMBED ( STRING COL , connection id => CONNECTION ID , endpoint => ENDPOINT ) ) STORED OPTIONS ( asynchronous = TRUE ) ; The background embedding generation job starts shortly after your table is created or altered, or after you update data in the source column.
- EMBED ( STRING COL , { connection id => CONNECTION ID , endpoint => ENDPOINT model => MODEL } ) ) STORED OPTIONS ( asynchronous = TRUE ) ); Replace the following: DATASET ID : The name of the dataset in which you want to create the table.
- AI.EMBED(description, model => 'embeddinggemma-300m') ) STORED OPTIONS ( asynchronous = TRUE ) ); The following query inserts some product names and descriptions into the table.

