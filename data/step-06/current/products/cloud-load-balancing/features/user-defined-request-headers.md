---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:54:57.796Z"
product_name: "Cloud Load Balancing"
product_slug: "cloud-load-balancing"
feature_name: "User-defined request headers"
feature_slug: "user-defined-request-headers"
latest_feature_date: "2019-06-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/load-balancing/docs/load-balancing-overview"
  - "https://docs.cloud.google.com/load-balancing/docs/https"
  - "https://docs.cloud.google.com/load-balancing/docs/l7-internal"
keywords:
  - "user"
  - "defined"
  - "request"
  - "headers"
  - "http"
  - "load"
  - "balancing"
  - "lets"
---

# User-defined request headers

Product: Cloud Load Balancing
Coverage: MEDIUM

## Step 02 Summary

HTTP(S) Load Balancing lets you add custom request headers before traffic is sent to backends; HTTP(S) Load Balancing lets you add custom request headers before traffic is sent to backends.

## Extended Definition

HTTP(S) Load Balancing lets you add custom request headers before traffic is sent to backends; HTTP(S) Load Balancing lets you add custom request headers before traffic is sent to backends.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/load-balancing/docs/load-balancing-overview](https://docs.cloud.google.com/load-balancing/docs/load-balancing-overview)
- [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https)
- [https://docs.cloud.google.com/load-balancing/docs/l7-internal](https://docs.cloud.google.com/load-balancing/docs/l7-internal)

## Supporting Pages

### "External Application Load Balancer overview \_|\_ Cloud Load Balancing \_\

- URL: [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https)
- Source ID: `site-docs-reference-required-3`
- Final score: 186
- Re-rank relevance: N/A

Evidence snippets:
- Configured on the backend service or backend bucket Regional external Application Load Balancer Regional HTTP , Regional HTTPS X-Forwarded-Proto : [http https] (requests only) Via: 1.1 google (requests and responses) X-Forwarded-For : [<supplied-value>,]<client-ip>,<load-balancer-ip> (see X-Forwarded-For header ) (requests only) Configured in the URL map Note: In accordance with RFC 2616 , the following hop-by-hop headers aren't propagated by the target proxy: Connection , Keep-Alive , Proxy-Authenticate , Proxy-Authorization , TE , Trailers , Transfer-Encoding , and Upgrade .
- Load balancer mode Target proxy types Proxy-added headers Custom headers supported Global external Application Load Balancer Global HTTP , Global HTTPS The proxies set HTTP request/response headers as follows: Via: 1.1 google (requests and responses) X-Forwarded-Proto : [http https] (requests only) X-Forwarded-For : [<supplied-value>,]<client-ip>,<load-balancer-ip> (see X-Forwarded-For header ) (requests only) The proxies also set the X-Cloud-Trace-Context header if it is not already present.
- Configured on the backend service or backend bucket Not supported with Cloud CDN Classic Application Load Balancer Global HTTP , Global HTTPS The proxies set HTTP request/response headers as follows: Via: 1.1 google (requests and responses) X-Forwarded-Proto : [http https] (requests only) X-Forwarded-For : [<supplied-value>,]<client-ip>,<load-balancer-ip> (see X-Forwarded-For header ) (requests only) The proxies also set the X-Cloud-Trace-Context header if it is not already present.
- In the Premium Network Service Tier , this load balancer offers multi-region load balancing, attempts to direct traffic to the closest healthy backend that has capacity, and terminates HTTP(S) traffic as close as possible to your users.

### Cloud Load Balancing overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/load-balancing/docs/load-balancing-overview](https://docs.cloud.google.com/load-balancing/docs/load-balancing-overview)
- Source ID: `site-docs-root`
- Final score: 180
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloud Load Balancing supports features such as IPv6 load balancing, source IP-based traffic steering , weighted load balancing , WebSockets, user-defined request headers, and protocol forwarding for private virtual IP addresses (VIPs).
- Use Layer 7-based load balancing to add request routing decisions based on attributes, such as the HTTP header and the uniform resource identifier.
- Load balancer Deployment mode Traffic type Network service tier Load-balancing scheme 1 Application Load Balancers Global external HTTP or HTTPS Premium Tier EXTERNAL MANAGED Regional external HTTP or HTTPS Premium or Standard Tier EXTERNAL MANAGED Classic HTTP or HTTPS Global in Premium Tier Regional in Standard Tier EXTERNAL 2 Regional internal 3 HTTP or HTTPS Premium Tier INTERNAL MANAGED Cross-region internal HTTP or HTTPS Premium Tier INTERNAL MANAGED Proxy Network Load Balancers Global external TCP with optional SSL offload Premium Tier EXTERNAL MANAGED Regional external TCP Premium or Standard Tier EXTERNAL MANAGED Classic TCP with optional SSL offload Global in Premium Tier Regional in Standard Tier EXTERNAL Regional internal 3 TCP without SSL offload Premium Tier INTERNAL MANAGED Cross-region internal TCP without SSL offload Premium Tier INTERNAL MANAGED Passthrough Network Load Balancers External Always regional TCP, UDP, ESP, GRE, ICMP, and ICMPv6 Premium or Standard Tier EXTERNAL Internal 3 Always regional TCP, UDP, ICMP, ICMPv6, SCTP, ESP, AH, and GRE Premium Tier INTERNAL 1 The load-balancing scheme is an attribute on the forwarding rule and the backend service of a load balancer and indicates whether the load balancer can be used for internal or external traffic.
- The following table provides a high-level overview of the different types of Google Cloud load balancers categorized by the OSI layer on which they operate and whether they are used for external or internal access. lan Cloud Load Balancing External (Accepts internet traffic) Internal (Accepts internal Google Cloud traffic) Application Load Balancers HTTPS Layer 7 load balancing global external regional external classic cross-region internal regional internal Network Load Balancers TCP/SSL/Other Layer 4 load balancing Proxy Network Load Balancers global external regional external classic cross-region internal regional internal Passthrough Network Load Balancers regional external regional internal Application Load Balancers Application Load Balancers are proxy-based Layer 7 load balancers that enable you to run and scale your services behind an anycast IP address.

### "Internal Application Load Balancer overview \_|\_ Cloud Load Balancing \_\

- URL: [https://docs.cloud.google.com/load-balancing/docs/l7-internal](https://docs.cloud.google.com/load-balancing/docs/l7-internal)
- Source ID: `site-docs-root`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- For serverless NEGs on a backend service: 60 minutes For all other backend types on a backend service: 30 seconds Client HTTP keepalive timeout The maximum amount of time that the TCP connection between a client and the load balancer's managed Envoy proxy can be idle. (The same TCP connection might be used for multiple HTTP requests.) 610 seconds Backend HTTP keepalive timeout The maximum amount of time that the TCP connection between the load balancer's managed Envoy proxy and a backend can be idle. (The same TCP connection might be used for multiple HTTP requests.) 10 minutes (600 seconds) Backend service timeout The configurable backend service timeout represents the maximum amount of time that the load balancer waits for your backend to process an HTTP request and return the corresponding HTTP response.
- Backend service scope The following table indicates which backend service resource and scope is used by internal Application Load Balancers: Load balancer mode Backend service resource Cross-region internal Application Load Balancer backendServices Regional internal Application Load Balancer regionBackendServices Protocol to the backends Backend services for Application Load Balancers must use one of the following protocols to send requests to backends: HTTP, which uses HTTP/1.1 and no TLS HTTPS, which uses HTTP/1.1 and TLS HTTP/2, which uses HTTP/2 and TLS (HTTP/2 without encryption isn't supported.) H2C, which uses HTTP/2 over TCP.
- Table: Supported session affinity settings Product Session affinity options Cross-region internal Application Load Balancer Regional internal Application Load Balancer None ( NONE ) Client IP ( CLIENT IP ) Generated cookie ( GENERATED COOKIE ) Header field ( HEADER FIELD ) HTTP cookie ( HTTP COOKIE ) Stateful cookie-based affinity ( STRONG COOKIE AFFINITY ) Also note: The effective default value of the load balancing locality policy ( localityLbPolicy ) changes according to your session affinity settings.
- Cookie-based session affinity Cookie-based session affinity can be of the following types: Generated cookie affinity HTTP cookie affinity Stateful cookie-based session affinity Generated cookie affinity When you use generated cookie-based affinity ( GENERATED COOKIE ), the load balancer includes an HTTP cookie in the Set-Cookie header in response to the initial HTTP request.

