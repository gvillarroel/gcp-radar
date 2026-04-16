---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:54:57.763Z"
product_name: "Cloud Load Balancing"
product_slug: "cloud-load-balancing"
feature_name: "IPv6 static routes with next-hop internal passthrough Network Load Balancer"
feature_slug: "ipv6-static-routes-with-next-hop-internal-passthrough-network-load-balancer"
latest_feature_date: "2024-10-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/load-balancing/docs/internal"
  - "https://docs.cloud.google.com/load-balancing/docs/network"
  - "https://docs.cloud.google.com/load-balancing/docs/tcp/internal-proxy"
keywords:
  - "ipv6"
  - "static"
  - "routes"
  - "next"
  - "hop"
  - "internal"
  - "passthrough"
  - "network"
---

# IPv6 static routes with next-hop internal passthrough Network Load Balancer

Product: Cloud Load Balancing
Coverage: MEDIUM

## Step 02 Summary

Google Cloud supports IPv6 static routes that use an internal passthrough Network Load Balancer as the next hop.

## Extended Definition

Google Cloud supports IPv6 static routes that use an internal passthrough Network Load Balancer as the next hop.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/load-balancing/docs/internal](https://docs.cloud.google.com/load-balancing/docs/internal)
- [https://docs.cloud.google.com/load-balancing/docs/network](https://docs.cloud.google.com/load-balancing/docs/network)
- [https://docs.cloud.google.com/load-balancing/docs/tcp/internal-proxy](https://docs.cloud.google.com/load-balancing/docs/tcp/internal-proxy)

## Supporting Pages

### "Internal passthrough Network Load Balancer overview \_|\_ Cloud Load Balancing\

- URL: [https://docs.cloud.google.com/load-balancing/docs/internal](https://docs.cloud.google.com/load-balancing/docs/internal)
- Source ID: `site-docs-reference-required-4`
- Final score: 226
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following table summarizes how to use these settings for different protocols: Traffic to be load-balanced Forwarding rule protocol Backend service protocol TCP (IPv4 or IPv6) TCP TCP or UNSPECIFIED UDP (IPv4 or IPv6) UDP UDP or UNSPECIFIED TCP, UDP, ICMP, ICMPv6, SCTP, ESP, AH, and GRE L3 DEFAULT UNSPECIFIED Forwarding rules and global access An internal passthrough Network Load Balancer's forwarding rules are regional, even when global access is enabled.
- An internal passthrough Network Load Balancer doesn't support the following: Backend VMs in multiple regions Balancing traffic that originates from the internet, unless you're using it with an external load balancer IPv6 packets with fragmented headers Internal IP address Internal passthrough Network Load Balancers support IPv4-only, dual-stack, and IPv6-only subnets.
- Firewall configuration Internal passthrough Network Load Balancers require the following configuration for hierarchical firewall policies and VPC firewall rules: Allow ingress from IPv4 or IPv6 health check source ranges .
- Instead, an internal passthrough Network Load Balancer routes connections directly from clients to eligible backends, without a proxy between the clients and backends.

### "Backend service-based regional external passthrough Network Load Balancer\

- URL: [https://docs.cloud.google.com/load-balancing/docs/network](https://docs.cloud.google.com/load-balancing/docs/network)
- Source ID: `site-docs-root`
- Final score: 196
- Re-rank relevance: N/A

Evidence snippets:
- What's next To configure a regional external passthrough Network Load Balancer with a backend service for TCP or UDP traffic only (supporting IPv4 and IPv6 traffic), see Set up a regional external passthrough Network Load Balancer with a backend service .
- For Dynamic NICs, you must manually add local routes for forwarding rule IP addresses as described in the following known issue: Dropped packets when using Dynamic NICs with alias IP ranges, protocol forwarding, or Passthrough Network Load Balancers .
- To configure a regional external passthrough Network Load Balancer for multiple IP protocols (supporting IPv4 and IPv6 traffic), see Set up a regional external passthrough Network Load Balancer for multiple IP protocols .
- Return path Regional external passthrough Network Load Balancers use special routes outside of your VPC network to direct incoming requests and health check probes to each backend VM.

### "Internal proxy Network Load Balancer overview \_|\_ Cloud Load Balancing\

- URL: [https://docs.cloud.google.com/load-balancing/docs/tcp/internal-proxy](https://docs.cloud.google.com/load-balancing/docs/tcp/internal-proxy)
- Source ID: `site-docs-root`
- Final score: 186
- Re-rank relevance: N/A

Evidence snippets:
- What's next Set up a cross-region internal Application Load Balancer with VM instance group backends Set up a cross-region internal Application Load Balancer with hybrid connectivity Set up a regional internal proxy Network Load Balancer with an instance group backend Set up a regional internal proxy Network Load Balancer with a zonal NEG backend Set up a regional internal proxy Network Load Balancer with a hybrid NEG backend Set up a regional internal proxy Network Load Balancer with an internet NEG backend View metrics with Cloud Monitoring Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- The following table shows the target proxy APIs required by internal proxy Network Load Balancers: Load balancer mode Target proxy Reference Regional internal proxy Network Load Balancer Regional regionTargetTcpProxies Target proxy references either a single backend service or one or more TLS routes.
- The following table shows the TLS routes APIs required by internal proxy Network Load Balancers: Load balancer mode TLS route Reference Regional internal proxy Network Load Balancer Regional tlsRoutes Each TLS route can reference one or more backend services.
- Cross-region internal proxy Network Load Balancer Global targetTcpProxies Target proxy references either a single backend service or one or more TLS routes.

