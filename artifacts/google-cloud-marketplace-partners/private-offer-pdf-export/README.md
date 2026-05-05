# Private offer PDF export

Product: Google Cloud Marketplace Partners
Feature slug: `private-offer-pdf-export`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Private offers can be downloaded as PDF files and may include internal notes and the EULA.

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

- access (evidence: [https://docs.cloud.google.com/marketplace/docs/partners/create-offers](https://docs.cloud.google.com/marketplace/docs/partners/create-offers), [https://docs.cloud.google.com/marketplace/docs/partners/professional-services](https://docs.cloud.google.com/marketplace/docs/partners/professional-services), [https://docs.cloud.google.com/marketplace/docs/access-control](https://docs.cloud.google.com/marketplace/docs/access-control), [https://docs.cloud.google.com/marketplace/docs/partners/commerce-procurement-api/reference/rest/v1/providers.entitlements](https://docs.cloud.google.com/marketplace/docs/partners/commerce-procurement-api/reference/rest/v1/providers.entitlements))
- iam (evidence: [https://docs.cloud.google.com/marketplace/docs/partners/create-offers](https://docs.cloud.google.com/marketplace/docs/partners/create-offers), [https://docs.cloud.google.com/marketplace/docs/partners/professional-services](https://docs.cloud.google.com/marketplace/docs/partners/professional-services), [https://docs.cloud.google.com/marketplace/docs/access-control](https://docs.cloud.google.com/marketplace/docs/access-control), [https://docs.cloud.google.com/marketplace/docs/partners/commerce-procurement-api/reference/rest/v1/providers.entitlements](https://docs.cloud.google.com/marketplace/docs/partners/commerce-procurement-api/reference/rest/v1/providers.entitlements))
- identity (evidence: [https://docs.cloud.google.com/marketplace/docs/partners/create-offers](https://docs.cloud.google.com/marketplace/docs/partners/create-offers), [https://docs.cloud.google.com/marketplace/docs/partners/professional-services](https://docs.cloud.google.com/marketplace/docs/partners/professional-services), [https://docs.cloud.google.com/marketplace/docs/access-control](https://docs.cloud.google.com/marketplace/docs/access-control), [https://docs.cloud.google.com/marketplace/docs/partners/commerce-procurement-api/reference/rest/v1/providers.entitlements](https://docs.cloud.google.com/marketplace/docs/partners/commerce-procurement-api/reference/rest/v1/providers.entitlements))
- permission (evidence: [https://docs.cloud.google.com/marketplace/docs/partners/create-offers](https://docs.cloud.google.com/marketplace/docs/partners/create-offers), [https://docs.cloud.google.com/marketplace/docs/partners/professional-services](https://docs.cloud.google.com/marketplace/docs/partners/professional-services), [https://docs.cloud.google.com/marketplace/docs/access-control](https://docs.cloud.google.com/marketplace/docs/access-control), [https://docs.cloud.google.com/marketplace/docs/partners/commerce-procurement-api/reference/rest/v1/providers.entitlements](https://docs.cloud.google.com/marketplace/docs/partners/commerce-procurement-api/reference/rest/v1/providers.entitlements))
- policy (evidence: [https://docs.cloud.google.com/marketplace/docs/partners/create-offers](https://docs.cloud.google.com/marketplace/docs/partners/create-offers), [https://docs.cloud.google.com/marketplace/docs/partners/professional-services](https://docs.cloud.google.com/marketplace/docs/partners/professional-services), [https://docs.cloud.google.com/marketplace/docs/access-control](https://docs.cloud.google.com/marketplace/docs/access-control), [https://docs.cloud.google.com/marketplace/docs/partners/commerce-procurement-api/reference/rest/v1/providers.entitlements](https://docs.cloud.google.com/marketplace/docs/partners/commerce-procurement-api/reference/rest/v1/providers.entitlements))
- private (evidence: [https://docs.cloud.google.com/marketplace/docs/partners/create-offers](https://docs.cloud.google.com/marketplace/docs/partners/create-offers), [https://docs.cloud.google.com/marketplace/docs/partners/professional-services](https://docs.cloud.google.com/marketplace/docs/partners/professional-services), [https://docs.cloud.google.com/marketplace/docs/access-control](https://docs.cloud.google.com/marketplace/docs/access-control), [https://docs.cloud.google.com/marketplace/docs/partners/commerce-procurement-api/reference/rest/v1/providers.entitlements](https://docs.cloud.google.com/marketplace/docs/partners/commerce-procurement-api/reference/rest/v1/providers.entitlements))
- role (evidence: [https://docs.cloud.google.com/marketplace/docs/partners/create-offers](https://docs.cloud.google.com/marketplace/docs/partners/create-offers), [https://docs.cloud.google.com/marketplace/docs/partners/professional-services](https://docs.cloud.google.com/marketplace/docs/partners/professional-services), [https://docs.cloud.google.com/marketplace/docs/access-control](https://docs.cloud.google.com/marketplace/docs/access-control), [https://docs.cloud.google.com/marketplace/docs/partners/commerce-procurement-api/reference/rest/v1/providers.entitlements](https://docs.cloud.google.com/marketplace/docs/partners/commerce-procurement-api/reference/rest/v1/providers.entitlements))

## Official Evidence

- [https://docs.cloud.google.com/marketplace/docs/access-control](https://docs.cloud.google.com/marketplace/docs/access-control)
- [https://docs.cloud.google.com/marketplace/docs/partners/commerce-procurement-api/reference/rest/v1/providers.entitlements](https://docs.cloud.google.com/marketplace/docs/partners/commerce-procurement-api/reference/rest/v1/providers.entitlements)
- [https://docs.cloud.google.com/marketplace/docs/partners/create-offers](https://docs.cloud.google.com/marketplace/docs/partners/create-offers)
- [https://docs.cloud.google.com/marketplace/docs/partners/professional-services](https://docs.cloud.google.com/marketplace/docs/partners/professional-services)
