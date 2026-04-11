---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T01:24:42.832Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "SanitizeUserPrompt policy"
feature_slug: "sanitizeuserprompt-policy"
latest_feature_date: "2025-09-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies"
keywords:
  - "prompt injection mitigation"
  - "jailbreak prevention"
  - "user prompt sanitization"
  - "LLM input sanitization"
  - "SUP policy"
  - "policy for model prompts"
  - "SanitizeUserPrompt policy"
  - "SanitizeUserPrompt"
---

# SanitizeUserPrompt policy

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

SanitizeUserPrompt policy is generally available and sanitizes user prompts to mitigate LLM prompt-injection and jailbreak risks.

## Extended Definition

The SanitizeUserPrompt policy in Apigee X is an API proxy policy that is added to the proxy request flow (often the default RequestPreFlow) to pass user prompt input to a Model Armor template for sanitization processing. In the documented sample usage, the policy is configured with fields such as TemplateName and UserPromptSource, and the prompt is automatically extracted from the incoming request and processed according to the template’s parameters before continuing the flow.

## Evidence Summary

The cited tutorial page provides concrete configuration and flow examples showing how SanitizeUserPrompt is attached and how it forwards extracted user prompt input to Model Armor for processing.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies)

## Supporting Pages

### Get started with Apigee Model Armor policies \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies)
- Source ID: `site-docs-reference`
- Final score: 50
- Re-rank relevance: STRONG
- Re-rank rationale: The page details prompt sanitization to mitigate prompt-injection and jailbreak risks, directly supporting this policy’s purpose.

Evidence snippets:
- To implement this example, add the SanitizeUserPrompt policy to your API proxy request flow.
- The SanitizeUserPrompt policy is attached with the default proxy endpoint RequestPreFlow .
- The following example shows the configuration for the ExtractVariables policy: <ExtractVariables enabled="true" continueOnError="false" async="false" name="ExtractFieldFromMaResponse"> <FaultRules/> <Properties/> <IgnoreUnresolvedVariables>false</IgnoreUnresolvedVariables> <VariablePrefix>sdp</VariablePrefix> <JSONPayload> <Variable type="string" name="info type"> <JSONPath>$.sanitizationResult.filterResults[1].sdpFilterResult.inspectResult.findings[0].infoType</JSONPath> </Variable> </JSONPayload> <Source>SanitizeUserPrompt.sanitize-response.response.content</Source> </ExtractVariables> Add a Model Armor response error code and error message with the RaiseFault policy You can add Model Armor template metadata to customize the error code and error message that is raised by the Model Armor policy.
- The sample policy shown below uses all default parameters: <SanitizeUserPrompt async="false" continueOnError="false" enabled="true" name="sanitize-response"> <IgnoreUnresolvedVariables>true</IgnoreUnresolvedVariables> <DisplayName>Sanitize-Response-sample</DisplayName> <ModelArmor> <TemplateName>projects/$PROJECT/locations/$LOCATION/templates/$TEMPLATE NAME</TemplateName> </ModelArmor> <UserPromptSource>{jsonPath('$.contents[-1].parts[-1].text',request.content,true)}</UserPromptSource> </SanitizeUserPrompt> When you call your API proxy, the input from the prompt is automatically extracted and passed on to Model Armor and processed according to the parameters of your Model Armor template.

