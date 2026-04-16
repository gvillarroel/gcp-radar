---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T14:23:30.350Z"
product_name: "Cloud CDN"
product_slug: "cloud-cdn"
feature_name: "Dynamic compression"
feature_slug: "dynamic-compression"
latest_feature_date: "2022-09-20"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/cdn/docs/caching"
  - "https://docs.cloud.google.com/cdn/docs/dynamic-compression"
  - "https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring"
keywords:
  - "compression"
  - "dynamic"
  - "network"
  - "brotli"
  - "gzip"
  - "reduce"
  - "supports"
---

# Dynamic compression

Product: Cloud CDN
Coverage: LOW

## Step 02 Summary

Cloud CDN supports dynamic compression using Brotli and gzip to reduce network payload for compressible content; Cloud CDN can automatically compress responses in transit as they are served from origin to client.

## Extended Definition

Cloud CDN supports dynamic compression using Brotli and gzip to reduce network payload for compressible content; Cloud CDN can automatically compress responses in transit as they are served from origin to client.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/cdn/docs/caching](https://docs.cloud.google.com/cdn/docs/caching)
- [https://docs.cloud.google.com/cdn/docs/dynamic-compression](https://docs.cloud.google.com/cdn/docs/dynamic-compression)
- [https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring](https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring)

## Supporting Pages

### Caching overview \_|\_ Cloud CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/caching](https://docs.cloud.google.com/cdn/docs/caching)
- Source ID: `site-docs-reference-2`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- Request type Default behavior Configurable Benefits of collapsing Chunk requests Enabled No Can significantly reduce origin bandwidth Item requests Enabled Yes Can reduce origin request volume To disable item request collapsing using the Google Cloud CLI for a backend bucket that references a Cloud Storage bucket: Note: Google Cloud CLI support for the --request-coalescing flag was introduced in Google Cloud CLI version 330.0.0 . gcloud Use the gcloud compute backend-services or backend-buckets command: gcloud compute backend-services update BACKEND SERVICE NAME \ --no-request-coalescing To enable item request collapsing on a backend bucket using the Google Cloud CLI: gcloud Use the gcloud compute backend-buckets command: gcloud compute backend-buckets update BACKEND BUCKET NAME \ --request-coalescing To enable item request collapsing using the Google Cloud CLI for a backend service, including VM groups and external backends: gcloud Use the gcloud compute backend-services command: gcloud compute backend-services update BACKEND SERVICE NAME \ --request-coalescing Requests initiated by Cloud CDN When your origin server supports byte range requests , Cloud CDN can send multiple requests to your origin server in reaction to a single client request.
- Feature GKE ingress through backend configuration GKE gateway using GCPHTTPFilter Basic Caching (Modes/TTLs) Cache Key Customization Negative Caching Serve While Stale Dynamic Compression Signed URLs & Cookies Request Coalescing Cacheable content Cloud CDN caches responses that meet all of the requirements in this section.
- Cloud CDN does not compress or decompress responses itself (unless dynamic compression is enabled), but it can serve responses that the origin server has compressed.
- For example, Dynamic compression , Signed URLs and Signed cookies are managed on the backend.

### Enable dynamic compression \_|\_ Cloud CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/dynamic-compression](https://docs.cloud.google.com/cdn/docs/dynamic-compression)
- Source ID: `site-docs-reference-2`
- Final score: 22
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example, given an Accept-Encoding header in a client request, the response is compressed (or not) according to the information in the following table: Accept-Encoding request header Response encoding gzip, compress, br Brotli (br) deflate Not compressed deflate, gzip gzip identity Not compressed Not compressed Compressible content types Dynamic compression applies to the following MIME types, based on the Content-Type HTTP response header.
- AUTOMATIC mode allows Cloud CDN to choose the best compression method based on the following: The client's accepted encoding The response's anticipated compression ratio Cloud CDN's compression speed (throughput) Brotli can yield an additional 10% to 20% reduction in download size for most content types over gzip, with similar decompression performance, making it faster overall when considering download time and decompression speed on the client.
- Summary of response changes The following table summarizes the changes that Cloud CDN makes to a response's headers when compression has occurred: Response header Header value after compression Content-Encoding Set to gzip or brotli .
- Home Documentation Networking Cloud CDN Guides Send feedback Enable dynamic compression Stay organized with collections Save and categorize content based on your preferences.

### "Logs and metrics for backend services \_|\_ Cloud CDN \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring](https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring)
- Source ID: `site-docs-root-2`
- Final score: 21
- Re-rank relevance: N/A

Evidence snippets:
- To finish editing the load balancer, click Update . gcloud Create a backend service and enable logging by using the gcloud compute backend-services create command . gcloud compute backend-services create BACKEND SERVICE \ --global \ --enable-logging \ --logging-sample-rate= VALUE \ --load-balancing-scheme=EXTERNAL MANAGED \ --logging-optional= LOGGING OPTIONAL MODE \ --logging-optional-fields= OPTIONAL FIELDS The gcloud compute backend-services create command supports the following fields: --global indicates that the backend service is global.
- Filter this table: Metric Name Description Backend configured rate ( Preview ) network.googleapis.com/loadbalancer/backend/configured rate The maximum rate in requests per second configured per backend group.
- Backend load balancing custom metrics ( Preview ) network.googleapis.com/loadbalancer/backend/lb custom metric The current utilization by each backend group, based on your defined custom metrics.
- Backend configured utilization ( Preview ) network.googleapis.com/loadbalancer/backend/configured utilization The maximum CPU utilization capacity as a fraction, configured per backend group.

