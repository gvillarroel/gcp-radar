---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:45:01.334Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "Cloud SQL Enterprise Plus support for PostgreSQL 12 and 13"
feature_slug: "cloud-sql-enterprise-plus-support-for-postgresql-12-and-13"
latest_feature_date: "2024-02-20"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/release-notes"
  - "https://docs.cloud.google.com/sql/docs/postgres/choose-edition"
  - "https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances"
keywords:
  - "sql"
  - "enterprise"
  - "plus"
  - "for"
  - "postgresql"
  - "12"
  - "and"
  - "13"
---

# Cloud SQL Enterprise Plus support for PostgreSQL 12 and 13

Product: Cloud SQL for PostgreSQL
Coverage: LOW

## Step 02 Summary

Cloud SQL Enterprise Plus supports PostgreSQL versions 12 and 13.

## Extended Definition

Cloud SQL Enterprise Plus supports PostgreSQL versions 12 and 13.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/release-notes](https://docs.cloud.google.com/sql/docs/postgres/release-notes)
- [https://docs.cloud.google.com/sql/docs/postgres/choose-edition](https://docs.cloud.google.com/sql/docs/postgres/choose-edition)
- [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances)

## Supporting Pages

### Cloud SQL for PostgreSQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/release-notes](https://docs.cloud.google.com/sql/docs/postgres/release-notes)
- Source ID: `site-docs-root`
- Final score: 234
- Re-rank relevance: N/A

Evidence snippets:
- February 20, 2024 Feature Cloud SQL Enterprise Plus edition now supports versions 12 and 13 of PostgreSQL.
- Please use this table to find the name of the maintenance version to apply, and use that version or the latest version available: PostgreSQL version Maintenance version PostgreSQL 9.6 POSTGRES 9 6 24.R20220710.01 02 PostgreSQL 10 POSTGRES 10 21.R20220710.01 02 PostgreSQL 11 POSTGRES 11 16.R20220710.01 02 PostgreSQL 12 POSTGRES 12 11.R20220710.01 02 PostgreSQL 13 POSTGRES 13 7.R20220710.01 02 After you have identified the name of the maintenance version, please upgrade to the target maintenance version , performing the corresponding update of your instances (to the latest maintenance version).
- January 25, 2024 Feature Cloud SQL Enterprise Plus edition now supports the following regions: asia-northeast2 (Osaka) asia-south2 (Delhi) europe-north1 (Finland) europe-southwest1 (Madrid) us-east5 (Columbus) us-south1 (Dallas) December 18, 2023 Feature Cloud SQL Enterprise Plus edition now supports the following regions: europe-west8 (Milan) europe-west12 (Turin) us-west4 (Las Vegas) December 14, 2023 Feature You can now use Database Migration Service to migrate data to an existing Cloud SQL instance that was created using Terraform or other Infrastructure-As-Code (IaC) Tools.
- When using the CLI/API to create an instance, if the database version for the instance or replica that you're creating is PostgreSQL 16 and later, then the default Cloud SQL edition is Enterprise Plus.

### "Choose a Cloud SQL edition \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/choose-edition](https://docs.cloud.google.com/sql/docs/postgres/choose-edition)
- Source ID: `site-iam-reference`
- Final score: 224
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Cloud SQL key features The following table provides an overview of key feature enhancements available in Cloud SQL Enterprise Plus edition compared to Cloud SQL Enterprise edition: Cloud SQL Enterprise Plus edition Cloud SQL Enterprise edition Database versions PostgreSQL 9.6, 10, 11, 12, 13, 14, 15, 16, 17, 18 PostgreSQL 12, 13, 14, 15, 16, 17, 18 Note: If the database version for your instance is PostgreSQL 16 or later, then the default Cloud SQL edition is Enterprise Plus.
- Cloud SQL offers the following editions: Cloud SQL Enterprise Plus edition : provides enhanced performance, availability, and observability to run applications.
- For details about Cloud SQL editions and the enhancements offered by the Cloud SQL Enterprise Plus edition, see Cloud SQL editions overview .
- Cloud SQL Enterprise edition : provides all core capabilities of Cloud SQL and is suitable for applications with less stringent availability and performance requirements.

### "REST Resource: instances \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances)
- Source ID: `site-api-reference`
- Final score: 210
- Re-rank relevance: N/A

Evidence snippets:
- If you must use the requireSsl flag for backward compatibility, then only the following value pairs are valid: For PostgreSQL and MySQL: sslMode=ALLOW UNENCRYPTED AND ENCRYPTED and requireSsl=false sslMode=ENCRYPTED ONLY and requireSsl=false sslMode=TRUSTED CLIENT CERTIFICATE REQUIRED and requireSsl=true For SQL Server: sslMode=ALLOW UNENCRYPTED AND ENCRYPTED and requireSsl=false sslMode=ENCRYPTED ONLY and requireSsl=true The value of sslMode has priority over the value of requireSsl .
- This applies only to Cloud SQL for MySQL and Cloud SQL for PostgreSQL instances. enableDataplexIntegration boolean Optional.
- For SSL connections to MySQL and PostgreSQL, the client certificate isn't verified.
- For SSL connections to MySQL and PostgreSQL, the client certificate isn't verified.

