---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.214Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Cloud KMS Autokey support for Cloud Spanner"
feature_slug: "cloud-kms-autokey-support-for-cloud-spanner"
latest_feature_date: "2024-09-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/cmek"
  - "https://docs.cloud.google.com/spanner/docs/backup/create-manage-backup-schedules"
  - "https://docs.cloud.google.com/spanner/docs/information-schema"
keywords:
  - "autokey"
  - "customer"
  - "generated"
  - "managed"
---

# Cloud KMS Autokey support for Cloud Spanner

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Cloud Spanner can use Cloud KMS Autokey-generated customer-managed keys for CMEK encryption.

## Extended Definition

Cloud Spanner can use Cloud KMS Autokey-generated customer-managed keys for CMEK encryption.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/cmek](https://docs.cloud.google.com/spanner/docs/cmek)
- [https://docs.cloud.google.com/spanner/docs/backup/create-manage-backup-schedules](https://docs.cloud.google.com/spanner/docs/backup/create-manage-backup-schedules)
- [https://docs.cloud.google.com/spanner/docs/information-schema](https://docs.cloud.google.com/spanner/docs/information-schema)

## Supporting Pages

### "Customer-managed encryption keys (CMEK) overview \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/cmek](https://docs.cloud.google.com/spanner/docs/cmek)
- Source ID: `site-docs-root`
- Final score: 133
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Databases Spanner Guides Send feedback Customer-managed encryption keys (CMEK) overview Stay organized with collections Save and categorize content based on your preferences.
- If you want to control your encryption keys, then you can use customer-managed encryption keys (CMEKs) in Cloud KMS with CMEK-integrated services including Spanner.
- For more information about your encryption options, see Customer-managed encryption keys (CMEK) .
- With Autokey, key rings and keys are generated on demand to support resource creation in Spanner.

### Create and manage backup schedules \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/backup/create-manage-backup-schedules](https://docs.cloud.google.com/spanner/docs/backup/create-manage-backup-schedules)
- Source ID: `site-docs-root`
- Final score: 62
- Re-rank relevance: N/A

Evidence snippets:
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://spanner.googleapis.com/v1/projects/ PROJECT ID /instances/ INSTANCE ID /databases/ DATABASE ID /backupSchedules" Select-Object -Expand Content You should receive a JSON response similar to the following: { "backupSchedules": [ { "name": "projects/PROJECT ID/instances/INSTANCE ID/databases/DATABASE ID/backupSchedules/SCHEDULE ID", "retentionDuration": "172800s", "encryptionConfig": { "encryptionType": "USE DATABASE ENCRYPTION" }, "spec": { "cronSpec": { "text": "0 /12 ", "timeZone": "UTC", "creationWindow": "14400s" } }, "fullBackupSpec": {}, "updateTime": "2024-09-09T07:21:43.946180Z" }, { "name": "projects/PROJECT ID/instances/INSTANCE ID/databases/DATABASE ID/backupSchedules/SCHEDULE ID", "retentionDuration": "2592000s", "encryptionConfig": { "encryptionType": "CUSTOMER MANAGED ENCRYPTION", "kmsKeyName": "projects/PROJECT ID/locations/us-central1/keyRings/cmek-demo/cryptoKeys/test-key" }, "spec": { "cronSpec": { "text": "30 12 ", "timeZone": "UTC", "creationWindow": "14400s" } }, "fullBackupSpec": {}, "updateTime": "2024-09-17T18:27:53.868741Z" } ] } Client libraries C# using Google.Cloud.Spanner.Admin.Database.V1 ; using Google.Cloud.Spanner.Common.V1 ; using System ; using System.Collections.Generic ; public class ListBackupSchedulesSample { public IEnumerable<BackupSchedule> ListBackupSchedules ( string projectId , string instanceId , string databaseId ) { DatabaseAdminClient client = DatabaseAdminClient .
- Possible values are USE DATABASE ENCRYPTION , GOOGLE DEFAULT ENCRYPTION , or CUSTOMER MANAGED ENCRYPTION .
- Possible values are USE DATABASE ENCRYPTION , GOOGLE DEFAULT ENCRYPTION , or CUSTOMER MANAGED ENCRYPTION .
- Valid values are USE DATABASE ENCRYPTION , GOOGLE DEFAULT ENCRYPTION , or CUSTOMER MANAGED ENCRYPTION .

### "Information schema for GoogleSQL-dialect databases \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/information-schema](https://docs.cloud.google.com/spanner/docs/information-schema)
- Source ID: `site-docs-reference`
- Final score: 55
- Re-rank relevance: N/A

Evidence snippets:
- Tables with a PRIMARY KEY specification have a pseudo-index entry generated with the name PRIMARY KEY , which allows the fields of the primary key to be determined.
- IDENTITY GENERATION STRING A string that specifies whether the column permits only generated, and not custom user-inserted, values.
- A new stored generated column added to an existing table may go through multiple user-observable states before it is fully usable.
- IS IDENTITY STRING A string that is set to YES if the generated column is an identity column, and NO otherwise.

