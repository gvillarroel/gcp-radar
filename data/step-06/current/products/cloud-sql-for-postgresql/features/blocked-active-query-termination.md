---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:45:01.286Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "Blocked active query termination"
feature_slug: "blocked-active-query-termination"
latest_feature_date: "2025-09-12"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/release-notes"
  - "https://docs.cloud.google.com/sql/docs/release-notes"
  - "https://docs.cloud.google.com/sql/docs/postgres/create-instance"
keywords:
  - "blocked"
  - "active"
  - "query"
  - "termination"
  - "lets"
  - "users"
  - "terminate"
  - "specific"
---

# Blocked active query termination

Product: Cloud SQL for PostgreSQL
Coverage: LOW

## Step 02 Summary

Blocked active query termination lets users terminate specific long-running or blocked active queries.

## Extended Definition

Blocked active query termination lets users terminate specific long-running or blocked active queries.

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
- Final score: 122
- Re-rank relevance: N/A

Evidence snippets:
- Cloud SQL for PostgreSQL offers an optional feature that lets you terminate specific long-running or blocked active queries.
- September 12, 2025 Feature If a specific active query is blocked or running much longer than expected, it can block other dependent queries.
- March 30, 2026 Feature Cloud SQL for PostgreSQL now offers conversational analytics, which lets users query their operational data using natural language.
- July 31, 2024 Feature Gemini in Databases assistance in Cloud SQL for PostgreSQL is now available in Preview for query insights, system insights, index advisor, and active queries.

### Cloud SQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- Cloud SQL for PostgreSQL offers an optional feature that lets you terminate specific long-running or blocked active queries.
- September 12, 2025 Cloud SQL for PostgreSQL Feature If a specific active query is blocked or running much longer than expected, it can block other dependent queries.
- March 30, 2026 Cloud SQL for MySQL Feature Cloud SQL for MySQL now offers conversational analytics, which lets users query their operational data using natural language.
- Cloud SQL for PostgreSQL Feature Cloud SQL for PostgreSQL now offers conversational analytics, which lets users query their operational data using natural language.

### Create instances \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/create-instance](https://docs.cloud.google.com/sql/docs/postgres/create-instance)
- Source ID: `site-docs-root`
- Final score: 110
- Re-rank relevance: N/A

Evidence snippets:
- For Private IP-only instances, enabling Data API access lets authorized users connect and execute SQL statements from the public internet.
- Set the password for the postgres user: gcloud sql users set-password postgres \ --instance = INSTANCE NAME \ --password = PASSWORD Terraform To create an instance, use a Terraform resource . resource "google sql database instance" "postgres pvp instance name" { name = "postgres-pvp-instance-name" region = "asia-northeast1" database version = "POSTGRES 14" root password = "abcABC123!" settings { tier = "db-custom-2-7680" password validation policy { min length = 6 reuse interval = 2 complexity = "COMPLEXITY DEFAULT" disallow username substring = true password change interval = "30s" enable password policy = true } } set deletion protection to true, will ensure that one cannot accidentally delete this instance by use of Terraform whereas deletion protection enabled flag protects this instance at the GCP level. deletion protection = false } Apply the changes To apply your Terraform configuration in a Google Cloud project, complete the steps in the following sections.
- Note: When you enable a password policy, statements that create users or change user passwords can cause additional latency due to password policy verification. minLength : Specifies the minimum number of characters that the password must have. complexity : Checks if the password is a combination of lowercase, uppercase, numeric, and non-alphanumeric characters.
- Note: When you enable a password policy, statements that create users or change user passwords can cause additional latency due to password policy verification. minLength : Specifies the minimum number of characters that the password must have. complexity : Checks if the password is a combination of lowercase, uppercase, numeric, and non-alphanumeric characters.

