---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:54:57.796Z"
product_name: "Cloud Load Balancing"
product_slug: "cloud-load-balancing"
feature_name: "HTTP/2 to backends"
feature_slug: "http-2-to-backends"
latest_feature_date: "2019-07-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/load-balancing/docs/backend-service"
  - "https://docs.cloud.google.com/load-balancing/docs/choosing-load-balancer"
  - "https://docs.cloud.google.com/load-balancing/docs/https"
keywords:
  - "http"
  - "backends"
  - "load"
  - "balancers"
  - "connections"
  - "between"
  - "balancer"
  - "backend"
---

# HTTP/2 to backends

Product: Cloud Load Balancing
Coverage: MEDIUM

## Step 02 Summary

HTTP(S) load balancers support HTTP/2 connections between the load balancer and backend services.

## Extended Definition

HTTP(S) load balancers support HTTP/2 connections between the load balancer and backend services.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/load-balancing/docs/backend-service](https://docs.cloud.google.com/load-balancing/docs/backend-service)
- [https://docs.cloud.google.com/load-balancing/docs/choosing-load-balancer](https://docs.cloud.google.com/load-balancing/docs/choosing-load-balancer)
- [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https)

## Supporting Pages

### "Backend services overview \_|\_ Cloud Load Balancing \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/load-balancing/docs/backend-service](https://docs.cloud.google.com/load-balancing/docs/backend-service)
- Source ID: `site-docs-reference-required-3`
- Final score: 224
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information about how passthrough Network Load Balancers distribute new connections, see the following: Traffic distribution for internal passthrough Network Load Balancers Traffic distribution for regional external passthrough Network Load Balancers Supported backends For Application Load Balancers, Cloud Service Mesh, and proxy Network Load Balancers, the following types of backends support the balancing mode, target capacity, and capacity scaler parameters: Instance group backends Zonal NEGs with GCE VM IP PORT endpoints Zonal hybrid connectivity NEGs Internet NEGs, serverless NEGs, and Private Service Connect NEGs don't support the balancing mode, target capacity, and capacity scaler parameters.
- Application Load Balancers (except classic Application Load Balancers) and Cloud Service Mesh backends with a long traffic duration setting can use the IN FLIGHT balancing mode with one of the following required target capacity parameters: Table : Target capacity parameters for the IN FLIGHT balancing mode Target capacity parameter Supported backend Zonal (managed or unmanaged) instance groups Regional managed instance groups Zonal NEGs with GCE VM IP PORT endpoints Zonal hybrid connectivity NEGs max-in-flight-requests Target number of in-progress HTTP requests per backend zone max-in-flight-requests-per-instance Target number of in-progress HTTP requests per VM instance.
- Passthrough Network Load Balancer TCP, UDP, or UNSPECIFIED Cloud Service Mesh HTTP, HTTPS, HTTP/2, gRPC, TCP Changing a backend service's protocol makes the backends inaccessible through load balancers for a few minutes.
- Table: Protocol to the backends Product Backend service protocol options Application Load Balancer HTTP, HTTPS, HTTP/2 Proxy Network Load Balancer TCP or SSL The regional proxy Network Load Balancers support only TCP.

### Choose a load balancer \_|\_ Cloud Load Balancing \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/load-balancing/docs/choosing-load-balancer](https://docs.cloud.google.com/load-balancing/docs/choosing-load-balancer)
- Source ID: `site-docs-reference-required-3`
- Final score: 218
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Proxy load balancers terminate incoming client connections at the load balancer and then open new connections from the load balancer to the backends.
- Note: Proxy-based load balancers send connections to the backends from different GFE or Envoy IP addresses.
- Load balancer Deployment mode Traffic type Network service tier Load-balancing scheme 1 Application Load Balancers Global external HTTP or HTTPS Premium Tier EXTERNAL MANAGED Regional external HTTP or HTTPS Premium or Standard Tier EXTERNAL MANAGED Classic HTTP or HTTPS Global in Premium Tier Regional in Standard Tier EXTERNAL 2 Regional internal 3 HTTP or HTTPS Premium Tier INTERNAL MANAGED Cross-region internal HTTP or HTTPS Premium Tier INTERNAL MANAGED Proxy Network Load Balancers Global external TCP with optional SSL offload Premium Tier EXTERNAL MANAGED Regional external TCP Premium or Standard Tier EXTERNAL MANAGED Classic TCP with optional SSL offload Global in Premium Tier Regional in Standard Tier EXTERNAL Regional internal 3 TCP without SSL offload Premium Tier INTERNAL MANAGED Cross-region internal TCP without SSL offload Premium Tier INTERNAL MANAGED Passthrough Network Load Balancers External Always regional TCP, UDP, ESP, GRE, ICMP, and ICMPv6 Premium or Standard Tier EXTERNAL Internal 3 Always regional TCP, UDP, ICMP, ICMPv6, SCTP, ESP, AH, and GRE Premium Tier INTERNAL 1 The load-balancing scheme is an attribute on the forwarding rule and the backend service of a load balancer and indicates whether the load balancer can be used for internal or external traffic.
- Such load balancers can also distribute traffic to backends across multiple regions, making them suitable when your application or content is distributed across multiple regions, or when you want the flexibility to add multi-region backends as your application grows to new geographies.

### "External Application Load Balancer overview \_|\_ Cloud Load Balancing \_\

- URL: [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https)
- Source ID: `site-docs-reference-required-3`
- Final score: 216
- Re-rank relevance: N/A

Evidence snippets:
- There are 2 modes of HTTP/2 support: HTTP/2 over TLS Cleartext HTTP/2 over TCP HTTP/2 over TLS HTTP/2 over TLS is supported for connections between clients and the external Application Load Balancer, and for connections between the load balancer and its backends.
- Additionally, you must make sure that the backends can handle TLS traffic and configure the load balancer to use HTTP/2 for encrypted connections between the load balancer and its backends by setting the backend service protocol to HTTP2 .
- Additionally, you configure the load balancer to use HTTP/2 for unencrypted connections between the load balancer and its backends by setting the backend service protocol to H2C .
- HTTP/3 is supported for connections between clients and the load balancer, not connections between the load balancer and its backends.

