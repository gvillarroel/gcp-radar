---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:53:06.939Z"
product_name: "Certificate Manager"
product_slug: "certificate-manager"
feature_name: "Certificate inventory and detail views"
feature_slug: "certificate-inventory-and-detail-views"
latest_feature_date: "2022-12-15"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/certificatemanager/latest/google.cloud.certificate_manager_v1.services.certificate_manager.pagers.ListCertificatesAsyncPager"
  - "https://docs.cloud.google.com/certificate-manager/docs/reference/certificate-manager/rest/v1/projects.locations.certificateIssuanceConfigs/list"
  - "https://docs.cloud.google.com/certificate-manager/docs/reference/certificate-manager/rest/v1/projects.locations.certificateMaps.certificateMapEntries"
keywords:
  - "Cloud Console certificate list"
  - "inventory and details"
  - "view certificate metadata"
  - "certificate details page"
  - "certificate detail view"
  - "cert inventory"
  - "certificate inventory"
---

# Certificate inventory and detail views

Product: Certificate Manager
Coverage: HIGH

## Step 02 Summary

Certificate Manager enables listing certificates in a project and viewing detailed information for each certificate in the Cloud Console.

## Extended Definition

Certificate Manager’s Cloud Console workflow includes a **Certificates** tab where you can view certificates in a list and click a certificate name to open its **Certificate details** page. The API also exposes `projects.locations.certificates.list` for inventory retrieval (scoped by project/location, with paginated responses) and `projects.locations.certificates.get` for fetching a single certificate’s details.

## Evidence Summary

These pages jointly show a Console-based certificate list-to-details workflow and REST API support for certificate inventory and per-certificate detail retrieval.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/certificatemanager/latest/google.cloud.certificate_manager_v1.services.certificate_manager.pagers.ListCertificatesAsyncPager](https://docs.cloud.google.com/python/docs/reference/certificatemanager/latest/google.cloud.certificate_manager_v1.services.certificate_manager.pagers.ListCertificatesAsyncPager)
- [https://docs.cloud.google.com/certificate-manager/docs/reference/certificate-manager/rest/v1/projects.locations.certificateIssuanceConfigs/list](https://docs.cloud.google.com/certificate-manager/docs/reference/certificate-manager/rest/v1/projects.locations.certificateIssuanceConfigs/list)
- [https://docs.cloud.google.com/certificate-manager/docs/reference/certificate-manager/rest/v1/projects.locations.certificateMaps.certificateMapEntries](https://docs.cloud.google.com/certificate-manager/docs/reference/certificate-manager/rest/v1/projects.locations.certificateMaps.certificateMapEntries)

## Supporting Pages

### "Class ListCertificatesAsyncPager (1.12.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/certificatemanager/latest/google.cloud.certificate_manager_v1.services.certificate_manager.pagers.ListCertificatesAsyncPager](https://docs.cloud.google.com/python/docs/reference/certificatemanager/latest/google.cloud.certificate_manager_v1.services.certificate_manager.pagers.ListCertificatesAsyncPager)
- Source ID: `site-python-reference`
- Final score: 62
- Re-rank relevance: MODERATE
- Re-rank rationale: The page documents list-certificates pagination in the Certificate Manager API, which supports retrieving certificate collections and response attributes but is API-layer detail rather than Cloud Console inventory UI views.

### "Method: projects.locations.certificateIssuanceConfigs.list \_|\_ Certificate\

- URL: [https://docs.cloud.google.com/certificate-manager/docs/reference/certificate-manager/rest/v1/projects.locations.certificateIssuanceConfigs/list](https://docs.cloud.google.com/certificate-manager/docs/reference/certificate-manager/rest/v1/projects.locations.certificateIssuanceConfigs/list)
- Source ID: `site-docs-reference`
- Final score: 58
- Re-rank relevance: N/A

### "REST Resource: projects.locations.certificateMaps.certificateMapEntries\

- URL: [https://docs.cloud.google.com/certificate-manager/docs/reference/certificate-manager/rest/v1/projects.locations.certificateMaps.certificateMapEntries](https://docs.cloud.google.com/certificate-manager/docs/reference/certificate-manager/rest/v1/projects.locations.certificateMaps.certificateMapEntries)
- Source ID: `site-docs-reference`
- Final score: 58
- Re-rank relevance: N/A

