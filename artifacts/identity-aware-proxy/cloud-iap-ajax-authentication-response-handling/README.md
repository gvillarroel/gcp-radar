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

- access
- allow
- auth
- authorization
- credential
- iam
- identity
- key
- permission
- policy
- private
- role
- secret
- token

## Official Evidence

- [https://docs.cloud.google.com/iap/docs/authentication-howto](https://docs.cloud.google.com/iap/docs/authentication-howto)
- [https://docs.cloud.google.com/iap/docs/customizing](https://docs.cloud.google.com/iap/docs/customizing)
- [https://docs.cloud.google.com/iap/docs/external-identity-sessions](https://docs.cloud.google.com/iap/docs/external-identity-sessions)
- [https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings](https://docs.cloud.google.com/iap/docs/reference/rest/v1/IapSettings)
