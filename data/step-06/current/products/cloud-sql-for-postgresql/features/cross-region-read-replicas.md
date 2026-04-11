---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:45:01.436Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "Cross-region read replicas"
feature_slug: "cross-region-read-replicas"
latest_feature_date: "2020-03-16"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/release-notes"
  - "https://docs.cloud.google.com/sql/docs/postgres/replication/create-replica"
  - "https://docs.cloud.google.com/sql/docs/postgres/about-read-pools"
keywords:
  - "cross"
  - "region"
  - "read"
  - "replicas"
  - "sql"
  - "for"
  - "postgresql"
  - "supports"
---

# Cross-region read replicas

Product: Cloud SQL for PostgreSQL
Coverage: LOW

## Step 02 Summary

Cloud SQL for PostgreSQL supports read replicas in a different region from the primary instance.

## Extended Definition

Cloud SQL for PostgreSQL supports read replicas in a different region from the primary instance.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/release-notes](https://docs.cloud.google.com/sql/docs/postgres/release-notes)
- [https://docs.cloud.google.com/sql/docs/postgres/replication/create-replica](https://docs.cloud.google.com/sql/docs/postgres/replication/create-replica)
- [https://docs.cloud.google.com/sql/docs/postgres/about-read-pools](https://docs.cloud.google.com/sql/docs/postgres/about-read-pools)

## Supporting Pages

### Cloud SQL for PostgreSQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/release-notes](https://docs.cloud.google.com/sql/docs/postgres/release-notes)
- Source ID: `site-docs-root`
- Final score: 240
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- March 16, 2020 Feature Cloud SQL now supports read replicas in a different region than that of the primary instance, providing additional protection against regional outages and improving read performance by making replicas available closer to your application.
- November 14, 2025 Feature Cloud SQL for PostgreSQL now supports read pool autoscaling (GA) , which helps you more easily manage your application's workload needs.
- Customers can now configure PostgreSQL and MySQL for Cloud SQL read replicas to have read replicas under them.
- February 01, 2024 Feature Private Service Connect now includes support for cross-region read replicas.

### Create read replicas \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/replication/create-replica](https://docs.cloud.google.com/sql/docs/postgres/replication/create-replica)
- Source ID: `site-docs-root`
- Final score: 236
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Follow steps 4-6 for each new cascading replica that you want to create. gcloud Create the new replica by specifying your primary replica as the primary instance using the --master-instance-name flag: gcloud sql instances create REPLICA NAME \ --master-instance-name = PARENT REPLICA NAME \ Replace the following: REPLICA NAME : the unique ID for the replica that you are creating PARENT REPLICA NAME : the name of the parent replica After you create the cascading replica, you can see that the changes made to the primary instance are replicated through all the replicas in the cascading replicas chain. curl To create a replica under the parent replica, edit the following JSON code sample, and save it to a file called request.json : { "masterInstanceName" : " PARENT REPLICA NAME " , "project" : " PROJECT ID " , "name" : " REPLICA NAME " , "region" : " REPLICA REGION " , "settings" : { "tier" : " MACHINE TYPE " , } } Run the following command: curl -X POST -H "Authorization: Bearer " $( gcloud auth print-access-token ) -H "Content-Type: application/json; charset=utf-8" -d @request.json "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances" Troubleshoot Issue Troubleshooting Read replica didn't start replicating on creation.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PATCH -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances " Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ REPLICA INSTANCE NAME ", "status": "PENDING", "user": "user@example.com", "insertTime": "2020-01-16T02:32:12.281Z", "operationType": "CREATE REPLICA", "name": " OPERATION ID ", "targetId": " REPLICA INSTANCE NAME ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /operations/ OPERATION ID ", "targetProject": " PROJECT ID " } Configure read replicas for IAM database authentication If you enable the cloudsql.iam authentication flag on the primary instance, Cloud SQL for PostgreSQL enables it on the read replicas automatically.
- However, if you don't enable this flag on the primary instance, Cloud SQL for PostgreSQL doesn't enable it on the read replicas.
- Terraform To create a read replica, use a Terraform resource . resource "google sql database instance" "read replica" { name = "postgres-replica-instance-name" master instance name = google sql database instance.primary.name region = "europe-west4" database version = "POSTGRES 14" settings { tier = "db-custom-2-7680" availability type = "ZONAL" disk size = "100" } set deletion protection to true, will ensure that one cannot accidentally delete this instance by use of Terraform whereas deletion protection enabled flag protects this instance at the GCP level. deletion protection = false } REST v1 Use the insert method of the instances resource to create the read replica.

### About read pools \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/about-read-pools](https://docs.cloud.google.com/sql/docs/postgres/about-read-pools)
- Source ID: `site-iam-reference`
- Final score: 220
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- MySQL PostgreSQL SQL Server Cloud SQL read pools support load balancing for your large read workloads.
- If you want to scale the number of read replicas beyond a total count of 10, then you must set reset the values for the max wal senders and max replication slots database flags on the primary instance to a value greater than or equal to the number of read replicas you want to use.
- For example, if your primary instance has two read replicas and two read pools of ten replicas each, then you must reset the max wal senders and max replication slots configuration flags to 22 or greater.
- When you modify read pool node settings such as storage, connectivity, or database configuration flags, the changes are automatically applied uniformly across each read pool node in the read pool.

