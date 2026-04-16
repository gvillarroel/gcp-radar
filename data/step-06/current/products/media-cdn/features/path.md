---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:51.028Z"
product_name: "Media CDN"
product_slug: "media-cdn"
feature_name: "path"
feature_slug: "path"
latest_feature_date: "2021-06-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/media-cdn/docs/cache-invalidation"
  - "https://docs.cloud.google.com/media-cdn/docs/caching"
  - "https://docs.cloud.google.com/media-cdn/docs/overview"
  - "https://docs.cloud.google.com/media-cdn/docs/quickstart"
keywords:
  - "path"
  - "media"
  - "cdn"
  - "can"
  - "invalidate"
  - "cached"
  - "content"
  - "by"
---

# path

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
- [https://docs.cloud.google.com/media-cdn/docs/quickstart](https://docs.cloud.google.com/media-cdn/docs/quickstart)

## Supporting Pages

### Invalidate cached content \_|\_ Media CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/media-cdn/docs/cache-invalidation](https://docs.cloud.google.com/media-cdn/docs/cache-invalidation)
- Source ID: `site-docs-root`
- Final score: 317
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Media CDN supports multiple ways of selecting content to be invalidated, as follows: Host and URL path URL prefix (wildcard) Cache tags, including built-in tags for status , origin , and content-type You can combine these invalidation parameters to target specific cached responses and minimize origin load on the subsequent cache fill.
- Supported invalidation syntax The supported invalidation syntax is as follows: Type Syntax Example Host invalidation Invalidate cached responses for the specified host. gcloud edge-cache services invalidate-cache SERVICE NAME \ --host="media.example.com" Path invalidation Invalidate cached responses for the specified path or path prefix. gcloud edge-cache services invalidate-cache SERVICE NAME \ --path="/content/1234/hls/ " gcloud edge-cache services invalidate-cache SERVICE NAME \ --path="/videos/funny.mp4" Cache tag invalidation on HTTP status code, origin name, or MIME type Invalidate cached responses with a matching tag.
- Cache tag limitations Cache tags have the following restrictions: Must not exceed 120 bytes per tag Must not exceed 4 KiB (4096 bytes) of total tag names per cached object Must not exceed 50 tags per object, not including default tags added by Media CDN Must be a valid HTTP token name, as defined in Section 3.2.6 of HTTP RFC 7230 Must not include the built-in status= , origin= , or content-type= prefixes (which are ignored).
- For example, you can invalidate all cached HTTP 404 responses by specifying status=404 in an invalidation request. content-type= MIME TYPE The content-type cache tag is set based on the MIME type set in the Content-Type HTTP response header.

### Configure caching behavior \_|\_ Media CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/media-cdn/docs/caching](https://docs.cloud.google.com/media-cdn/docs/caching)
- Source ID: `site-docs-root`
- Final score: 263
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To maximize client performance and origin offload, Media CDN can serve the requested individual byte ranges from its cache, consolidating them into a single response with an HTTP 206 Partial Response status code to the client with the Content-Type set to multipart/byteranges .
- For popular content, Media CDN revalidates that the cached response is the latest version by issuing a HEAD request to the origin to confirm that the headers have not changed.
- In other cases, such as when interoperability with DASH is not required, the media playlist indicates to the player which bytes represent each chunk: #EXTINF:4.08, fs270.mp4 #EXT-X-PART:DURATION=1.02,URI="fs271.mp4",BYTERANGE=20000@0 #EXT-X-PART:DURATION=1.02,URI="fs271.mp4",BYTERANGE=23000@20000 #EXT-X-PART:DURATION=1.02,URI="fs271.mp4",BYTERANGE=18000@43000 #EXT-X-PRELOAD-HINT:TYPE=PART,URI="fs271.mp4",BYTERANGE-START=61000 You can configure how long Media CDN waits between reads by using the EdgeCacheOrigin.timeouts.readTimeout configuration value.
- When using the CACHE ALL STATIC cache or FORCE CACHE ALL modes, this is not required. private N/A A response with the private directive isn't cached by Media CDN, even if the response is otherwise considered cacheable.

### Media CDN overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/media-cdn/docs/overview](https://docs.cloud.google.com/media-cdn/docs/overview)
- Source ID: `site-docs-reference`
- Final score: 243
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Media CDN supports the following ways of invalidating content: By host and URL path By URL prefix and wildcard By cache tags, including built-in tags for status, origin, and media type You can combine the invalidation parameters to target specific cached responses and to minimize origin load on the subsequent cache fill.
- You can use Media CDN with your existing origin infrastructure, whether the content is hosted within Cloud Storage, in another cloud, or within your on-premises infrastructure.
- Extensibility Media CDN lets you add custom code to the request-response processing path by using Service Extensions plugins ( Preview ).
- Home Documentation Networking Media CDN Guides Send feedback Media CDN overview Stay organized with collections Save and categorize content based on your preferences.

### Set up a Media CDN service \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/media-cdn/docs/quickstart](https://docs.cloud.google.com/media-cdn/docs/quickstart)
- Source ID: `site-docs-root`
- Final score: 229
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Such a file indicates the following: How routing works—by first matching the host and then the path How caching works—based on the cache mode and TTL How requests and responses are modified—for example, by inserting the cdn cache status variable into a response header Paste the following sample content into the file, and then save it: name : SERVICE routing : hostRules : - hosts : - DOMAIN pathMatcher : routes pathMatchers : - name : routes routeRules : - priority : 1 matchRules : - prefixMatch : / origin : ORIGIN routeAction : cdnPolicy : cacheMode : CACHE ALL STATIC defaultTtl : 3600s headerAction : responseHeadersToAdd : - headerName : "x-cache-status" headerValue : "{cdn cache status}" Replace the following: SERVICE : name of the service DOMAIN : the domain for the new service If you specify the domain name, Media CDN responds with a 404 error for other hosts.
- The retrieved details include the IP addresses assigned to the service: ipv4Addresses: IPV4 ADDRESS ipv6Addresses: IPV6 ADDRESS Test whether a response is being cached Before testing the service, make sure that you have cacheable content stored at your origin so that Media CDN can retrieve it.
- Note: Media CDN can take up to 10 minutes to create the service API Use the edgeCacheServices.create method : POST https://networkservices.googleapis.com/v1/ PARENT /edgeCacheServices?edgeCacheServiceId= SERVICE ID { "name": " SERVICE ID ", "routing": { "hostRules": [ { "hosts": [" DOMAIN "], "pathMatcher": "routes" } ], "pathMatchers": [ { "name": "routes", "routeRules": [ { "priority": "1", "matchRules": [ { "prefixMatch": "/" } ], "origin": " ORIGIN ", "routeAction": { "cdnPolicy": { "cacheMode": "CACHE ALL STATIC", "defaultTtl": "3600s" } } "headerAction": { "responseHeadersToAdd": [ { "headerName": "x-cache-status", "headerValue": "{cdn cache status}" } ] }, } ] } ] } } Replace the following: PARENT : the parent resource in the format projects/ PROJECT /locations/global SERVICE ID : the name of the service DOMAIN : the domain for the new service If you specify the domain name, Media CDN responds with a 404 error for other hosts.
- Note: Media CDN can take up to 10 minutes to create the service Terraform resource "google network services edge cache service" "default" { name = "cloud-media-service" routing { host rule { hosts = ["googlecloudexample.com"] path matcher = "routes" } path matcher { name = "routes" route rule { description = "a default route rule, priority=10 (low)" priority = 10 match rule { prefix match = "/" } origin = google network services edge cache origin.default.name route action { cdn policy { cache mode = "CACHE ALL STATIC" default ttl = "3600s" } } header action { response header to add { header name = "x-cache-status" header value = "{cdn cache status}" } } } } } } It might take several minutes for your first service to be created.

