---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T14:23:30.354Z"
product_name: "Cloud CDN"
product_slug: "cloud-cdn"
feature_name: "Negative caching for HTTP 302 and 307 responses"
feature_slug: "negative-caching-for-http-302-and-307-responses"
latest_feature_date: "2021-04-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/cdn/docs/using-negative-caching"
  - "https://docs.cloud.google.com/cdn/docs/caching"
  - "https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring"
keywords:
  - "negative"
  - "responses"
  - "caching"
  - "http"
---

# Negative caching for HTTP 302 and 307 responses

Product: Cloud CDN
Coverage: MEDIUM

## Step 02 Summary

Cloud CDN now supports negative caching for HTTP 302 (Found) and HTTP 307 (Temporary Redirect) responses.

## Extended Definition

Cloud CDN now supports negative caching for HTTP 302 (Found) and HTTP 307 (Temporary Redirect) responses.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/cdn/docs/using-negative-caching](https://docs.cloud.google.com/cdn/docs/using-negative-caching)
- [https://docs.cloud.google.com/cdn/docs/caching](https://docs.cloud.google.com/cdn/docs/caching)
- [https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring](https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring)

## Supporting Pages

### Use negative caching \_|\_ Cloud CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/using-negative-caching](https://docs.cloud.google.com/cdn/docs/using-negative-caching)
- Source ID: `site-docs-reference-2`
- Final score: 182
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- When the cache mode is set to CACHE ALL STATIC or USE ORIGIN HEADERS , negative caching is applied to responses with specific HTTP status codes, such as 302 , 404 , or 501 .
- For backend services, use the gcloud compute backend-services create or gcloud compute backend-services update command with the --negative-caching flag. gcloud compute backend-buckets (create update) BACKEND BUCKET NAME --negative-caching gcloud compute backend-services (create update) BACKEND SERVICE NAME --negative-caching To enable negative caching of only two specific error responses, for example, set responses with status code 404 to be cached for 60 seconds, and responses with status code 405 to be cached for 120 seconds. gcloud compute backend-services update BACKEND SERVICE NAME \ --negative-caching \ --cache-mode=CACHE ALL STATIC \ --default-ttl=86400 \ --negative-caching-policy='404=60,405=120' api For backend buckets, use the Method: backendBuckets.insert or Method: backendBuckets.update API call.
- Use one of the following API calls: POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/backendBuckets PUT https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/backendBuckets/ BACKEND BUCKET POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/backendServices PUT https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/backendServices/ BACKEND SERVICE Add the following snippet to the JSON request body: "cdnPolicy": { "negativeCaching": OFF } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Use one of the following API calls: POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/backendBuckets PUT https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/backendBuckets/ BACKEND BUCKET POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/backendServices PUT https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/backendServices/ BACKEND SERVICE Add the following snippet to the JSON request body: "cdnPolicy": { "negativeCaching": ON, "negativeCachingPolicy": [ { "code": STATUS CODE , "ttl": TTL SECONDS } ] } Negative caching must be enabled to configure the negativeCachingPolicy settings.

### Caching overview \_|\_ Cloud CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/caching](https://docs.cloud.google.com/cdn/docs/caching)
- Source ID: `site-docs-reference-2`
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- Feature GKE ingress through backend configuration GKE gateway using GCPHTTPFilter Basic Caching (Modes/TTLs) Cache Key Customization Negative Caching Serve While Stale Dynamic Compression Signed URLs & Cookies Request Coalescing Cacheable content Cloud CDN caches responses that meet all of the requirements in this section.
- When you set the cache mode to CACHE ALL STATIC , and a response does not have explicit caching directives in Cache-Control or Expires headers, Cloud CDN automatically caches that response for the following: Web Assets, including CSS ( text/css ), JavaScript ( application/javascript ) and all web fonts, including WOFF2 ( font/woff2 ) Images, including JPEG ( image/jpg ) and PNG ( image/png ) Videos, including H.264, H.265, and MP4 ( video/mp4 ) Audio files, including MP3 ( audio/mpeg ) and MP4 ( audio/mp4 ) Formatted documents, including PDF ( application/pdf ) Important: The static content rules described here apply only to successful responses (for example, HTTP 200 OK responses).
- By contrast, error responses are cached based on the negative caching settings, regardless of content type.
- Negative Caching false Error responses, such as, 404s are not cached by default.

### "Logs and metrics for backend services \_|\_ Cloud CDN \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring](https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring)
- Source ID: `site-docs-root-2`
- Final score: 108
- Re-rank relevance: N/A

Evidence snippets:
- Request count loadbalancing.googleapis.com/https/request count The number of requests served by the external Application Load Balancer Request bytes count loadbalancing.googleapis.com/https/request bytes count The number of bytes sent as requests from clients to the external Application Load Balancer Response bytes count loadbalancing.googleapis.com/https/response bytes count The number of bytes sent as responses from the external Application Load Balancer to clients Total latencies loadbalancing.googleapis.com/https/total latencies A distribution of the total latency.
- This information is only available for global external Application Load Balancers using custom error responses . string Optional The cachePolicySource field holds the source of the caching policy that governs the caching behavior for a specific request: CACHE POLICY SOURCE ROUTE : A cache policy can be applied at different levels of the URL map, and that allows for more granular control over caching.
- The zone is global . statusDetails HTTP success messages statusDetails (successful) Meaning Common accompanying response codes byte range caching The HTTP request was served using Cloud CDN byte range caching .
- Backend response bytes count loadbalancing.googleapis.com/https/backend response bytes count The number of bytes sent as responses from the backends (including cache) to the external Application Load Balancer.

