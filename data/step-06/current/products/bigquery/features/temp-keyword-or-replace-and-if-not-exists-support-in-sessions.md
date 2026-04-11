---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.694Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "TEMP keyword OR REPLACE and IF NOT EXISTS support in sessions"
feature_slug: "temp-keyword-or-replace-and-if-not-exists-support-in-sessions"
latest_feature_date: "2023-01-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "CREATE TEMP FUNCTION IF NOT EXISTS"
  - "TEMP keyword"
  - "CREATE OR REPLACE TEMP FUNCTION"
  - "CREATE TEMP FUNCTION OR REPLACE"
  - "temporary function overwrite"
  - "TEMP OR REPLACE"
  - "statement idempotency"
  - "IF NOT EXISTS"
---

# TEMP keyword OR REPLACE and IF NOT EXISTS support in sessions

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Session statements using the TEMP keyword can now include OR REPLACE and IF NOT EXISTS.

## Extended Definition

In BigQuery GoogleSQL DDL, `CREATE` statements for certain objects support combining temporary-object syntax with both idempotent/replacement options. The documented syntax shows temporary SQL UDF creation using `CREATE [ OR REPLACE ] [ TEMPORARY TEMP ] FUNCTION [ IF NOT EXISTS ] ...`, and stored procedure creation uses `CREATE [ OR REPLACE ] PROCEDURE [ IF NOT EXISTS ] ...`, meaning these clauses can be used together with temporary UDF/procedure definitions. The provided pages confirm the syntax form but do not provide broader behavioral details for all possible session statement types.

## Evidence Summary

The DDL reference page provides grammar-level support for `TEMP/TEMPORARY` objects with `[OR REPLACE]` and `[IF NOT EXISTS]` in `CREATE FUNCTION` and `CREATE PROCEDURE` statements.

## Source Links

- [https://cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- CREATE MATERIALIZED VIEW IF NOT EXISTS myproject . mydataset . new mv OPTIONS ( expiration timestamp = TIMESTAMP ADD ( CURRENT TIMESTAMP (), INTERVAL 48 HOUR ), friendly name = "new mv" , description = "a view that expires in 2 days" , labels =[ ( "org unit" , "development" ) ] , enable refresh = false ) AS SELECT column 1 , column 2 , column 3 FROM myproject.mydataset.mytable The materialized view is defined using the following GoogleSQL query: SELECT column 1, column 2, column 3 FROM myproject.mydataset.mytable The materialized view option list specifies the: Expiration time: 48 hours from the time the view is created Friendly name: new mv Description: A view that expires in 2 days Label: org unit = development Refresh enabled: false Creating a materialized view with partitioning and clustering The following example creates a materialized view named new mv in mydataset , partitioned by the col datetime column and clustered by the col int column: CREATE MATERIALIZED VIEW myproject . mydataset . new mv PARTITION BY DATE ( col datetime ) CLUSTER BY col int AS SELECT col int , col datetime , COUNT ( 1 ) as cnt FROM myproject . mydataset . mv base table GROUP BY col int , col datetime The base table, mv base table , must also be partitioned by the col datetime column.
- The table option list specifies the following: Expiration time: 365 days after the time that the table is created Friendly name: my table Description: A table that expires in 1 year Label: org unit = development Create a clone of a table: ignore if the destination table already exists The following example creates the table clone myproject.mydataset.mytableclone based on the table myproject.mydataset.mytable : CREATE TABLE IF NOT EXISTS myproject.mydataset.mytableclone CLONE myproject.mydataset.mytable OPTIONS ( expiration timestamp = TIMESTAMP ADD ( CURRENT TIMESTAMP (), INTERVAL 365 DAY ), friendly name = "my table" , description = "A table that expires in 1 year" , labels =[ ( "org unit" , "development" ) ] ) The table option list specifies the following: Expiration time: 365 days after the time the table is created Friendly name: my table Description: A table that expires in 1 year Label: org unit = development If the table name exists in the dataset, then no action is taken, and no error is returned.
- Syntax To create a GoogleSQL stored procedure , use the following syntax: CREATE [ OR REPLACE ] PROCEDURE [ IF NOT EXISTS ] [[ project name . ] dataset name . ] procedure name ( procedure argument [ , ... ] ) [ OPTIONS ( procedure option list ) ] BEGIN multi statement query END ; procedure argument : [ procedure argument mode ] argument name argument type procedure argument mode : IN OUT INOUT To create a stored procedure for Apache Spark , use the following syntax: CREATE [ OR REPLACE ] PROCEDURE [ IF NOT EXISTS ] [[ project name . ] dataset name . ] procedure name ( procedure argument [ , ... ] ) [ EXTERNAL SECURITY external security ] WITH CONNECTION connection project id . connection region . connection id [ OPTIONS ( procedure option list ) ] LANGUAGE language [ AS pyspark code ] procedure argument : [ procedure argument mode ] argument name argument type procedure argument mode : IN OUT INOUT external security : INVOKER Arguments OR REPLACE : Replaces any procedure with the same name if it exists.
- Syntax To create a SQL UDF, use the following syntax: CREATE [ OR REPLACE ] [ TEMPORARY TEMP ] FUNCTION [ IF NOT EXISTS ] [[ project name . ] dataset name . ] function name ( [ named parameter [ , ... ]] ) ( [ named parameter [ , ... ]] ) [ RETURNS data type ] AS ( sql expression ) [ OPTIONS ( function option list ) ] named parameter : param name param type To create a JavaScript UDF, use the following syntax: CREATE [ OR REPLACE ] [ TEMPORARY TEMP ] FUNCTION [ IF NOT EXISTS ] [[ project name . ] dataset name . ] function name ( [ named parameter [ , ... ]] ) RETURNS data type [ determinism specifier ] LANGUAGE js [ OPTIONS ( function option list ) ] AS javascript code named parameter : param name param type determinism specifier : { DETERMINISTIC NOT DETERMINISTIC } To create a Python UDF, use the following syntax: Preview This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .

