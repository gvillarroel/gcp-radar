---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:24:12.823Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Final backup before instance deletion"
feature_slug: "final-backup-before-instance-deletion"
latest_feature_date: "2025-02-20"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backup-options"
  - "https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backups"
  - "https://docs.cloud.google.com/sql/docs/mysql/create-instance"
keywords:
  - "final"
  - "backup"
  - "before"
  - "instance"
  - "deletion"
  - "lets"
  - "you"
  - "create"
---

# Final backup before instance deletion

Product: Cloud SQL for MySQL
Coverage: LOW

## Step 02 Summary

Final backup lets you create a backup before deleting a Cloud SQL instance so the data can be restored to a new instance.

## Extended Definition

Final backup lets you create a backup before deleting a Cloud SQL instance so the data can be restored to a new instance.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backup-options](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backup-options)
- [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backups](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backups)
- [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance)

## Supporting Pages

### Choose your backup option \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backup-options](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backup-options)
- Source ID: `site-iam-reference`
- Final score: 198
- Re-rank relevance: N/A

Evidence snippets:
- If you elect to take a final backup of your instance prior to deletion, then you can set the backup retention for the final backup for up to 10 years as well.
- Note: If your instance was created before the enhanced backups launch , then your instance is using the standard backups option.
- You can retain backups after instance deletion, or take a final backup of your instance prior to deletion.
- You can also select to retain all backups and take a final backup of your data at instance deletion.

### "Cloud SQL backups overview \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backups](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backups)
- Source ID: `site-docs-root`
- Final score: 194
- Re-rank relevance: N/A

Evidence snippets:
- If you create a new instance with the final backup instance setting enabled, then you must update the final backup organization policy to apply the backup configurations to the primary instance only.
- Note: If your instance was created before the enhanced backups launch , then your instance is using the standard backups option.
- Final backup Final backups let you take a backup of your Cloud SQL instance before you delete the instance.
- You can use the final backup to either create a new instance, or to restore to an existing instance.

### Create instances \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance)
- Source ID: `site-docs-root`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PUT -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id /users?host=%25&name=root" Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id ", "status": "DONE", "user": "user@example.com", "insertTime": "2019-09-26T14:32:30.592Z", "startTime": "2019-09-26T14:32:30.594Z", "endTime": "2019-09-26T14:32:33.518Z", "operationType": "UPDATE USER", "name": " operation-id ", "targetId": " instance-id ", "selfLink": "https://sqladmin.googleapis.com/v1/projects/ project-id /operations/ operation-id ", "targetProject": " project-id " } Retrieve the IPv4 address Retrieve the automatically assigned IPv4 address for the new instance: Before using any of the request data, make the following replacements: project-id : your project ID instance-id : instance ID created in prior step HTTP method and URL: GET https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Set the password for the "root@%" MySQL user: gcloud sql users set-password root \ --host = % \ --instance INSTANCE NAME \ --password PASSWORD Terraform To create an instance, use a Terraform resource . resource "google sql database instance" "mysql pvp instance name" { name = "mysql-pvp-instance-name" region = "asia-northeast1" database version = "MYSQL 8 0" root password = "abcABC123!" settings { tier = "db-f1-micro" password validation policy { min length = 6 complexity = "COMPLEXITY DEFAULT" reuse interval = 2 disallow username substring = true enable password policy = true } } set deletion protection to true, will ensure that one cannot accidentally delete this instance by use of Terraform whereas deletion protection enabled flag protects this instance at the GCP level. deletion protection = false } Apply the changes To apply your Terraform configuration in a Google Cloud project, complete the steps in the following sections.
- Update the root password When the instance finishes initializing, update the root password: Before using any of the request data, make the following replacements: project-id : your project ID instance-id : instance ID created in prior step root-password : desired root password HTTP method and URL: PUT https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id /users?host=%25&name=root Request JSON body: { "name": "root", "host": "%", "password": " root-password " } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Update the root password When the instance finishes initializing, update the root password: Before using any of the request data, make the following replacements: project-id : your project ID instance-id : instance ID created in prior step root-password : desired root password HTTP method and URL: PUT https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id /users?host=%25&name=root Request JSON body: { "name": "root", "host": "%", "password": " root-password " } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

