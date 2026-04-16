---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:54:57.789Z"
product_name: "Cloud Load Balancing"
product_slug: "cloud-load-balancing"
feature_name: "UDP session affinity for internal TCP/UDP load balancers"
feature_slug: "udp-session-affinity-for-internal-tcp-udp-load-balancers"
latest_feature_date: "2021-04-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/load-balancing/docs/tcp/internal-proxy"
  - "https://docs.cloud.google.com/load-balancing/docs/l7-internal"
  - "https://docs.cloud.google.com/load-balancing/docs/internal"
keywords:
  - "udp"
  - "session"
  - "affinity"
  - "internal"
  - "tcp"
  - "load"
  - "balancers"
  - "balancing"
---

# UDP session affinity for internal TCP/UDP load balancers

Product: Cloud Load Balancing
Coverage: MEDIUM

## Step 02 Summary

Internal TCP/UDP Load Balancing supports session affinity for UDP traffic.

## Extended Definition

Internal TCP/UDP Load Balancing supports session affinity for UDP traffic.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/load-balancing/docs/tcp/internal-proxy](https://docs.cloud.google.com/load-balancing/docs/tcp/internal-proxy)
- [https://docs.cloud.google.com/load-balancing/docs/l7-internal](https://docs.cloud.google.com/load-balancing/docs/l7-internal)
- [https://docs.cloud.google.com/load-balancing/docs/internal](https://docs.cloud.google.com/load-balancing/docs/internal)

## Supporting Pages

### "Internal Application Load Balancer overview \_|\_ Cloud Load Balancing \_\

- URL: [https://docs.cloud.google.com/load-balancing/docs/l7-internal](https://docs.cloud.google.com/load-balancing/docs/l7-internal)
- Source ID: `site-docs-root`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- Table: Supported session affinity settings Product Session affinity options Cross-region internal Application Load Balancer Regional internal Application Load Balancer None ( NONE ) Client IP ( CLIENT IP ) Generated cookie ( GENERATED COOKIE ) Header field ( HEADER FIELD ) HTTP cookie ( HTTP COOKIE ) Stateful cookie-based affinity ( STRONG COOKIE AFFINITY ) Also note: The effective default value of the load balancing locality policy ( localityLbPolicy ) changes according to your session affinity settings.
- Types of session affinity The session affinity for internal Application Load Balancers can be classified into one of the following categories: Hash-based session affinity ( NONE , CLIENT IP ) HTTP header-based session affinity ( HEADER FIELD ) Cookie-based session affinity ( GENERATED COOKIE , HTTP COOKIE , STRONG COOKIE AFFINITY ) Hash-based session affinity For hash-based session affinity, the load balancer uses the consistent hashing algorithm to select an eligible backend.
- Session affinity Session affinity, configured on the backend service of Application Load Balancers, provides a best-effort attempt to send requests from a particular client to the same backend as long as the number of healthy backend instances or endpoints remains constant, and as long as the previously selected backend instance or endpoint is not at capacity.
- Product Cookie name Cross-region internal Application Load Balancers GCILB Regional internal Application Load Balancers GCILB The generated cookie's path attribute is always a forward slash ( / ), so it applies to all backend services on the same URL map, provided that the other backend services also use generated cookie affinity.

### "Internal proxy Network Load Balancer overview \_|\_ Cloud Load Balancing\

- URL: [https://docs.cloud.google.com/load-balancing/docs/tcp/internal-proxy](https://docs.cloud.google.com/load-balancing/docs/tcp/internal-proxy)
- Source ID: `site-docs-root`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- Internal proxy Network Load Balancers offer the following types of session affinity: None A session affinity setting of NONE does not mean that there is no session affinity.
- The following table shows the forwarding rule requirements for internal proxy Network Load Balancers: Load balancer mode Forwarding rule, IP address, and proxy-only subnet --purpose Routing from the client to the load balancer's frontend Regional internal proxy Network Load Balancer Regional forwardingRules Regional IP address Load balancing scheme: INTERNAL MANAGED Proxy-only subnet --purpose : REGIONAL MANAGED PROXY IP address --purpose : SHARED LOADBALANCER VIP You can enable global access to allow clients from any region to access your load balancer.
- For regional internal proxy Network Load Balancers, the balancing mode can be CONNECTION (instance group or NEG backends) or UTILIZATION (instance group backends only).
- The following table specifies the backend service APIs for internal proxy Network Load Balancers: Load balancer mode Backend service type Regional internal proxy Network Load Balancer Regional regionBackendServices Cross-region internal proxy Network Load Balancer Global backendServices Supported backends The internal proxy Network Load Balancer supports the following types of backends: Load balancer mode Supported backends on a backend service Instance groups Zonal NEGs Internet NEGs Serverless NEGs Hybrid NEGs Private Service Connect NEGs GKE Regional internal proxy Network Load Balancer GCE VM IP PORT type endpoints Regional NEGs only Add a Private Service Connect NEG Cross-region internal proxy Network Load Balancer GCE VM IP PORT type endpoints Add a Private Service Connect NEG All of the backends must be of the same type (instance groups or NEGs).

### "Internal passthrough Network Load Balancer overview \_|\_ Cloud Load Balancing\

- URL: [https://docs.cloud.google.com/load-balancing/docs/internal](https://docs.cloud.google.com/load-balancing/docs/internal)
- Source ID: `site-docs-reference-required-4`
- Final score: 127
- Re-rank relevance: N/A

Evidence snippets:
- Traffic distribution Internal passthrough Network Load Balancers support a variety of traffic distribution customization options, including session affinity, connection tracking, and failover.
- An internal passthrough Network Load Balancer doesn't support the following: Backend VMs in multiple regions Balancing traffic that originates from the internet, unless you're using it with an external load balancer IPv6 packets with fragmented headers Internal IP address Internal passthrough Network Load Balancers support IPv4-only, dual-stack, and IPv6-only subnets.
- Firewall configuration Internal passthrough Network Load Balancers require the following configuration for hierarchical firewall policies and VPC firewall rules: Allow ingress from IPv4 or IPv6 health check source ranges .
- Instances that participate as backend VMs for internal passthrough Network Load Balancers must be running the appropriate Linux or Windows guest environment or other processes that provide equivalent functionality.

