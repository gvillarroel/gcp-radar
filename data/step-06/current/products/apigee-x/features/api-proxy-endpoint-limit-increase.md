---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:27:18.174Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "API proxy endpoint limit increase"
feature_slug: "api-proxy-endpoint-limit-increase"
latest_feature_date: "2024-02-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/reference/endpoint-properties-reference"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/analytics/analytics-reference"
keywords:
  - "increases"
  - "number"
  - "increase"
  - "maximum"
  - "endpoint"
  - "limit"
  - "proxy"
---

# API proxy endpoint limit increase

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

Apigee increases the maximum number of endpoints allowed per API proxy from five to ten.

## Extended Definition

Apigee increases the maximum number of endpoints allowed per API proxy from five to ten.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference](https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference)
- [https://docs.cloud.google.com/apigee/docs/api-platform/reference/endpoint-properties-reference](https://docs.cloud.google.com/apigee/docs/api-platform/reference/endpoint-properties-reference)
- [https://docs.cloud.google.com/apigee/docs/api-platform/analytics/analytics-reference](https://docs.cloud.google.com/apigee/docs/api-platform/analytics/analytics-reference)

## Supporting Pages

### API proxy configuration reference \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference](https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference)
- Source ID: `site-api-reference`
- Final score: 160
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Conditional flows Proxy endpoints and target endpoints support an unlimited number of conditional flows (also known as named flows ).
- The following is a sample ProxyEndpoint configuration: <ProxyEndpoint name="default"> <Description/> <FaultRules/> <PreFlow name="PreFlow"> <Request> <Step> <Name>my-set-integration-request-policy</Name> </Step> </Request> </PreFlow> <Flows/> <PostFlow name="PostFlow"/> <HTTPProxyConnection> <BasePath>/integration-endpoint-test</BasePath> <Properties/> </HTTPProxyConnection> <RouteRule name="default"> <IntegrationEndpoint>my-int-endpoint</IntegrationEndpoint> </RouteRule> </ProxyEndpoint> In the sample ProxyEndpoint configuration, Apigee performs the following tasks: In the PreFlow, executes the policy named my-set-integration-request-policy , which sets the integration request object and integration flow variables.
- The API proxy processing pipeline executes Flows in the following sequence: Request Pipeline: Proxy Request PreFlow Proxy Request Conditional Flows (Optional) Proxy Request PostFlow Target Request PreFlow Target Request Conditional Flows (Optional) Target Request PostFlow Response Pipeline: Target Response PreFlow Target Response Conditional Flows (Optional) Target Response PostFlow Proxy Response PreFlow Proxy Response Conditional Flows (Optional) Proxy Response PostFlow PostClientFlow Response (Optional) Only those Flows with policy attachments need to be configured in ProxyEndpoint or TargetEndpoint configurations.
- Here's a sample TargetEndpoint configuration: <TargetEndpoint name="default"> <PreFlow/> <Flows/> <PostFlow/> <EventFlow/> <HTTPTargetConnection> <URL>http://mocktarget.apigee.net</URL> <SSLInfo/> <Authentication/> </HTTPTargetConnection> <FaultRules/> <DefaultFaultRule/> <ScriptTarget/> <LocalTargetConnection/> </TargetEndpoint> TargetEndpoint configuration elements A target endpoint can call a target in one of the following ways: HTTPTargetConnection for HTTP or HTTPS calls LocalTargetConnection for local proxy-to-proxy chaining Configure only one of these in a target endpoint.

### Endpoint properties reference \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/endpoint-properties-reference](https://docs.cloud.google.com/apigee/docs/api-platform/reference/endpoint-properties-reference)
- Source ID: `site-api-reference`
- Final score: 156
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Properties are set on ProxyEndpoint HTTPProxyConnection elements as shown in this example configuration: <ProxyEndpoint name="default"> <HTTPProxyConnection> <BasePath>/v1/weather</BasePath> <Properties> <Property name="request.streaming.enabled">true</Property> </Properties> </HTTPProxyConnection> </ProxyEndpoint> Request headers An incoming HTTP request includes the HTTP headers sent by the client.
- ProxyEndpoint Transport Property Specification Property Name Default Value Description X-Forwarded-For false When set to true, the virtual host's IP address is added to the outbound request as the value of the HTTP X-Forwarded-For header. request.streaming. enabled false By default ( false ), HTTP request payloads are read into a buffer, and policies that can operate on the payload work as expected.
- When set to true , all HTTP headers present on the inbound response from the target service are set on the outbound response before it is passed to the ProxyEndpoint . response.retain.headers N/A Defines specific HTTP headers from the response that should be set on the outbound response before it is passed to the ProxyEndpoint .
- For example: <HTTPTargetConnection> <Properties> <Property name="use.proxy.host.header.with.target.uri">true</Property> </Properties> <URL>https://mocktarget.apigee.net/my-target</URL> </HTTPTargetConnection> response.payload. parse.limit 10M By default ( 10M ).

### "Analytics metrics, dimensions, and filters reference \_|\_ Apigee \_|\_\

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/analytics/analytics-reference](https://docs.cloud.google.com/apigee/docs/api-platform/analytics/analytics-reference)
- Source ID: `site-docs-reference-required-3`
- Final score: 145
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example, policy error metrics, grouped by the developer app dimension, might help you discover that an API key or OAuth token has expired for a given app; or you might find that a specific API proxy is throwing a lot of SpikeArrest policy errors, leading you to discover that the proxy's spike arrest limit doesn't account for an increase in holiday traffic.
- Target URL target url Full URL of the target service defined in an API proxy's TargetEndpoint. <TargetEndpoint name="default"> ... <HTTPTargetConnection> <URL>http://mocktarget.apigee.net/user?user=Dude</URL> </HTTPTargetConnection> In this example, the target url is http://mocktarget.apigee.net/user?user=Dude .
- For example, say an API proxy calls the following target: <TargetEndpoint name="default"> ... <HTTPTargetConnection> <URL>http://mocktarget.apigee.net/user?user=Dude</URL> </HTTPTargetConnection> In this example, the target basepath is /user .
- For example, the VerifyApiKey policy throws an error when an invalid API key is passed in the request, and a SpikeArrest policy throws an error if the number of API calls exceeds the limit defined in the policy.

