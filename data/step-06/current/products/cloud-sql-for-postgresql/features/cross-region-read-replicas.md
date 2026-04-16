---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T13:51:57.824Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "Cross-region read replicas"
feature_slug: "cross-region-read-replicas"
latest_feature_date: "2020-03-16"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/cmek"
  - "https://docs.cloud.google.com/sql/docs/postgres/about-read-pools"
  - "https://docs.cloud.google.com/sql/docs/postgres/replication/create-replica"
keywords:
  - "different"
  - "cross"
  - "replicas"
  - "supports"
  - "read"
  - "region"
---

# Cross-region read replicas

Product: Cloud SQL for PostgreSQL
Coverage: LOW

## Step 02 Summary

Cloud SQL for PostgreSQL supports read replicas in a different region from the primary instance.

## Extended Definition

Cloud SQL for PostgreSQL supports read replicas in a different region from the primary instance.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/cmek](https://docs.cloud.google.com/sql/docs/postgres/cmek)
- [https://docs.cloud.google.com/sql/docs/postgres/about-read-pools](https://docs.cloud.google.com/sql/docs/postgres/about-read-pools)
- [https://docs.cloud.google.com/sql/docs/postgres/replication/create-replica](https://docs.cloud.google.com/sql/docs/postgres/replication/create-replica)

## Supporting Pages

### About read pools \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/about-read-pools](https://docs.cloud.google.com/sql/docs/postgres/about-read-pools)
- Source ID: `site-iam-reference`
- Final score: 44
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In addition to operations that aren't supported on read replicas, the following operations aren't supported on read pools: Enable and disable replication Promote replica Restart Import Export Failover Re-encrypt Clone SSL/TLS certificates with shared CA or customer-managed CA can't be used with a read pool.
- If you want to scale the number of read replicas beyond a total count of 10, then you must set reset the values for the max wal senders and max replication slots database flags on the primary instance to a value greater than or equal to the number of read replicas you want to use.
- For example, if your primary instance has two read replicas and two read pools of ten replicas each, then you must reset the max wal senders and max replication slots configuration flags to 22 or greater.
- When you modify read pool node settings such as storage, connectivity, or database configuration flags, the changes are automatically applied uniformly across each read pool node in the read pool.

### "About customer-managed encryption keys (CMEK) \_|\_ Cloud SQL for PostgreSQL\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/cmek](https://docs.cloud.google.com/sql/docs/postgres/cmek)
- Source ID: `site-iam-reference`
- Final score: 42
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you create a read replica in a different region, you must select a CMEK from the other region.
- For cross-region replicas, you need to create a new key for the replica region.
- Replica creation When you create a read replica of a Cloud SQL instance in the same region, it inherits the CMEK from the parent instance.
- You can't assign a different key to a replica in the same region as the primary instance.

### Create read replicas \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/replication/create-replica](https://docs.cloud.google.com/sql/docs/postgres/replication/create-replica)
- Source ID: `site-docs-root`
- Final score: 38
- Re-rank relevance: N/A

Evidence snippets:
- You can create this replica in either the same region or in a different region from the primary instance ( cross-region read replica ).
- Follow steps 4-6 for each new cascading replica that you want to create. gcloud Create the new replica by specifying your primary replica as the primary instance using the --master-instance-name flag: gcloud sql instances create REPLICA NAME \ --master-instance-name = PARENT REPLICA NAME \ Replace the following: REPLICA NAME : the unique ID for the replica that you are creating PARENT REPLICA NAME : the name of the parent replica After you create the cascading replica, you can see that the changes made to the primary instance are replicated through all the replicas in the cascading replicas chain. curl To create a replica under the parent replica, edit the following JSON code sample, and save it to a file called request.json : { "masterInstanceName" : " PARENT REPLICA NAME " , "project" : " PROJECT ID " , "name" : " REPLICA NAME " , "region" : " REPLICA REGION " , "settings" : { "tier" : " MACHINE TYPE " , } } Run the following command: curl -X POST -H "Authorization: Bearer " $( gcloud auth print-access-token ) -H "Content-Type: application/json; charset=utf-8" -d @request.json "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances" Troubleshoot Issue Troubleshooting Read replica didn't start replicating on creation.
- It also can't replicate from an instance that supports external IP connections or from an instance that's configured with private services access . gcloud To create a read replica of an instance, use the gcloud sql instances create command: gcloud sql instances create REPLICA INSTANCE NAME \ --master-instance-name = PRIMARY INSTANCE NAME \ --project = PROJECT ID \ --region = REGION NAME \ --enable-private-service-connect \ --allowed-psc-projects = ALLOWED PROJECTS \ --availability-type = AVAILABILITY TYPE \ --no-assign-ip Make the following replacements: REPLICA INSTANCE NAME : the name of the replica instance.
- If a replica is a cross-region replica , you can perform a failover to another region; specifically, you can promote a replica to a standalone instance (in which case, existing replicas would not consider that instance as primary).

