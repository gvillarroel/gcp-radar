---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:27:19.858Z"
product_name: "Cloud CDN"
product_slug: "cloud-cdn"
feature_name: "Cloud CDN service extensions (pre-cache edge extensions)"
feature_slug: "cloud-cdn-service-extensions-pre-cache-edge-extensions"
latest_feature_date: "2025-11-13"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/cdn/docs/release-notes"
  - "https://docs.cloud.google.com/cdn/docs/integration-with-service-extensions"
  - "https://docs.cloud.google.com/cdn/docs/caching"
keywords:
  - "cdn"
  - "extensions"
  - "pre"
  - "cache"
  - "edge"
  - "allows"
  - "custom"
  - "code"
---

# Cloud CDN service extensions (pre-cache edge extensions)

Product: Cloud CDN
Coverage: LOW

## Step 02 Summary

Cloud CDN allows custom code in the pre-cache request-processing stage on global external Application Load Balancers using Service Extension edge extensions; Cloud CDN enables custom code execution in the pre-cache request-processing path on global external Application Load Balancers through edge Service Extensions.

## Extended Definition

Cloud CDN allows custom code in the pre-cache request-processing stage on global external Application Load Balancers using Service Extension edge extensions; Cloud CDN enables custom code execution in the pre-cache request-processing path on global external Application Load Balancers through edge Service Extensions.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/cdn/docs/release-notes](https://docs.cloud.google.com/cdn/docs/release-notes)
- [https://docs.cloud.google.com/cdn/docs/integration-with-service-extensions](https://docs.cloud.google.com/cdn/docs/integration-with-service-extensions)
- [https://docs.cloud.google.com/cdn/docs/caching](https://docs.cloud.google.com/cdn/docs/caching)

## Supporting Pages

### Cloud CDN release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/release-notes](https://docs.cloud.google.com/cdn/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 190
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- November 13, 2025 Feature Cloud CDN lets you add custom code to the request processing path of global external Application Load Balancers by using Service Extensions edge extensions (pre-cache) and traffic extensions (post-cache).
- June 23, 2025 Feature Cloud CDN lets you add custom code to the request processing path of global external Application Load Balancers by using Service Extensions edge extensions.
- These extensions help you implement customizations in the request path pre-cache, which can influence how content is cached and the backend service is selected on the Application Load Balancer.
- November 04, 2020 Announcement Added a new tutorial for configuring Cloud CDN with a serverless app: Setting up Cloud CDN with Cloud Run, Cloud Functions, or App Engine November 02, 2020 Feature You can now configure cache modes , cache TTLs and set custom response headers in the Cloud Console, in addition to the existing gcloud and REST API support.

### "Use Service Extensions for edge compute \_|\_ Cloud CDN \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/cdn/docs/integration-with-service-extensions](https://docs.cloud.google.com/cdn/docs/integration-with-service-extensions)
- Source ID: `site-docs-root-2`
- Final score: 172
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Networking Cloud CDN Guides Send feedback Use Service Extensions for edge compute Stay organized with collections Save and categorize content based on your preferences.
- About Service Extensions edge extensions for Cloud CDN You build plugins using Wasm and the Proxy-Wasm ABI .
- Common use cases Use Service Extensions plugins with global external Application Load Balancers in the following sample scenarios: Custom traffic steering Manipulate request headers to influence backend service selection.
- As the following diagram shows, you attach Service Extensions plugins to global external Application Load Balancer by using edge extensions and traffic extensions at different stages of the networking data path.

### Caching overview \_|\_ Cloud CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/caching](https://docs.cloud.google.com/cdn/docs/caching)
- Source ID: `site-docs-root`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- Cloud CDN doesn't allow the following headers to be included in the list of headers: Accept Accept-Encoding Authority , because this is controlled by configuration ( cdnPolicy.includeHost ) Authorization , typically per-user as in OAuth Bearer tokens CDN-Loop Connection Content-MD5 Content-Type Cookie Date Forwarded , often per-client or per-proxy From Host , because this is controlled by configuration ( cdnPolicy.includeHost ) If-Match , If-Modified-Since , or If-None-Match Origin Proxy-Authorization Range Referer (or Referrer ) User-Agent Want-Digest X-CSRFToken and X-CSRF-Token as used by Django and Ruby on Rails X-Forwarded-For , often per-client or per-proxy X-User-IP Any header starting with the following: Access-Control- , such as Access-Control-Request-Headers and Access-Control-Request-Method Sec-Fetch- Sec-GFE- Sec-Google- X-Amz- X-GFE- X-Goog- X-Google- Use custom variables with request headers Cache keys are helpful when you need to serve content differently based on each user's device and location.
- For Cloud CDN, you can use only the following variables when defining headers that are both custom request headers and cache key headers: device request type user agent family client region client region subdivision Cloud CDN limits the variables to help maintain cache performance.
- Cloud CDN may periodically change the exact set of conditions under which it caches content, so if you want to explicitly prevent Cloud CDN from caching your content, follow the guidelines in the standard ( RFC 7234 ) to determine how to specify a guaranteed-uncacheable response.
- For example, if you could specify X-Lat-Long:{client city lat long} as a custom request header and then add X-Lat-Long to your set of cache key headers, Cloud CDN would attempt to cache one copy of the response for each value of client city lat long .

