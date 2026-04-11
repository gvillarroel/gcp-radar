---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:07:37.566Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "AlloyDB managed connection pooling"
feature_slug: "alloydb-managed-connection-pooling"
latest_feature_date: "2025-12-18"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/release-notes"
  - "https://docs.cloud.google.com/alloydb/docs/instance-read-pool-create"
keywords:
  - "workload scalability reliability"
  - "AlloyDB managed connection pooling"
  - "connection pooling GA"
  - "managed connection pooling"
  - "automatic connection pooling"
  - "connection pooling Preview"
  - "managed connection pool"
---

# AlloyDB managed connection pooling

Product: AlloyDB
Coverage: LOW

## Step 02 Summary

Managed connection pooling is generally available in AlloyDB to improve workload scalability and reliability; AlloyDB managed connection pooling is available in Preview to improve workload reliability, scalability, and performance.

## Extended Definition

Managed connection pooling is generally available in AlloyDB to improve workload scalability and reliability; AlloyDB managed connection pooling is available in Preview to improve workload reliability, scalability, and performance.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/release-notes](https://docs.cloud.google.com/alloydb/docs/release-notes)
- [https://docs.cloud.google.com/alloydb/docs/instance-read-pool-create](https://docs.cloud.google.com/alloydb/docs/instance-read-pool-create)

## Supporting Pages

### AlloyDB for PostgreSQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/release-notes](https://docs.cloud.google.com/alloydb/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 52
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see the following pages: Enable backup plans Enable database auditing Enable high availability Enable password policy Enforce SSL/TLS encryption Increase backup retention Increase cluster storage quota Optimize underprovisioned instances April 09, 2025 Feature AlloyDB now supports managed connection pooling in Preview .
- February 09, 2026 Fixed We are announcing the release of support for the AlloyDB language connectors and Auth Proxy with Auto IAM Authentication and managed connection pooling.
- You can use managed connection pooling on your instances to improve the reliability, scalability, and performance of your workloads by optimizing resource utilization.
- January 21, 2026 Issue Automatic IAM authentication is unavailable when you use managed connection pooling with the AlloyDB Auth Proxy and Language Connectors.

### "Create a read pool instance in a cluster \_|\_ AlloyDB for PostgreSQL \_\

- URL: [https://docs.cloud.google.com/alloydb/docs/instance-read-pool-create](https://docs.cloud.google.com/alloydb/docs/instance-read-pool-create)
- Source ID: `site-docs-root`
- Final score: 38
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To enable managed connection pooling in your read pool instance, add the --enable-connection-pooling flag to the gcloud alloydb instances create command: gcloud alloydb instances create INSTANCE ID \ --instance-type = READ POOL \ --region = REGION ID \ --cluster = CLUSTER ID \ --cpu-count = CPU COUNT \ --machine-type = MACHINE TYPE \ --project = PROJECT ID \ --enable-connection-pooling To create a read pool instance for a public IP-enabled cluster, add the --assign-inbound-public-ip= ASSIGN IPV4 parameter. gcloud alloydb instances create INSTANCE ID \ --instance-type = READ POOL \ --region = REGION ID \ --cluster = CLUSTER ID \ --cpu-count = CPU COUNT \ --machine-type = MACHINE TYPE \ --project = PROJECT ID \ --assign-inbound-public-ip = ASSIGN IPV4 Optionally, you can pass the comma separated list of CIDR blocks, such as 64.233.160.0/16 to the --authorized-external-networks parameter to set authorized external networks on your instance.
- Optional: To enable managed connection pooling, select Enable managed connection pool under Managed connection pool .
- For more information, see Configure managed connection pooling .

