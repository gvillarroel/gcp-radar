---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:45:01.359Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "Enable-high-availability recommender"
feature_slug: "enable-high-availability-recommender"
latest_feature_date: "2023-09-26"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/release-notes"
  - "https://docs.cloud.google.com/sql/docs/postgres/release-notes"
  - "https://docs.cloud.google.com/sql/docs/postgres/configure-ha"
keywords:
  - "enable"
  - "high"
  - "availability"
  - "recommender"
  - "the"
  - "proactively"
  - "recommends"
  - "enabling"
---

# Enable-high-availability recommender

Product: Cloud SQL for PostgreSQL
Coverage: LOW

## Step 02 Summary

The enable-high-availability recommender proactively recommends enabling high availability to improve instance reliability and SLA alignment.

## Extended Definition

The enable-high-availability recommender proactively recommends enabling high availability to improve instance reliability and SLA alignment.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- [https://docs.cloud.google.com/sql/docs/postgres/release-notes](https://docs.cloud.google.com/sql/docs/postgres/release-notes)
- [https://docs.cloud.google.com/sql/docs/postgres/configure-ha](https://docs.cloud.google.com/sql/docs/postgres/configure-ha)

## Supporting Pages

### Cloud SQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- September 26, 2023 Cloud SQL for MySQL Feature Cloud SQL supports the preview version of the enable-high-availability recommender.
- Cloud SQL for PostgreSQL Feature Cloud SQL supports the preview version of the enable-high-availability recommender.
- Cloud SQL for SQL Server Feature Cloud SQL supports the preview version of the enable-high-availability recommender.
- To enable high availability on existing instances, or to create new instances with high availability, see Enabling and disabling high availability on an instance .

### Cloud SQL for PostgreSQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/release-notes](https://docs.cloud.google.com/sql/docs/postgres/release-notes)
- Source ID: `site-docs-root`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- September 26, 2023 Feature Cloud SQL supports the preview version of the enable-high-availability recommender.
- July 25, 2024 Change You can now upgrade the network architecture of a Cloud SQL instance that isn't enabled with high-availability .
- To check whether your Cloud SQL instance has high availability enabled, see Verify an instance's high availability configuration .
- October 11, 2022 Feature Cloud SQL supports the preview version of the high transaction ID utilization recommender that helps you avoid potential transaction ID wraparound for Cloud SQL for PostgreSQL instances.

### "Enable and disable high availability \_|\_ Cloud SQL for PostgreSQL \_|\_\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/configure-ha](https://docs.cloud.google.com/sql/docs/postgres/configure-ha)
- Source ID: `site-docs-root`
- Final score: 128
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Before using any of the request data, make the following replacements: PROJECT ID : the ID or project number of the Google Cloud project that contains the instance INSTANCE NAME : the name of the primary or read replica instance that you're configuring for high availability START TIME : the time (in hours and minutes) HTTP method and URL: PATCH https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE NAME Request JSON body: { "settings": { "backupConfiguration": { "startTime": " START TIME ", "enabled": true, "pointInTimeRecoveryEnabled": true } } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Configure the root user: gcloud sql users set-password root no-host \ --instance = REGIONAL INSTANCE NAME \ --password = PASSWORD Terraform To create an instance with high availability, use a Terraform resource . resource "google sql database instance" "postgres instance ha" { name = "postgres-instance-ha" region = "us-central1" database version = "POSTGRES 14" settings { tier = "db-custom-2-7680" availability type = "REGIONAL" backup configuration { enabled = true point in time recovery enabled = true start time = "20:55" } } set deletion protection to true, will ensure that one cannot accidentally delete this instance by use of Terraform whereas deletion protection enabled flag protects this instance at the GCP level. deletion protection = false } Apply the changes To apply your Terraform configuration in a Google Cloud project, complete the steps in the following sections.
- Before using any of the request data, make the following replacements: PROJECT ID : the ID or project number of the Google Cloud project that contains the instance INSTANCE NAME : the name of the primary or read replica instance that you're configuring for high availability START TIME : the time (in hours and minutes) HTTP method and URL: PATCH https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ INSTANCE NAME Request JSON body: { "settings": { "backupConfiguration": { "startTime": " START TIME ", "enabled": true, "pointInTimeRecoveryEnabled": true } } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- REST v1beta4 To configure an instance to be a regional, high availability instance: Check the instance to see if automatic backups and point-in-time recovery are enabled.

