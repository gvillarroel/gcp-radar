---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T01:24:42.837Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "Apigee SanitizeUserPrompt policy"
feature_slug: "apigee-sanitizeuserprompt-policy"
latest_feature_date: "2025-05-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies"
keywords:
  - "pre-LLM prompt filtering"
  - "LLM input safety"
  - "prompt sanitization"
  - "SUP policy"
  - "SanitizeUserPrompt policy"
  - "SanitizeUserPrompt"
  - "public preview"
---

# Apigee SanitizeUserPrompt policy

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

The SanitizeUserPrompt policy is available in public preview to sanitize prompts before sending them to large language models.

## Extended Definition

The Apigee SanitizeUserPrompt policy is an API proxy policy used in the request path (including the default RequestPreFlow) to process user prompt content before it is sent onward. In the documented example, the policy extracts a prompt value from the request (`UserPromptSource`) and sends it to Model Armor for processing using a specified template (`TemplateName`), with sanitization results used to trigger error handling (for example, via RaiseFault). The available evidence shows its behavior and configuration patterns, but does not explicitly confirm lifecycle status (such as public-preview status) in the provided snippets.

## Evidence Summary

The cited Google Cloud documentation page supplies example flow steps and policy XML showing SanitizeUserPrompt placement, configuration, and its role in Model Armor-based prompt sanitization.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies)

## Supporting Pages

### Get started with Apigee Model Armor policies \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies)
- Source ID: `site-docs-reference`
- Final score: 50
- Re-rank relevance: STRONG
- Re-rank rationale: The document focuses on protecting AI applications by sanitizing user prompts before they are sent to LLMs, which is the defining behavior of this policy.

Evidence snippets:
- To implement this example, add the SanitizeUserPrompt policy to your API proxy request flow.
- The SanitizeUserPrompt policy is attached with the default proxy endpoint RequestPreFlow .
- The following example shows the configuration for the ExtractVariables policy: <ExtractVariables enabled="true" continueOnError="false" async="false" name="ExtractFieldFromMaResponse"> <FaultRules/> <Properties/> <IgnoreUnresolvedVariables>false</IgnoreUnresolvedVariables> <VariablePrefix>sdp</VariablePrefix> <JSONPayload> <Variable type="string" name="info type"> <JSONPath>$.sanitizationResult.filterResults[1].sdpFilterResult.inspectResult.findings[0].infoType</JSONPath> </Variable> </JSONPayload> <Source>SanitizeUserPrompt.sanitize-response.response.content</Source> </ExtractVariables> Add a Model Armor response error code and error message with the RaiseFault policy You can add Model Armor template metadata to customize the error code and error message that is raised by the Model Armor policy.
- The sample policy shown below uses all default parameters: <SanitizeUserPrompt async="false" continueOnError="false" enabled="true" name="sanitize-response"> <IgnoreUnresolvedVariables>true</IgnoreUnresolvedVariables> <DisplayName>Sanitize-Response-sample</DisplayName> <ModelArmor> <TemplateName>projects/$PROJECT/locations/$LOCATION/templates/$TEMPLATE NAME</TemplateName> </ModelArmor> <UserPromptSource>{jsonPath('$.contents[-1].parts[-1].text',request.content,true)}</UserPromptSource> </SanitizeUserPrompt> When you call your API proxy, the input from the prompt is automatically extracted and passed on to Model Armor and processed according to the parameters of your Model Armor template.

