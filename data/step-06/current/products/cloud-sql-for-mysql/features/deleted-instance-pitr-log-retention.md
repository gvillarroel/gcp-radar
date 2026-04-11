---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:24:12.809Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Deleted instance PITR log retention"
feature_slug: "deleted-instance-pitr-log-retention"
latest_feature_date: "2025-09-23"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/pitr"
  - "https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/restore"
  - "https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/configure-pitr"
keywords:
  - "deleted"
  - "instance"
  - "pitr"
  - "log"
  - "retention"
  - "this"
  - "retains"
  - "point"
---

# Deleted instance PITR log retention

Product: Cloud SQL for MySQL
Coverage: LOW

## Step 02 Summary

This feature retains point-in-time recovery logs after instance deletion so the deleted instance can be restored to a specific time.

## Extended Definition

This feature retains point-in-time recovery logs after instance deletion so the deleted instance can be restored to a specific time.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/pitr](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/pitr)
- [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/restore](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/restore)
- [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/configure-pitr](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/configure-pitr)

## Supporting Pages

### "Perform point-in-time recovery (PITR) \_|\_ Cloud SQL for MySQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/pitr](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/pitr)
- Source ID: `site-iam-reference`
- Final score: 188
- Re-rank relevance: N/A

Evidence snippets:
- If the instance is unavailable and the instance logs are stored in Cloud Storage , or the instance was deleted and had PITR retention enabled , then you can retrieve the earliest and latest recovery time, and perform the PITR to any timestamp in that window.
- Restore using PITR Before using any of the request data, make the following replacements: project-id : the project ID target-instance-id : the target instance ID source-instance-id : the source instance ID source-instance-deletion-time : the deletion time of the source instance restore-timestamp the point-in-time which you want to restore the instance HTTP method and URL: POST https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ source-instance-id /clone Request JSON body: { "cloneContext": { "kind": "sql#cloneContext", "destinationInstanceName": " target-instance-id ", "sourceInstanceDeletionTime: " source-instance-deletion-time ", "pointInTime": " restore-timestamp " } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Restore using a PITR Before using any of the request data, make the following replacements: project-id : the project ID target-instance-id : the target instance ID source-instance-id : the source instance ID source-instance-deletion-time : the deletion time of the source instance restore-timestamp the point-in-time which you want to restore the instance HTTP method and URL: POST https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ source-instance-id /clone Request JSON body: { "cloneContext": { "kind": "sql#cloneContext", "destinationInstanceName": " target-instance-id ", "sourceInstanceDeletionTime: " source-instance-deletion-time ", "pointInTime": " restore-timestamp " } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- HTTP method and URL: POST https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID :pointInTimeRestore Request JSON body: { "datasource": " DATASOURCE ", "pointInTime": " PITR TIMESTAMP ", "targetInstanceName": " TARGET INSTANCE NAME ", "region": " REGION " } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

### "Restore an instance overview \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/restore](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/restore)
- Source ID: `site-docs-root`
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- Since instance names can be reused after an instance is deleted in Cloud SQL, retained PITR logs can be identified in Google Cloud with the following fields: instance deletion time log retention days These fields allow you to identify if a PITR log belongs to a deleted instance.
- For example, if your Cloud SQL Enterprise Plus edition instance has PITR retention set to 14 days, then the latest PITR log will be deleted 14 days after instance deletion.
- After an instance is deleted, the PITR logs continue to follow the retention settings defined by the instance when it was live.
- The PITR logs expire based on the retention settings on a rolling basis after the instance is deleted.

### "Configure point-in-time recovery (PITR) \_|\_ Cloud SQL for MySQL \_|\_\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/configure-pitr](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/configure-pitr)
- Source ID: `site-iam-reference`
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- Terraform To enable PITR, use a Terraform resource . resource "google sql database instance" "default" { name = "mysql-instance-pitr" region = "asia-northeast1" database version = "MYSQL 8 0" settings { tier = "db-f1-micro" backup configuration { enabled = true binary log enabled = true start time = "20:55" transaction log retention days = "3" } } } Apply the changes To apply your Terraform configuration in a Google Cloud project, complete the steps in the following sections.
- You can configure PITR for any existing instance by doing the following: Enable PITR Disable PITR Set transaction log retention Check storage location of transaction logs used in PITR Switch transaction log storage to Cloud storage Before you begin Before you begin, review the following: If you enable PITR on an existing instance, then the instance restarts.
- This instance is already storing transaction logs used for PITR in Cloud Storage To verify the storage location of the transaction logs, run the command in Check the storage location of transaction logs used for PITR .
- Cloud SQL only retains logs on disk for the minimum value of one of the following: the transactionLogRetentionDays PITR configuration setting before the switch.

