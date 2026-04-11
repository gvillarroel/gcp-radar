---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.570Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery materialized views allow_non_incremental_definition option"
feature_slug: "bigquery-materialized-views-allow-non-incremental-definition-option"
latest_feature_date: "2024-04-04"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "MV allow_non_incremental_definition"
  - "complex SQL materialized view"
  - "non_incremental definition option"
  - "allow_non_incremental_definition"
  - "materialized view definition options"
  - "non-incremental materialized view"
  - "non-incremental definition"
  - "CREATE MATERIALIZED VIEW OPTIONS"
---

# BigQuery materialized views allow_non_incremental_definition option

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

BigQuery materialized views now support the allow_non_incremental_definition option to build views from a broader set of SQL queries.

## Extended Definition

In BigQuery, `allow non incremental definition` is a Materialized View option in DDL used when creating a materialized view. It is a boolean setting that enables an expanded set of SQL queries for materialized view definitions, and it is disabled by default. The option is immutable after the materialized view is created.

## Evidence Summary

The referenced DDL documentation explicitly defines the `allow non incremental definition` materialized view option, its supported type, purpose, default value, and that it cannot be modified after creation.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 28
- Re-rank relevance: N/A

Evidence snippets:
- NAME and VALUE must be one of the following combinations: NAME VALUE Details enable refresh BOOLEAN Example: enable refresh=false Default: true refresh interval minutes FLOAT64 Example: refresh interval minutes=20 Default: refresh interval minutes=30 expiration timestamp TIMESTAMP Example: expiration timestamp=TIMESTAMP "2025-01-01 00:00:00 UTC" This property is equivalent to the expirationTime table resource property. expiration timestamp is optional and not used by default. max staleness INTERVAL Example: max staleness=INTERVAL "4:0:0" HOUR TO SECOND The max staleness property provides consistently high performance with controlled costs when processing large, frequently changing datasets. max staleness is disabled by default. allow non incremental definition BOOLEAN Example: allow non incremental definition=true The allow non incremental definition property supports an expanded range of SQL queries to create materialized views. allow non incremental definition=true is disabled by default.
- NAME and VALUE must be one of the following combinations: NAME VALUE Details enable refresh BOOLEAN Example: enable refresh=false Default: true refresh interval minutes FLOAT64 Example: refresh interval minutes=20 Default: refresh interval minutes=30 expiration timestamp TIMESTAMP Example: expiration timestamp=TIMESTAMP "2025-01-01 00:00:00 UTC" This property is equivalent to the expirationTime table resource property. expiration timestamp is optional and not used by default. max staleness INTERVAL Example: max staleness=INTERVAL "4:0:0" HOUR TO SECOND The max staleness property provides consistently high performance with controlled costs when processing large, frequently changing datasets. max staleness is disabled by default. allow non incremental definition BOOLEAN Example: allow non incremental definition=true The allow non incremental definition property supports an expanded range of SQL queries to create materialized views. allow non incremental definition=true is disabled by default.
- The allow non incremental definition property can't be changed after the materialized view is created. kms key name STRING Example: kms key name="projects/ project id /locations/ location /keyRings/ keyring /cryptoKeys/ key " This property is equivalent to the encryptionConfiguration.kmsKeyName table resource property.
- The allow non incremental definition property can't be changed after the materialized view is created. kms key name STRING Example: kms key name="projects/ project id /locations/ location /keyRings/ keyring /cryptoKeys/ key " This property is equivalent to the encryptionConfiguration.kmsKeyName table resource property.

