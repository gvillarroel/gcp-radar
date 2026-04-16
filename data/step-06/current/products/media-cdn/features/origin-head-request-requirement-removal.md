---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:51.021Z"
product_name: "Media CDN"
product_slug: "media-cdn"
feature_name: "Origin HEAD request requirement removal"
feature_slug: "origin-head-request-requirement-removal"
latest_feature_date: "2025-12-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/media-cdn/docs/origins"
  - "https://docs.cloud.google.com/media-cdn/docs/caching"
  - "https://docs.cloud.google.com/media-cdn/docs/logging"
  - "https://docs.cloud.google.com/media-cdn/docs/overview"
keywords:
  - "origin"
  - "head"
  - "request"
  - "requirement"
  - "removal"
  - "media"
  - "cdn"
  - "can"
---

# Origin HEAD request requirement removal

Product: Media CDN
Coverage: MEDIUM

## Step 02 Summary

Media CDN can fetch objects from the origin without issuing a preliminary HEAD request.

## Extended Definition

Media CDN can fetch objects from the origin without issuing a preliminary HEAD request.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/media-cdn/docs/origins](https://docs.cloud.google.com/media-cdn/docs/origins)
- [https://docs.cloud.google.com/media-cdn/docs/caching](https://docs.cloud.google.com/media-cdn/docs/caching)
- [https://docs.cloud.google.com/media-cdn/docs/logging](https://docs.cloud.google.com/media-cdn/docs/logging)
- [https://docs.cloud.google.com/media-cdn/docs/overview](https://docs.cloud.google.com/media-cdn/docs/overview)

## Supporting Pages

### Origins overview \_|\_ Media CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/media-cdn/docs/origins](https://docs.cloud.google.com/media-cdn/docs/origins)
- Source ID: `site-docs-root`
- Final score: 260
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Origin requirements To allow Media CDN to cache origin responses larger than 1 MiB, an origin must include the following in the response headers for GET requests, unless specified otherwise: A Last-Modified or ETag HTTP response header (a validator ).
- The following table describes the timeout fields: Field Default Description connectTimeout 5 seconds The maximum amount of time Media CDN can take from starting the request to the origin until Media CDN determines whether the response is usable.
- Origin connectivity The following sections describe how Media CDN connects to origins, how HTTP requests are made, and how you can authenticate requests.
- Origin request headers When connecting to an origin, Media CDN uses the Host header from the client request by default.

### Configure caching behavior \_|\_ Media CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/media-cdn/docs/caching](https://docs.cloud.google.com/media-cdn/docs/caching)
- Source ID: `site-docs-root`
- Final score: 246
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Origin requirements To allow Media CDN to cache origin responses larger than 1 MiB, an origin must include the following in the response headers for GET requests, unless specified otherwise: A Last-Modified or ETag HTTP response header (a validator ).
- If a Vary header is present in the response, Media CDN doesn't cache it, unless the header specifies either one of the headers that are configured as a cache key setting or one of the following values: Accept: used to indicate which media types the client accepts Accept-Encoding: used to indicate which compression types the client accepts Available-Dictionary: used to provide the hash of an available dictionary for compression Origin/X-Origin: typically used for cross-origin resource sharing X-Goog-Allowed-Resources: supports Google Cloud organization restriction Sec-Fetch-Dest/Sec-Fetch-Mode/Sec-Fetch-Site: used to fetch metadata request headers Media CDN caches responses with a Vary header in the response by using the value of the header as part of the cache key.
- To maximize client performance and origin offload, Media CDN can serve the requested individual byte ranges from its cache, consolidating them into a single response with an HTTP 206 Partial Response status code to the client with the Content-Type set to multipart/byteranges .
- Cache keys You can reduce the number of times Media CDN needs to contact your origin by considering what uniquely identifies a request, and removing components that might often change between requests.

### Request logging overview \_|\_ Media CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/media-cdn/docs/logging](https://docs.cloud.google.com/media-cdn/docs/logging)
- Source ID: `site-docs-root`
- Final score: 237
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The value can be one of the following: DEFAULT GLOBAL : indicates that flexible shielding isn't configured SHIELDED : indicates that the region configured using flexShieldingRegion was used to serve the request SPILLED : indicates that the region configured using flexShieldingRegion couldn't be used for the request; the default origin was used This field appears only in logs for cache fill from an EdgeCacheOrigin resource. httpTtfb 0.157228207s The Duration from when the proxy begins receiving request bytes until the first byte of the response is sent (not received). latency 0.157415635s The Duration from when the proxy begins receiving request bytes until it has finished writing the response to the client. location The Location header in the response. metroIataCode MAA The IATA (airport) code of the city nearest the proxy. origin The EdgeCacheOrigin resource from which the response was proxied. originalRequestId 19d92668-3948-49d8-9244-25f8252043e4 The unique identifier assigned to the request that originally generated this response.
- If your total number of requests is similar to the total number of unique fingerprints, it might indicate that your cache keys are too specific. cacheMode USE ORIGIN HEADERS The cdnPolicy.cacheMode configured on the route that matched this request. cacheStatus Cache hit: hit Full cache miss: fetch, miss, miss The cache status at each cache node between the user and the origin shield, where the rightmost value represents the cache closest to the user.
- Media CDN supports data transmitted through HTTP request headers or query parameters and does not log values for the following keys: dl (deadline), nor (next object request), nrr (next range request), ot (object type), rtp (requested maximum throughput), sf (streaming format), su (startup), tb (top bitrate), or v (CMCD version). compressionAlgorithmApplied br The algorithm used to compress the response referred to in this log entry.
- Example log entry The following provides an example log entry for a response served from cache: { "insertId" : "617fa16e-0000-2ac9-9993-d4f547fe67d4@a1" , "jsonPayload" : { "@type" : "type.googleapis.com/google.cloud.edgecache.v1.EdgeCacheLogEntry" , "tlsVersion" : "TLS 1.3" , "tlsCipherSuite" : "009C" , "cacheId" : "maa-132eed13faa13" , "clientAsn" : "9299" , "origin" : "example origin" , "clientRegionCode" : "IN" , "metroIataCode" : "bom" , "clientCity" : "Mumbai" , "latency" : "0.005105200s" , "proxyStatus" : "Google-Edge-Cache" , "httpTtfb" : "0.005056080s" , "cacheMode" : "FORCE CACHE ALL" , "cacheKeyFingerprint" : "c360ac18849b6336" , "cacheStatus" : "hit,stale" , "compressionAlgorithmApplied" : "br" , "enforcedSecurityPolicy" : { "outcome" : "ACCEPT" , "configuredAction" : "ACCEPT" , "name" : "example policy" , "priority" : 1000 , "configuredAction" : "DENY" , "threatIntelligence" : { "categories" : [ 0 : "iplist-public-clouds" ] } }, "originalRequestId" : "19d92668-3948-49d8-9244-25f8252043e5" , "proxyRegionCode" : "IN" , "requestId" : "4bde6381-cd17-47e1-8c2a-1aaa424a1156" , "originIp" : "74.125.128.128" }, "httpRequest" : { "requestMethod" : "GET" , "requestUrl" : "https://example.com/image.jpg" , "requestSize" : "3545" , "status" : 200 , "responseSize" : "3716" , "userAgent" : "Mozilla/5.0 (Macintosh; Intel Mac OS X 10 15 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36" , "remoteIp" : "62.36.0.43" , "protocol" : "HTTP/2" }, "resource" : { "type" : "edgecache.googleapis.com/EdgeCacheRouteRule" , "labels" : { "matched path" : "/" , "path matcher name" : "routes" , "service name" : "example service" , "resource container" : "projects/123456789" , "location" : "global" , "route destination" : "projects/123456789/locations/global/edgeCacheOrigins/example origin" , "route type" : "ORIGIN" } }, "timestamp" : "2022-11-19T00:24:13.695328200Z" , "logName" : "projects/my-project/logs/edgecache.googleapis.com%2Fedge cache request" , "receiveTimestamp" : "2022-11-19T00:24:16.715871645Z" } You can configure request logging in a few ways.

### Media CDN overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/media-cdn/docs/overview](https://docs.cloud.google.com/media-cdn/docs/overview)
- Source ID: `site-docs-reference`
- Final score: 232
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can configure what items Media CDN considers as part of a cache key, which can reduce requests from Media CDN to the upstream origin.
- Media CDN supports the following ways of invalidating content: By host and URL path By URL prefix and wildcard By cache tags, including built-in tags for status, origin, and media type You can combine the invalidation parameters to target specific cached responses and to minimize origin load on the subsequent cache fill.
- You can use Media CDN with your existing origin infrastructure, whether the content is hosted within Cloud Storage, in another cloud, or within your on-premises infrastructure.
- You can grant Media CDN access to your private Cloud Storage buckets and authenticate requests to ensure that only valid Media CDN requests are granted.

