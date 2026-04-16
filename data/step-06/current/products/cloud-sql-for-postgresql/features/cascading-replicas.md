---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T13:51:57.795Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "Cascading replicas"
feature_slug: "cascading-replicas"
latest_feature_date: "2022-09-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/replication/create-replica"
  - "https://docs.cloud.google.com/sql/docs/postgres/admin-api-error-messages"
  - "https://docs.cloud.google.com/sql/docs/postgres/about-read-pools"
keywords:
  - "cascading"
  - "allowing"
  - "have"
  - "generally"
  - "replicas"
  - "available"
  - "read"
---

# Cascading replicas

Product: Cloud SQL for PostgreSQL
Coverage: MEDIUM

## Step 02 Summary

Cascading replicas are generally available, allowing Cloud SQL read replicas to have read replicas under them.

## Extended Definition

Cascading replicas are generally available, allowing Cloud SQL read replicas to have read replicas under them.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/replication/create-replica](https://docs.cloud.google.com/sql/docs/postgres/replication/create-replica)
- [https://docs.cloud.google.com/sql/docs/postgres/admin-api-error-messages](https://docs.cloud.google.com/sql/docs/postgres/admin-api-error-messages)
- [https://docs.cloud.google.com/sql/docs/postgres/about-read-pools](https://docs.cloud.google.com/sql/docs/postgres/about-read-pools)

## Supporting Pages

### Create read replicas \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/replication/create-replica](https://docs.cloud.google.com/sql/docs/postgres/replication/create-replica)
- Source ID: `site-docs-root`
- Final score: 186
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Follow steps 4-6 for each new cascading replica that you want to create. gcloud Create the new replica by specifying your primary replica as the primary instance using the --master-instance-name flag: gcloud sql instances create REPLICA NAME \ --master-instance-name = PARENT REPLICA NAME \ Replace the following: REPLICA NAME : the unique ID for the replica that you are creating PARENT REPLICA NAME : the name of the parent replica After you create the cascading replica, you can see that the changes made to the primary instance are replicated through all the replicas in the cascading replicas chain. curl To create a replica under the parent replica, edit the following JSON code sample, and save it to a file called request.json : { "masterInstanceName" : " PARENT REPLICA NAME " , "project" : " PROJECT ID " , "name" : " REPLICA NAME " , "region" : " REPLICA REGION " , "settings" : { "tier" : " MACHINE TYPE " , } } Run the following command: curl -X POST -H "Authorization: Bearer " $( gcloud auth print-access-token ) -H "Content-Type: application/json; charset=utf-8" -d @request.json "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances" Troubleshoot Issue Troubleshooting Read replica didn't start replicating on creation.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PATCH -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances " Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ REPLICA INSTANCE NAME ", "status": "PENDING", "user": "user@example.com", "insertTime": "2020-01-16T02:32:12.281Z", "operationType": "CREATE REPLICA", "name": " OPERATION ID ", "targetId": " REPLICA INSTANCE NAME ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /operations/ OPERATION ID ", "targetProject": " PROJECT ID " } Configure read replicas for IAM database authentication If you enable the cloudsql.iam authentication flag on the primary instance, Cloud SQL for PostgreSQL enables it on the read replicas automatically.
- If the primary instance has a private IP connection and the instance accepts database connections from Cloud SQL Language Connectors only, then you can't create read replicas for the instance.
- Home Documentation Databases Cloud SQL PostgreSQL Guides Send feedback Create read replicas Stay organized with collections Save and categorize content based on your preferences.

### "Cloud SQL Admin API error messages \_|\_ Cloud SQL for PostgreSQL \_|\_\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/admin-api-error-messages](https://docs.cloud.google.com/sql/docs/postgres/admin-api-error-messages)
- Source ID: `site-api-reference`
- Final score: 136
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- ERROR READ REPLICA UNDER EXTERNAL SERVER REPLICA NOT SYNCED To have a read replica, there must be an initial sync completed on the external server replica.
- ERROR REPLICA DEPTH LIMIT EXCEEDED Requested operation would cause exceeding the limit of 4 levels on the depth of cascading replicas.
- ERROR EXTERNAL SERVER REPLICA GTID MODE External server replica must have gtid mode=ON in order to have a read replica.
- ERROR INVALID INSTANCE TYPE READ REPLICA A read replica must have an associated master instance.

### About read pools \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/about-read-pools](https://docs.cloud.google.com/sql/docs/postgres/about-read-pools)
- Source ID: `site-iam-reference`
- Final score: 128
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In addition to operations that aren't supported on read replicas, the following operations aren't supported on read pools: Enable and disable replication Promote replica Restart Import Export Failover Re-encrypt Clone SSL/TLS certificates with shared CA or customer-managed CA can't be used with a read pool.
- If you want to scale the number of read replicas beyond a total count of 10, then you must set reset the values for the max wal senders and max replication slots database flags on the primary instance to a value greater than or equal to the number of read replicas you want to use.
- For example, if your primary instance has two read replicas and two read pools of ten replicas each, then you must reset the max wal senders and max replication slots configuration flags to 22 or greater.
- Limitations The following limitations apply: Read pools are only available for Cloud SQL Enterprise Plus edition instances on the new network architecture .

