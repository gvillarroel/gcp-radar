# Workforce Identity Federation with IAP

Product: Identity-Aware Proxy
Feature slug: `workforce-identity-federation-with-iap`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Identity-Aware Proxy can use Workforce Identity Federation to let external workforce identities access protected resources; Identity-Aware Proxy supports Workforce Identity Federation so extended workforce identities can access protected applications without Cloud Identity sync.

## Lifecycle

- Latest feature date: 2025-02-07
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings](https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings), [https://docs.cloud.google.com/iap/docs/concepts-overview](https://docs.cloud.google.com/iap/docs/concepts-overview), [https://docs.cloud.google.com/iap/docs/cloud-iap-context-aware-access-howto](https://docs.cloud.google.com/iap/docs/cloud-iap-context-aware-access-howto), [https://docs.cloud.google.com/iap/docs/authentication-howto](https://docs.cloud.google.com/iap/docs/authentication-howto))
- allow (evidence: [https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings](https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings), [https://docs.cloud.google.com/iap/docs/concepts-overview](https://docs.cloud.google.com/iap/docs/concepts-overview), [https://docs.cloud.google.com/iap/docs/cloud-iap-context-aware-access-howto](https://docs.cloud.google.com/iap/docs/cloud-iap-context-aware-access-howto), [https://docs.cloud.google.com/iap/docs/authentication-howto](https://docs.cloud.google.com/iap/docs/authentication-howto))
- auth (evidence: [https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings](https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings), [https://docs.cloud.google.com/iap/docs/concepts-overview](https://docs.cloud.google.com/iap/docs/concepts-overview), [https://docs.cloud.google.com/iap/docs/cloud-iap-context-aware-access-howto](https://docs.cloud.google.com/iap/docs/cloud-iap-context-aware-access-howto), [https://docs.cloud.google.com/iap/docs/authentication-howto](https://docs.cloud.google.com/iap/docs/authentication-howto))
- authorization (evidence: [https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings](https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings), [https://docs.cloud.google.com/iap/docs/concepts-overview](https://docs.cloud.google.com/iap/docs/concepts-overview), [https://docs.cloud.google.com/iap/docs/cloud-iap-context-aware-access-howto](https://docs.cloud.google.com/iap/docs/cloud-iap-context-aware-access-howto), [https://docs.cloud.google.com/iap/docs/authentication-howto](https://docs.cloud.google.com/iap/docs/authentication-howto))
- credential (evidence: [https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings](https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings), [https://docs.cloud.google.com/iap/docs/concepts-overview](https://docs.cloud.google.com/iap/docs/concepts-overview), [https://docs.cloud.google.com/iap/docs/cloud-iap-context-aware-access-howto](https://docs.cloud.google.com/iap/docs/cloud-iap-context-aware-access-howto), [https://docs.cloud.google.com/iap/docs/authentication-howto](https://docs.cloud.google.com/iap/docs/authentication-howto))
- iam (evidence: [https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings](https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings), [https://docs.cloud.google.com/iap/docs/concepts-overview](https://docs.cloud.google.com/iap/docs/concepts-overview), [https://docs.cloud.google.com/iap/docs/cloud-iap-context-aware-access-howto](https://docs.cloud.google.com/iap/docs/cloud-iap-context-aware-access-howto), [https://docs.cloud.google.com/iap/docs/authentication-howto](https://docs.cloud.google.com/iap/docs/authentication-howto))
- identity (evidence: [https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings](https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings), [https://docs.cloud.google.com/iap/docs/concepts-overview](https://docs.cloud.google.com/iap/docs/concepts-overview), [https://docs.cloud.google.com/iap/docs/cloud-iap-context-aware-access-howto](https://docs.cloud.google.com/iap/docs/cloud-iap-context-aware-access-howto), [https://docs.cloud.google.com/iap/docs/authentication-howto](https://docs.cloud.google.com/iap/docs/authentication-howto))
- permission (evidence: [https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings](https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings), [https://docs.cloud.google.com/iap/docs/concepts-overview](https://docs.cloud.google.com/iap/docs/concepts-overview), [https://docs.cloud.google.com/iap/docs/cloud-iap-context-aware-access-howto](https://docs.cloud.google.com/iap/docs/cloud-iap-context-aware-access-howto), [https://docs.cloud.google.com/iap/docs/authentication-howto](https://docs.cloud.google.com/iap/docs/authentication-howto))
- policy (evidence: [https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings](https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings), [https://docs.cloud.google.com/iap/docs/concepts-overview](https://docs.cloud.google.com/iap/docs/concepts-overview), [https://docs.cloud.google.com/iap/docs/cloud-iap-context-aware-access-howto](https://docs.cloud.google.com/iap/docs/cloud-iap-context-aware-access-howto), [https://docs.cloud.google.com/iap/docs/authentication-howto](https://docs.cloud.google.com/iap/docs/authentication-howto))
- role (evidence: [https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings](https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings), [https://docs.cloud.google.com/iap/docs/concepts-overview](https://docs.cloud.google.com/iap/docs/concepts-overview), [https://docs.cloud.google.com/iap/docs/cloud-iap-context-aware-access-howto](https://docs.cloud.google.com/iap/docs/cloud-iap-context-aware-access-howto), [https://docs.cloud.google.com/iap/docs/authentication-howto](https://docs.cloud.google.com/iap/docs/authentication-howto))
- secret (evidence: [https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings](https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings), [https://docs.cloud.google.com/iap/docs/concepts-overview](https://docs.cloud.google.com/iap/docs/concepts-overview), [https://docs.cloud.google.com/iap/docs/cloud-iap-context-aware-access-howto](https://docs.cloud.google.com/iap/docs/cloud-iap-context-aware-access-howto), [https://docs.cloud.google.com/iap/docs/authentication-howto](https://docs.cloud.google.com/iap/docs/authentication-howto))
- security (evidence: [https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings](https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings), [https://docs.cloud.google.com/iap/docs/concepts-overview](https://docs.cloud.google.com/iap/docs/concepts-overview), [https://docs.cloud.google.com/iap/docs/cloud-iap-context-aware-access-howto](https://docs.cloud.google.com/iap/docs/cloud-iap-context-aware-access-howto), [https://docs.cloud.google.com/iap/docs/authentication-howto](https://docs.cloud.google.com/iap/docs/authentication-howto))
- token (evidence: [https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings](https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings), [https://docs.cloud.google.com/iap/docs/concepts-overview](https://docs.cloud.google.com/iap/docs/concepts-overview), [https://docs.cloud.google.com/iap/docs/cloud-iap-context-aware-access-howto](https://docs.cloud.google.com/iap/docs/cloud-iap-context-aware-access-howto), [https://docs.cloud.google.com/iap/docs/authentication-howto](https://docs.cloud.google.com/iap/docs/authentication-howto))

## Official Evidence

- [https://docs.cloud.google.com/iap/docs/authentication-howto](https://docs.cloud.google.com/iap/docs/authentication-howto)
- [https://docs.cloud.google.com/iap/docs/cloud-iap-context-aware-access-howto](https://docs.cloud.google.com/iap/docs/cloud-iap-context-aware-access-howto)
- [https://docs.cloud.google.com/iap/docs/concepts-overview](https://docs.cloud.google.com/iap/docs/concepts-overview)
- [https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings](https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings)
