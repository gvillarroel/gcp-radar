---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T14:23:30.355Z"
product_name: "Cloud CDN"
product_slug: "cloud-cdn"
feature_name: "Cache bypass via request headers"
feature_slug: "cache-bypass-via-request-headers"
latest_feature_date: "2021-01-31"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/cdn/docs/caching"
  - "https://docs.cloud.google.com/cdn/docs/how-to"
  - "https://docs.cloud.google.com/cdn/docs/overview"
keywords:
  - "bypassing"
  - "bypass"
  - "headers"
  - "request"
  - "supports"
  - "cache"
---

# Cache bypass via request headers

Product: Cloud CDN
Coverage: LOW

## Step 02 Summary

Cloud CDN supports bypassing cache processing based on incoming request headers.

## Extended Definition

Cloud CDN supports bypassing cache processing based on incoming request headers.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/cdn/docs/caching](https://docs.cloud.google.com/cdn/docs/caching)
- [https://docs.cloud.google.com/cdn/docs/how-to](https://docs.cloud.google.com/cdn/docs/how-to)
- [https://docs.cloud.google.com/cdn/docs/overview](https://docs.cloud.google.com/cdn/docs/overview)

## Supporting Pages

### Caching overview \_|\_ Cloud CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/caching](https://docs.cloud.google.com/cdn/docs/caching)
- Source ID: `site-docs-reference-2`
- Final score: 34
- Re-rank relevance: N/A

Evidence snippets:
- For backend services, use the gcloud compute backend-services create or gcloud compute backend-services update command with the --bypass-cache-on-request-headers flag. gcloud compute backend-buckets (create update) BACKEND BUCKET NAME --bypass-cache-on-request-headers= BYPASS REQUEST HEADER gcloud compute backend-services (create update) BACKEND SERVICE NAME --bypass-cache-on-request-headers= BYPASS REQUEST HEADER For example: gcloud compute backend-services update my-backend-service --bypass-cache-on-request-headers=Pragma --bypass-cache-on-request-headers=Authorization API For backend buckets, use the Method: backendBuckets.insert , Method: backendBuckets.update , or Method: backendBuckets.patch API call.
- Use one of the following API calls: POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/backendBuckets PUT https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/backendBuckets/ BACKEND BUCKET POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/backendServices PUT https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/backendServices/ BACKEND SERVICE Add the following snippet to the JSON request body: "cdnPolicy": { "fields": "bypassCacheOnRequestHeaders" } What's next To understand how cache modes make it easier to cache content, see Using cache modes .
- For example: PATCH https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/backendBuckets Add the following snippet to the JSON request body: "cdnPolicy": { "bypassCacheOnRequestHeaders": [ { "headerName": string } ] } Disable cache bypass gcloud For backend buckets, use the gcloud compute backend-buckets create or gcloud compute backend-buckets update command with the --no-bypass-cache-on-request-headers flag.
- For backend services, use the gcloud compute backend-services create or gcloud compute backend-services update command with the --no-bypass-cache-on-request-headers flag. gcloud compute backend-services (create update) ( BACKEND SERVICE NAME BACKEND BUCKET NAME ) --no-bypass-cache-on-request-headers API For backend buckets, use the Method: backendBuckets.insert or Method: backendBuckets.update API call.

### Cloud CDN overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/how-to](https://docs.cloud.google.com/cdn/docs/how-to)
- Source ID: `site-docs-reference`
- Final score: 30
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For more information, see: Cache invalidation overview Invalidating cached content Cache bypass To bypass Cloud CDN, you can request an object directly from a Cloud Storage bucket or a Compute Engine VM.
- When the origin server supports byte range requests , Cloud CDN can initiate multiple cache fill requests in reaction to a single client request.
- The following image is an example of time ranges that you can select: Insert content into the cache Caching is reactive in that an object is stored in a particular cache if a request goes through that cache and if the response is cacheable.
- You can, however, expect that popular requests for cacheable content are served from a cache most of the time, yielding significantly reduced latencies, reduced cost, and reduced load on your origin servers.

### Cloud CDN overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/overview](https://docs.cloud.google.com/cdn/docs/overview)
- Source ID: `site-docs-reference-2`
- Final score: 30
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For more information, see: Cache invalidation overview Invalidating cached content Cache bypass To bypass Cloud CDN, you can request an object directly from a Cloud Storage bucket or a Compute Engine VM.
- When the origin server supports byte range requests , Cloud CDN can initiate multiple cache fill requests in reaction to a single client request.
- The following image is an example of time ranges that you can select: Insert content into the cache Caching is reactive in that an object is stored in a particular cache if a request goes through that cache and if the response is cacheable.
- You can, however, expect that popular requests for cacheable content are served from a cache most of the time, yielding significantly reduced latencies, reduced cost, and reduced load on your origin servers.

