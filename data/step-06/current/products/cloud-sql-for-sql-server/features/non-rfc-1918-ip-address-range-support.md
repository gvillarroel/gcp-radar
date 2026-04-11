---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:58:32.686Z"
product_name: "Cloud SQL for SQL Server"
product_slug: "cloud-sql-for-sql-server"
feature_name: "Non-RFC 1918 IP address range support"
feature_slug: "non-rfc-1918-ip-address-range-support"
latest_feature_date: "2023-07-06"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/sqlserver/release-notes"
  - "https://docs.cloud.google.com/sql/docs/release-notes"
  - "https://docs.cloud.google.com/sql/docs/debugging-connectivity"
keywords:
  - "non"
  - "rfc"
  - "1918"
  - "ip"
  - "address"
  - "range"
  - "sql"
  - "supports"
---

# Non-RFC 1918 IP address range support

Product: Cloud SQL for SQL Server
Coverage: LOW

## Step 02 Summary

Cloud SQL supports creating and connecting to instances and replicas in non-RFC 1918 IP address ranges.

## Extended Definition

Cloud SQL supports creating and connecting to instances and replicas in non-RFC 1918 IP address ranges.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/sqlserver/release-notes](https://docs.cloud.google.com/sql/docs/sqlserver/release-notes)
- [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- [https://docs.cloud.google.com/sql/docs/debugging-connectivity](https://docs.cloud.google.com/sql/docs/debugging-connectivity)

## Supporting Pages

### Cloud SQL for SQL Server release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/release-notes](https://docs.cloud.google.com/sql/docs/sqlserver/release-notes)
- Source ID: `site-docs-root`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- July 06, 2023 Feature Cloud SQL now supports non-RFC 1918 IP address ranges , including privately used public IP addresses.
- Additionally, you can connect to an instance from an application that is running in a non-RFC 1918 IP address range.
- This enables you to create instances and replicas in a non-RFC 1918 IP address range.
- May 14, 2025 Feature Cloud SQL for SQL Server now supports TLS connections to Active Directory endpoints without requiring server certificate trust or the use of IP addresses.

### Cloud SQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- July 06, 2023 Cloud SQL for MySQL Feature Cloud SQL now supports non-RFC 1918 IP address ranges , including privately used public IP addresses.
- Cloud SQL for PostgreSQL Feature Cloud SQL now supports non-RFC 1918 IP address ranges , including privately used public IP addresses.
- Cloud SQL for SQL Server Feature Cloud SQL now supports non-RFC 1918 IP address ranges , including privately used public IP addresses.
- Additionally, you can connect to an instance from an application that is running in a non-RFC 1918 IP address range.

### Debugging connection issues \_|\_ Cloud SQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/debugging-connectivity](https://docs.cloud.google.com/sql/docs/debugging-connectivity)
- Source ID: `site-docs-root`
- Final score: 172
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The limit flag is an optional parameter that indicates the maximum number of entries to return. gcloud logging read "projects/ PROJECT ID /logs/cloudsql.googleapis.com/mysql-general.log" \ --limit = 10 gcloud logging read "projects/ PROJECT ID /logs/cloudsql.googleapis.com/postgres.log" \ --limit = 10 Private IP addresses Connections to a Cloud SQL instance using a private IP address are automatically authorized for RFC 1918 address ranges .
- Connections to a Cloud SQL instance using a private IP address are automatically authorized for RFC 1918 address ranges .
- Non-RFC 1918 address ranges must be configured in Cloud SQL as authorized networks .
- Non-RFC 1918 address ranges must be configured as authorized networks .

