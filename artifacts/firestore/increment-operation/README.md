# Increment operation

Product: Firestore
Feature slug: `increment-operation`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Cloud Firestore supports incrementing or decrementing a numeric field by a specified amount.

## Lifecycle

- Latest feature date: 2019-03-28
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- key (evidence: [https://docs.cloud.google.com/firestore/native/docs/enterprise-index-overview](https://docs.cloud.google.com/firestore/native/docs/enterprise-index-overview), [https://docs.cloud.google.com/firestore/docs/key-visualizer](https://docs.cloud.google.com/firestore/docs/key-visualizer), [https://docs.cloud.google.com/firestore/native/docs/manage-data/delete-data](https://docs.cloud.google.com/firestore/native/docs/manage-data/delete-data))

## Official Evidence

- [https://docs.cloud.google.com/firestore/docs/key-visualizer](https://docs.cloud.google.com/firestore/docs/key-visualizer)
- [https://docs.cloud.google.com/firestore/native/docs/enterprise-index-overview](https://docs.cloud.google.com/firestore/native/docs/enterprise-index-overview)
- [https://docs.cloud.google.com/firestore/native/docs/manage-data/delete-data](https://docs.cloud.google.com/firestore/native/docs/manage-data/delete-data)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
