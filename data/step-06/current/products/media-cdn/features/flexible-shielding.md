---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:51.021Z"
product_name: "Media CDN"
product_slug: "media-cdn"
feature_name: "Flexible shielding"
feature_slug: "flexible-shielding"
latest_feature_date: "2025-11-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/media-cdn/docs/origins"
  - "https://docs.cloud.google.com/media-cdn/docs/caching"
  - "https://docs.cloud.google.com/media-cdn/docs/logging"
  - "https://docs.cloud.google.com/media-cdn/docs/routing"
keywords:
  - "flexible"
  - "shielding"
  - "media"
  - "cdn"
  - "lets"
  - "you"
  - "specify"
  - "single"
---

# Flexible shielding

Product: Media CDN
Coverage: MEDIUM

## Step 02 Summary

Media CDN lets you specify a single geographic region for origin shielding so cache fills route through that region; Media CDN lets you specify a single geographic region for origin shielding so cache fills route through that region.

## Extended Definition

Media CDN lets you specify a single geographic region for origin shielding so cache fills route through that region; Media CDN lets you specify a single geographic region for origin shielding so cache fills route through that region.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/media-cdn/docs/origins](https://docs.cloud.google.com/media-cdn/docs/origins)
- [https://docs.cloud.google.com/media-cdn/docs/caching](https://docs.cloud.google.com/media-cdn/docs/caching)
- [https://docs.cloud.google.com/media-cdn/docs/logging](https://docs.cloud.google.com/media-cdn/docs/logging)
- [https://docs.cloud.google.com/media-cdn/docs/routing](https://docs.cloud.google.com/media-cdn/docs/routing)

## Supporting Pages

### Origins overview \_|\_ Media CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/media-cdn/docs/origins](https://docs.cloud.google.com/media-cdn/docs/origins)
- Source ID: `site-docs-root`
- Final score: 266
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- By configuring a flexible shielding region in the same geographical region as your centralized origin, you can optimize the following: Cache hit rate at the shield layer Origin offload Latency for cache misses and uncacheable content Performance stability Flexible shielding is compatible with any origin type configured in Media CDN.
- In scenarios where your origin is centralized in one region but your users are globally distributed, the default origin shielding behavior, which is based on user location, might be suboptimal in the following ways: Increase latency for cache misses when the default shield location is geographically distant from your centralized origin Reduced origin offload by scattering cache-fill requests across multiple global default shield locations instead of concentrating them Flexible shielding helps you overcome these limitations by configuring a single, specific geographic region for origin shielding , typically selected to be near your centralized origin.
- Media CDN lets you fetch content from your origin infrastructure, whether content is hosted within Google Cloud, in another cloud, or on-premises.
- Use the following URL to access the JSON file that contains the updated Google-assigned IP address ranges. https://www.gstatic.com/ipranges/mediacdn.json Failover and timeouts The following sections describe these configuration options: Timeouts: Determine how long Media CDN waits to connect to your origin or for it to respond to a request.

### Configure caching behavior \_|\_ Media CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/media-cdn/docs/caching](https://docs.cloud.google.com/media-cdn/docs/caching)
- Source ID: `site-docs-root`
- Final score: 207
- Re-rank relevance: N/A

Evidence snippets:
- This lets you set the TTL for any of the status codes allowed by Media CDN: 300, 301, 302, 307, 308, 400, 403, 404, 405, 410, 451, 500, 501, 502, 503, and 504.
- In other cases, such as when interoperability with DASH is not required, the media playlist indicates to the player which bytes represent each chunk: #EXTINF:4.08, fs270.mp4 #EXT-X-PART:DURATION=1.02,URI="fs271.mp4",BYTERANGE=20000@0 #EXT-X-PART:DURATION=1.02,URI="fs271.mp4",BYTERANGE=23000@20000 #EXT-X-PART:DURATION=1.02,URI="fs271.mp4",BYTERANGE=18000@43000 #EXT-X-PRELOAD-HINT:TYPE=PART,URI="fs271.mp4",BYTERANGE-START=61000 You can configure how long Media CDN waits between reads by using the EdgeCacheOrigin.timeouts.readTimeout configuration value.
- For example, to set a short, 5-second TTL for HTTP 404 (Not Found) responses, and a 10-second TTL for HTTP 405 (Method Not Allowed) responses, use the following YAML definition on each applicable route: cdnPolicy : negativeCaching : true negativeCachingPolicy : "404" : 5s "405" : 10s other status codes to apply TTLs for Important: When you configure a negativeCachingPolicy , specify all of the status codes (and their TTLs) that you want to cache.
- For example, to exclude client-specific playback ID and timestamp information from the cache key, configure the following: cdnPolicy : cacheMode : CACHE ALL STATIC defaultTtl : 86400s cacheKeyPolicy : excludedQueryParameters : [ "playback-id" , "timestamp" ] For a given route, you can specify one of includedQueryParameters or excludedQueryParameters .

### Request logging overview \_|\_ Media CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/media-cdn/docs/logging](https://docs.cloud.google.com/media-cdn/docs/logging)
- Source ID: `site-docs-root`
- Final score: 206
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Networking Media CDN Guides Send feedback Request logging overview Stay organized with collections Save and categorize content based on your preferences.
- The value can be one of the following: DEFAULT GLOBAL : indicates that flexible shielding isn't configured SHIELDED : indicates that the region configured using flexShieldingRegion was used to serve the request SPILLED : indicates that the region configured using flexShieldingRegion couldn't be used for the request; the default origin was used This field appears only in logs for cache fill from an EdgeCacheOrigin resource. httpTtfb 0.157228207s The Duration from when the proxy begins receiving request bytes until the first byte of the response is sent (not received). latency 0.157415635s The Duration from when the proxy begins receiving request bytes until it has finished writing the response to the client. location The Location header in the response. metroIataCode MAA The IATA (airport) code of the city nearest the proxy. origin The EdgeCacheOrigin resource from which the response was proxied. originalRequestId 19d92668-3948-49d8-9244-25f8252043e4 The unique identifier assigned to the request that originally generated this response.
- Additional metadata about the request within the structPayload, including the following: Client ASN Client location data ID (city) of the caches used to fulfill the response Time to first byte (TTFB) and time to last byte (TTLB), in milliseconds, for the HTTP-level response TLS SNI hostname TLS version used Common Media Client Data (CMCD) information Cache-specific fields The jsonPayload object of a Media CDN log contains metadata specific to how Media CDN serves an object, whether the object was cached, and any error states encountered.
- If your total number of requests is similar to the total number of unique fingerprints, it might indicate that your cache keys are too specific. cacheMode USE ORIGIN HEADERS The cdnPolicy.cacheMode configured on the route that matched this request. cacheStatus Cache hit: hit Full cache miss: fetch, miss, miss The cache status at each cache node between the user and the origin shield, where the rightmost value represents the cache closest to the user.

### Configure service routes \_|\_ Media CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/media-cdn/docs/routing](https://docs.cloud.google.com/media-cdn/docs/routing)
- Source ID: `site-docs-root`
- Final score: 198
- Re-rank relevance: N/A

Evidence snippets:
- To configure support for a set of methods for a route rule, specify a routeMethods section that has an allowed methods value for each method. routeRules : - priority : 5 description : "Video uploads" routeMethods : allowedMethods : [ "PUT" , "POST" , "OPTIONS" ] matchRules : - pathTemplateMatch : "/uploads/ .ts" origin : prod-video-storage - priority : 10 description : "Video serving" routeMethods : allowedMethods : [ "GET" , "HEAD" ] matchRules : - pathTemplateMatch : "/videos/ .ts" origin : prod-video-storage Path normalization Path normalization describes how Media CDN combines multiple representations of a URL into a single, canonical representation under specific scenarios.
- Configure CORS Media CDN lets you define a CORS policy on a route for an EdgeCacheService .
- The following configuration demonstrates how to configure your Media CDN routing to support this: name : prod-service routing : hostRules : - hosts : - media.example.com pathMatcher : example routes pathMatchers : - name : example routes routeRules : the first route only matches video manifests - priority : 1 matchRules : - pathTemplateMatch : "/ .m3u8" # " " matches all path segments - pathTemplateMatch : "/ .mpd" origin : manifest-origin routeAction : cdnPolicy : cacheMode : FORCE CACHE ALL defaultTtl : 5s the second route matches video segments, fetches them from a separate origin server, caching them for a longer duration (1 day). - priority : 2 matchRules : - pathTemplateMatch : "/ .ts" - pathTemplateMatch : "/ .m4s" origin : segment-origin routeAction : cdnPolicy : cacheMode : FORCE CACHE ALL defaultTtl : 86400s Example: Capture path variables The following example shows how to use named variables to describe one or more path segments.
- Similarly, to match against query parameters, specify one or more queryParameterMatches as follows: name : prod-service routing : hostRules : - hosts : - media.example.com pathMatcher : example routes pathMatchers : - name : example routes routeRules : - priority : 1 origin : eu-live-origin-prod matchRules : - prefixMatch : "/videos/" queryParameterMatches : - name : "playback type" exactMatch : "live" - name : "geo" exactMatch : "eu" In this example, a client request of https://cdn.example.com/videos/1234/abcd/xyz.m3u8?playback type=live&geo=eu matches this route.

