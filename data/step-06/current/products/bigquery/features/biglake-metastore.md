---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.336Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigLake metastore"
feature_slug: "biglake-metastore"
latest_feature_date: "2025-06-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/about-blms"
  - "https://docs.cloud.google.com/bigquery/docs/about-bqms"
  - "https://docs.cloud.google.com/bigquery/docs/bqms-use-dataproc"
keywords:
  - "biglake"
  - "metastore"
  - "generally"
  - "available"
  - "renamed"
  - "form"
  - "bigquery"
  - "classic"
---

# BigLake metastore

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigLake metastore is the generally available renamed form of BigQuery metastore; BigLake metastore (classic) is the new name for the feature formerly known as BigLake metastore.

## Extended Definition

BigLake metastore is the generally available renamed form of BigQuery metastore; BigLake metastore (classic) is the new name for the feature formerly known as BigLake metastore.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/about-blms](https://docs.cloud.google.com/bigquery/docs/about-blms)
- [https://docs.cloud.google.com/bigquery/docs/about-bqms](https://docs.cloud.google.com/bigquery/docs/about-bqms)
- [https://docs.cloud.google.com/bigquery/docs/bqms-use-dataproc](https://docs.cloud.google.com/bigquery/docs/bqms-use-dataproc)

## Supporting Pages

### About BigLake metastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/about-blms](https://docs.cloud.google.com/bigquery/docs/about-blms)
- Source ID: `site-docs-reference-5`
- Final score: 198
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Key capabilities As a component of BigLake, BigLake metastore provides several advantages for data management and analysis, including a serverless architecture, engine interoperability with open APIs, a unified user experience, and high-performance analytics, streaming, and AI when used with BigQuery.
- Querying Query performance for BigLake metastore tables from the BigQuery engine might be slow compared to querying data in standard BigQuery tables.
- The following table provides links to documentation for each engine: Engine Documentation Apache Spark Quickstart: Use with Spark Apache Flink Use with Apache Flink Trino Use with Trino Configuration options BigLake metastore can be configured in one of two ways: with the Iceberg REST catalog or the custom Iceberg catalog for BigQuery .
- The best option depends on your use case, as shown in the following table: Use case Recommendation New BigLake metastore users that want their open source engine to access data in Cloud Storage and need interoperability with other engines, including BigQuery and AlloyDB for PostgreSQL.

### About BigLake metastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/about-bqms](https://docs.cloud.google.com/bigquery/docs/about-bqms)
- Source ID: `site-docs-reference-5`
- Final score: 198
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Key capabilities As a component of BigLake, BigLake metastore provides several advantages for data management and analysis, including a serverless architecture, engine interoperability with open APIs, a unified user experience, and high-performance analytics, streaming, and AI when used with BigQuery.
- Querying Query performance for BigLake metastore tables from the BigQuery engine might be slow compared to querying data in standard BigQuery tables.
- The following table provides links to documentation for each engine: Engine Documentation Apache Spark Quickstart: Use with Spark Apache Flink Use with Apache Flink Trino Use with Trino Configuration options BigLake metastore can be configured in one of two ways: with the Iceberg REST catalog or the custom Iceberg catalog for BigQuery .
- The best option depends on your use case, as shown in the following table: Use case Recommendation New BigLake metastore users that want their open source engine to access data in Cloud Storage and need interoperability with other engines, including BigQuery and AlloyDB for PostgreSQL.

### "Configure BigLake metastore for Managed Service for Apache Spark and Spark\

- URL: [https://docs.cloud.google.com/bigquery/docs/bqms-use-dataproc](https://docs.cloud.google.com/bigquery/docs/bqms-use-dataproc)
- Source ID: `site-docs-reference-5`
- Final score: 178
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Required roles To get the permissions that you need to configure BigLake metastore, ask your administrator to grant you the following IAM roles: Create a Managed Service for Apache Spark cluster: Dataproc Worker ( roles/dataproc.worker ) on the Compute Engine default service account in the project Create BigLake metastore tables: Dataproc Worker ( roles/dataproc.worker ) on the Dataproc VM service account in the project BigQuery Data Editor ( roles/bigquery.dataEditor ) on the Dataproc VM service account in the project Storage Object User ( roles/storage.objectUser ) on the Dataproc VM service account in the project Query BigLake metastore tables: BigQuery Data Viewer ( roles/bigquery.dataViewer ) on the project BigQuery User ( roles/bigquery.user ) on the project Storage Object Viewer ( roles/storage.objectViewer ) on the project For more information about granting roles, see Manage access to projects, folders, and organizations .
- Configure the Iceberg custom catalog plugin for BigLake metastore: FLINK VERSION = 1 .19 ICEBERG VERSION = 1 .6.1 cd /usr/lib/flink sudo wget -c https://repo.maven.apache.org/maven2/org/apache/iceberg/iceberg-flink-runtime- ${ FLINK VERSION } / ${ ICEBERG VERSION } /iceberg-flink-runtime- ${ FLINK VERSION } - ${ ICEBERG VERSION } .jar -P lib sudo gcloud storage cp gs://spark-lib/bigquery/iceberg-bigquery-catalog- ${ ICEBERG VERSION } -1.0.2.jar lib/ Start the Flink session on YARN: HADOOP CLASSPATH = hadoop classpath sudo bin/yarn-session.sh -nm flink-dataproc -d sudo bin/sql-client.sh embedded \ -s yarn-session Create a catalog in Flink: CREATE CATALOG CATALOG NAME WITH ( 'type' = 'iceberg' , 'warehouse' = ' WAREHOUSE DIRECTORY ' , 'catalog-impl' = 'org.apache.iceberg.gcp.bigquery.BigQueryMetastoreCatalog' , 'gcp project' = ' PROJECT ID ' , 'gcp location' = ' LOCATION ' ); Replace the following: CATALOG NAME : the Flink catalog identifier, which is linked to a BigLake metastore catalog.
- This document explains how to configure the custom Iceberg catalog for BigQuery in BigLake metastore with either Managed Service for Apache Spark or Managed Service for Apache Spark .
- To create a new Managed Service for Apache Spark cluster, run the following gcloud dataproc clusters create command , which contains the settings that you need to use BigLake metastore: gcloud dataproc clusters create CLUSTER NAME \ --project = PROJECT ID \ --region = LOCATION \ --single-node Replace the following: CLUSTER NAME : a name for your Managed Service for Apache Spark cluster.

