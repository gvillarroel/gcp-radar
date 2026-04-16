---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:51.940Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Non-RFC 1918 IP address range support"
feature_slug: "non-rfc-1918-ip-address-range-support"
latest_feature_date: "2023-07-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/debugging-connectivity"
  - "https://docs.cloud.google.com/sql/docs/mysql/connection-org-policy"
  - "https://docs.cloud.google.com/sql/docs/mysql/authorize-networks"
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

Product: Cloud SQL for MySQL
Coverage: MEDIUM

## Step 02 Summary

Cloud SQL supports creating and connecting to instances and replicas in non-RFC 1918 IP address ranges, including privately used public IP addresses.

## Extended Definition

Cloud SQL supports creating and connecting to instances and replicas in non-RFC 1918 IP address ranges, including privately used public IP addresses.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/debugging-connectivity](https://docs.cloud.google.com/sql/docs/debugging-connectivity)
- [https://docs.cloud.google.com/sql/docs/mysql/connection-org-policy](https://docs.cloud.google.com/sql/docs/mysql/connection-org-policy)
- [https://docs.cloud.google.com/sql/docs/mysql/authorize-networks](https://docs.cloud.google.com/sql/docs/mysql/authorize-networks)

## Supporting Pages

### Debugging connection issues \_|\_ Cloud SQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/debugging-connectivity](https://docs.cloud.google.com/sql/docs/debugging-connectivity)
- Source ID: `site-docs-root`
- Final score: 111
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The limit flag is an optional parameter that indicates the maximum number of entries to return. gcloud logging read "projects/ PROJECT ID /logs/cloudsql.googleapis.com/mysql-general.log" \ --limit = 10 gcloud logging read "projects/ PROJECT ID /logs/cloudsql.googleapis.com/postgres.log" \ --limit = 10 Private IP addresses Connections to a Cloud SQL instance using a private IP address are automatically authorized for RFC 1918 address ranges .
- Connections to a Cloud SQL instance using a private IP address are automatically authorized for RFC 1918 address ranges .
- Non-RFC 1918 address ranges must be configured in Cloud SQL as authorized networks .
- Non-RFC 1918 address ranges must be configured as authorized networks .

### "Cloud SQL organization policies \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/connection-org-policy](https://docs.cloud.google.com/sql/docs/mysql/connection-org-policy)
- Source ID: `site-docs-root`
- Final score: 101
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Non-RFC 1918 private IP addresses Connections to a Cloud SQL instance using a private IP address are automatically authorized for RFC 1918 address ranges .
- You must configure non-RFC 1918 address ranges as authorized networks .
- By default, you can add Authorized Networks to Cloud SQL instances. constraints/sql.restrictAuthorizedNetworks Allowed Restrictions for connection organization policies When you set the organization policy for each project, you need to determine if any one of the following apply to your project: Read replicas public IP conflicts Incompatibility using gcloud CLI sql connect Google Cloud hosted services access MySQL failover replica public IP conflicts Non-RFC 1918 private IP addresses Read replicas public IP address conflicts Cloud SQL read replicas connect to the primary instance over the non-proxied database connection.
- To use non-RFC 1918 private IP ranges that are not configured in the authorized networks, you can take one or both of the following actions: Don't enforce sql.restrictAuthorizedNetworks .

### "Authorize with authorized networks \_|\_ Cloud SQL for MySQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/authorize-networks](https://docs.cloud.google.com/sql/docs/mysql/authorize-networks)
- Source ID: `site-docs-reference-required-5`
- Final score: 97
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Your client application is connecting directly to a Cloud SQL instance on its private IP address, and your client's IP address is a non-RFC 1918 address The IP address can be either a single endpoint or consist of a range in CIDR notation .
- These are automatically and implicitly included in the authorized networks by Cloud SQL 192.168.0.0/16 RFC 1918 address range.
- These are automatically and implicitly included in the authorized networks by Cloud SQL 172.16.0.0/12 RFC 1918 address range.
- Address range Notes 10.0.0.0/8 RFC 1918 address range.

