---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:57:14.545Z"
product_name: "Cloud SQL for SQL Server"
product_slug: "cloud-sql-for-sql-server"
feature_name: "BackupRun custom organization policies"
feature_slug: "backuprun-custom-organization-policies"
latest_feature_date: "2024-11-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-standard-backups"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/backupRuns"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/quotas"
keywords:
  - "backuprun"
  - "custom"
  - "organization"
  - "policies"
  - "sql"
  - "supports"
  - "resource"
---

# BackupRun custom organization policies

Product: Cloud SQL for SQL Server
Coverage: MEDIUM

## Step 02 Summary

Cloud SQL supports custom organization policies for the BackupRun resource.

## Extended Definition

Cloud SQL supports custom organization policies for the BackupRun resource.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-standard-backups](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-standard-backups)
- [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/backupRuns](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/backupRuns)
- [https://docs.cloud.google.com/sql/docs/sqlserver/quotas](https://docs.cloud.google.com/sql/docs/sqlserver/quotas)

## Supporting Pages

### "REST Resource: backupRuns \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/backupRuns](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/backupRuns)
- Source ID: `site-api-reference`
- Final score: 116
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Databases Cloud SQL SQL Server Reference Send feedback REST Resource: backupRuns Stay organized with collections Save and categorize content based on your preferences.
- Resource: BackupRun JSON representation SqlBackupRunStatus SqlBackupRunType Methods Resource: BackupRun A BackupRun resource.
- JSON representation { "kind" : string , "status" : enum ( SqlBackupRunStatus ) , "enqueuedTime" : string , "id" : string , "startTime" : string , "endTime" : string , "error" : { object ( OperationError ) } , "type" : enum ( SqlBackupRunType ) , "description" : string , "windowStartTime" : string , "instance" : string , "selfLink" : string , "location" : string , "databaseVersion" : enum ( SqlDatabaseVersion ) , "diskEncryptionConfiguration" : { object ( DiskEncryptionConfiguration ) } , "diskEncryptionStatus" : { object ( DiskEncryptionStatus ) } , "backupKind" : enum ( SqlBackupKind ) , "timeZone" : string , "maxChargeableBytes" : string } Fields kind string This is always sql#backupRun . status enum ( SqlBackupRunStatus ) The status of this run. enqueuedTime string ( Timestamp format) The time the run was enqueued in UTC timezone in RFC 3339 format, for example 2012-11-15T16:19:00.094Z .
- Methods delete Deletes the backup taken by a backup run. get Retrieves a resource containing information about a backup run. insert Creates a new backup run on demand. list Lists all backup runs associated with the project or a given instance and configuration in the reverse chronological order of the backup initiation time.

### "Manage standard backups \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-standard-backups](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/manage-standard-backups)
- Source ID: `site-docs-reference-required-4`
- Final score: 114
- Re-rank relevance: N/A

Evidence snippets:
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method DELETE -Headers $headers -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id /backupRuns/ backup-id " Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id ", "status": "PENDING", "user": "user@example.com", "insertTime": "2020-01-21T22:43:37.981Z", "operationType": "DELETE BACKUP", "name": " operation-id ", "targetId": " instance-id ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /operations/ operation-id ", "targetProject": " project-id " } Set a custom location for backups Only use a custom backup location if required by regulation.
- The number can't be less than the default (seven). gcloud sql instances patch INSTANCE NAME \ --retained-backups-count = NUM TO RETAIN Terraform To specify the number of automated backups to retain for a database instance, use a Terraform resource . resource "google sql database instance" "default" { name = "sqlserver-instance-backup-retention" region = "us-central1" database version = "SQLSERVER 2019 STANDARD" root password = "INSERT-PASSWORD-HERE" settings { tier = "db-custom-2-7680" backup configuration { enabled = true backup retention settings { retained backups = 365 retention unit = "COUNT" } } } } REST v1beta4 Before using any of the request data, make the following replacements: unit : Optional: The retention unit can either be an integer or a string.
- To create a backup in a custom location: gcloud sql backups create \ --async \ --instance = INSTANCE NAME \ --location = BACKUP LOCATION REST v1 Before using any of the request data, make the following replacements: project-id : The project ID instance-id : The instance ID HTTP method and URL: POST https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id /backupRuns To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Click Save . gcloud For reference information, see gcloud sql instances patch . gcloud sql instances patch INSTANCE NAME \ --backup-location = BACKUP LOCATION Terraform To specify a custom location for a database instance backup, use a Terraform resource . resource "google sql database instance" "default" { name = "sqlserver-instance-with-backup-location" region = "us-central1" database version = "SQLSERVER 2019 STANDARD" root password = "INSERT-PASSWORD-HERE" settings { tier = "db-custom-2-7680" backup configuration { enabled = true location = "us-central1" } } } REST v1 Use the instance's settings.backupConfiguration.location parameter for the backup location.

### Quotas and limits \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/quotas](https://docs.cloud.google.com/sql/docs/sqlserver/quotas)
- Source ID: `site-docs-root`
- Final score: 109
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- SqlBackupRunsService.Get SqlDatabasesService.Get SqlInstancesService.Get SqlOperationsService.Get SqlSslCertsService.Get SqlUsersService.Get 500 List sqladmin.googleapis.com/list The number of requests that are made per minute per user per region to use the APIs in this category.
- SqlFlagsService.List SqlTiersService.List 180 Limits There are restrictions on some Cloud SQL resources that are not replenished periodically and not shown on the Quotas page in the Google Cloud console.
- SqlBackupRunsService.Delete SqlBackupRunsService.Insert SqlDatabasesService.Delete SqlDatabasesService.Insert SqlDatabasesService.Patch SqlDatabasesService.Update SqlInstancesService.
- Home Documentation Databases Cloud SQL SQL Server Resources Send feedback Quotas and limits Stay organized with collections Save and categorize content based on your preferences.

