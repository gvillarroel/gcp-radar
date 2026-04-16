---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T14:23:30.352Z"
product_name: "Cloud CDN"
product_slug: "cloud-cdn"
feature_name: "Query parameter allowlisting for backend buckets"
feature_slug: "query-parameter-allowlisting-for-backend-buckets"
latest_feature_date: "2022-01-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/cdn/docs/best-practices"
  - "https://docs.cloud.google.com/cdn/docs/caching"
  - "https://docs.cloud.google.com/cdn/docs/using-cache-keys"
keywords:
  - "allowlisting"
  - "parameter"
  - "parameters"
  - "query"
  - "enables"
  - "backend"
  - "buckets"
---

# Query parameter allowlisting for backend buckets

Product: Cloud CDN
Coverage: MEDIUM

## Step 02 Summary

Cloud CDN enables allowlisting of query parameters for backend buckets to support cache busting; Cloud CDN allowslist query parameters on backend buckets to enable cache-busting behavior.

## Extended Definition

Cloud CDN enables allowlisting of query parameters for backend buckets to support cache busting; Cloud CDN allowslist query parameters on backend buckets to enable cache-busting behavior.

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
- Final score: 154
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- STRICT : Enables early data for idempotent methods ( GET , HEAD , OPTIONS , and TRACE ), which don't have other query parameters.
- PERMISSIVE : Enables early data for idempotent methods that can include query parameters.
- Early data requests that use nonidempotent HTTP methods or have query parameters are rejected with an HTTP 425 status code.
- For backend buckets, any query strings used for versioning must be specified in the configuration for the backend bucket.

### Caching overview \_|\_ Cloud CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/caching](https://docs.cloud.google.com/cdn/docs/caching)
- Source ID: `site-docs-reference-2`
- Final score: 147
- Re-rank relevance: N/A

Evidence snippets:
- Although Cloud Storage does not serve different content or route based on query parameters, you can choose to include parameters that allow you to cache-bust static content stored in Cloud Storage buckets.
- Because including query parameters in the cache key is opt-in only, Cloud CDN doesn't support excluding query parameters from a cache key to a backend bucket.
- You can use an include list with query string parameters in the cache key used for serving responses from a backend bucket.
- Including URL query parameters in cache keys for Cloud Storage buckets helps support cache busting .

### Customize cache keys \_|\_ Cloud CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/using-cache-keys](https://docs.cloud.google.com/cdn/docs/using-cache-keys)
- Source ID: `site-docs-reference-2`
- Final score: 141
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Use this command to set the query string parameter user to the include list of a backend service. gcloud compute backend-services update BACKEND SERVICE \ --cache-key-include-query-string \ --cache-key-query-string-whitelist user Use this command to set the query string parameter user to the exclude list of a backend service. gcloud compute backend-services update BACKEND SERVICE \ --cache-key-include-query-string \ --cache-key-query-string-blacklist user Use this command to set the query string parameter user to the include list of a backend bucket. gcloud compute backend-buckets update BACKEND BUCKET \ --cache-key-query-string-whitelist user API To specify an include list or an exclude list for a backend service, specify query string parameters in the cacheKeyPolicy section of cdnPolicy for the backendServices resource.
- Click Done . gcloud To specify an include list or an exclude list for a backend service, specify query string parameters by using the gcloud compute backend-services update command.
- API To specify an include list or an exclude list for a backend service, specify query string parameters in the cacheKeyPolicy section of cdnPolicy for the backendServices resource.
- PUT https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/backendBuckets/ BACKEND BUCKET Add the following snippet to the JSON request body: "cdnPolicy": { "cacheKeyPolicy": [ { "includeProtocol": false, "includeHost": false, "includeQueryString": false } ] } Update cache keys to add the protocol, host, and query string By default, backend services configured to use Cloud CDN include all components of the request URI in cache keys.

