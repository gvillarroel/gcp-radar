---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:24:12.955Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Custom backup locations"
feature_slug: "custom-backup-locations"
latest_feature_date: "2019-05-24"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backup-options"
  - "https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/manage-standard-backups"
  - "https://docs.cloud.google.com/sql/docs/mysql/release-notes"
keywords:
  - "custom"
  - "backup"
  - "locations"
  - "sql"
  - "lets"
  - "you"
  - "specify"
  - "to"
---

# Custom backup locations

Product: Cloud SQL for MySQL
Coverage: LOW

## Step 02 Summary

Cloud SQL lets you specify backup locations to keep backup data within a single region.

## Extended Definition

Cloud SQL lets you specify backup locations to keep backup data within a single region.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backup-options](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backup-options)
- [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/manage-standard-backups](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/manage-standard-backups)
- [https://docs.cloud.google.com/sql/docs/mysql/release-notes](https://docs.cloud.google.com/sql/docs/mysql/release-notes)

## Supporting Pages

### Choose your backup option \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backup-options](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backup-options)
- Source ID: `site-iam-reference`
- Final score: 242
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Custom backup locations Cloud SQL lets you select a custom location for your backup data.
- Default backup locations If you don't specify a storage location, then your backups are stored in the multi-region that is geographically closest to the location of your Cloud SQL instance.
- You can select any available Cloud SQL location and multi-region location when choosing your custom backup location.
- The plan containing your backup and restore settings is stored in the centralized backup project, and any backups created when the plan is active on your Cloud SQL instance are stored in the backup vault in the backups project.

### Manage standard backups \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/manage-standard-backups](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/manage-standard-backups)
- Source ID: `site-iam-reference`
- Final score: 216
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method DELETE -Headers $headers -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id /backupRuns/ backup-id " Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id ", "status": "PENDING", "user": "user@example.com", "insertTime": "2020-01-21T22:43:37.981Z", "operationType": "DELETE BACKUP", "name": " operation-id ", "targetId": " instance-id ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /operations/ operation-id ", "targetProject": " project-id " } Set a custom location for backups Only use a custom backup location if required by regulation.
- To create a backup in a custom location: gcloud sql backups create \ --async \ --instance = INSTANCE NAME \ --location = BACKUP LOCATION REST v1 Before using any of the request data, make the following replacements: project-id : The project ID instance-id : The instance ID HTTP method and URL: POST https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id /backupRuns To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Click Save . gcloud For reference information, see gcloud sql instances patch . gcloud sql instances patch INSTANCE NAME \ --backup-location = BACKUP LOCATION Terraform To specify a custom location for a database instance backup, use a Terraform resource . resource "google sql database instance" "default" { name = "mysql-instance-with-backup-location" region = "asia-northeast1" database version = "MYSQL 8 0" settings { tier = "db-f1-micro" backup configuration { enabled = true location = "asia-northeast1" } } } REST v1 Use the instance's settings.backupConfiguration.location parameter for the backup location.
- View the details of a backup by specifying the backup ID from the output of the backups list command. gcloud sql backups describe BACKUP ID \ --instance INSTANCE NAME REST v1 You can also use the APIs Explorer on the BackupRuns:list page to send the REST API request.

### Cloud SQL for MySQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/release-notes](https://docs.cloud.google.com/sql/docs/mysql/release-notes)
- Source ID: `site-docs-root`
- Final score: 214
- Re-rank relevance: N/A

Evidence snippets:
- This feature lets you restore a Cloud SQL instance to a project other than the project where either the source instance or the backup vault is located.
- This feature lets you store your backup data in multi-region storage locations, providing higher availability and protection against regional outages.
- November 14, 2024 Feature You can now create custom organization policies for the BackupRun resource in Cloud SQL instances.
- May 24, 2019 Feature Cloud SQL now allows you to specify a location for backups, and to restrict data to a single region.

