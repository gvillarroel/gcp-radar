---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:27:19.871Z"
product_name: "Cloud CDN"
product_slug: "cloud-cdn"
feature_name: "Cloud CDN HTTP/3 support"
feature_slug: "cloud-cdn-http-3-support"
latest_feature_date: "2021-06-22"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/cdn/docs/http-https-over-same-domain"
  - "https://docs.cloud.google.com/cdn/docs/caching"
  - "https://docs.cloud.google.com/cdn/docs/release-notes"
keywords:
  - "cdn"
  - "http"
  - "via"
  - "external"
  - "load"
  - "balancing"
  - "supports"
  - "over"
---

# Cloud CDN HTTP/3 support

Product: Cloud CDN
Coverage: LOW

## Step 02 Summary

Cloud CDN, via External HTTP(S) Load Balancing, supports HTTP/3 over QUIC for lower latency and improved throughput.

## Extended Definition

Cloud CDN, via External HTTP(S) Load Balancing, supports HTTP/3 over QUIC for lower latency and improved throughput.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/cdn/docs/http-https-over-same-domain](https://docs.cloud.google.com/cdn/docs/http-https-over-same-domain)
- [https://docs.cloud.google.com/cdn/docs/caching](https://docs.cloud.google.com/cdn/docs/caching)
- [https://docs.cloud.google.com/cdn/docs/release-notes](https://docs.cloud.google.com/cdn/docs/release-notes)

## Supporting Pages

### "Deliver secure and non-secure content over the same hostname \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/cdn/docs/http-https-over-same-domain](https://docs.cloud.google.com/cdn/docs/http-https-over-same-domain)
- Source ID: `site-docs-root`
- Final score: 196
- Re-rank relevance: N/A

Evidence snippets:
- For an classic Application Load Balancer, use load-balancing-scheme=EXTERNAL . gcloud compute forwarding-rules create ipv4-http \ --load-balancing-scheme= LOAD BALANCING SCHEME \ --network-tier=PREMIUM \ --address=ipv4-address \ --global \ --target-http-proxy=http-lb-proxy \ --ports=80 gcloud compute forwarding-rules create ipv4-https \ --load-balancing-scheme= LOAD BALANCING SCHEME \ --network-tier=PREMIUM \ --address=ipv4-address \ --global \ --target-https-proxy=https-lb-proxy \ --ports=443 After creating the global forwarding rules, it can take several minutes for your configuration to propagate worldwide.
- When configuring the external Application Load Balancer, the frontend configuration includes four forwarding rules that use the reserved IP addresses: Name Protocol IP:Port ipv4-http HTTP 34.95.111.204:80 ipv4-https HTTPS 34.95.111.204:443 ipv6-http HTTP [2600:1901:0:b13e::]:80 ipv6-https HTTPS [2600:1901:0:b13e::]:443 For Cloud CDN cache misses, the load balancer distributes requests to the backend origins, based on settings defined in the load balancer's URL map.
- To make this work with Cloud CDN, you can reserve an IP address and bind the reserved IP address to both the HTTP and HTTPS frontend configuration in the external Application Load Balancer.
- The proxy is the portion of the load balancer that holds the SSL certificate for HTTPS Load Balancing, so you also load your certificate in this step. gcloud compute target-https-proxies create https-lb-proxy \ --url-map=web-map --ssl-certificates=www-ssl-cert Create two global forwarding rules to route incoming requests to the proxy, one for each of the IP address(es) you created.

### Caching overview \_|\_ Cloud CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/caching](https://docs.cloud.google.com/cdn/docs/caching)
- Source ID: `site-docs-root`
- Final score: 182
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- N/A Where possible, Cloud CDN endeavors to be RFC-compliant (HTTP RFC 7234), but favors optimizing for cache offload and minimizing the impact that clients can have on hit rate and overall origin load.
- Request type Default behavior Configurable Benefits of collapsing Chunk requests Enabled No Can significantly reduce origin bandwidth Item requests Enabled Yes Can reduce origin request volume To disable item request collapsing using the Google Cloud CLI for a backend bucket that references a Cloud Storage bucket: Note: Google Cloud CLI support for the --request-coalescing flag was introduced in Google Cloud CLI version 330.0.0 . gcloud Use the gcloud compute backend-services or backend-buckets command: gcloud compute backend-services update BACKEND SERVICE NAME \ --no-request-coalescing To enable item request collapsing on a backend bucket using the Google Cloud CLI: gcloud Use the gcloud compute backend-buckets command: gcloud compute backend-buckets update BACKEND BUCKET NAME \ --request-coalescing To enable item request collapsing using the Google Cloud CLI for a backend service, including VM groups and external backends: gcloud Use the gcloud compute backend-services command: gcloud compute backend-services update BACKEND SERVICE NAME \ --request-coalescing Requests initiated by Cloud CDN When your origin server supports byte range requests , Cloud CDN can send multiple requests to your origin server in reaction to a single client request.
- For an example that shows how to configure an external Application Load Balancer with a backend bucket, see Setting up Cloud CDN with a backend bucket .
- A cacheable response is an HTTP response that Cloud CDN can store and quickly retrieve, thus allowing for faster load times.

### Cloud CDN release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/release-notes](https://docs.cloud.google.com/cdn/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 180
- Re-rank relevance: N/A

Evidence snippets:
- March 28, 2021 Security Cloud CDN, external HTTP(S) Load Balancing and Cloud Storage customers are not affected by the recent OpenSSL security advisory that relates to CA certificate checks (CVE-2021-3450) and TLS renegotiation (CVE-2021-3449).
- January 31, 2023 Feature Cloud CDN supports advanced traffic management using flexible pattern matching with Global External HTTP(S) Load Balancer.
- February 18, 2025 Feature External HTTP(S) Load Balancing and Cloud CDN support early data for TLS 1.3 , also known as 0-RTT or zero round trip.
- July 13, 2020 Change Added a new setup guide for custom (external) origins with Cloud CDN and external HTTP(S) Load Balancing.

