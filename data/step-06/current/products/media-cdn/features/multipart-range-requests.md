---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:51.021Z"
product_name: "Media CDN"
product_slug: "media-cdn"
feature_name: "Multipart range requests"
feature_slug: "multipart-range-requests"
latest_feature_date: "2025-12-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/media-cdn/docs/caching"
  - "https://docs.cloud.google.com/media-cdn/docs/routing"
  - "https://docs.cloud.google.com/media-cdn/docs/origins"
  - "https://docs.cloud.google.com/media-cdn/docs/logging"
keywords:
  - "multipart"
  - "range"
  - "requests"
  - "media"
  - "cdn"
  - "supports"
  - "requesting"
  - "multiple"
---

# Multipart range requests

Product: Media CDN
Coverage: MEDIUM

## Step 02 Summary

Media CDN supports requesting multiple non-contiguous byte ranges in a single HTTP request; Media CDN supports requesting multiple non-contiguous byte ranges in a single HTTP request.

## Extended Definition

Media CDN supports requesting multiple non-contiguous byte ranges in a single HTTP request; Media CDN supports requesting multiple non-contiguous byte ranges in a single HTTP request.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/media-cdn/docs/caching](https://docs.cloud.google.com/media-cdn/docs/caching)
- [https://docs.cloud.google.com/media-cdn/docs/routing](https://docs.cloud.google.com/media-cdn/docs/routing)
- [https://docs.cloud.google.com/media-cdn/docs/origins](https://docs.cloud.google.com/media-cdn/docs/origins)
- [https://docs.cloud.google.com/media-cdn/docs/logging](https://docs.cloud.google.com/media-cdn/docs/logging)

## Supporting Pages

### Configure caching behavior \_|\_ Media CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/media-cdn/docs/caching](https://docs.cloud.google.com/media-cdn/docs/caching)
- Source ID: `site-docs-root`
- Final score: 285
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Multipart range requests Media CDN supports multipart range requests, which enable users to request multiple non-contiguous segments of a file in a single HTTP request—for example, Range: bytes=0-499, 1000-1499 .
- Open-ended range requests Media CDN supports "open ended" Range requests (for example, a request with Range: bytes=0- ) that keep a request open against the origin until the response is closed by the origin (for example, the origin writes all bytes to the wire) or times out.
- For cacheable responses, when a client requests a multipart range, Media CDN optimizes the process by converting the request into a set of single-part range requests.
- Byte-range requests Media CDN supports HTTP range requests as defined in RFC 9110 .

### Configure service routes \_|\_ Media CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/media-cdn/docs/routing](https://docs.cloud.google.com/media-cdn/docs/routing)
- Source ID: `site-docs-root`
- Final score: 206
- Re-rank relevance: N/A

Evidence snippets:
- The following example shows how to route requests that match a specific header, query parameter, and path prefix for the host media.example.com : name : prod-service routing : hostRules : - hosts : - media.example.com pathMatcher : example routes pathMatchers : - name : example routes routeRules : - priority : 10 origin : staging-live-origin matchRules : - prefixMatch : /vod/ headerMatches : - headerName : "x-staging-client" presentMatch : true queryParameterMatches : - name : "live" exactMatch : "yes" routeAction : cdnPolicy : defaultTtl : 5s Path matching Media CDN supports full (exact), prefix, and wildcard path matching.
- Redirect requests Media CDN supports three types of redirects: Host redirects, which redirect only the host (domain), keeping the path and query parameters unchanged.
- N/A Example corsPolicy The following configuration example shows a basic corsPolicy configuration: routeRules : - priority : 1 matchRules : - prefixMatch : /stream/ routeAction : cdnPolicy : defaultTtl : 3600s corsPolicy : allowOrigins : - "https://stream.example.com" - "https://stream-staging.example.com" maxAge : 86400s # some browsers might only honor up to 7200s or less allowMethods : - "GET" - "HEAD" - "OPTIONS" allowHeaders : - "Content-Type" - "If-Modified-Since" - "Range" - "User-Agent" exposeHeaders : - "Content-Type" - "Content-Length" - "Date" Troubleshoot routing If some requests don't retrieve matching results or return errors, check the following: A route must have a matchRule with exactly one of prefixMatch , fullPathMatch , or pathTemplateMatch defined.
- To configure support for a set of methods for a route rule, specify a routeMethods section that has an allowed methods value for each method. routeRules : - priority : 5 description : "Video uploads" routeMethods : allowedMethods : [ "PUT" , "POST" , "OPTIONS" ] matchRules : - pathTemplateMatch : "/uploads/ .ts" origin : prod-video-storage - priority : 10 description : "Video serving" routeMethods : allowedMethods : [ "GET" , "HEAD" ] matchRules : - pathTemplateMatch : "/videos/ .ts" origin : prod-video-storage Path normalization Path normalization describes how Media CDN combines multiple representations of a URL into a single, canonical representation under specific scenarios.

### Origins overview \_|\_ Media CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/media-cdn/docs/origins](https://docs.cloud.google.com/media-cdn/docs/origins)
- Source ID: `site-docs-root`
- Final score: 204
- Re-rank relevance: N/A

Evidence snippets:
- Allow the origin to receive traffic from Media CDN To reduce the risk of unauthorized access to your content, use an IP allowlist at the origin to block access to all IP addresses except the specific IP address ranges that Google uses to send requests to external origins.
- Retry origin requests Media CDN supports origin retries, allowing unsuccessful requests to the origin to be retried.
- Supported origins and protocols Media CDN directly supports any publicly reachable HTTP endpoint as an origin, including the following: Cloud Storage buckets, including private buckets through Identity and Access Management service accounts External Application Load Balancers Amazon S3-compatible buckets, including private buckets that use AWS Signature Version 4 Other publicly available object storage, such as Azure Blob Storage Publicly available web servers, such as public VMs or on-premises hosts Connectivity to origins is over secure tunnels and Google's global backbone network.
- Use the following URL to access the JSON file that contains the updated Google-assigned IP address ranges. https://www.gstatic.com/ipranges/mediacdn.json Failover and timeouts The following sections describe these configuration options: Timeouts: Determine how long Media CDN waits to connect to your origin or for it to respond to a request.

### Request logging overview \_|\_ Media CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/media-cdn/docs/logging](https://docs.cloud.google.com/media-cdn/docs/logging)
- Source ID: `site-docs-root`
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- Media CDN supports data transmitted through HTTP request headers or query parameters and does not log values for the following keys: dl (deadline), nor (next object request), nrr (next range request), ot (object type), rtp (requested maximum throughput), sf (streaming format), su (startup), tb (top bitrate), or v (CMCD version). compressionAlgorithmApplied br The algorithm used to compress the response referred to in this log entry.
- Additional metadata about the request within the structPayload, including the following: Client ASN Client location data ID (city) of the caches used to fulfill the response Time to first byte (TTFB) and time to last byte (TTLB), in milliseconds, for the HTTP-level response TLS SNI hostname TLS version used Common Media Client Data (CMCD) information Cache-specific fields The jsonPayload object of a Media CDN log contains metadata specific to how Media CDN serves an object, whether the object was cached, and any error states encountered.
- If your total number of requests is similar to the total number of unique fingerprints, it might indicate that your cache keys are too specific. cacheMode USE ORIGIN HEADERS The cdnPolicy.cacheMode configured on the route that matched this request. cacheStatus Cache hit: hit Full cache miss: fetch, miss, miss The cache status at each cache node between the user and the origin shield, where the rightmost value represents the cache closest to the user.
- Home Documentation Networking Media CDN Guides Send feedback Request logging overview Stay organized with collections Save and categorize content based on your preferences.

