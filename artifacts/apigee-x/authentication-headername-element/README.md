# Authentication HeaderName element

Product: Apigee X
Feature slug: `authentication-headername-element`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Apigee Authentication configurations can specify a custom header name for injected bearer tokens by using the HeaderName element.

## Lifecycle

- Latest feature date: 2023-10-24
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/external-callout-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/external-callout-policy), [https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference](https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference), [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy))
- auth (evidence: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/external-callout-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/external-callout-policy), [https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference](https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference), [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy))
- authorization (evidence: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/external-callout-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/external-callout-policy), [https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference](https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference), [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy))
- policy (evidence: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/external-callout-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/external-callout-policy), [https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference](https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference), [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy))
- secret (evidence: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/external-callout-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/external-callout-policy), [https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference](https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference), [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy))
- token (evidence: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/external-callout-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/external-callout-policy), [https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference](https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference), [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy))

## Official Evidence

- [https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference](https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference)
- [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy)
- [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/external-callout-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/external-callout-policy)
