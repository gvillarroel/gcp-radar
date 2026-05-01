# Usage-metric-based private offer discounts

Product: Google Cloud Marketplace
Feature slug: `usage-metric-based-private-offer-discounts`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Vendors can set more granular discounts on usage metrics in private offers.

## Lifecycle

- Latest feature date: 2022-09-15
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
- permission
- policy
- private
- role

## Official Evidence

- [https://docs.cloud.google.com/marketplace/docs/access-control](https://docs.cloud.google.com/marketplace/docs/access-control)
- [https://docs.cloud.google.com/marketplace/docs/billing](https://docs.cloud.google.com/marketplace/docs/billing)
- [https://docs.cloud.google.com/marketplace/docs/billing/pricing-plans-by-product-type](https://docs.cloud.google.com/marketplace/docs/billing/pricing-plans-by-product-type)
- [https://docs.cloud.google.com/marketplace/docs/partners/commerce-procurement-api/reference/rest/v1/providers.entitlements](https://docs.cloud.google.com/marketplace/docs/partners/commerce-procurement-api/reference/rest/v1/providers.entitlements)
