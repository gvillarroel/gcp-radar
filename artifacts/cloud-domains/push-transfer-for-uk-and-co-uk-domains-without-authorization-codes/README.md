# Push transfer for .uk and .co.uk domains without authorization codes

Product: Cloud Domains
Feature slug: `push-transfer-for-uk-and-co-uk-domains-without-authorization-codes`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Cloud Domains now supports initiating push transfers to another registrar for .uk/.co.uk domains via Cloud CLI or the Cloud Domains API when authorization codes are unavailable.

## Lifecycle

- Latest feature date: 2024-06-12
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
- role

## Official Evidence

- [https://docs.cloud.google.com/domains/docs/access-control](https://docs.cloud.google.com/domains/docs/access-control)
- [https://docs.cloud.google.com/domains/docs/transfer-domain-to-another-registrar](https://docs.cloud.google.com/domains/docs/transfer-domain-to-another-registrar)
- [https://docs.cloud.google.com/python/docs/reference/domains/latest/google.cloud.domains_v1.services.domains.DomainsAsyncClient](https://docs.cloud.google.com/python/docs/reference/domains/latest/google.cloud.domains_v1.services.domains.DomainsAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/domains/latest/google.cloud.domains_v1.services.domains.DomainsClient](https://docs.cloud.google.com/python/docs/reference/domains/latest/google.cloud.domains_v1.services.domains.DomainsClient)
