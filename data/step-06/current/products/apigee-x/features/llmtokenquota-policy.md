---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:27:18.137Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "LLMTokenQuota policy"
feature_slug: "llmtokenquota-policy"
latest_feature_date: "2025-12-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-ai-token-policies"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/develop/comparing-quota-and-spike-arrest-policies"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies"
keywords:
  - "llmtokenquota"
  - "quotas"
  - "large"
  - "enforces"
  - "language"
  - "response"
  - "model"
  - "policy"
---

# LLMTokenQuota policy

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

The LLMTokenQuota policy enforces quotas on large language model response token usage to control spend and resource allocation.

## Extended Definition

The LLMTokenQuota policy enforces quotas on large language model response token usage to control spend and resource allocation.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-ai-token-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-ai-token-policies)
- [https://docs.cloud.google.com/apigee/docs/api-platform/develop/comparing-quota-and-spike-arrest-policies](https://docs.cloud.google.com/apigee/docs/api-platform/develop/comparing-quota-and-spike-arrest-policies)
- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies)

## Supporting Pages

### Get started with LLM token policies \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-ai-token-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-ai-token-policies)
- Source ID: `site-docs-reference`
- Final score: 168
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following LLMTokenQuota policy example enforces a quota of 10,000 tokens per hour, with the settings dynamically sourced from an API product: < LLMTokenQuota name = "Quota-Enforce-Only" type = "rollingwindow" > < EnforceOnly>true < / EnforceOnly > < ! -- The interval and time unit for the quota -- > < Interval ref = "verifyapikey.verify-api-key.apiproduct.developer.llmQuota.interval" > 1 < / Interval > < TimeUnit ref = "verifyapikey.verify-api-key.apiproduct.developer.llmQuota.timeunit" > hour < / TimeUnit > < ! -- The number of tokens allowed in the interval -- > < Allow count = "10000" countRef = "verifyapikey.verify-api-key.apiproduct.developer.llmQuota.limit" / > < ! -- Specifies where to get the token usage from the LLM ' s response -- > < LLMTokenUsageSource > { jsonPath ( '$ . usageMetadata . candidatesTokenCount ' , response . content , true )} < / LLMTokenUsageSource > < ! -- Specifies where to get the model name from the LLM ' s response -- > < LLMModelSource > { jsonPath ( '$ . model ' , response . content , true )} < / LLMModelSource > < / LLMTokenQuota > Where: <EnforceOnly> : When set to true , this element is used to reject API calls once the token quota has been exceeded.
- See the PromptTokenLimit policy reference page for: Examples Flow variables Error reference Configure the PromptTokenLimit policy in the Apigee UI when performing the following tasks: Create an API product Creating an API proxy using the UI Attaching and configuring policies in the UI LLMTokenQuota policy Use the LLMTokenQuota policy when you want to set and enforce token consumption quotas for different API products, developers, or apps.
- See the LLMTokenQuota policy reference page for: Examples Flow variables Error reference Configure the LLMTokenQuota policy in the Apigee UI as described in the following sections: Create an API product Creating an API proxy using the UI Attaching and configuring policies in the UI Limitations The LLM token policies have the following limitations: LLMTokenQuota policy limitations The policy currently only supports text-based tokens.
- See also PromptTokenLimit policy LLMTokenQuota policy REST Resource: organizations.apiproducts Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### Comparing rate-limiting policies \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/develop/comparing-quota-and-spike-arrest-policies](https://docs.cloud.google.com/apigee/docs/api-platform/develop/comparing-quota-and-spike-arrest-policies)
- Source ID: `site-docs-reference-required-3`
- Final score: 148
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- While Quota and SpikeArrest focus on request counts, the PromptTokenLimit and LLMTokenQuota policies manage and control consumption based on tokens, which is crucial for AI and Large Language Model (LLM) workloads.
- Get more details: Quota policy SpikeArrest policy LLMTokenQuota policy PromptTokenLimit policy Tip: You can also use the following to protect slow/sluggish backends without impacting the performance of the APIs: Creating reusable shared flows: Combine policies and resources into a shared flow that you can consume from multiple API proxies, and even from other shared flows.
- Use the comparison chart below to help you decide which policy to use for your rate-limiting use case: Quota SpikeArrest LLMTokenQuota PromptTokenLimit Use it to: Limit the number of API proxy calls a developer app or developer can make over a specific period of time.
- If you use both PromptTokenLimit and LLMTokenQuota policies in the same proxy, PromptTokenLimit should always be attached before the LLMTokenQuota policy in the ProxyEndpoint Request PreFlow.

### Get started with Apigee Model Armor policies \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies)
- Source ID: `site-docs-reference`
- Final score: 137
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- These policies sanitize the user prompts sent to and responses received from large language models (LLMs).
- This region name can be used to identify the correct Model Armor template to use for that instance For example: <SanitizeModelResponse async="false" continueOnError="false" enabled="true" name="sanitize-response"> <IgnoreUnresolvedVariables>true</IgnoreUnresolvedVariables> <DisplayName>Sanitize-Response-sample</DisplayName> <ModelArmor> <TemplateName>projects/$PROJECT/locations/ {system.region.name} /templates/$TEMPLATE NAME</TemplateName> </ModelArmor> <UserPromptSource>{jsonPath('$.contents[-1].parts[-1].text',request.content,true)}</UserPromptSource> <LLMResponseSource>{jsonPath('$.candidates[-1].content.parts[-1].text',response.content,true)}</LLMResponseSource> </SanitizeModelResponse> Model Armor response processing You can add additional processing logic after the Model Armor policy processes the LLM response.
- The following example shows the configuration for the ExtractVariables policy: <ExtractVariables enabled="true" continueOnError="false" async="false" name="ExtractFieldFromMaResponse"> <FaultRules/> <Properties/> <IgnoreUnresolvedVariables>false</IgnoreUnresolvedVariables> <VariablePrefix>sdp</VariablePrefix> <JSONPayload> <Variable type="string" name="info type"> <JSONPath>$.sanitizationResult.filterResults[1].sdpFilterResult.inspectResult.findings[0].infoType</JSONPath> </Variable> </JSONPayload> <Source>SanitizeUserPrompt.sanitize-response.response.content</Source> </ExtractVariables> Add a Model Armor response error code and error message with the RaiseFault policy You can add Model Armor template metadata to customize the error code and error message that is raised by the Model Armor policy.
- The following example shows the configuration for the RaiseFault policy: <RaiseFault name="ModelArmorTemplateErrorCodeHandler"> <IgnoreUnresolvedVariables>true</IgnoreUnresolvedVariables> <FaultResponse> <Set> <Payload contentType="application/json"> <ErrorResponse> <Error> <Status>{sanitizationMetadata.errorCode}</Status> <Message>{sanitizationMetadata.errorMessage}</Message> </Error> </ErrorResponse> </Payload> <StatusCode>401</StatusCode> <ReasonPhrase>Invalid API Key</ReasonPhrase> </Set> </FaultResponse> </RaiseFault> Once the new policy is added and the API proxy is deployed, requests to the proxy that trigger the error specified in the Model Armor template metadata will raise a fault with the error code and error message defined in the RaiseFault policy.

