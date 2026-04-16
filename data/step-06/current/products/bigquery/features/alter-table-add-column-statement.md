---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.754Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "ALTER TABLE ADD COLUMN statement"
feature_slug: "alter-table-add-column-statement"
latest_feature_date: "2020-10-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/dml-syntax"
  - "https://docs.cloud.google.com/bigquery/docs/tables"
keywords:
  - "alter"
  - "table"
  - "add"
  - "column"
  - "statement"
  - "bigquery"
  - "standard"
  - "sql"
---

# ALTER TABLE ADD COLUMN statement

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery Standard SQL supports the ALTER TABLE ADD COLUMN statement.

## Extended Definition

BigQuery Standard SQL supports the ALTER TABLE ADD COLUMN statement.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/dml-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/dml-syntax)
- [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 195
- Re-rank relevance: N/A

Evidence snippets:
- Examples Setting the expiration timestamp and description on a table The following example sets the expiration timestamp on a table to seven days from the execution time of the ALTER TABLE statement, and sets the description as well: ALTER TABLE mydataset . mytable SET OPTIONS ( expiration timestamp = TIMESTAMP ADD ( CURRENT TIMESTAMP (), INTERVAL 7 DAY ), description = "Table that expires seven days from now" ) Setting the require partition filter attribute on a partitioned table The following example sets the timePartitioning.requirePartitionFilter attribute on a partitioned table : ALTER TABLE mydataset . mypartitionedtable SET OPTIONS ( require partition filter = true ) Queries that reference this table must use a filter on the partitioning column, or else BigQuery returns an error.
- Examples The following example sets a new description on a table column called price : ALTER TABLE mydataset . mytable ALTER COLUMN price SET OPTIONS ( description = 'Price per unit' ); The following example sets a new description on a view column called total : ALTER VIEW mydataset . myview ALTER COLUMN total SET OPTIONS ( description = 'Total sales of the product' ); ALTER COLUMN DROP NOT NULL statement Removes a NOT NULL constraint from a column in a table in BigQuery.
- Column options for a view have the same syntax and requirements as for a table, but with a different list of NAME and VALUE fields: NAME VALUE Details description STRING Example: description="a unique id" Required permissions This statement requires the following IAM permissions : Permission Resource bigquery.tables.get The table to alter. bigquery.tables.update The table to alter.
- ALTER TABLE mydataset . mytable ADD COLUMN name STRING +--------------------------------+ mydataset.mytable number INT64 word STRING COLLATE 'und:ci' name STRING COLLATE +--------------------------------+ ALTER COLUMN SET OPTIONS statement Sets options, such as the column description, on a column in a table or view in BigQuery.

### Create and use tables \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
- Source ID: `site-docs-root`
- Final score: 159
- Re-rank relevance: N/A

Evidence snippets:
- The managed table type; one of the following: NATIVE : A standard table BIGLAKE : A BigLake table for Apache Iceberg in BigQuery is insertable into STRING YES or NO depending on whether the table supports DML INSERT statements is fine grained mutations enabled STRING YES or NO depending on whether fine-grained DML mutations are enabled on the table is typed STRING The value is always NO is change history enabled STRING YES or NO depending on whether change history is enabled creation time TIMESTAMP The table's creation time base table catalog STRING For table clones and table snapshots , the base table's project.
- The INFORMATION SCHEMA.TABLE OPTIONS view has the following schema: Column name Data type Value table catalog STRING The project ID of the project that contains the dataset table schema STRING The name of the dataset that contains the table or view also referred to as the datasetId table name STRING The name of the table or view also referred to as the tableId option name STRING One of the name values in the options table option type STRING One of the data type values in the options table option value STRING One of the value options in the options table Options table OPTION NAME OPTION TYPE OPTION VALUE description STRING A description of the table enable refresh BOOL Whether automatic refresh is enabled for a materialized view expiration timestamp TIMESTAMP The time when this table expires friendly name STRING The table's descriptive name kms key name STRING The name of the Cloud KMS key used to encrypt the table labels ARRAY<STRUCT<STRING, STRING>> An array of STRUCT 's that represent the labels on the table max staleness INTERVAL The configured table's maximum staleness for BigQuery change data capture (CDC) upserts partition expiration days FLOAT64 The default lifetime, in days, of all partitions in a partitioned table refresh interval minutes FLOAT64 How frequently a materialized view is refreshed require partition filter BOOL Whether queries over the table require a partition filter tags ARRAY<STRUCT<STRING, STRING>> Tags attached to a table in a namespaced <key, value> syntax.
- BigQuery bigquery = BigQueryOptions . getDefaultInstance (). getService (); TableId tableId = TableId . of ( datasetName , tableName ); TableDefinition tableDefinition = StandardTableDefinition . of ( schema ); TableInfo tableInfo = TableInfo . newBuilder ( tableId , tableDefinition ). build (); bigquery . create ( tableInfo ); System . out . println ( "Table created successfully" ); } catch ( BigQueryException e ) { System . out . println ( "Table was not created. \n" + e . toString ()); } } } Node.js Before trying this sample, follow the Node.js setup instructions in the BigQuery quickstart using client libraries .
- These logs record API calls and actions that modify the configuration or metadata of your resources. resource.type = "bigquery dataset" : This narrows the search to events related to BigQuery datasets, where table operations are logged. timestamp >= " STARTING TIMESTAMP " : Filters log entries to only show those created on or after the specified timestamp. protoPayload.@type = "type.googleapis.com/google.cloud.audit.AuditLog" : Ensures the log message conforms to the standard Cloud Audit Log structure. ( ... ) : This block groups conditions to find different types of table events, as outlined in the previous section.

### "Data manipulation language (DML) statements in GoogleSQL \_|\_ BigQuery\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/dml-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/dml-syntax)
- Source ID: `site-docs-reference`
- Final score: 153
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- MERGE [ INTO ] target name [[ AS ] alias ] USING source name [[ AS ] alias ] ON merge condition { when clause } + when clause ::= matched clause not matched by target clause not matched by source clause matched clause ::= WHEN MATCHED [ AND search condition ] THEN { merge update clause merge delete clause } not matched by target clause ::= WHEN NOT MATCHED [ BY TARGET ] [ AND search condition ] THEN merge insert clause not matched by source clause ::= WHEN NOT MATCHED BY SOURCE [ AND search condition ] THEN { merge update clause merge delete clause } merge condition ::= bool expression search condition ::= bool expression merge update clause ::= UPDATE SET update item [ , update item ] update item ::= column name = expression merge delete clause ::= DELETE merge insert clause ::= INSERT [ ( column 1 [ , ..., column n ] ) ] input input ::= VALUES ( expr 1 [ , ..., expr n ] ) ROW expr ::= expression DEFAULT Where: target name target name is the name of the table you’re changing. source name source name is a table name or subquery. merge condition A MERGE statement performs a JOIN between the target and the source.
- Inventory ( product , quantity ) VALUES ( 'top load washer' , 10 ), ( 'front load washer' , 20 ), ( 'dryer' , 30 ), ( 'refrigerator' , 10 ), ( 'microwave' , 20 ), ( 'dishwasher' , 30 ), ( 'oven' , 5 ) +-------------------+----------+--------------------+ product quantity supply constrained +-------------------+----------+--------------------+ dishwasher 30 NULL dryer 30 NULL front load washer 20 NULL microwave 20 NULL oven 5 NULL refrigerator 10 NULL top load washer 10 NULL +-------------------+----------+--------------------+ If you set a default value for a column, then you can use the DEFAULT keyword in place of a value to insert the default value: ALTER TABLE dataset .
- INSERT [ INTO ] target name [ ( column 1 [ , ..., column n ] ) ] input input ::= VALUES ( expr 1 [ , ..., expr n ] ) [ , ..., ( expr k 1 [ , ..., expr k n ] ) ] SELECT QUERY expr ::= value expression DEFAULT INSERT statements must comply with the following rules: Column names are optional if the target table is not an ingestion-time partitioned table .
- Partitioned tables For partitioned tables, the number of bytes processed is calculated as follows: q' = The sum of bytes processed by the DML statement itself, including any columns referenced in all partitions scanned by the DML statement. t' = The total size of all partitions being updated by the DML statement before any modifications are made.

