---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.485Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Salesforce Data Cloud ingestion"
feature_slug: "salesforce-data-cloud-ingestion"
latest_feature_date: "2024-03-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/change-data-capture"
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "salesforce"
  - "ingestion"
  - "bigquery"
  - "can"
  - "ingest"
---

# Salesforce Data Cloud ingestion

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery can ingest data from Salesforce Data Cloud.

## Extended Definition

BigQuery can ingest data from Salesforce Data Cloud.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/change-data-capture](https://docs.cloud.google.com/bigquery/docs/change-data-capture)
- [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### "Stream table updates with change data capture ingestion \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/change-data-capture](https://docs.cloud.google.com/bigquery/docs/change-data-capture)
- Source ID: `site-docs-reference-5`
- Final score: 98
- Re-rank relevance: N/A

Evidence snippets:
- Consider the following CHANGE SEQUENCE NUMBER comparison examples and their precedence results: Example 1: Record #1: CHANGE SEQUENCE NUMBER = '77' Record #2: CHANGE SEQUENCE NUMBER = '7B' Result: Record #2 is considered the latest record because '7B' > '77' (i.e. '123' > '119') Example 2: Record #1: CHANGE SEQUENCE NUMBER = 'FFF/B' Record #2: CHANGE SEQUENCE NUMBER = 'FFF/ABC' Result: Record #2 is considered the latest record because 'FFF/ABC' > 'FFF/B' (i.e. '4095/2748' > '4095/11') Example 3: Record #1: CHANGE SEQUENCE NUMBER = 'BA/FFFFFFFF' Record #2: CHANGE SEQUENCE NUMBER = 'ABC' Result: Record #2 is considered the latest record because 'ABC' > 'BA/FFFFFFFF' (i.e. '2748' > '186/4294967295') Example 4: Record #1: CHANGE SEQUENCE NUMBER = 'FFF/ABC' Record #2: CHANGE SEQUENCE NUMBER = 'ABC' Result: Record #1 is considered the latest record because 'FFF/ABC' > 'ABC' (i.e. '4095/2748' > '2748') If two CHANGE SEQUENCE NUMBER values are identical, then the record with the latest BigQuery system ingestion time has precedence over previously ingested records.
- Estimate BigQuery CDC ingestion costs In addition to general BigQuery cost estimation best practices , estimating the costs of BigQuery CDC ingestion might be important for workflows that have large amounts of data, a low max staleness configuration , or frequently changing data.
- BigQuery CDC ingestion cost best practices In addition to general BigQuery cost best practices , use the following techniques to optimize the costs of BigQuery CDC ingestion operations: Unless necessary, avoid configuring a table's max staleness option with a very low value.
- BigQuery CDC ingestion jobs that apply pending row modifications within the max staleness interval are considered background jobs and use the BACKGROUND or BACKGROUND CHANGE DATA CAPTURE assignment type , rather than the QUERY assignment type .

### Google Cloud Ready - BigQuery Partners \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- Source ID: `site-docs-reference-5`
- Final score: 85
- Re-rank relevance: N/A

Evidence snippets:
- Partner references Prophecy BigQuery Integration Read and write to catalog tables in BigQuery Partner Advantage page Direct link Qlik Solution Qlik Replicate Category ETL & Data Integration Description Qlik Replicate (formerly Attunity Replicate) is a high-performance data-replication tool offering optimized data ingestion from a broad array of data sources and platforms and seamless integration with all major big data analytics platforms.
- Partner references Getting started with Census and BigQuery Reverse ETL for BigQuery How to sync data from BigQuery to Salesforce How to send data from BigQuery to Slack Partner Advantage page Direct link ClearBlade Solution ClearBlade IoT Core+ Category ETL & Data Integration Description ClearBlade IoT Core+ is a fully managed service designed to seamlessly connect, manage, and ingest data from globally dispersed devices.
- Partner references BigQuery Source Connector Striim Solution Striim Platform Category ETL & Data Integration Description Striim is a proprietary software that offers a non-intrusive, real-time data ingestion (including change data capture) and replication from multiple data sources to Google Cloud - with support for some light in-flight transformations and enrichments.
- Partner references DataHub BigQuery Integration BigQuery Ingestion Guide Immuta Solution Immuta Data Security Platform Category Data Governance, Security, & MDM Description Immuta provides data access and security mechanisms to complex data policies.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 66
- Re-rank relevance: N/A

Evidence snippets:
- When new data is available, append the data of the 1993 year to the destination table using the INSERT INTO SELECT statement: INSERT INTO myotherdataset . orders SELECT FROM myawsdataset . orders WHERE EXTRACT ( YEAR FROM l commitdate ) = 1993 ; Example 2 The following example inserts data into an ingestion-time partitioned table: CREATE TABLE mydataset . orders ( id String , numeric id INT64 ) PARTITION BY PARTITIONDATE ; After creating a partitioned table, you can insert data into the ingestion-time partitioned table: INSERT INTO mydataset . orders ( PARTITIONTIME , id , numeric id ) SELECT TIMESTAMP ( "2023-01-01" ), id , numeric id , FROM mydataset . ordersof23 WHERE numeric id > 4000000 ; CREATE TABLE LIKE statement Creates a new table with all of the same metadata of another table.
- Limitations: It is not possible to create an ingestion-time partitioned table from the result of a query.
- Partition by ingestion time with the specified partitioning type.
- Partition by ingestion time with daily partitions.

