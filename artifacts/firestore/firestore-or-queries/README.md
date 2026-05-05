# Firestore OR queries

Product: Firestore
Feature slug: `firestore-or-queries`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Firestore supports OR queries.

## Lifecycle

- Latest feature date: 2023-03-24
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- key (evidence: [https://docs.cloud.google.com/firestore/docs/query-data/aggregation-queries](https://docs.cloud.google.com/firestore/docs/query-data/aggregation-queries), [https://docs.cloud.google.com/firestore/docs/pitr](https://docs.cloud.google.com/firestore/docs/pitr), [https://docs.cloud.google.com/firestore/native/docs/overview](https://docs.cloud.google.com/firestore/native/docs/overview))
- security (evidence: [https://docs.cloud.google.com/firestore/docs/query-data/aggregation-queries](https://docs.cloud.google.com/firestore/docs/query-data/aggregation-queries), [https://docs.cloud.google.com/firestore/docs/pitr](https://docs.cloud.google.com/firestore/docs/pitr), [https://docs.cloud.google.com/firestore/native/docs/overview](https://docs.cloud.google.com/firestore/native/docs/overview))

## Official Evidence

- [https://docs.cloud.google.com/firestore/docs/pitr](https://docs.cloud.google.com/firestore/docs/pitr)
- [https://docs.cloud.google.com/firestore/docs/query-data/aggregation-queries](https://docs.cloud.google.com/firestore/docs/query-data/aggregation-queries)
- [https://docs.cloud.google.com/firestore/native/docs/overview](https://docs.cloud.google.com/firestore/native/docs/overview)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
