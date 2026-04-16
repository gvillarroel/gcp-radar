---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:51.023Z"
product_name: "Media CDN"
product_slug: "media-cdn"
feature_name: "Origin method proxying overrides"
feature_slug: "origin-method-proxying-overrides"
latest_feature_date: "2024-06-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/media-cdn/docs/caching"
  - "https://docs.cloud.google.com/media-cdn/docs/logging"
  - "https://docs.cloud.google.com/media-cdn/docs/origins"
  - "https://docs.cloud.google.com/media-cdn/docs/routing"
keywords:
  - "origin"
  - "method"
  - "proxying"
  - "overrides"
  - "media"
  - "cdn"
  - "can"
  - "proxy"
---

# Origin method proxying overrides

Product: Media CDN
Coverage: MEDIUM

## Step 02 Summary

Media CDN can proxy supported HTTP methods other than GET, HEAD, and OPTIONS to an origin on specific route rules.

## Extended Definition

Media CDN can proxy supported HTTP methods other than GET, HEAD, and OPTIONS to an origin on specific route rules.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/media-cdn/docs/caching](https://docs.cloud.google.com/media-cdn/docs/caching)
- [https://docs.cloud.google.com/media-cdn/docs/logging](https://docs.cloud.google.com/media-cdn/docs/logging)
- [https://docs.cloud.google.com/media-cdn/docs/origins](https://docs.cloud.google.com/media-cdn/docs/origins)
- [https://docs.cloud.google.com/media-cdn/docs/routing](https://docs.cloud.google.com/media-cdn/docs/routing)

## Supporting Pages

### Configure caching behavior \_|\_ Media CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/media-cdn/docs/caching](https://docs.cloud.google.com/media-cdn/docs/caching)
- Source ID: `site-docs-root`
- Final score: 256
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- With this setting, Media CDN returns a 503 Service Unavailable response for cacheable objects larger than the 25 MiB limit, instead of proxying the request to the origin.
- In other cases, such as when interoperability with DASH is not required, the media playlist indicates to the player which bytes represent each chunk: #EXTINF:4.08, fs270.mp4 #EXT-X-PART:DURATION=1.02,URI="fs271.mp4",BYTERANGE=20000@0 #EXT-X-PART:DURATION=1.02,URI="fs271.mp4",BYTERANGE=23000@20000 #EXT-X-PART:DURATION=1.02,URI="fs271.mp4",BYTERANGE=18000@43000 #EXT-X-PRELOAD-HINT:TYPE=PART,URI="fs271.mp4",BYTERANGE-START=61000 You can configure how long Media CDN waits between reads by using the EdgeCacheOrigin.timeouts.readTimeout configuration value.
- The following headers cannot be included in the cache key: Any header starting with access-control- Any header starting with sec-fetch- accept-encoding accept authorization connection content-md5 content-type cookie date forwarded from host if-match if-modified-since if-none-match origin proxy-authorization range referer referrer user-agent want-digest x-csrf-token x-csrftoken x-forwarded-for To include the HTTP method in the cache key, use the special header name :method .
- To maximize client performance and origin offload, Media CDN can serve the requested individual byte ranges from its cache, consolidating them into a single response with an HTTP 206 Partial Response status code to the client with the Content-Type set to multipart/byteranges .

### Request logging overview \_|\_ Media CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/media-cdn/docs/logging](https://docs.cloud.google.com/media-cdn/docs/logging)
- Source ID: `site-docs-root`
- Final score: 209
- Re-rank relevance: N/A

Evidence snippets:
- Example log entry The following provides an example log entry for a response served from cache: { "insertId" : "617fa16e-0000-2ac9-9993-d4f547fe67d4@a1" , "jsonPayload" : { "@type" : "type.googleapis.com/google.cloud.edgecache.v1.EdgeCacheLogEntry" , "tlsVersion" : "TLS 1.3" , "tlsCipherSuite" : "009C" , "cacheId" : "maa-132eed13faa13" , "clientAsn" : "9299" , "origin" : "example origin" , "clientRegionCode" : "IN" , "metroIataCode" : "bom" , "clientCity" : "Mumbai" , "latency" : "0.005105200s" , "proxyStatus" : "Google-Edge-Cache" , "httpTtfb" : "0.005056080s" , "cacheMode" : "FORCE CACHE ALL" , "cacheKeyFingerprint" : "c360ac18849b6336" , "cacheStatus" : "hit,stale" , "compressionAlgorithmApplied" : "br" , "enforcedSecurityPolicy" : { "outcome" : "ACCEPT" , "configuredAction" : "ACCEPT" , "name" : "example policy" , "priority" : 1000 , "configuredAction" : "DENY" , "threatIntelligence" : { "categories" : [ 0 : "iplist-public-clouds" ] } }, "originalRequestId" : "19d92668-3948-49d8-9244-25f8252043e5" , "proxyRegionCode" : "IN" , "requestId" : "4bde6381-cd17-47e1-8c2a-1aaa424a1156" , "originIp" : "74.125.128.128" }, "httpRequest" : { "requestMethod" : "GET" , "requestUrl" : "https://example.com/image.jpg" , "requestSize" : "3545" , "status" : 200 , "responseSize" : "3716" , "userAgent" : "Mozilla/5.0 (Macintosh; Intel Mac OS X 10 15 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36" , "remoteIp" : "62.36.0.43" , "protocol" : "HTTP/2" }, "resource" : { "type" : "edgecache.googleapis.com/EdgeCacheRouteRule" , "labels" : { "matched path" : "/" , "path matcher name" : "routes" , "service name" : "example service" , "resource container" : "projects/123456789" , "location" : "global" , "route destination" : "projects/123456789/locations/global/edgeCacheOrigins/example origin" , "route type" : "ORIGIN" } }, "timestamp" : "2022-11-19T00:24:13.695328200Z" , "logName" : "projects/my-project/logs/edgecache.googleapis.com%2Fedge cache request" , "receiveTimestamp" : "2022-11-19T00:24:16.715871645Z" } You can configure request logging in a few ways.
- Measured from when the CDN has finished proxying the request to the origin until the CDN has received the complete response from the backend.
- Measured from when the CDN has finished proxying the request to the origin until the CDN begins receiving response bytes from the origin.
- The value can be one of the following: DEFAULT GLOBAL : indicates that flexible shielding isn't configured SHIELDED : indicates that the region configured using flexShieldingRegion was used to serve the request SPILLED : indicates that the region configured using flexShieldingRegion couldn't be used for the request; the default origin was used This field appears only in logs for cache fill from an EdgeCacheOrigin resource. httpTtfb 0.157228207s The Duration from when the proxy begins receiving request bytes until the first byte of the response is sent (not received). latency 0.157415635s The Duration from when the proxy begins receiving request bytes until it has finished writing the response to the client. location The Location header in the response. metroIataCode MAA The IATA (airport) code of the city nearest the proxy. origin The EdgeCacheOrigin resource from which the response was proxied. originalRequestId 19d92668-3948-49d8-9244-25f8252043e4 The unique identifier assigned to the request that originally generated this response.

### Origins overview \_|\_ Media CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/media-cdn/docs/origins](https://docs.cloud.google.com/media-cdn/docs/origins)
- Source ID: `site-docs-root`
- Final score: 208
- Re-rank relevance: N/A

Evidence snippets:
- By configuring a flexible shielding region in the same geographical region as your centralized origin, you can optimize the following: Cache hit rate at the shield layer Origin offload Latency for cache misses and uncacheable content Performance stability Flexible shielding is compatible with any origin type configured in Media CDN.
- The following table describes the timeout fields: Field Default Description connectTimeout 5 seconds The maximum amount of time Media CDN can take from starting the request to the origin until Media CDN determines whether the response is usable.
- Note: If a request using an unsafe method fails on the first attempt to the primary origin, Media CDN responds to the client with an HTTP 502 Bad Gateway status code.
- Note: If a request using an unsafe method fails on the first attempt to the primary origin, Media CDN responds to the client with an HTTP 502 Bad Gateway status code.

### Configure service routes \_|\_ Media CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/media-cdn/docs/routing](https://docs.cloud.google.com/media-cdn/docs/routing)
- Source ID: `site-docs-root`
- Final score: 195
- Re-rank relevance: N/A

Evidence snippets:
- To configure support for a set of methods for a route rule, specify a routeMethods section that has an allowed methods value for each method. routeRules : - priority : 5 description : "Video uploads" routeMethods : allowedMethods : [ "PUT" , "POST" , "OPTIONS" ] matchRules : - pathTemplateMatch : "/uploads/ .ts" origin : prod-video-storage - priority : 10 description : "Video serving" routeMethods : allowedMethods : [ "GET" , "HEAD" ] matchRules : - pathTemplateMatch : "/videos/ .ts" origin : prod-video-storage Path normalization Path normalization describes how Media CDN combines multiple representations of a URL into a single, canonical representation under specific scenarios.
- Method filtering By default, Media CDN proxies only GET , HEAD , and OPTIONS methods to your origin and filters out the methods that can modify your origin.
- Note: If a request using an unsafe method fails on the first attempt to the primary origin, Media CDN responds to the client with an HTTP 502 Bad Gateway status code.
- The following configuration demonstrates how to configure your Media CDN routing to support this: name : prod-service routing : hostRules : - hosts : - media.example.com pathMatcher : example routes pathMatchers : - name : example routes routeRules : the first route only matches video manifests - priority : 1 matchRules : - pathTemplateMatch : "/ .m3u8" # " " matches all path segments - pathTemplateMatch : "/ .mpd" origin : manifest-origin routeAction : cdnPolicy : cacheMode : FORCE CACHE ALL defaultTtl : 5s the second route matches video segments, fetches them from a separate origin server, caching them for a longer duration (1 day). - priority : 2 matchRules : - pathTemplateMatch : "/ .ts" - pathTemplateMatch : "/ .m4s" origin : segment-origin routeAction : cdnPolicy : cacheMode : FORCE CACHE ALL defaultTtl : 86400s Example: Capture path variables The following example shows how to use named variables to describe one or more path segments.

