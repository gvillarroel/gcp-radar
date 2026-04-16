---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.683Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "SQL metadata extraction tools"
feature_slug: "sql-metadata-extraction-tools"
latest_feature_date: "2022-06-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners"
  - "https://docs.cloud.google.com/bigquery/docs/hadoop-metadata"
  - "https://docs.cloud.google.com/bigquery/docs/batch-sql-translator"
keywords:
  - "sql"
  - "metadata"
  - "extraction"
  - "tools"
  - "extract"
  - "improve"
  - "accuracy"
  - "batch"
---

# SQL metadata extraction tools

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

SQL metadata extraction tools extract metadata to improve the accuracy of batch SQL translation jobs.

## Extended Definition

SQL metadata extraction tools extract metadata to improve the accuracy of batch SQL translation jobs.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- [https://docs.cloud.google.com/bigquery/docs/hadoop-metadata](https://docs.cloud.google.com/bigquery/docs/hadoop-metadata)
- [https://docs.cloud.google.com/bigquery/docs/batch-sql-translator](https://docs.cloud.google.com/bigquery/docs/batch-sql-translator)

## Supporting Pages

### Google Cloud Ready - BigQuery Partners \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- Source ID: `site-docs-reference-5`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- Partner references Google BigQuery as a source in Validio Partner Advantage page Direct link ETL & Data Integration Ab Initio Solution Ab Initio Platform Category ETL & Data Integration Description Ab Initio provides a high-performance software suite for data integration, batch processing, data quality, and metadata management.
- Fivetran improves the accuracy of data-driven decisions by continuously synchronizing data from source applications to any destination, letting analysts work with the freshest data that's possible.
- With HVR, you can replace your batch processes with a variety of real-time data delivery and integration scenarios and enable consolidated, real-time analytics that improve your business insights.
- Funnel helps digital marketers do the 3-step process to extract, transform, and load data, but we do it more simply for digital marketers and more agnostic than other tools.

### "Extracting metadata from Apache Hive for migration \_|\_ BigQuery \_|\_\

- URL: [https://docs.cloud.google.com/bigquery/docs/hadoop-metadata](https://docs.cloud.google.com/bigquery/docs/hadoop-metadata)
- Source ID: `site-api-reference`
- Final score: 147
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This document covers metadata extraction from the following data sources: Apache Hive Apache Hadoop Distributed File System (HDFS) Apache Ranger Cloudera Manager Apache Hive query logs Before you begin Before you can use the dwh-migration-dumper tool, do the following: Install Java The server on which you plan to run dwh-migration-dumper tool must have Java 8 or higher installed.
- Windows PowerShell ( Get-FileHash RELEASE ZIP FILENAME ) .Hash -eq (( Get-Content SHA256SUMS.txt ) -Split " " )[ 0 ] Replace the RELEASE ZIP FILENAME with the downloaded zip filename of the dwh-migration-dumper command-line extraction tool release—for example, dwh-migration-tools-v1.0.52.zip The True result confirms successful checksum verification.
- Cloudera Run the following command to extract metadata from Cloudera using the dwh-migration-dumper tool. dwh-migration-dumper \ --connector cloudera-manager \ --url CLOUDERA-URL \ --user CLOUDERA-USER \ --password CLOUDERA-PASSWORD \ --output gs:// MIGRATION-BUCKET /cloudera-dumper-output.zip \ --yarn-application-types APPLICATION-TYPES \ --pagination-page-size PAGE-SIZE \ --assessment \ Replace the following: CLOUDERA-URL : the URL for Cloudera Manager CLOUDERA-USER : the username of the Cloudera user CLOUDERA-PASSWORD : the password of the Cloudera user MIGRATION-BUCKET : the Cloud Storage bucket that you are using to store the migration files.
- Apache Ranger Run the following command to extract metadata from Apache Ranger using the dwh-migration-dumper tool. dwh-migration-dumper \ --connector ranger \ --host RANGER-HOST \ --port 6080 \ --user RANGER-USER \ --password RANGER-PASSWORD \ --ranger-scheme RANGER-SCHEME \ --output gs:// MIGRATION-BUCKET /ranger-dumper-output.zip \ --assessment \ Replace the following: RANGER-HOST : the hostname of the Apache Ranger instance RANGER-USER : the username of the Apache Ranger user RANGER-PASSWORD : the password of the Apache Ranger user RANGER-SCHEME : specify if Apache Ranger is using http or https .

### "Migrate code with the batch SQL translator \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/batch-sql-translator](https://docs.cloud.google.com/bigquery/docs/batch-sql-translator)
- Source ID: `site-docs-reference-5`
- Final score: 129
- Re-rank relevance: N/A

Evidence snippets:
- You can use the dwh-migration-dumper command-line extraction tool to generate the metadata information, or you can provide your own metadata files.
- Create a metadata file to improve the accuracy of the translation.
- You can find this in the Project info pane on the Google Cloud console welcome page for the project. gcs bucket : Type the name of the Cloud Storage bucket that the batch translation client uses to store files during translation job processing. input directory : Type the absolute or relative path to the directory containing the source files and any metadata files. output directory : Type the absolute or relative path to the target directory for the translated files.
- Debug batch translated SQL queries with the interactive SQL translator You can use the BigQuery interactive SQL translator to review or debug a SQL query using the same metadata or object mapping information as your source database.

