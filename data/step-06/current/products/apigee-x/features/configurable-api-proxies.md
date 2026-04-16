---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:27:18.176Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "Configurable API Proxies"
feature_slug: "configurable-api-proxies"
latest_feature_date: "2023-11-10"
deprecation_date: "2023-11-10"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/understanding-apis-and-api-proxies"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/reference/endpoint-properties-reference"
keywords:
  - "capability"
  - "defining"
  - "preview"
  - "provided"
  - "deprecated"
  - "configurable"
  - "proxies"
---

# Configurable API Proxies

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

Configurable API Proxies provided a preview capability for defining API proxies in Apigee; deprecated on 2023-11-10.

## Extended Definition

Configurable API Proxies provided a preview capability for defining API proxies in Apigee; deprecated on 2023-11-10.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference](https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference)
- [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/understanding-apis-and-api-proxies](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/understanding-apis-and-api-proxies)
- [https://docs.cloud.google.com/apigee/docs/api-platform/reference/endpoint-properties-reference](https://docs.cloud.google.com/apigee/docs/api-platform/reference/endpoint-properties-reference)

## Supporting Pages

### API proxy configuration reference \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference](https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference)
- Source ID: `site-api-reference`
- Final score: 97
- Re-rank relevance: N/A

Evidence snippets:
- For example, in the following Flow configuration, any inbound request that does not include the path suffix /first or /second will cause the ThirdFlow to execute, enforcing the policy called Return404 . <Flows> <Flow name="FirstFlow"> <Condition>proxy.pathsuffix MatchesPath "/first"</Condition> <Request> <Step><Name>FirstPolicy</Name></Step> </Request> </Flow> <Flow name="SecondFlow"> <Condition>proxy.pathsuffix MatchesPath "/second"</Condition> <Request> <Step><Name>FirstPolicy</Name></Step> <Step><Name>SecondPolicy</Name></Step> </Request> </Flow> <Flow name="ThirdFlow"> <Request> <Step><Name>Return404</Name></Step> </Request> </Flow> </Flows> Resources "Resources" (resource files for use in API proxies) are scripts, code, and XSL transformations that can be attached to Flows using policies.
- The following sample ProxyEndpoint configuration would be stored under /apiproxy/proxies : <ProxyEndpoint name="default"> <PreFlow/> <Flows/> <PostFlow/> <HTTPProxyConnection> <BasePath>/weather</BasePath> <Properties/> </HTTPProxyConnection> <FaultRules/> <DefaultFaultRule/> <RouteRule name="default"> <TargetEndpoint>default</TargetEndpoint> </RouteRule> </ProxyEndpoint> The required configuration elements in a basic proxy endpoint are: ProxyEndpoint configuration elements Name Description Default Required?
- By defining conditional flows, you gain the ability to apply processing steps in an API proxy based on: Request URI HTTP verb ( GET / PUT / POST / DELETE ) Value of a query param, header, and form param Many other types of conditions For example, the following conditional flow specifies that it is executed only when the request resource path is /accesstoken .
- To use asynchronous behavior in API proxies, see JavaScript object model . false No Policy attachment The following image shows the API proxy flows execution sequence: As shown above: Policies are attached as processing steps to Flows .

### Understanding APIs and API proxies \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/understanding-apis-and-api-proxies](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/understanding-apis-and-api-proxies)
- Source ID: `site-docs-reference-required-3`
- Final score: 82
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Application development Apigee Guides Send feedback Understanding APIs and API proxies Stay organized with collections Save and categorize content based on your preferences.
- You configure the TargetEndpoint to forward requests to the proper backend service, including defining any security settings, HTTP or HTTPS protocol, and other connection information.
- By defining stable, simplified entry points to application logic and data, APIs enable developers to easily access and reuse application logic built by other developers.
- You can visualize API proxies as shown by the graphic below: API proxy types Apigee supports two proxy types: Standard proxies include only standard policies .

### Endpoint properties reference \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/endpoint-properties-reference](https://docs.cloud.google.com/apigee/docs/api-platform/reference/endpoint-properties-reference)
- Source ID: `site-api-reference`
- Final score: 69
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Supported values are: gzip: always send message using gzip compression deflate: always send message using deflate compression none: always send message without any compression See also: Does Apigee support compression/de-compression with GZIP/deflate compression? api.timeout N/A Configure the timeout for individual API proxies (in milliseconds) You can configure API proxies, even those with streaming enabled, to time out after a specified time with a 504 Gateway Timeout status.
- See Setting io.timeout.millis and api.timeout . supports.http11 true If this is true and the client sends a 1.1 request, the target is also sent a 1.1 request, otherwise 1.0 request is sent to the target. use.proxy true If the Apigee hybrid overrides file contains the HTTP PROXY configuration, as described in Configure forward proxying for API proxies , then use this property to manage/control which proxies should not use the proxy configuration.
- If set to false , the API Proxy will skip the HTTP proxy configurations specified in the Apigee hybrid overrides file for target connections set in the proxy. use.proxy.tunneling true If this is set to true, and proxy configurations are specified Apigee hybrid overrides file as described in Configure forward proxying for API proxies , then target connections are set to use the specified tunnel.
- The minimum configurable limit is 10M and the maximum configurable limit is 30M.

