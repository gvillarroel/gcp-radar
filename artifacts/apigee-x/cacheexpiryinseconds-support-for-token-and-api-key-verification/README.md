# CacheExpiryInSeconds support for token and API key verification

Product: Apigee X
Feature slug: `cacheexpiryinseconds-support-for-token-and-api-key-verification`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

VerifyAPIKey and OAuth2 VerifyAccessToken support CacheExpiryInSeconds to enforce and customize cache TTL for cached tokens.

## Lifecycle

- Latest feature date: 2023-02-08
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/apigee/docs/api-platform/publish/what-api-product](https://docs.cloud.google.com/apigee/docs/api-platform/publish/what-api-product), [https://docs.cloud.google.com/apigee/docs/api-platform/monetization/enforce-monetization-limits](https://docs.cloud.google.com/apigee/docs/api-platform/monetization/enforce-monetization-limits), [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-ai-token-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-ai-token-policies))
- allow (evidence: [https://docs.cloud.google.com/apigee/docs/api-platform/publish/what-api-product](https://docs.cloud.google.com/apigee/docs/api-platform/publish/what-api-product), [https://docs.cloud.google.com/apigee/docs/api-platform/monetization/enforce-monetization-limits](https://docs.cloud.google.com/apigee/docs/api-platform/monetization/enforce-monetization-limits), [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-ai-token-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-ai-token-policies))
- auth (evidence: [https://docs.cloud.google.com/apigee/docs/api-platform/publish/what-api-product](https://docs.cloud.google.com/apigee/docs/api-platform/publish/what-api-product), [https://docs.cloud.google.com/apigee/docs/api-platform/monetization/enforce-monetization-limits](https://docs.cloud.google.com/apigee/docs/api-platform/monetization/enforce-monetization-limits), [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-ai-token-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-ai-token-policies))
- credential (evidence: [https://docs.cloud.google.com/apigee/docs/api-platform/publish/what-api-product](https://docs.cloud.google.com/apigee/docs/api-platform/publish/what-api-product), [https://docs.cloud.google.com/apigee/docs/api-platform/monetization/enforce-monetization-limits](https://docs.cloud.google.com/apigee/docs/api-platform/monetization/enforce-monetization-limits), [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-ai-token-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-ai-token-policies))
- key (evidence: [https://docs.cloud.google.com/apigee/docs/api-platform/publish/what-api-product](https://docs.cloud.google.com/apigee/docs/api-platform/publish/what-api-product), [https://docs.cloud.google.com/apigee/docs/api-platform/monetization/enforce-monetization-limits](https://docs.cloud.google.com/apigee/docs/api-platform/monetization/enforce-monetization-limits), [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-ai-token-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-ai-token-policies))
- policy (evidence: [https://docs.cloud.google.com/apigee/docs/api-platform/publish/what-api-product](https://docs.cloud.google.com/apigee/docs/api-platform/publish/what-api-product), [https://docs.cloud.google.com/apigee/docs/api-platform/monetization/enforce-monetization-limits](https://docs.cloud.google.com/apigee/docs/api-platform/monetization/enforce-monetization-limits), [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-ai-token-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-ai-token-policies))
- token (evidence: [https://docs.cloud.google.com/apigee/docs/api-platform/publish/what-api-product](https://docs.cloud.google.com/apigee/docs/api-platform/publish/what-api-product), [https://docs.cloud.google.com/apigee/docs/api-platform/monetization/enforce-monetization-limits](https://docs.cloud.google.com/apigee/docs/api-platform/monetization/enforce-monetization-limits), [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-ai-token-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-ai-token-policies))

## Official Evidence

- [https://docs.cloud.google.com/apigee/docs/api-platform/monetization/enforce-monetization-limits](https://docs.cloud.google.com/apigee/docs/api-platform/monetization/enforce-monetization-limits)
- [https://docs.cloud.google.com/apigee/docs/api-platform/publish/what-api-product](https://docs.cloud.google.com/apigee/docs/api-platform/publish/what-api-product)
- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-ai-token-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-ai-token-policies)
