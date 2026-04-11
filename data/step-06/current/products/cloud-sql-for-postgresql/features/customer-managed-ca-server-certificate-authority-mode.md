---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:45:01.293Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "Customer-managed CA server certificate authority mode"
feature_slug: "customer-managed-ca-server-certificate-authority-mode"
latest_feature_date: "2025-05-01"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/authorize-ssl"
  - "https://docs.cloud.google.com/sql/docs/postgres/release-notes"
  - "https://docs.cloud.google.com/sql/docs/postgres/create-instance"
keywords:
  - "customer"
  - "managed"
  - "ca"
  - "server"
  - "certificate"
  - "authority"
  - "mode"
  - "lets"
---

# Customer-managed CA server certificate authority mode

Product: Cloud SQL for PostgreSQL
Coverage: LOW

## Step 02 Summary

Customer-managed CA mode lets you use your own CA hierarchy in Certificate Authority Service for Cloud SQL server certificates; Customer-managed CA mode lets you configure your own CA pool and CA in Certificate Authority Service for Cloud SQL server certificates.

## Extended Definition

Customer-managed CA mode lets you use your own CA hierarchy in Certificate Authority Service for Cloud SQL server certificates; Customer-managed CA mode lets you configure your own CA pool and CA in Certificate Authority Service for Cloud SQL server certificates.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/authorize-ssl](https://docs.cloud.google.com/sql/docs/postgres/authorize-ssl)
- [https://docs.cloud.google.com/sql/docs/postgres/release-notes](https://docs.cloud.google.com/sql/docs/postgres/release-notes)
- [https://docs.cloud.google.com/sql/docs/postgres/create-instance](https://docs.cloud.google.com/sql/docs/postgres/create-instance)

## Supporting Pages

### "Authorize with SSL/TLS certificates \_|\_ Cloud SQL for PostgreSQL \_|\_\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/authorize-ssl](https://docs.cloud.google.com/sql/docs/postgres/authorize-ssl)
- Source ID: `site-iam-reference`
- Final score: 178
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To choose per-instance CA, select Google managed internal certificate authority (Google Cloud console) or specify GOOGLE MANAGED INTERNAL CA for the serverCaMode setting (Cloud SQL Admin API) or the --server-ca-mode flag ( gcloud CLI ) when you create the instance .
- If you're using a customer-managed CA ( serverCaMode is set to CUSTOMER MANAGED CAS CA ), then you can perform CA certificate rotation by rotating the CAs in the CA pool that you created.
- Customer-managed CAs This server CA mode lets you set up your own CA hierarchy in CA Service.
- Feature Per-instance CA Shared CA Customer-managed CA CA structure Separate CA for each instance Root CA and subordinate CAs shared across instances in the same region CA hierarchy that you create and manage Cryptographic attributes RSA 2048-bit key with SHA256 algorithm Elliptic Curve Digital Signature Algorithm (ECDSA) with 384-bit key with SHA384 algorithm Elliptic Curve Digital Signature Algorithm (ECDSA) with 384-bit key with SHA384 algorithm CA validity period 10 years 25 years for root CA and 10 years for subordinate CAs Configurable Server certificate validity period 10 years 1 year 1 year User-initiated rotation of CA?

### Cloud SQL for PostgreSQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/release-notes](https://docs.cloud.google.com/sql/docs/postgres/release-notes)
- Source ID: `site-docs-root`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- You can choose between the per-instance CA ( GOOGLE MANAGED INTERNAL CA ), the shared CA ( GOOGLE MANAGED CAS CA ), or the customer-managed CA ( CUSTOMER MANAGED CAS CA ) options as the server certificate authority (CA) mode for your instance.
- This feature is available only for instances that are configured with the customer-managed certificate authority (CA) ( CUSTOMER MANAGED CAS CA ) option as its server CA mode.
- Feature You can now configure customer-managed CA ( CUSTOMER MANAGED CAS CA ) as the server certificate authority (CA) mode when you create a Cloud SQL instance.
- May 08, 2025 Change If you create an instance using the Google Cloud Console, then the per-instance CA ( GOOGLE MANAGED INTERNAL CA ) option is now the default server certificate authority (CA) mode for your Cloud SQL instance.

### Create instances \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/create-instance](https://docs.cloud.google.com/sql/docs/postgres/create-instance)
- Source ID: `site-docs-root`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- GOOGLE MANAGED CAS CA : with this option, a CA hierarchy consisting of a root CA and subordinate server CAs managed by Cloud SQL and hosted on Google Cloud Certificate Authority Service (CA Service) is used.
- Security Server certificate authority mode Choose the type of certificate authority (CA) that signs the server certificate for this Cloud SQL instance.
- Server CA mode --server-ca-mode The --server-ca-mode flag configures the type of server certificate authority (CA) for an instance.
- CA MODE : specify a certificate authority hierarchy for the instance, either GOOGLE MANAGED INTERNAL CA or GOOGLE MANAGED CAS CA .

