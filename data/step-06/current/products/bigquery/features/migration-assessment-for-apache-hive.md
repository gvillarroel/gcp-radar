---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.542Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Migration assessment for Apache Hive"
feature_slug: "migration-assessment-for-apache-hive"
latest_feature_date: "2023-10-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/hadoop-metadata"
  - "https://docs.cloud.google.com/bigquery/docs/hdfs-data-lake-transfer"
  - "https://docs.cloud.google.com/bigquery/docs/hadoop-permissions-migration"
keywords:
  - "migration"
  - "assessment"
  - "apache"
  - "hive"
  - "bigquery"
  - "can"
  - "evaluate"
  - "complexity"
---

# Migration assessment for Apache Hive

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery migration assessment can evaluate the complexity of migrating an Apache Hive warehouse to BigQuery.

## Extended Definition

BigQuery migration assessment can evaluate the complexity of migrating an Apache Hive warehouse to BigQuery.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/hadoop-metadata](https://docs.cloud.google.com/bigquery/docs/hadoop-metadata)
- [https://docs.cloud.google.com/bigquery/docs/hdfs-data-lake-transfer](https://docs.cloud.google.com/bigquery/docs/hdfs-data-lake-transfer)
- [https://docs.cloud.google.com/bigquery/docs/hadoop-permissions-migration](https://docs.cloud.google.com/bigquery/docs/hadoop-permissions-migration)

## Supporting Pages

### "Extracting metadata from Apache Hive for migration \_|\_ BigQuery \_|\_\

- URL: [https://docs.cloud.google.com/bigquery/docs/hadoop-metadata](https://docs.cloud.google.com/bigquery/docs/hadoop-metadata)
- Source ID: `site-api-reference`
- Final score: 175
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Apache Hive query logs Perform the steps in the Apache Hive section Extract query logs with the hadoop-migration-assessment logging hook to extract your Apache Hive query logs.
- Apache Ranger Run the following command to extract metadata from Apache Ranger using the dwh-migration-dumper tool. dwh-migration-dumper \ --connector ranger \ --host RANGER-HOST \ --port 6080 \ --user RANGER-USER \ --password RANGER-PASSWORD \ --ranger-scheme RANGER-SCHEME \ --output gs:// MIGRATION-BUCKET /ranger-dumper-output.zip \ --assessment \ Replace the following: RANGER-HOST : the hostname of the Apache Ranger instance RANGER-USER : the username of the Apache Ranger user RANGER-PASSWORD : the password of the Apache Ranger user RANGER-SCHEME : specify if Apache Ranger is using http or https .
- This document covers metadata extraction from the following data sources: Apache Hive Apache Hadoop Distributed File System (HDFS) Apache Ranger Cloudera Manager Apache Hive query logs Before you begin Before you can use the dwh-migration-dumper tool, do the following: Install Java The server on which you plan to run dwh-migration-dumper tool must have Java 8 or higher installed.
- Extracting metadata for migration Select one of the following options to learn how to extract metadata for your data source: Apache Hive Perform the steps in the Apache Hive section Extract metadata and query logs from your data warehouse to extract your Apache Hive metadata.

### "Migrate Apache Hive Metastore tables to Google Cloud \_|\_ BigQuery \_|\_\

- URL: [https://docs.cloud.google.com/bigquery/docs/hdfs-data-lake-transfer](https://docs.cloud.google.com/bigquery/docs/hdfs-data-lake-transfer)
- Source ID: `site-api-reference`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- The Apache Hive Metastore migration connector in the BigQuery Data Transfer Service lets you seamlessly migrate your Hive Metastore tables to Google Cloud at scale.
- The service account should belong to the same Google Cloud project where the transfer configuration and destination dataset is created. bq To schedule Hive Metastore transfer, enter the bq mk command and supply the transfer creation flag --transfer config : bq mk --transfer config --data source = hadoop display name = ' TRANSFER NAME ' --service account name = ' SERVICE ACCOUNT ' --project id = ' PROJECT ID ' location = ' REGION ' --params = '{ "transfer strategy":" TRANSFER STRATEGY ", "table name patterns":" LIST OF TABLES ", "table metadata path":"gs:// DUMPER BUCKET /hive-dumper-output.zip", "target gcs file path":"gs:// MIGRATION BUCKET ", "metastore":" METASTORE ", "destination dataproc metastore":" DATAPROC METASTORE URL ", "destination bigquery dataset":" BIGLAKE METASTORE DATASET ", "translation output gcs path":"gs:// TRANSLATION OUTPUT BUCKET /metadata/config/default database/", "storage type":" STORAGE TYPE ", "agent pool name":" AGENT POOL NAME ", "aws access key id":" AWS ACCESS KEY ID ", "aws secret access key":" AWS SECRET ACCESS KEY ", "azure sas token":" AZURE SAS TOKEN ", "partition filter gcs path":" FILTER GCS PATH " }' Replace the following: TRANSFER NAME : the display name for the transfer configuration.
- The Hive Metastore migration connector supports files stored in the following data sources: Apache Hadoop Distributed File System (HDFS) Amazon Simple Storage Service (Amazon S3) Azure Blob Storage or Azure Data Lake Storage Gen2 With the Hive Metastore migration connector, you can use Cloud Storage as the file storage and register your Hive Metastore tables with one of the following metastores: BigLake metastore Iceberg REST Catalog We recommend using the BigLake metastore Iceberg REST Catalog for all your Iceberg data.
- For more information, see the following guide: HDFS permissions Amazon S3 and Microsoft Azure permissions Generate metadata file for Apache Hive Run the dwh-migration-dumper tool to extract metadata for Apache Hive.

### Migrating permissions from Hadoop \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/hadoop-permissions-migration](https://docs.cloud.google.com/bigquery/docs/hadoop-permissions-migration)
- Source ID: `site-api-reference`
- Final score: 118
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This document describes how you can migrate permissions from Apache Hadoop Distributed File System (HDFS), Ranger HDFS, and Apache Hive into Identity and Access Management (IAM) roles in Cloud Storage or BigQuery.
- The following example shows how you can run the permissions migration tool to migrate from both HDFS and Apache Ranger, with the tables mapping configuration files and the principals mapping file named principals.yaml , resulting in a principals mapping file named permissions.yaml . ./dwh-permissions-migration build \ --permissions-ruleset gs:// MIGRATION BUCKET /permissions-config.yaml \ --tables gs:// MIGRATION BUCKET /tables/ \ --principals gs:// MIGRATION BUCKET /principals.yaml \ --ranger-dumper-output gs:// MIGRATION BUCKET /ranger-dumper-output.zip \ --hdfs-dumper-output gs:// MIGRATION BUCKET /hdfs-dumper-output.zip \ --output-permissions gs:// MIGRATION BUCKET /permissions.yaml Replace MIGRATION BUCKET with the name of the Cloud Storage bucket that contains your migration files.
- The following example shows how you can run the permissions migration tool to migrate from both HDFS and Apache Ranger, resulting in a principals mapping file named principals.yaml . ./dwh-permissions-migration expand \ --principal-ruleset gs:// MIGRATION BUCKET /principals-ruleset.yaml \ --hdfs-dumper-output gs:// MIGRATION BUCKET /hdfs-dumper-output.zip \ --ranger-dumper-output gs:// MIGRATION BUCKET /ranger-dumper-output.zip \ --output-principals gs:// MIGRATION BUCKET /principals.yaml Replace MIGRATION BUCKET with the name of the Cloud Storage bucket that contains your migration files.
- For example: "'permissions-migration-' + group.name + '@google.com'" Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

