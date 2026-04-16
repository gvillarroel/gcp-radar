---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:27:18.182Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "VS Code emulator service account support"
feature_slug: "vs-code-emulator-service-account-support"
latest_feature_date: "2023-04-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/develop/server-sent-events"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/understanding-apis-and-api-proxies"
keywords:
  - "account"
  - "emulator"
  - "testing"
  - "proxies"
  - "supports"
  - "code"
---

# VS Code emulator service account support

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

Apigee in VS Code supports testing API proxies in the Apigee Emulator with service account-based authentication.

## Extended Definition

Apigee in VS Code supports testing API proxies in the Apigee Emulator with service account-based authentication.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/develop/server-sent-events](https://docs.cloud.google.com/apigee/docs/api-platform/develop/server-sent-events)
- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies)
- [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/understanding-apis-and-api-proxies](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/understanding-apis-and-api-proxies)

## Supporting Pages

### Streaming server-sent events \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/develop/server-sent-events](https://docs.cloud.google.com/apigee/docs/api-platform/develop/server-sent-events)
- Source ID: `site-docs-reference-required-3`
- Final score: 99
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- An EventFlow can be placed inside a TargetEndpoint or a ProxyEndpoint definition as shown in the following code samples: <ProxyEndpoint> <ProxyEndpoint name="default"> <Description/> <FaultRules/> <PreFlow name="PreFlow"> <Request/> <Response/> </PreFlow> <PostFlow name="PostFlow"> <Request/> <Response/> </PostFlow> <Flows/> <EventFlow name="EventFlow" content-type="text/event-stream"> <Response/> </EventFlow> <HTTPProxyConnection> <Properties/> <URL>https://httpbin.org/sse</URL> </HTTPProxyConnection> </ProxyEndpoint> <TargetEndpoint> <TargetEndpoint name="default"> <Description/> <FaultRules/> <PreFlow name="PreFlow"> <Request/> <Response/> </PreFlow> <PostFlow name="PostFlow"> <Request/> <Response/> </PostFlow> <Flows/> <EventFlow name="EventFlow" content-type="text/event-stream"> <Response/> </EventFlow> <HTTPTargetConnection> <Properties/> <URL>https://httpbin.org/sse</URL> </HTTPTargetConnection> </TargetEndpoint> Note: If you add multiple EventFlow stanzas to a endpoint, only the last one in the endpoint definition is executed.
- The following examples show an EventFlow with a conditional RaiseFault policy step added: <ProxyEndpoint> < ProxyEndpoint name = "default" > < EventFlow content - type = "text/event-stream" > < Response > < Step > < Name>Raise - Fault - Cred - Invalid < / Name > < Condition>fault . name equals "invalid access token" < / Condition > < / Step > < / Response > < / EventFlow > < HTTPProxyConnection > < / ProxyEndpoint >< / pre > <TargetEndpoint> < TargetEndpoint name = "default" > < EventFlow content - type = "text/event-stream" > < Response > < Step > < Name>Raise - Fault - Cred - Invalid < / Name > < Condition>fault . name equals "invalid access token" < / Condition > < / Step > < / Response > < / EventFlow > < HTTPTargetConnection > < / TargetEndpoint >< / pre > For more EventFlow code examples, see the EventFlow use cases and examples section.
- Putting the JavaScript code in a resource file is another option for configuring the policy. < ? xml version = "1.0" encoding = "UTF-8" standalone = "yes" ? > < Javascript continueOnError = "false" enabled = "true" timeLimit = "200" name = "js-update-resp" > < DisplayName>js - update - resp < / DisplayName > < Properties / > < Source > var event = JSON . parse ( context . getVariable ( "response.event.current.content" )); event . modelVersion = null ; context . setVariable ( "response.event.current.content" , JSON . stringify ( event )); < / Source > < / Javascript > Add the JavaScript policy to the EventFlow of the proxy.
- Putting the JavaScript code in a resource file is another option for configuring the policy. < Javascript continueOnError = "false" enabled = "true" timeLimit = "200" name = "js-filter-resp" > < DisplayName>js - filter - resp < / DisplayName > < Properties / > < Source > var event = JSON . parse ( context . getVariable ( "response.event.current.content" )); if ( "error" in event ){ // Do not send event to customer context . setVariable ( "response.event.current.content" , "" ); } < / Source > < / Javascript > Add the JavaScript policy to the EventFlow of the proxy.

### Get started with Apigee Model Armor policies \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies)
- Source ID: `site-docs-reference`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- Required roles To get the permissions that you need to create and use the Apigee Model Armor policies, ask your administrator to grant you the following IAM roles on the service account you use to deploy Apigee proxies: Model Armor User ( roles/modelarmor.user ) Model Armor Viewer ( roles/modelarmor.viewer ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Create a Model Armor template Create a Model Armor template for sanitizing user prompts and LLM responses: gcloud model-armor templates create --location $LOCATION TEMPLATE NAME --rai-settings-filters = '[{ "filterType":"HATE SPEECH", "confidenceLevel": "MEDIUM AND ABOVE" },{ "filterType": "HARASSMENT", "confidenceLevel": "MEDIUM AND ABOVE" },{ "filterType": "SEXUALLY EXPLICIT", "confidenceLevel": "MEDIUM AND ABOVE" }]' --basic-config-filter-enforcement = enabled --pi-and-jailbreak-filter-settings-enforcement = enabled --pi-and-jailbreak-filter-settings-confidence-level = LOW AND ABOVE --malicious-uri-filter-settings-enforcement = enabled --template-metadata-custom-llm-response-safety-error-code = 798 --template-metadata-custom-llm-response-safety-error-message = "test template llm response evaluation failed" --template-metadata-custom-prompt-safety-error-code = 799 --template-metadata-custom-prompt-safety-error-message = "test template prompt evaluation failed" --template-metadata-ignore-partial-invocation-failures --template-metadata-log-operations --template-metadata-log-sanitize-operations Substitute TEMPLATE NAME with the name of the template you want to create.
- The following example shows the configuration for the ExtractVariables policy: <ExtractVariables enabled="true" continueOnError="false" async="false" name="ExtractFieldFromMaResponse"> <FaultRules/> <Properties/> <IgnoreUnresolvedVariables>false</IgnoreUnresolvedVariables> <VariablePrefix>sdp</VariablePrefix> <JSONPayload> <Variable type="string" name="info type"> <JSONPath>$.sanitizationResult.filterResults[1].sdpFilterResult.inspectResult.findings[0].infoType</JSONPath> </Variable> </JSONPayload> <Source>SanitizeUserPrompt.sanitize-response.response.content</Source> </ExtractVariables> Add a Model Armor response error code and error message with the RaiseFault policy You can add Model Armor template metadata to customize the error code and error message that is raised by the Model Armor policy.
- The following example shows the configuration for the RaiseFault policy: <RaiseFault name="ModelArmorTemplateErrorCodeHandler"> <IgnoreUnresolvedVariables>true</IgnoreUnresolvedVariables> <FaultResponse> <Set> <Payload contentType="application/json"> <ErrorResponse> <Error> <Status>{sanitizationMetadata.errorCode}</Status> <Message>{sanitizationMetadata.errorMessage}</Message> </Error> </ErrorResponse> </Payload> <StatusCode>401</StatusCode> <ReasonPhrase>Invalid API Key</ReasonPhrase> </Set> </FaultResponse> </RaiseFault> Once the new policy is added and the API proxy is deployed, requests to the proxy that trigger the error specified in the Model Armor template metadata will raise a fault with the error code and error message defined in the RaiseFault policy.

### Understanding APIs and API proxies \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/understanding-apis-and-api-proxies](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/understanding-apis-and-api-proxies)
- Source ID: `site-docs-reference-required-3`
- Final score: 88
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can visualize API proxies as shown by the graphic below: API proxy types Apigee supports two proxy types: Standard proxies include only standard policies .
- API proxies decouple the app-facing API from your backend services, shielding those apps from backend code changes.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
- Learn more API proxy configuration reference API development lifecycle Key points of API proxy development Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

