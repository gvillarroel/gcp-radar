# Data profiling cost estimation

Product: Sensitive Data Protection
Feature slug: `data-profiling-cost-estimation`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

You can estimate the number of tables, data size, and profiling cost for BigQuery profiling scopes.

## Lifecycle

- Latest feature date: 2023-02-06
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
- armor
- audit
- auth
- authorization
- certificate
- encrypt
- firewall
- iam
- identity
- key
- kms
- logging
- permission
- policy
- private
- role
- secret
- security

## Official Evidence

- [https://docs.cloud.google.com/iam/docs/roles-permissions/dlp](https://docs.cloud.google.com/iam/docs/roles-permissions/dlp)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/best-practices-costs](https://docs.cloud.google.com/sensitive-data-protection/docs/best-practices-costs)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/compute-k-map](https://docs.cloud.google.com/sensitive-data-protection/docs/compute-k-map)
