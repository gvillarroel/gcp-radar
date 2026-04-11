---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:58:32.607Z"
product_name: "Cloud SQL for SQL Server"
product_slug: "cloud-sql-for-sql-server"
feature_name: "Custom subject alternative name configuration"
feature_slug: "custom-subject-alternative-name-configuration"
latest_feature_date: "2025-05-02"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/sqlserver/create-instance"
  - "https://docs.cloud.google.com/sql/docs/release-notes"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/release-notes"
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
Coverage: LOW

## Step 02 Summary

Custom subject alternative name configuration lets you assign custom DNS names to instances by configuring certificate SAN values; Custom subject alternative name configuration lets you add, modify, and remove custom DNS names for instances using Customer Managed CAS CA.

## Extended Definition

Custom subject alternative name configuration lets you assign custom DNS names to instances by configuring certificate SAN values; Custom subject alternative name configuration lets you add, modify, and remove custom DNS names for instances using Customer Managed CAS CA.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance)
- [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- [https://docs.cloud.google.com/sql/docs/sqlserver/release-notes](https://docs.cloud.google.com/sql/docs/sqlserver/release-notes)

## Supporting Pages

### Create instances \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance)
- Source ID: `site-docs-root`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- HTTP method and URL: POST https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances Request JSON body: { "name": " INSTANCE ID ", "region": " REGION ", "databaseVersion": " DATABASE VERSION ", "rootPassword": " PASSWORD ", "settings": { "tier": " MACHINE TYPE ", "edition": " EDITION TYPE ", "backupConfiguration": { "enabled": true }, "dataCacheConfig": { "dataCacheEnabled": DATA CACHE ENABLED }, "ipConfiguration": { "privateNetwork": " PRIVATE NETWORK ", "authorizedNetworks": [ AUTHORIZED NETWORKS ], "ipv4Enabled": false, "serverCaMode": " CA MODE ", "serverCertificateRotationMode": " SERVER CERTIFICATE ROTATION MODE ", "customSubjectAlternativeNames": " DNS NAMES " } }, "sqlNetworkArchitecture": "NEW NETWORK ARCHITECTURE" } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- HTTP method and URL: POST https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances Request JSON body: { "name": " INSTANCE ID ", "region": " REGION ", "databaseVersion": " DATABASE VERSION ", "rootPassword": " PASSWORD ", "settings": { "tier": " MACHINE TYPE ", "edition": " EDITION TYPE ", "backupConfiguration": { "enabled": true }, "dataCacheConfig": { "dataCacheEnabled": DATA CACHE ENABLED }, "ipConfiguration": { "privateNetwork": " PRIVATE NETWORK ", "authorizedNetworks": [ AUTHORIZED NETWORKS ], "ipv4Enabled": false, "serverCaMode": " CA MODE ", "serverCertificateRotationMode": " SERVER CERTIFICATE ROTATION MODE ", "customSubjectAlternativeNames": " DNS NAMES " } }, "sqlNetworkArchitecture": "NEW NETWORK ARCHITECTURE" } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Custom SAN Add a custom subject alternative name (SAN) --custom-subject-alternative-names= DNS NAMES If you want to use a custom DNS name to connect to a Cloud SQL instance instead of using an IP address, then configure the custom subject alternative name (SAN) setting while creating the instance.
- Set the password for the user: gcloud sql users set-password sqlserver no-host --instance =[ INSTANCE NAME ] \ --password =[ PASSWORD ] Terraform To create an instance, use a Terraform resource . resource "google sql database instance" "default" { name = "sqlserver-instance" region = "us-central1" database version = "SQLSERVER 2019 STANDARD" root password = "INSERT-PASSWORD-HERE" settings { tier = "db-custom-2-7680" } } Apply the changes To apply your Terraform configuration in a Google Cloud project, complete the steps in the following sections.

### Cloud SQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- Cloud SQL for PostgreSQL Feature You can now use a custom DNS name to connect to your Cloud SQL instances by adding a custom subject alternative name (SAN) to your Cloud SQL instances.
- Cloud SQL for SQL Server Feature You can now use a custom DNS name to connect to your Cloud SQL instances by adding a custom subject alternative name (SAN) to your Cloud SQL instances.
- Feature You can now use a custom DNS name to connect to your Cloud SQL instances by adding a custom subject alternative name (SAN) to your Cloud SQL instances.
- May 02, 2025 Cloud SQL for MySQL Feature You can now set up custom DNS names by configuring the custom subject alternative name (SAN) for your instance.

### Cloud SQL for SQL Server release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/release-notes](https://docs.cloud.google.com/sql/docs/sqlserver/release-notes)
- Source ID: `site-docs-root`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- February 11, 2025 Feature You can now use a custom DNS name to connect to your Cloud SQL instances by adding a custom subject alternative name (SAN) to your Cloud SQL instances.
- May 02, 2025 Feature You can now set up custom DNS names by configuring the custom subject alternative name (SAN) for your instance.
- After you set up DNS name resolution, you can connect to your Cloud SQL instance using the custom DNS name instead of using an IP address.
- Among the new features, there's support for: Metrics and tracing with Cloud Monitoring and Cloud Trace Support for Prometheus Service account impersonation Separate Dialer functionality released as the Cloud SQL Go Connector Configuration with environment variables Fully POSIX-compliant flags We recommend all customers upgrade to v2 and have released a migration guide .

