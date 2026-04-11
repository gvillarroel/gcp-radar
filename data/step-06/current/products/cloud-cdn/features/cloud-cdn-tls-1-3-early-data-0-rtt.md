---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:27:19.864Z"
product_name: "Cloud CDN"
product_slug: "cloud-cdn"
feature_name: "Cloud CDN TLS 1.3 early data (0-RTT)"
feature_slug: "cloud-cdn-tls-1-3-early-data-0-rtt"
latest_feature_date: "2025-02-18"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring"
  - "https://docs.cloud.google.com/cdn/docs/release-notes"
  - "https://docs.cloud.google.com/cdn/docs/set-up-external-backend-internet-neg"
keywords:
  - "cdn"
  - "tls"
  - "early"
  - "rtt"
  - "external"
  - "http"
  - "load"
  - "balancing"
---

# Cloud CDN TLS 1.3 early data (0-RTT)

Product: Cloud CDN
Coverage: LOW

## Step 02 Summary

External HTTP(S) Load Balancing with Cloud CDN supports TLS 1.3 early data (0-RTT) to send request data during the TLS handshake for resumed connections.

## Extended Definition

External HTTP(S) Load Balancing with Cloud CDN supports TLS 1.3 early data (0-RTT) to send request data during the TLS handshake for resumed connections.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring](https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring)
- [https://docs.cloud.google.com/cdn/docs/release-notes](https://docs.cloud.google.com/cdn/docs/release-notes)
- [https://docs.cloud.google.com/cdn/docs/set-up-external-backend-internet-neg](https://docs.cloud.google.com/cdn/docs/set-up-external-backend-internet-neg)

## Supporting Pages

### "Logs and metrics for backend services \_|\_ Cloud CDN \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring](https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring)
- Source ID: `site-docs-root-2`
- Final score: 208
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Request count loadbalancing.googleapis.com/https/request count The number of requests served by the external Application Load Balancer Request bytes count loadbalancing.googleapis.com/https/request bytes count The number of bytes sent as requests from clients to the external Application Load Balancer Response bytes count loadbalancing.googleapis.com/https/response bytes count The number of bytes sent as responses from the external Application Load Balancer to clients Total latencies loadbalancing.googleapis.com/https/total latencies A distribution of the total latency.
- The JSON object contains the following fields: statusDetails backendTargetProjectNumber cachePolicySource overrideResponseCode errorService errorBackendStatusDetails authzPolicyInfo loadBalancingScheme tls orca load report string Required The statusDetails field holds a string that explains why the load balancer returned the HTTP status code that it did.
- You can request information such as the following: median overall latency (300/600) - 50 ms median UK latency (30/60) - 100 ms 95th percentile overall latency (570/600) - 100 ms Frontend RTT † loadbalancing.googleapis.com/https/frontend tcp rtt A distribution of the frontend RTT.
- Backend response bytes count loadbalancing.googleapis.com/https/backend response bytes count The number of bytes sent as responses from the backends (including cache) to the external Application Load Balancer.

### Cloud CDN release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/release-notes](https://docs.cloud.google.com/cdn/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- February 18, 2025 Feature External HTTP(S) Load Balancing and Cloud CDN support early data for TLS 1.3 , also known as 0-RTT or zero round trip.
- March 28, 2021 Security Cloud CDN, external HTTP(S) Load Balancing and Cloud Storage customers are not affected by the recent OpenSSL security advisory that relates to CA certificate checks (CVE-2021-3450) and TLS renegotiation (CVE-2021-3449).
- April 09, 2020 Feature TLS v1.3 is now enabled by default for all external HTTPS load balancers, SSL proxy load balancers, and Cloud CDN.
- July 13, 2020 Change Added a new setup guide for custom (external) origins with Cloud CDN and external HTTP(S) Load Balancing.

### "Set up an external backend with an internet NEG \_|\_ Cloud CDN \_|\_ Google\

- URL: [https://docs.cloud.google.com/cdn/docs/set-up-external-backend-internet-neg](https://docs.cloud.google.com/cdn/docs/set-up-external-backend-internet-neg)
- Source ID: `site-docs-root`
- Final score: 164
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If everything looks correct, click Update . gcloud Create a new backend service for the NEG: gcloud compute backend-services create images \ --global \ --enable-cdn \ --cache-mode= CACHE MODE \ --protocol=HTTP2 Set the cache mode by replacing CACHE MODE with one of the following: CACHE ALL STATIC : automatically caches static content USE ORIGIN HEADERS (default): requires the origin to set valid caching headers to cache content FORCE CACHE ALL : caches all content, ignoring any private , no-store , or no-cache directives in Cache-Control response headers Configure the backend service to add the custom request header Host: backend.example.com to the request: gcloud compute backend-services update images \ --custom-request-header "Host: backend.example.com" --global Use the backend-services add-backend command to add the internet NEG to the backend service: gcloud compute backend-services add-backend images \ --network-endpoint-group "example-fqdn-neg" \ --global-network-endpoint-group \ --global Attach the new backend service to the load balancer's URL map by creating a new matching rule to direct requests to that backend: gcloud compute url-maps add-path-matcher EXAMPLE URL MAP \ --default-service= GCP SERVICE EXAMPLE \ --path-matcher-name= CUSTOM ORIGIN PATH MATCHER EXAMPLE \ --backend-service-path-rules= /CART/ID/1223515 = IMAGES Replace the following: EXAMPLE URL MAP : the name of your existing URL map GCP SERVICE EXAMPLE : the name of an existing default backend service CUSTOM ORIGIN PATH MATCHER EXAMPLE : the name of this new path rule /CART/ID/1223515 : the path IMAGES : the name of the new backend service with the attached internet NEG Allowlist the necessary IP ranges To allow an external Application Load Balancer to send requests to your internet NEG, you must query the cloud-eoips.googleusercontent.com DNS TXT record by using a tool like dig or nslookup .
- The guide steps through how to configure a global external Application Load Balancer with a Cloud CDN-enabled backend service that proxies to an external backend server at backend.example.com .
- Other options would be to configure a load balancer to accept HTTP or HTTPS requests, and use HTTPS when proxying requests to the external backend.
- When you use an external backend with an external Application Load Balancer, you can improve performance by using Cloud CDN caching.

