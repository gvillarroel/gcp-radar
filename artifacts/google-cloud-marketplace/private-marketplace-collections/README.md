# Private Marketplace collections

Product: Google Cloud Marketplace
Feature slug: `private-marketplace-collections`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Private Marketplace lets organizations curate products into collections and share them with organizations, folders, or projects.

## Lifecycle

- Latest feature date: 2022-11-09
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
- iam
- identity
- permission
- private
- role

## Official Evidence

- [https://docs.cloud.google.com/marketplace/docs/access-control](https://docs.cloud.google.com/marketplace/docs/access-control)
- [https://docs.cloud.google.com/marketplace/docs/access-private-marketplace](https://docs.cloud.google.com/marketplace/docs/access-private-marketplace)
- [https://docs.cloud.google.com/marketplace/docs/governance/access-requests](https://docs.cloud.google.com/marketplace/docs/governance/access-requests)
- [https://docs.cloud.google.com/marketplace/docs/manage-billing](https://docs.cloud.google.com/marketplace/docs/manage-billing)
