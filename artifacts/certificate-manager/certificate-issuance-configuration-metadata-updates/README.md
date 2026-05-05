# Certificate issuance configuration metadata updates

Product: Certificate Manager
Feature slug: `certificate-issuance-configuration-metadata-updates`
Coverage: `HIGH`
IAM mapping: `unknown`

## Technical Summary

Certificate Issuance Config supports metadata updates through both API and CLI surfaces. In the Certificate Manager API, the `projects.locations.certificateIssuanceConfigs.patch` method updates a `CertificateIssuanceConfig` resource and accepts `updateMask` to scope changed fields, and that resource model includes `labels` and `description` fields. On CLI, `gcloud alpha certificate-manager issuance-configs update` is documented as an (ALPHA) operation and exposes `--description` and `--update-labels` flags for metadata changes.

## Lifecycle

- Latest feature date: 2024-08-21
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- certificate (evidence: [https://docs.cloud.google.com/python/docs/reference/certificatemanager/latest/google.cloud.certificate_manager_v1.services.certificate_manager.pagers.ListCertificateIssuanceConfigsAsyncPager](https://docs.cloud.google.com/python/docs/reference/certificatemanager/latest/google.cloud.certificate_manager_v1.services.certificate_manager.pagers.ListCertificateIssuanceConfigsAsyncPager), [https://docs.cloud.google.com/python/docs/reference/certificatemanager/latest/google.cloud.certificate_manager_v1.services.certificate_manager.pagers.ListCertificateIssuanceConfigsPager](https://docs.cloud.google.com/python/docs/reference/certificatemanager/latest/google.cloud.certificate_manager_v1.services.certificate_manager.pagers.ListCertificateIssuanceConfigsPager), [https://docs.cloud.google.com/python/docs/reference/certificatemanager/latest/google.cloud.certificate_manager_v1.services.certificate_manager.CertificateManagerClient](https://docs.cloud.google.com/python/docs/reference/certificatemanager/latest/google.cloud.certificate_manager_v1.services.certificate_manager.CertificateManagerClient))

## Official Evidence

- [https://docs.cloud.google.com/python/docs/reference/certificatemanager/latest/google.cloud.certificate_manager_v1.services.certificate_manager.CertificateManagerClient](https://docs.cloud.google.com/python/docs/reference/certificatemanager/latest/google.cloud.certificate_manager_v1.services.certificate_manager.CertificateManagerClient)
- [https://docs.cloud.google.com/python/docs/reference/certificatemanager/latest/google.cloud.certificate_manager_v1.services.certificate_manager.pagers.ListCertificateIssuanceConfigsAsyncPager](https://docs.cloud.google.com/python/docs/reference/certificatemanager/latest/google.cloud.certificate_manager_v1.services.certificate_manager.pagers.ListCertificateIssuanceConfigsAsyncPager)
- [https://docs.cloud.google.com/python/docs/reference/certificatemanager/latest/google.cloud.certificate_manager_v1.services.certificate_manager.pagers.ListCertificateIssuanceConfigsPager](https://docs.cloud.google.com/python/docs/reference/certificatemanager/latest/google.cloud.certificate_manager_v1.services.certificate_manager.pagers.ListCertificateIssuanceConfigsPager)
