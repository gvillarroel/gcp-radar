---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:05:29.874Z"
product_name: "Apigee Advanced API Security"
product_slug: "apigee-advanced-api-security"
feature_name: "Risk Assessment v2 SanitizeModelResponse policy support"
feature_slug: "risk-assessment-v2-sanitizemodelresponse-policy-support"
latest_feature_date: "2025-12-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies"
keywords:
  - "SanitizeModelResponse policy"
  - "SanitizeModelResponse"
  - "SMR policy"
  - "policy type"
  - "assessment policy"
  - "policy support"
  - "Risk Assessment v2"
---

# Risk Assessment v2 SanitizeModelResponse policy support

Product: Apigee Advanced API Security
Coverage: MEDIUM

## Step 02 Summary

Risk Assessment v2 now supports the SanitizeModelResponse policy in assessments.

## Extended Definition

The feature is support for configuring and using the `SanitizeModelResponse` policy in Apigee, which is shown as attachable to a target endpoint `Response PreFlow` to process LLM responses after model-armor handling. The policy is configured via attributes such as `TemplateName` and can be enabled or disabled with the `enabled` flag, indicating operational control over model response sanitization behavior. The provided documentation does not explicitly state “Risk Assessment v2,” so that mapping is implied rather than directly confirmed in the excerpt.

## Evidence Summary

The cited Google Cloud page documents how to use, configure, and disable the `SanitizeModelResponse` policy in Apigee Model Armor flows, but does not explicitly name Risk Assessment v2 in the provided text.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies)

## Supporting Pages

### Get started with Apigee Model Armor policies \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies)
- Source ID: `site-docs-root`
- Final score: 40
- Re-rank relevance: MODERATE
- Re-rank rationale: The page discusses using Model Armor policies to sanitize model responses from LLMs, but does not mention Risk Assessment v2 or how the policies apply specifically to assessments.

Evidence snippets:
- The following example shows how to use the {system.region.name} variable in the TemplateName attribute of the SanitizeModelResponse policy.
- The SanitizeModelResponse policy is attached with the default target endpoint Response PreFlow .
- This region name can be used to identify the correct Model Armor template to use for that instance For example: <SanitizeModelResponse async="false" continueOnError="false" enabled="true" name="sanitize-response"> <IgnoreUnresolvedVariables>true</IgnoreUnresolvedVariables> <DisplayName>Sanitize-Response-sample</DisplayName> <ModelArmor> <TemplateName>projects/$PROJECT/locations/ {system.region.name} /templates/$TEMPLATE NAME</TemplateName> </ModelArmor> <UserPromptSource>{jsonPath('$.contents[-1].parts[-1].text',request.content,true)}</UserPromptSource> <LLMResponseSource>{jsonPath('$.candidates[-1].content.parts[-1].text',response.content,true)}</LLMResponseSource> </SanitizeModelResponse> Model Armor response processing You can add additional processing logic after the Model Armor policy processes the LLM response.
- Disable a Model Armor policy To disable the Model Armor policy, set the enabled attribute to false , as shown in the following example: <SanitizeModelResponse async="false" continueOnError="false" enabled="false" name="sanitize-response"> <IgnoreUnresolvedVariables>true</IgnoreUnresolvedVariables> <DisplayName>Sanitize-Response-sample</DisplayName> <ModelArmor> <TemplateName>projects/$PROJECT/locations/$LOCATION/templates/$TEMPLATE NAME</TemplateName> </ModelArmor> <UserPromptSource>{jsonPath('$.contents[-1].parts[-1].text',request.content,true)}</UserPromptSource> <LLMResponseSource>{jsonPath('$.candidates[-1].content.parts[-1].text',response.content,true)}</LLMResponseSource> </SanitizeModelResponse> You can edit policy content in the Google Cloud console.

