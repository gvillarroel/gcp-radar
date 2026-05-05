# Firestore multiple databases per project

Product: Firestore
Feature slug: `firestore-multiple-databases-per-project`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Firestore supports multiple databases per project.

## Lifecycle

- Latest feature date: 2024-01-10
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/firestore/docs/backups](https://docs.cloud.google.com/firestore/docs/backups), [https://docs.cloud.google.com/firestore/native/docs/backups](https://docs.cloud.google.com/firestore/native/docs/backups), [https://docs.cloud.google.com/firestore/native/docs/manage-data/delete-data](https://docs.cloud.google.com/firestore/native/docs/manage-data/delete-data))
- key (evidence: [https://docs.cloud.google.com/firestore/docs/backups](https://docs.cloud.google.com/firestore/docs/backups), [https://docs.cloud.google.com/firestore/native/docs/backups](https://docs.cloud.google.com/firestore/native/docs/backups), [https://docs.cloud.google.com/firestore/native/docs/manage-data/delete-data](https://docs.cloud.google.com/firestore/native/docs/manage-data/delete-data))

## Official Evidence

- [https://docs.cloud.google.com/firestore/docs/backups](https://docs.cloud.google.com/firestore/docs/backups)
- [https://docs.cloud.google.com/firestore/native/docs/backups](https://docs.cloud.google.com/firestore/native/docs/backups)
- [https://docs.cloud.google.com/firestore/native/docs/manage-data/delete-data](https://docs.cloud.google.com/firestore/native/docs/manage-data/delete-data)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
