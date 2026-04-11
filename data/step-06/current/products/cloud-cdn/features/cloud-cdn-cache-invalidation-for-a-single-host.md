---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:27:19.920Z"
product_name: "Cloud CDN"
product_slug: "cloud-cdn"
feature_name: "Cloud CDN cache invalidation for a single host"
feature_slug: "cloud-cdn-cache-invalidation-for-a-single-host"
latest_feature_date: "2017-01-19"
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
  - "for"
  - "single"
  - "host"
  - "supports"
  - "invalidating"
---

# Cloud CDN cache invalidation for a single host

Product: Cloud CDN
Coverage: LOW

## Step 02 Summary

Cloud CDN supports invalidating cached objects scoped to a single host.

## Extended Definition

Cloud CDN supports invalidating cached objects scoped to a single host.

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
- Final score: 196
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Cloud CDN supports the use of cache tags and invalidation matchers, such as host and URL path, for invalidation requests.
- Invalidation for a single host Cache invalidation invalidates the path for all your hostnames.
- Cache invalidations can be issued only by principals who have the Identity and Access Management (IAM) roles for configuring load balancer resources in the frontend projects—for example, the Compute Network Admin role ( roles/compute.networkAdmin ).
- Service administrators, who control provisioning of the backend services in a separate project, can work with the load balancer administrator of the frontend project to issue cache invalidation for their cross-project services.

### Invalidate cached content \_|\_ Cloud CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/invalidating-cached-content](https://docs.cloud.google.com/cdn/docs/invalidating-cached-content)
- Source ID: `site-docs-root`
- Final score: 166
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/urlMaps/ URL MAP NAME /invalidateCache Replace the following: PROJECT ID : your Google Cloud console project ID URL MAP NAME : the name of the URL map To specify a URL path for invalidation, use the following sample JSON request body: { "path": "/ " } To invalidate the URL path for only one host, use the following sample JSON request body: { "host": "host1.com", "path": "/ " } See the status of your invalidation request Cloud CDN emits two log lines per invalidation, one when the invalidation is accepted and the other when it's complete.
- POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/urlMaps/ URL MAP NAME /invalidateCache Replace the following: PROJECT ID : your Google Cloud console project ID URL MAP NAME : the name of the URL map To specify a file for invalidation, use the following sample JSON request body: { "path": "/images/file.jpg" } To invalidate the file for only one host, use the following sample JSON request body: { "host": "host1.com", "path": "/images/file.jpg" } Invalidate the whole directory Console In the Google Cloud console, go to the Cloud CDN page.
- POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/urlMaps/ URL MAP NAME /invalidateCache Replace the following: PROJECT ID : your Google Cloud console project ID URL MAP NAME : the name of the URL map To specify a directory for invalidation, use the following sample JSON request body: { "path": "/images/ " } To invalidate a directory for only one host, use the following sample JSON request body: { "host": "host1.com", "path": "/images/ " } Invalidate by cache tags Console In the Google Cloud console, go to the Cloud CDN page.
- To invalidate for only one host, add the --host flag—for example, --host host1.com . gcloud compute url-maps invalidate-cdn-cache URL MAP NAME \ --host host1.com \ --path "/images/file.jpg" By default, the Google Cloud CLI waits until the invalidation has completed.

### Cloud CDN release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/release-notes](https://docs.cloud.google.com/cdn/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- February 13, 2025 Feature Cloud CDN supports invalidation by using cache tags with faster performance and higher rate limits in Preview .
- January 19, 2017 Feature Support for cache invalidation for a single host is available in General Availability .
- December 08, 2020 Feature The Google Terraform provider now supports the latest Cloud CDN features, including cache modes , TTL overrides, and custom response headers.
- May 19, 2025 Feature Cloud CDN supports content targeting , which helps you cache and deliver assets that are customized for your end-user contexts.

