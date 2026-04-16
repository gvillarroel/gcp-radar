---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T14:23:30.364Z"
product_name: "Cloud CDN"
product_slug: "cloud-cdn"
feature_name: "Caching of additional HTTP response codes"
feature_slug: "caching-of-additional-http-response-codes"
latest_feature_date: "2020-10-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/cdn/docs/caching"
  - "https://docs.cloud.google.com/cdn/docs/using-negative-caching"
  - "https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring"
keywords:
  - "additional"
  - "codes"
  - "response"
  - "caching"
  - "http"
  - "cache"
---

# Caching of additional HTTP response codes

Product: Cloud CDN
Coverage: MEDIUM

## Step 02 Summary

Cloud CDN can cache a broader set of response codes, including common errors such as 404, 301, and 302.

## Extended Definition

Cloud CDN can cache a broader set of response codes, including common errors such as 404, 301, and 302.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/cdn/docs/caching](https://docs.cloud.google.com/cdn/docs/caching)
- [https://docs.cloud.google.com/cdn/docs/using-negative-caching](https://docs.cloud.google.com/cdn/docs/using-negative-caching)
- [https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring](https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring)

## Supporting Pages

### Caching overview \_|\_ Cloud CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/caching](https://docs.cloud.google.com/cdn/docs/caching)
- Source ID: `site-docs-reference-2`
- Final score: 183
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- When you set the cache mode to CACHE ALL STATIC , and a response does not have explicit caching directives in Cache-Control or Expires headers, Cloud CDN automatically caches that response for the following: Web Assets, including CSS ( text/css ), JavaScript ( application/javascript ) and all web fonts, including WOFF2 ( font/woff2 ) Images, including JPEG ( image/jpg ) and PNG ( image/png ) Videos, including H.264, H.265, and MP4 ( video/mp4 ) Audio files, including MP3 ( audio/mpeg ) and MP4 ( audio/mp4 ) Formatted documents, including PDF ( application/pdf ) Important: The static content rules described here apply only to successful responses (for example, HTTP 200 OK responses).
- Feature GKE ingress through backend configuration GKE gateway using GCPHTTPFilter Basic Caching (Modes/TTLs) Cache Key Customization Negative Caching Serve While Stale Dynamic Compression Signed URLs & Cookies Request Coalescing Cacheable content Cloud CDN caches responses that meet all of the requirements in this section.
- Cloud CDN may periodically change the exact set of conditions under which it caches content, so if you want to explicitly prevent Cloud CDN from caching your content, follow the guidelines in the standard ( RFC 7234 ) to determine how to specify a guaranteed-uncacheable response.
- When using HTTP headers in the cache key , Cloud CDN caches multiple copies of the response based on the values of the specified request headers, similar to Vary support but without the need for the origin server to explicitly specify any Vary response header.

### Use negative caching \_|\_ Cloud CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/using-negative-caching](https://docs.cloud.google.com/cdn/docs/using-negative-caching)
- Source ID: `site-docs-reference-2`
- Final score: 172
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- When the cache mode is set to CACHE ALL STATIC or USE ORIGIN HEADERS , negative caching is applied to responses with specific HTTP status codes, such as 302 , 404 , or 501 .
- Cloud CDN applies the following default TTLs to these status codes: Status code Meaning TTL HTTP 300 Multiple choices 10 minutes HTTP 301 and 308 Permanent redirects 10 minutes HTTP 302 and 307 Temporary redirects Not cached by default HTTP 404 Not found 120 seconds HTTP 405 Method not found 60 seconds HTTP 410 Gone 120 seconds HTTP 451 Unavailable for legal reasons 120 seconds HTTP 501 Not implemented 60 seconds You can override these default values by using negative caching to set a cache TTL for the specified HTTP status code.
- For STATUS CODE , you can specify the following HTTP status codes: 300 , 301 , 302 , 307 , 308 404 , 405 , 410 , 421 , 451 501 For each status code, you can specify a number of seconds to cache responses.
- When specifying a negative caching policy, make sure to specify a cache TTL for all response codes that you want to cache.

### "Logs and metrics for backend services \_|\_ Cloud CDN \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring](https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring)
- Source ID: `site-docs-root-2`
- Final score: 149
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The zone is global . statusDetails HTTP success messages statusDetails (successful) Meaning Common accompanying response codes byte range caching The HTTP request was served using Cloud CDN byte range caching .
- Multiple queries are sent to the same backend for different chunks of data to support a single client request. proxy continent Continent of the HTTP(S) GFE that terminated the HTTP(S) connection—for example, America , Europe , Asia protocol Protocol used by the client, one of HTTP/1.0 , HTTP/1.1 , HTTP/2.0 , QUIC/HTTP/2.0 , UNKNOWN . response code The HTTP status code of the request. response code class The HTTP status code class of the request: 200 , 300 , 400 , 500 or 0 for none. cache result Cache result for serving HTTP request by proxy: HIT , MISS , DISABLED , PARTIAL HIT (for a request served partially from cache and partially from backend), or UNKNOWN . client country Country of the client that issued the HTTP request—for example, United States or Germany . load balancing scheme The load balancing scheme used.
- This information is only available for global external Application Load Balancers using custom error responses . string Optional The cachePolicySource field holds the source of the caching policy that governs the caching behavior for a specific request: CACHE POLICY SOURCE ROUTE : A cache policy can be applied at different levels of the URL map, and that allows for more granular control over caching.
- The JSON object contains the following fields: statusDetails backendTargetProjectNumber cachePolicySource overrideResponseCode errorService errorBackendStatusDetails authzPolicyInfo loadBalancingScheme tls orca load report string Required The statusDetails field holds a string that explains why the load balancer returned the HTTP status code that it did.

