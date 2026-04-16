---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.418Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Stored columns and pre-filtering for vector search"
feature_slug: "stored-columns-and-pre-filtering-for-vector-search"
latest_feature_date: "2024-09-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/vector-search-intro"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/information-schema-index-columns"
keywords:
  - "stored"
  - "columns"
  - "pre"
  - "filtering"
  - "vector"
  - "search"
  - "bigquery"
  - "indexes"
---

# Stored columns and pre-filtering for vector search

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery vector indexes can store columns and support pre-filtering in vector searches to improve query efficiency.

## Extended Definition

BigQuery vector indexes can store columns and support pre-filtering in vector searches to improve query efficiency.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/vector-search-intro](https://docs.cloud.google.com/bigquery/docs/vector-search-intro)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/information-schema-index-columns](https://docs.cloud.google.com/bigquery/docs/information-schema-index-columns)

## Supporting Pages

### "Introduction to embeddings and vector search \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/vector-search-intro](https://docs.cloud.google.com/bigquery/docs/vector-search-intro)
- Source ID: `site-docs-root`
- Final score: 183
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Some possible use cases are as follows: Retrieval-augmented generation (RAG) : Parse documents, perform vector search on content, and generate summarized answers to natural language questions using Gemini models, all within BigQuery.
- When you use vector indexes with vector search, you can take advantage of foundational technologies like inverted file indexing (IVF) and the ScaNN algorithm .
- For a notebook that illustrates this scenario, see Log Anomaly Detection & Investigation with Text Embeddings + BigQuery Vector Search .
- Introduction to embeddings and vector search This document provides an overview of embeddings and vector search in BigQuery.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- Required permissions To get the permissions that you need to alter vector indexes, ask your administrator to grant you the BigQuery Data Editor ( roles/bigquery.dataEditor ) or BigQuery Data Owner ( roles/bigquery.dataOwner ) IAM role on your table.
- BigQuery returns an error if any column name is not a STRING or does not contain a STRING field, or if you call CREATE SEARCH INDEX on ALL COLUMNS of a table which contains no STRING fields.
- The table schema contains 2 columns: transaction id: An integer transaction date: A date The table option list specifies the: Partition expiration: Three days Description: A table partitioned by transaction date Creating a partitioned table from the result of a query The following example creates a partitioned table named days with rain in mydataset using a DATE column: CREATE TABLE mydataset . days with rain PARTITION BY date OPTIONS ( partition expiration days = 365 , description = "weather stations with precipitation, partitioned by day" ) AS SELECT DATE ( CAST ( year AS INT64 ), CAST ( mo AS INT64 ), CAST ( da AS INT64 )) AS date , ( SELECT ANY VALUE ( name ) FROM bigquery-public-data.noaa gsod.stations AS stations WHERE stations . usaf = stn ) AS station name , -- Stations can have multiple names prcp FROM bigquery-public-data.noaa gsod.gsod2017 AS weather WHERE prcp != 99.9 -- Filter unknown values AND prcp > 0 -- Filter stations/days with no precipitation If you haven't configured a default project, prepend a project ID to the dataset name in the example SQL, and enclose the name in backticks if project id contains special characters: project id.dataset.table .
- You can add Spark properties using the following format: [("key1","value1"),("key2", "value2")] For example: bq query --nouse legacy sql --dry run 'CREATE PROCEDURE my bq project.my dataset.spark proc() WITH CONNECTION my-project-id.us.my-connection OPTIONS( engine="SPARK", main file uri="gs://my-bucket/my-pyspark-main.py", properties=[ ("spark.executor.instances", "3"), ("spark.yarn.am.memory", "3g") ]) LANGUAGE PYTHON' Error in query string: Invalid value: \ Invalid properties: \ Attempted to set unsupported properties: \ [ spark:spark.yarn.am.memory ] at [ 1 :1 ] Note: You can use the BigQuery dry run feature to validate your stored procedure without creating it. main file uri STRING The Cloud Storage URI of the main Python, Scala, or Java JAR file of the Spark application.

### SEARCH_INDEX_COLUMNS view \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/information-schema-index-columns](https://docs.cloud.google.com/bigquery/docs/information-schema-index-columns)
- Source ID: `site-docs-reference-3`
- Final score: 143
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- SEARCH INDEX COLUMNS The result is similar to the following: +------------+------------+-------------------+------------------+ table name index name index column name index field path +------------+------------+-------------------+------------------+ my table my index a a my table my index c c.e my table my index c c.f.g +------------+------------+-------------------+------------------+ The following query joins the INFORMATION SCHEMA.SEARCH INDEX COLUMNS view with the INFORMATION SCHEMA.SEARCH INDEXES and INFORMATION SCHEMA.COLUMNS views to include the search index status and the data type of each column: SELECT index columns view . index catalog AS project name , index columns view . index SCHEMA AS dataset name , indexes view .
- SEARCH INDEX COLUMNS index columns view ON indexes view .
- The INFORMATION SCHEMA.SEARCH INDEX COLUMNS view has the following schema: Column name Data type Value index catalog STRING The name of the project that contains the dataset. index schema STRING The name of the dataset that contains the index. table name STRING The name of the base table that the index is created on. index name STRING The name of the index. index column name STRING The name of the top-level indexed column. index field path STRING The full path of the expanded indexed field, starting with the column name.
- CREATE TABLE dataset . my table ( a STRING , b INT64 , c STRUCT < d INT64 , e ARRAY<STRING> , f STRUCT<g STRING , h INT64 >> ) AS SELECT 'hello' AS a , 10 AS b , ( 20 , [ 'x' , 'y' ] , ( 'z' , 30 )) AS c ; CREATE SEARCH INDEX my index ON dataset . my table ( ALL COLUMNS ); The following query extracts information on which fields are indexed.

