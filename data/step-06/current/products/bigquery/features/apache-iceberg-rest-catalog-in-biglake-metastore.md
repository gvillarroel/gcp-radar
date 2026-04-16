---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.328Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Apache Iceberg REST catalog in BigLake metastore"
feature_slug: "apache-iceberg-rest-catalog-in-biglake-metastore"
latest_feature_date: "2025-06-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/blms-rest-catalog"
  - "https://docs.cloud.google.com/bigquery/docs/about-blms"
  - "https://docs.cloud.google.com/bigquery/docs/about-bqms"
keywords:
  - "apache"
  - "iceberg"
  - "rest"
  - "catalog"
  - "biglake"
  - "metastore"
  - "enables"
  - "open"
---

# Apache Iceberg REST catalog in BigLake metastore

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

The Apache Iceberg REST catalog in BigLake metastore enables open source query engines to access Iceberg data in Cloud Storage.

## Extended Definition

The Apache Iceberg REST catalog in BigLake metastore enables open source query engines to access Iceberg data in Cloud Storage.

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
- Final score: 358
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Prior Iceberg releases For open source Iceberg releases prior to 1.10, you can configure standard OAuth authentication by configuring a session with the following: import pyspark from pyspark.context import SparkContext from pyspark.sql import SparkSession catalog name = " CATALOG NAME " spark = SparkSession . builder . appName ( " APP NAME " ) \ . config ( 'spark.jars.packages' , 'org.apache.iceberg:iceberg-spark-runtime-3.5 2.12:1.9.1,org.apache.iceberg:iceberg-gcp-bundle:1.9.1' ) \ . config ( f 'spark.sql.catalog. { catalog name } ' , 'org.apache.iceberg.spark.SparkCatalog' ) \ . config ( f 'spark.sql.catalog. { catalog name } .type' , 'rest' ) \ . config ( f 'spark.sql.catalog. { catalog name } .uri' , 'https://biglake.googleapis.com/iceberg/v1/restcatalog' ) \ . config ( f 'spark.sql.catalog. { catalog name } .warehouse' , ' WAREHOUSE PATH ' ) \ . config ( f 'spark.sql.catalog. { catalog name } .header.x-goog-user-project' , ' PROJECT ID ' ) \ . config ( f "spark.sql.catalog. { catalog name } .token" , " TOKEN " ) \ . config ( f "spark.sql.catalog. { catalog name } .oauth2-server-uri" , "https://oauth2.googleapis.com/token" ) \ . config ( f 'spark.sql.catalog. { catalog name } .io-impl' , 'org.apache.iceberg.gcp.gcs.GCSFileIO' ) \ . config ( f 'spark.sql.catalog. { catalog name } .rest-metrics-reporting-enabled' , 'false' ) \ . config ( 'spark.sql.extensions' , 'org.apache.iceberg.spark.extensions.IcebergSparkSessionExtensions' ) \ . config ( 'spark.sql.defaultCatalog' , ' CATALOG NAME ' ) \ . getOrCreate () Replace the following: CATALOG NAME : the name of your Iceberg REST catalog.
- The following is an example of how to configure Apache Spark to use the BigLake metastore Iceberg REST catalog. import pyspark from pyspark.context import SparkContext from pyspark.sql import SparkSession catalog name = " CATALOG NAME " spark = SparkSession . builder . appName ( " APP NAME " ) \ . config ( f 'spark.sql.catalog. { catalog name } ' , 'org.apache.iceberg.spark.SparkCatalog' ) \ . config ( f 'spark.sql.catalog. { catalog name } .type' , 'rest' ) \ . config ( f 'spark.sql.catalog. { catalog name } .uri' , 'https://biglake.googleapis.com/iceberg/v1/restcatalog' ) \ . config ( f 'spark.sql.catalog. { catalog name } .warehouse' , ' WAREHOUSE PATH ' ) \ . config ( f 'spark.sql.catalog. { catalog name } .header.x-goog-user-project' , ' PROJECT ID ' ) \ . config ( f 'spark.sql.catalog. { catalog name } .rest.auth.type' , 'org.apache.iceberg.gcp.auth.GoogleAuthManager' ) \ . config ( f 'spark.sql.catalog. { catalog name } .io-impl' , 'org.apache.iceberg.gcp.gcs.GCSFileIO' ) \ . config ( f 'spark.sql.catalog. { catalog name } .rest-metrics-reporting-enabled' , 'false' ) \ . config ( 'spark.sql.extensions' , 'org.apache.iceberg.spark.extensions.IcebergSparkSessionExtensions' ) \ . config ( 'spark.sql.defaultCatalog' , ' CATALOG NAME ' ) \ . getOrCreate () Replace the following: CATALOG NAME : the name of your Iceberg REST catalog.
- The following are the general steps to follow when using the Apache Iceberg REST catalog in BigLake metastore: Based on the Iceberg REST catalog overview , choose your catalog warehouse location (either Cloud Storage or BigQuery).
- The Apache Iceberg REST catalog in BigLake metastore is the recommended way to use BigLake metastore for new workflows.

### About BigLake metastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/about-blms](https://docs.cloud.google.com/bigquery/docs/about-blms)
- Source ID: `site-docs-reference-5`
- Final score: 238
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following table provides links to documentation for each engine: Engine Documentation Apache Spark Quickstart: Use with Spark Apache Flink Use with Apache Flink Trino Use with Trino Configuration options BigLake metastore can be configured in one of two ways: with the Iceberg REST catalog or the custom Iceberg catalog for BigQuery .
- BigLake metastore supports the Iceberg REST catalog, while BigLake metastore (classic) does not.
- Existing BigLake metastore users that have current tables with the custom Iceberg catalog for BigQuery.
- Key capabilities As a component of BigLake, BigLake metastore provides several advantages for data management and analysis, including a serverless architecture, engine interoperability with open APIs, a unified user experience, and high-performance analytics, streaming, and AI when used with BigQuery.

### About BigLake metastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/about-bqms](https://docs.cloud.google.com/bigquery/docs/about-bqms)
- Source ID: `site-docs-reference-5`
- Final score: 238
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following table provides links to documentation for each engine: Engine Documentation Apache Spark Quickstart: Use with Spark Apache Flink Use with Apache Flink Trino Use with Trino Configuration options BigLake metastore can be configured in one of two ways: with the Iceberg REST catalog or the custom Iceberg catalog for BigQuery .
- BigLake metastore supports the Iceberg REST catalog, while BigLake metastore (classic) does not.
- Existing BigLake metastore users that have current tables with the custom Iceberg catalog for BigQuery.
- Key capabilities As a component of BigLake, BigLake metastore provides several advantages for data management and analysis, including a serverless architecture, engine interoperability with open APIs, a unified user experience, and high-performance analytics, streaming, and AI when used with BigQuery.

