# Policy Troubleshooter for service account principal set bindings

Product: Policy Intelligence
Feature slug: `policy-troubleshooter-for-service-account-principal-set-bindings`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Policy Troubleshooter can analyze policies that include bindings for service account principal sets.

## Lifecycle

- Latest feature date: 2025-11-04
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

## Security Capabilities

- access
- allow
- auth
- authorization
- iam
- key
- permission
- policy
- role
- security
- token

## Official Evidence

- [https://docs.cloud.google.com/policy-intelligence/docs/activity-analyzer-service-account-authentication](https://docs.cloud.google.com/policy-intelligence/docs/activity-analyzer-service-account-authentication)
- [https://docs.cloud.google.com/policy-intelligence/docs/pab-simulator-overview](https://docs.cloud.google.com/policy-intelligence/docs/pab-simulator-overview)
- [https://docs.cloud.google.com/policy-intelligence/docs/policy-analyzer-overview](https://docs.cloud.google.com/policy-intelligence/docs/policy-analyzer-overview)
- [https://docs.cloud.google.com/policy-intelligence/docs/role-recommendations-overview](https://docs.cloud.google.com/policy-intelligence/docs/role-recommendations-overview)
