---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:58:32.650Z"
product_name: "Cloud SQL for SQL Server"
product_slug: "cloud-sql-for-sql-server"
feature_name: "Cloud SQL Enterprise Plus edition"
feature_slug: "cloud-sql-enterprise-plus-edition"
latest_feature_date: "2024-08-01"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/sqlserver/choose-edition"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/release-notes"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/create-instance"
keywords:
  - "sql"
  - "enterprise"
  - "plus"
  - "edition"
  - "offers"
  - "the"
  - "for"
  - "server"
---

# Cloud SQL Enterprise Plus edition

Product: Cloud SQL for SQL Server
Coverage: LOW

## Step 02 Summary

Cloud SQL offers the Enterprise Plus edition for SQL Server with enhanced performance, availability, and disaster recovery capabilities.

## Extended Definition

Cloud SQL offers the Enterprise Plus edition for SQL Server with enhanced performance, availability, and disaster recovery capabilities.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/sqlserver/choose-edition](https://docs.cloud.google.com/sql/docs/sqlserver/choose-edition)
- [https://docs.cloud.google.com/sql/docs/sqlserver/release-notes](https://docs.cloud.google.com/sql/docs/sqlserver/release-notes)
- [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance)

## Supporting Pages

### "Choose a Cloud SQL edition \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/choose-edition](https://docs.cloud.google.com/sql/docs/sqlserver/choose-edition)
- Source ID: `site-iam-reference`
- Final score: 286
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Cloud SQL key features The following table provides an overview of key feature enhancements available in Cloud SQL Enterprise Plus edition compared to Cloud SQL Enterprise edition: Cloud SQL Enterprise Plus edition Cloud SQL Enterprise edition Database versions SQL Server 2025 Enterprise SQL Server 2022 Enterprise SQL Server 2019 Enterprise SQL Server 2025 (Standard, Enterprise, and Express) SQL Server 2022 (Standard, Enterprise, Express, and Web) SQL Server 2019 (Standard, Enterprise, Express, and Web) SQL Server 2017 (Standard, Enterprise, Express, and Web) Availability SLA 99.99% (includes maintenance) 99.95% (excludes maintenance) Performance Machine series N2 Memory-optimized-N2 General purpose dedicated core N4 Machine configuration limits N2 machine series Up to 128 vCPU Up to 864 GB RAM 1:8 core:memory ratio Memory-optimized-N machine series Up to 16 vCPU Up to 512 GB RAM 1:32 core:memory ratio General purpose dedicated core Up to 96 vCPU Up to 624 GB RAM 1:6.5 core:memory ratio N4 machine series Up to 80 vCPU Up to 624 GB RAM 1:8 core:memory ratio Data cache Yes No Point-in-time log retention Up to 35 days Up to 7 days Availability Maintenance downtime Planned operations downtime Sub-second downtime Few minutes Advanced disaster recovery (DR) Yes No Write endpoint for advanced disaster recovery (DR) Yes No Write endpoint connectivity Yes No Observability AI-assisted troubleshooting Yes No Query insights 30 day metric retention 1 MB query length 200 query plan sample maximum Wait event analysis Index advisor recommendations 7 day metric retention 4500 bytes query length 20 query plan sample maximum Enhanced recommenders Yes No What's next Plan and prepare to create a new instance.
- Cloud SQL offers the following editions: Cloud SQL Enterprise Plus edition : provides enhanced performance, availability, and observability to run applications.
- For details about Cloud SQL editions and the enhancements offered by the Cloud SQL Enterprise Plus edition, see Cloud SQL editions overview .
- Cloud SQL Enterprise edition : provides all core capabilities of Cloud SQL and is suitable for applications with less stringent availability and performance requirements.

### Cloud SQL for SQL Server release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/release-notes](https://docs.cloud.google.com/sql/docs/sqlserver/release-notes)
- Source ID: `site-docs-root`
- Final score: 272
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Based on your application workloads and resource utilization, the recommender helps you optimize performance by identifying SQL Server instances that might see performance improvements when upgraded to Cloud SQL Enterprise Plus edition.
- August 01, 2024 Feature Cloud SQL for SQL Server now offers two editions of Cloud SQL to support your various business and application needs: Cloud SQL Enterprise Plus edition and Cloud SQL Enterprise edition .
- April 09, 2025 Feature Query insights for Cloud SQL Enterprise edition and Cloud SQL Enterprise Plus edition is now generally available (GA) for Cloud SQL for SQL Server.
- February 14, 2025 Change Point in time recovery (PITR) is available by default for all Cloud SQL Enterprise Plus edition for SQL Server instances.

### Create instances \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance)
- Source ID: `site-docs-root`
- Final score: 268
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Choose between Cloud SQL Enterprise Plus edition and Cloud SQL Enterprise edition When creating a Cloud SQL for SQL Server instance, you choose the machine configuration from several different machine families, depending on the Cloud SQL edition.
- With Cloud SQL Enterprise Plus edition, you choose from two machine families: Performance-optimized : offers a balanced price performance for various SQL Server workloads with a memory-to-compute ratio of 1 vCPU:8 GB RAM.
- In the Choose a Cloud SQL edition section of the Create a SQL Server instance page, select the Cloud SQL edition for your instance: Enterprise or Enterprise Plus .
- Data cache Enable data cache By default, the option to enable data cache is selected automatically for Cloud SQL for SQL Server Enterprise Plus edition instances.

