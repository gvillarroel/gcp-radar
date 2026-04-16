---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:27:18.140Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "target.evaluated.url flow variable"
feature_slug: "target-evaluated-url-flow-variable"
latest_feature_date: "2025-10-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/reference/variables-reference"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/flow-configurations"
keywords:
  - "evaluated"
  - "cases"
  - "variable"
  - "where"
  - "provides"
  - "target"
  - "flow"
---

# target.evaluated.url flow variable

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

The target.evaluated.url flow variable provides the evaluated target URL for cases where the URL is dynamically constructed from user input.

## Extended Definition

The target.evaluated.url flow variable provides the evaluated target URL for cases where the URL is dynamically constructed from user input.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/reference/variables-reference](https://docs.cloud.google.com/apigee/docs/api-platform/reference/variables-reference)
- [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/flow-configurations](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/flow-configurations)

## Supporting Pages

### Flow variables reference \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/variables-reference](https://docs.cloud.google.com/apigee/docs/api-platform/reference/variables-reference)
- Source ID: `site-docs-reference-required-3`
- Final score: 427
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Target request target.email.address String Read only Email address of the TLS/SSL certificate presented by the target server Target response target.evaluated.url String Read/Write The URL configured in the TargetEndpoint XML file or the dynamic target URL (if target.evaluated.url is set during the message flow).
- Important: target.url and target.evaluated.url serve the same purpose except that target.evaluated.url should be used whenever the URL is dynamically constructed based on user input. target.url should not be used for dynamically constructed URLs based on user input.
- Important: target.evaluated.url and target.url serve the same purpose except that target.evaluated.url should be used whenever the URL is dynamically constructed based on user input.
- This section provides reference information about the following common Apigee flow variables: apigee is request apiproduct loadbalancing response apiproxy message route client messageid servicecallout current mint system environment organization target error proxy variable fault publishmessage graphql ratelimit Each of these variables is described in the sections that follow.

### Get started with the Apigee Extension Processor \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart)
- Source ID: `site-docs-reference`
- Final score: 84
- Re-rank relevance: N/A

Evidence snippets:
- Create the traffic extension using the following command to call the Extension Processor provisioning API: curl -X POST -H "Authorization: Bearer $TOKEN " \ https://apigee.googleapis.com/v1/organizations/ $ORG NAME /apimServiceExtensions?apimServiceExtensionId = TRAFFIC EXT NAME \ -H "Content-Type:application/json" -d \ '{ "extensionProcessor": " TARGET PROXY NAME " "lbForwardingRule": " LB FORWARDING RULE ", "network" : " NETWORK ", "networkConfigs": [ { "region": "$REGION", "subnet": "project/my-project/regions/$REGION/subnetworks/$SUBNET" } ], "extensions": [ { "name": " TARGET PROXY NAME ", "matchCondition": " CEL EXPRESSION ", "failOpen": FAIL OPEN , "hostname": " ENV GROUP HOSTNAME ", "supportedEvents": [ "REQUEST HEADERS", "RESPONSE HEADERS" ] } ] }' Where: TRAFFIC EXT NAME is is the name of the traffic extension you are creating.
- Update Multiple Attributes (Global LB) To update the extensions and extensionProcessor attributes simultaneously, use the following command: curl -X PATCH -H "Authorization: Bearer $TOKEN " \ https://apigee.googleapis.com/v1/organizations/ $ORG NAME /apimServiceExtensions/ TRAFFIC EXT NAME ?updateMask = extensions,extensionProcessor \ -H "Content-Type:application/json" -d \ '{ "extensions": [ { "name": " TARGET PROXY NAME ", "matchCondition": " NEW CEL EXPRESSION ", "failOpen": NEW FAIL OPEN , "hostname": " NEW ENV GROUP HOSTNAME ", "supportedEvents": [ "REQUEST HEADERS", "RESPONSE HEADERS" ] } ], "extensionProcessor": " NEW TARGET PROXY NAME " }' Where: TRAFFIC EXT NAME is the name of the Extension Processor traffic extension to update.
- Update extensions To update the extensions attributes, use the following command: curl -X PATCH -H "Authorization: Bearer $TOKEN " \ https://apigee.googleapis.com/v1/organizations/ $ORG NAME /apimServiceExtensions/ TRAFFIC EXT NAME ?updateMask = extensions \ -H "Content-Type:application/json" -d \ '{ "extensions": [ { "name": " TARGET PROXY NAME ", "matchCondition": " NEW CEL EXPRESSION ", "failOpen": NEW FAIL OPEN "hostname": " NEW ENV GROUP HOSTNAME ", "supportedEvents": [ "REQUEST HEADERS", "RESPONSE HEADERS" ] } ] }' Where: TRAFFIC EXT NAME is the name of the Extension Processor traffic extension to update.
- Update extensionProcessor To update the extensionProcessor attributes, use the following command: curl -X PATCH -H "Authorization: Bearer $TOKEN " \ https://apigee.googleapis.com/v1/organizations/ $ORG NAME /apimServiceExtensions/ TRAFFIC EXT NAME ?updateMask = extensionProcessor \ -H "Content-Type:application/json" -d \ '{ "extensionProcessor": " NEW TARGET PROXY NAME " }' Where: TRAFFIC EXT NAME is the name of the Extension Processor traffic extension to update.

### Conditional flows \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/flow-configurations](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/flow-configurations)
- Source ID: `site-docs-reference-required-3`
- Final score: 82
- Re-rank relevance: N/A

Evidence snippets:
- Next steps The following topics provide more detail about constructing conditions and using variables: Using flow variables Conditions with flow variables Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- App developers then access your resources by making requests to a URL in the form: http://myAPIs.myCo.com/weather/reports or: http://myAPIs.myCo.com/weather/forecasts In an API proxy, you can define a conditional flow that corresponds to a specific resource: <ProxyEndpoint name="default"> <PreFlow> <Request/> <Response/> </PreFlow> <Flows> <Flow name="Flow-1"> <Condition>(proxy.pathsuffix MatchesPath "/reports")</Condition> <Request/> <Response/> </Flow> <Flow name="Flow-2"> <Condition>(proxy.pathsuffix MatchesPath "/forecasts")</Condition> <Request/> <Response/> </Flow> </Flows> <PostFlow> <Request/> <Response/> </PostFlow> ... </ProxyEndpoint> In this example, you reference the proxy.pathsuffix flow variable, which contains the suffix portion of the URL used to access the API proxy.
- Example 1 The following ProxyEndpoint definition shows a conditional flow that is executed by the ProxyEndpoint on any HTTP GET request to the API proxy: <ProxyEndpoint name="default"> <PreFlow> <Request/> <Response/> </PreFlow> <Flows> <Flow name="Flow-1"> <Condition>request.verb="GET"</Condition> <Request/> <Response/> </Flow> </Flows> <PostFlow> <Request/> <Response/> </PostFlow> ... </ProxyEndpoint> Notice that the condition references the request.verb flow variable .
- Example 2 If your service backend provides weather reports and weather forecasts, your API might define two conditional flows that map to those API resources: /reports and /forecasts .

