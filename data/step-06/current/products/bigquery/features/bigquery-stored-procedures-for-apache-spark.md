---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.709Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery stored procedures for Apache Spark"
feature_slug: "bigquery-stored-procedures-for-apache-spark"
latest_feature_date: "2022-10-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "stored procedures for Apache Spark"
  - "Apache Spark SQL procedure"
  - "Spark stored procedure"
  - "BigQuery procedures in Spark"
  - "CREATE PROCEDURE"
  - "Spark procedures"
  - "stored procedures"
---

# BigQuery stored procedures for Apache Spark

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery now supports creating and using stored procedures for Apache Spark workloads.

## Extended Definition

BigQuery’s BigQuery Standard SQL DDL documentation states that BigQuery supports stored procedures for Apache Spark, including procedures written in Python, Java, and Scala, with an engine setting used to control the Spark procedure processing type. It also references SQL examples for creating and using these procedures (including `CREATE PROCEDURE` usage), while noting that some documented behavior is explicitly scoped to procedures written in Python.

## Evidence Summary

The cited DDL reference page is the source confirming Spark procedure support in BigQuery, supported implementation languages, and example/usage guidance for procedure definitions.

## Source Links

- [https://cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 72
- Re-rank relevance: N/A

Evidence snippets:
- BigQuery supports stored procedures for Apache Spark that are written in Python, Java, or Scala. pyspark code : The PySpark code for the stored procedure for Apache Spark if you want to pass the body of the procedure inline.
- Example: description="A procedure that runs a query." engine STRING The engine type for processing stored procedures for Apache Spark.
- SQL examples You can also see examples of stored procedures for Apache Spark .
- Applies only to stored procedures for Apache Spark written in Python.

