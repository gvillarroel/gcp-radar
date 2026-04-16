---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:54:57.793Z"
product_name: "Cloud Load Balancing"
product_slug: "cloud-load-balancing"
feature_name: "Global access for internal TCP/UDP Load Balancing"
feature_slug: "global-access-for-internal-tcp-udp-load-balancing"
latest_feature_date: "2020-02-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/load-balancing/docs/internal"
  - "https://docs.cloud.google.com/load-balancing/docs/l7-internal"
  - "https://docs.cloud.google.com/load-balancing/docs/tcp/internal-proxy"
keywords:
  - "global"
  - "access"
  - "internal"
  - "tcp"
  - "udp"
  - "load"
  - "balancing"
  - "supports"
---

# Global access for internal TCP/UDP Load Balancing

Product: Cloud Load Balancing
Coverage: MEDIUM

## Step 02 Summary

Internal TCP/UDP Load Balancing supports global access so clients can reach the load balancer from any region; Internal TCP/UDP Load Balancing supports global access so clients can reach the load balancer from any region.

## Extended Definition

Internal TCP/UDP Load Balancing supports global access so clients can reach the load balancer from any region; Internal TCP/UDP Load Balancing supports global access so clients can reach the load balancer from any region.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/load-balancing/docs/internal](https://docs.cloud.google.com/load-balancing/docs/internal)
- [https://docs.cloud.google.com/load-balancing/docs/l7-internal](https://docs.cloud.google.com/load-balancing/docs/l7-internal)
- [https://docs.cloud.google.com/load-balancing/docs/tcp/internal-proxy](https://docs.cloud.google.com/load-balancing/docs/tcp/internal-proxy)

## Supporting Pages

### "Internal passthrough Network Load Balancer overview \_|\_ Cloud Load Balancing\

- URL: [https://docs.cloud.google.com/load-balancing/docs/internal](https://docs.cloud.google.com/load-balancing/docs/internal)
- Source ID: `site-docs-reference-required-4`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- The following table summarizes how to use these settings for different protocols: Traffic to be load-balanced Forwarding rule protocol Backend service protocol TCP (IPv4 or IPv6) TCP TCP or UNSPECIFIED UDP (IPv4 or IPv6) UDP UDP or UNSPECIFIED TCP, UDP, ICMP, ICMPv6, SCTP, ESP, AH, and GRE L3 DEFAULT UNSPECIFIED Forwarding rules and global access An internal passthrough Network Load Balancer's forwarding rules are regional, even when global access is enabled.
- Protocols, scheme, and scope Each internal passthrough Network Load Balancer supports the following: One backend service with load balancing scheme INTERNAL and a supported protocol.
- You can enable global access to allow clients from any region to access your internal passthrough Network Load Balancer.
- Internal passthrough Network Load Balancer with global access (click to enlarge).

### "Internal Application Load Balancer overview \_|\_ Cloud Load Balancing \_\

- URL: [https://docs.cloud.google.com/load-balancing/docs/l7-internal](https://docs.cloud.google.com/load-balancing/docs/l7-internal)
- Source ID: `site-docs-root`
- Final score: 149
- Re-rank relevance: N/A

Evidence snippets:
- Cross-region internal Application Load Balancer Forwarding rule globalForwardingRules.insert method Regional IP address addresses.insert method Load balancing scheme INTERNAL MANAGED IP address (optional) SHARED LOADBALANCER VIP Routing from the client to the load balancer's frontend Global access is enabled by default to allow clients from any region in a VPC to access your load balancer.
- Regional internal Application Load Balancer Forwarding rule forwardingRules.insert method Regional IP address addresses.insert method Load balancing scheme INTERNAL MANAGED IP address (optional) SHARED LOADBALANCER VIP Routing from the client to the load balancer's frontend You can enable global access to allow clients from any region in a VPC to access your load balancer.
- Load balancer mode Load balancer type Access type Region Cross-region internal Application Load Balancer Application Internal Regional internal Application Load Balancer Application Internal Specifies a region gcloud To determine the mode of a load balancer, run the following command: gcloud compute forwarding-rules describe FORWARDING RULE NAME In the command output, check the load balancing scheme, region, and network tier.
- Load balancer mode Load balancing scheme Forwarding rule Cross-region internal Application Load Balancer INTERNAL MANAGED Global Regional internal Application Load Balancer INTERNAL MANAGED Regional Important: After you create a load balancer, you can't edit its mode.

### "Internal proxy Network Load Balancer overview \_|\_ Cloud Load Balancing\

- URL: [https://docs.cloud.google.com/load-balancing/docs/tcp/internal-proxy](https://docs.cloud.google.com/load-balancing/docs/tcp/internal-proxy)
- Source ID: `site-docs-root`
- Final score: 141
- Re-rank relevance: N/A

Evidence snippets:
- The following table shows the forwarding rule requirements for internal proxy Network Load Balancers: Load balancer mode Forwarding rule, IP address, and proxy-only subnet --purpose Routing from the client to the load balancer's frontend Regional internal proxy Network Load Balancer Regional forwardingRules Regional IP address Load balancing scheme: INTERNAL MANAGED Proxy-only subnet --purpose : REGIONAL MANAGED PROXY IP address --purpose : SHARED LOADBALANCER VIP You can enable global access to allow clients from any region to access your load balancer.
- Cross-region internal proxy Network Load Balancer Global globalForwardingRules Regional IP addresses Load balancing scheme: INTERNAL MANAGED Proxy-only subnet --purpose : GLOBAL MANAGED PROXY IP address --purpose : SHARED LOADBALANCER VIP Global access is enabled by default to allow clients from any region to access your load balancer.
- The following table specifies the backend service APIs for internal proxy Network Load Balancers: Load balancer mode Backend service type Regional internal proxy Network Load Balancer Regional regionBackendServices Cross-region internal proxy Network Load Balancer Global backendServices Supported backends The internal proxy Network Load Balancer supports the following types of backends: Load balancer mode Supported backends on a backend service Instance groups Zonal NEGs Internet NEGs Serverless NEGs Hybrid NEGs Private Service Connect NEGs GKE Regional internal proxy Network Load Balancer GCE VM IP PORT type endpoints Regional NEGs only Add a Private Service Connect NEG Cross-region internal proxy Network Load Balancer GCE VM IP PORT type endpoints Add a Private Service Connect NEG All of the backends must be of the same type (instance groups or NEGs).
- Load balancer mode Load balancer type Access type Region Regional internal proxy Network Load Balancer Network (Proxy) Internal Specifies a region Cross-region internal proxy Network Load Balancer Network (Proxy) Internal gcloud To determine the mode of a load balancer, run the following command: gcloud compute forwarding-rules describe FORWARDING RULE NAME In the command output, check the load balancing scheme, region, and network tier.

