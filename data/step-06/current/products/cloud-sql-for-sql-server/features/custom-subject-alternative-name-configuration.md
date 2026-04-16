---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:57:14.537Z"
product_name: "Cloud SQL for SQL Server"
product_slug: "cloud-sql-for-sql-server"
feature_name: "Custom subject alternative name configuration"
feature_slug: "custom-subject-alternative-name-configuration"
latest_feature_date: "2025-05-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/sqlserver/create-instance"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/troubleshooting"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/authorize-ssl"
keywords:
  - "custom"
  - "subject"
  - "alternative"
  - "name"
  - "configuration"
  - "lets"
  - "you"
  - "assign"
---

# Custom subject alternative name configuration

Product: Cloud SQL for SQL Server
Coverage: MEDIUM

## Step 02 Summary

Custom subject alternative name configuration lets you assign custom DNS names to instances by configuring certificate SAN values; Custom subject alternative name configuration lets you add, modify, and remove custom DNS names for instances using Customer Managed CAS CA.

## Extended Definition

Custom subject alternative name configuration lets you assign custom DNS names to instances by configuring certificate SAN values; Custom subject alternative name configuration lets you add, modify, and remove custom DNS names for instances using Customer Managed CAS CA.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance)
- [https://docs.cloud.google.com/sql/docs/sqlserver/troubleshooting](https://docs.cloud.google.com/sql/docs/sqlserver/troubleshooting)
- [https://docs.cloud.google.com/sql/docs/sqlserver/authorize-ssl](https://docs.cloud.google.com/sql/docs/sqlserver/authorize-ssl)

## Supporting Pages

### Create instances \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance)
- Source ID: `site-docs-root`
- Final score: 193
- Re-rank relevance: N/A

Evidence snippets:
- HTTP method and URL: POST https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances Request JSON body: { "name": " INSTANCE ID ", "region": " REGION ", "databaseVersion": " DATABASE VERSION ", "rootPassword": " PASSWORD ", "settings": { "tier": " MACHINE TYPE ", "edition": " EDITION TYPE ", "backupConfiguration": { "enabled": true }, "dataCacheConfig": { "dataCacheEnabled": DATA CACHE ENABLED }, "ipConfiguration": { "privateNetwork": " PRIVATE NETWORK ", "authorizedNetworks": [ AUTHORIZED NETWORKS ], "ipv4Enabled": false, "serverCaMode": " CA MODE ", "serverCertificateRotationMode": " SERVER CERTIFICATE ROTATION MODE ", "customSubjectAlternativeNames": " DNS NAMES " } }, "sqlNetworkArchitecture": "NEW NETWORK ARCHITECTURE" } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- HTTP method and URL: POST https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances Request JSON body: { "name": " INSTANCE ID ", "region": " REGION ", "databaseVersion": " DATABASE VERSION ", "rootPassword": " PASSWORD ", "settings": { "tier": " MACHINE TYPE ", "edition": " EDITION TYPE ", "backupConfiguration": { "enabled": true }, "dataCacheConfig": { "dataCacheEnabled": DATA CACHE ENABLED }, "ipConfiguration": { "privateNetwork": " PRIVATE NETWORK ", "authorizedNetworks": [ AUTHORIZED NETWORKS ], "ipv4Enabled": false, "serverCaMode": " CA MODE ", "serverCertificateRotationMode": " SERVER CERTIFICATE ROTATION MODE ", "customSubjectAlternativeNames": " DNS NAMES " } }, "sqlNetworkArchitecture": "NEW NETWORK ARCHITECTURE" } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Custom SAN Add a custom subject alternative name (SAN) --custom-subject-alternative-names= DNS NAMES If you want to use a custom DNS name to connect to a Cloud SQL instance instead of using an IP address, then configure the custom subject alternative name (SAN) setting while creating the instance.
- Set the password for the user: gcloud sql users set-password sqlserver no-host --instance =[ INSTANCE NAME ] \ --password =[ PASSWORD ] Terraform To create an instance, use a Terraform resource . resource "google sql database instance" "default" { name = "sqlserver-instance" region = "us-central1" database version = "SQLSERVER 2019 STANDARD" root password = "INSERT-PASSWORD-HERE" settings { tier = "db-custom-2-7680" } } Apply the changes To apply your Terraform configuration in a Google Cloud project, complete the steps in the following sections.

### Troubleshoot \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/troubleshooting](https://docs.cloud.google.com/sql/docs/sqlserver/troubleshooting)
- Source ID: `site-docs-root`
- Final score: 137
- Re-rank relevance: N/A

Evidence snippets:
- Error message: More than 3 subject alternative names are not allowed.
- Error message: Subject alternative names %s is too long.
- Error message: Subject alternative name %s is invalid.
- You're trying to use a custom SAN to add more than three DNS names to the server certificate of a Cloud SQL instance.

### "Authorize with SSL/TLS certificates \_|\_ Cloud SQL for SQL Server \_|\_\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/authorize-ssl](https://docs.cloud.google.com/sql/docs/sqlserver/authorize-ssl)
- Source ID: `site-docs-reference-required-4`
- Final score: 129
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Subject Alternative Name (SAN) field in server certificates The SAN field contains the hostname (DNS name of the instance) only for instances enabled with Private Service Connect .
- Service connection limitations If your instance uses the shared CA ( GOOGLE MANAGED CAS CA ) or customer-managed CA ( CUSTOMER MANAGED CAS CA ) option for its serverCaMode configuration, then the instance can't support connections from the following Google Cloud services: App Engine standard environment App Engine flexible environment Cloud Run services that run in a first generation execution environment What's next Configure SSL/TLS on your Cloud SQL instance.
- Whether you use the per-instance CA, the shared CA, or the customer-managed CA server mode, you can reset the SSL configuration of your Cloud SQL instance at any time.
- Customer-managed CAs This server CA mode lets you set up your own CA hierarchy in CA Service.

