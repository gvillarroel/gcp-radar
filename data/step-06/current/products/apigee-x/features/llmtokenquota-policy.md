---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T01:24:42.828Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "LLMTokenQuota policy"
feature_slug: "llmtokenquota-policy"
latest_feature_date: "2025-12-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-ai-token-policies"
keywords:
  - "quota threshold exceeded"
  - "HTTP 429 token quota"
  - "response token limit"
  - "LLMTokenQuota policy"
  - "LLM response token quota"
  - "LLMTokenQuota"
  - "response token quota"
  - "LLM token quota"
---

# LLMTokenQuota policy

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

LLMTokenQuota policy enforces limits on LLM response token usage and returns HTTP 429 when quota thresholds are exceeded.

## Extended Definition

The LLMTokenQuota policy in Apigee is used to set and enforce configurable LLM token-consumption quotas (for example, token limits per hour) for different API products, developers, or apps, using policy attributes such as interval, time unit, and allowed token count. It reads token usage from the LLM response through LLMTokenUsageSource and, when EnforceOnly is set to true, it rejects calls once the configured quota threshold is exceeded; the policy is documented as supporting text-based tokens.

## Evidence Summary

The cited Apigee tutorial provides example configuration and usage of LLMTokenQuota, including how enforcement is enabled, what inputs it consumes from LLM responses, and its documented text-token limitation.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-ai-token-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-ai-token-policies)

## Supporting Pages

### Get started with LLM token policies \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-ai-token-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-ai-token-policies)
- Source ID: `site-docs-reference`
- Final score: 68
- Re-rank relevance: STRONG
- Re-rank rationale: The page explicitly introduces and explains the LLMTokenQuota policy, including its purpose, quota intervals, and role in controlling LLM token spending and fair usage.

Evidence snippets:
- The following LLMTokenQuota policy example enforces a quota of 10,000 tokens per hour, with the settings dynamically sourced from an API product: < LLMTokenQuota name = "Quota-Enforce-Only" type = "rollingwindow" > < EnforceOnly>true < / EnforceOnly > < ! -- The interval and time unit for the quota -- > < Interval ref = "verifyapikey.verify-api-key.apiproduct.developer.llmQuota.interval" > 1 < / Interval > < TimeUnit ref = "verifyapikey.verify-api-key.apiproduct.developer.llmQuota.timeunit" > hour < / TimeUnit > < ! -- The number of tokens allowed in the interval -- > < Allow count = "10000" countRef = "verifyapikey.verify-api-key.apiproduct.developer.llmQuota.limit" / > < ! -- Specifies where to get the token usage from the LLM ' s response -- > < LLMTokenUsageSource > { jsonPath ( '$ . usageMetadata . candidatesTokenCount ' , response . content , true )} < / LLMTokenUsageSource > < ! -- Specifies where to get the model name from the LLM ' s response -- > < LLMModelSource > { jsonPath ( '$ . model ' , response . content , true )} < / LLMModelSource > < / LLMTokenQuota > Where: <EnforceOnly> : When set to true , this element is used to reject API calls once the token quota has been exceeded.
- See the PromptTokenLimit policy reference page for: Examples Flow variables Error reference Configure the PromptTokenLimit policy in the Apigee UI when performing the following tasks: Create an API product Creating an API proxy using the UI Attaching and configuring policies in the UI LLMTokenQuota policy Use the LLMTokenQuota policy when you want to set and enforce token consumption quotas for different API products, developers, or apps.
- See the LLMTokenQuota policy reference page for: Examples Flow variables Error reference Configure the LLMTokenQuota policy in the Apigee UI as described in the following sections: Create an API product Creating an API proxy using the UI Attaching and configuring policies in the UI Limitations The LLM token policies have the following limitations: LLMTokenQuota policy limitations The policy currently only supports text-based tokens.
- See also PromptTokenLimit policy LLMTokenQuota policy REST Resource: organizations.apiproducts Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

