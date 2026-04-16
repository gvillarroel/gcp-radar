---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:27:18.184Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "CacheExpiryInSeconds support for token and API key verification"
feature_slug: "cacheexpiryinseconds-support-for-token-and-api-key-verification"
latest_feature_date: "2023-02-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/publish/what-api-product"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/monetization/enforce-monetization-limits"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-ai-token-policies"
keywords:
  - "cacheexpiryinseconds"
  - "verifyaccesstoken"
  - "verification"
  - "oauth2"
  - "verifyapikey"
  - "enforce"
  - "token"
---

# CacheExpiryInSeconds support for token and API key verification

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

VerifyAPIKey and OAuth2 VerifyAccessToken support CacheExpiryInSeconds to enforce and customize cache TTL for cached tokens.

## Extended Definition

VerifyAPIKey and OAuth2 VerifyAccessToken support CacheExpiryInSeconds to enforce and customize cache TTL for cached tokens.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/publish/what-api-product](https://docs.cloud.google.com/apigee/docs/api-platform/publish/what-api-product)
- [https://docs.cloud.google.com/apigee/docs/api-platform/monetization/enforce-monetization-limits](https://docs.cloud.google.com/apigee/docs/api-platform/monetization/enforce-monetization-limits)
- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-ai-token-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-ai-token-policies)

## Supporting Pages

### Introduction to API products \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/publish/what-api-product](https://docs.cloud.google.com/apigee/docs/api-platform/publish/what-api-product)
- Source ID: `site-docs-reference-required-3`
- Final score: 114
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Whether using the consumer key or OAuth tokens as request credentials, the API proxy validates the request credentials in your API proxies by including a VerifyAPIKey policy or a VerifyAccessToken policy configuration (see OAuthv2 policy ) in the appropriate flow.
- In the case of OAuth token verification, Apigee verifies that the token is not expired, and then looks up the consumer key that was used to generate the token.
- When the API uses OAuth Token verification, the app must pass a token which has been derived from the consumer key.
- API products that are part of Pay-as-you-go must include either: extensible proxies built with flow hooks, or extensible policies such as the VerifyAPIKey policy or OAuthv2 policy Operations An operation is a group of attributes that restrict access to one or more API proxies based on criteria such as resource path, HTTP method, and quota.

### Get started with LLM token policies \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-ai-token-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-ai-token-policies)
- Source ID: `site-docs-reference`
- Final score: 105
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following LLMTokenQuota policy example enforces a quota of 10,000 tokens per hour, with the settings dynamically sourced from an API product: < LLMTokenQuota name = "Quota-Enforce-Only" type = "rollingwindow" > < EnforceOnly>true < / EnforceOnly > < ! -- The interval and time unit for the quota -- > < Interval ref = "verifyapikey.verify-api-key.apiproduct.developer.llmQuota.interval" > 1 < / Interval > < TimeUnit ref = "verifyapikey.verify-api-key.apiproduct.developer.llmQuota.timeunit" > hour < / TimeUnit > < ! -- The number of tokens allowed in the interval -- > < Allow count = "10000" countRef = "verifyapikey.verify-api-key.apiproduct.developer.llmQuota.limit" / > < ! -- Specifies where to get the token usage from the LLM ' s response -- > < LLMTokenUsageSource > { jsonPath ( '$ . usageMetadata . candidatesTokenCount ' , response . content , true )} < / LLMTokenUsageSource > < ! -- Specifies where to get the model name from the LLM ' s response -- > < LLMModelSource > { jsonPath ( '$ . model ' , response . content , true )} < / LLMModelSource > < / LLMTokenQuota > Where: <EnforceOnly> : When set to true , this element is used to reject API calls once the token quota has been exceeded.
- See the PromptTokenLimit policy reference page for: Examples Flow variables Error reference Configure the PromptTokenLimit policy in the Apigee UI when performing the following tasks: Create an API product Creating an API proxy using the UI Attaching and configuring policies in the UI LLMTokenQuota policy Use the LLMTokenQuota policy when you want to set and enforce token consumption quotas for different API products, developers, or apps.
- Overview Apigee's LLM token policies are crucial for cost control, performance optimization, and platform stability, leveraging LLM token usage and user prompt token metrics to enforce limits and provide real-time monitoring.
- The LLMTokenQuota policy allows you to enforce token consumption limits for your LLM APIs over a specific time period (e.g., per minute, hour, day, or month).

### "Enforce monetization limits in API proxies \_|\_ Apigee \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/monetization/enforce-monetization-limits](https://docs.cloud.google.com/apigee/docs/api-platform/monetization/enforce-monetization-limits)
- Source ID: `site-docs-reference-required-3`
- Final score: 103
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Add an authentication policy Apigee monetization uses the VerifyAPIKey policy or the VerifyAccessToken operation of the OAuth2 policy to determine if an incoming request is monetizable by checking for the active published rate plan.
- See also: Attaching a policy to a flow Verifying access tokens Monitoring and debugging the authentication policy using Debug Enforce subscriptions on API products Attach the MonetizationLimitsCheck policy to API proxies to enforce subscriptions on the API product by developer or AppGroup: If no active rate plan exists for the API product fetched during the proxy call execution, the product is deemed non-monetized, the MonetizationLimitsCheck policy does not fetch any further data, and the policy has no effect.
- For more information, see: Creating an API proxy Editing an API proxy Attaching a policy to a flow Debugging the MonetizationLimitsCheck policy using Debug MonetizationLimitsCheck policy Enforce monetization quotas in API proxies Note: If you add a quota after the API product has been in use, the quota calculation starts from the next monetized transaction.
- Home Documentation Application development Apigee Guides Send feedback Enforce monetization limits in API proxies Stay organized with collections Save and categorize content based on your preferences.

