---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:45:01.319Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "Preferred zone selection for clone operations"
feature_slug: "preferred-zone-selection-for-clone-operations"
latest_feature_date: "2024-09-03"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/clone-instance"
  - "https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/pitr"
  - "https://docs.cloud.google.com/sql/docs/postgres/release-notes"
keywords:
  - "preferred"
  - "zone"
  - "selection"
  - "for"
  - "clone"
  - "operations"
  - "can"
  - "specify"
---

# Preferred zone selection for clone operations

Product: Cloud SQL for PostgreSQL
Coverage: LOW

## Step 02 Summary

Clone operations can specify preferred zones for zonal instances and preferred primary and secondary zones for regional instances.

## Extended Definition

Clone operations can specify preferred zones for zonal instances and preferred primary and secondary zones for regional instances.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/clone-instance](https://docs.cloud.google.com/sql/docs/postgres/clone-instance)
- [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/pitr](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/pitr)
- [https://docs.cloud.google.com/sql/docs/postgres/release-notes](https://docs.cloud.google.com/sql/docs/postgres/release-notes)

## Supporting Pages

### Clone instances \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/clone-instance](https://docs.cloud.google.com/sql/docs/postgres/clone-instance)
- Source ID: `site-iam-reference`
- Final score: 184
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If you don't specify values for either the --preferred-zone or --preferred-secondary-zone parameters, then the cloned instance has the same primary and secondary zones as the source instance.
- If you don't specify values for either the preferredZone or preferredSecondaryZone parameters, then the cloned instance has the same primary and secondary zones as the source instance.
- If you don't specify values for either the preferredZone or preferredSecondaryZone parameters, then the cloned instance has the same primary and secondary zones as the source instance.
- If you clone a high-availability (regional) instance, then you can specify different primary and secondary zones for the instance.

### "Perform point-in-time recovery (PITR) \_|\_ Cloud SQL for PostgreSQL \_\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/pitr](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/pitr)
- Source ID: `site-iam-reference`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ source-instance-id /clone" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ target-instance-id ", "status": "PENDING", "user": "user@example.com", "insertTime": "2020-01-21T22:43:37.981Z", "operationType": "CREATE", "name": " operation-id ", "targetId": " target-instance-id ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /operations/ operation-id ", "targetProject": " project-id " } Perform a PITR using the backup vault If your Cloud SQL instance is enabled to use enhanced backups , then you can perform point-in-time-recovery for your instance using the backup vault.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID :pointInTimeRestore" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ TARGET INSTANCE NAME ", "status": "PENDING", "user": "user@example.com", "insertTime": "2020-01-21T22:43:37.981Z", "operationType": "CLONE", "name": " OPERATION ID ", "targetId": " TARGET INSTANCE NAME ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /operations/ OPERATION ID ", "targetProject": " PROJECT ID " } Perform a cross-project PITR With enhanced backups, you can restore a Cloud SQL instance to a project other than the one where either the source instance or backup vault is located.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ source-instance-id /clone" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ target-instance-id ", "status": "PENDING", "user": "user@example.com", "insertTime": "2020-01-21T22:43:37.981Z", "operationType": "CREATE", "name": " operation-id ", "targetId": " target-instance-id ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /operations/ operation-id ", "targetProject": " project-id " } Get the earliest and latest recovery time For an available instance, you can perform a PITR to any timestamp in the instance's PITR window.
- In all cases, you can restore the instance to a different primary or secondary zone by providing values for the preferred zones. gcloud Unavailable instance To get the earliest and latest time to which you can recover a Cloud SQL instance that's not available, run the following command: gcloud sql instances get-latest-recovery-time INSTANCE NAME Replace the following: INSTANCE NAME : the name of the instance you want to find the latest recovery time for.

### Cloud SQL for PostgreSQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/release-notes](https://docs.cloud.google.com/sql/docs/postgres/release-notes)
- Source ID: `site-docs-root`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- When you clone your zonal instance, you can now specify a preferred zone for the instance.
- You can also specify preferred primary and secondary zones for your regional instance.
- Use this flag when you're deciding whether to run a VACUUM . autovacuum vacuum insert threshold : specify the minimum number of inserted records or rows (tuples) that you need to run a VACUUM in any database table. effective io concurrency : set the number of concurrent disk I/O operations that can run simultaneously. hash mem multiplier : compute the maximum amount of memory that hash-based operations can use. logical decoding work mem : specify the maximum amount of memory that logical decoding can use before some of the decoded changes are written to a local disk. maintenance io concurrency : set the number of concurrent disk I/O operations that can run simultaneously for maintenance work that's done for client sessions. vacuum failsafe age : specify the maximum age (in transactions) that a database table's pg class.relfrozenxid field can attain before a VACUUM takes extraordinary measures to avoid a system-wide wraparound failure for transaction IDs. vacuum multixact failsafe age : specify the maximum age (in multiple transactions) that a database table's pg class.relminmxid field can attain before a VACUUM takes extraordinary measures to avoid a system-wide wraparound failure for multiple transaction IDs.
- If the zones for your instance go down in the future, then Cloud SQL can assign the preferred zones to the instance, and you don't experience downtime.

