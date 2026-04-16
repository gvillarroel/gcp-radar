---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T13:51:57.741Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "Same-zone fast clone"
feature_slug: "same-zone-fast-clone"
latest_feature_date: "2026-01-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/clone-instance"
  - "https://docs.cloud.google.com/sql/docs/postgres/troubleshooting"
  - "https://docs.cloud.google.com/sql/docs/postgres/create-instance"
keywords:
  - "clone"
  - "fast"
  - "zone"
  - "same"
  - "create"
  - "users"
  - "lets"
---

# Same-zone fast clone

Product: Cloud SQL for PostgreSQL
Coverage: MEDIUM

## Step 02 Summary

Same-zone fast clone lets users create Cloud SQL for PostgreSQL clones quickly within the same zone.

## Extended Definition

Same-zone fast clone lets users create Cloud SQL for PostgreSQL clones quickly within the same zone.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/clone-instance](https://docs.cloud.google.com/sql/docs/postgres/clone-instance)
- [https://docs.cloud.google.com/sql/docs/postgres/troubleshooting](https://docs.cloud.google.com/sql/docs/postgres/troubleshooting)
- [https://docs.cloud.google.com/sql/docs/postgres/create-instance](https://docs.cloud.google.com/sql/docs/postgres/create-instance)

## Supporting Pages

### Clone instances \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/clone-instance](https://docs.cloud.google.com/sql/docs/postgres/clone-instance)
- Source ID: `site-iam-reference`
- Final score: 194
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- When fast clone is used Cloud SQL automatically uses fast clone when the following conditions are met: Same-zone operations: the clone operation must be initiated within the same zone as the source instance.
- When you initiate a clone operation in the same zone as the source instance, fast clone takes an Instant Snapshot.
- If you don't specify values for either the --preferred-zone or --preferred-secondary-zone parameters, then the cloned instance has the same primary and secondary zones as the source instance.
- If you don't specify an allocated IP range, the following behavior is applied: If the source instance was created with a specified range, the cloned instance is created in the same range.

### Troubleshoot \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/troubleshooting](https://docs.cloud.google.com/sql/docs/postgres/troubleshooting)
- Source ID: `site-docs-root`
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- For example, openssl x509 -in server-cert.pem -noout -text grep 'DNS:' . ssl: { rejectUnauthorized: true, ca: fs.readFileSync ( "/path/to/server/CA" ) , servername: 'N-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxx.us-central1.sql.goog' } Create instances Issue Troubleshooting Error message: The zone or region does not have sufficient resources to handle the request at the moment.
- You're trying to use the Google Cloud console to clone an instance with a private IP address, but you didn't specify the allocated IP range that you want to use and the source instance isn't created with the specified range.
- To resolve this issue, retry creating the instance in another zone or retry creating the instance in the same zone that received the error at a different time of day.
- To keep backups indefinitely, you can create an on-demand backup , as they are not deleted in the same way as automated backups.

### Create instances \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/create-instance](https://docs.cloud.google.com/sql/docs/postgres/create-instance)
- Source ID: `site-docs-root`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- Set the password for the postgres user: gcloud sql users set-password postgres \ --instance = INSTANCE NAME \ --password = PASSWORD Terraform To create an instance, use a Terraform resource . resource "google sql database instance" "postgres pvp instance name" { name = "postgres-pvp-instance-name" region = "asia-northeast1" database version = "POSTGRES 14" root password = "abcABC123!" settings { tier = "db-custom-2-7680" password validation policy { min length = 6 reuse interval = 2 complexity = "COMPLEXITY DEFAULT" disallow username substring = true password change interval = "30s" enable password policy = true } } set deletion protection to true, will ensure that one cannot accidentally delete this instance by use of Terraform whereas deletion protection enabled flag protects this instance at the GCP level. deletion protection = false } Apply the changes To apply your Terraform configuration in a Google Cloud project, complete the steps in the following sections.
- Note: When you enable a password policy, statements that create users or change user passwords can cause additional latency due to password policy verification. minLength : Specifies the minimum number of characters that the password must have. complexity : Checks if the password is a combination of lowercase, uppercase, numeric, and non-alphanumeric characters.
- Note: When you enable a password policy, statements that create users or change user passwords can cause additional latency due to password policy verification. minLength : Specifies the minimum number of characters that the password must have. complexity : Checks if the password is a combination of lowercase, uppercase, numeric, and non-alphanumeric characters.
- To resolve this issue, retry creating the instance in another zone or retry creating the instance in the same zone that received the error at a different time of day.

