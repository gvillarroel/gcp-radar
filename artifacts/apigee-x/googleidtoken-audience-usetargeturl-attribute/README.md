# GoogleIDToken.Audience useTargetUrl attribute

Product: Apigee X
Feature slug: `googleidtoken-audience-usetargeturl-attribute`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The GoogleIDToken.Audience tag supports a useTargetUrl attribute to simplify Google ID token audience configuration.

## Lifecycle

- Latest feature date: 2022-05-09
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference](https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference), [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/external-callout-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/external-callout-policy), [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy))
- auth (evidence: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference](https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference), [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/external-callout-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/external-callout-policy), [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy))
- authorization (evidence: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference](https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference), [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/external-callout-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/external-callout-policy), [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy))
- credential (evidence: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference](https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference), [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/external-callout-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/external-callout-policy), [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy))
- policy (evidence: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference](https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference), [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/external-callout-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/external-callout-policy), [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy))
- secret (evidence: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference](https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference), [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/external-callout-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/external-callout-policy), [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy))
- token (evidence: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference](https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference), [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/external-callout-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/external-callout-policy), [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy))

## Official Evidence

- [https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference](https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference)
- [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy)
- [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/external-callout-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/external-callout-policy)
