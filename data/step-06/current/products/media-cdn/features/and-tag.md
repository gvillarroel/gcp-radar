---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:51.027Z"
product_name: "Media CDN"
product_slug: "media-cdn"
feature_name: "and tag"
feature_slug: "and-tag"
latest_feature_date: "2021-06-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/media-cdn/docs/cache-invalidation"
  - "https://docs.cloud.google.com/media-cdn/docs/caching"
  - "https://docs.cloud.google.com/media-cdn/docs/overview"
  - "https://docs.cloud.google.com/media-cdn/docs/origins"
keywords:
  - "and"
  - "tag"
  - "media"
  - "cdn"
  - "can"
  - "invalidate"
  - "cached"
  - "content"
---

# and tag

Product: Media CDN
Coverage: MEDIUM

## Step 02 Summary

Media CDN can invalidate cached content by host, path, or tag, with tag-based invalidation supporting status codes, MIME type, and origin.

## Extended Definition

Media CDN can invalidate cached content by host, path, or tag, with tag-based invalidation supporting status codes, MIME type, and origin.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/media-cdn/docs/cache-invalidation](https://docs.cloud.google.com/media-cdn/docs/cache-invalidation)
- [https://docs.cloud.google.com/media-cdn/docs/caching](https://docs.cloud.google.com/media-cdn/docs/caching)
- [https://docs.cloud.google.com/media-cdn/docs/overview](https://docs.cloud.google.com/media-cdn/docs/overview)
- [https://docs.cloud.google.com/media-cdn/docs/origins](https://docs.cloud.google.com/media-cdn/docs/origins)

## Supporting Pages

### Invalidate cached content \_|\_ Media CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/media-cdn/docs/cache-invalidation](https://docs.cloud.google.com/media-cdn/docs/cache-invalidation)
- Source ID: `site-docs-root`
- Final score: 334
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Media CDN supports multiple ways of selecting content to be invalidated, as follows: Host and URL path URL prefix (wildcard) Cache tags, including built-in tags for status , origin , and content-type You can combine these invalidation parameters to target specific cached responses and minimize origin load on the subsequent cache fill.
- For example: gcloud edge-cache services invalidate-cache SERVICE NAME \ --tags="status=404,content-type=text/plain" Invalidation latency Cache invalidation across Media CDN's thousands of locations typically completes within one minute globally.
- Home Documentation Networking Media CDN Guides Send feedback Invalidate cached content Stay organized with collections Save and categorize content based on your preferences.
- Supported invalidation syntax The supported invalidation syntax is as follows: Type Syntax Example Host invalidation Invalidate cached responses for the specified host. gcloud edge-cache services invalidate-cache SERVICE NAME \ --host="media.example.com" Path invalidation Invalidate cached responses for the specified path or path prefix. gcloud edge-cache services invalidate-cache SERVICE NAME \ --path="/content/1234/hls/ " gcloud edge-cache services invalidate-cache SERVICE NAME \ --path="/videos/funny.mp4" Cache tag invalidation on HTTP status code, origin name, or MIME type Invalidate cached responses with a matching tag.

### Configure caching behavior \_|\_ Media CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/media-cdn/docs/caching](https://docs.cloud.google.com/media-cdn/docs/caching)
- Source ID: `site-docs-root`
- Final score: 244
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To maximize client performance and origin offload, Media CDN can serve the requested individual byte ranges from its cache, consolidating them into a single response with an HTTP 206 Partial Response status code to the client with the Content-Type set to multipart/byteranges .
- Routes without an explicit cdnPolicy configured behave as if they have the following configuration: cdnPolicy : cacheMode : CACHE ALL STATIC defaultTtl : 3600s cacheKeyPolicy : includeProtocol : false excludeHost : false excludeQueryString : false signedRequestMode : DISABLED negativeCaching : false Cacheable responses A cacheable response is an HTTP response that Media CDN can store and quickly retrieve, thus allowing for faster load times.
- Static content MIME types The CACHE ALL STATIC cache mode allows Media CDN to automatically cache common static content such as video, audio, images, and common web assets based on the MIME type returned in the Content-Type HTTP response header.
- Cache keys You can reduce the number of times Media CDN needs to contact your origin by considering what uniquely identifies a request, and removing components that might often change between requests.

### Media CDN overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/media-cdn/docs/overview](https://docs.cloud.google.com/media-cdn/docs/overview)
- Source ID: `site-docs-reference`
- Final score: 212
- Re-rank relevance: N/A

Evidence snippets:
- Media CDN supports the following ways of invalidating content: By host and URL path By URL prefix and wildcard By cache tags, including built-in tags for status, origin, and media type You can combine the invalidation parameters to target specific cached responses and to minimize origin load on the subsequent cache fill.
- You can use Media CDN with your existing origin infrastructure, whether the content is hosted within Cloud Storage, in another cloud, or within your on-premises infrastructure.
- Home Documentation Networking Media CDN Guides Send feedback Media CDN overview Stay organized with collections Save and categorize content based on your preferences.
- Using a route lets you optimize behavior based on the type of content, client attributes, and your freshness requirements for each route you define with Media CDN.

### Origins overview \_|\_ Media CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/media-cdn/docs/origins](https://docs.cloud.google.com/media-cdn/docs/origins)
- Source ID: `site-docs-root`
- Final score: 198
- Re-rank relevance: N/A

Evidence snippets:
- By configuring a flexible shielding region in the same geographical region as your centralized origin, you can optimize the following: Cache hit rate at the shield layer Origin offload Latency for cache misses and uncacheable content Performance stability Flexible shielding is compatible with any origin type configured in Media CDN.
- Best practices for origin failover When configuring multiple origins for failover or load balancing, verify that your media content and Vary , ETag , and Last-Modified header behaviors are consistent between your origins.
- Home Documentation Networking Media CDN Guides Send feedback Origins overview Stay organized with collections Save and categorize content based on your preferences.
- Origin connectivity The following sections describe how Media CDN connects to origins, how HTTP requests are made, and how you can authenticate requests.

