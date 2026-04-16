---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.765Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "TRUNCATE TABLE statement"
feature_slug: "truncate-table-statement"
latest_feature_date: "2020-10-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/dml-syntax"
  - "https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "truncate"
  - "table"
  - "statement"
  - "bigquery"
  - "standard"
  - "sql"
  - "supports"
---

# TRUNCATE TABLE statement

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery Standard SQL supports the TRUNCATE TABLE statement.

## Extended Definition

BigQuery Standard SQL supports the TRUNCATE TABLE statement.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/dml-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/dml-syntax)
- [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### "Data manipulation language (DML) statements in GoogleSQL \_|\_ BigQuery\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/dml-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/dml-syntax)
- Source ID: `site-docs-reference`
- Final score: 165
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- NewArrivals WHERE Inventory . product = NewArrivals . product ) TRUNCATE TABLE statement The TRUNCATE TABLE statement removes all rows from a table but leaves the table metadata intact, including the table schema, description, and labels.
- Data manipulation language (DML) statements in GoogleSQL The BigQuery data manipulation language (DML) enables you to update, insert, and delete data from your BigQuery tables.
- DELETE [ FROM ] target name [ alias ] WHERE condition To delete all rows in a table, use the TRUNCATE TABLE statement.
- Quotas and limits for queries apply to TRUNCATE TABLE statements.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 143
- Re-rank relevance: N/A

Evidence snippets:
- Examples The following table function takes an INT64 parameter that is used to filter the results of a query: CREATE OR REPLACE TABLE FUNCTION mydataset . names by year ( y INT64 ) AS SELECT year , name , SUM ( number ) AS total FROM bigquery-public-data.usa names.usa 1910 current WHERE year = y GROUP BY year , name The following example specifies the return TABLE type in the RETURNS clause: CREATE OR REPLACE TABLE FUNCTION mydataset . names by year ( y INT64 ) RETURNS TABLE<name STRING , year INT64 , total INT64 > AS SELECT year , name , SUM ( number ) AS total FROM bigquery-public-data.usa names.usa 1910 current WHERE year = y GROUP BY year , name The following example computes total sales for items with the name item name from the orders table: CREATE TABLE FUNCTION mydataset . compute sales ( orders TABLE<item STRING , sales INT64 > , item name STRING ) AS ( SELECT SUM ( sales ) AS total sales , item FROM orders WHERE item = item name GROUP BY item ); CREATE PROCEDURE statement Creates a new procedure , which is a block of statements that can be called from other queries.
- Required permissions This statement requires the following IAM permissions : Permission Resource bigquery.bireservations.update BI Engine reservation Examples Allocating BI Engine capacity without preferred tables ALTER BI CAPACITY my-project.region-us.default SET OPTIONS ( size gb = 250 ) Deallocating BI capacity ALTER BI CAPACITY my-project.region-us.default SET OPTIONS ( size gb = 0 ) Removing a set of preferred tables from reservation ALTER BI CAPACITY my-project.region-us.default SET OPTIONS ( preferred tables = NULL ) Allocating BI Capacity with preferred tables list ALTER BI CAPACITY my-project.region-us.default SET OPTIONS ( size gb = 250 , preferred tables = [ "data project1.dataset1.table1" , "data project2.dataset2.table2" ] ) Overwriting list of preferred tables without changing the size ALTER BI CAPACITY region-us.default SET OPTIONS ( preferred tables = [ "dataset1.table1" , "data project2.dataset2.table2" ] ) ALTER CAPACITY SET OPTIONS statement Alters an existing capacity commitment.
- Examples Setting the expiration timestamp and description on a table The following example sets the expiration timestamp on a table to seven days from the execution time of the ALTER TABLE statement, and sets the description as well: ALTER TABLE mydataset . mytable SET OPTIONS ( expiration timestamp = TIMESTAMP ADD ( CURRENT TIMESTAMP (), INTERVAL 7 DAY ), description = "Table that expires seven days from now" ) Setting the require partition filter attribute on a partitioned table The following example sets the timePartitioning.requirePartitionFilter attribute on a partitioned table : ALTER TABLE mydataset . mypartitionedtable SET OPTIONS ( require partition filter = true ) Queries that reference this table must use a filter on the partitioning column, or else BigQuery returns an error.
- Example: replication interval seconds=900 Required permissions This statement requires the following IAM permissions : bigquery.tables.create bigquery.tables.get bigquery.tables.getData bigquery.tables.replicateData bigquery.jobs.create Example The following example creates a materialized view replica named mv replica in bq dataset : CREATE MATERIALIZED VIEW myproject . bq dataset . mv replica OPTIONS ( replication interval seconds = 600 ) AS REPLICA OF myproject.s3 dataset.my s3 mv CREATE EXTERNAL SCHEMA statement Creates a new federated dataset.

### bq command-line tool reference \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- Source ID: `site-docs-reference`
- Final score: 143
- Re-rank relevance: N/A

Evidence snippets:
- Note: To remove all rows from a table without deleting the schema, use the TRUNCATE TABLE statement. --require cache={true false} If specified, then run the query only if results can be retrieved from the cache. --require partition filter={true false} If specified, then a partition filter is required for queries over the supplied table.
- Note: You can use the TRUNCATE TABLE statement to remove all rows from a table without deleting the schema. --schema={ SCHEMA FILE SCHEMA } Specifies either the path to a local JSON schema file or a comma-separated list of column definitions in the form FIELD : DATA TYPE , FIELD : DATA TYPE .
- Synopsis bq insert [ FLAGS ] TABLE FILE Examples bq insert --ignore unknown values --template suffix = insert myDataset.myTable /tmp/myData.json echo '{"a":1, "b":2}' bq insert myDataset.myTable Flags and arguments The bq insert command uses the following flags and arguments: --ignore unknown values={true false} or -i={true false} When set to true , BigQuery ignores any key-value pairs that don't match the table's schema, and inserts the row with the data that does match the schema.
- The following is an example of gcloud and bq commands in a bash script: #!/bin/bash gcloud config set project myProject bq query --use legacy sql = false --destination table = myDataset.myTable \ 'SELECT word, SUM(word count) AS count FROM bigquery-public-data`.samples.shakespeare WHERE word LIKE "%raisin%" GROUP BY word' Use a service account You can use a service account to make authorized API calls or run query jobs on your behalf.

