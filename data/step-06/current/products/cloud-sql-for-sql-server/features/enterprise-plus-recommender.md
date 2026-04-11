---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:58:32.614Z"
product_name: "Cloud SQL for SQL Server"
product_slug: "cloud-sql-for-sql-server"
feature_name: "Enterprise Plus recommender"
feature_slug: "enterprise-plus-recommender"
latest_feature_date: "2025-04-07"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/sqlserver/release-notes"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/create-instance"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/configure-pitr"
keywords:
  - "enterprise"
  - "plus"
  - "recommender"
  - "the"
  - "identifies"
  - "sql"
  - "server"
  - "instances"
---

# Enterprise Plus recommender

Product: Cloud SQL for SQL Server
Coverage: LOW

## Step 02 Summary

The Enterprise Plus recommender identifies SQL Server instances that may gain performance improvements by upgrading to Enterprise Plus edition.

## Extended Definition

The Enterprise Plus recommender identifies SQL Server instances that may gain performance improvements by upgrading to Enterprise Plus edition.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/sqlserver/release-notes](https://docs.cloud.google.com/sql/docs/sqlserver/release-notes)
- [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance)
- [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/configure-pitr](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/configure-pitr)

## Supporting Pages

### Cloud SQL for SQL Server release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/release-notes](https://docs.cloud.google.com/sql/docs/sqlserver/release-notes)
- Source ID: `site-docs-root`
- Final score: 240
- Re-rank relevance: N/A

Evidence snippets:
- Based on your application workloads and resource utilization, the recommender helps you optimize performance by identifying SQL Server instances that might see performance improvements when upgraded to Cloud SQL Enterprise Plus edition.
- December 05, 2024 Feature Cloud SQL Enterprise Plus edition now supports the following regions: africa-south1 (Johannesburg) asia-east2 (Hong Kong) europe-west10 (Berlin) December 03, 2024 Feature You can now use the Network Connectivity Center hub to propagate Private Service Connect endpoints of Cloud SQL instances in a VPC network.
- April 28, 2022 Feature The following Cloud SQL recommenders that help you optimize your database costs are now generally available: Idle database instance recommender : Identifies idle database instances in your project and provides recommendations about the savings that you can make by shutting them down.
- September 28, 2021 Feature Cloud SQL supports the preview version of two recommenders that help you optimize your database costs: Idle database instance recommender : Identifies idle database instances in your project and provides recommendations about the savings that you can make by shutting them down.

### Create instances \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance)
- Source ID: `site-docs-root`
- Final score: 216
- Re-rank relevance: N/A

Evidence snippets:
- Data cache Enable data cache By default, the option to enable data cache is selected automatically for Cloud SQL for SQL Server Enterprise Plus edition instances.
- Use the gcloud sql instances create command to create the instance: For Cloud SQL Enterprise Plus edition instances: gcloud sql instances create INSTANCE NAME \ --database-version = DATABASE VERSION \ --region = REGION \ --tier = TIER \ --root-password = ROOT PASSWORD \ --edition = ENTERPRISE PLUS For Cloud SQL Enterprise edition instances: gcloud sql instances create INSTANCE NAME \ --database-version = DATABASE VERSION \ --region = REGION \ --cpu = NUMBER OF vCPUs \ --memory = MEMORY SIZE \ --root-password = ROOT PASSWORD \ --edition = ENTERPRISE Don't include sensitive or personally identifiable information in your instance name.
- For example, the following string creates an instance with two vCPUs and 7,680 MB of memory: gcloud sql instances create myinstance \ --database-version = SQLSERVER 2017 STANDARD \ --region = us-central1 \ --cpu = 2 \ --memory = 7680MB \ --root-password = EXAMPLE PASSWORD \ --edition = ENTERPRISE For some sample values, see Sample machine types .
- The memory size must be: 0.9 to 6.5 GB per vCPU A multiple of 256 MB At least 3.75 GB (3840 MB) Machine types for Cloud SQL Enterprise Plus edition instances For Cloud SQL Enterprise Plus edition instances, machine types are predefined as described in the following sections.

### "Configure point-in-time recovery (PITR) \_|\_ Cloud SQL for SQL Server \_\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/configure-pitr](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/configure-pitr)
- Source ID: `site-iam-reference`
- Final score: 200
- Re-rank relevance: N/A

Evidence snippets:
- Unless specified otherwise, PITR is enabled by default. resource "google sql database instance" "enterprise plus" { name = "sqlserver-enterprise-plus-instance-pitr" region = "asia-northeast1" database version = "SQLSERVER 2019 ENTERPRISE" root password = "INSERT-PASSWORD-HERE" settings { tier = "db-perf-optimized-N-2" edition = "ENTERPRISE PLUS" backup configuration { enabled = true } } Setting the deletion protection flag to true ensures you can't accidentally delete the instance using Terraform.
- Enable PITR for Cloud SQL Enterprise Plus edition Use the following Terraform code sample to create a Cloud SQL Enterprise Plus edition instance with PITR enabled: Creates a SQL SERVER Enterprise Plus edition instance.
- Unless specified otherwise, PITR is disabled by default. resource "google sql database instance" "enterprise" { name = "sqlserver-enterprise-instance-pitr" region = "asia-northeast1" database version = "SQLSERVER 2019 ENTERPRISE" root password = "INSERT-PASSWORD-HERE" settings { tier = "db-custom-4-26624" edition = "ENTERPRISE" backup configuration { enabled = true point in time recovery enabled = true } } Setting the deletion protection flag to true ensures you can't accidentally delete the instance using Terraform.
- Setting the deletion protection enabled flag to true protects the instance at the Google Cloud level. deletion protection = false } Enable PITR for Cloud SQL Enterprise edition Use the following Terraform code sample to create a Cloud SQL Enterprise edition instance with PITR enabled: Creates a SQL SERVER Enterprise edition instance with PITR enabled.

