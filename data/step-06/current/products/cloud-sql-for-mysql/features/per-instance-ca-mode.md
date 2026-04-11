---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:24:12.831Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Per-instance CA mode"
feature_slug: "per-instance-ca-mode"
latest_feature_date: "2024-10-03"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/create-instance"
  - "https://docs.cloud.google.com/sql/docs/mysql/authorize-ssl"
  - "https://docs.cloud.google.com/sql/docs/release-notes"
keywords:
  - "per"
  - "instance"
  - "ca"
  - "mode"
  - "uses"
  - "dedicated"
  - "internal"
  - "certificate"
---

# Per-instance CA mode

Product: Cloud SQL for MySQL
Coverage: LOW

## Step 02 Summary

Per-instance CA mode uses a dedicated internal certificate authority for each Cloud SQL instance's server certificate.

## Extended Definition

Per-instance CA mode uses a dedicated internal certificate authority for each Cloud SQL instance's server certificate.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance)
- [https://docs.cloud.google.com/sql/docs/mysql/authorize-ssl](https://docs.cloud.google.com/sql/docs/mysql/authorize-ssl)
- [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)

## Supporting Pages

### Create instances \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance)
- Source ID: `site-docs-root`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- By default, when you create an instance in Google Cloud console, the instance uses the Google managed internal certificate authority ( GOOGLE MANAGED INTERNAL CA ), which is the per-instance CA option.
- CA MODE : specify a certificate authority hierarchy for the instance, either GOOGLE MANAGED INTERNAL CA or GOOGLE MANAGED CAS CA .
- CA MODE : specify a certificate authority hierarchy for the instance, either GOOGLE MANAGED INTERNAL CA or GOOGLE MANAGED CAS CA .
- With this option, an internal CA dedicated to each Cloud SQL instance signs the server certificate for that instance.

### "Authorize with SSL/TLS certificates \_|\_ Cloud SQL for MySQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/authorize-ssl](https://docs.cloud.google.com/sql/docs/mysql/authorize-ssl)
- Source ID: `site-iam-reference`
- Final score: 178
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To choose per-instance CA, select Google managed internal certificate authority (Google Cloud console) or specify GOOGLE MANAGED INTERNAL CA for the serverCaMode setting (Cloud SQL Admin API) or the --server-ca-mode flag ( gcloud CLI ) when you create the instance .
- SSL certificate expiration For Cloud SQL instances that use per-instance CAs ( serverCaMode is set to GOOGLE MANAGED INTERNAL CA ), the SSL certificates come with an expiration period of 10 years.
- You have three options: Per-instance CA : with this option, an internal CA dedicated to each Cloud SQL instance signs the server certificate for that instance.
- For instances that use shared CAs ( serverCaMode is set to GOOGLE MANAGED CAS CA ), the expiration period of the server certificates is 1 year.

### Cloud SQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- May 08, 2025 Cloud SQL for MySQL Change If you create an instance using the Google Cloud Console, then the per-instance CA ( GOOGLE MANAGED INTERNAL CA ) option is now the default server certificate authority (CA) mode for your Cloud SQL instance.
- You can choose between the per-instance CA ( GOOGLE MANAGED INTERNAL CA ), the shared CA ( GOOGLE MANAGED CAS CA ), or the customer-managed CA ( CUSTOMER MANAGED CAS CA ) options as the server certificate authority (CA) mode for your instance.
- You can choose between the per-instance CA ( GOOGLE MANAGED INTERNAL CA ), the shared CA ( GOOGLE MANAGED CAS CA ), or the customer-managed CA ( CUSTOMER MANAGED CAS CA ) options as the server certificate authority (CA) mode for your instance.
- You can choose between the per-instance CA ( GOOGLE MANAGED INTERNAL CA ), the shared CA ( GOOGLE MANAGED CAS CA ), or the customer-managed CA ( CUSTOMER MANAGED CAS CA ) options as the server certificate authority (CA) mode for your instance.

