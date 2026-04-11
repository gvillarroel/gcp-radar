---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:24:12.801Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Server CA mode update"
feature_slug: "server-ca-mode-update"
latest_feature_date: "2026-02-02"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/release-notes"
  - "https://docs.cloud.google.com/sql/docs/release-notes"
  - "https://docs.cloud.google.com/sql/docs/mysql/create-instance"
keywords:
  - "server"
  - "ca"
  - "mode"
  - "update"
  - "this"
  - "lets"
  - "you"
  - "change"
---

# Server CA mode update

Product: Cloud SQL for MySQL
Coverage: LOW

## Step 02 Summary

This feature lets you change the server certificate authority mode of an existing Cloud SQL instance.

## Extended Definition

This feature lets you change the server certificate authority mode of an existing Cloud SQL instance.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/release-notes](https://docs.cloud.google.com/sql/docs/mysql/release-notes)
- [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance)

## Supporting Pages

### Cloud SQL for MySQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/release-notes](https://docs.cloud.google.com/sql/docs/mysql/release-notes)
- Source ID: `site-docs-root`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- May 08, 2025 Change If you create an instance using the Google Cloud Console, then the per-instance CA ( GOOGLE MANAGED INTERNAL CA ) option is now the default server certificate authority (CA) mode for your Cloud SQL instance.
- February 02, 2026 Feature You can now update the server certificate authority (CA) mode of an existing Cloud SQL instance.
- With server CA mode, you have two options: Per-instance CA : this is the default configuration.
- This feature automates read pool scale in and scale out operations based on one or both of the following conditions: Allowed CPU usage of the read pool Allowed number of client connections to the read pool November 13, 2025 Feature Cloud SQL for MySQL now lets you have more control over the number of results that are returned when you perform an ANN vector search with filters.

### Cloud SQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- The functions include (and are not limited to) the following: cdc.fn cdc get all changes <capture instance> Sys.fn cdc get max lsn To turn on this feature for a database, run this command: exec msdb .[ dbo ].[ gcloudsql cdc enable db ] 'demo' To turn off this feature for a database, run this command: exec msdb.[dbo].[gcloudsql cdc disable db] 'demo' Feature Cloud SQL for SQL Server enables you to perform common operations on a tempdb database .
- You can use this to track the last time that a row in a database table is modified. pg background (version 1.2): lets you run arbitrary commands in a background worker. pg squeeze (version 1.5): removes unused space from a table and lets you use an index to sort records or rows (tuples) of the table. tcn (version 1.0): provides a trigger function that notifies listeners of changes to the content of database tables.
- May 08, 2025 Cloud SQL for MySQL Change If you create an instance using the Google Cloud Console, then the per-instance CA ( GOOGLE MANAGED INTERNAL CA ) option is now the default server certificate authority (CA) mode for your Cloud SQL instance.
- Cloud SQL for PostgreSQL Change If you create an instance using the Google Cloud Console, then the per-instance CA ( GOOGLE MANAGED INTERNAL CA ) option is now the default server certificate authority (CA) mode for your Cloud SQL instance.

### Create instances \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance)
- Source ID: `site-docs-root`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- HTTP method and URL: POST https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances Request JSON body: { "name": " INSTANCE ID ", "region": " REGION ", "databaseVersion": " DATABASE VERSION ", "settings": { "tier": " MACHINE TYPE ", "edition": " EDITION TYPE ", "dataCacheConfig" { "dataCacheEnabled": DATA CACHE ENABLED }, "backupConfiguration": { "binaryLogEnabled": true, "enabled": true }, "passwordValidationPolicy": { "enablePasswordPolicy": true "minLength": " MIN LENGTH ", "complexity": COMPLEXITY DEFAULT, "reuseInterval": " REUSE INTERVAL ", "disallowUsernameSubstring": " DISALLOW USERNAME SUBSTRING ", }, "ipConfiguration": { "privateNetwork": " PRIVATE NETWORK ", "authorizedNetworks": [ AUTHORIZED NETWORKS ], "ipv4Enabled": false, "enablePrivatePathForGoogleCloudServices": true, "serverCaMode": " CA MODE ", "serverCertificateRotationMode": " SERVER CERTIFICATE ROTATION MODE ", "customSubjectAlternativeNames": " DNS NAMES " }, "dataApiAccess": "ALLOW DATA API" }, "sqlNetworkArchitecture": "NEW NETWORK ARCHITECTURE" } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- HTTP method and URL: POST https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances Request JSON body: { "name": " INSTANCE ID ", "region": " REGION ", "databaseVersion": " DATABASE VERSION ", "settings": { "tier": " MACHINE TYPE ", "edition": " EDITION TYPE ", "dataCacheConfig": { "dataCacheEnabled": DATA CACHE ENABLED }, "backupConfiguration": { "binaryLogEnabled": true, "enabled": true }, "passwordValidationPolicy": { "enablePasswordPolicy": true "minLength": " MIN LENGTH ", "complexity": COMPLEXITY DEFAULT, "reuseInterval": " REUSE INTERVAL ", "disallowUsernameSubstring": " DISALLOW USERNAME SUBSTRING " }, "ipConfiguration": { "privateNetwork": " PRIVATE NETWORK ", "authorizedNetworks": [ AUTHORIZED NETWORKS ], "ipv4Enabled": false, "enablePrivatePathForGoogleCloudServices": true, "serverCaMode": " CA MODE ", "serverCertificateRotationMode": " SERVER CERTIFICATE ROTATION MODE ", "customSubjectAlternativeNames": " DNS NAMES " }, "dataApiAccess": "ALLOW DATA API" }, "sqlNetworkArchitecture": "NEW NETWORK ARCHITECTURE" } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Set the password for the "root@%" MySQL user: gcloud sql users set-password root \ --host = % \ --instance INSTANCE NAME \ --password PASSWORD Terraform To create an instance, use a Terraform resource . resource "google sql database instance" "mysql pvp instance name" { name = "mysql-pvp-instance-name" region = "asia-northeast1" database version = "MYSQL 8 0" root password = "abcABC123!" settings { tier = "db-f1-micro" password validation policy { min length = 6 complexity = "COMPLEXITY DEFAULT" reuse interval = 2 disallow username substring = true enable password policy = true } } set deletion protection to true, will ensure that one cannot accidentally delete this instance by use of Terraform whereas deletion protection enabled flag protects this instance at the GCP level. deletion protection = false } Apply the changes To apply your Terraform configuration in a Google Cloud project, complete the steps in the following sections.
- Delete the changes To delete your changes, do the following: To disable deletion protection, in your Terraform configuration file set the deletion protection argument to false . deletion protection = "false" Apply the updated Terraform configuration by running the following command and entering yes at the prompt: terraform apply Remove resources previously applied with your Terraform configuration by running the following command and entering yes at the prompt: terraform destroy REST v1 Create the instance This example creates an instance.

