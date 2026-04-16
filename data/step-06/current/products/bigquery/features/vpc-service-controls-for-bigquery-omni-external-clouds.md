---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.682Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "VPC Service Controls for BigQuery Omni external clouds"
feature_slug: "vpc-service-controls-for-bigquery-omni-external-clouds"
latest_feature_date: "2022-06-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/biglake-intro"
  - "https://docs.cloud.google.com/bigquery/docs/analytics-hub-introduction"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "vpc"
  - "controls"
  - "bigquery"
  - "omni"
  - "external"
  - "clouds"
  - "feature"
  - "lets"
---

# VPC Service Controls for BigQuery Omni external clouds

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

This feature lets you configure VPC Service Controls perimeters and read or write permissions for BigQuery Omni access to external clouds.

## Extended Definition

This feature lets you configure VPC Service Controls perimeters and read or write permissions for BigQuery Omni access to external clouds.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/biglake-intro](https://docs.cloud.google.com/bigquery/docs/biglake-intro)
- [https://docs.cloud.google.com/bigquery/docs/analytics-hub-introduction](https://docs.cloud.google.com/bigquery/docs/analytics-hub-introduction)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### "Introduction to BigLake external tables \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/biglake-intro](https://docs.cloud.google.com/bigquery/docs/biglake-intro)
- Source ID: `site-docs-reference-5`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- CREATE OR REPLACE TABLE temp table AS ( SELECT l shipmode , l linenumber , l orderkey FROM aws dataset . lineitem WHERE l shipmode IN ( 'AIR' , 'REG AIR' ) AND l commitdate l receiptdate AND l shipdate l commitdate AND l receiptdate >= DATE '1997-01-01' AND l receiptdate DATE '1997-02-01' ); After the temporary table is created, the JOIN operation completes, and the following query is run: SELECT l shipmode , o orderpriority , count ( l linenumber ) AS num lineitems FROM bigquery dataset . orders JOIN temp table ON orders . o orderkey = lineitem . l orderkey GROUP BY l shipmode , o orderpriority ORDER BY l shipmode , o orderpriority ; As another example, consider the following cross-cloud join: SELECT c mktsegment , c name FROM bigquery dataset . customer WHERE c mktsegment = 'BUILDING' UNION ALL SELECT c mktsegment , c name FROM aws dataset . customer WHERE c mktsegment = 'FURNITURE' LIMIT 10 ; In this query, the LIMIT clause is not pushed down to the BigQuery Omni region.
- Cross-cloud join examples The following query joins an orders table in a BigQuery region with a lineitem table in a BigQuery Omni region: SELECT l shipmode , o orderpriority , count ( l linenumber ) AS num lineitems FROM bigquery dataset . orders JOIN aws dataset . lineitem ON orders . o orderkey = lineitem . l orderkey WHERE l shipmode IN ( 'AIR' , 'REG AIR' ) AND l commitdate l receiptdate AND l shipdate l commitdate AND l receiptdate >= DATE '1997-01-01' AND l receiptdate DATE '1997-02-01' GROUP BY l shipmode , o orderpriority ORDER BY l shipmode , o orderpriority ; This query is broken into local and remote parts.
- Supported data stores You can use BigLake tables with the following data stores: Amazon S3 by using BigQuery Omni Blob Storage by using BigQuery Omni Cloud Storage Temporary table support BigLake tables based on Cloud Storage can be temporary or permanent.
- For example, the following diagram demonstrates how the BigQuery Storage API lets users access authorized data using open source query engines such as Apache Spark: For more information about connectors supported by BigQuery, see BigQuery connectors .

### Introduction to BigQuery sharing \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/analytics-hub-introduction](https://docs.cloud.google.com/bigquery/docs/analytics-hub-introduction)
- Source ID: `site-docs-reference-5`
- Final score: 124
- Re-rank relevance: N/A

Evidence snippets:
- As a publisher, you create or use an existing BigQuery dataset in your project with the following supported objects that you want to deliver to your subscribers: Authorized views Authorized datasets BigQuery ML models External tables Materialized views Routines User-defined functions (UDFs) Table functions SQL stored procedures Tables Table snapshots Views Shared datasets support column-level security and row-level security .
- Compliance BigQuery sharing, as part of BigQuery, is compliant with the following compliance programs: ISO 27001 ISO 27017 ISO 27018 SOC 1 SOC 2 SOC 3 PCI Penetration Testing HIPAA HITRUST VPC Service Controls You can set the ingress and egress rules needed to let publishers and subscribers access data from projects that have VPC Service Controls perimeters.
- BigQuery sharing supports the following Google Cloud resources: BigQuery datasets Pub/Sub topics Publisher workflow The following diagram describes how a publisher shares assets: The following sections describe the features in this workflow.
- Introduction to BigQuery sharing BigQuery sharing (formerly Analytics Hub) is a data exchange platform that lets you share data and insights at scale across organizational boundaries with a robust security and privacy framework.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 123
- Re-rank relevance: N/A

Evidence snippets:
- You can add Spark properties using the following format: [("key1","value1"),("key2", "value2")] For example: bq query --nouse legacy sql --dry run 'CREATE PROCEDURE my bq project.my dataset.spark proc() WITH CONNECTION my-project-id.us.my-connection OPTIONS( engine="SPARK", main file uri="gs://my-bucket/my-pyspark-main.py", properties=[ ("spark.executor.instances", "3"), ("spark.yarn.am.memory", "3g") ]) LANGUAGE PYTHON' Error in query string: Invalid value: \ Invalid properties: \ Attempted to set unsupported properties: \ [ spark:spark.yarn.am.memory ] at [ 1 :1 ] Note: You can use the BigQuery dry run feature to validate your stored procedure without creating it. main file uri STRING The Cloud Storage URI of the main Python, Scala, or Java JAR file of the Spark application.
- Example: replication interval seconds=900 Required permissions This statement requires the following IAM permissions : bigquery.tables.create bigquery.tables.get bigquery.tables.getData bigquery.tables.replicateData bigquery.jobs.create Example The following example creates a materialized view replica named mv replica in bq dataset : CREATE MATERIALIZED VIEW myproject . bq dataset . mv replica OPTIONS ( replication interval seconds = 600 ) AS REPLICA OF myproject.s3 dataset.my s3 mv CREATE EXTERNAL SCHEMA statement Creates a new federated dataset.
- Cannot appear with main file uri in procedure option list . argument type : Any valid BigQuery type . procedure argument mode : Specifies whether an argument is an input, an output, or both. procedure option list The procedure option list lets you specify procedure options.
- Required permissions This statement requires the following IAM permissions : Permission Resource bigquery.tables.delete The external table to delete. bigquery.tables.get The external table to delete.

