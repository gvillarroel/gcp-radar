---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:51.027Z"
product_name: "Media CDN"
product_slug: "media-cdn"
feature_name: "Token-based client authentication"
feature_slug: "token-based-client-authentication"
latest_feature_date: "2022-09-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/media-cdn/docs/overview"
  - "https://docs.cloud.google.com/media-cdn/docs/caching"
  - "https://docs.cloud.google.com/media-cdn/docs/routing"
  - "https://docs.cloud.google.com/media-cdn/docs/origins"
keywords:
  - "token"
  - "based"
  - "client"
  - "authentication"
  - "media"
  - "cdn"
  - "can"
  - "authenticate"
---

# Token-based client authentication

Product: Media CDN
Coverage: MEDIUM

## Step 02 Summary

Media CDN can authenticate requests using signed tokens for custom identifiers, HMAC-based cryptography, and token propagation across playback sessions.

## Extended Definition

Media CDN can authenticate requests using signed tokens for custom identifiers, HMAC-based cryptography, and token propagation across playback sessions.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/media-cdn/docs/overview](https://docs.cloud.google.com/media-cdn/docs/overview)
- [https://docs.cloud.google.com/media-cdn/docs/caching](https://docs.cloud.google.com/media-cdn/docs/caching)
- [https://docs.cloud.google.com/media-cdn/docs/routing](https://docs.cloud.google.com/media-cdn/docs/routing)
- [https://docs.cloud.google.com/media-cdn/docs/origins](https://docs.cloud.google.com/media-cdn/docs/origins)

## Supporting Pages

### Media CDN overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/media-cdn/docs/overview](https://docs.cloud.google.com/media-cdn/docs/overview)
- Source ID: `site-docs-reference`
- Final score: 224
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Using a route lets you optimize behavior based on the type of content, client attributes, and your freshness requirements for each route you define with Media CDN.
- You can grant Media CDN access to your private Cloud Storage buckets and authenticate requests to ensure that only valid Media CDN requests are granted.
- Media CDN supports the following ways of invalidating content: By host and URL path By URL prefix and wildcard By cache tags, including built-in tags for status, origin, and media type You can combine the invalidation parameters to target specific cached responses and to minimize origin load on the subsequent cache fill.
- Client connectivity features Media CDN supports modern networking protocols such as HTTP/2 and QUIC from the client to the edge, increasing throughput and reducing overall network latency.

### Configure caching behavior \_|\_ Media CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/media-cdn/docs/caching](https://docs.cloud.google.com/media-cdn/docs/caching)
- Source ID: `site-docs-root`
- Final score: 209
- Re-rank relevance: N/A

Evidence snippets:
- To maximize client performance and origin offload, Media CDN can serve the requested individual byte ranges from its cache, consolidating them into a single response with an HTTP 206 Partial Response status code to the client with the Content-Type set to multipart/byteranges .
- If the origin sets an Expires header and Media CDN overrides the effective TTL (based on the timestamp), the Expires header is replaced with a Cache-Control header in the downstream response to the client.
- N/A Where possible, Media CDN is RFC-compliant (HTTP RFC 7234 ), but favors optimizing for cache offload and minimizing the impact that clients can have on hit rate and overall origin load.
- If a Vary header is present in the response, Media CDN doesn't cache it, unless the header specifies either one of the headers that are configured as a cache key setting or one of the following values: Accept: used to indicate which media types the client accepts Accept-Encoding: used to indicate which compression types the client accepts Available-Dictionary: used to provide the hash of an available dictionary for compression Origin/X-Origin: typically used for cross-origin resource sharing X-Goog-Allowed-Resources: supports Google Cloud organization restriction Sec-Fetch-Dest/Sec-Fetch-Mode/Sec-Fetch-Site: used to fetch metadata request headers Media CDN caches responses with a Vary header in the response by using the value of the header as part of the cache key.

### Configure service routes \_|\_ Media CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/media-cdn/docs/routing](https://docs.cloud.google.com/media-cdn/docs/routing)
- Source ID: `site-docs-root`
- Final score: 201
- Re-rank relevance: N/A

Evidence snippets:
- In the following example, you can see that the /live/us/ route would never be matched because the /live/ route is at a higher priority: routeRules : - priority : 1 description : "Live routes" matchRules : - prefixMatch : /live/ routeAction : cdnPolicy : defaultTtl : 5s - priority : 2 description : "U.S based live streams" matchRules : This would never be matched, as the /live/ prefixMatch at priority 1 would always take precedence. - prefixMatch : /live/us/ routeAction : cdnPolicy : defaultTtl : 5s - priority : 999 description : "Catch-all route" matchRules : - prefixMatch : / To address this, you put the more specific (longer) route at a higher priority: routeRules : - priority : 1 description : "U.S based live streams" matchRules : The more specific (longer) match is at a higher priority, and now matches requests as expected. - prefixMatch : /live/us/ routeAction : cdnPolicy : defaultTtl : 5s - priority : 2 description : "Live routes" matchRules : - prefixMatch : /live/ routeAction : cdnPolicy : defaultTtl : 5s - priority : 999 description : "Catch-all route" matchRules : - prefixMatch : / This allows the more specific route to match requests correctly.
- The following configuration is an example of a prefix-based redirect, where you redirect users visiting https://cdn.example.com/on-demand/ to https://cdn.example.com/streaming/ . name : prod-service routing : hostRules : - hosts : - cdn.example.com pathMatcher : example routes pathMatchers : - name : example routes routeRules : - priority : 10 matchRules : - prefixMatch : "/on-demand/" urlRedirect : The prefix matched in matchRules.prefixMatch is replaced by this value prefixRedirect : "/streaming/" redirectResponseCode : TEMPORARY REDIRECT # corresponds to a HTTP 307 This example also changes the redirect to a temporary redirect, which prevents clients (such as browsers) from caching it.
- To configure support for a set of methods for a route rule, specify a routeMethods section that has an allowed methods value for each method. routeRules : - priority : 5 description : "Video uploads" routeMethods : allowedMethods : [ "PUT" , "POST" , "OPTIONS" ] matchRules : - pathTemplateMatch : "/uploads/ .ts" origin : prod-video-storage - priority : 10 description : "Video serving" routeMethods : allowedMethods : [ "GET" , "HEAD" ] matchRules : - pathTemplateMatch : "/videos/ .ts" origin : prod-video-storage Path normalization Path normalization describes how Media CDN combines multiple representations of a URL into a single, canonical representation under specific scenarios.
- Example: Remove a path prefix For example, to rewrite a client request URL from /vod/videos/hls/1234/abc.ts to /videos/hls/1234/abc.ts (removing /vod from the path), you can use the pathPrefixRewrite feature: name : prod-service routing : hostRules : - hosts : - cdn.example.com pathMatcher : example routes pathMatchers : - name : example routes routeRules : - priority : 1 origin : my-origin matchRules : - prefixMatch : "/vod/videos/" routeAction : urlRewrite : pathPrefixRewrite : "/videos/" A pathPrefixRewrite works by replacing the entire path prefix matched in the matchRules[].prefixMatch with the value of pathPrefixRewrite .

### Origins overview \_|\_ Media CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/media-cdn/docs/origins](https://docs.cloud.google.com/media-cdn/docs/origins)
- Source ID: `site-docs-root`
- Final score: 188
- Re-rank relevance: N/A

Evidence snippets:
- Origin connectivity The following sections describe how Media CDN connects to origins, how HTTP requests are made, and how you can authenticate requests.
- The following table documents what the origin sees in the incoming request under different configuration scenarios: Client Request EdgeCacheService.hostRewrite EdgeCacheOrigin.hostRewrite originAddress Host header / TLS SNI at origin media.example.com None None backend.example.com media.example.com media.example.com service.example.com None backend.example.com service.example.com media.example.com None origin.example.com backend.example.com origin.example.com media.example.com service.example.com origin.example.com backend.example.com origin.example.com media.example.com service.example.com origin.example.com gs://vod-content-bucket set automatically based on the bucket name The primary origin and any failover origins see the same host header if they share the same routeRule or hostRewrite configuration.
- By configuring a flexible shielding region in the same geographical region as your centralized origin, you can optimize the following: Cache hit rate at the shield layer Origin offload Latency for cache misses and uncacheable content Performance stability Flexible shielding is compatible with any origin type configured in Media CDN.
- Yes HTTP 502 Bad Gateway If Media CDN receives a status code matching any configured retryConditions , such as an HTTP 404 Not Found or HTTP 429 Too Many Requests error, and subsequent retry and failover origin requests continue to fail, an HTTP 502 Bad Gateway error is returned to the client after origin attempts are exhausted.

