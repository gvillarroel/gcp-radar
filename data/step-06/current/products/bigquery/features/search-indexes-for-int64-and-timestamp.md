---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.460Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Search indexes for INT64 and TIMESTAMP"
feature_slug: "search-indexes-for-int64-and-timestamp"
latest_feature_date: "2024-05-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/information-schema-indexes"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/information-schema-indexes-by-organization"
keywords:
  - "search"
  - "indexes"
  - "int64"
  - "timestamp"
  - "bigquery"
  - "can"
  - "optimize"
  - "lookups"
---

# Search indexes for INT64 and TIMESTAMP

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery search indexes can optimize lookups on INT64 and TIMESTAMP columns.

## Extended Definition

BigQuery search indexes can optimize lookups on INT64 and TIMESTAMP columns.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/information-schema-indexes](https://docs.cloud.google.com/bigquery/docs/information-schema-indexes)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/information-schema-indexes-by-organization](https://docs.cloud.google.com/bigquery/docs/information-schema-indexes-by-organization)

## Supporting Pages

### SEARCH_INDEXES view \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/information-schema-indexes](https://docs.cloud.google.com/bigquery/docs/information-schema-indexes)
- Source ID: `site-docs-reference-3`
- Final score: 152
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- SEARCH INDEXES WHERE index status = 'ACTIVE' ; The results should look like the following: +-------------+-------------+--------------------------------------------------------------------------------------+---------------------+----------------+ table name index name ddl coverage percentage analyzer +-------------+-------------+--------------------------------------------------------------------------------------+---------------------+----------------+ small table names index CREATE SEARCH INDEX names index ON my project.my dataset.small table(names) 0 NO OP ANALYZER large table logs index CREATE SEARCH INDEX logs index ON my project.my dataset.large table(ALL COLUMNS) 100 LOG ANALYZER +-------------+-------------+--------------------------------------------------------------------------------------+---------------------+----------------+ Troubleshooting To enable this view, you can set the value of enable info schema storage to TRUE on your project or organization.
- The INFORMATION SCHEMA.SEARCH INDEXES view has the following schema: Column name Data type Value index catalog STRING The name of the project that contains the dataset. index schema STRING The name of the dataset that contains the index. table name STRING The name of the base table that the index is created on. index name STRING The name of the index. index status STRING The status of the index: ACTIVE , PENDING DISABLEMENT , TEMPORARILY DISABLED , or PERMANENTLY DISABLED .
- PERMANENTLY DISABLED means that there is an incompatible schema change on the base table, such as changing the type of an indexed column from STRING to INT64 . creation time TIMESTAMP The time the index was created. last modification time TIMESTAMP The last time the index configuration was modified.
- The following table explains the region scope for this view: View Name Resource scope Region scope [ PROJECT ID .] DATASET ID .INFORMATION SCHEMA.SEARCH INDEXES Dataset level Dataset location Replace the following: Optional: PROJECT ID : the ID of your Google Cloud project.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- For examples of JSON-formatted strings with different text analyzers, see Work with text analyzers . data types ARRAY<STRING> Example: data types=['STRING', 'INT64', 'TIMESTAMP'] An array of data types to set when creating a search index.
- For more information, see Set up authentication for client libraries . // Import the Google Cloud client library and create a client const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const bigquery = new BigQuery (); async function ddlCreateView () { // Creates a view via a DDL query / TODO(developer): Uncomment the following lines before running the sample. / // const projectId = "my project" // const datasetId = "my dataset" // const tableId = "my new view" const query = CREATE VIEW \ ${ projectId } . ${ datasetId } . ${ tableId } \ OPTIONS( expiration timestamp=TIMESTAMP ADD( CURRENT TIMESTAMP(), INTERVAL 48 HOUR), friendly name="new view", description="a view that expires in 2 days", labels=[("org unit", "development")] ) AS SELECT name, state, year, number FROM \bigquery-public-data.usa names.usa 1910 current\ WHERE state LIKE 'W%' ; // For all options, see https://cloud.google.com/bigquery/docs/reference/rest/v2/jobs/query const options = { query : query , }; // Run the query as a job const [ job ] = await bigquery . createQueryJob ( options ); job . on ( 'complete' , metadata = > { console . log ( Created new view ${ tableId } via job ${ metadata . id } ); }); } Python Call the Client.query() method to start a query job.
- The table schema contains 2 columns: transaction id: An integer transaction date: A date The table option list specifies the: Partition expiration: Three days Description: A table partitioned by transaction date Creating a partitioned table from the result of a query The following example creates a partitioned table named days with rain in mydataset using a DATE column: CREATE TABLE mydataset . days with rain PARTITION BY date OPTIONS ( partition expiration days = 365 , description = "weather stations with precipitation, partitioned by day" ) AS SELECT DATE ( CAST ( year AS INT64 ), CAST ( mo AS INT64 ), CAST ( da AS INT64 )) AS date , ( SELECT ANY VALUE ( name ) FROM bigquery-public-data.noaa gsod.stations AS stations WHERE stations . usaf = stn ) AS station name , -- Stations can have multiple names prcp FROM bigquery-public-data.noaa gsod.gsod2017 AS weather WHERE prcp != 99.9 -- Filter unknown values AND prcp > 0 -- Filter stations/days with no precipitation If you haven't configured a default project, prepend a project ID to the dataset name in the example SQL, and enclose the name in backticks if project id contains special characters: project id.dataset.table .
- Examples The following table function takes an INT64 parameter that is used to filter the results of a query: CREATE OR REPLACE TABLE FUNCTION mydataset . names by year ( y INT64 ) AS SELECT year , name , SUM ( number ) AS total FROM bigquery-public-data.usa names.usa 1910 current WHERE year = y GROUP BY year , name The following example specifies the return TABLE type in the RETURNS clause: CREATE OR REPLACE TABLE FUNCTION mydataset . names by year ( y INT64 ) RETURNS TABLE<name STRING , year INT64 , total INT64 > AS SELECT year , name , SUM ( number ) AS total FROM bigquery-public-data.usa names.usa 1910 current WHERE year = y GROUP BY year , name The following example computes total sales for items with the name item name from the orders table: CREATE TABLE FUNCTION mydataset . compute sales ( orders TABLE<item STRING , sales INT64 > , item name STRING ) AS ( SELECT SUM ( sales ) AS total sales , item FROM orders WHERE item = item name GROUP BY item ); CREATE PROCEDURE statement Creates a new procedure , which is a block of statements that can be called from other queries.

### SEARCH_INDEXES_BY_ORGANIZATION view \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/information-schema-indexes-by-organization](https://docs.cloud.google.com/bigquery/docs/information-schema-indexes-by-organization)
- Source ID: `site-docs-reference-3`
- Final score: 131
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Required permissions To query the INFORMATION SCHEMA.SEARCH INDEXES BY ORGANIZATION view, you need the following Identity and Access Management (IAM) permissions for your organization: bigquery.tables.get bigquery.tables.list Each of the following predefined IAM roles includes the preceding permissions: roles/bigquery.admin roles/bigquery.dataViewer roles/bigquery.dataEditor roles/bigquery.metadataViewer This schema view is only available to users with defined Google Cloud organizations .
- SEARCH INDEXES BY ORGANIZATION view BigQuery search indexes provide free index management until your organization reaches the limit in a given region.
- AND search index . index status details . throttle status != 'BASE TABLE TOO SMALL' GROUP BY search index . project id , search index . use background reservation The result is similar to the following: +---------------------+----------------------------+---------------------+ project id use background reservation total logical bytes +---------------------+----------------------------+---------------------+ projecta true 971329178274633 +---------------------+----------------------------+---------------------+ projectb false 834638211024843 +---------------------+----------------------------+---------------------+ projectc false 562910385625126 +---------------------+----------------------------+---------------------+ Find throttled search indexes This following example returns all search indexes that are throttled within the organization and region: SELECT project id , index schema , table name , index name FROM region - us .
- SEARCH INDEXES BY ORGANIZATION WHERE -- Excludes search indexes that are permanently disabled. index status != 'PERMANENTLY DISABLED' AND index status details . throttle status IN ( 'ORGANIZATION LIMIT EXCEEDED' , 'BASE TABLE TOO LARGE' ) The result is similar to the following: +--------------------+--------------------+---------------+----------------+ project id index schema table name index name +--------------------+--------------------+---------------+----------------+ projecta dataset us table1 index1 projectb dataset us table1 index1 +--------------------+--------------------+---------------+----------------+ Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

