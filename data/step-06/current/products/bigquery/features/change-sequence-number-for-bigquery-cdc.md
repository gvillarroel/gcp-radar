---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.366Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "_CHANGE_SEQUENCE_NUMBER for BigQuery CDC"
feature_slug: "change-sequence-number-for-bigquery-cdc"
latest_feature_date: "2025-03-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/change-data-capture"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners"
keywords:
  - "change"
  - "sequence"
  - "number"
  - "bigquery"
  - "cdc"
  - "capture"
  - "now"
  - "supports"
---

# _CHANGE_SEQUENCE_NUMBER for BigQuery CDC

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery change data capture now supports defining _CHANGE_SEQUENCE_NUMBER to manage streaming UPSERT ordering.

## Extended Definition

BigQuery change data capture now supports defining _CHANGE_SEQUENCE_NUMBER to manage streaming UPSERT ordering.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/change-data-capture](https://docs.cloud.google.com/bigquery/docs/change-data-capture)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)

## Supporting Pages

### "Stream table updates with change data capture ingestion \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/change-data-capture](https://docs.cloud.google.com/bigquery/docs/change-data-capture)
- Source ID: `site-docs-reference-5`
- Final score: 187
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Consider the following CHANGE SEQUENCE NUMBER comparison examples and their precedence results: Example 1: Record #1: CHANGE SEQUENCE NUMBER = '77' Record #2: CHANGE SEQUENCE NUMBER = '7B' Result: Record #2 is considered the latest record because '7B' > '77' (i.e. '123' > '119') Example 2: Record #1: CHANGE SEQUENCE NUMBER = 'FFF/B' Record #2: CHANGE SEQUENCE NUMBER = 'FFF/ABC' Result: Record #2 is considered the latest record because 'FFF/ABC' > 'FFF/B' (i.e. '4095/2748' > '4095/11') Example 3: Record #1: CHANGE SEQUENCE NUMBER = 'BA/FFFFFFFF' Record #2: CHANGE SEQUENCE NUMBER = 'ABC' Result: Record #2 is considered the latest record because 'ABC' > 'BA/FFFFFFFF' (i.e. '2748' > '186/4294967295') Example 4: Record #1: CHANGE SEQUENCE NUMBER = 'FFF/ABC' Record #2: CHANGE SEQUENCE NUMBER = 'ABC' Result: Record #1 is considered the latest record because 'FFF/ABC' > 'ABC' (i.e. '4095/2748' > '2748') If two CHANGE SEQUENCE NUMBER values are identical, then the record with the latest BigQuery system ingestion time has precedence over previously ingested records.
- To configure user-supplied ordering keys, the pseudocolumn CHANGE SEQUENCE NUMBER is used to indicate the order in which BigQuery should apply records, based on the larger CHANGE SEQUENCE NUMBER between two matching records with the same primary key.
- The allowable range of the CHANGE SEQUENCE NUMBER supports values between 0/0/0/0 and FFFFFFFFFFFFFFFF/FFFFFFFFFFFFFFFF/FFFFFFFFFFFFFFFF/FFFFFFFFFFFFFFFF .
- BigQuery compares CHANGE SEQUENCE NUMBER values by comparing the first section, then comparing the next section only if the previous sections were equal.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 124
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up authentication for client libraries . // Import the Google Cloud client library and create a client const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const bigquery = new BigQuery (); async function ddlCreateView () { // Creates a view via a DDL query / TODO(developer): Uncomment the following lines before running the sample. / // const projectId = "my project" // const datasetId = "my dataset" // const tableId = "my new view" const query = CREATE VIEW \ ${ projectId } . ${ datasetId } . ${ tableId } \ OPTIONS( expiration timestamp=TIMESTAMP ADD( CURRENT TIMESTAMP(), INTERVAL 48 HOUR), friendly name="new view", description="a view that expires in 2 days", labels=[("org unit", "development")] ) AS SELECT name, state, year, number FROM \bigquery-public-data.usa names.usa 1910 current\ WHERE state LIKE 'W%' ; // For all options, see https://cloud.google.com/bigquery/docs/reference/rest/v2/jobs/query const options = { query : query , }; // Run the query as a job const [ job ] = await bigquery . createQueryJob ( options ); job . on ( 'complete' , metadata = > { console . log ( Created new view ${ tableId } via job ${ metadata . id } ); }); } Python Call the Client.query() method to start a query job.
- Examples The following table function takes an INT64 parameter that is used to filter the results of a query: CREATE OR REPLACE TABLE FUNCTION mydataset . names by year ( y INT64 ) AS SELECT year , name , SUM ( number ) AS total FROM bigquery-public-data.usa names.usa 1910 current WHERE year = y GROUP BY year , name The following example specifies the return TABLE type in the RETURNS clause: CREATE OR REPLACE TABLE FUNCTION mydataset . names by year ( y INT64 ) RETURNS TABLE<name STRING , year INT64 , total INT64 > AS SELECT year , name , SUM ( number ) AS total FROM bigquery-public-data.usa names.usa 1910 current WHERE year = y GROUP BY year , name The following example computes total sales for items with the name item name from the orders table: CREATE TABLE FUNCTION mydataset . compute sales ( orders TABLE<item STRING , sales INT64 > , item name STRING ) AS ( SELECT SUM ( sales ) AS total sales , item FROM orders WHERE item = item name GROUP BY item ); CREATE PROCEDURE statement Creates a new procedure , which is a block of statements that can be called from other queries.
- For more information, see Set up authentication for client libraries . from google.cloud import bigquery project = 'my-project' dataset id = 'my dataset' table id = 'new view' client = bigquery.Client(project=project) sql = """ CREATE VIEW {} . {} . {} OPTIONS( expiration timestamp=TIMESTAMP ADD( CURRENT TIMESTAMP(), INTERVAL 48 HOUR), friendly name="new view", description="a view that expires in 2 days", labels=[("org unit", "development")] ) AS SELECT name, state, year, number FROM bigquery-public-data.usa names.usa 1910 current WHERE state LIKE 'W%' """ . format ( project , dataset id , table id ) job = client . query ( sql ) # API request. job . result () # Waits for the query to finish. print ( 'Created new view " {} . {} . {} ".' . format ( job . destination . project , job . destination . dataset id , job . destination . table id , ) ) On-demand query size calculation If you use on-demand billing, BigQuery charges for data definition language (DDL) queries based on the number of bytes processed by the query.
- String projectId = "MY PROJECT ID" ; String datasetId = "MY DATASET ID" ; String tableId = "MY VIEW ID" ; String ddl = "CREATE VIEW " + "" + projectId + "." + datasetId + "." + tableId + "" + " OPTIONS(" + " expiration timestamp=TIMESTAMP ADD(" + " CURRENT TIMESTAMP(), INTERVAL 48 HOUR)," + " friendly name=\"new view\"," + " description=\"a view that expires in 2 days\"," + " labels=[(\"org unit\", \"development\")]" + " )" + " AS SELECT name, state, year, number" + " FROM bigquery-public-data.usa names.usa 1910 current" + " WHERE state LIKE 'W%'" ; ddlCreateView ( ddl ); } public static void ddlCreateView ( String ddl ) { try { // Initialize client that will be used to send requests.

### Google Cloud Ready - BigQuery Partners \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- Source ID: `site-docs-reference-5`
- Final score: 114
- Re-rank relevance: N/A

Evidence snippets:
- Partner references SqlDBM + BigQuery Google BigQuery - Direct Connect and Reverse Engineer Partner Advantage page Direct link Stelo Data Solution Stelo Data Replication Category ETL & Data Integration Description Stelo is an enterprise-class Change Data Capture (CDC) tool that delivers data dynamically from anywhere to anywhere for BI analysis, reporting, and managing business operations and supply chains.
- Partner references BigQuery Source Connector Striim Solution Striim Platform Category ETL & Data Integration Description Striim is a proprietary software that offers a non-intrusive, real-time data ingestion (including change data capture) and replication from multiple data sources to Google Cloud - with support for some light in-flight transformations and enrichments.
- Partner references Google BigQuery Integration View data in BigQuery Product & Behavioral Analytics on Google BigQuery Optimizely's partnership with Google Cloud Partner Advantage page Direct link Numberstation Solution Numbersstation.ai Category BI, ML, & Advanced Analytics Description Numbers Station leverages a multi-agent architecture built with specialized agents to reason through complex questions, building end-to-end analytics solutions and democratizing data by delivering insights where and when you need them.
- Partner references Move your data to BigQuery with millisecond latency BigQuery materialization connector BigQuery Batch Query Connector Partner Advantage page Direct link Fivetran Fivetran Data Pipelines Solution Fivetran Data Pipelines Category ETL & Data Integration Description Fivetran is a leader in automated data integration and delivers ready-to-use connectors that automatically adapt as schemas and APIs change, ensuring consistent, reliable access to data.

