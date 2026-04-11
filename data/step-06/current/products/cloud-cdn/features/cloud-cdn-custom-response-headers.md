---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:27:19.904Z"
product_name: "Cloud CDN"
product_slug: "cloud-cdn"
feature_name: "Cloud CDN custom response headers"
feature_slug: "cloud-cdn-custom-response-headers"
latest_feature_date: "2020-09-14"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/cdn/docs/release-notes"
  - "https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-third-party-storage"
  - "https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring"
keywords:
  - "cdn"
  - "custom"
  - "response"
  - "headers"
  - "supports"
  - "configuring"
  - "on"
  - "backend"
---

# Cloud CDN custom response headers

Product: Cloud CDN
Coverage: LOW

## Step 02 Summary

Cloud CDN supports configuring custom response headers on backend buckets and backend services through External HTTP(S) Load Balancing; Cloud CDN expands custom response header support on backend buckets and services and populates a new cdn_cache_status variable in headers.

## Extended Definition

Cloud CDN supports configuring custom response headers on backend buckets and backend services through External HTTP(S) Load Balancing; Cloud CDN expands custom response header support on backend buckets and services and populates a new cdn_cache_status variable in headers.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/cdn/docs/release-notes](https://docs.cloud.google.com/cdn/docs/release-notes)
- [https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-third-party-storage](https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-third-party-storage)
- [https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring](https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring)

## Supporting Pages

### Cloud CDN release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/release-notes](https://docs.cloud.google.com/cdn/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 204
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- November 04, 2020 Announcement Added a new tutorial for configuring Cloud CDN with a serverless app: Setting up Cloud CDN with Cloud Run, Cloud Functions, or App Engine November 02, 2020 Feature You can now configure cache modes , cache TTLs and set custom response headers in the Cloud Console, in addition to the existing gcloud and REST API support.
- December 08, 2020 Feature The Google Terraform provider now supports the latest Cloud CDN features, including cache modes , TTL overrides, and custom response headers.
- The Google Terraform provider also supports these latest Cloud CDN features, including cache modes, TTL overrides, and custom response headers.
- Feature External HTTP(S) Load Balancing now supports setting custom response headers on backend buckets and services.

### Set up third-party object storage \_|\_ Cloud CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-third-party-storage](https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-third-party-storage)
- Source ID: `site-docs-root`
- Final score: 190
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If everything looks correct, click Update . gcloud Create a new backend service for the NEG: gcloud compute backend-services create images \ --global \ --enable-cdn \ --cache-mode= CACHE MODE \ --protocol=HTTP2 Set the cache mode by replacing CACHE MODE with one of the following: CACHE ALL STATIC : automatically caches static content USE ORIGIN HEADERS (default): requires the origin to set valid caching headers to cache content FORCE CACHE ALL : caches all content, ignoring any private , no-store , or no-cache directives in Cache-Control response headers Configure the backend service to add the custom request header Host: backend.example.com to the request: gcloud compute backend-services update images \ --custom-request-header "Host: backend.example.com" --global Use the backend-services add-backend command to add the internet NEG to the backend service: gcloud compute backend-services add-backend images \ --network-endpoint-group "example-fqdn-neg" \ --global-network-endpoint-group \ --global Attach the new backend service to the load balancer's URL map by creating a new matching rule to direct requests to that backend: gcloud compute url-maps add-path-matcher EXAMPLE URL MAP \ --default-service= GCP SERVICE EXAMPLE \ --path-matcher-name= CUSTOM ORIGIN PATH MATCHER EXAMPLE \ --backend-service-path-rules= /CART/ID/1223515 = IMAGES Replace the following: EXAMPLE URL MAP : the name of your existing URL map GCP SERVICE EXAMPLE : the name of an existing default backend service CUSTOM ORIGIN PATH MATCHER EXAMPLE : the name of this new path rule /CART/ID/1223515 : the path IMAGES : the name of the new backend service with the attached internet NEG Allowlist the necessary IP ranges To allow an external Application Load Balancer to send requests to your internet NEG, you must query the cloud-eoips.googleusercontent.com DNS TXT record by using a tool like dig or nslookup .
- Note: If your content is already in a Cloud Storage bucket, see Set up Cloud CDN with a backend bucket for configuring Cloud CDN with Cloud Storage.
- Cloud CDN enabled (optional) on the backend service allows caching and serving responses from Cloud CDN caches.
- 200 OK Length: 3447106 (3.3M) [image/jpeg] Saving to: '/cart/id/1223515/image.jpg.45' /cart/id/1223515/image.jpg.45 100%[==============================================================================================================================================>] 3.29M --.-KB/s in 0.008s 2020-06-26 18:19:29 (423 MB/s) - '/cart/id/1223515/image.jpg.45' saved [3447106/3447106] real 0m0.018s user 0m0.001s sys 0m0.010s Verify by using logs Logs for Cloud CDN are associated with the external Application Load Balancer that your Cloud CDN-enabled backends are attached to.

### "Logs and metrics for backend services \_|\_ Cloud CDN \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring](https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring)
- Source ID: `site-docs-root-2`
- Final score: 188
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- CACHE POLICY SOURCE BACKEND : The caching behavior determined by the Cloud CDN configuration on the backend service or bucket. integer Required The overrideResponseCode holds the override response code applied to the response sent to the client.
- This information is only available for global external Application Load Balancers using custom error responses . string Required The errorBackendStatusDetails field holds the statusDetails of the final response served to the client.
- This information is only available for global external Application Load Balancers using custom error responses . string Required The errorService field holds the backend service that provided the custom error response.
- Returned from the backend—any status code is possible. byte range caching retrieval from backend failed after partial response A byte range request or validation request initiated by Cloud CDN encountered an error.

