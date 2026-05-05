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

- access (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/system-procedures](https://docs.cloud.google.com/bigquery/docs/reference/system-procedures), [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference))
- audit (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/system-procedures](https://docs.cloud.google.com/bigquery/docs/reference/system-procedures), [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference))
- constraint (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/system-procedures](https://docs.cloud.google.com/bigquery/docs/reference/system-procedures), [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference))
- credential (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/system-procedures](https://docs.cloud.google.com/bigquery/docs/reference/system-procedures), [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference))
- encrypt (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/system-procedures](https://docs.cloud.google.com/bigquery/docs/reference/system-procedures), [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference))
- iam (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/system-procedures](https://docs.cloud.google.com/bigquery/docs/reference/system-procedures), [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference))
- key (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/system-procedures](https://docs.cloud.google.com/bigquery/docs/reference/system-procedures), [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference))
- logging (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/system-procedures](https://docs.cloud.google.com/bigquery/docs/reference/system-procedures), [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference))
- permission (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/system-procedures](https://docs.cloud.google.com/bigquery/docs/reference/system-procedures), [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference))
- policy (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/system-procedures](https://docs.cloud.google.com/bigquery/docs/reference/system-procedures), [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference))
- private (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/system-procedures](https://docs.cloud.google.com/bigquery/docs/reference/system-procedures), [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference))
- security (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/system-procedures](https://docs.cloud.google.com/bigquery/docs/reference/system-procedures), [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference))

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- [https://docs.cloud.google.com/bigquery/docs/reference/system-procedures](https://docs.cloud.google.com/bigquery/docs/reference/system-procedures)
