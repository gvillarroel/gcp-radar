# IAM Recommender for BigQuery datasets

Product: Policy Intelligence
Feature slug: `iam-recommender-for-bigquery-datasets`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

IAM Recommender offers role recommendations for BigQuery datasets based on actual permission usage.

## Lifecycle

- Latest feature date: 2024-02-26
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
- audit
- auth
- authorization
- constraint
- iam
- identity
- key
- logging
- permission
- policy
- role
- security
- token

## Official Evidence

- [https://docs.cloud.google.com/policy-intelligence/docs/configure-role-recommendations](https://docs.cloud.google.com/policy-intelligence/docs/configure-role-recommendations)
- [https://docs.cloud.google.com/policy-intelligence/docs/export-role-recommendations-data](https://docs.cloud.google.com/policy-intelligence/docs/export-role-recommendations-data)
- [https://docs.cloud.google.com/policy-intelligence/docs/organization-policy-insights](https://docs.cloud.google.com/policy-intelligence/docs/organization-policy-insights)
- [https://docs.cloud.google.com/policy-intelligence/docs/role-recommendations-overview](https://docs.cloud.google.com/policy-intelligence/docs/role-recommendations-overview)
