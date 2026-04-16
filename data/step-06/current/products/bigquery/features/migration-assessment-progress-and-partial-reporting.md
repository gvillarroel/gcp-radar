---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.442Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Migration assessment progress and partial reporting"
feature_slug: "migration-assessment-progress-and-partial-reporting"
latest_feature_date: "2024-07-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/migration-intro"
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners"
  - "https://docs.cloud.google.com/bigquery/docs/hadoop-metadata"
keywords:
  - "migration"
  - "assessment"
  - "progress"
  - "partial"
  - "reporting"
  - "bigquery"
  - "assessments"
  - "can"
---

# Migration assessment progress and partial reporting

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery migration assessments can display partial report data, progress, and estimated completion time while running.

## Extended Definition

BigQuery migration assessments can display partial report data, progress, and estimated completion time while running.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/migration-intro](https://docs.cloud.google.com/bigquery/docs/migration-intro)
- [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- [https://docs.cloud.google.com/bigquery/docs/hadoop-metadata](https://docs.cloud.google.com/bigquery/docs/hadoop-metadata)

## Supporting Pages

### Introduction to BigQuery Migration Service \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/migration-intro](https://docs.cloud.google.com/bigquery/docs/migration-intro)
- Source ID: `site-docs-root`
- Final score: 85
- Re-rank relevance: N/A

Evidence snippets:
- The BigQuery Migration Service includes the following features: BigQuery migration assessment : Assess and plan your data warehouse migration by running a BigQuery migration assessment .
- For more information on BigQuery migration assessment, see BigQuery migration assessment .
- You can also use the following open-source tools to help you with your migration process: Data migration tool : Use the data migration tool to automate your data warehouse migration to BigQuery.
- Additionally, you can use the cost estimation functionality in Google Cloud Migration Center to generate a cost estimate of running your data warehouse setup that you migrate to BigQuery.

### Google Cloud Ready - BigQuery Partners \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- Source ID: `site-docs-reference-5`
- Final score: 78
- Re-rank relevance: N/A

Evidence snippets:
- Partner references Data Intelligence Platform Cloud migration with Collibra & BigQuery Enterprise-wide data privacy: Collibra + BigQuery Enterprise-scale data quality: Collibra + BigQuery Data quality without the complexity: BigQuery & Collibra Partner Advantage page Direct link Datahub Solution DataHub Cloud Category Data Governance, Security, & MDM Description Datahub is an open source metadata platform that helps organizations discover, understand, and govern their data assets.
- Partner references SqlDBM + BigQuery Google BigQuery - Direct Connect and Reverse Engineer Partner Advantage page Direct link Stelo Data Solution Stelo Data Replication Category ETL & Data Integration Description Stelo is an enterprise-class Change Data Capture (CDC) tool that delivers data dynamically from anywhere to anywhere for BI analysis, reporting, and managing business operations and supply chains.
- Partner references Tamr Master Data Management BigQuery Import Getting The Most From Your Migration Partner Advantage page Direct link Vaultree Solution Vaultree Category Data Governance, Security, & MDM Description Vaultree offers a data-in-use encryption solution that solves the industry's fundamental security issue: persistent data encryption, even in the event of a leak.
- Partner references Power interactive insights with data from BigQuery BigQuery data connection Partner Advantage page Direct link Improvado Solution Improvado Platform Category BI, ML, & Advanced Analytics Description Improvado is a marketing and sales intelligence platform that automates data integration, reporting, insights, and empowers your team with advanced AI Agents.

### "Extracting metadata from Apache Hive for migration \_|\_ BigQuery \_|\_\

- URL: [https://docs.cloud.google.com/bigquery/docs/hadoop-metadata](https://docs.cloud.google.com/bigquery/docs/hadoop-metadata)
- Source ID: `site-api-reference`
- Final score: 71
- Re-rank relevance: N/A

Evidence snippets:
- Cloudera Run the following command to extract metadata from Cloudera using the dwh-migration-dumper tool. dwh-migration-dumper \ --connector cloudera-manager \ --url CLOUDERA-URL \ --user CLOUDERA-USER \ --password CLOUDERA-PASSWORD \ --output gs:// MIGRATION-BUCKET /cloudera-dumper-output.zip \ --yarn-application-types APPLICATION-TYPES \ --pagination-page-size PAGE-SIZE \ --assessment \ Replace the following: CLOUDERA-URL : the URL for Cloudera Manager CLOUDERA-USER : the username of the Cloudera user CLOUDERA-PASSWORD : the password of the Cloudera user MIGRATION-BUCKET : the Cloud Storage bucket that you are using to store the migration files.
- Apache Ranger Run the following command to extract metadata from Apache Ranger using the dwh-migration-dumper tool. dwh-migration-dumper \ --connector ranger \ --host RANGER-HOST \ --port 6080 \ --user RANGER-USER \ --password RANGER-PASSWORD \ --ranger-scheme RANGER-SCHEME \ --output gs:// MIGRATION-BUCKET /ranger-dumper-output.zip \ --assessment \ Replace the following: RANGER-HOST : the hostname of the Apache Ranger instance RANGER-USER : the username of the Apache Ranger user RANGER-PASSWORD : the password of the Apache Ranger user RANGER-SCHEME : specify if Apache Ranger is using http or https .
- HDFS Run the following command to extract metadata from HDFS using the dwh-migration-dumper tool. dwh-migration-dumper \ --connector hdfs \ --host HDFS-HOST \ --port HDFS-PORT \ --output gs:// MIGRATION-BUCKET /hdfs-dumper-output.zip \ --assessment \ Replace the following: HDFS-HOST : the HDFS NameNode hostname HDFS-PORT : the HDFS NameNode port number.
- Apache Hive query logs Perform the steps in the Apache Hive section Extract query logs with the hadoop-migration-assessment logging hook to extract your Apache Hive query logs.

