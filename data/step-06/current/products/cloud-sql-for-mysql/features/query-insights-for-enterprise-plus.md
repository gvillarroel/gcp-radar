---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:51.895Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Query Insights for Enterprise Plus"
feature_slug: "query-insights-for-enterprise-plus"
latest_feature_date: "2025-04-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/editions-intro"
  - "https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances"
  - "https://docs.cloud.google.com/sql/docs/mysql/choose-edition"
keywords:
  - "query"
  - "insights"
  - "enterprise"
  - "plus"
  - "sql"
  - "provides"
  - "fine"
  - "grained"
---

# Query Insights for Enterprise Plus

Product: Cloud SQL for MySQL
Coverage: MEDIUM

## Step 02 Summary

Query Insights for Cloud SQL Enterprise Plus provides fine-grained metrics and granular query plan samples for faster root-cause analysis; Query Insights for Cloud SQL Enterprise Plus provides longer metrics retention, granular query plan details, and a higher query length limit.

## Extended Definition

Query Insights for Cloud SQL Enterprise Plus provides fine-grained metrics and granular query plan samples for faster root-cause analysis; Query Insights for Cloud SQL Enterprise Plus provides longer metrics retention, granular query plan details, and a higher query length limit.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/editions-intro](https://docs.cloud.google.com/sql/docs/editions-intro)
- [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances)
- [https://docs.cloud.google.com/sql/docs/mysql/choose-edition](https://docs.cloud.google.com/sql/docs/mysql/choose-edition)

## Supporting Pages

### "Cloud SQL editions overview \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/editions-intro](https://docs.cloud.google.com/sql/docs/editions-intro)
- Source ID: `site-docs-reference-3`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- Observability Cloud SQL Enterprise Plus edition provides the following observability enhancements: Query insights : advanced query performance diagnostics and filtering with up to 30-day metric retention, up to 1 MB query length limit, and a 200 query plan sample maximum.
- MySQL 5.6, 5.7, 8.0, 8.4 Availability SLA 99.99% (includes maintenance) 99.95% (excludes maintenance) Performance Machine series N2 C4A General purpose shared core General purpose dedicated core N4 Machine configuration limits N2 machine series Up to 128 vCPU Up to 864 GB RAM 1:8 core:memory ratio C4A machine series Up to 72 vCPU Up to 576 GB RAM 1:8 core:memory ratio General purpose shared core 1 vCPU Up to 1.7 GB RAM 1:6.5 core:memory ratio General purpose dedicated core Up to 96 vCPU Up to 624 GB RAM 1:6.5 core:memory ratio N4 machine series Up to 80 vCPU Up to 624 GB RAM 1:8 core:memory ratio Data cache Yes No Optimized writes Yes No Point-in-time log retention Up to 35 days Up to 7 days Read pools Yes No Availability Maintenance downtime Planned operations downtime Sub-second downtime Few minutes Advanced disaster recovery (DR) Yes No Write endpoint for advanced disaster recovery (DR) Yes No Write endpoint connectivity Yes No Managed Connection Pooling Yes No Observability AI-assisted troubleshooting Yes No Query insights 30 day metric retention 1 MB query length 200 query plan sample maximum Wait event analysis Index advisor recommendations 7 day metric retention 4500 bytes query length 20 query plan sample maximum Enhanced recommenders Yes No Cloud SQL Enterprise Plus edition enhancements Cloud SQL Enterprise Plus edition is ideal for applications that require the best performance, availability, and observability.
- Cloud SQL editions features The following table provides an overview of key features enhancements available for Cloud SQL Enterprise Plus edition when compared to Cloud SQL Enterprise edition: Cloud SQL Enterprise Plus edition Cloud SQL Enterprise edition Database versions MySQL 8.0, 8.4 Note: If the database version for your instance is MySQL 8.4, then the default Cloud SQL edition is Enterprise Plus.
- Availability Cloud SQL Enterprise Plus edition provides the following availability enhancements: Near-zero downtime : sub-second downtime for maintenance and planned operations, including patching and scaling.

### REST Resource: instances \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances)
- Source ID: `site-docs-reference-3`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- JSON representation { "queryInsightsEnabled" : boolean , "recordClientAddress" : boolean , "recordApplicationTags" : boolean , "queryStringLength" : integer , "queryPlansPerMinute" : integer , "enhancedQueryInsightsEnabled" : boolean } Fields queryInsightsEnabled boolean Whether Query Insights feature is enabled. recordClientAddress boolean Whether Query Insights will record client address when enabled. recordApplicationTags boolean Whether Query Insights will record application tags from query when enabled. queryStringLength integer Maximum query length stored in bytes.
- Changing query length will restart the database. queryPlansPerMinute integer Number of query execution plans captured by Insights per minute for all queries combined.
- A DR replica is an optional configuration for Enterprise Plus edition instances.
- Edition The edition of the instance, can be ENTERPRISE or ENTERPRISE PLUS.

### "Choose a Cloud SQL edition \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/choose-edition](https://docs.cloud.google.com/sql/docs/mysql/choose-edition)
- Source ID: `site-docs-reference-required-5`
- Final score: 132
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloud SQL key features The following table provides an overview of key feature enhancements available in Cloud SQL Enterprise Plus edition compared to Cloud SQL Enterprise edition: Cloud SQL Enterprise Plus edition Cloud SQL Enterprise edition Database versions MySQL 8.0, 8.4 Note: If the database version for your instance is MySQL 8.4, then the default Cloud SQL edition is Enterprise Plus.
- Cloud SQL offers the following editions: Cloud SQL Enterprise Plus edition : provides enhanced performance, availability, and observability to run applications.
- MySQL 5.6, 5.7, 8.0, 8.4 Availability SLA 99.99% (includes maintenance) 99.95% (excludes maintenance) Performance Machine series N2 C4A General purpose shared core General purpose dedicated core N4 Machine configuration limits N2 machine series Up to 128 vCPU Up to 864 GB RAM 1:8 core:memory ratio C4A machine series Up to 72 vCPU Up to 576 GB RAM 1:8 core:memory ratio General purpose shared core 1 vCPU Up to 1.7 GB RAM 1:6.5 core:memory ratio General purpose dedicated core Up to 96 vCPU Up to 624 GB RAM 1:6.5 core:memory ratio N4 machine series Up to 80 vCPU Up to 624 GB RAM 1:8 core:memory ratio Data cache Yes No Optimized writes Yes No Point-in-time log retention Up to 35 days Up to 7 days Read pools Yes No Availability Maintenance downtime Planned operations downtime Sub-second downtime Few minutes Advanced disaster recovery (DR) Yes No Write endpoint for advanced disaster recovery (DR) Yes No Write endpoint connectivity Yes No Managed Connection Pooling Yes No Observability AI-assisted troubleshooting Yes No Query insights 30 day metric retention 1 MB query length 200 query plan sample maximum Wait event analysis Index advisor recommendations 7 day metric retention 4500 bytes query length 20 query plan sample maximum Enhanced recommenders Yes No What's next Plan and prepare to create a new instance.
- Cloud SQL Enterprise edition : provides all core capabilities of Cloud SQL and is suitable for applications with less stringent availability and performance requirements.

