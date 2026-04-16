---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:51.022Z"
product_name: "Media CDN"
product_slug: "media-cdn"
feature_name: "HTTP method filtering for route rules"
feature_slug: "http-method-filtering-for-route-rules"
latest_feature_date: "2024-09-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/media-cdn/docs/routing"
  - "https://docs.cloud.google.com/media-cdn/docs/quickstart"
  - "https://docs.cloud.google.com/media-cdn/docs/origins"
  - "https://docs.cloud.google.com/media-cdn/docs/caching"
keywords:
  - "http"
  - "method"
  - "filtering"
  - "for"
  - "route"
  - "rules"
  - "media"
  - "cdn"
---

# HTTP method filtering for route rules

Product: Media CDN
Coverage: MEDIUM

## Step 02 Summary

Media CDN can filter traffic by HTTP method at the route-rule level.

## Extended Definition

Media CDN can filter traffic by HTTP method at the route-rule level.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/media-cdn/docs/routing](https://docs.cloud.google.com/media-cdn/docs/routing)
- [https://docs.cloud.google.com/media-cdn/docs/quickstart](https://docs.cloud.google.com/media-cdn/docs/quickstart)
- [https://docs.cloud.google.com/media-cdn/docs/origins](https://docs.cloud.google.com/media-cdn/docs/origins)
- [https://docs.cloud.google.com/media-cdn/docs/caching](https://docs.cloud.google.com/media-cdn/docs/caching)

## Supporting Pages

### Configure service routes \_|\_ Media CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/media-cdn/docs/routing](https://docs.cloud.google.com/media-cdn/docs/routing)
- Source ID: `site-docs-root`
- Final score: 292
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To configure support for a set of methods for a route rule, specify a routeMethods section that has an allowed methods value for each method. routeRules : - priority : 5 description : "Video uploads" routeMethods : allowedMethods : [ "PUT" , "POST" , "OPTIONS" ] matchRules : - pathTemplateMatch : "/uploads/ .ts" origin : prod-video-storage - priority : 10 description : "Video serving" routeMethods : allowedMethods : [ "GET" , "HEAD" ] matchRules : - pathTemplateMatch : "/videos/ .ts" origin : prod-video-storage Path normalization Path normalization describes how Media CDN combines multiple representations of a URL into a single, canonical representation under specific scenarios.
- The following configuration demonstrates how to configure your Media CDN routing to support this: name : prod-service routing : hostRules : - hosts : - media.example.com pathMatcher : example routes pathMatchers : - name : example routes routeRules : the first route only matches video manifests - priority : 1 matchRules : - pathTemplateMatch : "/ .m3u8" # " " matches all path segments - pathTemplateMatch : "/ .mpd" origin : manifest-origin routeAction : cdnPolicy : cacheMode : FORCE CACHE ALL defaultTtl : 5s the second route matches video segments, fetches them from a separate origin server, caching them for a longer duration (1 day). - priority : 2 matchRules : - pathTemplateMatch : "/ .ts" - pathTemplateMatch : "/ .m4s" origin : segment-origin routeAction : cdnPolicy : cacheMode : FORCE CACHE ALL defaultTtl : 86400s Example: Capture path variables The following example shows how to use named variables to describe one or more path segments.
- N/A Example corsPolicy The following configuration example shows a basic corsPolicy configuration: routeRules : - priority : 1 matchRules : - prefixMatch : /stream/ routeAction : cdnPolicy : defaultTtl : 3600s corsPolicy : allowOrigins : - "https://stream.example.com" - "https://stream-staging.example.com" maxAge : 86400s # some browsers might only honor up to 7200s or less allowMethods : - "GET" - "HEAD" - "OPTIONS" allowHeaders : - "Content-Type" - "If-Modified-Since" - "Range" - "User-Agent" exposeHeaders : - "Content-Type" - "Content-Length" - "Date" Troubleshoot routing If some requests don't retrieve matching results or return errors, check the following: A route must have a matchRule with exactly one of prefixMatch , fullPathMatch , or pathTemplateMatch defined.
- The following example shows how to route requests that match a specific header, query parameter, and path prefix for the host media.example.com : name : prod-service routing : hostRules : - hosts : - media.example.com pathMatcher : example routes pathMatchers : - name : example routes routeRules : - priority : 10 origin : staging-live-origin matchRules : - prefixMatch : /vod/ headerMatches : - headerName : "x-staging-client" presentMatch : true queryParameterMatches : - name : "live" exactMatch : "yes" routeAction : cdnPolicy : defaultTtl : 5s Path matching Media CDN supports full (exact), prefix, and wildcard path matching.

### Set up a Media CDN service \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/media-cdn/docs/quickstart](https://docs.cloud.google.com/media-cdn/docs/quickstart)
- Source ID: `site-docs-root`
- Final score: 259
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note: Media CDN can take up to 10 minutes to create the service API Use the edgeCacheServices.create method : POST https://networkservices.googleapis.com/v1/ PARENT /edgeCacheServices?edgeCacheServiceId= SERVICE ID { "name": " SERVICE ID ", "routing": { "hostRules": [ { "hosts": [" DOMAIN "], "pathMatcher": "routes" } ], "pathMatchers": [ { "name": "routes", "routeRules": [ { "priority": "1", "matchRules": [ { "prefixMatch": "/" } ], "origin": " ORIGIN ", "routeAction": { "cdnPolicy": { "cacheMode": "CACHE ALL STATIC", "defaultTtl": "3600s" } } "headerAction": { "responseHeadersToAdd": [ { "headerName": "x-cache-status", "headerValue": "{cdn cache status}" } ] }, } ] } ] } } Replace the following: PARENT : the parent resource in the format projects/ PROJECT /locations/global SERVICE ID : the name of the service DOMAIN : the domain for the new service If you specify the domain name, Media CDN responds with a 404 error for other hosts.
- Such a file indicates the following: How routing works—by first matching the host and then the path How caching works—based on the cache mode and TTL How requests and responses are modified—for example, by inserting the cdn cache status variable into a response header Paste the following sample content into the file, and then save it: name : SERVICE routing : hostRules : - hosts : - DOMAIN pathMatcher : routes pathMatchers : - name : routes routeRules : - priority : 1 matchRules : - prefixMatch : / origin : ORIGIN routeAction : cdnPolicy : cacheMode : CACHE ALL STATIC defaultTtl : 3600s headerAction : responseHeadersToAdd : - headerName : "x-cache-status" headerValue : "{cdn cache status}" Replace the following: SERVICE : name of the service DOMAIN : the domain for the new service If you specify the domain name, Media CDN responds with a 404 error for other hosts.
- Note: Media CDN can take up to 10 minutes to create the service Terraform resource "google network services edge cache service" "default" { name = "cloud-media-service" routing { host rule { hosts = ["googlecloudexample.com"] path matcher = "routes" } path matcher { name = "routes" route rule { description = "a default route rule, priority=10 (low)" priority = 10 match rule { prefix match = "/" } origin = google network services edge cache origin.default.name route action { cdn policy { cache mode = "CACHE ALL STATIC" default ttl = "3600s" } } header action { response header to add { header name = "x-cache-status" header value = "{cdn cache status}" } } } } } } It might take several minutes for your first service to be created.
- After you've set up your domain, access your content with the following curl command: curl -svo /dev/null "http://DOMAIN NAME/FILE NAME" If you did not configure DNS to point to your provisioned IP addresses, use the resolve option to override the address that curl uses. curl -svo /dev/null --resolve DOMAIN NAME :80: IP ADDRESS "http:// DOMAIN NAME/FILE NAME " Replace the following: DOMAIN NAME : the host domain you specified while creating the service IP ADDRESS : the IP address of the service as visible in the Addresses column in the list of services FILE NAME : the name of the file you uploaded to the bucket Example: curl -svo /dev/null --resolve web.example.com:80:34.104.37.129 "http://web.example.com/file.mp4" The command initially produces output similar to the following, with the status miss , because Media CDN doesn't have the requested data already retrieved from the origin: < HTTP/2 200 OK ... < x-cache-status: den;miss ...

### Origins overview \_|\_ Media CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/media-cdn/docs/origins](https://docs.cloud.google.com/media-cdn/docs/origins)
- Source ID: `site-docs-root`
- Final score: 249
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Use the following URL to access the JSON file that contains the updated Google-assigned IP address ranges. https://www.gstatic.com/ipranges/mediacdn.json Failover and timeouts The following sections describe these configuration options: Timeouts: Determine how long Media CDN waits to connect to your origin or for it to respond to a request.
- Origin requirements To allow Media CDN to cache origin responses larger than 1 MiB, an origin must include the following in the response headers for GET requests, unless specified otherwise: A Last-Modified or ETag HTTP response header (a validator ).
- Note: If a request using an unsafe method fails on the first attempt to the primary origin, Media CDN responds to the client with an HTTP 502 Bad Gateway status code.
- Note: If a request using an unsafe method fails on the first attempt to the primary origin, Media CDN responds to the client with an HTTP 502 Bad Gateway status code.

### Configure caching behavior \_|\_ Media CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/media-cdn/docs/caching](https://docs.cloud.google.com/media-cdn/docs/caching)
- Source ID: `site-docs-root`
- Final score: 235
- Re-rank relevance: N/A

Evidence snippets:
- For example, to set a short, 5-second TTL for HTTP 404 (Not Found) responses, and a 10-second TTL for HTTP 405 (Method Not Allowed) responses, use the following YAML definition on each applicable route: cdnPolicy : negativeCaching : true negativeCachingPolicy : "404" : 5s "405" : 10s other status codes to apply TTLs for Important: When you configure a negativeCachingPolicy , specify all of the status codes (and their TTLs) that you want to cache.
- Routes without an explicit cdnPolicy configured behave as if they have the following configuration: cdnPolicy : cacheMode : CACHE ALL STATIC defaultTtl : 3600s cacheKeyPolicy : includeProtocol : false excludeHost : false excludeQueryString : false signedRequestMode : DISABLED negativeCaching : false Cacheable responses A cacheable response is an HTTP response that Media CDN can store and quickly retrieve, thus allowing for faster load times.
- To maximize client performance and origin offload, Media CDN can serve the requested individual byte ranges from its cache, consolidating them into a single response with an HTTP 206 Partial Response status code to the client with the Content-Type set to multipart/byteranges .
- Origin requirements To allow Media CDN to cache origin responses larger than 1 MiB, an origin must include the following in the response headers for GET requests, unless specified otherwise: A Last-Modified or ETag HTTP response header (a validator ).

