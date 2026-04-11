---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.954Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "GROUP EACH BY"
feature_slug: "group-each-by"
latest_feature_date: "2013-03-14"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "each keyword"
  - "distributed aggregation"
  - "legacy GROUP EACH syntax"
  - "legacy SQL GROUP EACH"
  - "GROUP EACH syntax"
  - "GROUP EACH BY"
  - "GROUP EACH"
  - "legacy SQL"
---

# GROUP EACH BY

Product: BigQuery
Coverage: LOW

## Step 02 Summary

Added the GROUP EACH BY SQL capability to support aggregations across highly distributed values.

## Extended Definition

Added the GROUP EACH BY SQL capability to support aggregations across highly distributed values.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- You can add Spark properties using the following format: [("key1","value1"),("key2", "value2")] For example: bq query --nouse legacy sql --dry run 'CREATE PROCEDURE my bq project.my dataset.spark proc() WITH CONNECTION my-project-id.us.my-connection OPTIONS( engine="SPARK", main file uri="gs://my-bucket/my-pyspark-main.py", properties=[ ("spark.executor.instances", "3"), ("spark.yarn.am.memory", "3g") ]) LANGUAGE PYTHON' Error in query string: Invalid value: \ Invalid properties: \ Attempted to set unsupported properties: \ [ spark:spark.yarn.am.memory ] at [ 1 :1 ] Note: You can use the BigQuery dry run feature to validate your stored procedure without creating it. main file uri STRING The Cloud Storage URI of the main Python, Scala, or Java JAR file of the Spark application.
- You cannot use this statement to rename the following: Subfields, such as nested columns in a STRUCT Partitioning columns Clustering columns Fields that are part of primary key constraints or foreign key constraints Columns in a table that has row access policies After one or more columns in a table are renamed, you cannot do the following: Query the table with legacy SQL.
- You cannot use this statement to drop the following: Partitioned columns Clustered columns Fields that are part of primary key constraints or foreign key constraints Nested columns inside existing RECORD fields Columns in a table that has row access policies After one or more columns in a table are dropped you cannot do the following: Query the table with legacy SQL.
- This option can be one of the following: 'default legacy sql' (default): Use legacy SQL if the query dialect isn't specified at the job level. 'default google sql' : Use GoogleSQL if the query dialect isn't specified at the job level. 'only google sql' : Use GoogleSQL if the query dialect is not specified at the job level.

