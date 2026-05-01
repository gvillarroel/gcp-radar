# Forward proxy allowlist access

Product: Apigee hybrid
Feature slug: `forward-proxy-allowlist-access`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Apigee Hybrid forward proxy now allows pass-through access to allowlisted URLs, requiring allowlists only for googleapis.com endpoints on the proxy server.

## Lifecycle

- Latest feature date: 2024-12-16
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- audit
- auth
- authorization
- certificate
- credential
- encrypt
- firewall
- iam
- key
- logging
- security
- token

## Official Evidence

- [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref)
- [https://docs.cloud.google.com/apigee/docs/hybrid/v1.12/allow-gcp-urls](https://docs.cloud.google.com/apigee/docs/hybrid/v1.12/allow-gcp-urls)
- [https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/forward-proxy](https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/forward-proxy)
