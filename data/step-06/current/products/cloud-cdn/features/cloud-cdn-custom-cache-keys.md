---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:27:19.918Z"
product_name: "Cloud CDN"
product_slug: "cloud-cdn"
feature_name: "Cloud CDN Custom Cache Keys"
feature_slug: "cloud-cdn-custom-cache-keys"
latest_feature_date: "2017-04-19"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/cdn/docs/using-cache-keys"
  - "https://docs.cloud.google.com/cdn/docs/caching"
  - "https://docs.cloud.google.com/cdn/docs/release-notes"
keywords:
  - "cdn"
  - "custom"
  - "cache"
  - "keys"
  - "lets"
  - "users"
  - "control"
  - "which"
---

# Cloud CDN Custom Cache Keys

Product: Cloud CDN
Coverage: LOW

## Step 02 Summary

Cloud CDN Custom Cache Keys lets users control which request attributes are used to compute cache keys; Cloud CDN Custom Cache Keys lets users control which request attributes are used to compute cache keys.

## Extended Definition

Cloud CDN Custom Cache Keys lets users control which request attributes are used to compute cache keys; Cloud CDN Custom Cache Keys lets users control which request attributes are used to compute cache keys.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/cdn/docs/using-cache-keys](https://docs.cloud.google.com/cdn/docs/using-cache-keys)
- [https://docs.cloud.google.com/cdn/docs/caching](https://docs.cloud.google.com/cdn/docs/caching)
- [https://docs.cloud.google.com/cdn/docs/release-notes](https://docs.cloud.google.com/cdn/docs/release-notes)

## Supporting Pages

### Customize cache keys \_|\_ Cloud CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/using-cache-keys](https://docs.cloud.google.com/cdn/docs/using-cache-keys)
- Source ID: `site-docs-root`
- Final score: 180
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- These instructions set Cloud CDN cache keys to use HTTP headers, which can include allowed custom variables .
- Home Documentation Networking Cloud CDN Guides Send feedback Customize cache keys Stay organized with collections Save and categorize content based on your preferences.
- Enable Cloud CDN and customize cache keys These instructions activate Cloud CDN for a load balanced backend service and customize the cache key.
- This page explains how to customize Cloud CDN cache keys.

### Caching overview \_|\_ Cloud CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/caching](https://docs.cloud.google.com/cdn/docs/caching)
- Source ID: `site-docs-root`
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- Cloud CDN doesn't allow the following headers to be included in the list of headers: Accept Accept-Encoding Authority , because this is controlled by configuration ( cdnPolicy.includeHost ) Authorization , typically per-user as in OAuth Bearer tokens CDN-Loop Connection Content-MD5 Content-Type Cookie Date Forwarded , often per-client or per-proxy From Host , because this is controlled by configuration ( cdnPolicy.includeHost ) If-Match , If-Modified-Since , or If-None-Match Origin Proxy-Authorization Range Referer (or Referrer ) User-Agent Want-Digest X-CSRFToken and X-CSRF-Token as used by Django and Ruby on Rails X-Forwarded-For , often per-client or per-proxy X-User-IP Any header starting with the following: Access-Control- , such as Access-Control-Request-Headers and Access-Control-Request-Method Sec-Fetch- Sec-GFE- Sec-Google- X-Amz- X-GFE- X-Goog- X-Google- Use custom variables with request headers Cache keys are helpful when you need to serve content differently based on each user's device and location.
- Query string include list You can selectively control which query string parameters Cloud CDN incorporates into cache keys.
- When you set the cache mode to CACHE ALL STATIC , and a response does not have explicit caching directives in Cache-Control or Expires headers, Cloud CDN automatically caches that response for the following: Web Assets, including CSS ( text/css ), JavaScript ( application/javascript ) and all web fonts, including WOFF2 ( font/woff2 ) Images, including JPEG ( image/jpg ) and PNG ( image/png ) Videos, including H.264, H.265, and MP4 ( video/mp4 ) Audio files, including MP3 ( audio/mpeg ) and MP4 ( audio/mp4 ) Formatted documents, including PDF ( application/pdf ) Important: The static content rules described here apply only to successful responses (for example, HTTP 200 OK responses).
- Attribute Requirement Served by Backend service or external backend that doesn't have Cloud CDN enabled Cookie Has a Set-Cookie header Vary header Has a value other than Accept , Accept-Encoding , Access-Control-Request-Headers , Access-Control-Request-Method , Origin , Sec-Fetch-Dest , Sec-Fetch-Mode , Sec-Fetch-Site , X-Goog-Allowed-Resources , X-Origin , or one of the headers that are configured to be part of the cache key settings .

### Cloud CDN release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/release-notes](https://docs.cloud.google.com/cdn/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- November 13, 2025 Feature Cloud CDN lets you add custom code to the request processing path of global external Application Load Balancers by using Service Extensions edge extensions (pre-cache) and traffic extensions (post-cache).
- Serving stale content lets Google's global cache continue to serve content to users when your origin server is unreachable or is returning errors to Cloud CDN.
- May 19, 2025 Feature Cloud CDN supports content targeting , which helps you cache and deliver assets that are customized for your end-user contexts.
- April 19, 2017 Feature Cloud CDN Custom Cache Keys support is available in General Availability .

