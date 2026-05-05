# Path wildcard support in service account JWT aud claims

Product: Identity-Aware Proxy
Feature slug: `path-wildcard-support-in-service-account-jwt-aud-claims`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Service account JWTs can use a path wildcard in the audience claim when authenticating to an IAP-secured resource.

## Lifecycle

- Latest feature date: 2025-10-28
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/iap/docs/authentication-howto](https://docs.cloud.google.com/iap/docs/authentication-howto), [https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings](https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings), [https://docs.cloud.google.com/iap/docs/reference/rest/Shared.Types/Binding](https://docs.cloud.google.com/iap/docs/reference/rest/Shared.Types/Binding), [https://docs.cloud.google.com/iap/docs/customizing](https://docs.cloud.google.com/iap/docs/customizing))
- allow (evidence: [https://docs.cloud.google.com/iap/docs/authentication-howto](https://docs.cloud.google.com/iap/docs/authentication-howto), [https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings](https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings), [https://docs.cloud.google.com/iap/docs/reference/rest/Shared.Types/Binding](https://docs.cloud.google.com/iap/docs/reference/rest/Shared.Types/Binding), [https://docs.cloud.google.com/iap/docs/customizing](https://docs.cloud.google.com/iap/docs/customizing))
- audit (evidence: [https://docs.cloud.google.com/iap/docs/authentication-howto](https://docs.cloud.google.com/iap/docs/authentication-howto), [https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings](https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings), [https://docs.cloud.google.com/iap/docs/reference/rest/Shared.Types/Binding](https://docs.cloud.google.com/iap/docs/reference/rest/Shared.Types/Binding), [https://docs.cloud.google.com/iap/docs/customizing](https://docs.cloud.google.com/iap/docs/customizing))
- auth (evidence: [https://docs.cloud.google.com/iap/docs/authentication-howto](https://docs.cloud.google.com/iap/docs/authentication-howto), [https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings](https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings), [https://docs.cloud.google.com/iap/docs/reference/rest/Shared.Types/Binding](https://docs.cloud.google.com/iap/docs/reference/rest/Shared.Types/Binding), [https://docs.cloud.google.com/iap/docs/customizing](https://docs.cloud.google.com/iap/docs/customizing))
- authorization (evidence: [https://docs.cloud.google.com/iap/docs/authentication-howto](https://docs.cloud.google.com/iap/docs/authentication-howto), [https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings](https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings), [https://docs.cloud.google.com/iap/docs/reference/rest/Shared.Types/Binding](https://docs.cloud.google.com/iap/docs/reference/rest/Shared.Types/Binding), [https://docs.cloud.google.com/iap/docs/customizing](https://docs.cloud.google.com/iap/docs/customizing))
- credential (evidence: [https://docs.cloud.google.com/iap/docs/authentication-howto](https://docs.cloud.google.com/iap/docs/authentication-howto), [https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings](https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings), [https://docs.cloud.google.com/iap/docs/reference/rest/Shared.Types/Binding](https://docs.cloud.google.com/iap/docs/reference/rest/Shared.Types/Binding), [https://docs.cloud.google.com/iap/docs/customizing](https://docs.cloud.google.com/iap/docs/customizing))
- iam (evidence: [https://docs.cloud.google.com/iap/docs/authentication-howto](https://docs.cloud.google.com/iap/docs/authentication-howto), [https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings](https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings), [https://docs.cloud.google.com/iap/docs/reference/rest/Shared.Types/Binding](https://docs.cloud.google.com/iap/docs/reference/rest/Shared.Types/Binding), [https://docs.cloud.google.com/iap/docs/customizing](https://docs.cloud.google.com/iap/docs/customizing))
- identity (evidence: [https://docs.cloud.google.com/iap/docs/authentication-howto](https://docs.cloud.google.com/iap/docs/authentication-howto), [https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings](https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings), [https://docs.cloud.google.com/iap/docs/reference/rest/Shared.Types/Binding](https://docs.cloud.google.com/iap/docs/reference/rest/Shared.Types/Binding), [https://docs.cloud.google.com/iap/docs/customizing](https://docs.cloud.google.com/iap/docs/customizing))
- key (evidence: [https://docs.cloud.google.com/iap/docs/authentication-howto](https://docs.cloud.google.com/iap/docs/authentication-howto), [https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings](https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings), [https://docs.cloud.google.com/iap/docs/reference/rest/Shared.Types/Binding](https://docs.cloud.google.com/iap/docs/reference/rest/Shared.Types/Binding), [https://docs.cloud.google.com/iap/docs/customizing](https://docs.cloud.google.com/iap/docs/customizing))
- logging (evidence: [https://docs.cloud.google.com/iap/docs/authentication-howto](https://docs.cloud.google.com/iap/docs/authentication-howto), [https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings](https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings), [https://docs.cloud.google.com/iap/docs/reference/rest/Shared.Types/Binding](https://docs.cloud.google.com/iap/docs/reference/rest/Shared.Types/Binding), [https://docs.cloud.google.com/iap/docs/customizing](https://docs.cloud.google.com/iap/docs/customizing))
- policy (evidence: [https://docs.cloud.google.com/iap/docs/authentication-howto](https://docs.cloud.google.com/iap/docs/authentication-howto), [https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings](https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings), [https://docs.cloud.google.com/iap/docs/reference/rest/Shared.Types/Binding](https://docs.cloud.google.com/iap/docs/reference/rest/Shared.Types/Binding), [https://docs.cloud.google.com/iap/docs/customizing](https://docs.cloud.google.com/iap/docs/customizing))
- private (evidence: [https://docs.cloud.google.com/iap/docs/authentication-howto](https://docs.cloud.google.com/iap/docs/authentication-howto), [https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings](https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings), [https://docs.cloud.google.com/iap/docs/reference/rest/Shared.Types/Binding](https://docs.cloud.google.com/iap/docs/reference/rest/Shared.Types/Binding), [https://docs.cloud.google.com/iap/docs/customizing](https://docs.cloud.google.com/iap/docs/customizing))
- role (evidence: [https://docs.cloud.google.com/iap/docs/authentication-howto](https://docs.cloud.google.com/iap/docs/authentication-howto), [https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings](https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings), [https://docs.cloud.google.com/iap/docs/reference/rest/Shared.Types/Binding](https://docs.cloud.google.com/iap/docs/reference/rest/Shared.Types/Binding), [https://docs.cloud.google.com/iap/docs/customizing](https://docs.cloud.google.com/iap/docs/customizing))
- token (evidence: [https://docs.cloud.google.com/iap/docs/authentication-howto](https://docs.cloud.google.com/iap/docs/authentication-howto), [https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings](https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings), [https://docs.cloud.google.com/iap/docs/reference/rest/Shared.Types/Binding](https://docs.cloud.google.com/iap/docs/reference/rest/Shared.Types/Binding), [https://docs.cloud.google.com/iap/docs/customizing](https://docs.cloud.google.com/iap/docs/customizing))

## Official Evidence

- [https://docs.cloud.google.com/iap/docs/authentication-howto](https://docs.cloud.google.com/iap/docs/authentication-howto)
- [https://docs.cloud.google.com/iap/docs/customizing](https://docs.cloud.google.com/iap/docs/customizing)
- [https://docs.cloud.google.com/iap/docs/reference/rest/Shared.Types/Binding](https://docs.cloud.google.com/iap/docs/reference/rest/Shared.Types/Binding)
- [https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings](https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings)
