---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:51.892Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Custom DNS name with custom SAN"
feature_slug: "custom-dns-name-with-custom-san"
latest_feature_date: "2025-05-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/custom-dns-name"
  - "https://docs.cloud.google.com/sql/docs/mysql/create-instance"
  - "https://docs.cloud.google.com/sql/docs/mysql/troubleshooting"
keywords:
  - "custom"
  - "dns"
  - "name"
  - "san"
  - "subject"
  - "alternative"
  - "configuration"
  - "lets"
---

# Custom DNS name with custom SAN

Product: Cloud SQL for MySQL
Coverage: MEDIUM

## Step 02 Summary

Custom subject alternative name configuration lets instances use custom DNS names for connections when using customer-managed CA mode; Custom subject alternative name configuration lets instances use custom DNS names for connections when using customer-managed CA mode.

## Extended Definition

Custom subject alternative name configuration lets instances use custom DNS names for connections when using customer-managed CA mode; Custom subject alternative name configuration lets instances use custom DNS names for connections when using customer-managed CA mode.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/custom-dns-name](https://docs.cloud.google.com/sql/docs/mysql/custom-dns-name)
- [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance)
- [https://docs.cloud.google.com/sql/docs/mysql/troubleshooting](https://docs.cloud.google.com/sql/docs/mysql/troubleshooting)

## Supporting Pages

### "Set up a custom DNS name for a Cloud SQL instance \_|\_ Cloud SQL for MySQL\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/custom-dns-name](https://docs.cloud.google.com/sql/docs/mysql/custom-dns-name)
- Source ID: `site-docs-reference-3`
- Final score: 223
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following sample also creates prerequisite resources for the new instance. resource "google project service identity" "default" { provider = google-beta service = "sqladmin.googleapis.com" } resource "random string" "default" { length = 10 special = false upper = false } resource "google privateca ca pool" "default" { name = "customer-ca-pool-${random string.default.result}" location = "asia-northeast1" tier = "DEVOPS" publishing options { publish ca cert = false publish crl = false } } This is required for setting up customer managed CAS (Certificate Authority Service) instances. resource "google privateca certificate authority" "default" { pool = google privateca ca pool.default.name certificate authority id = "my-certificate-authority" location = "asia-northeast1" lifetime = "86400s" type = "SELF SIGNED" deletion protection = false # set to "true" in production skip grace period = true ignore active certificates on deletion = true config { subject config { subject { organization = "my organization" common name = "my certificate authority name" } } x509 config { ca options { is ca = true } key usage { base key usage { cert sign = true crl sign = true } extended key usage { server auth = false } } } } key spec { algorithm = "RSA PKCS1 4096 SHA256" } } resource "google privateca ca pool iam member" "default" { ca pool = google privateca ca pool.default.id role = "roles/privateca.certificateRequester" member = "serviceAccount:${google project service identity.default.email}" } resource "google sql database instance" "default" { name = "mysql-instance" region = "asia-northeast1" database version = "MYSQL 8 4" settings { edition = "ENTERPRISE" tier = "db-f1-micro" ip configuration { The following server CA mode lets the instance use customer-managed CAS CA to issue server certificates. https://cloud.google.com/sql/docs/mysql/admin-api/rest/v1beta4/instances#ipconfiguration server ca mode = "CUSTOMER MANAGED CAS CA" server ca pool = google privateca ca pool.default.id custom subject alternative names = ["customSan.test.com"] } } } Add or update custom SAN values for an instance To add or update custom SAN values for an existing instance, do the following: gcloud gcloud sql instances patch INSTANCE NAME \ --custom-subject-alternative-names = CUSTOM DNS NAME Caution : If you're updating an instance that already has custom SAN values, then specify the existing custom SAN values or the existing values will be replaced.
- Terraform To update an instance that already has custom SAN values, use a Terraform resource . resource "google sql database instance" "default" { name = "mysql-instance" region = "asia-northeast1" database version = "MYSQL 8 4" settings { edition = "ENTERPRISE" tier = "db-f1-micro" ip configuration { The following server CA mode lets the instance use customer-managed CAS CA to issue server certificates. https://cloud.google.com/sql/docs/mysql/admin-api/rest/v1beta4/instances#ipconfiguration server ca mode = "CUSTOMER MANAGED CAS CA" server ca pool = google privateca ca pool.default.id custom subject alternative names = ["customSan.test.com"] } } } Caution : If you're updating an instance that already has custom SAN values, then specify the existing custom SAN values or the existing values will be replaced.
- Create an instance with custom SAN values To create an instance with custom SAN values, use the following gcloud sql instances create command: gcloud gcloud sql instances create " INSTANCE NAME " \ --database-version = DATABASE VERSION \ --project = PROJECT ID \ --region = REGION \ --server-ca-mode = CUSTOMER MANAGED CAS CA \ --server-ca-pool = projects/ PROJECT ID CAS /locations/ REGION /caPools/ CA POOL ID --custom-subject-alternative-names = CUSTOM DNS NAME Make the following replacements: INSTANCE NAME with the name of the Cloud SQL instance that you want to create.
- Clear all custom SAN values from an instance To clear all custom SAN values from an instance, do the following: gcloud gcloud sql instances patch INSTANCE NAME \ --clear-custom-subject-alternative-names Replace INSTANCE NAME with the name of the Cloud SQL instance that you want to update.

### Create instances \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance)
- Source ID: `site-docs-reference-3`
- Final score: 161
- Re-rank relevance: N/A

Evidence snippets:
- HTTP method and URL: POST https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances Request JSON body: { "name": " INSTANCE ID ", "region": " REGION ", "databaseVersion": " DATABASE VERSION ", "settings": { "tier": " MACHINE TYPE ", "edition": " EDITION TYPE ", "dataCacheConfig" { "dataCacheEnabled": DATA CACHE ENABLED }, "backupConfiguration": { "binaryLogEnabled": true, "enabled": true }, "passwordValidationPolicy": { "enablePasswordPolicy": true "minLength": " MIN LENGTH ", "complexity": COMPLEXITY DEFAULT, "reuseInterval": " REUSE INTERVAL ", "disallowUsernameSubstring": " DISALLOW USERNAME SUBSTRING ", }, "ipConfiguration": { "privateNetwork": " PRIVATE NETWORK ", "authorizedNetworks": [ AUTHORIZED NETWORKS ], "ipv4Enabled": false, "enablePrivatePathForGoogleCloudServices": true, "serverCaMode": " CA MODE ", "serverCertificateRotationMode": " SERVER CERTIFICATE ROTATION MODE ", "customSubjectAlternativeNames": " DNS NAMES " }, "dataApiAccess": "ALLOW DATA API" }, "sqlNetworkArchitecture": "NEW NETWORK ARCHITECTURE" } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- HTTP method and URL: POST https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances Request JSON body: { "name": " INSTANCE ID ", "region": " REGION ", "databaseVersion": " DATABASE VERSION ", "settings": { "tier": " MACHINE TYPE ", "edition": " EDITION TYPE ", "dataCacheConfig": { "dataCacheEnabled": DATA CACHE ENABLED }, "backupConfiguration": { "binaryLogEnabled": true, "enabled": true }, "passwordValidationPolicy": { "enablePasswordPolicy": true "minLength": " MIN LENGTH ", "complexity": COMPLEXITY DEFAULT, "reuseInterval": " REUSE INTERVAL ", "disallowUsernameSubstring": " DISALLOW USERNAME SUBSTRING " }, "ipConfiguration": { "privateNetwork": " PRIVATE NETWORK ", "authorizedNetworks": [ AUTHORIZED NETWORKS ], "ipv4Enabled": false, "enablePrivatePathForGoogleCloudServices": true, "serverCaMode": " CA MODE ", "serverCertificateRotationMode": " SERVER CERTIFICATE ROTATION MODE ", "customSubjectAlternativeNames": " DNS NAMES " }, "dataApiAccess": "ALLOW DATA API" }, "sqlNetworkArchitecture": "NEW NETWORK ARCHITECTURE" } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Custom SAN Add a custom subject alternative name (SAN) --custom-subject-alternative-names= DNS NAMES If you want to use a custom DNS name to connect to a Cloud SQL instance instead of using an IP address, then configure the custom subject alternative name (SAN) setting while creating the instance.
- This lets you use the custom DNS name with hostname validation securely.

### Troubleshoot \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/troubleshooting](https://docs.cloud.google.com/sql/docs/mysql/troubleshooting)
- Source ID: `site-docs-root`
- Final score: 139
- Re-rank relevance: N/A

Evidence snippets:
- Error message: More than 3 subject alternative names are not allowed.
- Error message: Subject alternative names %s is too long.
- Error message: Subject alternative name %s is invalid.
- You're trying to use a custom SAN to add more than three DNS names to the server certificate of a Cloud SQL instance.

