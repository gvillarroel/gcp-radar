# Custom data masking

Product: BigQuery
Feature slug: `custom-data-masking`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

BigQuery supports custom data masking routines such as salt-based hashing.

## Lifecycle

- Latest feature date: 2024-02-08
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- constraint
- encrypt
- iam
- key
- kms
- permission
- policy
- role
- secret
- security

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/column-data-masking](https://docs.cloud.google.com/bigquery/docs/column-data-masking)
- [https://docs.cloud.google.com/bigquery/docs/column-data-masking-intro](https://docs.cloud.google.com/bigquery/docs/column-data-masking-intro)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset-cmek](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset-cmek)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
