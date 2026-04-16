---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T18:40:29.734Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "Apigee PublishMessage policy request/response content source"
feature_slug: "apigee-publishmessage-policy-request-response-content-source"
latest_feature_date: "2025-05-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-attach-policy"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart"
keywords:
  - "publishmessage"
  - "source"
  - "content"
  - "response"
  - "request"
  - "policy"
---

# Apigee PublishMessage policy request/response content source

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

The PublishMessage policy now supports using request or response message content as the source for data written to Pub/Sub.

## Extended Definition

The PublishMessage policy now supports using request or response message content as the source for data written to Pub/Sub.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-attach-policy](https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-attach-policy)
- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies)
- [https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart)

## Supporting Pages

### Step 6: Attach a policy \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-attach-policy](https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-attach-policy)
- Source ID: `site-docs-reference-2`
- Final score: 147
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Add a <Step> element that references the XMLtoJSON policy to the <Response> flow in the API proxy <PreFlow> : <ProxyEndpoint name="default"> <PreFlow name="PreFlow"> <Request> <Step> <Name>verify-api-key</Name> </Step> <Step> <Name>remove-query-param-apikey</Name> </Step> <Step> <Name>impose-quota</Name> </Step> </Request> <Response> <Step> <Name>XMLtoJSON</Name> </Step> </Response> </PreFlow> ... </ProxyEndpoint> Save your changes to the file.
- Note : You'll attach the policy to the response flow in the API proxy PreFlow in the next step. <?xml version="1.0" encoding="UTF-8" standalone="yes"?> <XMLToJSON async="false" continueOnError="false" enabled="true" name="XMLtoJSON"> <DisplayName>XMLtoJSON</DisplayName> <Properties/> <Format>yahoo</Format> <OutputVariable> response </OutputVariable> <Source> response </Source> </XMLToJSON> Attach the policy to the default proxy endpoint.
- Home Documentation Application development Apigee Guides Send feedback Step 6: Attach a policy Stay organized with collections Save and categorize content based on your preferences.
- In the following steps, you create a new policy and attach it to your API proxy in the PreFlow response flow to ensure the policy is applied before any other processing takes place.

### Get started with the Apigee Extension Processor \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart)
- Source ID: `site-docs-reference-2`
- Final score: 141
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Create the traffic extension using the following command to call the Extension Processor provisioning API: curl -X POST -H "Authorization: Bearer $TOKEN " \ https://apigee.googleapis.com/v1/organizations/ $ORG NAME /apimServiceExtensions?apimServiceExtensionId = TRAFFIC EXT NAME \ -H "Content-Type:application/json" -d \ '{ "extensionProcessor": " TARGET PROXY NAME " "lbForwardingRule": " LB FORWARDING RULE ", "network" : " NETWORK ", "networkConfigs": [ { "region": "$REGION", "subnet": "project/my-project/regions/$REGION/subnetworks/$SUBNET" } ], "extensions": [ { "name": " TARGET PROXY NAME ", "matchCondition": " CEL EXPRESSION ", "failOpen": FAIL OPEN , "hostname": " ENV GROUP HOSTNAME ", "supportedEvents": [ "REQUEST HEADERS", "RESPONSE HEADERS" ] } ] }' Where: TRAFFIC EXT NAME is is the name of the traffic extension you are creating.
- Update Multiple Attributes (Global LB) To update the extensions and extensionProcessor attributes simultaneously, use the following command: curl -X PATCH -H "Authorization: Bearer $TOKEN " \ https://apigee.googleapis.com/v1/organizations/ $ORG NAME /apimServiceExtensions/ TRAFFIC EXT NAME ?updateMask = extensions,extensionProcessor \ -H "Content-Type:application/json" -d \ '{ "extensions": [ { "name": " TARGET PROXY NAME ", "matchCondition": " NEW CEL EXPRESSION ", "failOpen": NEW FAIL OPEN , "hostname": " NEW ENV GROUP HOSTNAME ", "supportedEvents": [ "REQUEST HEADERS", "RESPONSE HEADERS" ] } ], "extensionProcessor": " NEW TARGET PROXY NAME " }' Where: TRAFFIC EXT NAME is the name of the Extension Processor traffic extension to update.
- Update extensions To update the extensions attributes, use the following command: curl -X PATCH -H "Authorization: Bearer $TOKEN " \ https://apigee.googleapis.com/v1/organizations/ $ORG NAME /apimServiceExtensions/ TRAFFIC EXT NAME ?updateMask = extensions \ -H "Content-Type:application/json" -d \ '{ "extensions": [ { "name": " TARGET PROXY NAME ", "matchCondition": " NEW CEL EXPRESSION ", "failOpen": NEW FAIL OPEN "hostname": " NEW ENV GROUP HOSTNAME ", "supportedEvents": [ "REQUEST HEADERS", "RESPONSE HEADERS" ] } ] }' Where: TRAFFIC EXT NAME is the name of the Extension Processor traffic extension to update.
- The XML specification for the proxy should appear similar to the following: <?xml version="1.0" encoding="UTF-8" standalone="yes"?> <APIProxy revision="1" name="extproc-sample"> <DisplayName/> <Description/> <CreatedAt>1739581781912</CreatedAt> <LastModifiedAt>1739582447868</LastModifiedAt> <BasePaths>/</BasePaths> <ProxyEndpoints> <ProxyEndpoint>default</ProxyEndpoint> </ProxyEndpoints> </APIProxy> Configure the EventFlow in the proxy: <?xml version="1.0" encoding="UTF-8" standalone="yes"?> <APIProxy revision="1" name="extproc-sample"> <DisplayName/> <Description/> <CreatedAt>1739581781912</CreatedAt> <LastModifiedAt>1739582447868</LastModifiedAt> <BasePaths>/</BasePaths> <ProxyEndpoints> <ProxyEndpoint>default</ProxyEndpoint> <EventFlow name="EventFlow" content-type="text/event-stream"> <Response/> </EventFlow> <HTTPProxyConnection> <Properties/> <URL>https://httpbin.org/sse</URL> </HTTPProxyConnection> </ProxyEndpoints> </APIProxy> Follow the steps in Deploy an API proxy to deploy the proxy to the environment you created earlier.

### Get started with Apigee Model Armor policies \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies)
- Source ID: `site-docs-reference-2`
- Final score: 137
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This region name can be used to identify the correct Model Armor template to use for that instance For example: <SanitizeModelResponse async="false" continueOnError="false" enabled="true" name="sanitize-response"> <IgnoreUnresolvedVariables>true</IgnoreUnresolvedVariables> <DisplayName>Sanitize-Response-sample</DisplayName> <ModelArmor> <TemplateName>projects/$PROJECT/locations/ {system.region.name} /templates/$TEMPLATE NAME</TemplateName> </ModelArmor> <UserPromptSource>{jsonPath('$.contents[-1].parts[-1].text',request.content,true)}</UserPromptSource> <LLMResponseSource>{jsonPath('$.candidates[-1].content.parts[-1].text',response.content,true)}</LLMResponseSource> </SanitizeModelResponse> Model Armor response processing You can add additional processing logic after the Model Armor policy processes the LLM response.
- Disable a Model Armor policy To disable the Model Armor policy, set the enabled attribute to false , as shown in the following example: <SanitizeModelResponse async="false" continueOnError="false" enabled="false" name="sanitize-response"> <IgnoreUnresolvedVariables>true</IgnoreUnresolvedVariables> <DisplayName>Sanitize-Response-sample</DisplayName> <ModelArmor> <TemplateName>projects/$PROJECT/locations/$LOCATION/templates/$TEMPLATE NAME</TemplateName> </ModelArmor> <UserPromptSource>{jsonPath('$.contents[-1].parts[-1].text',request.content,true)}</UserPromptSource> <LLMResponseSource>{jsonPath('$.candidates[-1].content.parts[-1].text',response.content,true)}</LLMResponseSource> </SanitizeModelResponse> You can edit policy content in the Google Cloud console.
- The sample policy shown below uses all default parameters: <SanitizeUserPrompt async="false" continueOnError="false" enabled="true" name="sanitize-response"> <IgnoreUnresolvedVariables>true</IgnoreUnresolvedVariables> <DisplayName>Sanitize-Response-sample</DisplayName> <ModelArmor> <TemplateName>projects/$PROJECT/locations/$LOCATION/templates/$TEMPLATE NAME</TemplateName> </ModelArmor> <UserPromptSource>{jsonPath('$.contents[-1].parts[-1].text',request.content,true)}</UserPromptSource> </SanitizeUserPrompt> When you call your API proxy, the input from the prompt is automatically extracted and passed on to Model Armor and processed according to the parameters of your Model Armor template.
- The following example shows the configuration for the ExtractVariables policy: <ExtractVariables enabled="true" continueOnError="false" async="false" name="ExtractFieldFromMaResponse"> <FaultRules/> <Properties/> <IgnoreUnresolvedVariables>false</IgnoreUnresolvedVariables> <VariablePrefix>sdp</VariablePrefix> <JSONPayload> <Variable type="string" name="info type"> <JSONPath>$.sanitizationResult.filterResults[1].sdpFilterResult.inspectResult.findings[0].infoType</JSONPath> </Variable> </JSONPayload> <Source>SanitizeUserPrompt.sanitize-response.response.content</Source> </ExtractVariables> Add a Model Armor response error code and error message with the RaiseFault policy You can add Model Armor template metadata to customize the error code and error message that is raised by the Model Armor policy.

