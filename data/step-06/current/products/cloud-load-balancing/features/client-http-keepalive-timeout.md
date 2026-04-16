---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:54:57.767Z"
product_name: "Cloud Load Balancing"
product_slug: "cloud-load-balancing"
feature_name: "Client HTTP keepalive timeout"
feature_slug: "client-http-keepalive-timeout"
latest_feature_date: "2024-09-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/load-balancing/docs/l7-internal"
  - "https://docs.cloud.google.com/load-balancing/docs/target-proxies"
  - "https://docs.cloud.google.com/load-balancing/docs/https"
keywords:
  - "client"
  - "http"
  - "keepalive"
  - "timeout"
  - "regional"
  - "cross"
  - "region"
  - "application"
---

# Client HTTP keepalive timeout

Product: Cloud Load Balancing
Coverage: MEDIUM

## Step 02 Summary

Supported regional and cross-region Application Load Balancers let you configure the maximum idle time for downstream client HTTP connections; Global external Application Load Balancers support a configurable client HTTP keepalive timeout for downstream client connections.

## Extended Definition

Supported regional and cross-region Application Load Balancers let you configure the maximum idle time for downstream client HTTP connections; Global external Application Load Balancers support a configurable client HTTP keepalive timeout for downstream client connections.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/load-balancing/docs/l7-internal](https://docs.cloud.google.com/load-balancing/docs/l7-internal)
- [https://docs.cloud.google.com/load-balancing/docs/target-proxies](https://docs.cloud.google.com/load-balancing/docs/target-proxies)
- [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https)

## Supporting Pages

### "Internal Application Load Balancer overview \_|\_ Cloud Load Balancing \_\

- URL: [https://docs.cloud.google.com/load-balancing/docs/l7-internal](https://docs.cloud.google.com/load-balancing/docs/l7-internal)
- Source ID: `site-docs-root`
- Final score: 294
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Table: Supported session affinity settings Product Session affinity options Cross-region internal Application Load Balancer Regional internal Application Load Balancer None ( NONE ) Client IP ( CLIENT IP ) Generated cookie ( GENERATED COOKIE ) Header field ( HEADER FIELD ) HTTP cookie ( HTTP COOKIE ) Stateful cookie-based affinity ( STRONG COOKIE AFFINITY ) Also note: The effective default value of the load balancing locality policy ( localityLbPolicy ) changes according to your session affinity settings.
- Backend service scope The following table indicates which backend service resource and scope is used by internal Application Load Balancers: Load balancer mode Backend service resource Cross-region internal Application Load Balancer backendServices Regional internal Application Load Balancer regionBackendServices Protocol to the backends Backend services for Application Load Balancers must use one of the following protocols to send requests to backends: HTTP, which uses HTTP/1.1 and no TLS HTTPS, which uses HTTP/1.1 and TLS HTTP/2, which uses HTTP/2 and TLS (HTTP/2 without encryption isn't supported.) H2C, which uses HTTP/2 over TCP.
- The following table shows the target proxy APIs required by internal Application Load Balancers: Load balancer mode Target proxy Cross-region internal Application Load Balancer targetHttpProxies targetHttpsProxies Regional internal Application Load Balancer regionTargetHttpProxies regionTargetHttpsProxies SSL certificates Internal Application Load Balancers using target HTTPS proxies require private keys and SSL certificates as part of the load balancer configuration.
- Cross-region internal Application Load Balancer Forwarding rule globalForwardingRules.insert method Regional IP address addresses.insert method Load balancing scheme INTERNAL MANAGED IP address (optional) SHARED LOADBALANCER VIP Routing from the client to the load balancer's frontend Global access is enabled by default to allow clients from any region in a VPC to access your load balancer.

### "External Application Load Balancer overview \_|\_ Cloud Load Balancing \_\

- URL: [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https)
- Source ID: `site-docs-reference-required-3`
- Final score: 215
- Re-rank relevance: N/A

Evidence snippets:
- Configured on the backend service or backend bucket Regional external Application Load Balancer Regional HTTP , Regional HTTPS X-Forwarded-Proto : [http https] (requests only) Via: 1.1 google (requests and responses) X-Forwarded-For : [<supplied-value>,]<client-ip>,<load-balancer-ip> (see X-Forwarded-For header ) (requests only) Configured in the URL map Note: In accordance with RFC 2616 , the following hop-by-hop headers aren't propagated by the target proxy: Connection , Keep-Alive , Proxy-Authenticate , Proxy-Authorization , TE , Trailers , Transfer-Encoding , and Upgrade .
- Load balancer mode HTTP/3 support Global external Application Load Balancer (always Premium Tier) Classic Application Load Balancer in Premium Tier Classic Application Load Balancer in Standard Tier Regional external Application Load Balancer (Premium or Standard Tier) How HTTP/3 is negotiated When HTTP/3 is enabled, the load balancer advertises this support to clients, allowing clients that support HTTP/3 to attempt to establish HTTP/3 connections with the HTTPS load balancer.
- Backend service scope The following table indicates which backend service resource and scope is used by external Application Load Balancers: Load balancer mode Backend service resource Global external Application Load Balancer backendServices (global) Classic Application Load Balancer backendServices (global) Regional external Application Load Balancer regionBackendServices (regional) Protocol to the backends Backend services for Application Load Balancers must use one of the following protocols to send requests to backends: HTTP, which uses HTTP/1.1 and no TLS HTTPS, which uses HTTP/1.1 and TLS HTTP/2, which uses HTTP/2 and TLS (HTTP/2 without encryption isn't supported.) H2C, which uses HTTP/2 over TCP.
- Load balancer mode URL map type Global external Application Load Balancer Global Classic Application Load Balancer Global (with only a subset of the features supported ) Regional external Application Load Balancer Regional SSL certificates External Application Load Balancers using target HTTPS proxies require private keys and SSL certificates as part of the load balancer configuration.

### Target proxies overview \_|\_ Cloud Load Balancing \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/load-balancing/docs/target-proxies](https://docs.cloud.google.com/load-balancing/docs/target-proxies)
- Source ID: `site-docs-root`
- Final score: 210
- Re-rank relevance: N/A

Evidence snippets:
- SSL policies HTTP/3 support Client HTTP keepalive timeout Use target proxies If you're using the Google Cloud console to set up a load balancer, the target proxy is set up implicitly as part of your frontend configuration.
- Cross-region internal Application Load Balancer Target HTTP proxy Target HTTPS proxy Global Target proxy references a URL map.
- Regional external Application Load Balancer Target HTTP proxy Target HTTPS proxy Regional Target proxy references a URL map.
- Regional internal Application Load Balancer Target HTTP proxy Target HTTPS proxy Regional Target proxy references a URL map.

