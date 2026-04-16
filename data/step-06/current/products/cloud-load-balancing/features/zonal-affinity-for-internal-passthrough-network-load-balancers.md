---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:54:57.682Z"
product_name: "Cloud Load Balancing"
product_slug: "cloud-load-balancing"
feature_name: "Zonal affinity for internal passthrough Network Load Balancers"
feature_slug: "zonal-affinity-for-internal-passthrough-network-load-balancers"
latest_feature_date: "2025-07-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/load-balancing/docs/internal"
  - "https://docs.cloud.google.com/load-balancing/docs/network"
  - "https://docs.cloud.google.com/load-balancing/docs/tcp/internal-proxy"
keywords:
  - "zonal"
  - "affinity"
  - "internal"
  - "passthrough"
  - "network"
  - "load"
  - "balancers"
  - "prefer"
---

# Zonal affinity for internal passthrough Network Load Balancers

Product: Cloud Load Balancing
Coverage: MEDIUM

## Step 02 Summary

Internal passthrough Network Load Balancers support zonal affinity to prefer eligible backends in the same zone as the client.

## Extended Definition

Internal passthrough Network Load Balancers support zonal affinity to prefer eligible backends in the same zone as the client.

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
- Final score: 235
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Traffic distribution Internal passthrough Network Load Balancers support a variety of traffic distribution customization options, including session affinity, connection tracking, and failover.
- An internal passthrough Network Load Balancer doesn't support the following: Backend VMs in multiple regions Balancing traffic that originates from the internet, unless you're using it with an external load balancer IPv6 packets with fragmented headers Internal IP address Internal passthrough Network Load Balancers support IPv4-only, dual-stack, and IPv6-only subnets.
- You can use either instance groups or zonal NEGs, but not a combination of both, as backends for an internal passthrough Network Load Balancer: If you choose instance groups, you can use unmanaged instance groups, zonal managed instance groups, regional managed instance groups, or a combination of instance group types.
- Firewall configuration Internal passthrough Network Load Balancers require the following configuration for hierarchical firewall policies and VPC firewall rules: Allow ingress from IPv4 or IPv6 health check source ranges .

### "Backend service-based regional external passthrough Network Load Balancer\

- URL: [https://docs.cloud.google.com/load-balancing/docs/network](https://docs.cloud.google.com/load-balancing/docs/network)
- Source ID: `site-docs-root`
- Final score: 229
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Location of load balancing resources 1 Required location of IP address resource Host project Host project Service project Service project or host project 1 Includes the forwarding rule, backend service, health check, and backends (NEGs and managed or unmanaged instance groups) Traffic distribution Regional external passthrough Network Load Balancers support a variety of traffic distribution customization options, including session affinity, connection tracking, weighted load balancing, and failover.
- Backend service-based regional external passthrough Network Load Balancers support using zonal NEGs with GCE VM IP endpoints.
- To configure a regional external passthrough Network Load Balancer with a zonal NEG backend, see Set up a regional external passthrough Network Load Balancer with zonal NEGs To configure a regional external passthrough Network Load Balancer with a target pool , see Set up a regional external passthrough Network Load Balancer with a target pool .
- You can use either instance groups or zonal NEGs, but not a combination of both, as backends for a regional external passthrough Network Load Balancer: If you choose instance groups , you can use unmanaged instance groups, zonal managed instance groups, regional managed instance groups, or a combination of instance group types.

### "Internal proxy Network Load Balancer overview \_|\_ Cloud Load Balancing\

- URL: [https://docs.cloud.google.com/load-balancing/docs/tcp/internal-proxy](https://docs.cloud.google.com/load-balancing/docs/tcp/internal-proxy)
- Source ID: `site-docs-root`
- Final score: 219
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following table specifies the backend service APIs for internal proxy Network Load Balancers: Load balancer mode Backend service type Regional internal proxy Network Load Balancer Regional regionBackendServices Cross-region internal proxy Network Load Balancer Global backendServices Supported backends The internal proxy Network Load Balancer supports the following types of backends: Load balancer mode Supported backends on a backend service Instance groups Zonal NEGs Internet NEGs Serverless NEGs Hybrid NEGs Private Service Connect NEGs GKE Regional internal proxy Network Load Balancer GCE VM IP PORT type endpoints Regional NEGs only Add a Private Service Connect NEG Cross-region internal proxy Network Load Balancer GCE VM IP PORT type endpoints Add a Private Service Connect NEG All of the backends must be of the same type (instance groups or NEGs).
- Internal proxy Network Load Balancers offer the following types of session affinity: None A session affinity setting of NONE does not mean that there is no session affinity.
- What's next Set up a cross-region internal Application Load Balancer with VM instance group backends Set up a cross-region internal Application Load Balancer with hybrid connectivity Set up a regional internal proxy Network Load Balancer with an instance group backend Set up a regional internal proxy Network Load Balancer with a zonal NEG backend Set up a regional internal proxy Network Load Balancer with a hybrid NEG backend Set up a regional internal proxy Network Load Balancer with an internet NEG backend View metrics with Cloud Monitoring Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- The following table specifies the scope of health checks supported by internal proxy Network Load Balancers in each mode: Load balancer mode Health check type Regional internal proxy Network Load Balancer Regional regionHealthChecks Cross-region internal proxy Network Load Balancer Global healthChecks For more information about health checks, see the following: Health checks overview Use health checks Firewall rules Internal proxy Network Load Balancers require the following firewall rules: An ingress allow rule that permits traffic from the Google health check probes.

