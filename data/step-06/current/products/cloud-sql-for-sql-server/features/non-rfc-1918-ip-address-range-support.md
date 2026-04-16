---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:57:14.560Z"
product_name: "Cloud SQL for SQL Server"
product_slug: "cloud-sql-for-sql-server"
feature_name: "Non-RFC 1918 IP address range support"
feature_slug: "non-rfc-1918-ip-address-range-support"
latest_feature_date: "2023-07-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/debugging-connectivity"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/authorize-networks"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/import-export/import-export-bak"
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
Coverage: MEDIUM

## Step 02 Summary

Cloud SQL supports creating and connecting to instances and replicas in non-RFC 1918 IP address ranges.

## Extended Definition

Cloud SQL supports creating and connecting to instances and replicas in non-RFC 1918 IP address ranges.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/debugging-connectivity](https://docs.cloud.google.com/sql/docs/debugging-connectivity)
- [https://docs.cloud.google.com/sql/docs/sqlserver/authorize-networks](https://docs.cloud.google.com/sql/docs/sqlserver/authorize-networks)
- [https://docs.cloud.google.com/sql/docs/sqlserver/import-export/import-export-bak](https://docs.cloud.google.com/sql/docs/sqlserver/import-export/import-export-bak)

## Supporting Pages

### Debugging connection issues \_|\_ Cloud SQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/debugging-connectivity](https://docs.cloud.google.com/sql/docs/debugging-connectivity)
- Source ID: `site-docs-root`
- Final score: 103
- Re-rank relevance: N/A

Evidence snippets:
- The limit flag is an optional parameter that indicates the maximum number of entries to return. gcloud logging read "projects/ PROJECT ID /logs/cloudsql.googleapis.com/mysql-general.log" \ --limit = 10 gcloud logging read "projects/ PROJECT ID /logs/cloudsql.googleapis.com/postgres.log" \ --limit = 10 Private IP addresses Connections to a Cloud SQL instance using a private IP address are automatically authorized for RFC 1918 address ranges .
- Connections to a Cloud SQL instance using a private IP address are automatically authorized for RFC 1918 address ranges .
- Non-RFC 1918 address ranges must be configured in Cloud SQL as authorized networks .
- Non-RFC 1918 address ranges must be configured as authorized networks .

### "Authorize with authorized networks \_|\_ Cloud SQL for SQL Server \_|\_\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/authorize-networks](https://docs.cloud.google.com/sql/docs/sqlserver/authorize-networks)
- Source ID: `site-docs-reference-required-4`
- Final score: 97
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Your client application is connecting directly to a Cloud SQL instance on its private IP address, and your client's IP address is a non-RFC 1918 address The IP address can be either a single endpoint or consist of a range in CIDR notation .
- These are automatically and implicitly included in the authorized networks by Cloud SQL 192.168.0.0/16 RFC 1918 address range.
- These are automatically and implicitly included in the authorized networks by Cloud SQL 172.16.0.0/12 RFC 1918 address range.
- Address range Notes 10.0.0.0/8 RFC 1918 address range.

### "Export and import using BAK files and transaction log files \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/import-export/import-export-bak](https://docs.cloud.google.com/sql/docs/sqlserver/import-export/import-export-bak)
- Source ID: `site-docs-root`
- Final score: 76
- Re-rank relevance: N/A

Evidence snippets:
- For example, Cloud SQL for SQL Server supports change data capture (CDC) for the following database versions: SQL Server 2017 Standard SQL Server 2017 Enterprise SQL Server 2019 Standard SQL Server 2019 Enterprise SQL Server 2022 Standard SQL Server 2022 Enterprise When importing a CDC-enabled database, the KEEP CDC flag is retained.
- Look for the serviceAccountEmailAddress field in the output. gcloud sql instances describe INSTANCE NAME Use gcloud storage buckets add-iam-policy-binding to grant the storage.objectAdmin IAM role to the service account.
- Look for the serviceAccountEmailAddress field in the output. gcloud sql instances describe INSTANCE NAME Use gcloud storage buckets add-iam-policy-binding to grant the storage.objectAdmin IAM role to the service account.
- Look for the serviceAccountEmailAddress field in the output. gcloud sql instances describe INSTANCE NAME Use gcloud storage buckets add-iam-policy-binding to grant the storage.objectAdmin IAM role to the service account.

