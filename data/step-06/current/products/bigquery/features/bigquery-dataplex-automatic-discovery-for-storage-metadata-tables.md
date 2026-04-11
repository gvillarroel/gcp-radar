---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.432Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery Dataplex automatic discovery for storage metadata tables"
feature_slug: "bigquery-dataplex-automatic-discovery-for-storage-metadata-tables"
latest_feature_date: "2025-04-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
keywords:
  - "metadata-driven table creation"
  - "Dataplex auto-discovery"
  - "Dataplex automatic discovery"
  - "Cloud Storage metadata scan"
  - "Dataplex metadata integration"
  - "storage metadata tables"
  - "external tables"
  - "BigLake tables"
---

# BigQuery Dataplex automatic discovery for storage metadata tables

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery integrates with Dataplex automatic discovery to scan Cloud Storage buckets and create BigLake, external, or object tables using extracted metadata.

## Extended Definition

Dataplex automatic discovery in BigQuery is a feature that scans data in Google Cloud Storage buckets, extracts and catalogs metadata, and uses that metadata to create BigLake, external, or object tables in BigQuery. The feature is positioned for use in analytics and AI insights, as well as security and governance scenarios.

## Evidence Summary

The BigQuery release notes provide the defining evidence that Dataplex automatic discovery creates BigLake, external, or object tables by scanning Cloud Storage and cataloging metadata.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)

## Supporting Pages

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 40
- Re-rank relevance: N/A

Evidence snippets:
- April 28, 2025 Libraries Java 2.49.1 (2025-04-24) Bug Fixes Add labels to converter for listTables method ( #3735 ) ( #3736 ) ( 8634822 ) Dependencies Update dependency com.google.cloud:sdk-platform-java-config to v3.46.0 ( #3753 ) ( a335927 ) Update netty.version to v4.2.0.final ( #3745 ) ( bb811c0 ) Libraries Java 2.49.2 (2025-04-26) Dependencies Update dependency com.google.cloud:sdk-platform-java-config to v3.46.2 ( #3756 ) ( 907e39f ) Java 2.49.1 (2025-04-24) Bug Fixes Add labels to converter for listTables method ( #3735 ) ( #3736 ) ( 8634822 ) Dependencies Update dependency com.google.cloud:sdk-platform-java-config to v3.46.0 ( #3753 ) ( a335927 ) Update netty.version to v4.2.0.final ( #3745 ) ( bb811c0 ) Feature Dataplex automatic discovery in BigQuery scans your data in Cloud Storage buckets to extract and catalog metadata, creating BigLake, external, or object tables for analytics and AI for insights, security, and governance.
- June 09, 2025 Libraries Java 2.51.0 (2025-06-06) Features bigquery: Job creation mode GA ( #3804 ) ( a21cde8 ) bigquery: Support Fine Grained ACLs for Datasets ( #3803 ) ( bebf1c6 ) Dependencies Rollback netty.version to v4.1.119.Final ( #3827 ) ( 94c71a0 ) Update dependency com.google.api.grpc:proto-google-cloud-bigqueryconnection-v1 to v2.65.0 ( #3787 ) ( 0574ecc ) Update dependency com.google.apis:google-api-services-bigquery to v2-rev20250511-2.0.0 ( #3794 ) ( d3bf724 ) Update dependency com.google.cloud:sdk-platform-java-config to v3.49.0 ( #3811 ) ( 2c5ede4 ) Feature You can reference Iceberg external tables in materialized views instead of migrating that data to BigQuery-managed storage.
- October 06, 2025 Feature The INFORMATION SCHEMA.SHARED DATASET USAGE view now includes the following schema fields to support usage metrics for external tables and routines: shared resource id : the ID of the queried resource shared resource type : the type of the queried resource referenced tables : Contains project id , dataset id , table id , and processed bytes fields of the base table.
- September 16, 2025 Feature You can now access snapshots of Apache Iceberg external tables that are retained in your Iceberg metadata by using the FOR SYSTEM TIME AS OF clause.

### Create and use tables \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
- Source ID: `site-docs-root`
- Final score: 38
- Re-rank relevance: N/A

Evidence snippets:
- Applicable only to tables with table type set to CLONE or SNAPSHOT . replica source catalog STRING For materialized view replicas , the base materialized view's project. replica source schema STRING For materialized view replicas , the base materialized view's dataset. replica source name STRING For materialized view replicas , the base materialized view's name. replication status STRING For materialized view replicas , the status of the replication from the base materialized view to the materialized view replica; one of the following: REPLICATION STATUS UNSPECIFIED ACTIVE : Replication is active with no errors SOURCE DELETED : The source materialized view has been deleted PERMISSION DENIED : The source materialized view hasn't been authorized on the dataset that contains the source Amazon S3 BigLake tables used in the query that created the materialized view.
- Applies to CSV and JSON data. uris For external tables, including object tables, that aren't Bigtable tables: ARRAY<STRING> An array of fully qualified URIs for the external data locations.
- For external tables, the following options are possible: Options allow jagged rows BOOL If true , allow rows that are missing trailing optional columns.
- Example: "gs://bucket/path" . file set spec type STRING Specifies how to interpret source URIs for load jobs and external tables.

### bq command-line tool reference \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- Source ID: `site-docs-reference`
- Final score: 36
- Re-rank relevance: N/A

Evidence snippets:
- For example: --external table definition=/tmp/tabledef --external table definition=Region:STRING,Quarter:STRING,Total sales:INTEGER@CSV=gs://mybucket/sales.csv For Bigtable external tables , and BigLake tables based on AWS and Azure : --external table definition= PATH TO FILE The value must be a path to a file containing a table definition .
- The default is false . --parquet enable list inference={true false} If the --source format flag is set to PARQUET , then this flag indicates whether to use schema inference for Parquet LIST logical types. --reference file schema uri= URI Specifies the path to a reference file with the expected table schema for creating external tables.
- If the file set spec type is NEW LINE DELIMITED MANIFEST , then each line in the file is interpreted as a URI that points to a data file. --reference file schema uri= URI Specifies the path to a reference file with the expected table schema for creating external tables.
- For Cloud Storage and Google Drive external tables: --external table definition={ PATH TO FILE DEFINITION } The value can be either a path to a file containing a table definition ( PATH TO FILE ) or an inline table definition ( DEFINITION ).

