---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:58:32.598Z"
product_name: "Cloud SQL for SQL Server"
product_slug: "cloud-sql-for-sql-server"
feature_name: "Near-zero downtime maintenance and machine tier upgrades"
feature_slug: "near-zero-downtime-maintenance-and-machine-tier-upgrades"
latest_feature_date: "2025-08-07"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/release-notes"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/release-notes"
  - "https://docs.cloud.google.com/sql/docs/availability"
keywords:
  - "near"
  - "zero"
  - "downtime"
  - "maintenance"
  - "and"
  - "machine"
  - "tier"
  - "upgrades"
---

# Near-zero downtime maintenance and machine tier upgrades

Product: Cloud SQL for SQL Server
Coverage: LOW

## Step 02 Summary

Near-zero downtime maintenance and machine tier upgrades reduce disruption for eligible Cloud SQL Enterprise Plus instances during maintenance and tier changes.

## Extended Definition

Near-zero downtime maintenance and machine tier upgrades reduce disruption for eligible Cloud SQL Enterprise Plus instances during maintenance and tier changes.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- [https://docs.cloud.google.com/sql/docs/sqlserver/release-notes](https://docs.cloud.google.com/sql/docs/sqlserver/release-notes)
- [https://docs.cloud.google.com/sql/docs/availability](https://docs.cloud.google.com/sql/docs/availability)

## Supporting Pages

### Cloud SQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- Cloud SQL for SQL Server Feature Cloud SQL now offers planned maintenance and machine tier upgrades for your Cloud SQL Enterprise plus instances with near-zero downtime for eligible instances.
- September 12, 2024 Cloud SQL for MySQL Feature Cloud SQL now supports near-zero downtime planned maintenance on standalone Cloud SQL Enterprise Plus edition primary instances.
- In addition, you can also simulate near-zero downtime for planned maintenance events on standalone Cloud SQL Enterprise Plus edition primary instances.
- In addition, you can also simulate near-zero downtime for planned maintenance events on standalone Cloud SQL Enterprise Plus edition primary instances.

### Cloud SQL for SQL Server release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/release-notes](https://docs.cloud.google.com/sql/docs/sqlserver/release-notes)
- Source ID: `site-docs-root`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- August 07, 2025 Feature Cloud SQL now offers planned maintenance and machine tier upgrades for your Cloud SQL Enterprise plus instances with near-zero downtime for eligible instances.
- Maintenance changelogs provide information about updates available in new maintenance versions, such as database minor version upgrades and patches for security vulnerabilities.
- In addition, some labels in the Google Cloud Console have been renamed to align with this new option: Order of update is renamed to Maintenance timing Earlier is renamed to Week 1 Later is renamed to Week 2 For more information, see Maintenance settings and Find and set maintenance windows .
- Feature Cloud SQL for SQL Server now supports SQL Server 2025 ( GA ): SQL Server 2025 Standard SQL Server 2025 Enterprise SQL Server 2025 Express For more information, see Database versions and version policies and Choose a machine series .

### Availability in Cloud SQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/availability](https://docs.cloud.google.com/sql/docs/availability)
- Source ID: `site-docs-root`
- Final score: 106
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Maintenance , which includes the following operations with sub-second downtime: Automatic maintenance that Cloud SQL performs every quarter Self-service maintenance that you can initiate at any time Maintenance simulation that you can initiate to test the sub-second downtime behavior Minor version upgrade Perform a minor version upgrade on a MySQL 8.0 instance with sub-second downtime For PostgreSQL instances, minor version upgrades are part of automatic maintenance and happen with sub-second downtime Edition upgrade Perform an in-place upgrade to Cloud SQL Enterprise Plus edition Enable data cache You can enable or disable data cache as frequently as needed Instance scaling Scale-up: Increase the compute size (vCPU, memory) of your Cloud SQL instance as frequently as needed Scale-down: Reduce the compute size (vCPU, memory) of your Cloud SQL instance infrequently Note: If you scale down your instance more than once during a three-hour period, then only the first scale down event benefits from near-zero downtime.
- Planned operations with near-zero downtime For planned operations such as maintenance or some instance reconfigurations, Cloud SQL Enterprise Plus edition offers near-zero downtime for primary instances with no application changes or proxy requirements.
- With a 99.99% uptime SLA and near-zero downtime for several planned operations, Cloud SQL Enterprise Plus edition offers greater resilience and business continuity for your applications.
- The following planned operations benefit from the near-zero downtime on a Cloud SQL Enterprise Plus edition primary instance.

