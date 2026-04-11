---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:27:19.914Z"
product_name: "Cloud CDN"
product_slug: "cloud-cdn"
feature_name: "Cloud CDN custom origins"
feature_slug: "cloud-cdn-custom-origins"
latest_feature_date: "2020-03-25"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/cdn/docs/release-notes"
  - "https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring"
  - "https://docs.cloud.google.com/cdn/docs/caching"
keywords:
  - "cdn"
  - "custom"
  - "origins"
  - "is"
  - "generally"
  - "available"
  - "enabling"
  - "caches"
---

# Cloud CDN custom origins

Product: Cloud CDN
Coverage: LOW

## Step 02 Summary

Cloud CDN custom origins is generally available, enabling caches to source content from on-premises or other-cloud origins; Cloud CDN custom origins support is available in beta for serving cached content from external origins.

## Extended Definition

Cloud CDN custom origins is generally available, enabling caches to source content from on-premises or other-cloud origins; Cloud CDN custom origins support is available in beta for serving cached content from external origins.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/cdn/docs/release-notes](https://docs.cloud.google.com/cdn/docs/release-notes)
- [https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring](https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring)
- [https://docs.cloud.google.com/cdn/docs/caching](https://docs.cloud.google.com/cdn/docs/caching)

## Supporting Pages

### Cloud CDN release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/release-notes](https://docs.cloud.google.com/cdn/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 186
- Re-rank relevance: N/A

Evidence snippets:
- March 25, 2020 Feature Cloud CDN custom origins is available in General Availability .
- February 10, 2020 Feature Cloud CDN custom origins support is available in Beta .
- TTL overrides support fine-tuning how long Cloud CDN caches your responses, and custom response headers introduce a new {cdn cache status} variable that is populated with the cache status response.
- TTL overrides support fine-tuning how long Cloud CDN caches your responses, and custom response headers introduce a new {cdn cache status} variable that is populated with the cache status response.

### "Logs and metrics for backend services \_|\_ Cloud CDN \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring](https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring)
- Source ID: `site-docs-root-2`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- This information is only available for global external Application Load Balancers using custom error responses . string Optional The cachePolicySource field holds the source of the caching policy that governs the caching behavior for a specific request: CACHE POLICY SOURCE ROUTE : A cache policy can be applied at different levels of the URL map, and that allows for more granular control over caching.
- This information is only available for global external Application Load Balancers using custom error responses . string Required The errorBackendStatusDetails field holds the statusDetails of the final response served to the client.
- This information is only available for global external Application Load Balancers using custom error responses . string Required The errorService field holds the backend service that provided the custom error response.
- This information is only available for global external Application Load Balancers using custom error responses .

### Caching overview \_|\_ Cloud CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/caching](https://docs.cloud.google.com/cdn/docs/caching)
- Source ID: `site-docs-root`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- Cloud CDN doesn't allow the following headers to be included in the list of headers: Accept Accept-Encoding Authority , because this is controlled by configuration ( cdnPolicy.includeHost ) Authorization , typically per-user as in OAuth Bearer tokens CDN-Loop Connection Content-MD5 Content-Type Cookie Date Forwarded , often per-client or per-proxy From Host , because this is controlled by configuration ( cdnPolicy.includeHost ) If-Match , If-Modified-Since , or If-None-Match Origin Proxy-Authorization Range Referer (or Referrer ) User-Agent Want-Digest X-CSRFToken and X-CSRF-Token as used by Django and Ruby on Rails X-Forwarded-For , often per-client or per-proxy X-User-IP Any header starting with the following: Access-Control- , such as Access-Control-Request-Headers and Access-Control-Request-Method Sec-Fetch- Sec-GFE- Sec-Google- X-Amz- X-GFE- X-Goog- X-Google- Use custom variables with request headers Cache keys are helpful when you need to serve content differently based on each user's device and location.
- For Cloud CDN, you can use only the following variables when defining headers that are both custom request headers and cache key headers: device request type user agent family client region client region subdivision Cloud CDN limits the variables to help maintain cache performance.
- For origin (cache fill) requests that include the Authorization request header, Cloud CDN only caches responses that include the public , must-revalidate , or s-maxage cache control directives when the cache mode is set to USE ORIGIN HEADERS or CACHE ALL STATIC .
- Prevent caching To prevent private information from being cached in Cloud CDN caches, do the following: Make sure that Cloud CDN cache mode isn't set to the FORCE CACHE ALL mode, which unconditionally caches all successful responses.

