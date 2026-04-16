---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.382Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Stored column usage information for vector search"
feature_slug: "stored-column-usage-information-for-vector-search"
latest_feature_date: "2025-01-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/vector-index-text-search-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/vector-search-intro"
  - "https://docs.cloud.google.com/bigquery/docs/information-schema-intro"
keywords:
  - "stored"
  - "column"
  - "usage"
  - "information"
  - "vector"
  - "search"
  - "bigquery"
  - "can"
---

# Stored column usage information for vector search

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery can display stored column usage information for query jobs that perform vector search with stored columns.

## Extended Definition

BigQuery can display stored column usage information for query jobs that perform vector search with stored columns.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/vector-index-text-search-tutorial](https://docs.cloud.google.com/bigquery/docs/vector-index-text-search-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/vector-search-intro](https://docs.cloud.google.com/bigquery/docs/vector-search-intro)
- [https://docs.cloud.google.com/bigquery/docs/information-schema-intro](https://docs.cloud.google.com/bigquery/docs/information-schema-intro)

## Supporting Pages

### "Introduction to embeddings and vector search \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/vector-search-intro](https://docs.cloud.google.com/bigquery/docs/vector-search-intro)
- Source ID: `site-docs-root`
- Final score: 196
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Some possible use cases are as follows: Retrieval-augmented generation (RAG) : Parse documents, perform vector search on content, and generate summarized answers to natural language questions using Gemini models, all within BigQuery.
- For a notebook that illustrates this scenario, see Log Anomaly Detection & Investigation with Text Embeddings + BigQuery Vector Search .
- Introduction to embeddings and vector search This document provides an overview of embeddings and vector search in BigQuery.
- Pricing The VECTOR SEARCH and AI.SEARCH functions and the CREATE VECTOR INDEX statement use BigQuery compute pricing .

### "Perform semantic search and retrieval-augmented generation \_|\_ BigQuery\

- URL: [https://docs.cloud.google.com/bigquery/docs/vector-index-text-search-tutorial](https://docs.cloud.google.com/bigquery/docs/vector-index-text-search-tutorial)
- Source ID: `site-docs-reference-2`
- Final score: 192
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Go to BigQuery In the query editor, run the following SQL statement: SELECT table name , index name , index status , coverage percentage , last refresh time , disable reason FROM PROJECT ID .bqml tutorial.INFORMATION SCHEMA.VECTOR INDEXES Replace PROJECT ID with your project ID.
- Go to BigQuery In the query editor, run the following SQL statement: SELECT query . query , base . publication number , base . title , base . abstract FROM VECTOR SEARCH ( TABLE bqml tutorial.embeddings , 'embedding' , ( SELECT embedding , content AS query FROM AI .
- You can check whether the index is ready to be used by querying the INFORMATION SCHEMA.VECTOR INDEXES view and verifying that the coverage percentage column value is greater than 0 and the last refresh time column value isn't NULL .
- Generate text augmented by vector search results Feed the search results as prompts to generate text with the AI.GENERATE TEXT function In the Google Cloud console, go to the BigQuery page.

### Introduction to INFORMATION_SCHEMA \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/information-schema-intro](https://docs.cloud.google.com/bigquery/docs/information-schema-intro)
- Source ID: `site-docs-reference-3`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- The following table lists all INFORMATION SCHEMA views that you can query to retrieve metadata information: Resource type INFORMATION SCHEMA View Access control OBJECT PRIVILEGES science BI Engine BI CAPACITIES BI CAPACITY CHANGES Configurations EFFECTIVE PROJECT OPTIONS ORGANIZATION OPTIONS ORGANIZATION OPTIONS CHANGES PROJECT OPTIONS PROJECT OPTIONS CHANGES Datasets SCHEMATA SCHEMATA LINKS SCHEMATA OPTIONS SHARED DATASET USAGE SCHEMATA REPLICAS SCHEMATA REPLICAS BY FAILOVER RESERVATION Graphs PROPERTY GRAPHS Jobs JOBS BY PROJECT † JOBS BY USER JOBS BY FOLDER JOBS BY ORGANIZATION Jobs by timeslice JOBS TIMELINE BY PROJECT † JOBS TIMELINE BY USER JOBS TIMELINE BY FOLDER JOBS TIMELINE BY ORGANIZATION Recommendations and insights INSIGHTS science RECOMMENDATIONS science RECOMMENDATIONS BY ORGANIZATION science Reservations ASSIGNMENTS BY PROJECT † ASSIGNMENT CHANGES BY PROJECT † CAPACITY COMMITMENTS BY PROJECT † CAPACITY COMMITMENT CHANGES BY PROJECT † RESERVATIONS BY PROJECT † RESERVATION CHANGES BY PROJECT † RESERVATIONS TIMELINE BY PROJECT † Routines PARAMETERS ROUTINES ROUTINE OPTIONS Search indexes SEARCH INDEXES SEARCH INDEX COLUMNS SEARCH INDEX COLUMN OPTIONS science SEARCH INDEX OPTIONS SEARCH INDEXES BY ORGANIZATION Sessions SESSIONS BY PROJECT † SESSIONS BY USER Streaming STREAMING TIMELINE BY PROJECT † STREAMING TIMELINE BY FOLDER STREAMING TIMELINE BY ORGANIZATION Tables COLUMNS COLUMN FIELD PATHS CONSTRAINT COLUMN USAGE KEY COLUMN USAGE PARTITIONS science TABLES TABLE OPTIONS TABLE CONSTRAINTS TABLE SNAPSHOTS TABLE STORAGE BY PROJECT † TABLE STORAGE BY FOLDER TABLE STORAGE BY ORGANIZATION TABLE STORAGE USAGE TIMELINE science TABLE STORAGE USAGE TIMELINE BY FOLDER science TABLE STORAGE USAGE TIMELINE BY ORGANIZATION science Vector indexes VECTOR INDEXES VECTOR INDEX COLUMNS VECTOR INDEX OPTIONS Views VIEWS MATERIALIZED VIEWS Write API WRITE API TIMELINE BY PROJECT † WRITE API TIMELINE BY FOLDER WRITE API TIMELINE BY ORGANIZATION † For BY PROJECT views, the BY PROJECT suffix is optional.
- SCHEMATA ; The following INFORMATION SCHEMA views don't support region qualifiers: INFORMATION SCHEMA.PARTITIONS INFORMATION SCHEMA.SEARCH INDEXES INFORMATION SCHEMA.SEARCH INDEX COLUMNS INFORMATION SCHEMA.SEARCH INDEX OPTIONS If neither a region qualifier nor a dataset qualifier is specified, you will receive an error.
- TABLES ; The following INFORMATION SCHEMA views support dataset qualifiers: COLUMNS COLUMN FIELD PATHS MATERIALIZED VIEWS PARAMETERS PARTITIONS ROUTINES ROUTINE OPTIONS TABLES TABLE OPTIONS VIEWS Region qualifier Region qualifiers are represented using a region- REGION syntax.
- Introduction to INFORMATION SCHEMA The BigQuery INFORMATION SCHEMA views are read-only, system-defined views that provide metadata information about your BigQuery objects.

