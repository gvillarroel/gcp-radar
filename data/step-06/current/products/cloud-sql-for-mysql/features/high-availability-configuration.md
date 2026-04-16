---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:52.004Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "High availability configuration"
feature_slug: "high-availability-configuration"
latest_feature_date: "2016-08-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/high-availability"
  - "https://docs.cloud.google.com/sql/docs/mysql/configure-legacy-ha"
  - "https://docs.cloud.google.com/sql/docs/mysql/configure-ha"
keywords:
  - "high"
  - "availability"
  - "configuration"
  - "sql"
  - "mysql"
  - "second"
  - "generation"
  - "supports"
---

# High availability configuration

Product: Cloud SQL for MySQL
Coverage: MEDIUM

## Step 02 Summary

Cloud SQL for MySQL Second Generation supports an optional high availability configuration for production instances.

## Extended Definition

Cloud SQL for MySQL Second Generation supports an optional high availability configuration for production instances.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/high-availability](https://docs.cloud.google.com/sql/docs/mysql/high-availability)
- [https://docs.cloud.google.com/sql/docs/mysql/configure-legacy-ha](https://docs.cloud.google.com/sql/docs/mysql/configure-legacy-ha)
- [https://docs.cloud.google.com/sql/docs/mysql/configure-ha](https://docs.cloud.google.com/sql/docs/mysql/configure-ha)

## Supporting Pages

### About high availability \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/high-availability](https://docs.cloud.google.com/sql/docs/mysql/high-availability)
- Source ID: `site-docs-root`
- Final score: 208
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- MySQL PostgreSQL SQL Server This page is an overview of the high availability (HA) configuration for Cloud SQL instances.
- Starting on May 1, 2025, Cloud SQL will begin updating any instances that use the legacy high availability configuration to use the current regional persistent disk-based high availability configuration automatically.
- Home Documentation Databases Cloud SQL MySQL Guides Send feedback About high availability Stay organized with collections Save and categorize content based on your preferences.
- See Legacy configuration: Creating a new instance configured for high availability or Legacy configuration: Configuring an existing instance for high availability .

### "Legacy configuration for high availability \_|\_ Cloud SQL for MySQL \_\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/configure-legacy-ha](https://docs.cloud.google.com/sql/docs/mysql/configure-legacy-ha)
- Source ID: `site-docs-reference-3`
- Final score: 200
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Databases Cloud SQL MySQL Guides Send feedback Legacy configuration for high availability Stay organized with collections Save and categorize content based on your preferences.
- MySQL PostgreSQL SQL Server Important: As of January 13, 2025, the legacy configuration for high availability (HA) is deprecated for all instances.
- In a legacy HA configuration, a Cloud SQL for MySQL instance uses a failover replica to add high availability to the instance.
- This page describes the legacy configuration for a MySQL instance for high availability (HA).

### "Enable and disable high availability \_|\_ Cloud SQL for MySQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/configure-ha](https://docs.cloud.google.com/sql/docs/mysql/configure-ha)
- Source ID: `site-docs-reference-3`
- Final score: 188
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Configure the root user: gcloud sql users set-password root --host = % \ --instance = PRIMARY INSTANCE NAME \ --password = PASSWORD Terraform To create an instance with high availability, use a Terraform resource . resource "google sql database instance" "mysql instance ha" { name = "mysql-instance-ha" region = "asia-northeast1" database version = "MYSQL 8 0" settings { tier = "db-f1-micro" availability type = "REGIONAL" backup configuration { enabled = true binary log enabled = true start time = "20:55" } } set deletion protection to true, will ensure that one cannot accidentally delete this instance by use of Terraform whereas deletion protection enabled flag protects this instance at the GCP level. deletion protection = false } Apply the changes To apply your Terraform configuration in a Google Cloud project, complete the steps in the following sections.
- To see the current primary and secondary zones that the high availability instance is running in, see Verify an instance's high availability configuration .
- If you have an existing MySQL instance that uses the legacy high availability configuration, you can update your configuration to use the current version.
- Before using any of the request data, make the following replacements: PROJECT ID : the ID or project number of the Google Cloud project that contains the instance INSTANCE NAME : the name of the primary or read replica instance that you're configuring for high availability START TIME : the time (in hours and minutes) HTTP method and URL: PATCH https://sqladmin.googleapis.com/v1beta4/projects/ PROJECT ID /instances/ INSTANCE NAME Request JSON body: { "settings": { "backupConfiguration": { "startTime": " START TIME ", "enabled": true, "binaryLogEnabled": true } } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

