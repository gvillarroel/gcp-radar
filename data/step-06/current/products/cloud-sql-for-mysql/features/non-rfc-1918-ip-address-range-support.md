---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:24:12.879Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Non-RFC 1918 IP address range support"
feature_slug: "non-rfc-1918-ip-address-range-support"
latest_feature_date: "2023-07-06"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/configure-private-ip"
  - "https://docs.cloud.google.com/sql/docs/mysql/connection-org-policy"
  - "https://docs.cloud.google.com/sql/docs/mysql/release-notes"
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
Coverage: LOW

## Step 02 Summary

Cloud SQL supports creating and connecting to instances and replicas in non-RFC 1918 IP address ranges, including privately used public IP addresses.

## Extended Definition

Cloud SQL supports creating and connecting to instances and replicas in non-RFC 1918 IP address ranges, including privately used public IP addresses.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/configure-private-ip](https://docs.cloud.google.com/sql/docs/mysql/configure-private-ip)
- [https://docs.cloud.google.com/sql/docs/mysql/connection-org-policy](https://docs.cloud.google.com/sql/docs/mysql/connection-org-policy)
- [https://docs.cloud.google.com/sql/docs/mysql/release-notes](https://docs.cloud.google.com/sql/docs/mysql/release-notes)

## Supporting Pages

### Configure private IP \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/configure-private-ip](https://docs.cloud.google.com/sql/docs/mysql/configure-private-ip)
- Source ID: `site-iam-reference`
- Final score: 222
- Re-rank relevance: N/A

Evidence snippets:
- Note: You must configure all the non-RFC 1918 IP address ranges as authorized networks of the Cloud SQL for MySQL instances.
- Specifically, these are: 10.0.0.0/8 172.16.0.0/12 192.168.0.0/16 Connections to a Cloud SQL instance using a private IP address are automatically authorized for RFC 1918 address ranges .
- Note: If you're using a non-RFC 1918 IP address range for your application, then to allow access from this range, configure the authorized network for your instance.
- To connect from a non-RFC 1918 IP address, you must set per-instance IP authorization to allow traffic from non-RFC 1918 IP address ranges.

### "Cloud SQL organization policies \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/connection-org-policy](https://docs.cloud.google.com/sql/docs/mysql/connection-org-policy)
- Source ID: `site-docs-root`
- Final score: 204
- Re-rank relevance: N/A

Evidence snippets:
- Non-RFC 1918 private IP addresses Connections to a Cloud SQL instance using a private IP address are automatically authorized for RFC 1918 address ranges .
- By default, you can add Authorized Networks to Cloud SQL instances. constraints/sql.restrictAuthorizedNetworks Allowed Restrictions for connection organization policies When you set the organization policy for each project, you need to determine if any one of the following apply to your project: Read replicas public IP conflicts Incompatibility using gcloud CLI sql connect Google Cloud hosted services access MySQL failover replica public IP conflicts Non-RFC 1918 private IP addresses Read replicas public IP address conflicts Cloud SQL read replicas connect to the primary instance over the non-proxied database connection.
- To use non-RFC 1918 private IP ranges that are not configured in the authorized networks, you can take one or both of the following actions: Don't enforce sql.restrictAuthorizedNetworks .
- You must configure non-RFC 1918 address ranges as authorized networks .

### Cloud SQL for MySQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/release-notes](https://docs.cloud.google.com/sql/docs/mysql/release-notes)
- Source ID: `site-docs-root`
- Final score: 194
- Re-rank relevance: N/A

Evidence snippets:
- July 06, 2023 Feature Cloud SQL now supports non-RFC 1918 IP address ranges , including privately used public IP addresses.
- Additionally, you can connect to an instance from an application that is running in a non-RFC 1918 IP address range.
- This enables you to create instances and replicas in a non-RFC 1918 IP address range.
- October 04, 2021 Feature Cloud SQL now supports the ability for you to specify IP CIDR ranges from your VPC network for your Cloud SQL instances allowing you to manage your IP address space better.

