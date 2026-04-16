---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.285Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigLake metastore credential vending for Iceberg REST catalog"
feature_slug: "biglake-metastore-credential-vending-for-iceberg-rest-catalog"
latest_feature_date: "2025-09-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/blms-rest-catalog"
  - "https://docs.cloud.google.com/bigquery/docs/about-blms"
  - "https://docs.cloud.google.com/bigquery/docs/about-bqms"
keywords:
  - "biglake"
  - "metastore"
  - "credential"
  - "vending"
  - "iceberg"
  - "rest"
  - "catalog"
  - "supports"
---

# BigLake metastore credential vending for Iceberg REST catalog

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigLake metastore supports credential vending mode for the Apache Iceberg REST catalog to avoid direct Cloud Storage access for catalog users.

## Extended Definition

BigLake metastore supports credential vending mode for the Apache Iceberg REST catalog to avoid direct Cloud Storage access for catalog users.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/blms-rest-catalog](https://docs.cloud.google.com/bigquery/docs/blms-rest-catalog)
- [https://docs.cloud.google.com/bigquery/docs/about-blms](https://docs.cloud.google.com/bigquery/docs/about-blms)
- [https://docs.cloud.google.com/bigquery/docs/about-bqms](https://docs.cloud.google.com/bigquery/docs/about-bqms)

## Supporting Pages

### Use the BigLake metastore Iceberg REST catalog \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/blms-rest-catalog](https://docs.cloud.google.com/bigquery/docs/blms-rest-catalog)
- Source ID: `site-docs-reference-5`
- Final score: 318
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Enable the API Required roles To get the permissions that you need to use the Iceberg REST catalog in BigLake metastore, ask your administrator to grant you the following IAM roles: Perform administrative tasks, such as managing catalog user access, storage access, and the catalog's credential vending mode: BigLake Admin ( roles/biglake.admin ) on the project Storage Admin ( roles/storage.admin ) on the Cloud Storage bucket Read table data in credential vending mode: BigLake Viewer ( roles/biglake.viewer ) on the project Write table data in credential vending mode: BigLake Editor ( roles/biglake.editor ) on the project Read catalog resources and table data in non-credential vending mode: BigLake Viewer ( roles/biglake.viewer ) on the project Storage Object Viewer ( roles/storage.objectViewer ) on the Cloud Storage bucket Manage catalog resources and write table data in non-credential vending mode: BigLake Editor ( roles/biglake.editor ) on the project Storage Object User ( roles/storage.objectUser ) on the Cloud Storage bucket Perform data manipulation language (DML) operations with BigQuery catalog federation: BigQuery Data Editor ( roles/bigquery.dataEditor ) on the project Storage Admin ( roles/storage.admin ) on the Cloud Storage bucket.
- To use credential vending, you must use a catalog in credential vending mode and add the X-Iceberg-Access-Delegation header to Iceberg REST catalog requests with a value of vended-credentials by adding the following line to the SparkSession builder: . config ( f 'spark.sql.catalog. { catalog name } .header.X-Iceberg-Access-Delegation' , 'vended-credentials' ) Example with credential vending The following example configures the query engine with credential vending: import pyspark from pyspark.context import SparkContext from pyspark.sql import SparkSession catalog name = " CATALOG NAME " spark = SparkSession . builder . appName ( " APP NAME " ) \ . config ( f 'spark.sql.catalog. { catalog name } ' , 'org.apache.iceberg.spark.SparkCatalog' ) \ . config ( f 'spark.sql.catalog. { catalog name } .type' , 'rest' ) \ . config ( f 'spark.sql.catalog. { catalog name } .uri' , 'https://biglake.googleapis.com/iceberg/v1/restcatalog' ) \ . config ( f 'spark.sql.catalog. { catalog name } .warehouse' , 'gs:// CLOUD STORAGE BUCKET NAME ' ) \ . config ( f 'spark.sql.catalog. { catalog name } .header.x-goog-user-project' , ' PROJECT ID ' ) \ . config ( f "spark.sql.catalog. { catalog name } .token" , " TOKEN " ) \ . config ( f "spark.sql.catalog. { catalog name } .oauth2-server-uri" , "https://oauth2.googleapis.com/token" ) \ . config ( f 'spark.sql.catalog. { catalog name } .io-impl' , 'org.apache.iceberg.gcp.gcs.GCSFileIO' ) \ . config ( f 'spark.sql.catalog. { catalog name } .header.X-Iceberg-Access-Delegation' , 'vended-credentials' ) \ . config ( f 'spark.sql.catalog. { catalog name } .rest-metrics-reporting-enabled' , 'false' ) \ . config ( 'spark.sql.extensions' , 'org.apache.iceberg.spark.extensions.IcebergSparkSessionExtensions' ) \ . config ( 'spark.sql.defaultCatalog' , ' CATALOG NAME ' ) \ . getOrCreate () For more information, see the Headers in the RESTCatalog section of the Iceberg documentation.
- Configure with credential vending To use credential vending, you must use a catalog in credential vending mode and add the X-Iceberg-Access-Delegation header to Iceberg REST catalog requests with a value of vended-credentials by adding the following line to the SparkSession builder: . config ( f 'spark.sql.catalog. { catalog name } .header.X-Iceberg-Access-Delegation' , 'vended-credentials' ) Example with credential vending The following example configures the query engine with credential vending: import pyspark from pyspark.context import SparkContext from pyspark.sql import SparkSession catalog name = " CATALOG NAME " spark = SparkSession . builder . appName ( " APP NAME " ) \ . config ( f 'spark.sql.catalog. { catalog name } ' , 'org.apache.iceberg.spark.SparkCatalog' ) \ . config ( f 'spark.sql.catalog. { catalog name } .type' , 'rest' ) \ . config ( f 'spark.sql.catalog. { catalog name } .uri' , 'https://biglake.googleapis.com/iceberg/v1/restcatalog' ) \ . config ( f 'spark.sql.catalog. { catalog name } .warehouse' , 'gs:// CLOUD STORAGE BUCKET NAME ' ) \ . config ( f 'spark.sql.catalog. { catalog name } .header.x-goog-user-project' , ' PROJECT ID ' ) \ . config ( f 'spark.sql.catalog. { catalog name } .rest.auth.type' , 'org.apache.iceberg.gcp.auth.GoogleAuthManager' ) \ . config ( f 'spark.sql.catalog. { catalog name } .io-impl' , 'org.apache.iceberg.gcp.gcs.GCSFileIO' ) \ . config ( f 'spark.sql.catalog. { catalog name } .header.X-Iceberg-Access-Delegation' , 'vended-credentials' ) \ . config ( f 'spark.sql.catalog. { catalog name } .rest-metrics-reporting-enabled' , 'false' ) \ . config ( 'spark.sql.extensions' , 'org.apache.iceberg.spark.extensions.IcebergSparkSessionExtensions' ) \ . config ( 'spark.sql.defaultCatalog' , ' CATALOG NAME ' ) \ . getOrCreate () For more information, see the Headers in the RESTCatalog section of the Iceberg documentation.
- To use credential vending, you must use a catalog in credential vending mode and add the X-Iceberg-Access-Delegation header to Iceberg REST catalog requests with a value of vended-credentials by adding the following line to the SparkSession builder: . config ( f 'spark.sql.catalog. { catalog name } .header.X-Iceberg-Access-Delegation' , 'vended-credentials' ) Example with credential vending The following example configures the query engine with credential vending: import pyspark from pyspark.context import SparkContext from pyspark.sql import SparkSession catalog name = " CATALOG NAME " spark = SparkSession . builder . appName ( " APP NAME " ) \ . config ( f 'spark.sql.catalog. { catalog name } ' , 'org.apache.iceberg.spark.SparkCatalog' ) \ . config ( f 'spark.sql.catalog. { catalog name } .type' , 'rest' ) \ . config ( f 'spark.sql.catalog. { catalog name } .uri' , 'https://biglake.googleapis.com/iceberg/v1/restcatalog' ) \ . config ( f 'spark.sql.catalog. { catalog name } .warehouse' , 'gs:// CLOUD STORAGE BUCKET NAME ' ) \ . config ( f 'spark.sql.catalog. { catalog name } .header.x-goog-user-project' , ' PROJECT ID ' ) \ . config ( f 'spark.sql.catalog. { catalog name } .rest.auth.type' , 'org.apache.iceberg.gcp.auth.GoogleAuthManager' ) \ . config ( f 'spark.sql.catalog. { catalog name } .io-impl' , 'org.apache.iceberg.gcp.gcs.GCSFileIO' ) \ . config ( f 'spark.sql.catalog. { catalog name } .header.X-Iceberg-Access-Delegation' , 'vended-credentials' ) \ . config ( f 'spark.sql.catalog. { catalog name } .rest-metrics-reporting-enabled' , 'false' ) \ . config ( 'spark.sql.extensions' , 'org.apache.iceberg.spark.extensions.IcebergSparkSessionExtensions' ) \ . config ( 'spark.sql.defaultCatalog' , ' CATALOG NAME ' ) \ . getOrCreate () For more information, see the Headers in the RESTCatalog section of the Iceberg documentation.

### About BigLake metastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/about-blms](https://docs.cloud.google.com/bigquery/docs/about-blms)
- Source ID: `site-docs-reference-5`
- Final score: 220
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- BigLake metastore supports the Iceberg REST catalog, while BigLake metastore (classic) does not.
- The following table provides links to documentation for each engine: Engine Documentation Apache Spark Quickstart: Use with Spark Apache Flink Use with Apache Flink Trino Use with Trino Configuration options BigLake metastore can be configured in one of two ways: with the Iceberg REST catalog or the custom Iceberg catalog for BigQuery .
- BigLake metastore supports storage access delegation (credential vending), which improves security by removing the need for direct Cloud Storage bucket access.
- Existing BigLake metastore users that have current tables with the custom Iceberg catalog for BigQuery.

### About BigLake metastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/about-bqms](https://docs.cloud.google.com/bigquery/docs/about-bqms)
- Source ID: `site-docs-reference-5`
- Final score: 220
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- BigLake metastore supports the Iceberg REST catalog, while BigLake metastore (classic) does not.
- The following table provides links to documentation for each engine: Engine Documentation Apache Spark Quickstart: Use with Spark Apache Flink Use with Apache Flink Trino Use with Trino Configuration options BigLake metastore can be configured in one of two ways: with the Iceberg REST catalog or the custom Iceberg catalog for BigQuery .
- BigLake metastore supports storage access delegation (credential vending), which improves security by removing the need for direct Cloud Storage bucket access.
- Existing BigLake metastore users that have current tables with the custom Iceberg catalog for BigQuery.

