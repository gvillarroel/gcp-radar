---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T01:24:42.828Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "PromptTokenLimit policy"
feature_slug: "prompttokenlimit-policy"
latest_feature_date: "2025-12-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-ai-token-policies"
keywords:
  - "HTTP 429 prompt limit"
  - "prompt input token limit"
  - "o200k_base encoding"
  - "prompt token limit"
  - "prompt token cap"
  - "PromptTokenLimit policy"
  - "PromptTokenLimit"
---

# PromptTokenLimit policy

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

PromptTokenLimit policy applies token-based rate limiting to prompt input using o200k_base encoding and blocks requests with HTTP 429 when exceeded.

## Extended Definition

The PromptTokenLimit policy in Apigee is an LLM token policy used to protect targets from prompt-token abuse by throttling tokens based on the user prompt message. In the documented usage flow, it is configured through the Apigee UI as part of API product/proxy tasks, and an example shows it limiting prompt token flow to 1,000 tokens per minute.

## Evidence Summary

This page provides the policy purpose, configuration context, and a concrete XML example with a token rate (1,000 tokens/minute) for PromptTokenLimit.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-ai-token-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-ai-token-policies)

## Supporting Pages

### Get started with LLM token policies \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-ai-token-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-ai-token-policies)
- Source ID: `site-docs-reference`
- Final score: 68
- Re-rank relevance: STRONG
- Re-rank rationale: The page is primarily a guide for PromptTokenLimit, describing when to use it, how it limits prompt token spikes, and including a policy example with configuration fields.

Evidence snippets:
- See the PromptTokenLimit policy reference page for: Examples Flow variables Error reference Configure the PromptTokenLimit policy in the Apigee UI when performing the following tasks: Create an API product Creating an API proxy using the UI Attaching and configuring policies in the UI LLMTokenQuota policy Use the LLMTokenQuota policy when you want to set and enforce token consumption quotas for different API products, developers, or apps.
- See also PromptTokenLimit policy LLMTokenQuota policy REST Resource: organizations.apiproducts Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- The following PromptTokenLimit policy example limits the token rate to 1,000 tokens per minute: <PromptTokenLimit continueOnError="false" enabled="true" name="PTL-limitTokens-1"> <DisplayName>Limit Prompt Tokens</DisplayName> <!-- The rate at which to limit tokens.
- This document describes how to get started with the following LLM token policies: PromptTokenLimit policy : Protects targets from token abuse by throttling tokens based on the user prompt message.

