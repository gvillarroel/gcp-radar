---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:54:57.671Z"
product_name: "Cloud Load Balancing"
product_slug: "cloud-load-balancing"
feature_name: "SNI-based routing for proxy Network Load Balancers"
feature_slug: "sni-based-routing-for-proxy-network-load-balancers"
latest_feature_date: "2026-03-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/load-balancing/docs/tcp/internal-proxy"
  - "https://docs.cloud.google.com/load-balancing/docs/tcp"
  - "https://docs.cloud.google.com/load-balancing/docs/network/udp-with-network-load-balancing"
keywords:
  - "sni"
  - "based"
  - "routing"
  - "proxy"
  - "network"
  - "load"
  - "balancers"
  - "can"
---

# SNI-based routing for proxy Network Load Balancers

Product: Cloud Load Balancing
Coverage: MEDIUM

## Step 02 Summary

Proxy Network Load Balancers can route TLS traffic by SNI hostname using TLSRoute without terminating the TLS connection.

## Extended Definition

Proxy Network Load Balancers can route TLS traffic by SNI hostname using TLSRoute without terminating the TLS connection.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/load-balancing/docs/tcp/internal-proxy](https://docs.cloud.google.com/load-balancing/docs/tcp/internal-proxy)
- [https://docs.cloud.google.com/load-balancing/docs/tcp](https://docs.cloud.google.com/load-balancing/docs/tcp)
- [https://docs.cloud.google.com/load-balancing/docs/network/udp-with-network-load-balancing](https://docs.cloud.google.com/load-balancing/docs/network/udp-with-network-load-balancing)

## Supporting Pages

### "Internal proxy Network Load Balancer overview \_|\_ Cloud Load Balancing\

- URL: [https://docs.cloud.google.com/load-balancing/docs/tcp/internal-proxy](https://docs.cloud.google.com/load-balancing/docs/tcp/internal-proxy)
- Source ID: `site-docs-root`
- Final score: 191
- Re-rank relevance: N/A

Evidence snippets:
- SNI-based routing lets your TCP proxy Network Load Balancers route traffic to specific backend services based on the Server Name Indication (SNI) hostname provided during the TLS handshake.
- The following table shows the forwarding rule requirements for internal proxy Network Load Balancers: Load balancer mode Forwarding rule, IP address, and proxy-only subnet --purpose Routing from the client to the load balancer's frontend Regional internal proxy Network Load Balancer Regional forwardingRules Regional IP address Load balancing scheme: INTERNAL MANAGED Proxy-only subnet --purpose : REGIONAL MANAGED PROXY IP address --purpose : SHARED LOADBALANCER VIP You can enable global access to allow clients from any region to access your load balancer.
- The following table describes proxy-only subnet requirements for internal proxy Network Load Balancers: Load balancer mode Value of the proxy-only subnet --purpose flag Regional internal proxy Network Load Balancer REGIONAL MANAGED PROXY Regional and cross-region load balancers cannot share the same subnets All the regional Envoy-based load balancers in a region and VPC network share the same proxy-only subnet.
- Cross-region internal proxy Network Load Balancer GLOBAL MANAGED PROXY Regional and cross-region load balancers cannot share the same subnets The cross-region Envoy-based load balancer must have a proxy-only subnet in each region in which the load balancer is configured.

### "External proxy Network Load Balancer overview \_|\_ Cloud Load Balancing\

- URL: [https://docs.cloud.google.com/load-balancing/docs/tcp](https://docs.cloud.google.com/load-balancing/docs/tcp)
- Source ID: `site-docs-root`
- Final score: 181
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see the following: Balancing modes Load balancing locality policy (regional backend service API documentation) SNI-based routing with TLS routes Note: SNI-based routing is supported only for regional external proxy Network Load Balancers.
- SNI-based routing lets your TCP proxy Network Load Balancers route traffic to specific backend services based on the Server Name Indication (SNI) hostname provided during the TLS handshake.
- The following limitations apply only to classic proxy Network Load Balancers and global external proxy Network Load Balancer that are deployed with an SSL target proxy: Classic proxy Network Load Balancers and global external proxy Network Load Balancers do not support client certificate-based authentication, also known as mutual TLS authentication.
- Connection 2, from the load balancer (proxy-only subnet) to the backend VM or endpoint: Source IP address : an IP address in the proxy-only subnet that is shared among all the Envoy-based load balancers deployed in the same region and network as the load balancer.

### "Use UDP with regional external passthrough Network Load Balancers \_|\_\

- URL: [https://docs.cloud.google.com/load-balancing/docs/network/udp-with-network-load-balancing](https://docs.cloud.google.com/load-balancing/docs/network/udp-with-network-load-balancing)
- Source ID: `site-docs-root`
- Final score: 177
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Networking Load Balancing Guides Send feedback Use UDP with regional external passthrough Network Load Balancers Stay organized with collections Save and categorize content based on your preferences.
- Like TCP-based apps, UDP-based apps can also benefit from a load balancer, which is why regional external passthrough Network Load Balancers are used in UDP scenarios.
- On each Linux virtual machine (VM) running on Compute Engine that is a backend of a Google Cloud regional external passthrough Network Load Balancer, an entry in the local routing table routes traffic that's destined for the load balancer's IP address to the network interface controller (NIC).
- Regional external passthrough Network Load Balancer Regional external passthrough Network Load Balancers are passthrough load balancers; they process incoming packets and deliver them to backend servers with the packets intact.

