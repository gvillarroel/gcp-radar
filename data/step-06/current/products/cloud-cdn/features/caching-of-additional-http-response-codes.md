---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:27:19.892Z"
product_name: "Cloud CDN"
product_slug: "cloud-cdn"
feature_name: "Caching of additional HTTP response codes"
feature_slug: "caching-of-additional-http-response-codes"
latest_feature_date: "2020-10-26"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/cdn/docs/caching"
  - "https://docs.cloud.google.com/cdn/docs/using-negative-caching"
  - "https://docs.cloud.google.com/cdn/docs/release-notes"
keywords:
  - "caching"
  - "of"
  - "additional"
  - "http"
  - "response"
  - "codes"
  - "cdn"
  - "can"
---

# Caching of additional HTTP response codes

Product: Cloud CDN
Coverage: LOW

## Step 02 Summary

Cloud CDN can cache a broader set of response codes, including common errors such as 404, 301, and 302.

## Extended Definition

Cloud CDN can cache a broader set of response codes, including common errors such as 404, 301, and 302.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/cdn/docs/caching](https://docs.cloud.google.com/cdn/docs/caching)
- [https://docs.cloud.google.com/cdn/docs/using-negative-caching](https://docs.cloud.google.com/cdn/docs/using-negative-caching)
- [https://docs.cloud.google.com/cdn/docs/release-notes](https://docs.cloud.google.com/cdn/docs/release-notes)

## Supporting Pages

### Caching overview \_|\_ Cloud CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/caching](https://docs.cloud.google.com/cdn/docs/caching)
- Source ID: `site-docs-root`
- Final score: 206
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- When you set the cache mode to CACHE ALL STATIC , and a response does not have explicit caching directives in Cache-Control or Expires headers, Cloud CDN automatically caches that response for the following: Web Assets, including CSS ( text/css ), JavaScript ( application/javascript ) and all web fonts, including WOFF2 ( font/woff2 ) Images, including JPEG ( image/jpg ) and PNG ( image/png ) Videos, including H.264, H.265, and MP4 ( video/mp4 ) Audio files, including MP3 ( audio/mpeg ) and MP4 ( audio/mp4 ) Formatted documents, including PDF ( application/pdf ) Important: The static content rules described here apply only to successful responses (for example, HTTP 200 OK responses).
- Category MIME types Web assets text/css text/ecmascript text/javascript application/javascript Fonts Any Content-Type matching font/ Images Any Content-Type matching image/ Videos Any Content-Type matching video/ Audio Any Content-Type matching audio/ Formatted document types application/pdf and application/postscript Cloud CDN inspects the Content-Type HTTP response header, which reflects the MIME type of the content being served.
- You can configure cache policies in URL maps when: a single backend serves different types of content different paths require different caching behavior you want to enable caching for specific routes only For details on how to configure cache policies in URL map, see Configure a Cloud CDN cache policy .
- Cloud CDN may periodically change the exact set of conditions under which it caches content, so if you want to explicitly prevent Cloud CDN from caching your content, follow the guidelines in the standard ( RFC 7234 ) to determine how to specify a guaranteed-uncacheable response.

### Use negative caching \_|\_ Cloud CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/using-negative-caching](https://docs.cloud.google.com/cdn/docs/using-negative-caching)
- Source ID: `site-docs-root-2`
- Final score: 196
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Cloud CDN applies the following default TTLs to these status codes: Status code Meaning TTL HTTP 300 Multiple choices 10 minutes HTTP 301 and 308 Permanent redirects 10 minutes HTTP 302 and 307 Temporary redirects Not cached by default HTTP 404 Not found 120 seconds HTTP 405 Method not found 60 seconds HTTP 410 Gone 120 seconds HTTP 451 Unavailable for legal reasons 120 seconds HTTP 501 Not implemented 60 seconds You can override these default values by using negative caching to set a cache TTL for the specified HTTP status code.
- For STATUS CODE , you can specify the following HTTP status codes: 300 , 301 , 302 , 307 , 308 404 , 405 , 410 , 421 , 451 501 For each status code, you can specify a number of seconds to cache responses.
- Use one of the following API calls: POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/backendBuckets PUT https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/backendBuckets/ BACKEND BUCKET POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/backendServices PUT https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/backendServices/ BACKEND SERVICE Add the following snippet to the JSON request body: "cdnPolicy": { "negativeCaching": OFF } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Use one of the following API calls: POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/backendBuckets PUT https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/backendBuckets/ BACKEND BUCKET POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/backendServices PUT https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/backendServices/ BACKEND SERVICE Add the following snippet to the JSON request body: "cdnPolicy": { "negativeCaching": ON, "negativeCachingPolicy": [ { "code": STATUS CODE , "ttl": TTL SECONDS } ] } Negative caching must be enabled to configure the negativeCachingPolicy settings.

### Cloud CDN release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/release-notes](https://docs.cloud.google.com/cdn/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 186
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- October 27, 2020 Change Added a new tutorial: Setting up an HTTP-to-HTTPS redirect October 26, 2020 Feature Cloud CDN can now cache more response codes, including common error codes such as 404 (Not Found), 301 (Permanent Redirect), 302 (Temporary Redirect), and many others .
- March 30, 2026 Feature For global external Application Load Balancers , you can configure Cloud CDN cache policies at various levels of a URL map, providing more granular control over caching.
- You can now use Cloud CDN's distributed edge caching infrastructure to connect to an origin hosted outside of GCP, such as on-premises or in another cloud.
- Feature Cloud CDN now supports configuring negative caching for HTTP 302 (Found) and HTTP 307 (Temporary Redirect) status codes.

