---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T18:40:29.736Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "30 MB message payload support"
feature_slug: "30-mb-message-payload-support"
latest_feature_date: "2025-05-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/reference/pci-configuration-guide"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-ai-token-policies"
keywords:
  - "payloads"
  - "payload"
  - "message"
  - "supports"
---

# 30 MB message payload support

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

Apigee now supports message payloads up to 30 MB for proxy processing.

## Extended Definition

Apigee now supports message payloads up to 30 MB for proxy processing.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/reference/pci-configuration-guide](https://docs.cloud.google.com/apigee/docs/api-platform/reference/pci-configuration-guide)
- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies)
- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-ai-token-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-ai-token-policies)

## Supporting Pages

### Get started with Apigee Model Armor policies \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies)
- Source ID: `site-docs-reference-2`
- Final score: 52
- Re-rank relevance: N/A

Evidence snippets:
- The following example shows the configuration for the ExtractVariables policy: <ExtractVariables enabled="true" continueOnError="false" async="false" name="ExtractFieldFromMaResponse"> <FaultRules/> <Properties/> <IgnoreUnresolvedVariables>false</IgnoreUnresolvedVariables> <VariablePrefix>sdp</VariablePrefix> <JSONPayload> <Variable type="string" name="info type"> <JSONPath>$.sanitizationResult.filterResults[1].sdpFilterResult.inspectResult.findings[0].infoType</JSONPath> </Variable> </JSONPayload> <Source>SanitizeUserPrompt.sanitize-response.response.content</Source> </ExtractVariables> Add a Model Armor response error code and error message with the RaiseFault policy You can add Model Armor template metadata to customize the error code and error message that is raised by the Model Armor policy.
- The following example shows the configuration for the RaiseFault policy: <RaiseFault name="ModelArmorTemplateErrorCodeHandler"> <IgnoreUnresolvedVariables>true</IgnoreUnresolvedVariables> <FaultResponse> <Set> <Payload contentType="application/json"> <ErrorResponse> <Error> <Status>{sanitizationMetadata.errorCode}</Status> <Message>{sanitizationMetadata.errorMessage}</Message> </Error> </ErrorResponse> </Payload> <StatusCode>401</StatusCode> <ReasonPhrase>Invalid API Key</ReasonPhrase> </Set> </FaultResponse> </RaiseFault> Once the new policy is added and the API proxy is deployed, requests to the proxy that trigger the error specified in the Model Armor template metadata will raise a fault with the error code and error message defined in the RaiseFault policy.
- Create a Model Armor template Create a Model Armor template for sanitizing user prompts and LLM responses: gcloud model-armor templates create --location $LOCATION TEMPLATE NAME --rai-settings-filters = '[{ "filterType":"HATE SPEECH", "confidenceLevel": "MEDIUM AND ABOVE" },{ "filterType": "HARASSMENT", "confidenceLevel": "MEDIUM AND ABOVE" },{ "filterType": "SEXUALLY EXPLICIT", "confidenceLevel": "MEDIUM AND ABOVE" }]' --basic-config-filter-enforcement = enabled --pi-and-jailbreak-filter-settings-enforcement = enabled --pi-and-jailbreak-filter-settings-confidence-level = LOW AND ABOVE --malicious-uri-filter-settings-enforcement = enabled --template-metadata-custom-llm-response-safety-error-code = 798 --template-metadata-custom-llm-response-safety-error-message = "test template llm response evaluation failed" --template-metadata-custom-prompt-safety-error-code = 799 --template-metadata-custom-prompt-safety-error-message = "test template prompt evaluation failed" --template-metadata-ignore-partial-invocation-failures --template-metadata-log-operations --template-metadata-log-sanitize-operations Substitute TEMPLATE NAME with the name of the template you want to create.
- To implement this example: Add template metadata to your Model Armor template, as shown in the following example: "templateMetadata" : { { "customPromptSafetyErrorCode" : 1099 , "customPromptSafetyErrorMessage" : "Prompt not allowed" , } } Add the RaiseFault policy to the API proxy response PostFlow .

### PCI Configuration Guide for Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/pci-configuration-guide](https://docs.cloud.google.com/apigee/docs/api-platform/reference/pci-configuration-guide)
- Source ID: `site-docs-reference`
- Final score: 50
- Re-rank relevance: N/A

Evidence snippets:
- Because Apigee does not know the details of every customer's API design and data payloads, customers have the responsibility to determine appropriate encryption for data in transit.
- Since Debug Session has access to the payload of API calls (formally called the "Message Body"), it's important to consider who has access to run a Debug Session.
- Encrypted data in the payload (or Message Body) does not prevent Apigee from functioning.
- But other policies and customer-built policies and bundles will work even if the data payload is encrypted.

### Get started with LLM token policies \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-ai-token-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-ai-token-policies)
- Source ID: `site-docs-reference-2`
- Final score: 46
- Re-rank relevance: N/A

Evidence snippets:
- See the LLMTokenQuota policy reference page for: Examples Flow variables Error reference Configure the LLMTokenQuota policy in the Apigee UI as described in the following sections: Create an API product Creating an API proxy using the UI Attaching and configuring policies in the UI Limitations The LLM token policies have the following limitations: LLMTokenQuota policy limitations The policy currently only supports text-based tokens.
- This document describes how to get started with the following LLM token policies: PromptTokenLimit policy : Protects targets from token abuse by throttling tokens based on the user prompt message.
- It should be a message template that provides a single value of the token usage. <LLMModelSource> : This element provides the source of the model from the LLM response or request.
- The policy requires the exact JSON path for the LLM tokens consumed in the response payload and cannot detect it automatically.

