---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:57:14.557Z"
product_name: "Cloud SQL for SQL Server"
product_slug: "cloud-sql-for-sql-server"
feature_name: "me-central2 region availability"
feature_slug: "me-central2-region-availability"
latest_feature_date: "2023-09-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/sqlserver/configure-ha"
  - "https://docs.cloud.google.com/sql/docs/availability"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/availability"
keywords:
  - "me"
  - "central2"
  - "region"
  - "availability"
  - "sql"
  - "server"
  - "instances"
  - "available"
---

# me-central2 region availability

Product: Cloud SQL for SQL Server
Coverage: MEDIUM

## Step 02 Summary

Cloud SQL for SQL Server instances are available in the me-central2 (Dammam) region.

## Extended Definition

Cloud SQL for SQL Server instances are available in the me-central2 (Dammam) region.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/sqlserver/configure-ha](https://docs.cloud.google.com/sql/docs/sqlserver/configure-ha)
- [https://docs.cloud.google.com/sql/docs/availability](https://docs.cloud.google.com/sql/docs/availability)
- [https://docs.cloud.google.com/sql/docs/sqlserver/availability](https://docs.cloud.google.com/sql/docs/sqlserver/availability)

## Supporting Pages

### "Enable and disable high availability \_|\_ Cloud SQL for SQL Server \_|\_\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/configure-ha](https://docs.cloud.google.com/sql/docs/sqlserver/configure-ha)
- Source ID: `site-docs-root`
- Final score: 129
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You are returned to the instance page for the primary instance while the instance is updated. gcloud Create the regional instance: gcloud sql instances create REGIONAL INSTANCE NAME \ --availability-type = REGIONAL \ --database-version = SQLSERVER 2017 STANDARD \ --cpu = NUMBER CPUS \ --memory = MEMORY SIZE Configure the root user: gcloud sql users set-password root no-host \ --instance = REGIONAL INSTANCE NAME \ --password = PASSWORD For a complete list of available parameters, see the gcloud sql instances create reference page.
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id " Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#instance", "state": "RUNNABLE", "databaseVersion": "SQLSERVER 2017 STANDARD", } The output indicates availabilityType is REGIONAL .
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id " Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#instance", "state": "RUNNABLE", "databaseVersion": "SQLSERVER 2019 STANDARD" } The output indicates availabilityType is REGIONAL .
- Confirm the following high availability settings are displayed in the Configuration section: Highly available (regional) Located in shows the current primary zone of the instance. gcloud gcloud sql instances describe INSTANCE NAME The output indicates availabilityType is REGIONAL .

### "Availability in Cloud SQL \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/availability](https://docs.cloud.google.com/sql/docs/sqlserver/availability)
- Source ID: `site-docs-reference-required-4`
- Final score: 123
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For instances configured with regional availability, if the instance encounters a failure, then Cloud SQL automatically brings up the instance in the secondary zone with the same IP address and no data loss so that applications can resume operations on the database.
- These downtimes are applicable to both standalone (zonal) and high availability (regional) instances.
- Maintenance , which includes the following operations with sub-second downtime: Automatic maintenance that Cloud SQL performs every quarter Self-service maintenance that you can initiate at any time Maintenance simulation that you can initiate to test the sub-second downtime behavior What's next Learn about high availability (HA) Enable or disable high availability (HA) Read about disaster recovery (DR) View all the Google Cloud services available in locations worldwide .
- Unplanned events and zonal outage For applications that require high availability, we recommend configuring the instance for regional availability, also referred to as the high availability (HA) configuration in Cloud SQL.

### Availability in Cloud SQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/availability](https://docs.cloud.google.com/sql/docs/availability)
- Source ID: `site-docs-root`
- Final score: 123
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For instances configured with regional availability, if the instance encounters a failure, then Cloud SQL automatically brings up the instance in the secondary zone with the same IP address and no data loss so that applications can resume operations on the database.
- These downtimes are applicable to both standalone (zonal) and high availability (regional) instances.
- Unplanned events and zonal outage For applications that require high availability, we recommend configuring the instance for regional availability, also referred to as the high availability (HA) configuration in Cloud SQL.
- What's next Learn about high availability (HA) Enable or disable high availability (HA) Read about disaster recovery (DR) View all the Google Cloud services available in locations worldwide .

