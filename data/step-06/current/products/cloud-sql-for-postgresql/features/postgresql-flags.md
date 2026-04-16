---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T13:51:57.816Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "PostgreSQL flags"
feature_slug: "postgresql-flags"
latest_feature_date: "2021-03-31"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/flags"
  - "https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/flags/list"
  - "https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/restore"
keywords:
  - "configurable"
  - "flags"
  - "database"
  - "supports"
---

# PostgreSQL flags

Product: Cloud SQL for PostgreSQL
Coverage: LOW

## Step 02 Summary

Cloud SQL for PostgreSQL supports configurable PostgreSQL database flags.

## Extended Definition

Cloud SQL for PostgreSQL supports configurable PostgreSQL database flags.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/flags](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/flags)
- [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/flags/list](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/flags/list)
- [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/restore](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/restore)

## Supporting Pages

### Method: flags.list \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/flags/list](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/flags/list)
- Source ID: `site-api-reference`
- Final score: 31
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Databases Cloud SQL PostgreSQL Reference Send feedback Method: flags.list Stay organized with collections Save and categorize content based on your preferences.
- By default, this method returns flags for all database types and versions. flagScope enum ( SqlFlagScope ) Optional.
- Query parameters Parameters databaseVersion string Database type and version you want to retrieve flags for.
- Lists all available database flags for Cloud SQL instances.

### REST Resource: flags \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/flags](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/flags)
- Source ID: `site-api-reference`
- Final score: 31
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- JSON representation { "name" : string , "type" : enum ( SqlFlagType ) , "appliesTo" : [ enum ( SqlDatabaseVersion ) ] , "allowedStringValues" : [ string ] , "minValue" : string , "maxValue" : string , "requiresRestart" : boolean , "kind" : string , "inBeta" : boolean , "allowedIntValues" : [ string ] , "flagScope" : enum ( SqlFlagScope ) , // Union field recommended value can be only one of the following: "recommendedStringValue" : string , "recommendedIntValue" : string // End of list of possible types for union field recommended value . } Fields name string This is the name of the flag.
- See the complete list . allowedStringValues[] string For STRING flags, a list of strings that the value can be set to. minValue string ( Int64Value format) For INTEGER flags, the minimum allowed value. maxValue string ( Int64Value format) For INTEGER flags, the maximum allowed value. requiresRestart boolean Indicates whether changing this flag will trigger a database restart.
- Enums SQL FLAG SCOPE UNSPECIFIED Assume database flags if unspecified SQL FLAG SCOPE DATABASE database flags SQL FLAG SCOPE CONNECTION POOL connection pool configuration flags Methods list Lists all available database flags for Cloud SQL instances.
- Home Documentation Databases Cloud SQL PostgreSQL Reference Send feedback REST Resource: flags Stay organized with collections Save and categorize content based on your preferences.

### "Restore an instance overview \_|\_ Cloud SQL for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/restore](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/restore)
- Source ID: `site-iam-reference`
- Final score: 23
- Re-rank relevance: N/A

Evidence snippets:
- Note: If your instance has a large number of write-ahead logs on disk and you want to save disk space, then we recommend that you slowly reduce the value of the following: transactionLogRetentionDays configuration setting expire logs days database flag binlog expire logs seconds database flag For example, to prevent performance issues, reduce the value of the flags by one day, each day, over several days.
- For more information, see Configure database flags .
- For PITR write-ahead logs that are stored on disk , that are being switched to Cloud Storage, or that are already switched to Cloud Storage, Cloud SQL retains the logs for the minimum value set for one of the following configurations: The transactionLogRetentionDays backup configuration setting The expire logs days or the binlog expire logs seconds flag Cloud SQL doesn't set any values for these flags if the write-ahead logs are stored on disk, are being switched to Cloud Storage, or have already been switched to Cloud Storage.
- Requirements for restoring to a new instance When you restore your instance to a new instance, note the following requirements: The target instance must have the same database version as the instance from which the backup was taken.

