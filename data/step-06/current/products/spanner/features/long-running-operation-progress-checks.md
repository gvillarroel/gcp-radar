---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.272Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Long-running operation progress checks"
feature_slug: "long-running-operation-progress-checks"
latest_feature_date: "2023-08-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminClient"
  - "https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database"
keywords:
  - "checks"
  - "operation"
  - "progress"
  - "long"
  - "running"
  - "supports"
---

# Long-running operation progress checks

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner now supports checking progress for long-running operations, including backups, restores, and schema updates, and this capability is generally available.

## Extended Definition

Spanner now supports checking progress for long-running operations, including backups, restores, and schema updates, and this capability is generally available.

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
- Final score: 123
- Re-rank relevance: N/A

Evidence snippets:
- The returned database [long-running operation][google.longrunning.Operation] has a name of the format projects/<project>/instances/<instance>/databases/<database>/operations/<operation id> , and can be used to track the progress of the operation, and to cancel it.
- Each batch of statements is assigned a name which can be used with the Operations][google.longrunning.Operations] API to monitor progress.
- The returned [long-running operation][google.longrunning.Operation] can be used to track the progress of updating the database.
- The returned [long-running operation][google.longrunning.Operation] will have a name of the format projects/<project>/instances/<instance>/databases/<database>/operations/<operation id> and can be used to track the database modification.

### "Class DatabaseAdminClient (3.63.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminClient](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminClient)
- Source ID: `site-python-reference`
- Final score: 123
- Re-rank relevance: N/A

Evidence snippets:
- The returned database [long-running operation][google.longrunning.Operation] has a name of the format projects/<project>/instances/<instance>/databases/<database>/operations/<operation id> , and can be used to track the progress of the operation, and to cancel it.
- Each batch of statements is assigned a name which can be used with the Operations][google.longrunning.Operations] API to monitor progress.
- The returned [long-running operation][google.longrunning.Operation] can be used to track the progress of updating the database.
- The returned [long-running operation][google.longrunning.Operation] will have a name of the format projects/<project>/instances/<instance>/databases/<database>/operations/<operation id> and can be used to track the database modification.

### "Best practices for using Spanner as a gaming database \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database](https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database)
- Source ID: `site-docs-root`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- If you are planning to repopulate a table with the same kind of data (for example, when running consecutive performance tests), you can instead run a DELETE query on the rows containing data you no longer need.
- In the following example, there is a table for long-term player high-score records: CREATE TABLE Ranking ( PlayerID STRING ( 36 ) NOT NULL , GameMode INT64 NOT NULL , Score INT64 NOT NULL ) PRIMARY KEY ( PlayerID , GameMode ) This table contains the player ID (UUIDv4), a number representing a game mode, stage, or season, and the player's score.
- This document is intended for game backend engineers working on long-term state storage, and game infrastructure operators and admins who support those systems and are interested in hosting their backend database on Google Cloud.
- If your game allows players to have separate saved progress for multiple characters, like many large persistent massively multiplayer games, then this table typically contains a row for each character instead.

