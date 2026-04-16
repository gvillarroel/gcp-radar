---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.489Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Spark stored procedures"
feature_slug: "spark-stored-procedures"
latest_feature_date: "2024-03-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/bqms-use-dataproc"
  - "https://docs.cloud.google.com/bigquery/docs/bqms-features"
keywords:
  - "spark"
  - "stored"
  - "procedures"
  - "bigquery"
  - "can"
  - "create"
  - "run"
  - "written"
---

# Spark stored procedures

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery can create and run Spark stored procedures written in Python, Java, and Scala.

## Extended Definition

BigQuery can create and run Spark stored procedures written in Python, Java, and Scala.

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
- Final score: 139
- Re-rank relevance: N/A

Evidence snippets:
- BigQuery supports stored procedures for Apache Spark that are written in Python, Java, or Scala. pyspark code : The PySpark code for the stored procedure for Apache Spark if you want to pass the body of the procedure inline.
- You can add Spark properties using the following format: [("key1","value1"),("key2", "value2")] For example: bq query --nouse legacy sql --dry run 'CREATE PROCEDURE my bq project.my dataset.spark proc() WITH CONNECTION my-project-id.us.my-connection OPTIONS( engine="SPARK", main file uri="gs://my-bucket/my-pyspark-main.py", properties=[ ("spark.executor.instances", "3"), ("spark.yarn.am.memory", "3g") ]) LANGUAGE PYTHON' Error in query string: Invalid value: \ Invalid properties: \ Attempted to set unsupported properties: \ [ spark:spark.yarn.am.memory ] at [ 1 :1 ] Note: You can use the BigQuery dry run feature to validate your stored procedure without creating it. main file uri STRING The Cloud Storage URI of the main Python, Scala, or Java JAR file of the Spark application.
- To create a stored procedure for Apache Spark, additional IAM permission are needed: Permission Resource bigquery.connections.delegate The connection which you use to create the stored procedure for Apache Spark .
- For more information, see Create a stored procedure for Apache Spark . multi statement query : The multi-statement query to run. language : The language in which the stored procedure for Apache Spark is written.

### "Configure BigLake metastore for Managed Service for Apache Spark and Spark\

- URL: [https://docs.cloud.google.com/bigquery/docs/bqms-use-dataproc](https://docs.cloud.google.com/bigquery/docs/bqms-use-dataproc)
- Source ID: `site-docs-reference-5`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- Configure the Iceberg custom catalog plugin for BigLake metastore: FLINK VERSION = 1 .19 ICEBERG VERSION = 1 .6.1 cd /usr/lib/flink sudo wget -c https://repo.maven.apache.org/maven2/org/apache/iceberg/iceberg-flink-runtime- ${ FLINK VERSION } / ${ ICEBERG VERSION } /iceberg-flink-runtime- ${ FLINK VERSION } - ${ ICEBERG VERSION } .jar -P lib sudo gcloud storage cp gs://spark-lib/bigquery/iceberg-bigquery-catalog- ${ ICEBERG VERSION } -1.0.2.jar lib/ Start the Flink session on YARN: HADOOP CLASSPATH = hadoop classpath sudo bin/yarn-session.sh -nm flink-dataproc -d sudo bin/sql-client.sh embedded \ -s yarn-session Create a catalog in Flink: CREATE CATALOG CATALOG NAME WITH ( 'type' = 'iceberg' , 'warehouse' = ' WAREHOUSE DIRECTORY ' , 'catalog-impl' = 'org.apache.iceberg.gcp.bigquery.BigQueryMetastoreCatalog' , 'gcp project' = ' PROJECT ID ' , 'gcp location' = ' LOCATION ' ); Replace the following: CATALOG NAME : the Flink catalog identifier, which is linked to a BigLake metastore catalog.
- Required roles To get the permissions that you need to configure BigLake metastore, ask your administrator to grant you the following IAM roles: Create a Managed Service for Apache Spark cluster: Dataproc Worker ( roles/dataproc.worker ) on the Compute Engine default service account in the project Create BigLake metastore tables: Dataproc Worker ( roles/dataproc.worker ) on the Dataproc VM service account in the project BigQuery Data Editor ( roles/bigquery.dataEditor ) on the Dataproc VM service account in the project Storage Object User ( roles/storage.objectUser ) on the Dataproc VM service account in the project Query BigLake metastore tables: BigQuery Data Viewer ( roles/bigquery.dataViewer ) on the project BigQuery User ( roles/bigquery.user ) on the project Storage Object Viewer ( roles/storage.objectViewer ) on the project For more information about granting roles, see Manage access to projects, folders, and organizations .
- CATALOG NAME .warehouse" , " WAREHOUSE DIRECTORY " ) \ . getOrCreate () spark . sql ( "USE CATALOG NAME ;" ) spark . sql ( "CREATE NAMESPACE IF NOT EXISTS NAMESPACE NAME ;" ) spark . sql ( "USE NAMESPACE NAME ;" ) spark . sql ( "CREATE TABLE TABLE NAME (id int, data string) USING ICEBERG LOCATION ' WAREHOUSE DIRECTORY ';" ) Replace the following: PROJECT ID : the ID of the Google Cloud project to run the batch job in.
- To create a new Managed Service for Apache Spark cluster, run the following gcloud dataproc clusters create command , which contains the settings that you need to use BigLake metastore: gcloud dataproc clusters create CLUSTER NAME \ --project = PROJECT ID \ --region = LOCATION \ --single-node Replace the following: CLUSTER NAME : a name for your Managed Service for Apache Spark cluster.

### Additional BigLake metastore features \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/bqms-features](https://docs.cloud.google.com/bigquery/docs/bqms-features)
- Source ID: `site-docs-reference-5`
- Final score: 101
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To customize your BigLake metastore configuration, you can use the following additional features: Apache Spark Iceberg procedures The filter option for unsupported tables BigQuery connection overrides Access control policies for BigLake metastore Iceberg tables Use Iceberg Spark procedures To use Iceberg Spark procedures , you must include Iceberg SQL extensions in your Spark configuration.
- CATALOG NAME .warehouse" , " WAREHOUSE DIRECTORY " ) \ . getOrCreate () spark . sql ( "USE CATALOG NAME ;" ) Configure spark for storing temp results spark . conf . set ( "viewsEnabled" , "true" ) spark . sql ( "CREATE namespace if not exists MATERIALIZATION NAMESPACE " ); spark . conf . set ( "materializationDataset" , " MATERIALIZATION NAMESPACE " ) spark . sql ( "USE NAMESPACE DATASET NAME ;" ) sql = """SELECT FROM DATASET NAME .
- You can set these policies in the following ways: Column-level security Row-level security Data masking After you configure your FGAC policies, you can query the table from Spark using the following example: from pyspark.sql import SparkSession Create a Spark session spark = SparkSession . builder \ . appName ( "BigLake Metastore Iceberg" ) \ . config ( "spark.sql.catalog.
- For example: Create a Spark table: spark-sql \ --jars https://storage-download.googleapis.com/maven-central/maven2/org/apache/iceberg/iceberg-spark-runtime-3.5 2.12/1.6.1/iceberg-spark-runtime-3.5 2.12-1.6.1.jar, BIGLAKE ICEBERG CATALOG JAR \ --conf spark.sql.extensions = org.apache.iceberg.spark.extensions.IcebergSparkSessionExtensions \ --conf spark.sql.catalog.

