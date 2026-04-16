---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:10:02.164Z"
product_name: "Apigee UI"
product_slug: "apigee-ui"
feature_name: "Proxy Editor Debug tab"
feature_slug: "proxy-editor-debug-tab"
latest_feature_date: "2022-07-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/develop/server-sent-events"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/best-practices-api-proxy-design-and-development"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/connecting-proxies-other-proxies"
keywords:
  - "proxy"
  - "editor"
  - "debug"
  - "tab"
  - "includes"
  - "redesigned"
  - "debugging"
  - "proxies"
---

# Proxy Editor Debug tab

Product: Apigee UI
Coverage: MEDIUM

## Step 02 Summary

The new Proxy Editor includes a redesigned Debug tab for debugging API proxies.

## Extended Definition

The new Proxy Editor includes a redesigned Debug tab for debugging API proxies.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/develop/server-sent-events](https://docs.cloud.google.com/apigee/docs/api-platform/develop/server-sent-events)
- [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/best-practices-api-proxy-design-and-development](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/best-practices-api-proxy-design-and-development)
- [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/connecting-proxies-other-proxies](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/connecting-proxies-other-proxies)

## Supporting Pages

### Streaming server-sent events \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/develop/server-sent-events](https://docs.cloud.google.com/apigee/docs/api-platform/develop/server-sent-events)
- Source ID: `site-docs-reference-required-14`
- Final score: 140
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Debugging SSE proxies Use the Apigee debug tool to debug SSE proxies.
- Follow these steps to create an API proxy with the EventFlow template using the Apigee UI: In the Google Cloud console, go to the Apigee > Proxy Development > API Proxies page.
- Viewing SSE data in Apigee analytics Data for SSE proxies shows up in Apigee analytics as expected for any API proxy.
- However, if you want to do extra debugging you can send fault information to Cloud Logging as shown in this example.

### "Best practices for API proxy design and development with Apigee \_|\_ Google\

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/best-practices-api-proxy-design-and-development](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/best-practices-api-proxy-design-and-development)
- Source ID: `site-docs-reference-required-14`
- Final score: 133
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Users who require large payload processing can configure a higher limit using the <Properties> element in the ProxyEndpoint or TargetEndpoint configurations of their API proxies.
- Debug The trace tool in the Apigee UI is useful for debugging runtime API issues, during development or production operation of an API.
- For information about enabling CORS on your API proxies before publishing the APIs, see Adding CORS support to an API proxy .
- API proxy development Initial Design Considerations Warning: Do not call the Apigee API from inside API proxies.

### Chaining API proxies together \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/connecting-proxies-other-proxies](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/connecting-proxies-other-proxies)
- Source ID: `site-docs-reference-required-14`
- Final score: 113
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Use Proxy chaining by path instead if you need to use Debug on the second proxy. <TargetEndpoint name="datamanager"> <PreFlow name="PreFlow"> <!-- PreFlow policies --> </PreFlow> <PostFlow name="PostFlow"> <!-- PostFlow policies --> </PostFlow> <LocalTargetConnection> <APIProxy>data-manager</APIProxy> <ProxyEndpoint>default</ProxyEndpoint> </LocalTargetConnection> </TargetEndpoint> Connecting proxies by path You can specify the target proxy by its endpoint path.
- Rather than using the HTTPTargetConnection element to make a call to the second proxy, you use the LocalTargetConnection element. <LocalTargetConnection> <APIProxy>myproxy2</APIProxy> <ProxyEndpoint>default</ProxyEndpoint> </LocalTargetConnection> You might find proxy chaining useful when you have a proxy that offers some discrete low-level functionality that other proxies will consume.
- You can create a local connection between proxies in two ways: By specifying the name of the target proxy and a ProxyEndpoint name By specifying a path to the target proxy endpoint You connect target proxies within a TargetEndpoint configuration, using a LocalTargetConnection element, as described below.
- The following illustrates the difference between connecting proxies with HTTPTargetConnection and LocalTargetConnection (proxy chaining): You connect proxies by specifying that one is a local target endpoint of the other.

