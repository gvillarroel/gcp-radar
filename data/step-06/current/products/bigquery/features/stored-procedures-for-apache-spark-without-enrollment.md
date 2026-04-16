---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.541Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Stored procedures for Apache Spark without enrollment"
feature_slug: "stored-procedures-for-apache-spark-without-enrollment"
latest_feature_date: "2023-10-19"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/controlling-costs"
  - "https://docs.cloud.google.com/bigquery/docs/bqms-use-dataproc"
keywords:
  - "stored"
  - "procedures"
  - "apache"
  - "spark"
  - "without"
  - "enrollment"
  - "bigquery"
  - "supports"
---

# Stored procedures for Apache Spark without enrollment

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery supports Apache Spark stored procedures without requiring enrollment.

## Extended Definition

BigQuery supports Apache Spark stored procedures without requiring enrollment.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/controlling-costs](https://docs.cloud.google.com/bigquery/docs/controlling-costs)
- [https://docs.cloud.google.com/bigquery/docs/bqms-use-dataproc](https://docs.cloud.google.com/bigquery/docs/bqms-use-dataproc)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- BigQuery supports stored procedures for Apache Spark that are written in Python, Java, or Scala. pyspark code : The PySpark code for the stored procedure for Apache Spark if you want to pass the body of the procedure inline.
- You can add Spark properties using the following format: [("key1","value1"),("key2", "value2")] For example: bq query --nouse legacy sql --dry run 'CREATE PROCEDURE my bq project.my dataset.spark proc() WITH CONNECTION my-project-id.us.my-connection OPTIONS( engine="SPARK", main file uri="gs://my-bucket/my-pyspark-main.py", properties=[ ("spark.executor.instances", "3"), ("spark.yarn.am.memory", "3g") ]) LANGUAGE PYTHON' Error in query string: Invalid value: \ Invalid properties: \ Attempted to set unsupported properties: \ [ spark:spark.yarn.am.memory ] at [ 1 :1 ] Note: You can use the BigQuery dry run feature to validate your stored procedure without creating it. main file uri STRING The Cloud Storage URI of the main Python, Scala, or Java JAR file of the Spark application.
- To create a stored procedure for Apache Spark, additional IAM permission are needed: Permission Resource bigquery.connections.delegate The connection which you use to create the stored procedure for Apache Spark .
- Example: description="A procedure that runs a query." engine STRING The engine type for processing stored procedures for Apache Spark.

### Estimate and control costs \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/controlling-costs](https://docs.cloud.google.com/bigquery/docs/controlling-costs)
- Source ID: `site-docs-root`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- These are charges for using the BigQuery Apache Spark procedures , which are charged this way regardless of the computing model used by the project.
- Unexpected storage charges Scenarios that could lead to storage charge increases: Increases in the amount of data that is stored in your tables—use the INFORMATION SCHEMA.TABLE STORAGE USAGE TIMELINE view to monitor the change in bytes for your tables Changing dataset billing models Increasing the time-travel window for physical billing model datasets Modification of tables that have data in long-term storage , causing them to become active storage Deletion of table(s) or dataset(s) resulted in higher BigQuery storage costs The BigQuery time travel feature retains deleted data for duration of the configured time-travel window and an additional 7 days for fail-safe recovery.
- To learn about billing, alerts, and visualizing data, see the following topics: Create, edit, or delete budgets and budget alerts Export Cloud Billing data to BigQuery Visualize your costs with Data Studio Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Unexpected charges for pay-as-you go (PAYG) slots for the BigQuery Enterprise edition In the Cloud Billing report, apply a filter with the label goog-bq-feature-type with the value SPARK PROCEDURE .

### "Configure BigLake metastore for Managed Service for Apache Spark and Spark\

- URL: [https://docs.cloud.google.com/bigquery/docs/bqms-use-dataproc](https://docs.cloud.google.com/bigquery/docs/bqms-use-dataproc)
- Source ID: `site-docs-reference-5`
- Final score: 27
- Re-rank relevance: N/A

Evidence snippets:
- Configure the Iceberg custom catalog plugin for BigLake metastore: FLINK VERSION = 1 .19 ICEBERG VERSION = 1 .6.1 cd /usr/lib/flink sudo wget -c https://repo.maven.apache.org/maven2/org/apache/iceberg/iceberg-flink-runtime- ${ FLINK VERSION } / ${ ICEBERG VERSION } /iceberg-flink-runtime- ${ FLINK VERSION } - ${ ICEBERG VERSION } .jar -P lib sudo gcloud storage cp gs://spark-lib/bigquery/iceberg-bigquery-catalog- ${ ICEBERG VERSION } -1.0.2.jar lib/ Start the Flink session on YARN: HADOOP CLASSPATH = hadoop classpath sudo bin/yarn-session.sh -nm flink-dataproc -d sudo bin/sql-client.sh embedded \ -s yarn-session Create a catalog in Flink: CREATE CATALOG CATALOG NAME WITH ( 'type' = 'iceberg' , 'warehouse' = ' WAREHOUSE DIRECTORY ' , 'catalog-impl' = 'org.apache.iceberg.gcp.bigquery.BigQueryMetastoreCatalog' , 'gcp project' = ' PROJECT ID ' , 'gcp location' = ' LOCATION ' ); Replace the following: CATALOG NAME : the Flink catalog identifier, which is linked to a BigLake metastore catalog.
- Required roles To get the permissions that you need to configure BigLake metastore, ask your administrator to grant you the following IAM roles: Create a Managed Service for Apache Spark cluster: Dataproc Worker ( roles/dataproc.worker ) on the Compute Engine default service account in the project Create BigLake metastore tables: Dataproc Worker ( roles/dataproc.worker ) on the Dataproc VM service account in the project BigQuery Data Editor ( roles/bigquery.dataEditor ) on the Dataproc VM service account in the project Storage Object User ( roles/storage.objectUser ) on the Dataproc VM service account in the project Query BigLake metastore tables: BigQuery Data Viewer ( roles/bigquery.dataViewer ) on the project BigQuery User ( roles/bigquery.user ) on the project Storage Object Viewer ( roles/storage.objectViewer ) on the project For more information about granting roles, see Manage access to projects, folders, and organizations .
- This document explains how to configure the custom Iceberg catalog for BigQuery in BigLake metastore with either Managed Service for Apache Spark or Managed Service for Apache Spark .
- CATALOG NAME .catalog-impl" , "org.apache.iceberg.gcp.bigquery.BigQueryMetastoreCatalog" ) \ . config ( "spark.sql.catalog.

