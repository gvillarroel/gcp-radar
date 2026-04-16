---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.295Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery migration assessment for Informatica"
feature_slug: "bigquery-migration-assessment-for-informatica"
latest_feature_date: "2025-09-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners"
  - "https://docs.cloud.google.com/bigquery/docs/migration-intro"
  - "https://docs.cloud.google.com/bigquery/docs/hadoop-metadata"
keywords:
  - "bigquery"
  - "migration"
  - "assessment"
  - "informatica"
  - "provides"
  - "evaluate"
  - "complexity"
---

# BigQuery migration assessment for Informatica

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery provides a migration assessment for Informatica to evaluate migration complexity.

## Extended Definition

BigQuery provides a migration assessment for Informatica to evaluate migration complexity.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- [https://docs.cloud.google.com/bigquery/docs/migration-intro](https://docs.cloud.google.com/bigquery/docs/migration-intro)
- [https://docs.cloud.google.com/bigquery/docs/hadoop-metadata](https://docs.cloud.google.com/bigquery/docs/hadoop-metadata)

## Supporting Pages

### Google Cloud Ready - BigQuery Partners \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- Source ID: `site-docs-reference-5`
- Final score: 113
- Re-rank relevance: N/A

Evidence snippets:
- Partner references Data Intelligence Platform Cloud migration with Collibra & BigQuery Enterprise-wide data privacy: Collibra + BigQuery Enterprise-scale data quality: Collibra + BigQuery Data quality without the complexity: BigQuery & Collibra Partner Advantage page Direct link Datahub Solution DataHub Cloud Category Data Governance, Security, & MDM Description Datahub is an open source metadata platform that helps organizations discover, understand, and govern their data assets.
- Partner references Incorta unified data & analytics platform Incorta Google BigQuery Connector Partner Advantage page Direct link Informatica Solution Informatica IICS Category ETL & Data Integration Description Informatica Intelligent Cloud Services (IICS) is a cloud-based data integration platform that provides a variety of features such as business data integration, application integration, and API management between cloud and local applications.
- Partner references Configuring BigQuery Data Transformation in BigQuery Partner Advantage page Direct link Databricks Solution Databricks Lakehouse Category BI, ML, & Advanced Analytics Description Databricks SQL provides an easy-to-use platform for analysts who want to run SQL queries on their data lake, create multiple visualization types to explore query results from different perspectives, and build and share dashboards.
- Partner references Integrate with BigQuery Accessing Google BigQuery dataset using Xplenty Partner Advantage page Direct link Keboola Solution Keboola Platform Category ETL & Data Integration Description Keboola's Data Stack as a Service provides the first complete solution for gathering, combining and enhancing data for analytics and is deployed by, and partners with, some of the world's leading brands.

### Introduction to BigQuery Migration Service \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/migration-intro](https://docs.cloud.google.com/bigquery/docs/migration-intro)
- Source ID: `site-docs-root`
- Final score: 103
- Re-rank relevance: N/A

Evidence snippets:
- The BigQuery Migration Service includes the following features: BigQuery migration assessment : Assess and plan your data warehouse migration by running a BigQuery migration assessment .
- Introduction to BigQuery Migration Service This document provides an overview of the BigQuery Migration Service.
- For more information on BigQuery migration assessment, see BigQuery migration assessment .
- You can also use the following open-source tools to help you with your migration process: Data migration tool : Use the data migration tool to automate your data warehouse migration to BigQuery.

### "Extracting metadata from Apache Hive for migration \_|\_ BigQuery \_|\_\

- URL: [https://docs.cloud.google.com/bigquery/docs/hadoop-metadata](https://docs.cloud.google.com/bigquery/docs/hadoop-metadata)
- Source ID: `site-api-reference`
- Final score: 81
- Re-rank relevance: N/A

Evidence snippets:
- Cloudera Run the following command to extract metadata from Cloudera using the dwh-migration-dumper tool. dwh-migration-dumper \ --connector cloudera-manager \ --url CLOUDERA-URL \ --user CLOUDERA-USER \ --password CLOUDERA-PASSWORD \ --output gs:// MIGRATION-BUCKET /cloudera-dumper-output.zip \ --yarn-application-types APPLICATION-TYPES \ --pagination-page-size PAGE-SIZE \ --assessment \ Replace the following: CLOUDERA-URL : the URL for Cloudera Manager CLOUDERA-USER : the username of the Cloudera user CLOUDERA-PASSWORD : the password of the Cloudera user MIGRATION-BUCKET : the Cloud Storage bucket that you are using to store the migration files.
- Apache Ranger Run the following command to extract metadata from Apache Ranger using the dwh-migration-dumper tool. dwh-migration-dumper \ --connector ranger \ --host RANGER-HOST \ --port 6080 \ --user RANGER-USER \ --password RANGER-PASSWORD \ --ranger-scheme RANGER-SCHEME \ --output gs:// MIGRATION-BUCKET /ranger-dumper-output.zip \ --assessment \ Replace the following: RANGER-HOST : the hostname of the Apache Ranger instance RANGER-USER : the username of the Apache Ranger user RANGER-PASSWORD : the password of the Apache Ranger user RANGER-SCHEME : specify if Apache Ranger is using http or https .
- HDFS Run the following command to extract metadata from HDFS using the dwh-migration-dumper tool. dwh-migration-dumper \ --connector hdfs \ --host HDFS-HOST \ --port HDFS-PORT \ --output gs:// MIGRATION-BUCKET /hdfs-dumper-output.zip \ --assessment \ Replace the following: HDFS-HOST : the HDFS NameNode hostname HDFS-PORT : the HDFS NameNode port number.
- Apache Hive query logs Perform the steps in the Apache Hive section Extract query logs with the hadoop-migration-assessment logging hook to extract your Apache Hive query logs.

