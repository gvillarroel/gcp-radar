---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:51.025Z"
product_name: "Media CDN"
product_slug: "media-cdn"
feature_name: "Per-origin header overrides"
feature_slug: "per-origin-header-overrides"
latest_feature_date: "2023-01-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/media-cdn/docs/caching"
  - "https://docs.cloud.google.com/media-cdn/docs/origins"
  - "https://docs.cloud.google.com/media-cdn/docs/routing"
  - "https://docs.cloud.google.com/media-cdn/docs/configuration"
keywords:
  - "per"
  - "origin"
  - "header"
  - "overrides"
  - "media"
  - "cdn"
  - "can"
  - "manipulate"
---

# Per-origin header overrides

Product: Media CDN
Coverage: MEDIUM

## Step 02 Summary

Media CDN can manipulate headers on a per-origin basis, including host rewrites and static authorization headers for failover origins; Media CDN can manipulate headers on a per-origin basis, including host rewrites and static authorization headers for failover origins.

## Extended Definition

Media CDN can manipulate headers on a per-origin basis, including host rewrites and static authorization headers for failover origins; Media CDN can manipulate headers on a per-origin basis, including host rewrites and static authorization headers for failover origins.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/media-cdn/docs/caching](https://docs.cloud.google.com/media-cdn/docs/caching)
- [https://docs.cloud.google.com/media-cdn/docs/origins](https://docs.cloud.google.com/media-cdn/docs/origins)
- [https://docs.cloud.google.com/media-cdn/docs/routing](https://docs.cloud.google.com/media-cdn/docs/routing)
- [https://docs.cloud.google.com/media-cdn/docs/configuration](https://docs.cloud.google.com/media-cdn/docs/configuration)

## Supporting Pages

### Configure caching behavior \_|\_ Media CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/media-cdn/docs/caching](https://docs.cloud.google.com/media-cdn/docs/caching)
- Source ID: `site-docs-root`
- Final score: 248
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In other cases, such as when interoperability with DASH is not required, the media playlist indicates to the player which bytes represent each chunk: #EXTINF:4.08, fs270.mp4 #EXT-X-PART:DURATION=1.02,URI="fs271.mp4",BYTERANGE=20000@0 #EXT-X-PART:DURATION=1.02,URI="fs271.mp4",BYTERANGE=23000@20000 #EXT-X-PART:DURATION=1.02,URI="fs271.mp4",BYTERANGE=18000@43000 #EXT-X-PRELOAD-HINT:TYPE=PART,URI="fs271.mp4",BYTERANGE-START=61000 You can configure how long Media CDN waits between reads by using the EdgeCacheOrigin.timeouts.readTimeout configuration value.
- To maximize client performance and origin offload, Media CDN can serve the requested individual byte ranges from its cache, consolidating them into a single response with an HTTP 206 Partial Response status code to the client with the Content-Type set to multipart/byteranges .
- If the origin sets an Expires header and Media CDN overrides the effective TTL (based on the timestamp), the Expires header is replaced with a Cache-Control header in the downstream response to the client.
- When the cache mode is set to Use Origin Headers , TTL settings cannot be configured because Media CDN relies on the origin to drive behavior.

### Origins overview \_|\_ Media CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/media-cdn/docs/origins](https://docs.cloud.google.com/media-cdn/docs/origins)
- Source ID: `site-docs-root`
- Final score: 247
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- By configuring a flexible shielding region in the same geographical region as your centralized origin, you can optimize the following: Cache hit rate at the shield layer Origin offload Latency for cache misses and uncacheable content Performance stability Flexible shielding is compatible with any origin type configured in Media CDN.
- Origin requirements To allow Media CDN to cache origin responses larger than 1 MiB, an origin must include the following in the response headers for GET requests, unless specified otherwise: A Last-Modified or ETag HTTP response header (a validator ).
- The following table describes how failover operates, and what response a client would observe: Scenario Failover configured User-facing status Media CDN attempts to connect to your origin, and receives no HTTP response after two attempts (default).
- The following table describes the timeout fields: Field Default Description connectTimeout 5 seconds The maximum amount of time Media CDN can take from starting the request to the origin until Media CDN determines whether the response is usable.

### Configure service routes \_|\_ Media CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/media-cdn/docs/routing](https://docs.cloud.google.com/media-cdn/docs/routing)
- Source ID: `site-docs-root`
- Final score: 232
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- These headers allow you to make cross-origin calls to your Media CDN services that might be hosted on a different domain (origin) from your website's frontend and might prevent cross-origin requests that you don't explicitly permit.
- To configure support for a set of methods for a route rule, specify a routeMethods section that has an allowed methods value for each method. routeRules : - priority : 5 description : "Video uploads" routeMethods : allowedMethods : [ "PUT" , "POST" , "OPTIONS" ] matchRules : - pathTemplateMatch : "/uploads/ .ts" origin : prod-video-storage - priority : 10 description : "Video serving" routeMethods : allowedMethods : [ "GET" , "HEAD" ] matchRules : - pathTemplateMatch : "/videos/ .ts" origin : prod-video-storage Path normalization Path normalization describes how Media CDN combines multiple representations of a URL into a single, canonical representation under specific scenarios.
- The following example shows how to route requests that match a specific header, query parameter, and path prefix for the host media.example.com : name : prod-service routing : hostRules : - hosts : - media.example.com pathMatcher : example routes pathMatchers : - name : example routes routeRules : - priority : 10 origin : staging-live-origin matchRules : - prefixMatch : /vod/ headerMatches : - headerName : "x-staging-client" presentMatch : true queryParameterMatches : - name : "live" exactMatch : "yes" routeAction : cdnPolicy : defaultTtl : 5s Path matching Media CDN supports full (exact), prefix, and wildcard path matching.
- For example, to map all requests with a path prefix of /legacy/ to your external bucket, you can configure both a hostRewrite and a pathPrefixRewrite to strip this prefix from the origin request: routeRules : - description : legacy backend matchRules : - prefixMatch : "/legacy/" routeAction : urlRewrite : hostRewrite : BUCKET-NAME.s3.REGION.amazonaws.com pathPrefixRewrite : / cdnPolicy : cacheMode : CACHE ALL STATIC defaultTtl : 3600s For more information about how the host header is set on origin requests, see the origin request headers documentation.

### Configuration overview \_|\_ Media CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/media-cdn/docs/configuration](https://docs.cloud.google.com/media-cdn/docs/configuration)
- Source ID: `site-docs-root`
- Final score: 221
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- IPv4, IPv6, logging enabled (default), and a managed SSL certificate configured The following example shows the gcloud output for this configuration: gcloud edge-cache origins describe prod-media-origin id: "2295067926314745283" creationTimestamp: "2019-11-13T09:53:48.757-08:00" name: "prod-media-origin" description: "" originAddress: "gs://bucket name/" failoverOrigin: "s3-origin" retryConditions: [HTTP 5XX, NOT FOUND] originProtocol: HTTP2 timeouts: connectTimeout: 5s maxAttemptsTimeout: 10 responseTimeout: 6s id: "2295067926314745283" creationTimestamp: "2019-11-13T09:53:48.757-08:00" name: "s3-origin" description: "" originAddress: "media.example.com.s3.amazonaws.com" retryConditions: [HTTP 5XX, NOT FOUND] originProtocol: HTTP2 gcloud edge-cache keysets describe prod-keyset id: "2295067926314745283" creationTimestamp: "2019-11-13T09:53:48.757-08:00" name: "prod-keyset" publicKeys: - name: "sept-2020-key" value: "DThVLjhAKm3VYOvLBAwFZ5XbjVyF98Ias8NZU0WEM9w=" - name: "aug-2020-key" value: "3nQa82ScYgDDAxJrKCqumSEg60VNODGR5dGAveJWsw4=" gcloud edge-cache services describe prod-media-service name: "prod-media-service" edgeSslCertificates: - "media-example-com-cert" - "video-serving-example-com-cert" requireTls: true routing: hostRules: - description: "prod hostnames" hosts: - "media.example.com" - "video-serving.example.net" pathMatcher: "routes" pathMatchers: - name: "routes" routeRules: - priority: 1 description: "prod video segments" origin: "prod-media-origin" matchRules: - pathTemplateMatch: "/ .ts" # HLS segments - pathTemplateMatch: "/ .m4s" # DASH / CMAF segments routeAction: cdnPolicy: cacheMode: "FORCE CACHE ALL" clientTtl: 3600s defaultTtl: 86400s signedRequestMode: REQUIRE SIGNATURES signedRequestKeySet: "prod-keyset" headerAction: responseHeadersToAdd: - headerName: cache-status headerValue: "{cdn cache status}" - headerName: proxy-status headerValue: "{proxy status}" - priority: 2 description: "prod manifest endpoints" origin: "prod-media-origin" matchRules: - pathTemplateMatch: "/ .m3u8" # HLS playlists - pathTemplateMatch: "/ .mpd" # DASH manifests routeAction: urlRewrite: pathPrefixRewrite: "/output/manifests" cdnPolicy: cacheMode: "CACHE ALL STATIC" clientTtl: 10s defaultTtl: 30s maxTtl: 120s headerAction: responseHeadersToAdd: - headerName: cache-status headerValue: "{cdn cache status}" - headerName: proxy-status headerValue: "{proxy status}" - priority: 3 # catch all routes should be the lowest priority route description: "catch all route" origin: "prod-media-origin" matchRules: - prefixMatch: / headerAction: responseHeadersToAdd: - headerName: cache-status headerValue: "{cdn cache status}" - headerName: proxy-status headerValue: "{proxy status}" Configuration options for Media CDN To configure Media CDN, you can use the following tools: Google Cloud console Imported YAML or JSON files The APIs directly Use the Google Cloud console Go to Media CDN For instructions that describe how to configure Media CDN in the Google Cloud console, see the quickstart .
- Example configuration The following list of resources describes a representative Media CDN configuration: An EdgeCacheOrigin : A Cloud Storage-based origin that retries cache fetches against an alternative origin (AWS S3) if the object isn't in Cloud Storage (for example, HTTP 404) or a 5xx error is encountered.
- Media CDN offers content delivery, cache off-load, origin shielding, request authorization and integration with Google Cloud external Application Load Balancers, Logging, and Monitoring platforms.
- Permissions You must have the Identity and Access Management permissions required to create Media CDN resources.

