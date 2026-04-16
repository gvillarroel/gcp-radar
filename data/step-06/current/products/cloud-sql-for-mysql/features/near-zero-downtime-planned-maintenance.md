---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:51.911Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Near-zero downtime planned maintenance"
feature_slug: "near-zero-downtime-planned-maintenance"
latest_feature_date: "2024-09-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/availability"
  - "https://docs.cloud.google.com/sql/docs/availability"
  - "https://docs.cloud.google.com/sql/docs/editions-intro"
keywords:
  - "near"
  - "zero"
  - "downtime"
  - "planned"
  - "maintenance"
  - "sql"
  - "supports"
  - "simulation"
---

# Near-zero downtime planned maintenance

Product: Cloud SQL for MySQL
Coverage: MEDIUM

## Step 02 Summary

Cloud SQL supports near-zero downtime planned maintenance and maintenance simulation for standalone Enterprise Plus primary instances.

## Extended Definition

Cloud SQL supports near-zero downtime planned maintenance and maintenance simulation for standalone Enterprise Plus primary instances.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/availability](https://docs.cloud.google.com/sql/docs/mysql/availability)
- [https://docs.cloud.google.com/sql/docs/availability](https://docs.cloud.google.com/sql/docs/availability)
- [https://docs.cloud.google.com/sql/docs/editions-intro](https://docs.cloud.google.com/sql/docs/editions-intro)

## Supporting Pages

### Availability in Cloud SQL \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/availability](https://docs.cloud.google.com/sql/docs/mysql/availability)
- Source ID: `site-docs-reference-3`
- Final score: 151
- Re-rank relevance: N/A

Evidence snippets:
- Planned operations with near-zero downtime For planned operations such as maintenance or some instance reconfigurations, Cloud SQL Enterprise Plus edition offers near-zero downtime for primary instances with no application changes or proxy requirements.
- With a 99.99% uptime SLA and near-zero downtime for several planned operations, Cloud SQL Enterprise Plus edition offers greater resilience and business continuity for your applications.
- The following planned operations benefit from the near-zero downtime on a Cloud SQL Enterprise Plus edition primary instance.
- Edition upgrade Perform an in-place upgrade to Cloud SQL Enterprise Plus edition Enable data cache You can enable or disable data cache as frequently as needed Instance scaling Scale-up: Increase the compute size (vCPU, memory) of your Cloud SQL instance as frequently as needed Scale-down: Reduce the compute size (vCPU, memory) of your Cloud SQL instance infrequently Note: If you scale down your instance more than once during a three-hour period, then only the first scale down event benefits from near-zero downtime.

### Availability in Cloud SQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/availability](https://docs.cloud.google.com/sql/docs/availability)
- Source ID: `site-docs-root`
- Final score: 149
- Re-rank relevance: N/A

Evidence snippets:
- Maintenance , which includes the following operations with sub-second downtime: Automatic maintenance that Cloud SQL performs every quarter Self-service maintenance that you can initiate at any time Maintenance simulation that you can initiate to test the sub-second downtime behavior Minor version upgrade Perform a minor version upgrade on a MySQL 8.0 instance with sub-second downtime For PostgreSQL instances, minor version upgrades are part of automatic maintenance and happen with sub-second downtime Edition upgrade Perform an in-place upgrade to Cloud SQL Enterprise Plus edition Enable data cache You can enable or disable data cache as frequently as needed Instance scaling Scale-up: Increase the compute size (vCPU, memory) of your Cloud SQL instance as frequently as needed Scale-down: Reduce the compute size (vCPU, memory) of your Cloud SQL instance infrequently Note: If you scale down your instance more than once during a three-hour period, then only the first scale down event benefits from near-zero downtime.
- Planned operations with near-zero downtime For planned operations such as maintenance or some instance reconfigurations, Cloud SQL Enterprise Plus edition offers near-zero downtime for primary instances with no application changes or proxy requirements.
- With a 99.99% uptime SLA and near-zero downtime for several planned operations, Cloud SQL Enterprise Plus edition offers greater resilience and business continuity for your applications.
- The following planned operations benefit from the near-zero downtime on a Cloud SQL Enterprise Plus edition primary instance.

### "Cloud SQL editions overview \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/editions-intro](https://docs.cloud.google.com/sql/docs/editions-intro)
- Source ID: `site-docs-reference-3`
- Final score: 117
- Re-rank relevance: N/A

Evidence snippets:
- Availability Cloud SQL Enterprise Plus edition provides the following availability enhancements: Near-zero downtime : sub-second downtime for maintenance and planned operations, including patching and scaling.
- MySQL 5.6, 5.7, 8.0, 8.4 Availability SLA 99.99% (includes maintenance) 99.95% (excludes maintenance) Performance Machine series N2 C4A General purpose shared core General purpose dedicated core N4 Machine configuration limits N2 machine series Up to 128 vCPU Up to 864 GB RAM 1:8 core:memory ratio C4A machine series Up to 72 vCPU Up to 576 GB RAM 1:8 core:memory ratio General purpose shared core 1 vCPU Up to 1.7 GB RAM 1:6.5 core:memory ratio General purpose dedicated core Up to 96 vCPU Up to 624 GB RAM 1:6.5 core:memory ratio N4 machine series Up to 80 vCPU Up to 624 GB RAM 1:8 core:memory ratio Data cache Yes No Optimized writes Yes No Point-in-time log retention Up to 35 days Up to 7 days Read pools Yes No Availability Maintenance downtime Planned operations downtime Sub-second downtime Few minutes Advanced disaster recovery (DR) Yes No Write endpoint for advanced disaster recovery (DR) Yes No Write endpoint connectivity Yes No Managed Connection Pooling Yes No Observability AI-assisted troubleshooting Yes No Query insights 30 day metric retention 1 MB query length 200 query plan sample maximum Wait event analysis Index advisor recommendations 7 day metric retention 4500 bytes query length 20 query plan sample maximum Enhanced recommenders Yes No Cloud SQL Enterprise Plus edition enhancements Cloud SQL Enterprise Plus edition is ideal for applications that require the best performance, availability, and observability.
- By using in-place upgrade , you can upgrade your instances to Cloud SQL Enterprise Plus edition with near-zero downtime or switch to Cloud SQL Enterprise edition.
- Advanced disaster recovery (DR): configure disaster recovery with cross-regional replication for failover, and perform disaster recovery drills with zero data loss and minimal recovery time objective (RTO).

