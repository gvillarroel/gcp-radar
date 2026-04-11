---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:24:12.834Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Near-zero downtime planned maintenance"
feature_slug: "near-zero-downtime-planned-maintenance"
latest_feature_date: "2024-09-12"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/release-notes"
  - "https://docs.cloud.google.com/sql/docs/mysql/availability"
  - "https://docs.cloud.google.com/sql/docs/release-notes"
keywords:
  - "near"
  - "zero"
  - "downtime"
  - "planned"
  - "maintenance"
  - "sql"
  - "supports"
  - "and"
---

# Near-zero downtime planned maintenance

Product: Cloud SQL for MySQL
Coverage: LOW

## Step 02 Summary

Cloud SQL supports near-zero downtime planned maintenance and maintenance simulation for standalone Enterprise Plus primary instances.

## Extended Definition

Cloud SQL supports near-zero downtime planned maintenance and maintenance simulation for standalone Enterprise Plus primary instances.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/release-notes](https://docs.cloud.google.com/sql/docs/mysql/release-notes)
- [https://docs.cloud.google.com/sql/docs/mysql/availability](https://docs.cloud.google.com/sql/docs/mysql/availability)
- [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)

## Supporting Pages

### Cloud SQL for MySQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/release-notes](https://docs.cloud.google.com/sql/docs/mysql/release-notes)
- Source ID: `site-docs-root`
- Final score: 224
- Re-rank relevance: N/A

Evidence snippets:
- September 12, 2024 Feature Cloud SQL now supports near-zero downtime planned maintenance on standalone Cloud SQL Enterprise Plus edition primary instances.
- February 08, 2024 Feature Cloud SQL now supports near-zero downtime planned maintenance on HA-enabled Cloud SQL Enterprise Plus instances with all combinations of public IP connectivity.
- In addition, you can also simulate near-zero downtime for planned maintenance events on standalone Cloud SQL Enterprise Plus edition primary instances.
- To check where your instance stores the transaction logs used for PITR, see Use point-in-time recovery (PITR) March 28, 2024 Feature You can now simulate a planned maintenance update with near-zero downtime on your Cloud SQL Enterprise Plus primary instance without updating your database.

### Availability in Cloud SQL \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/availability](https://docs.cloud.google.com/sql/docs/mysql/availability)
- Source ID: `site-iam-reference`
- Final score: 210
- Re-rank relevance: N/A

Evidence snippets:
- Planned operations with near-zero downtime For planned operations such as maintenance or some instance reconfigurations, Cloud SQL Enterprise Plus edition offers near-zero downtime for primary instances with no application changes or proxy requirements.
- With a 99.99% uptime SLA and near-zero downtime for several planned operations, Cloud SQL Enterprise Plus edition offers greater resilience and business continuity for your applications.
- The following planned operations benefit from the near-zero downtime on a Cloud SQL Enterprise Plus edition primary instance.
- Edition upgrade Perform an in-place upgrade to Cloud SQL Enterprise Plus edition Enable data cache You can enable or disable data cache as frequently as needed Instance scaling Scale-up: Increase the compute size (vCPU, memory) of your Cloud SQL instance as frequently as needed Scale-down: Reduce the compute size (vCPU, memory) of your Cloud SQL instance infrequently Note: If you scale down your instance more than once during a three-hour period, then only the first scale down event benefits from near-zero downtime.

### Cloud SQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 206
- Re-rank relevance: N/A

Evidence snippets:
- September 12, 2024 Cloud SQL for MySQL Feature Cloud SQL now supports near-zero downtime planned maintenance on standalone Cloud SQL Enterprise Plus edition primary instances.
- Feature Cloud SQL now supports near-zero downtime planned maintenance on standalone Cloud SQL Enterprise Plus edition primary instances.
- February 08, 2024 Cloud SQL for MySQL Feature Cloud SQL now supports near-zero downtime planned maintenance on HA-enabled Cloud SQL Enterprise Plus instances with all combinations of public IP connectivity.
- Cloud SQL for PostgreSQL Feature Cloud SQL now supports near-zero downtime planned maintenance on HA-enabled Cloud SQL Enterprise Plus instances with all combinations of public IP connectivity.

