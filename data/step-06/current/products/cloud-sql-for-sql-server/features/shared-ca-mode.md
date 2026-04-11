---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:58:32.610Z"
product_name: "Cloud SQL for SQL Server"
product_slug: "cloud-sql-for-sql-server"
feature_name: "Shared CA mode"
feature_slug: "shared-ca-mode"
latest_feature_date: "2025-05-01"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/sqlserver/authorize-ssl"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/release-notes"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/create-instance"
keywords:
  - "shared"
  - "ca"
  - "mode"
  - "lets"
  - "instances"
  - "use"
  - "managed"
  - "certificate"
---

# Shared CA mode

Product: Cloud SQL for SQL Server
Coverage: LOW

## Step 02 Summary

Shared CA mode lets instances use a Google-managed shared certificate authority hierarchy for server certificates.

## Extended Definition

Shared CA mode lets instances use a Google-managed shared certificate authority hierarchy for server certificates.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/sqlserver/authorize-ssl](https://docs.cloud.google.com/sql/docs/sqlserver/authorize-ssl)
- [https://docs.cloud.google.com/sql/docs/sqlserver/release-notes](https://docs.cloud.google.com/sql/docs/sqlserver/release-notes)
- [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance)

## Supporting Pages

### "Authorize with SSL/TLS certificates \_|\_ Cloud SQL for SQL Server \_|\_\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/authorize-ssl](https://docs.cloud.google.com/sql/docs/sqlserver/authorize-ssl)
- Source ID: `site-iam-reference`
- Final score: 182
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For instances that use shared CAs ( serverCaMode is set to GOOGLE MANAGED CAS CA ), the expiration period of the server certificates is 1 year.
- Feature Per-instance CA Shared CA Customer-managed CA CA structure Separate CA for each instance Root CA and subordinate CAs shared across instances in the same region CA hierarchy that you create and manage Cryptographic attributes RSA 2048-bit key with SHA256 algorithm Elliptic Curve Digital Signature Algorithm (ECDSA) with 256-bit key with SHA384 algorithm Elliptic Curve Digital Signature Algorithm (ECDSA) with 256-bit key with SHA384 algorithm CA validity period 10 years 25 years for root CA and 10 years for subordinate CAs Configurable Server certificate validity period 10 years 1 year 1 year User-initiated rotation of CA?
- For instances that use the per-instance CA, shared CA, or customer-managed CA hierarchies, about three months before the server certificate expires for a Cloud SQL instance, the project owners receive an email from Cloud SQL, stating that the certificate rotation process has begun for that instance.
- SSL certificate expiration For Cloud SQL instances that use per-instance CAs ( serverCaMode is set to GOOGLE MANAGED INTERNAL CA ), the SSL certificates come with an expiration period of 10 years.

### Cloud SQL for SQL Server release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/release-notes](https://docs.cloud.google.com/sql/docs/sqlserver/release-notes)
- Source ID: `site-docs-root`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- For users of the Cloud SQL Auth Proxy : If the Cloud SQL instance to which you're connecting is using shared certificate authority (CA) for its serverCaMode setting, then on the client side, you must use Cloud SQL Auth Proxy version 2.13.0 or later.
- You can choose between the per-instance CA ( GOOGLE MANAGED INTERNAL CA ), the shared CA ( GOOGLE MANAGED CAS CA ), or the customer-managed CA ( CUSTOMER MANAGED CAS CA ) options as the server certificate authority (CA) mode for your instance.
- You can update existing instances that use the per-instance CA option ( GOOGLE MANAGED INTERNAL CA ) to use the shared CA option ( GOOGLE MANAGED CAS CA ) or the customer-managed CA option ( CUSTOMER MANAGED CAS CA ).
- Shared CA : with this option, the Cloud SQL instance uses a CA hierarchy consisting of a root CA and subordinate server CAs managed by Cloud SQL and hosted on Google Cloud Certificate Authority Service (CA Service).

### Create instances \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance)
- Source ID: `site-docs-root`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- HTTP method and URL: POST https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances Request JSON body: { "name": " INSTANCE ID ", "region": " REGION ", "databaseVersion": " DATABASE VERSION ", "rootPassword": " PASSWORD ", "settings": { "tier": " MACHINE TYPE ", "edition": " EDITION TYPE ", "backupConfiguration": { "enabled": true }, "dataCacheConfig": { "dataCacheEnabled": DATA CACHE ENABLED }, "ipConfiguration": { "privateNetwork": " PRIVATE NETWORK ", "authorizedNetworks": [ AUTHORIZED NETWORKS ], "ipv4Enabled": false, "serverCaMode": " CA MODE ", "serverCertificateRotationMode": " SERVER CERTIFICATE ROTATION MODE ", "customSubjectAlternativeNames": " DNS NAMES " } }, "sqlNetworkArchitecture": "NEW NETWORK ARCHITECTURE" } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- HTTP method and URL: POST https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances Request JSON body: { "name": " INSTANCE ID ", "region": " REGION ", "databaseVersion": " DATABASE VERSION ", "rootPassword": " PASSWORD ", "settings": { "tier": " MACHINE TYPE ", "edition": " EDITION TYPE ", "backupConfiguration": { "enabled": true }, "dataCacheConfig": { "dataCacheEnabled": DATA CACHE ENABLED }, "ipConfiguration": { "privateNetwork": " PRIVATE NETWORK ", "authorizedNetworks": [ AUTHORIZED NETWORKS ], "ipv4Enabled": false, "serverCaMode": " CA MODE ", "serverCertificateRotationMode": " SERVER CERTIFICATE ROTATION MODE ", "customSubjectAlternativeNames": " DNS NAMES " } }, "sqlNetworkArchitecture": "NEW NETWORK ARCHITECTURE" } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- GOOGLE MANAGED CAS CA : with this option, a CA hierarchy consisting of a root CA and subordinate server CAs managed by Cloud SQL and hosted on Google Cloud Certificate Authority Service (CA Service) is used.
- By default, when you create an instance in Google Cloud console, the instance uses the Google managed internal certificate authority ( GOOGLE MANAGED INTERNAL CA ), which is the per-instance CA option.

