---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.651Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Stored procedures for Apache Spark"
feature_slug: "stored-procedures-for-apache-spark"
latest_feature_date: "2022-10-11"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/bqms-use-dataproc"
  - "https://docs.cloud.google.com/bigquery/docs/hdfs-data-lake-transfer"
  - "https://docs.cloud.google.com/bigquery/docs/hadoop-metadata"
keywords:
  - "stored"
  - "procedures"
  - "apache"
  - "spark"
  - "bigquery"
  - "supports"
  - "workloads"
---

# Stored procedures for Apache Spark

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery supports stored procedures for Apache Spark workloads.

## Extended Definition

BigQuery supports stored procedures for Apache Spark workloads.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/bqms-use-dataproc](https://docs.cloud.google.com/bigquery/docs/bqms-use-dataproc)
- [https://docs.cloud.google.com/bigquery/docs/hdfs-data-lake-transfer](https://docs.cloud.google.com/bigquery/docs/hdfs-data-lake-transfer)
- [https://docs.cloud.google.com/bigquery/docs/hadoop-metadata](https://docs.cloud.google.com/bigquery/docs/hadoop-metadata)

## Supporting Pages

### "Configure BigLake metastore for Managed Service for Apache Spark and Spark\

- URL: [https://docs.cloud.google.com/bigquery/docs/bqms-use-dataproc](https://docs.cloud.google.com/bigquery/docs/bqms-use-dataproc)
- Source ID: `site-docs-reference-5`
- Final score: 40
- Re-rank relevance: N/A

Evidence snippets:
- Configure the Iceberg custom catalog plugin for BigLake metastore: FLINK VERSION = 1 .19 ICEBERG VERSION = 1 .6.1 cd /usr/lib/flink sudo wget -c https://repo.maven.apache.org/maven2/org/apache/iceberg/iceberg-flink-runtime- ${ FLINK VERSION } / ${ ICEBERG VERSION } /iceberg-flink-runtime- ${ FLINK VERSION } - ${ ICEBERG VERSION } .jar -P lib sudo gcloud storage cp gs://spark-lib/bigquery/iceberg-bigquery-catalog- ${ ICEBERG VERSION } -1.0.2.jar lib/ Start the Flink session on YARN: HADOOP CLASSPATH = hadoop classpath sudo bin/yarn-session.sh -nm flink-dataproc -d sudo bin/sql-client.sh embedded \ -s yarn-session Create a catalog in Flink: CREATE CATALOG CATALOG NAME WITH ( 'type' = 'iceberg' , 'warehouse' = ' WAREHOUSE DIRECTORY ' , 'catalog-impl' = 'org.apache.iceberg.gcp.bigquery.BigQueryMetastoreCatalog' , 'gcp project' = ' PROJECT ID ' , 'gcp location' = ' LOCATION ' ); Replace the following: CATALOG NAME : the Flink catalog identifier, which is linked to a BigLake metastore catalog.
- Required roles To get the permissions that you need to configure BigLake metastore, ask your administrator to grant you the following IAM roles: Create a Managed Service for Apache Spark cluster: Dataproc Worker ( roles/dataproc.worker ) on the Compute Engine default service account in the project Create BigLake metastore tables: Dataproc Worker ( roles/dataproc.worker ) on the Dataproc VM service account in the project BigQuery Data Editor ( roles/bigquery.dataEditor ) on the Dataproc VM service account in the project Storage Object User ( roles/storage.objectUser ) on the Dataproc VM service account in the project Query BigLake metastore tables: BigQuery Data Viewer ( roles/bigquery.dataViewer ) on the project BigQuery User ( roles/bigquery.user ) on the project Storage Object Viewer ( roles/storage.objectViewer ) on the project For more information about granting roles, see Manage access to projects, folders, and organizations .
- This document explains how to configure the custom Iceberg catalog for BigQuery in BigLake metastore with either Managed Service for Apache Spark or Managed Service for Apache Spark .
- CATALOG NAME .catalog-impl" , "org.apache.iceberg.gcp.bigquery.BigQueryMetastoreCatalog" ) \ . config ( "spark.sql.catalog.

### "Migrate Apache Hive Metastore tables to Google Cloud \_|\_ BigQuery \_|\_\

- URL: [https://docs.cloud.google.com/bigquery/docs/hdfs-data-lake-transfer](https://docs.cloud.google.com/bigquery/docs/hdfs-data-lake-transfer)
- Source ID: `site-api-reference`
- Final score: 32
- Re-rank relevance: N/A

Evidence snippets:
- The Hive Metastore migration connector supports files stored in the following data sources: Apache Hadoop Distributed File System (HDFS) Amazon Simple Storage Service (Amazon S3) Azure Blob Storage or Azure Data Lake Storage Gen2 With the Hive Metastore migration connector, you can use Cloud Storage as the file storage and register your Hive Metastore tables with one of the following metastores: BigLake metastore Iceberg REST Catalog We recommend using the BigLake metastore Iceberg REST Catalog for all your Iceberg data.
- You can use BigQuery to query the data, in addition to Apache Spark and other OSS engines.
- Migrate Apache Hive Metastore tables to Google Cloud This document shows you how to migrate your Iceberg and Hive tables managed by Apache Hive Metastore to Google Cloud using the BigQuery Data Transfer Service .
- The Apache Hive Metastore migration connector in the BigQuery Data Transfer Service lets you seamlessly migrate your Hive Metastore tables to Google Cloud at scale.

### "Extracting metadata from Apache Hive for migration \_|\_ BigQuery \_|\_\

- URL: [https://docs.cloud.google.com/bigquery/docs/hadoop-metadata](https://docs.cloud.google.com/bigquery/docs/hadoop-metadata)
- Source ID: `site-api-reference`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- Apache Ranger Run the following command to extract metadata from Apache Ranger using the dwh-migration-dumper tool. dwh-migration-dumper \ --connector ranger \ --host RANGER-HOST \ --port 6080 \ --user RANGER-USER \ --password RANGER-PASSWORD \ --ranger-scheme RANGER-SCHEME \ --output gs:// MIGRATION-BUCKET /ranger-dumper-output.zip \ --assessment \ Replace the following: RANGER-HOST : the hostname of the Apache Ranger instance RANGER-USER : the username of the Apache Ranger user RANGER-PASSWORD : the password of the Apache Ranger user RANGER-SCHEME : specify if Apache Ranger is using http or https .
- This document covers metadata extraction from the following data sources: Apache Hive Apache Hadoop Distributed File System (HDFS) Apache Ranger Cloudera Manager Apache Hive query logs Before you begin Before you can use the dwh-migration-dumper tool, do the following: Install Java The server on which you plan to run dwh-migration-dumper tool must have Java 8 or higher installed.
- What's next With your extracted metadata from Hadoop, you can use these metadata files to do the following: Migrate permissions from Hadoop Schedule a Hadoop transfer Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Extracting metadata for migration Select one of the following options to learn how to extract metadata for your data source: Apache Hive Perform the steps in the Apache Hive section Extract metadata and query logs from your data warehouse to extract your Apache Hive metadata.

