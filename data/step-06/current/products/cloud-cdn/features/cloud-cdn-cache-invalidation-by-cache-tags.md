---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:27:19.863Z"
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
  - "https://docs.cloud.google.com/cdn/docs/release-notes"
keywords:
  - "cdn"
  - "cache"
  - "invalidation"
  - "by"
  - "tags"
  - "supports"
  - "tag"
  - "based"
---

# Cloud CDN cache invalidation by cache tags

Product: Cloud CDN
Coverage: LOW

## Step 02 Summary

Cloud CDN supports cache-tag-based invalidation with higher request rates and support for all invalidation matchers; Cloud CDN supports cache-tag-based invalidation with improved performance and higher rate limits.

## Extended Definition

Cloud CDN supports cache-tag-based invalidation with higher request rates and support for all invalidation matchers; Cloud CDN supports cache-tag-based invalidation with improved performance and higher rate limits.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/cdn/docs/cache-invalidation-overview](https://docs.cloud.google.com/cdn/docs/cache-invalidation-overview)
- [https://docs.cloud.google.com/cdn/docs/invalidating-cached-content](https://docs.cloud.google.com/cdn/docs/invalidating-cached-content)
- [https://docs.cloud.google.com/cdn/docs/release-notes](https://docs.cloud.google.com/cdn/docs/release-notes)

## Supporting Pages

### Cache invalidation overview \_|\_ Cloud CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/cache-invalidation-overview](https://docs.cloud.google.com/cdn/docs/cache-invalidation-overview)
- Source ID: `site-docs-root`
- Final score: 212
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Cloud CDN supports the use of cache tags and invalidation matchers, such as host and URL path, for invalidation requests.
- Invalidation by cache tags Cache tags (or surrogate keys ) let you invalidate content based on arbitrary metadata.
- Cache tags have the following limits: Must not exceed 120 bytes per tag Must not exceed 4 KiBs (4096 bytes) of total tag names per cached object Must not exceed 50 tags per object If these tag limits are exceeded, the response isn't cached and this decision is logged as RESPONSE CACHE TAG INVALID in LoadBalancerLogEntry.cacheDecision .
- Home Documentation Networking Cloud CDN Guides Send feedback Cache invalidation overview Stay organized with collections Save and categorize content based on your preferences.

### Invalidate cached content \_|\_ Cloud CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/invalidating-cached-content](https://docs.cloud.google.com/cdn/docs/invalidating-cached-content)
- Source ID: `site-docs-root`
- Final score: 178
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/urlMaps/ URL MAP NAME /invalidateCache Replace the following: PROJECT ID : your Google Cloud console project ID URL MAP NAME : the name of the URL map To specify a directory for invalidation, use the following sample JSON request body: { "path": "/images/ " } To invalidate a directory for only one host, use the following sample JSON request body: { "host": "host1.com", "path": "/images/ " } Invalidate by cache tags Console In the Google Cloud console, go to the Cloud CDN page.
- Click Invalidate . gcloud Use the gcloud beta compute url-maps invalidate-cdn-cache command . gcloud beta compute url-maps invalidate-cdn-cache URL MAP NAME \ --tags= TAGS Replace the following: URL MAP NAME : the name of the URL map TAGS : a tag or a comma-separated list of tags; alternatively, you can specify this flag up to 10 times For example, if the backend response includes a Cache-Tag header with an opaque user ID, such as a UUID4 or another form of GUID, you can invalidate all content for a specific user by using the tag flag.
- POST https://compute.googleapis.com/compute/beta/projects/ PROJECT ID /global/urlMaps/ URL MAP NAME /invalidateCache Replace the following: PROJECT ID : your Google Cloud console project ID URL MAP NAME : the name of the URL map To specify cache tags for invalidation, use the following sample JSON request body: { "cacheTags": [ "tag1", "tag2" ] } You can specify a single tag or a comma-separated list of tags.
- Additionally, to invalidate content for only one host, such as for your staging environment, add the --host flag. gcloud beta compute url-maps invalidate-cdn-cache url map 1 \ --tags="1115b8f4-f804-4861-9629-8cb9aecdeeb3" \ --host="host1.com" API Use the urlMaps.invalidateCache method .

### Cloud CDN release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/release-notes](https://docs.cloud.google.com/cdn/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- February 13, 2025 Feature Cloud CDN supports invalidation by using cache tags with faster performance and higher rate limits in Preview .
- January 31, 2021 Feature Cloud CDN now supports serving stale content and the ability to bypass the cache based on request header(s).
- By grouping objects together using cache tags, you can remove and refresh content at scale.
- May 05, 2025 Feature Invalidation using cache tags is Generally Available .

