---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.711Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery Omni"
feature_slug: "bigquery-omni"
latest_feature_date: "2021-10-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/biglake-intro"
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners"
  - "https://docs.cloud.google.com/bigquery/docs/best-practices-for-multi-tenant-workloads-on-bigquery"
keywords:
  - "bigquery"
  - "omni"
  - "provides"
  - "multi"
  - "analytics"
  - "capabilities"
  - "across"
  - "other"
---

# BigQuery Omni

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery Omni provides multi-cloud analytics capabilities across Google Cloud and other cloud environments.

## Extended Definition

BigQuery Omni provides multi-cloud analytics capabilities across Google Cloud and other cloud environments.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/biglake-intro](https://docs.cloud.google.com/bigquery/docs/biglake-intro)
- [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- [https://docs.cloud.google.com/bigquery/docs/best-practices-for-multi-tenant-workloads-on-bigquery](https://docs.cloud.google.com/bigquery/docs/best-practices-for-multi-tenant-workloads-on-bigquery)

## Supporting Pages

### "Introduction to BigLake external tables \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/biglake-intro](https://docs.cloud.google.com/bigquery/docs/biglake-intro)
- Source ID: `site-docs-reference-5`
- Final score: 163
- Re-rank relevance: N/A

Evidence snippets:
- CREATE OR REPLACE TABLE temp table AS ( SELECT l shipmode , l linenumber , l orderkey FROM aws dataset . lineitem WHERE l shipmode IN ( 'AIR' , 'REG AIR' ) AND l commitdate l receiptdate AND l shipdate l commitdate AND l receiptdate >= DATE '1997-01-01' AND l receiptdate DATE '1997-02-01' ); After the temporary table is created, the JOIN operation completes, and the following query is run: SELECT l shipmode , o orderpriority , count ( l linenumber ) AS num lineitems FROM bigquery dataset . orders JOIN temp table ON orders . o orderkey = lineitem . l orderkey GROUP BY l shipmode , o orderpriority ORDER BY l shipmode , o orderpriority ; As another example, consider the following cross-cloud join: SELECT c mktsegment , c name FROM bigquery dataset . customer WHERE c mktsegment = 'BUILDING' UNION ALL SELECT c mktsegment , c name FROM aws dataset . customer WHERE c mktsegment = 'FURNITURE' LIMIT 10 ; In this query, the LIMIT clause is not pushed down to the BigQuery Omni region.
- Cross-cloud joins are only supported in colocated BigQuery regions with their corresponding BigQuery Omni regions and in the US and EU multi-regions.
- Cross-cloud joins that are run in the US or EU multi-regions can only access data in US or EU BigQuery Omni regions respectively.
- To learn more about multi-cloud analytic solutions using BigLake tables with Amazon S3 or Blob Storage data, see BigQuery Omni .

### "Best practices for multi-tenant workloads on BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/best-practices-for-multi-tenant-workloads-on-bigquery](https://docs.cloud.google.com/bigquery/docs/best-practices-for-multi-tenant-workloads-on-bigquery)
- Source ID: `site-docs-reference-5`
- Final score: 158
- Re-rank relevance: N/A

Evidence snippets:
- Copy datasets for multiregional configurations Because BigQuery disallows cross-regional queries, you can't use the strategy of segmenting data with authorized views when data marts must exist across multiple regions.
- Best practices for multi-tenant workloads on BigQuery This document provides techniques and best practices for common patterns that are used in multi-tenant data platforms and enterprise data marts.
- BigQuery is a powerful tool that can consistently address multi-tenant platform requirements for exabytes of data and hundreds of thousands of data consumers across disparate business units.
- A multiregional configuration uses the BigQuery Data Transfer Service to copy datasets across regions.

### Google Cloud Ready - BigQuery Partners \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- Source ID: `site-docs-reference-5`
- Final score: 157
- Re-rank relevance: N/A

Evidence snippets:
- Partner references Configuring BigQuery Data Transformation in BigQuery Partner Advantage page Direct link Databricks Solution Databricks Lakehouse Category BI, ML, & Advanced Analytics Description Databricks SQL provides an easy-to-use platform for analysts who want to run SQL queries on their data lake, create multiple visualization types to explore query results from different perspectives, and build and share dashboards.
- Partner references SAS/ACCESS BigQuery Interface Guide SAS Google BigQuery Data Connector Partner Advantage page Direct link Segment by Twilio Solution Segment Category BI, ML, & Advanced Analytics Description Twilio Segment provides AI-ready data for personalized customer experiences across channels, including messaging, email, customer service, voice, and video interactions.
- Partner references Google BigQuery Integration View data in BigQuery Product & Behavioral Analytics on Google BigQuery Optimizely's partnership with Google Cloud Partner Advantage page Direct link Numberstation Solution Numbersstation.ai Category BI, ML, & Advanced Analytics Description Numbers Station leverages a multi-agent architecture built with specialized agents to reason through complex questions, building end-to-end analytics solutions and democratizing data by delivering insights where and when you need them.
- Partner references Incorta unified data & analytics platform Incorta Google BigQuery Connector Partner Advantage page Direct link Informatica Solution Informatica IICS Category ETL & Data Integration Description Informatica Intelligent Cloud Services (IICS) is a cloud-based data integration platform that provides a variety of features such as business data integration, application integration, and API management between cloud and local applications.

