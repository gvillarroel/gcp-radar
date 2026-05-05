# positional projection operator

Product: Firestore with MongoDB compatibility
Feature slug: `positional-projection-operator`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Supports the positional projection operator in MongoDB-compatible projections.

## Lifecycle

- Latest feature date: 2025-08-26
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/audit-logging](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/audit-logging), [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/supported-features-80](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/supported-features-80), [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/indexing](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/indexing), [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/migrate-configure-env-vars](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/migrate-configure-env-vars))
- audit (evidence: [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/audit-logging](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/audit-logging), [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/supported-features-80](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/supported-features-80), [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/indexing](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/indexing), [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/migrate-configure-env-vars](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/migrate-configure-env-vars))
- constraint (evidence: [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/audit-logging](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/audit-logging), [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/supported-features-80](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/supported-features-80), [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/indexing](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/indexing), [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/migrate-configure-env-vars](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/migrate-configure-env-vars))
- identity (evidence: [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/audit-logging](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/audit-logging), [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/supported-features-80](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/supported-features-80), [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/indexing](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/indexing), [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/migrate-configure-env-vars](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/migrate-configure-env-vars))
- key (evidence: [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/audit-logging](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/audit-logging), [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/supported-features-80](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/supported-features-80), [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/indexing](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/indexing), [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/migrate-configure-env-vars](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/migrate-configure-env-vars))
- logging (evidence: [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/audit-logging](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/audit-logging), [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/supported-features-80](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/supported-features-80), [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/indexing](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/indexing), [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/migrate-configure-env-vars](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/migrate-configure-env-vars))
- permission (evidence: [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/audit-logging](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/audit-logging), [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/supported-features-80](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/supported-features-80), [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/indexing](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/indexing), [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/migrate-configure-env-vars](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/migrate-configure-env-vars))
- private (evidence: [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/audit-logging](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/audit-logging), [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/supported-features-80](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/supported-features-80), [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/indexing](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/indexing), [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/migrate-configure-env-vars](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/migrate-configure-env-vars))
- role (evidence: [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/audit-logging](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/audit-logging), [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/supported-features-80](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/supported-features-80), [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/indexing](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/indexing), [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/migrate-configure-env-vars](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/migrate-configure-env-vars))

## Official Evidence

- [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/audit-logging](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/audit-logging)
- [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/indexing](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/indexing)
- [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/migrate-configure-env-vars](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/migrate-configure-env-vars)
- [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/supported-features-80](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/supported-features-80)
