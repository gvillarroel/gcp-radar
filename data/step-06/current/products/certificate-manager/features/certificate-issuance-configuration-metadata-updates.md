---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:53:06.933Z"
product_name: "Certificate Manager"
product_slug: "certificate-manager"
feature_name: "Certificate issuance configuration metadata updates"
feature_slug: "certificate-issuance-configuration-metadata-updates"
latest_feature_date: "2024-08-21"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/certificatemanager/latest/google.cloud.certificate_manager_v1.services.certificate_manager.pagers.ListCertificateIssuanceConfigsAsyncPager"
  - "https://docs.cloud.google.com/python/docs/reference/certificatemanager/latest/google.cloud.certificate_manager_v1.services.certificate_manager.pagers.ListCertificateIssuanceConfigsPager"
  - "https://docs.cloud.google.com/python/docs/reference/certificatemanager/latest/google.cloud.certificate_manager_v1.services.certificate_manager.CertificateManagerClient"
keywords:
  - "update labels on issuance configuration"
  - "metadata updates via API"
  - "update description field"
  - "patch issuance configuration"
  - "issuance config metadata"
  - "labels and descriptions"
  - "IssuanceConfig update"
  - "certificate issuance configuration"
---

# Certificate issuance configuration metadata updates

Product: Certificate Manager
Coverage: HIGH

## Step 02 Summary

Certificate Manager now supports updating labels and descriptions on certificate issuance configurations via the Google Cloud CLI or API.

## Extended Definition

Certificate Issuance Config supports metadata updates through both API and CLI surfaces. In the Certificate Manager API, the `projects.locations.certificateIssuanceConfigs.patch` method updates a `CertificateIssuanceConfig` resource and accepts `updateMask` to scope changed fields, and that resource model includes `labels` and `description` fields. On CLI, `gcloud alpha certificate-manager issuance-configs update` is documented as an (ALPHA) operation and exposes `--description` and `--update-labels` flags for metadata changes.

## Evidence Summary

The REST discovery schema confirms a patch update method and mutable `labels`/`description` fields for CertificateIssuanceConfig, while the gcloud alpha update command documents command flags that directly target those metadata fields.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/certificatemanager/latest/google.cloud.certificate_manager_v1.services.certificate_manager.pagers.ListCertificateIssuanceConfigsAsyncPager](https://docs.cloud.google.com/python/docs/reference/certificatemanager/latest/google.cloud.certificate_manager_v1.services.certificate_manager.pagers.ListCertificateIssuanceConfigsAsyncPager)
- [https://docs.cloud.google.com/python/docs/reference/certificatemanager/latest/google.cloud.certificate_manager_v1.services.certificate_manager.pagers.ListCertificateIssuanceConfigsPager](https://docs.cloud.google.com/python/docs/reference/certificatemanager/latest/google.cloud.certificate_manager_v1.services.certificate_manager.pagers.ListCertificateIssuanceConfigsPager)
- [https://docs.cloud.google.com/python/docs/reference/certificatemanager/latest/google.cloud.certificate_manager_v1.services.certificate_manager.CertificateManagerClient](https://docs.cloud.google.com/python/docs/reference/certificatemanager/latest/google.cloud.certificate_manager_v1.services.certificate_manager.CertificateManagerClient)

## Supporting Pages

### "Class ListCertificateIssuanceConfigsAsyncPager (1.12.0) \_|\_ Python client\

- URL: [https://docs.cloud.google.com/python/docs/reference/certificatemanager/latest/google.cloud.certificate_manager_v1.services.certificate_manager.pagers.ListCertificateIssuanceConfigsAsyncPager](https://docs.cloud.google.com/python/docs/reference/certificatemanager/latest/google.cloud.certificate_manager_v1.services.certificate_manager.pagers.ListCertificateIssuanceConfigsAsyncPager)
- Source ID: `site-python-reference`
- Final score: 60
- Re-rank relevance: N/A

### "Class ListCertificateIssuanceConfigsPager (1.12.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/certificatemanager/latest/google.cloud.certificate_manager_v1.services.certificate_manager.pagers.ListCertificateIssuanceConfigsPager](https://docs.cloud.google.com/python/docs/reference/certificatemanager/latest/google.cloud.certificate_manager_v1.services.certificate_manager.pagers.ListCertificateIssuanceConfigsPager)
- Source ID: `site-python-reference`
- Final score: 60
- Re-rank relevance: N/A

### "Class CertificateManagerClient (1.12.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/certificatemanager/latest/google.cloud.certificate_manager_v1.services.certificate_manager.CertificateManagerClient](https://docs.cloud.google.com/python/docs/reference/certificatemanager/latest/google.cloud.certificate_manager_v1.services.certificate_manager.CertificateManagerClient)
- Source ID: `site-python-reference`
- Final score: 58
- Re-rank relevance: N/A

