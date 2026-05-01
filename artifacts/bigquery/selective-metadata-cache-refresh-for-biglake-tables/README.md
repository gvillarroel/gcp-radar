# Selective metadata cache refresh for BigLake tables

Product: BigQuery
Feature slug: `selective-metadata-cache-refresh-for-biglake-tables`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

BigQuery can selectively refresh metadata cache for BigLake tables by using the BQ.REFRESH_EXTERNAL_METADATA_CACHE system procedure.

## Lifecycle

- Latest feature date: 2024-03-04
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- audit
- constraint
- credential
- encrypt
- iam
- key
- logging
- permission
- policy
- private
- security

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- [https://docs.cloud.google.com/bigquery/docs/reference/system-procedures](https://docs.cloud.google.com/bigquery/docs/reference/system-procedures)
