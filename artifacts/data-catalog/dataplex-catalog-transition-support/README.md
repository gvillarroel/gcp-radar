# Dataplex Catalog transition support

Product: Data Catalog
Feature slug: `dataplex-catalog-transition-support`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Data Catalog provides guidance and support for transitioning content and usage to Dataplex Catalog.

## Lifecycle

- Latest feature date: 2024-12-09
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

- [https://docs.cloud.google.com/data-catalog/docs/reference/rest/v1/DataplexTransferStatus](https://docs.cloud.google.com/data-catalog/docs/reference/rest/v1/DataplexTransferStatus)
- [https://docs.cloud.google.com/data-catalog/docs/tags-and-tag-templates](https://docs.cloud.google.com/data-catalog/docs/tags-and-tag-templates)
- [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support)
- [https://docs.cloud.google.com/iam/docs/roles-permissions/datacatalog](https://docs.cloud.google.com/iam/docs/roles-permissions/datacatalog)
