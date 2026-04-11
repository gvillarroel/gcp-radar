---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:27:19.901Z"
product_name: "Cloud CDN"
product_slug: "cloud-cdn"
feature_name: "Cloud CDN cache modes"
feature_slug: "cloud-cdn-cache-modes"
latest_feature_date: "2020-09-14"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/cdn/docs/using-cache-modes"
  - "https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring"
  - "https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-bucket"
keywords:
  - "cdn"
  - "cache"
  - "modes"
  - "introduces"
  - "for"
  - "backend"
  - "buckets"
  - "and"
---

# Cloud CDN cache modes

Product: Cloud CDN
Coverage: LOW

## Step 02 Summary

Cloud CDN introduces cache modes for backend buckets and backend services to automatically cache common static and media content types.

## Extended Definition

Cloud CDN introduces cache modes for backend buckets and backend services to automatically cache common static and media content types.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/cdn/docs/using-cache-modes](https://docs.cloud.google.com/cdn/docs/using-cache-modes)
- [https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring](https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring)
- [https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-bucket](https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-bucket)

## Supporting Pages

### Change cache modes \_|\_ Cloud CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/using-cache-modes](https://docs.cloud.google.com/cdn/docs/using-cache-modes)
- Source ID: `site-docs-root`
- Final score: 218
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Use one of the following API calls: POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/backendBuckets PUT https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/backendBuckets/ BACKEND BUCKET POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/backendServices PUT https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/backendServices/ BACKEND SERVICE Add the following snippet to the JSON request body: "cdnPolicy": { "cacheMode": (CACHE ALL STATIC USE ORIGIN HEADERS FORCE CACHE ALL) Replace CACHE MODE with one of the following: CACHE ALL STATIC (default): Automatically caches static content if the origin does not set valid caching headers .
- For backend buckets, use the gcloud compute backend-buckets create or gcloud compute backend-buckets update command with the --cache-mode flag. gcloud compute backend-services (create update) BACKEND SERVICE NAME --cache-mode= CACHE MODE gcloud compute backend-buckets (create update) BACKEND BUCKET NAME --cache-mode= CACHE MODE Replace CACHE MODE with one of the following: CACHE ALL STATIC (default): Automatically caches static content .
- Setting the cache mode To configure cache modes for a Cloud CDN-enabled backend, do the following: Console In the Google Cloud console, go to the Load Balancing page.
- Home Documentation Networking Cloud CDN Guides Send feedback Change cache modes Stay organized with collections Save and categorize content based on your preferences.

### "Logs and metrics for backend services \_|\_ Cloud CDN \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring](https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring)
- Source ID: `site-docs-root-2`
- Final score: 186
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Multiple queries are sent to the same backend for different chunks of data to support a single client request. proxy continent Continent of the HTTP(S) GFE that terminated the HTTP(S) connection—for example, America , Europe , Asia protocol Protocol used by the client, one of HTTP/1.0 , HTTP/1.1 , HTTP/2.0 , QUIC/HTTP/2.0 , UNKNOWN . response code The HTTP status code of the request. response code class The HTTP status code class of the request: 200 , 300 , 400 , 500 or 0 for none. cache result Cache result for serving HTTP request by proxy: HIT , MISS , DISABLED , PARTIAL HIT (for a request served partially from cache and partially from backend), or UNKNOWN . client country Country of the client that issued the HTTP request—for example, United States or Germany . load balancing scheme The load balancing scheme used.
- Home Documentation Networking Cloud CDN Guides Send feedback Logs and metrics for backend services Stay organized with collections Save and categorize content based on your preferences.
- 2 XX byte range caching forwarded backend response The load balancer previously received a response indicating that the resource was cacheable and supported byte ranges.
- This can happen when Cloud CDN has served the request partially from its cache and has also sent one or more byte range requests to the backend.

### Set up a backend bucket \_|\_ Cloud CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-bucket](https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-bucket)
- Source ID: `site-docs-root`
- Final score: 178
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Cloud CDN controls include, for example, cache modes, signed URLs, and invalidation.
- For an classic Application Load Balancer, use load-balancing-scheme=EXTERNAL . gcloud compute forwarding-rules create http-lb-forwarding-rule \ --load-balancing-scheme= LOAD BALANCING SCHEME \ --network-tier=PREMIUM \ --address=example-ip \ --global \ --target-http-proxy=http-lb-proxy \ --ports=80 Terraform Configure the backend To configure the backend, use the google compute backend bucket resource . backend bucket with CDN policy with default ttl settings resource "google compute backend bucket" "default" { name = "cat-backend-bucket" description = "Contains beautiful images" bucket name = google storage bucket.default.name enable cdn = true cdn policy { cache mode = "CACHE ALL STATIC" client ttl = 3600 default ttl = 3600 max ttl = 86400 negative caching = true serve while stale = 86400 } } Configure the URL map To configure the backend, use the google compute url map resource . url map resource "google compute url map" "default" { name = "http-lb" default service = google compute backend bucket.default.id } Configure the target proxy To configure the target proxy, use the google compute target http proxy resource or the google compute target https proxy resource . http proxy resource "google compute target http proxy" "default" { name = "http-lb-proxy" url map = google compute url map.default.id } Configure the forwarding rule To configure the forwarding rule, use the google compute global forwarding rule resource . forwarding rule resource "google compute global forwarding rule" "default" { name = "http-lb-forwarding-rule" ip protocol = "TCP" load balancing scheme = "EXTERNAL" port range = "80" target = google compute target http proxy.default.id ip address = google compute global address.default.id } For a global external Application Load Balancer, use with load balancing scheme="EXTERNAL MANAGED" .
- The example uses the following resources: The default Virtual Private Cloud (VPC) network A default URL map A reserved external IP address A Cloud Storage bucket as the backend A single load balancer backend bucket that acts as a wrapper around the Cloud Storage bucket A backend bucket supports the following: Cloud Storage buckets of any storage class , including multi-region buckets Cloud CDN policies for caching content at Google's global edge To learn how Cloud CDN works, see the Cloud CDN overview .
- It's referred to as IP ADDRESS . gcloud Configure the backend gcloud compute backend-buckets create cat-backend-bucket \ --gcs-bucket-name= BUCKET NAME \ --enable-cdn \ --cache-mode= CACHE MODE Set the cache mode by replacing CACHE MODE with one of the following: CACHE ALL STATIC or USE ORIGIN HEADERS : Uses the headers set according to cache control metadata in Cloud Storage.

