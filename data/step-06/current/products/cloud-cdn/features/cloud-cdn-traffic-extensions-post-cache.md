---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T14:23:30.342Z"
product_name: "Cloud CDN"
product_slug: "cloud-cdn"
feature_name: "Cloud CDN traffic extensions (post-cache)"
feature_slug: "cloud-cdn-traffic-extensions-post-cache"
latest_feature_date: "2025-11-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/cdn/docs/integration-with-service-extensions"
  - "https://docs.cloud.google.com/cdn/docs/caching"
  - "https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring"
keywords:
  - "post"
  - "extensions"
  - "enables"
  - "code"
  - "traffic"
  - "custom"
  - "cache"
---

# Cloud CDN traffic extensions (post-cache)

Product: Cloud CDN
Coverage: MEDIUM

## Step 02 Summary

Cloud CDN enables custom code execution in the post-cache request-processing path on global external Application Load Balancers through traffic extensions.

## Extended Definition

Cloud CDN enables custom code execution in the post-cache request-processing path on global external Application Load Balancers through traffic extensions.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/cdn/docs/integration-with-service-extensions](https://docs.cloud.google.com/cdn/docs/integration-with-service-extensions)
- [https://docs.cloud.google.com/cdn/docs/caching](https://docs.cloud.google.com/cdn/docs/caching)
- [https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring](https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring)

## Supporting Pages

### "Use Service Extensions for edge compute \_|\_ Cloud CDN \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/cdn/docs/integration-with-service-extensions](https://docs.cloud.google.com/cdn/docs/integration-with-service-extensions)
- Source ID: `site-docs-reference-2`
- Final score: 133
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Common use cases Use Service Extensions plugins with global external Application Load Balancers in the following sample scenarios: Custom traffic steering Manipulate request headers to influence backend service selection.
- As the following diagram shows, you attach Service Extensions plugins to global external Application Load Balancer by using edge extensions and traffic extensions at different stages of the networking data path.
- You can use Service Extensions to run your own WebAssembly (Wasm) code in a fully serverless, Google-managed compute environment.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]

### Caching overview \_|\_ Cloud CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/caching](https://docs.cloud.google.com/cdn/docs/caching)
- Source ID: `site-docs-reference-2`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- Cloud CDN doesn't allow the following headers to be included in the list of headers: Accept Accept-Encoding Authority , because this is controlled by configuration ( cdnPolicy.includeHost ) Authorization , typically per-user as in OAuth Bearer tokens CDN-Loop Connection Content-MD5 Content-Type Cookie Date Forwarded , often per-client or per-proxy From Host , because this is controlled by configuration ( cdnPolicy.includeHost ) If-Match , If-Modified-Since , or If-None-Match Origin Proxy-Authorization Range Referer (or Referrer ) User-Agent Want-Digest X-CSRFToken and X-CSRF-Token as used by Django and Ruby on Rails X-Forwarded-For , often per-client or per-proxy X-User-IP Any header starting with the following: Access-Control- , such as Access-Control-Request-Headers and Access-Control-Request-Method Sec-Fetch- Sec-GFE- Sec-Google- X-Amz- X-GFE- X-Goog- X-Google- Use custom variables with request headers Cache keys are helpful when you need to serve content differently based on each user's device and location.
- Use one of the following API calls: POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/backendBuckets PUT https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/backendBuckets/ BACKEND BUCKET POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/backendServices PUT https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/backendServices/ BACKEND SERVICE Add the following snippet to the JSON request body: "cdnPolicy": { "fields": "bypassCacheOnRequestHeaders" } What's next To understand how cache modes make it easier to cache content, see Using cache modes .
- URI part Customization Example URLs that have the same cache key Protocol Omit the protocol from the cache key. https://example.com/images/cat.jpg http://example.com/images/cat.jpg Host Omit the host from the cache key. https://example.com/images/cat.jpg https://example2.com/images/cat.jpg Query string Omit the query string from the cache key.
- Feature GKE ingress through backend configuration GKE gateway using GCPHTTPFilter Basic Caching (Modes/TTLs) Cache Key Customization Negative Caching Serve While Stale Dynamic Compression Signed URLs & Cookies Request Coalescing Cacheable content Cloud CDN caches responses that meet all of the requirements in this section.

### "Logs and metrics for backend services \_|\_ Cloud CDN \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring](https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring)
- Source ID: `site-docs-root-2`
- Final score: 127
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Multiple queries are sent to the same backend for different chunks of data to support a single client request. proxy continent Continent of the HTTP(S) GFE that terminated the HTTP(S) connection—for example, America , Europe , Asia protocol Protocol used by the client, one of HTTP/1.0 , HTTP/1.1 , HTTP/2.0 , QUIC/HTTP/2.0 , UNKNOWN . response code The HTTP status code of the request. response code class The HTTP status code class of the request: 200 , 300 , 400 , 500 or 0 for none. cache result Cache result for serving HTTP request by proxy: HIT , MISS , DISABLED , PARTIAL HIT (for a request served partially from cache and partially from backend), or UNKNOWN . client country Country of the client that issued the HTTP request—for example, United States or Germany . load balancing scheme The load balancing scheme used.
- This information is only available for global external Application Load Balancers using custom error responses . string Optional The cachePolicySource field holds the source of the caching policy that governs the caching behavior for a specific request: CACHE POLICY SOURCE ROUTE : A cache policy can be applied at different levels of the URL map, and that allows for more granular control over caching.
- The JSON object contains the following fields: statusDetails backendTargetProjectNumber cachePolicySource overrideResponseCode errorService errorBackendStatusDetails authzPolicyInfo loadBalancingScheme tls orca load report string Required The statusDetails field holds a string that explains why the load balancer returned the HTTP status code that it did.
- CACHE POLICY SOURCE BACKEND : The caching behavior determined by the Cloud CDN configuration on the backend service or bucket. integer Required The overrideResponseCode holds the override response code applied to the response sent to the client.

