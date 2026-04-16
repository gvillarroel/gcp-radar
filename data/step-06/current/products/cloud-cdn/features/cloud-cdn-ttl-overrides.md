---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T14:23:30.368Z"
product_name: "Cloud CDN"
product_slug: "cloud-cdn"
feature_name: "Cloud CDN TTL overrides"
feature_slug: "cloud-cdn-ttl-overrides"
latest_feature_date: "2020-09-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/cdn/docs/using-ttl-overrides"
  - "https://docs.cloud.google.com/cdn/docs/caching"
  - "https://docs.cloud.google.com/cdn/docs/ext-backend-internet-neg-overview"
keywords:
  - "operators"
  - "controls"
  - "overrides"
  - "override"
  - "adds"
---

# Cloud CDN TTL overrides

Product: Cloud CDN
Coverage: MEDIUM

## Step 02 Summary

Cloud CDN adds TTL override controls to let operators fine-tune cache duration for responses on backend buckets and services.

## Extended Definition

Cloud CDN adds TTL override controls to let operators fine-tune cache duration for responses on backend buckets and services.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/cdn/docs/using-ttl-overrides](https://docs.cloud.google.com/cdn/docs/using-ttl-overrides)
- [https://docs.cloud.google.com/cdn/docs/caching](https://docs.cloud.google.com/cdn/docs/caching)
- [https://docs.cloud.google.com/cdn/docs/ext-backend-internet-neg-overview](https://docs.cloud.google.com/cdn/docs/ext-backend-internet-neg-overview)

## Supporting Pages

### Change TTL settings and overrides \_|\_ Cloud CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/using-ttl-overrides](https://docs.cloud.google.com/cdn/docs/using-ttl-overrides)
- Source ID: `site-docs-root-2`
- Final score: 112
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Networking Cloud CDN Guides Send feedback Change TTL settings and overrides Stay organized with collections Save and categorize content based on your preferences.
- TTL overrides give you fine-grained control over how long Cloud CDN caches your content before revalidating it.
- This page describes how to change TTL overrides with Cloud CDN.
- Set the default TTL To improve cache hit rates for content that doesn't change often, you can override the default TTL so that Cloud CDN revalidates content at the origin less frequently.

### Caching overview \_|\_ Cloud CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/caching](https://docs.cloud.google.com/cdn/docs/caching)
- Source ID: `site-docs-reference-2`
- Final score: 64
- Re-rank relevance: N/A

Evidence snippets:
- Before you set the cache mode to FORCE CACHE ALL , consider the following behaviors: For signed URLs or signed cookies , FORCE CACHE ALL overrides the maximum age specified through the Cache entry maximum age setting in the Google Cloud console or the gcloud --signed-url-cache-max-age option.
- FORCE CACHE ALL overrides cache directives ( Cache-Control and Expires ) but does not override other origin response headers.
- For more information, see Using TTL settings and overrides .
- As a result, all successful Cloud Storage responses are cached according to Cloud Storage default values, unless you explicitly adjust the cache control metadata for objects in Cloud Storage or use FORCE CACHE ALL mode to override the values sent by Cloud Storage.

### "External backends specified by using internet NEGs \_|\_ Cloud CDN \_|\_\

- URL: [https://docs.cloud.google.com/cdn/docs/ext-backend-internet-neg-overview](https://docs.cloud.google.com/cdn/docs/ext-backend-internet-neg-overview)
- Source ID: `site-docs-root`
- Final score: 54
- Re-rank relevance: N/A

