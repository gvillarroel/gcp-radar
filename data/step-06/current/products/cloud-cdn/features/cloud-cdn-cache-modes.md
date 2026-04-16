---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T14:23:30.367Z"
product_name: "Cloud CDN"
product_slug: "cloud-cdn"
feature_name: "Cloud CDN cache modes"
feature_slug: "cloud-cdn-cache-modes"
latest_feature_date: "2020-09-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/cdn/docs/using-cache-modes"
  - "https://docs.cloud.google.com/cdn/docs/caching"
  - "https://docs.cloud.google.com/cdn/docs/dynamic-compression"
keywords:
  - "automatically"
  - "introduces"
  - "common"
  - "modes"
  - "backend"
  - "buckets"
  - "cache"
---

# Cloud CDN cache modes

Product: Cloud CDN
Coverage: MEDIUM

## Step 02 Summary

Cloud CDN introduces cache modes for backend buckets and backend services to automatically cache common static and media content types.

## Extended Definition

Cloud CDN introduces cache modes for backend buckets and backend services to automatically cache common static and media content types.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/cdn/docs/using-cache-modes](https://docs.cloud.google.com/cdn/docs/using-cache-modes)
- [https://docs.cloud.google.com/cdn/docs/caching](https://docs.cloud.google.com/cdn/docs/caching)
- [https://docs.cloud.google.com/cdn/docs/dynamic-compression](https://docs.cloud.google.com/cdn/docs/dynamic-compression)

## Supporting Pages

### Change cache modes \_|\_ Cloud CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/using-cache-modes](https://docs.cloud.google.com/cdn/docs/using-cache-modes)
- Source ID: `site-docs-reference-2`
- Final score: 214
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Use one of the following API calls: POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/backendBuckets PUT https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/backendBuckets/ BACKEND BUCKET POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/backendServices PUT https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/backendServices/ BACKEND SERVICE Add the following snippet to the JSON request body: "cdnPolicy": { "cacheMode": (CACHE ALL STATIC USE ORIGIN HEADERS FORCE CACHE ALL) Replace CACHE MODE with one of the following: CACHE ALL STATIC (default): Automatically caches static content if the origin does not set valid caching headers .
- For backend buckets, use the gcloud compute backend-buckets create or gcloud compute backend-buckets update command with the --cache-mode flag. gcloud compute backend-services (create update) BACKEND SERVICE NAME --cache-mode= CACHE MODE gcloud compute backend-buckets (create update) BACKEND BUCKET NAME --cache-mode= CACHE MODE Replace CACHE MODE with one of the following: CACHE ALL STATIC (default): Automatically caches static content .
- Setting the cache mode To configure cache modes for a Cloud CDN-enabled backend, do the following: Console In the Google Cloud console, go to the Load Balancing page.
- Home Documentation Networking Cloud CDN Guides Send feedback Change cache modes Stay organized with collections Save and categorize content based on your preferences.

### Caching overview \_|\_ Cloud CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/caching](https://docs.cloud.google.com/cdn/docs/caching)
- Source ID: `site-docs-reference-2`
- Final score: 166
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Use one of the following API calls: POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/backendBuckets PUT https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/backendBuckets/ BACKEND BUCKET POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/backendServices PUT https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/backendServices/ BACKEND SERVICE Add the following snippet to the JSON request body: "cdnPolicy": { "fields": "bypassCacheOnRequestHeaders" } What's next To understand how cache modes make it easier to cache content, see Using cache modes .
- For backend services, use the gcloud compute backend-services create or gcloud compute backend-services update command with the --bypass-cache-on-request-headers flag. gcloud compute backend-buckets (create update) BACKEND BUCKET NAME --bypass-cache-on-request-headers= BYPASS REQUEST HEADER gcloud compute backend-services (create update) BACKEND SERVICE NAME --bypass-cache-on-request-headers= BYPASS REQUEST HEADER For example: gcloud compute backend-services update my-backend-service --bypass-cache-on-request-headers=Pragma --bypass-cache-on-request-headers=Authorization API For backend buckets, use the Method: backendBuckets.insert , Method: backendBuckets.update , or Method: backendBuckets.patch API call.
- For example: PATCH https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/backendBuckets Add the following snippet to the JSON request body: "cdnPolicy": { "bypassCacheOnRequestHeaders": [ { "headerName": string } ] } Disable cache bypass gcloud For backend buckets, use the gcloud compute backend-buckets create or gcloud compute backend-buckets update command with the --no-bypass-cache-on-request-headers flag.
- For backend services, use the gcloud compute backend-services create or gcloud compute backend-services update command with the --no-bypass-cache-on-request-headers flag. gcloud compute backend-services (create update) ( BACKEND SERVICE NAME BACKEND BUCKET NAME ) --no-bypass-cache-on-request-headers API For backend buckets, use the Method: backendBuckets.insert or Method: backendBuckets.update API call.

### Enable dynamic compression \_|\_ Cloud CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/dynamic-compression](https://docs.cloud.google.com/cdn/docs/dynamic-compression)
- Source ID: `site-docs-reference-2`
- Final score: 132
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For a new backend service, use the create command: gcloud compute backend-services create BACKEND SERVICE NAME \ --compression-mode=AUTOMATIC For an existing backend service, use the update command: gcloud compute backend-services update BACKEND SERVICE NAME \ --compression-mode=AUTOMATIC For a new backend bucket, use the create command: gcloud compute backend-buckets create BACKEND BUCKET NAME --compression-mode=AUTOMATIC For an existing backend bucket, use the update command: gcloud compute backend-buckets update BACKEND BUCKET NAME --compression-mode=AUTOMATIC The compression-mode can be one of the following: AUTOMATIC : Automatically uses the best compression based on the Accept-Encoding header sent by the client.
- Use one of the following commands: POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/backendServices PUT https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/backendServices/ BACKEND SERVICE POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/backendBuckets PUT https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/backendBuckets/ BACKEND BUCKET Add the following snippet to the JSON request body: "compressionMode": AUTOMATIC The compression-mode can be one of the following: AUTOMATIC (recommended): Automatically uses the best compression based on the Accept-Encoding header sent by the client.
- Logging The Cloud CDN logs include a compressionStatus field in the jsonPayload indicating whether the response was compressed by the load balancer as well as the compression type. { insertId: "1c02hw9g3gjay67" jsonPayload: { @type: "type.googleapis.com/google.cloud.loadbalancing.type.LoadBalancerLogEntry" statusDetails: "response sent by backend" cacheId: "IAD-862d661f" compressionStatus: "br" } } Billing When a response is compressed by Cloud CDN or Cloud Load Balancing, the relevant outbound cache data transfer or outbound internet data transfer (respectively) is measured against the final compressed bytes sent to the client.
- For backend buckets, use the gcloud compute backend-buckets create command or the gcloud compute backend-buckets update command with the --compression-mode flag.

