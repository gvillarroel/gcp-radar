# IAM Recommender observation period configuration

Product: Policy Intelligence
Feature slug: `iam-recommender-observation-period-configuration`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

IAM Recommender lets you set the minimum observation period to 30, 60, or 90 days when generating role recommendations.

## Lifecycle

- Latest feature date: 2022-12-05
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
- key
- permission
- policy
- role
- security
- token

## Official Evidence

- [https://docs.cloud.google.com/policy-intelligence/docs/configure-role-recommendations](https://docs.cloud.google.com/policy-intelligence/docs/configure-role-recommendations)
- [https://docs.cloud.google.com/policy-intelligence/docs/lateral-movement-insights](https://docs.cloud.google.com/policy-intelligence/docs/lateral-movement-insights)
- [https://docs.cloud.google.com/policy-intelligence/docs/organization-policy-insights](https://docs.cloud.google.com/policy-intelligence/docs/organization-policy-insights)
- [https://docs.cloud.google.com/policy-intelligence/docs/role-recommendations-overview](https://docs.cloud.google.com/policy-intelligence/docs/role-recommendations-overview)
