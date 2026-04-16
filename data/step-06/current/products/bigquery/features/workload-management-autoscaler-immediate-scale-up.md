---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.435Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Workload management autoscaler immediate scale-up"
feature_slug: "workload-management-autoscaler-immediate-scale-up"
latest_feature_date: "2024-07-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/controlling-costs"
  - "https://docs.cloud.google.com/bigquery/docs/best-practices-for-multi-tenant-workloads-on-bigquery"
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners"
keywords:
  - "workload"
  - "management"
  - "autoscaler"
  - "immediate"
  - "scale"
  - "up"
  - "bigquery"
  - "autoscaling"
---

# Workload management autoscaler immediate scale-up

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery workload management autoscaling now scales up immediately.

## Extended Definition

BigQuery workload management autoscaling now scales up immediately.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/controlling-costs](https://docs.cloud.google.com/bigquery/docs/controlling-costs)
- [https://docs.cloud.google.com/bigquery/docs/best-practices-for-multi-tenant-workloads-on-bigquery](https://docs.cloud.google.com/bigquery/docs/best-practices-for-multi-tenant-workloads-on-bigquery)
- [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)

## Supporting Pages

### Estimate and control costs \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/controlling-costs](https://docs.cloud.google.com/bigquery/docs/controlling-costs)
- Source ID: `site-docs-root`
- Final score: 115
- Re-rank relevance: N/A

Evidence snippets:
- BigQuery automatically scales up to the number of slots needed for your workload, never exceeding the maximum that you set.
- Autoscaler has a 1 minute minimum period before scaling down, which translates into at least 1 minute being charged even if the query used the slots for less time, for example, for only 10 seconds out of the minute.
- Slot-hours billed larger than INFORMATION SCHEMA.JOBS view calculated slot-hours When using an autoscaling reservation, billing is calculated according to the number of scaled slots, not the number of slots used.
- BigQuery autoscales in multiples of 50 slots, which leads to billing for the nearest multiple even if less than the autoscaled amount is actually used.

### Google Cloud Ready - BigQuery Partners \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- Source ID: `site-docs-reference-5`
- Final score: 98
- Re-rank relevance: N/A

Evidence snippets:
- Partner references BigQuery agent BigQuery Agent Example Partner Advantage page Direct link Vanna.ai Solution Vanna.ai Category BI, ML, & Advanced Analytics Description Vanni.ai is the Leading open source Python package to query large SQL databases in natural language at production scale with access control that's auditable, accurate, fast, and locally deployable so that code is transparent, results are useful and immediate, and data never leaves your premise.
- Partner references Data Intelligence Platform Cloud migration with Collibra & BigQuery Enterprise-wide data privacy: Collibra + BigQuery Enterprise-scale data quality: Collibra + BigQuery Data quality without the complexity: BigQuery & Collibra Partner Advantage page Direct link Datahub Solution DataHub Cloud Category Data Governance, Security, & MDM Description Datahub is an open source metadata platform that helps organizations discover, understand, and govern their data assets.
- Partner references Connect Google BigQuery to Privacera Privacera Enhances Data Access Governance Add Google BigQuery (GBQ) data source on Privacera Platform Partner Advantage page Direct link Reltio Solution Reltio Connected Data Platform Category Data Governance, Security, & MDM Description The Reltio Connected Data Platform is a cloud-based data management platform that lets organizations create a unified, trusted real-time source for their core data.
- Partner references Incorta unified data & analytics platform Incorta Google BigQuery Connector Partner Advantage page Direct link Informatica Solution Informatica IICS Category ETL & Data Integration Description Informatica Intelligent Cloud Services (IICS) is a cloud-based data integration platform that provides a variety of features such as business data integration, application integration, and API management between cloud and local applications.

### "Best practices for multi-tenant workloads on BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/best-practices-for-multi-tenant-workloads-on-bigquery](https://docs.cloud.google.com/bigquery/docs/best-practices-for-multi-tenant-workloads-on-bigquery)
- Source ID: `site-docs-reference-5`
- Final score: 97
- Re-rank relevance: N/A

Evidence snippets:
- A dataset-per-tenant design helps to mitigate the following concerns that an organization experiences when it scales to thousands of tenants: Administrative complexity : the total number of new projects and cloud resources on a per customer basis End-to-end latency : how up to date the datastore is for both the tenants and cross-customer analytics solutions Performance expectations : ensuring that tenant performance stays within acceptable limits Configure datasets for each tenant Within a project that is dedicated to storing customer data, each customer's data is separated by BigQuery datasets.
- When you use decentralized authority, you maintain central control of security and BigQuery capacity by using Cloud Key Management Service (Cloud KMS) , column policies, VPC Service Controls, and reservations.
- Best practices for multi-tenant workloads on BigQuery This document provides techniques and best practices for common patterns that are used in multi-tenant data platforms and enterprise data marts.
- This document is for organizations that deploy multi-tenant platforms on BigQuery and who want to understand the available access controls and performance management features .

