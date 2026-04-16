---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T14:23:30.356Z"
product_name: "Cloud CDN"
product_slug: "cloud-cdn"
feature_name: "Serving stale content (serve-while-stale)"
feature_slug: "serving-stale-content-serve-while-stale"
latest_feature_date: "2021-01-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/cdn/docs/serving-stale-content"
  - "https://docs.cloud.google.com/cdn/docs/caching"
  - "https://docs.cloud.google.com/cdn/docs/best-practices"
keywords:
  - "stale"
  - "while"
  - "serving"
  - "serve"
  - "cached"
  - "content"
---

# Serving stale content (serve-while-stale)

Product: Cloud CDN
Coverage: MEDIUM

## Step 02 Summary

Cloud CDN can serve stale cached content when the origin is unavailable or returning errors, based on configured stale duration.

## Extended Definition

Cloud CDN can serve stale cached content when the origin is unavailable or returning errors, based on configured stale duration.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/cdn/docs/serving-stale-content](https://docs.cloud.google.com/cdn/docs/serving-stale-content)
- [https://docs.cloud.google.com/cdn/docs/caching](https://docs.cloud.google.com/cdn/docs/caching)
- [https://docs.cloud.google.com/cdn/docs/best-practices](https://docs.cloud.google.com/cdn/docs/best-practices)

## Supporting Pages

### Serve stale content \_|\_ Cloud CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/serving-stale-content](https://docs.cloud.google.com/cdn/docs/serving-stale-content)
- Source ID: `site-docs-reference-2`
- Final score: 235
- Re-rank relevance: N/A

Evidence snippets:
- Use one of the following API calls: POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/backendBuckets PUT https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/backendBuckets/ BACKEND BUCKET POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/backendServices PUT https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/backendServices/ BACKEND SERVICE Add the following snippet to the JSON request body: "cdnPolicy": { "serveWhileStale": SECONDS } Disable serving stale content Console In the Google Cloud console, go to the Load balancing page.
- Use one of the following API calls: POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/backendBuckets PUT https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/backendBuckets/ BACKEND BUCKET POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/backendServices PUT https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/backendServices/ BACKEND SERVICE Add the following snippet to the JSON request body: "cdnPolicy": { "serveWhileStale": 0 } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- If a Cloud CDN edge cache does not have a cached copy of the object to serve stale, or the object has reached the maximum stale TTL, Cloud CDN synchronously revalidates the content with the origin.
- Logging and User Agent The asynchronous requests made by Cloud CDN appear to your origin server exactly like the normal revalidation requests that occur when not serving stale content.

### Caching overview \_|\_ Cloud CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/caching](https://docs.cloud.google.com/cdn/docs/caching)
- Source ID: `site-docs-reference-2`
- Final score: 165
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Feature GKE ingress through backend configuration GKE gateway using GCPHTTPFilter Basic Caching (Modes/TTLs) Cache Key Customization Negative Caching Serve While Stale Dynamic Compression Signed URLs & Cookies Request Coalescing Cacheable content Cloud CDN caches responses that meet all of the requirements in this section.
- This is done before serving the response, unless you enable serve-while-stale , in which case revalidation is performed asynchronously.
- Serve While Stale 86400s Serves stale content for up to 24 hours if the origin is unreachable.
- This limits the need to proactively invalidate content and aligns with modern web development workflows, where web frameworks and URLs use a hash of the content to avoid serving stale objects across deployments.

### Content delivery best practices \_|\_ Cloud CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/best-practices](https://docs.cloud.google.com/cdn/docs/best-practices)
- Source ID: `site-docs-reference-2`
- Final score: 145
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Enable pod protection features when using GKE Gateway To help ensure availability in containerized environments where pods are transient, use the following GCPHTTPFilter settings: serveWhileStale : Set serveWhileStale to at least 24 hours to allow Cloud CDN to serve expired content if your GKE pods are restarting or temporarily unreachable. requestCoalescing : Enable requestCoalescing to combine multiple concurrent cache fill requests into a single request to your origin, preventing sudden traffic spikes that can impact Pod CPU and memory limits.
- An external Application Load Balancer can deliver a mix of static and dynamically created content to users through one global IP address from the following types of backends: Instance groups Zonal network endpoint groups (NEGs) Serverless NEGs : One or more App Engine , Cloud Run , or Cloud Run functions services Internet NEGs for external backends Buckets in Cloud Storage Because of the seamless integration with Google Cloud, you have several options for deploying Cloud CDN and managing content.
- This happens because Cloud CDN detects that the origin file has changed (because etag or last-modified changes), deletes any stale content, disconnects any in-progress downloads, and generates an error, which prompts the client to retry.
- Use versioned URLs to update content Versioning content serves a different version of the same content, effectively removing it by showing users new content before the cache entry expires.

