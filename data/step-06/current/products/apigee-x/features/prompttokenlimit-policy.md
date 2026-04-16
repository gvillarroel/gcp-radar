---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:27:18.137Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "PromptTokenLimit policy"
feature_slug: "prompttokenlimit-policy"
latest_feature_date: "2025-12-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-ai-token-policies"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/develop/rate-limiting"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/develop/comparing-quota-and-spike-arrest-policies"
keywords:
  - "prompttokenlimit"
  - "count"
  - "rate"
  - "requests"
  - "limits"
  - "token"
  - "based"
  - "policy"
---

# PromptTokenLimit policy

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

The PromptTokenLimit policy rate-limits requests based on the token count of a user's prompt message.

## Extended Definition

The PromptTokenLimit policy rate-limits requests based on the token count of a user's prompt message.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-ai-token-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-ai-token-policies)
- [https://docs.cloud.google.com/apigee/docs/api-platform/develop/rate-limiting](https://docs.cloud.google.com/apigee/docs/api-platform/develop/rate-limiting)
- [https://docs.cloud.google.com/apigee/docs/api-platform/develop/comparing-quota-and-spike-arrest-policies](https://docs.cloud.google.com/apigee/docs/api-platform/develop/comparing-quota-and-spike-arrest-policies)

## Supporting Pages

### Get started with LLM token policies \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-ai-token-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-ai-token-policies)
- Source ID: `site-docs-reference`
- Final score: 234
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following PromptTokenLimit policy example limits the token rate to 1,000 tokens per minute: <PromptTokenLimit continueOnError="false" enabled="true" name="PTL-limitTokens-1"> <DisplayName>Limit Prompt Tokens</DisplayName> <!-- The rate at which to limit tokens.
- This document describes how to get started with the following LLM token policies: PromptTokenLimit policy : Protects targets from token abuse by throttling tokens based on the user prompt message.
- PromptTokenLimit policy limitations The policy currently only supports text-based tokens.
- The following LLMTokenQuota policy example enforces a quota of 10,000 tokens per hour, with the settings dynamically sourced from an API product: < LLMTokenQuota name = "Quota-Enforce-Only" type = "rollingwindow" > < EnforceOnly>true < / EnforceOnly > < ! -- The interval and time unit for the quota -- > < Interval ref = "verifyapikey.verify-api-key.apiproduct.developer.llmQuota.interval" > 1 < / Interval > < TimeUnit ref = "verifyapikey.verify-api-key.apiproduct.developer.llmQuota.timeunit" > hour < / TimeUnit > < ! -- The number of tokens allowed in the interval -- > < Allow count = "10000" countRef = "verifyapikey.verify-api-key.apiproduct.developer.llmQuota.limit" / > < ! -- Specifies where to get the token usage from the LLM ' s response -- > < LLMTokenUsageSource > { jsonPath ( '$ . usageMetadata . candidatesTokenCount ' , response . content , true )} < / LLMTokenUsageSource > < ! -- Specifies where to get the model name from the LLM ' s response -- > < LLMModelSource > { jsonPath ( '$ . model ' , response . content , true )} < / LLMModelSource > < / LLMTokenQuota > Where: <EnforceOnly> : When set to true , this element is used to reject API calls once the token quota has been exceeded.

### Comparing rate-limiting policies \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/develop/comparing-quota-and-spike-arrest-policies](https://docs.cloud.google.com/apigee/docs/api-platform/develop/comparing-quota-and-spike-arrest-policies)
- Source ID: `site-docs-reference-required-3`
- Final score: 228
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Use the comparison chart below to help you decide which policy to use for your rate-limiting use case: Quota SpikeArrest LLMTokenQuota PromptTokenLimit Use it to: Limit the number of API proxy calls a developer app or developer can make over a specific period of time.
- Protect your API proxy's target backend against token abuse, massive prompts, and potential denial-of-service attempts by limiting the rate of tokens sent in the input by throttling requests based on the number of tokens in the user's prompt message.
- While Quota and SpikeArrest focus on request counts, the PromptTokenLimit and LLMTokenQuota policies manage and control consumption based on tokens, which is crucial for AI and Large Language Model (LLM) workloads.
- PromptTokenLimit acts as a first line of defense against oversized prompts, rejecting them before requests are evaluated against longer-term LLMTokenQuota limits.

### Rate-limiting \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/develop/rate-limiting](https://docs.cloud.google.com/apigee/docs/api-platform/develop/rate-limiting)
- Source ID: `site-docs-reference-required-3`
- Final score: 202
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Specialized rate-limiting policies In addition to the general-purpose Quota and SpikeArrest policies, Apigee also provides the LLMTokenQuota policy and the PromptTokenLimit policy for APIs that interact with Large Language Models (LLMs).
- General-purpose policies SpikeArrest policy Quota policy Specialized rate-limiting policies LLMTokenQuota policy PromptTokenLimit policy SpikeArrest policy The SpikeArrest policy protects against traffic surges.
- These policies allow you to enforce quotas and rate limits on the number of tokens used, which can be a more granular way to control costs and usage than simple request counting.
- Quota policy This policy enforces consumption limits on client apps by maintaining a distributed 'counter' that tallies incoming requests.

