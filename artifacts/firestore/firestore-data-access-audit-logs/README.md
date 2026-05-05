# Firestore Data Access audit logs

Product: Firestore
Feature slug: `firestore-data-access-audit-logs`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Firestore supports DATA_READ and DATA_WRITE Data Access audit logs; Firestore supports DATA_READ and DATA_WRITE Data Access audit logs in Preview.

## Lifecycle

- Latest feature date: 2021-11-04
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/firestore/docs/audit-logging](https://docs.cloud.google.com/firestore/docs/audit-logging), [https://docs.cloud.google.com/firestore/native/docs/audit-logging](https://docs.cloud.google.com/firestore/native/docs/audit-logging))
- allow (evidence: [https://docs.cloud.google.com/firestore/docs/audit-logging](https://docs.cloud.google.com/firestore/docs/audit-logging), [https://docs.cloud.google.com/firestore/native/docs/audit-logging](https://docs.cloud.google.com/firestore/native/docs/audit-logging))
- audit (evidence: [https://docs.cloud.google.com/firestore/docs/audit-logging](https://docs.cloud.google.com/firestore/docs/audit-logging), [https://docs.cloud.google.com/firestore/native/docs/audit-logging](https://docs.cloud.google.com/firestore/native/docs/audit-logging))
- constraint (evidence: [https://docs.cloud.google.com/firestore/docs/audit-logging](https://docs.cloud.google.com/firestore/docs/audit-logging), [https://docs.cloud.google.com/firestore/native/docs/audit-logging](https://docs.cloud.google.com/firestore/native/docs/audit-logging))
- encrypt (evidence: [https://docs.cloud.google.com/firestore/docs/audit-logging](https://docs.cloud.google.com/firestore/docs/audit-logging), [https://docs.cloud.google.com/firestore/native/docs/audit-logging](https://docs.cloud.google.com/firestore/native/docs/audit-logging))
- identity (evidence: [https://docs.cloud.google.com/firestore/docs/audit-logging](https://docs.cloud.google.com/firestore/docs/audit-logging), [https://docs.cloud.google.com/firestore/native/docs/audit-logging](https://docs.cloud.google.com/firestore/native/docs/audit-logging))
- key (evidence: [https://docs.cloud.google.com/firestore/docs/audit-logging](https://docs.cloud.google.com/firestore/docs/audit-logging), [https://docs.cloud.google.com/firestore/native/docs/audit-logging](https://docs.cloud.google.com/firestore/native/docs/audit-logging))
- logging (evidence: [https://docs.cloud.google.com/firestore/docs/audit-logging](https://docs.cloud.google.com/firestore/docs/audit-logging), [https://docs.cloud.google.com/firestore/native/docs/audit-logging](https://docs.cloud.google.com/firestore/native/docs/audit-logging))
- permission (evidence: [https://docs.cloud.google.com/firestore/docs/audit-logging](https://docs.cloud.google.com/firestore/docs/audit-logging), [https://docs.cloud.google.com/firestore/native/docs/audit-logging](https://docs.cloud.google.com/firestore/native/docs/audit-logging))
- policy (evidence: [https://docs.cloud.google.com/firestore/docs/audit-logging](https://docs.cloud.google.com/firestore/docs/audit-logging), [https://docs.cloud.google.com/firestore/native/docs/audit-logging](https://docs.cloud.google.com/firestore/native/docs/audit-logging))
- security (evidence: [https://docs.cloud.google.com/firestore/docs/audit-logging](https://docs.cloud.google.com/firestore/docs/audit-logging), [https://docs.cloud.google.com/firestore/native/docs/audit-logging](https://docs.cloud.google.com/firestore/native/docs/audit-logging))

## Official Evidence

- [https://docs.cloud.google.com/firestore/docs/audit-logging](https://docs.cloud.google.com/firestore/docs/audit-logging)
- [https://docs.cloud.google.com/firestore/native/docs/audit-logging](https://docs.cloud.google.com/firestore/native/docs/audit-logging)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
