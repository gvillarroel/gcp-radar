---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:45:01.393Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "Maintenance changelogs"
feature_slug: "maintenance-changelogs"
latest_feature_date: "2022-04-25"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/release-notes"
  - "https://docs.cloud.google.com/sql/docs/postgres/create-instance"
  - "https://docs.cloud.google.com/sql/docs/postgres/release-notes"
keywords:
  - "maintenance"
  - "changelogs"
  - "provide"
  - "information"
  - "about"
  - "updates"
  - "included"
  - "in"
---

# Maintenance changelogs

Product: Cloud SQL for PostgreSQL
Coverage: LOW

## Step 02 Summary

Maintenance changelogs provide information about updates included in new Cloud SQL maintenance versions.

## Extended Definition

Maintenance changelogs provide information about updates included in new Cloud SQL maintenance versions.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- [https://docs.cloud.google.com/sql/docs/postgres/create-instance](https://docs.cloud.google.com/sql/docs/postgres/create-instance)
- [https://docs.cloud.google.com/sql/docs/postgres/release-notes](https://docs.cloud.google.com/sql/docs/postgres/release-notes)

## Supporting Pages

### Cloud SQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- Maintenance changelogs provide information about updates available in new maintenance versions, such as database minor version upgrades and patches for security vulnerabilities.
- Maintenance changelogs provide information about updates available in new maintenance versions, such as database minor version upgrades and patches for security vulnerabilities.
- Maintenance changelogs provide information about updates available in new maintenance versions, such as database minor version upgrades and patches for security vulnerabilities.
- For information about maintenance windows, and to manage maintenance updates, see Finding and setting maintenance windows .

### Create instances \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/create-instance](https://docs.cloud.google.com/sql/docs/postgres/create-instance)
- Source ID: `site-docs-root`
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- Memory must be: 0.9 to 6.5 GB per vCPU A multiple of 256 MB At least 3.75 GB (3840 MB) For example, the following command creates a Cloud SQL Enterprise edition instance with two vCPUs and 7,680 MB of memory: gcloud sql instances create myinstance \ --database-version = POSTGRES 16 \ --cpu = 2 \ --memory = 7680MB \ --region = us-central1 The following command creates a Cloud SQL Enterprise Plus edition instance with four cores: gcloud sql instances create myinstance \ --database-version = POSTGRES 16 \ --tier = db-perf-optimized-N-4 \ --edition = ENTERPRISE PLUS \ --region = us-central1 See Custom instance configuration for more information about how to size --cpu and --memory .
- For information about instance settings, including valid values for region, see Instance settings Don't include sensitive or personally identifiable information in your instance ID; it is externally visible.
- However, you can view information about the instance while it's being created. gcloud For information about installing and getting started with the gcloud CLI , see Installing gcloud CLI .
- AUTOMATIC ROTATION DURING MAINTENANCE : With this option, automatic server certificate rotation is enabled during Cloud SQL scheduled maintenance or self-service maintenance updates.

### Cloud SQL for PostgreSQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/release-notes](https://docs.cloud.google.com/sql/docs/postgres/release-notes)
- Source ID: `site-docs-root`
- Final score: 158
- Re-rank relevance: N/A

Evidence snippets:
- Maintenance changelogs provide information about updates available in new maintenance versions, such as database minor version upgrades and patches for security vulnerabilities.
- For more information about maintenance, see Maintenance updates on Cloud SQL instances .
- For more information, see About maintenance on Cloud SQL instances .
- For more information, see About maintenance on Cloud SQL instances .

