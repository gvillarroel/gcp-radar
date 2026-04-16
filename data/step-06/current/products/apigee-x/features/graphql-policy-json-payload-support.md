---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T18:40:29.771Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "GraphQL policy JSON payload support"
feature_slug: "graphql-policy-json-payload-support"
latest_feature_date: "2022-03-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-attach-policy"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-ai-token-policies"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies"
keywords:
  - "graphql"
  - "json"
  - "encoded"
  - "payload"
  - "supports"
  - "policy"
---

# GraphQL policy JSON payload support

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

The Apigee GraphQL policy now supports JSON-encoded payloads.

## Extended Definition

The Apigee GraphQL policy now supports JSON-encoded payloads.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-attach-policy](https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-attach-policy)
- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-ai-token-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-ai-token-policies)
- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies)

## Supporting Pages

### Step 6: Attach a policy \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-attach-policy](https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-attach-policy)
- Source ID: `site-docs-reference-2`
- Final score: 95
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The XMLtoJSON policy used in this tutorial converts the payload of the API's response message from XML to JSON.
- Add a <Step> element that references the XMLtoJSON policy to the <Response> flow in the API proxy <PreFlow> : <ProxyEndpoint name="default"> <PreFlow name="PreFlow"> <Request> <Step> <Name>verify-api-key</Name> </Step> <Step> <Name>remove-query-param-apikey</Name> </Step> <Step> <Name>impose-quota</Name> </Step> </Request> <Response> <Step> <Name>XMLtoJSON</Name> </Step> </Response> </PreFlow> ... </ProxyEndpoint> Save your changes to the file.
- Note : You'll attach the policy to the response flow in the API proxy PreFlow in the next step. <?xml version="1.0" encoding="UTF-8" standalone="yes"?> <XMLToJSON async="false" continueOnError="false" enabled="true" name="XMLtoJSON"> <DisplayName>XMLtoJSON</DisplayName> <Properties/> <Format>yahoo</Format> <OutputVariable> response </OutputVariable> <Source> response </Source> </XMLToJSON> Attach the policy to the default proxy endpoint.
- You've successfully attached the XMLtoJSON policy to your API proxy!

### Get started with Apigee Model Armor policies \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies)
- Source ID: `site-docs-reference-2`
- Final score: 83
- Re-rank relevance: N/A

Evidence snippets:
- The following example shows the configuration for the ExtractVariables policy: <ExtractVariables enabled="true" continueOnError="false" async="false" name="ExtractFieldFromMaResponse"> <FaultRules/> <Properties/> <IgnoreUnresolvedVariables>false</IgnoreUnresolvedVariables> <VariablePrefix>sdp</VariablePrefix> <JSONPayload> <Variable type="string" name="info type"> <JSONPath>$.sanitizationResult.filterResults[1].sdpFilterResult.inspectResult.findings[0].infoType</JSONPath> </Variable> </JSONPayload> <Source>SanitizeUserPrompt.sanitize-response.response.content</Source> </ExtractVariables> Add a Model Armor response error code and error message with the RaiseFault policy You can add Model Armor template metadata to customize the error code and error message that is raised by the Model Armor policy.
- The following example shows the configuration for the RaiseFault policy: <RaiseFault name="ModelArmorTemplateErrorCodeHandler"> <IgnoreUnresolvedVariables>true</IgnoreUnresolvedVariables> <FaultResponse> <Set> <Payload contentType="application/json"> <ErrorResponse> <Error> <Status>{sanitizationMetadata.errorCode}</Status> <Message>{sanitizationMetadata.errorMessage}</Message> </Error> </ErrorResponse> </Payload> <StatusCode>401</StatusCode> <ReasonPhrase>Invalid API Key</ReasonPhrase> </Set> </FaultResponse> </RaiseFault> Once the new policy is added and the API proxy is deployed, requests to the proxy that trigger the error specified in the Model Armor template metadata will raise a fault with the error code and error message defined in the RaiseFault policy.
- This region name can be used to identify the correct Model Armor template to use for that instance For example: <SanitizeModelResponse async="false" continueOnError="false" enabled="true" name="sanitize-response"> <IgnoreUnresolvedVariables>true</IgnoreUnresolvedVariables> <DisplayName>Sanitize-Response-sample</DisplayName> <ModelArmor> <TemplateName>projects/$PROJECT/locations/ {system.region.name} /templates/$TEMPLATE NAME</TemplateName> </ModelArmor> <UserPromptSource>{jsonPath('$.contents[-1].parts[-1].text',request.content,true)}</UserPromptSource> <LLMResponseSource>{jsonPath('$.candidates[-1].content.parts[-1].text',response.content,true)}</LLMResponseSource> </SanitizeModelResponse> Model Armor response processing You can add additional processing logic after the Model Armor policy processes the LLM response.
- Disable a Model Armor policy To disable the Model Armor policy, set the enabled attribute to false , as shown in the following example: <SanitizeModelResponse async="false" continueOnError="false" enabled="false" name="sanitize-response"> <IgnoreUnresolvedVariables>true</IgnoreUnresolvedVariables> <DisplayName>Sanitize-Response-sample</DisplayName> <ModelArmor> <TemplateName>projects/$PROJECT/locations/$LOCATION/templates/$TEMPLATE NAME</TemplateName> </ModelArmor> <UserPromptSource>{jsonPath('$.contents[-1].parts[-1].text',request.content,true)}</UserPromptSource> <LLMResponseSource>{jsonPath('$.candidates[-1].content.parts[-1].text',response.content,true)}</LLMResponseSource> </SanitizeModelResponse> You can edit policy content in the Google Cloud console.

### Get started with LLM token policies \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-ai-token-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-ai-token-policies)
- Source ID: `site-docs-reference-2`
- Final score: 83
- Re-rank relevance: N/A

Evidence snippets:
- The policy requires the exact JSON path for the LLM tokens consumed in the response payload and cannot detect it automatically.
- The following LLMTokenQuota policy example enforces a quota of 10,000 tokens per hour, with the settings dynamically sourced from an API product: < LLMTokenQuota name = "Quota-Enforce-Only" type = "rollingwindow" > < EnforceOnly>true < / EnforceOnly > < ! -- The interval and time unit for the quota -- > < Interval ref = "verifyapikey.verify-api-key.apiproduct.developer.llmQuota.interval" > 1 < / Interval > < TimeUnit ref = "verifyapikey.verify-api-key.apiproduct.developer.llmQuota.timeunit" > hour < / TimeUnit > < ! -- The number of tokens allowed in the interval -- > < Allow count = "10000" countRef = "verifyapikey.verify-api-key.apiproduct.developer.llmQuota.limit" / > < ! -- Specifies where to get the token usage from the LLM ' s response -- > < LLMTokenUsageSource > { jsonPath ( '$ . usageMetadata . candidatesTokenCount ' , response . content , true )} < / LLMTokenUsageSource > < ! -- Specifies where to get the model name from the LLM ' s response -- > < LLMModelSource > { jsonPath ( '$ . model ' , response . content , true )} < / LLMModelSource > < / LLMTokenQuota > Where: <EnforceOnly> : When set to true , this element is used to reject API calls once the token quota has been exceeded.
- See the LLMTokenQuota policy reference page for: Examples Flow variables Error reference Configure the LLMTokenQuota policy in the Apigee UI as described in the following sections: Create an API product Creating an API proxy using the UI Attaching and configuring policies in the UI Limitations The LLM token policies have the following limitations: LLMTokenQuota policy limitations The policy currently only supports text-based tokens.
- The policy requires the exact JSON path for the prompt text; it cannot find it dynamically.

