---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:51.023Z"
product_name: "Media CDN"
product_slug: "media-cdn"
feature_name: "Cloud Armor edge security policies"
feature_slug: "cloud-armor-edge-security-policies"
latest_feature_date: "2024-06-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/media-cdn/docs/overview"
  - "https://docs.cloud.google.com/media-cdn/docs/logging"
  - "https://docs.cloud.google.com/service-extensions/docs/media-cdn-extensions-overview"
  - "https://docs.cloud.google.com/media-cdn/docs/routing"
keywords:
  - "armor"
  - "edge"
  - "security"
  - "policies"
  - "media"
  - "cdn"
  - "can"
  - "use"
---

# Cloud Armor edge security policies

Product: Media CDN
Coverage: MEDIUM

## Step 02 Summary

Media CDN can use globally scoped Cloud Armor edge security policies to filter Layer 7 requests; Media CDN can use globally scoped Cloud Armor edge security policies to filter Layer 7 requests.

## Extended Definition

Media CDN can use globally scoped Cloud Armor edge security policies to filter Layer 7 requests; Media CDN can use globally scoped Cloud Armor edge security policies to filter Layer 7 requests.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/media-cdn/docs/overview](https://docs.cloud.google.com/media-cdn/docs/overview)
- [https://docs.cloud.google.com/media-cdn/docs/logging](https://docs.cloud.google.com/media-cdn/docs/logging)
- [https://docs.cloud.google.com/service-extensions/docs/media-cdn-extensions-overview](https://docs.cloud.google.com/service-extensions/docs/media-cdn-extensions-overview)
- [https://docs.cloud.google.com/media-cdn/docs/routing](https://docs.cloud.google.com/media-cdn/docs/routing)

## Supporting Pages

### Media CDN overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/media-cdn/docs/overview](https://docs.cloud.google.com/media-cdn/docs/overview)
- Source ID: `site-docs-reference`
- Final score: 307
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloud Armor also supports Autonomous System Numbers (ASNs) in edge security policies for Media CDN.
- Google Cloud Armor support Media CDN supports Cloud Armor edge security policies.
- You can use Media CDN with your existing origin infrastructure, whether the content is hosted within Cloud Storage, in another cloud, or within your on-premises infrastructure.
- Media CDN uses Google's global edge-caching infrastructure to serve your content as close to your users as possible.

### Request logging overview \_|\_ Media CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/media-cdn/docs/logging](https://docs.cloud.google.com/media-cdn/docs/logging)
- Source ID: `site-docs-root`
- Final score: 257
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Example log entry The following provides an example log entry for a response served from cache: { "insertId" : "617fa16e-0000-2ac9-9993-d4f547fe67d4@a1" , "jsonPayload" : { "@type" : "type.googleapis.com/google.cloud.edgecache.v1.EdgeCacheLogEntry" , "tlsVersion" : "TLS 1.3" , "tlsCipherSuite" : "009C" , "cacheId" : "maa-132eed13faa13" , "clientAsn" : "9299" , "origin" : "example origin" , "clientRegionCode" : "IN" , "metroIataCode" : "bom" , "clientCity" : "Mumbai" , "latency" : "0.005105200s" , "proxyStatus" : "Google-Edge-Cache" , "httpTtfb" : "0.005056080s" , "cacheMode" : "FORCE CACHE ALL" , "cacheKeyFingerprint" : "c360ac18849b6336" , "cacheStatus" : "hit,stale" , "compressionAlgorithmApplied" : "br" , "enforcedSecurityPolicy" : { "outcome" : "ACCEPT" , "configuredAction" : "ACCEPT" , "name" : "example policy" , "priority" : 1000 , "configuredAction" : "DENY" , "threatIntelligence" : { "categories" : [ 0 : "iplist-public-clouds" ] } }, "originalRequestId" : "19d92668-3948-49d8-9244-25f8252043e5" , "proxyRegionCode" : "IN" , "requestId" : "4bde6381-cd17-47e1-8c2a-1aaa424a1156" , "originIp" : "74.125.128.128" }, "httpRequest" : { "requestMethod" : "GET" , "requestUrl" : "https://example.com/image.jpg" , "requestSize" : "3545" , "status" : 200 , "responseSize" : "3716" , "userAgent" : "Mozilla/5.0 (Macintosh; Intel Mac OS X 10 15 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36" , "remoteIp" : "62.36.0.43" , "protocol" : "HTTP/2" }, "resource" : { "type" : "edgecache.googleapis.com/EdgeCacheRouteRule" , "labels" : { "matched path" : "/" , "path matcher name" : "routes" , "service name" : "example service" , "resource container" : "projects/123456789" , "location" : "global" , "route destination" : "projects/123456789/locations/global/edgeCacheOrigins/example origin" , "route type" : "ORIGIN" } }, "timestamp" : "2022-11-19T00:24:13.695328200Z" , "logName" : "projects/my-project/logs/edgecache.googleapis.com%2Fedge cache request" , "receiveTimestamp" : "2022-11-19T00:24:16.715871645Z" } You can configure request logging in a few ways.
- Populated only if this is different than request id for cached responses. originIp The IP address used to contact the EdgeCacheOrigin resource from which the response was proxied. previewSecurityPolicy The Google Cloud Armor edge security policy that applies to the client's request, with the preview rules taken into account.
- The value can be one of the following: DEFAULT GLOBAL : indicates that flexible shielding isn't configured SHIELDED : indicates that the region configured using flexShieldingRegion was used to serve the request SPILLED : indicates that the region configured using flexShieldingRegion couldn't be used for the request; the default origin was used This field appears only in logs for cache fill from an EdgeCacheOrigin resource. httpTtfb 0.157228207s The Duration from when the proxy begins receiving request bytes until the first byte of the response is sent (not received). latency 0.157415635s The Duration from when the proxy begins receiving request bytes until it has finished writing the response to the client. location The Location header in the response. metroIataCode MAA The IATA (airport) code of the city nearest the proxy. origin The EdgeCacheOrigin resource from which the response was proxied. originalRequestId 19d92668-3948-49d8-9244-25f8252043e4 The unique identifier assigned to the request that originally generated this response.
- Additional metadata about the request within the structPayload, including the following: Client ASN Client location data ID (city) of the caches used to fulfill the response Time to first byte (TTFB) and time to last byte (TTLB), in milliseconds, for the HTTP-level response TLS SNI hostname TLS version used Common Media Client Data (CMCD) information Cache-specific fields The jsonPayload object of a Media CDN log contains metadata specific to how Media CDN serves an object, whether the object was cached, and any error states encountered.

### "Media CDN extensions overview \_|\_ Service Extensions \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/service-extensions/docs/media-cdn-extensions-overview](https://docs.cloud.google.com/service-extensions/docs/media-cdn-extensions-overview)
- Source ID: `site-iam-reference`
- Final score: 247
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- How Media CDN plugins work On the Media CDN request path, plugins run after route matching and Google Cloud Armor edge security policies but before cache key calculation and the addition of custom headers to the origin.
- As Figure 1 shows, with Service Extensions, you can use plugins to place custom code that implements specific actions at the edge, in front of the cache in the Media CDN processing path.
- For example, you might need to normalize headers to improve caching, use a custom URL signing algorithm, or port legacy behavior from an existing CDN to Media CDN.
- Media CDN provides many built-in core capabilities to address the most common use cases for content delivery networks (CDNs).

### Configure service routes \_|\_ Media CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/media-cdn/docs/routing](https://docs.cloud.google.com/media-cdn/docs/routing)
- Source ID: `site-docs-root`
- Final score: 230
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Use the gcloud edge-cache services import command . gcloud edge - cache services import SERVICE NAME \ -- source = FILENAME . yaml Match requests A Media CDN configuration contains a set of routes defined in the Routing section for an EdgeCacheService resource.
- In the following example, you can see that the /live/us/ route would never be matched because the /live/ route is at a higher priority: routeRules : - priority : 1 description : "Live routes" matchRules : - prefixMatch : /live/ routeAction : cdnPolicy : defaultTtl : 5s - priority : 2 description : "U.S based live streams" matchRules : This would never be matched, as the /live/ prefixMatch at priority 1 would always take precedence. - prefixMatch : /live/us/ routeAction : cdnPolicy : defaultTtl : 5s - priority : 999 description : "Catch-all route" matchRules : - prefixMatch : / To address this, you put the more specific (longer) route at a higher priority: routeRules : - priority : 1 description : "U.S based live streams" matchRules : The more specific (longer) match is at a higher priority, and now matches requests as expected. - prefixMatch : /live/us/ routeAction : cdnPolicy : defaultTtl : 5s - priority : 2 description : "Live routes" matchRules : - prefixMatch : /live/ routeAction : cdnPolicy : defaultTtl : 5s - priority : 999 description : "Catch-all route" matchRules : - prefixMatch : / This allows the more specific route to match requests correctly.
- The following configuration demonstrates how to configure your Media CDN routing to support this: name : prod-service routing : hostRules : - hosts : - media.example.com pathMatcher : example routes pathMatchers : - name : example routes routeRules : the first route only matches video manifests - priority : 1 matchRules : - pathTemplateMatch : "/ .m3u8" # " " matches all path segments - pathTemplateMatch : "/ .mpd" origin : manifest-origin routeAction : cdnPolicy : cacheMode : FORCE CACHE ALL defaultTtl : 5s the second route matches video segments, fetches them from a separate origin server, caching them for a longer duration (1 day). - priority : 2 matchRules : - pathTemplateMatch : "/ .ts" - pathTemplateMatch : "/ .m4s" origin : segment-origin routeAction : cdnPolicy : cacheMode : FORCE CACHE ALL defaultTtl : 86400s Example: Capture path variables The following example shows how to use named variables to describe one or more path segments.
- To configure support for a set of methods for a route rule, specify a routeMethods section that has an allowed methods value for each method. routeRules : - priority : 5 description : "Video uploads" routeMethods : allowedMethods : [ "PUT" , "POST" , "OPTIONS" ] matchRules : - pathTemplateMatch : "/uploads/ .ts" origin : prod-video-storage - priority : 10 description : "Video serving" routeMethods : allowedMethods : [ "GET" , "HEAD" ] matchRules : - pathTemplateMatch : "/videos/ .ts" origin : prod-video-storage Path normalization Path normalization describes how Media CDN combines multiple representations of a URL into a single, canonical representation under specific scenarios.

