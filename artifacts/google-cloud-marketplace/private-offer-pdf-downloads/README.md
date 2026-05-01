# Private offer PDF downloads

Product: Google Cloud Marketplace
Feature slug: `private-offer-pdf-downloads`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Private offers can be downloaded as PDFs with vendor notes and the included EULA.

## Lifecycle

- Latest feature date: 2022-11-18
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
- auth
- authorization
- iam
- permission
- policy
- private
- role
- token

## Official Evidence

- [https://docs.cloud.google.com/marketplace/docs/access-control](https://docs.cloud.google.com/marketplace/docs/access-control)
- [https://docs.cloud.google.com/marketplace/docs/billing](https://docs.cloud.google.com/marketplace/docs/billing)
- [https://docs.cloud.google.com/marketplace/docs/commitment-api-purchasing](https://docs.cloud.google.com/marketplace/docs/commitment-api-purchasing)
- [https://docs.cloud.google.com/marketplace/docs/partners/commerce-procurement-api/reference/rest/v1/providers.entitlements](https://docs.cloud.google.com/marketplace/docs/partners/commerce-procurement-api/reference/rest/v1/providers.entitlements)
