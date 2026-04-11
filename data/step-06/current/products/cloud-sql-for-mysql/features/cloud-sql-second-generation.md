---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:24:12.989Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Cloud SQL Second Generation"
feature_slug: "cloud-sql-second-generation"
latest_feature_date: "2016-08-01"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/release-notes"
  - "https://docs.cloud.google.com/sql/docs/mysql/availability"
  - "https://docs.cloud.google.com/sql/docs/mysql/configure-legacy-ha"
keywords:
  - "sql"
  - "second"
  - "generation"
  - "for"
  - "mysql"
  - "reached"
  - "general"
  - "availability"
---

# Cloud SQL Second Generation

Product: Cloud SQL for MySQL
Coverage: LOW

## Step 02 Summary

Cloud SQL Second Generation for MySQL reached general availability.

## Extended Definition

Cloud SQL Second Generation for MySQL reached general availability.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/release-notes](https://docs.cloud.google.com/sql/docs/mysql/release-notes)
- [https://docs.cloud.google.com/sql/docs/mysql/availability](https://docs.cloud.google.com/sql/docs/mysql/availability)
- [https://docs.cloud.google.com/sql/docs/mysql/configure-legacy-ha](https://docs.cloud.google.com/sql/docs/mysql/configure-legacy-ha)

## Supporting Pages

### Cloud SQL for MySQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/release-notes](https://docs.cloud.google.com/sql/docs/mysql/release-notes)
- Source ID: `site-docs-root`
- Final score: 264
- Re-rank relevance: N/A

Evidence snippets:
- In the documentation and in the Google Cloud Console, "MySQL Second Generation instances" are now referred to simply as "MySQL instances." For general information about this deprecation, see the existing deprecation notice .
- To learn how high availability now works for Second Generation MySQL instances, see the Overview of the high availability configuration .
- October 01, 2018 Feature Upgrade to Second Generation generally available for eligible First Generation MySQL instances.
- June 25, 2019 Feature This release increases the maximum data storage for instances of MySQL (MySQL Second Generation) and PostgreSQL.

### Availability in Cloud SQL \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/availability](https://docs.cloud.google.com/sql/docs/mysql/availability)
- Source ID: `site-iam-reference`
- Final score: 226
- Re-rank relevance: N/A

Evidence snippets:
- Maintenance , which includes the following operations with sub-second downtime: Automatic maintenance that Cloud SQL performs every quarter Self-service maintenance that you can initiate at any time Maintenance simulation that you can initiate to test the sub-second downtime behavior Minor version upgrade Perform a minor version upgrade on a MySQL 8.0 instance with sub-second downtime Note: Requires maintenance version [MySQL version].R20250531.01 14 or later.
- For instances configured with regional availability, if the instance encounters a failure, then Cloud SQL automatically brings up the instance in the secondary zone with the same IP address and no data loss so that applications can resume operations on the database.
- Unplanned events and zonal outage For applications that require high availability, we recommend configuring the instance for regional availability, also referred to as the high availability (HA) configuration in Cloud SQL.
- Home Documentation Databases Cloud SQL MySQL Guides Send feedback Availability in Cloud SQL Stay organized with collections Save and categorize content based on your preferences.

### "Legacy configuration for high availability \_|\_ Cloud SQL for MySQL \_\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/configure-legacy-ha](https://docs.cloud.google.com/sql/docs/mysql/configure-legacy-ha)
- Source ID: `site-iam-reference`
- Final score: 220
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Databases Cloud SQL MySQL Guides Send feedback Legacy configuration for high availability Stay organized with collections Save and categorize content based on your preferences.
- MySQL PostgreSQL SQL Server Important: As of January 13, 2025, the legacy configuration for high availability (HA) is deprecated for all instances.
- For more information about replication lag, search for "seconds behind master" on the SHOW SLAVE STATUS Syntax page in the MySQL documentation.
- In a legacy HA configuration, a Cloud SQL for MySQL instance uses a failover replica to add high availability to the instance.

