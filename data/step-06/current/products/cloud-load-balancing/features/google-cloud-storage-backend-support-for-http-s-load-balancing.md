---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:54:57.802Z"
product_name: "Cloud Load Balancing"
product_slug: "cloud-load-balancing"
feature_name: "Google Cloud Storage backend support for HTTP(S) Load Balancing"
feature_slug: "google-cloud-storage-backend-support-for-http-s-load-balancing"
latest_feature_date: "2017-04-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/load-balancing/docs/tutorials/http-https-over-same-domain"
  - "https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-backend-mtls"
  - "https://docs.cloud.google.com/load-balancing/docs/https"
keywords:
  - "storage"
  - "backend"
  - "http"
  - "load"
  - "balancing"
  - "can"
  - "use"
  - "serving"
---

# Google Cloud Storage backend support for HTTP(S) Load Balancing

Product: Cloud Load Balancing
Coverage: MEDIUM

## Step 02 Summary

HTTP(S) Load Balancing can use Google Cloud Storage as a backend for serving content.

## Extended Definition

HTTP(S) Load Balancing can use Google Cloud Storage as a backend for serving content.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/load-balancing/docs/tutorials/http-https-over-same-domain](https://docs.cloud.google.com/load-balancing/docs/tutorials/http-https-over-same-domain)
- [https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-backend-mtls](https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-backend-mtls)
- [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https)

## Supporting Pages

### "Deliver HTTP and HTTPS content over the same published domain \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/load-balancing/docs/tutorials/http-https-over-same-domain](https://docs.cloud.google.com/load-balancing/docs/tutorials/http-https-over-same-domain)
- Source ID: `site-docs-reference-required-3`
- Final score: 133
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For an classic Application Load Balancer, use load-balancing-scheme=EXTERNAL . gcloud compute forwarding-rules create ipv4-http \ --load-balancing-scheme= LOAD BALANCING SCHEME \ --network-tier=PREMIUM \ --address=ipv4-address \ --global \ --target-http-proxy=http-lb-proxy \ --ports=80 gcloud compute forwarding-rules create ipv4-https \ --load-balancing-scheme= LOAD BALANCING SCHEME \ --network-tier=PREMIUM \ --address=ipv4-address \ --global \ --target-https-proxy=https-lb-proxy \ --ports=443 After creating the global forwarding rules, it can take several minutes for your configuration to propagate worldwide.
- When configuring the external Application Load Balancer, the frontend configuration includes four forwarding rules that use the reserved IP addresses: Name Protocol IP:Port ipv4-http HTTP 34.95.111.204:80 ipv4-https HTTPS 34.95.111.204:443 ipv6-http HTTP [2600:1901:0:b13e::]:80 ipv6-https HTTPS [2600:1901:0:b13e::]:443 For Cloud CDN cache misses, the load balancer distributes requests to the backend origins, based on settings defined in the load balancer's URL map.
- The proxy is the portion of the load balancer that holds the SSL certificate for HTTPS Load Balancing, so you also load your certificate in this step. gcloud compute target-https-proxies create https-lb-proxy \ --url-map=web-map --ssl-certificates=www-ssl-cert Create two global forwarding rules to route incoming requests to the proxy, one for each of the IP address(es) you created.
- Home Documentation Networking Load Balancing Guides Send feedback Deliver HTTP and HTTPS content over the same published domain Stay organized with collections Save and categorize content based on your preferences.

### "Backend authenticated TLS and backend mTLS overview \_|\_ Cloud Load Balancing\

- URL: [https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-backend-mtls](https://docs.cloud.google.com/load-balancing/docs/backend-authenticated-tls-backend-mtls)
- Source ID: `site-docs-reference-required-3`
- Final score: 129
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Networking Load Balancing Guides Send feedback Backend authenticated TLS and backend mTLS overview Stay organized with collections Save and categorize content based on your preferences.
- However, if the certificate validation fails, the load balancer terminates the connection to the backend, sends an HTTP 502 status code to the client, and logs the termination reason to Cloud Logging.
- If the backend refuses the load balancer's connection, the load balancer returns an HTTP 502 status code for requests that it's proxying and logs a generic status to Cloud Logging.
- When the connection to the backend fails, the load balancer responds to proxied requests with an HTTP 502 status code and logs a generic error reason to Cloud Logging.

### "External Application Load Balancer overview \_|\_ Cloud Load Balancing \_\

- URL: [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https)
- Source ID: `site-docs-reference-required-3`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- The external Application Load Balancer distributes HTTP and HTTPS traffic to backends hosted on a variety of Google Cloud platforms (such as Compute Engine, Google Kubernetes Engine (GKE), and Cloud Storage), as well as external backends connected over the internet or through hybrid connectivity.
- In the Premium Network Service Tier , this load balancer offers multi-region load balancing, attempts to direct traffic to the closest healthy backend that has capacity, and terminates HTTP(S) traffic as close as possible to your users.
- Backend service scope The following table indicates which backend service resource and scope is used by external Application Load Balancers: Load balancer mode Backend service resource Global external Application Load Balancer backendServices (global) Classic Application Load Balancer backendServices (global) Regional external Application Load Balancer regionBackendServices (regional) Protocol to the backends Backend services for Application Load Balancers must use one of the following protocols to send requests to backends: HTTP, which uses HTTP/1.1 and no TLS HTTPS, which uses HTTP/1.1 and TLS HTTP/2, which uses HTTP/2 and TLS (HTTP/2 without encryption isn't supported.) H2C, which uses HTTP/2 over TCP.
- Configured on the backend service or backend bucket Regional external Application Load Balancer Regional HTTP , Regional HTTPS X-Forwarded-Proto : [http https] (requests only) Via: 1.1 google (requests and responses) X-Forwarded-For : [<supplied-value>,]<client-ip>,<load-balancer-ip> (see X-Forwarded-For header ) (requests only) Configured in the URL map Note: In accordance with RFC 2616 , the following hop-by-hop headers aren't propagated by the target proxy: Connection , Keep-Alive , Proxy-Authenticate , Proxy-Authorization , TE , Trailers , Transfer-Encoding , and Upgrade .

