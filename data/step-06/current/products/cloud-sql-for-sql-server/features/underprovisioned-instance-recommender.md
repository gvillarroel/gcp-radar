---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:58:32.868Z"
product_name: "Cloud SQL for SQL Server"
product_slug: "cloud-sql-for-sql-server"
feature_name: "Underprovisioned instance recommender"
feature_slug: "underprovisioned-instance-recommender"
latest_feature_date: "2023-02-02"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/release-notes"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/release-notes"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/create-instance"
keywords:
  - "underprovisioned"
  - "instance"
  - "recommender"
  - "the"
  - "identifies"
  - "cpu"
  - "and"
  - "memory"
---

# Underprovisioned instance recommender

Product: Cloud SQL for SQL Server
Coverage: LOW

## Step 02 Summary

The Underprovisioned instance recommender identifies CPU and memory bottlenecks and recommends resizing instances to better fit workloads.

## Extended Definition

The Underprovisioned instance recommender identifies CPU and memory bottlenecks and recommends resizing instances to better fit workloads.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- [https://docs.cloud.google.com/sql/docs/sqlserver/release-notes](https://docs.cloud.google.com/sql/docs/sqlserver/release-notes)
- [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance)

## Supporting Pages

### Cloud SQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- April 28, 2022 Cloud SQL for MySQL Feature The following Cloud SQL recommenders that help you optimize your database costs are now generally available: Idle database instance recommender : Identifies idle database instances in your project and provides recommendations about the savings that you can make by shutting them down.
- September 28, 2021 Cloud SQL for MySQL Feature Cloud SQL supports the preview version of two recommenders that help you optimize your database costs: Idle database instance recommender : Identifies idle database instances in your project and provides recommendations about the savings that you can make by shutting them down.
- Cloud SQL for PostgreSQL Feature The following Cloud SQL recommenders that help you optimize your database costs are now generally available: Idle database instance recommender : Identifies idle database instances in your project and provides recommendations about the savings that you can make by shutting them down.
- Cloud SQL for SQL Server Feature The following Cloud SQL recommenders that help you optimize your database costs are now generally available: Idle database instance recommender : Identifies idle database instances in your project and provides recommendations about the savings that you can make by shutting them down.

### Cloud SQL for SQL Server release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/release-notes](https://docs.cloud.google.com/sql/docs/sqlserver/release-notes)
- Source ID: `site-docs-root`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- April 28, 2022 Feature The following Cloud SQL recommenders that help you optimize your database costs are now generally available: Idle database instance recommender : Identifies idle database instances in your project and provides recommendations about the savings that you can make by shutting them down.
- September 28, 2021 Feature Cloud SQL supports the preview version of two recommenders that help you optimize your database costs: Idle database instance recommender : Identifies idle database instances in your project and provides recommendations about the savings that you can make by shutting them down.
- Overprovisioned database instance recommender : Identifies overprovisioned database instances in your project and provides recommendations about the savings that you can make by rightsizing these instances.
- Overprovisioned database instance recommender : Identifies overprovisioned database instances in your project and provides recommendations about the savings that you can make by rightsizing these instances.

### Create instances \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance)
- Source ID: `site-docs-root`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- Use the gcloud sql instances create command to create the instance: For Cloud SQL Enterprise Plus edition instances: gcloud sql instances create INSTANCE NAME \ --database-version = DATABASE VERSION \ --region = REGION \ --tier = TIER \ --root-password = ROOT PASSWORD \ --edition = ENTERPRISE PLUS For Cloud SQL Enterprise edition instances: gcloud sql instances create INSTANCE NAME \ --database-version = DATABASE VERSION \ --region = REGION \ --cpu = NUMBER OF vCPUs \ --memory = MEMORY SIZE \ --root-password = ROOT PASSWORD \ --edition = ENTERPRISE Don't include sensitive or personally identifiable information in your instance name.
- Memory-optimized machine family provides the following machine types to choose from: Machine type vCPUs Memory (GB) db-memory-optimized-N-4 4 128 db-memory-optimized-N-8 8 256 db-memory-optimized-N-16 16 512 Tip: If you plan on using private networking, then you can deploy both the private networking setup of your choice and the Cloud SQL instance by using Terraform.
- For example, the following string creates an instance with two vCPUs and 7,680 MB of memory: gcloud sql instances create myinstance \ --database-version = SQLSERVER 2017 STANDARD \ --region = us-central1 \ --cpu = 2 \ --memory = 7680MB \ --root-password = EXAMPLE PASSWORD \ --edition = ENTERPRISE For some sample values, see Sample machine types .
- When selecting the number of CPUs and amount of memory, there are some restrictions on the configuration that you choose: The number of vCPUs that you can configure for your instance is based on your SQL server version.

