---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:27:18.178Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "Pay-as-you-go environment types"
feature_slug: "pay-as-you-go-environment-types"
latest_feature_date: "2023-09-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/develop/server-sent-events"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy"
keywords:
  - "types"
  - "provides"
  - "base"
  - "environment"
---

# Pay-as-you-go environment types

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

Apigee provides Base, Intermediate, and Comprehensive environment types with different capabilities and costs; Apigee provides Base, Intermediate, and Comprehensive environment types with different capabilities and costs.

## Extended Definition

Apigee provides Base, Intermediate, and Comprehensive environment types with different capabilities and costs; Apigee provides Base, Intermediate, and Comprehensive environment types with different capabilities and costs.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference](https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference)
- [https://docs.cloud.google.com/apigee/docs/api-platform/develop/server-sent-events](https://docs.cloud.google.com/apigee/docs/api-platform/develop/server-sent-events)
- [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy)

## Supporting Pages

### API proxy configuration reference \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference](https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference)
- Source ID: `site-api-reference`
- Final score: 106
- Re-rank relevance: N/A

Evidence snippets:
- By defining conditional flows, you gain the ability to apply processing steps in an API proxy based on: Request URI HTTP verb ( GET / PUT / POST / DELETE ) Value of a query param, header, and form param Many other types of conditions For example, the following conditional flow specifies that it is executed only when the request resource path is /accesstoken .
- BasePath must be unique within an environment.
- VALUE=true curl -Ss -v -X PUT \ "https://apigee.googleapis.com/v1/organizations/ MYORG /environments/ MYENV " \ -H "Content-Type: application/json" \ -H "Authorization: Bearer TOKEN " \ -d '{ "name": " MYENV ", "properties": { "property": [{ "name": "features.SSLInfo.Enforce", "value": "'"$VALUE"'" }] } }' Output: { ... "properties": { "property": [ { "name": "features.SSLInfo.Enforce", "value": "true" } ] }, ... } Sample target endpoint with outbound client authentication enabled <TargetEndpoint name="default"> <HttpTargetConnection> <URL>https://myservice.com</URL> <SSLInfo> <Enabled>true</Enabled> <Enforce>true</Enforce> <ClientAuthEnabled>true</ClientAuthEnabled> <KeyStore>myKeystore</KeyStore> <KeyAlias>myKey</KeyAlias> <TrustStore>myTruststore</TrustStore> </SSLInfo> </HttpTargetConnection> </TargetEndpoint> For detailed instructions, see Options for configuring TLS .
- The following is a sample ProxyEndpoint configuration: <ProxyEndpoint name="default"> <Description/> <FaultRules/> <PreFlow name="PreFlow"> <Request> <Step> <Name>my-set-integration-request-policy</Name> </Step> </Request> </PreFlow> <Flows/> <PostFlow name="PostFlow"/> <HTTPProxyConnection> <BasePath>/integration-endpoint-test</BasePath> <Properties/> </HTTPProxyConnection> <RouteRule name="default"> <IntegrationEndpoint>my-int-endpoint</IntegrationEndpoint> </RouteRule> </ProxyEndpoint> In the sample ProxyEndpoint configuration, Apigee performs the following tasks: In the PreFlow, executes the policy named my-set-integration-request-policy , which sets the integration request object and integration flow variables.

### Streaming server-sent events \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/develop/server-sent-events](https://docs.cloud.google.com/apigee/docs/api-platform/develop/server-sent-events)
- Source ID: `site-docs-reference-required-3`
- Final score: 102
- Re-rank relevance: N/A

Evidence snippets:
- The following table shows the execution of EventFlow stanzas based on endpoint placement: ProxyEndpoint TargetEndpoint EventFlow used EventFlow in ProxyEndpoint EventFlow in TargetEndpoint EventFlow in TargetEndpoint No EventFlow EventFlow in TargetEndpoint EventFlow in TargetEndpoint EventFlow in ProxyEndpoint No EventFlow EventFlow in ProxyEndpoint Add policies to an EventFlow You can add up to a total of four policies to the Response element of the EventFlow .
- Call the deployed proxy: curl -X POST -H 'Content-Type: application/json' \ "https:// YOUR APIGEE ENVIRONMENT GROUP HOSTNAME / YOUR API PATH " \ -d '{ "contents":[{"parts":[{"text": "Write a story about a magic pen."}]}]}' Show a sample response Here's a sample of how the response might look without applying any filtering.
- Call the deployed proxy: curl -X POST -H 'Content-Type: application/json' \ "https:// YOUR APIGEE ENVIRONMENT GROUP HOSTNAME / YOUR API PATH " \ -d '{ "contents":[{"parts":[{"text": "Write a story about a magic pen."}]}]}' Show a sample response This is a sample response without any filtering applied.
- Test with proxy behavior using the following curl command: curl -X POST -H 'Content-Type: application/json' "https:// ENVIRONMENT GROUP NAME /llm-api" -d '{ "contents":[{"parts":[{"text": "Write a story about a magic pen."}]}]}' Replace ENVIRONMENT GROUP NAME with the name of your environment group.

### AssignMessage policy \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy)
- Source ID: `site-api-reference`
- Final score: 98
- Re-rank relevance: N/A

Evidence snippets:
- The second policy uses the <AssignVariable> element to read in the values and creates three new variables: < !-- Policy #2: Get variables from the request -- > < AssignMessage continueOnError = "false" enabled = "true" name = "get-variables" > < AssignTo createNew = "false" transport = "http" type = "request" / > < !-- Get the value of myAppSecret and create a new variable , secret -- > < AssignVariable > < Name>secret < / Name > < Ref>myAppSecret < / Ref > < Value>0 < / Value > < / AssignVariable > < !-- Get the value of config . environment and create a new variable , environment -- > < AssignVariable > < Name>environment < / Name > < Ref>config . environment < / Ref > < Value>default < / Value > < / AssignVariable > < !-- Get the value of config . protocol and create a new variable , protocol -- > < AssignVariable > < Name>protocol < / Name > < Ref>config . protocol < / Ref > < Value>default < / Value > < / AssignVariable > < IgnoreUnresolvedVariables>true < / IgnoreUnresolvedVariables > < / AssignMessage > In the second policy, the <Ref> element references the source variable, and <Name> elements specify the names of the new variables.
- 6: Set/get variables The following example uses three AssignMessage policies: Creates three flow variables in the request, with static values Gets the flow variables dynamically in a second policy in the request flow Sets them in the payload of the response < !-- Policy #1: Set variables in the request -- > < AssignMessage name = "AM-set-variables" > < !-- Create a variable named myAppSecret -- > < AssignVariable > < Name>myAppSecret < / Name > < Value>42 < / Value > < / AssignVariable > < !-- Create a variable named config . environment -- > < AssignVariable > < Name>config . environment < / Name > < Value>test < / Value > < / AssignVariable > < !-- Create a variable named config . protocol -- > < AssignVariable > < Name>config . protocol < / Name > < Value>gopher < / Value > < / AssignVariable > < / AssignMessage > In the first policy, the <AssignVariable> element creates and sets three variables in the request.
- The following example constructs an XML payload in the response that Edge returns to the client: < !-- Policy #3: Add variables to the response -- > < AssignMessage continueOnError = "false" enabled = "true" name = "put-em-in-the-payload" > < DisplayName>put - em - in - the - payload < / DisplayName > < Set > < Payload contentType = "application/xml" > < wrapper > < secret > { secret } < / secret > < config > < environment > { environment } < / environment > < protocol > { protocol } < / protocol > < / config > < / wrapper > < / Payload > < / Set > < IgnoreUnresolvedVariables>true < / IgnoreUnresolvedVariables > < AssignTo createNew = "false" transport = "http" type = "response" / > < / AssignMessage > Note that the syntax to access flow variables in <Set> is to wrap them in curly braces.
- Optional Type String Parent Element <AssignMessage> Child Elements None If you do not specify <AssignTo> , or if you specify the <AssignTo> element, but do not specify a text value for the element, the policy acts on the default request or response, which is based on where the policy executes.

