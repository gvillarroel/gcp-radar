---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T01:24:41.797Z"
product_name: "Apigee UI"
product_slug: "apigee-ui"
feature_name: "Apigee API Product legacy format warning"
feature_slug: "apigee-api-product-legacy-format-warning"
latest_feature_date: "2022-02-15"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-deploy-apigee"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-ai-token-policies"
keywords:
  - "legacy format alert"
  - "legacy format warning"
  - "legacy field warning"
  - "legacy API Product warning"
  - "legacy format"
  - "legacy fields"
  - "API Product"
---

# Apigee API Product legacy format warning

Product: Apigee UI
Coverage: LOW

## Step 02 Summary

The UI now shows a warning when an API Product is in a legacy format, indicating that some displayed fields may be legacy fields.

## Extended Definition

The feature is intended to be a UI-level warning in Apigee when an API Product is in a legacy format, signaling that some displayed fields may be legacy fields. However, the provided official documentation excerpts only describe API product creation and LLM token policy usage in the Apigee UI and do not directly confirm that this specific warning is shown.

## Evidence Summary

The pages provide context for API product creation and policy configuration in the Apigee UI but do not explicitly document a legacy-format warning for API Products.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-deploy-apigee](https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-deploy-apigee)
- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-ai-token-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-ai-token-policies)

## Supporting Pages

### Step 7: Deploy to an Apigee environment \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-deploy-apigee](https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-deploy-apigee)
- Source ID: `site-docs-reference`
- Final score: 28
- Re-rank relevance: N/A

Evidence snippets:
- The following error message is displayed: {"fault":{"faultstring":"Failed to resolve API Key variable request.queryparam.apikey", "detail":{"errorcode":"steps.oauth.v2.FailedToResolveAPIKey"}}} You need to create an API product that includes the helloworld API, then create and register a developer with the API product in order to obtain an API key.
- Create an API product using the Apigee UI: Go to the API products page: In the Google Cloud console, go to the Distribution > API products page.
- Enter the Product Details for your API product.
- Go to API products Click + Create .

### Get started with LLM token policies \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-ai-token-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-ai-token-policies)
- Source ID: `site-docs-reference`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- The following LLMTokenQuota policy example enforces a quota of 10,000 tokens per hour, with the settings dynamically sourced from an API product: < LLMTokenQuota name = "Quota-Enforce-Only" type = "rollingwindow" > < EnforceOnly>true < / EnforceOnly > < ! -- The interval and time unit for the quota -- > < Interval ref = "verifyapikey.verify-api-key.apiproduct.developer.llmQuota.interval" > 1 < / Interval > < TimeUnit ref = "verifyapikey.verify-api-key.apiproduct.developer.llmQuota.timeunit" > hour < / TimeUnit > < ! -- The number of tokens allowed in the interval -- > < Allow count = "10000" countRef = "verifyapikey.verify-api-key.apiproduct.developer.llmQuota.limit" / > < ! -- Specifies where to get the token usage from the LLM ' s response -- > < LLMTokenUsageSource > { jsonPath ( '$ . usageMetadata . candidatesTokenCount ' , response . content , true )} < / LLMTokenUsageSource > < ! -- Specifies where to get the model name from the LLM ' s response -- > < LLMModelSource > { jsonPath ( '$ . model ' , response . content , true )} < / LLMModelSource > < / LLMTokenQuota > Where: <EnforceOnly> : When set to true , this element is used to reject API calls once the token quota has been exceeded.
- See the PromptTokenLimit policy reference page for: Examples Flow variables Error reference Configure the PromptTokenLimit policy in the Apigee UI when performing the following tasks: Create an API product Creating an API proxy using the UI Attaching and configuring policies in the UI LLMTokenQuota policy Use the LLMTokenQuota policy when you want to set and enforce token consumption quotas for different API products, developers, or apps.
- See the LLMTokenQuota policy reference page for: Examples Flow variables Error reference Configure the LLMTokenQuota policy in the Apigee UI as described in the following sections: Create an API product Creating an API proxy using the UI Attaching and configuring policies in the UI Limitations The LLM token policies have the following limitations: LLMTokenQuota policy limitations The policy currently only supports text-based tokens.
- LLMTokenQuota policy : Controls LLM expenditures and applies granular quota management based on API products.

