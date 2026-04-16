---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:51.914Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Custom organization policies"
feature_slug: "custom-organization-policies"
latest_feature_date: "2024-07-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/connection-org-policy"
  - "https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backups"
  - "https://docs.cloud.google.com/sql/docs/mysql/create-instance"
keywords:
  - "custom"
  - "organization"
  - "policies"
  - "sql"
  - "supports"
  - "instances"
---

# Custom organization policies

Product: Cloud SQL for MySQL
Coverage: MEDIUM

## Step 02 Summary

Cloud SQL supports custom organization policies for instances.

## Extended Definition

Cloud SQL supports custom organization policies for instances.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/connection-org-policy](https://docs.cloud.google.com/sql/docs/mysql/connection-org-policy)
- [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backups](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backups)
- [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance)

## Supporting Pages

### "Cloud SQL organization policies \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/connection-org-policy](https://docs.cloud.google.com/sql/docs/mysql/connection-org-policy)
- Source ID: `site-docs-root`
- Final score: 209
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The types of organization policies specific to Cloud SQL are as follows: Predefined organization policies Connection organization policies Customer-managed encryption keys (CMEK) organization policies Custom organization policies Predefined organization policies You can use the predefined constraints to control the public IP settings and Customer Managed Encryption Key (CMEK) settings of Cloud SQL instances.
- Customer-managed encryption keys (CMEK) organization policies Cloud SQL supports two organization policy constraints that help ensure CMEK protection across an organization: constraints/gcp.restrictNonCmekServices and constraints/gcp.restrictCmekCryptoKeyProjects .
- By default, you can add Authorized Networks to Cloud SQL instances. constraints/sql.restrictAuthorizedNetworks Allowed Restrictions for connection organization policies When you set the organization policy for each project, you need to determine if any one of the following apply to your project: Read replicas public IP conflicts Incompatibility using gcloud CLI sql connect Google Cloud hosted services access MySQL failover replica public IP conflicts Non-RFC 1918 private IP addresses Read replicas public IP address conflicts Cloud SQL read replicas connect to the primary instance over the non-proxied database connection.
- Connection organization policies Connection organization policies provide centralized control of the public IP settings for Cloud SQL, to reduce the security attack surface of Cloud SQL instances from the Internet.

### "Cloud SQL backups overview \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backups](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backups)
- Source ID: `site-docs-reference-3`
- Final score: 141
- Re-rank relevance: N/A

Evidence snippets:
- You can also set an Cloud SQL custom organization policy to take a final back at instance deletion for all instances in your organization and set a standard retention period.
- For more information, see Example custom organization policies for common use cases .
- This way, you can recreate any instances that you delete accidentally without contacting Cloud Customer Care .
- For more information, see Cloud SQL organization policies .

### Create instances \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance)
- Source ID: `site-docs-reference-3`
- Final score: 141
- Re-rank relevance: N/A

Evidence snippets:
- HTTP method and URL: POST https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances Request JSON body: { "name": " INSTANCE ID ", "region": " REGION ", "databaseVersion": " DATABASE VERSION ", "settings": { "tier": " MACHINE TYPE ", "edition": " EDITION TYPE ", "dataCacheConfig" { "dataCacheEnabled": DATA CACHE ENABLED }, "backupConfiguration": { "binaryLogEnabled": true, "enabled": true }, "passwordValidationPolicy": { "enablePasswordPolicy": true "minLength": " MIN LENGTH ", "complexity": COMPLEXITY DEFAULT, "reuseInterval": " REUSE INTERVAL ", "disallowUsernameSubstring": " DISALLOW USERNAME SUBSTRING ", }, "ipConfiguration": { "privateNetwork": " PRIVATE NETWORK ", "authorizedNetworks": [ AUTHORIZED NETWORKS ], "ipv4Enabled": false, "enablePrivatePathForGoogleCloudServices": true, "serverCaMode": " CA MODE ", "serverCertificateRotationMode": " SERVER CERTIFICATE ROTATION MODE ", "customSubjectAlternativeNames": " DNS NAMES " }, "dataApiAccess": "ALLOW DATA API" }, "sqlNetworkArchitecture": "NEW NETWORK ARCHITECTURE" } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- HTTP method and URL: POST https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances Request JSON body: { "name": " INSTANCE ID ", "region": " REGION ", "databaseVersion": " DATABASE VERSION ", "settings": { "tier": " MACHINE TYPE ", "edition": " EDITION TYPE ", "dataCacheConfig": { "dataCacheEnabled": DATA CACHE ENABLED }, "backupConfiguration": { "binaryLogEnabled": true, "enabled": true }, "passwordValidationPolicy": { "enablePasswordPolicy": true "minLength": " MIN LENGTH ", "complexity": COMPLEXITY DEFAULT, "reuseInterval": " REUSE INTERVAL ", "disallowUsernameSubstring": " DISALLOW USERNAME SUBSTRING " }, "ipConfiguration": { "privateNetwork": " PRIVATE NETWORK ", "authorizedNetworks": [ AUTHORIZED NETWORKS ], "ipv4Enabled": false, "enablePrivatePathForGoogleCloudServices": true, "serverCaMode": " CA MODE ", "serverCertificateRotationMode": " SERVER CERTIFICATE ROTATION MODE ", "customSubjectAlternativeNames": " DNS NAMES " }, "dataApiAccess": "ALLOW DATA API" }, "sqlNetworkArchitecture": "NEW NETWORK ARCHITECTURE" } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- This feature is available in Preview and for CUSTOMER MANAGED CAS CA instances only.
- This feature is available in Preview and for CUSTOMER MANAGED CAS CA instances only.

