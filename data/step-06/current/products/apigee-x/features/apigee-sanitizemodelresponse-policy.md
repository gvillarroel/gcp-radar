---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T01:24:42.837Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "Apigee SanitizeModelResponse policy"
feature_slug: "apigee-sanitizemodelresponse-policy"
latest_feature_date: "2025-05-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies"
keywords:
  - "LLM output sanitization"
  - "model response filtering"
  - "sanitize model response"
  - "SMR policy"
  - "SanitizeModelResponse policy"
  - "SanitizeModelResponse"
  - "public preview policy"
---

# Apigee SanitizeModelResponse policy

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

The SanitizeModelResponse policy is available in public preview to sanitize responses returned from large language models.

## Extended Definition

The SanitizeModelResponse policy is an Apigee policy used to apply Model Armor processing to LLM responses in an API proxy flow. In documented examples, it is attached to the target endpoint Response PreFlow and configured with a ModelArmor TemplateName, along with UserPromptSource and LLMResponseSource mappings for the prompt/response payloads, and its execution can be switched on or off via the enabled attribute. Additional response-processing logic can be applied after the policy runs.

## Evidence Summary

The cited tutorial provides concrete examples of SanitizeModelResponse configuration, attachment, and enablement behavior, but does not include lifecycle labels (for example, public preview status) or release-date evidence.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies)

## Supporting Pages

### Get started with Apigee Model Armor policies \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies)
- Source ID: `site-docs-reference`
- Final score: 54
- Re-rank relevance: STRONG
- Re-rank rationale: The page is specifically about configuring Apigee Model Armor policies and explicitly states these policies sanitize responses returned from LLMs, which directly defines this response-sanitization feature.

Evidence snippets:
- The following example shows how to use the {system.region.name} variable in the TemplateName attribute of the SanitizeModelResponse policy.
- The SanitizeModelResponse policy is attached with the default target endpoint Response PreFlow .
- This region name can be used to identify the correct Model Armor template to use for that instance For example: <SanitizeModelResponse async="false" continueOnError="false" enabled="true" name="sanitize-response"> <IgnoreUnresolvedVariables>true</IgnoreUnresolvedVariables> <DisplayName>Sanitize-Response-sample</DisplayName> <ModelArmor> <TemplateName>projects/$PROJECT/locations/ {system.region.name} /templates/$TEMPLATE NAME</TemplateName> </ModelArmor> <UserPromptSource>{jsonPath('$.contents[-1].parts[-1].text',request.content,true)}</UserPromptSource> <LLMResponseSource>{jsonPath('$.candidates[-1].content.parts[-1].text',response.content,true)}</LLMResponseSource> </SanitizeModelResponse> Model Armor response processing You can add additional processing logic after the Model Armor policy processes the LLM response.
- Disable a Model Armor policy To disable the Model Armor policy, set the enabled attribute to false , as shown in the following example: <SanitizeModelResponse async="false" continueOnError="false" enabled="false" name="sanitize-response"> <IgnoreUnresolvedVariables>true</IgnoreUnresolvedVariables> <DisplayName>Sanitize-Response-sample</DisplayName> <ModelArmor> <TemplateName>projects/$PROJECT/locations/$LOCATION/templates/$TEMPLATE NAME</TemplateName> </ModelArmor> <UserPromptSource>{jsonPath('$.contents[-1].parts[-1].text',request.content,true)}</UserPromptSource> <LLMResponseSource>{jsonPath('$.candidates[-1].content.parts[-1].text',response.content,true)}</LLMResponseSource> </SanitizeModelResponse> You can edit policy content in the Google Cloud console.

