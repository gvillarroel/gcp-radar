---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:27:18.139Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "API product enhanced validation"
feature_slug: "api-product-enhanced-validation"
latest_feature_date: "2025-10-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart"
keywords:
  - "validation"
  - "referenced"
  - "enhanced"
  - "verifies"
  - "against"
  - "resources"
  - "environment"
  - "proxy"
---

# API product enhanced validation

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

Enhanced API product validation verifies referenced proxy and environment resources against the organization during create and update operations.

## Extended Definition

Enhanced API product validation verifies referenced proxy and environment resources against the organization during create and update operations.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference](https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference)
- [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy)
- [https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart)

## Supporting Pages

### API proxy configuration reference \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference](https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference)
- Source ID: `site-api-reference`
- Final score: 167
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Resources can be stored in an API proxy, an environment, or an organization.
- For example, in the following Flow configuration, any inbound request that does not include the path suffix /first or /second will cause the ThirdFlow to execute, enforcing the policy called Return404 . <Flows> <Flow name="FirstFlow"> <Condition>proxy.pathsuffix MatchesPath "/first"</Condition> <Request> <Step><Name>FirstPolicy</Name></Step> </Request> </Flow> <Flow name="SecondFlow"> <Condition>proxy.pathsuffix MatchesPath "/second"</Condition> <Request> <Step><Name>FirstPolicy</Name></Step> <Step><Name>SecondPolicy</Name></Step> </Request> </Flow> <Flow name="ThirdFlow"> <Request> <Step><Name>Return404</Name></Step> </Request> </Flow> </Flows> Resources "Resources" (resource files for use in API proxies) are scripts, code, and XSL transformations that can be attached to Flows using policies.
- For example, if your proxy connects to two potentially different targets (a test target and a production target), you can have your API proxy programmatically detect which environment it's calling and dynamically set references to the appropriate keystore and truststore.
- N/A No Resources A list of resources (JavaScript, Python, Java, XSLT) in the /resources directory of this API proxy.

### AssignMessage policy \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy)
- Source ID: `site-api-reference`
- Final score: 109
- Re-rank relevance: N/A

Evidence snippets:
- The second policy uses the <AssignVariable> element to read in the values and creates three new variables: < !-- Policy #2: Get variables from the request -- > < AssignMessage continueOnError = "false" enabled = "true" name = "get-variables" > < AssignTo createNew = "false" transport = "http" type = "request" / > < !-- Get the value of myAppSecret and create a new variable , secret -- > < AssignVariable > < Name>secret < / Name > < Ref>myAppSecret < / Ref > < Value>0 < / Value > < / AssignVariable > < !-- Get the value of config . environment and create a new variable , environment -- > < AssignVariable > < Name>environment < / Name > < Ref>config . environment < / Ref > < Value>default < / Value > < / AssignVariable > < !-- Get the value of config . protocol and create a new variable , protocol -- > < AssignVariable > < Name>protocol < / Name > < Ref>config . protocol < / Ref > < Value>default < / Value > < / AssignVariable > < IgnoreUnresolvedVariables>true < / IgnoreUnresolvedVariables > < / AssignMessage > In the second policy, the <Ref> element references the source variable, and <Name> elements specify the names of the new variables.
- Any of these are valid: jsc : // my - js - file . js wsdl : // { variable - goes - here } { variable - goes - here } Example 1 The following example assigns the value of a JSON resource, loaded into the proxy in the jsc folder, into the flow variable assigned-variable : < AssignMessage name = 'AM-From-ResourceURL-Proxy-JSC' > < AssignVariable > < Name>assigned - variable < / Name > < ResourceURL>jsc : // settings . json < / ResourceURL > < / AssignVariable > < / AssignMessage > Example 2 The following example assigns the value of an OpenAPI Spec resource, loaded into the proxy in the oas folder, into the flow variable assigned-variable , and then sets that value as the Payload in the response body: < AssignMessage name = 'AM-Response' > < AssignVariable > < Name>assigned - variable < / Name > < ResourceURL>oas : // Fulfillment . yaml < / ResourceURL > < / AssignVariable > < Set > < Payload contentType = 'application/yaml' > { assigned - variable } < / Payload > < / Set > < / AssignMessage > <Template> (child of <AssignVariable> ) Specifies a message template .
- Optional Type Boolean Parent Element <Copy> Child Elements None The <Version> element uses the following syntax: Syntax <AssignMessage continueOnError="[false true]" enabled="[true false]" name=" POLICY NAME " > <Copy source=" VARIABLE NAME "> <Version>[false true]</Version> </Copy> </AssignMessage> Example 1 The following example sets <Version> to true on the request, which copies the version from the default request object to a new, custom request object: < AssignMessage name = "copy-version-1" > < Copy source = "request" > < Version>true < / Version > < / Copy > < AssignTo createNew = "true" transport = "http" type = "request" > MyCustomRequest < / AssignTo > < / AssignMessage > You can use <Copy> / <Version> only when the following criteria are met: The Message type for both source and destination is request <DisplayName> Use in addition to the name attribute to label the policy in the management UI proxy editor with a different, more natural-sounding name.
- 6: Set/get variables The following example uses three AssignMessage policies: Creates three flow variables in the request, with static values Gets the flow variables dynamically in a second policy in the request flow Sets them in the payload of the response < !-- Policy #1: Set variables in the request -- > < AssignMessage name = "AM-set-variables" > < !-- Create a variable named myAppSecret -- > < AssignVariable > < Name>myAppSecret < / Name > < Value>42 < / Value > < / AssignVariable > < !-- Create a variable named config . environment -- > < AssignVariable > < Name>config . environment < / Name > < Value>test < / Value > < / AssignVariable > < !-- Create a variable named config . protocol -- > < AssignVariable > < Name>config . protocol < / Name > < Value>gopher < / Value > < / AssignVariable > < / AssignMessage > In the first policy, the <AssignVariable> element creates and sets three variables in the request.

### Get started with the Apigee Extension Processor \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart)
- Source ID: `site-docs-reference`
- Final score: 103
- Re-rank relevance: N/A

Evidence snippets:
- The XML specification for the proxy should appear similar to the following: <?xml version="1.0" encoding="UTF-8" standalone="yes"?> <APIProxy revision="1" name="extproc-sample"> <DisplayName/> <Description/> <CreatedAt>1739581781912</CreatedAt> <LastModifiedAt>1739582447868</LastModifiedAt> <BasePaths>/</BasePaths> <ProxyEndpoints> <ProxyEndpoint>default</ProxyEndpoint> </ProxyEndpoints> </APIProxy> Configure the EventFlow in the proxy: <?xml version="1.0" encoding="UTF-8" standalone="yes"?> <APIProxy revision="1" name="extproc-sample"> <DisplayName/> <Description/> <CreatedAt>1739581781912</CreatedAt> <LastModifiedAt>1739582447868</LastModifiedAt> <BasePaths>/</BasePaths> <ProxyEndpoints> <ProxyEndpoint>default</ProxyEndpoint> <EventFlow name="EventFlow" content-type="text/event-stream"> <Response/> </EventFlow> <HTTPProxyConnection> <Properties/> <URL>https://httpbin.org/sse</URL> </HTTPProxyConnection> </ProxyEndpoints> </APIProxy> Follow the steps in Deploy an API proxy to deploy the proxy to the environment you created earlier.
- Create an Apigee environment using the following command: curl -i -X POST -H "Authorization: Bearer $TOKEN " \ "https://apigee.googleapis.com/v1/organizations/ $ORG NAME /environments" -H "Content-Type:application/json" -d \ '{ "name": " ENV NAME ", "displayName": " ENV NAME ", "state": "ACTIVE", "deploymentType": "PROXY", "apiProxyType": "PROGRAMMABLE", "type": "COMPREHENSIVE", "properties": {"property": [ { "name": "apigee-service-extension-enabled", "value": "true" } ] } }' Where ENV NAME is the name of the environment you are creating.
- The XML specification for the proxy should appear similar to the following: <?xml version="1.0" encoding="UTF-8" standalone="yes"?> <APIProxy revision="1" name="extproc-sample"> <DisplayName/> <Description/> <CreatedAt>1739581781912</CreatedAt> <LastModifiedAt>1739582447868</LastModifiedAt> <BasePaths>/</BasePaths> <Policies></Policies> <ProxyEndpoints> <ProxyEndpoint>default</ProxyEndpoint> </ProxyEndpoints> </APIProxy> Follow the steps in Deploy an API proxy to deploy the proxy to the environment you created earlier.
- Create an Apigee environment Note: Before creating a new environment and environment group, or using existing resources for the step, review the limitations on environments, environment groups, and API proxies in the Extension Processor configuration.

