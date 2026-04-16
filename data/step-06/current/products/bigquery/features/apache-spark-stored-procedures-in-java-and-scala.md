---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.595Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Apache Spark stored procedures in Java and Scala"
feature_slug: "apache-spark-stored-procedures-in-java-and-scala"
latest_feature_date: "2023-06-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/bqms-use-dataproc"
  - "https://docs.cloud.google.com/bigquery/docs/bqms-features"
keywords:
  - "apache"
  - "spark"
  - "stored"
  - "procedures"
  - "java"
  - "scala"
  - "bigquery"
  - "can"
---

# Apache Spark stored procedures in Java and Scala

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery can create stored procedures for Apache Spark by using Java or Scala.

## Extended Definition

BigQuery can create stored procedures for Apache Spark by using Java or Scala.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/bqms-use-dataproc](https://docs.cloud.google.com/bigquery/docs/bqms-use-dataproc)
- [https://docs.cloud.google.com/bigquery/docs/bqms-features](https://docs.cloud.google.com/bigquery/docs/bqms-features)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 165
- Re-rank relevance: N/A

Evidence snippets:
- BigQuery supports stored procedures for Apache Spark that are written in Python, Java, or Scala. pyspark code : The PySpark code for the stored procedure for Apache Spark if you want to pass the body of the procedure inline.
- You can add Spark properties using the following format: [("key1","value1"),("key2", "value2")] For example: bq query --nouse legacy sql --dry run 'CREATE PROCEDURE my bq project.my dataset.spark proc() WITH CONNECTION my-project-id.us.my-connection OPTIONS( engine="SPARK", main file uri="gs://my-bucket/my-pyspark-main.py", properties=[ ("spark.executor.instances", "3"), ("spark.yarn.am.memory", "3g") ]) LANGUAGE PYTHON' Error in query string: Invalid value: \ Invalid properties: \ Attempted to set unsupported properties: \ [ spark:spark.yarn.am.memory ] at [ 1 :1 ] Note: You can use the BigQuery dry run feature to validate your stored procedure without creating it. main file uri STRING The Cloud Storage URI of the main Python, Scala, or Java JAR file of the Spark application.
- Example: main file uri="gs://my-bucket/my-scala-main.jar" main class STRING Applies only to stored procedures for Spark written in Java and Scala.
- To create a stored procedure for Apache Spark, additional IAM permission are needed: Permission Resource bigquery.connections.delegate The connection which you use to create the stored procedure for Apache Spark .

### "Configure BigLake metastore for Managed Service for Apache Spark and Spark\

- URL: [https://docs.cloud.google.com/bigquery/docs/bqms-use-dataproc](https://docs.cloud.google.com/bigquery/docs/bqms-use-dataproc)
- Source ID: `site-docs-reference-5`
- Final score: 145
- Re-rank relevance: N/A

Evidence snippets:
- Configure the Iceberg custom catalog plugin for BigLake metastore: FLINK VERSION = 1 .19 ICEBERG VERSION = 1 .6.1 cd /usr/lib/flink sudo wget -c https://repo.maven.apache.org/maven2/org/apache/iceberg/iceberg-flink-runtime- ${ FLINK VERSION } / ${ ICEBERG VERSION } /iceberg-flink-runtime- ${ FLINK VERSION } - ${ ICEBERG VERSION } .jar -P lib sudo gcloud storage cp gs://spark-lib/bigquery/iceberg-bigquery-catalog- ${ ICEBERG VERSION } -1.0.2.jar lib/ Start the Flink session on YARN: HADOOP CLASSPATH = hadoop classpath sudo bin/yarn-session.sh -nm flink-dataproc -d sudo bin/sql-client.sh embedded \ -s yarn-session Create a catalog in Flink: CREATE CATALOG CATALOG NAME WITH ( 'type' = 'iceberg' , 'warehouse' = ' WAREHOUSE DIRECTORY ' , 'catalog-impl' = 'org.apache.iceberg.gcp.bigquery.BigQueryMetastoreCatalog' , 'gcp project' = ' PROJECT ID ' , 'gcp location' = ' LOCATION ' ); Replace the following: CATALOG NAME : the Flink catalog identifier, which is linked to a BigLake metastore catalog.
- Required roles To get the permissions that you need to configure BigLake metastore, ask your administrator to grant you the following IAM roles: Create a Managed Service for Apache Spark cluster: Dataproc Worker ( roles/dataproc.worker ) on the Compute Engine default service account in the project Create BigLake metastore tables: Dataproc Worker ( roles/dataproc.worker ) on the Dataproc VM service account in the project BigQuery Data Editor ( roles/bigquery.dataEditor ) on the Dataproc VM service account in the project Storage Object User ( roles/storage.objectUser ) on the Dataproc VM service account in the project Query BigLake metastore tables: BigQuery Data Viewer ( roles/bigquery.dataViewer ) on the project BigQuery User ( roles/bigquery.user ) on the project Storage Object Viewer ( roles/storage.objectViewer ) on the project For more information about granting roles, see Manage access to projects, folders, and organizations .
- This document explains how to configure the custom Iceberg catalog for BigQuery in BigLake metastore with either Managed Service for Apache Spark or Managed Service for Apache Spark .
- CATALOG NAME .catalog-impl" , "org.apache.iceberg.gcp.bigquery.BigQueryMetastoreCatalog" ) \ . config ( "spark.sql.catalog.

### Additional BigLake metastore features \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/bqms-features](https://docs.cloud.google.com/bigquery/docs/bqms-features)
- Source ID: `site-docs-reference-5`
- Final score: 114
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To customize your BigLake metastore configuration, you can use the following additional features: Apache Spark Iceberg procedures The filter option for unsupported tables BigQuery connection overrides Access control policies for BigLake metastore Iceberg tables Use Iceberg Spark procedures To use Iceberg Spark procedures , you must include Iceberg SQL extensions in your Spark configuration.
- CATALOG NAME .catalog-impl" , "org.apache.iceberg.gcp.bigquery.BigQueryMetastoreCatalog" ) \ . config ( "spark.sql.catalog.
- CATALOG NAME .catalog-impl = org.apache.iceberg.gcp.bigquery.BigQueryMetastoreCatalog \ --conf spark.sql.catalog.
- CATALOG NAME .catalog-impl = org.apache.iceberg.gcp.bigquery.BigQueryMetastoreCatalog \ --conf spark.sql.catalog.

