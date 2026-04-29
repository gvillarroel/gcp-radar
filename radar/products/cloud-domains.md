# Cloud Domains

Service card: [card.json](../../artifacts/cloud-domains/card.json)

Artifacts index: [cloud-domains](../../artifacts/cloud-domains/index.md)

## Summary

- Promoted features: 5
- Skipped features during promotion: 0
- Latest feature date: 2024-06-20
- Service IAM status: {"explicit":1,"derived_from_permission_prefix":0,"unknown":4}

## Features

| Feature | IAM | Roles | Permissions | Coverage | Official sources |
| --- | --- | --- | --- | --- | --- |
| [Disable automatic domain renewal](../../artifacts/cloud-domains/disable-automatic-domain-renewal/README.md) | unknown | none | none | MEDIUM | [source](https://docs.cloud.google.com/domains/docs/edit-registration-settings)<br>[source](https://docs.cloud.google.com/domains/docs/overview)<br>[source](https://docs.cloud.google.com/python/docs/reference/domains/latest/google.cloud.domains_v1.services.domains.DomainsAsyncClient) |
| [Google Domains DNS migration](../../artifacts/cloud-domains/google-domains-dns-migration/README.md) | unknown | none | none | MEDIUM | [source](https://docs.cloud.google.com/domains/docs/export-dns-settings)<br>[source](https://docs.cloud.google.com/domains/docs/faq)<br>[source](https://docs.cloud.google.com/python/docs/reference/domains/latest/google.cloud.domains_v1.services.domains.DomainsAsyncClient) |
| [Import domain from Google Domains](../../artifacts/cloud-domains/import-domain-from-google-domains/README.md) | unknown | none | none | MEDIUM | [source](https://docs.cloud.google.com/domains/docs/register-domain)<br>[source](https://docs.cloud.google.com/domains/docs/transfer-domain-to-another-registrar)<br>[source](https://docs.cloud.google.com/python/docs/reference/domains/latest/google.cloud.domains_v1.services.domains.DomainsAsyncClient) |
| [Push transfer for .uk and .co.uk domains without authorization codes](../../artifacts/cloud-domains/push-transfer-for-uk-and-co-uk-domains-without-authorization-codes/README.md) | explicit | `roles/accessapproval.admin`<br>`roles/accessapproval.approver`<br>`roles/accessapproval.configEditor` | `resourcemanager.projects.get`<br>`resourcemanager.projects.list` | MEDIUM | [source](https://docs.cloud.google.com/domains/docs/access-control)<br>[source](https://docs.cloud.google.com/domains/docs/transfer-domain-to-another-registrar)<br>[source](https://docs.cloud.google.com/python/docs/reference/domains/latest/google.cloud.domains_v1.services.domains.DomainsAsyncClient) |
| [Renew recently expired domains](../../artifacts/cloud-domains/renew-recently-expired-domains/README.md) | unknown | none | none | MEDIUM | [source](https://docs.cloud.google.com/domains/docs/overview)<br>[source](https://docs.cloud.google.com/domains/docs/renew-expired-domain)<br>[source](https://docs.cloud.google.com/python/docs/reference/domains/latest/google.cloud.domains_v1.services.domains.DomainsAsyncClient) |
