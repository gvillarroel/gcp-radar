# Certificate inventory and detail views

Product: Certificate Manager
Feature slug: `certificate-inventory-and-detail-views`
Coverage: `HIGH`
IAM mapping: `unknown`

## Technical Summary

Certificate Manager’s Cloud Console workflow includes a **Certificates** tab where you can view certificates in a list and click a certificate name to open its **Certificate details** page. The API also exposes `projects.locations.certificates.list` for inventory retrieval (scoped by project/location, with paginated responses) and `projects.locations.certificates.get` for fetching a single certificate’s details.

## Lifecycle

- Latest feature date: 2022-12-15
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- auth
- authorization
- certificate

## Official Evidence

- [https://docs.cloud.google.com/certificate-manager/docs/reference/certificate-manager/rest/v1/projects.locations.certificateIssuanceConfigs/list](https://docs.cloud.google.com/certificate-manager/docs/reference/certificate-manager/rest/v1/projects.locations.certificateIssuanceConfigs/list)
- [https://docs.cloud.google.com/certificate-manager/docs/reference/certificate-manager/rest/v1/projects.locations.certificateMaps.certificateMapEntries](https://docs.cloud.google.com/certificate-manager/docs/reference/certificate-manager/rest/v1/projects.locations.certificateMaps.certificateMapEntries)
- [https://docs.cloud.google.com/python/docs/reference/certificatemanager/latest/google.cloud.certificate_manager_v1.services.certificate_manager.pagers.ListCertificatesAsyncPager](https://docs.cloud.google.com/python/docs/reference/certificatemanager/latest/google.cloud.certificate_manager_v1.services.certificate_manager.pagers.ListCertificatesAsyncPager)

## Validation Findings

- `warn:thin_token_overlap` Supporting pages only weakly overlap with informative feature tokens.
