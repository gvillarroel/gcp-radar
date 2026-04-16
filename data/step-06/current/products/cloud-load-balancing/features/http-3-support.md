---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:54:57.787Z"
product_name: "Cloud Load Balancing"
product_slug: "cloud-load-balancing"
feature_name: "HTTP/3 support"
feature_slug: "http-3-support"
latest_feature_date: "2021-06-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/load-balancing/docs/https"
  - "https://docs.cloud.google.com/load-balancing/docs/tutorials/optimize-app-latency"
  - "https://docs.cloud.google.com/load-balancing/docs/tutorials/faster-performance-improved-protection"
keywords:
  - "http"
  - "external"
  - "load"
  - "balancing"
  - "supports"
  - "reduce"
  - "latency"
  - "improve"
---

# HTTP/3 support

Product: Cloud Load Balancing
Coverage: MEDIUM

## Step 02 Summary

External HTTP(S) Load Balancing supports HTTP/3 to reduce latency, improve throughput, and mitigate head-of-line blocking.

## Extended Definition

External HTTP(S) Load Balancing supports HTTP/3 to reduce latency, improve throughput, and mitigate head-of-line blocking.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https)
- [https://docs.cloud.google.com/load-balancing/docs/tutorials/optimize-app-latency](https://docs.cloud.google.com/load-balancing/docs/tutorials/optimize-app-latency)
- [https://docs.cloud.google.com/load-balancing/docs/tutorials/faster-performance-improved-protection](https://docs.cloud.google.com/load-balancing/docs/tutorials/faster-performance-improved-protection)

## Supporting Pages

### "External Application Load Balancer overview \_|\_ Cloud Load Balancing \_\

- URL: [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https)
- Source ID: `site-docs-reference-required-3`
- Final score: 235
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- HTTP/3 on your load balancer can improve web page load times, reduce video rebuffering, and improve throughput on higher latency connections.
- TLS 1.3 early data is supported on the target HTTPS proxy of the following external Application Load Balancers for both HTTPS over TCP (HTTP/1.1, HTTP/2) and HTTP/3 over QUIC: Global external Application Load Balancers Classic Application Load Balancers TLS 1.3 was defined in RFC 8446 and introduces the concept of early data , also known as zero-round-trip time (0-RTT) data , which can improve application performance for resumed connections by 30 to 50%.
- Backend service scope The following table indicates which backend service resource and scope is used by external Application Load Balancers: Load balancer mode Backend service resource Global external Application Load Balancer backendServices (global) Classic Application Load Balancer backendServices (global) Regional external Application Load Balancer regionBackendServices (regional) Protocol to the backends Backend services for Application Load Balancers must use one of the following protocols to send requests to backends: HTTP, which uses HTTP/1.1 and no TLS HTTPS, which uses HTTP/1.1 and TLS HTTP/2, which uses HTTP/2 and TLS (HTTP/2 without encryption isn't supported.) H2C, which uses HTTP/2 over TCP.
- Configured on the backend service or backend bucket Regional external Application Load Balancer Regional HTTP , Regional HTTPS X-Forwarded-Proto : [http https] (requests only) Via: 1.1 google (requests and responses) X-Forwarded-For : [<supplied-value>,]<client-ip>,<load-balancer-ip> (see X-Forwarded-For header ) (requests only) Configured in the URL map Note: In accordance with RFC 2616 , the following hop-by-hop headers aren't propagated by the target proxy: Connection , Keep-Alive , Proxy-Authenticate , Proxy-Authorization , TE , Trailers , Transfer-Encoding , and Upgrade .

### "Optimize application latency with load balancing \_|\_ Cloud Load Balancing\

- URL: [https://docs.cloud.google.com/load-balancing/docs/tutorials/optimize-app-latency](https://docs.cloud.google.com/load-balancing/docs/tutorials/optimize-app-latency)
- Source ID: `site-docs-reference-required-3`
- Final score: 177
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Comparing latency This section compares load balancing in the following configurations: No load balancing External passthrough Network Load Balancer External Application Load Balancer or External proxy Network Load Balancer In this scenario, the application consists of a regional managed instance group of HTTP web servers.
- These improvements can reduce the observed latency even more than that observed by switching to the external Application Load Balancer.
- The following table summarizes your options: Option Description Traffic flow Scope External Application Load Balancer Supports HTTP(S) traffic and advanced features, such as URL mapping and SSL offloading Use an external proxy Network Load Balancer for non-HTTP traffic on specific ports.
- For the user in Germany, the minimum observed latency is 201 ms using the external Application Load Balancer, versus 525 ms using HTTP(S) through the external passthrough Network Load Balancer.

### "Faster web performance and improved web protection for load balancing \_\

- URL: [https://docs.cloud.google.com/load-balancing/docs/tutorials/faster-performance-improved-protection](https://docs.cloud.google.com/load-balancing/docs/tutorials/faster-performance-improved-protection)
- Source ID: `site-docs-reference-required-3`
- Final score: 157
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Improving web performance with Cloud CDN Using the external Application Load Balancer already improves web performance by setting up HTTP(S) connections on Google's global edge closer to the requesting client and by negotiating connections using modern protocols such as QUIC, HTTP/2, and TLS 1.3 to reduce the number of round trips and enhance throughput.
- You can further improve performance and reduce your serving costs by enabling Cloud CDN as part of your external Application Load Balancer deployment.
- Automatically blocks most volumetric DDoS attacks Cloud Armor works with the external Application Load Balancer to automatically block network protocol and volumetric DDoS attacks such as protocol floods (SYN, TCP, HTTP, and ICMP) and amplification attacks (NTP, UDP, DNS).
- Improving web protection with Cloud Armor Using the external Application Load Balancer already provides a measure of web protection by setting up HTTP(S) connections on Google's global edge, offloading your backend infrastructure from needing to handle this process.

