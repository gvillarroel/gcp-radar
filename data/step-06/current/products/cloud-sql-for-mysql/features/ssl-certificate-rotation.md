---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:24:12.976Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "SSL certificate rotation"
feature_slug: "ssl-certificate-rotation"
latest_feature_date: "2018-06-01"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/authorize-ssl"
  - "https://docs.cloud.google.com/sql/docs/mysql/release-notes"
  - "https://docs.cloud.google.com/sql/docs/mysql/create-instance"
keywords:
  - "ssl"
  - "certificate"
  - "rotation"
  - "sql"
  - "for"
  - "mysql"
  - "supports"
  - "rotating"
---

# SSL certificate rotation

Product: Cloud SQL for MySQL
Coverage: LOW

## Step 02 Summary

Cloud SQL for MySQL supports rotating SSL certificates.

## Extended Definition

Cloud SQL for MySQL supports rotating SSL certificates.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/authorize-ssl](https://docs.cloud.google.com/sql/docs/mysql/authorize-ssl)
- [https://docs.cloud.google.com/sql/docs/mysql/release-notes](https://docs.cloud.google.com/sql/docs/mysql/release-notes)
- [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance)

## Supporting Pages

### "Authorize with SSL/TLS certificates \_|\_ Cloud SQL for MySQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/authorize-ssl](https://docs.cloud.google.com/sql/docs/mysql/authorize-ssl)
- Source ID: `site-iam-reference`
- Final score: 262
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- How server certificate rotation works Cloud SQL provides ways to rotate your server certificate, so the new certificate can be seamlessly swapped in before the old certificate expires.
- For instances that use the per-instance CA, shared CA, or customer-managed CA hierarchies, about three months before the server certificate expires for a Cloud SQL instance, the project owners receive an email from Cloud SQL, stating that the certificate rotation process has begun for that instance.
- For connections that use Cloud SQL Auth Proxy or Cloud SQL Language Connectors, the connections are automatically encrypted with SSL/TLS along with client and server identity verification without requiring you to download a server CA certificate and client certificate.
- Optionally, your SSL/TLS connection can perform server identity verification by validating the server certificate installed on the Cloud SQL instance and client identity verification by validating the client certificate installed on the client.

### Cloud SQL for MySQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/release-notes](https://docs.cloud.google.com/sql/docs/mysql/release-notes)
- Source ID: `site-docs-root`
- Final score: 236
- Re-rank relevance: N/A

Evidence snippets:
- January 25, 2024 Feature Cloud SQL Enterprise Plus edition now supports the following regions: asia-northeast2 (Osaka) asia-south2 (Delhi) europe-north1 (Finland) europe-southwest1 (Madrid) us-east5 (Columbus) us-south1 (Dallas) January 12, 2024 Feature Cloud SQL for MySQL now supports setting microsecond time periods for the following flag on MySQL 5.7 and MySQL 8.0: innodb flush log at timeout For more information about this flag, see supported flags .
- December 05, 2024 Feature Cloud SQL Enterprise Plus edition now supports the following regions: africa-south1 (Johannesburg) asia-east2 (Hong Kong) europe-west10 (Berlin) December 04, 2024 Feature Cloud SQL for MySQL now supports minor version 8.0.40.
- August 18, 2023 Feature Cloud SQL Enterprise Plus edition now supports four new regions: europe-central2 (Warsaw) europe-west9 (Paris) southamerica-east1 (San Paulo) us-west1 (Oregon) Feature Cloud SQL for MySQL now supports minor version 8.0.34.
- December 18, 2023 Feature Cloud SQL for MySQL now supports the following flags for MySQL 8.0: innodb buffer pool dump now innodb buffer pool load abort innodb buffer pool load now For more information about these flags, see supported flags .

### Create instances \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance)
- Source ID: `site-docs-root`
- Final score: 228
- Re-rank relevance: N/A

Evidence snippets:
- HTTP method and URL: POST https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances Request JSON body: { "name": " INSTANCE ID ", "region": " REGION ", "databaseVersion": " DATABASE VERSION ", "settings": { "tier": " MACHINE TYPE ", "edition": " EDITION TYPE ", "dataCacheConfig" { "dataCacheEnabled": DATA CACHE ENABLED }, "backupConfiguration": { "binaryLogEnabled": true, "enabled": true }, "passwordValidationPolicy": { "enablePasswordPolicy": true "minLength": " MIN LENGTH ", "complexity": COMPLEXITY DEFAULT, "reuseInterval": " REUSE INTERVAL ", "disallowUsernameSubstring": " DISALLOW USERNAME SUBSTRING ", }, "ipConfiguration": { "privateNetwork": " PRIVATE NETWORK ", "authorizedNetworks": [ AUTHORIZED NETWORKS ], "ipv4Enabled": false, "enablePrivatePathForGoogleCloudServices": true, "serverCaMode": " CA MODE ", "serverCertificateRotationMode": " SERVER CERTIFICATE ROTATION MODE ", "customSubjectAlternativeNames": " DNS NAMES " }, "dataApiAccess": "ALLOW DATA API" }, "sqlNetworkArchitecture": "NEW NETWORK ARCHITECTURE" } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- HTTP method and URL: POST https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances Request JSON body: { "name": " INSTANCE ID ", "region": " REGION ", "databaseVersion": " DATABASE VERSION ", "settings": { "tier": " MACHINE TYPE ", "edition": " EDITION TYPE ", "dataCacheConfig": { "dataCacheEnabled": DATA CACHE ENABLED }, "backupConfiguration": { "binaryLogEnabled": true, "enabled": true }, "passwordValidationPolicy": { "enablePasswordPolicy": true "minLength": " MIN LENGTH ", "complexity": COMPLEXITY DEFAULT, "reuseInterval": " REUSE INTERVAL ", "disallowUsernameSubstring": " DISALLOW USERNAME SUBSTRING " }, "ipConfiguration": { "privateNetwork": " PRIVATE NETWORK ", "authorizedNetworks": [ AUTHORIZED NETWORKS ], "ipv4Enabled": false, "enablePrivatePathForGoogleCloudServices": true, "serverCaMode": " CA MODE ", "serverCertificateRotationMode": " SERVER CERTIFICATE ROTATION MODE ", "customSubjectAlternativeNames": " DNS NAMES " }, "dataApiAccess": "ALLOW DATA API" }, "sqlNetworkArchitecture": "NEW NETWORK ARCHITECTURE" } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- If you specify MYSQL 8 4 for the database version (or don't specify a database version), but the region you selected doesn't support Cloud SQL Enterprise Plus edition, then you must specify a region that supports Cloud SQL Enterprise Plus edition , or create an Cloud SQL Enterprise edition instance instead. .
- If you specify MYSQL 8 4 for the database version (or don't specify a database version), but the region you specify doesn't support Cloud SQL Enterprise Plus edition, then you must specify a region that supports Cloud SQL Enterprise Plus edition , or create an Cloud SQL Enterprise edition instance instead..

