---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.936Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Standard SQL DML in BigQuery"
feature_slug: "standard-sql-dml-in-bigquery"
latest_feature_date: "2016-09-29"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/dml-syntax"
  - "https://docs.cloud.google.com/bigquery/docs/data-manipulation-language"
  - "https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference"
keywords:
  - "data manipulation language"
  - "INSERT INTO"
  - "Standard SQL DML"
  - "write statements"
  - "INSERT"
  - "DELETE"
  - "MERGE"
  - "UPDATE"
---

# Standard SQL DML in BigQuery

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery introduced DML support in standard SQL for inserting, updating, and deleting data.

## Extended Definition

BigQuery introduced DML support in standard SQL for inserting, updating, and deleting data.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/dml-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/dml-syntax)
- [https://docs.cloud.google.com/bigquery/docs/data-manipulation-language](https://docs.cloud.google.com/bigquery/docs/data-manipulation-language)
- [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)

## Supporting Pages

### "Data manipulation language (DML) statements in GoogleSQL \_|\_ BigQuery\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/dml-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/dml-syntax)
- Source ID: `site-docs-reference`
- Final score: 150
- Re-rank relevance: STRONG
- Re-rank rationale: This page is the core GoogleSQL DML reference and directly describes BigQuery DML operations such as INSERT, UPDATE, and DELETE.

Evidence snippets:
- Warehouse ON NewArrivals . warehouse = Warehouse . warehouse WHERE DetailedInventory . product = NewArrivals . product AND Warehouse . state = 'WA' Before: DetailedInventory +----------------------+----------+--------------------+----------+----------------+ product quantity supply constrained comments specifications +----------------------+----------+--------------------+----------+----------------+ countertop microwave 20 NULL [] NULL dishwasher 30 false [] NULL dryer 30 false [] NULL front load washer 20 false [] NULL microwave 20 false [] NULL oven 5 false [] NULL refrigerator 10 false [] NULL top load washer 10 false [] NULL +----------------------+----------+--------------------+----------+----------------+ New arrivals +-----------------+----------+--------------+ product quantity warehouse +-----------------+----------+--------------+ dryer 200 warehouse #2 oven 300 warehouse #3 top load washer 100 warehouse #1 +-----------------+----------+--------------+ Warehouse +--------------+-------+ warehouse state +--------------+-------+ warehouse #1 WA warehouse #2 CA warehouse #3 WA +--------------+-------+ After: +----------------------+----------+--------------------+----------+----------------+ product quantity supply constrained comments specifications +----------------------+----------+--------------------+----------+----------------+ countertop microwave 20 NULL [] NULL dishwasher 30 false [] NULL dryer 30 false [] NULL front load washer 20 false [] NULL microwave 20 false [] NULL oven 5 true [] NULL refrigerator 10 false [] NULL top load washer 10 true [] NULL +----------------------+----------+--------------------+----------+----------------+ MERGE statement A MERGE statement is a DML statement that can combine INSERT , UPDATE , and DELETE operations into a single statement and perform the operations atomically.
- MERGE [ INTO ] target name [[ AS ] alias ] USING source name [[ AS ] alias ] ON merge condition { when clause } + when clause ::= matched clause not matched by target clause not matched by source clause matched clause ::= WHEN MATCHED [ AND search condition ] THEN { merge update clause merge delete clause } not matched by target clause ::= WHEN NOT MATCHED [ BY TARGET ] [ AND search condition ] THEN merge insert clause not matched by source clause ::= WHEN NOT MATCHED BY SOURCE [ AND search condition ] THEN { merge update clause merge delete clause } merge condition ::= bool expression search condition ::= bool expression merge update clause ::= UPDATE SET update item [ , update item ] update item ::= column name = expression merge delete clause ::= DELETE merge insert clause ::= INSERT [ ( column 1 [ , ..., column n ] ) ] input input ::= VALUES ( expr 1 [ , ..., expr n ] ) ROW expr ::= expression DEFAULT Where: target name target name is the name of the table you’re changing. source name source name is a table name or subquery. merge condition A MERGE statement performs a JOIN between the target and the source.
- If there is at least one matched clause performing an UPDATE operation, a runtime error is returned when multiple rows from the source table match one row from the target table, and you are trying to update or delete that row in the target table. not matched by target clause The not matched by target clause defines how to insert into the target table if a row from source table does not match any row in the target table. not matched by source clause The not matched by source clause defines how to update or delete a row in the target table if that row does not match any row in the source table.
- Data manipulation language (DML) statements in GoogleSQL The BigQuery data manipulation language (DML) enables you to update, insert, and delete data from your BigQuery tables.

### "Transform data with data manipulation language (DML) \_|\_ BigQuery \_|\_\

- URL: [https://docs.cloud.google.com/bigquery/docs/data-manipulation-language](https://docs.cloud.google.com/bigquery/docs/data-manipulation-language)
- Source ID: `site-docs-reference`
- Final score: 138
- Re-rank relevance: STRONG
- Re-rank rationale: The page explicitly defines BigQuery DML capabilities and states that DML requires GoogleSQL, which directly documents this feature.

Evidence snippets:
- Rows that were recently written using the tabledata.insertall streaming method can't be modified with data manipulation language (DML), such as UPDATE , DELETE , MERGE , or TRUNCATE statements.
- MERGE statement The MERGE statement combines the INSERT , UPDATE , and DELETE operations into a single statement and performs the operations atomically to merge data from one table to another.
- A MERGE DML statement does not conflict with other concurrently running DML statements as long as the statement only inserts rows and does not delete or update any existing rows.
- Transform data with data manipulation language (DML) The BigQuery data manipulation language (DML) lets you update, insert, and delete data from your BigQuery tables.

### bq command-line tool reference \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- Source ID: `site-docs-reference`
- Final score: 84
- Re-rank relevance: WEAK
- Re-rank rationale: The page defines how to invoke `bq` commands and run queries, but it does not describe SQL DML semantics or specific insert/update/delete support.

Evidence snippets:
- The default value is false . --target dataset= DATASET When specified, updates the target dataset for a transfer configuration. --time partitioning expiration= SECONDS An integer that updates (in seconds) when a time-based partition should be deleted.
- To verify the version of the bq command-line tool, enter bq version . --max rows per request= MAX ROWS An integer that specifies the maximum number of rows to return per read. --project id= PROJECT Specifies the project to use for commands. --proxy address= PROXY Specifies the name or IP address of the proxy host to use for connecting to Google Cloud. --proxy password= PASSWORD Specifies the password to use when authenticating with the proxy host. --proxy port= PORT Specifies the port number to use to connect to the proxy host. --proxy username= USERNAME Specifies the username to use when authenticating with the proxy host. --quiet={true false} or -q={true false} To suppress status updates while jobs are running, set to true .
- If the configuration setting is not specified, the default value is true ; the query uses legacy SQL. --vertex ai model id= VERTEX AI MODEL ID When specified, updates the model ID for a BigQuery ML model that is registered in the Vertex AI Model Registry. --view= QUERY When specified, updates the SQL query for a view. --view udf resource= FILE Updates the Cloud Storage URI or the path to a local code file that is loaded and evaluated immediately as a user-defined function resource in a view's SQL query.
- Synopsis bq insert [ FLAGS ] TABLE FILE Examples bq insert --ignore unknown values --template suffix = insert myDataset.myTable /tmp/myData.json echo '{"a":1, "b":2}' bq insert myDataset.myTable Flags and arguments The bq insert command uses the following flags and arguments: --ignore unknown values={true false} or -i={true false} When set to true , BigQuery ignores any key-value pairs that don't match the table's schema, and inserts the row with the data that does match the schema.

