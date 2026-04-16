---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.692Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery Omni cross-cloud transfer"
feature_slug: "bigquery-omni-cross-cloud-transfer"
latest_feature_date: "2022-04-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/biglake-intro"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners"
keywords:
  - "bigquery"
  - "omni"
  - "cross"
  - "transfer"
  - "moves"
  - "across"
  - "clouds"
  - "including"
---

# BigQuery Omni cross-cloud transfer

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery Omni cross-cloud transfer moves data across clouds including AWS and Azure.

## Extended Definition

BigQuery Omni cross-cloud transfer moves data across clouds including AWS and Azure.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/biglake-intro](https://docs.cloud.google.com/bigquery/docs/biglake-intro)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)

## Supporting Pages

### "Introduction to BigLake external tables \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/biglake-intro](https://docs.cloud.google.com/bigquery/docs/biglake-intro)
- Source ID: `site-docs-reference-5`
- Final score: 151
- Re-rank relevance: N/A

Evidence snippets:
- CREATE OR REPLACE TABLE temp table AS ( SELECT l shipmode , l linenumber , l orderkey FROM aws dataset . lineitem WHERE l shipmode IN ( 'AIR' , 'REG AIR' ) AND l commitdate l receiptdate AND l shipdate l commitdate AND l receiptdate >= DATE '1997-01-01' AND l receiptdate DATE '1997-02-01' ); After the temporary table is created, the JOIN operation completes, and the following query is run: SELECT l shipmode , o orderpriority , count ( l linenumber ) AS num lineitems FROM bigquery dataset . orders JOIN temp table ON orders . o orderkey = lineitem . l orderkey GROUP BY l shipmode , o orderpriority ORDER BY l shipmode , o orderpriority ; As another example, consider the following cross-cloud join: SELECT c mktsegment , c name FROM bigquery dataset . customer WHERE c mktsegment = 'BUILDING' UNION ALL SELECT c mktsegment , c name FROM aws dataset . customer WHERE c mktsegment = 'FURNITURE' LIMIT 10 ; In this query, the LIMIT clause is not pushed down to the BigQuery Omni region.
- Cross-cloud join examples The following query joins an orders table in a BigQuery region with a lineitem table in a BigQuery Omni region: SELECT l shipmode , o orderpriority , count ( l linenumber ) AS num lineitems FROM bigquery dataset . orders JOIN aws dataset . lineitem ON orders . o orderkey = lineitem . l orderkey WHERE l shipmode IN ( 'AIR' , 'REG AIR' ) AND l commitdate l receiptdate AND l shipdate l commitdate AND l receiptdate >= DATE '1997-01-01' AND l receiptdate DATE '1997-02-01' GROUP BY l shipmode , o orderpriority ORDER BY l shipmode , o orderpriority ; This query is broken into local and remote parts.
- If a cross-cloud join query references 10 or more datasets from BigQuery Omni regions, it might fail with an error Not found: Dataset <BigQuery dataset> was not found in location <BigQuery Omni region> .
- Be aware that if you explicitly specify a BigQuery region and your query only contains BigLake tables, then your query is run as a cross-cloud query and incurs data transfer costs.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 134
- Re-rank relevance: N/A

Evidence snippets:
- CREATE TEMP TABLE Example ( x INT64 , y STRING ); INSERT INTO Example VALUES ( 5 , 'foo' ); INSERT INTO Example VALUES ( 6 , 'bar' ); SELECT FROM Example ; This script returns the following output: +-----+---+-----+ Row x y +-----+--- -----+ 1 5 foo 2 6 bar +-----+--- -----+ Load data across clouds Example 1 Suppose you have a BigLake table named myawsdataset.orders that references data from Amazon S3 .
- Examples The following example sets a new description on a table column called price : ALTER TABLE mydataset . mytable ALTER COLUMN price SET OPTIONS ( description = 'Price per unit' ); The following example sets a new description on a view column called total : ALTER VIEW mydataset . myview ALTER COLUMN total SET OPTIONS ( description = 'Total sales of the product' ); ALTER COLUMN DROP NOT NULL statement Removes a NOT NULL constraint from a column in a table in BigQuery.
- Examples The following example removes the NOT NULL constraint from a column called mycolumn : ALTER TABLE mydataset . mytable ALTER COLUMN mycolumn DROP NOT NULL ALTER COLUMN SET DATA TYPE statement Changes the data type of a column in a table in BigQuery to a less restrictive data type.
- Examples The following example removes a replica that is located in the us-east4 region from the cross region dataset dataset: ALTER SCHEMA [ IF EXISTS ] cross region dataset DROP REPLICA us-east4 ALTER TABLE SET OPTIONS statement Sets the options on a table.

### Google Cloud Ready - BigQuery Partners \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- Source ID: `site-docs-reference-5`
- Final score: 129
- Re-rank relevance: N/A

Evidence snippets:
- Partner references SAS/ACCESS BigQuery Interface Guide SAS Google BigQuery Data Connector Partner Advantage page Direct link Segment by Twilio Solution Segment Category BI, ML, & Advanced Analytics Description Twilio Segment provides AI-ready data for personalized customer experiences across channels, including messaging, email, customer service, voice, and video interactions.
- Partner references Getting started with BigQuery Lytics Solution Lytics Category BI, ML, & Advanced Analytics Description Lytics is a customer data platform (CDP) that helps businesses collect, unify, and activate customer data from across their marketing, sales, and service channels.
- Partner references Using SQDR with BigQuery Partner Advantage page Direct link StreamNative Solution StreamNative Cloud Category ETL & Data Integration Description StreamNative offers a data streaming platform that allows users to continuously stream data across their organization.
- The platform offers simple manual rules to support domain knowledge transfer as well as advanced statistical and ML-based tests with auto thresholds to get started quickly and scale across multiple tables.

