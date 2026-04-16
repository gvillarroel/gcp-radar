---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:27:18.175Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "gRPC passthrough"
feature_slug: "grpc-passthrough"
latest_feature_date: "2023-12-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/analytics/analytics-reference"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/reference/endpoint-properties-reference"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/reference/variables-reference"
keywords:
  - "passthrough"
  - "receive"
  - "grpc"
  - "forward"
  - "requests"
  - "proxies"
  - "lets"
---

# gRPC passthrough

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

Apigee gRPC passthrough lets proxies receive gRPC requests and forward them to gRPC target servers; Apigee gRPC passthrough lets proxies receive gRPC requests and forward them to gRPC target servers.

## Extended Definition

Apigee gRPC passthrough lets proxies receive gRPC requests and forward them to gRPC target servers; Apigee gRPC passthrough lets proxies receive gRPC requests and forward them to gRPC target servers.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/analytics/analytics-reference](https://docs.cloud.google.com/apigee/docs/api-platform/analytics/analytics-reference)
- [https://docs.cloud.google.com/apigee/docs/api-platform/reference/endpoint-properties-reference](https://docs.cloud.google.com/apigee/docs/api-platform/reference/endpoint-properties-reference)
- [https://docs.cloud.google.com/apigee/docs/api-platform/reference/variables-reference](https://docs.cloud.google.com/apigee/docs/api-platform/reference/variables-reference)

## Supporting Pages

### "Analytics metrics, dimensions, and filters reference \_|\_ Apigee \_|\_\

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/analytics/analytics-reference](https://docs.cloud.google.com/apigee/docs/api-platform/analytics/analytics-reference)
- Source ID: `site-docs-reference-required-3`
- Final score: 135
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For information on gRPC proxies, see Creating gRPC API proxies . gRPC Status x apigee grpc status Applicable only when the target service is gRPC.
- This is often the X-Forwarded-For address of the inbound call, which is the IP address Apigee received from the last external TCP handshake.
- The time starts when the API proxy receives the target service response and ends when Apigee forwards the response to the original caller.
- The time starts when Apigee forwards a request to the target service and ends when Apigee receives the response.

### Endpoint properties reference \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/endpoint-properties-reference](https://docs.cloud.google.com/apigee/docs/api-platform/reference/endpoint-properties-reference)
- Source ID: `site-api-reference`
- Final score: 125
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- See Setting io.timeout.millis and api.timeout . supports.http11 true If this is true and the client sends a 1.1 request, the target is also sent a 1.1 request, otherwise 1.0 request is sent to the target. use.proxy true If the Apigee hybrid overrides file contains the HTTP PROXY configuration, as described in Configure forward proxying for API proxies , then use this property to manage/control which proxies should not use the proxy configuration.
- TargetEndpoint Transport Property Specification Property Name Default Value Description allow.post.without.content.length false Lets you send POST requests with no content in the body. allow.put.without.content.length false Lets you send PUT requests with no content in the body. allow.tls.session.resumption true If true (the default) clients reuse TLS sessions when making new connections to the target.
- If set to false , the API Proxy will skip the HTTP proxy configurations specified in the Apigee hybrid overrides file for target connections set in the proxy. use.proxy.tunneling true If this is set to true, and proxy configurations are specified Apigee hybrid overrides file as described in Configure forward proxying for API proxies , then target connections are set to use the specified tunnel.
- See also Streaming requests and responses . compression.algorithm N/A By default, Apigee honors the compression type set (gzip, deflate or none) for messages received.

### Flow variables reference \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/variables-reference](https://docs.cloud.google.com/apigee/docs/api-platform/reference/variables-reference)
- Source ID: `site-docs-reference-required-3`
- Final score: 125
- Re-rank relevance: N/A

Evidence snippets:
- Proxy request proxy.client.ip String Read only The X-Forwarded-For address of the inbound call, which is the IP address Apigee received from the last external TCP handshake.
- This ID allows requests received at the load balancer to be tracked after they are sent to the message processor.
- For information on gRPC proxies, see Creating gRPC API proxies .
- For information on gRPC proxies, see Creating gRPC API proxies .

