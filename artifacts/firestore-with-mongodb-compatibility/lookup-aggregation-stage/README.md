# $lookup aggregation stage

Product: Firestore with MongoDB compatibility
Feature slug: `lookup-aggregation-stage`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Supports the from, localField, foreignField, and as fields in $lookup; Supports the $lookup aggregation stage, limited to _id in foreignField matches.

## Lifecycle

- Latest feature date: 2025-09-17
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/supported-features-80](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/supported-features-80), [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/migrate-import-from-source](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/migrate-import-from-source), [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/behavior-differences](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/behavior-differences), [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/migrate-configure-env-vars](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/migrate-configure-env-vars))
- allow (evidence: [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/supported-features-80](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/supported-features-80), [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/migrate-import-from-source](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/migrate-import-from-source), [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/behavior-differences](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/behavior-differences), [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/migrate-configure-env-vars](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/migrate-configure-env-vars))
- auth (evidence: [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/supported-features-80](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/supported-features-80), [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/migrate-import-from-source](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/migrate-import-from-source), [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/behavior-differences](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/behavior-differences), [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/migrate-configure-env-vars](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/migrate-configure-env-vars))
- key (evidence: [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/supported-features-80](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/supported-features-80), [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/migrate-import-from-source](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/migrate-import-from-source), [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/behavior-differences](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/behavior-differences), [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/migrate-configure-env-vars](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/migrate-configure-env-vars))

## Official Evidence

- [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/behavior-differences](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/behavior-differences)
- [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/migrate-configure-env-vars](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/migrate-configure-env-vars)
- [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/migrate-import-from-source](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/migrate-import-from-source)
- [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/supported-features-80](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/supported-features-80)
