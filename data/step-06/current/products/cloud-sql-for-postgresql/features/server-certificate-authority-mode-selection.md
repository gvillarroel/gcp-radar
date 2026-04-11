---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:45:01.316Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "Server certificate authority mode selection"
feature_slug: "server-certificate-authority-mode-selection"
latest_feature_date: "2024-10-03"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/configure-ip"
  - "https://docs.cloud.google.com/sql/docs/postgres/authorize-ssl"
  - "https://docs.cloud.google.com/sql/docs/postgres/release-notes"
keywords:
  - "server"
  - "certificate"
  - "authority"
  - "mode"
  - "selection"
  - "sql"
  - "can"
  - "configure"
---

# Server certificate authority mode selection

Product: Cloud SQL for PostgreSQL
Coverage: LOW

## Step 02 Summary

Cloud SQL can configure server certificate authority mode at instance creation using either per-instance CA or shared CA.

## Extended Definition

Cloud SQL can configure server certificate authority mode at instance creation using either per-instance CA or shared CA.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/configure-ip](https://docs.cloud.google.com/sql/docs/postgres/configure-ip)
- [https://docs.cloud.google.com/sql/docs/postgres/authorize-ssl](https://docs.cloud.google.com/sql/docs/postgres/authorize-ssl)
- [https://docs.cloud.google.com/sql/docs/postgres/release-notes](https://docs.cloud.google.com/sql/docs/postgres/release-notes)

## Supporting Pages

### Configure public IP \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/configure-ip](https://docs.cloud.google.com/sql/docs/postgres/configure-ip)
- Source ID: `site-iam-reference`
- Final score: 200
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If you're using either a shared certificate authority (CA) or a customer-managed CA as the serverCaMode for your instance, then your instance requires a restart when you disable public IP for your instance.
- If you're using either a shared certificate authority (CA) or a customer-managed CA as the serverCaMode for your instance, then your instance requires a restart when you enable public IP for your instance.
- For more information about server CA mode configuration, see Certificate authority (CA) authorities .
- For more information about server CA mode configuration, see Certificate authority (CA) authorities .

### "Authorize with SSL/TLS certificates \_|\_ Cloud SQL for PostgreSQL \_|\_\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/authorize-ssl](https://docs.cloud.google.com/sql/docs/postgres/authorize-ssl)
- Source ID: `site-iam-reference`
- Final score: 198
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can either leave the serverCaMode configuration setting unspecified using Cloud SQL Admin API or gcloud CLI , or select the Google internal Certificate Authority option in the Google Cloud console.
- Service connection limitations If your instance uses the shared CA ( GOOGLE MANAGED CAS CA ) or customer-managed CA ( CUSTOMER MANAGED CAS CA ) option for its serverCaMode configuration, then the instance can't support connections from the following Google Cloud services: App Engine standard environment App Engine flexible environment Cloud Run services that run in a first generation execution environment What's next Configure SSL/TLS on your Cloud SQL instance.
- To choose per-instance CA, select Google managed internal certificate authority (Google Cloud console) or specify GOOGLE MANAGED INTERNAL CA for the serverCaMode setting (Cloud SQL Admin API) or the --server-ca-mode flag ( gcloud CLI ) when you create the instance .
- Certificate authority (CA) hierarchies This section describes the three types of server certificate authority (CA) that you can choose for your Cloud SQL instances.

### Cloud SQL for PostgreSQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/release-notes](https://docs.cloud.google.com/sql/docs/postgres/release-notes)
- Source ID: `site-docs-root`
- Final score: 188
- Re-rank relevance: N/A

Evidence snippets:
- Feature You can now configure customer-managed CA ( CUSTOMER MANAGED CAS CA ) as the server certificate authority (CA) mode when you create a Cloud SQL instance.
- October 03, 2024 Feature You can now configure server certificate authority (CA) mode when you create a Cloud SQL instance.
- February 02, 2026 Feature You can now update the server certificate authority (CA) mode of an existing Cloud SQL instance.
- For users of the Cloud SQL Auth Proxy : If the Cloud SQL instance to which you're connecting is using shared certificate authority (CA) for its serverCaMode setting, then on the client side, you must use Cloud SQL Auth Proxy version 2.13.0 or later.

