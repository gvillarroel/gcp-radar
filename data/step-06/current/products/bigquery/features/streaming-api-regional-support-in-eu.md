---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.921Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Streaming API regional support in EU"
feature_slug: "streaming-api-regional-support-in-eu"
latest_feature_date: "2015-12-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners"
  - "https://docs.cloud.google.com/bigquery/docs/loading-data"
keywords:
  - "streaming"
  - "regional"
  - "eu"
  - "lets"
  - "bigquery"
  - "stream"
  - "into"
  - "datasets"
---

# Streaming API regional support in EU

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Streaming API regional support in EU lets BigQuery stream data into datasets in EU locations.

## Extended Definition

Streaming API regional support in EU lets BigQuery stream data into datasets in EU locations.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- [https://docs.cloud.google.com/bigquery/docs/loading-data](https://docs.cloud.google.com/bigquery/docs/loading-data)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 134
- Re-rank relevance: N/A

Evidence snippets:
- Details If you want to rename a table that has data streaming into it, you must stop the streaming, commit any pending streams, and wait for BigQuery to indicate that streaming is not in use.
- You can use DDL commands to create, alter, and delete resources, such as the following: Datasets Tables Table schemas Table clones Table snapshots Views Connections User-defined functions (UDFs) Indexes Capacity commitments and reservations Row-level access policies Default configuration settings Required permissions To create a job that runs a DDL statement, you must have the bigquery.jobs.create permission for the project where you are running the job.
- Required permissions This statement requires the following IAM permissions : Permission Resource bigquery.datasets.create The project where you create the federated dataset. bigquery.connections.use The project where you create the federated dataset. bigquery.connections.delegate The project where you create the federated dataset.
- Example: export function finalize ( finalState , initialSum ) Serialization functions for a JavaScript UDAF If you want to work with non-serializable aggregation states, the JavaScript UDAF must provide the serialize and deserialize functions: serialize function: Converts an aggregation state into a BigQuery-serializable object.

### Google Cloud Ready - BigQuery Partners \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- Source ID: `site-docs-reference-5`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- It lets users ingest, join, and analyze streaming data with the same ease as a traditional database, offering seamless integration to sink processed data into BigQuery for long-term storage and analysis.
- Partner references SSIS BigQuery Export Data from SQL Server to BigQuery through SSIS Partner Advantage page Direct link Census Solution Census Reverse ETL Category ETL & Data Integration Description Census is a reverse ETL tool and operational analytics platform that lets you sync your trusted analytics data from your hub into operational tools that your business teams use on a daily basis.
- Partner references Build internal tools with BigQuery Integrate Retool with BigQuery Partner Advantage page Direct link RisingWave Solution RisingWave Platform Category ETL & Data Integration Description RisingWave is a distributed SQL streaming database engineered to make real-time analytics simple and cost-effective.
- Partner references BigQuery Destination Plugin Harnessing the Power of BigQuery and CloudQuery Partner Advantage page Direct link Confluent Solution Confluent Cloud Category ETL & Data Integration Description Confluent Cloud provides a simple, scalable, resilient, and secure event-streaming platform.

### Introduction to loading data \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/loading-data](https://docs.cloud.google.com/bigquery/docs/loading-data)
- Source ID: `site-docs-root`
- Final score: 132
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Streaming load If you must support custom streaming data sources, or preprocess data before streaming it with large throughput into BigQuery, use Dataflow .
- To optimize streaming into tables to avoid reaching the daily load limit, see Optimize load jobs .
- To stream data into BigQuery, you can use a BigQuery subscription in Pub/Sub .
- BigQuery lets you create external connections to query data that's stored outside of BigQuery in Google Cloud services like Cloud Storage or Spanner, or in third-party sources like Amazon Web Services (AWS) or Microsoft Azure.

