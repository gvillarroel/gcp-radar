---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.677Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigLake"
feature_slug: "biglake"
latest_feature_date: "2022-07-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/biglake-intro"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/about-blms"
keywords:
  - "biglake"
  - "storage"
  - "engine"
  - "querying"
  - "governing"
  - "across"
  - "lakes"
  - "warehouses"
---

# BigLake

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigLake is a storage engine for querying and governing data across cloud data lakes and warehouses; BigLake is a storage engine for querying and unifying cross-cloud data lakes and warehouses with fine-grained table access controls.

## Extended Definition

BigLake is a storage engine for querying and governing data across cloud data lakes and warehouses; BigLake is a storage engine for querying and unifying cross-cloud data lakes and warehouses with fine-grained table access controls.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/biglake-intro](https://docs.cloud.google.com/bigquery/docs/biglake-intro)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/about-blms](https://docs.cloud.google.com/bigquery/docs/about-blms)

## Supporting Pages

### "Introduction to BigLake external tables \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/biglake-intro](https://docs.cloud.google.com/bigquery/docs/biglake-intro)
- Source ID: `site-docs-reference-5`
- Final score: 151
- Re-rank relevance: N/A

Evidence snippets:
- Cache-enabled tables with materialized views You can use materialized views over BigLake metadata cache-enabled tables to improve performance and efficiency when querying structured data stored in Cloud Storage or Amazon Simple Storage Service (Amazon S3).
- To find information about metadata refresh jobs, query the INFORMATION SCHEMA.JOBS view , as shown in the following example: SELECT FROM region-us.INFORMATION SCHEMA.JOBS BY PROJECT WHERE job id LIKE '%metadata cache refresh%' AND creation time > TIMESTAMP SUB ( CURRENT TIMESTAMP (), INTERVAL 6 HOUR ) ORDER BY start time DESC LIMIT 10 ; For Cloud Storage BigLake tables that are based on Parquet files, table statistics are collected during the metadata cache refresh and used to improve query plans.
- Supported data stores You can use BigLake tables with the following data stores: Amazon S3 by using BigQuery Omni Blob Storage by using BigQuery Omni Cloud Storage Temporary table support BigLake tables based on Cloud Storage can be temporary or permanent.
- For example, the following diagram demonstrates how the BigQuery Storage API lets users access authorized data using open source query engines such as Apache Spark: For more information about connectors supported by BigQuery, see BigQuery connectors .

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 139
- Re-rank relevance: N/A

Evidence snippets:
- You can add Spark properties using the following format: [("key1","value1"),("key2", "value2")] For example: bq query --nouse legacy sql --dry run 'CREATE PROCEDURE my bq project.my dataset.spark proc() WITH CONNECTION my-project-id.us.my-connection OPTIONS( engine="SPARK", main file uri="gs://my-bucket/my-pyspark-main.py", properties=[ ("spark.executor.instances", "3"), ("spark.yarn.am.memory", "3g") ]) LANGUAGE PYTHON' Error in query string: Invalid value: \ Invalid properties: \ Attempted to set unsupported properties: \ [ spark:spark.yarn.am.memory ] at [ 1 :1 ] Note: You can use the BigQuery dry run feature to validate your stored procedure without creating it. main file uri STRING The Cloud Storage URI of the main Python, Scala, or Java JAR file of the Spark application.
- CREATE TEMP TABLE Example ( x INT64 , y STRING ); INSERT INTO Example VALUES ( 5 , 'foo' ); INSERT INTO Example VALUES ( 6 , 'bar' ); SELECT FROM Example ; This script returns the following output: +-----+---+-----+ Row x y +-----+--- -----+ 1 5 foo 2 6 bar +-----+--- -----+ Load data across clouds Example 1 Suppose you have a BigLake table named myawsdataset.orders that references data from Amazon S3 .
- The source materialized view must be over an Amazon Simple Storage Service (Amazon S3) BigLake table.
- Required permissions This statement requires the following IAM permissions : Permission Resource bigquery.bireservations.update BI Engine reservation Examples Allocating BI Engine capacity without preferred tables ALTER BI CAPACITY my-project.region-us.default SET OPTIONS ( size gb = 250 ) Deallocating BI capacity ALTER BI CAPACITY my-project.region-us.default SET OPTIONS ( size gb = 0 ) Removing a set of preferred tables from reservation ALTER BI CAPACITY my-project.region-us.default SET OPTIONS ( preferred tables = NULL ) Allocating BI Capacity with preferred tables list ALTER BI CAPACITY my-project.region-us.default SET OPTIONS ( size gb = 250 , preferred tables = [ "data project1.dataset1.table1" , "data project2.dataset2.table2" ] ) Overwriting list of preferred tables without changing the size ALTER BI CAPACITY region-us.default SET OPTIONS ( preferred tables = [ "dataset1.table1" , "data project2.dataset2.table2" ] ) ALTER CAPACITY SET OPTIONS statement Alters an existing capacity commitment.

### About BigLake metastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/about-blms](https://docs.cloud.google.com/bigquery/docs/about-blms)
- Source ID: `site-docs-reference-5`
- Final score: 125
- Re-rank relevance: N/A

Evidence snippets:
- The best option depends on your use case, as shown in the following table: Use case Recommendation New BigLake metastore users that want their open source engine to access data in Cloud Storage and need interoperability with other engines, including BigQuery and AlloyDB for PostgreSQL.
- Querying Query performance for BigLake metastore tables from the BigQuery engine might be slow compared to querying data in standard BigQuery tables.
- The following table provides links to documentation for each engine: Engine Documentation Apache Spark Quickstart: Use with Spark Apache Flink Use with Apache Flink Trino Use with Trino Configuration options BigLake metastore can be configured in one of two ways: with the Iceberg REST catalog or the custom Iceberg catalog for BigQuery .
- Key capabilities As a component of BigLake, BigLake metastore provides several advantages for data management and analysis, including a serverless architecture, engine interoperability with open APIs, a unified user experience, and high-performance analytics, streaming, and AI when used with BigQuery.

