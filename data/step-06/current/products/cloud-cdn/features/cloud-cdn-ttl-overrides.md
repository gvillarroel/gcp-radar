---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:27:19.905Z"
product_name: "Cloud CDN"
product_slug: "cloud-cdn"
feature_name: "Cloud CDN TTL overrides"
feature_slug: "cloud-cdn-ttl-overrides"
latest_feature_date: "2020-09-14"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/cdn/docs/using-ttl-overrides"
  - "https://docs.cloud.google.com/cdn/docs/caching"
  - "https://docs.cloud.google.com/cdn/docs/release-notes"
keywords:
  - "cdn"
  - "ttl"
  - "overrides"
  - "adds"
  - "override"
  - "controls"
  - "to"
  - "let"
---

# Cloud CDN TTL overrides

Product: Cloud CDN
Coverage: LOW

## Step 02 Summary

Cloud CDN adds TTL override controls to let operators fine-tune cache duration for responses on backend buckets and services.

## Extended Definition

Cloud CDN adds TTL override controls to let operators fine-tune cache duration for responses on backend buckets and services.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/cdn/docs/using-ttl-overrides](https://docs.cloud.google.com/cdn/docs/using-ttl-overrides)
- [https://docs.cloud.google.com/cdn/docs/caching](https://docs.cloud.google.com/cdn/docs/caching)
- [https://docs.cloud.google.com/cdn/docs/release-notes](https://docs.cloud.google.com/cdn/docs/release-notes)

## Supporting Pages

### Change TTL settings and overrides \_|\_ Cloud CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/using-ttl-overrides](https://docs.cloud.google.com/cdn/docs/using-ttl-overrides)
- Source ID: `site-docs-root-2`
- Final score: 198
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This page describes how to change TTL overrides with Cloud CDN.
- The client TTL lets you set a maximum TTL for what is sent to browsers or clients so that clients revalidate content against Cloud CDN more often, without requiring revalidation at the origin.
- Set the default TTL To improve cache hit rates for content that doesn't change often, you can override the default TTL so that Cloud CDN revalidates content at the origin less frequently.
- Home Documentation Networking Cloud CDN Guides Send feedback Change TTL settings and overrides Stay organized with collections Save and categorize content based on your preferences.

### Caching overview \_|\_ Cloud CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/caching](https://docs.cloud.google.com/cdn/docs/caching)
- Source ID: `site-docs-root`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- Before you set the cache mode to FORCE CACHE ALL , consider the following behaviors: For signed URLs or signed cookies , FORCE CACHE ALL overrides the maximum age specified through the Cache entry maximum age setting in the Google Cloud console or the gcloud --signed-url-cache-max-age option.
- When an origin server supports byte range requests, a Cloud CDN cache declines to store an otherwise cacheable response the first time it is requested if either of the following is true: The response body is incomplete because the client requested only part of the content.
- Otherwise, Cloud CDN adds If-Modified-Since and If-None-Match headers to the client request and forwards the modified request to the backend.
- For backend services, Cloud CDN defaults to using the complete request URI as the cache key.

### Cloud CDN release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/release-notes](https://docs.cloud.google.com/cdn/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 148
- Re-rank relevance: N/A

Evidence snippets:
- TTL overrides support fine-tuning how long Cloud CDN caches your responses, and custom response headers introduce a new {cdn cache status} variable that is populated with the cache status response.
- TTL overrides support fine-tuning how long Cloud CDN caches your responses, and custom response headers introduce a new {cdn cache status} variable that is populated with the cache status response.
- December 08, 2020 Feature The Google Terraform provider now supports the latest Cloud CDN features, including cache modes , TTL overrides, and custom response headers.
- The Google Terraform provider also supports these latest Cloud CDN features, including cache modes, TTL overrides, and custom response headers.

