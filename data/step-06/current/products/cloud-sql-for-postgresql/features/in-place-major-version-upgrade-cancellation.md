---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:45:01.268Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "In-place major version upgrade cancellation"
feature_slug: "in-place-major-version-upgrade-cancellation"
latest_feature_date: "2026-03-17"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/create-instance"
  - "https://docs.cloud.google.com/sql/docs/postgres/release-notes"
  - "https://docs.cloud.google.com/sql/docs/release-notes"
keywords:
  - "in"
  - "place"
  - "major"
  - "version"
  - "upgrade"
  - "cancellation"
  - "lets"
  - "users"
---

# In-place major version upgrade cancellation

Product: Cloud SQL for PostgreSQL
Coverage: LOW

## Step 02 Summary

In-place major version upgrade cancellation lets users cancel an upgrade while the main upgrade phase is running.

## Extended Definition

In-place major version upgrade cancellation lets users cancel an upgrade while the main upgrade phase is running.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/create-instance](https://docs.cloud.google.com/sql/docs/postgres/create-instance)
- [https://docs.cloud.google.com/sql/docs/postgres/release-notes](https://docs.cloud.google.com/sql/docs/postgres/release-notes)
- [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)

## Supporting Pages

### Create instances \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/create-instance](https://docs.cloud.google.com/sql/docs/postgres/create-instance)
- Source ID: `site-docs-root`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- Set the password for the postgres user: gcloud sql users set-password postgres \ --instance = INSTANCE NAME \ --password = PASSWORD Terraform To create an instance, use a Terraform resource . resource "google sql database instance" "postgres pvp instance name" { name = "postgres-pvp-instance-name" region = "asia-northeast1" database version = "POSTGRES 14" root password = "abcABC123!" settings { tier = "db-custom-2-7680" password validation policy { min length = 6 reuse interval = 2 complexity = "COMPLEXITY DEFAULT" disallow username substring = true password change interval = "30s" enable password policy = true } } set deletion protection to true, will ensure that one cannot accidentally delete this instance by use of Terraform whereas deletion protection enabled flag protects this instance at the GCP level. deletion protection = false } Apply the changes To apply your Terraform configuration in a Google Cloud project, complete the steps in the following sections.
- Before using any of the request data, make the following replacements: PROJECT ID : your project ID INSTANCE ID : your instance ID REGION : the region DATABASE VERSION : enum string of the database version (for example, POSTGRES 18 ) PASSWORD : the password for the root user MACHINE TYPE : enum string of the machine (tier) type, as: db-custom-[CPUS]-[MEMORY MBS] EDITION TYPE : your Cloud SQL edition Note : If the database version for your instance is PostgreSQL 16 and later, then the default edition is Cloud SQL Enterprise Plus edition.
- Before using any of the request data, make the following replacements: PROJECT ID : your project ID INSTANCE ID : your instance ID REGION : the region DATABASE VERSION : enum string of the database version (for example, POSTGRES 18 ) PASSWORD : the password for the root user MACHINE TYPE : enum string of the machine (tier) type, as: db-custom-[CPUS]-[MEMORY MBS] EDITION TYPE : your Cloud SQL edition Note : If the database version for your instance is PostgreSQL 16 and later, then the default edition is Cloud SQL Enterprise Plus edition.
- You only need to do this once per directory. terraform init Optionally, to use the latest Google provider version, include the -upgrade option: terraform init -upgrade Apply the changes Review the configuration and verify that the resources that Terraform is going to create or update match your expectations: terraform plan Make corrections to the configuration as necessary.

### Cloud SQL for PostgreSQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/release-notes](https://docs.cloud.google.com/sql/docs/postgres/release-notes)
- Source ID: `site-docs-root`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- March 17, 2026 Feature You can now cancel an in-place major version upgrade operation during the main upgrade phase, when the upgrade is actually being performed.
- June 21, 2024 Feature You can now use the in-place major version upgrade feature to upgrade your Cloud SQL for PostgreSQL instance to PostgreSQL 16.
- February 26, 2025 Feature You can now include replicas when you perform an in-place major version upgrade using gcloud or the Cloud SQL Admin API.
- You can't use the in place major version upgrade feature to upgrade your Cloud SQL for PostgreSQL instance to PostgreSQL 16.

### Cloud SQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- June 21, 2024 Cloud SQL for PostgreSQL Feature You can now use the in-place major version upgrade feature to upgrade your Cloud SQL for PostgreSQL instance to PostgreSQL 16.
- Cloud SQL for PostgreSQL Feature You can now cancel an in-place major version upgrade operation during the main upgrade phase, when the upgrade is actually being performed.
- February 26, 2025 Cloud SQL for MySQL Feature You can now include replicas when you perform an in-place major version upgrade using gcloud or the Cloud SQL Admin API.
- Cloud SQL for PostgreSQL Feature You can now include replicas when you perform an in-place major version upgrade using gcloud or the Cloud SQL Admin API.

