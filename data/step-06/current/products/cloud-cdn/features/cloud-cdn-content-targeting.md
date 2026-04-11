---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:27:19.862Z"
product_name: "Cloud CDN"
product_slug: "cloud-cdn"
feature_name: "Cloud CDN content targeting"
feature_slug: "cloud-cdn-content-targeting"
latest_feature_date: "2025-05-19"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/cdn/docs/caching"
  - "https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring"
  - "https://docs.cloud.google.com/cdn/docs/release-notes"
keywords:
  - "cdn"
  - "content"
  - "targeting"
  - "supports"
  - "to"
  - "customize"
  - "caching"
  - "and"
---

# Cloud CDN content targeting

Product: Cloud CDN
Coverage: LOW

## Step 02 Summary

Cloud CDN supports content targeting to customize caching and delivery by context, including device and geolocation characteristics.

## Extended Definition

Cloud CDN supports content targeting to customize caching and delivery by context, including device and geolocation characteristics.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/cdn/docs/caching](https://docs.cloud.google.com/cdn/docs/caching)
- [https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring](https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring)
- [https://docs.cloud.google.com/cdn/docs/release-notes](https://docs.cloud.google.com/cdn/docs/release-notes)

## Supporting Pages

### Caching overview \_|\_ Cloud CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/caching](https://docs.cloud.google.com/cdn/docs/caching)
- Source ID: `site-docs-root`
- Final score: 178
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- When you set the cache mode to CACHE ALL STATIC , and a response does not have explicit caching directives in Cache-Control or Expires headers, Cloud CDN automatically caches that response for the following: Web Assets, including CSS ( text/css ), JavaScript ( application/javascript ) and all web fonts, including WOFF2 ( font/woff2 ) Images, including JPEG ( image/jpg ) and PNG ( image/png ) Videos, including H.264, H.265, and MP4 ( video/mp4 ) Audio files, including MP3 ( audio/mpeg ) and MP4 ( audio/mp4 ) Formatted documents, including PDF ( application/pdf ) Important: The static content rules described here apply only to successful responses (for example, HTTP 200 OK responses).
- If the response that indicated that your origin server supported byte range requests for a particular cache key has expired, Cloud CDN initiates a validation request to confirm that the content hasn't changed and that your origin server still supports range requests for the content.
- Cloud CDN may periodically change the exact set of conditions under which it caches content, so if you want to explicitly prevent Cloud CDN from caching your content, follow the guidelines in the standard ( RFC 7234 ) to determine how to specify a guaranteed-uncacheable response.
- Request type Default behavior Configurable Benefits of collapsing Chunk requests Enabled No Can significantly reduce origin bandwidth Item requests Enabled Yes Can reduce origin request volume To disable item request collapsing using the Google Cloud CLI for a backend bucket that references a Cloud Storage bucket: Note: Google Cloud CLI support for the --request-coalescing flag was introduced in Google Cloud CLI version 330.0.0 . gcloud Use the gcloud compute backend-services or backend-buckets command: gcloud compute backend-services update BACKEND SERVICE NAME \ --no-request-coalescing To enable item request collapsing on a backend bucket using the Google Cloud CLI: gcloud Use the gcloud compute backend-buckets command: gcloud compute backend-buckets update BACKEND BUCKET NAME \ --request-coalescing To enable item request collapsing using the Google Cloud CLI for a backend service, including VM groups and external backends: gcloud Use the gcloud compute backend-services command: gcloud compute backend-services update BACKEND SERVICE NAME \ --request-coalescing Requests initiated by Cloud CDN When your origin server supports byte range requests , Cloud CDN can send multiple requests to your origin server in reaction to a single client request.

### "Logs and metrics for backend services \_|\_ Cloud CDN \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring](https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring)
- Source ID: `site-docs-root-2`
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- To finish editing the load balancer, click Update . gcloud Create a backend service and enable logging by using the gcloud compute backend-services create command . gcloud compute backend-services create BACKEND SERVICE \ --global \ --enable-logging \ --logging-sample-rate= VALUE \ --load-balancing-scheme=EXTERNAL MANAGED \ --logging-optional= LOGGING OPTIONAL MODE \ --logging-optional-fields= OPTIONAL FIELDS The gcloud compute backend-services create command supports the following fields: --global indicates that the backend service is global.
- This information is only available for global external Application Load Balancers using custom error responses . string Optional The cachePolicySource field holds the source of the caching policy that governs the caching behavior for a specific request: CACHE POLICY SOURCE ROUTE : A cache policy can be applied at different levels of the URL map, and that allows for more granular control over caching.
- CACHE POLICY SOURCE BACKEND : The caching behavior determined by the Cloud CDN configuration on the backend service or bucket. integer Required The overrideResponseCode holds the override response code applied to the response sent to the client.
- Home Documentation Networking Cloud CDN Guides Send feedback Logs and metrics for backend services Stay organized with collections Save and categorize content based on your preferences.

### Cloud CDN release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/release-notes](https://docs.cloud.google.com/cdn/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- May 19, 2025 Feature Cloud CDN supports content targeting , which helps you cache and deliver assets that are customized for your end-user contexts.
- January 31, 2021 Feature Cloud CDN now supports serving stale content and the ability to bypass the cache based on request header(s).
- Signed Cookies complement our existing Signed URLs functionality by allowing you to sign a URL prefix and issue a cookie to a client, avoiding the need to sign content on a per-URL basis when protecting media or other content cached by Cloud CDN.
- March 22, 2021 Announcement Cloud CDN now defaults to the Cache All Static cache mode for newly created backend buckets and backend services, which allows Cloud CDN to cache static content more readily.

