---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.357Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery DataFrames 2.0"
feature_slug: "bigquery-dataframes-2-0"
latest_feature_date: "2025-04-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners"
  - "https://docs.cloud.google.com/bigquery/docs/best-practices-for-multi-tenant-workloads-on-bigquery"
keywords:
  - "bigquery"
  - "dataframes"
  - "introduces"
  - "features"
  - "along"
  - "security"
  - "performance"
  - "changes"
---

# BigQuery DataFrames 2.0

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery DataFrames 2.0 introduces new features along with security, performance, and API changes.

## Extended Definition

BigQuery DataFrames 2.0 introduces new features along with security, performance, and API changes.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- [https://docs.cloud.google.com/bigquery/docs/best-practices-for-multi-tenant-workloads-on-bigquery](https://docs.cloud.google.com/bigquery/docs/best-practices-for-multi-tenant-workloads-on-bigquery)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 104
- Re-rank relevance: N/A

Evidence snippets:
- Examples The following example removes the NOT NULL constraint from a column called mycolumn : ALTER TABLE mydataset . mytable ALTER COLUMN mycolumn DROP NOT NULL ALTER COLUMN SET DATA TYPE statement Changes the data type of a column in a table in BigQuery to a less restrictive data type.
- Note: To provide feedback or request support for this feature, send an email to bigquery-security@google.com .
- Note: To provide feedback or request support for this feature, send an email to bigquery-security@google.com .
- Note: To provide feedback or request support for this feature, send an email to bigquery-security@google.com .

### Google Cloud Ready - BigQuery Partners \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- Source ID: `site-docs-reference-5`
- Final score: 96
- Re-rank relevance: N/A

Evidence snippets:
- Partner references Data Intelligence Platform Cloud migration with Collibra & BigQuery Enterprise-wide data privacy: Collibra + BigQuery Enterprise-scale data quality: Collibra + BigQuery Data quality without the complexity: BigQuery & Collibra Partner Advantage page Direct link Datahub Solution DataHub Cloud Category Data Governance, Security, & MDM Description Datahub is an open source metadata platform that helps organizations discover, understand, and govern their data assets.
- Partner references Connect Google BigQuery to Privacera Privacera Enhances Data Access Governance Add Google BigQuery (GBQ) data source on Privacera Platform Partner Advantage page Direct link Reltio Solution Reltio Connected Data Platform Category Data Governance, Security, & MDM Description The Reltio Connected Data Platform is a cloud-based data management platform that lets organizations create a unified, trusted real-time source for their core data.
- Partner references Incorta unified data & analytics platform Incorta Google BigQuery Connector Partner Advantage page Direct link Informatica Solution Informatica IICS Category ETL & Data Integration Description Informatica Intelligent Cloud Services (IICS) is a cloud-based data integration platform that provides a variety of features such as business data integration, application integration, and API management between cloud and local applications.
- Partner references Prophecy BigQuery Integration Read and write to catalog tables in BigQuery Partner Advantage page Direct link Qlik Solution Qlik Replicate Category ETL & Data Integration Description Qlik Replicate (formerly Attunity Replicate) is a high-performance data-replication tool offering optimized data ingestion from a broad array of data sources and platforms and seamless integration with all major big data analytics platforms.

### "Best practices for multi-tenant workloads on BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/best-practices-for-multi-tenant-workloads-on-bigquery](https://docs.cloud.google.com/bigquery/docs/best-practices-for-multi-tenant-workloads-on-bigquery)
- Source ID: `site-docs-reference-5`
- Final score: 92
- Re-rank relevance: N/A

Evidence snippets:
- This document is for organizations that deploy multi-tenant platforms on BigQuery and who want to understand the available access controls and performance management features .
- A dataset-per-tenant design helps to mitigate the following concerns that an organization experiences when it scales to thousands of tenants: Administrative complexity : the total number of new projects and cloud resources on a per customer basis End-to-end latency : how up to date the datastore is for both the tenants and cross-customer analytics solutions Performance expectations : ensuring that tenant performance stays within acceptable limits Configure datasets for each tenant Within a project that is dedicated to storing customer data, each customer's data is separated by BigQuery datasets.
- A dedicated tenant infrastructure design addresses the following common concerns when deploying infrastructure for each tenant alongside BigQuery: Billing accountability : tracking infrastructure costs associated with each onboarded tenant.
- When you use decentralized authority, you maintain central control of security and BigQuery capacity by using Cloud Key Management Service (Cloud KMS) , column policies, VPC Service Controls, and reservations.

