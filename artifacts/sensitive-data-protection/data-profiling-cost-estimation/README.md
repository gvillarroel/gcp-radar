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

- access (evidence: [https://docs.cloud.google.com/sensitive-data-protection/docs/best-practices-costs](https://docs.cloud.google.com/sensitive-data-protection/docs/best-practices-costs), [https://docs.cloud.google.com/iam/docs/roles-permissions/dlp](https://docs.cloud.google.com/iam/docs/roles-permissions/dlp), [https://docs.cloud.google.com/sensitive-data-protection/docs/compute-k-map](https://docs.cloud.google.com/sensitive-data-protection/docs/compute-k-map))
- armor (evidence: [https://docs.cloud.google.com/sensitive-data-protection/docs/best-practices-costs](https://docs.cloud.google.com/sensitive-data-protection/docs/best-practices-costs), [https://docs.cloud.google.com/iam/docs/roles-permissions/dlp](https://docs.cloud.google.com/iam/docs/roles-permissions/dlp), [https://docs.cloud.google.com/sensitive-data-protection/docs/compute-k-map](https://docs.cloud.google.com/sensitive-data-protection/docs/compute-k-map))
- audit (evidence: [https://docs.cloud.google.com/sensitive-data-protection/docs/best-practices-costs](https://docs.cloud.google.com/sensitive-data-protection/docs/best-practices-costs), [https://docs.cloud.google.com/iam/docs/roles-permissions/dlp](https://docs.cloud.google.com/iam/docs/roles-permissions/dlp), [https://docs.cloud.google.com/sensitive-data-protection/docs/compute-k-map](https://docs.cloud.google.com/sensitive-data-protection/docs/compute-k-map))
- auth (evidence: [https://docs.cloud.google.com/sensitive-data-protection/docs/best-practices-costs](https://docs.cloud.google.com/sensitive-data-protection/docs/best-practices-costs), [https://docs.cloud.google.com/iam/docs/roles-permissions/dlp](https://docs.cloud.google.com/iam/docs/roles-permissions/dlp), [https://docs.cloud.google.com/sensitive-data-protection/docs/compute-k-map](https://docs.cloud.google.com/sensitive-data-protection/docs/compute-k-map))
- authorization (evidence: [https://docs.cloud.google.com/sensitive-data-protection/docs/best-practices-costs](https://docs.cloud.google.com/sensitive-data-protection/docs/best-practices-costs), [https://docs.cloud.google.com/iam/docs/roles-permissions/dlp](https://docs.cloud.google.com/iam/docs/roles-permissions/dlp), [https://docs.cloud.google.com/sensitive-data-protection/docs/compute-k-map](https://docs.cloud.google.com/sensitive-data-protection/docs/compute-k-map))
- certificate (evidence: [https://docs.cloud.google.com/sensitive-data-protection/docs/best-practices-costs](https://docs.cloud.google.com/sensitive-data-protection/docs/best-practices-costs), [https://docs.cloud.google.com/iam/docs/roles-permissions/dlp](https://docs.cloud.google.com/iam/docs/roles-permissions/dlp), [https://docs.cloud.google.com/sensitive-data-protection/docs/compute-k-map](https://docs.cloud.google.com/sensitive-data-protection/docs/compute-k-map))
- encrypt (evidence: [https://docs.cloud.google.com/sensitive-data-protection/docs/best-practices-costs](https://docs.cloud.google.com/sensitive-data-protection/docs/best-practices-costs), [https://docs.cloud.google.com/iam/docs/roles-permissions/dlp](https://docs.cloud.google.com/iam/docs/roles-permissions/dlp), [https://docs.cloud.google.com/sensitive-data-protection/docs/compute-k-map](https://docs.cloud.google.com/sensitive-data-protection/docs/compute-k-map))
- firewall (evidence: [https://docs.cloud.google.com/sensitive-data-protection/docs/best-practices-costs](https://docs.cloud.google.com/sensitive-data-protection/docs/best-practices-costs), [https://docs.cloud.google.com/iam/docs/roles-permissions/dlp](https://docs.cloud.google.com/iam/docs/roles-permissions/dlp), [https://docs.cloud.google.com/sensitive-data-protection/docs/compute-k-map](https://docs.cloud.google.com/sensitive-data-protection/docs/compute-k-map))
- iam (evidence: [https://docs.cloud.google.com/sensitive-data-protection/docs/best-practices-costs](https://docs.cloud.google.com/sensitive-data-protection/docs/best-practices-costs), [https://docs.cloud.google.com/iam/docs/roles-permissions/dlp](https://docs.cloud.google.com/iam/docs/roles-permissions/dlp), [https://docs.cloud.google.com/sensitive-data-protection/docs/compute-k-map](https://docs.cloud.google.com/sensitive-data-protection/docs/compute-k-map))
- identity (evidence: [https://docs.cloud.google.com/sensitive-data-protection/docs/best-practices-costs](https://docs.cloud.google.com/sensitive-data-protection/docs/best-practices-costs), [https://docs.cloud.google.com/iam/docs/roles-permissions/dlp](https://docs.cloud.google.com/iam/docs/roles-permissions/dlp), [https://docs.cloud.google.com/sensitive-data-protection/docs/compute-k-map](https://docs.cloud.google.com/sensitive-data-protection/docs/compute-k-map))
- key (evidence: [https://docs.cloud.google.com/sensitive-data-protection/docs/best-practices-costs](https://docs.cloud.google.com/sensitive-data-protection/docs/best-practices-costs), [https://docs.cloud.google.com/iam/docs/roles-permissions/dlp](https://docs.cloud.google.com/iam/docs/roles-permissions/dlp), [https://docs.cloud.google.com/sensitive-data-protection/docs/compute-k-map](https://docs.cloud.google.com/sensitive-data-protection/docs/compute-k-map))
- kms (evidence: [https://docs.cloud.google.com/sensitive-data-protection/docs/best-practices-costs](https://docs.cloud.google.com/sensitive-data-protection/docs/best-practices-costs), [https://docs.cloud.google.com/iam/docs/roles-permissions/dlp](https://docs.cloud.google.com/iam/docs/roles-permissions/dlp), [https://docs.cloud.google.com/sensitive-data-protection/docs/compute-k-map](https://docs.cloud.google.com/sensitive-data-protection/docs/compute-k-map))
- logging (evidence: [https://docs.cloud.google.com/sensitive-data-protection/docs/best-practices-costs](https://docs.cloud.google.com/sensitive-data-protection/docs/best-practices-costs), [https://docs.cloud.google.com/iam/docs/roles-permissions/dlp](https://docs.cloud.google.com/iam/docs/roles-permissions/dlp), [https://docs.cloud.google.com/sensitive-data-protection/docs/compute-k-map](https://docs.cloud.google.com/sensitive-data-protection/docs/compute-k-map))
- permission (evidence: [https://docs.cloud.google.com/sensitive-data-protection/docs/best-practices-costs](https://docs.cloud.google.com/sensitive-data-protection/docs/best-practices-costs), [https://docs.cloud.google.com/iam/docs/roles-permissions/dlp](https://docs.cloud.google.com/iam/docs/roles-permissions/dlp), [https://docs.cloud.google.com/sensitive-data-protection/docs/compute-k-map](https://docs.cloud.google.com/sensitive-data-protection/docs/compute-k-map))
- policy (evidence: [https://docs.cloud.google.com/sensitive-data-protection/docs/best-practices-costs](https://docs.cloud.google.com/sensitive-data-protection/docs/best-practices-costs), [https://docs.cloud.google.com/iam/docs/roles-permissions/dlp](https://docs.cloud.google.com/iam/docs/roles-permissions/dlp), [https://docs.cloud.google.com/sensitive-data-protection/docs/compute-k-map](https://docs.cloud.google.com/sensitive-data-protection/docs/compute-k-map))
- private (evidence: [https://docs.cloud.google.com/sensitive-data-protection/docs/best-practices-costs](https://docs.cloud.google.com/sensitive-data-protection/docs/best-practices-costs), [https://docs.cloud.google.com/iam/docs/roles-permissions/dlp](https://docs.cloud.google.com/iam/docs/roles-permissions/dlp), [https://docs.cloud.google.com/sensitive-data-protection/docs/compute-k-map](https://docs.cloud.google.com/sensitive-data-protection/docs/compute-k-map))
- role (evidence: [https://docs.cloud.google.com/sensitive-data-protection/docs/best-practices-costs](https://docs.cloud.google.com/sensitive-data-protection/docs/best-practices-costs), [https://docs.cloud.google.com/iam/docs/roles-permissions/dlp](https://docs.cloud.google.com/iam/docs/roles-permissions/dlp), [https://docs.cloud.google.com/sensitive-data-protection/docs/compute-k-map](https://docs.cloud.google.com/sensitive-data-protection/docs/compute-k-map))
- secret (evidence: [https://docs.cloud.google.com/sensitive-data-protection/docs/best-practices-costs](https://docs.cloud.google.com/sensitive-data-protection/docs/best-practices-costs), [https://docs.cloud.google.com/iam/docs/roles-permissions/dlp](https://docs.cloud.google.com/iam/docs/roles-permissions/dlp), [https://docs.cloud.google.com/sensitive-data-protection/docs/compute-k-map](https://docs.cloud.google.com/sensitive-data-protection/docs/compute-k-map))
- security (evidence: [https://docs.cloud.google.com/sensitive-data-protection/docs/best-practices-costs](https://docs.cloud.google.com/sensitive-data-protection/docs/best-practices-costs), [https://docs.cloud.google.com/iam/docs/roles-permissions/dlp](https://docs.cloud.google.com/iam/docs/roles-permissions/dlp), [https://docs.cloud.google.com/sensitive-data-protection/docs/compute-k-map](https://docs.cloud.google.com/sensitive-data-protection/docs/compute-k-map))

## Official Evidence

- [https://docs.cloud.google.com/iam/docs/roles-permissions/dlp](https://docs.cloud.google.com/iam/docs/roles-permissions/dlp)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/best-practices-costs](https://docs.cloud.google.com/sensitive-data-protection/docs/best-practices-costs)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/compute-k-map](https://docs.cloud.google.com/sensitive-data-protection/docs/compute-k-map)
