---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:58:32.608Z"
product_name: "Cloud SQL for SQL Server"
product_slug: "cloud-sql-for-sql-server"
feature_name: "Customer-managed CA mode"
feature_slug: "customer-managed-ca-mode"
latest_feature_date: "2025-05-01"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/release-notes"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/release-notes"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/create-instance"
keywords:
  - "customer"
  - "managed"
  - "ca"
  - "mode"
  - "lets"
  - "you"
  - "use"
  - "your"
---

# Customer-managed CA mode

Product: Cloud SQL for SQL Server
Coverage: LOW

## Step 02 Summary

Customer-managed CA mode lets you use your own Certificate Authority Service CA hierarchy for Cloud SQL server certificates; Customer-managed CA mode lets you configure a Certificate Authority Service CA pool and CA as the server certificate authority for an instance.

## Extended Definition

Customer-managed CA mode lets you use your own Certificate Authority Service CA hierarchy for Cloud SQL server certificates; Customer-managed CA mode lets you configure a Certificate Authority Service CA pool and CA as the server certificate authority for an instance.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- [https://docs.cloud.google.com/sql/docs/sqlserver/release-notes](https://docs.cloud.google.com/sql/docs/sqlserver/release-notes)
- [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance)

## Supporting Pages

### Cloud SQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 180
- Re-rank relevance: N/A

Evidence snippets:
- You can choose between the per-instance CA ( GOOGLE MANAGED INTERNAL CA ), the shared CA ( GOOGLE MANAGED CAS CA ), or the customer-managed CA ( CUSTOMER MANAGED CAS CA ) options as the server certificate authority (CA) mode for your instance.
- You can choose between the per-instance CA ( GOOGLE MANAGED INTERNAL CA ), the shared CA ( GOOGLE MANAGED CAS CA ), or the customer-managed CA ( CUSTOMER MANAGED CAS CA ) options as the server certificate authority (CA) mode for your instance.
- You can choose between the per-instance CA ( GOOGLE MANAGED INTERNAL CA ), the shared CA ( GOOGLE MANAGED CAS CA ), or the customer-managed CA ( CUSTOMER MANAGED CAS CA ) options as the server certificate authority (CA) mode for your instance.
- If the Cloud SQL instance to which you're connecting is using customer-managed CA for its serverCaMode setting, then on the client side, you must use Cloud SQL Auth Proxy version 2.14.3 or later.

### Cloud SQL for SQL Server release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/release-notes](https://docs.cloud.google.com/sql/docs/sqlserver/release-notes)
- Source ID: `site-docs-root`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- You can choose between the per-instance CA ( GOOGLE MANAGED INTERNAL CA ), the shared CA ( GOOGLE MANAGED CAS CA ), or the customer-managed CA ( CUSTOMER MANAGED CAS CA ) options as the server certificate authority (CA) mode for your instance.
- If the Cloud SQL instance to which you're connecting is using customer-managed CA for its serverCaMode setting, then on the client side, you must use Cloud SQL Auth Proxy version 2.14.3 or later.
- With customer-managed CA mode, you set up your own CA pool and CA in Certificate Authority Service .
- April 12, 2022 Feature Customer-managed encryption key (CMEK) organization policy constraints are now available in Preview . constraints/gcp.restrictNonCmekServices allows you to control which resources require the use of CMEK. constraints/gcp.restrictCmekCryptoKeyProjects allows you to control the projects from which a Cloud KMS key can be used to validate requests.

### Create instances \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance)
- Source ID: `site-docs-root`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- HTTP method and URL: POST https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances Request JSON body: { "name": " INSTANCE ID ", "region": " REGION ", "databaseVersion": " DATABASE VERSION ", "rootPassword": " PASSWORD ", "settings": { "tier": " MACHINE TYPE ", "edition": " EDITION TYPE ", "backupConfiguration": { "enabled": true }, "dataCacheConfig": { "dataCacheEnabled": DATA CACHE ENABLED }, "ipConfiguration": { "privateNetwork": " PRIVATE NETWORK ", "authorizedNetworks": [ AUTHORIZED NETWORKS ], "ipv4Enabled": false, "serverCaMode": " CA MODE ", "serverCertificateRotationMode": " SERVER CERTIFICATE ROTATION MODE ", "customSubjectAlternativeNames": " DNS NAMES " } }, "sqlNetworkArchitecture": "NEW NETWORK ARCHITECTURE" } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- HTTP method and URL: POST https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances Request JSON body: { "name": " INSTANCE ID ", "region": " REGION ", "databaseVersion": " DATABASE VERSION ", "rootPassword": " PASSWORD ", "settings": { "tier": " MACHINE TYPE ", "edition": " EDITION TYPE ", "backupConfiguration": { "enabled": true }, "dataCacheConfig": { "dataCacheEnabled": DATA CACHE ENABLED }, "ipConfiguration": { "privateNetwork": " PRIVATE NETWORK ", "authorizedNetworks": [ AUTHORIZED NETWORKS ], "ipv4Enabled": false, "serverCaMode": " CA MODE ", "serverCertificateRotationMode": " SERVER CERTIFICATE ROTATION MODE ", "customSubjectAlternativeNames": " DNS NAMES " } }, "sqlNetworkArchitecture": "NEW NETWORK ARCHITECTURE" } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- The collation field (not shown in the following basic API call) lets you to set a default value for the type of collation used for the databases in your instance.
- The collation field (not shown in the following basic API call) lets you set a default value for the type of collation used for the databases in your instance.

