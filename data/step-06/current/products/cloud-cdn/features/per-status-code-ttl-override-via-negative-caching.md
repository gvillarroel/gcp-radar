---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T14:23:30.365Z"
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
  - "https://docs.cloud.google.com/cdn/docs/best-practices"
keywords:
  - "negative"
  - "status"
  - "override"
  - "code"
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

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/cdn/docs/caching](https://docs.cloud.google.com/cdn/docs/caching)
- [https://docs.cloud.google.com/cdn/docs/using-negative-caching](https://docs.cloud.google.com/cdn/docs/using-negative-caching)
- [https://docs.cloud.google.com/cdn/docs/best-practices](https://docs.cloud.google.com/cdn/docs/best-practices)

## Supporting Pages

### Caching overview \_|\_ Cloud CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/caching](https://docs.cloud.google.com/cdn/docs/caching)
- Source ID: `site-docs-reference-2`
- Final score: 41
- Re-rank relevance: N/A

Evidence snippets:
- If negative caching is enabled and the status code matches one for which negative caching specifies a TTL, the response is eligible for caching, even without explicit freshness directives.
- Negative caching , if enabled, can still cause them to be cached for certain status codes, however.
- Support for byte range requests A response that satisfies the following criteria indicates that the origin server supports byte range requests: Status code: 200 OK or 206 Partial Content Header: Accept-Ranges: bytes Header: Content-Length , and for a 206 Partial Content response, a Content-Range value that indicates the complete length of the origin object.
- Feature GKE ingress through backend configuration GKE gateway using GCPHTTPFilter Basic Caching (Modes/TTLs) Cache Key Customization Negative Caching Serve While Stale Dynamic Compression Signed URLs & Cookies Request Coalescing Cacheable content Cloud CDN caches responses that meet all of the requirements in this section.

### Use negative caching \_|\_ Cloud CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/using-negative-caching](https://docs.cloud.google.com/cdn/docs/using-negative-caching)
- Source ID: `site-docs-reference-2`
- Final score: 37
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Cloud CDN applies the following default TTLs to these status codes: Status code Meaning TTL HTTP 300 Multiple choices 10 minutes HTTP 301 and 308 Permanent redirects 10 minutes HTTP 302 and 307 Temporary redirects Not cached by default HTTP 404 Not found 120 seconds HTTP 405 Method not found 60 seconds HTTP 410 Gone 120 seconds HTTP 451 Unavailable for legal reasons 120 seconds HTTP 501 Not implemented 60 seconds You can override these default values by using negative caching to set a cache TTL for the specified HTTP status code.
- For backend services, use the gcloud compute backend-services create or gcloud compute backend-services update command with the --negative-caching flag. gcloud compute backend-buckets (create update) BACKEND BUCKET NAME --negative-caching gcloud compute backend-services (create update) BACKEND SERVICE NAME --negative-caching To enable negative caching of only two specific error responses, for example, set responses with status code 404 to be cached for 60 seconds, and responses with status code 405 to be cached for 120 seconds. gcloud compute backend-services update BACKEND SERVICE NAME \ --negative-caching \ --cache-mode=CACHE ALL STATIC \ --default-ttl=86400 \ --negative-caching-policy='404=60,405=120' api For backend buckets, use the Method: backendBuckets.insert or Method: backendBuckets.update API call.
- Use one of the following API calls: POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/backendBuckets PUT https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/backendBuckets/ BACKEND BUCKET POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/backendServices PUT https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/backendServices/ BACKEND SERVICE Add the following snippet to the JSON request body: "cdnPolicy": { "negativeCaching": ON, "negativeCachingPolicy": [ { "code": STATUS CODE , "ttl": TTL SECONDS } ] } Negative caching must be enabled to configure the negativeCachingPolicy settings.
- For example, if your origin returns 404 Not Found with a Cache-Control: public,max-age=60 setting, the 404 status code is cached for 60 seconds, and the negative caching policy is ignored for that specific request.

### Content delivery best practices \_|\_ Cloud CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/best-practices](https://docs.cloud.google.com/cdn/docs/best-practices)
- Source ID: `site-docs-reference-2`
- Final score: 35
- Re-rank relevance: N/A

Evidence snippets:
- Early data requests that use nonidempotent HTTP methods or have query parameters are rejected with an HTTP 425 status code.
- Use negative caching Negative caching provides fine-grained control over caching for common errors or redirects.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
- For example, the following Cache-Control header makes the associated content publicly readable and cacheable with a cache expiration of 72 hours (259200 seconds): Cache-Control: public, max-age=259200 To maximize caching, follow the guidelines in the Caching overview .

