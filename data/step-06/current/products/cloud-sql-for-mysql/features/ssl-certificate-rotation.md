---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:51.997Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "SSL certificate rotation"
feature_slug: "ssl-certificate-rotation"
latest_feature_date: "2018-06-01"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/authorize-ssl"
  - "https://docs.cloud.google.com/sql/docs/mysql/configure-ssl-instance"
  - "https://docs.cloud.google.com/sql/docs/mysql/create-instance"
keywords:
  - "ssl"
  - "certificate"
  - "rotation"
  - "sql"
  - "mysql"
  - "supports"
  - "rotating"
  - "certificates"
---

# SSL certificate rotation

Product: Cloud SQL for MySQL
Coverage: LOW

## Step 02 Summary

Cloud SQL for MySQL supports rotating SSL certificates.

## Extended Definition

Cloud SQL for MySQL supports rotating SSL certificates.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/authorize-ssl](https://docs.cloud.google.com/sql/docs/mysql/authorize-ssl)
- [https://docs.cloud.google.com/sql/docs/mysql/configure-ssl-instance](https://docs.cloud.google.com/sql/docs/mysql/configure-ssl-instance)
- [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance)

## Supporting Pages

### "Configure SSL/TLS certificates \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/configure-ssl-instance](https://docs.cloud.google.com/sql/docs/mysql/configure-ssl-instance)
- Source ID: `site-docs-reference-3`
- Final score: 45
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you want to use the new server certificate immediately, proceed with server certificate rotation by updating your clients and completing the rotation. gcloud For instances that use self-signed server certificates (per-instance CA) : To get information about the server certificate, use the sql ssl server-ca-certs list command: gcloud sql ssl server-ca-certs list \ --instance = INSTANCE NAME To create a server certificate, use the sql ssl server-ca-certs create command: gcloud sql ssl server-ca-certs create \ --instance = INSTANCE NAME Download the certificate information to a local PEM file: gcloud sql ssl server-ca-certs list \ --format = "value(cert)" \ --instance = INSTANCE NAME > \ FILE PATH / FILE NAME .pem Update all of your clients to use the new information by copying the downloaded file to your client host machines, replacing the existing server-ca.pem files.
- Terraform To enforce SSL/TLS encryption, use a Terraform resource : resource "google sql database instance" "mysql instance" { name = "mysql-instance" region = "asia-northeast1" database version = "MYSQL 8 0" settings { tier = "db-f1-micro" ip configuration { The following SSL enforcement options only allow connections encrypted with SSL/TLS and with valid client certificates.
- Home Documentation Databases Cloud SQL MySQL Guides Send feedback Configure SSL/TLS certificates Stay organized with collections Save and categorize content based on your preferences.
- To validate client/server identity using SSL/TLS certs, you need to create a client certificate and download the certificates to your MySQL client host machine.

### "Authorize with SSL/TLS certificates \_|\_ Cloud SQL for MySQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/authorize-ssl](https://docs.cloud.google.com/sql/docs/mysql/authorize-ssl)
- Source ID: `site-docs-reference-3`
- Final score: 37
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Databases Cloud SQL MySQL Guides Send feedback Authorize with SSL/TLS certificates Stay organized with collections Save and categorize content based on your preferences.
- If you're using a customer-managed CA ( serverCaMode is set to CUSTOMER MANAGED CAS CA ), then you can perform CA certificate rotation by rotating the CAs in the CA pool that you created.
- A shorter validity period for the CA might require more frequent CA rotations and a validity period shorter than one year might affect the validity period of your server certificates.
- Before these certificates expire, perform server CA certificate rotation .

### Create instances \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance)
- Source ID: `site-docs-reference-3`
- Final score: 33
- Re-rank relevance: N/A

Evidence snippets:
- CUSTOMER MANAGED CAS CA : with this option, you define the CA hierarchy and manage the rotation of the CA certificates.
- HTTP method and URL: POST https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances Request JSON body: { "name": " INSTANCE ID ", "region": " REGION ", "databaseVersion": " DATABASE VERSION ", "settings": { "tier": " MACHINE TYPE ", "edition": " EDITION TYPE ", "dataCacheConfig" { "dataCacheEnabled": DATA CACHE ENABLED }, "backupConfiguration": { "binaryLogEnabled": true, "enabled": true }, "passwordValidationPolicy": { "enablePasswordPolicy": true "minLength": " MIN LENGTH ", "complexity": COMPLEXITY DEFAULT, "reuseInterval": " REUSE INTERVAL ", "disallowUsernameSubstring": " DISALLOW USERNAME SUBSTRING ", }, "ipConfiguration": { "privateNetwork": " PRIVATE NETWORK ", "authorizedNetworks": [ AUTHORIZED NETWORKS ], "ipv4Enabled": false, "enablePrivatePathForGoogleCloudServices": true, "serverCaMode": " CA MODE ", "serverCertificateRotationMode": " SERVER CERTIFICATE ROTATION MODE ", "customSubjectAlternativeNames": " DNS NAMES " }, "dataApiAccess": "ALLOW DATA API" }, "sqlNetworkArchitecture": "NEW NETWORK ARCHITECTURE" } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- HTTP method and URL: POST https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances Request JSON body: { "name": " INSTANCE ID ", "region": " REGION ", "databaseVersion": " DATABASE VERSION ", "settings": { "tier": " MACHINE TYPE ", "edition": " EDITION TYPE ", "dataCacheConfig": { "dataCacheEnabled": DATA CACHE ENABLED }, "backupConfiguration": { "binaryLogEnabled": true, "enabled": true }, "passwordValidationPolicy": { "enablePasswordPolicy": true "minLength": " MIN LENGTH ", "complexity": COMPLEXITY DEFAULT, "reuseInterval": " REUSE INTERVAL ", "disallowUsernameSubstring": " DISALLOW USERNAME SUBSTRING " }, "ipConfiguration": { "privateNetwork": " PRIVATE NETWORK ", "authorizedNetworks": [ AUTHORIZED NETWORKS ], "ipv4Enabled": false, "enablePrivatePathForGoogleCloudServices": true, "serverCaMode": " CA MODE ", "serverCertificateRotationMode": " SERVER CERTIFICATE ROTATION MODE ", "customSubjectAlternativeNames": " DNS NAMES " }, "dataApiAccess": "ALLOW DATA API" }, "sqlNetworkArchitecture": "NEW NETWORK ARCHITECTURE" } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- If you specify MYSQL 8 4 for the database version (or don't specify a database version), but the region you selected doesn't support Cloud SQL Enterprise Plus edition, then you must specify a region that supports Cloud SQL Enterprise Plus edition , or create an Cloud SQL Enterprise edition instance instead. .

