---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T14:23:30.351Z"
product_name: "Cloud CDN"
product_slug: "cloud-cdn"
feature_name: "Custom named cookies and headers in cache key"
feature_slug: "custom-named-cookies-and-headers-in-cache-key"
latest_feature_date: "2022-01-28"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/cdn/docs/using-cache-keys"
  - "https://docs.cloud.google.com/cdn/docs/caching"
  - "https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring"
keywords:
  - "named"
  - "cookies"
  - "headers"
  - "custom"
  - "supports"
  - "cache"
---

# Custom named cookies and headers in cache key

Product: Cloud CDN
Coverage: LOW

## Step 02 Summary

Cloud CDN supports including custom-named cookies and headers in cache key calculation for testing and canary-style traffic control; Cloud CDN supports using custom-named cookies and headers in the cache key for A/B testing and similar traffic scenarios.

## Extended Definition

Cloud CDN supports including custom-named cookies and headers in cache key calculation for testing and canary-style traffic control; Cloud CDN supports using custom-named cookies and headers in the cache key for A/B testing and similar traffic scenarios.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/cdn/docs/using-cache-keys](https://docs.cloud.google.com/cdn/docs/using-cache-keys)
- [https://docs.cloud.google.com/cdn/docs/caching](https://docs.cloud.google.com/cdn/docs/caching)
- [https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring](https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring)

## Supporting Pages

### Customize cache keys \_|\_ Cloud CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/using-cache-keys](https://docs.cloud.google.com/cdn/docs/using-cache-keys)
- Source ID: `site-docs-reference-2`
- Final score: 43
- Re-rank relevance: N/A

Evidence snippets:
- Click Done . gcloud Use the gcloud compute backend-services update command with the cache-key-include-named-cookie option. gcloud compute backend-services update BACKEND SERVICE \ --cache-key-include-named-cookie=[ NAMED COOKIES ,...] Replace NAMED COOKIES with a comma-separated list of named cookies.
- To specify an include list, add the following snippet to the JSON request body: "cdnPolicy": { "cacheKeyPolicy": [ { "includeNamedCookies": [ NAMED COOKIES ] } ] } Replace NAMED COOKIES with a comma-separated list of query string parameters.
- These instructions set Cloud CDN cache keys to use HTTP headers, which can include allowed custom variables .
- Update cache keys to use named cookies Note: Make sure that you're using gcloud CLI version 369.0.0 or later.

### "Logs and metrics for backend services \_|\_ Cloud CDN \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring](https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring)
- Source ID: `site-docs-root-2`
- Final score: 39
- Re-rank relevance: N/A

Evidence snippets:
- This information is only available for global external Application Load Balancers using custom error responses . string Optional The cachePolicySource field holds the source of the caching policy that governs the caching behavior for a specific request: CACHE POLICY SOURCE ROUTE : A cache policy can be applied at different levels of the URL map, and that allows for more granular control over caching.
- Multiple queries are sent to the same backend for different chunks of data to support a single client request. proxy continent Continent of the HTTP(S) GFE that terminated the HTTP(S) connection—for example, America , Europe , Asia protocol Protocol used by the client, one of HTTP/1.0 , HTTP/1.1 , HTTP/2.0 , QUIC/HTTP/2.0 , UNKNOWN . response code The HTTP status code of the request. response code class The HTTP status code class of the request: 200 , 300 , 400 , 500 or 0 for none. cache result Cache result for serving HTTP request by proxy: HIT , MISS , DISABLED , PARTIAL HIT (for a request served partially from cache and partially from backend), or UNKNOWN . client country Country of the client that issued the HTTP request—for example, United States or Germany . load balancing scheme The load balancing scheme used.
- To finish editing the load balancer, click Update . gcloud Create a backend service and enable logging by using the gcloud compute backend-services create command . gcloud compute backend-services create BACKEND SERVICE \ --global \ --enable-logging \ --logging-sample-rate= VALUE \ --load-balancing-scheme=EXTERNAL MANAGED \ --logging-optional= LOGGING OPTIONAL MODE \ --logging-optional-fields= OPTIONAL FIELDS The gcloud compute backend-services create command supports the following fields: --global indicates that the backend service is global.
- Use the --logging-optional-fields parameter to specify which of the following elements of the ORCA load report must be logged: orca load report.cpu utilization orca load report.mem utilization orca load report.request cost orca load report.utilization orca load report.rps fractional orca load report.eps orca load report.named metrics orca load report.application utilization You can also set --logging-optional-fields to orca load report to specify that all elements must be logged.

### Caching overview \_|\_ Cloud CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/caching](https://docs.cloud.google.com/cdn/docs/caching)
- Source ID: `site-docs-reference-2`
- Final score: 39
- Re-rank relevance: N/A

Evidence snippets:
- Cloud CDN doesn't allow the following headers to be included in the list of headers: Accept Accept-Encoding Authority , because this is controlled by configuration ( cdnPolicy.includeHost ) Authorization , typically per-user as in OAuth Bearer tokens CDN-Loop Connection Content-MD5 Content-Type Cookie Date Forwarded , often per-client or per-proxy From Host , because this is controlled by configuration ( cdnPolicy.includeHost ) If-Match , If-Modified-Since , or If-None-Match Origin Proxy-Authorization Range Referer (or Referrer ) User-Agent Want-Digest X-CSRFToken and X-CSRF-Token as used by Django and Ruby on Rails X-Forwarded-For , often per-client or per-proxy X-User-IP Any header starting with the following: Access-Control- , such as Access-Control-Request-Headers and Access-Control-Request-Method Sec-Fetch- Sec-GFE- Sec-Google- X-Amz- X-GFE- X-Goog- X-Google- Use custom variables with request headers Cache keys are helpful when you need to serve content differently based on each user's device and location.
- Feature GKE ingress through backend configuration GKE gateway using GCPHTTPFilter Basic Caching (Modes/TTLs) Cache Key Customization Negative Caching Serve While Stale Dynamic Compression Signed URLs & Cookies Request Coalescing Cacheable content Cloud CDN caches responses that meet all of the requirements in this section.
- For Cloud CDN, you can use only the following variables when defining headers that are both custom request headers and cache key headers: device request type user agent family client region client region subdivision Cloud CDN limits the variables to help maintain cache performance.
- For example, if you could specify X-Lat-Long:{client city lat long} as a custom request header and then add X-Lat-Long to your set of cache key headers, Cloud CDN would attempt to cache one copy of the response for each value of client city lat long .

