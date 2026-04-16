---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:51.993Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Custom backup locations"
feature_slug: "custom-backup-locations"
latest_feature_date: "2019-05-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backup-options"
  - "https://docs.cloud.google.com/sql/docs/mysql/data-residency-overview"
  - "https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/manage-standard-backups"
keywords:
  - "custom"
  - "backup"
  - "locations"
  - "sql"
  - "lets"
  - "you"
  - "specify"
  - "keep"
---

# Custom backup locations

Product: Cloud SQL for MySQL
Coverage: MEDIUM

## Step 02 Summary

Cloud SQL lets you specify backup locations to keep backup data within a single region.

## Extended Definition

Cloud SQL lets you specify backup locations to keep backup data within a single region.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backup-options](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backup-options)
- [https://docs.cloud.google.com/sql/docs/mysql/data-residency-overview](https://docs.cloud.google.com/sql/docs/mysql/data-residency-overview)
- [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/manage-standard-backups](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/manage-standard-backups)

## Supporting Pages

### Choose your backup option \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backup-options](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backup-options)
- Source ID: `site-docs-reference-required-5`
- Final score: 201
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Custom backup locations Cloud SQL lets you select a custom location for your backup data.
- Default backup locations If you don't specify a storage location, then your backups are stored in the multi-region that is geographically closest to the location of your Cloud SQL instance.
- For more information about setting and view backup locations for an instance, see Set a custom location for backups and View backup locations .
- This is useful if your organization needs to comply with data residency regulations that require you to keep your backups within a specific geographic boundary.

### Manage standard backups \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/manage-standard-backups](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/manage-standard-backups)
- Source ID: `site-docs-reference-required-5`
- Final score: 151
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Click Save . gcloud For reference information, see gcloud sql instances patch . gcloud sql instances patch INSTANCE NAME \ --backup-location = BACKUP LOCATION Terraform To specify a custom location for a database instance backup, use a Terraform resource . resource "google sql database instance" "default" { name = "mysql-instance-with-backup-location" region = "asia-northeast1" database version = "MYSQL 8 0" settings { tier = "db-f1-micro" backup configuration { enabled = true location = "asia-northeast1" } } } REST v1 Use the instance's settings.backupConfiguration.location parameter for the backup location.
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method DELETE -Headers $headers -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id /backupRuns/ backup-id " Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id ", "status": "PENDING", "user": "user@example.com", "insertTime": "2020-01-21T22:43:37.981Z", "operationType": "DELETE BACKUP", "name": " operation-id ", "targetId": " instance-id ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /operations/ operation-id ", "targetProject": " project-id " } Set a custom location for backups Only use a custom backup location if required by regulation.
- The number can't be less than the default (seven). gcloud sql instances patch INSTANCE NAME \ --retained-backups-count = NUM TO RETAIN Terraform To specify the number of automated backups to retain for a database instance, use a Terraform resource . resource "google sql database instance" "default" { name = "mysql-instance-backup-retention" region = "asia-northeast1" database version = "MYSQL 8 0" settings { tier = "db-f1-micro" backup configuration { enabled = true backup retention settings { retained backups = 365 retention unit = "COUNT" } } } } REST v1beta4 Before using any of the request data, make the following replacements: unit : Optional: The retention unit can either be an integer or a string.
- To create a backup in a custom location: gcloud sql backups create \ --async \ --instance = INSTANCE NAME \ --location = BACKUP LOCATION REST v1 Before using any of the request data, make the following replacements: project-id : The project ID instance-id : The instance ID HTTP method and URL: POST https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id /backupRuns To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

### Data residency overview \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/data-residency-overview](https://docs.cloud.google.com/sql/docs/mysql/data-residency-overview)
- Source ID: `site-docs-root`
- Final score: 145
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information about backup locations, see Custom backup locations .
- You can also fine-tune policies for a constraint to specify multi-regions such as asia and europe , or regions such as us-east1 or europe-west1 , as allowed or denied locations.
- Cloud SQL also lets you add another layer of encryption to data using customer-managed encryption keys (CMEK) .
- To learn more about how Google Cloud protects customer data throughout its lifecycle, and how Google Cloud provides customers with transparency and control over their data, see Trusting your data with Google Cloud .

