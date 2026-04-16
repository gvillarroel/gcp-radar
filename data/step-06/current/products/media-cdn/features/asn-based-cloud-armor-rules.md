---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:51.022Z"
product_name: "Media CDN"
product_slug: "media-cdn"
feature_name: "ASN-based Cloud Armor rules"
feature_slug: "asn-based-cloud-armor-rules"
latest_feature_date: "2025-09-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/media-cdn/docs/logging"
  - "https://docs.cloud.google.com/media-cdn/docs/overview"
  - "https://docs.cloud.google.com/media-cdn/docs/quickstart"
  - "https://docs.cloud.google.com/media-cdn/docs/routing"
keywords:
  - "asn"
  - "based"
  - "armor"
  - "rules"
  - "media"
  - "cdn"
  - "can"
  - "use"
---

# ASN-based Cloud Armor rules

Product: Media CDN
Coverage: MEDIUM

## Step 02 Summary

Media CDN can use Cloud Armor rules to allow or deny traffic based on the client's autonomous system number; Media CDN can use Cloud Armor rules to allow or deny traffic based on the client's autonomous system number.

## Extended Definition

Media CDN can use Cloud Armor rules to allow or deny traffic based on the client's autonomous system number; Media CDN can use Cloud Armor rules to allow or deny traffic based on the client's autonomous system number.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/media-cdn/docs/logging](https://docs.cloud.google.com/media-cdn/docs/logging)
- [https://docs.cloud.google.com/media-cdn/docs/overview](https://docs.cloud.google.com/media-cdn/docs/overview)
- [https://docs.cloud.google.com/media-cdn/docs/quickstart](https://docs.cloud.google.com/media-cdn/docs/quickstart)
- [https://docs.cloud.google.com/media-cdn/docs/routing](https://docs.cloud.google.com/media-cdn/docs/routing)

## Supporting Pages

### Request logging overview \_|\_ Media CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/media-cdn/docs/logging](https://docs.cloud.google.com/media-cdn/docs/logging)
- Source ID: `site-docs-root`
- Final score: 245
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Additional metadata about the request within the structPayload, including the following: Client ASN Client location data ID (city) of the caches used to fulfill the response Time to first byte (TTFB) and time to last byte (TTLB), in milliseconds, for the HTTP-level response TLS SNI hostname TLS version used Common Media Client Data (CMCD) information Cache-specific fields The jsonPayload object of a Media CDN log contains metadata specific to how Media CDN serves an object, whether the object was cached, and any error states encountered.
- Example log entry The following provides an example log entry for a response served from cache: { "insertId" : "617fa16e-0000-2ac9-9993-d4f547fe67d4@a1" , "jsonPayload" : { "@type" : "type.googleapis.com/google.cloud.edgecache.v1.EdgeCacheLogEntry" , "tlsVersion" : "TLS 1.3" , "tlsCipherSuite" : "009C" , "cacheId" : "maa-132eed13faa13" , "clientAsn" : "9299" , "origin" : "example origin" , "clientRegionCode" : "IN" , "metroIataCode" : "bom" , "clientCity" : "Mumbai" , "latency" : "0.005105200s" , "proxyStatus" : "Google-Edge-Cache" , "httpTtfb" : "0.005056080s" , "cacheMode" : "FORCE CACHE ALL" , "cacheKeyFingerprint" : "c360ac18849b6336" , "cacheStatus" : "hit,stale" , "compressionAlgorithmApplied" : "br" , "enforcedSecurityPolicy" : { "outcome" : "ACCEPT" , "configuredAction" : "ACCEPT" , "name" : "example policy" , "priority" : 1000 , "configuredAction" : "DENY" , "threatIntelligence" : { "categories" : [ 0 : "iplist-public-clouds" ] } }, "originalRequestId" : "19d92668-3948-49d8-9244-25f8252043e5" , "proxyRegionCode" : "IN" , "requestId" : "4bde6381-cd17-47e1-8c2a-1aaa424a1156" , "originIp" : "74.125.128.128" }, "httpRequest" : { "requestMethod" : "GET" , "requestUrl" : "https://example.com/image.jpg" , "requestSize" : "3545" , "status" : 200 , "responseSize" : "3716" , "userAgent" : "Mozilla/5.0 (Macintosh; Intel Mac OS X 10 15 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36" , "remoteIp" : "62.36.0.43" , "protocol" : "HTTP/2" }, "resource" : { "type" : "edgecache.googleapis.com/EdgeCacheRouteRule" , "labels" : { "matched path" : "/" , "path matcher name" : "routes" , "service name" : "example service" , "resource container" : "projects/123456789" , "location" : "global" , "route destination" : "projects/123456789/locations/global/edgeCacheOrigins/example origin" , "route type" : "ORIGIN" } }, "timestamp" : "2022-11-19T00:24:13.695328200Z" , "logName" : "projects/my-project/logs/edgecache.googleapis.com%2Fedge cache request" , "receiveTimestamp" : "2022-11-19T00:24:16.715871645Z" } You can configure request logging in a few ways.
- Media CDN supports data transmitted through HTTP request headers or query parameters and does not log values for the following keys: dl (deadline), nor (next object request), nrr (next range request), ot (object type), rtp (requested maximum throughput), sf (streaming format), su (startup), tb (top bitrate), or v (CMCD version). compressionAlgorithmApplied br The algorithm used to compress the response referred to in this log entry.
- Populated only if this is different than request id for cached responses. originIp The IP address used to contact the EdgeCacheOrigin resource from which the response was proxied. previewSecurityPolicy The Google Cloud Armor edge security policy that applies to the client's request, with the preview rules taken into account.

### Media CDN overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/media-cdn/docs/overview](https://docs.cloud.google.com/media-cdn/docs/overview)
- Source ID: `site-docs-reference`
- Final score: 232
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can use Media CDN with your existing origin infrastructure, whether the content is hosted within Cloud Storage, in another cloud, or within your on-premises infrastructure.
- Cloud Armor also supports Autonomous System Numbers (ASNs) in edge security policies for Media CDN.
- Media CDN uses Google Cloud Armor to allow or deny access to content.
- Media CDN supports the following ways of invalidating content: By host and URL path By URL prefix and wildcard By cache tags, including built-in tags for status, origin, and media type You can combine the invalidation parameters to target specific cached responses and to minimize origin load on the subsequent cache fill.

### Set up a Media CDN service \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/media-cdn/docs/quickstart](https://docs.cloud.google.com/media-cdn/docs/quickstart)
- Source ID: `site-docs-root`
- Final score: 222
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note: Media CDN can take up to 10 minutes to create the service API Use the edgeCacheServices.create method : POST https://networkservices.googleapis.com/v1/ PARENT /edgeCacheServices?edgeCacheServiceId= SERVICE ID { "name": " SERVICE ID ", "routing": { "hostRules": [ { "hosts": [" DOMAIN "], "pathMatcher": "routes" } ], "pathMatchers": [ { "name": "routes", "routeRules": [ { "priority": "1", "matchRules": [ { "prefixMatch": "/" } ], "origin": " ORIGIN ", "routeAction": { "cdnPolicy": { "cacheMode": "CACHE ALL STATIC", "defaultTtl": "3600s" } } "headerAction": { "responseHeadersToAdd": [ { "headerName": "x-cache-status", "headerValue": "{cdn cache status}" } ] }, } ] } ] } } Replace the following: PARENT : the parent resource in the format projects/ PROJECT /locations/global SERVICE ID : the name of the service DOMAIN : the domain for the new service If you specify the domain name, Media CDN responds with a 404 error for other hosts.
- Such a file indicates the following: How routing works—by first matching the host and then the path How caching works—based on the cache mode and TTL How requests and responses are modified—for example, by inserting the cdn cache status variable into a response header Paste the following sample content into the file, and then save it: name : SERVICE routing : hostRules : - hosts : - DOMAIN pathMatcher : routes pathMatchers : - name : routes routeRules : - priority : 1 matchRules : - prefixMatch : / origin : ORIGIN routeAction : cdnPolicy : cacheMode : CACHE ALL STATIC defaultTtl : 3600s headerAction : responseHeadersToAdd : - headerName : "x-cache-status" headerValue : "{cdn cache status}" Replace the following: SERVICE : name of the service DOMAIN : the domain for the new service If you specify the domain name, Media CDN responds with a 404 error for other hosts.
- Note: Media CDN can take up to 10 minutes to create the service gcloud In Cloud Shell, use a text editor to create a local file called my-service.yaml .
- After you've set up your domain, access your content with the following curl command: curl -svo /dev/null "http://DOMAIN NAME/FILE NAME" If you did not configure DNS to point to your provisioned IP addresses, use the resolve option to override the address that curl uses. curl -svo /dev/null --resolve DOMAIN NAME :80: IP ADDRESS "http:// DOMAIN NAME/FILE NAME " Replace the following: DOMAIN NAME : the host domain you specified while creating the service IP ADDRESS : the IP address of the service as visible in the Addresses column in the list of services FILE NAME : the name of the file you uploaded to the bucket Example: curl -svo /dev/null --resolve web.example.com:80:34.104.37.129 "http://web.example.com/file.mp4" The command initially produces output similar to the following, with the status miss , because Media CDN doesn't have the requested data already retrieved from the origin: < HTTP/2 200 OK ... < x-cache-status: den;miss ...

### Configure service routes \_|\_ Media CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/media-cdn/docs/routing](https://docs.cloud.google.com/media-cdn/docs/routing)
- Source ID: `site-docs-root`
- Final score: 221
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In the following example, you can see that the /live/us/ route would never be matched because the /live/ route is at a higher priority: routeRules : - priority : 1 description : "Live routes" matchRules : - prefixMatch : /live/ routeAction : cdnPolicy : defaultTtl : 5s - priority : 2 description : "U.S based live streams" matchRules : This would never be matched, as the /live/ prefixMatch at priority 1 would always take precedence. - prefixMatch : /live/us/ routeAction : cdnPolicy : defaultTtl : 5s - priority : 999 description : "Catch-all route" matchRules : - prefixMatch : / To address this, you put the more specific (longer) route at a higher priority: routeRules : - priority : 1 description : "U.S based live streams" matchRules : The more specific (longer) match is at a higher priority, and now matches requests as expected. - prefixMatch : /live/us/ routeAction : cdnPolicy : defaultTtl : 5s - priority : 2 description : "Live routes" matchRules : - prefixMatch : /live/ routeAction : cdnPolicy : defaultTtl : 5s - priority : 999 description : "Catch-all route" matchRules : - prefixMatch : / This allows the more specific route to match requests correctly.
- The following configuration demonstrates how to configure your Media CDN routing to support this: name : prod-service routing : hostRules : - hosts : - media.example.com pathMatcher : example routes pathMatchers : - name : example routes routeRules : the first route only matches video manifests - priority : 1 matchRules : - pathTemplateMatch : "/ .m3u8" # " " matches all path segments - pathTemplateMatch : "/ .mpd" origin : manifest-origin routeAction : cdnPolicy : cacheMode : FORCE CACHE ALL defaultTtl : 5s the second route matches video segments, fetches them from a separate origin server, caching them for a longer duration (1 day). - priority : 2 matchRules : - pathTemplateMatch : "/ .ts" - pathTemplateMatch : "/ .m4s" origin : segment-origin routeAction : cdnPolicy : cacheMode : FORCE CACHE ALL defaultTtl : 86400s Example: Capture path variables The following example shows how to use named variables to describe one or more path segments.
- The following configuration is an example of a prefix-based redirect, where you redirect users visiting https://cdn.example.com/on-demand/ to https://cdn.example.com/streaming/ . name : prod-service routing : hostRules : - hosts : - cdn.example.com pathMatcher : example routes pathMatchers : - name : example routes routeRules : - priority : 10 matchRules : - prefixMatch : "/on-demand/" urlRedirect : The prefix matched in matchRules.prefixMatch is replaced by this value prefixRedirect : "/streaming/" redirectResponseCode : TEMPORARY REDIRECT # corresponds to a HTTP 307 This example also changes the redirect to a temporary redirect, which prevents clients (such as browsers) from caching it.
- To configure support for a set of methods for a route rule, specify a routeMethods section that has an allowed methods value for each method. routeRules : - priority : 5 description : "Video uploads" routeMethods : allowedMethods : [ "PUT" , "POST" , "OPTIONS" ] matchRules : - pathTemplateMatch : "/uploads/ .ts" origin : prod-video-storage - priority : 10 description : "Video serving" routeMethods : allowedMethods : [ "GET" , "HEAD" ] matchRules : - pathTemplateMatch : "/videos/ .ts" origin : prod-video-storage Path normalization Path normalization describes how Media CDN combines multiple representations of a URL into a single, canonical representation under specific scenarios.

