---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:57:14.556Z"
product_name: "Cloud SQL for SQL Server"
product_slug: "cloud-sql-for-sql-server"
feature_name: "Transaction log backup import"
feature_slug: "transaction-log-backup-import"
latest_feature_date: "2023-10-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/sqlserver/import-export/import-export-bak"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/Backups/ListBackups"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backups"
keywords:
  - "transaction"
  - "log"
  - "backup"
  - "import"
  - "sql"
  - "supports"
  - "importing"
  - "backups"
---

# Transaction log backup import

Product: Cloud SQL for SQL Server
Coverage: MEDIUM

## Step 02 Summary

Cloud SQL supports importing transaction log backups to help reduce migration downtime.

## Extended Definition

Cloud SQL supports importing transaction log backups to help reduce migration downtime.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/sqlserver/import-export/import-export-bak](https://docs.cloud.google.com/sql/docs/sqlserver/import-export/import-export-bak)
- [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/Backups/ListBackups](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/Backups/ListBackups)
- [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backups](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backups)

## Supporting Pages

### "Export and import using BAK files and transaction log files \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/import-export/import-export-bak](https://docs.cloud.google.com/sql/docs/sqlserver/import-export/import-export-bak)
- Source ID: `site-docs-root`
- Final score: 224
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This is because importing a database backup with --no-recovery is a prerequisite for importing transaction log backups.
- Cloud SQL doesn't support importing transaction log backups on instances that are enabled with point-in-time recovery.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ INSTANCE ID /import" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ TARGET INSTANCE ID ", "status": "PENDING", "insertTime": "2020-01-21T22:43:37.981Z", "operationType": "IMPORT", "importContext": { "uri": {uri}, "database": DATABASE NAME , "kind": "sql#importContext", "fileType": "BAK", "bakImportOptions": { "noRecovery": false, "bakType": TLOG, "recoveryOnly": false } }, "name": " OPERATION ID ", "targetId": " INSTANCE ID ", "selfLink": "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /operations/ OPERATION ID ", "targetProject": " PROJECT ID " } Repeat this step until all transaction log backups are imported.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ INSTANCE ID /import" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ TARGET INSTANCE ID ", "status": "PENDING", "insertTime": "2020-01-21T22:43:37.981Z", "operationType": "IMPORT", "importContext": { "uri": {uri}, "database": DATABASE NAME , "kind": "sql#importContext", "fileType": "BAK", "bakImportOptions": { "noRecovery": false, "bakType": TLOG, "recoveryOnly": false } }, "name": " OPERATION ID ", "targetId": " INSTANCE ID ", "selfLink": "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /operations/ OPERATION ID ", "targetProject": " PROJECT ID " } Repeat this step until all transaction log backups are imported.

### "Method: Backups.ListBackups \_|\_ Cloud SQL for SQL Server \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/Backups/ListBackups](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/Backups/ListBackups)
- Source ID: `site-api-reference`
- Final score: 162
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If successful, the response body contains data with the following structure: JSON representation { "backups" : [ { object ( Backup ) } ] , "nextPageToken" : string , "warnings" : [ { object ( ApiWarning ) } ] } Fields backups[] object ( Backup ) A list of backups. nextPageToken string A token, which can be sent as pageToken to retrieve the next page.
- Home Documentation Databases Cloud SQL SQL Server Reference Send feedback Method: Backups.ListBackups Stay organized with collections Save and categorize content based on your preferences.
- When paginating, all other parameters provided to Backups.ListBackups must match the call that provided the page token. filter string Multiple filter queries are separated by spaces.
- Any values that you set, which are greater than 2,000, are changed to 2,000. pageToken string A page token, received from a previous Backups.ListBackups call.

### "Cloud SQL backups overview \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backups](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backups)
- Source ID: `site-docs-reference-required-4`
- Final score: 147
- Re-rank relevance: N/A

Evidence snippets:
- Backup options Cloud SQL offers two backup service options to manage your instance's backups: Enhanced backups : backups are managed and stored in a centralized backup management project that leverages the Backup and DR Service, and provides enforced retention, granular scheduling, and monitoring.
- For standard backups, since instance names can be used after an instance is deleted in Cloud SQL, retained backups are stored in your Google Cloud project with a field called instance deletion time .
- Home Documentation Databases Cloud SQL SQL Server Guides Send feedback Cloud SQL backups overview Stay organized with collections Save and categorize content based on your preferences.
- Recovery backups Cloud SQL attempts to retain at least one last daily backup of every active instance, if there are no good backups available as part of the automated backup policy.

