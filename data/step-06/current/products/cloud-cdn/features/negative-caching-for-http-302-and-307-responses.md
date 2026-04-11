---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:27:19.872Z"
product_name: "Cloud CDN"
product_slug: "cloud-cdn"
feature_name: "Negative caching for HTTP 302 and 307 responses"
feature_slug: "negative-caching-for-http-302-and-307-responses"
latest_feature_date: "2021-04-07"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/cdn/docs/using-negative-caching"
  - "https://docs.cloud.google.com/cdn/docs/caching"
  - "https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring"
keywords:
  - "negative"
  - "caching"
  - "for"
  - "http"
  - "302"
  - "and"
  - "307"
  - "responses"
---

# Negative caching for HTTP 302 and 307 responses

Product: Cloud CDN
Coverage: LOW

## Step 02 Summary

Cloud CDN now supports negative caching for HTTP 302 (Found) and HTTP 307 (Temporary Redirect) responses.

## Extended Definition

Cloud CDN now supports negative caching for HTTP 302 (Found) and HTTP 307 (Temporary Redirect) responses.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/cdn/docs/using-negative-caching](https://docs.cloud.google.com/cdn/docs/using-negative-caching)
- [https://docs.cloud.google.com/cdn/docs/caching](https://docs.cloud.google.com/cdn/docs/caching)
- [https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring](https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring)

## Supporting Pages

### Use negative caching \_|\_ Cloud CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/using-negative-caching](https://docs.cloud.google.com/cdn/docs/using-negative-caching)
- Source ID: `site-docs-root-2`
- Final score: 204
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Cloud CDN applies the following default TTLs to these status codes: Status code Meaning TTL HTTP 300 Multiple choices 10 minutes HTTP 301 and 308 Permanent redirects 10 minutes HTTP 302 and 307 Temporary redirects Not cached by default HTTP 404 Not found 120 seconds HTTP 405 Method not found 60 seconds HTTP 410 Gone 120 seconds HTTP 451 Unavailable for legal reasons 120 seconds HTTP 501 Not implemented 60 seconds You can override these default values by using negative caching to set a cache TTL for the specified HTTP status code.
- For backend services, use the gcloud compute backend-services create or gcloud compute backend-services update command with the --negative-caching flag. gcloud compute backend-buckets (create update) BACKEND BUCKET NAME --negative-caching gcloud compute backend-services (create update) BACKEND SERVICE NAME --negative-caching To enable negative caching of only two specific error responses, for example, set responses with status code 404 to be cached for 60 seconds, and responses with status code 405 to be cached for 120 seconds. gcloud compute backend-services update BACKEND SERVICE NAME \ --negative-caching \ --cache-mode=CACHE ALL STATIC \ --default-ttl=86400 \ --negative-caching-policy='404=60,405=120' api For backend buckets, use the Method: backendBuckets.insert or Method: backendBuckets.update API call.
- For STATUS CODE , you can specify the following HTTP status codes: 300 , 301 , 302 , 307 , 308 404 , 405 , 410 , 421 , 451 501 For each status code, you can specify a number of seconds to cache responses.
- When the cache mode is set to CACHE ALL STATIC or USE ORIGIN HEADERS , negative caching is applied to responses with specific HTTP status codes, such as 302 , 404 , or 501 .

### Caching overview \_|\_ Cloud CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/caching](https://docs.cloud.google.com/cdn/docs/caching)
- Source ID: `site-docs-root`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- When you set the cache mode to CACHE ALL STATIC , and a response does not have explicit caching directives in Cache-Control or Expires headers, Cloud CDN automatically caches that response for the following: Web Assets, including CSS ( text/css ), JavaScript ( application/javascript ) and all web fonts, including WOFF2 ( font/woff2 ) Images, including JPEG ( image/jpg ) and PNG ( image/png ) Videos, including H.264, H.265, and MP4 ( video/mp4 ) Audio files, including MP3 ( audio/mpeg ) and MP4 ( audio/mp4 ) Formatted documents, including PDF ( application/pdf ) Important: The static content rules described here apply only to successful responses (for example, HTTP 200 OK responses).
- If negative caching is enabled and the status code matches one for which negative caching specifies a TTL, the response is eligible for caching, even without explicit freshness directives.
- This provides granular control over caching policies based on criteria like hostname, URL path, HTTP headers, and query parameters for specific routes.
- Category MIME types Web assets text/css text/ecmascript text/javascript application/javascript Fonts Any Content-Type matching font/ Images Any Content-Type matching image/ Videos Any Content-Type matching video/ Audio Any Content-Type matching audio/ Formatted document types application/pdf and application/postscript Cloud CDN inspects the Content-Type HTTP response header, which reflects the MIME type of the content being served.

### "Logs and metrics for backend services \_|\_ Cloud CDN \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring](https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring)
- Source ID: `site-docs-root-2`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- This information is only available for global external Application Load Balancers using custom error responses . string Optional The cachePolicySource field holds the source of the caching policy that governs the caching behavior for a specific request: CACHE POLICY SOURCE ROUTE : A cache policy can be applied at different levels of the URL map, and that allows for more granular control over caching.
- Multiple queries are sent to the same backend for different chunks of data to support a single client request. proxy continent Continent of the HTTP(S) GFE that terminated the HTTP(S) connection—for example, America , Europe , Asia protocol Protocol used by the client, one of HTTP/1.0 , HTTP/1.1 , HTTP/2.0 , QUIC/HTTP/2.0 , UNKNOWN . response code The HTTP status code of the request. response code class The HTTP status code class of the request: 200 , 300 , 400 , 500 or 0 for none. cache result Cache result for serving HTTP request by proxy: HIT , MISS , DISABLED , PARTIAL HIT (for a request served partially from cache and partially from backend), or UNKNOWN . client country Country of the client that issued the HTTP request—for example, United States or Germany . load balancing scheme The load balancing scheme used.
- For more information about these log strings, see statusDetails HTTP success messages and statusDetails HTTP failure messages . string Required The backendTargetProjectNumber field holds the project number where the backend target—backend service or backend bucket—has been created.
- This is because although we poll RTT over the socket from the GFE to the client at the time the HTTP response is acknowledged, we rely on kernel reporting for some of these measurements, and we cannot be sure that the kernel will have an RTT measurement for the given HTTP response.

