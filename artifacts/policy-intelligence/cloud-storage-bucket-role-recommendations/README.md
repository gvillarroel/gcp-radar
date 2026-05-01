# Cloud Storage bucket role recommendations

Product: Policy Intelligence
Feature slug: `cloud-storage-bucket-role-recommendations`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Recommender can suggest role changes for Cloud Storage buckets based on actual permission usage.

## Lifecycle

- Latest feature date: 2022-07-08
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
- iam
- identity
- permission
- policy
- role
- security

## Official Evidence

- [https://docs.cloud.google.com/policy-intelligence/docs/configure-role-recommendations](https://docs.cloud.google.com/policy-intelligence/docs/configure-role-recommendations)
- [https://docs.cloud.google.com/policy-intelligence/docs/export-role-recommendations-data](https://docs.cloud.google.com/policy-intelligence/docs/export-role-recommendations-data)
- [https://docs.cloud.google.com/policy-intelligence/docs/overview](https://docs.cloud.google.com/policy-intelligence/docs/overview)
- [https://docs.cloud.google.com/policy-intelligence/docs/role-recommendations-overview](https://docs.cloud.google.com/policy-intelligence/docs/role-recommendations-overview)
