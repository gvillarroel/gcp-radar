---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:45:01.376Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "Smaller read replicas"
feature_slug: "smaller-read-replicas"
latest_feature_date: "2023-03-21"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/best-practices"
  - "https://docs.cloud.google.com/sql/docs/postgres/replication/create-replica"
  - "https://docs.cloud.google.com/sql/docs/release-notes"
keywords:
  - "smaller"
  - "read"
  - "replicas"
  - "sql"
  - "can"
  - "be"
  - "configured"
  - "with"
---

# Smaller read replicas

Product: Cloud SQL for PostgreSQL
Coverage: LOW

## Step 02 Summary

Cloud SQL read replicas can be configured with fewer CPUs and less RAM than their primary instances.

## Extended Definition

Cloud SQL read replicas can be configured with fewer CPUs and less RAM than their primary instances.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/best-practices](https://docs.cloud.google.com/sql/docs/postgres/best-practices)
- [https://docs.cloud.google.com/sql/docs/postgres/replication/create-replica](https://docs.cloud.google.com/sql/docs/postgres/replication/create-replica)
- [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)

## Supporting Pages

### "General best practices \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/best-practices](https://docs.cloud.google.com/sql/docs/postgres/best-practices)
- Source ID: `site-docs-root`
- Final score: 206
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If issues occur with your Cloud SQL instance, review the following during troubleshooting: Debugging connection issues Diagnosing issues Known issues Troubleshooting Instance configuration and administration Best practice More information Read and follow the operational guidelines to ensure that your instances are covered by the Cloud SQL SLA .
- Home Documentation Databases Cloud SQL PostgreSQL Guides Send feedback General best practices Stay organized with collections Save and categorize content based on your preferences.
- If it's possible to reduce the number of WAL records, such as by having no replicas configured for this instance, the operation completes more quickly.
- Backup and recovery Best practice More information Protect your data with the appropriate Cloud SQL functionality.

### Create read replicas \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/replication/create-replica](https://docs.cloud.google.com/sql/docs/postgres/replication/create-replica)
- Source ID: `site-docs-root`
- Final score: 196
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Follow steps 4-6 for each new cascading replica that you want to create. gcloud Create the new replica by specifying your primary replica as the primary instance using the --master-instance-name flag: gcloud sql instances create REPLICA NAME \ --master-instance-name = PARENT REPLICA NAME \ Replace the following: REPLICA NAME : the unique ID for the replica that you are creating PARENT REPLICA NAME : the name of the parent replica After you create the cascading replica, you can see that the changes made to the primary instance are replicated through all the replicas in the cascading replicas chain. curl To create a replica under the parent replica, edit the following JSON code sample, and save it to a file called request.json : { "masterInstanceName" : " PARENT REPLICA NAME " , "project" : " PROJECT ID " , "name" : " REPLICA NAME " , "region" : " REPLICA REGION " , "settings" : { "tier" : " MACHINE TYPE " , } } Run the following command: curl -X POST -H "Authorization: Bearer " $( gcloud auth print-access-token ) -H "Content-Type: application/json; charset=utf-8" -d @request.json "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances" Troubleshoot Issue Troubleshooting Read replica didn't start replicating on creation.
- It also can't replicate from an instance that supports external IP connections or from an instance that's configured with private services access . gcloud To create a read replica of an instance, use the gcloud sql instances create command: gcloud sql instances create REPLICA INSTANCE NAME \ --master-instance-name = PRIMARY INSTANCE NAME \ --project = PROJECT ID \ --region = REGION NAME \ --enable-private-service-connect \ --allowed-psc-projects = ALLOWED PROJECTS \ --availability-type = AVAILABILITY TYPE \ --no-assign-ip Make the following replacements: REPLICA INSTANCE NAME : the name of the replica instance.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PATCH -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances " Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ REPLICA INSTANCE NAME ", "status": "PENDING", "user": "user@example.com", "insertTime": "2020-01-16T02:32:12.281Z", "operationType": "CREATE REPLICA", "name": " OPERATION ID ", "targetId": " REPLICA INSTANCE NAME ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /operations/ OPERATION ID ", "targetProject": " PROJECT ID " } Configure read replicas for IAM database authentication If you enable the cloudsql.iam authentication flag on the primary instance, Cloud SQL for PostgreSQL enables it on the read replicas automatically.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id ", "status": "PENDING", "user": "user@example.com", "insertTime": "2020-01-21T22:43:37.981Z", "operationType": "CREATE REPLICA", "name": " operation-id ", "targetId": " instance-id ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /operations/ operation-id ", "targetProject": " project-id " } Create a read replica of an instance with Private Service Connect enabled To create a read replica of an instance with Private Service Connect enabled, use gcloud CLI or the API.

### Cloud SQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 194
- Re-rank relevance: N/A

Evidence snippets:
- October 21, 2024 Cloud SQL for MySQL Feature You can now create a read replica for an instance that has private services access configured for it and connector enforcement enabled for it.
- This feature automates read pool scale in and scale out operations based on one or both of the following conditions: Allowed CPU usage of the read pool Allowed number of client connections to the read pool November 13, 2025 Cloud SQL for MySQL Feature Cloud SQL for MySQL now lets you have more control over the number of results that are returned when you perform an ANN vector search with filters.
- July 29, 2022 Cloud SQL for PostgreSQL Change For PostgreSQL versions 9.6 to 13, the [PostgreSQL version].R20220710.01 00 maintenance version caused a behavior change for configuration parameters: Session-level configuration parameters with dashes ( - ) cannot be set.
- September 19, 2024 Cloud SQL for PostgreSQL Feature You can now use gcloud or the Cloud SQL Admin API to switch the storage location of the transaction logs used for point-in-time recovery on your instance without downtime to Cloud Storage.

