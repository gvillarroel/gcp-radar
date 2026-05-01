# Batch DML in a single transaction

Product: Spanner
Feature slug: `batch-dml-in-a-single-transaction`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Spanner supports running multiple DML statements within one transaction by using batch DML.

## Lifecycle

- Latest feature date: 2019-03-14
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- allow
- key
- private
- token

## Official Evidence

- [https://docs.cloud.google.com/spanner/docs/backfill-embeddings](https://docs.cloud.google.com/spanner/docs/backfill-embeddings)
- [https://docs.cloud.google.com/spanner/docs/batch-write](https://docs.cloud.google.com/spanner/docs/batch-write)
- [https://docs.cloud.google.com/spanner/docs/change-streams](https://docs.cloud.google.com/spanner/docs/change-streams)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
