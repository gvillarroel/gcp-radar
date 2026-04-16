---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.569Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Data quality monitoring"
feature_slug: "data-quality-monitoring"
latest_feature_date: "2023-08-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners"
  - "https://docs.cloud.google.com/bigquery/docs/admin-intro"
  - "https://docs.cloud.google.com/bigquery/docs/wildcard-table-reference"
keywords:
  - "quality"
  - "monitoring"
  - "scans"
  - "tables"
  - "help"
  - "ensure"
  - "accurate"
  - "reliable"
---

# Data quality monitoring

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Data quality monitoring scans tables to help ensure data is accurate and reliable.

## Extended Definition

Data quality monitoring scans tables to help ensure data is accurate and reliable.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- [https://docs.cloud.google.com/bigquery/docs/admin-intro](https://docs.cloud.google.com/bigquery/docs/admin-intro)
- [https://docs.cloud.google.com/bigquery/docs/wildcard-table-reference](https://docs.cloud.google.com/bigquery/docs/wildcard-table-reference)

## Supporting Pages

### Google Cloud Ready - BigQuery Partners \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- Source ID: `site-docs-reference-5`
- Final score: 227
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Partner references BigQuery data source Partner Advantage page Direct link Masthead Data Solution Data Monitoring Category Data Quality, Observability, & FinOps Description Masthead Data is a data reliability platform that helps organizations govern their data and ensure it is of the highest quality.
- Partner references BigQuery Integration Query Results Save Detection Google Cloud Monitoring Partner Advantage page Direct link Datafold Solution Datafold Category Data Quality, Observability, & FinOps Description Datafold is the unified platform for proactive data quality that combines automated data testing, data reconciliation, and observability to help data teams prevent data quality issues and accelerate their development velocity.
- Partner references BigQuery instant observability BigQuery monitoring integration Partner Advantage page Direct link Sifflet Data Solution Sifflet Data Observability Platform Category Data Quality, Observability, & FinOps Description Sifflet is a data observability platform that helps companies trust their data and make data-driven decisions.
- Partner references Connect your BigQuery tables to Openlayer for data quality monitoring Privacera Solution PrivaceraCloud Category Data Governance, Security, & MDM Description Privacera simplifies BigQuery access control capabilities.

### Introduction to BigQuery administration \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/admin-intro](https://docs.cloud.google.com/bigquery/docs/admin-intro)
- Source ID: `site-docs-reference-2`
- Final score: 102
- Re-rank relevance: N/A

Evidence snippets:
- Label resources To help organize your BigQuery resources, you can add labels to your datasets, tables, and views.
- Troubleshoot In addition to the features described in this document for monitoring and managing your organization's BigQuery system, the following resources are available for troubleshooting problems that might arise: BigQuery error messages BigQuery billing questions Troubleshoot quota errors If you need additional assistance, see Get support .
- You can create tables, load data into tables from various types of sources and in various formats, partition tables based on a specific column or by ingestion time, cluster tables, update table properties, and export table data.
- For example, you could create table clones in a test environment so that you can experiment with copies of production data without impacting the production data and without having to pay for storage of full copies of the tables.

### "Query multiple tables using a wildcard table \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/wildcard-table-reference](https://docs.cloud.google.com/bigquery/docs/wildcard-table-reference)
- Source ID: `site-docs-reference`
- Final score: 100
- Re-rank relevance: N/A

Evidence snippets:
- However, the following query does not limit the scan based on the second filter condition, TABLE SUFFIX = (SELECT SUBSTR(MAX(table name), LENGTH('gsod19') + 1) FROM bigquery-public-data.noaa gsod.INFORMATION SCHEMA.TABLES WHERE table name LIKE 'gsod194%') , because it is a dynamic expression: #standardSQL Scans all tables with names that fall between gsod1940 and gsod1960 SELECT ROUND (( max - 32 ) 5 / 9 , 1 ) celsius FROM bigquery-public-data.noaa gsod.gsod19 WHERE TABLE SUFFIX BETWEEN '40' AND '60' AND TABLE SUFFIX = ( SELECT SUBSTR ( MAX ( table name ), LENGTH ( 'gsod19' ) + 1 ) FROM bigquery-public-data.noaa gsod.INFORMATION SCHEMA.TABLES WHERE table name LIKE 'gsod194%' ) As a workaround, you can perform two separate queries instead; for example: First query: standardSQL Get the list of tables that match the required table name prefixes SELECT SUBSTR(MAX(table name), LENGTH('gsod19') + 1) FROM bigquery-public-data.noaa gsod.INFORMATION SCHEMA.TABLES WHERE table name LIKE 'gsod194%' Second query: standardSQL Construct the second query based on the values from the first query SELECT ROUND((max-32) 5/9,1) celsius FROM bigquery-public-data.noaa gsod.gsod19 WHERE TABLE SUFFIX = '49' These example queries use the INFORMATION SCHEMA.TABLES view.
- For example, the following query does not limit the tables scanned for the wildcard table bigquery-public-data.noaa gsod.gsod19 because the filter uses the dynamic value of the table id column: #standardSQL Scans all tables that match the prefix gsod19 SELECT ROUND (( max - 32 ) 5 / 9 , 1 ) celsius FROM bigquery-public-data.noaa gsod.gsod19 WHERE TABLE SUFFIX = ( SELECT SUBSTR ( MAX ( table name ), LENGTH ( 'gsod19' ) + 1 ) FROM bigquery-public-data.noaa gsod.INFORMATION SCHEMA.TABLES WHERE table name LIKE 'gsod194%' ) As another example, the following query limits the scan based on the first filter condition, TABLE SUFFIX BETWEEN '40' and '60' , because it is a constant expression.
- For example, the following query finds the maximum temperature reported during the 1940s: standardSQL SELECT max, ROUND((max-32) 5/9,1) celsius, mo, da, year FROM bigquery-public-data.noaa gsod.gsod194 WHERE max != 9999.9 # code for missing data ORDER BY max DESC Filter selected tables using TABLE SUFFIX To restrict a query so that it scans only a specified set of tables, use the TABLE SUFFIX pseudocolumn in a WHERE clause with a condition that is a constant expression.
- A query that scans all the table IDs from 1929 through 1940 would be very long if you have to name all 12 tables in the FROM clause (most of the tables are omitted in this sample): #standardSQL SELECT max , ROUND (( max - 32 ) 5 / 9 , 1 ) celsius , mo , da , year FROM ( SELECT FROM bigquery-public-data.noaa gsod.gsod1929 UNION ALL SELECT FROM bigquery-public-data.noaa gsod.gsod1930 UNION ALL SELECT FROM bigquery-public-data.noaa gsod.gsod1931 UNION ALL ...

