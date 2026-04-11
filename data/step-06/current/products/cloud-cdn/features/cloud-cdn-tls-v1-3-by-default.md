---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:27:19.913Z"
product_name: "Cloud CDN"
product_slug: "cloud-cdn"
feature_name: "Cloud CDN TLS v1.3 by default"
feature_slug: "cloud-cdn-tls-v1-3-by-default"
latest_feature_date: "2020-04-09"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring"
  - "https://docs.cloud.google.com/cdn/docs/release-notes"
  - "https://docs.cloud.google.com/cdn/docs/caching"
keywords:
  - "cdn"
  - "tls"
  - "v1"
  - "by"
  - "default"
  - "is"
  - "enabled"
  - "for"
---

# Cloud CDN TLS v1.3 by default

Product: Cloud CDN
Coverage: LOW

## Step 02 Summary

Cloud CDN is enabled for TLS v1.3 by default on applicable external load balancer integrations.

## Extended Definition

Cloud CDN is enabled for TLS v1.3 by default on applicable external load balancer integrations.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring](https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring)
- [https://docs.cloud.google.com/cdn/docs/release-notes](https://docs.cloud.google.com/cdn/docs/release-notes)
- [https://docs.cloud.google.com/cdn/docs/caching](https://docs.cloud.google.com/cdn/docs/caching)

## Supporting Pages

### "Logs and metrics for backend services \_|\_ Cloud CDN \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring](https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring)
- Source ID: `site-docs-root-2`
- Final score: 208
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Therefore, service admins—owners or users of projects where the backend service is created—won't have access to the load balancer's logs and metrics by default.
- Multiple queries are sent to the same backend for different chunks of data to support a single client request. proxy continent Continent of the HTTP(S) GFE that terminated the HTTP(S) connection—for example, America , Europe , Asia protocol Protocol used by the client, one of HTTP/1.0 , HTTP/1.1 , HTTP/2.0 , QUIC/HTTP/2.0 , UNKNOWN . response code The HTTP status code of the request. response code class The HTTP status code class of the request: 200 , 300 , 400 , 500 or 0 for none. cache result Cache result for serving HTTP request by proxy: HIT , MISS , DISABLED , PARTIAL HIT (for a request served partially from cache and partially from backend), or UNKNOWN . client country Country of the client that issued the HTTP request—for example, United States or Germany . load balancing scheme The load balancing scheme used.
- Field Type Description backend service name string The name of the backend service. forwarding rule name string The name of the forwarding rule object. project id string The identifier of the Google Cloud project associated with this resource. target proxy name string The name of the target proxy object referenced by the forwarding rule. url map name string The name of the URL map object configured to select a backend service. zone string The zone in which the load balancer is running.
- For example, the HTTP 410 status code means that the backend is unavailable due to payment delinquency. denied by security policy The load balancer denied this request because of a Google Cloud Armor security policy .

### Cloud CDN release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/release-notes](https://docs.cloud.google.com/cdn/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 188
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- April 09, 2020 Feature TLS v1.3 is now enabled by default for all external HTTPS load balancers, SSL proxy load balancers, and Cloud CDN.
- TLS v1.3 supports modern ciphers with forward-secrecy as a baseline and, critically, reduces the number of round trips required to establish a TLS session, which directly improves performance seen by your end-users.
- October 07, 2025 Feature Cloud CDN provides predefined dashboards that are enabled by default for a quick insight into system health and performance.
- November 04, 2020 Announcement Added a new tutorial for configuring Cloud CDN with a serverless app: Setting up Cloud CDN with Cloud Run, Cloud Functions, or App Engine November 02, 2020 Feature You can now configure cache modes , cache TTLs and set custom response headers in the Cloud Console, in addition to the existing gcloud and REST API support.

### Caching overview \_|\_ Cloud CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/caching](https://docs.cloud.google.com/cdn/docs/caching)
- Source ID: `site-docs-root`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- Request type Default behavior Configurable Benefits of collapsing Chunk requests Enabled No Can significantly reduce origin bandwidth Item requests Enabled Yes Can reduce origin request volume To disable item request collapsing using the Google Cloud CLI for a backend bucket that references a Cloud Storage bucket: Note: Google Cloud CLI support for the --request-coalescing flag was introduced in Google Cloud CLI version 330.0.0 . gcloud Use the gcloud compute backend-services or backend-buckets command: gcloud compute backend-services update BACKEND SERVICE NAME \ --no-request-coalescing To enable item request collapsing on a backend bucket using the Google Cloud CLI: gcloud Use the gcloud compute backend-buckets command: gcloud compute backend-buckets update BACKEND BUCKET NAME \ --request-coalescing To enable item request collapsing using the Google Cloud CLI for a backend service, including VM groups and external backends: gcloud Use the gcloud compute backend-services command: gcloud compute backend-services update BACKEND SERVICE NAME \ --request-coalescing Requests initiated by Cloud CDN When your origin server supports byte range requests , Cloud CDN can send multiple requests to your origin server in reaction to a single client request.
- This behavior is the default for Cloud CDN-enabled backends created by using the Google Cloud CLI or the REST API.
- For example: PATCH https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/backendBuckets Add the following snippet to the JSON request body: "cdnPolicy": { "bypassCacheOnRequestHeaders": [ { "headerName": string } ] } Disable cache bypass gcloud For backend buckets, use the gcloud compute backend-buckets create or gcloud compute backend-buckets update command with the --no-bypass-cache-on-request-headers flag.
- This behavior can be enabled for all responses by setting cdnPolicy.serveWhileStale on the backend. stale-if-error= SECONDS The stale-if-error request directive is ignored.

