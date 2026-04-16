---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.459Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "DLP functions with Sensitive Data Protection"
feature_slug: "dlp-functions-with-sensitive-data-protection"
latest_feature_date: "2024-05-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/best-practices-for-multi-tenant-workloads-on-bigquery"
  - "https://docs.cloud.google.com/bigquery/docs/aead-encryption-concepts"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "dlp"
  - "functions"
  - "sensitive"
  - "protection"
  - "bigquery"
  - "aes"
  - "siv"
  - "encryption"
---

# DLP functions with Sensitive Data Protection

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery DLP functions support AES-SIV encryption and decryption with Sensitive Data Protection.

## Extended Definition

BigQuery DLP functions support AES-SIV encryption and decryption with Sensitive Data Protection.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/best-practices-for-multi-tenant-workloads-on-bigquery](https://docs.cloud.google.com/bigquery/docs/best-practices-for-multi-tenant-workloads-on-bigquery)
- [https://docs.cloud.google.com/bigquery/docs/aead-encryption-concepts](https://docs.cloud.google.com/bigquery/docs/aead-encryption-concepts)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### "Best practices for multi-tenant workloads on BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/best-practices-for-multi-tenant-workloads-on-bigquery](https://docs.cloud.google.com/bigquery/docs/best-practices-for-multi-tenant-workloads-on-bigquery)
- Source ID: `site-docs-reference-5`
- Final score: 100
- Re-rank relevance: N/A

Evidence snippets:
- Sensitive Data Protection Sensitive Data Protection provides APIs and scanning utilities that help you identify and mitigate sensitive content that is stored inside BigQuery or Cloud Storage datasets.
- The Tink library AEAD encryption keys are compatible with the BigQuery AEAD functions .
- Authorized views, authorized user-defined functions (UDFs) , and column policies are frequently used together to share data with lines of business while preventing accidental distribution of sensitive data.
- Organizations in multi-tenant scenarios frequently use the DLP API (part of Sensitive Data Protection) to identify and optionally tokenize sensitive data before it's stored.

### AEAD encryption concepts \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/aead-encryption-concepts](https://docs.cloud.google.com/bigquery/docs/aead-encryption-concepts)
- Source ID: `site-docs-reference-2`
- Final score: 96
- Re-rank relevance: N/A

Evidence snippets:
- AEAD encryption functions allow you to create keysets that contain keys for encryption and decryption, use these keys to encrypt and decrypt individual values in a table, and rotate keys within a keyset.
- Home Documentation Data analytics BigQuery Guides Send feedback AEAD encryption concepts Stay organized with collections Save and categorize content based on your preferences.
- Additional data AEAD encryption functions support the use of an additional data argument, also known as associated data (AD) or additional authenticated data.
- BigQuery also provides support for customer managed encryption keys (CMEKs), which lets you encrypt tables using specific encryption keys.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 90
- Re-rank relevance: N/A

Evidence snippets:
- You can use DDL commands to create, alter, and delete resources, such as the following: Datasets Tables Table schemas Table clones Table snapshots Views Connections User-defined functions (UDFs) Indexes Capacity commitments and reservations Row-level access policies Default configuration settings Required permissions To create a job that runs a DDL statement, you must have the bigquery.jobs.create permission for the project where you are running the job.
- Example: kms key name="projects/ project id /locations/ location /keyRings/ keyring /cryptoKeys/ key " This property is equivalent to the encryptionConfiguration.kmsKeyName table resource property. default time zone STRING The default time zone to use in time zone-dependent SQL functions, when a time zone is not specified as an argument.
- Example: kms key name="projects/ project id /locations/ location /keyRings/ keyring /cryptoKeys/ key " This property is equivalent to the encryptionConfiguration.kmsKeyName table resource property. default time zone STRING The default time zone to use in time zone-dependent SQL functions, when a time zone is not specified as an argument.
- Example: export function finalize ( finalState , initialSum ) Serialization functions for a JavaScript UDAF If you want to work with non-serializable aggregation states, the JavaScript UDAF must provide the serialize and deserialize functions: serialize function: Converts an aggregation state into a BigQuery-serializable object.

