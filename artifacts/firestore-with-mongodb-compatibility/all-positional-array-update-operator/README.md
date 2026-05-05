# all positional array update operator

Product: Firestore with MongoDB compatibility
Feature slug: `all-positional-array-update-operator`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Supports the $[] array update operator for updating all matched array elements.

## Lifecycle

- Latest feature date: 2025-08-26
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- allow (evidence: [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/supported-features-80](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/supported-features-80), [https://docs.cloud.google.com/firestore/native/docs/manage-data/add-data](https://docs.cloud.google.com/firestore/native/docs/manage-data/add-data), [https://docs.cloud.google.com/firestore/native/docs/query-data/queries](https://docs.cloud.google.com/firestore/native/docs/query-data/queries), [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/behavior-differences](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/behavior-differences))
- audit (evidence: [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/supported-features-80](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/supported-features-80), [https://docs.cloud.google.com/firestore/native/docs/manage-data/add-data](https://docs.cloud.google.com/firestore/native/docs/manage-data/add-data), [https://docs.cloud.google.com/firestore/native/docs/query-data/queries](https://docs.cloud.google.com/firestore/native/docs/query-data/queries), [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/behavior-differences](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/behavior-differences))
- auth (evidence: [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/supported-features-80](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/supported-features-80), [https://docs.cloud.google.com/firestore/native/docs/manage-data/add-data](https://docs.cloud.google.com/firestore/native/docs/manage-data/add-data), [https://docs.cloud.google.com/firestore/native/docs/query-data/queries](https://docs.cloud.google.com/firestore/native/docs/query-data/queries), [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/behavior-differences](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/behavior-differences))
- credential (evidence: [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/supported-features-80](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/supported-features-80), [https://docs.cloud.google.com/firestore/native/docs/manage-data/add-data](https://docs.cloud.google.com/firestore/native/docs/manage-data/add-data), [https://docs.cloud.google.com/firestore/native/docs/query-data/queries](https://docs.cloud.google.com/firestore/native/docs/query-data/queries), [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/behavior-differences](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/behavior-differences))
- encrypt (evidence: [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/supported-features-80](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/supported-features-80), [https://docs.cloud.google.com/firestore/native/docs/manage-data/add-data](https://docs.cloud.google.com/firestore/native/docs/manage-data/add-data), [https://docs.cloud.google.com/firestore/native/docs/query-data/queries](https://docs.cloud.google.com/firestore/native/docs/query-data/queries), [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/behavior-differences](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/behavior-differences))
- key (evidence: [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/supported-features-80](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/supported-features-80), [https://docs.cloud.google.com/firestore/native/docs/manage-data/add-data](https://docs.cloud.google.com/firestore/native/docs/manage-data/add-data), [https://docs.cloud.google.com/firestore/native/docs/query-data/queries](https://docs.cloud.google.com/firestore/native/docs/query-data/queries), [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/behavior-differences](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/behavior-differences))
- logging (evidence: [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/supported-features-80](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/supported-features-80), [https://docs.cloud.google.com/firestore/native/docs/manage-data/add-data](https://docs.cloud.google.com/firestore/native/docs/manage-data/add-data), [https://docs.cloud.google.com/firestore/native/docs/query-data/queries](https://docs.cloud.google.com/firestore/native/docs/query-data/queries), [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/behavior-differences](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/behavior-differences))

## Official Evidence

- [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/behavior-differences](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/behavior-differences)
- [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/supported-features-80](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/supported-features-80)
- [https://docs.cloud.google.com/firestore/native/docs/manage-data/add-data](https://docs.cloud.google.com/firestore/native/docs/manage-data/add-data)
- [https://docs.cloud.google.com/firestore/native/docs/query-data/queries](https://docs.cloud.google.com/firestore/native/docs/query-data/queries)
