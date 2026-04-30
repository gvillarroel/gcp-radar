# Firestore custom IAM roles

Product: Firestore
Feature slug: `firestore-custom-iam-roles`
Coverage: `LOW`
IAM mapping: `explicit`

## Technical Summary

Firestore supports custom Identity and Access Management roles.

## Lifecycle

- Latest feature date: 2021-06-15
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
- allow
- constraint
- credential
- iam
- identity
- key
- permission
- policy
- role
- security

## Official Evidence

- [https://docs.cloud.google.com/firestore/docs/custom-constraints](https://docs.cloud.google.com/firestore/docs/custom-constraints)
- [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/security/iam](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/security/iam)
- [https://docs.cloud.google.com/firestore/native/docs/custom-constraints](https://docs.cloud.google.com/firestore/native/docs/custom-constraints)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
