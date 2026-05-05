# Cloud IAP AJAX authentication response handling

Product: Identity-Aware Proxy
Feature slug: `cloud-iap-ajax-authentication-response-handling`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud IAP returns HTTP 401 for AJAX requests with missing or expired credentials instead of serving a login page.

## Lifecycle

- Latest feature date: 2017-08-31
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/iap/docs/external-identity-sessions](https://docs.cloud.google.com/iap/docs/external-identity-sessions), [https://docs.cloud.google.com/iap/docs/authentication-howto](https://docs.cloud.google.com/iap/docs/authentication-howto), [https://docs.cloud.google.com/iap/docs/customizing](https://docs.cloud.google.com/iap/docs/customizing), [https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings](https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings))
- allow (evidence: [https://docs.cloud.google.com/iap/docs/external-identity-sessions](https://docs.cloud.google.com/iap/docs/external-identity-sessions), [https://docs.cloud.google.com/iap/docs/authentication-howto](https://docs.cloud.google.com/iap/docs/authentication-howto), [https://docs.cloud.google.com/iap/docs/customizing](https://docs.cloud.google.com/iap/docs/customizing), [https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings](https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings))
- auth (evidence: [https://docs.cloud.google.com/iap/docs/external-identity-sessions](https://docs.cloud.google.com/iap/docs/external-identity-sessions), [https://docs.cloud.google.com/iap/docs/authentication-howto](https://docs.cloud.google.com/iap/docs/authentication-howto), [https://docs.cloud.google.com/iap/docs/customizing](https://docs.cloud.google.com/iap/docs/customizing), [https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings](https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings))
- authorization (evidence: [https://docs.cloud.google.com/iap/docs/external-identity-sessions](https://docs.cloud.google.com/iap/docs/external-identity-sessions), [https://docs.cloud.google.com/iap/docs/authentication-howto](https://docs.cloud.google.com/iap/docs/authentication-howto), [https://docs.cloud.google.com/iap/docs/customizing](https://docs.cloud.google.com/iap/docs/customizing), [https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings](https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings))
- credential (evidence: [https://docs.cloud.google.com/iap/docs/external-identity-sessions](https://docs.cloud.google.com/iap/docs/external-identity-sessions), [https://docs.cloud.google.com/iap/docs/authentication-howto](https://docs.cloud.google.com/iap/docs/authentication-howto), [https://docs.cloud.google.com/iap/docs/customizing](https://docs.cloud.google.com/iap/docs/customizing), [https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings](https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings))
- iam (evidence: [https://docs.cloud.google.com/iap/docs/external-identity-sessions](https://docs.cloud.google.com/iap/docs/external-identity-sessions), [https://docs.cloud.google.com/iap/docs/authentication-howto](https://docs.cloud.google.com/iap/docs/authentication-howto), [https://docs.cloud.google.com/iap/docs/customizing](https://docs.cloud.google.com/iap/docs/customizing), [https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings](https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings))
- identity (evidence: [https://docs.cloud.google.com/iap/docs/external-identity-sessions](https://docs.cloud.google.com/iap/docs/external-identity-sessions), [https://docs.cloud.google.com/iap/docs/authentication-howto](https://docs.cloud.google.com/iap/docs/authentication-howto), [https://docs.cloud.google.com/iap/docs/customizing](https://docs.cloud.google.com/iap/docs/customizing), [https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings](https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings))
- key (evidence: [https://docs.cloud.google.com/iap/docs/external-identity-sessions](https://docs.cloud.google.com/iap/docs/external-identity-sessions), [https://docs.cloud.google.com/iap/docs/authentication-howto](https://docs.cloud.google.com/iap/docs/authentication-howto), [https://docs.cloud.google.com/iap/docs/customizing](https://docs.cloud.google.com/iap/docs/customizing), [https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings](https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings))
- permission (evidence: [https://docs.cloud.google.com/iap/docs/external-identity-sessions](https://docs.cloud.google.com/iap/docs/external-identity-sessions), [https://docs.cloud.google.com/iap/docs/authentication-howto](https://docs.cloud.google.com/iap/docs/authentication-howto), [https://docs.cloud.google.com/iap/docs/customizing](https://docs.cloud.google.com/iap/docs/customizing), [https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings](https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings))
- policy (evidence: [https://docs.cloud.google.com/iap/docs/external-identity-sessions](https://docs.cloud.google.com/iap/docs/external-identity-sessions), [https://docs.cloud.google.com/iap/docs/authentication-howto](https://docs.cloud.google.com/iap/docs/authentication-howto), [https://docs.cloud.google.com/iap/docs/customizing](https://docs.cloud.google.com/iap/docs/customizing), [https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings](https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings))
- private (evidence: [https://docs.cloud.google.com/iap/docs/external-identity-sessions](https://docs.cloud.google.com/iap/docs/external-identity-sessions), [https://docs.cloud.google.com/iap/docs/authentication-howto](https://docs.cloud.google.com/iap/docs/authentication-howto), [https://docs.cloud.google.com/iap/docs/customizing](https://docs.cloud.google.com/iap/docs/customizing), [https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings](https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings))
- role (evidence: [https://docs.cloud.google.com/iap/docs/external-identity-sessions](https://docs.cloud.google.com/iap/docs/external-identity-sessions), [https://docs.cloud.google.com/iap/docs/authentication-howto](https://docs.cloud.google.com/iap/docs/authentication-howto), [https://docs.cloud.google.com/iap/docs/customizing](https://docs.cloud.google.com/iap/docs/customizing), [https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings](https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings))
- secret (evidence: [https://docs.cloud.google.com/iap/docs/external-identity-sessions](https://docs.cloud.google.com/iap/docs/external-identity-sessions), [https://docs.cloud.google.com/iap/docs/authentication-howto](https://docs.cloud.google.com/iap/docs/authentication-howto), [https://docs.cloud.google.com/iap/docs/customizing](https://docs.cloud.google.com/iap/docs/customizing), [https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings](https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings))
- token (evidence: [https://docs.cloud.google.com/iap/docs/external-identity-sessions](https://docs.cloud.google.com/iap/docs/external-identity-sessions), [https://docs.cloud.google.com/iap/docs/authentication-howto](https://docs.cloud.google.com/iap/docs/authentication-howto), [https://docs.cloud.google.com/iap/docs/customizing](https://docs.cloud.google.com/iap/docs/customizing), [https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings](https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings))

## Official Evidence

- [https://docs.cloud.google.com/iap/docs/authentication-howto](https://docs.cloud.google.com/iap/docs/authentication-howto)
- [https://docs.cloud.google.com/iap/docs/customizing](https://docs.cloud.google.com/iap/docs/customizing)
- [https://docs.cloud.google.com/iap/docs/external-identity-sessions](https://docs.cloud.google.com/iap/docs/external-identity-sessions)
- [https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings](https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings)
