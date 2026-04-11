---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:05:29.875Z"
product_name: "Apigee Advanced API Security"
product_slug: "apigee-advanced-api-security"
feature_name: "Risk Assessment v2 SanitizeUserPrompt policy support"
feature_slug: "risk-assessment-v2-sanitizeuserprompt-policy-support"
latest_feature_date: "2025-12-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies"
keywords:
  - "SanitizeUserPrompt policy"
  - "SUP policy"
  - "SanitizeUserPrompt"
  - "policy type"
  - "assessment policy"
  - "policy support"
  - "Risk Assessment v2"
---

# Risk Assessment v2 SanitizeUserPrompt policy support

Product: Apigee Advanced API Security
Coverage: MEDIUM

## Step 02 Summary

Risk Assessment v2 now supports the SanitizeUserPrompt policy in assessments.

## Extended Definition

The SanitizeUserPrompt policy in Apigee’s Model Armor workflow is configured as a proxy policy (shown attached in the default request flow) with XML parameters so user prompt content is sent to Model Armor for processing against a selected template. The page also shows extracting sanitization results from the policy response and using RaiseFault to return a custom Model Armor error response. The provided excerpt does not explicitly state that this is in Risk Assessment v2, so that association is not directly evidenced here.

## Evidence Summary

The cited page provides practical configuration details for the SanitizeUserPrompt policy in Apigee API proxy flows, including attachment location, policy syntax, response field extraction, and fault handling.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies)

## Supporting Pages

### Get started with Apigee Model Armor policies \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies)
- Source ID: `site-docs-root`
- Final score: 40
- Re-rank relevance: MODERATE
- Re-rank rationale: It explicitly describes policy-based sanitization of user prompts for LLM traffic, yet it does not explicitly tie this capability to Risk Assessment v2 assessment workflows.

Evidence snippets:
- To implement this example, add the SanitizeUserPrompt policy to your API proxy request flow.
- The SanitizeUserPrompt policy is attached with the default proxy endpoint RequestPreFlow .
- The following example shows the configuration for the ExtractVariables policy: <ExtractVariables enabled="true" continueOnError="false" async="false" name="ExtractFieldFromMaResponse"> <FaultRules/> <Properties/> <IgnoreUnresolvedVariables>false</IgnoreUnresolvedVariables> <VariablePrefix>sdp</VariablePrefix> <JSONPayload> <Variable type="string" name="info type"> <JSONPath>$.sanitizationResult.filterResults[1].sdpFilterResult.inspectResult.findings[0].infoType</JSONPath> </Variable> </JSONPayload> <Source>SanitizeUserPrompt.sanitize-response.response.content</Source> </ExtractVariables> Add a Model Armor response error code and error message with the RaiseFault policy You can add Model Armor template metadata to customize the error code and error message that is raised by the Model Armor policy.
- The sample policy shown below uses all default parameters: <SanitizeUserPrompt async="false" continueOnError="false" enabled="true" name="sanitize-response"> <IgnoreUnresolvedVariables>true</IgnoreUnresolvedVariables> <DisplayName>Sanitize-Response-sample</DisplayName> <ModelArmor> <TemplateName>projects/$PROJECT/locations/$LOCATION/templates/$TEMPLATE NAME</TemplateName> </ModelArmor> <UserPromptSource>{jsonPath('$.contents[-1].parts[-1].text',request.content,true)}</UserPromptSource> </SanitizeUserPrompt> When you call your API proxy, the input from the prompt is automatically extracted and passed on to Model Armor and processed according to the parameters of your Model Armor template.

