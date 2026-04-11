---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:24:12.867Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Enable high availability recommender"
feature_slug: "enable-high-availability-recommender"
latest_feature_date: "2023-09-26"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/high-availability"
  - "https://docs.cloud.google.com/sql/docs/mysql/configure-ha"
  - "https://docs.cloud.google.com/sql/docs/mysql/release-notes"
keywords:
  - "enable"
  - "high"
  - "availability"
  - "recommender"
  - "sql"
  - "provides"
  - "that"
  - "suggests"
---

# Enable high availability recommender

Product: Cloud SQL for MySQL
Coverage: LOW

## Step 02 Summary

Cloud SQL provides a recommender that suggests enabling high availability to improve instance reliability and SLA coverage.

## Extended Definition

Cloud SQL provides a recommender that suggests enabling high availability to improve instance reliability and SLA coverage.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/high-availability](https://docs.cloud.google.com/sql/docs/mysql/high-availability)
- [https://docs.cloud.google.com/sql/docs/mysql/configure-ha](https://docs.cloud.google.com/sql/docs/mysql/configure-ha)
- [https://docs.cloud.google.com/sql/docs/mysql/release-notes](https://docs.cloud.google.com/sql/docs/mysql/release-notes)

## Supporting Pages

### About high availability \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/high-availability](https://docs.cloud.google.com/sql/docs/mysql/high-availability)
- Source ID: `site-docs-root`
- Final score: 210
- Re-rank relevance: N/A

Evidence snippets:
- Starting on May 1, 2025, Cloud SQL will begin updating any instances that use the legacy high availability configuration to use the current regional persistent disk-based high availability configuration automatically.
- Home Documentation Databases Cloud SQL MySQL Guides Send feedback About high availability Stay organized with collections Save and categorize content based on your preferences.
- You can't create instances with legacy high availability configuration, and you can't enable legacy high availability configuration on any existing instances.
- To configure a new instance for HA, or to enable HA on an existing instance, see Enabling and disabling high availability on an instance .

### "Enable and disable high availability \_|\_ Cloud SQL for MySQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/configure-ha](https://docs.cloud.google.com/sql/docs/mysql/configure-ha)
- Source ID: `site-docs-root`
- Final score: 200
- Re-rank relevance: N/A

Evidence snippets:
- Before using any of the request data, make the following replacements: PROJECT ID : the ID or project number of the Google Cloud project that contains the instance INSTANCE NAME : the name of the primary or read replica instance that you're configuring for high availability START TIME : the time (in hours and minutes) HTTP method and URL: PATCH https://sqladmin.googleapis.com/v1beta4/projects/ PROJECT ID /instances/ INSTANCE NAME Request JSON body: { "settings": { "backupConfiguration": { "startTime": " START TIME ", "enabled": true, "binaryLogEnabled": true } } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Before using any of the request data, make the following replacements: PROJECT ID : the ID or project number of the Google Cloud project that contains the instance INSTANCE NAME : the name of the primary or read replica instance that you're configuring for high availability START TIME : the time (in hours and minutes) HTTP method and URL: PATCH https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ INSTANCE NAME Request JSON body: { "settings": { "backupConfiguration": { "startTime": " START TIME ", "enabled": true, "binaryLogEnabled": true } } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Configure the root user: gcloud sql users set-password root --host = % \ --instance = PRIMARY INSTANCE NAME \ --password = PASSWORD Terraform To create an instance with high availability, use a Terraform resource . resource "google sql database instance" "mysql instance ha" { name = "mysql-instance-ha" region = "asia-northeast1" database version = "MYSQL 8 0" settings { tier = "db-f1-micro" availability type = "REGIONAL" backup configuration { enabled = true binary log enabled = true start time = "20:55" } } set deletion protection to true, will ensure that one cannot accidentally delete this instance by use of Terraform whereas deletion protection enabled flag protects this instance at the GCP level. deletion protection = false } Apply the changes To apply your Terraform configuration in a Google Cloud project, complete the steps in the following sections.
- Click Save . gcloud To configure an instance to be a regional, high availability instance, use the gcloud sql instances patch command: gcloud sql instances patch INSTANCE NAME \ --availability-type REGIONAL \ --enable-bin-log \ --backup-start-time = HH:MM Make the following replacements: INSTANCE NAME : the name of the Cloud SQL instance that you're configuring for high availability HH:MM : the time (in hours and minutes) REST v1 To configure an instance to be a regional, high availability instance: Check the instance to see if automatic backups and binary logs are enabled.

### Cloud SQL for MySQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/release-notes](https://docs.cloud.google.com/sql/docs/mysql/release-notes)
- Source ID: `site-docs-root`
- Final score: 194
- Re-rank relevance: N/A

Evidence snippets:
- July 25, 2024 Change You can now upgrade the network architecture of a Cloud SQL instance that isn't enabled with high-availability .
- September 26, 2023 Feature Cloud SQL supports the preview version of the enable-high-availability recommender.
- October 11, 2022 Feature Cloud SQL supports the preview version of the following recommenders that help you optimize your instance's performance: High number of open tables recommender : Optimize the performance of your instance by increasing the size of table open cache for the Cloud SQL instances that have the number of open tables equal to the table open cache and keep opening too many tables concurrently High number of tables recommender : Optimize the performance of your instance by reducing the number of tables for the Cloud SQL instances whose table count is too high and close to the SLA limit.
- April 28, 2022 Feature The following Cloud SQL recommenders that help you optimize your database costs are now generally available: Idle database instance recommender : Identifies idle database instances in your project and provides recommendations about the savings that you can make by shutting them down.

