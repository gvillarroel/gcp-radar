---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:51.957Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "High-availability read replicas"
feature_slug: "high-availability-read-replicas"
latest_feature_date: "2022-07-11"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/about-read-pools"
  - "https://docs.cloud.google.com/sql/docs/mysql/configure-legacy-ha"
  - "https://docs.cloud.google.com/sql/docs/mysql/replication/create-replica"
keywords:
  - "high"
  - "availability"
  - "read"
  - "replicas"
  - "sql"
  - "mysql"
  - "supports"
  - "enabling"
---

# High-availability read replicas

Product: Cloud SQL for MySQL
Coverage: LOW

## Step 02 Summary

Cloud SQL for MySQL supports enabling high availability for read replicas.

## Extended Definition

Cloud SQL for MySQL supports enabling high availability for read replicas.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/about-read-pools](https://docs.cloud.google.com/sql/docs/mysql/about-read-pools)
- [https://docs.cloud.google.com/sql/docs/mysql/configure-legacy-ha](https://docs.cloud.google.com/sql/docs/mysql/configure-legacy-ha)
- [https://docs.cloud.google.com/sql/docs/mysql/replication/create-replica](https://docs.cloud.google.com/sql/docs/mysql/replication/create-replica)

## Supporting Pages

### "Legacy configuration for high availability \_|\_ Cloud SQL for MySQL \_\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/configure-legacy-ha](https://docs.cloud.google.com/sql/docs/mysql/configure-legacy-ha)
- Source ID: `site-docs-reference-3`
- Final score: 43
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Databases Cloud SQL MySQL Guides Send feedback Legacy configuration for high availability Stay organized with collections Save and categorize content based on your preferences.
- MySQL PostgreSQL SQL Server Important: As of January 13, 2025, the legacy configuration for high availability (HA) is deprecated for all instances.
- In a legacy HA configuration, a Cloud SQL for MySQL instance uses a failover replica to add high availability to the instance.
- This page describes the legacy configuration for a MySQL instance for high availability (HA).

### About read pools \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/about-read-pools](https://docs.cloud.google.com/sql/docs/mysql/about-read-pools)
- Source ID: `site-docs-reference-3`
- Final score: 43
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In addition to operations that aren't supported on read replicas, the following operations aren't supported on read pools: Enable and disable replication Promote replica Restart Import Export Failover Re-encrypt Clone SSL/TLS certificates with shared CA or customer-managed CA can't be used with a read pool.
- Home Documentation Databases Cloud SQL MySQL Guides Send feedback About read pools Stay organized with collections Save and categorize content based on your preferences.
- Traffic is served from read pool nodes based on whether the database is healthy, but regardless of how high replication lag on that read pool node is.
- MySQL PostgreSQL SQL Server Cloud SQL read pools support load balancing for your large read workloads.

### Create read replicas \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/replication/create-replica](https://docs.cloud.google.com/sql/docs/mysql/replication/create-replica)
- Source ID: `site-docs-root`
- Final score: 37
- Re-rank relevance: N/A

Evidence snippets:
- Create the new replica by specifying your primary replica as the primary instance using the --master-instance-name flag: gcloud sql instances create REPLICA NAME \ --master-instance-name = PARENT REPLICA NAME \ Replace the following: REPLICA NAME : the unique ID for the replica that you are creating PARENT REPLICA NAME : the name of the parent replica After you create the cascading replica, you can see that the changes made to the primary instance are replicated through all the replicas in the cascading replicas chain. curl If you are using MySQL version 5.7 or later, enable binary logging: To enable binary logging, save the following JSON in a file named request.JSON, then invoke the curl command to enable binary logging. { "settings" : { "backupConfiguration" : { "enabled" : false, "binaryLogEnabled" : true } } } To create a replica under the parent replica, edit the following JSON code sample, and save it to a file called request.json : { "masterInstanceName" : " PARENT REPLICA NAME " , "project" : " PROJECT ID " , "name" : " REPLICA NAME " , "region" : " REPLICA REGION " , "settings" : { "tier" : " MACHINE TYPE " , } } Run the following command: curl -X POST -H "Authorization: Bearer " $( gcloud auth print-access-token ) -H "Content-Type: application/json; charset=utf-8" -d @request.json "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances" Troubleshoot Issue Troubleshooting Read replica didn't start replicating on creation.
- Before using any of the request data, make the following replacements: PROJECT ID : the ID or project number of the Google Cloud project that contains the instance INSTANCE NAME : the name of the primary or read replica instance that you're configuring for high availability START TIME : the time (in hours and minutes) HTTP method and URL: PATCH https://sqladmin.googleapis.com/v1beta4/projects/ PROJECT ID /instances/ INSTANCE NAME Request JSON body: { "settings": { "backupConfiguration": { "startTime": " START TIME ", "enabled": true, "binaryLogEnabled": true } } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Before using any of the request data, make the following replacements: PROJECT ID : the ID or project number of the Google Cloud project that contains the instance INSTANCE NAME : the name of the primary or read replica instance that you're configuring for high availability START TIME : the time (in hours and minutes) HTTP method and URL: PATCH https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ INSTANCE NAME Request JSON body: { "settings": { "backupConfiguration": { "startTime": " START TIME ", "enabled": true, "binaryLogEnabled": true } } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Terraform To create a read replica, use Terraform resource . resource "google sql database instance" "read replica" { name = "mysql-replica-instance-name" master instance name = google sql database instance.primary.name region = "europe-west4" database version = "MYSQL 8 0" replica configuration { failover target = false } settings { tier = "db-n1-standard-2" availability type = "ZONAL" disk size = "100" } set deletion protection to true, will ensure that one cannot accidentally delete this instance by use of Terraform whereas deletion protection enabled flag protects this instance at the GCP level. deletion protection = false } Apply the changes To apply your Terraform configuration in a Google Cloud project, complete the steps in the following sections.

