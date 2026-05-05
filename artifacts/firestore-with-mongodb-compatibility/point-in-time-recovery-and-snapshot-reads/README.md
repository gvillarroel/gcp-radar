# Point-in-time recovery and snapshot reads

Product: Firestore with MongoDB compatibility
Feature slug: `point-in-time-recovery-and-snapshot-reads`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Firestore with MongoDB compatibility supports point-in-time recovery and snapshot reads in Preview.

## Lifecycle

- Latest feature date: 2025-07-21
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- allow (evidence: [https://docs.cloud.google.com/firestore/native/docs/manage-data/export-import](https://docs.cloud.google.com/firestore/native/docs/manage-data/export-import), [https://docs.cloud.google.com/firestore/native/docs/manage-data/transactions](https://docs.cloud.google.com/firestore/native/docs/manage-data/transactions), [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/disaster-recovery](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/disaster-recovery), [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/custom-constraints](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/custom-constraints))
- constraint (evidence: [https://docs.cloud.google.com/firestore/native/docs/manage-data/export-import](https://docs.cloud.google.com/firestore/native/docs/manage-data/export-import), [https://docs.cloud.google.com/firestore/native/docs/manage-data/transactions](https://docs.cloud.google.com/firestore/native/docs/manage-data/transactions), [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/disaster-recovery](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/disaster-recovery), [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/custom-constraints](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/custom-constraints))
- key (evidence: [https://docs.cloud.google.com/firestore/native/docs/manage-data/export-import](https://docs.cloud.google.com/firestore/native/docs/manage-data/export-import), [https://docs.cloud.google.com/firestore/native/docs/manage-data/transactions](https://docs.cloud.google.com/firestore/native/docs/manage-data/transactions), [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/disaster-recovery](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/disaster-recovery), [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/custom-constraints](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/custom-constraints))
- kms (evidence: [https://docs.cloud.google.com/firestore/native/docs/manage-data/export-import](https://docs.cloud.google.com/firestore/native/docs/manage-data/export-import), [https://docs.cloud.google.com/firestore/native/docs/manage-data/transactions](https://docs.cloud.google.com/firestore/native/docs/manage-data/transactions), [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/disaster-recovery](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/disaster-recovery), [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/custom-constraints](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/custom-constraints))
- policy (evidence: [https://docs.cloud.google.com/firestore/native/docs/manage-data/export-import](https://docs.cloud.google.com/firestore/native/docs/manage-data/export-import), [https://docs.cloud.google.com/firestore/native/docs/manage-data/transactions](https://docs.cloud.google.com/firestore/native/docs/manage-data/transactions), [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/disaster-recovery](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/disaster-recovery), [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/custom-constraints](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/custom-constraints))
- security (evidence: [https://docs.cloud.google.com/firestore/native/docs/manage-data/export-import](https://docs.cloud.google.com/firestore/native/docs/manage-data/export-import), [https://docs.cloud.google.com/firestore/native/docs/manage-data/transactions](https://docs.cloud.google.com/firestore/native/docs/manage-data/transactions), [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/disaster-recovery](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/disaster-recovery), [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/custom-constraints](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/custom-constraints))

## Official Evidence

- [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/custom-constraints](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/custom-constraints)
- [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/disaster-recovery](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/disaster-recovery)
- [https://docs.cloud.google.com/firestore/native/docs/manage-data/export-import](https://docs.cloud.google.com/firestore/native/docs/manage-data/export-import)
- [https://docs.cloud.google.com/firestore/native/docs/manage-data/transactions](https://docs.cloud.google.com/firestore/native/docs/manage-data/transactions)
