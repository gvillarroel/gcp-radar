# Access Approval support for Memorystore for Redis Cluster

Product: Access Approval
Feature slug: `access-approval-support-for-memorystore-for-redis-cluster`
Coverage: `LOW`
IAM mapping: `explicit`

## Technical Summary

Memorystore for Redis Cluster is supported by Access Approval.

## Lifecycle

- Latest feature date: 2025-09-26
- Deprecation date: none recorded
- Status: feature_observed

## IAM

Explicit IAM evidence was found in the supporting documentation.

Roles:

- `roles/accessapproval.approver`

## Security Capabilities

- access
- armor
- audit
- auth
- certificate
- iam
- identity
- key
- kms
- logging
- permission
- policy
- role
- secret
- security

## Official Evidence

- [https://docs.cloud.google.com/app-hub/docs/supported-resources](https://docs.cloud.google.com/app-hub/docs/supported-resources)
- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/supported-services](https://docs.cloud.google.com/assured-workloads/access-approval/docs/supported-services)
- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/using-terraform](https://docs.cloud.google.com/assured-workloads/access-approval/docs/using-terraform)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
- `warn:support_matrix_only_evidence` The feature is backed only by broad support-matrix style evidence, not a dedicated page for the supported target.
