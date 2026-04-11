---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.831Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery scripting and stored procedures"
feature_slug: "bigquery-scripting-and-stored-procedures"
latest_feature_date: "2020-03-30"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/procedural-language"
  - "https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference"
keywords:
  - "BEGIN...END block"
  - "control flow in SQL scripts"
  - "DECLARE statement"
  - "stored procedure"
  - "CREATE PROCEDURE"
  - "BigQuery scripting"
  - "stored procedures"
  - "BQ scripting"
---

# BigQuery scripting and stored procedures

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery scripting and stored procedures became generally available.

## Extended Definition

BigQuery scripting and stored procedures became generally available.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/procedural-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/procedural-language)
- [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 64
- Re-rank relevance: N/A

Evidence snippets:
- You can add Spark properties using the following format: [("key1","value1"),("key2", "value2")] For example: bq query --nouse legacy sql --dry run 'CREATE PROCEDURE my bq project.my dataset.spark proc() WITH CONNECTION my-project-id.us.my-connection OPTIONS( engine="SPARK", main file uri="gs://my-bucket/my-pyspark-main.py", properties=[ ("spark.executor.instances", "3"), ("spark.yarn.am.memory", "3g") ]) LANGUAGE PYTHON' Error in query string: Invalid value: \ Invalid properties: \ Attempted to set unsupported properties: \ [ spark:spark.yarn.am.memory ] at [ 1 :1 ] Note: You can use the BigQuery dry run feature to validate your stored procedure without creating it. main file uri STRING The Cloud Storage URI of the main Python, Scala, or Java JAR file of the Spark application.
- BigQuery supports stored procedures for Apache Spark that are written in Python, Java, or Scala. pyspark code : The PySpark code for the stored procedure for Apache Spark if you want to pass the body of the procedure inline.
- Alternatively, if you want to add the body of the stored procedure that's written in Python in the CREATE PROCEDURE statement, add the code after LANGUAGE PYTHON AS as shown in the example in Use inline code .
- Example: container image="us-docker.pkg.dev/my-project-id/my-images/my-image” properties ARRAY<STRUCT<STRING, STRING>> A key-value pair to include properties for stored procedures for Spark.

### Procedural language \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/procedural-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/procedural-language)
- Source ID: `site-docs-reference`
- Final score: 49
- Re-rank relevance: STRONG
- Re-rank rationale: The page is the GoogleSQL procedural language reference and explicitly connects multi-statement scripts to stored procedures, defining core scripting behavior.

Evidence snippets:
- To learn how you can convert multi-statement queries into stored procedures, see Work with stored procedures .
- Multiple variable names can appear in a single DECLARE statement, but only one variable type and expression .
- END ; BEGIN...EXCEPTION blocks also support DECLARE statements, just like any other BEGIN block.
- Each stored procedure has an independent store of label names.

### bq command-line tool reference \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- Source ID: `site-docs-reference`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- Routines include persistent user-defined functions , table functions ( Preview ), and stored procedures . --row access policies When specified, lists all the row-level access policies on a table.
- A routine can be a persistent user-defined function , a table function ( Preview ), or a stored procedure . --table={true false} or -t={true false} To delete a table or view, set to true .
- A routine can be a persistent user-defined function , a table function ( Preview ), or a stored procedure . --schema={true false} To display only the table's schema, set to true .

