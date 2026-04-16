---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:54:57.761Z"
product_name: "Cloud Load Balancing"
product_slug: "cloud-load-balancing"
feature_name: "Dual-stack backends for Application and proxy Network Load Balancers"
feature_slug: "dual-stack-backends-for-application-and-proxy-network-load-balancers"
latest_feature_date: "2024-11-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/load-balancing/docs/internal"
  - "https://docs.cloud.google.com/load-balancing/docs/tcp"
  - "https://docs.cloud.google.com/load-balancing/docs/tcp/internal-proxy"
keywords:
  - "dual"
  - "stack"
  - "backends"
  - "application"
  - "proxy"
  - "network"
  - "load"
  - "balancers"
---

# Dual-stack backends for Application and proxy Network Load Balancers

Product: Cloud Load Balancing
Coverage: MEDIUM

## Step 02 Summary

Supported Application Load Balancers and proxy Network Load Balancers can use dual-stack IPv4 and IPv6 backends and be converted from IPv4-only deployments.

## Extended Definition

Supported Application Load Balancers and proxy Network Load Balancers can use dual-stack IPv4 and IPv6 backends and be converted from IPv4-only deployments.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/load-balancing/docs/internal](https://docs.cloud.google.com/load-balancing/docs/internal)
- [https://docs.cloud.google.com/load-balancing/docs/tcp](https://docs.cloud.google.com/load-balancing/docs/tcp)
- [https://docs.cloud.google.com/load-balancing/docs/tcp/internal-proxy](https://docs.cloud.google.com/load-balancing/docs/tcp/internal-proxy)

## Supporting Pages

### "Internal passthrough Network Load Balancer overview \_|\_ Cloud Load Balancing\

- URL: [https://docs.cloud.google.com/load-balancing/docs/internal](https://docs.cloud.google.com/load-balancing/docs/internal)
- Source ID: `site-docs-reference-required-4`
- Final score: 206
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- An internal passthrough Network Load Balancer doesn't support the following: Backend VMs in multiple regions Balancing traffic that originates from the internet, unless you're using it with an external load balancer IPv6 packets with fragmented headers Internal IP address Internal passthrough Network Load Balancers support IPv4-only, dual-stack, and IPv6-only subnets.
- Dual-stack backends (IPv4 and IPv6) If you want the load balancer to use dual-stack backends that handle both IPv4 and IPv6 traffic, note the following requirements: Backends must be configured in dual-stack subnets that are in the same region as the load balancer's IPv6 forwarding rule.
- If you want the load balancer to handle both IPv4 and IPv6 traffic, create two forwarding rules: one rule for IPv4 traffic that points to IPv4 (or dual-stack) backends, and one rule for IPv6 traffic that points only to dual-stack backends.
- Instead, an internal passthrough Network Load Balancer routes connections directly from clients to eligible backends, without a proxy between the clients and backends.

### "External proxy Network Load Balancer overview \_|\_ Cloud Load Balancing\

- URL: [https://docs.cloud.google.com/load-balancing/docs/tcp](https://docs.cloud.google.com/load-balancing/docs/tcp)
- Source ID: `site-docs-root`
- Final score: 202
- Re-rank relevance: N/A

Evidence snippets:
- Load balancer mode Supported backends on a backend service Instance groups Zonal NEGs Internet NEGs Serverless NEGs Hybrid NEGs Private Service Connect NEGs GKE Classic proxy Network Load Balancer Use standalone zonal NEGs Global external proxy Network Load Balancer GCE VM IP PORT type endpoints Regional external proxy Network Load Balancer GCE VM IP PORT type endpoints Regional NEGs only Add a Private Service Connect NEG Global external proxy Network Load Balancers support IPv4 and IPv6 (dual stack) instance groups and zonal NEG backends with GCE VM IP PORT endpoints.
- Failover Failover for external proxy Network Load Balancers works as follows: If a backend becomes unhealthy, traffic is automatically redirected to healthy backends within the same region.
- Firewall rules The following firewall rules are required: For classic proxy Network Load Balancers, an ingress allow firewall rule to permit traffic from GFEs to reach your backends.
- Note: Although external proxy Network Load Balancers can support HTTPS traffic, you should use an external Application Load Balancer for HTTPS traffic instead.

### "Internal proxy Network Load Balancer overview \_|\_ Cloud Load Balancing\

- URL: [https://docs.cloud.google.com/load-balancing/docs/tcp/internal-proxy](https://docs.cloud.google.com/load-balancing/docs/tcp/internal-proxy)
- Source ID: `site-docs-root`
- Final score: 200
- Re-rank relevance: N/A

Evidence snippets:
- The following table specifies the backend service APIs for internal proxy Network Load Balancers: Load balancer mode Backend service type Regional internal proxy Network Load Balancer Regional regionBackendServices Cross-region internal proxy Network Load Balancer Global backendServices Supported backends The internal proxy Network Load Balancer supports the following types of backends: Load balancer mode Supported backends on a backend service Instance groups Zonal NEGs Internet NEGs Serverless NEGs Hybrid NEGs Private Service Connect NEGs GKE Regional internal proxy Network Load Balancer GCE VM IP PORT type endpoints Regional NEGs only Add a Private Service Connect NEG Cross-region internal proxy Network Load Balancer GCE VM IP PORT type endpoints Add a Private Service Connect NEG All of the backends must be of the same type (instance groups or NEGs).
- What's next Set up a cross-region internal Application Load Balancer with VM instance group backends Set up a cross-region internal Application Load Balancer with hybrid connectivity Set up a regional internal proxy Network Load Balancer with an instance group backend Set up a regional internal proxy Network Load Balancer with a zonal NEG backend Set up a regional internal proxy Network Load Balancer with a hybrid NEG backend Set up a regional internal proxy Network Load Balancer with an internet NEG backend View metrics with Cloud Monitoring Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- The following table describes the failover behavior for internal proxy Network Load Balancers: Load balancer mode Failover behavior Behavior when all backends are unhealthy Regional internal proxy Network Load Balancer The load balancer implements a gentle failover algorithm per zone.
- For regional internal proxy Network Load Balancers, the balancing mode can be CONNECTION (instance group or NEG backends) or UTILIZATION (instance group backends only).

