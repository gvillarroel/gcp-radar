# PromptTokenLimit policy

Product: Apigee X
Feature slug: `prompttokenlimit-policy`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The PromptTokenLimit policy rate-limits requests based on the token count of a user's prompt message.

## Lifecycle

- Latest feature date: 2025-12-23
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- allow (evidence: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-ai-token-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-ai-token-policies), [https://docs.cloud.google.com/apigee/docs/api-platform/develop/rate-limiting](https://docs.cloud.google.com/apigee/docs/api-platform/develop/rate-limiting), [https://docs.cloud.google.com/apigee/docs/api-platform/develop/comparing-quota-and-spike-arrest-policies](https://docs.cloud.google.com/apigee/docs/api-platform/develop/comparing-quota-and-spike-arrest-policies))
- key (evidence: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-ai-token-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-ai-token-policies), [https://docs.cloud.google.com/apigee/docs/api-platform/develop/rate-limiting](https://docs.cloud.google.com/apigee/docs/api-platform/develop/rate-limiting), [https://docs.cloud.google.com/apigee/docs/api-platform/develop/comparing-quota-and-spike-arrest-policies](https://docs.cloud.google.com/apigee/docs/api-platform/develop/comparing-quota-and-spike-arrest-policies))
- policy (evidence: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-ai-token-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-ai-token-policies), [https://docs.cloud.google.com/apigee/docs/api-platform/develop/rate-limiting](https://docs.cloud.google.com/apigee/docs/api-platform/develop/rate-limiting), [https://docs.cloud.google.com/apigee/docs/api-platform/develop/comparing-quota-and-spike-arrest-policies](https://docs.cloud.google.com/apigee/docs/api-platform/develop/comparing-quota-and-spike-arrest-policies))
- token (evidence: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-ai-token-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-ai-token-policies), [https://docs.cloud.google.com/apigee/docs/api-platform/develop/rate-limiting](https://docs.cloud.google.com/apigee/docs/api-platform/develop/rate-limiting), [https://docs.cloud.google.com/apigee/docs/api-platform/develop/comparing-quota-and-spike-arrest-policies](https://docs.cloud.google.com/apigee/docs/api-platform/develop/comparing-quota-and-spike-arrest-policies))

## Official Evidence

- [https://docs.cloud.google.com/apigee/docs/api-platform/develop/comparing-quota-and-spike-arrest-policies](https://docs.cloud.google.com/apigee/docs/api-platform/develop/comparing-quota-and-spike-arrest-policies)
- [https://docs.cloud.google.com/apigee/docs/api-platform/develop/rate-limiting](https://docs.cloud.google.com/apigee/docs/api-platform/develop/rate-limiting)
- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-ai-token-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-ai-token-policies)
