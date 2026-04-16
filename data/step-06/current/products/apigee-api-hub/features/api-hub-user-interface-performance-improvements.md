---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:45:01.545Z"
product_name: "Apigee API hub"
product_slug: "apigee-api-hub"
feature_name: "API hub user interface performance improvements"
feature_slug: "api-hub-user-interface-performance-improvements"
latest_feature_date: "2024-09-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/get-started/what-apigee"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies"
  - "https://docs.cloud.google.com/apigee/docs/release/known-issues"
keywords:
  - "improvements"
  - "included"
  - "performance"
  - "interface"
  - "user"
---

# API hub user interface performance improvements

Product: Apigee API hub
Coverage: MEDIUM

## Step 02 Summary

API hub included performance improvements to its user interface.

## Extended Definition

API hub included performance improvements to its user interface.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/get-started/what-apigee](https://docs.cloud.google.com/apigee/docs/api-platform/get-started/what-apigee)
- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies)
- [https://docs.cloud.google.com/apigee/docs/release/known-issues](https://docs.cloud.google.com/apigee/docs/release/known-issues)

## Supporting Pages

### What is Apigee? \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/get-started/what-apigee](https://docs.cloud.google.com/apigee/docs/api-platform/get-started/what-apigee)
- Source ID: `site-docs-reference`
- Final score: 47
- Re-rank relevance: N/A

Evidence snippets:
- Apigee offers high performance API proxies to create a consistent, reliable interface for your backend services.
- Apigee is designed to benefit two key types of users and the unique API management challenges they face: API producers : API producers build and manage the APIs that expose their backend services.
- Maintaining a consistent API interface allows API producers to implement backend service changes without disruption to API consumers.
- API reliability Apigee provides a consistent interface for API management and consumption.

### Apigee known issues \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/release/known-issues](https://docs.cloud.google.com/apigee/docs/release/known-issues)
- Source ID: `site-docs-reference`
- Final score: 44
- Re-rank relevance: N/A

Evidence snippets:
- To distinguish actual spikes in requests vs. this issue, please consult the API Analytics page (specifically the Proxy Performance and Target Performance pages) Affected Metrics: apigee.googleapis.com/proxyv2/request count apigee.googleapis.com/proxyv2/response count apigee.googleapis.com/targetv2/request count apigee.googleapis.com/targetv2/response count New metrics You can use the new metrics to avoid this issue.
- 310384001 hybrid 1.11.0 OPEN Cert validation failures may return a 502 instead of a 503 error response when users add the tag <Enforce>true</Enforce> in the target <SSLInfo> block for default validation of TLS target endpoint certificates.
- If a user provides an invalid service account to the UpdateControlPlaneAccess api, the operation goes on a retry loop effectively locking the organization from invoking the API until the operation times out.
- When an authenticated outbound proxy is configured using httpProxy.username and httpProxy.password , Apigee Hybrid Helm charts generate malformed http proxy and https proxy strings.

### Get started with Apigee Model Armor policies \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies)
- Source ID: `site-docs-reference-required-3`
- Final score: 44
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following sections provide suggested user prompts to include in the API requests to test for the following conditions included in your Model Armor template: Responsible AI (RAI) match Malicious URL detection Prompt injection detection Each example includes the expected response if the Model Armor policies are working as intended.
- Create a Model Armor template Create a Model Armor template for sanitizing user prompts and LLM responses: gcloud model-armor templates create --location $LOCATION TEMPLATE NAME --rai-settings-filters = '[{ "filterType":"HATE SPEECH", "confidenceLevel": "MEDIUM AND ABOVE" },{ "filterType": "HARASSMENT", "confidenceLevel": "MEDIUM AND ABOVE" },{ "filterType": "SEXUALLY EXPLICIT", "confidenceLevel": "MEDIUM AND ABOVE" }]' --basic-config-filter-enforcement = enabled --pi-and-jailbreak-filter-settings-enforcement = enabled --pi-and-jailbreak-filter-settings-confidence-level = LOW AND ABOVE --malicious-uri-filter-settings-enforcement = enabled --template-metadata-custom-llm-response-safety-error-code = 798 --template-metadata-custom-llm-response-safety-error-message = "test template llm response evaluation failed" --template-metadata-custom-prompt-safety-error-code = 799 --template-metadata-custom-prompt-safety-error-message = "test template prompt evaluation failed" --template-metadata-ignore-partial-invocation-failures --template-metadata-log-operations --template-metadata-log-sanitize-operations Substitute TEMPLATE NAME with the name of the template you want to create.
- This region name can be used to identify the correct Model Armor template to use for that instance For example: <SanitizeModelResponse async="false" continueOnError="false" enabled="true" name="sanitize-response"> <IgnoreUnresolvedVariables>true</IgnoreUnresolvedVariables> <DisplayName>Sanitize-Response-sample</DisplayName> <ModelArmor> <TemplateName>projects/$PROJECT/locations/ {system.region.name} /templates/$TEMPLATE NAME</TemplateName> </ModelArmor> <UserPromptSource>{jsonPath('$.contents[-1].parts[-1].text',request.content,true)}</UserPromptSource> <LLMResponseSource>{jsonPath('$.candidates[-1].content.parts[-1].text',response.content,true)}</LLMResponseSource> </SanitizeModelResponse> Model Armor response processing You can add additional processing logic after the Model Armor policy processes the LLM response.
- The following example shows the configuration for the ExtractVariables policy: <ExtractVariables enabled="true" continueOnError="false" async="false" name="ExtractFieldFromMaResponse"> <FaultRules/> <Properties/> <IgnoreUnresolvedVariables>false</IgnoreUnresolvedVariables> <VariablePrefix>sdp</VariablePrefix> <JSONPayload> <Variable type="string" name="info type"> <JSONPath>$.sanitizationResult.filterResults[1].sdpFilterResult.inspectResult.findings[0].infoType</JSONPath> </Variable> </JSONPayload> <Source>SanitizeUserPrompt.sanitize-response.response.content</Source> </ExtractVariables> Add a Model Armor response error code and error message with the RaiseFault policy You can add Model Armor template metadata to customize the error code and error message that is raised by the Model Armor policy.

