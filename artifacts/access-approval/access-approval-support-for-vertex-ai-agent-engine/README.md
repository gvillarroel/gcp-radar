# Access Approval support for Vertex AI Agent Engine

Product: Access Approval
Feature slug: `access-approval-support-for-vertex-ai-agent-engine`
Coverage: `LOW`
IAM mapping: `explicit`

## Technical Summary

Vertex AI Agent Engine is supported by Access Approval.

## Lifecycle

- Latest feature date: 2026-02-25
- Deprecation date: none recorded
- Status: feature_observed

## IAM

Explicit IAM evidence was found in the supporting documentation.

Roles:

- `roles/accessapproval.approver`

## Security Capabilities

- access
- armor
- iam
- identity
- key
- kms
- logging
- policy
- private
- role
- secret
- security

## Official Evidence

- [https://docs.cloud.google.com/app-hub/docs/overview](https://docs.cloud.google.com/app-hub/docs/overview)
- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/supported-services](https://docs.cloud.google.com/assured-workloads/access-approval/docs/supported-services)
- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/using-terraform](https://docs.cloud.google.com/assured-workloads/access-approval/docs/using-terraform)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
