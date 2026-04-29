# Access Approval support for Google Cloud Managed Service for Apache Kafka

Product: Access Approval
Feature slug: `access-approval-support-for-google-cloud-managed-service-for-apache-kafka`
Coverage: `LOW`
IAM mapping: `explicit`

## Technical Summary

Google Cloud Managed Service for Apache Kafka is supported by Access Approval.

## Lifecycle

- Latest feature date: 2025-10-14
- Deprecation date: none recorded
- Status: feature_observed

## IAM

Explicit IAM evidence was found in the supporting documentation.

Roles:

- `roles/accessapproval.approver`
- `roles/accessapproval.configEditor`

## Security Capabilities

- access
- armor
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
- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/review-approve-access-requests-google-keys](https://docs.cloud.google.com/assured-workloads/access-approval/docs/review-approve-access-requests-google-keys)
- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/supported-services](https://docs.cloud.google.com/assured-workloads/access-approval/docs/supported-services)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
- `warn:support_matrix_only_evidence` The feature is backed only by broad support-matrix style evidence, not a dedicated page for the supported target.
