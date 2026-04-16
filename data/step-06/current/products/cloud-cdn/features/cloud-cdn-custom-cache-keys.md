---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T14:23:30.377Z"
product_name: "Cloud CDN"
product_slug: "cloud-cdn"
feature_name: "Cloud CDN Custom Cache Keys"
feature_slug: "cloud-cdn-custom-cache-keys"
latest_feature_date: "2017-04-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/cdn/docs/best-practices"
  - "https://docs.cloud.google.com/cdn/docs/caching"
  - "https://docs.cloud.google.com/cdn/docs/using-cache-keys"
keywords:
  - "users"
  - "which"
  - "keys"
  - "lets"
  - "control"
  - "custom"
  - "cache"
---

# Cloud CDN Custom Cache Keys

Product: Cloud CDN
Coverage: MEDIUM

## Step 02 Summary

Cloud CDN Custom Cache Keys lets users control which request attributes are used to compute cache keys; Cloud CDN Custom Cache Keys lets users control which request attributes are used to compute cache keys.

## Extended Definition

Cloud CDN Custom Cache Keys lets users control which request attributes are used to compute cache keys; Cloud CDN Custom Cache Keys lets users control which request attributes are used to compute cache keys.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/cdn/docs/best-practices](https://docs.cloud.google.com/cdn/docs/best-practices)
- [https://docs.cloud.google.com/cdn/docs/caching](https://docs.cloud.google.com/cdn/docs/caching)
- [https://docs.cloud.google.com/cdn/docs/using-cache-keys](https://docs.cloud.google.com/cdn/docs/using-cache-keys)

## Supporting Pages

### Content delivery best practices \_|\_ Cloud CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/best-practices](https://docs.cloud.google.com/cdn/docs/best-practices)
- Source ID: `site-docs-reference-2`
- Final score: 179
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- When you customize the cache keys for the backend service that holds the logo, clear the Protocol checkbox so that requests through HTTP and HTTPS count as matches for the logo's cache entry.
- When you enable Cloud CDN and customize the cache keys for the backend service that holds the logo, clear the Host checkbox so that the cache ignores the domain but caches the logo.
- Following are some examples of when you might use custom cache keys: You have two hosts that resolve to the same IP address and go to the same service.
- Use custom cache keys to improve cache hit ratio For performance and scalability, it's important to optimize the cache hit ratio.

### Caching overview \_|\_ Cloud CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/caching](https://docs.cloud.google.com/cdn/docs/caching)
- Source ID: `site-docs-reference-2`
- Final score: 171
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Cloud CDN doesn't allow the following headers to be included in the list of headers: Accept Accept-Encoding Authority , because this is controlled by configuration ( cdnPolicy.includeHost ) Authorization , typically per-user as in OAuth Bearer tokens CDN-Loop Connection Content-MD5 Content-Type Cookie Date Forwarded , often per-client or per-proxy From Host , because this is controlled by configuration ( cdnPolicy.includeHost ) If-Match , If-Modified-Since , or If-None-Match Origin Proxy-Authorization Range Referer (or Referrer ) User-Agent Want-Digest X-CSRFToken and X-CSRF-Token as used by Django and Ruby on Rails X-Forwarded-For , often per-client or per-proxy X-User-IP Any header starting with the following: Access-Control- , such as Access-Control-Request-Headers and Access-Control-Request-Method Sec-Fetch- Sec-GFE- Sec-Google- X-Amz- X-GFE- X-Goog- X-Google- Use custom variables with request headers Cache keys are helpful when you need to serve content differently based on each user's device and location.
- Query string include list You can selectively control which query string parameters Cloud CDN incorporates into cache keys.
- Response directive Response has a Cache-Control header with the no-store or private directive (unless using the FORCE CACHE ALL cache mode, in which case the Cache-Control header is ignored) Request directive Request has a Cache-Control: no-store directive Request authorization Request has an Authorization header, unless overridden by the response Cache-Control.
- If you want to cache text/html and application/json content types, you must set explicit Cache-Control headers in the response , being careful not to accidentally cache one user's data and serve it to all users.

### Customize cache keys \_|\_ Cloud CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/using-cache-keys](https://docs.cloud.google.com/cdn/docs/using-cache-keys)
- Source ID: `site-docs-reference-2`
- Final score: 171
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- These instructions set Cloud CDN cache keys to use HTTP headers, which can include allowed custom variables .
- Home Documentation Networking Cloud CDN Guides Send feedback Customize cache keys Stay organized with collections Save and categorize content based on your preferences.
- Enable Cloud CDN and customize cache keys These instructions activate Cloud CDN for a load balanced backend service and customize the cache key.
- This page explains how to customize Cloud CDN cache keys.

