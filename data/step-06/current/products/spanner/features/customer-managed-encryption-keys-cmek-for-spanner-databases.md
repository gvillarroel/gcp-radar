---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.321Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Customer-managed encryption keys (CMEK) for Spanner databases"
feature_slug: "customer-managed-encryption-keys-cmek-for-spanner-databases"
latest_feature_date: "2021-03-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/cmek"
  - "https://docs.cloud.google.com/spanner/docs/backup"
  - "https://docs.cloud.google.com/spanner/docs/backup/create-manage-backup-schedules"
keywords:
  - "encryption"
  - "customer"
  - "cmek"
  - "managed"
  - "databases"
  - "keys"
---

# Customer-managed encryption keys (CMEK) for Spanner databases

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Cloud Spanner now supports using Customer-Managed Encryption Keys (CMEK) to encrypt databases.

## Extended Definition

Cloud Spanner now supports using Customer-Managed Encryption Keys (CMEK) to encrypt databases.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/cmek](https://docs.cloud.google.com/spanner/docs/cmek)
- [https://docs.cloud.google.com/spanner/docs/backup](https://docs.cloud.google.com/spanner/docs/backup)
- [https://docs.cloud.google.com/spanner/docs/backup/create-manage-backup-schedules](https://docs.cloud.google.com/spanner/docs/backup/create-manage-backup-schedules)

## Supporting Pages

### "Customer-managed encryption keys (CMEK) overview \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/cmek](https://docs.cloud.google.com/spanner/docs/cmek)
- Source ID: `site-docs-root`
- Final score: 257
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Databases Spanner Guides Send feedback Customer-managed encryption keys (CMEK) overview Stay organized with collections Save and categorize content based on your preferences.
- If you want to control your encryption keys, then you can use customer-managed encryption keys (CMEKs) in Cloud KMS with CMEK-integrated services including Spanner.
- Geo-partitioning You can use CMEK or Google-owned and Google-managed encryption keys to protect Spanner databases that use geo-partitioning .
- For more information about your encryption options, see Customer-managed encryption keys (CMEK) .

### Backups overview \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/backup](https://docs.cloud.google.com/spanner/docs/backup)
- Source ID: `site-docs-root`
- Final score: 149
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Encryption Spanner backups, like databases, are encrypted by either Google-owned and Google-managed encryption keys or by customer-managed encryption keys (CMEK) .
- A copied backup uses the same encryption configuration, either Google-owned and Google-managed encryption keys or customer-managed encryption keys (CMEK) , as its source backup encryption.
- If you want the backup schedule to create backups that are encrypted by CMEK keys, you need to specify the key path.
- By default, a backup uses the same encryption configuration as its database, but you can override this behavior by specifying a different encryption configuration when creating the backup.

### Create and manage backup schedules \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/backup/create-manage-backup-schedules](https://docs.cloud.google.com/spanner/docs/backup/create-manage-backup-schedules)
- Source ID: `site-docs-root`
- Final score: 131
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://spanner.googleapis.com/v1/projects/ PROJECT ID /instances/ INSTANCE ID /databases/ DATABASE ID /backupSchedules" Select-Object -Expand Content You should receive a JSON response similar to the following: { "backupSchedules": [ { "name": "projects/PROJECT ID/instances/INSTANCE ID/databases/DATABASE ID/backupSchedules/SCHEDULE ID", "retentionDuration": "172800s", "encryptionConfig": { "encryptionType": "USE DATABASE ENCRYPTION" }, "spec": { "cronSpec": { "text": "0 /12 ", "timeZone": "UTC", "creationWindow": "14400s" } }, "fullBackupSpec": {}, "updateTime": "2024-09-09T07:21:43.946180Z" }, { "name": "projects/PROJECT ID/instances/INSTANCE ID/databases/DATABASE ID/backupSchedules/SCHEDULE ID", "retentionDuration": "2592000s", "encryptionConfig": { "encryptionType": "CUSTOMER MANAGED ENCRYPTION", "kmsKeyName": "projects/PROJECT ID/locations/us-central1/keyRings/cmek-demo/cryptoKeys/test-key" }, "spec": { "cronSpec": { "text": "30 12 ", "timeZone": "UTC", "creationWindow": "14400s" } }, "fullBackupSpec": {}, "updateTime": "2024-09-17T18:27:53.868741Z" } ] } Client libraries C# using Google.Cloud.Spanner.Admin.Database.V1 ; using Google.Cloud.Spanner.Common.V1 ; using System ; using System.Collections.Generic ; public class ListBackupSchedulesSample { public IEnumerable<BackupSchedule> ListBackupSchedules ( string projectId , string instanceId , string databaseId ) { DatabaseAdminClient client = DatabaseAdminClient .
- Possible values are USE DATABASE ENCRYPTION , GOOGLE DEFAULT ENCRYPTION , or CUSTOMER MANAGED ENCRYPTION .
- Possible values are USE DATABASE ENCRYPTION , GOOGLE DEFAULT ENCRYPTION , or CUSTOMER MANAGED ENCRYPTION .
- Valid values are USE DATABASE ENCRYPTION , GOOGLE DEFAULT ENCRYPTION , or CUSTOMER MANAGED ENCRYPTION .

