---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T14:23:30.346Z"
product_name: "Cloud CDN"
product_slug: "cloud-cdn"
feature_name: "Cloud CDN cache invalidation by cache tags"
feature_slug: "cloud-cdn-cache-invalidation-by-cache-tags"
latest_feature_date: "2025-05-05"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/cdn/docs/cache-invalidation-overview"
  - "https://docs.cloud.google.com/cdn/docs/invalidating-cached-content"
  - "https://docs.cloud.google.com/cdn/docs/dynamic-compression"
keywords:
  - "higher"
  - "tags"
  - "invalidation"
  - "based"
  - "supports"
  - "cache"
---

# Cloud CDN cache invalidation by cache tags

Product: Cloud CDN
Coverage: LOW

## Step 02 Summary

Cloud CDN supports cache-tag-based invalidation with higher request rates and support for all invalidation matchers; Cloud CDN supports cache-tag-based invalidation with improved performance and higher rate limits.

## Extended Definition

Cloud CDN supports cache-tag-based invalidation with higher request rates and support for all invalidation matchers; Cloud CDN supports cache-tag-based invalidation with improved performance and higher rate limits.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/cdn/docs/cache-invalidation-overview](https://docs.cloud.google.com/cdn/docs/cache-invalidation-overview)
- [https://docs.cloud.google.com/cdn/docs/invalidating-cached-content](https://docs.cloud.google.com/cdn/docs/invalidating-cached-content)
- [https://docs.cloud.google.com/cdn/docs/dynamic-compression](https://docs.cloud.google.com/cdn/docs/dynamic-compression)

## Supporting Pages

### Cache invalidation overview \_|\_ Cloud CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/cache-invalidation-overview](https://docs.cloud.google.com/cdn/docs/cache-invalidation-overview)
- Source ID: `site-docs-reference-2`
- Final score: 35
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Cloud CDN supports the use of cache tags and invalidation matchers, such as host and URL path, for invalidation requests.
- Invalidation by cache tags Cache tags (or surrogate keys ) let you invalidate content based on arbitrary metadata.
- Home Documentation Networking Cloud CDN Guides Send feedback Cache invalidation overview Stay organized with collections Save and categorize content based on your preferences.
- If you specify invalidation matchers along with cache tags, the invalidation request applies only to the tagged objects that match the invalidation matchers.

### Invalidate cached content \_|\_ Cloud CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/invalidating-cached-content](https://docs.cloud.google.com/cdn/docs/invalidating-cached-content)
- Source ID: `site-docs-root`
- Final score: 31
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/urlMaps/ URL MAP NAME /invalidateCache Replace the following: PROJECT ID : your Google Cloud console project ID URL MAP NAME : the name of the URL map To specify a directory for invalidation, use the following sample JSON request body: { "path": "/images/ " } To invalidate a directory for only one host, use the following sample JSON request body: { "host": "host1.com", "path": "/images/ " } Invalidate by cache tags Console In the Google Cloud console, go to the Cloud CDN page.
- POST https://compute.googleapis.com/compute/beta/projects/ PROJECT ID /global/urlMaps/ URL MAP NAME /invalidateCache Replace the following: PROJECT ID : your Google Cloud console project ID URL MAP NAME : the name of the URL map To specify cache tags for invalidation, use the following sample JSON request body: { "cacheTags": [ "tag1", "tag2" ] } You can specify a single tag or a comma-separated list of tags.
- POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/urlMaps/ URL MAP NAME /invalidateCache Replace the following: PROJECT ID : your Google Cloud console project ID URL MAP NAME : the name of the URL map To specify a URL path for invalidation, use the following sample JSON request body: { "path": "/ " } To invalidate the URL path for only one host, use the following sample JSON request body: { "host": "host1.com", "path": "/ " } See the status of your invalidation request Cloud CDN emits two log lines per invalidation, one when the invalidation is accepted and the other when it's complete.
- POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/urlMaps/ URL MAP NAME /invalidateCache Replace the following: PROJECT ID : your Google Cloud console project ID URL MAP NAME : the name of the URL map To specify a file for invalidation, use the following sample JSON request body: { "path": "/images/file.jpg" } To invalidate the file for only one host, use the following sample JSON request body: { "host": "host1.com", "path": "/images/file.jpg" } Invalidate the whole directory Console In the Google Cloud console, go to the Cloud CDN page.

### Enable dynamic compression \_|\_ Cloud CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/dynamic-compression](https://docs.cloud.google.com/cdn/docs/dynamic-compression)
- Source ID: `site-docs-reference-2`
- Final score: 27
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To learn about invalidating caches, see Cache invalidation overview .
- For a new backend service, use the create command: gcloud compute backend-services create BACKEND SERVICE NAME \ --compression-mode=AUTOMATIC For an existing backend service, use the update command: gcloud compute backend-services update BACKEND SERVICE NAME \ --compression-mode=AUTOMATIC For a new backend bucket, use the create command: gcloud compute backend-buckets create BACKEND BUCKET NAME --compression-mode=AUTOMATIC For an existing backend bucket, use the update command: gcloud compute backend-buckets update BACKEND BUCKET NAME --compression-mode=AUTOMATIC The compression-mode can be one of the following: AUTOMATIC : Automatically uses the best compression based on the Accept-Encoding header sent by the client.
- Use one of the following commands: POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/backendServices PUT https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/backendServices/ BACKEND SERVICE POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/backendBuckets PUT https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/backendBuckets/ BACKEND BUCKET Add the following snippet to the JSON request body: "compressionMode": AUTOMATIC The compression-mode can be one of the following: AUTOMATIC (recommended): Automatically uses the best compression based on the Accept-Encoding header sent by the client.
- Logging The Cloud CDN logs include a compressionStatus field in the jsonPayload indicating whether the response was compressed by the load balancer as well as the compression type. { insertId: "1c02hw9g3gjay67" jsonPayload: { @type: "type.googleapis.com/google.cloud.loadbalancing.type.LoadBalancerLogEntry" statusDetails: "response sent by backend" cacheId: "IAD-862d661f" compressionStatus: "br" } } Billing When a response is compressed by Cloud CDN or Cloud Load Balancing, the relevant outbound cache data transfer or outbound internet data transfer (respectively) is measured against the final compressed bytes sent to the client.

