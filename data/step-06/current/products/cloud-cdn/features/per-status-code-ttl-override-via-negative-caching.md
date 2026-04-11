---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:27:19.893Z"
product_name: "Cloud CDN"
product_slug: "cloud-cdn"
feature_name: "Per-status-code TTL override via negative caching"
feature_slug: "per-status-code-ttl-override-via-negative-caching"
latest_feature_date: "2020-10-26"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/cdn/docs/caching"
  - "https://docs.cloud.google.com/cdn/docs/using-negative-caching"
  - "https://docs.cloud.google.com/cdn/docs/release-notes"
keywords:
  - "per"
  - "status"
  - "code"
  - "ttl"
  - "override"
  - "via"
  - "negative"
  - "caching"
---

# Per-status-code TTL override via negative caching

Product: Cloud CDN
Coverage: LOW

## Step 02 Summary

Cloud CDN supports configuring TTL overrides on a per-status-code basis through negative caching.

## Extended Definition

Cloud CDN supports configuring TTL overrides on a per-status-code basis through negative caching.

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
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- If negative caching is enabled and the status code matches one for which negative caching specifies a TTL, the response is eligible for caching, even without explicit freshness directives.
- Negative caching , if enabled, can still cause them to be cached for certain status codes, however.
- Support for byte range requests A response that satisfies the following criteria indicates that the origin server supports byte range requests: Status code: 200 OK or 206 Partial Content Header: Accept-Ranges: bytes Header: Content-Length , and for a 206 Partial Content response, a Content-Range value that indicates the complete length of the origin object.
- Cloud CDN may periodically change the exact set of conditions under which it caches content, so if you want to explicitly prevent Cloud CDN from caching your content, follow the guidelines in the standard ( RFC 7234 ) to determine how to specify a guaranteed-uncacheable response.

### Use negative caching \_|\_ Cloud CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/using-negative-caching](https://docs.cloud.google.com/cdn/docs/using-negative-caching)
- Source ID: `site-docs-root-2`
- Final score: 174
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Cloud CDN applies the following default TTLs to these status codes: Status code Meaning TTL HTTP 300 Multiple choices 10 minutes HTTP 301 and 308 Permanent redirects 10 minutes HTTP 302 and 307 Temporary redirects Not cached by default HTTP 404 Not found 120 seconds HTTP 405 Method not found 60 seconds HTTP 410 Gone 120 seconds HTTP 451 Unavailable for legal reasons 120 seconds HTTP 501 Not implemented 60 seconds You can override these default values by using negative caching to set a cache TTL for the specified HTTP status code.
- For backend services, use the gcloud compute backend-services create or gcloud compute backend-services update command with the --negative-caching flag. gcloud compute backend-buckets (create update) BACKEND BUCKET NAME --negative-caching gcloud compute backend-services (create update) BACKEND SERVICE NAME --negative-caching To enable negative caching of only two specific error responses, for example, set responses with status code 404 to be cached for 60 seconds, and responses with status code 405 to be cached for 120 seconds. gcloud compute backend-services update BACKEND SERVICE NAME \ --negative-caching \ --cache-mode=CACHE ALL STATIC \ --default-ttl=86400 \ --negative-caching-policy='404=60,405=120' api For backend buckets, use the Method: backendBuckets.insert or Method: backendBuckets.update API call.
- Use one of the following API calls: POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/backendBuckets PUT https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/backendBuckets/ BACKEND BUCKET POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/backendServices PUT https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/backendServices/ BACKEND SERVICE Add the following snippet to the JSON request body: "cdnPolicy": { "negativeCaching": ON, "negativeCachingPolicy": [ { "code": STATUS CODE , "ttl": TTL SECONDS } ] } Negative caching must be enabled to configure the negativeCachingPolicy settings.
- For example, if your origin returns 404 Not Found with no caching headers, the response is cached for the TTL specified in cdnPolicy.negativeCachingPolicy for the 404 status code .

### Cloud CDN release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/release-notes](https://docs.cloud.google.com/cdn/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- You can also set (and override) per-status code TTLs by configuring negative caching as of gcloud SDK 316.0.0 .
- Feature Cloud CDN now supports configuring negative caching for HTTP 302 (Found) and HTTP 307 (Temporary Redirect) status codes.
- To learn how to enable negative caching for these status codes, visit the documentation .
- TTL overrides support fine-tuning how long Cloud CDN caches your responses, and custom response headers introduce a new {cdn cache status} variable that is populated with the cache status response.

