---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.713Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Table functions"
feature_slug: "table-functions"
latest_feature_date: "2021-09-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/user-defined-functions"
  - "https://docs.cloud.google.com/bigquery/docs/wildcard-table-reference"
  - "https://docs.cloud.google.com/bigquery/docs/tables"
keywords:
  - "table"
  - "functions"
  - "let"
  - "bigquery"
  - "queries"
  - "return"
  - "tables"
  - "parameterized"
---

# Table functions

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Table functions let BigQuery queries return tables from parameterized function definitions; Table functions are user-defined functions that return tables in BigQuery.

## Extended Definition

Table functions let BigQuery queries return tables from parameterized function definitions; Table functions are user-defined functions that return tables in BigQuery.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/user-defined-functions](https://docs.cloud.google.com/bigquery/docs/user-defined-functions)
- [https://docs.cloud.google.com/bigquery/docs/wildcard-table-reference](https://docs.cloud.google.com/bigquery/docs/wildcard-table-reference)
- [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)

## Supporting Pages

### "Query multiple tables using a wildcard table \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/wildcard-table-reference](https://docs.cloud.google.com/bigquery/docs/wildcard-table-reference)
- Source ID: `site-docs-reference`
- Final score: 178
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- However, the following query does not limit the scan based on the second filter condition, TABLE SUFFIX = (SELECT SUBSTR(MAX(table name), LENGTH('gsod19') + 1) FROM bigquery-public-data.noaa gsod.INFORMATION SCHEMA.TABLES WHERE table name LIKE 'gsod194%') , because it is a dynamic expression: #standardSQL Scans all tables with names that fall between gsod1940 and gsod1960 SELECT ROUND (( max - 32 ) 5 / 9 , 1 ) celsius FROM bigquery-public-data.noaa gsod.gsod19 WHERE TABLE SUFFIX BETWEEN '40' AND '60' AND TABLE SUFFIX = ( SELECT SUBSTR ( MAX ( table name ), LENGTH ( 'gsod19' ) + 1 ) FROM bigquery-public-data.noaa gsod.INFORMATION SCHEMA.TABLES WHERE table name LIKE 'gsod194%' ) As a workaround, you can perform two separate queries instead; for example: First query: standardSQL Get the list of tables that match the required table name prefixes SELECT SUBSTR(MAX(table name), LENGTH('gsod19') + 1) FROM bigquery-public-data.noaa gsod.INFORMATION SCHEMA.TABLES WHERE table name LIKE 'gsod194%' Second query: standardSQL Construct the second query based on the values from the first query SELECT ROUND((max-32) 5/9,1) celsius FROM bigquery-public-data.noaa gsod.gsod19 WHERE TABLE SUFFIX = '49' These example queries use the INFORMATION SCHEMA.TABLES view.
- If the schema is inconsistent across the tables matched by the wildcard query, then BigQuery returns an error.
- For example, the following query is valid because it uses backticks: #standardSQL / Valid SQL query / SELECT max FROM bigquery-public-data.noaa gsod.gsod WHERE max != 9999.9 # code for missing data AND TABLE SUFFIX = '1929' ORDER BY max DESC The following query is NOT valid because it isn't properly quoted with backticks: #standardSQL / Syntax error: Expected end of statement but got "-" at [4:11] / SELECT max FROM missing backticks bigquery - public - data . noaa gsod . gsod WHERE max != 9999.9 # code for missing data AND TABLE SUFFIX = '1929' ORDER BY max DESC Quotation marks don't work: #standardSQL / Syntax error: Unexpected string literal: 'bigquery-public-data.noaa gsod.gsod ' at [4:3] / SELECT max FROM quotes are not backticks 'bigquery-public-data.noaa gsod.gsod ' WHERE max != 9999.9 # code for missing data AND TABLE SUFFIX = '1929' ORDER BY max DESC Query tables using wildcard tables Wildcard tables enable you to query several tables concisely.
- For example, the following query does not limit the tables scanned for the wildcard table bigquery-public-data.noaa gsod.gsod19 because the filter uses the dynamic value of the table id column: #standardSQL Scans all tables that match the prefix gsod19 SELECT ROUND (( max - 32 ) 5 / 9 , 1 ) celsius FROM bigquery-public-data.noaa gsod.gsod19 WHERE TABLE SUFFIX = ( SELECT SUBSTR ( MAX ( table name ), LENGTH ( 'gsod19' ) + 1 ) FROM bigquery-public-data.noaa gsod.INFORMATION SCHEMA.TABLES WHERE table name LIKE 'gsod194%' ) As another example, the following query limits the scan based on the first filter condition, TABLE SUFFIX BETWEEN '40' and '60' , because it is a constant expression.

### Create and use tables \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
- Source ID: `site-docs-root`
- Final score: 169
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up authentication for client libraries . // Import the Google Cloud client library const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const bigquery = new BigQuery (); async function queryDestinationTable () { // Queries the U.S. given names dataset for the state of Texas // and saves results to permanent table. / TODO(developer): Uncomment the following lines before running the sample. / // const datasetId = 'my dataset'; // const tableId = 'my table'; // Create destination table reference const dataset = bigquery . dataset ( datasetId ); const destinationTable = dataset . table ( tableId ); const query = SELECT name FROM \bigquery-public-data.usa names.usa 1910 2013\ WHERE state = 'TX' LIMIT 100 ; // For all options, see https://cloud.google.com/bigquery/docs/reference/v2/tables#resource const options = { query : query , // Location must match that of the dataset(s) referenced in the query. location : 'US' , destination : destinationTable , }; // Run the query as a job const [ job ] = await bigquery . createQueryJob ( options ); console . log ( Job ${ job . id } started. ); console . log ( Query results loaded to table ${ destinationTable . id } ); } Python Before trying this sample, follow the Python setup instructions in the BigQuery quickstart using client libraries .
- The metadata that's returned is for all types of tables in mydataset in your default project. mydataset contains the following tables: mytable1 : a standard BigQuery table myview1 : a BigQuery view To run the query against a project other than your default project, add the project ID to the dataset in the following format: project id . dataset .INFORMATION SCHEMA. view ; for example, myproject.mydataset.INFORMATION SCHEMA.TABLES .
- The INFORMATION SCHEMA.TABLE OPTIONS view has the following schema: Column name Data type Value table catalog STRING The project ID of the project that contains the dataset table schema STRING The name of the dataset that contains the table or view also referred to as the datasetId table name STRING The name of the table or view also referred to as the tableId option name STRING One of the name values in the options table option type STRING One of the data type values in the options table option value STRING One of the value options in the options table Options table OPTION NAME OPTION TYPE OPTION VALUE description STRING A description of the table enable refresh BOOL Whether automatic refresh is enabled for a materialized view expiration timestamp TIMESTAMP The time when this table expires friendly name STRING The table's descriptive name kms key name STRING The name of the Cloud KMS key used to encrypt the table labels ARRAY<STRUCT<STRING, STRING>> An array of STRUCT 's that represent the labels on the table max staleness INTERVAL The configured table's maximum staleness for BigQuery change data capture (CDC) upserts partition expiration days FLOAT64 The default lifetime, in days, of all partitions in a partitioned table refresh interval minutes FLOAT64 How frequently a materialized view is refreshed require partition filter BOOL Whether queries over the table require a partition filter tags ARRAY<STRUCT<STRING, STRING>> Tags attached to a table in a namespaced <key, value> syntax.
- TABLES WHERE table name = 'population by zip 2010' ; The result is similar to the following: +------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ table name ddl +------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ population by zip 2010 CREATE TABLE bigquery-public-data.census bureau usa.population by zip 2010 ( geo id STRING OPTIONS(description="Geo code"), zipcode STRING NOT NULL OPTIONS(description="Five digit ZIP Code Tabulation Area Census Code"), population INT64 OPTIONS(description="The total count of the population for this segment."), minimum age INT64 OPTIONS(description="The minimum age in the age range.

### User-defined functions \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/user-defined-functions](https://docs.cloud.google.com/bigquery/docs/user-defined-functions)
- Source ID: `site-docs-reference`
- Final score: 158
- Re-rank relevance: N/A

Evidence snippets:
- The following example shows a SQL UDF that uses a scalar subquery to count the number of users with a given age in a user table: CREATE TEMP TABLE users AS ( SELECT 1 AS id , 10 AS age UNION ALL SELECT 2 AS id , 30 AS age UNION ALL SELECT 3 AS id , 10 AS age ); CREATE TEMP FUNCTION countUserByAge ( userAge INT64 ) AS ( ( SELECT COUNT ( 1 ) FROM users WHERE age = userAge ) ); SELECT countUserByAge ( 10 ) AS count user age 10 , countUserByAge ( 20 ) AS count user age 20 , countUserByAge ( 30 ) AS count user age 30 ; This example produces the following output: +-------------------+-------------------+-------------------+ count user age 10 count user age 20 count user age 30 +-------------------+-------------------+-------------------+ 2 0 1 +-------------------+-------------------+-------------------+ Default project in SQL expressions In the body of a SQL UDF, any references to BigQuery entities, such as tables or views, must include the project ID, unless the entity resides in the same project that contains the UDF.
- This rule must enable the following operations: bigquery.routines.get (for using routines) bigquery.tables.getData (for querying BigQuery tables) The following code shows an example YAML config: - egressFrom : identityType : ANY IDENTITY egressTo : operations : - serviceName : 'bigquery.googleapis.com' methodSelectors : - permission : 'bigquery.routines.get' - permission : 'bigquery.tables.getData' resources : - projects/1057666841514 # bigquery-public-data If you want to contribute to the UDFs in this repository, see Contributing UDFs for instructions.
- When you run a query, BigQuery automatically uses the local version of the UDF from the local dataset replica without your specifying the region where the function is defined, making your queries portable across different locations.
- No other UDFs, subqueries, tables, or views can be referenced in the definition body.

