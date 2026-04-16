---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:57:14.526Z"
product_name: "Cloud SQL for SQL Server"
product_slug: "cloud-sql-for-sql-server"
feature_name: "Automatic server certificate rotation"
feature_slug: "automatic-server-certificate-rotation"
latest_feature_date: "2026-03-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/sqlserver/create-instance"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/authorize-ssl"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/about-tde"
keywords:
  - "automatic"
  - "server"
  - "certificate"
  - "rotation"
  - "rotates"
  - "certificates"
  - "automatically"
  - "instances"
---

# Automatic server certificate rotation

Product: Cloud SQL for SQL Server
Coverage: MEDIUM

## Step 02 Summary

Automatic server certificate rotation rotates server certificates automatically for instances that use Certificate Authority Service.

## Extended Definition

Automatic server certificate rotation rotates server certificates automatically for instances that use Certificate Authority Service.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance)
- [https://docs.cloud.google.com/sql/docs/sqlserver/authorize-ssl](https://docs.cloud.google.com/sql/docs/sqlserver/authorize-ssl)
- [https://docs.cloud.google.com/sql/docs/sqlserver/about-tde](https://docs.cloud.google.com/sql/docs/sqlserver/about-tde)

## Supporting Pages

### Create instances \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance)
- Source ID: `site-docs-root`
- Final score: 225
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- HTTP method and URL: POST https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances Request JSON body: { "name": " INSTANCE ID ", "region": " REGION ", "databaseVersion": " DATABASE VERSION ", "rootPassword": " PASSWORD ", "settings": { "tier": " MACHINE TYPE ", "edition": " EDITION TYPE ", "backupConfiguration": { "enabled": true }, "dataCacheConfig": { "dataCacheEnabled": DATA CACHE ENABLED }, "ipConfiguration": { "privateNetwork": " PRIVATE NETWORK ", "authorizedNetworks": [ AUTHORIZED NETWORKS ], "ipv4Enabled": false, "serverCaMode": " CA MODE ", "serverCertificateRotationMode": " SERVER CERTIFICATE ROTATION MODE ", "customSubjectAlternativeNames": " DNS NAMES " } }, "sqlNetworkArchitecture": "NEW NETWORK ARCHITECTURE" } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- HTTP method and URL: POST https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances Request JSON body: { "name": " INSTANCE ID ", "region": " REGION ", "databaseVersion": " DATABASE VERSION ", "rootPassword": " PASSWORD ", "settings": { "tier": " MACHINE TYPE ", "edition": " EDITION TYPE ", "backupConfiguration": { "enabled": true }, "dataCacheConfig": { "dataCacheEnabled": DATA CACHE ENABLED }, "ipConfiguration": { "privateNetwork": " PRIVATE NETWORK ", "authorizedNetworks": [ AUTHORIZED NETWORKS ], "ipv4Enabled": false, "serverCaMode": " CA MODE ", "serverCertificateRotationMode": " SERVER CERTIFICATE ROTATION MODE ", "customSubjectAlternativeNames": " DNS NAMES " } }, "sqlNetworkArchitecture": "NEW NETWORK ARCHITECTURE" } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Automatic server certificate rotation --server-certificate-rotation-mode The --server-certificate-rotation-mode flag configures the type of server certificate rotation mode of the instance.
- AUTOMATIC ROTATION DURING MAINTENANCE : With this option, automatic server certificate rotation is enabled during Cloud SQL scheduled maintenance or self-service maintenance updates.

### "Authorize with SSL/TLS certificates \_|\_ Cloud SQL for SQL Server \_|\_\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/authorize-ssl](https://docs.cloud.google.com/sql/docs/sqlserver/authorize-ssl)
- Source ID: `site-docs-reference-required-4`
- Final score: 217
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Instances using the shared CA or customer-managed CA hierarchy can enable automatic server certificate rotation to run during maintenance updates up to 180 days before expiry.
- Server certificates When you create an instance, Cloud SQL automatically creates and installs a server certificate that is signed by a certificate authority (CA).
- Feature Per-instance CA Shared CA Customer-managed CA CA structure Separate CA for each instance Root CA and subordinate CAs shared across instances in the same region CA hierarchy that you create and manage Cryptographic attributes RSA 2048-bit key with SHA256 algorithm Elliptic Curve Digital Signature Algorithm (ECDSA) with 256-bit key with SHA384 algorithm Elliptic Curve Digital Signature Algorithm (ECDSA) with 256-bit key with SHA384 algorithm CA validity period 10 years 25 years for root CA and 10 years for subordinate CAs Configurable Server certificate validity period 10 years 1 year 1 year User-initiated rotation of CA?
- For instances that use the per-instance CA, shared CA, or customer-managed CA hierarchies, about three months before the server certificate expires for a Cloud SQL instance, the project owners receive an email from Cloud SQL, stating that the certificate rotation process has begun for that instance.

### "About transparent data encryption (TDE) \_|\_ Cloud SQL for SQL Server \_\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/about-tde](https://docs.cloud.google.com/sql/docs/sqlserver/about-tde)
- Source ID: `site-docs-reference-required-4`
- Final score: 142
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloud SQL for SQL Server automatically rotates this certificate annually.
- If the instance has replicas, then all TDE certificates, including those managed by Cloud SQL and those you imported manually, are automatically distributed across all replicas.
- You can't directly import external TDE certificates to replica instances.
- Limitations Available only in Cloud SQL for SQL Server instances with the following database versions : SQL Server Enterprise SQL Server 2019 or later (Standard edition) If TDE is used for an instance with replicas and VPC Service Controls are enabled, then you must ensure the primary instance and all replicas are within the same service perimeter.

