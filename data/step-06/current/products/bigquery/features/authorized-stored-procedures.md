---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.623Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Authorized stored procedures"
feature_slug: "authorized-stored-procedures"
latest_feature_date: "2023-09-25"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "share stored procedure without table access"
  - "procedure execution permissions"
  - "authorized stored procedures"
  - "procedure sharing"
  - "authorized routines"
  - "GRANT EXECUTE"
  - "CREATE PROCEDURE"
---

# Authorized stored procedures

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery authorized stored procedures are now generally available and allow sharing procedures without direct underlying table access.

## Extended Definition

The provided BigQuery SQL DDL documentation shows that a stored procedure is created with `CREATE PROCEDURE` as a reusable block of statements that can be called from other queries. It also notes that procedure bodies can omit project qualifiers because the default project is the procedure owner’s project, which defines how referenced entities are resolved at execution. The supplied excerpts do not explicitly document "authorized stored procedures," sharing behavior without base-table access, or `GRANT EXECUTE` semantics, so those specific authorization capabilities cannot be confirmed from this evidence.

## Evidence Summary

This page provides syntax and context details for BigQuery `CREATE PROCEDURE`, but does not include explicit documentation of authorization/least-privilege sharing mechanics for authorized stored procedures.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- Examples The following table function takes an INT64 parameter that is used to filter the results of a query: CREATE OR REPLACE TABLE FUNCTION mydataset . names by year ( y INT64 ) AS SELECT year , name , SUM ( number ) AS total FROM bigquery-public-data.usa names.usa 1910 current WHERE year = y GROUP BY year , name The following example specifies the return TABLE type in the RETURNS clause: CREATE OR REPLACE TABLE FUNCTION mydataset . names by year ( y INT64 ) RETURNS TABLE<name STRING , year INT64 , total INT64 > AS SELECT year , name , SUM ( number ) AS total FROM bigquery-public-data.usa names.usa 1910 current WHERE year = y GROUP BY year , name The following example computes total sales for items with the name item name from the orders table: CREATE TABLE FUNCTION mydataset . compute sales ( orders TABLE<item STRING , sales INT64 > , item name STRING ) AS ( SELECT SUM ( sales ) AS total sales , item FROM orders WHERE item = item name GROUP BY item ); CREATE PROCEDURE statement Creates a new procedure , which is a block of statements that can be called from other queries.
- You can add Spark properties using the following format: [("key1","value1"),("key2", "value2")] For example: bq query --nouse legacy sql --dry run 'CREATE PROCEDURE my bq project.my dataset.spark proc() WITH CONNECTION my-project-id.us.my-connection OPTIONS( engine="SPARK", main file uri="gs://my-bucket/my-pyspark-main.py", properties=[ ("spark.executor.instances", "3"), ("spark.yarn.am.memory", "3g") ]) LANGUAGE PYTHON' Error in query string: Invalid value: \ Invalid properties: \ Attempted to set unsupported properties: \ [ spark:spark.yarn.am.memory ] at [ 1 :1 ] Note: You can use the BigQuery dry run feature to validate your stored procedure without creating it. main file uri STRING The Cloud Storage URI of the main Python, Scala, or Java JAR file of the Spark application.
- Default project in procedure body Procedure bodies can reference entities without specifying the project; the default project is the project which owns the procedure, not necessarily the project used to run the CREATE PROCEDURE statement.
- Alternatively, if you want to add the body of the stored procedure that's written in Python in the CREATE PROCEDURE statement, add the code after LANGUAGE PYTHON AS as shown in the example in Use inline code .

