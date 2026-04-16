---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.734Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "INT64 aliases"
feature_slug: "int64-aliases"
latest_feature_date: "2021-06-28"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/information-schema-intro"
  - "https://docs.cloud.google.com/bigquery/docs/information-schema-constraint-column-usage"
  - "https://docs.cloud.google.com/bigquery/docs/bqms-use-dataproc"
keywords:
  - "int64"
  - "aliases"
  - "bigquery"
  - "supports"
  - "alternate"
  - "sql"
  - "including"
  - "int"
---

# INT64 aliases

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery supports alternate SQL aliases for INT64, including INT, SMALLINT, INTEGER, BIGINT, TINYINT, and BYTEINT.

## Extended Definition

BigQuery supports alternate SQL aliases for INT64, including INT, SMALLINT, INTEGER, BIGINT, TINYINT, and BYTEINT.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/information-schema-intro](https://docs.cloud.google.com/bigquery/docs/information-schema-intro)
- [https://docs.cloud.google.com/bigquery/docs/information-schema-constraint-column-usage](https://docs.cloud.google.com/bigquery/docs/information-schema-constraint-column-usage)
- [https://docs.cloud.google.com/bigquery/docs/bqms-use-dataproc](https://docs.cloud.google.com/bigquery/docs/bqms-use-dataproc)

## Supporting Pages

### Introduction to INFORMATION_SCHEMA \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/information-schema-intro](https://docs.cloud.google.com/bigquery/docs/information-schema-intro)
- Source ID: `site-docs-reference-3`
- Final score: 60
- Re-rank relevance: N/A

Evidence snippets:
- Introduction to INFORMATION SCHEMA The BigQuery INFORMATION SCHEMA views are read-only, system-defined views that provide metadata information about your BigQuery objects.
- Home Documentation Data analytics BigQuery Reference Send feedback Stay organized with collections Save and categorize content based on your preferences.
- For projects that use capacity-based pricing, queries against INFORMATION SCHEMA views and tables consume your purchased BigQuery slots.
- Note: Not all INFORMATION SCHEMA views are supported for BigQuery Omni system tables .

### CONSTRAINT_COLUMN_USAGE view \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/information-schema-constraint-column-usage](https://docs.cloud.google.com/bigquery/docs/information-schema-constraint-column-usage)
- Source ID: `site-docs-reference-3`
- Final score: 54
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Data analytics BigQuery Reference Send feedback Stay organized with collections Save and categorize content based on your preferences.

### "Configure BigLake metastore for Managed Service for Apache Spark and Spark\

- URL: [https://docs.cloud.google.com/bigquery/docs/bqms-use-dataproc](https://docs.cloud.google.com/bigquery/docs/bqms-use-dataproc)
- Source ID: `site-docs-reference-5`
- Final score: 48
- Re-rank relevance: N/A

Evidence snippets:
- Configure the Iceberg custom catalog plugin for BigLake metastore: FLINK VERSION = 1 .19 ICEBERG VERSION = 1 .6.1 cd /usr/lib/flink sudo wget -c https://repo.maven.apache.org/maven2/org/apache/iceberg/iceberg-flink-runtime- ${ FLINK VERSION } / ${ ICEBERG VERSION } /iceberg-flink-runtime- ${ FLINK VERSION } - ${ ICEBERG VERSION } .jar -P lib sudo gcloud storage cp gs://spark-lib/bigquery/iceberg-bigquery-catalog- ${ ICEBERG VERSION } -1.0.2.jar lib/ Start the Flink session on YARN: HADOOP CLASSPATH = hadoop classpath sudo bin/yarn-session.sh -nm flink-dataproc -d sudo bin/sql-client.sh embedded \ -s yarn-session Create a catalog in Flink: CREATE CATALOG CATALOG NAME WITH ( 'type' = 'iceberg' , 'warehouse' = ' WAREHOUSE DIRECTORY ' , 'catalog-impl' = 'org.apache.iceberg.gcp.bigquery.BigQueryMetastoreCatalog' , 'gcp project' = ' PROJECT ID ' , 'gcp location' = ' LOCATION ' ); Replace the following: CATALOG NAME : the Flink catalog identifier, which is linked to a BigLake metastore catalog.
- Required roles To get the permissions that you need to configure BigLake metastore, ask your administrator to grant you the following IAM roles: Create a Managed Service for Apache Spark cluster: Dataproc Worker ( roles/dataproc.worker ) on the Compute Engine default service account in the project Create BigLake metastore tables: Dataproc Worker ( roles/dataproc.worker ) on the Dataproc VM service account in the project BigQuery Data Editor ( roles/bigquery.dataEditor ) on the Dataproc VM service account in the project Storage Object User ( roles/storage.objectUser ) on the Dataproc VM service account in the project Query BigLake metastore tables: BigQuery Data Viewer ( roles/bigquery.dataViewer ) on the project BigQuery User ( roles/bigquery.user ) on the project Storage Object Viewer ( roles/storage.objectViewer ) on the project For more information about granting roles, see Manage access to projects, folders, and organizations .
- Depending on your Iceberg version number, select one of the following: Iceberg 1.9.1 : gs://spark-lib/bigquery/iceberg-bigquery-catalog-1.9.1-1.0.1.jar Iceberg 1.6.1 : gs://spark-lib/bigquery/iceberg-bigquery-catalog-1.6.1-1.0.2.jar CATALOG NAME : the name of the Spark catalog to that you're using with your SQL job.
- Depending on your Iceberg version number, select one of the following: Iceberg 1.9.1: gs://spark-lib/bigquery/iceberg-bigquery-catalog-1.9.1-1.0.1.jar Iceberg 1.6.1: gs://spark-lib/bigquery/iceberg-bigquery-catalog-1.6.1-1.0.2.jar LOCATION : the location of the BigQuery resources.

