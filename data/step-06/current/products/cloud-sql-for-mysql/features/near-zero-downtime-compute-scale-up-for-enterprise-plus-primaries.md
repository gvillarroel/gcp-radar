---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:24:12.848Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Near-zero downtime compute scale-up for Enterprise Plus primaries"
feature_slug: "near-zero-downtime-compute-scale-up-for-enterprise-plus-primaries"
latest_feature_date: "2024-04-02"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/availability"
  - "https://docs.cloud.google.com/sql/docs/mysql/release-notes"
  - "https://docs.cloud.google.com/sql/docs/release-notes"
keywords:
  - "near"
  - "zero"
  - "downtime"
  - "compute"
  - "scale"
  - "up"
  - "for"
  - "enterprise"
---

# Near-zero downtime compute scale-up for Enterprise Plus primaries

Product: Cloud SQL for MySQL
Coverage: LOW

## Step 02 Summary

Cloud SQL Enterprise Plus primary instances can scale up vCPU and memory with near-zero downtime.

## Extended Definition

Cloud SQL Enterprise Plus primary instances can scale up vCPU and memory with near-zero downtime.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/availability](https://docs.cloud.google.com/sql/docs/mysql/availability)
- [https://docs.cloud.google.com/sql/docs/mysql/release-notes](https://docs.cloud.google.com/sql/docs/mysql/release-notes)
- [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)

## Supporting Pages

### Availability in Cloud SQL \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/availability](https://docs.cloud.google.com/sql/docs/mysql/availability)
- Source ID: `site-iam-reference`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- Edition upgrade Perform an in-place upgrade to Cloud SQL Enterprise Plus edition Enable data cache You can enable or disable data cache as frequently as needed Instance scaling Scale-up: Increase the compute size (vCPU, memory) of your Cloud SQL instance as frequently as needed Scale-down: Reduce the compute size (vCPU, memory) of your Cloud SQL instance infrequently Note: If you scale down your instance more than once during a three-hour period, then only the first scale down event benefits from near-zero downtime.
- With a 99.99% uptime SLA and near-zero downtime for several planned operations, Cloud SQL Enterprise Plus edition offers greater resilience and business continuity for your applications.
- Planned operations with near-zero downtime For planned operations such as maintenance or some instance reconfigurations, Cloud SQL Enterprise Plus edition offers near-zero downtime for primary instances with no application changes or proxy requirements.
- The following planned operations benefit from the near-zero downtime on a Cloud SQL Enterprise Plus edition primary instance.

### Cloud SQL for MySQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/release-notes](https://docs.cloud.google.com/sql/docs/mysql/release-notes)
- Source ID: `site-docs-root`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- November 18, 2024 Feature Cloud SQL now supports near-zero downtime for infrequent scale downs (once every three hours) of the compute size (vCPU, memory) of your Cloud SQL Enterprise Plus edition primary instance.
- April 02, 2024 Feature You can now scale up the compute size (vCPU, memory) of a Cloud SQL Enterprise Plus edition primary instance with near-zero downtime.
- To check where your instance stores the transaction logs used for PITR, see Use point-in-time recovery (PITR) March 28, 2024 Feature You can now simulate a planned maintenance update with near-zero downtime on your Cloud SQL Enterprise Plus primary instance without updating your database.
- Feature Cloud SQL now supports near-zero downtime when you enable or disable data cache for Cloud SQL Enterprise Plus edition primary instances.

### Cloud SQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- November 18, 2024 Cloud SQL for MySQL Feature Cloud SQL now supports near-zero downtime for infrequent scale downs (once every three hours) of the compute size (vCPU, memory) of your Cloud SQL Enterprise Plus edition primary instance.
- Feature Cloud SQL now supports near-zero downtime for infrequent scale downs (once every three hours) of the compute size (vCPU, memory) of your Cloud SQL Enterprise Plus edition primary instance.
- April 02, 2024 Cloud SQL for MySQL Feature You can now scale up the compute size (vCPU, memory) of a Cloud SQL Enterprise Plus edition primary instance with near-zero downtime.
- Feature You can now scale up the compute size (vCPU, memory) of a Cloud SQL Enterprise Plus edition primary instance with near-zero downtime.

