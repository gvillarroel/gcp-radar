---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.920Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Low-latency streaming query availability"
feature_slug: "low-latency-streaming-query-availability"
latest_feature_date: "2015-12-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/change-data-capture"
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners"
  - "https://docs.cloud.google.com/bigquery/docs/data-manipulation-language"
keywords:
  - "low"
  - "latency"
  - "streaming"
  - "query"
  - "availability"
  - "lets"
  - "recently"
  - "streamed"
---

# Low-latency streaming query availability

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Low-latency streaming query availability lets recently streamed data be queried within seconds of first insertion.

## Extended Definition

Low-latency streaming query availability lets recently streamed data be queried within seconds of first insertion.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/change-data-capture](https://docs.cloud.google.com/bigquery/docs/change-data-capture)
- [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- [https://docs.cloud.google.com/bigquery/docs/data-manipulation-language](https://docs.cloud.google.com/bigquery/docs/data-manipulation-language)

## Supporting Pages

### "Stream table updates with change data capture ingestion \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/change-data-capture](https://docs.cloud.google.com/bigquery/docs/change-data-capture)
- Source ID: `site-docs-reference-5`
- Final score: 184
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- CDC-enabled tables don't support the following: Mutating data manipulation language (DML) statements such as DELETE , UPDATE , and MERGE Querying wildcard tables Search indexes CDC-enabled tables that perform runtime merge jobs because the table's max staleness value is too low cannot support the following: Table copy operations Table clone operations Table snapshot operations The BigQuery Storage Read API The requirePartitionFilter table option BigQuery export operations on CDC-enabled tables don't export recently streamed row modifications that have yet to be applied by a background job.
- These jobs must perform an on-the-fly merge of the CDC baseline table and the recently streamed row modifications at query runtime.
- Example with UPSERT and DELETE values Consider the following table in BigQuery: ID Name Salary 100 Charlie 2000 101 Tal 3000 102 Lee 5000 The following row modifications are streamed by the Storage Write API: ID Name Salary CHANGE TYPE 100 DELETE 101 Tal 8000 UPSERT 105 Izumi 6000 UPSERT The updated table is now the following: ID Name Salary 101 Tal 8000 102 Lee 5000 105 Izumi 6000 Manage table staleness By default, every time you run a query, BigQuery returns the most up-to-date results.
- To calculate the time it takes to apply upserted changes to an existing table, use the following SQL query to determine the 95th percentile duration of background apply jobs, plus a seven-minute buffer to allow for the BigQuery write-optimized storage (streaming buffer) conversion.

### Google Cloud Ready - BigQuery Partners \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- Source ID: `site-docs-reference-5`
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- It lets users ingest, join, and analyze streaming data with the same ease as a traditional database, offering seamless integration to sink processed data into BigQuery for long-term storage and analysis.
- Partner references Move your data to BigQuery with millisecond latency BigQuery materialization connector BigQuery Batch Query Connector Partner Advantage page Direct link Fivetran Fivetran Data Pipelines Solution Fivetran Data Pipelines Category ETL & Data Integration Description Fivetran is a leader in automated data integration and delivers ready-to-use connectors that automatically adapt as schemas and APIs change, ensuring consistent, reliable access to data.
- Partner references Connect Google BigQuery to Privacera Privacera Enhances Data Access Governance Add Google BigQuery (GBQ) data source on Privacera Platform Partner Advantage page Direct link Reltio Solution Reltio Connected Data Platform Category Data Governance, Security, & MDM Description The Reltio Connected Data Platform is a cloud-based data management platform that lets organizations create a unified, trusted real-time source for their core data.
- Partner references Behavioral data for BigQuery BigQuery Loader Measure the latency of your data in BigQuery Debugging bad data in Google Cloud with BigQuery Partner Advantage page Direct link Starburst Data Solution Starburst Galaxy Category BI, ML, & Advanced Analytics Description Starburst Galaxy is the cloud-born and fully-managed service of the Starburst massively parallel processing (MPP) and highly-performant query engine.

### "Transform data with data manipulation language (DML) \_|\_ BigQuery \_|\_\

- URL: [https://docs.cloud.google.com/bigquery/docs/data-manipulation-language](https://docs.cloud.google.com/bigquery/docs/data-manipulation-language)
- Source ID: `site-docs-reference`
- Final score: 156
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Rows that were recently written using the tabledata.insertall streaming method can't be modified with data manipulation language (DML), such as UPDATE , DELETE , MERGE , or TRUNCATE statements.
- Transform data with data manipulation language (DML) The BigQuery data manipulation language (DML) lets you update, insert, and delete data from your BigQuery tables.
- These tables may experience added memory pressure for subsequent queries, which can lead to additional read latency or query errors.
- For more information, see Use data manipulation language (DML) with recently streamed data .

