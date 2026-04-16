---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.707Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Scripting FOR...IN statement"
feature_slug: "scripting-for-in-statement"
latest_feature_date: "2021-11-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/tables"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/exporting-data"
keywords:
  - "scripting"
  - "statement"
  - "iterates"
  - "over"
  - "each"
  - "row"
  - "returned"
  - "table"
---

# Scripting FOR...IN statement

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

The scripting FOR...IN statement iterates over each row returned by a table expression.

## Extended Definition

The scripting FOR...IN statement iterates over each row returned by a table expression.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/exporting-data](https://docs.cloud.google.com/bigquery/docs/exporting-data)

## Supporting Pages

### Create and use tables \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
- Source ID: `site-docs-root`
- Final score: 158
- Re-rank relevance: N/A

Evidence snippets:
- UNSUPPORTED CONFIGURATION : There is an issue with the replica's prerequisites other than source materialized view authorization. replication error STRING If replication status indicates a replication issue for a materialized view replica , replication error provides further details about the issue. ddl STRING The DDL statement that can be used to recreate the table, such as CREATE TABLE or CREATE VIEW default collation name STRING The name of the default collation specification if it exists; otherwise, NULL . sync status JSON The status of the sync between the primary and secondary replicas for cross-region replication and disaster recovery datasets.
- The INFORMATION SCHEMA.TABLE OPTIONS view has the following schema: Column name Data type Value table catalog STRING The project ID of the project that contains the dataset table schema STRING The name of the dataset that contains the table or view also referred to as the datasetId table name STRING The name of the table or view also referred to as the tableId option name STRING One of the name values in the options table option type STRING One of the data type values in the options table option value STRING One of the value options in the options table Options table OPTION NAME OPTION TYPE OPTION VALUE description STRING A description of the table enable refresh BOOL Whether automatic refresh is enabled for a materialized view expiration timestamp TIMESTAMP The time when this table expires friendly name STRING The table's descriptive name kms key name STRING The name of the Cloud KMS key used to encrypt the table labels ARRAY<STRUCT<STRING, STRING>> An array of STRUCT 's that represent the labels on the table max staleness INTERVAL The configured table's maximum staleness for BigQuery change data capture (CDC) upserts partition expiration days FLOAT64 The default lifetime, in days, of all partitions in a partitioned table refresh interval minutes FLOAT64 How frequently a materialized view is refreshed require partition filter BOOL Whether queries over the table require a partition filter tags ARRAY<STRUCT<STRING, STRING>> Tags attached to a table in a namespaced <key, value> syntax.
- For readability, some columns are excluded from the result. +------------------------+-------------+------------------+-------------+-----------+-----------+-------------------+------------------------+-----------------------------+-------------+ table name column name ordinal position is nullable data type is hidden is system defined is partitioning column clustering ordinal position policy tags +------------------------+-------------+------------------+-------------+-----------+-----------+-------------------+------------------------+-----------------------------+-------------+ population by zip 2010 zipcode 1 NO STRING NO NO NO NULL 0 rows population by zip 2010 geo id 2 YES STRING NO NO NO NULL 0 rows population by zip 2010 minimum age 3 YES INT64 NO NO NO NULL 0 rows population by zip 2010 maximum age 4 YES INT64 NO NO NO NULL 0 rows population by zip 2010 gender 5 YES STRING NO NO NO NULL 0 rows population by zip 2010 population 6 YES INT64 NO NO NO NULL 0 rows +------------------------+-------------+------------------+-------------+-----------+-----------+-------------------+------------------------+-----------------------------+-------------+ COLUMN FIELD PATHS view When you query the INFORMATION SCHEMA.COLUMN FIELD PATHS view, the query results contain one row for each column nested within a RECORD (or STRUCT ) column.
- TABLE OPTIONS WHERE option name = 'description' AND option value LIKE '%test%' ; The result is similar to the following: +----------------+---------------+------------+-------------+-------------+--------------+ table catalog table schema table name option name option type option value +----------------+---------------+------------+-------------+-------------+--------------+ myproject mydataset mytable1 description STRING "test data" myproject mydataset mytable2 description STRING "test data" +----------------+---------------+------------+-------------+-------------+--------------+ COLUMNS view When you query the INFORMATION SCHEMA.COLUMNS view, the query results contain one row for each column (field) in a table.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- Examples Creating a new materialized view The following example creates a materialized view named new mv in mydataset : CREATE MATERIALIZED VIEW myproject . mydataset . new mv OPTIONS ( expiration timestamp = TIMESTAMP ADD ( CURRENT TIMESTAMP (), INTERVAL 48 HOUR ), friendly name = "new mv" , description = "a materialized view that expires in 2 days" , labels =[ ( "org unit" , "development" ) ] , enable refresh = true , refresh interval minutes = 20 ) AS SELECT column 1 , SUM ( column 2 ) AS sum 2 , AVG ( column 3 ) AS avg 3 FROM myproject.mydataset.mytable GROUP BY column 1 If the materialized view name exists in the dataset, the following error is returned: Already Exists: project id:dataset.materialized view When you use a DDL statement to create a materialized view, you must specify the project, dataset, and materialized view in the following format: project id.dataset.materialized view (including the backticks if project id contains special characters); for example, myproject.mydataset.new mv .
- Required permissions This statement requires the following IAM permissions : Permission Resource bigquery.bireservations.update BI Engine reservation Examples Allocating BI Engine capacity without preferred tables ALTER BI CAPACITY my-project.region-us.default SET OPTIONS ( size gb = 250 ) Deallocating BI capacity ALTER BI CAPACITY my-project.region-us.default SET OPTIONS ( size gb = 0 ) Removing a set of preferred tables from reservation ALTER BI CAPACITY my-project.region-us.default SET OPTIONS ( preferred tables = NULL ) Allocating BI Capacity with preferred tables list ALTER BI CAPACITY my-project.region-us.default SET OPTIONS ( size gb = 250 , preferred tables = [ "data project1.dataset1.table1" , "data project2.dataset2.table2" ] ) Overwriting list of preferred tables without changing the size ALTER BI CAPACITY region-us.default SET OPTIONS ( preferred tables = [ "dataset1.table1" , "data project2.dataset2.table2" ] ) ALTER CAPACITY SET OPTIONS statement Alters an existing capacity commitment.
- DDL functionality extends the information returned by a Jobs resource . statistics.query.statementType includes the following additional values: CREATE TABLE CREATE TABLE AS SELECT DROP TABLE CREATE VIEW DROP VIEW statistics.query has 2 additional fields: ddlOperationPerformed : The DDL operation performed, possibly dependent on the existence of the DDL target.
- DROP : The query deleted the DDL target. ddlTargetTable : When you submit a CREATE TABLE/VIEW statement or a DROP TABLE/VIEW statement, the target table is returned as an object with 3 fields: "projectId": string "datasetId": string "tableId": string Java Call the BigQuery.create() method to start a query job.

### Export table data to Cloud Storage \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/exporting-data](https://docs.cloud.google.com/bigquery/docs/exporting-data)
- Source ID: `site-docs-root`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- The following example shows how to create a new processed table from an existing table called source table which requires n partitions to achieve the chosen file size: CREATE TABLE my dataset . processed table PARTITION BY RANGE BUCKET ( export id , GENERATE ARRAY ( 0 , n , 1 )) CLUSTER BY export id AS ( SELECT , CAST ( FLOOR ( n RAND ()) AS INT64 ) AS export id FROM my dataset . source table ); For each integer i between 0 and n-1 , run an EXPORT DATA statement on the following query: SELECT EXCEPT ( export id ) FROM my dataset . processed table WHERE export id = i ; Extract compressed table Go Before trying this sample, follow the Go setup instructions in the BigQuery quickstart using client libraries .
- Go to BigQuery In the query editor, enter the following statement: EXPORT DATA OPTIONS ( uri = 'gs://bucket/folder/ .csv' , format = 'CSV' , overwrite = true , header = true , field delimiter = ';' ) AS ( SELECT field1 , field2 FROM mydataset . table1 ORDER BY field1 ); Click play circle Run .
- Use a single wildcard URI if you think your exported data will be larger than the 1 GB maximum value. destination uri = "gs:// #{ bucket name } /output- .csv" extract job = table . extract job destination uri do config Location must match that of the source table. config . location = "US" end extract job . wait until done! # Waits for the job to complete puts "Exported #{ table . id } to #{ destination uri } " end Export table metadata To export table metadata from Iceberg tables , use the following SQL statement: EXPORT TABLE METADATA FROM [[ PROJECT NAME .] DATASET NAME .] TABLE NAME ; Replace the following: PROJECT NAME : the name of the project for the table.
- Each of the following predefined IAM roles includes the bigquery.tables.export permission: roles/bigquery.dataViewer roles/bigquery.dataOwner roles/bigquery.dataEditor roles/bigquery.admin Permissions to run an extract job To run an extract job , you need the bigquery.jobs.create IAM permission.

