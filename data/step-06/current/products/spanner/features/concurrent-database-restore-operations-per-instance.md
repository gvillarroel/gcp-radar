---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.292Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Concurrent database restore operations per instance"
feature_slug: "concurrent-database-restore-operations-per-instance"
latest_feature_date: "2022-12-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminClient"
  - "https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database"
keywords:
  - "increased"
  - "concurrent"
  - "restore"
  - "maximum"
  - "operations"
  - "database"
  - "instance"
---

# Concurrent database restore operations per instance

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Increased the maximum number of concurrent Spanner database restore operations per instance from five to ten.

## Extended Definition

Increased the maximum number of concurrent Spanner database restore operations per instance from five to ten.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminAsyncClient](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminClient](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminClient)
- [https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database](https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database)

## Supporting Pages

### "Class DatabaseAdminAsyncClient (3.63.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminAsyncClient](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminAsyncClient)
- Source ID: `site-python-reference`
- Final score: 172
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- ClientInfo ) Cloud Spanner Database Admin API The Cloud Spanner Database Admin API can be used to: create, drop, and list databases update the schema of pre-existing databases create, delete, copy and list backups for a database restore a database from an existing backup Properties api endpoint Return the API endpoint used by the client instance.
- The returned database [long-running operation][google.longrunning.Operation] has a name of the format projects/<project>/instances/<instance>/databases/<database>/operations/<operation id> , and can be used to track the progress of the operation, and to cancel it.
- The returned [long-running operation][google.longrunning.Operation] will have a name of the format projects/<project>/instances/<instance>/databases/<database>/operations/<operation id> and can be used to track the database modification.
- This corresponds to the database id field on the request instance; if request is provided, this should not be set. backup str Name of the backup from which to restore.

### "Class DatabaseAdminClient (3.63.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminClient](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminClient)
- Source ID: `site-python-reference`
- Final score: 172
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- ClientInfo ) Cloud Spanner Database Admin API The Cloud Spanner Database Admin API can be used to: create, drop, and list databases update the schema of pre-existing databases create, delete, copy and list backups for a database restore a database from an existing backup Properties api endpoint Return the API endpoint used by the client instance.
- The returned database [long-running operation][google.longrunning.Operation] has a name of the format projects/<project>/instances/<instance>/databases/<database>/operations/<operation id> , and can be used to track the progress of the operation, and to cancel it.
- The returned [long-running operation][google.longrunning.Operation] will have a name of the format projects/<project>/instances/<instance>/databases/<database>/operations/<operation id> and can be used to track the database modification.
- This corresponds to the database id field on the request instance; if request is provided, this should not be set. backup str Name of the backup from which to restore.

### "Best practices for using Spanner as a gaming database \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database](https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database)
- Source ID: `site-docs-root`
- Final score: 137
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This strategy can also optimize the time it takes to backup or restore a tenant's data, because these operations are performed on an entire database at once.
- With the scalability of Spanner, it means that data doesn't need to be sharded into separate database instances when more performance or storage is needed; instead, you can add more nodes.
- Size the database to testing and production needs During development, a single-node Spanner instance is likely sufficient for most activities, including functional testing.
- Depending on the type of game, the database can struggle with the number of operations required to handle the player load as well as the amount of stored data.

