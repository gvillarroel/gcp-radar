---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:27:18.191Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "HTTP request transforms for configurable API proxies"
feature_slug: "http-request-transforms-for-configurable-api-proxies"
latest_feature_date: "2022-03-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/reference/endpoint-properties-reference"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/reference/variables-reference"
keywords:
  - "transforms"
  - "rewrite"
  - "headers"
  - "configurable"
  - "paths"
  - "http"
  - "request"
  - "proxies"
---

# HTTP request transforms for configurable API proxies

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

Configurable API proxies support HTTP request transforms to rewrite paths, headers, and query parameters.

## Extended Definition

Configurable API proxies support HTTP request transforms to rewrite paths, headers, and query parameters.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference](https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference)
- [https://docs.cloud.google.com/apigee/docs/api-platform/reference/endpoint-properties-reference](https://docs.cloud.google.com/apigee/docs/api-platform/reference/endpoint-properties-reference)
- [https://docs.cloud.google.com/apigee/docs/api-platform/reference/variables-reference](https://docs.cloud.google.com/apigee/docs/api-platform/reference/variables-reference)

## Supporting Pages

### API proxy configuration reference \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference](https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference)
- Source ID: `site-api-reference`
- Final score: 154
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example, in the following Flow configuration, any inbound request that does not include the path suffix /first or /second will cause the ThirdFlow to execute, enforcing the policy called Return404 . <Flows> <Flow name="FirstFlow"> <Condition>proxy.pathsuffix MatchesPath "/first"</Condition> <Request> <Step><Name>FirstPolicy</Name></Step> </Request> </Flow> <Flow name="SecondFlow"> <Condition>proxy.pathsuffix MatchesPath "/second"</Condition> <Request> <Step><Name>FirstPolicy</Name></Step> <Step><Name>SecondPolicy</Name></Step> </Request> </Flow> <Flow name="ThirdFlow"> <Request> <Step><Name>Return404</Name></Step> </Request> </Flow> </Flows> Resources "Resources" (resource files for use in API proxies) are scripts, code, and XSL transformations that can be attached to Flows using policies.
- Inbound requests can be routed to named TargetEndpoint configurations, directly to URLs, or to a combination of the two, based on HTTP headers, message content, query parameters, or contextual information such time of day, locale, etc.
- The following is a sample ProxyEndpoint configuration: <ProxyEndpoint name="default"> <Description/> <FaultRules/> <PreFlow name="PreFlow"> <Request> <Step> <Name>my-set-integration-request-policy</Name> </Step> </Request> </PreFlow> <Flows/> <PostFlow name="PostFlow"/> <HTTPProxyConnection> <BasePath>/integration-endpoint-test</BasePath> <Properties/> </HTTPProxyConnection> <RouteRule name="default"> <IntegrationEndpoint>my-int-endpoint</IntegrationEndpoint> </RouteRule> </ProxyEndpoint> In the sample ProxyEndpoint configuration, Apigee performs the following tasks: In the PreFlow, executes the policy named my-set-integration-request-policy , which sets the integration request object and integration flow variables.
- The Authorization header, if present, is left unmodified and also sent in the request. < TargetEndpoint name = "TargetEndpoint-1" > < HTTPTargetConnection > < Authentication > < HeaderName>X - Serverless - Authorization < / HeaderName > < GoogleIDToken > < Audience ref = "flow.variable.audience" > https : // cloudrun - hostname . a . run . app < / Audience > < / GoogleIDToken > < / Authentication > < LoadBalancer > < Server name = "cloud-run-target" / > < / LoadBalancer > < / HTTPTargetConnection > < / TargetEndpoint > The following example shows how to call a TargetService that points to the Google Secret Manager service.

### Endpoint properties reference \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/endpoint-properties-reference](https://docs.cloud.google.com/apigee/docs/api-platform/reference/endpoint-properties-reference)
- Source ID: `site-api-reference`
- Final score: 150
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Properties are set on TargetEndpoint HTTPTargetConnection elements as shown in this example configuration: <TargetEndpoint name="default"> <HTTPTargetConnection> <URL>http://mocktarget.apigee.net</URL> <Properties> <Property name="request.retain.headers">User-Agent,Referer,Accept-Language</Property> <Property name="retain.queryparams">apikey</Property> </Properties> </HTTPTargetConnection> </TargetEndpoint> Note: Property values can only be literals.
- See Setting io.timeout.millis and api.timeout . supports.http11 true If this is true and the client sends a 1.1 request, the target is also sent a 1.1 request, otherwise 1.0 request is sent to the target. use.proxy true If the Apigee hybrid overrides file contains the HTTP PROXY configuration, as described in Configure forward proxying for API proxies , then use this property to manage/control which proxies should not use the proxy configuration.
- Properties are set on ProxyEndpoint HTTPProxyConnection elements as shown in this example configuration: <ProxyEndpoint name="default"> <HTTPProxyConnection> <BasePath>/v1/weather</BasePath> <Properties> <Property name="request.streaming.enabled">true</Property> </Properties> </HTTPProxyConnection> </ProxyEndpoint> Request headers An incoming HTTP request includes the HTTP headers sent by the client.
- Supported values are: gzip: always send message using gzip compression deflate: always send message using deflate compression none: always send message without any compression See also: Does Apigee support compression/de-compression with GZIP/deflate compression? request.retain.headers. enabled true By default, Apigee always retains all HTTP headers on outbound messages.

### Flow variables reference \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/variables-reference](https://docs.cloud.google.com/apigee/docs/api-platform/reference/variables-reference)
- Source ID: `site-docs-reference-required-3`
- Final score: 145
- Re-rank relevance: N/A

Evidence snippets:
- In that case, a request sent to https://myhost.example.net/v2/weatherapi/forecastrss?w=12797282 , the proxy.pathsuffix variable will hold the string /forecastrss .
- Proxy request message.headers.names Collection Read only Value of all HTTP headers in the message.
- Proxy request message.headers.count Integer Read only Count of all HTTP headers in the message.
- Proxy request proxy.flow.name Scope begins : Proxy request Type : String Permission : Read The name of the most recently executed ProxyEndpoint flow (such as "PreFlow", "PostFlow", or the name of a conditional flow). proxy.flow.description Scope begins : Proxy request Type : String Permission : Read The description ( <Description> element value) of the most recently executed ProxyEndpoint flow. --> For more information on working with API proxies, see Understanding APIs and API proxies . publishmessage Populated when a the PublishMessage policy executes.

