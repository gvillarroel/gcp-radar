# Organization Policy recommender for service account keys

Product: Policy Intelligence
Feature slug: `organization-policy-recommender-for-service-account-keys`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

The Organization Policy recommender generates insights and recommendations to restrict the creation and upload of service account keys.

## Lifecycle

- Latest feature date: 2024-12-19
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
- constraint
- iam
- identity
- key
- permission
- policy
- role
- security
- token

## Official Evidence

- [https://docs.cloud.google.com/policy-intelligence/docs/activity-analyzer-service-account-authentication](https://docs.cloud.google.com/policy-intelligence/docs/activity-analyzer-service-account-authentication)
- [https://docs.cloud.google.com/policy-intelligence/docs/organization-policy-insights](https://docs.cloud.google.com/policy-intelligence/docs/organization-policy-insights)
- [https://docs.cloud.google.com/policy-intelligence/docs/organization-policy-recommendations-overview](https://docs.cloud.google.com/policy-intelligence/docs/organization-policy-recommendations-overview)
- [https://docs.cloud.google.com/policy-intelligence/docs/role-recommendations-overview](https://docs.cloud.google.com/policy-intelligence/docs/role-recommendations-overview)
