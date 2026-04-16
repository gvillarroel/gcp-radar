---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:54:57.678Z"
product_name: "Cloud Load Balancing"
product_slug: "cloud-load-balancing"
feature_name: "IPv6-only managed instance group backends for passthrough Network Load Balancers"
feature_slug: "ipv6-only-managed-instance-group-backends-for-passthrough-network-load-balancers"
latest_feature_date: "2025-10-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/load-balancing/docs/network"
  - "https://docs.cloud.google.com/load-balancing/docs/internal"
  - "https://docs.cloud.google.com/load-balancing/docs/network/networklb-monitoring"
keywords:
  - "ipv6"
  - "only"
  - "managed"
  - "instance"
  - "group"
  - "backends"
  - "passthrough"
  - "network"
---

# IPv6-only managed instance group backends for passthrough Network Load Balancers

Product: Cloud Load Balancing
Coverage: MEDIUM

## Step 02 Summary

Internal and external passthrough Network Load Balancers can load balance to managed instance groups composed of IPv6-only VM instances.

## Extended Definition

Internal and external passthrough Network Load Balancers can load balance to managed instance groups composed of IPv6-only VM instances.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/load-balancing/docs/network](https://docs.cloud.google.com/load-balancing/docs/network)
- [https://docs.cloud.google.com/load-balancing/docs/internal](https://docs.cloud.google.com/load-balancing/docs/internal)
- [https://docs.cloud.google.com/load-balancing/docs/network/networklb-monitoring](https://docs.cloud.google.com/load-balancing/docs/network/networklb-monitoring)

## Supporting Pages

### "Backend service-based regional external passthrough Network Load Balancer\

- URL: [https://docs.cloud.google.com/load-balancing/docs/network](https://docs.cloud.google.com/load-balancing/docs/network)
- Source ID: `site-docs-root`
- Final score: 270
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Location of load balancing resources 1 Required location of IP address resource Host project Host project Service project Service project or host project 1 Includes the forwarding rule, backend service, health check, and backends (NEGs and managed or unmanaged instance groups) Traffic distribution Regional external passthrough Network Load Balancers support a variety of traffic distribution customization options, including session affinity, connection tracking, weighted load balancing, and failover.
- Shared VPC architecture Note the following points in relation to a Shared VPC architecture for a regional external passthrough Network Load Balancer: Except for the IP address resource, all other resources associated with a regional external passthrough Network Load Balancer—forwarding rule, backend service, health check, and backends (NEGs and managed or unmanaged instance groups)—must exist in the same project, and this project can be a host project or a service project.
- You can use either instance groups or zonal NEGs, but not a combination of both, as backends for a regional external passthrough Network Load Balancer: If you choose instance groups , you can use unmanaged instance groups, zonal managed instance groups, regional managed instance groups, or a combination of instance group types.
- IPv6-only backends If you want the load balancer to use IPv6-only backends, note the following requirements: IPv6-only instances are supported in managed and unmanaged instance groups.

### "Internal passthrough Network Load Balancer overview \_|\_ Cloud Load Balancing\

- URL: [https://docs.cloud.google.com/load-balancing/docs/internal](https://docs.cloud.google.com/load-balancing/docs/internal)
- Source ID: `site-docs-reference-required-4`
- Final score: 262
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can use either instance groups or zonal NEGs, but not a combination of both, as backends for an internal passthrough Network Load Balancer: If you choose instance groups, you can use unmanaged instance groups, zonal managed instance groups, regional managed instance groups, or a combination of instance group types.
- IPv6-only backends If you want the load balancer to use IPv6-only backends, note the following requirements: IPv6-only instances are only supported in unmanaged instance groups.
- Instance group backends and network interfaces Within a given (managed or unmanaged) instance group, the nic0 network interface of each member VM is always in the same VPC network: For managed instance groups (MIGs), the VPC network of the instance group comes from the nic0 interface defined in the instance template.
- An internal passthrough Network Load Balancer doesn't support the following: Backend VMs in multiple regions Balancing traffic that originates from the internet, unless you're using it with an external load balancer IPv6 packets with fragmented headers Internal IP address Internal passthrough Network Load Balancers support IPv4-only, dual-stack, and IPv6-only subnets.

### "Regional external passthrough Network Load Balancer logging and monitoring\

- URL: [https://docs.cloud.google.com/load-balancing/docs/network/networklb-monitoring](https://docs.cloud.google.com/load-balancing/docs/network/networklb-monitoring)
- Source ID: `site-docs-reference-required-3`
- Final score: 232
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For a target pool-based regional external passthrough Network Load Balancer, the value is TARGET POOL . backend scope string For a backend service-based regional external passthrough Network Load Balancer, the zone or region of the backend instance group or NEG.
- View logs for a backend instance group To view the regional external passthrough Network Load Balancer logs for a specific backend instance group: Console query In the Google Cloud console, go to the Logs Explorer page.
- For a backend service-based regional external passthrough Network Load Balancer, the value is the name of the backend instance group or network endpoint group (NEG) that handled the connection.
- For a backend service-based regional external passthrough Network Load Balancer, the value can be either INSTANCE GROUP or NETWORK ENDPOINT GROUP .

