---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:27:19.867Z"
product_name: "Cloud CDN"
product_slug: "cloud-cdn"
feature_name: "Dynamic compression"
feature_slug: "dynamic-compression"
latest_feature_date: "2022-09-20"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/cdn/docs/dynamic-compression"
  - "https://docs.cloud.google.com/cdn/docs/release-notes"
  - "https://docs.cloud.google.com/cdn/docs/caching"
keywords:
  - "dynamic"
  - "compression"
  - "cdn"
  - "supports"
  - "using"
  - "brotli"
  - "and"
  - "gzip"
---

# Dynamic compression

Product: Cloud CDN
Coverage: LOW

## Step 02 Summary

Cloud CDN supports dynamic compression using Brotli and gzip to reduce network payload for compressible content; Cloud CDN can automatically compress responses in transit as they are served from origin to client.

## Extended Definition

Cloud CDN supports dynamic compression using Brotli and gzip to reduce network payload for compressible content; Cloud CDN can automatically compress responses in transit as they are served from origin to client.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/cdn/docs/dynamic-compression](https://docs.cloud.google.com/cdn/docs/dynamic-compression)
- [https://docs.cloud.google.com/cdn/docs/release-notes](https://docs.cloud.google.com/cdn/docs/release-notes)
- [https://docs.cloud.google.com/cdn/docs/caching](https://docs.cloud.google.com/cdn/docs/caching)

## Supporting Pages

### Enable dynamic compression \_|\_ Cloud CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/dynamic-compression](https://docs.cloud.google.com/cdn/docs/dynamic-compression)
- Source ID: `site-docs-root-2`
- Final score: 232
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- AUTOMATIC mode allows Cloud CDN to choose the best compression method based on the following: The client's accepted encoding The response's anticipated compression ratio Cloud CDN's compression speed (throughput) Brotli can yield an additional 10% to 20% reduction in download size for most content types over gzip, with similar decompression performance, making it faster overall when considering download time and decompression speed on the client.
- For example, given an Accept-Encoding header in a client request, the response is compressed (or not) according to the information in the following table: Accept-Encoding request header Response encoding gzip, compress, br Brotli (br) deflate Not compressed deflate, gzip gzip identity Not compressed Not compressed Compressible content types Dynamic compression applies to the following MIME types, based on the Content-Type HTTP response header.
- Summary of response changes The following table summarizes the changes that Cloud CDN makes to a response's headers when compression has occurred: Response header Header value after compression Content-Encoding Set to gzip or brotli .
- Home Documentation Networking Cloud CDN Guides Send feedback Enable dynamic compression Stay organized with collections Save and categorize content based on your preferences.

### Cloud CDN release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/release-notes](https://docs.cloud.google.com/cdn/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- Cloud CDN supports dynamic compression using Brotli and gzip algorithms, which can reduce data sent over the network by 60-80% for compressible content.
- February 16, 2022 Feature Dynamic compression allows Cloud CDN to automatically compress responses as they are being served between the origin and the client.
- February 13, 2025 Feature Cloud CDN supports invalidation by using cache tags with faster performance and higher rate limits in Preview .
- November 13, 2025 Feature Cloud CDN lets you add custom code to the request processing path of global external Application Load Balancers by using Service Extensions edge extensions (pre-cache) and traffic extensions (post-cache).

### Caching overview \_|\_ Cloud CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/caching](https://docs.cloud.google.com/cdn/docs/caching)
- Source ID: `site-docs-root`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- Request type Default behavior Configurable Benefits of collapsing Chunk requests Enabled No Can significantly reduce origin bandwidth Item requests Enabled Yes Can reduce origin request volume To disable item request collapsing using the Google Cloud CLI for a backend bucket that references a Cloud Storage bucket: Note: Google Cloud CLI support for the --request-coalescing flag was introduced in Google Cloud CLI version 330.0.0 . gcloud Use the gcloud compute backend-services or backend-buckets command: gcloud compute backend-services update BACKEND SERVICE NAME \ --no-request-coalescing To enable item request collapsing on a backend bucket using the Google Cloud CLI: gcloud Use the gcloud compute backend-buckets command: gcloud compute backend-buckets update BACKEND BUCKET NAME \ --request-coalescing To enable item request collapsing using the Google Cloud CLI for a backend service, including VM groups and external backends: gcloud Use the gcloud compute backend-services command: gcloud compute backend-services update BACKEND SERVICE NAME \ --request-coalescing Requests initiated by Cloud CDN When your origin server supports byte range requests , Cloud CDN can send multiple requests to your origin server in reaction to a single client request.
- Use one of the following API calls: POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/backendBuckets PUT https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/backendBuckets/ BACKEND BUCKET POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/backendServices PUT https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/backendServices/ BACKEND SERVICE Add the following snippet to the JSON request body: "cdnPolicy": { "fields": "bypassCacheOnRequestHeaders" } What's next To understand how cache modes make it easier to cache content, see Using cache modes .
- Cloud CDN performs this validation slightly differently depending on whether the response was cached by using byte range requests : If the response was cached by using byte range requests, Cloud CDN initiates a separate validation request that includes If-Modified-Since and If-None-Match headers.
- If the response that indicated that your origin server supported byte range requests for a particular cache key has expired, Cloud CDN initiates a validation request to confirm that the content hasn't changed and that your origin server still supports range requests for the content.

