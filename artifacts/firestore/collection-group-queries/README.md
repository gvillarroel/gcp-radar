# Collection group queries

Product: Firestore
Feature slug: `collection-group-queries`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Cloud Firestore supports queries across all collections that share the same collection ID.

## Lifecycle

- Latest feature date: 2019-05-07
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- key
- security

## Official Evidence

- [https://docs.cloud.google.com/firestore/docs/key-visualizer](https://docs.cloud.google.com/firestore/docs/key-visualizer)
- [https://docs.cloud.google.com/firestore/docs/query-data/aggregation-queries](https://docs.cloud.google.com/firestore/docs/query-data/aggregation-queries)
- [https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore_admin_v1.services.firestore_admin.client.FirestoreAdminClient](https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore_admin_v1.services.firestore_admin.client.FirestoreAdminClient)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
