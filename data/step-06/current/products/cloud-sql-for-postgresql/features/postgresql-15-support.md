---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T13:51:57.788Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "PostgreSQL 15 support"
feature_slug: "postgresql-15-support"
latest_feature_date: "2023-05-24"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/authorize-ssl"
  - "https://docs.cloud.google.com/sql/docs/postgres/availability"
  - "https://docs.cloud.google.com/sql/docs/postgres/client-side-encryption"
keywords:
  - "availability"
  - "supports"
---

# PostgreSQL 15 support

Product: Cloud SQL for PostgreSQL
Coverage: LOW

## Step 02 Summary

Cloud SQL for PostgreSQL supports PostgreSQL 15 in general availability.

## Extended Definition

Cloud SQL for PostgreSQL supports PostgreSQL 15 in general availability.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/authorize-ssl](https://docs.cloud.google.com/sql/docs/postgres/authorize-ssl)
- [https://docs.cloud.google.com/sql/docs/postgres/availability](https://docs.cloud.google.com/sql/docs/postgres/availability)
- [https://docs.cloud.google.com/sql/docs/postgres/client-side-encryption](https://docs.cloud.google.com/sql/docs/postgres/client-side-encryption)

## Supporting Pages

### "About client-side encryption \_|\_ Cloud SQL for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/client-side-encryption](https://docs.cloud.google.com/sql/docs/postgres/client-side-encryption)
- Source ID: `site-iam-reference`
- Final score: 20
- Re-rank relevance: N/A

Evidence snippets:
- Tink supports envelope encryption in C++, Java, Go, and Python using the AEAD API: public interface Aead { byte [] encrypt ( final byte [] plaintext, final byte [] associatedData ) throws… byte [] decrypt ( final byte [] ciphertext, final byte [] associatedData ) throws… } Besides the normal message/ciphertext argument, the encrypt and decrypt methods support optional associated data.
- Cloud KMS supports many different key types.

### "Authorize with SSL/TLS certificates \_|\_ Cloud SQL for PostgreSQL \_|\_\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/authorize-ssl](https://docs.cloud.google.com/sql/docs/postgres/authorize-ssl)
- Source ID: `site-iam-reference`
- Final score: 20
- Re-rank relevance: N/A

Evidence snippets:
- Cloud SQL Auth Proxy version support Supports all versions of the Cloud SQL Auth Proxy, v1 and later.
- Overview Cloud SQL supports connecting to an instance using the SSL/TLS protocol.

### "Availability in Cloud SQL \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/availability](https://docs.cloud.google.com/sql/docs/postgres/availability)
- Source ID: `site-iam-reference`
- Final score: 20
- Re-rank relevance: N/A

Evidence snippets:
- For instances configured with regional availability, if the instance encounters a failure, then Cloud SQL automatically brings up the instance in the secondary zone with the same IP address and no data loss so that applications can resume operations on the database.
- Unplanned events and zonal outage For applications that require high availability, we recommend configuring the instance for regional availability, also referred to as the high availability (HA) configuration in Cloud SQL.
- What's next Learn about high availability (HA) Enable or disable high availability (HA) Read about disaster recovery (DR) View all the Google Cloud services available in locations worldwide .
- Home Documentation Databases Cloud SQL PostgreSQL Guides Send feedback Availability in Cloud SQL Stay organized with collections Save and categorize content based on your preferences.

