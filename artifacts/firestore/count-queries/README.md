# count() queries

Product: Firestore
Feature slug: `count-queries`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Firestore supports aggregation count() queries; Firestore supports aggregation count() queries.

## Lifecycle

- Latest feature date: 2023-04-24
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/firestore/native/docs/enterprise-index-overview](https://docs.cloud.google.com/firestore/native/docs/enterprise-index-overview), [https://docs.cloud.google.com/firestore/docs/query-data/aggregation-queries](https://docs.cloud.google.com/firestore/docs/query-data/aggregation-queries), [https://docs.cloud.google.com/firestore/docs/cuds](https://docs.cloud.google.com/firestore/docs/cuds))
- key (evidence: [https://docs.cloud.google.com/firestore/native/docs/enterprise-index-overview](https://docs.cloud.google.com/firestore/native/docs/enterprise-index-overview), [https://docs.cloud.google.com/firestore/docs/query-data/aggregation-queries](https://docs.cloud.google.com/firestore/docs/query-data/aggregation-queries), [https://docs.cloud.google.com/firestore/docs/cuds](https://docs.cloud.google.com/firestore/docs/cuds))

## Official Evidence

- [https://docs.cloud.google.com/firestore/docs/cuds](https://docs.cloud.google.com/firestore/docs/cuds)
- [https://docs.cloud.google.com/firestore/docs/query-data/aggregation-queries](https://docs.cloud.google.com/firestore/docs/query-data/aggregation-queries)
- [https://docs.cloud.google.com/firestore/native/docs/enterprise-index-overview](https://docs.cloud.google.com/firestore/native/docs/enterprise-index-overview)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
