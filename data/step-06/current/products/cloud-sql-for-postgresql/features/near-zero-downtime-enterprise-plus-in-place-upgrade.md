---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:45:01.318Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "Near-zero downtime Enterprise Plus in-place upgrade"
feature_slug: "near-zero-downtime-enterprise-plus-in-place-upgrade"
latest_feature_date: "2024-09-12"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/release-notes"
  - "https://docs.cloud.google.com/sql/docs/release-notes"
  - "https://docs.cloud.google.com/sql/docs/postgres/availability"
keywords:
  - "near"
  - "zero"
  - "downtime"
  - "enterprise"
  - "plus"
  - "in"
  - "place"
  - "upgrade"
---

# Near-zero downtime Enterprise Plus in-place upgrade

Product: Cloud SQL for PostgreSQL
Coverage: LOW

## Step 02 Summary

Cloud SQL instances can be upgraded in place to Enterprise Plus edition with near-zero downtime.

## Extended Definition

Cloud SQL instances can be upgraded in place to Enterprise Plus edition with near-zero downtime.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/release-notes](https://docs.cloud.google.com/sql/docs/postgres/release-notes)
- [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- [https://docs.cloud.google.com/sql/docs/postgres/availability](https://docs.cloud.google.com/sql/docs/postgres/availability)

## Supporting Pages

### Cloud SQL for PostgreSQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/release-notes](https://docs.cloud.google.com/sql/docs/postgres/release-notes)
- Source ID: `site-docs-root`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- September 12, 2024 Feature You can now upgrade your instances to Cloud SQL Enterprise Plus edition with near-zero downtime.
- Feature Cloud SQL now supports near-zero downtime for infrequent scale downs (once every three hours) of the compute size (vCPU, memory) of your Cloud SQL Enterprise Plus edition primary instance.
- February 08, 2024 Feature Cloud SQL now supports near-zero downtime planned maintenance on HA-enabled Cloud SQL Enterprise Plus instances with all combinations of public IP connectivity.
- March 28, 2024 Feature You can now simulate a planned maintenance update with near-zero downtime on your Cloud SQL Enterprise Plus primary instance without updating your database.

### Cloud SQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- Cloud SQL for SQL Server Feature Cloud SQL now offers planned maintenance and machine tier upgrades for your Cloud SQL Enterprise plus instances with near-zero downtime for eligible instances.
- Cloud SQL for PostgreSQL Feature You can now upgrade your instances to Cloud SQL Enterprise Plus edition with near-zero downtime.
- Feature You can now upgrade the minor version of a Cloud SQL for MySQL Enterprise Plus edition instance with near-zero downtime.
- Feature You can now upgrade your instances to Cloud SQL Enterprise Plus edition with near-zero downtime.

### "Availability in Cloud SQL \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/availability](https://docs.cloud.google.com/sql/docs/postgres/availability)
- Source ID: `site-iam-reference`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- Maintenance , which includes the following operations with sub-second downtime: Automatic maintenance that Cloud SQL performs every quarter Self-service maintenance that you can initiate at any time Maintenance simulation that you can initiate to test the sub-second downtime behavior Minor version upgrade Minor version upgrades are part of automatic maintenance and happen with sub-second downtime Edition upgrade Perform an in-place upgrade to Cloud SQL Enterprise Plus edition Enable data cache You can enable or disable data cache as frequently as needed Instance scaling Scale-up: Increase the compute size (vCPU, memory) of your Cloud SQL instance as frequently as needed Scale-down: Reduce the compute size (vCPU, memory) of your Cloud SQL instance infrequently Note: If you scale down your instance more than once during a three-hour period, then only the first scale down event benefits from near-zero downtime.
- Planned operations with near-zero downtime For planned operations such as maintenance or some instance reconfigurations, Cloud SQL Enterprise Plus edition offers near-zero downtime for primary instances with no application changes or proxy requirements.
- With a 99.99% uptime SLA and near-zero downtime for several planned operations, Cloud SQL Enterprise Plus edition offers greater resilience and business continuity for your applications.
- The following planned operations benefit from the near-zero downtime on a Cloud SQL Enterprise Plus edition primary instance.

