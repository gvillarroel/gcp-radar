---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:45:01.367Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "Non-RFC 1918 IP address support"
feature_slug: "non-rfc-1918-ip-address-support"
latest_feature_date: "2023-07-06"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/configure-private-ip"
  - "https://docs.cloud.google.com/sql/docs/release-notes"
  - "https://docs.cloud.google.com/sql/docs/postgres/release-notes"
keywords:
  - "non"
  - "rfc"
  - "1918"
  - "ip"
  - "address"
  - "sql"
  - "supports"
  - "ranges"
---

# Non-RFC 1918 IP address support

Product: Cloud SQL for PostgreSQL
Coverage: LOW

## Step 02 Summary

Cloud SQL supports non-RFC 1918 IP address ranges for instance creation, replicas, and client connectivity.

## Extended Definition

Cloud SQL supports non-RFC 1918 IP address ranges for instance creation, replicas, and client connectivity.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/configure-private-ip](https://docs.cloud.google.com/sql/docs/postgres/configure-private-ip)
- [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- [https://docs.cloud.google.com/sql/docs/postgres/release-notes](https://docs.cloud.google.com/sql/docs/postgres/release-notes)

## Supporting Pages

### Configure private IP \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/configure-private-ip](https://docs.cloud.google.com/sql/docs/postgres/configure-private-ip)
- Source ID: `site-iam-reference`
- Final score: 208
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Note: You must configure all the non-RFC 1918 IP address ranges as authorized networks of the Cloud SQL for PostgreSQL instances.
- Specifically, these are: 10.0.0.0/8 172.16.0.0/12 192.168.0.0/16 Connections to a Cloud SQL instance using a private IP address are automatically authorized for RFC 1918 address ranges .
- To connect from a non-RFC 1918 IP address, you must set per-instance IP authorization to allow traffic from non-RFC 1918 IP address ranges.
- You need to update the network peering to Cloud SQL to export any non-RFC 1918 routes. gcloud compute networks peerings update cloudsql-postgres-googleapis-com \ --network = VPC NETWORK NAME \ --export-subnet-routes-with-public-ip \ --project = PROJECT ID Replace the following: cloudsql-postgres-googleapis-com is a Private Service Connection name from your VPC network page.

### Cloud SQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- July 06, 2023 Cloud SQL for MySQL Feature Cloud SQL now supports non-RFC 1918 IP address ranges , including privately used public IP addresses.
- Cloud SQL for PostgreSQL Feature Cloud SQL now supports non-RFC 1918 IP address ranges , including privately used public IP addresses.
- Cloud SQL for SQL Server Feature Cloud SQL now supports non-RFC 1918 IP address ranges , including privately used public IP addresses.
- October 04, 2021 Cloud SQL for MySQL Feature Cloud SQL now supports the ability for you to specify IP CIDR ranges from your VPC network for your Cloud SQL instances allowing you to manage your IP address space better.

### Cloud SQL for PostgreSQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/release-notes](https://docs.cloud.google.com/sql/docs/postgres/release-notes)
- Source ID: `site-docs-root`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- July 06, 2023 Feature Cloud SQL now supports non-RFC 1918 IP address ranges , including privately used public IP addresses.
- Additionally, you can connect to an instance from an application that is running in a non-RFC 1918 IP address range.
- This enables you to create instances and replicas in a non-RFC 1918 IP address range.
- January 17, 2025 Feature Cloud SQL for PostgreSQL version 17 adds support for the following extensions and plugins: Extensions and plugins ip4r oracle fdw orafce pg background pg bigm pgfincore pg hint plan pg partman pg proctab pgrouting pg similarity pgtap pgtt pg wait sampling PL/Proxy plv8 postgresql anonymizer postgresql hll prefix temporal tables Cloud SQL for PostgreSQL version 17 doesn't support: rdkit pg squeeze To use these extensions and plugins in your PostgreSQL 17 instance, update your instance to the POSTGRES 17 2.R20241011.00 11 maintenance version.

