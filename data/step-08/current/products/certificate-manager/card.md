# Certificate Manager

Schema version: `step-08-product-feature-cards-v1`
Generated at: `2026-05-05T20:04:53.897Z`
Product status: `PASS`

## Summary

- Feature cards: 9
- Step 07 failed features: 0
- Step 07 warned features: 1
- Corpus health: healthy
- IAM mapping: 0 explicit, 0 derived, 9 unknown

## Service Card

- Service card ID: `certificate-manager:service`
- Latest feature date: 2024-08-21
- Official source links: 21
- Security capabilities: 12

## Features

| Feature | Coverage | Gate | IAM | Sources |
| --- | --- | --- | --- | --- |
| Certificate issuance configuration metadata updates | HIGH | PASS | unknown | [source](https://docs.cloud.google.com/python/docs/reference/certificatemanager/latest/google.cloud.certificate_manager_v1.services.certificate_manager.CertificateManagerClient)<br>[source](https://docs.cloud.google.com/python/docs/reference/certificatemanager/latest/google.cloud.certificate_manager_v1.services.certificate_manager.pagers.ListCertificateIssuanceConfigsAsyncPager)<br>[source](https://docs.cloud.google.com/python/docs/reference/certificatemanager/latest/google.cloud.certificate_manager_v1.services.certificate_manager.pagers.ListCertificateIssuanceConfigsPager) |
| Regional Application Load Balancer integration | LOW | PASS | unknown | [source](https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-cas-cross-reg)<br>[source](https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-dns-auth-cross-reg) |
| Project-isolated certificate management | LOW | PASS | unknown | [source](https://docs.cloud.google.com/certificate-manager/docs/certificates)<br>[source](https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-dns-auth-cross-reg)<br>[source](https://docs.cloud.google.com/certificate-manager/docs/dns-authorizations) |
| Regional managed certificate issuance | HIGH | PASS | unknown | [source](https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-cas-regional)<br>[source](https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-regional)<br>[source](https://docs.cloud.google.com/certificate-manager/docs/domain-authorization) |
| Mutual TLS authentication | LOW | PASS | unknown | [source](https://docs.cloud.google.com/certificate-manager/docs/audit-logging-publicca)<br>[source](https://docs.cloud.google.com/certificate-manager/docs/core-components)<br>[source](https://docs.cloud.google.com/certificate-manager/docs/deploy) |
| Certificate inventory and detail views | HIGH | WARN | unknown | [source](https://docs.cloud.google.com/certificate-manager/docs/reference/certificate-manager/rest/v1/projects.locations.certificateIssuanceConfigs/list)<br>[source](https://docs.cloud.google.com/certificate-manager/docs/reference/certificate-manager/rest/v1/projects.locations.certificateMaps.certificateMapEntries)<br>[source](https://docs.cloud.google.com/python/docs/reference/certificatemanager/latest/google.cloud.certificate_manager_v1.services.certificate_manager.pagers.ListCertificatesAsyncPager) |
| Classic Certificates tab migration for load-balancer SSL certificates | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/certificate-manager/docs/certificates) |
| Global external HTTP(S) Load Balancer support | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-cas)<br>[source](https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-dns-auth)<br>[source](https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-lb-auth) |
| Target SSL proxy support | HIGH | PASS | unknown | [source](https://docs.cloud.google.com/certificate-manager/docs/maps)<br>[source](https://docs.cloud.google.com/certificate-manager/docs/overview) |
