# Analytics Hub integration

Product: Data Catalog
Feature slug: `analytics-hub-integration`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Data Catalog integrates with Analytics Hub to support linked datasets and related search behavior; Data Catalog integrates with Analytics Hub to support working with linked datasets.

## Lifecycle

- Latest feature date: 2022-10-11
- Deprecation date: none recorded
- Status: feature_observed

## IAM

Explicit IAM evidence was found in the supporting documentation.

Roles:

- `roles/accessapproval.admin`
- `roles/accessapproval.approver`
- `roles/accessapproval.configEditor`

Permissions:

- `accessapproval.requests.approve`
- `accessapproval.requests.dismiss`
- `accessapproval.requests.get`
- `accessapproval.requests.invalidate`
- `accessapproval.requests.list`
- `accessapproval.serviceAccounts.get`
- `accessapproval.settings.delete`
- `accessapproval.settings.get`
- `accessapproval.settings.update`
- `resourcemanager.projects.get`
- `resourcemanager.projects.list`

## Security Capabilities

- access
- allow
- armor
- audit
- auth
- authorization
- certificate
- confidential
- constraint
- credential
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
- threat
- token

## Official Evidence

- [https://docs.cloud.google.com/data-catalog/docs/how-to/custom-entries](https://docs.cloud.google.com/data-catalog/docs/how-to/custom-entries)
- [https://docs.cloud.google.com/data-catalog/docs/how-to/search](https://docs.cloud.google.com/data-catalog/docs/how-to/search)
- [https://docs.cloud.google.com/data-catalog/docs/support](https://docs.cloud.google.com/data-catalog/docs/support)
- [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support)
