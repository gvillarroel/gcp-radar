---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.798Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "ALTER TABLE statement options"
feature_slug: "alter-table-statement-options"
latest_feature_date: "2019-12-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/tables"
  - "https://docs.cloud.google.com/bigquery/docs/biglake-intro"
keywords:
  - "alter"
  - "table"
  - "statement"
  - "options"
  - "lets"
  - "users"
  - "set"
  - "bigquery"
---

# ALTER TABLE statement options

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

The ALTER TABLE statement lets users set options on BigQuery tables.

## Extended Definition

The ALTER TABLE statement lets users set options on BigQuery tables.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
- [https://docs.cloud.google.com/bigquery/docs/biglake-intro](https://docs.cloud.google.com/bigquery/docs/biglake-intro)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- Required permissions This statement requires the following IAM permissions : Permission Resource bigquery.bireservations.update BI Engine reservation Examples Allocating BI Engine capacity without preferred tables ALTER BI CAPACITY my-project.region-us.default SET OPTIONS ( size gb = 250 ) Deallocating BI capacity ALTER BI CAPACITY my-project.region-us.default SET OPTIONS ( size gb = 0 ) Removing a set of preferred tables from reservation ALTER BI CAPACITY my-project.region-us.default SET OPTIONS ( preferred tables = NULL ) Allocating BI Capacity with preferred tables list ALTER BI CAPACITY my-project.region-us.default SET OPTIONS ( size gb = 250 , preferred tables = [ "data project1.dataset1.table1" , "data project2.dataset2.table2" ] ) Overwriting list of preferred tables without changing the size ALTER BI CAPACITY region-us.default SET OPTIONS ( preferred tables = [ "dataset1.table1" , "data project2.dataset2.table2" ] ) ALTER CAPACITY SET OPTIONS statement Alters an existing capacity commitment.
- Examples Setting the expiration timestamp and description on a table The following example sets the expiration timestamp on a table to seven days from the execution time of the ALTER TABLE statement, and sets the description as well: ALTER TABLE mydataset . mytable SET OPTIONS ( expiration timestamp = TIMESTAMP ADD ( CURRENT TIMESTAMP (), INTERVAL 7 DAY ), description = "Table that expires seven days from now" ) Setting the require partition filter attribute on a partitioned table The following example sets the timePartitioning.requirePartitionFilter attribute on a partitioned table : ALTER TABLE mydataset . mypartitionedtable SET OPTIONS ( require partition filter = true ) Queries that reference this table must use a filter on the partitioning column, or else BigQuery returns an error.
- Examples The following example sets a new description on a table column called price : ALTER TABLE mydataset . mytable ALTER COLUMN price SET OPTIONS ( description = 'Price per unit' ); The following example sets a new description on a view column called total : ALTER VIEW mydataset . myview ALTER COLUMN total SET OPTIONS ( description = 'Total sales of the product' ); ALTER COLUMN DROP NOT NULL statement Removes a NOT NULL constraint from a column in a table in BigQuery.
- Column options for a view have the same syntax and requirements as for a table, but with a different list of NAME and VALUE fields: NAME VALUE Details description STRING Example: description="a unique id" Required permissions This statement requires the following IAM permissions : Permission Resource bigquery.tables.get The table to alter. bigquery.tables.update The table to alter.

### Create and use tables \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
- Source ID: `site-docs-root`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- Go to BigQuery In the query editor, enter the following statement: CREATE TABLE mydataset . newtable ( x INT64 OPTIONS ( description = 'An optional INTEGER field' ), y STRUCT < a ARRAY < STRING > OPTIONS ( description = 'A repeated STRING field' ), b BOOL ) OPTIONS ( expiration timestamp = TIMESTAMP '2023-01-01 00:00:00 UTC' , description = 'a table that expires in 2023' , labels = [ ( 'org unit' , 'development' ) ] ); Click play circle Run .
- The INFORMATION SCHEMA.TABLE OPTIONS view has the following schema: Column name Data type Value table catalog STRING The project ID of the project that contains the dataset table schema STRING The name of the dataset that contains the table or view also referred to as the datasetId table name STRING The name of the table or view also referred to as the tableId option name STRING One of the name values in the options table option type STRING One of the data type values in the options table option value STRING One of the value options in the options table Options table OPTION NAME OPTION TYPE OPTION VALUE description STRING A description of the table enable refresh BOOL Whether automatic refresh is enabled for a materialized view expiration timestamp TIMESTAMP The time when this table expires friendly name STRING The table's descriptive name kms key name STRING The name of the Cloud KMS key used to encrypt the table labels ARRAY<STRUCT<STRING, STRING>> An array of STRUCT 's that represent the labels on the table max staleness INTERVAL The configured table's maximum staleness for BigQuery change data capture (CDC) upserts partition expiration days FLOAT64 The default lifetime, in days, of all partitions in a partitioned table refresh interval minutes FLOAT64 How frequently a materialized view is refreshed require partition filter BOOL Whether queries over the table require a partition filter tags ARRAY<STRUCT<STRING, STRING>> Tags attached to a table in a namespaced <key, value> syntax.
- For more information, see Set up authentication for client libraries . // Import the Google Cloud client library const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const bigquery = new BigQuery (); async function queryDestinationTable () { // Queries the U.S. given names dataset for the state of Texas // and saves results to permanent table. / TODO(developer): Uncomment the following lines before running the sample. / // const datasetId = 'my dataset'; // const tableId = 'my table'; // Create destination table reference const dataset = bigquery . dataset ( datasetId ); const destinationTable = dataset . table ( tableId ); const query = SELECT name FROM \bigquery-public-data.usa names.usa 1910 2013\ WHERE state = 'TX' LIMIT 100 ; // For all options, see https://cloud.google.com/bigquery/docs/reference/v2/tables#resource const options = { query : query , // Location must match that of the dataset(s) referenced in the query. location : 'US' , destination : destinationTable , }; // Run the query as a job const [ job ] = await bigquery . createQueryJob ( options ); console . log ( Job ${ job . id } started. ); console . log ( Query results loaded to table ${ destinationTable . id } ); } Python Before trying this sample, follow the Python setup instructions in the BigQuery quickstart using client libraries .
- TABLES WHERE table name = 'population by zip 2010' ; The result is similar to the following: +------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ table name ddl +------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ population by zip 2010 CREATE TABLE bigquery-public-data.census bureau usa.population by zip 2010 ( geo id STRING OPTIONS(description="Geo code"), zipcode STRING NOT NULL OPTIONS(description="Five digit ZIP Code Tabulation Area Census Code"), population INT64 OPTIONS(description="The total count of the population for this segment."), minimum age INT64 OPTIONS(description="The minimum age in the age range.

### "Introduction to BigLake external tables \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/biglake-intro](https://docs.cloud.google.com/bigquery/docs/biglake-intro)
- Source ID: `site-docs-reference-5`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- For example, the following diagram demonstrates how the BigQuery Storage API lets users access authorized data using open source query engines such as Apache Spark: For more information about connectors supported by BigQuery, see BigQuery connectors .
- You can reference BigLake tables anywhere in a SELECT statement as if they were standard BigQuery tables, including in data manipulation language (DML) and data definition language (DDL) statements that use subqueries to retrieve data.
- BigLake tables on object stores For data lake administrators, BigLake lets you set access controls on tables rather than files, which gives you finer-grained options when setting user access to data in the data lake.
- CREATE OR REPLACE TABLE temp table AS ( SELECT l shipmode , l linenumber , l orderkey FROM aws dataset . lineitem WHERE l shipmode IN ( 'AIR' , 'REG AIR' ) AND l commitdate l receiptdate AND l shipdate l commitdate AND l receiptdate >= DATE '1997-01-01' AND l receiptdate DATE '1997-02-01' ); After the temporary table is created, the JOIN operation completes, and the following query is run: SELECT l shipmode , o orderpriority , count ( l linenumber ) AS num lineitems FROM bigquery dataset . orders JOIN temp table ON orders . o orderkey = lineitem . l orderkey GROUP BY l shipmode , o orderpriority ORDER BY l shipmode , o orderpriority ; As another example, consider the following cross-cloud join: SELECT c mktsegment , c name FROM bigquery dataset . customer WHERE c mktsegment = 'BUILDING' UNION ALL SELECT c mktsegment , c name FROM aws dataset . customer WHERE c mktsegment = 'FURNITURE' LIMIT 10 ; In this query, the LIMIT clause is not pushed down to the BigQuery Omni region.

