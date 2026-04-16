---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T13:51:57.792Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "Smaller read replicas"
feature_slug: "smaller-read-replicas"
latest_feature_date: "2023-03-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/best-practices"
  - "https://docs.cloud.google.com/sql/docs/postgres/pricing"
  - "https://docs.cloud.google.com/sql/docs/postgres/create-instance"
keywords:
  - "smaller"
  - "fewer"
  - "cpus"
  - "configured"
  - "replicas"
  - "read"
---

# Smaller read replicas

Product: Cloud SQL for PostgreSQL
Coverage: MEDIUM

## Step 02 Summary

Cloud SQL read replicas can be configured with fewer CPUs and less RAM than their primary instances.

## Extended Definition

Cloud SQL read replicas can be configured with fewer CPUs and less RAM than their primary instances.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/best-practices](https://docs.cloud.google.com/sql/docs/postgres/best-practices)
- [https://docs.cloud.google.com/sql/docs/postgres/pricing](https://docs.cloud.google.com/sql/docs/postgres/pricing)
- [https://docs.cloud.google.com/sql/docs/postgres/create-instance](https://docs.cloud.google.com/sql/docs/postgres/create-instance)

## Supporting Pages

### "General best practices \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/best-practices](https://docs.cloud.google.com/sql/docs/postgres/best-practices)
- Source ID: `site-docs-root`
- Final score: 129
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If it's possible to reduce the number of WAL records, such as by having no replicas configured for this instance, the operation completes more quickly.
- If your instance is already at the maximum number of CPUs, you must shard your database to multiple instances.
- For read-heavy workloads, add read replicas to offload traffic from the primary instance.
- If issues occur with your Cloud SQL instance, review the following during troubleshooting: Debugging connection issues Diagnosing issues Known issues Troubleshooting Instance configuration and administration Best practice More information Read and follow the operational guidelines to ensure that your instances are covered by the Cloud SQL SLA .

### Cloud SQL pricing | Google Cloud

- URL: [https://docs.cloud.google.com/sql/docs/postgres/pricing](https://docs.cloud.google.com/sql/docs/postgres/pricing)
- Source ID: `site-docs-root`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- Disabling simultaneous multithreading (SMT) reduces the number of virtual CPUs (vCPUs) per core from 2 to 1, which in turn might reduce your SQL Server licensing costs.
- Instances with fewer than 4 vCPUs will be charged for SQL Server at 4 times the license rate to comply with these requirements.
- Read replicas and failover replicas are charged at the same rate as stand-alone instances.
- Read replicas and failover replicas are charged at the same rate as stand-alone instances.

### Create instances \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/create-instance](https://docs.cloud.google.com/sql/docs/postgres/create-instance)
- Source ID: `site-docs-root`
- Final score: 109
- Re-rank relevance: N/A

Evidence snippets:
- Private services access must already be configured for the network.
- Private services access must already be configured for the network.
- Private services access must already be configured for the network.
- Read replicas are counted as instances.

