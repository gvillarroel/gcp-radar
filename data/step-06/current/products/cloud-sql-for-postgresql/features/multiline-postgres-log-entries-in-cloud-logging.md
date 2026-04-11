---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:45:01.407Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "Multiline postgres.log entries in Cloud Logging"
feature_slug: "multiline-postgres-log-entries-in-cloud-logging"
latest_feature_date: "2021-09-14"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/audit-logging"
  - "https://docs.cloud.google.com/sql/docs/mysql/audit-logging"
  - "https://docs.cloud.google.com/sql/docs/postgres/create-instance"
keywords:
  - "multiline"
  - "postgres"
  - "log"
  - "entries"
  - "in"
  - "logging"
  - "sql"
  - "for"
---

# Multiline postgres.log entries in Cloud Logging

Product: Cloud SQL for PostgreSQL
Coverage: LOW

## Step 02 Summary

Cloud SQL for PostgreSQL records multiline postgres.log messages as a single Cloud Logging entry.

## Extended Definition

Cloud SQL for PostgreSQL records multiline postgres.log messages as a single Cloud Logging entry.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/audit-logging](https://docs.cloud.google.com/sql/docs/postgres/audit-logging)
- [https://docs.cloud.google.com/sql/docs/mysql/audit-logging](https://docs.cloud.google.com/sql/docs/mysql/audit-logging)
- [https://docs.cloud.google.com/sql/docs/postgres/create-instance](https://docs.cloud.google.com/sql/docs/postgres/create-instance)

## Supporting Pages

### Cloud SQL for PostgreSQL audit logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/audit-logging](https://docs.cloud.google.com/sql/docs/postgres/audit-logging)
- Source ID: `site-iam-reference`
- Final score: 266
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Databases Cloud SQL PostgreSQL Guides Send feedback Cloud SQL for PostgreSQL audit logging Stay organized with collections Save and categorize content based on your preferences.
- MySQL PostgreSQL SQL Server This document describes audit logging for Cloud SQL.
- For more information about Cloud Audit Logs, see the following: Types of audit logs Audit log entry structure Storing and routing audit logs Cloud Logging pricing summary Enable Data Access audit logs Service name Cloud SQL audit logs use the service name cloudsql.googleapis.com .
- Filter for this method : protoPayload.methodName="cloudsql.instances.query" reencrypt Method : cloudsql.instances.reencrypt Audit log type : Admin activity Permissions : cloudsql.instances.reencrypt - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="cloudsql.instances.reencrypt" resetSslConfig Method : cloudsql.instances.resetSslConfig Audit log type : Admin activity Permissions : cloudsql.instances.resetSslConfig - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="cloudsql.instances.resetSslConfig" restart Method : cloudsql.instances.restart Audit log type : Admin activity Permissions : cloudsql.instances.restart - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="cloudsql.instances.restart" restoreBackup Method : cloudsql.instances.restoreBackup Audit log type : Admin activity Permissions : cloudsql.instances.restoreBackup - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="cloudsql.instances.restoreBackup" rotateServerCa Method : cloudsql.instances.rotateServerCa Audit log type : Admin activity Permissions : cloudsql.instances.rotateServerCa - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="cloudsql.instances.rotateServerCa" startReplica Method : cloudsql.instances.startReplica Audit log type : Admin activity Permissions : cloudsql.instances.startReplica - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="cloudsql.instances.startReplica" stopReplica Method : cloudsql.instances.stopReplica Audit log type : Admin activity Permissions : cloudsql.instances.stopReplica - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="cloudsql.instances.stopReplica" truncateLog Method : cloudsql.instances.truncateLog Audit log type : Admin activity Permissions : cloudsql.instances.truncateLog - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="cloudsql.instances.truncateLog" update Method : cloudsql.instances.update Audit log type : Admin activity Permissions : cloudsql.instances.update - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="cloudsql.instances.update" cloudsql.operations The following audit logs are associated with methods belonging to cloudsql.operations . get Method : cloudsql.operations.get Audit log type : Data access Permissions : cloudsql.instances.get - ADMIN READ Method is a long-running or streaming operation : No.

### Cloud SQL for MySQL audit logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/audit-logging](https://docs.cloud.google.com/sql/docs/mysql/audit-logging)
- Source ID: `site-docs-root`
- Final score: 240
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- MySQL PostgreSQL SQL Server This document describes audit logging for Cloud SQL.
- For more information about Cloud Audit Logs, see the following: Types of audit logs Audit log entry structure Storing and routing audit logs Cloud Logging pricing summary Enable Data Access audit logs Service name Cloud SQL audit logs use the service name cloudsql.googleapis.com .
- Home Documentation Databases Cloud SQL MySQL Guides Send feedback Cloud SQL for MySQL audit logging Stay organized with collections Save and categorize content based on your preferences.
- Filter for this method : protoPayload.methodName="cloudsql.instances.query" reencrypt Method : cloudsql.instances.reencrypt Audit log type : Admin activity Permissions : cloudsql.instances.reencrypt - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="cloudsql.instances.reencrypt" resetSslConfig Method : cloudsql.instances.resetSslConfig Audit log type : Admin activity Permissions : cloudsql.instances.resetSslConfig - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="cloudsql.instances.resetSslConfig" restart Method : cloudsql.instances.restart Audit log type : Admin activity Permissions : cloudsql.instances.restart - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="cloudsql.instances.restart" restoreBackup Method : cloudsql.instances.restoreBackup Audit log type : Admin activity Permissions : cloudsql.instances.restoreBackup - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="cloudsql.instances.restoreBackup" rotateServerCa Method : cloudsql.instances.rotateServerCa Audit log type : Admin activity Permissions : cloudsql.instances.rotateServerCa - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="cloudsql.instances.rotateServerCa" startReplica Method : cloudsql.instances.startReplica Audit log type : Admin activity Permissions : cloudsql.instances.startReplica - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="cloudsql.instances.startReplica" stopReplica Method : cloudsql.instances.stopReplica Audit log type : Admin activity Permissions : cloudsql.instances.stopReplica - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="cloudsql.instances.stopReplica" truncateLog Method : cloudsql.instances.truncateLog Audit log type : Admin activity Permissions : cloudsql.instances.truncateLog - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="cloudsql.instances.truncateLog" update Method : cloudsql.instances.update Audit log type : Admin activity Permissions : cloudsql.instances.update - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="cloudsql.instances.update" cloudsql.operations The following audit logs are associated with methods belonging to cloudsql.operations . get Method : cloudsql.operations.get Audit log type : Data access Permissions : cloudsql.instances.get - ADMIN READ Method is a long-running or streaming operation : No.

### Create instances \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/create-instance](https://docs.cloud.google.com/sql/docs/postgres/create-instance)
- Source ID: `site-docs-root`
- Final score: 230
- Re-rank relevance: N/A

Evidence snippets:
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id " Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#instance", "state": "RUNNABLE", "databaseVersion": "MYSQL 8 0 18", "settings": { "authorizedGaeApplications": [], "tier": "db-f1-micro", "kind": "sql#settings", "pricingPlan": "PER USE", "replicationType": "SYNCHRONOUS", "activationPolicy": "ALWAYS", "ipConfiguration": { "authorizedNetworks": [], "ipv4Enabled": true }, "locationPreference": { "zone": "us-west1-a", "kind": "sql#locationPreference" }, "dataDiskType": "PD SSD", "backupConfiguration": { "startTime": "18:00", "kind": "sql#backupConfiguration", "enabled": true, "binaryLogEnabled": true }, "settingsVersion": "1", "storageAutoResizeLimit": "0", "storageAutoResize": true, "dataDiskSizeGb": "10" }, "etag": "--redacted--", "ipAddresses": [ { "type": "PRIMARY", "ipAddress": " 10.0.0.1 " } ], "serverCaCert": { ... }, "instanceType": "CLOUD SQL INSTANCE", "project": " project-id ", "serviceAccountEmailAddress": "redacted@gcp-sa-cloud-sql.iam.gserviceaccount.com", "backendType": "SECOND GEN", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id ", "connectionName": " project-id:region:instance-id ", "name": " instance-id ", "region": "us-west1", "gceZone": "us-west1-a" } Look for the ipAddress field in the response.
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id " Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#instance", "state": "RUNNABLE", "databaseVersion": "MYSQL 8 0 18", "settings": { "authorizedGaeApplications": [], "tier": "db-f1-micro", "kind": "sql#settings", "pricingPlan": "PER USE", "replicationType": "SYNCHRONOUS", "activationPolicy": "ALWAYS", "ipConfiguration": { "authorizedNetworks": [], "ipv4Enabled": true }, "locationPreference": { "zone": "us-west1-a", "kind": "sql#locationPreference" }, "dataDiskType": "PD SSD", "backupConfiguration": { "startTime": "18:00", "kind": "sql#backupConfiguration", "enabled": true, "binaryLogEnabled": true }, "settingsVersion": "1", "storageAutoResizeLimit": "0", "storageAutoResize": true, "dataDiskSizeGb": "10" }, "etag": "--redacted--", "ipAddresses": [ { "type": "PRIMARY", "ipAddress": " 10.0.0.1 " } ], "serverCaCert": { ... }, "instanceType": "CLOUD SQL INSTANCE", "project": " project-id ", "serviceAccountEmailAddress": "redacted@gcp-sa-cloud-sql.iam.gserviceaccount.com", "backendType": "SECOND GEN", "selfLink": "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id ", "connectionName": " project-id:region:instance-id ", "name": " instance-id ", "region": "us-west1", "gceZone": "us-west1-a" } Look for the ipAddress field in the response.
- HTTP method and URL: POST https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances Request JSON body: { "name": " INSTANCE ID ", "region": " REGION ", "databaseVersion": " DATABASE VERSION ", "rootPassword": " PASSWORD ", "settings": { "tier": " MACHINE TYPE ", "edition": " EDITION TYPE ", "enableGoogleMlIntegration": " true " " false " "databaseFlags": [ { "name": "cloudsql.enable google ml integration", "value": " on " " off " } ] "dataCacheConfig": { "dataCacheEnabled": DATA CACHE ENABLED }, "backupConfiguration": { "enabled": true }, "passwordValidationPolicy": { "enablePasswordPolicy": true "minLength": " MIN LENGTH ", "complexity": COMPLEXITY DEFAULT, "reuseInterval": " REUSE INTERVAL ", "disallowUsernameSubstring": " DISALLOW USERNAME SUBSTRING ", "passwordChangeInterval": " PASSWORD CHANGE INTERVAL " }, "ipConfiguration": { "privateNetwork": " PRIVATE NETWORK ", "authorizedNetworks": [ AUTHORIZED NETWORKS ], "ipv4Enabled": false, "enablePrivatePathForGoogleCloudServices": true, "serverCaMode": " CA MODE ", "serverCertificateRotationMode": " SERVER CERTIFICATE ROTATION MODE ", "customSubjectAlternativeNames": " DNS NAMES " }, "dataApiAccess": "ALLOW DATA API" }, "sqlNetworkArchitecture": "NEW NETWORK ARCHITECTURE" } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- HTTP method and URL: POST https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances Request JSON body: { "name": " INSTANCE ID ", "region": " REGION ", "databaseVersion": " DATABASE VERSION ", "rootPassword": " PASSWORD ", "settings": { "tier": " MACHINE TYPE ", "edition": " EDITION TYPE ", "enableGoogleMlIntegration": " true " " false " "databaseFlags": [ { "name": "cloudsql.enable google ml integration", "value": " on " " off " } ] "dataCacheConfig": { "dataCacheEnabled": DATA CACHE ENABLED }, "backupConfiguration": { "enabled": true }, "passwordValidationPolicy": { "enablePasswordPolicy": true "minLength": " MIN LENGTH ", "complexity": COMPLEXITY DEFAULT, "reuseInterval": " REUSE INTERVAL ", "disallowUsernameSubstring": " DISALLOW USERNAME SUBSTRING ", "passwordChangeInterval": " PASSWORD CHANGE INTERVAL " }, "ipConfiguration": { "privateNetwork": " PRIVATE NETWORK ", "authorizedNetworks": [ AUTHORIZED NETWORKS ], "ipv4Enabled": false, "enablePrivatePathForGoogleCloudServices": true, "serverCaMode": " CA MODE ", "serverCertificateRotationMode": " SERVER CERTIFICATE ROTATION MODE ", "customSubjectAlternativeNames": " DNS NAMES " }, "dataApiAccess": "ALLOW DATA API" }, "sqlNetworkArchitecture": "NEW NETWORK ARCHITECTURE" } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

