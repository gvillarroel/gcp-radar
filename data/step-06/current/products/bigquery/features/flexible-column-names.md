---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.406Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Flexible column names"
feature_slug: "flexible-column-names"
latest_feature_date: "2024-09-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/tables"
  - "https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference"
  - "https://docs.cloud.google.com/bigquery/docs/wildcard-table-reference"
keywords:
  - "flexible"
  - "column"
  - "names"
  - "let"
  - "bigquery"
  - "tables"
  - "views"
  - "use"
---

# Flexible column names

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Flexible column names let BigQuery tables and views use expanded naming support for extracting, loading, streaming, and querying data.

## Extended Definition

Flexible column names let BigQuery tables and views use expanded naming support for extracting, loading, streaming, and querying data.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
- [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- [https://docs.cloud.google.com/bigquery/docs/wildcard-table-reference](https://docs.cloud.google.com/bigquery/docs/wildcard-table-reference)

## Supporting Pages

### Create and use tables \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
- Source ID: `site-docs-root`
- Final score: 185
- Re-rank relevance: N/A

Evidence snippets:
- The INFORMATION SCHEMA.TABLE OPTIONS view has the following schema: Column name Data type Value table catalog STRING The project ID of the project that contains the dataset table schema STRING The name of the dataset that contains the table or view also referred to as the datasetId table name STRING The name of the table or view also referred to as the tableId option name STRING One of the name values in the options table option type STRING One of the data type values in the options table option value STRING One of the value options in the options table Options table OPTION NAME OPTION TYPE OPTION VALUE description STRING A description of the table enable refresh BOOL Whether automatic refresh is enabled for a materialized view expiration timestamp TIMESTAMP The time when this table expires friendly name STRING The table's descriptive name kms key name STRING The name of the Cloud KMS key used to encrypt the table labels ARRAY<STRUCT<STRING, STRING>> An array of STRUCT 's that represent the labels on the table max staleness INTERVAL The configured table's maximum staleness for BigQuery change data capture (CDC) upserts partition expiration days FLOAT64 The default lifetime, in days, of all partitions in a partitioned table refresh interval minutes FLOAT64 How frequently a materialized view is refreshed require partition filter BOOL Whether queries over the table require a partition filter tags ARRAY<STRUCT<STRING, STRING>> Tags attached to a table in a namespaced <key, value> syntax.
- For more information, see Set up authentication for client libraries . // Import the Google Cloud client library const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const bigquery = new BigQuery (); async function queryDestinationTable () { // Queries the U.S. given names dataset for the state of Texas // and saves results to permanent table. / TODO(developer): Uncomment the following lines before running the sample. / // const datasetId = 'my dataset'; // const tableId = 'my table'; // Create destination table reference const dataset = bigquery . dataset ( datasetId ); const destinationTable = dataset . table ( tableId ); const query = SELECT name FROM \bigquery-public-data.usa names.usa 1910 2013\ WHERE state = 'TX' LIMIT 100 ; // For all options, see https://cloud.google.com/bigquery/docs/reference/v2/tables#resource const options = { query : query , // Location must match that of the dataset(s) referenced in the query. location : 'US' , destination : destinationTable , }; // Run the query as a job const [ job ] = await bigquery . createQueryJob ( options ); console . log ( Job ${ job . id } started. ); console . log ( Query results loaded to table ${ destinationTable . id } ); } Python Before trying this sample, follow the Python setup instructions in the BigQuery quickstart using client libraries .
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to create a table: bigquery.tables.create on the dataset where you're creating the table. bigquery.tables.getData on all tables and views that your query references if you're saving query results as a table. bigquery.jobs.create on the project if you're creating the table by loading data or by saving query results to a table. bigquery.tables.updateData on the table if you're appending to or overwriting a table with query results.
- Control access to tables To configure access to tables and views, you can grant an IAM role to an entity at the following levels, listed in order of range of resources allowed (largest to smallest): a high level in the Google Cloud resource hierarchy such as the project, folder, or organization level the dataset level the table or view level You can also restrict data access within tables, by using the following methods: column-level security column data masking row-level security Access with any resource protected by IAM is additive.

### bq command-line tool reference \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- Source ID: `site-docs-reference`
- Final score: 151
- Re-rank relevance: N/A

Evidence snippets:
- If --autodetect is false , and no schema is specified by using the --schema flag, and the destination table exists, then the schema of the destination table is used. --clustering fields= COLUMNS A comma-separated list of up to four column names that specifies the fields to use for table clustering . --column name character map= SCOPE Defines the scope and handling of characters in column names, with the option of enabling flexible column names .
- For more information about using the bq ls command, see the following: Managing jobs Listing datasets in a project Creating and using tables Listing views in a dataset Working with transfers Listing table snapshots in a dataset bq mk Use the bq mk command to create a BigQuery resource.
- Each tag must have the namespaced key name and value short name . --default kms key= KEY Specifies the default Cloud KMS key resource ID for encrypting the table data in a dataset if no explicit key is provided during table creation or query. --default partition expiration= SECONDS An integer that specifies the default expiration time, in seconds, for all partitions in newly-created partitioned tables in the dataset.
- For more information about using the bq show command, see the following: Getting information about datasets Creating and using tables Getting information about views Working with transfers Managing jobs Getting information about a table snapshot bq update Use the bq update command to change a resource.

### "Query multiple tables using a wildcard table \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/wildcard-table-reference](https://docs.cloud.google.com/bigquery/docs/wildcard-table-reference)
- Source ID: `site-docs-reference`
- Final score: 147
- Re-rank relevance: N/A

Evidence snippets:
- Wildcard tables aren't supported for tables with flexible column names or renamed columns.
- However, the following query does not limit the scan based on the second filter condition, TABLE SUFFIX = (SELECT SUBSTR(MAX(table name), LENGTH('gsod19') + 1) FROM bigquery-public-data.noaa gsod.INFORMATION SCHEMA.TABLES WHERE table name LIKE 'gsod194%') , because it is a dynamic expression: #standardSQL Scans all tables with names that fall between gsod1940 and gsod1960 SELECT ROUND (( max - 32 ) 5 / 9 , 1 ) celsius FROM bigquery-public-data.noaa gsod.gsod19 WHERE TABLE SUFFIX BETWEEN '40' AND '60' AND TABLE SUFFIX = ( SELECT SUBSTR ( MAX ( table name ), LENGTH ( 'gsod19' ) + 1 ) FROM bigquery-public-data.noaa gsod.INFORMATION SCHEMA.TABLES WHERE table name LIKE 'gsod194%' ) As a workaround, you can perform two separate queries instead; for example: First query: standardSQL Get the list of tables that match the required table name prefixes SELECT SUBSTR(MAX(table name), LENGTH('gsod19') + 1) FROM bigquery-public-data.noaa gsod.INFORMATION SCHEMA.TABLES WHERE table name LIKE 'gsod194%' Second query: standardSQL Construct the second query based on the values from the first query SELECT ROUND((max-32) 5/9,1) celsius FROM bigquery-public-data.noaa gsod.gsod19 WHERE TABLE SUFFIX = '49' These example queries use the INFORMATION SCHEMA.TABLES view.
- For example, the following query does not limit the tables scanned for the wildcard table bigquery-public-data.noaa gsod.gsod19 because the filter uses the dynamic value of the table id column: #standardSQL Scans all tables that match the prefix gsod19 SELECT ROUND (( max - 32 ) 5 / 9 , 1 ) celsius FROM bigquery-public-data.noaa gsod.gsod19 WHERE TABLE SUFFIX = ( SELECT SUBSTR ( MAX ( table name ), LENGTH ( 'gsod19' ) + 1 ) FROM bigquery-public-data.noaa gsod.INFORMATION SCHEMA.TABLES WHERE table name LIKE 'gsod194%' ) As another example, the following query limits the scan based on the first filter condition, TABLE SUFFIX BETWEEN '40' and '60' , because it is a constant expression.
- For example, to find the maximum temperature reported in the years between 1929 and 1935 inclusive, use the table wildcard to represent the last two digits of the year: standardSQL SELECT max, ROUND((max-32) 5/9,1) celsius, mo, da, year FROM bigquery-public-data.noaa gsod.gsod19 WHERE max != 9999.9 # code for missing data AND TABLE SUFFIX BETWEEN '29' and '35' ORDER BY max DESC Scanning a range of ingestion-time partitioned tables using PARTITIONTIME To scan a range of ingestion-time partitioned tables, use the PARTITIONTIME pseudocolumn with the TABLE SUFFIX pseudocolumn.

