---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:27:19.860Z"
product_name: "Cloud CDN"
product_slug: "cloud-cdn"
feature_name: "Cloud CDN traffic extensions (post-cache)"
feature_slug: "cloud-cdn-traffic-extensions-post-cache"
latest_feature_date: "2025-11-13"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/cdn/docs/release-notes"
  - "https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring"
  - "https://docs.cloud.google.com/cdn/docs/using-cache-keys"
keywords:
  - "cdn"
  - "traffic"
  - "extensions"
  - "post"
  - "cache"
  - "enables"
  - "custom"
  - "code"
---

# Cloud CDN traffic extensions (post-cache)

Product: Cloud CDN
Coverage: LOW

## Step 02 Summary

Cloud CDN enables custom code execution in the post-cache request-processing path on global external Application Load Balancers through traffic extensions.

## Extended Definition

Cloud CDN enables custom code execution in the post-cache request-processing path on global external Application Load Balancers through traffic extensions.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/cdn/docs/release-notes](https://docs.cloud.google.com/cdn/docs/release-notes)
- [https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring](https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring)
- [https://docs.cloud.google.com/cdn/docs/using-cache-keys](https://docs.cloud.google.com/cdn/docs/using-cache-keys)

## Supporting Pages

### Cloud CDN release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/release-notes](https://docs.cloud.google.com/cdn/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- November 13, 2025 Feature Cloud CDN lets you add custom code to the request processing path of global external Application Load Balancers by using Service Extensions edge extensions (pre-cache) and traffic extensions (post-cache).
- June 23, 2025 Feature Cloud CDN lets you add custom code to the request processing path of global external Application Load Balancers by using Service Extensions edge extensions.
- November 04, 2020 Announcement Added a new tutorial for configuring Cloud CDN with a serverless app: Setting up Cloud CDN with Cloud Run, Cloud Functions, or App Engine November 02, 2020 Feature You can now configure cache modes , cache TTLs and set custom response headers in the Cloud Console, in addition to the existing gcloud and REST API support.
- October 27, 2020 Change Added a new tutorial: Setting up an HTTP-to-HTTPS redirect October 26, 2020 Feature Cloud CDN can now cache more response codes, including common error codes such as 404 (Not Found), 301 (Permanent Redirect), 302 (Temporary Redirect), and many others .

### "Logs and metrics for backend services \_|\_ Cloud CDN \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring](https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring)
- Source ID: `site-docs-root-2`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- CACHE POLICY SOURCE BACKEND : The caching behavior determined by the Cloud CDN configuration on the backend service or bucket. integer Required The overrideResponseCode holds the override response code applied to the response sent to the client.
- Any cacheable response code is possible. response from cache validated The return code was set from a Cloud CDN cached entry that was validated by a backend.
- Any cacheable response code is possible. response from cache The HTTP request was served from a Cloud CDN cache.
- Multiple queries are sent to the same backend for different chunks of data to support a single client request. proxy continent Continent of the HTTP(S) GFE that terminated the HTTP(S) connection—for example, America , Europe , Asia protocol Protocol used by the client, one of HTTP/1.0 , HTTP/1.1 , HTTP/2.0 , QUIC/HTTP/2.0 , UNKNOWN . response code The HTTP status code of the request. response code class The HTTP status code class of the request: 200 , 300 , 400 , 500 or 0 for none. cache result Cache result for serving HTTP request by proxy: HIT , MISS , DISABLED , PARTIAL HIT (for a request served partially from cache and partially from backend), or UNKNOWN . client country Country of the client that issued the HTTP request—for example, United States or Germany . load balancing scheme The load balancing scheme used.

### Customize cache keys \_|\_ Cloud CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/using-cache-keys](https://docs.cloud.google.com/cdn/docs/using-cache-keys)
- Source ID: `site-docs-root`
- Final score: 140
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Networking Cloud CDN Guides Send feedback Customize cache keys Stay organized with collections Save and categorize content based on your preferences.
- Enable Cloud CDN and customize cache keys These instructions activate Cloud CDN for a load balanced backend service and customize the cache key.
- These instructions set Cloud CDN cache keys to use HTTP headers, which can include allowed custom variables .
- This page explains how to customize Cloud CDN cache keys.

