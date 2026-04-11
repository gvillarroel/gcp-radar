---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:45:01.366Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "Cloud SQL editions"
feature_slug: "cloud-sql-editions"
latest_feature_date: "2023-07-12"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/release-notes"
  - "https://docs.cloud.google.com/sql/docs/release-notes"
  - "https://docs.cloud.google.com/sql/docs/postgres/create-instance"
keywords:
  - "sql"
  - "editions"
  - "offers"
  - "enterprise"
  - "and"
  - "plus"
  - "with"
  - "different"
---

# Cloud SQL editions

Product: Cloud SQL for PostgreSQL
Coverage: LOW

## Step 02 Summary

Cloud SQL offers Enterprise and Enterprise Plus editions with different performance and availability characteristics.

## Extended Definition

Cloud SQL offers Enterprise and Enterprise Plus editions with different performance and availability characteristics.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/release-notes](https://docs.cloud.google.com/sql/docs/postgres/release-notes)
- [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- [https://docs.cloud.google.com/sql/docs/postgres/create-instance](https://docs.cloud.google.com/sql/docs/postgres/create-instance)

## Supporting Pages

### Cloud SQL for PostgreSQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/release-notes](https://docs.cloud.google.com/sql/docs/postgres/release-notes)
- Source ID: `site-docs-root`
- Final score: 220
- Re-rank relevance: N/A

Evidence snippets:
- July 12, 2023 Feature Cloud SQL now offers two editions of Cloud SQL to support your various business and application needs: Cloud SQL Enterprise Plus edition and Cloud SQL Enterprise edition .
- October 02, 2023 Change For Cloud SQL Enterprise edition and Cloud SQL Enterprise Plus edition, you can restore backups across instances of different editions .
- Query insights for Cloud SQL Enterprise Plus edition offers fine-grained metrics such as wait events and granular query plan samples for faster root-cause analysis and intelligent index recommendations.
- January 25, 2024 Feature Cloud SQL Enterprise Plus edition now supports the following regions: asia-northeast2 (Osaka) asia-south2 (Delhi) europe-north1 (Finland) europe-southwest1 (Madrid) us-east5 (Columbus) us-south1 (Dallas) December 18, 2023 Feature Cloud SQL Enterprise Plus edition now supports the following regions: europe-west8 (Milan) europe-west12 (Turin) us-west4 (Las Vegas) December 14, 2023 Feature You can now use Database Migration Service to migrate data to an existing Cloud SQL instance that was created using Terraform or other Infrastructure-As-Code (IaC) Tools.

### Cloud SQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 210
- Re-rank relevance: N/A

Evidence snippets:
- August 01, 2024 Cloud SQL for SQL Server Feature Cloud SQL for SQL Server now offers two editions of Cloud SQL to support your various business and application needs: Cloud SQL Enterprise Plus edition and Cloud SQL Enterprise edition .
- July 12, 2023 Cloud SQL for MySQL Feature Cloud SQL now offers two editions of Cloud SQL to support your various business and application needs: Cloud SQL Enterprise Plus edition and Cloud SQL Enterprise edition .
- Cloud SQL for PostgreSQL Feature Cloud SQL now offers two editions of Cloud SQL to support your various business and application needs: Cloud SQL Enterprise Plus edition and Cloud SQL Enterprise edition .
- Cloud SQL for SQL Server Feature Cloud SQL now offers planned maintenance and machine tier upgrades for your Cloud SQL Enterprise plus instances with near-zero downtime for eligible instances.

### Create instances \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/create-instance](https://docs.cloud.google.com/sql/docs/postgres/create-instance)
- Source ID: `site-docs-root`
- Final score: 204
- Re-rank relevance: N/A

Evidence snippets:
- Memory must be: 0.9 to 6.5 GB per vCPU A multiple of 256 MB At least 3.75 GB (3840 MB) For example, the following command creates a Cloud SQL Enterprise edition instance with two vCPUs and 7,680 MB of memory: gcloud sql instances create myinstance \ --database-version = POSTGRES 16 \ --cpu = 2 \ --memory = 7680MB \ --region = us-central1 The following command creates a Cloud SQL Enterprise Plus edition instance with four cores: gcloud sql instances create myinstance \ --database-version = POSTGRES 16 \ --tier = db-perf-optimized-N-4 \ --edition = ENTERPRISE PLUS \ --region = us-central1 See Custom instance configuration for more information about how to size --cpu and --memory .
- For Cloud SQL Enterprise Plus edition instances, Cloud SQL offers predefined machine types for your instances in the N2 and C4A machine series.
- Note: Only PostgreSQL versions 12 and later are compatible with Cloud SQL Enterprise Plus edition.
- Before using any of the request data, make the following replacements: PROJECT ID : your project ID INSTANCE ID : your instance ID REGION : the region DATABASE VERSION : enum string of the database version (for example, POSTGRES 18 ) PASSWORD : the password for the root user MACHINE TYPE : enum string of the machine (tier) type, as: db-custom-[CPUS]-[MEMORY MBS] EDITION TYPE : your Cloud SQL edition Note : If the database version for your instance is PostgreSQL 16 and later, then the default edition is Cloud SQL Enterprise Plus edition.

