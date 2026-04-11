---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:58:32.930Z"
product_name: "Cloud SQL for SQL Server"
product_slug: "cloud-sql-for-sql-server"
feature_name: "default database collation"
feature_slug: "default-database-collation"
latest_feature_date: "2020-09-21"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/sqlserver/create-instance"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-databases"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/release-notes"
keywords:
  - "default"
  - "database"
  - "collation"
  - "sql"
  - "for"
  - "server"
  - "lets"
  - "you"
---

# default database collation

Product: Cloud SQL for SQL Server
Coverage: LOW

## Step 02 Summary

Cloud SQL for SQL Server lets you set the default collation for databases in an instance.

## Extended Definition

Cloud SQL for SQL Server lets you set the default collation for databases in an instance.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance)
- [https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-databases](https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-databases)
- [https://docs.cloud.google.com/sql/docs/sqlserver/release-notes](https://docs.cloud.google.com/sql/docs/sqlserver/release-notes)

## Supporting Pages

### Create instances \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance)
- Source ID: `site-docs-root`
- Final score: 256
- Re-rank relevance: N/A

Evidence snippets:
- Set the password for the user: gcloud sql users set-password sqlserver no-host --instance =[ INSTANCE NAME ] \ --password =[ PASSWORD ] Terraform To create an instance, use a Terraform resource . resource "google sql database instance" "default" { name = "sqlserver-instance" region = "us-central1" database version = "SQLSERVER 2019 STANDARD" root password = "INSERT-PASSWORD-HERE" settings { tier = "db-custom-2-7680" } } Apply the changes To apply your Terraform configuration in a Google Cloud project, complete the steps in the following sections.
- The collation field (not shown in the following basic API call) lets you to set a default value for the type of collation used for the databases in your instance.
- The collation field (not shown in the following basic API call) lets you set a default value for the type of collation used for the databases in your instance.
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID " Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#instance", "state": "RUNNABLE", "databaseVersion": " DATABASE VERSION ", "settings": { "authorizedGaeApplications": [], "tier": " MACHINE TYPE ", "kind": "sql#settings", "pricingPlan": "PER USE", "replicationType": "SYNCHRONOUS", "activationPolicy": "ALWAYS", "ipConfiguration": { "authorizedNetworks": [], "ipv4Enabled": true }, "locationPreference": { "zone": " ZONE ", "kind": "sql#locationPreference" }, "dataDiskType": "PD SSD", "backupConfiguration": { "startTime": "19:00", "kind": "sql#backupConfiguration", "enabled": true }, "settingsVersion": "1", "dataDiskSizeGb": "10" }, "etag": "--redacted--", "ipAddresses": [ { "type": "PRIMARY", " ipAddress ": " 10.0.0.1 " } ], "serverCaCert": { ... }, "instanceType": "CLOUD SQL INSTANCE", "project": " PROJECT ID ", "serviceAccountEmailAddress": "redacted@gcp-sa-cloud-sql.iam.gserviceaccount.com", "backendType": " BACKEND TYPE ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID ", "connectionName": " PROJECT ID:REGION:INSTANCE ID ", "name": " INSTANCE ID ", "region": " REGION ", "gceZone": " ZONE " } To see how the underlying REST API request is constructed for this task, see the APIs Explorer on the instances:insert page .

### "Create and manage databases \_|\_ Cloud SQL for SQL Server \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-databases](https://docs.cloud.google.com/sql/docs/sqlserver/create-manage-databases)
- Source ID: `site-docs-root`
- Final score: 244
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For information about collations in SQL Server, see Collation and Unicode Support in the SQL Server documentation. gcloud sql databases create DATABASE NAME \ --instance = INSTANCE NAME \ [ --charset = CHARSET ] \ [ --collation = COLLATION ] Terraform To create a database, use a Terraform resource . resource "google sql database" "database" { name = "my-database" instance = google sql database instance.instance.name } Apply the changes To apply your Terraform configuration in a Google Cloud project, complete the steps in the following sections.
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id /databases" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "kind": "sql#database", "charset": "utf8", "collation": "utf8 general ci", "etag": " etag ", "name": "sys", "instance": " instance-id ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id /databases/sys", "project": " project-id " } Note : The databases.list API supports only response payloads that include up to 4 MB of text.
- Before using any of the request data, make the following replacements: project-id : The project ID instance-id : The instance ID database-name : The name of a database inside the Cloud SQL instance HTTP method and URL: POST https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id /databases Request JSON body: { "project": " project-id ", "instance": " instance-id ", "name": " database-name " } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id /databases" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "kind": "sql#database", "charset": "utf8", "collation": "utf8 general ci", "etag": " etag ", "name": "sys", "instance": " instance-id ", "selfLink": "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id /databases/sys", "project": " project-id " } Note : The databases.list API supports only response payloads that include up to 4 MB of text.

### Cloud SQL for SQL Server release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/release-notes](https://docs.cloud.google.com/sql/docs/sqlserver/release-notes)
- Source ID: `site-docs-root`
- Final score: 244
- Re-rank relevance: N/A

Evidence snippets:
- September 21, 2020 Feature Cloud SQL for SQL Server enables you to set a default collation value for databases in an instance .
- The functions include (and are not limited to) the following: cdc.fn cdc get all changes <capture instance> Sys.fn cdc get max lsn To turn on this feature for a database, run this command: exec msdb .[ dbo ].[ gcloudsql cdc enable db ] 'demo' To turn off this feature for a database, run this command: exec msdb.[dbo].[gcloudsql cdc disable db] 'demo' Feature Cloud SQL for SQL Server enables you to perform common operations on a tempdb database .
- Specifically, the user has the CONTROL permission on the tempdb database, and can do many operations, including (and not limited to) the following: ALTER DATABASE [ tempdb ] ADD FILE ALTER DATABASE [ tempdb ] REMOVE March 29, 2021 Feature You can integrate Cloud SQL for SQL Server with Managed Service for Microsoft Active Directory.
- December 20, 2024 Feature You can use the following observability dashboards in Cloud SQL for SQL Server to monitor, analyze, and diagnose issues with your instances, databases, and queries: System insights Query insights Both of these dashboards are available to you in the Google Cloud Console.

