---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:27:18.175Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "Forward proxying"
feature_slug: "forward-proxying"
latest_feature_date: "2023-12-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/reference/endpoint-properties-reference"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/analytics/analytics-reference"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/reference/variables-reference"
keywords:
  - "specified"
  - "proxying"
  - "received"
  - "forward"
  - "environment"
  - "traffic"
---

# Forward proxying

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

Apigee can forward traffic received in an environment to a specified URI.

## Extended Definition

Apigee can forward traffic received in an environment to a specified URI.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/reference/endpoint-properties-reference](https://docs.cloud.google.com/apigee/docs/api-platform/reference/endpoint-properties-reference)
- [https://docs.cloud.google.com/apigee/docs/api-platform/analytics/analytics-reference](https://docs.cloud.google.com/apigee/docs/api-platform/analytics/analytics-reference)
- [https://docs.cloud.google.com/apigee/docs/api-platform/reference/variables-reference](https://docs.cloud.google.com/apigee/docs/api-platform/reference/variables-reference)

## Supporting Pages

### Endpoint properties reference \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/endpoint-properties-reference](https://docs.cloud.google.com/apigee/docs/api-platform/reference/endpoint-properties-reference)
- Source ID: `site-api-reference`
- Final score: 122
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If set to false , the API Proxy will skip the HTTP proxy configurations specified in the Apigee hybrid overrides file for target connections set in the proxy. use.proxy.tunneling true If this is set to true, and proxy configurations are specified Apigee hybrid overrides file as described in Configure forward proxying for API proxies , then target connections are set to use the specified tunnel.
- See Setting io.timeout.millis and api.timeout . supports.http11 true If this is true and the client sends a 1.1 request, the target is also sent a 1.1 request, otherwise 1.0 request is sent to the target. use.proxy true If the Apigee hybrid overrides file contains the HTTP PROXY configuration, as described in Configure forward proxying for API proxies , then use this property to manage/control which proxies should not use the proxy configuration.
- If the request is received from the client using, for example, gzip compression, then Apigee forwards the request to the target using gzip compression.
- If the response received from target uses deflate, then Apigee forwards the response to the client using deflate.

### "Analytics metrics, dimensions, and filters reference \_|\_ Apigee \_|\_\

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/analytics/analytics-reference](https://docs.cloud.google.com/apigee/docs/api-platform/analytics/analytics-reference)
- Source ID: `site-docs-reference-required-3`
- Final score: 105
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This is often the X-Forwarded-For address of the inbound call, which is the IP address Apigee received from the last external TCP handshake.
- API syntax: avg(total response time) Traffic message count sum Total number of API calls processed by Apigee in the specified time period.
- For example, policy error metrics, grouped by the developer app dimension, might help you discover that an API key or OAuth token has expired for a given app; or you might find that a specific API proxy is throwing a lot of SpikeArrest policy errors, leading you to discover that the proxy's spike arrest limit doesn't account for an increase in holiday traffic.
- With the default behavior, the value of the ax resolved client ip dimension is calculated from the values in the x forwarded for ip dimension in the following manner: Set ax resolved client ip to the first non-local IP address in x forwarded for ip .

### Flow variables reference \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/variables-reference](https://docs.cloud.google.com/apigee/docs/api-platform/reference/variables-reference)
- Source ID: `site-docs-reference-required-3`
- Final score: 103
- Re-rank relevance: N/A

Evidence snippets:
- Proxy request proxy.client.ip String Read only The X-Forwarded-For address of the inbound call, which is the IP address Apigee received from the last external TCP handshake.
- This section provides reference information about the following common Apigee flow variables: apigee is request apiproduct loadbalancing response apiproxy message route client messageid servicecallout current mint system environment organization target error proxy variable fault publishmessage graphql ratelimit Each of these variables is described in the sections that follow.
- Request: request.uri = /my-mock-proxy/user?user=Dude Response: request.uri = /user?user=Dude Proxy request (differs in the response) request.url String Read only The complete URL of the request made to the target endpoint, including the query string parameters, but not including the port number (if specified).
- Target request target.copy.pathsuffix Boolean Read/Write When true , the request forwarded from ProxyEndpoint to TargetEndpoint retains the path suffix (the URI path fragment following the URI defined in the ProxyEndpoint base path).

