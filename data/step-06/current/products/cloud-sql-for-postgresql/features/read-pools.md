---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:45:01.287Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "Read pools"
feature_slug: "read-pools"
latest_feature_date: "2025-09-08"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/about-read-pools"
  - "https://docs.cloud.google.com/sql/docs/release-notes"
  - "https://docs.cloud.google.com/sql/docs/postgres/release-notes"
keywords:
  - "read"
  - "pools"
  - "provide"
  - "single"
  - "load"
  - "balanced"
  - "endpoint"
  - "in"
---

# Read pools

Product: Cloud SQL for PostgreSQL
Coverage: LOW

## Step 02 Summary

Read pools provide a single load-balanced endpoint in front of multiple read pool nodes to scale read workloads; Read pools provide a single load-balanced endpoint across up to 20 read pool nodes to scale large read workloads.

## Extended Definition

Read pools provide a single load-balanced endpoint in front of multiple read pool nodes to scale read workloads; Read pools provide a single load-balanced endpoint across up to 20 read pool nodes to scale large read workloads.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/about-read-pools](https://docs.cloud.google.com/sql/docs/postgres/about-read-pools)
- [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- [https://docs.cloud.google.com/sql/docs/postgres/release-notes](https://docs.cloud.google.com/sql/docs/postgres/release-notes)

## Supporting Pages

### About read pools \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/about-read-pools](https://docs.cloud.google.com/sql/docs/postgres/about-read-pools)
- Source ID: `site-iam-reference`
- Final score: 200
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- When you want the read pool to scale in or scale out, applications that were previously connected to this single read endpoint don't need to be reconfigured, even though you can create new read pool nodes in the read pool or delete previous ones.
- Access a read pool through a single read endpoint The read pool is accessible through a single read endpoint with an immutable IP address.
- MySQL PostgreSQL SQL Server Cloud SQL read pools support load balancing for your large read workloads.
- In addition to operations that aren't supported on read replicas, the following operations aren't supported on read pools: Enable and disable replication Promote replica Restart Import Export Failover Re-encrypt Clone SSL/TLS certificates with shared CA or customer-managed CA can't be used with a read pool.

### Cloud SQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 184
- Re-rank relevance: N/A

Evidence snippets:
- Read pools provide a single endpoint in front of up to seven read pool nodes and automatically load balance traffic.
- Read pools provide a single endpoint in front of up to 20 read pool nodes and automatically load balance traffic.
- Read pools provide a single endpoint in front of up to 20 read pool nodes and automatically load balance traffic.
- Read pools provide a single endpoint in front of up to 20 read pool nodes and automatically load balance traffic.

### Cloud SQL for PostgreSQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/release-notes](https://docs.cloud.google.com/sql/docs/postgres/release-notes)
- Source ID: `site-docs-root`
- Final score: 180
- Re-rank relevance: N/A

Evidence snippets:
- Read pools provide a single endpoint in front of up to 20 read pool nodes and automatically load balance traffic.
- Read pools provide a single endpoint in front of up to 20 read pool nodes and automatically load balance traffic.
- September 08, 2025 Feature Cloud SQL read pools are now generally available and provide operational simplicity and scaling for your read workloads.
- March 25, 2025 Feature Cloud SQL read pools provide operational simplicity and scaling for your large read workloads.

