---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T14:23:30.366Z"
product_name: "Cloud CDN"
product_slug: "cloud-cdn"
feature_name: "Request collapsing behavior improvements"
feature_slug: "request-collapsing-behavior-improvements"
latest_feature_date: "2020-09-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/cdn/docs/caching"
  - "https://docs.cloud.google.com/cdn/docs/overview"
  - "https://docs.cloud.google.com/cdn/docs/dynamic-compression"
keywords:
  - "improvements"
  - "collapsing"
  - "reduce"
  - "behavior"
  - "improved"
  - "origin"
  - "request"
---

# Request collapsing behavior improvements

Product: Cloud CDN
Coverage: MEDIUM

## Step 02 Summary

Cloud CDN improved request collapsing to reduce origin load during revalidation and cache fill operations.

## Extended Definition

Cloud CDN improved request collapsing to reduce origin load during revalidation and cache fill operations.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/cdn/docs/caching](https://docs.cloud.google.com/cdn/docs/caching)
- [https://docs.cloud.google.com/cdn/docs/overview](https://docs.cloud.google.com/cdn/docs/overview)
- [https://docs.cloud.google.com/cdn/docs/dynamic-compression](https://docs.cloud.google.com/cdn/docs/dynamic-compression)

## Supporting Pages

### Caching overview \_|\_ Cloud CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/caching](https://docs.cloud.google.com/cdn/docs/caching)
- Source ID: `site-docs-reference-2`
- Final score: 137
- Re-rank relevance: N/A

Evidence snippets:
- Request type Default behavior Configurable Benefits of collapsing Chunk requests Enabled No Can significantly reduce origin bandwidth Item requests Enabled Yes Can reduce origin request volume To disable item request collapsing using the Google Cloud CLI for a backend bucket that references a Cloud Storage bucket: Note: Google Cloud CLI support for the --request-coalescing flag was introduced in Google Cloud CLI version 330.0.0 . gcloud Use the gcloud compute backend-services or backend-buckets command: gcloud compute backend-services update BACKEND SERVICE NAME \ --no-request-coalescing To enable item request collapsing on a backend bucket using the Google Cloud CLI: gcloud Use the gcloud compute backend-buckets command: gcloud compute backend-buckets update BACKEND BUCKET NAME \ --request-coalescing To enable item request collapsing using the Google Cloud CLI for a backend service, including VM groups and external backends: gcloud Use the gcloud compute backend-services command: gcloud compute backend-services update BACKEND SERVICE NAME \ --request-coalescing Requests initiated by Cloud CDN When your origin server supports byte range requests , Cloud CDN can send multiple requests to your origin server in reaction to a single client request.
- In comparison, with request collapsing disabled or for requests that cannot be coalesced, the number of origin requests and responses can be equal to the number of clients attempting to retrieve an object that's not cached.
- This can actively reduce the load on the origin, and applies to both item requests (responses fetched directly) and chunk requests , where Cloud CDN uses Range requests to fetch larger objects more efficiently.
- Request collapsing (coalescing) Request collapsing (also called coalescing ) actively collapses multiple user-driven cache fill requests for the same cache key into a single origin request per edge node.

### Enable dynamic compression \_|\_ Cloud CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/dynamic-compression](https://docs.cloud.google.com/cdn/docs/dynamic-compression)
- Source ID: `site-docs-reference-2`
- Final score: 84
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If a request has an Accept-Encoding header that explicitly lists support for either gzip or Brotli algorithms, then uncompressed responses served from the backend (origin) with a Content-Type header that matches the compressible content types are compressed with gzip or Brotli, accordingly.
- Re-compressing an already compressed response rarely reduces file size, and clients might exhibit unexpected behavior when receiving a response of this kind.
- Use one of the following commands: POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/backendServices PUT https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/backendServices/ BACKEND SERVICE POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/backendBuckets PUT https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/backendBuckets/ BACKEND BUCKET Add the following snippet to the JSON request body: "compressionMode": AUTOMATIC The compression-mode can be one of the following: AUTOMATIC (recommended): Automatically uses the best compression based on the Accept-Encoding header sent by the client.
- For example, given an Accept-Encoding header in a client request, the response is compressed (or not) according to the information in the following table: Accept-Encoding request header Response encoding gzip, compress, br Brotli (br) deflate Not compressed deflate, gzip gzip identity Not compressed Not compressed Compressible content types Dynamic compression applies to the following MIME types, based on the Content-Type HTTP response header.

### Cloud CDN overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/overview](https://docs.cloud.google.com/cdn/docs/overview)
- Source ID: `site-docs-reference-2`
- Final score: 82
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can, however, expect that popular requests for cacheable content are served from a cache most of the time, yielding significantly reduced latencies, reduced cost, and reduced load on your origin servers.
- When a cache hit occurs, the GFE looks up the content by its cache key and responds directly to the user, shortening the round-trip time and saving the origin server from having to process the request.
- Requests initiated by Cloud CDN When your origin server supports byte range requests, Cloud CDN can send multiple requests to the origin server in reaction to a single client request.
- If the cache hit ratio is 60%, it means that the requested object is served from the cache 60% of the time and must be retrieved from the origin 40% of the time.

