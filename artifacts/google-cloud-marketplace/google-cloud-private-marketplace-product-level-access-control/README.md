# Google Cloud Private Marketplace product-level access control

Product: Google Cloud Marketplace
Feature slug: `google-cloud-private-marketplace-product-level-access-control`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Private Marketplace can restrict unapproved products at the product level across Cloud Marketplace, API, and command-line deployment surfaces.

## Lifecycle

- Latest feature date: 2025-03-26
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

- access (evidence: [https://docs.cloud.google.com/marketplace/docs/access-control](https://docs.cloud.google.com/marketplace/docs/access-control), [https://docs.cloud.google.com/marketplace/docs/access-private-marketplace](https://docs.cloud.google.com/marketplace/docs/access-private-marketplace), [https://docs.cloud.google.com/marketplace/docs/governance/access-requests](https://docs.cloud.google.com/marketplace/docs/governance/access-requests), [https://docs.cloud.google.com/marketplace/docs/manage-billing](https://docs.cloud.google.com/marketplace/docs/manage-billing))
- iam (evidence: [https://docs.cloud.google.com/marketplace/docs/access-control](https://docs.cloud.google.com/marketplace/docs/access-control), [https://docs.cloud.google.com/marketplace/docs/access-private-marketplace](https://docs.cloud.google.com/marketplace/docs/access-private-marketplace), [https://docs.cloud.google.com/marketplace/docs/governance/access-requests](https://docs.cloud.google.com/marketplace/docs/governance/access-requests), [https://docs.cloud.google.com/marketplace/docs/manage-billing](https://docs.cloud.google.com/marketplace/docs/manage-billing))
- permission (evidence: [https://docs.cloud.google.com/marketplace/docs/access-control](https://docs.cloud.google.com/marketplace/docs/access-control), [https://docs.cloud.google.com/marketplace/docs/access-private-marketplace](https://docs.cloud.google.com/marketplace/docs/access-private-marketplace), [https://docs.cloud.google.com/marketplace/docs/governance/access-requests](https://docs.cloud.google.com/marketplace/docs/governance/access-requests), [https://docs.cloud.google.com/marketplace/docs/manage-billing](https://docs.cloud.google.com/marketplace/docs/manage-billing))
- private (evidence: [https://docs.cloud.google.com/marketplace/docs/access-control](https://docs.cloud.google.com/marketplace/docs/access-control), [https://docs.cloud.google.com/marketplace/docs/access-private-marketplace](https://docs.cloud.google.com/marketplace/docs/access-private-marketplace), [https://docs.cloud.google.com/marketplace/docs/governance/access-requests](https://docs.cloud.google.com/marketplace/docs/governance/access-requests), [https://docs.cloud.google.com/marketplace/docs/manage-billing](https://docs.cloud.google.com/marketplace/docs/manage-billing))
- role (evidence: [https://docs.cloud.google.com/marketplace/docs/access-control](https://docs.cloud.google.com/marketplace/docs/access-control), [https://docs.cloud.google.com/marketplace/docs/access-private-marketplace](https://docs.cloud.google.com/marketplace/docs/access-private-marketplace), [https://docs.cloud.google.com/marketplace/docs/governance/access-requests](https://docs.cloud.google.com/marketplace/docs/governance/access-requests), [https://docs.cloud.google.com/marketplace/docs/manage-billing](https://docs.cloud.google.com/marketplace/docs/manage-billing))

## Official Evidence

- [https://docs.cloud.google.com/marketplace/docs/access-control](https://docs.cloud.google.com/marketplace/docs/access-control)
- [https://docs.cloud.google.com/marketplace/docs/access-private-marketplace](https://docs.cloud.google.com/marketplace/docs/access-private-marketplace)
- [https://docs.cloud.google.com/marketplace/docs/governance/access-requests](https://docs.cloud.google.com/marketplace/docs/governance/access-requests)
- [https://docs.cloud.google.com/marketplace/docs/manage-billing](https://docs.cloud.google.com/marketplace/docs/manage-billing)
