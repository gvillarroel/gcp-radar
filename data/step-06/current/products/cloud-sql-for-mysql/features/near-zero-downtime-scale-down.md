---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:24:12.828Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Near-zero downtime scale down"
feature_slug: "near-zero-downtime-scale-down"
latest_feature_date: "2024-11-18"
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
  - "scale"
  - "down"
  - "sql"
  - "supports"
  - "for"
---

# Near-zero downtime scale down

Product: Cloud SQL for MySQL
Coverage: LOW

## Step 02 Summary

Cloud SQL supports near-zero downtime for infrequent compute scale-down operations on Enterprise Plus primary instances.

## Extended Definition

Cloud SQL supports near-zero downtime for infrequent compute scale-down operations on Enterprise Plus primary instances.

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
- Final score: 232
- Re-rank relevance: N/A

Evidence snippets:
- November 18, 2024 Feature Cloud SQL now supports near-zero downtime for infrequent scale downs (once every three hours) of the compute size (vCPU, memory) of your Cloud SQL Enterprise Plus edition primary instance.
- Feature Cloud SQL now supports near-zero downtime when you enable or disable data cache for Cloud SQL Enterprise Plus edition primary instances.
- To check where your instance stores the transaction logs used for PITR, see Use point-in-time recovery (PITR) March 28, 2024 Feature You can now simulate a planned maintenance update with near-zero downtime on your Cloud SQL Enterprise Plus primary instance without updating your database.
- February 08, 2024 Feature Cloud SQL now supports near-zero downtime planned maintenance on HA-enabled Cloud SQL Enterprise Plus instances with all combinations of public IP connectivity.

### Availability in Cloud SQL \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/availability](https://docs.cloud.google.com/sql/docs/mysql/availability)
- Source ID: `site-iam-reference`
- Final score: 226
- Re-rank relevance: N/A

Evidence snippets:
- Edition upgrade Perform an in-place upgrade to Cloud SQL Enterprise Plus edition Enable data cache You can enable or disable data cache as frequently as needed Instance scaling Scale-up: Increase the compute size (vCPU, memory) of your Cloud SQL instance as frequently as needed Scale-down: Reduce the compute size (vCPU, memory) of your Cloud SQL instance infrequently Note: If you scale down your instance more than once during a three-hour period, then only the first scale down event benefits from near-zero downtime.
- Planned operations with near-zero downtime For planned operations such as maintenance or some instance reconfigurations, Cloud SQL Enterprise Plus edition offers near-zero downtime for primary instances with no application changes or proxy requirements.
- With a 99.99% uptime SLA and near-zero downtime for several planned operations, Cloud SQL Enterprise Plus edition offers greater resilience and business continuity for your applications.
- The following planned operations benefit from the near-zero downtime on a Cloud SQL Enterprise Plus edition primary instance.

### Cloud SQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 192
- Re-rank relevance: N/A

Evidence snippets:
- November 18, 2024 Cloud SQL for MySQL Feature Cloud SQL now supports near-zero downtime for infrequent scale downs (once every three hours) of the compute size (vCPU, memory) of your Cloud SQL Enterprise Plus edition primary instance.
- Feature Cloud SQL now supports near-zero downtime for infrequent scale downs (once every three hours) of the compute size (vCPU, memory) of your Cloud SQL Enterprise Plus edition primary instance.
- February 08, 2024 Cloud SQL for MySQL Feature Cloud SQL now supports near-zero downtime planned maintenance on HA-enabled Cloud SQL Enterprise Plus instances with all combinations of public IP connectivity.
- Cloud SQL for PostgreSQL Feature Cloud SQL now supports near-zero downtime planned maintenance on HA-enabled Cloud SQL Enterprise Plus instances with all combinations of public IP connectivity.

