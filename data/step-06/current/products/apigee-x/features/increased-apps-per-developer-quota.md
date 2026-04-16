---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T18:40:29.742Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "Increased Apps-per-developer quota"
feature_slug: "increased-apps-per-developer-quota"
latest_feature_date: "2024-08-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-ai-token-policies"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/organization-structure"
keywords:
  - "raised"
  - "number"
  - "increased"
  - "developer"
  - "maximum"
  - "quota"
  - "apps"
---

# Increased Apps-per-developer quota

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

Raised the maximum number of Apps allowed per developer from 10 to 100.

## Extended Definition

Raised the maximum number of Apps allowed per developer from 10 to 100.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-ai-token-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-ai-token-policies)
- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies)
- [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/organization-structure](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/organization-structure)

## Supporting Pages

### Get started with LLM token policies \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-ai-token-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-ai-token-policies)
- Source ID: `site-docs-reference-2`
- Final score: 96
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following LLMTokenQuota policy example enforces a quota of 10,000 tokens per hour, with the settings dynamically sourced from an API product: < LLMTokenQuota name = "Quota-Enforce-Only" type = "rollingwindow" > < EnforceOnly>true < / EnforceOnly > < ! -- The interval and time unit for the quota -- > < Interval ref = "verifyapikey.verify-api-key.apiproduct.developer.llmQuota.interval" > 1 < / Interval > < TimeUnit ref = "verifyapikey.verify-api-key.apiproduct.developer.llmQuota.timeunit" > hour < / TimeUnit > < ! -- The number of tokens allowed in the interval -- > < Allow count = "10000" countRef = "verifyapikey.verify-api-key.apiproduct.developer.llmQuota.limit" / > < ! -- Specifies where to get the token usage from the LLM ' s response -- > < LLMTokenUsageSource > { jsonPath ( '$ . usageMetadata . candidatesTokenCount ' , response . content , true )} < / LLMTokenUsageSource > < ! -- Specifies where to get the model name from the LLM ' s response -- > < LLMModelSource > { jsonPath ( '$ . model ' , response . content , true )} < / LLMModelSource > < / LLMTokenQuota > Where: <EnforceOnly> : When set to true , this element is used to reject API calls once the token quota has been exceeded.
- See the PromptTokenLimit policy reference page for: Examples Flow variables Error reference Configure the PromptTokenLimit policy in the Apigee UI when performing the following tasks: Create an API product Creating an API proxy using the UI Attaching and configuring policies in the UI LLMTokenQuota policy Use the LLMTokenQuota policy when you want to set and enforce token consumption quotas for different API products, developers, or apps.
- See the LLMTokenQuota policy reference page for: Examples Flow variables Error reference Configure the LLMTokenQuota policy in the Apigee UI as described in the following sections: Create an API product Creating an API proxy using the UI Attaching and configuring policies in the UI Limitations The LLM token policies have the following limitations: LLMTokenQuota policy limitations The policy currently only supports text-based tokens.
- See also PromptTokenLimit policy LLMTokenQuota policy REST Resource: organizations.apiproducts Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### Understanding organizations \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/organization-structure](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/organization-structure)
- Source ID: `site-docs-reference-2`
- Final score: 93
- Re-rank relevance: N/A

Evidence snippets:
- App Developer An organization contains one or more developers who build the apps that consume the APIs (published as API products) defined by your organization.
- Or, you can revoke a developer, in which case all of the credentials for any apps registered for that developer become inoperable.
- This model defines how your APIs, API products, apps, and app developers are all related within Apigee.
- Apigee App (or App) Apigee developers create one or more client apps that consume your APIs.

### Get started with Apigee Model Armor policies \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies)
- Source ID: `site-docs-reference-2`
- Final score: 86
- Re-rank relevance: N/A

Evidence snippets:
- Increase quotas for dependent services There are no Apigee quotarestrictions on the number of requests that can be sent to Model Armor through Apigee.
- The accuracy of Model Armor may be reduced by limits on the maximum number of tokens processed by Model Armor in each prompt and response.
- The following example shows the configuration for the ExtractVariables policy: <ExtractVariables enabled="true" continueOnError="false" async="false" name="ExtractFieldFromMaResponse"> <FaultRules/> <Properties/> <IgnoreUnresolvedVariables>false</IgnoreUnresolvedVariables> <VariablePrefix>sdp</VariablePrefix> <JSONPayload> <Variable type="string" name="info type"> <JSONPath>$.sanitizationResult.filterResults[1].sdpFilterResult.inspectResult.findings[0].infoType</JSONPath> </Variable> </JSONPayload> <Source>SanitizeUserPrompt.sanitize-response.response.content</Source> </ExtractVariables> Add a Model Armor response error code and error message with the RaiseFault policy You can add Model Armor template metadata to customize the error code and error message that is raised by the Model Armor policy.
- Policy caught the offending text. filter matched: RAIMatchesFound: true, SDPMatchesFound: false, PIMatchesFound: true, CSAMMatchesFound: false, URIMatchesFound: false" , "detail" : { "errorcode" : "steps.sanitize.user.prompt.FilterMatched" } } } Malicious URI match example To test for a malicious URI match, send the following request to the API proxy you created in the previous step: curl -X POST "https:// $RUNTIME HOSTNAME / API PROXY NAME -H " Content-Type: application/json " \ -d '{ " contents ": [ { " role ": " user ", " parts ": [ { " text ": " Can you describe this link? https://testsafebrowsing.appspot.com/s/malware.html " } ] } ] }' Replace API PROXY NAME with the name of the API proxy you created in the previous step.

