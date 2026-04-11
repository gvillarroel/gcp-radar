---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:27:19.870Z"
product_name: "Cloud CDN"
product_slug: "cloud-cdn"
feature_name: "Query parameter allowlisting for backend buckets"
feature_slug: "query-parameter-allowlisting-for-backend-buckets"
latest_feature_date: "2022-01-28"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring"
  - "https://docs.cloud.google.com/cdn/docs/best-practices"
  - "https://docs.cloud.google.com/cdn/docs/caching"
keywords:
  - "query"
  - "parameter"
  - "allowlisting"
  - "for"
  - "backend"
  - "buckets"
  - "cdn"
  - "enables"
---

# Query parameter allowlisting for backend buckets

Product: Cloud CDN
Coverage: LOW

## Step 02 Summary

Cloud CDN enables allowlisting of query parameters for backend buckets to support cache busting; Cloud CDN allowslist query parameters on backend buckets to enable cache-busting behavior.

## Extended Definition

Cloud CDN enables allowlisting of query parameters for backend buckets to support cache busting; Cloud CDN allowslist query parameters on backend buckets to enable cache-busting behavior.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring](https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring)
- [https://docs.cloud.google.com/cdn/docs/best-practices](https://docs.cloud.google.com/cdn/docs/best-practices)
- [https://docs.cloud.google.com/cdn/docs/caching](https://docs.cloud.google.com/cdn/docs/caching)

## Supporting Pages

### "Logs and metrics for backend services \_|\_ Cloud CDN \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring](https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring)
- Source ID: `site-docs-root-2`
- Final score: 184
- Re-rank relevance: N/A

Evidence snippets:
- Use this field for backend services used with global external Application Load Balancers. --enable-logging enables logging for that backend service. --logging-sample-rate lets you specify a value from 0.0 through 1.0 , where 0.0 means that no requests are logged and 1.0 means that 100% of the requests are logged.
- Use this field for backend services used with global external Application Load Balancers. --enable-logging enables logging for that backend service. --logging-sample-rate lets you specify a value from 0.0 through 1.0 , where 0.0 means that no requests are logged and 1.0 means that 100% of the requests are logged.
- Home Documentation Networking Cloud CDN Guides Send feedback Logs and metrics for backend services Stay organized with collections Save and categorize content based on your preferences.
- Refer to the corresponding Cloud Logging log entry for the request initiated by Cloud CDN for the detailed backend status.

### Content delivery best practices \_|\_ Cloud CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/best-practices](https://docs.cloud.google.com/cdn/docs/best-practices)
- Source ID: `site-docs-root`
- Final score: 158
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- An external Application Load Balancer can deliver a mix of static and dynamically created content to users through one global IP address from the following types of backends: Instance groups Zonal network endpoint groups (NEGs) Serverless NEGs : One or more App Engine , Cloud Run , or Cloud Run functions services Internet NEGs for external backends Buckets in Cloud Storage Because of the seamless integration with Google Cloud, you have several options for deploying Cloud CDN and managing content.
- STRICT : Enables early data for idempotent methods ( GET , HEAD , OPTIONS , and TRACE ), which don't have other query parameters.
- For backend buckets, any query strings used for versioning must be specified in the configuration for the backend bucket.
- PERMISSIVE : Enables early data for idempotent methods that can include query parameters.

### Caching overview \_|\_ Cloud CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/caching](https://docs.cloud.google.com/cdn/docs/caching)
- Source ID: `site-docs-root`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- Request type Default behavior Configurable Benefits of collapsing Chunk requests Enabled No Can significantly reduce origin bandwidth Item requests Enabled Yes Can reduce origin request volume To disable item request collapsing using the Google Cloud CLI for a backend bucket that references a Cloud Storage bucket: Note: Google Cloud CLI support for the --request-coalescing flag was introduced in Google Cloud CLI version 330.0.0 . gcloud Use the gcloud compute backend-services or backend-buckets command: gcloud compute backend-services update BACKEND SERVICE NAME \ --no-request-coalescing To enable item request collapsing on a backend bucket using the Google Cloud CLI: gcloud Use the gcloud compute backend-buckets command: gcloud compute backend-buckets update BACKEND BUCKET NAME \ --request-coalescing To enable item request collapsing using the Google Cloud CLI for a backend service, including VM groups and external backends: gcloud Use the gcloud compute backend-services command: gcloud compute backend-services update BACKEND SERVICE NAME \ --request-coalescing Requests initiated by Cloud CDN When your origin server supports byte range requests , Cloud CDN can send multiple requests to your origin server in reaction to a single client request.
- For example: PATCH https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/backendBuckets Add the following snippet to the JSON request body: "cdnPolicy": { "bypassCacheOnRequestHeaders": [ { "headerName": string } ] } Disable cache bypass gcloud For backend buckets, use the gcloud compute backend-buckets create or gcloud compute backend-buckets update command with the --no-bypass-cache-on-request-headers flag.
- Because including query parameters in the cache key is opt-in only, Cloud CDN doesn't support excluding query parameters from a cache key to a backend bucket.
- You can use an include list with query string parameters in the cache key used for serving responses from a backend bucket.

