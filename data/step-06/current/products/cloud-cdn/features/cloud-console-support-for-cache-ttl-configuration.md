---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T14:23:30.362Z"
product_name: "Cloud CDN"
product_slug: "cloud-cdn"
feature_name: "Cloud Console support for cache TTL configuration"
feature_slug: "cloud-console-support-for-cache-ttl-configuration"
latest_feature_date: "2020-11-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/cdn/docs/caching"
  - "https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring"
  - "https://docs.cloud.google.com/cdn/docs/using-cache-keys"
keywords:
  - "ttls"
  - "configuration"
  - "configuring"
  - "console"
  - "supports"
  - "cache"
---

# Cloud Console support for cache TTL configuration

Product: Cloud CDN
Coverage: MEDIUM

## Step 02 Summary

Cloud Console now supports configuring cache TTLs for Cloud CDN.

## Extended Definition

Cloud Console now supports configuring cache TTLs for Cloud CDN.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/cdn/docs/caching](https://docs.cloud.google.com/cdn/docs/caching)
- [https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring](https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring)
- [https://docs.cloud.google.com/cdn/docs/using-cache-keys](https://docs.cloud.google.com/cdn/docs/using-cache-keys)

## Supporting Pages

### Caching overview \_|\_ Cloud CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/caching](https://docs.cloud.google.com/cdn/docs/caching)
- Source ID: `site-docs-reference-2`
- Final score: 131
- Re-rank relevance: N/A

Evidence snippets:
- Feature GKE ingress through backend configuration GKE gateway using GCPHTTPFilter Basic Caching (Modes/TTLs) Cache Key Customization Negative Caching Serve While Stale Dynamic Compression Signed URLs & Cookies Request Coalescing Cacheable content Cloud CDN caches responses that meet all of the requirements in this section.
- Cloud CDN doesn't allow the following headers to be included in the list of headers: Accept Accept-Encoding Authority , because this is controlled by configuration ( cdnPolicy.includeHost ) Authorization , typically per-user as in OAuth Bearer tokens CDN-Loop Connection Content-MD5 Content-Type Cookie Date Forwarded , often per-client or per-proxy From Host , because this is controlled by configuration ( cdnPolicy.includeHost ) If-Match , If-Modified-Since , or If-None-Match Origin Proxy-Authorization Range Referer (or Referrer ) User-Agent Want-Digest X-CSRFToken and X-CSRF-Token as used by Django and Ruby on Rails X-Forwarded-For , often per-client or per-proxy X-User-IP Any header starting with the following: Access-Control- , such as Access-Control-Request-Headers and Access-Control-Request-Method Sec-Fetch- Sec-GFE- Sec-Google- X-Amz- X-GFE- X-Goog- X-Google- Use custom variables with request headers Cache keys are helpful when you need to serve content differently based on each user's device and location.
- Before you set the cache mode to FORCE CACHE ALL , consider the following behaviors: For signed URLs or signed cookies , FORCE CACHE ALL overrides the maximum age specified through the Cache entry maximum age setting in the Google Cloud console or the gcloud --signed-url-cache-max-age option.
- If the response that indicated that your origin server supported byte range requests for a particular cache key has expired, Cloud CDN initiates a validation request to confirm that the content hasn't changed and that your origin server still supports range requests for the content.

### Customize cache keys \_|\_ Cloud CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/using-cache-keys](https://docs.cloud.google.com/cdn/docs/using-cache-keys)
- Source ID: `site-docs-reference-2`
- Final score: 108
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Any unspecified flags are left unchanged. gcloud compute backend-services update BACKEND SERVICE \ --cache-key-include-protocol \ --cache-key-include-host \ --cache-key-include-query-string API To add one or more components to the cache key, specify configuration options in the cacheKeyPolicy section of cdnPolicy for the backendServices resource.
- Changing cache key configuration might result in a sudden drop in the cache hit ratio if new requests start using cache keys that are different from old cache key entries.
- API To exclude one or more components from the cache key, specify configuration options in the cacheKeyPolicy section of cdnPolicy for the backendServices resource .
- Use this command to set the query string parameter user to the include list of a backend service. gcloud compute backend-services update BACKEND SERVICE \ --cache-key-include-query-string \ --cache-key-query-string-whitelist user Use this command to set the query string parameter user to the exclude list of a backend service. gcloud compute backend-services update BACKEND SERVICE \ --cache-key-include-query-string \ --cache-key-query-string-blacklist user Use this command to set the query string parameter user to the include list of a backend bucket. gcloud compute backend-buckets update BACKEND BUCKET \ --cache-key-query-string-whitelist user API To specify an include list or an exclude list for a backend service, specify query string parameters in the cacheKeyPolicy section of cdnPolicy for the backendServices resource.

### "Logs and metrics for backend services \_|\_ Cloud CDN \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring](https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring)
- Source ID: `site-docs-root-2`
- Final score: 105
- Re-rank relevance: N/A

Evidence snippets:
- CACHE POLICY SOURCE BACKEND : The caching behavior determined by the Cloud CDN configuration on the backend service or bucket. integer Required The overrideResponseCode holds the override response code applied to the response sent to the client.
- Multiple queries are sent to the same backend for different chunks of data to support a single client request. proxy continent Continent of the HTTP(S) GFE that terminated the HTTP(S) connection—for example, America , Europe , Asia protocol Protocol used by the client, one of HTTP/1.0 , HTTP/1.1 , HTTP/2.0 , QUIC/HTTP/2.0 , UNKNOWN . response code The HTTP status code of the request. response code class The HTTP status code class of the request: 200 , 300 , 400 , 500 or 0 for none. cache result Cache result for serving HTTP request by proxy: HIT , MISS , DISABLED , PARTIAL HIT (for a request served partially from cache and partially from backend), or UNKNOWN . client country Country of the client that issued the HTTP request—for example, United States or Germany . load balancing scheme The load balancing scheme used.
- To finish editing the load balancer, click Update . gcloud Create a backend service and enable logging by using the gcloud compute backend-services create command . gcloud compute backend-services create BACKEND SERVICE \ --global \ --enable-logging \ --logging-sample-rate= VALUE \ --load-balancing-scheme=EXTERNAL MANAGED \ --logging-optional= LOGGING OPTIONAL MODE \ --logging-optional-fields= OPTIONAL FIELDS The gcloud compute backend-services create command supports the following fields: --global indicates that the backend service is global.
- This information is only available for global external Application Load Balancers using custom error responses . string Optional The cachePolicySource field holds the source of the caching policy that governs the caching behavior for a specific request: CACHE POLICY SOURCE ROUTE : A cache policy can be applied at different levels of the URL map, and that allows for more granular control over caching.

