---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.358Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Cloud Spanner regional instance creation in asia-southeast1"
feature_slug: "cloud-spanner-regional-instance-creation-in-asia-southeast1"
latest_feature_date: "2018-05-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/backup"
  - "https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminClient"
keywords:
  - "southeast1"
  - "creation"
  - "instances"
  - "asia"
  - "regional"
  - "instance"
---

# Cloud Spanner regional instance creation in asia-southeast1

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Cloud Spanner regional instances can now be created in the asia-southeast1 (Singapore) region.

## Extended Definition

Cloud Spanner regional instances can now be created in the asia-southeast1 (Singapore) region.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/backup](https://docs.cloud.google.com/spanner/docs/backup)
- [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminAsyncClient](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminClient](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminClient)

## Supporting Pages

### Backups overview \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/backup](https://docs.cloud.google.com/spanner/docs/backup)
- Source ID: `site-docs-root`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- For dual-region and multi-regional instances , the backup is stored in all zones that contain either a read-write or read-only replica.
- For regional instances , the backup is stored in each of the three read-write zones.
- For example, if you copy your database from the source multi-region instance configuration nam7 to the destination multi-region instance configuration nam-eur-asia3 , the following charges apply: No charge for overlapping us-central1 region No charge for witness us-central2 region Inter-continental data transfer charge apply twice: once for each new continent (Europe and Asia) Data transfer between regions within the same continent charge apply once for us-east1 Data transfer between regions within the same continent charge apply once in Europe Spanner optimizes the copying process to minimize the number of cross-region transfers.
- Each backup resource is organized under the same instance as its source database in the resource hierarchy and has a resource path that uses the following format: projects/ PROJECT ID /instances/ INSTANCE ID /backups/ BACKUP NAME Replace the following: PROJECT ID : the project ID.

### "Class DatabaseAdminAsyncClient (3.63.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminAsyncClient](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminAsyncClient)
- Source ID: `site-python-reference`
- Final score: 111
- Re-rank relevance: N/A

Evidence snippets:
- The returned backup long-running operation][google.longrunning.Operation] will have a name of the format projects/<project>/instances/<instance>/backups/<backup>/operations/<operation id> and can be used to track creation of the backup.
- The returned database [long-running operation][google.longrunning.Operation] has a name of the format projects/<project>/instances/<instance>/databases/<database>/operations/<operation id> , and can be used to track the progress of the operation, and to cancel it.
- The returned [long-running operation][google.longrunning.Operation] will have a name of the format projects/<project>/instances/<instance>/databases/<database>/operations/<operation id> and can be used to track the database modification.
- The returned backup long-running operation][google.longrunning.Operation] will have a name of the format projects/<project>/instances/<instance>/backups/<backup>/operations/<operation id> and can be used to track copying of the backup.

### "Class DatabaseAdminClient (3.63.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminClient](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminClient)
- Source ID: `site-python-reference`
- Final score: 111
- Re-rank relevance: N/A

Evidence snippets:
- The returned backup long-running operation][google.longrunning.Operation] will have a name of the format projects/<project>/instances/<instance>/backups/<backup>/operations/<operation id> and can be used to track creation of the backup.
- The returned database [long-running operation][google.longrunning.Operation] has a name of the format projects/<project>/instances/<instance>/databases/<database>/operations/<operation id> , and can be used to track the progress of the operation, and to cancel it.
- The returned [long-running operation][google.longrunning.Operation] will have a name of the format projects/<project>/instances/<instance>/databases/<database>/operations/<operation id> and can be used to track the database modification.
- The returned backup long-running operation][google.longrunning.Operation] will have a name of the format projects/<project>/instances/<instance>/backups/<backup>/operations/<operation id> and can be used to track copying of the backup.

