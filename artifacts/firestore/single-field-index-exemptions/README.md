# Single-field index exemptions

Product: Firestore
Feature slug: `single-field-index-exemptions`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Cloud Firestore supports exempting specific fields from automatic indexing.

## Lifecycle

- Latest feature date: 2018-08-08
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- constraint
- key

## Official Evidence

- [https://docs.cloud.google.com/firestore/docs/concepts/index-overview](https://docs.cloud.google.com/firestore/docs/concepts/index-overview)
- [https://docs.cloud.google.com/firestore/docs/query-data/multiple-range-fields](https://docs.cloud.google.com/firestore/docs/query-data/multiple-range-fields)
- [https://docs.cloud.google.com/firestore/native/docs/best-practices](https://docs.cloud.google.com/firestore/native/docs/best-practices)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
