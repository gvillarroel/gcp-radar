---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.548Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Cross-region table copy"
feature_slug: "cross-region-table-copy"
latest_feature_date: "2023-10-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/managing-datasets"
  - "https://docs.cloud.google.com/bigquery/docs/biglake-intro"
  - "https://docs.cloud.google.com/bigquery/docs/tables"
keywords:
  - "cross"
  - "region"
  - "table"
  - "copy"
  - "bigquery"
  - "lets"
  - "you"
  - "tables"
---

# Cross-region table copy

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery lets you copy tables across regions.

## Extended Definition

BigQuery lets you copy tables across regions.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/managing-datasets](https://docs.cloud.google.com/bigquery/docs/managing-datasets)
- [https://docs.cloud.google.com/bigquery/docs/biglake-intro](https://docs.cloud.google.com/bigquery/docs/biglake-intro)
- [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)

## Supporting Pages

### Manage datasets \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/managing-datasets](https://docs.cloud.google.com/bigquery/docs/managing-datasets)
- Source ID: `site-docs-reference-required-11`
- Final score: 186
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following examples show the formatting of the parameters, based on your system's environment: Linux: use single quotes to enclose the JSON string–for example: '{"source dataset id":"mydataset","source project id":"mysourceproject","overwrite destination table":"true"}' Windows command line: use double quotes to enclose the JSON string, and escape double quotes in the string with a backslash–for example: "{\"source dataset id\":\"mydataset\",\"source project id\":\"mysourceproject\",\"overwrite destination table\":\"true\"}" PowerShell: use single quotes to enclose the JSON string, and escape double quotes in the string with a backslash–for example: '{\"source dataset id\":\"mydataset\",\"source project id\":\"mysourceproject\",\"overwrite destination table\":\"true\"}' For example, the following command creates a dataset copy configuration that's named My Transfer with a target dataset that's named mydataset and a project with the ID of myproject . bq mk \ --transfer config \ --project id = myproject \ --data source = cross region copy \ --target dataset = mydataset \ --display name = 'My Transfer' \ --params = '{ "source dataset id":"123 demo eu", "source project id":"mysourceproject", "overwrite destination table":"true" }' API Enable the BigQuery Data Transfer Service for your destination dataset.
- Cross-region table copy job is not supported for tables encrypted with customer-managed encrypted keys (CMEK) when the destination dataset is not encrypted with CMEK and there is no CMEK provided.
- Change data capture (CDC) tables if the copy job is across regions.
- Copying tables with default encryption across regions is supported.

### "Introduction to BigLake external tables \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/biglake-intro](https://docs.cloud.google.com/bigquery/docs/biglake-intro)
- Source ID: `site-docs-reference-5`
- Final score: 180
- Re-rank relevance: N/A

Evidence snippets:
- Be aware that if you explicitly specify a BigQuery region and your query only contains BigLake tables, then your query is run as a cross-cloud query and incurs data transfer costs.
- CREATE OR REPLACE TABLE temp table AS ( SELECT l shipmode , l linenumber , l orderkey FROM aws dataset . lineitem WHERE l shipmode IN ( 'AIR' , 'REG AIR' ) AND l commitdate l receiptdate AND l shipdate l commitdate AND l receiptdate >= DATE '1997-01-01' AND l receiptdate DATE '1997-02-01' ); After the temporary table is created, the JOIN operation completes, and the following query is run: SELECT l shipmode , o orderpriority , count ( l linenumber ) AS num lineitems FROM bigquery dataset . orders JOIN temp table ON orders . o orderkey = lineitem . l orderkey GROUP BY l shipmode , o orderpriority ORDER BY l shipmode , o orderpriority ; As another example, consider the following cross-cloud join: SELECT c mktsegment , c name FROM bigquery dataset . customer WHERE c mktsegment = 'BUILDING' UNION ALL SELECT c mktsegment , c name FROM aws dataset . customer WHERE c mktsegment = 'FURNITURE' LIMIT 10 ; In this query, the LIMIT clause is not pushed down to the BigQuery Omni region.
- Cross-cloud join examples The following query joins an orders table in a BigQuery region with a lineitem table in a BigQuery Omni region: SELECT l shipmode , o orderpriority , count ( l linenumber ) AS num lineitems FROM bigquery dataset . orders JOIN aws dataset . lineitem ON orders . o orderkey = lineitem . l orderkey WHERE l shipmode IN ( 'AIR' , 'REG AIR' ) AND l commitdate l receiptdate AND l shipdate l commitdate AND l receiptdate >= DATE '1997-01-01' AND l receiptdate DATE '1997-02-01' GROUP BY l shipmode , o orderpriority ORDER BY l shipmode , o orderpriority ; This query is broken into local and remote parts.
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to run a cross-cloud join: bigquery.jobs.create bigquery.tables.getData You might also be able to get these permissions with custom roles or other predefined roles .

### Create and use tables \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
- Source ID: `site-docs-root`
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up authentication for client libraries . // Import the Google Cloud client library const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const bigquery = new BigQuery (); async function queryDestinationTable () { // Queries the U.S. given names dataset for the state of Texas // and saves results to permanent table. / TODO(developer): Uncomment the following lines before running the sample. / // const datasetId = 'my dataset'; // const tableId = 'my table'; // Create destination table reference const dataset = bigquery . dataset ( datasetId ); const destinationTable = dataset . table ( tableId ); const query = SELECT name FROM \bigquery-public-data.usa names.usa 1910 2013\ WHERE state = 'TX' LIMIT 100 ; // For all options, see https://cloud.google.com/bigquery/docs/reference/v2/tables#resource const options = { query : query , // Location must match that of the dataset(s) referenced in the query. location : 'US' , destination : destinationTable , }; // Run the query as a job const [ job ] = await bigquery . createQueryJob ( options ); console . log ( Job ${ job . id } started. ); console . log ( Query results loaded to table ${ destinationTable . id } ); } Python Before trying this sample, follow the Python setup instructions in the BigQuery quickstart using client libraries .
- TABLES WHERE table name = 'population by zip 2010' ; The result is similar to the following: +------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ table name ddl +------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ population by zip 2010 CREATE TABLE bigquery-public-data.census bureau usa.population by zip 2010 ( geo id STRING OPTIONS(description="Geo code"), zipcode STRING NOT NULL OPTIONS(description="Five digit ZIP Code Tabulation Area Census Code"), population INT64 OPTIONS(description="The total count of the population for this segment."), minimum age INT64 OPTIONS(description="The minimum age in the age range.
- For more information, see Set up authentication for client libraries . // Import the Google Cloud client library and create a client const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const bigquery = new BigQuery (); async function createTable () { // Creates a new table named "my table" in "my dataset". / TODO(developer): Uncomment the following lines before running the sample. / // const datasetId = "my dataset"; // const tableId = "my table"; // const schema = 'Name:string, Age:integer, Weight:float, IsMagic:boolean'; // For all options, see https://cloud.google.com/bigquery/docs/reference/v2/tables#resource const options = { schema : schema , location : 'US' , }; // Create a new table in the dataset const [ table ] = await bigquery . dataset ( datasetId ) . createTable ( tableId , options ); console . log ( Table ${ table . id } created. ); } PHP Before trying this sample, follow the PHP setup instructions in the BigQuery quickstart using client libraries .
- For more information, see Set up authentication for client libraries . // Import the Google Cloud client library const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const bigquery = new BigQuery (); async function listTables () { // Lists tables in 'my dataset'. / TODO(developer): Uncomment the following lines before running the sample. / // const datasetId = 'my dataset'; // List all tables in the dataset const [ tables ] = await bigquery . dataset ( datasetId ). getTables (); console . log ( 'Tables:' ); tables . forEach ( table = > console . log ( table . id )); } PHP Before trying this sample, follow the PHP setup instructions in the BigQuery quickstart using client libraries .

