---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:51.931Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Enable high availability recommender"
feature_slug: "enable-high-availability-recommender"
latest_feature_date: "2023-09-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/high-availability"
  - "https://docs.cloud.google.com/sql/docs/mysql/configure-ha"
  - "https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect"
keywords:
  - "enable"
  - "high"
  - "availability"
  - "recommender"
  - "sql"
  - "provides"
  - "suggests"
  - "enabling"
---

# Enable high availability recommender

Product: Cloud SQL for MySQL
Coverage: MEDIUM

## Step 02 Summary

Cloud SQL provides a recommender that suggests enabling high availability to improve instance reliability and SLA coverage.

## Extended Definition

Cloud SQL provides a recommender that suggests enabling high availability to improve instance reliability and SLA coverage.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/high-availability](https://docs.cloud.google.com/sql/docs/mysql/high-availability)
- [https://docs.cloud.google.com/sql/docs/mysql/configure-ha](https://docs.cloud.google.com/sql/docs/mysql/configure-ha)
- [https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect)

## Supporting Pages

### About high availability \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/high-availability](https://docs.cloud.google.com/sql/docs/mysql/high-availability)
- Source ID: `site-docs-root`
- Final score: 164
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To configure a new instance for HA, or to enable HA on an existing instance, see Enabling and disabling high availability on an instance .
- You can't create instances with legacy high availability configuration, and you can't enable legacy high availability configuration on any existing instances.
- Backup and restore Automated backups and point-in-time recovery must be enabled for high-availability instances, excluding read replicas.
- What's next Enable and disable high availability on an instance .

### "Enable and disable high availability \_|\_ Cloud SQL for MySQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/configure-ha](https://docs.cloud.google.com/sql/docs/mysql/configure-ha)
- Source ID: `site-docs-reference-3`
- Final score: 144
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Before using any of the request data, make the following replacements: PROJECT ID : the ID or project number of the Google Cloud project that contains the instance INSTANCE NAME : the name of the primary or read replica instance that you're configuring for high availability START TIME : the time (in hours and minutes) HTTP method and URL: PATCH https://sqladmin.googleapis.com/v1beta4/projects/ PROJECT ID /instances/ INSTANCE NAME Request JSON body: { "settings": { "backupConfiguration": { "startTime": " START TIME ", "enabled": true, "binaryLogEnabled": true } } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Before using any of the request data, make the following replacements: PROJECT ID : the ID or project number of the Google Cloud project that contains the instance INSTANCE NAME : the name of the primary or read replica instance that you're configuring for high availability START TIME : the time (in hours and minutes) HTTP method and URL: PATCH https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ INSTANCE NAME Request JSON body: { "settings": { "backupConfiguration": { "startTime": " START TIME ", "enabled": true, "binaryLogEnabled": true } } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Configure the root user: gcloud sql users set-password root --host = % \ --instance = PRIMARY INSTANCE NAME \ --password = PASSWORD Terraform To create an instance with high availability, use a Terraform resource . resource "google sql database instance" "mysql instance ha" { name = "mysql-instance-ha" region = "asia-northeast1" database version = "MYSQL 8 0" settings { tier = "db-f1-micro" availability type = "REGIONAL" backup configuration { enabled = true binary log enabled = true start time = "20:55" } } set deletion protection to true, will ensure that one cannot accidentally delete this instance by use of Terraform whereas deletion protection enabled flag protects this instance at the GCP level. deletion protection = false } Apply the changes To apply your Terraform configuration in a Google Cloud project, complete the steps in the following sections.
- Click Save . gcloud To configure an instance to be a regional, high availability instance, use the gcloud sql instances patch command: gcloud sql instances patch INSTANCE NAME \ --availability-type REGIONAL \ --enable-bin-log \ --backup-start-time = HH:MM Make the following replacements: INSTANCE NAME : the name of the Cloud SQL instance that you're configuring for high availability HH:MM : the time (in hours and minutes) REST v1 To configure an instance to be a regional, high availability instance: Check the instance to see if automatic backups and binary logs are enabled.

### "Connect to an instance using Private Service Connect \_|\_ Cloud SQL for\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect)
- Source ID: `site-docs-reference-3`
- Final score: 122
- Re-rank relevance: N/A

Evidence snippets:
- For this parameter, specify one of the following values: REGIONAL : enables high availability and is recommended for production instances.
- For this parameter, specify one of the following values: REGIONAL : enables high availability and is recommended for production instances.
- For this parameter, specify one of the following values: REGIONAL : enables high availability and is recommended for production instances.
- For this parameter, specify one of the following values: REGIONAL : enables high availability and is recommended for production instances.

