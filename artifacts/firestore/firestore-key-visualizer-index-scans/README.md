# Firestore Key Visualizer index scans

Product: Firestore
Feature slug: `firestore-key-visualizer-index-scans`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Key Visualizer supports index scans for Firestore.

## Lifecycle

- Latest feature date: 2023-12-20
- Deprecation date: none recorded
- Status: feature_observed

## IAM

Explicit IAM evidence was found in the supporting documentation.

Roles:

- `roles/accessapproval.admin`
- `roles/accessapproval.approver`
- `roles/accessapproval.configEditor`

Permissions:

- `resourcemanager.projects.get`
- `resourcemanager.projects.list`

## Security Capabilities

- access
- audit
- credential
- iam
- identity
- key
- logging
- permission
- role
- security

## Official Evidence

- [https://docs.cloud.google.com/firestore/docs/key-visualizer](https://docs.cloud.google.com/firestore/docs/key-visualizer)
- [https://docs.cloud.google.com/firestore/docs/keyvis-patterns-index](https://docs.cloud.google.com/firestore/docs/keyvis-patterns-index)
- [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/security/iam](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/security/iam)
