---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T13:51:57.765Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "Server certificate authority mode selection"
feature_slug: "server-certificate-authority-mode-selection"
latest_feature_date: "2024-10-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/authorize-ssl"
  - "https://docs.cloud.google.com/sql/docs/postgres/configure-ip"
  - "https://docs.cloud.google.com/sql/docs/postgres/create-instance"
keywords:
  - "certificate"
  - "authority"
  - "selection"
  - "configure"
  - "mode"
  - "server"
---

# Server certificate authority mode selection

Product: Cloud SQL for PostgreSQL
Coverage: MEDIUM

## Step 02 Summary

Cloud SQL can configure server certificate authority mode at instance creation using either per-instance CA or shared CA.

## Extended Definition

Cloud SQL can configure server certificate authority mode at instance creation using either per-instance CA or shared CA.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/authorize-ssl](https://docs.cloud.google.com/sql/docs/postgres/authorize-ssl)
- [https://docs.cloud.google.com/sql/docs/postgres/configure-ip](https://docs.cloud.google.com/sql/docs/postgres/configure-ip)
- [https://docs.cloud.google.com/sql/docs/postgres/create-instance](https://docs.cloud.google.com/sql/docs/postgres/create-instance)

## Supporting Pages

### "Authorize with SSL/TLS certificates \_|\_ Cloud SQL for PostgreSQL \_|\_\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/authorize-ssl](https://docs.cloud.google.com/sql/docs/postgres/authorize-ssl)
- Source ID: `site-iam-reference`
- Final score: 168
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To choose per-instance CA, select Google managed internal certificate authority (Google Cloud console) or specify GOOGLE MANAGED INTERNAL CA for the serverCaMode setting (Cloud SQL Admin API) or the --server-ca-mode flag ( gcloud CLI ) when you create the instance .
- You can either leave the serverCaMode configuration setting unspecified using Cloud SQL Admin API or gcloud CLI , or select the Google internal Certificate Authority option in the Google Cloud console.
- Service connection limitations If your instance uses the shared CA ( GOOGLE MANAGED CAS CA ) or customer-managed CA ( CUSTOMER MANAGED CAS CA ) option for its serverCaMode configuration, then the instance can't support connections from the following Google Cloud services: App Engine standard environment App Engine flexible environment Cloud Run services that run in a first generation execution environment What's next Configure SSL/TLS on your Cloud SQL instance.
- SSL certificate expiration For Cloud SQL instances that use per-instance CAs ( serverCaMode is set to GOOGLE MANAGED INTERNAL CA ), the SSL certificates come with an expiration period of 10 years.

### Configure public IP \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/configure-ip](https://docs.cloud.google.com/sql/docs/postgres/configure-ip)
- Source ID: `site-iam-reference`
- Final score: 168
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you're using either a shared certificate authority (CA) or a customer-managed CA as the serverCaMode for your instance, then your instance requires a restart when you disable public IP for your instance.
- If you're using either a shared certificate authority (CA) or a customer-managed CA as the serverCaMode for your instance, then your instance requires a restart when you enable public IP for your instance.
- For more information about server CA mode configuration, see Certificate authority (CA) authorities .
- For more information about server CA mode configuration, see Certificate authority (CA) authorities .

### Create instances \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/create-instance](https://docs.cloud.google.com/sql/docs/postgres/create-instance)
- Source ID: `site-docs-root`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- Server CA mode --server-ca-mode The --server-ca-mode flag configures the type of server certificate authority (CA) for an instance.
- Automatic server certificate rotation --server-certificate-rotation-mode The --server-certificate-rotation-mode flag configures the type of server certificate rotation mode of the instance.
- Security Server certificate authority mode Choose the type of certificate authority (CA) that signs the server certificate for this Cloud SQL instance.
- HTTP method and URL: POST https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances Request JSON body: { "name": " INSTANCE ID ", "region": " REGION ", "databaseVersion": " DATABASE VERSION ", "rootPassword": " PASSWORD ", "settings": { "tier": " MACHINE TYPE ", "edition": " EDITION TYPE ", "enableGoogleMlIntegration": " true " " false " "databaseFlags": [ { "name": "cloudsql.enable google ml integration", "value": " on " " off " } ] "dataCacheConfig": { "dataCacheEnabled": DATA CACHE ENABLED }, "backupConfiguration": { "enabled": true }, "passwordValidationPolicy": { "enablePasswordPolicy": true "minLength": " MIN LENGTH ", "complexity": COMPLEXITY DEFAULT, "reuseInterval": " REUSE INTERVAL ", "disallowUsernameSubstring": " DISALLOW USERNAME SUBSTRING ", "passwordChangeInterval": " PASSWORD CHANGE INTERVAL " }, "ipConfiguration": { "privateNetwork": " PRIVATE NETWORK ", "authorizedNetworks": [ AUTHORIZED NETWORKS ], "ipv4Enabled": false, "enablePrivatePathForGoogleCloudServices": true, "serverCaMode": " CA MODE ", "serverCertificateRotationMode": " SERVER CERTIFICATE ROTATION MODE ", "customSubjectAlternativeNames": " DNS NAMES " }, "dataApiAccess": "ALLOW DATA API" }, "sqlNetworkArchitecture": "NEW NETWORK ARCHITECTURE" } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

