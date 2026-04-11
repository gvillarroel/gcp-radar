---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:27:19.874Z"
product_name: "Cloud CDN"
product_slug: "cloud-cdn"
feature_name: "Serving stale content (serve-while-stale)"
feature_slug: "serving-stale-content-serve-while-stale"
latest_feature_date: "2021-01-31"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/cdn/docs/serving-stale-content"
  - "https://docs.cloud.google.com/cdn/docs/caching"
  - "https://docs.cloud.google.com/cdn/docs/release-notes"
keywords:
  - "serving"
  - "stale"
  - "content"
  - "serve"
  - "while"
  - "cdn"
  - "can"
  - "cached"
---

# Serving stale content (serve-while-stale)

Product: Cloud CDN
Coverage: LOW

## Step 02 Summary

Cloud CDN can serve stale cached content when the origin is unavailable or returning errors, based on configured stale duration.

## Extended Definition

Cloud CDN can serve stale cached content when the origin is unavailable or returning errors, based on configured stale duration.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/cdn/docs/serving-stale-content](https://docs.cloud.google.com/cdn/docs/serving-stale-content)
- [https://docs.cloud.google.com/cdn/docs/caching](https://docs.cloud.google.com/cdn/docs/caching)
- [https://docs.cloud.google.com/cdn/docs/release-notes](https://docs.cloud.google.com/cdn/docs/release-notes)

## Supporting Pages

### Serve stale content \_|\_ Cloud CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/serving-stale-content](https://docs.cloud.google.com/cdn/docs/serving-stale-content)
- Source ID: `site-docs-root-2`
- Final score: 254
- Re-rank relevance: N/A

Evidence snippets:
- Use one of the following API calls: POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/backendBuckets PUT https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/backendBuckets/ BACKEND BUCKET POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/backendServices PUT https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/backendServices/ BACKEND SERVICE Add the following snippet to the JSON request body: "cdnPolicy": { "serveWhileStale": SECONDS } Disable serving stale content Console In the Google Cloud console, go to the Load balancing page.
- Use one of the following API calls: POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/backendBuckets PUT https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/backendBuckets/ BACKEND BUCKET POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/backendServices PUT https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/backendServices/ BACKEND SERVICE Add the following snippet to the JSON request body: "cdnPolicy": { "serveWhileStale": 0 } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Cloud CDN offers the following two methods to control how long a stale object can be served while a revalidation request is sent to the origin: At the origin: You can specify the Cache-Control: stale-while-revalidate directive in the response header.
- If a Cloud CDN edge cache does not have a cached copy of the object to serve stale, or the object has reached the maximum stale TTL, Cloud CDN synchronously revalidates the content with the origin.

### Caching overview \_|\_ Cloud CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/caching](https://docs.cloud.google.com/cdn/docs/caching)
- Source ID: `site-docs-root`
- Final score: 190
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This behavior can be enabled for all responses by setting cdnPolicy.serveWhileStale on the backend. stale-if-error= SECONDS The stale-if-error request directive is ignored.
- This can be overridden on a per-backend basis with the FORCE CACHE ALL cache mode. public N/A This directive is not required for cacheability, but it is a best practice to include it for content that should be cached by proxies. private N/A A response with the private directive isn't cached by Cloud CDN, even if the response is otherwise considered cacheable.
- You can configure cache policies in URL maps when: a single backend serves different types of content different paths require different caching behavior you want to enable caching for specific routes only For details on how to configure cache policies in URL map, see Configure a Cloud CDN cache policy .
- If some ranges of the content requested by the client are present in the cache, Cloud CDN serves whatever it can from the cache and sends byte range requests for only the missing ranges to your origin server.

### Cloud CDN release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/release-notes](https://docs.cloud.google.com/cdn/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- You can configure how long Cloud CDN will serve content beyond expiry by setting the serveWhileStale value for each backend service or bucket.
- Serving stale content lets Google's global cache continue to serve content to users when your origin server is unreachable or is returning errors to Cloud CDN.
- January 31, 2021 Feature Cloud CDN now supports serving stale content and the ability to bypass the cache based on request header(s).
- November 04, 2020 Announcement Added a new tutorial for configuring Cloud CDN with a serverless app: Setting up Cloud CDN with Cloud Run, Cloud Functions, or App Engine November 02, 2020 Feature You can now configure cache modes , cache TTLs and set custom response headers in the Cloud Console, in addition to the existing gcloud and REST API support.

