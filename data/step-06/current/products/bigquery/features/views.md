---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.931Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Views"
feature_slug: "views"
latest_feature_date: "2014-03-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/tables"
  - "https://docs.cloud.google.com/bigquery/docs/biglake-intro"
  - "https://docs.cloud.google.com/bigquery/docs/user-defined-functions"
keywords:
  - "views"
  - "provide"
  - "virtual"
  - "tables"
  - "defined"
  - "sql"
  - "queries"
  - "bigquery"
---

# Views

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Views provide virtual tables defined by SQL queries in BigQuery.

## Extended Definition

Views provide virtual tables defined by SQL queries in BigQuery.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
- [https://docs.cloud.google.com/bigquery/docs/biglake-intro](https://docs.cloud.google.com/bigquery/docs/biglake-intro)
- [https://docs.cloud.google.com/bigquery/docs/user-defined-functions](https://docs.cloud.google.com/bigquery/docs/user-defined-functions)

## Supporting Pages

### Create and use tables \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
- Source ID: `site-docs-root`
- Final score: 167
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up authentication for client libraries . // Import the Google Cloud client library const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const bigquery = new BigQuery (); async function queryDestinationTable () { // Queries the U.S. given names dataset for the state of Texas // and saves results to permanent table. / TODO(developer): Uncomment the following lines before running the sample. / // const datasetId = 'my dataset'; // const tableId = 'my table'; // Create destination table reference const dataset = bigquery . dataset ( datasetId ); const destinationTable = dataset . table ( tableId ); const query = SELECT name FROM \bigquery-public-data.usa names.usa 1910 2013\ WHERE state = 'TX' LIMIT 100 ; // For all options, see https://cloud.google.com/bigquery/docs/reference/v2/tables#resource const options = { query : query , // Location must match that of the dataset(s) referenced in the query. location : 'US' , destination : destinationTable , }; // Run the query as a job const [ job ] = await bigquery . createQueryJob ( options ); console . log ( Job ${ job . id } started. ); console . log ( Query results loaded to table ${ destinationTable . id } ); } Python Before trying this sample, follow the Python setup instructions in the BigQuery quickstart using client libraries .
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to create a table: bigquery.tables.create on the dataset where you're creating the table. bigquery.tables.getData on all tables and views that your query references if you're saving query results as a table. bigquery.jobs.create on the project if you're creating the table by loading data or by saving query results to a table. bigquery.tables.updateData on the table if you're appending to or overwriting a table with query results.
- View table properties print ( "Got table ' {} . {} . {} '." . format ( table . project , table . dataset id , table . table id ) ) print ( "Table schema: {} " . format ( table . schema )) print ( "Table description: {} " . format ( table . description )) print ( "Table has {} rows" . format ( table . num rows )) Get table information using INFORMATION SCHEMA INFORMATION SCHEMA is a series of views that provide access to metadata about datasets, routines, tables, views, jobs, reservations, and streaming data.
- The following predefined IAM roles include bigquery.tables.get permissions: bigquery.metadataViewer bigquery.dataViewer bigquery.dataOwner bigquery.dataEditor bigquery.admin In addition, if a user has bigquery.datasets.create permissions, when that user creates a dataset, they are granted bigquery.dataOwner access to it. bigquery.dataOwner access gives the user the ability to retrieve table metadata.

### "Introduction to BigLake external tables \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/biglake-intro](https://docs.cloud.google.com/bigquery/docs/biglake-intro)
- Source ID: `site-docs-reference-5`
- Final score: 157
- Re-rank relevance: N/A

Evidence snippets:
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to run a cross-cloud join: bigquery.jobs.create bigquery.tables.getData You might also be able to get these permissions with custom roles or other predefined roles .
- You can reference BigLake tables anywhere in a SELECT statement as if they were standard BigQuery tables, including in data manipulation language (DML) and data definition language (DDL) statements that use subqueries to retrieve data.
- These materialized views function like materialized views over BigQuery-managed storage tables, including the benefits of automatic refresh and smart tuning .
- Authorized views and authorized routines referencing BigQuery Omni tables or views are only supported in BigQuery Omni regions.

### User-defined functions \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/user-defined-functions](https://docs.cloud.google.com/bigquery/docs/user-defined-functions)
- Source ID: `site-docs-reference`
- Final score: 153
- Re-rank relevance: N/A

Evidence snippets:
- The following example shows a SQL UDF that uses a scalar subquery to count the number of users with a given age in a user table: CREATE TEMP TABLE users AS ( SELECT 1 AS id , 10 AS age UNION ALL SELECT 2 AS id , 30 AS age UNION ALL SELECT 3 AS id , 10 AS age ); CREATE TEMP FUNCTION countUserByAge ( userAge INT64 ) AS ( ( SELECT COUNT ( 1 ) FROM users WHERE age = userAge ) ); SELECT countUserByAge ( 10 ) AS count user age 10 , countUserByAge ( 20 ) AS count user age 20 , countUserByAge ( 30 ) AS count user age 30 ; This example produces the following output: +-------------------+-------------------+-------------------+ count user age 10 count user age 20 count user age 30 +-------------------+-------------------+-------------------+ 2 0 1 +-------------------+-------------------+-------------------+ Default project in SQL expressions In the body of a SQL UDF, any references to BigQuery entities, such as tables or views, must include the project ID, unless the entity resides in the same project that contains the UDF.
- When you run a query, BigQuery automatically uses the local version of the UDF from the local dataset replica without your specifying the region where the function is defined, making your queries portable across different locations.
- No other UDFs, subqueries, tables, or views can be referenced in the definition body.
- This rule must enable the following operations: bigquery.routines.get (for using routines) bigquery.tables.getData (for querying BigQuery tables) The following code shows an example YAML config: - egressFrom : identityType : ANY IDENTITY egressTo : operations : - serviceName : 'bigquery.googleapis.com' methodSelectors : - permission : 'bigquery.routines.get' - permission : 'bigquery.tables.getData' resources : - projects/1057666841514 # bigquery-public-data If you want to contribute to the UDFs in this repository, see Contributing UDFs for instructions.

