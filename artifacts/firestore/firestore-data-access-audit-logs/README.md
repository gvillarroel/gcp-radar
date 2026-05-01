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

- access
- allow
- audit
- constraint
- encrypt
- identity
- key
- logging
- permission
- policy
- security

## Official Evidence

- [https://docs.cloud.google.com/firestore/docs/audit-logging](https://docs.cloud.google.com/firestore/docs/audit-logging)
- [https://docs.cloud.google.com/firestore/native/docs/audit-logging](https://docs.cloud.google.com/firestore/native/docs/audit-logging)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
