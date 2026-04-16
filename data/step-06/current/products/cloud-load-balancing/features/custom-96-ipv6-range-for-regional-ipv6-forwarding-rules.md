---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:54:57.677Z"
product_name: "Cloud Load Balancing"
product_slug: "cloud-load-balancing"
feature_name: "Custom /96 IPv6 range for regional IPv6 forwarding rules"
feature_slug: "custom-96-ipv6-range-for-regional-ipv6-forwarding-rules"
latest_feature_date: "2025-10-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/load-balancing/docs/forwarding-rule-concepts"
  - "https://docs.cloud.google.com/load-balancing/docs/network"
  - "https://docs.cloud.google.com/load-balancing/docs/https"
keywords:
  - "custom"
  - "96"
  - "ipv6"
  - "range"
  - "regional"
  - "forwarding"
  - "rules"
  - "can"
---

# Custom /96 IPv6 range for regional IPv6 forwarding rules

Product: Cloud Load Balancing
Coverage: MEDIUM

## Step 02 Summary

Regional IPv6 forwarding rules can be created with a custom ephemeral /96 IPv6 address range.

## Extended Definition

Regional IPv6 forwarding rules can be created with a custom ephemeral /96 IPv6 address range.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/load-balancing/docs/forwarding-rule-concepts](https://docs.cloud.google.com/load-balancing/docs/forwarding-rule-concepts)
- [https://docs.cloud.google.com/load-balancing/docs/network](https://docs.cloud.google.com/load-balancing/docs/network)
- [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https)

## Supporting Pages

### "Forwarding rules overview \_|\_ Cloud Load Balancing \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/load-balancing/docs/forwarding-rule-concepts](https://docs.cloud.google.com/load-balancing/docs/forwarding-rule-concepts)
- Source ID: `site-docs-reference-required-3`
- Final score: 207
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Global external proxy Network Load Balancer EXTERNAL MANAGED Target SSL proxy Target TCP proxy External Global Premium Tier Yes, optional IPv6 available Classic proxy Network Load Balancer EXTERNAL Target SSL proxy Target TCP proxy External Regional or global, matching the forwarding rule Premium Tier: Global external IPv4 or IPv6 address and forwarding rule Standard Tier: Regional external IPv4 address and forwarding rule Yes, optional IPv6 available with a global external address (Premium Tier) Regional external proxy Network Load Balancer EXTERNAL MANAGED Target TCP proxy External Regional Premium Tier or Standard Tier Yes, optional IPv6 not available Regional internal proxy Network Load Balancer INTERNAL MANAGED Target TCP proxy Internal Regional Premium Tier Yes, optional Forwarding rule address must be within the primary IPv4 address range of the associated subnet Cross-region internal proxy Network Load Balancer INTERNAL MANAGED Target TCP proxy Internal Regional Premium Tier Yes, optional Forwarding rule address must be within the primary IPv4 address range of the associated subnet Regional external passthrough Network Load Balancer EXTERNAL Backend service Target pool External Regional Standard (IPv4 addresses) Premium (IPv4 or IPv6 addresses) Yes, optional IPv6 support requires a backend service-based regional external passthrough Network Load Balancer.
- Product and scheme Target IP address type IP address scope IP address tier Reservable IP address Notes Global external Application Load Balancer EXTERNAL MANAGED Target HTTP proxy Target HTTPS proxy External Global Premium Tier: Global external IP address and forwarding rule Yes, optional IPv6 available Classic Application Load Balancer EXTERNAL Target HTTP proxy Target HTTPS proxy External Regional or global, matching the forwarding rule Premium Tier: Global external IPv4 or IPv6 address and forwarding rule Standard Tier: Regional external IPv4 address and forwarding rule Yes, optional IPv6 available with a global external address (Premium Tier) Regional external Application Load Balancer EXTERNAL MANAGED Target HTTP proxy Target HTTPS proxy External Regional Premium Tier or Standard Tier Yes, optional IPv6 not available Cross-region internal Application Load Balancer INTERNAL MANAGED Target HTTP proxy Target HTTPS proxy Internal Regional Premium Tier Yes, optional Global forwarding rule is configured with a regional IP address within the primary IPv4 address range of the associated regional subnet.
- Cloud Service Mesh INTERNAL SELF MANAGED Target HTTP proxy Target gRPC proxy Internal Global Not applicable No 0.0.0.0, 127.0.0.1, or any RFC 1918 address is allowed Classic VPN EXTERNAL See the Classic VPN documentation External Regional Cloud VPN doesn't have Network Service Tiers Yes, required IPv6 not supported It is possible to attach EXTERNAL MANAGED backend services to EXTERNAL forwarding rules.
- Forwarding rules for backend service-based regional external passthrough Network Load Balancers support the following advanced features: Direct traffic coming from a specific range of source IP addresses to a specific backend service.

### "Backend service-based regional external passthrough Network Load Balancer\

- URL: [https://docs.cloud.google.com/load-balancing/docs/network](https://docs.cloud.google.com/load-balancing/docs/network)
- Source ID: `site-docs-root`
- Final score: 179
- Re-rank relevance: N/A

Evidence snippets:
- Traffic steering Forwarding rules for regional external passthrough Network Load Balancers can be configured to direct traffic coming from a specific source IP address or a range of IP addresses to a specific backend service (or target instance).
- The Google Cloud console doesn't support specifying custom ephemeral IPv6 addresses for forwarding rules.
- Location of load balancing resources 1 Required location of IP address resource Host project Host project Service project Service project or host project 1 Includes the forwarding rule, backend service, health check, and backends (NEGs and managed or unmanaged instance groups) Traffic distribution Regional external passthrough Network Load Balancers support a variety of traffic distribution customization options, including session affinity, connection tracking, weighted load balancing, and failover.
- A single load balancer can have the following: One or more regional external IP addresses One or more regional external forwarding rules One regional external backend service One or more backends: either all instance groups or all zonal NEG backends ( GCE VM IP endpoints) Health check associated with the backend service Additionally, you must create firewall rules that allow your load balancing traffic and health check probes to reach the backend VMs.

### "External Application Load Balancer overview \_|\_ Cloud Load Balancing \_\

- URL: [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https)
- Source ID: `site-docs-reference-required-3`
- Final score: 167
- Re-rank relevance: N/A

Evidence snippets:
- The following table summarizes the required source IP address ranges for the firewall rules: Load balancer mode Health check source ranges Request source ranges Global external Application Load Balancer 35.191.0.0/16 130.211.0.0/22 For IPv6 traffic to the backends: 2600:2d00:1:b029::/64 The source of GFE traffic depends on the backend type: Instance groups and zonal NEGs ( GCE VM IP PORT ): 130.211.0.0/22 35.191.0.0/16 For IPv6 traffic to the backends: 2600:2d00:1:1::/64 Hybrid connectivity NEGs ( NON GCP PRIVATE IP PORT ): 130.211.0.0/22 35.191.0.0/16 Internet NEGs ( INTERNET FQDN PORT and INTERNET IP PORT ): 34.96.0.0/20 34.127.192.0/18 SERVERLESS NEGs and backend buckets: Google's production network handles packet routing Classic Application Load Balancer 35.191.0.0/16 130.211.0.0/22 The source of GFE traffic depends on the backend type: Instance groups, zonal NEGs ( GCE VM IP PORT ), and hybrid connectivity NEGs ( NON GCP PRIVATE IP PORT ): 35.191.0.0/16 130.211.0.0/22 Internet NEGs ( INTERNET FQDN PORT and INTERNET IP PORT ): 34.96.0.0/20 34.127.192.0/18 SERVERLESS NEGs and backend buckets: Google's production network handles packet routing.
- Load balancer mode Load balancer type Access type Region Global external Application Load Balancer Application External Classic Application Load Balancer Application(Classic) External Regional external Application Load Balancer Application External Specifies a region gcloud To determine the mode of a load balancer, run the following command: gcloud compute forwarding-rules describe FORWARDING RULE NAME In the command output, check the load balancing scheme, region, and network tier.
- Regional external Application Load Balancer 35.191.0.0/16 130.211.0.0/22 For IPv6 traffic to the backends: 2600:2d00:1:b029::/64 Allowing traffic from Google's health check probe ranges isn't required for hybrid NEGs.
- Depending on whether you use an IPv4 address or an IPv6 address range, there is always an explicit or implicit VPC network associated with the forwarding rule.

