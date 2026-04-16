---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.261Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery catalog federation"
feature_slug: "bigquery-catalog-federation"
latest_feature_date: "2025-10-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/blms-rest-catalog"
  - "https://docs.cloud.google.com/bigquery/docs/about-blms"
  - "https://docs.cloud.google.com/bigquery/docs/about-bqms"
keywords:
  - "bigquery"
  - "catalog"
  - "federation"
  - "biglake"
  - "metastore"
  - "apache"
  - "iceberg"
  - "rest"
---

# BigQuery catalog federation

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigLake metastore's Apache Iceberg REST catalog supports BigQuery catalog federation.

## Extended Definition

BigLake metastore's Apache Iceberg REST catalog supports BigQuery catalog federation.

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
- Final score: 346
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Enable the API Required roles To get the permissions that you need to use the Iceberg REST catalog in BigLake metastore, ask your administrator to grant you the following IAM roles: Perform administrative tasks, such as managing catalog user access, storage access, and the catalog's credential vending mode: BigLake Admin ( roles/biglake.admin ) on the project Storage Admin ( roles/storage.admin ) on the Cloud Storage bucket Read table data in credential vending mode: BigLake Viewer ( roles/biglake.viewer ) on the project Write table data in credential vending mode: BigLake Editor ( roles/biglake.editor ) on the project Read catalog resources and table data in non-credential vending mode: BigLake Viewer ( roles/biglake.viewer ) on the project Storage Object Viewer ( roles/storage.objectViewer ) on the Cloud Storage bucket Manage catalog resources and write table data in non-credential vending mode: BigLake Editor ( roles/biglake.editor ) on the project Storage Object User ( roles/storage.objectUser ) on the Cloud Storage bucket Perform data manipulation language (DML) operations with BigQuery catalog federation: BigQuery Data Editor ( roles/bigquery.dataEditor ) on the project Storage Admin ( roles/storage.admin ) on the Cloud Storage bucket.
- The following are the general steps to follow when using the Apache Iceberg REST catalog in BigLake metastore: Based on the Iceberg REST catalog overview , choose your catalog warehouse location (either Cloud Storage or BigQuery).
- The following is an example of how to configure Apache Spark to use the BigLake metastore Iceberg REST catalog. import pyspark from pyspark.context import SparkContext from pyspark.sql import SparkSession catalog name = " CATALOG NAME " spark = SparkSession . builder . appName ( " APP NAME " ) \ . config ( f 'spark.sql.catalog. { catalog name } ' , 'org.apache.iceberg.spark.SparkCatalog' ) \ . config ( f 'spark.sql.catalog. { catalog name } .type' , 'rest' ) \ . config ( f 'spark.sql.catalog. { catalog name } .uri' , 'https://biglake.googleapis.com/iceberg/v1/restcatalog' ) \ . config ( f 'spark.sql.catalog. { catalog name } .warehouse' , ' WAREHOUSE PATH ' ) \ . config ( f 'spark.sql.catalog. { catalog name } .header.x-goog-user-project' , ' PROJECT ID ' ) \ . config ( f 'spark.sql.catalog. { catalog name } .rest.auth.type' , 'org.apache.iceberg.gcp.auth.GoogleAuthManager' ) \ . config ( f 'spark.sql.catalog. { catalog name } .io-impl' , 'org.apache.iceberg.gcp.gcs.GCSFileIO' ) \ . config ( f 'spark.sql.catalog. { catalog name } .rest-metrics-reporting-enabled' , 'false' ) \ . config ( 'spark.sql.extensions' , 'org.apache.iceberg.spark.extensions.IcebergSparkSessionExtensions' ) \ . config ( 'spark.sql.defaultCatalog' , ' CATALOG NAME ' ) \ . getOrCreate () Replace the following: CATALOG NAME : the name of your Iceberg REST catalog.
- Limitations The Iceberg REST catalog is subject to the following limitations: General limitations Trino is only supported with BigQuery catalog federation when using Managed Service for Apache Spark on Compute Engine 2.3 image versions 2.3.16 and later.

### About BigLake metastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/about-blms](https://docs.cloud.google.com/bigquery/docs/about-blms)
- Source ID: `site-docs-reference-5`
- Final score: 232
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following table provides links to documentation for each engine: Engine Documentation Apache Spark Quickstart: Use with Spark Apache Flink Use with Apache Flink Trino Use with Trino Configuration options BigLake metastore can be configured in one of two ways: with the Iceberg REST catalog or the custom Iceberg catalog for BigQuery .
- Tables created with the custom Iceberg catalog for BigQuery are visible with the Iceberg REST catalog through BigQuery catalog federation.
- Existing BigLake metastore users that have current tables with the custom Iceberg catalog for BigQuery.
- BigLake metastore supports the Iceberg REST catalog, while BigLake metastore (classic) does not.

### About BigLake metastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/about-bqms](https://docs.cloud.google.com/bigquery/docs/about-bqms)
- Source ID: `site-docs-reference-5`
- Final score: 232
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following table provides links to documentation for each engine: Engine Documentation Apache Spark Quickstart: Use with Spark Apache Flink Use with Apache Flink Trino Use with Trino Configuration options BigLake metastore can be configured in one of two ways: with the Iceberg REST catalog or the custom Iceberg catalog for BigQuery .
- Tables created with the custom Iceberg catalog for BigQuery are visible with the Iceberg REST catalog through BigQuery catalog federation.
- Existing BigLake metastore users that have current tables with the custom Iceberg catalog for BigQuery.
- BigLake metastore supports the Iceberg REST catalog, while BigLake metastore (classic) does not.

