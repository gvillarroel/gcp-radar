# Managed bulk delete

Product: Firestore with MongoDB compatibility
Feature slug: `managed-bulk-delete`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Firestore with MongoDB compatibility supports managed bulk deletion of data.

## Lifecycle

- Latest feature date: 2025-08-26
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/bulk-delete](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/bulk-delete), [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/cmek](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/cmek), [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/export-import](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/export-import), [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/custom-constraints](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/custom-constraints))
- allow (evidence: [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/bulk-delete](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/bulk-delete), [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/cmek](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/cmek), [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/export-import](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/export-import), [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/custom-constraints](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/custom-constraints))
- constraint (evidence: [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/bulk-delete](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/bulk-delete), [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/cmek](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/cmek), [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/export-import](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/export-import), [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/custom-constraints](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/custom-constraints))
- encrypt (evidence: [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/bulk-delete](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/bulk-delete), [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/cmek](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/cmek), [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/export-import](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/export-import), [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/custom-constraints](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/custom-constraints))
- key (evidence: [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/bulk-delete](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/bulk-delete), [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/cmek](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/cmek), [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/export-import](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/export-import), [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/custom-constraints](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/custom-constraints))
- kms (evidence: [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/bulk-delete](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/bulk-delete), [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/cmek](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/cmek), [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/export-import](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/export-import), [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/custom-constraints](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/custom-constraints))
- permission (evidence: [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/bulk-delete](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/bulk-delete), [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/cmek](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/cmek), [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/export-import](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/export-import), [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/custom-constraints](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/custom-constraints))
- policy (evidence: [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/bulk-delete](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/bulk-delete), [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/cmek](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/cmek), [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/export-import](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/export-import), [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/custom-constraints](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/custom-constraints))
- role (evidence: [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/bulk-delete](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/bulk-delete), [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/cmek](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/cmek), [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/export-import](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/export-import), [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/custom-constraints](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/custom-constraints))
- security (evidence: [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/bulk-delete](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/bulk-delete), [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/cmek](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/cmek), [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/export-import](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/export-import), [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/custom-constraints](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/custom-constraints))

## Official Evidence

- [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/bulk-delete](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/bulk-delete)
- [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/cmek](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/cmek)
- [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/custom-constraints](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/custom-constraints)
- [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/export-import](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/export-import)
