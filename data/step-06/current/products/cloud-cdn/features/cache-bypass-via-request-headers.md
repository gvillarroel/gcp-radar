---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:27:19.873Z"
product_name: "Cloud CDN"
product_slug: "cloud-cdn"
feature_name: "Cache bypass via request headers"
feature_slug: "cache-bypass-via-request-headers"
latest_feature_date: "2021-01-31"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/cdn/docs/caching"
  - "https://docs.cloud.google.com/cdn/docs/release-notes"
  - "https://docs.cloud.google.com/cdn/docs/using-cache-keys"
keywords:
  - "cache"
  - "bypass"
  - "via"
  - "request"
  - "headers"
  - "cdn"
  - "supports"
  - "bypassing"
---

# Cache bypass via request headers

Product: Cloud CDN
Coverage: LOW

## Step 02 Summary

Cloud CDN supports bypassing cache processing based on incoming request headers.

## Extended Definition

Cloud CDN supports bypassing cache processing based on incoming request headers.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/cdn/docs/caching](https://docs.cloud.google.com/cdn/docs/caching)
- [https://docs.cloud.google.com/cdn/docs/release-notes](https://docs.cloud.google.com/cdn/docs/release-notes)
- [https://docs.cloud.google.com/cdn/docs/using-cache-keys](https://docs.cloud.google.com/cdn/docs/using-cache-keys)

## Supporting Pages

### Caching overview \_|\_ Cloud CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/caching](https://docs.cloud.google.com/cdn/docs/caching)
- Source ID: `site-docs-root`
- Final score: 158
- Re-rank relevance: N/A

Evidence snippets:
- Use one of the following API calls: POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/backendBuckets PUT https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/backendBuckets/ BACKEND BUCKET POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/backendServices PUT https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/backendServices/ BACKEND SERVICE Add the following snippet to the JSON request body: "cdnPolicy": { "fields": "bypassCacheOnRequestHeaders" } What's next To understand how cache modes make it easier to cache content, see Using cache modes .
- For example: PATCH https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/backendBuckets Add the following snippet to the JSON request body: "cdnPolicy": { "bypassCacheOnRequestHeaders": [ { "headerName": string } ] } Disable cache bypass gcloud For backend buckets, use the gcloud compute backend-buckets create or gcloud compute backend-buckets update command with the --no-bypass-cache-on-request-headers flag.
- Cloud CDN doesn't allow the following headers to be included in the list of headers: Accept Accept-Encoding Authority , because this is controlled by configuration ( cdnPolicy.includeHost ) Authorization , typically per-user as in OAuth Bearer tokens CDN-Loop Connection Content-MD5 Content-Type Cookie Date Forwarded , often per-client or per-proxy From Host , because this is controlled by configuration ( cdnPolicy.includeHost ) If-Match , If-Modified-Since , or If-None-Match Origin Proxy-Authorization Range Referer (or Referrer ) User-Agent Want-Digest X-CSRFToken and X-CSRF-Token as used by Django and Ruby on Rails X-Forwarded-For , often per-client or per-proxy X-User-IP Any header starting with the following: Access-Control- , such as Access-Control-Request-Headers and Access-Control-Request-Method Sec-Fetch- Sec-GFE- Sec-Google- X-Amz- X-GFE- X-Goog- X-Google- Use custom variables with request headers Cache keys are helpful when you need to serve content differently based on each user's device and location.
- For backend services, use the gcloud compute backend-services create or gcloud compute backend-services update command with the --bypass-cache-on-request-headers flag. gcloud compute backend-buckets (create update) BACKEND BUCKET NAME --bypass-cache-on-request-headers= BYPASS REQUEST HEADER gcloud compute backend-services (create update) BACKEND SERVICE NAME --bypass-cache-on-request-headers= BYPASS REQUEST HEADER For example: gcloud compute backend-services update my-backend-service --bypass-cache-on-request-headers=Pragma --bypass-cache-on-request-headers=Authorization API For backend buckets, use the Method: backendBuckets.insert , Method: backendBuckets.update , or Method: backendBuckets.patch API call.

### Cloud CDN release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/release-notes](https://docs.cloud.google.com/cdn/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- January 31, 2021 Feature Cloud CDN now supports serving stale content and the ability to bypass the cache based on request header(s).
- September 22, 2021 Feature Cloud CDN now supports custom named cookies and headers in the cache key, to enable A/B (multivariate) testing, canarying, and similar scenarios.
- December 08, 2020 Feature The Google Terraform provider now supports the latest Cloud CDN features, including cache modes , TTL overrides, and custom response headers.
- The Google Terraform provider also supports these latest Cloud CDN features, including cache modes, TTL overrides, and custom response headers.

### Customize cache keys \_|\_ Cloud CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/using-cache-keys](https://docs.cloud.google.com/cdn/docs/using-cache-keys)
- Source ID: `site-docs-root`
- Final score: 134
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Add the following snippet to the JSON request body: "cdnPolicy": { "cacheKeyPolicy": [ { "includeHttpHeaders": [ HEADER FIELD NAMES ] } ] } Replace HEADER FIELD NAMES with a comma-separated list of header names.
- PUT https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/backendBuckets/ BACKEND BUCKET Add the following snippet to the JSON request body: "cdnPolicy": { "cacheKeyPolicy": [ { "includeProtocol": false, "includeHost": false, "includeQueryString": false } ] } Update cache keys to add the protocol, host, and query string By default, backend services configured to use Cloud CDN include all components of the request URI in cache keys.
- Add the following snippet to the JSON request body: "cdnPolicy": { "cacheKeyPolicy": [ { "includeProtocol": true, "includeHost": true, "includeQueryString": true } ] } Update cache keys to use an include or exclude list of query string parameters These instructions set Cloud CDN cache keys to use an include list or exclude list with query string parameters.
- To specify an exclude list, add the following snippet: "cdnPolicy": { "cacheKeyPolicy": [ { "queryStringBlacklist": [ QUERY STRINGS ] } ] } Update cache keys to use HTTP headers Note: Make sure that you're using gcloud CLI version 369.0.0 or later.

