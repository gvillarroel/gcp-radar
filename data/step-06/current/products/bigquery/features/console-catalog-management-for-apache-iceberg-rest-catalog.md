---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.261Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Console catalog management for Apache Iceberg REST catalog"
feature_slug: "console-catalog-management-for-apache-iceberg-rest-catalog"
latest_feature_date: "2025-10-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/blms-rest-catalog"
  - "https://docs.cloud.google.com/bigquery/docs/hdfs-data-lake-transfer"
  - "https://docs.cloud.google.com/bigquery/docs/about-blms"
keywords:
  - "console"
  - "catalog"
  - "management"
  - "apache"
  - "iceberg"
  - "rest"
  - "biglake"
  - "metastore"
---

# Console catalog management for Apache Iceberg REST catalog

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

The Apache Iceberg REST catalog in BigLake metastore can now be managed in the Google Cloud console.

## Extended Definition

The Apache Iceberg REST catalog in BigLake metastore can now be managed in the Google Cloud console.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/blms-rest-catalog](https://docs.cloud.google.com/bigquery/docs/blms-rest-catalog)
- [https://docs.cloud.google.com/bigquery/docs/hdfs-data-lake-transfer](https://docs.cloud.google.com/bigquery/docs/hdfs-data-lake-transfer)
- [https://docs.cloud.google.com/bigquery/docs/about-blms](https://docs.cloud.google.com/bigquery/docs/about-blms)

## Supporting Pages

### Use the BigLake metastore Iceberg REST catalog \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/blms-rest-catalog](https://docs.cloud.google.com/bigquery/docs/blms-rest-catalog)
- Source ID: `site-docs-reference-5`
- Final score: 298
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following is an example of how to configure Apache Spark to use the BigLake metastore Iceberg REST catalog. import pyspark from pyspark.context import SparkContext from pyspark.sql import SparkSession catalog name = " CATALOG NAME " spark = SparkSession . builder . appName ( " APP NAME " ) \ . config ( f 'spark.sql.catalog. { catalog name } ' , 'org.apache.iceberg.spark.SparkCatalog' ) \ . config ( f 'spark.sql.catalog. { catalog name } .type' , 'rest' ) \ . config ( f 'spark.sql.catalog. { catalog name } .uri' , 'https://biglake.googleapis.com/iceberg/v1/restcatalog' ) \ . config ( f 'spark.sql.catalog. { catalog name } .warehouse' , ' WAREHOUSE PATH ' ) \ . config ( f 'spark.sql.catalog. { catalog name } .header.x-goog-user-project' , ' PROJECT ID ' ) \ . config ( f 'spark.sql.catalog. { catalog name } .rest.auth.type' , 'org.apache.iceberg.gcp.auth.GoogleAuthManager' ) \ . config ( f 'spark.sql.catalog. { catalog name } .io-impl' , 'org.apache.iceberg.gcp.gcs.GCSFileIO' ) \ . config ( f 'spark.sql.catalog. { catalog name } .rest-metrics-reporting-enabled' , 'false' ) \ . config ( 'spark.sql.extensions' , 'org.apache.iceberg.spark.extensions.IcebergSparkSessionExtensions' ) \ . config ( 'spark.sql.defaultCatalog' , ' CATALOG NAME ' ) \ . getOrCreate () Replace the following: CATALOG NAME : the name of your Iceberg REST catalog.
- The following are the general steps to follow when using the Apache Iceberg REST catalog in BigLake metastore: Based on the Iceberg REST catalog overview , choose your catalog warehouse location (either Cloud Storage or BigQuery).
- The Apache Iceberg REST catalog in BigLake metastore is the recommended way to use BigLake metastore for new workflows.
- To use credential vending, you must use a catalog in credential vending mode and add the X-Iceberg-Access-Delegation header to Iceberg REST catalog requests with a value of vended-credentials by adding the following line to the SparkSession builder: . config ( f 'spark.sql.catalog. { catalog name } .header.X-Iceberg-Access-Delegation' , 'vended-credentials' ) Example with credential vending The following example configures the query engine with credential vending: import pyspark from pyspark.context import SparkContext from pyspark.sql import SparkSession catalog name = " CATALOG NAME " spark = SparkSession . builder . appName ( " APP NAME " ) \ . config ( f 'spark.sql.catalog. { catalog name } ' , 'org.apache.iceberg.spark.SparkCatalog' ) \ . config ( f 'spark.sql.catalog. { catalog name } .type' , 'rest' ) \ . config ( f 'spark.sql.catalog. { catalog name } .uri' , 'https://biglake.googleapis.com/iceberg/v1/restcatalog' ) \ . config ( f 'spark.sql.catalog. { catalog name } .warehouse' , 'gs:// CLOUD STORAGE BUCKET NAME ' ) \ . config ( f 'spark.sql.catalog. { catalog name } .header.x-goog-user-project' , ' PROJECT ID ' ) \ . config ( f "spark.sql.catalog. { catalog name } .token" , " TOKEN " ) \ . config ( f "spark.sql.catalog. { catalog name } .oauth2-server-uri" , "https://oauth2.googleapis.com/token" ) \ . config ( f 'spark.sql.catalog. { catalog name } .io-impl' , 'org.apache.iceberg.gcp.gcs.GCSFileIO' ) \ . config ( f 'spark.sql.catalog. { catalog name } .header.X-Iceberg-Access-Delegation' , 'vended-credentials' ) \ . config ( f 'spark.sql.catalog. { catalog name } .rest-metrics-reporting-enabled' , 'false' ) \ . config ( 'spark.sql.extensions' , 'org.apache.iceberg.spark.extensions.IcebergSparkSessionExtensions' ) \ . config ( 'spark.sql.defaultCatalog' , ' CATALOG NAME ' ) \ . getOrCreate () For more information, see the Headers in the RESTCatalog section of the Iceberg documentation.

### "Migrate Apache Hive Metastore tables to Google Cloud \_|\_ BigQuery \_|\_\

- URL: [https://docs.cloud.google.com/bigquery/docs/hdfs-data-lake-transfer](https://docs.cloud.google.com/bigquery/docs/hdfs-data-lake-transfer)
- Source ID: `site-api-reference`
- Final score: 226
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Hive Metastore migration connector supports files stored in the following data sources: Apache Hadoop Distributed File System (HDFS) Amazon Simple Storage Service (Amazon S3) Azure Blob Storage or Azure Data Lake Storage Gen2 With the Hive Metastore migration connector, you can use Cloud Storage as the file storage and register your Hive Metastore tables with one of the following metastores: BigLake metastore Iceberg REST Catalog We recommend using the BigLake metastore Iceberg REST Catalog for all your Iceberg data.
- Storage Transfer Admin ( roles/storagetransfer.admin ) Service Usage Consumer ( roles/serviceusage.serviceUsageConsumer ) Storage Admin ( roles/storage.admin ) To migrate metadata to BigLake metastore Iceberg REST Catalog : BigLake Admin ( roles/biglake.admin ) To migrate metadata to Dataproc Metastore: Dataproc Metastore Data Owner ( roles/metastore.metadataOwner ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- The BigLake metastore Iceberg REST Catalog creates interoperability between your query engines by offering a single source of truth for all of your Iceberg data.
- BIGLAKE REST CATALOG : Select this option to store your metadata in the BigLake metastore Iceberg REST catalog.

### About BigLake metastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/about-blms](https://docs.cloud.google.com/bigquery/docs/about-blms)
- Source ID: `site-docs-reference-5`
- Final score: 216
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following table provides links to documentation for each engine: Engine Documentation Apache Spark Quickstart: Use with Spark Apache Flink Use with Apache Flink Trino Use with Trino Configuration options BigLake metastore can be configured in one of two ways: with the Iceberg REST catalog or the custom Iceberg catalog for BigQuery .
- BigLake metastore supports the Iceberg REST catalog, while BigLake metastore (classic) does not.
- BigLake metastore limitations The following limitations apply to tables in BigLake metastore: Table management You can't create or modify BigLake Iceberg tables with BigQuery data definition language (DDL) or data manipulation language (DML) statements.
- Existing BigLake metastore users that have current tables with the custom Iceberg catalog for BigQuery.

