---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:24:12.890Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Underprovisioned instance recommender"
feature_slug: "underprovisioned-instance-recommender"
latest_feature_date: "2023-02-02"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/release-notes"
  - "https://docs.cloud.google.com/sql/docs/mysql/release-notes"
  - "https://docs.cloud.google.com/sql/docs/mysql/create-instance"
keywords:
  - "underprovisioned"
  - "instance"
  - "recommender"
  - "the"
  - "preview"
  - "provides"
  - "resize"
  - "recommendations"
---

# Underprovisioned instance recommender

Product: Cloud SQL for MySQL
Coverage: LOW

## Step 02 Summary

The Underprovisioned instance recommender preview provides resize recommendations to reduce CPU, memory, and out-of-memory bottlenecks.

## Extended Definition

The Underprovisioned instance recommender preview provides resize recommendations to reduce CPU, memory, and out-of-memory bottlenecks.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- [https://docs.cloud.google.com/sql/docs/mysql/release-notes](https://docs.cloud.google.com/sql/docs/mysql/release-notes)
- [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance)

## Supporting Pages

### Cloud SQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- September 28, 2021 Cloud SQL for MySQL Feature Cloud SQL supports the preview version of two recommenders that help you optimize your database costs: Idle database instance recommender : Identifies idle database instances in your project and provides recommendations about the savings that you can make by shutting them down.
- Cloud SQL for PostgreSQL Feature Cloud SQL supports the preview version of two recommenders that help you optimize your database costs: Idle database instance recommender : Identifies idle database instances in your project and provides recommendations about the savings that you can make by shutting them down.
- Cloud SQL for SQL Server Feature Cloud SQL supports the preview version of two recommenders that help you optimize your database costs: Idle database instance recommender : Identifies idle database instances in your project and provides recommendations about the savings that you can make by shutting them down.
- April 28, 2022 Cloud SQL for MySQL Feature The following Cloud SQL recommenders that help you optimize your database costs are now generally available: Idle database instance recommender : Identifies idle database instances in your project and provides recommendations about the savings that you can make by shutting them down.

### Cloud SQL for MySQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/release-notes](https://docs.cloud.google.com/sql/docs/mysql/release-notes)
- Source ID: `site-docs-root`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- September 28, 2021 Feature Cloud SQL supports the preview version of two recommenders that help you optimize your database costs: Idle database instance recommender : Identifies idle database instances in your project and provides recommendations about the savings that you can make by shutting them down.
- April 28, 2022 Feature The following Cloud SQL recommenders that help you optimize your database costs are now generally available: Idle database instance recommender : Identifies idle database instances in your project and provides recommendations about the savings that you can make by shutting them down.
- Overprovisioned database instance recommender : Identifies overprovisioned database instances in your project and provides recommendations about the savings that you can make by rightsizing these instances.
- Overprovisioned database instance recommender : Identifies overprovisioned database instances in your project and provides recommendations about the savings that you can make by rightsizing these instances.

### Create instances \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance)
- Source ID: `site-docs-root`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id " Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#instance", "state": "RUNNABLE", "databaseVersion": "MYSQL 8 0 18", "settings": { "authorizedGaeApplications": [], "tier": "db-f1-micro", "kind": "sql#settings", "pricingPlan": "PER USE", "replicationType": "SYNCHRONOUS", "activationPolicy": "ALWAYS", "ipConfiguration": { "authorizedNetworks": [], "ipv4Enabled": true }, "locationPreference": { "zone": "us-west1-a", "kind": "sql#locationPreference" }, "dataDiskType": "PD SSD", "backupConfiguration": { "startTime": "18:00", "kind": "sql#backupConfiguration", "enabled": true, "binaryLogEnabled": true }, "settingsVersion": "1", "storageAutoResizeLimit": "0", "storageAutoResize": true, "dataDiskSizeGb": "10" }, "etag": "--redacted--", "ipAddresses": [ { "type": "PRIMARY", "ipAddress": " 10.0.0.1 " } ], "serverCaCert": { ... }, "instanceType": "CLOUD SQL INSTANCE", "project": " project-id ", "serviceAccountEmailAddress": "redacted@gcp-sa-cloud-sql.iam.gserviceaccount.com", "backendType": "SECOND GEN", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id ", "connectionName": " project-id:region:instance-id ", "name": " instance-id ", "region": "us-west1", "gceZone": "us-west1-a" } Look for the ipAddress field in the response.
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id " Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#instance", "state": "RUNNABLE", "databaseVersion": "MYSQL 8 0 18", "settings": { "authorizedGaeApplications": [], "tier": "db-f1-micro", "kind": "sql#settings", "pricingPlan": "PER USE", "replicationType": "SYNCHRONOUS", "activationPolicy": "ALWAYS", "ipConfiguration": { "authorizedNetworks": [], "ipv4Enabled": true }, "locationPreference": { "zone": "us-west1-a", "kind": "sql#locationPreference" }, "dataDiskType": "PD SSD", "backupConfiguration": { "startTime": "18:00", "kind": "sql#backupConfiguration", "enabled": true, "binaryLogEnabled": true }, "settingsVersion": "1", "storageAutoResizeLimit": "0", "storageAutoResize": true, "dataDiskSizeGb": "10" }, "etag": "--redacted--", "ipAddresses": [ { "type": "PRIMARY", "ipAddress": " 10.0.0.1 " } ], "serverCaCert": { ... }, "instanceType": "CLOUD SQL INSTANCE", "project": " project-id ", "serviceAccountEmailAddress": "redacted@gcp-sa-cloud-sql.iam.gserviceaccount.com", "backendType": "SECOND GEN", "selfLink": "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id ", "connectionName": " project-id:region:instance-id ", "name": " instance-id ", "region": "us-west1", "gceZone": "us-west1-a" } Look for the ipAddress field in the response.
- A newly-created instance has four system databases: information schema : Provides access to database metadata, information about the MySQL server. mysql : The system schema.
- Automatic storage increase --storage-auto-increase Determines whether Cloud SQL automatically provides more storage for your instance when free space runs low.

