# Cloud Domains

Schema version: `step-08-product-feature-cards-v1`
Generated at: `2026-04-30T16:03:14.909Z`
Product status: `PASS`

## Summary

- Feature cards: 5
- Step 07 failed features: 0
- Step 07 warned features: 0
- Corpus health: healthy
- IAM mapping: 1 explicit, 0 derived, 4 unknown

## Service Card

- Service card ID: `cloud-domains:service`
- Latest feature date: 2024-06-20
- Official source links: 10
- Security capabilities: 10

## Features

| Feature | Coverage | Gate | IAM | Sources |
| --- | --- | --- | --- | --- |
| Google Domains DNS migration | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/domains/docs/export-dns-settings)<br>[source](https://docs.cloud.google.com/domains/docs/faq)<br>[source](https://docs.cloud.google.com/python/docs/reference/domains/latest/google.cloud.domains_v1.services.domains.DomainsAsyncClient) |
| Push transfer for .uk and .co.uk domains without authorization codes | MEDIUM | PASS | explicit | [source](https://docs.cloud.google.com/domains/docs/access-control)<br>[source](https://docs.cloud.google.com/domains/docs/transfer-domain-to-another-registrar)<br>[source](https://docs.cloud.google.com/python/docs/reference/domains/latest/google.cloud.domains_v1.services.domains.DomainsAsyncClient) |
| Renew recently expired domains | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/domains/docs/overview)<br>[source](https://docs.cloud.google.com/domains/docs/renew-expired-domain)<br>[source](https://docs.cloud.google.com/python/docs/reference/domains/latest/google.cloud.domains_v1.services.domains.DomainsAsyncClient) |
| Disable automatic domain renewal | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/domains/docs/edit-registration-settings)<br>[source](https://docs.cloud.google.com/domains/docs/overview)<br>[source](https://docs.cloud.google.com/python/docs/reference/domains/latest/google.cloud.domains_v1.services.domains.DomainsAsyncClient) |
| Import domain from Google Domains | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/domains/docs/register-domain)<br>[source](https://docs.cloud.google.com/domains/docs/transfer-domain-to-another-registrar)<br>[source](https://docs.cloud.google.com/python/docs/reference/domains/latest/google.cloud.domains_v1.services.domains.DomainsAsyncClient) |
