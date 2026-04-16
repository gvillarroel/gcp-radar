---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T14:23:30.368Z"
product_name: "Cloud CDN"
product_slug: "cloud-cdn"
feature_name: "Cloud CDN custom response headers"
feature_slug: "cloud-cdn-custom-response-headers"
latest_feature_date: "2020-09-14"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/cdn/docs/caching"
  - "https://docs.cloud.google.com/cdn/docs/using-cache-keys"
  - "https://docs.cloud.google.com/cdn/docs/locations"
keywords:
  - "configuring"
  - "backend"
  - "buckets"
  - "response"
  - "headers"
  - "custom"
  - "supports"
---

# Cloud CDN custom response headers

Product: Cloud CDN
Coverage: LOW

## Step 02 Summary

Cloud CDN supports configuring custom response headers on backend buckets and backend services through External HTTP(S) Load Balancing; Cloud CDN expands custom response header support on backend buckets and services and populates a new cdn_cache_status variable in headers.

## Extended Definition

Cloud CDN supports configuring custom response headers on backend buckets and backend services through External HTTP(S) Load Balancing; Cloud CDN expands custom response header support on backend buckets and services and populates a new cdn_cache_status variable in headers.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/cdn/docs/caching](https://docs.cloud.google.com/cdn/docs/caching)
- [https://docs.cloud.google.com/cdn/docs/using-cache-keys](https://docs.cloud.google.com/cdn/docs/using-cache-keys)
- [https://docs.cloud.google.com/cdn/docs/locations](https://docs.cloud.google.com/cdn/docs/locations)

## Supporting Pages

### Cache locations \_|\_ Cloud CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/locations](https://docs.cloud.google.com/cdn/docs/locations)
- Source ID: `site-docs-reference-2`
- Final score: 38
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

### Caching overview \_|\_ Cloud CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/caching](https://docs.cloud.google.com/cdn/docs/caching)
- Source ID: `site-docs-reference-2`
- Final score: 35
- Re-rank relevance: N/A

Evidence snippets:
- Request type Default behavior Configurable Benefits of collapsing Chunk requests Enabled No Can significantly reduce origin bandwidth Item requests Enabled Yes Can reduce origin request volume To disable item request collapsing using the Google Cloud CLI for a backend bucket that references a Cloud Storage bucket: Note: Google Cloud CLI support for the --request-coalescing flag was introduced in Google Cloud CLI version 330.0.0 . gcloud Use the gcloud compute backend-services or backend-buckets command: gcloud compute backend-services update BACKEND SERVICE NAME \ --no-request-coalescing To enable item request collapsing on a backend bucket using the Google Cloud CLI: gcloud Use the gcloud compute backend-buckets command: gcloud compute backend-buckets update BACKEND BUCKET NAME \ --request-coalescing To enable item request collapsing using the Google Cloud CLI for a backend service, including VM groups and external backends: gcloud Use the gcloud compute backend-services command: gcloud compute backend-services update BACKEND SERVICE NAME \ --request-coalescing Requests initiated by Cloud CDN When your origin server supports byte range requests , Cloud CDN can send multiple requests to your origin server in reaction to a single client request.
- For backend services, use the gcloud compute backend-services create or gcloud compute backend-services update command with the --bypass-cache-on-request-headers flag. gcloud compute backend-buckets (create update) BACKEND BUCKET NAME --bypass-cache-on-request-headers= BYPASS REQUEST HEADER gcloud compute backend-services (create update) BACKEND SERVICE NAME --bypass-cache-on-request-headers= BYPASS REQUEST HEADER For example: gcloud compute backend-services update my-backend-service --bypass-cache-on-request-headers=Pragma --bypass-cache-on-request-headers=Authorization API For backend buckets, use the Method: backendBuckets.insert , Method: backendBuckets.update , or Method: backendBuckets.patch API call.
- Use one of the following API calls: POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/backendBuckets PUT https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/backendBuckets/ BACKEND BUCKET POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/backendServices PUT https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/backendServices/ BACKEND SERVICE Add the following snippet to the JSON request body: "cdnPolicy": { "fields": "bypassCacheOnRequestHeaders" } What's next To understand how cache modes make it easier to cache content, see Using cache modes .
- For example: PATCH https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/backendBuckets Add the following snippet to the JSON request body: "cdnPolicy": { "bypassCacheOnRequestHeaders": [ { "headerName": string } ] } Disable cache bypass gcloud For backend buckets, use the gcloud compute backend-buckets create or gcloud compute backend-buckets update command with the --no-bypass-cache-on-request-headers flag.

### Customize cache keys \_|\_ Cloud CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/using-cache-keys](https://docs.cloud.google.com/cdn/docs/using-cache-keys)
- Source ID: `site-docs-reference-2`
- Final score: 35
- Re-rank relevance: N/A

Evidence snippets:
- Use this command to set the query string parameter user to the include list of a backend service. gcloud compute backend-services update BACKEND SERVICE \ --cache-key-include-query-string \ --cache-key-query-string-whitelist user Use this command to set the query string parameter user to the exclude list of a backend service. gcloud compute backend-services update BACKEND SERVICE \ --cache-key-include-query-string \ --cache-key-query-string-blacklist user Use this command to set the query string parameter user to the include list of a backend bucket. gcloud compute backend-buckets update BACKEND BUCKET \ --cache-key-query-string-whitelist user API To specify an include list or an exclude list for a backend service, specify query string parameters in the cacheKeyPolicy section of cdnPolicy for the backendServices resource.
- PUT https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/backendBuckets/ BACKEND BUCKET Add the following snippet to the JSON request body: "cdnPolicy": { "cacheKeyPolicy": [ { "includeProtocol": false, "includeHost": false, "includeQueryString": false } ] } Update cache keys to add the protocol, host, and query string By default, backend services configured to use Cloud CDN include all components of the request URI in cache keys.
- Click Done . gcloud To exclude one or more components from the cache keys for a backend service, use the gcloud compute backend-services update command . gcloud compute backend-services update BACKEND SERVICE \ --no-cache-key-include-protocol \ --no-cache-key-include-host \ --no-cache-key-include-query-string For backend buckets, use the gcloud compute backend-buckets update command .
- However, they include a set of query string parameters that are specific to Cloud Storage, which might affect the response and might be extended by a customizable list of parameter names.

