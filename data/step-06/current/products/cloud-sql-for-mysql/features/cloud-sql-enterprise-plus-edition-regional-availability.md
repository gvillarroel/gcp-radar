---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:24:12.870Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Cloud SQL Enterprise Plus edition regional availability"
feature_slug: "cloud-sql-enterprise-plus-edition-regional-availability"
latest_feature_date: "2023-08-18"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/availability"
  - "https://docs.cloud.google.com/sql/docs/mysql/choose-edition"
  - "https://docs.cloud.google.com/sql/docs/mysql/release-notes"
keywords:
  - "sql"
  - "enterprise"
  - "plus"
  - "edition"
  - "regional"
  - "availability"
  - "expanded"
  - "to"
---

# Cloud SQL Enterprise Plus edition regional availability

Product: Cloud SQL for MySQL
Coverage: LOW

## Step 02 Summary

Cloud SQL Enterprise Plus edition expanded availability to the europe-central2, europe-west9, southamerica-east1, and us-west1 regions; Cloud SQL Enterprise Plus edition expanded availability to the asia-northeast3 region.

## Extended Definition

Cloud SQL Enterprise Plus edition expanded availability to the europe-central2, europe-west9, southamerica-east1, and us-west1 regions; Cloud SQL Enterprise Plus edition expanded availability to the asia-northeast3 region.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/availability](https://docs.cloud.google.com/sql/docs/mysql/availability)
- [https://docs.cloud.google.com/sql/docs/mysql/choose-edition](https://docs.cloud.google.com/sql/docs/mysql/choose-edition)
- [https://docs.cloud.google.com/sql/docs/mysql/release-notes](https://docs.cloud.google.com/sql/docs/mysql/release-notes)

## Supporting Pages

### Availability in Cloud SQL \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/availability](https://docs.cloud.google.com/sql/docs/mysql/availability)
- Source ID: `site-iam-reference`
- Final score: 232
- Re-rank relevance: N/A

Evidence snippets:
- Edition upgrade Perform an in-place upgrade to Cloud SQL Enterprise Plus edition Enable data cache You can enable or disable data cache as frequently as needed Instance scaling Scale-up: Increase the compute size (vCPU, memory) of your Cloud SQL instance as frequently as needed Scale-down: Reduce the compute size (vCPU, memory) of your Cloud SQL instance infrequently Note: If you scale down your instance more than once during a three-hour period, then only the first scale down event benefits from near-zero downtime.
- Cloud SQL high availability is available for both Cloud SQL Enterprise Plus edition and Cloud SQL Enterprise edition.
- For instances configured with regional availability, if the instance encounters a failure, then Cloud SQL automatically brings up the instance in the secondary zone with the same IP address and no data loss so that applications can resume operations on the database.
- Planned operations with near-zero downtime For planned operations such as maintenance or some instance reconfigurations, Cloud SQL Enterprise Plus edition offers near-zero downtime for primary instances with no application changes or proxy requirements.

### "Choose a Cloud SQL edition \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/choose-edition](https://docs.cloud.google.com/sql/docs/mysql/choose-edition)
- Source ID: `site-iam-reference`
- Final score: 212
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Cloud SQL offers the following editions: Cloud SQL Enterprise Plus edition : provides enhanced performance, availability, and observability to run applications.
- Cloud SQL key features The following table provides an overview of key feature enhancements available in Cloud SQL Enterprise Plus edition compared to Cloud SQL Enterprise edition: Cloud SQL Enterprise Plus edition Cloud SQL Enterprise edition Database versions MySQL 8.0, 8.4 Note: If the database version for your instance is MySQL 8.4, then the default Cloud SQL edition is Enterprise Plus.
- Cloud SQL Enterprise edition : provides all core capabilities of Cloud SQL and is suitable for applications with less stringent availability and performance requirements.
- For details about Cloud SQL editions and the enhancements offered by the Cloud SQL Enterprise Plus edition, see Cloud SQL editions overview .

### Cloud SQL for MySQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/release-notes](https://docs.cloud.google.com/sql/docs/mysql/release-notes)
- Source ID: `site-docs-root`
- Final score: 196
- Re-rank relevance: N/A

Evidence snippets:
- April 04, 2024 Feature For Cloud SQL Enterprise Plus edition , you can now use advanced disaster recovery (DR) to simplify recovery and fallback processes after you perform a cross-regional failover.
- April 01, 2024 Change If your Cloud SQL Enterprise edition instance stores the transaction logs used for point-in-time recovery (PITR) on disk, then when you do an in-place upgrade to Cloud SQL Enterprise Plus edition, the storage location for the transaction logs is switched to Cloud Storage.
- Feature Cloud SQL Enterprise Plus edition now supports the following regions: europe-west8 (Milan) europe-west12 (Turin) us-west4 (Las Vegas) Announcement Cloud SQL for MySQL has completed the upgrade to MySQL 5.7.44.
- July 12, 2023 Feature Cloud SQL now offers two editions of Cloud SQL to support your various business and application needs: Cloud SQL Enterprise Plus edition and Cloud SQL Enterprise edition .

