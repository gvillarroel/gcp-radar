---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:24:12.817Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Custom DNS name with custom SAN"
feature_slug: "custom-dns-name-with-custom-san"
latest_feature_date: "2025-05-02"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/create-instance"
  - "https://docs.cloud.google.com/sql/docs/release-notes"
  - "https://docs.cloud.google.com/sql/docs/mysql/authorize-ssl"
keywords:
  - "custom"
  - "dns"
  - "name"
  - "with"
  - "san"
  - "subject"
  - "alternative"
  - "configuration"
---

# Custom DNS name with custom SAN

Product: Cloud SQL for MySQL
Coverage: LOW

## Step 02 Summary

Custom subject alternative name configuration lets instances use custom DNS names for connections when using customer-managed CA mode; Custom subject alternative name configuration lets instances use custom DNS names for connections when using customer-managed CA mode.

## Extended Definition

Custom subject alternative name configuration lets instances use custom DNS names for connections when using customer-managed CA mode; Custom subject alternative name configuration lets instances use custom DNS names for connections when using customer-managed CA mode.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance)
- [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- [https://docs.cloud.google.com/sql/docs/mysql/authorize-ssl](https://docs.cloud.google.com/sql/docs/mysql/authorize-ssl)

## Supporting Pages

### Create instances \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance)
- Source ID: `site-docs-root`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- HTTP method and URL: POST https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances Request JSON body: { "name": " INSTANCE ID ", "region": " REGION ", "databaseVersion": " DATABASE VERSION ", "settings": { "tier": " MACHINE TYPE ", "edition": " EDITION TYPE ", "dataCacheConfig" { "dataCacheEnabled": DATA CACHE ENABLED }, "backupConfiguration": { "binaryLogEnabled": true, "enabled": true }, "passwordValidationPolicy": { "enablePasswordPolicy": true "minLength": " MIN LENGTH ", "complexity": COMPLEXITY DEFAULT, "reuseInterval": " REUSE INTERVAL ", "disallowUsernameSubstring": " DISALLOW USERNAME SUBSTRING ", }, "ipConfiguration": { "privateNetwork": " PRIVATE NETWORK ", "authorizedNetworks": [ AUTHORIZED NETWORKS ], "ipv4Enabled": false, "enablePrivatePathForGoogleCloudServices": true, "serverCaMode": " CA MODE ", "serverCertificateRotationMode": " SERVER CERTIFICATE ROTATION MODE ", "customSubjectAlternativeNames": " DNS NAMES " }, "dataApiAccess": "ALLOW DATA API" }, "sqlNetworkArchitecture": "NEW NETWORK ARCHITECTURE" } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- HTTP method and URL: POST https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances Request JSON body: { "name": " INSTANCE ID ", "region": " REGION ", "databaseVersion": " DATABASE VERSION ", "settings": { "tier": " MACHINE TYPE ", "edition": " EDITION TYPE ", "dataCacheConfig": { "dataCacheEnabled": DATA CACHE ENABLED }, "backupConfiguration": { "binaryLogEnabled": true, "enabled": true }, "passwordValidationPolicy": { "enablePasswordPolicy": true "minLength": " MIN LENGTH ", "complexity": COMPLEXITY DEFAULT, "reuseInterval": " REUSE INTERVAL ", "disallowUsernameSubstring": " DISALLOW USERNAME SUBSTRING " }, "ipConfiguration": { "privateNetwork": " PRIVATE NETWORK ", "authorizedNetworks": [ AUTHORIZED NETWORKS ], "ipv4Enabled": false, "enablePrivatePathForGoogleCloudServices": true, "serverCaMode": " CA MODE ", "serverCertificateRotationMode": " SERVER CERTIFICATE ROTATION MODE ", "customSubjectAlternativeNames": " DNS NAMES " }, "dataApiAccess": "ALLOW DATA API" }, "sqlNetworkArchitecture": "NEW NETWORK ARCHITECTURE" } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Custom SAN Add a custom subject alternative name (SAN) --custom-subject-alternative-names= DNS NAMES If you want to use a custom DNS name to connect to a Cloud SQL instance instead of using an IP address, then configure the custom subject alternative name (SAN) setting while creating the instance.
- The custom DNS name that you insert into the custom SAN setting is added to the SAN field of the server certificate of the instance.

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

### "Authorize with SSL/TLS certificates \_|\_ Cloud SQL for MySQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/authorize-ssl](https://docs.cloud.google.com/sql/docs/mysql/authorize-ssl)
- Source ID: `site-iam-reference`
- Final score: 148
- Re-rank relevance: N/A

Evidence snippets:
- Subject Alternative Name (SAN) field in server certificates The SAN field contains the hostname (DNS name of the instance) only for instances enabled with Private Service Connect .
- The SAN field contains the hostname (DNS name of the instance) for all types of instances.
- The SAN field contains the hostname (DNS name of the instance) for all types of instances.
- Feature Per-instance CA Shared CA Customer-managed CA CA structure Separate CA for each instance Root CA and subordinate CAs shared across instances in the same region CA hierarchy that you create and manage Cryptographic attributes RSA 2048-bit key with SHA256 algorithm Elliptic Curve Digital Signature Algorithm (ECDSA) with 384-bit key with SHA384 algorithm Elliptic Curve Digital Signature Algorithm (ECDSA) with 384-bit key with SHA384 algorithm CA validity period 10 years 25 years for root CA and 10 years for subordinate CAs Configurable Server certificate validity period 10 years 1 year 1 year User-initiated rotation of CA?

