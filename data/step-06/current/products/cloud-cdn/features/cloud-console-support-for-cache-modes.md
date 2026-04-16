---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T14:23:30.361Z"
product_name: "Cloud CDN"
product_slug: "cloud-cdn"
feature_name: "Cloud Console support for cache modes"
feature_slug: "cloud-console-support-for-cache-modes"
latest_feature_date: "2020-11-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/cdn/docs/using-cache-modes"
  - "https://docs.cloud.google.com/cdn/docs/caching"
  - "https://docs.cloud.google.com/cdn/docs/using-cache-keys"
keywords:
  - "configuring"
  - "modes"
  - "console"
  - "supports"
  - "cache"
---

# Cloud Console support for cache modes

Product: Cloud CDN
Coverage: MEDIUM

## Step 02 Summary

Cloud Console now supports configuring Cloud CDN cache modes.

## Extended Definition

Cloud Console now supports configuring Cloud CDN cache modes.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/cdn/docs/using-cache-modes](https://docs.cloud.google.com/cdn/docs/using-cache-modes)
- [https://docs.cloud.google.com/cdn/docs/caching](https://docs.cloud.google.com/cdn/docs/caching)
- [https://docs.cloud.google.com/cdn/docs/using-cache-keys](https://docs.cloud.google.com/cdn/docs/using-cache-keys)

## Supporting Pages

### Change cache modes \_|\_ Cloud CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/using-cache-modes](https://docs.cloud.google.com/cdn/docs/using-cache-modes)
- Source ID: `site-docs-reference-2`
- Final score: 132
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Setting the cache mode To configure cache modes for a Cloud CDN-enabled backend, do the following: Console In the Google Cloud console, go to the Load Balancing page.
- Home Documentation Networking Cloud CDN Guides Send feedback Change cache modes Stay organized with collections Save and categorize content based on your preferences.
- This page provides instructions for changing cache modes with Cloud CDN.
- Cache modes let you configure how Cloud CDN caches your content.

### Caching overview \_|\_ Cloud CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/caching](https://docs.cloud.google.com/cdn/docs/caching)
- Source ID: `site-docs-reference-2`
- Final score: 114
- Re-rank relevance: N/A

Evidence snippets:
- Use one of the following API calls: POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/backendBuckets PUT https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/backendBuckets/ BACKEND BUCKET POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/backendServices PUT https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/backendServices/ BACKEND SERVICE Add the following snippet to the JSON request body: "cdnPolicy": { "fields": "bypassCacheOnRequestHeaders" } What's next To understand how cache modes make it easier to cache content, see Using cache modes .
- Feature GKE ingress through backend configuration GKE gateway using GCPHTTPFilter Basic Caching (Modes/TTLs) Cache Key Customization Negative Caching Serve While Stale Dynamic Compression Signed URLs & Cookies Request Coalescing Cacheable content Cloud CDN caches responses that meet all of the requirements in this section.
- Before you set the cache mode to FORCE CACHE ALL , consider the following behaviors: For signed URLs or signed cookies , FORCE CACHE ALL overrides the maximum age specified through the Cache entry maximum age setting in the Google Cloud console or the gcloud --signed-url-cache-max-age option.
- If the response that indicated that your origin server supported byte range requests for a particular cache key has expired, Cloud CDN initiates a validation request to confirm that the content hasn't changed and that your origin server still supports range requests for the content.

### Customize cache keys \_|\_ Cloud CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/using-cache-keys](https://docs.cloud.google.com/cdn/docs/using-cache-keys)
- Source ID: `site-docs-reference-2`
- Final score: 86
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Use this command to set the query string parameter user to the include list of a backend service. gcloud compute backend-services update BACKEND SERVICE \ --cache-key-include-query-string \ --cache-key-query-string-whitelist user Use this command to set the query string parameter user to the exclude list of a backend service. gcloud compute backend-services update BACKEND SERVICE \ --cache-key-include-query-string \ --cache-key-query-string-blacklist user Use this command to set the query string parameter user to the include list of a backend bucket. gcloud compute backend-buckets update BACKEND BUCKET \ --cache-key-query-string-whitelist user API To specify an include list or an exclude list for a backend service, specify query string parameters in the cacheKeyPolicy section of cdnPolicy for the backendServices resource.
- PUT https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/backendBuckets/ BACKEND BUCKET Add the following snippet to the JSON request body: "cdnPolicy": { "cacheKeyPolicy": [ { "includeProtocol": false, "includeHost": false, "includeQueryString": false } ] } Update cache keys to add the protocol, host, and query string By default, backend services configured to use Cloud CDN include all components of the request URI in cache keys.
- Click Done . gcloud To exclude one or more components from the cache keys for a backend service, use the gcloud compute backend-services update command . gcloud compute backend-services update BACKEND SERVICE \ --no-cache-key-include-protocol \ --no-cache-key-include-host \ --no-cache-key-include-query-string For backend buckets, use the gcloud compute backend-buckets update command .
- Add the following snippet to the JSON request body: "cdnPolicy": { "cacheKeyPolicy": [ { "includeProtocol": true, "includeHost": true, "includeQueryString": true } ] } Update cache keys to use an include or exclude list of query string parameters These instructions set Cloud CDN cache keys to use an include list or exclude list with query string parameters.

