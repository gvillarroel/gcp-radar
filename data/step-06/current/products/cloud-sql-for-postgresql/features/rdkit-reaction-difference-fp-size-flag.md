---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T13:51:57.783Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "rdkit.reaction_difference_fp_size flag"
feature_slug: "rdkit-reaction-difference-fp-size-flag"
latest_feature_date: "2023-09-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/flags"
  - "https://docs.cloud.google.com/sql/docs/postgres/troubleshooting"
  - "https://docs.cloud.google.com/sql/docs/postgres/replication/create-replica"
keywords:
  - "difference"
  - "reaction"
  - "chemical"
  - "rdkit"
  - "size"
  - "sets"
  - "flag"
---

# rdkit.reaction_difference_fp_size flag

Product: Cloud SQL for PostgreSQL
Coverage: MEDIUM

## Step 02 Summary

The rdkit.reaction_difference_fp_size flag sets the size of difference chemical reaction fingerprints.

## Extended Definition

The rdkit.reaction_difference_fp_size flag sets the size of difference chemical reaction fingerprints.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/flags](https://docs.cloud.google.com/sql/docs/postgres/flags)
- [https://docs.cloud.google.com/sql/docs/postgres/troubleshooting](https://docs.cloud.google.com/sql/docs/postgres/troubleshooting)
- [https://docs.cloud.google.com/sql/docs/postgres/replication/create-replica](https://docs.cloud.google.com/sql/docs/postgres/replication/create-replica)

## Supporting Pages

### Configure database flags | Cloud SQL for PostgreSQL | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/flags](https://docs.cloud.google.com/sql/docs/postgres/flags)
- Source ID: `feature-recovery-direct-http`
- Final score: 301
- Re-rank relevance: N/A

Evidence snippets:
- 9192 No rdkit.reaction_difference_fp_size integer 64 ...
- 9192 No rdkit.ignore_reaction_agents boolean on | off No rdkit.init_reaction boolean on | off No rdkit.layered_fp_size integer 64 ...
- 9192 No rdkit.reaction_difference_fp_type integer 1 ...
- 3 No rdkit.reaction_sss_fp_size integer 64 ...

### Troubleshoot \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/troubleshooting](https://docs.cloud.google.com/sql/docs/postgres/troubleshooting)
- Source ID: `site-docs-root`
- Final score: 73
- Re-rank relevance: N/A

Evidence snippets:
- From a terminal, connect to your database: gcloud sql connect INSTANCE NAME Run this command to create the extension: CREATE EXTENSION pgaudit ; Exit the database, and from a terminal run the following command: gcloud sql instances patch INSTANCE NAME \ --database-flags = cloudsql.enable pgaudit = on,pgaudit.log = all Manage instances Issue Troubleshooting You want to find out what queries are running now.
- The dump file contains references to unsupported extension.
- We recommend going with the cloning route since it has no impact on performance and doesn't require you to redo any instance configuration settings such as flags, machine type, storage size and memory.
- Remove the risky flag settings and restart the instance The instance is stuck due to large temporary data size.

### Create read replicas \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/replication/create-replica](https://docs.cloud.google.com/sql/docs/postgres/replication/create-replica)
- Source ID: `site-docs-root`
- Final score: 69
- Re-rank relevance: N/A

Evidence snippets:
- Terraform To create a read replica, use a Terraform resource . resource "google sql database instance" "read replica" { name = "postgres-replica-instance-name" master instance name = google sql database instance.primary.name region = "europe-west4" database version = "POSTGRES 14" settings { tier = "db-custom-2-7680" availability type = "ZONAL" disk size = "100" } set deletion protection to true, will ensure that one cannot accidentally delete this instance by use of Terraform whereas deletion protection enabled flag protects this instance at the GCP level. deletion protection = false } REST v1 Use the insert method of the instances resource to create the read replica.
- Follow steps 4-6 for each new cascading replica that you want to create. gcloud Create the new replica by specifying your primary replica as the primary instance using the --master-instance-name flag: gcloud sql instances create REPLICA NAME \ --master-instance-name = PARENT REPLICA NAME \ Replace the following: REPLICA NAME : the unique ID for the replica that you are creating PARENT REPLICA NAME : the name of the parent replica After you create the cascading replica, you can see that the changes made to the primary instance are replicated through all the replicas in the cascading replicas chain. curl To create a replica under the parent replica, edit the following JSON code sample, and save it to a file called request.json : { "masterInstanceName" : " PARENT REPLICA NAME " , "project" : " PROJECT ID " , "name" : " REPLICA NAME " , "region" : " REPLICA REGION " , "settings" : { "tier" : " MACHINE TYPE " , } } Run the following command: curl -X POST -H "Authorization: Bearer " $( gcloud auth print-access-token ) -H "Content-Type: application/json; charset=utf-8" -d @request.json "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances" Troubleshoot Issue Troubleshooting Read replica didn't start replicating on creation.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PATCH -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances " Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ REPLICA INSTANCE NAME ", "status": "PENDING", "user": "user@example.com", "insertTime": "2020-01-16T02:32:12.281Z", "operationType": "CREATE REPLICA", "name": " OPERATION ID ", "targetId": " REPLICA INSTANCE NAME ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /operations/ OPERATION ID ", "targetProject": " PROJECT ID " } Configure read replicas for IAM database authentication If you enable the cloudsql.iam authentication flag on the primary instance, Cloud SQL for PostgreSQL enables it on the read replicas automatically.
- You are returned to the instance page for the primary. gcloud Create the replica: gcloud sql instances create REPLICA NAME \ --master-instance-name = MASTER INSTANCE NAME You can specify a different tier size using the --tier parameter, if needed.

