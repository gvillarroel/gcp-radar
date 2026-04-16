---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:27:18.145Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "Apigee Extension Processor request and response body processing"
feature_slug: "apigee-extension-processor-request-and-response-body-processing"
latest_feature_date: "2025-05-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/understanding-handling-request-response-data"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy"
keywords:
  - "processing"
  - "body"
  - "extension"
  - "processor"
  - "response"
  - "request"
---

# Apigee Extension Processor request and response body processing

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

The Apigee Extension Processor can be configured to process request bodies, response bodies, or both in load balancer service extensions.

## Extended Definition

The Apigee Extension Processor can be configured to process request bodies, response bodies, or both in load balancer service extensions.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart)
- [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/understanding-handling-request-response-data](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/understanding-handling-request-response-data)
- [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy)

## Supporting Pages

### Get started with the Apigee Extension Processor \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart)
- Source ID: `site-docs-reference`
- Final score: 188
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Create the traffic extension using the following command to call the Extension Processor provisioning API: curl -X POST -H "Authorization: Bearer $TOKEN " \ https://apigee.googleapis.com/v1/organizations/ $ORG NAME /apimServiceExtensions?apimServiceExtensionId = TRAFFIC EXT NAME \ -H "Content-Type:application/json" -d \ '{ "extensionProcessor": " TARGET PROXY NAME " "lbForwardingRule": " LB FORWARDING RULE ", "network" : " NETWORK ", "networkConfigs": [ { "region": "$REGION", "subnet": "project/my-project/regions/$REGION/subnetworks/$SUBNET" } ], "extensions": [ { "name": " TARGET PROXY NAME ", "matchCondition": " CEL EXPRESSION ", "failOpen": FAIL OPEN , "hostname": " ENV GROUP HOSTNAME ", "supportedEvents": [ "REQUEST HEADERS", "RESPONSE HEADERS" ] } ] }' Where: TRAFFIC EXT NAME is is the name of the traffic extension you are creating.
- The response appears similar to the following: { "name" : "my-traffic-extension" , "extensionProcessor" : "my-extension-processor" , "lbForwardingRule" : "https://www.googleapis.com/compute/v1/projects/my-project/global/forwardingRules/my-forwarding-rule" , "network" : "projects/my-project/global/networks/my-network" , "networkConfigs" : [ { "region" : "us-west1" , "subnet" : "projects/my-project/regions/us-west1/subnetworks/my-subnet" } ] , "extensions" : [ { "name" : "organizations/my-org/apis/my-api-proxy" , "matchCondition" : "request.url.contains('1234567890')" , "failOpen" : true, "hostname" : "my-hostname.apigee.net" , "supportedEvents" : [ "REQUEST HEADERS" , "RESPONSE HEADERS" ] } ] } Update a traffic extension You can update the traffic extension using the updateMask parameter.
- Update Multiple Attributes (Global LB) To update the extensions and extensionProcessor attributes simultaneously, use the following command: curl -X PATCH -H "Authorization: Bearer $TOKEN " \ https://apigee.googleapis.com/v1/organizations/ $ORG NAME /apimServiceExtensions/ TRAFFIC EXT NAME ?updateMask = extensions,extensionProcessor \ -H "Content-Type:application/json" -d \ '{ "extensions": [ { "name": " TARGET PROXY NAME ", "matchCondition": " NEW CEL EXPRESSION ", "failOpen": NEW FAIL OPEN , "hostname": " NEW ENV GROUP HOSTNAME ", "supportedEvents": [ "REQUEST HEADERS", "RESPONSE HEADERS" ] } ], "extensionProcessor": " NEW TARGET PROXY NAME " }' Where: TRAFFIC EXT NAME is the name of the Extension Processor traffic extension to update.
- Update extensions To update the extensions attributes, use the following command: curl -X PATCH -H "Authorization: Bearer $TOKEN " \ https://apigee.googleapis.com/v1/organizations/ $ORG NAME /apimServiceExtensions/ TRAFFIC EXT NAME ?updateMask = extensions \ -H "Content-Type:application/json" -d \ '{ "extensions": [ { "name": " TARGET PROXY NAME ", "matchCondition": " NEW CEL EXPRESSION ", "failOpen": NEW FAIL OPEN "hostname": " NEW ENV GROUP HOSTNAME ", "supportedEvents": [ "REQUEST HEADERS", "RESPONSE HEADERS" ] } ] }' Where: TRAFFIC EXT NAME is the name of the Extension Processor traffic extension to update.

### Request and response variables \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/understanding-handling-request-response-data](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/understanding-handling-request-response-data)
- Source ID: `site-docs-reference-required-3`
- Final score: 143
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example, the following code in a JavaScript policy assembles the request URL from its parts: var req verb = context . getVariable ( 'request.verb' ); var req scheme = context . getVariable ( 'client.scheme' ); var req host = context . getVariable ( 'request.header.host' ); var req request uri = context . getVariable ( 'request.uri' ); var req url = req scheme + "://" + req host + req request uri ; The result of the concatenation might look like the following: https://www.example.com/sample Access response messages Using the variables that apply to the response message, policies may access message components including the header, the query parameters, and form parameters, the source IP address, the HTTP message body, and so on.
- Apigee parses the request as shown below and assigns parts of the request to flow variables: {request.verb} {proxy.basepath}/{proxy.pathsuffix}?{request.querystring} The flow variables are set with the following values: request.verb : GET proxy.basepath : /v1/weather proxy.pathsuffix : forecastrss request.querystring : w=12797282 Note : There are many different flow variables created during the processing of a request and response.
- As part of processing the response, the API proxy might want to modify the data before returning it to the requesting app.
- These parts include: Headers Query parameters Form parameters Source IP address HTTP message body In a normal flow, once the request has been processed, the proxy then sends the transformed request to the target.

### AssignMessage policy \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy)
- Source ID: `site-api-reference`
- Final score: 113
- Re-rank relevance: N/A

Evidence snippets:
- Send a request to your API proxy; for example: curl -vL https://ahamilton-eval-test.apigee.net/myproxy Optionally, you can pipe the results through a utility such as xmllint so that the XML is displayed in a nicely formatted structure: curl -vL https://ahamilton-eval-test.apigee.net/myproxy xmllint --format - The body of the response should look like the following: 42 test gopher 7: Get ServiceCallout response headers In the following example, let's say that a ServiceCallout policy is in the API proxy request, and the callout response contains multiple headers of the same name ( Set-Cookie ).
- You can also use a JavaScript policy in the TargetEndpoint to override the target.url . <Payload> (child of <Set> ) Defines the message body for a request or response, which is specified by the <AssignTo> element.
- If false , then the policy responds in one of two ways: If <AssignTo> can resolve the variable name to a request or response, then it continues processing.
- Required Type Complex object Parent Element N/A Child Elements <Add> <AssignTo> <AssignVariable> <Copy> <DisplayName> <IgnoreUnresolvedVariables> <Remove> <Set> The <AssignMessage> element uses the following syntax: Syntax The <AssignMessage> element uses the following syntax: < AssignMessage continueOnError = "[false true]" enabled = "[true false]" name = " POLICY NAME " > < !-- All AssignMessage child elements are optional -- > < Add > < FormParams > < FormParam name = " FORMPARAM NAME " > FORMPARAM VALUE < / FormParam > ... < / FormParams > < Headers > < Header name = " HEADER NAME " > HEADER VALUE < / Header > ... < / Headers > < QueryParams > < QueryParam name = " QUERYPARAM NAME " > QUERYPARAM VALUE < / QueryParam > ... < / QueryParams > < / Add > < AssignTo createNew = "[true false]" transport = "http" type = "[request response]" > DESTINATION VARIABLE NAME < / AssignTo > < AssignVariable > < Name> VARIABLE NAME < / Name > < PropertySetRef> SOURCE VARIABLE < / PropertySetRef > < Ref> SOURCE VARIABLE < / Ref > < ResourceURL> RESOURCE URL OR TEMPLATE < / ResourceURL > < Template> MESSAGE TEMPLATE < / Template > or < Template ref = ' TEMPLATE VARIABLE ' >< / Template > < Value> VARIABLE VALUE < / Value > < / AssignVariable > < Copy source = " VARIABLE NAME " > < !-- Can also be an empty array ( < FormParams / > ) --> < FormParams > < FormParam name = " FORMPARAM NAME " > FORMPARAM VALUE < / FormParam > ... < / FormParams > < !-- Copy all headers -- > < Headers / > < !-- or , copy specific headers by name -- > < Headers > < Header name = " HEADER NAME " / > < !-- or -- > < Header name = " HEADER NAME " > [ false true ] < / Header > ... < / Headers > < Path > [ false true ] < / Path > < Payload > [ false true ] < / Payload > < !-- Can also be an empty array ( < QueryParams / > ) --> < QueryParams > < QueryParam name = " QUERYPARAM NAME " > QUERYPARAM VALUE < / QueryParam > ... < / QueryParams > < StatusCode > [ false true ] < / StatusCode > < Verb > [ false true ] < / Verb > < Version > [ false true ] < / Version > < / Copy > < DisplayName> POLICY DISPLAY NAME < / DisplayName > < IgnoreUnresolvedVariables > [ true false ] < / IgnoreUnresolvedVariables > < !-- Can also be empty to remove everything from the message ( < Remove / > ) -- > < Remove > < !-- Remove all form parameters -- > < FormParams / > < !-- or , remove specific form parameters by name -- > < FormParams > < FormParam name = " FORMPARAM NAME " / > < !-- or -- > < FormParam name = " FORMPARAM NAME " > [ false true ] < / FormParam > ... < / FormParams > < !-- Remove all headers -- > < Headers / > < !-- or , remove specific headers by name -- > < Headers > < Header name = " HEADER NAME " / > < !-- or -- > < Header name = " HEADER NAME " > [ false true ] < / Header > ... < / Headers > < Payload > [ false true ] < / Payload > < !-- Remove all query parameters -- > < QueryParams / > < !-- or , remove specific query parameters by name -- > < QueryParams > < QueryParam name = " QUERYPARAM NAME " / > < !-- or -- > < QueryParam name = " QUERYPARAM NAME " > [ false true ] < / QueryParam > ... < / QueryParams > < / Remove > < Set > < Authentication > < HeaderName> HEADER NAME < / HeaderName > < !-- Use either GoogleAccessToken or GoogleIDToken -- > < GoogleAccessToken > < Scopes > < Scope> SCOPE < / Scope > ... < / Scopes > < / GoogleAccessToken > ----- or ----- < GoogleIDToken > < Audience ref = ' FLOW VARIABLE NAME > TARGET URL </Scope> < / GoogleAccessToken > < / Authentication > < FormParams > < FormParam name = " FORMPARAM NAME " > FORMPARAM VALUE < / FormParam > ... < / FormParams > < Headers > < Header name = " HEADER NAME " > HEADER VALUE < / Header > ... < / Headers > < Path> PATH < / Path > < Payload contentType = " CONTENT TYPE " variablePrefix = " PREFIX " variableSuffix = " SUFFIX " > NEW PAYLOAD < / Payload > < QueryParams > < QueryParam name = " QUERYPARAM NAME " > QUERYPARAM VALUE < / QueryParam > ... < / QueryParams > < StatusCode> HTTP STATUS CODE or { variable } < / StatusCode > < Verb > [ GET POST PUT PATCH DELETE { variable }] < / Verb > < Version > [ 1.0 1.1 { variable }] < / Verb > < / Set > < / AssignMessage > Default Policy The following example shows the default settings when you add an AssignMessage policy to your flow in the Apigee UI.

