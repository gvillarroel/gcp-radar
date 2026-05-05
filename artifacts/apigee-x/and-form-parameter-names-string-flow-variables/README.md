# and form parameter names string flow variables

Product: Apigee X
Feature slug: `and-form-parameter-names-string-flow-variables`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

New flow variables return header, query parameter, and form parameter names as comma-separated strings for proxy logic.

## Lifecycle

- Latest feature date: 2024-08-01
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/variables-reference](https://docs.cloud.google.com/apigee/docs/api-platform/reference/variables-reference), [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/extract-variables-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/extract-variables-policy), [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy))
- allow (evidence: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/variables-reference](https://docs.cloud.google.com/apigee/docs/api-platform/reference/variables-reference), [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/extract-variables-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/extract-variables-policy), [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy))
- auth (evidence: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/variables-reference](https://docs.cloud.google.com/apigee/docs/api-platform/reference/variables-reference), [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/extract-variables-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/extract-variables-policy), [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy))
- authorization (evidence: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/variables-reference](https://docs.cloud.google.com/apigee/docs/api-platform/reference/variables-reference), [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/extract-variables-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/extract-variables-policy), [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy))
- key (evidence: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/variables-reference](https://docs.cloud.google.com/apigee/docs/api-platform/reference/variables-reference), [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/extract-variables-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/extract-variables-policy), [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy))
- policy (evidence: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/variables-reference](https://docs.cloud.google.com/apigee/docs/api-platform/reference/variables-reference), [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/extract-variables-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/extract-variables-policy), [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy))
- token (evidence: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/variables-reference](https://docs.cloud.google.com/apigee/docs/api-platform/reference/variables-reference), [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/extract-variables-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/extract-variables-policy), [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy))

## Official Evidence

- [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy)
- [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/extract-variables-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/extract-variables-policy)
- [https://docs.cloud.google.com/apigee/docs/api-platform/reference/variables-reference](https://docs.cloud.google.com/apigee/docs/api-platform/reference/variables-reference)
