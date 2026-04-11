---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T01:24:42.832Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "SanitizeModelResponse policy"
feature_slug: "sanitizemodelresponse-policy"
latest_feature_date: "2025-09-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies"
keywords:
  - "LLM output sanitization"
  - "sensitive response content"
  - "unsafe response content"
  - "LLM response sanitizer"
  - "response sanitization"
  - "sanitize LLM response"
  - "SanitizeModelResponse policy"
  - "SanitizeModelResponse"
---

# SanitizeModelResponse policy

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

SanitizeModelResponse policy is generally available and sanitizes LLM outputs to protect against unsafe or sensitive response content.

## Extended Definition

SanitizeModelResponse is an Apigee policy used to process LLM responses through a Model Armor policy configuration in an API proxy, with attributes such as `TemplateName` and source selectors for user prompt and LLM response payloads. The policy is shown attached to the target endpoint Response PreFlow and can be controlled with the `enabled` attribute (for example, set to `false` to disable it). After the policy processes the LLM response, additional response-processing logic can be added.

## Evidence Summary

The page provides configuration examples and behavior details for SanitizeModelResponse, including how it is attached, how it references a Model Armor template, and how it can be toggled on or off.

## Source Links

- [https://cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies](https://cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies)

## Supporting Pages

### Get started with Apigee Model Armor policies \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies)
- Source ID: `site-docs-reference`
- Final score: 52
- Re-rank relevance: STRONG
- Re-rank rationale: It provides core behavior of the model-response sanitization policy in Apigee by describing response sanitization and mitigation of LLM risks, making it directly relevant.

Evidence snippets:
- The following example shows how to use the {system.region.name} variable in the TemplateName attribute of the SanitizeModelResponse policy.
- The SanitizeModelResponse policy is attached with the default target endpoint Response PreFlow .
- This region name can be used to identify the correct Model Armor template to use for that instance For example: <SanitizeModelResponse async="false" continueOnError="false" enabled="true" name="sanitize-response"> <IgnoreUnresolvedVariables>true</IgnoreUnresolvedVariables> <DisplayName>Sanitize-Response-sample</DisplayName> <ModelArmor> <TemplateName>projects/$PROJECT/locations/ {system.region.name} /templates/$TEMPLATE NAME</TemplateName> </ModelArmor> <UserPromptSource>{jsonPath('$.contents[-1].parts[-1].text',request.content,true)}</UserPromptSource> <LLMResponseSource>{jsonPath('$.candidates[-1].content.parts[-1].text',response.content,true)}</LLMResponseSource> </SanitizeModelResponse> Model Armor response processing You can add additional processing logic after the Model Armor policy processes the LLM response.
- Disable a Model Armor policy To disable the Model Armor policy, set the enabled attribute to false , as shown in the following example: <SanitizeModelResponse async="false" continueOnError="false" enabled="false" name="sanitize-response"> <IgnoreUnresolvedVariables>true</IgnoreUnresolvedVariables> <DisplayName>Sanitize-Response-sample</DisplayName> <ModelArmor> <TemplateName>projects/$PROJECT/locations/$LOCATION/templates/$TEMPLATE NAME</TemplateName> </ModelArmor> <UserPromptSource>{jsonPath('$.contents[-1].parts[-1].text',request.content,true)}</UserPromptSource> <LLMResponseSource>{jsonPath('$.candidates[-1].content.parts[-1].text',response.content,true)}</LLMResponseSource> </SanitizeModelResponse> You can edit policy content in the Google Cloud console.

