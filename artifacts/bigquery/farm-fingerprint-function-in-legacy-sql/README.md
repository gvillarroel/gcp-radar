# FARM_FINGERPRINT function in legacy SQL

Product: BigQuery
Feature slug: `farm-fingerprint-function-in-legacy-sql`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

BigQuery legacy SQL includes the FARM_FINGERPRINT function.

## Lifecycle

- Latest feature date: 2017-11-30
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/hash_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/hash_functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create-random-forest](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create-random-forest))
- audit (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/hash_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/hash_functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create-random-forest](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create-random-forest))
- constraint (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/hash_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/hash_functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create-random-forest](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create-random-forest))
- credential (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/hash_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/hash_functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create-random-forest](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create-random-forest))
- encrypt (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/hash_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/hash_functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create-random-forest](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create-random-forest))
- iam (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/hash_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/hash_functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create-random-forest](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create-random-forest))
- key (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/hash_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/hash_functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create-random-forest](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create-random-forest))
- logging (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/hash_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/hash_functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create-random-forest](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create-random-forest))
- permission (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/hash_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/hash_functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create-random-forest](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create-random-forest))
- policy (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/hash_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/hash_functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create-random-forest](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create-random-forest))
- private (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/hash_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/hash_functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create-random-forest](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create-random-forest))
- security (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/hash_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/hash_functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create-random-forest](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create-random-forest))

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create-random-forest](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create-random-forest)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/hash_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/hash_functions)
