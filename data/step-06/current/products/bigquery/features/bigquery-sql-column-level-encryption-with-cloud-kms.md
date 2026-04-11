---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.762Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery SQL column-level encryption with Cloud KMS"
feature_slug: "bigquery-sql-column-level-encryption-with-cloud-kms"
latest_feature_date: "2021-10-27"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/aead-encryption-concepts"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/python/docs/reference/bigquery/latest/google.cloud.bigquery.encryption_configuration.EncryptionConfiguration"
keywords:
  - "keyset encryption"
  - "KMS-backed column encryption"
  - "AEAD encryption functions"
  - "encrypted columns"
  - "column-level encryption"
  - "KMS key"
  - "SQL column encryption"
  - "Cloud KMS"
---

# BigQuery SQL column-level encryption with Cloud KMS

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery now supports SQL column-level encryption using Cloud Key Management Service, including encryption of keysets in AEAD encryption functions.

## Extended Definition

BigQuery now supports SQL column-level encryption using Cloud Key Management Service, including encryption of keysets in AEAD encryption functions.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/aead-encryption-concepts](https://docs.cloud.google.com/bigquery/docs/aead-encryption-concepts)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/python/docs/reference/bigquery/latest/google.cloud.bigquery.encryption_configuration.EncryptionConfiguration](https://docs.cloud.google.com/python/docs/reference/bigquery/latest/google.cloud.bigquery.encryption_configuration.EncryptionConfiguration)

## Supporting Pages

### AEAD encryption concepts \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/aead-encryption-concepts](https://docs.cloud.google.com/bigquery/docs/aead-encryption-concepts)
- Source ID: `site-docs-root-2`
- Final score: 82
- Re-rank relevance: MODERATE
- Re-rank rationale: The page explains AEAD encryption for individual table values and keyset-based encryption in GoogleSQL, which is directly related to column-level-style encryption, though it does not explicitly describe Cloud KMS integration.

Evidence snippets:
- Cloud KMS keys GoogleSQL supports AEAD encryption functions with Cloud KMS keys to further secure your data.
- For more information, see SQL column-level encryption with Cloud KMS keys .
- When you wrap a raw keyset, this process encrypts the raw keyset using a Cloud KMS key .
- KEYS.KEYSET CHAIN : Get a Tink keyset that is encrypted with a Cloud KMS key .

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 48
- Re-rank relevance: N/A

Evidence snippets:
- Examples The following example sets the default time zone to America/Chicago and the default query job timeout to one hour for an organization in the US region: ALTER ORGANIZATION SET OPTIONS ( region-us.default time zone = "America/Chicago" , region-us.default job query timeout ms = 3600000 ); The following example sets the default time zone, the default query job timeout, the default interactive and batch queue timeouts, and the default Cloud KMS key, clearing the organization level default settings: ALTER ORGANIZATION SET OPTIONS ( region-us.default time zone = NULL , region-us.default kms key name = NULL , region-us.default query job timeout ms = NULL , region-us.default interactive query queue timeout ms = NULL , region-us.default batch query queue timeout ms = NULL ); ALTER PROJECT SET OPTIONS statement Sets the options on a project.
- ALTER PROJECT project id SET OPTIONS ( region-us.default time zone = "America/New York" , region-us.default job query timeout ms = 1800000 ); The following example sets the default time zone, the default query job timeout, the default Cloud KMS key to NULL , and the default interactive and batch queue timeouts and default sql dialect, clearing the project level default settings: ALTER PROJECT project id SET OPTIONS ( region-us.default time zone = NULL , region-us.default kms key name = NULL , region-us.default query job timeout ms = NULL , region-us.default interactive query queue timeout ms = NULL , region-us.default batch query queue timeout ms = NULL , region-us.default sql dialect option = NULL ); ALTER BI CAPACITY SET OPTIONS statement Sets the options on BigQuery BI Engine capacity.
- See more details about Protecting data with Cloud KMS keys . friendly name STRING Example: friendly name="my table" This property is equivalent to the friendlyName table resource property. description STRING Example: description="a table that expires in 2025" This property is equivalent to the description table resource property. labels ARRAY<STRUCT<STRING, STRING>> Example: labels=[("org unit", "development")] This property is equivalent to the labels table resource property. default rounding mode STRING Example: default rounding mode = "ROUND HALF EVEN" This specifies the default rounding mode that's used for values written to any new NUMERIC or BIGNUMERIC type columns or STRUCT fields in the table.
- See more details about Protecting data with Cloud KMS keys . friendly name STRING Example: friendly name="my table" This property is equivalent to the friendlyName table resource property. description STRING Example: description="a table that expires in 2025" This property is equivalent to the description table resource property. labels ARRAY<STRUCT<STRING, STRING>> Example: labels=[("org unit", "development")] This property is equivalent to the labels table resource property. default rounding mode STRING Example: default rounding mode = "ROUND HALF EVEN" This specifies the default rounding mode that's used for values written to any new NUMERIC or BIGNUMERIC type columns or STRUCT fields in the table.

### "Class EncryptionConfiguration (3.40.1) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/bigquery/latest/google.cloud.bigquery.encryption_configuration.EncryptionConfiguration](https://docs.cloud.google.com/python/docs/reference/bigquery/latest/google.cloud.bigquery.encryption_configuration.EncryptionConfiguration)
- Source ID: `site-python-reference`
- Final score: 42
- Re-rank relevance: WEAK
- Re-rank rationale: The page only defines a BigQuery `EncryptionConfiguration` class with a KMS key name field, but it does not describe SQL column-level encryption or AEAD keyset usage.

Evidence snippets:
- Version latest keyboard arrow down 3.40.1 (latest) 3.40.0 3.39.0 3.38.0 3.37.0 3.36.0 3.35.1 3.34.0 3.33.0 3.31.0 3.30.0 3.29.0 3.27.0 3.26.0 3.25.0 3.24.0 3.23.1 3.22.0 3.21.0 3.20.1 3.19.0 3.18.0 3.17.2 3.16.0 3.15.0 3.14.1 3.13.0 3.12.0 3.11.4 3.4.0 3.3.6 3.2.0 3.1.0 3.0.1 2.34.4 2.33.0 2.32.0 2.31.0 2.30.1 2.29.0 2.28.1 2.27.1 2.26.0 2.25.2 2.24.1 2.23.3 2.22.1 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.1 2.15.0 2.14.0 2.13.1 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.2 2.5.0 2.4.0 2.3.1 2.2.0 2.1.0 2.0.0 1.28.2 1.27.2 1.26.1 1.25.0 1.24.0 1.23.1 1.22.0 1.21.0 1.20.0 1.19.0 1.18.0 1.17.0 1.16.0 EncryptionConfiguration ( kms key name = None ) Custom encryption configuration (e.g., Cloud KMS keys).
- Parameter Name Description kms key name str resource ID of Cloud KMS key used for encryption Properties kms key name str: Resource ID of Cloud KMS key Resource ID of Cloud KMS key or :data: None if using default encryption.

