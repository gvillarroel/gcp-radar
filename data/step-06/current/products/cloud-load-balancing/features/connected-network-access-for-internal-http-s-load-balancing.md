---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:54:57.792Z"
product_name: "Cloud Load Balancing"
product_slug: "cloud-load-balancing"
feature_name: "Connected network access for internal HTTP(S) Load Balancing"
feature_slug: "connected-network-access-for-internal-http-s-load-balancing"
latest_feature_date: "2020-02-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/load-balancing/docs/tcp/internal-proxy"
  - "https://docs.cloud.google.com/load-balancing/docs/internal"
  - "https://docs.cloud.google.com/load-balancing/docs/l7-internal"
keywords:
  - "connected"
  - "network"
  - "access"
  - "internal"
  - "http"
  - "load"
  - "balancing"
  - "can"
---

# Connected network access for internal HTTP(S) Load Balancing

Product: Cloud Load Balancing
Coverage: MEDIUM

## Step 02 Summary

Internal HTTP(S) Load Balancing can be accessed from connected networks over VPC Peering, Cloud VPN, and Cloud Interconnect.

## Extended Definition

Internal HTTP(S) Load Balancing can be accessed from connected networks over VPC Peering, Cloud VPN, and Cloud Interconnect.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/load-balancing/docs/tcp/internal-proxy](https://docs.cloud.google.com/load-balancing/docs/tcp/internal-proxy)
- [https://docs.cloud.google.com/load-balancing/docs/internal](https://docs.cloud.google.com/load-balancing/docs/internal)
- [https://docs.cloud.google.com/load-balancing/docs/l7-internal](https://docs.cloud.google.com/load-balancing/docs/l7-internal)

## Supporting Pages

### "Internal proxy Network Load Balancer overview \_|\_ Cloud Load Balancing\

- URL: [https://docs.cloud.google.com/load-balancing/docs/tcp/internal-proxy](https://docs.cloud.google.com/load-balancing/docs/tcp/internal-proxy)
- Source ID: `site-docs-root`
- Final score: 200
- Re-rank relevance: N/A

Evidence snippets:
- The following table shows the forwarding rule requirements for internal proxy Network Load Balancers: Load balancer mode Forwarding rule, IP address, and proxy-only subnet --purpose Routing from the client to the load balancer's frontend Regional internal proxy Network Load Balancer Regional forwardingRules Regional IP address Load balancing scheme: INTERNAL MANAGED Proxy-only subnet --purpose : REGIONAL MANAGED PROXY IP address --purpose : SHARED LOADBALANCER VIP You can enable global access to allow clients from any region to access your load balancer.
- Load balancer mode Load balancer type Access type Region Regional internal proxy Network Load Balancer Network (Proxy) Internal Specifies a region Cross-region internal proxy Network Load Balancer Network (Proxy) Internal gcloud To determine the mode of a load balancer, run the following command: gcloud compute forwarding-rules describe FORWARDING RULE NAME In the command output, check the load balancing scheme, region, and network tier.
- Cross-region internal proxy Network Load Balancer Global globalForwardingRules Regional IP addresses Load balancing scheme: INTERNAL MANAGED Proxy-only subnet --purpose : GLOBAL MANAGED PROXY IP address --purpose : SHARED LOADBALANCER VIP Global access is enabled by default to allow clients from any region to access your load balancer.
- The internal proxy Network Load Balancer is a Layer 4 load balancer that lets you run and scale your TCP service traffic behind a regional internal IP address that is accessible only to clients in the same VPC network or clients connected to your VPC network.

### "Internal passthrough Network Load Balancer overview \_|\_ Cloud Load Balancing\

- URL: [https://docs.cloud.google.com/load-balancing/docs/internal](https://docs.cloud.google.com/load-balancing/docs/internal)
- Source ID: `site-docs-reference-required-4`
- Final score: 196
- Re-rank relevance: N/A

Evidence snippets:
- The following table summarizes how to use these settings for different protocols: Traffic to be load-balanced Forwarding rule protocol Backend service protocol TCP (IPv4 or IPv6) TCP TCP or UNSPECIFIED UDP (IPv4 or IPv6) UDP UDP or UNSPECIFIED TCP, UDP, ICMP, ICMPv6, SCTP, ESP, AH, and GRE L3 DEFAULT UNSPECIFIED Forwarding rules and global access An internal passthrough Network Load Balancer's forwarding rules are regional, even when global access is enabled.
- An internal passthrough Network Load Balancer doesn't support the following: Backend VMs in multiple regions Balancing traffic that originates from the internet, unless you're using it with an external load balancer IPv6 packets with fragmented headers Internal IP address Internal passthrough Network Load Balancers support IPv4-only, dual-stack, and IPv6-only subnets.
- Home Documentation Networking Load Balancing Guides Send feedback Internal passthrough Network Load Balancer overview Stay organized with collections Save and categorize content based on your preferences.
- Protocols, scheme, and scope Each internal passthrough Network Load Balancer supports the following: One backend service with load balancing scheme INTERNAL and a supported protocol.

### "Internal Application Load Balancer overview \_|\_ Cloud Load Balancing \_\

- URL: [https://docs.cloud.google.com/load-balancing/docs/l7-internal](https://docs.cloud.google.com/load-balancing/docs/l7-internal)
- Source ID: `site-docs-root`
- Final score: 184
- Re-rank relevance: N/A

Evidence snippets:
- Load balancer mode Load balancer type Access type Region Cross-region internal Application Load Balancer Application Internal Regional internal Application Load Balancer Application Internal Specifies a region gcloud To determine the mode of a load balancer, run the following command: gcloud compute forwarding-rules describe FORWARDING RULE NAME In the command output, check the load balancing scheme, region, and network tier.
- Accessing connected networks Your clients can access an internal Application Load Balancer in your VPC network from a connected network by using the following: VPC Network Peering Cloud VPN and Cloud Interconnect For detailed examples, see Internal Application Load Balancers and connected networks .
- Table: Supported session affinity settings Product Session affinity options Cross-region internal Application Load Balancer Regional internal Application Load Balancer None ( NONE ) Client IP ( CLIENT IP ) Generated cookie ( GENERATED COOKIE ) Header field ( HEADER FIELD ) HTTP cookie ( HTTP COOKIE ) Stateful cookie-based affinity ( STRONG COOKIE AFFINITY ) Also note: The effective default value of the load balancing locality policy ( localityLbPolicy ) changes according to your session affinity settings.
- Cross-region internal Application Load Balancer Forwarding rule globalForwardingRules.insert method Regional IP address addresses.insert method Load balancing scheme INTERNAL MANAGED IP address (optional) SHARED LOADBALANCER VIP Routing from the client to the load balancer's frontend Global access is enabled by default to allow clients from any region in a VPC to access your load balancer.

