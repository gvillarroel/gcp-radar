# Firestore scheduled backups

Product: Firestore
Feature slug: `firestore-scheduled-backups`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Firestore supports scheduled backups; Scheduled backups are now available in Preview.

## Lifecycle

- Latest feature date: 2024-06-28
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- encrypt
- key

## Official Evidence

- [https://docs.cloud.google.com/firestore/docs/backups](https://docs.cloud.google.com/firestore/docs/backups)
- [https://docs.cloud.google.com/firestore/docs/reference/rest/Shared.Types/ChangeType](https://docs.cloud.google.com/firestore/docs/reference/rest/Shared.Types/ChangeType)
- [https://docs.cloud.google.com/firestore/native/docs/backups](https://docs.cloud.google.com/firestore/native/docs/backups)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
