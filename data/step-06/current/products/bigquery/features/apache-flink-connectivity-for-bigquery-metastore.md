---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.359Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Apache Flink connectivity for BigQuery metastore"
feature_slug: "apache-flink-connectivity-for-bigquery-metastore"
latest_feature_date: "2025-04-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/bqms-use-dataproc"
  - "https://docs.cloud.google.com/bigquery/docs/hdfs-data-lake-transfer"
  - "https://docs.cloud.google.com/bigquery/docs/bqms-features"
keywords:
  - "apache"
  - "flink"
  - "connectivity"
  - "bigquery"
  - "metastore"
  - "can"
  - "now"
  - "connect"
---

# Apache Flink connectivity for BigQuery metastore

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery metastore can now connect to Apache Flink.

## Extended Definition

BigQuery metastore can now connect to Apache Flink.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/bqms-use-dataproc](https://docs.cloud.google.com/bigquery/docs/bqms-use-dataproc)
- [https://docs.cloud.google.com/bigquery/docs/hdfs-data-lake-transfer](https://docs.cloud.google.com/bigquery/docs/hdfs-data-lake-transfer)
- [https://docs.cloud.google.com/bigquery/docs/bqms-features](https://docs.cloud.google.com/bigquery/docs/bqms-features)

## Supporting Pages

### "Configure BigLake metastore for Managed Service for Apache Spark and Spark\

- URL: [https://docs.cloud.google.com/bigquery/docs/bqms-use-dataproc](https://docs.cloud.google.com/bigquery/docs/bqms-use-dataproc)
- Source ID: `site-docs-reference-5`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- Configure the Iceberg custom catalog plugin for BigLake metastore: FLINK VERSION = 1 .19 ICEBERG VERSION = 1 .6.1 cd /usr/lib/flink sudo wget -c https://repo.maven.apache.org/maven2/org/apache/iceberg/iceberg-flink-runtime- ${ FLINK VERSION } / ${ ICEBERG VERSION } /iceberg-flink-runtime- ${ FLINK VERSION } - ${ ICEBERG VERSION } .jar -P lib sudo gcloud storage cp gs://spark-lib/bigquery/iceberg-bigquery-catalog- ${ ICEBERG VERSION } -1.0.2.jar lib/ Start the Flink session on YARN: HADOOP CLASSPATH = hadoop classpath sudo bin/yarn-session.sh -nm flink-dataproc -d sudo bin/sql-client.sh embedded \ -s yarn-session Create a catalog in Flink: CREATE CATALOG CATALOG NAME WITH ( 'type' = 'iceberg' , 'warehouse' = ' WAREHOUSE DIRECTORY ' , 'catalog-impl' = 'org.apache.iceberg.gcp.bigquery.BigQueryMetastoreCatalog' , 'gcp project' = ' PROJECT ID ' , 'gcp location' = ' LOCATION ' ); Replace the following: CATALOG NAME : the Flink catalog identifier, which is linked to a BigLake metastore catalog.
- Required roles To get the permissions that you need to configure BigLake metastore, ask your administrator to grant you the following IAM roles: Create a Managed Service for Apache Spark cluster: Dataproc Worker ( roles/dataproc.worker ) on the Compute Engine default service account in the project Create BigLake metastore tables: Dataproc Worker ( roles/dataproc.worker ) on the Dataproc VM service account in the project BigQuery Data Editor ( roles/bigquery.dataEditor ) on the Dataproc VM service account in the project Storage Object User ( roles/storage.objectUser ) on the Dataproc VM service account in the project Query BigLake metastore tables: BigQuery Data Viewer ( roles/bigquery.dataViewer ) on the project BigQuery User ( roles/bigquery.user ) on the project Storage Object Viewer ( roles/storage.objectViewer ) on the project For more information about granting roles, see Manage access to projects, folders, and organizations .
- After you successfully connect to the cluster, your Spark terminal displays the spark-sql prompt, which you can use to submit Spark jobs. spark-sql (default)> Flink Create a Managed Service for Apache Spark cluster with the optional Flink component enabled , and ensure that you're using Managed Service for Apache Spark 2.2 or later.
- Configure your metastore with Managed Service for Apache Spark You can configure BigLake metastore with Managed Service for Apache Spark using either Spark or Flink: Spark Configure a new cluster.

### "Migrate Apache Hive Metastore tables to Google Cloud \_|\_ BigQuery \_|\_\

- URL: [https://docs.cloud.google.com/bigquery/docs/hdfs-data-lake-transfer](https://docs.cloud.google.com/bigquery/docs/hdfs-data-lake-transfer)
- Source ID: `site-api-reference`
- Final score: 123
- Re-rank relevance: N/A

Evidence snippets:
- The Apache Hive Metastore migration connector in the BigQuery Data Transfer Service lets you seamlessly migrate your Hive Metastore tables to Google Cloud at scale.
- The Hive Metastore migration connector supports files stored in the following data sources: Apache Hadoop Distributed File System (HDFS) Amazon Simple Storage Service (Amazon S3) Azure Blob Storage or Azure Data Lake Storage Gen2 With the Hive Metastore migration connector, you can use Cloud Storage as the file storage and register your Hive Metastore tables with one of the following metastores: BigLake metastore Iceberg REST Catalog We recommend using the BigLake metastore Iceberg REST Catalog for all your Iceberg data.
- Migrate Apache Hive Metastore tables to Google Cloud This document shows you how to migrate your Iceberg and Hive tables managed by Apache Hive Metastore to Google Cloud using the BigQuery Data Transfer Service .
- Quotas and concurrency limits For every BigQuery Data Transfer Service run, the Hive Metastore connector runs one Storage Transfer Service job per table.

### Additional BigLake metastore features \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/bqms-features](https://docs.cloud.google.com/bigquery/docs/bqms-features)
- Source ID: `site-docs-reference-5`
- Final score: 113
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To customize your BigLake metastore configuration, you can use the following additional features: Apache Spark Iceberg procedures The filter option for unsupported tables BigQuery connection overrides Access control policies for BigLake metastore Iceberg tables Use Iceberg Spark procedures To use Iceberg Spark procedures , you must include Iceberg SQL extensions in your Spark configuration.
- CATALOG NAME .catalog-impl" , "org.apache.iceberg.gcp.bigquery.BigQueryMetastoreCatalog" ) \ . config ( "spark.sql.catalog.
- CATALOG NAME .catalog-impl = org.apache.iceberg.gcp.bigquery.BigQueryMetastoreCatalog \ --conf spark.sql.catalog.
- CATALOG NAME .catalog-impl = org.apache.iceberg.gcp.bigquery.BigQueryMetastoreCatalog \ --conf spark.sql.catalog.

