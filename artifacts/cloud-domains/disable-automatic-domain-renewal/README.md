# Disable automatic domain renewal

Product: Cloud Domains
Feature slug: `disable-automatic-domain-renewal`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud Domains allows customers to turn off automatic renewal after domain registration.

## Lifecycle

- Latest feature date: 2023-12-06
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- allow (evidence: [https://docs.cloud.google.com/domains/docs/edit-registration-settings](https://docs.cloud.google.com/domains/docs/edit-registration-settings), [https://docs.cloud.google.com/python/docs/reference/domains/latest/google.cloud.domains_v1.services.domains.DomainsAsyncClient](https://docs.cloud.google.com/python/docs/reference/domains/latest/google.cloud.domains_v1.services.domains.DomainsAsyncClient), [https://docs.cloud.google.com/python/docs/reference/domains/latest/google.cloud.domains_v1.services.domains.DomainsClient](https://docs.cloud.google.com/python/docs/reference/domains/latest/google.cloud.domains_v1.services.domains.DomainsClient), [https://docs.cloud.google.com/domains/docs/overview](https://docs.cloud.google.com/domains/docs/overview))
- dnssec (evidence: [https://docs.cloud.google.com/domains/docs/edit-registration-settings](https://docs.cloud.google.com/domains/docs/edit-registration-settings), [https://docs.cloud.google.com/python/docs/reference/domains/latest/google.cloud.domains_v1.services.domains.DomainsAsyncClient](https://docs.cloud.google.com/python/docs/reference/domains/latest/google.cloud.domains_v1.services.domains.DomainsAsyncClient), [https://docs.cloud.google.com/python/docs/reference/domains/latest/google.cloud.domains_v1.services.domains.DomainsClient](https://docs.cloud.google.com/python/docs/reference/domains/latest/google.cloud.domains_v1.services.domains.DomainsClient), [https://docs.cloud.google.com/domains/docs/overview](https://docs.cloud.google.com/domains/docs/overview))
- key (evidence: [https://docs.cloud.google.com/domains/docs/edit-registration-settings](https://docs.cloud.google.com/domains/docs/edit-registration-settings), [https://docs.cloud.google.com/python/docs/reference/domains/latest/google.cloud.domains_v1.services.domains.DomainsAsyncClient](https://docs.cloud.google.com/python/docs/reference/domains/latest/google.cloud.domains_v1.services.domains.DomainsAsyncClient), [https://docs.cloud.google.com/python/docs/reference/domains/latest/google.cloud.domains_v1.services.domains.DomainsClient](https://docs.cloud.google.com/python/docs/reference/domains/latest/google.cloud.domains_v1.services.domains.DomainsClient), [https://docs.cloud.google.com/domains/docs/overview](https://docs.cloud.google.com/domains/docs/overview))

## Official Evidence

- [https://docs.cloud.google.com/domains/docs/edit-registration-settings](https://docs.cloud.google.com/domains/docs/edit-registration-settings)
- [https://docs.cloud.google.com/domains/docs/overview](https://docs.cloud.google.com/domains/docs/overview)
- [https://docs.cloud.google.com/python/docs/reference/domains/latest/google.cloud.domains_v1.services.domains.DomainsAsyncClient](https://docs.cloud.google.com/python/docs/reference/domains/latest/google.cloud.domains_v1.services.domains.DomainsAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/domains/latest/google.cloud.domains_v1.services.domains.DomainsClient](https://docs.cloud.google.com/python/docs/reference/domains/latest/google.cloud.domains_v1.services.domains.DomainsClient)
