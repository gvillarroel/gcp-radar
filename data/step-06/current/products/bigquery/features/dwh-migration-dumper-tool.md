---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.325Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "dwh-migration-dumper tool"
feature_slug: "dwh-migration-dumper-tool"
latest_feature_date: "2025-07-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/hadoop-metadata"
  - "https://docs.cloud.google.com/bigquery/docs/hadoop-permissions-migration"
  - "https://docs.cloud.google.com/bigquery/docs/hdfs-data-lake-transfer"
keywords:
  - "dwh"
  - "migration"
  - "dumper"
  - "tool"
  - "migrates"
  - "metadata"
  - "needed"
  - "hadoop"
---

# dwh-migration-dumper tool

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

The dwh-migration-dumper tool migrates metadata needed for Hadoop permissions and data migration to BigQuery.

## Extended Definition

The dwh-migration-dumper tool migrates metadata needed for Hadoop permissions and data migration to BigQuery.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/hadoop-metadata](https://docs.cloud.google.com/bigquery/docs/hadoop-metadata)
- [https://docs.cloud.google.com/bigquery/docs/hadoop-permissions-migration](https://docs.cloud.google.com/bigquery/docs/hadoop-permissions-migration)
- [https://docs.cloud.google.com/bigquery/docs/hdfs-data-lake-transfer](https://docs.cloud.google.com/bigquery/docs/hdfs-data-lake-transfer)

## Supporting Pages

### "Extracting metadata from Apache Hive for migration \_|\_ BigQuery \_|\_\

- URL: [https://docs.cloud.google.com/bigquery/docs/hadoop-metadata](https://docs.cloud.google.com/bigquery/docs/hadoop-metadata)
- Source ID: `site-api-reference`
- Final score: 246
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This document covers metadata extraction from the following data sources: Apache Hive Apache Hadoop Distributed File System (HDFS) Apache Ranger Cloudera Manager Apache Hive query logs Before you begin Before you can use the dwh-migration-dumper tool, do the following: Install Java The server on which you plan to run dwh-migration-dumper tool must have Java 8 or higher installed.
- Cloudera Run the following command to extract metadata from Cloudera using the dwh-migration-dumper tool. dwh-migration-dumper \ --connector cloudera-manager \ --url CLOUDERA-URL \ --user CLOUDERA-USER \ --password CLOUDERA-PASSWORD \ --output gs:// MIGRATION-BUCKET /cloudera-dumper-output.zip \ --yarn-application-types APPLICATION-TYPES \ --pagination-page-size PAGE-SIZE \ --assessment \ Replace the following: CLOUDERA-URL : the URL for Cloudera Manager CLOUDERA-USER : the username of the Cloudera user CLOUDERA-PASSWORD : the password of the Cloudera user MIGRATION-BUCKET : the Cloud Storage bucket that you are using to store the migration files.
- Apache Ranger Run the following command to extract metadata from Apache Ranger using the dwh-migration-dumper tool. dwh-migration-dumper \ --connector ranger \ --host RANGER-HOST \ --port 6080 \ --user RANGER-USER \ --password RANGER-PASSWORD \ --ranger-scheme RANGER-SCHEME \ --output gs:// MIGRATION-BUCKET /ranger-dumper-output.zip \ --assessment \ Replace the following: RANGER-HOST : the hostname of the Apache Ranger instance RANGER-USER : the username of the Apache Ranger user RANGER-PASSWORD : the password of the Apache Ranger user RANGER-SCHEME : specify if Apache Ranger is using http or https .
- HDFS Run the following command to extract metadata from HDFS using the dwh-migration-dumper tool. dwh-migration-dumper \ --connector hdfs \ --host HDFS-HOST \ --port HDFS-PORT \ --output gs:// MIGRATION-BUCKET /hdfs-dumper-output.zip \ --assessment \ Replace the following: HDFS-HOST : the HDFS NameNode hostname HDFS-PORT : the HDFS NameNode port number.

### Migrating permissions from Hadoop \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/hadoop-permissions-migration](https://docs.cloud.google.com/bigquery/docs/hadoop-permissions-migration)
- Source ID: `site-api-reference`
- Final score: 220
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Run the dwh-migration-dumper tool to generate the necessary metadata for your data source.
- The following example shows how you can run the permissions migration tool to migrate from both HDFS and Apache Ranger, with the tables mapping configuration files and the principals mapping file named principals.yaml , resulting in a principals mapping file named permissions.yaml . ./dwh-permissions-migration build \ --permissions-ruleset gs:// MIGRATION BUCKET /permissions-config.yaml \ --tables gs:// MIGRATION BUCKET /tables/ \ --principals gs:// MIGRATION BUCKET /principals.yaml \ --ranger-dumper-output gs:// MIGRATION BUCKET /ranger-dumper-output.zip \ --hdfs-dumper-output gs:// MIGRATION BUCKET /hdfs-dumper-output.zip \ --output-permissions gs:// MIGRATION BUCKET /permissions.yaml Replace MIGRATION BUCKET with the name of the Cloud Storage bucket that contains your migration files.
- The following example shows how you can run the permissions migration tool to migrate from both HDFS and Apache Ranger, resulting in a principals mapping file named principals.yaml . ./dwh-permissions-migration expand \ --principal-ruleset gs:// MIGRATION BUCKET /principals-ruleset.yaml \ --hdfs-dumper-output gs:// MIGRATION BUCKET /hdfs-dumper-output.zip \ --ranger-dumper-output gs:// MIGRATION BUCKET /ranger-dumper-output.zip \ --output-principals gs:// MIGRATION BUCKET /principals.yaml Replace MIGRATION BUCKET with the name of the Cloud Storage bucket that contains your migration files.
- Then, run the permission migration tool with the permissions ruleset YAML file and the table mapping configuration files, and the HDFS or Ranger metadata files, to generate a target permissions mapping file.

### "Migrate Apache Hive Metastore tables to Google Cloud \_|\_ BigQuery \_|\_\

- URL: [https://docs.cloud.google.com/bigquery/docs/hdfs-data-lake-transfer](https://docs.cloud.google.com/bigquery/docs/hdfs-data-lake-transfer)
- Source ID: `site-api-reference`
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- The service account should belong to the same Google Cloud project where the transfer configuration and destination dataset is created. bq To schedule Hive Metastore transfer, enter the bq mk command and supply the transfer creation flag --transfer config : bq mk --transfer config --data source = hadoop display name = ' TRANSFER NAME ' --service account name = ' SERVICE ACCOUNT ' --project id = ' PROJECT ID ' location = ' REGION ' --params = '{ "transfer strategy":" TRANSFER STRATEGY ", "table name patterns":" LIST OF TABLES ", "table metadata path":"gs:// DUMPER BUCKET /hive-dumper-output.zip", "target gcs file path":"gs:// MIGRATION BUCKET ", "metastore":" METASTORE ", "destination dataproc metastore":" DATAPROC METASTORE URL ", "destination bigquery dataset":" BIGLAKE METASTORE DATASET ", "translation output gcs path":"gs:// TRANSLATION OUTPUT BUCKET /metadata/config/default database/", "storage type":" STORAGE TYPE ", "agent pool name":" AGENT POOL NAME ", "aws access key id":" AWS ACCESS KEY ID ", "aws secret access key":" AWS SECRET ACCESS KEY ", "azure sas token":" AZURE SAS TOKEN ", "partition filter gcs path":" FILTER GCS PATH " }' Replace the following: TRANSFER NAME : the display name for the transfer configuration.
- For more information, see the following guide: HDFS permissions Amazon S3 and Microsoft Azure permissions Generate metadata file for Apache Hive Run the dwh-migration-dumper tool to extract metadata for Apache Hive.
- DUMPER EXECUTABLE = "DUMPER PATH/dwh-migration-dumper" GCS BASE PATH = "gs://PATH TO DUMPER OUTPUT" LOCAL BASE DIR = "LOCAL BASE DIRECTORY PATH" Optional arguments for cloud environments DUMPER HOST = "" DUMPER PORT = "" HIVE KERBEROS URL = "" HIVEQL RPC PROTECTION = "" KERBEROS AUTHENTICATION = "false" Function to display usage information usage () { echo "Usage: $0 [options]" echo "" echo "Runs the dwh-migration-dumper tool and uploads its output to provided Cloud Storage path." echo "" echo "Required Options:" echo " --dumper-executable The full path to the dumper executable." echo " --gcs-base-path The base Cloud Storage folder to upload dumper output files to.
- Automate dumper tool execution with a cron job You can automate incremental transfers by using a cron job to execute the dwh-migration-dumper tool.

