---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T14:23:30.342Z"
product_name: "Cloud CDN"
product_slug: "cloud-cdn"
feature_name: "Cloud CDN service extensions (pre-cache edge extensions)"
feature_slug: "cloud-cdn-service-extensions-pre-cache-edge-extensions"
latest_feature_date: "2025-11-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/cdn/docs/integration-with-service-extensions"
  - "https://docs.cloud.google.com/cdn/docs/caching"
  - "https://docs.cloud.google.com/cdn/docs/how-to"
keywords:
  - "allows"
  - "extensions"
  - "edge"
  - "code"
  - "custom"
  - "cache"
---

# Cloud CDN service extensions (pre-cache edge extensions)

Product: Cloud CDN
Coverage: MEDIUM

## Step 02 Summary

Cloud CDN allows custom code in the pre-cache request-processing stage on global external Application Load Balancers using Service Extension edge extensions; Cloud CDN enables custom code execution in the pre-cache request-processing path on global external Application Load Balancers through edge Service Extensions.

## Extended Definition

Cloud CDN allows custom code in the pre-cache request-processing stage on global external Application Load Balancers using Service Extension edge extensions; Cloud CDN enables custom code execution in the pre-cache request-processing path on global external Application Load Balancers through edge Service Extensions.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/cdn/docs/integration-with-service-extensions](https://docs.cloud.google.com/cdn/docs/integration-with-service-extensions)
- [https://docs.cloud.google.com/cdn/docs/caching](https://docs.cloud.google.com/cdn/docs/caching)
- [https://docs.cloud.google.com/cdn/docs/how-to](https://docs.cloud.google.com/cdn/docs/how-to)

## Supporting Pages

### "Use Service Extensions for edge compute \_|\_ Cloud CDN \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/cdn/docs/integration-with-service-extensions](https://docs.cloud.google.com/cdn/docs/integration-with-service-extensions)
- Source ID: `site-docs-reference-2`
- Final score: 169
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Common use cases Use Service Extensions plugins with global external Application Load Balancers in the following sample scenarios: Custom traffic steering Manipulate request headers to influence backend service selection.
- As the following diagram shows, you attach Service Extensions plugins to global external Application Load Balancer by using edge extensions and traffic extensions at different stages of the networking data path.
- Home Documentation Networking Cloud CDN Guides Send feedback Use Service Extensions for edge compute Stay organized with collections Save and categorize content based on your preferences.
- You can use Service Extensions to run your own WebAssembly (Wasm) code in a fully serverless, Google-managed compute environment.

### Caching overview \_|\_ Cloud CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/caching](https://docs.cloud.google.com/cdn/docs/caching)
- Source ID: `site-docs-reference-2`
- Final score: 139
- Re-rank relevance: N/A

Evidence snippets:
- Cloud CDN doesn't allow the following headers to be included in the list of headers: Accept Accept-Encoding Authority , because this is controlled by configuration ( cdnPolicy.includeHost ) Authorization , typically per-user as in OAuth Bearer tokens CDN-Loop Connection Content-MD5 Content-Type Cookie Date Forwarded , often per-client or per-proxy From Host , because this is controlled by configuration ( cdnPolicy.includeHost ) If-Match , If-Modified-Since , or If-None-Match Origin Proxy-Authorization Range Referer (or Referrer ) User-Agent Want-Digest X-CSRFToken and X-CSRF-Token as used by Django and Ruby on Rails X-Forwarded-For , often per-client or per-proxy X-User-IP Any header starting with the following: Access-Control- , such as Access-Control-Request-Headers and Access-Control-Request-Method Sec-Fetch- Sec-GFE- Sec-Google- X-Amz- X-GFE- X-Goog- X-Google- Use custom variables with request headers Cache keys are helpful when you need to serve content differently based on each user's device and location.
- URI part Customization Example URLs that have the same cache key Protocol Omit the protocol from the cache key. https://example.com/images/cat.jpg http://example.com/images/cat.jpg Host Omit the host from the cache key. https://example.com/images/cat.jpg https://example2.com/images/cat.jpg Query string Omit the query string from the cache key.
- Feature GKE ingress through backend configuration GKE gateway using GCPHTTPFilter Basic Caching (Modes/TTLs) Cache Key Customization Negative Caching Serve While Stale Dynamic Compression Signed URLs & Cookies Request Coalescing Cacheable content Cloud CDN caches responses that meet all of the requirements in this section.
- For Cloud CDN, you can use only the following variables when defining headers that are both custom request headers and cache key headers: device request type user agent family client region client region subdivision Cloud CDN limits the variables to help maintain cache performance.

### Cloud CDN overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/how-to](https://docs.cloud.google.com/cdn/docs/how-to)
- Source ID: `site-docs-reference`
- Final score: 119
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Integration with Service Extensions Cloud CDN lets you add custom code to the request processing path of global external Application Load Balancers by using Service Extensions plugins.
- These plugins help you implement customizations in the request path pre-cache and influence how content is cached within Cloud CDN.
- For more information, see Use Service Extensions for edge compute .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

