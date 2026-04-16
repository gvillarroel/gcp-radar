---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:54:57.779Z"
product_name: "Cloud Load Balancing"
product_slug: "cloud-load-balancing"
feature_name: "Private IPv6 for internal passthrough Network Load Balancer"
feature_slug: "private-ipv6-for-internal-passthrough-network-load-balancer"
latest_feature_date: "2023-08-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/load-balancing/docs/internal"
  - "https://docs.cloud.google.com/load-balancing/docs/network"
  - "https://docs.cloud.google.com/load-balancing/docs/tcp/internal-proxy"
keywords:
  - "private"
  - "ipv6"
  - "internal"
  - "passthrough"
  - "network"
  - "load"
  - "balancer"
  - "balancers"
---

# Private IPv6 for internal passthrough Network Load Balancer

Product: Cloud Load Balancing
Coverage: MEDIUM

## Step 02 Summary

Internal passthrough Network Load Balancers can be configured to handle private IPv6 traffic within dual-stack VPC subnets.

## Extended Definition

Internal passthrough Network Load Balancers can be configured to handle private IPv6 traffic within dual-stack VPC subnets.

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
- Final score: 263
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- An internal passthrough Network Load Balancer doesn't support the following: Backend VMs in multiple regions Balancing traffic that originates from the internet, unless you're using it with an external load balancer IPv6 packets with fragmented headers Internal IP address Internal passthrough Network Load Balancers support IPv4-only, dual-stack, and IPv6-only subnets.
- Firewall configuration Internal passthrough Network Load Balancers require the following configuration for hierarchical firewall policies and VPC firewall rules: Allow ingress from IPv4 or IPv6 health check source ranges .
- Internal passthrough Network Load Balancers distribute traffic among internal virtual machine (VM) instances in the same region in a Virtual Private Cloud (VPC) network.
- Internal passthrough Network Load Balancers support the following IPv6 protocol options for each forwarding rule: TCP or UDP .

### "Backend service-based regional external passthrough Network Load Balancer\

- URL: [https://docs.cloud.google.com/load-balancing/docs/network](https://docs.cloud.google.com/load-balancing/docs/network)
- Source ID: `site-docs-root`
- Final score: 236
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Backend service-based regional external passthrough Network Load Balancers can handle both IPv4 and IPv6 traffic.
- Location of load balancing resources 1 Required location of IP address resource Host project Host project Service project Service project or host project 1 Includes the forwarding rule, backend service, health check, and backends (NEGs and managed or unmanaged instance groups) Traffic distribution Regional external passthrough Network Load Balancers support a variety of traffic distribution customization options, including session affinity, connection tracking, weighted load balancing, and failover.
- Regional external passthrough Network Load Balancers can receive traffic from: Any client on the internet Google Cloud VMs with external IPs Google Cloud VMs that have internet access through Cloud NAT or instance-based NAT Regional external passthrough Network Load Balancers are not proxies .
- What's next To configure a regional external passthrough Network Load Balancer with a backend service for TCP or UDP traffic only (supporting IPv4 and IPv6 traffic), see Set up a regional external passthrough Network Load Balancer with a backend service .

### "Internal proxy Network Load Balancer overview \_|\_ Cloud Load Balancing\

- URL: [https://docs.cloud.google.com/load-balancing/docs/tcp/internal-proxy](https://docs.cloud.google.com/load-balancing/docs/tcp/internal-proxy)
- Source ID: `site-docs-root`
- Final score: 227
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following table specifies the backend service APIs for internal proxy Network Load Balancers: Load balancer mode Backend service type Regional internal proxy Network Load Balancer Regional regionBackendServices Cross-region internal proxy Network Load Balancer Global backendServices Supported backends The internal proxy Network Load Balancer supports the following types of backends: Load balancer mode Supported backends on a backend service Instance groups Zonal NEGs Internet NEGs Serverless NEGs Hybrid NEGs Private Service Connect NEGs GKE Regional internal proxy Network Load Balancer GCE VM IP PORT type endpoints Regional NEGs only Add a Private Service Connect NEG Cross-region internal proxy Network Load Balancer GCE VM IP PORT type endpoints Add a Private Service Connect NEG All of the backends must be of the same type (instance groups or NEGs).
- The following table specifies the scope of health checks supported by internal proxy Network Load Balancers in each mode: Load balancer mode Health check type Regional internal proxy Network Load Balancer Regional regionHealthChecks Cross-region internal proxy Network Load Balancer Global healthChecks For more information about health checks, see the following: Health checks overview Use health checks Firewall rules Internal proxy Network Load Balancers require the following firewall rules: An ingress allow rule that permits traffic from the Google health check probes.
- The following table shows the forwarding rule requirements for internal proxy Network Load Balancers: Load balancer mode Forwarding rule, IP address, and proxy-only subnet --purpose Routing from the client to the load balancer's frontend Regional internal proxy Network Load Balancer Regional forwardingRules Regional IP address Load balancing scheme: INTERNAL MANAGED Proxy-only subnet --purpose : REGIONAL MANAGED PROXY IP address --purpose : SHARED LOADBALANCER VIP You can enable global access to allow clients from any region to access your load balancer.
- The following table describes proxy-only subnet requirements for internal proxy Network Load Balancers: Load balancer mode Value of the proxy-only subnet --purpose flag Regional internal proxy Network Load Balancer REGIONAL MANAGED PROXY Regional and cross-region load balancers cannot share the same subnets All the regional Envoy-based load balancers in a region and VPC network share the same proxy-only subnet.

