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

- access (evidence: [https://docs.cloud.google.com/policy-intelligence/docs/policy-analyzer-overview](https://docs.cloud.google.com/policy-intelligence/docs/policy-analyzer-overview), [https://docs.cloud.google.com/policy-intelligence/docs/pab-simulator-overview](https://docs.cloud.google.com/policy-intelligence/docs/pab-simulator-overview), [https://docs.cloud.google.com/policy-intelligence/docs/activity-analyzer-service-account-authentication](https://docs.cloud.google.com/policy-intelligence/docs/activity-analyzer-service-account-authentication), [https://docs.cloud.google.com/policy-intelligence/docs/role-recommendations-overview](https://docs.cloud.google.com/policy-intelligence/docs/role-recommendations-overview))
- allow (evidence: [https://docs.cloud.google.com/policy-intelligence/docs/policy-analyzer-overview](https://docs.cloud.google.com/policy-intelligence/docs/policy-analyzer-overview), [https://docs.cloud.google.com/policy-intelligence/docs/pab-simulator-overview](https://docs.cloud.google.com/policy-intelligence/docs/pab-simulator-overview), [https://docs.cloud.google.com/policy-intelligence/docs/activity-analyzer-service-account-authentication](https://docs.cloud.google.com/policy-intelligence/docs/activity-analyzer-service-account-authentication), [https://docs.cloud.google.com/policy-intelligence/docs/role-recommendations-overview](https://docs.cloud.google.com/policy-intelligence/docs/role-recommendations-overview))
- auth (evidence: [https://docs.cloud.google.com/policy-intelligence/docs/policy-analyzer-overview](https://docs.cloud.google.com/policy-intelligence/docs/policy-analyzer-overview), [https://docs.cloud.google.com/policy-intelligence/docs/pab-simulator-overview](https://docs.cloud.google.com/policy-intelligence/docs/pab-simulator-overview), [https://docs.cloud.google.com/policy-intelligence/docs/activity-analyzer-service-account-authentication](https://docs.cloud.google.com/policy-intelligence/docs/activity-analyzer-service-account-authentication), [https://docs.cloud.google.com/policy-intelligence/docs/role-recommendations-overview](https://docs.cloud.google.com/policy-intelligence/docs/role-recommendations-overview))
- authorization (evidence: [https://docs.cloud.google.com/policy-intelligence/docs/policy-analyzer-overview](https://docs.cloud.google.com/policy-intelligence/docs/policy-analyzer-overview), [https://docs.cloud.google.com/policy-intelligence/docs/pab-simulator-overview](https://docs.cloud.google.com/policy-intelligence/docs/pab-simulator-overview), [https://docs.cloud.google.com/policy-intelligence/docs/activity-analyzer-service-account-authentication](https://docs.cloud.google.com/policy-intelligence/docs/activity-analyzer-service-account-authentication), [https://docs.cloud.google.com/policy-intelligence/docs/role-recommendations-overview](https://docs.cloud.google.com/policy-intelligence/docs/role-recommendations-overview))
- iam (evidence: [https://docs.cloud.google.com/policy-intelligence/docs/policy-analyzer-overview](https://docs.cloud.google.com/policy-intelligence/docs/policy-analyzer-overview), [https://docs.cloud.google.com/policy-intelligence/docs/pab-simulator-overview](https://docs.cloud.google.com/policy-intelligence/docs/pab-simulator-overview), [https://docs.cloud.google.com/policy-intelligence/docs/activity-analyzer-service-account-authentication](https://docs.cloud.google.com/policy-intelligence/docs/activity-analyzer-service-account-authentication), [https://docs.cloud.google.com/policy-intelligence/docs/role-recommendations-overview](https://docs.cloud.google.com/policy-intelligence/docs/role-recommendations-overview))
- key (evidence: [https://docs.cloud.google.com/policy-intelligence/docs/policy-analyzer-overview](https://docs.cloud.google.com/policy-intelligence/docs/policy-analyzer-overview), [https://docs.cloud.google.com/policy-intelligence/docs/pab-simulator-overview](https://docs.cloud.google.com/policy-intelligence/docs/pab-simulator-overview), [https://docs.cloud.google.com/policy-intelligence/docs/activity-analyzer-service-account-authentication](https://docs.cloud.google.com/policy-intelligence/docs/activity-analyzer-service-account-authentication), [https://docs.cloud.google.com/policy-intelligence/docs/role-recommendations-overview](https://docs.cloud.google.com/policy-intelligence/docs/role-recommendations-overview))
- permission (evidence: [https://docs.cloud.google.com/policy-intelligence/docs/policy-analyzer-overview](https://docs.cloud.google.com/policy-intelligence/docs/policy-analyzer-overview), [https://docs.cloud.google.com/policy-intelligence/docs/pab-simulator-overview](https://docs.cloud.google.com/policy-intelligence/docs/pab-simulator-overview), [https://docs.cloud.google.com/policy-intelligence/docs/activity-analyzer-service-account-authentication](https://docs.cloud.google.com/policy-intelligence/docs/activity-analyzer-service-account-authentication), [https://docs.cloud.google.com/policy-intelligence/docs/role-recommendations-overview](https://docs.cloud.google.com/policy-intelligence/docs/role-recommendations-overview))
- policy (evidence: [https://docs.cloud.google.com/policy-intelligence/docs/policy-analyzer-overview](https://docs.cloud.google.com/policy-intelligence/docs/policy-analyzer-overview), [https://docs.cloud.google.com/policy-intelligence/docs/pab-simulator-overview](https://docs.cloud.google.com/policy-intelligence/docs/pab-simulator-overview), [https://docs.cloud.google.com/policy-intelligence/docs/activity-analyzer-service-account-authentication](https://docs.cloud.google.com/policy-intelligence/docs/activity-analyzer-service-account-authentication), [https://docs.cloud.google.com/policy-intelligence/docs/role-recommendations-overview](https://docs.cloud.google.com/policy-intelligence/docs/role-recommendations-overview))
- role (evidence: [https://docs.cloud.google.com/policy-intelligence/docs/policy-analyzer-overview](https://docs.cloud.google.com/policy-intelligence/docs/policy-analyzer-overview), [https://docs.cloud.google.com/policy-intelligence/docs/pab-simulator-overview](https://docs.cloud.google.com/policy-intelligence/docs/pab-simulator-overview), [https://docs.cloud.google.com/policy-intelligence/docs/activity-analyzer-service-account-authentication](https://docs.cloud.google.com/policy-intelligence/docs/activity-analyzer-service-account-authentication), [https://docs.cloud.google.com/policy-intelligence/docs/role-recommendations-overview](https://docs.cloud.google.com/policy-intelligence/docs/role-recommendations-overview))
- security (evidence: [https://docs.cloud.google.com/policy-intelligence/docs/policy-analyzer-overview](https://docs.cloud.google.com/policy-intelligence/docs/policy-analyzer-overview), [https://docs.cloud.google.com/policy-intelligence/docs/pab-simulator-overview](https://docs.cloud.google.com/policy-intelligence/docs/pab-simulator-overview), [https://docs.cloud.google.com/policy-intelligence/docs/activity-analyzer-service-account-authentication](https://docs.cloud.google.com/policy-intelligence/docs/activity-analyzer-service-account-authentication), [https://docs.cloud.google.com/policy-intelligence/docs/role-recommendations-overview](https://docs.cloud.google.com/policy-intelligence/docs/role-recommendations-overview))
- token (evidence: [https://docs.cloud.google.com/policy-intelligence/docs/policy-analyzer-overview](https://docs.cloud.google.com/policy-intelligence/docs/policy-analyzer-overview), [https://docs.cloud.google.com/policy-intelligence/docs/pab-simulator-overview](https://docs.cloud.google.com/policy-intelligence/docs/pab-simulator-overview), [https://docs.cloud.google.com/policy-intelligence/docs/activity-analyzer-service-account-authentication](https://docs.cloud.google.com/policy-intelligence/docs/activity-analyzer-service-account-authentication), [https://docs.cloud.google.com/policy-intelligence/docs/role-recommendations-overview](https://docs.cloud.google.com/policy-intelligence/docs/role-recommendations-overview))

## Official Evidence

- [https://docs.cloud.google.com/policy-intelligence/docs/activity-analyzer-service-account-authentication](https://docs.cloud.google.com/policy-intelligence/docs/activity-analyzer-service-account-authentication)
- [https://docs.cloud.google.com/policy-intelligence/docs/pab-simulator-overview](https://docs.cloud.google.com/policy-intelligence/docs/pab-simulator-overview)
- [https://docs.cloud.google.com/policy-intelligence/docs/policy-analyzer-overview](https://docs.cloud.google.com/policy-intelligence/docs/policy-analyzer-overview)
- [https://docs.cloud.google.com/policy-intelligence/docs/role-recommendations-overview](https://docs.cloud.google.com/policy-intelligence/docs/role-recommendations-overview)
