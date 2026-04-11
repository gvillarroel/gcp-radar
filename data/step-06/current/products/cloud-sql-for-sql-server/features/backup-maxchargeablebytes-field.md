---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:58:32.638Z"
product_name: "Cloud SQL for SQL Server"
product_slug: "cloud-sql-for-sql-server"
feature_name: "Backup maxChargeableBytes field"
feature_slug: "backup-maxchargeablebytes-field"
latest_feature_date: "2024-10-25"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/restoring"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/SqlBackupKind"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/Backups/ListBackups"
keywords:
  - "backup"
  - "maxchargeablebytes"
  - "field"
  - "sql"
  - "exposes"
  - "the"
  - "value"
  - "in"
---

# Backup maxChargeableBytes field

Product: Cloud SQL for SQL Server
Coverage: LOW

## Step 02 Summary

Cloud SQL exposes the maxChargeableBytes value in backupRuns.GET API and gcloud backup describe responses.

## Extended Definition

Cloud SQL exposes the maxChargeableBytes value in backupRuns.GET API and gcloud backup describe responses.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/restoring](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/restoring)
- [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/SqlBackupKind](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/SqlBackupKind)
- [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/Backups/ListBackups](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/Backups/ListBackups)

## Supporting Pages

### "Restore an instance using a backup \_|\_ Cloud SQL for SQL Server \_|\_\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/restoring](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/restoring)
- Source ID: `site-iam-reference`
- Final score: 236
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If your instance is using standard backups, use the gcloud sql backups list command to find a backup and record its ID value: gcloud sql backups list INSTANCE NAME Replace the following: INSTANCE NAME : the name of the instance.
- If your instance is using standard backups, use the gcloud sql backups list command to find a backup and record its ID value: gcloud sql backups list INSTANCE NAME Replace the following: INSTANCE NAME : the name of the instance.
- If your instance is using standard backups, use the gcloud sql backups list command to find a backup and record its ID value: gcloud sql backups list INSTANCE NAME Replace the following: INSTANCE NAME : the name of the instance.
- If your instance is using standard backups, use the gcloud sql backups list command to find a backup and record its ID value: gcloud sql backups list INSTANCE NAME Replace the following: INSTANCE NAME : the name of the instance.

### SqlBackupKind \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/SqlBackupKind](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/SqlBackupKind)
- Source ID: `site-api-reference`
- Final score: 216
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Databases Cloud SQL SQL Server Reference Send feedback SqlBackupKind Stay organized with collections Save and categorize content based on your preferences.
- Enums SQL BACKUP KIND UNSPECIFIED This is an unknown BackupKind.
- Defines the supported backup kinds.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-30 UTC."],[],[]]

### "Method: Backups.ListBackups \_|\_ Cloud SQL for SQL Server \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/Backups/ListBackups](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/Backups/ListBackups)
- Source ID: `site-api-reference`
- Final score: 210
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If successful, the response body contains data with the following structure: JSON representation { "backups" : [ { object ( Backup ) } ] , "nextPageToken" : string , "warnings" : [ { object ( ApiWarning ) } ] } Fields backups[] object ( Backup ) A list of backups. nextPageToken string A token, which can be sent as pageToken to retrieve the next page.
- HTTP request GET https://sqladmin.googleapis.com/v1/{parent=projects/ }/backups The URL uses gRPC Transcoding syntax.
- Authorization scopes Requires one of the following OAuth scopes: https://www.googleapis.com/auth/cloud-platform https://www.googleapis.com/auth/sqlservice.admin For more information, see the Authentication Overview .
- If this field is omitted, then there aren't subsequent pages. warnings[] object ( ApiWarning ) If a region isn't unavailable or if an unknown error occurs, then a warning message is returned.

