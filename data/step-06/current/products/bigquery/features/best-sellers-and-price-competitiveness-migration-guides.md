---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.380Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Best sellers and price competitiveness migration guides"
feature_slug: "best-sellers-and-price-competitiveness-migration-guides"
latest_feature_date: "2025-02-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners"
  - "https://docs.cloud.google.com/bigquery/docs/best-practices-for-multi-tenant-workloads-on-bigquery"
  - "https://docs.cloud.google.com/bigquery/docs/batch-sql-translator"
keywords:
  - "best"
  - "sellers"
  - "price"
  - "competitiveness"
  - "migration"
  - "guides"
  - "help"
  - "users"
---

# Best sellers and price competitiveness migration guides

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Migration guides help users transition best sellers and price competitiveness reports to newer versions.

## Extended Definition

Migration guides help users transition best sellers and price competitiveness reports to newer versions.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- [https://docs.cloud.google.com/bigquery/docs/best-practices-for-multi-tenant-workloads-on-bigquery](https://docs.cloud.google.com/bigquery/docs/best-practices-for-multi-tenant-workloads-on-bigquery)
- [https://docs.cloud.google.com/bigquery/docs/batch-sql-translator](https://docs.cloud.google.com/bigquery/docs/batch-sql-translator)

## Supporting Pages

### Google Cloud Ready - BigQuery Partners \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- Source ID: `site-docs-reference-5`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- Partner references Data Intelligence Platform Cloud migration with Collibra & BigQuery Enterprise-wide data privacy: Collibra + BigQuery Enterprise-scale data quality: Collibra + BigQuery Data quality without the complexity: BigQuery & Collibra Partner Advantage page Direct link Datahub Solution DataHub Cloud Category Data Governance, Security, & MDM Description Datahub is an open source metadata platform that helps organizations discover, understand, and govern their data assets.
- Partner references Use BigQuery directly in a notebook Getting started with BigQuery in Deepnote BigQuery with Google OAuth Partner Advantage page Direct link DinMo Solution DinMo Category BI, ML, & Advanced Analytics Description DinMo transforms all customer touch points into high-value audiences and helps users leverage them in all activation platforms without code or engineering in less than 5 minutes.
- Partner references Hightouch BigQuery Source Hightouch for BigQuery documentation Sync data from BigQuery to Segment Partner Advantage page Direct link Incorta Solution Incorta unified data & analytics platform Category ETL & Data Integration Description Incorta is a self-service data analytics platform that helps users gain a deeper understanding of their business and make quick, accurate decisions.
- Partner references Secoda + BigQuery integration Connect to BigQuery from Secoda BigQuery integration guides Partner Advantage page Direct link SecuPi Solution SecuPi Platform Category Data Governance, Security, & MDM Description SecuPi offers a Data Centric, Privacy, Governance and Security Platform and helps protect, monitor and manage access to sensitive data over on-premise and cloud platforms.

### "Best practices for multi-tenant workloads on BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/best-practices-for-multi-tenant-workloads-on-bigquery](https://docs.cloud.google.com/bigquery/docs/best-practices-for-multi-tenant-workloads-on-bigquery)
- Source ID: `site-docs-reference-5`
- Final score: 102
- Re-rank relevance: N/A

Evidence snippets:
- A dataset-per-tenant design helps to mitigate the following concerns that an organization experiences when it scales to thousands of tenants: Administrative complexity : the total number of new projects and cloud resources on a per customer basis End-to-end latency : how up to date the datastore is for both the tenants and cross-customer analytics solutions Performance expectations : ensuring that tenant performance stays within acceptable limits Configure datasets for each tenant Within a project that is dedicated to storing customer data, each customer's data is separated by BigQuery datasets.
- Sensitive Data Protection Sensitive Data Protection provides APIs and scanning utilities that help you identify and mitigate sensitive content that is stored inside BigQuery or Cloud Storage datasets.
- Best practices for multi-tenant workloads on BigQuery This document provides techniques and best practices for common patterns that are used in multi-tenant data platforms and enterprise data marts.
- Perimeter bridges In this configuration, we recommend that you create the following perimeter bridges: Core data and analytics : allow users in the analytics projects to query the authorized views.

### "Migrate code with the batch SQL translator \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/batch-sql-translator](https://docs.cloud.google.com/bigquery/docs/batch-sql-translator)
- Source ID: `site-docs-reference-5`
- Final score: 98
- Re-rank relevance: N/A

Evidence snippets:
- To address this, the BigQuery Migration Service (and the broader BigQuery community) provide helper user-defined functions (UDFs) that replicate the behavior of these unsupported source dialect functions.
- The following example shows a translation configuration YAML file for a Teradata to BigQuery translation: tasks: translation task: type: Teradata2BigQuery Translation translationDetails: sourceTargetMapping: - sourceSpec: baseUri: gs://bq-translations/input targetSpec: relativePath: output targetBaseUri: gs://bq-translations targetTypes: - sql sourceEnvironment: defaultDatabase: default db schemaSearchPath: - foo The following example shows a translation configuration JSON file for a Teradata to BigQuery translation: { "tasks" : { "translation task" : { "type" : "Teradata2BigQuery Translation" , "translationDetails" : { "sourceTargetMapping" : [ { "sourceSpec" : { "literal" : { "literalString" : "sel 1" , "relativePath" : "my input 1" } , "encoding" : "UTF-8" } } , { "sourceSpec" : { "literal" : { "literalString" : "sel 2" , "relativePath" : "my input 2" } , "encoding" : "UTF-8" } } ] , "targetReturnLiterals" : [ "sql/my input 1" , "sql/my input 2" ] } } } } Once the translation configuration is created, run the following command to run the translation job. bq mk --migration workflow --location = LOCATION --config file = CONFIG FILE NAME .json Replace the following: LOCATION : the location of the Google Cloud project that is running this translation job.
- Required permissions You must have the following permissions on the project to enable the BigQuery Migration Service: resourcemanager.projects.get serviceusage.services.enable serviceusage.services.get You need the following permissions on the project to access and use the BigQuery Migration Service: bigquerymigration.workflows.create bigquerymigration.workflows.get bigquerymigration.workflows.list bigquerymigration.workflows.delete bigquerymigration.subtasks.get bigquerymigration.subtasks.list Alternatively, you can use the following roles to get the same permissions: bigquerymigration.viewer - Read only access. bigquerymigration.editor - Read/write access.
- The batch SQL translator can translate the following SQL dialects into GoogleSQL: Amazon Redshift SQL Apache HiveQL and Beeline CLI IBM Netezza SQL and NZPLSQL Teradata and Teradata Vantage: SQL Basic Teradata Query (BTEQ) Teradata Parallel Transport (TPT) Additionally, translation of the following SQL dialects is supported in preview : Apache Impala SQL Apache Spark SQL Azure Synapse T-SQL GoogleSQL (BigQuery) Greenplum SQL IBM DB2 SQL MySQL SQL Oracle SQL, PL/SQL, Exadata PostgreSQL SQL Trino or PrestoSQL Snowflake SQL SQL Server T-SQL SQLite Vertica SQL Important: Translation is done on a best effort basis.

