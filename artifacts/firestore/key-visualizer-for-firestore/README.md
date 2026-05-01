# Key Visualizer for Firestore

Product: Firestore
Feature slug: `key-visualizer-for-firestore`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Key Visualizer provides workload and key access visualization for Firestore.

## Lifecycle

- Latest feature date: 2021-12-15
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
- encrypt
- iam
- identity
- key
- logging
- permission
- role
- security

## Official Evidence

- [https://docs.cloud.google.com/firestore/docs/audit-logging](https://docs.cloud.google.com/firestore/docs/audit-logging)
- [https://docs.cloud.google.com/firestore/docs/key-visualizer](https://docs.cloud.google.com/firestore/docs/key-visualizer)
- [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/security/iam](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/security/iam)
