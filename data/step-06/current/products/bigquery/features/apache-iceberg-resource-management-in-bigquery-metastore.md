---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.359Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Apache Iceberg resource management in BigQuery metastore"
feature_slug: "apache-iceberg-resource-management-in-bigquery-metastore"
latest_feature_date: "2025-04-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/bqms-manage-resources"
  - "https://docs.cloud.google.com/bigquery/docs/hdfs-data-lake-transfer"
  - "https://docs.cloud.google.com/bigquery/docs/blms-rest-catalog"
keywords:
  - "apache"
  - "iceberg"
  - "resource"
  - "management"
  - "bigquery"
  - "metastore"
  - "now"
  - "supports"
---

# Apache Iceberg resource management in BigQuery metastore

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery metastore now supports creating, viewing, modifying, and deleting Apache Iceberg resources.

## Extended Definition

BigQuery metastore now supports creating, viewing, modifying, and deleting Apache Iceberg resources.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/bqms-manage-resources](https://docs.cloud.google.com/bigquery/docs/bqms-manage-resources)
- [https://docs.cloud.google.com/bigquery/docs/hdfs-data-lake-transfer](https://docs.cloud.google.com/bigquery/docs/hdfs-data-lake-transfer)
- [https://docs.cloud.google.com/bigquery/docs/blms-rest-catalog](https://docs.cloud.google.com/bigquery/docs/blms-rest-catalog)

## Supporting Pages

### "Migrate Apache Hive Metastore tables to Google Cloud \_|\_ BigQuery \_|\_\

- URL: [https://docs.cloud.google.com/bigquery/docs/hdfs-data-lake-transfer](https://docs.cloud.google.com/bigquery/docs/hdfs-data-lake-transfer)
- Source ID: `site-api-reference`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- The Hive Metastore migration connector supports files stored in the following data sources: Apache Hadoop Distributed File System (HDFS) Amazon Simple Storage Service (Amazon S3) Azure Blob Storage or Azure Data Lake Storage Gen2 With the Hive Metastore migration connector, you can use Cloud Storage as the file storage and register your Hive Metastore tables with one of the following metastores: BigLake metastore Iceberg REST Catalog We recommend using the BigLake metastore Iceberg REST Catalog for all your Iceberg data.
- Migrate Apache Hive Metastore tables to Google Cloud This document shows you how to migrate your Iceberg and Hive tables managed by Apache Hive Metastore to Google Cloud using the BigQuery Data Transfer Service .
- The Apache Hive Metastore migration connector in the BigQuery Data Transfer Service lets you seamlessly migrate your Hive Metastore tables to Google Cloud at scale.
- Dataproc Metastore Dataproc Metastore supports both Hive and Iceberg table formats.

### Create and manage resources in BigLake metastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/bqms-manage-resources](https://docs.cloud.google.com/bigquery/docs/bqms-manage-resources)
- Source ID: `site-docs-reference-5`
- Final score: 166
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- TABLE ( id bigint , data string ) USING iceberg ; Replace the following: SPARK CATALOG : the name of your Spark catalog NAMESPACE : the name of your namespace TABLE : the name of your new table Terraform resource "google bigquery table" "default" { deletion protection = false dataset id = google bigquery dataset.default.dataset id table id = " TABLE " external catalog table options { storage descriptor { location uri = " STORAGE URI " input format = "org.apache.hadoop.mapred.FileInputFormat" output format = "org.apache.hadoop.mapred.FileOutputFormat" } parameters = { "table type" = "iceberg" "metadata location" = " METADATA URI " "write.parquet.compression-codec" : "zstd" "EXTERNAL" : "TRUE" } } } Replace the following: TABLE : the name of the target table.
- Enable the APIs Required roles To get the permissions that you need to manage Iceberg resources in BigLake metastore, ask your administrator to grant you the following IAM roles on your project: BigQuery Data Editor ( roles/bigquery.dataEditor ) Storage Object User ( roles/storage.objectUser ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- NAMESPACE ; Replace the following: SPARK CATALOG : the name of your Spark catalog NAMESPACE : the name of your new namespace Terraform provider "google" { project = " PROJECT ID " } resource "google bigquery dataset" "default" { dataset id = " DATASET ID " location = " LOCATION " external catalog dataset options { default storage location uri = " URI " parameters = { ... } } } Replace the following: PROJECT ID : the ID of the project that contains your target dataset DATASET ID : the ID of your target dataset LOCATION : the BigQuery location that you want to create the dataset in URI : the Cloud Storage URI for all tables in the dataset Create Iceberg tables Select one of the following options: API Use the tables.insert method , and specify the ExternalCatalogTableOptions field in the table resource that you pass in. { "tableReference" : { "projectId" : " PROJECT ID " , "datasetId" : " DATASET ID " , "tableId" : " TABLE ID " }, "externalCatalogTableOptions" : { "parameters" : { "table type" : "iceberg" , "metadata location" : " METADATA URI " }, "connection id" : " CONNECTION ID " } } Replace the following: PROJECT ID : the ID of the project that contains your target table.
- TABLE ; Replace the following: SPARK CATALOG : the name of your Spark catalog NAMESPACE : the name of your namespace TABLE : the name of your table Modify metastore resources Caution: Modifying BigLake metastore resources using the BigQuery API risks making changes that are incompatible with the external engine.

### Use the BigLake metastore Iceberg REST catalog \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/blms-rest-catalog](https://docs.cloud.google.com/bigquery/docs/blms-rest-catalog)
- Source ID: `site-docs-reference-5`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- Enable the API Required roles To get the permissions that you need to use the Iceberg REST catalog in BigLake metastore, ask your administrator to grant you the following IAM roles: Perform administrative tasks, such as managing catalog user access, storage access, and the catalog's credential vending mode: BigLake Admin ( roles/biglake.admin ) on the project Storage Admin ( roles/storage.admin ) on the Cloud Storage bucket Read table data in credential vending mode: BigLake Viewer ( roles/biglake.viewer ) on the project Write table data in credential vending mode: BigLake Editor ( roles/biglake.editor ) on the project Read catalog resources and table data in non-credential vending mode: BigLake Viewer ( roles/biglake.viewer ) on the project Storage Object Viewer ( roles/storage.objectViewer ) on the Cloud Storage bucket Manage catalog resources and write table data in non-credential vending mode: BigLake Editor ( roles/biglake.editor ) on the project Storage Object User ( roles/storage.objectUser ) on the Cloud Storage bucket Perform data manipulation language (DML) operations with BigQuery catalog federation: BigQuery Data Editor ( roles/bigquery.dataEditor ) on the project Storage Admin ( roles/storage.admin ) on the Cloud Storage bucket.
- The following are the general steps to follow when using the Apache Iceberg REST catalog in BigLake metastore: Based on the Iceberg REST catalog overview , choose your catalog warehouse location (either Cloud Storage or BigQuery).
- The following is an example of how to configure Apache Spark to use the BigLake metastore Iceberg REST catalog. import pyspark from pyspark.context import SparkContext from pyspark.sql import SparkSession catalog name = " CATALOG NAME " spark = SparkSession . builder . appName ( " APP NAME " ) \ . config ( f 'spark.sql.catalog. { catalog name } ' , 'org.apache.iceberg.spark.SparkCatalog' ) \ . config ( f 'spark.sql.catalog. { catalog name } .type' , 'rest' ) \ . config ( f 'spark.sql.catalog. { catalog name } .uri' , 'https://biglake.googleapis.com/iceberg/v1/restcatalog' ) \ . config ( f 'spark.sql.catalog. { catalog name } .warehouse' , ' WAREHOUSE PATH ' ) \ . config ( f 'spark.sql.catalog. { catalog name } .header.x-goog-user-project' , ' PROJECT ID ' ) \ . config ( f 'spark.sql.catalog. { catalog name } .rest.auth.type' , 'org.apache.iceberg.gcp.auth.GoogleAuthManager' ) \ . config ( f 'spark.sql.catalog. { catalog name } .io-impl' , 'org.apache.iceberg.gcp.gcs.GCSFileIO' ) \ . config ( f 'spark.sql.catalog. { catalog name } .rest-metrics-reporting-enabled' , 'false' ) \ . config ( 'spark.sql.extensions' , 'org.apache.iceberg.spark.extensions.IcebergSparkSessionExtensions' ) \ . config ( 'spark.sql.defaultCatalog' , ' CATALOG NAME ' ) \ . getOrCreate () Replace the following: CATALOG NAME : the name of your Iceberg REST catalog.
- After cluster creation, connect to the main VM instance, and use the Trino CLI: trino --catalog = CATALOG NAME Managed Service for Apache Spark Trino supports Google authorization flows for Iceberg in the following releases: Managed Service for Apache Spark on Compute Engine 2.2 runtime versions 2.2.65 and later Managed Service for Apache Spark on Compute Engine 2.3 runtime versions 2.3.11 and later Managed Service for Apache Spark on Compute Engine 3.0 is not supported.

