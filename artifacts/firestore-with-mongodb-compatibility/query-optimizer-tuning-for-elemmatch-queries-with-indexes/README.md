# Query optimizer tuning for $elemMatch queries with indexes

Product: Firestore with MongoDB compatibility
Feature slug: `query-optimizer-tuning-for-elemmatch-queries-with-indexes`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Query optimizer tuning improves $elemMatch queries with indexes in Preview.

## Lifecycle

- Latest feature date: 2025-07-10
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/firestore/native/docs/query-data/queries](https://docs.cloud.google.com/firestore/native/docs/query-data/queries), [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/index-overview](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/index-overview), [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/create-manage-saved-queries](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/create-manage-saved-queries), [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/supported-features-80](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/supported-features-80))
- audit (evidence: [https://docs.cloud.google.com/firestore/native/docs/query-data/queries](https://docs.cloud.google.com/firestore/native/docs/query-data/queries), [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/index-overview](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/index-overview), [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/create-manage-saved-queries](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/create-manage-saved-queries), [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/supported-features-80](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/supported-features-80))
- auth (evidence: [https://docs.cloud.google.com/firestore/native/docs/query-data/queries](https://docs.cloud.google.com/firestore/native/docs/query-data/queries), [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/index-overview](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/index-overview), [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/create-manage-saved-queries](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/create-manage-saved-queries), [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/supported-features-80](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/supported-features-80))
- iam (evidence: [https://docs.cloud.google.com/firestore/native/docs/query-data/queries](https://docs.cloud.google.com/firestore/native/docs/query-data/queries), [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/index-overview](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/index-overview), [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/create-manage-saved-queries](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/create-manage-saved-queries), [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/supported-features-80](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/supported-features-80))
- identity (evidence: [https://docs.cloud.google.com/firestore/native/docs/query-data/queries](https://docs.cloud.google.com/firestore/native/docs/query-data/queries), [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/index-overview](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/index-overview), [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/create-manage-saved-queries](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/create-manage-saved-queries), [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/supported-features-80](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/supported-features-80))
- permission (evidence: [https://docs.cloud.google.com/firestore/native/docs/query-data/queries](https://docs.cloud.google.com/firestore/native/docs/query-data/queries), [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/index-overview](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/index-overview), [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/create-manage-saved-queries](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/create-manage-saved-queries), [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/supported-features-80](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/supported-features-80))
- role (evidence: [https://docs.cloud.google.com/firestore/native/docs/query-data/queries](https://docs.cloud.google.com/firestore/native/docs/query-data/queries), [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/index-overview](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/index-overview), [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/create-manage-saved-queries](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/create-manage-saved-queries), [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/supported-features-80](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/supported-features-80))

## Official Evidence

- [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/create-manage-saved-queries](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/create-manage-saved-queries)
- [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/index-overview](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/index-overview)
- [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/supported-features-80](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/supported-features-80)
- [https://docs.cloud.google.com/firestore/native/docs/query-data/queries](https://docs.cloud.google.com/firestore/native/docs/query-data/queries)
