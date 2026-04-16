---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:57:14.578Z"
product_name: "Cloud SQL for SQL Server"
product_slug: "cloud-sql-for-sql-server"
feature_name: "SQL Server 2019 default version"
feature_slug: "sql-server-2019-default-version"
latest_feature_date: "2022-02-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/SqlDatabaseVersion"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/connect/get"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/create-instance"
keywords:
  - "sql"
  - "server"
  - "2019"
  - "default"
  - "version"
  - "becomes"
  - "database"
---

# SQL Server 2019 default version

Product: Cloud SQL for SQL Server
Coverage: MEDIUM

## Step 02 Summary

SQL Server 2019 becomes the default database version for Cloud SQL for SQL Server.

## Extended Definition

SQL Server 2019 becomes the default database version for Cloud SQL for SQL Server.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/SqlDatabaseVersion](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/SqlDatabaseVersion)
- [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/connect/get](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/connect/get)
- [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance)

## Supporting Pages

### SqlDatabaseVersion \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/SqlDatabaseVersion](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/SqlDatabaseVersion)
- Source ID: `site-api-reference`
- Final score: 148
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- SQLSERVER 2019 ENTERPRISE The database version is SQL Server 2019 Enterprise.
- SQLSERVER 2019 STANDARD The database version is SQL Server 2019 Standard.
- SQLSERVER 2019 EXPRESS The database version is SQL Server 2019 Express.
- SQLSERVER 2019 WEB The database version is SQL Server 2019 Web.

### Create instances \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance)
- Source ID: `site-docs-root`
- Final score: 119
- Re-rank relevance: N/A

Evidence snippets:
- Set the password for the user: gcloud sql users set-password sqlserver no-host --instance =[ INSTANCE NAME ] \ --password =[ PASSWORD ] Terraform To create an instance, use a Terraform resource . resource "google sql database instance" "default" { name = "sqlserver-instance" region = "us-central1" database version = "SQLSERVER 2019 STANDARD" root password = "INSERT-PASSWORD-HERE" settings { tier = "db-custom-2-7680" } } Apply the changes To apply your Terraform configuration in a Google Cloud project, complete the steps in the following sections.
- The following sections show the vCPU and memory configuration for each database version and machine type: SQL Server 2017 Express, SQL Server 2019 Express, SQL Server 2022 Express, and SQL Server 2025 Express Machine type vCPU/Memory Not applicable 1 vCPU, 3.75 GB 2 vCPUs, 8 GB 4 vCPUs, 16 GB 8 vCPUs, 32 GB Custom 1 to 8 vCPUs, 3.75 GB to 52 GB SQL Server 2017 Web, SQL Server 2019 Web, and SQL Server 2022 Web Important : SQL Server Web edition software can only be used to support public and internet-accessible pages, websites, and web services.
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID " Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#instance", "state": "RUNNABLE", "databaseVersion": " DATABASE VERSION ", "settings": { "authorizedGaeApplications": [], "tier": " MACHINE TYPE ", "kind": "sql#settings", "pricingPlan": "PER USE", "replicationType": "SYNCHRONOUS", "activationPolicy": "ALWAYS", "ipConfiguration": { "authorizedNetworks": [], "ipv4Enabled": true }, "locationPreference": { "zone": " ZONE ", "kind": "sql#locationPreference" }, "dataDiskType": "PD SSD", "backupConfiguration": { "startTime": "19:00", "kind": "sql#backupConfiguration", "enabled": true }, "settingsVersion": "1", "dataDiskSizeGb": "10" }, "etag": "--redacted--", "ipAddresses": [ { "type": "PRIMARY", " ipAddress ": " 10.0.0.1 " } ], "serverCaCert": { ... }, "instanceType": "CLOUD SQL INSTANCE", "project": " PROJECT ID ", "serviceAccountEmailAddress": "redacted@gcp-sa-cloud-sql.iam.gserviceaccount.com", "backendType": " BACKEND TYPE ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID ", "connectionName": " PROJECT ID:REGION:INSTANCE ID ", "name": " INSTANCE ID ", "region": " REGION ", "gceZone": " ZONE " } To see how the underlying REST API request is constructed for this task, see the APIs Explorer on the instances:insert page .
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ INSTANCE ID " Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#instance", "state": "RUNNABLE", "databaseVersion": " DATABASE VERSION ", "settings": { "authorizedGaeApplications": [], "tier": " MACHINE TYPE ", "kind": "sql#settings", "pricingPlan": "PER USE", "replicationType": "SYNCHRONOUS", "activationPolicy": "ALWAYS", "ipConfiguration": { "authorizedNetworks": [], "ipv4Enabled": true }, "locationPreference": { "zone": " ZONE ", "kind": "sql#locationPreference" }, "dataDiskType": "PD SSD", "backupConfiguration": { "startTime": "19:00", "kind": "sql#backupConfiguration", "enabled": true }, "settingsVersion": "1", "dataDiskSizeGb": "10" }, "etag": "--redacted--", "ipAddresses": [ { "type": "PRIMARY", " ipAddress ": " 10.0.0.1 " } ], "serverCaCert": { ... }, "instanceType": "CLOUD SQL INSTANCE", "project": " PROJECT ID ", "serviceAccountEmailAddress": "redacted@gcp-sa-cloud-sql.iam.gserviceaccount.com", "backendType": " BACKEND TYPE ", "selfLink": "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ INSTANCE ID ", "connectionName": " PROJECT ID:REGION:INSTANCE ID ", "name": " INSTANCE ID ", "region": " REGION ", "gceZone": " ZONE " } REST v1beta4 1.

### Method: connect.get \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/connect/get](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/connect/get)
- Source ID: `site-api-reference`
- Final score: 119
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- SQL Server instances: SQLSERVER 2017 STANDARD (default), SQLSERVER 2017 ENTERPRISE , SQLSERVER 2017 EXPRESS , SQLSERVER 2017 WEB , SQLSERVER 2019 STANDARD , SQLSERVER 2019 ENTERPRISE , SQLSERVER 2019 EXPRESS , or SQLSERVER 2019 WEB . backendType enum ( SqlBackendType ) SECOND GEN : Cloud SQL database instance.
- If successful, the response body contains data with the following structure: JSON representation { "kind" : string , "serverCaCert" : { object ( SslCert ) } , "ipAddresses" : [ { object ( IpMapping ) } ] , "region" : string , "databaseVersion" : enum ( SqlDatabaseVersion ) , "backendType" : enum ( SqlBackendType ) , "pscEnabled" : boolean , "dnsName" : string , "serverCaMode" : enum ( CaMode ) , "customSubjectAlternativeNames" : [ string ] , "dnsNames" : [ { object ( DnsNameMapping ) } ] , "nodes" : [ { object ( ConnectPoolNodeConfig ) } ] , "mdxProtocolSupport" : [ enum ( MdxProtocolSupport ) ] , "nodeCount" : integer } Fields kind string This is always sql#connectSettings . serverCaCert object ( SslCert ) SSL configuration. ipAddresses[] object ( IpMapping ) The assigned IP addresses for the instance. region string The cloud region for the instance.
- This property is read-only; use the tier property in the settings object to determine the database type. pscEnabled boolean Whether PSC connectivity is enabled for this instance. dnsName string The dns name of the instance. serverCaMode enum ( CaMode ) Specify what type of CA is used for the server certificate. customSubjectAlternativeNames[] string Custom subject alternative names for the server certificate. dnsNames[] object ( DnsNameMapping ) Output only.
- Home Documentation Databases Cloud SQL SQL Server Reference Send feedback Method: connect.get Stay organized with collections Save and categorize content based on your preferences.

