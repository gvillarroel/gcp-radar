---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T13:51:57.739Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "Accelerated PITR-enabled instance creation"
feature_slug: "accelerated-pitr-enabled-instance-creation"
latest_feature_date: "2026-02-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/create-instance"
  - "https://docs.cloud.google.com/sql/docs/postgres/clone-instance"
  - "https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/configure-pitr"
keywords:
  - "accelerated"
  - "initial"
  - "instant"
  - "uses"
  - "pitr"
  - "creation"
  - "enabled"
  - "instance"
---

# Accelerated PITR-enabled instance creation

Product: Cloud SQL for PostgreSQL
Coverage: MEDIUM

## Step 02 Summary

Accelerated PITR-enabled instance creation uses an initial instant snapshot to reduce creation time for instances with point-in-time recovery enabled.

## Extended Definition

Accelerated PITR-enabled instance creation uses an initial instant snapshot to reduce creation time for instances with point-in-time recovery enabled.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/create-instance](https://docs.cloud.google.com/sql/docs/postgres/create-instance)
- [https://docs.cloud.google.com/sql/docs/postgres/clone-instance](https://docs.cloud.google.com/sql/docs/postgres/clone-instance)
- [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/configure-pitr](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/configure-pitr)

## Supporting Pages

### Create instances \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/create-instance](https://docs.cloud.google.com/sql/docs/postgres/create-instance)
- Source ID: `site-docs-root`
- Final score: 214
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note: To speed up instance creation when PITR is enabled, Cloud SQL uses an initial instant snapshot for PITR instead of a standard backup .
- Note: To speed up instance creation when PITR is enabled, Cloud SQL uses an initial instant snapshot for PITR instead of a standard backup .
- PITR is enabled by default during instance creation in the following conditions: In Cloud SQL Enterprise Plus edition : PITR is enabled by default, regardless of how you create the instance.
- PITR is enabled by default during instance creation in the following conditions: In Cloud SQL Enterprise Plus edition : PITR is enabled by default, regardless of how you create the instance.

### Clone instances \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/clone-instance](https://docs.cloud.google.com/sql/docs/postgres/clone-instance)
- Source ID: `site-iam-reference`
- Final score: 190
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Fast clone Fast clone uses an Instant Snapshot to create a new instance, which is a significant evolution from standard clone.
- Terraform To clone the instance, use a Terraform resource resource "google sql database instance" "clone" { name = "postgres-instance-clone-name" region = "us-central1" database version = "POSTGRES 12" clone { source instance name = google sql database instance.source.id } set deletion protection to true, will ensure that one cannot accidentally delete this instance by use of Terraform whereas deletion protection enabled flag protects this instance at the GCP level. deletion protection = false } Apply the changes To apply your Terraform configuration in a Google Cloud project, complete the steps in the following sections.
- You are returned to the instance listing page while the clone initializes. gcloud To clone an instance, use the gcloud sql instances clone command: gcloud sql instances clone SOURCE INSTANCE NAME DESTINATION INSTANCE NAME \ --project PROJECT ID \ --preferred-zone ZONE NAME \ --preferred-secondary-zone SECONDARY ZONE NAME Make the following replacements: SOURCE INSTANCE NAME : the name of the Cloud SQL instance to clone.
- When fast clone is used Cloud SQL automatically uses fast clone when the following conditions are met: Same-zone operations: the clone operation must be initiated within the same zone as the source instance.

### "Configure point-in-time recovery (PITR) \_|\_ Cloud SQL for PostgreSQL \_\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/configure-pitr](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/configure-pitr)
- Source ID: `site-iam-reference`
- Final score: 178
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- MySQL PostgreSQL SQL Server Note: To speed up instance creation when PITR is enabled, Cloud SQL uses an initial instant snapshot for PITR instead of a standard backup .
- Terraform To enable PITR, use a Terraform resource . resource "google sql database instance" "postgres instance pitr" { name = "" region = "us-central1" database version = "POSTGRES 14" settings { tier = "db-custom-2-7680" backup configuration { enabled = true point in time recovery enabled = true start time = "20:55" transaction log retention days = "3" } } set deletion protection to true, will ensure that one cannot accidentally delete this instance by use of Terraform whereas deletion protection enabled flag protects this instance at the GCP level. deletion protection = false } Apply the changes To apply your Terraform configuration in a Google Cloud project, complete the steps in the following sections.
- Enable PITR: gcloud sql instances patch INSTANCE NAME \ --enable-point-in-time-recovery If you're enabling PITR on a primary instance, you can also configure the number of days for which you want to retain transaction logs by adding the following parameter: --retained-transaction-log-days = RETAINED TRANSACTION LOG DAYS Confirm your change: gcloud sql instances describe INSTANCE NAME In the backupConfiguration section, you see pointInTimeRecoveryEnabled: true if the change was successful.
- After the overall process of switching to Cloud Storage is complete, Cloud SQL uses transaction logs from Cloud Storage for PITR. gcloud To switch the storage location to Cloud Storage, use the following command: gcloud sql instances patch INSTANCE NAME \ --switch-transaction-logs-to-cloud-storage Replace INSTANCE NAME with the name of the instance.

