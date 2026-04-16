---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:27:18.192Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "Template variables for configurable API proxies"
feature_slug: "template-variables-for-configurable-api-proxies"
latest_feature_date: "2022-03-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/reference/variables-reference"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/reference/javascript-object-model"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference"
keywords:
  - "template"
  - "defined"
  - "property"
  - "configurable"
  - "variables"
  - "through"
  - "proxies"
---

# Template variables for configurable API proxies

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

Configurable API proxies support template variables defined through Apigee property sets for archive deployments.

## Extended Definition

Configurable API proxies support template variables defined through Apigee property sets for archive deployments.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/reference/variables-reference](https://docs.cloud.google.com/apigee/docs/api-platform/reference/variables-reference)
- [https://docs.cloud.google.com/apigee/docs/api-platform/reference/javascript-object-model](https://docs.cloud.google.com/apigee/docs/api-platform/reference/javascript-object-model)
- [https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference](https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference)

## Supporting Pages

### Flow variables reference \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/variables-reference](https://docs.cloud.google.com/apigee/docs/api-platform/reference/variables-reference)
- Source ID: `site-docs-reference-required-3`
- Final score: 153
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following table describes the properties of the target variable: Property Type Read/Write Description Scope begins target.basepath String Read only The resource path (not including the domain) to the target service, excluding query parameters, that is defined in the proxy's TargetEndpoint.
- Understanding flow variable scope Configuring flows Tools and policies: The Debug tool lets you see the values of flow variables as you step through the API proxy flow.
- Do not rely on undocumented variables in your API proxies and apps.
- PostClientFlow ratelimit. policy name .identifier String Read-Only Returns the (client) identifier reference attached to the policy PostClientFlow ratelimit. policy name .class String Read-Only Returns the class associated with the client identifier PostClientFlow ratelimit. policy name .class.allowed.count Long Read-Only Returns the allowed quota count defined in the class PostClientFlow ratelimit. policy name .class.used.count Long Read-Only Returns the used quota within a class PostClientFlow ratelimit. policy name .class.available.count Long Read-Only Returns the available quota count in the class PostClientFlow ratelimit. policy name .class.exceed.count Long Read-Only Returns the count of requests that exceeds the limit in the class in the current quota interval PostClientFlow ratelimit. policy name .class.total.exceed.count Long Read-Only Returns the total count of requests that exceeds the limit in the class across all quota intervals, so it is the sum of class.exceed.count for all quota intervals.

### API proxy configuration reference \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference](https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference)
- Source ID: `site-api-reference`
- Final score: 141
- Re-rank relevance: N/A

Evidence snippets:
- For example: <Properties> <Property name="response.payload.parse.limit">15M</Property> </Properties> The minimum configurable limit is 10M and the maximum configurable limit is 30M.
- For example: <Properties> <Property name="request.payload.parse.limit">30M</Property> </Properties> The minimum configurable limit is 10M and the maximum configurable limit is 30M.
- VALUE=true curl -Ss -v -X PUT \ "https://apigee.googleapis.com/v1/organizations/ MYORG /environments/ MYENV " \ -H "Content-Type: application/json" \ -H "Authorization: Bearer TOKEN " \ -d '{ "name": " MYENV ", "properties": { "property": [{ "name": "features.SSLInfo.Enforce", "value": "'"$VALUE"'" }] } }' Output: { ... "properties": { "property": [ { "name": "features.SSLInfo.Enforce", "value": "true" } ] }, ... } Sample target endpoint with outbound client authentication enabled <TargetEndpoint name="default"> <HttpTargetConnection> <URL>https://myservice.com</URL> <SSLInfo> <Enabled>true</Enabled> <Enforce>true</Enforce> <ClientAuthEnabled>true</ClientAuthEnabled> <KeyStore>myKeystore</KeyStore> <KeyAlias>myKey</KeyAlias> <TrustStore>myTruststore</TrustStore> </SSLInfo> </HttpTargetConnection> </TargetEndpoint> For detailed instructions, see Options for configuring TLS .
- For example, in the following Flow configuration, any inbound request that does not include the path suffix /first or /second will cause the ThirdFlow to execute, enforcing the policy called Return404 . <Flows> <Flow name="FirstFlow"> <Condition>proxy.pathsuffix MatchesPath "/first"</Condition> <Request> <Step><Name>FirstPolicy</Name></Step> </Request> </Flow> <Flow name="SecondFlow"> <Condition>proxy.pathsuffix MatchesPath "/second"</Condition> <Request> <Step><Name>FirstPolicy</Name></Step> <Step><Name>SecondPolicy</Name></Step> </Request> </Flow> <Flow name="ThirdFlow"> <Request> <Step><Name>Return404</Name></Step> </Request> </Flow> </Flows> Resources "Resources" (resource files for use in API proxies) are scripts, code, and XSL transformations that can be attached to Flows using policies.

### JavaScript object model \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/javascript-object-model](https://docs.cloud.google.com/apigee/docs/api-platform/reference/javascript-object-model)
- Source ID: `site-api-reference`
- Final score: 137
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example, the following JavaScript code example uses the context.flow property and calls the get/setVariable() methods on context . if ( context . flow == "PROXY REQ FLOW" ) { var username = context . getVariable ( "request.formparam.user" ); context . setVariable ( "USER.name" , username ); } These methods interact directly with flow variables .
- Syntax context . getVariable ( "variable-name" ); Example To get the value for the current year: var year = context . getVariable ( 'system.time.year' ); context.setVariable() Sets the value for a custom variable or for any writable pre-defined variables .
- Use the Flow property for JavaScript modules intended to be reused in multiple API proxies, in which the code is required to check the current Flow before executing logic.
- For a complete list of pre-defined variables, see Flow variables reference . context.removeVariable() Removes a variable from the context.

