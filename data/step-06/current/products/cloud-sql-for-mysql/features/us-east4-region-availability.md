---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:24:12.984Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "us-east4 region availability"
feature_slug: "us-east4-region-availability"
latest_feature_date: "2017-05-01"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/availability"
  - "https://docs.cloud.google.com/sql/docs/mysql/configure-ha"
  - "https://docs.cloud.google.com/sql/docs/mysql/high-availability"
keywords:
  - "us"
  - "east4"
  - "region"
  - "availability"
  - "sql"
  - "for"
  - "mysql"
  - "is"
---

# us-east4 region availability

Product: Cloud SQL for MySQL
Coverage: LOW

## Step 02 Summary

Cloud SQL for MySQL is available in the us-east4 region in Northern Virginia.

## Extended Definition

Cloud SQL for MySQL is available in the us-east4 region in Northern Virginia.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/availability](https://docs.cloud.google.com/sql/docs/mysql/availability)
- [https://docs.cloud.google.com/sql/docs/mysql/configure-ha](https://docs.cloud.google.com/sql/docs/mysql/configure-ha)
- [https://docs.cloud.google.com/sql/docs/mysql/high-availability](https://docs.cloud.google.com/sql/docs/mysql/high-availability)

## Supporting Pages

### Availability in Cloud SQL \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/availability](https://docs.cloud.google.com/sql/docs/mysql/availability)
- Source ID: `site-iam-reference`
- Final score: 262
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Cloud SQL high availability is available for both Cloud SQL Enterprise Plus edition and Cloud SQL Enterprise edition.
- Edition upgrade Perform an in-place upgrade to Cloud SQL Enterprise Plus edition Enable data cache You can enable or disable data cache as frequently as needed Instance scaling Scale-up: Increase the compute size (vCPU, memory) of your Cloud SQL instance as frequently as needed Scale-down: Reduce the compute size (vCPU, memory) of your Cloud SQL instance infrequently Note: If you scale down your instance more than once during a three-hour period, then only the first scale down event benefits from near-zero downtime.
- For instances configured with regional availability, if the instance encounters a failure, then Cloud SQL automatically brings up the instance in the secondary zone with the same IP address and no data loss so that applications can resume operations on the database.
- Planned operations with near-zero downtime For planned operations such as maintenance or some instance reconfigurations, Cloud SQL Enterprise Plus edition offers near-zero downtime for primary instances with no application changes or proxy requirements.

### "Enable and disable high availability \_|\_ Cloud SQL for MySQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/configure-ha](https://docs.cloud.google.com/sql/docs/mysql/configure-ha)
- Source ID: `site-docs-root`
- Final score: 260
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Configure the root user: gcloud sql users set-password root --host = % \ --instance = PRIMARY INSTANCE NAME \ --password = PASSWORD Terraform To create an instance with high availability, use a Terraform resource . resource "google sql database instance" "mysql instance ha" { name = "mysql-instance-ha" region = "asia-northeast1" database version = "MYSQL 8 0" settings { tier = "db-f1-micro" availability type = "REGIONAL" backup configuration { enabled = true binary log enabled = true start time = "20:55" } } set deletion protection to true, will ensure that one cannot accidentally delete this instance by use of Terraform whereas deletion protection enabled flag protects this instance at the GCP level. deletion protection = false } Apply the changes To apply your Terraform configuration in a Google Cloud project, complete the steps in the following sections.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PATCH -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/v1beta4/projects/ PROJECT ID /instances/ INSTANCE NAME " Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/v1beta4/projects/ PROJECT ID /instances/ INSTANCE NAME ", "status": "PENDING", "user": "user@example.com", "insertTime": "2020-01-21T22:43:37.981Z", "operationType": "UPDATE", "name": " OPERATION ID ", "targetId": " INSTANCE NAME ", "selfLink": "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /operations/ OPERATION ID ", "targetProject": " PROJECT ID " } Configure the instance to be a regional, high availability instance: Before using any of the request data, make the following replacements: PROJECT ID : the ID or project number of the Google Cloud project that contains the instance INSTANCE NAME : the name of the instance that you're configuring for high availability HTTP method and URL: PATCH https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE NAME Request JSON body: { "settings": {"availabilityType": "REGIONAL" } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PATCH -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ INSTANCE NAME " Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ INSTANCE NAME ", "status": "PENDING", "user": "user@example.com", "insertTime": "2020-01-21T22:43:37.981Z", "operationType": "UPDATE", "name": " OPERATION ID ", "targetId": " INSTANCE NAME ", "selfLink": "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /operations/ OPERATION ID ", "targetProject": " PROJECT ID " } Configure the instance to be a regional, high availability instance: Before using any of the request data, make the following replacements: PROJECT ID : the ID or project number of the Google Cloud project that contains the instance INSTANCE NAME : the name of the instance that you're configuring for high availability HTTP method and URL: PATCH https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ INSTANCE NAME Request JSON body: { "settings": {"availabilityType": "REGIONAL" } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Before using any of the request data, make the following replacements: project-id : The project ID instance-name : The instance name database-version : The database version enum string region The GCP region machine-type The machine type HTTP method and URL: POST https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances Request JSON body: { "name": " instance-name ", "region": " region ", "databaseVersion": " database-version ", "settings": { "tier": " machine-type ", "backupConfiguration": { "binaryLogEnabled": true, "enabled": true }, "availabilityType": "REGIONAL" } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

### About high availability \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/high-availability](https://docs.cloud.google.com/sql/docs/mysql/high-availability)
- Source ID: `site-docs-root`
- Final score: 260
- Re-rank relevance: N/A

Evidence snippets:
- Starting on May 1, 2025, Cloud SQL will begin updating any instances that use the legacy high availability configuration to use the current regional persistent disk-based high availability configuration automatically.
- Legacy MySQL high availability option The legacy process for adding high availability to MySQL instances uses a failover replica.
- MySQL PostgreSQL SQL Server This page is an overview of the high availability (HA) configuration for Cloud SQL instances.
- Regional persistent disk support for Cloud SQL HA configuration that has at least one dedicated CPU has full Service Level Agreement (SLA) coverage.

