---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.488Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "PySpark editor for Spark stored procedures"
feature_slug: "pyspark-editor-for-spark-stored-procedures"
latest_feature_date: "2024-03-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/bqms-use-dataproc"
  - "https://docs.cloud.google.com/bigquery/docs/authorized-routines"
keywords:
  - "pyspark"
  - "editor"
  - "spark"
  - "stored"
  - "procedures"
  - "bigquery"
  - "provides"
  - "creating"
---

# PySpark editor for Spark stored procedures

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery provides a PySpark editor for creating stored Python procedures for Apache Spark.

## Extended Definition

BigQuery provides a PySpark editor for creating stored Python procedures for Apache Spark.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/bqms-use-dataproc](https://docs.cloud.google.com/bigquery/docs/bqms-use-dataproc)
- [https://docs.cloud.google.com/bigquery/docs/authorized-routines](https://docs.cloud.google.com/bigquery/docs/authorized-routines)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 184
- Re-rank relevance: N/A

Evidence snippets:
- You can add Spark properties using the following format: [("key1","value1"),("key2", "value2")] For example: bq query --nouse legacy sql --dry run 'CREATE PROCEDURE my bq project.my dataset.spark proc() WITH CONNECTION my-project-id.us.my-connection OPTIONS( engine="SPARK", main file uri="gs://my-bucket/my-pyspark-main.py", properties=[ ("spark.executor.instances", "3"), ("spark.yarn.am.memory", "3g") ]) LANGUAGE PYTHON' Error in query string: Invalid value: \ Invalid properties: \ Attempted to set unsupported properties: \ [ spark:spark.yarn.am.memory ] at [ 1 :1 ] Note: You can use the BigQuery dry run feature to validate your stored procedure without creating it. main file uri STRING The Cloud Storage URI of the main Python, Scala, or Java JAR file of the Spark application.
- BigQuery supports stored procedures for Apache Spark that are written in Python, Java, or Scala. pyspark code : The PySpark code for the stored procedure for Apache Spark if you want to pass the body of the procedure inline.
- Syntax To create a GoogleSQL stored procedure , use the following syntax: CREATE [ OR REPLACE ] PROCEDURE [ IF NOT EXISTS ] [[ project name . ] dataset name . ] procedure name ( procedure argument [ , ... ] ) [ OPTIONS ( procedure option list ) ] BEGIN multi statement query END ; procedure argument : [ procedure argument mode ] argument name argument type procedure argument mode : IN OUT INOUT To create a stored procedure for Apache Spark , use the following syntax: CREATE [ OR REPLACE ] PROCEDURE [ IF NOT EXISTS ] [[ project name . ] dataset name . ] procedure name ( procedure argument [ , ... ] ) [ EXTERNAL SECURITY external security ] WITH CONNECTION connection project id . connection region . connection id [ OPTIONS ( procedure option list ) ] LANGUAGE language [ AS pyspark code ] procedure argument : [ procedure argument mode ] argument name argument type procedure argument mode : IN OUT INOUT external security : INVOKER Arguments OR REPLACE : Replaces any procedure with the same name if it exists.
- To create a stored procedure for Apache Spark, additional IAM permission are needed: Permission Resource bigquery.connections.delegate The connection which you use to create the stored procedure for Apache Spark .

### "Configure BigLake metastore for Managed Service for Apache Spark and Spark\

- URL: [https://docs.cloud.google.com/bigquery/docs/bqms-use-dataproc](https://docs.cloud.google.com/bigquery/docs/bqms-use-dataproc)
- Source ID: `site-docs-reference-5`
- Final score: 149
- Re-rank relevance: N/A

Evidence snippets:
- Required roles To get the permissions that you need to configure BigLake metastore, ask your administrator to grant you the following IAM roles: Create a Managed Service for Apache Spark cluster: Dataproc Worker ( roles/dataproc.worker ) on the Compute Engine default service account in the project Create BigLake metastore tables: Dataproc Worker ( roles/dataproc.worker ) on the Dataproc VM service account in the project BigQuery Data Editor ( roles/bigquery.dataEditor ) on the Dataproc VM service account in the project Storage Object User ( roles/storage.objectUser ) on the Dataproc VM service account in the project Query BigLake metastore tables: BigQuery Data Viewer ( roles/bigquery.dataViewer ) on the project BigQuery User ( roles/bigquery.user ) on the project Storage Object Viewer ( roles/storage.objectViewer ) on the project For more information about granting roles, see Manage access to projects, folders, and organizations .
- Configure the Iceberg custom catalog plugin for BigLake metastore: FLINK VERSION = 1 .19 ICEBERG VERSION = 1 .6.1 cd /usr/lib/flink sudo wget -c https://repo.maven.apache.org/maven2/org/apache/iceberg/iceberg-flink-runtime- ${ FLINK VERSION } / ${ ICEBERG VERSION } /iceberg-flink-runtime- ${ FLINK VERSION } - ${ ICEBERG VERSION } .jar -P lib sudo gcloud storage cp gs://spark-lib/bigquery/iceberg-bigquery-catalog- ${ ICEBERG VERSION } -1.0.2.jar lib/ Start the Flink session on YARN: HADOOP CLASSPATH = hadoop classpath sudo bin/yarn-session.sh -nm flink-dataproc -d sudo bin/sql-client.sh embedded \ -s yarn-session Create a catalog in Flink: CREATE CATALOG CATALOG NAME WITH ( 'type' = 'iceberg' , 'warehouse' = ' WAREHOUSE DIRECTORY ' , 'catalog-impl' = 'org.apache.iceberg.gcp.bigquery.BigQueryMetastoreCatalog' , 'gcp project' = ' PROJECT ID ' , 'gcp location' = ' LOCATION ' ); Replace the following: CATALOG NAME : the Flink catalog identifier, which is linked to a BigLake metastore catalog.
- Depending on your Iceberg version number, select one of the following: Iceberg 1.9.1 : gs://spark-lib/bigquery/iceberg-bigquery-catalog-1.9.1-1.0.1.jar Iceberg 1.6.1 : gs://spark-lib/bigquery/iceberg-bigquery-catalog-1.6.1-1.0.2.jar CATALOG NAME : the name of the Spark catalog to that you're using with your SQL job.
- Depending on your Iceberg version number, select one of the following: Iceberg 1.9.1: gs://spark-lib/bigquery/iceberg-bigquery-catalog-1.9.1-1.0.1.jar Iceberg 1.6.1: gs://spark-lib/bigquery/iceberg-bigquery-catalog-1.6.1-1.0.2.jar LOCATION : the location of the BigQuery resources.

### Authorized routines \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/authorized-routines](https://docs.cloud.google.com/bigquery/docs/authorized-routines)
- Source ID: `site-docs-reference-5`
- Final score: 114
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can attach the following roles to a stored procedure: BigQuery Routine Metadata Viewer ( roles/bigquery.routineMetadataViewer ) BigQuery Routine Data Viewer ( roles/bigquery.routineDataViewer ) BigQuery Routine Data Editor ( roles/bigquery.routineDataEditor ) BigQuery Routine Admin ( roles/bigquery.routineAdmin ) Note: You can attach these roles only to stored procedures.
- You can attach the following roles to a stored procedure: BigQuery Routine Metadata Viewer ( roles/bigquery.routineMetadataViewer ) BigQuery Routine Data Viewer ( roles/bigquery.routineDataViewer ) BigQuery Routine Data Editor ( roles/bigquery.routineDataEditor ) BigQuery Routine Admin ( roles/bigquery.routineAdmin ) Note: You can attach these roles only to stored procedures.
- The following types of routines can be authorized: Table functions User-defined functions (UDFs) Stored procedures Caution: Stored procedures authorized as routines have DDL and DML access.
- Principals with access to authorized stored procedures can bypass Identity and Access Management (IAM) permissions and perform actions that are normally denied to them.

