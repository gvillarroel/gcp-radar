---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:24:12.811Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Read pools"
feature_slug: "read-pools"
latest_feature_date: "2025-09-08"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/about-read-pools"
  - "https://docs.cloud.google.com/sql/docs/release-notes"
  - "https://docs.cloud.google.com/sql/docs/mysql/release-notes"
keywords:
  - "read"
  - "pools"
  - "this"
  - "provides"
  - "single"
  - "load"
  - "balanced"
  - "endpoint"
---

# Read pools

Product: Cloud SQL for MySQL
Coverage: LOW

## Step 02 Summary

This feature provides a single load-balanced endpoint in front of multiple read pool nodes to scale read workloads; Read pools provide a single load-balanced endpoint in front of up to 20 read pool nodes for scaling large read workloads.

## Extended Definition

This feature provides a single load-balanced endpoint in front of multiple read pool nodes to scale read workloads; Read pools provide a single load-balanced endpoint in front of up to 20 read pool nodes for scaling large read workloads.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/about-read-pools](https://docs.cloud.google.com/sql/docs/mysql/about-read-pools)
- [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- [https://docs.cloud.google.com/sql/docs/mysql/release-notes](https://docs.cloud.google.com/sql/docs/mysql/release-notes)

## Supporting Pages

### About read pools \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/about-read-pools](https://docs.cloud.google.com/sql/docs/mysql/about-read-pools)
- Source ID: `site-iam-reference`
- Final score: 192
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- When you want the read pool to scale in or scale out, applications that were previously connected to this single read endpoint don't need to be reconfigured, even though you can create new read pool nodes in the read pool or delete previous ones.
- What's next Create and manage read pools Read pool autoscaling Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Access a read pool through a single read endpoint The read pool is accessible through a single read endpoint with an immutable IP address.
- MySQL PostgreSQL SQL Server Cloud SQL read pools support load balancing for your large read workloads.

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

### Cloud SQL for MySQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/release-notes](https://docs.cloud.google.com/sql/docs/mysql/release-notes)
- Source ID: `site-docs-root`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- Read pools provide a single endpoint in front of up to 20 read pool nodes and automatically load balance traffic.
- Read pools provide a single endpoint in front of up to 20 read pool nodes and automatically load balance traffic.
- September 08, 2025 Feature Cloud SQL read pools are now generally available and provide operational simplicity and scaling for your read workloads.
- March 25, 2025 Feature Cloud SQL read pools provide operational simplicity and scaling for your large read workloads.

