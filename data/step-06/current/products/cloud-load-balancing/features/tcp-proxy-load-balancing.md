---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:54:57.801Z"
product_name: "Cloud Load Balancing"
product_slug: "cloud-load-balancing"
feature_name: "TCP Proxy Load Balancing"
feature_slug: "tcp-proxy-load-balancing"
latest_feature_date: "2017-06-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/load-balancing/docs/choosing-load-balancer"
  - "https://docs.cloud.google.com/load-balancing/docs/tcp/internal-proxy"
  - "https://docs.cloud.google.com/load-balancing/docs/tcp"
keywords:
  - "tcp"
  - "proxy"
  - "load"
  - "balancing"
  - "provides"
  - "managed"
  - "based"
  - "traffic"
---

# TCP Proxy Load Balancing

Product: Cloud Load Balancing
Coverage: MEDIUM

## Step 02 Summary

TCP Proxy Load Balancing provides managed proxy-based load balancing for TCP traffic; TCP Proxy Load Balancing provides proxy-based load balancing for TCP traffic.

## Extended Definition

TCP Proxy Load Balancing provides managed proxy-based load balancing for TCP traffic; TCP Proxy Load Balancing provides proxy-based load balancing for TCP traffic.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/load-balancing/docs/choosing-load-balancer](https://docs.cloud.google.com/load-balancing/docs/choosing-load-balancer)
- [https://docs.cloud.google.com/load-balancing/docs/tcp/internal-proxy](https://docs.cloud.google.com/load-balancing/docs/tcp/internal-proxy)
- [https://docs.cloud.google.com/load-balancing/docs/tcp](https://docs.cloud.google.com/load-balancing/docs/tcp)

## Supporting Pages

### "Internal proxy Network Load Balancer overview \_|\_ Cloud Load Balancing\

- URL: [https://docs.cloud.google.com/load-balancing/docs/tcp/internal-proxy](https://docs.cloud.google.com/load-balancing/docs/tcp/internal-proxy)
- Source ID: `site-docs-root`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- The following table shows the forwarding rule requirements for internal proxy Network Load Balancers: Load balancer mode Forwarding rule, IP address, and proxy-only subnet --purpose Routing from the client to the load balancer's frontend Regional internal proxy Network Load Balancer Regional forwardingRules Regional IP address Load balancing scheme: INTERNAL MANAGED Proxy-only subnet --purpose : REGIONAL MANAGED PROXY IP address --purpose : SHARED LOADBALANCER VIP You can enable global access to allow clients from any region to access your load balancer.
- The following table describes proxy-only subnet requirements for internal proxy Network Load Balancers: Load balancer mode Value of the proxy-only subnet --purpose flag Regional internal proxy Network Load Balancer REGIONAL MANAGED PROXY Regional and cross-region load balancers cannot share the same subnets All the regional Envoy-based load balancers in a region and VPC network share the same proxy-only subnet.
- Cross-region internal proxy Network Load Balancer Global globalForwardingRules Regional IP addresses Load balancing scheme: INTERNAL MANAGED Proxy-only subnet --purpose : GLOBAL MANAGED PROXY IP address --purpose : SHARED LOADBALANCER VIP Global access is enabled by default to allow clients from any region to access your load balancer.
- Traffic distribution An internal proxy Network Load Balancer distributes traffic to its backends as follows: Connections originating from a single client are sent to the same zone as long as healthy backends (instance groups or NEGs) within that zone are available and have capacity, as determined by the balancing mode .

### Choose a load balancer \_|\_ Cloud Load Balancing \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/load-balancing/docs/choosing-load-balancer](https://docs.cloud.google.com/load-balancing/docs/choosing-load-balancer)
- Source ID: `site-docs-reference-required-3`
- Final score: 144
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Load balancer Deployment mode Traffic type Network service tier Load-balancing scheme 1 Application Load Balancers Global external HTTP or HTTPS Premium Tier EXTERNAL MANAGED Regional external HTTP or HTTPS Premium or Standard Tier EXTERNAL MANAGED Classic HTTP or HTTPS Global in Premium Tier Regional in Standard Tier EXTERNAL 2 Regional internal 3 HTTP or HTTPS Premium Tier INTERNAL MANAGED Cross-region internal HTTP or HTTPS Premium Tier INTERNAL MANAGED Proxy Network Load Balancers Global external TCP with optional SSL offload Premium Tier EXTERNAL MANAGED Regional external TCP Premium or Standard Tier EXTERNAL MANAGED Classic TCP with optional SSL offload Global in Premium Tier Regional in Standard Tier EXTERNAL Regional internal 3 TCP without SSL offload Premium Tier INTERNAL MANAGED Cross-region internal TCP without SSL offload Premium Tier INTERNAL MANAGED Passthrough Network Load Balancers External Always regional TCP, UDP, ESP, GRE, ICMP, and ICMPv6 Premium or Standard Tier EXTERNAL Internal 3 Always regional TCP, UDP, ICMP, ICMPv6, SCTP, ESP, AH, and GRE Premium Tier INTERNAL 1 The load-balancing scheme is an attribute on the forwarding rule and the backend service of a load balancer and indicates whether the load balancer can be used for internal or external traffic.
- Load balancing aspects To decide which load balancer best suits your implementation of Google Cloud, consider the following aspects of Cloud Load Balancing: Traffic type External versus internal load balancing Global versus regional load balancing Premium versus Standard Network Service Tiers Proxy versus passthrough load balancing Traffic type The type of traffic that you need your load balancer to handle is another factor in determining which load balancer to use.
- Proxy Network Load Balancers TCP with optional SSL offload External versus internal load balancing Google Cloud load balancers can be deployed as external or internal load balancers: External load balancers distribute traffic that comes from the internet to your Google Cloud Virtual Private Cloud (VPC) network.
- Proxy versus passthrough load balancing Depending on the type of traffic you need the load balancer to handle, and whether your clients are internal or external , you might have the option to choose between either a proxy load balancer or a passthrough load balancer.

### "External proxy Network Load Balancer overview \_|\_ Cloud Load Balancing\

- URL: [https://docs.cloud.google.com/load-balancing/docs/tcp](https://docs.cloud.google.com/load-balancing/docs/tcp)
- Source ID: `site-docs-root`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- Regional external proxy Network Load Balancer For regional external proxy Network Load Balancers, traffic distribution is based on the load balancing mode and the load balancing locality policy.
- Global external proxy Network Load Balancer For the global external proxy Network Load Balancer, traffic distribution is based on the load balancing mode and the load balancing locality policy.
- Load balancer mode Load balancing scheme Forwarding rule Network tier Classic proxy Network Load Balancer EXTERNAL Global Standard or Premium Global external proxy Network Load Balancer EXTERNAL MANAGED Global Premium Regional external proxy Network Load Balancer EXTERNAL MANAGED Regional Standard or Premium Important: After you create a load balancer, you can't edit its mode.
- For more information, see the following: Balancing modes Load balancing locality policy (regional backend service API documentation) SNI-based routing with TLS routes Note: SNI-based routing is supported only for regional external proxy Network Load Balancers.

