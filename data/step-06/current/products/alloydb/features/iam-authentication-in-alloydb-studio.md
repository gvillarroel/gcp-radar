---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:07:37.582Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "IAM authentication in AlloyDB Studio"
feature_slug: "iam-authentication-in-alloydb-studio"
latest_feature_date: "2025-05-08"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/release-notes"
keywords:
  - "Google Cloud IAM principals"
  - "Studio login with IAM"
  - "AlloyDB Studio IAM authentication"
  - "IAM users in AlloyDB Studio"
  - "IAM-based database access"
  - "IAM auth"
  - "Studio IAM"
---

# IAM authentication in AlloyDB Studio

Product: AlloyDB
Coverage: LOW

## Step 02 Summary

AlloyDB Studio now supports IAM-based authentication for database access.

## Extended Definition

The release notes describe AlloyDB IAM authentication as support for automated IAM-based authentication when connecting to an AlloyDB instance, including IAM-based authorization via AlloyDB language connectors. This capability was initially announced as available in Preview (June 27, 2023) and later appears with updates that include language connectors and the Auth Proxy with Auto IAM Authentication (February 9, 2026). The provided excerpts do not explicitly mention AlloyDB Studio, so only the underlying AlloyDB connection IAM authentication feature is evidenced, not studio-specific login flow details.

## Evidence Summary

The AlloyDB release notes establish that AlloyDB has an IAM authentication feature for instance connections (Auto IAM Authentication) and track its preview and later enhancement timeline.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/release-notes](https://docs.cloud.google.com/alloydb/docs/release-notes)

## Supporting Pages

### AlloyDB for PostgreSQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/release-notes](https://docs.cloud.google.com/alloydb/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 32
- Re-rank relevance: N/A

Evidence snippets:
- These language connectors are libraries that provide automated mutual TLS connections, IAM-based authorization, and Automated IAM Authentication when connecting to an AlloyDB instance.
- These language connectors are libraries that provide automated mutual TLS connections, IAM-based authorization, and Automated IAM Authentication when connecting to an AlloyDB instance.
- June 27, 2023 Feature The columnar engine now supports columns with the following data types: boolean bytea enum uuid Feature IAM authentication for AlloyDB is available in Preview .
- February 09, 2026 Fixed We are announcing the release of support for the AlloyDB language connectors and Auth Proxy with Auto IAM Authentication and managed connection pooling.

