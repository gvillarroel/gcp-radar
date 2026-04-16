---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:54:57.797Z"
product_name: "Cloud Load Balancing"
product_slug: "cloud-load-balancing"
feature_name: "Failover groups for internal TCP/UDP Load Balancing"
feature_slug: "failover-groups-for-internal-tcp-udp-load-balancing"
latest_feature_date: "2019-04-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/load-balancing/docs/l7-internal"
  - "https://docs.cloud.google.com/load-balancing/docs/tcp/internal-proxy"
  - "https://docs.cloud.google.com/load-balancing/docs/internal"
keywords:
  - "failover"
  - "groups"
  - "internal"
  - "tcp"
  - "udp"
  - "load"
  - "balancing"
  - "supports"
---

# Failover groups for internal TCP/UDP Load Balancing

Product: Cloud Load Balancing
Coverage: MEDIUM

## Step 02 Summary

Internal TCP/UDP Load Balancing supports failover groups to shift traffic to backup backends when primary backends are unavailable.

## Extended Definition

Internal TCP/UDP Load Balancing supports failover groups to shift traffic to backup backends when primary backends are unavailable.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/load-balancing/docs/l7-internal](https://docs.cloud.google.com/load-balancing/docs/l7-internal)
- [https://docs.cloud.google.com/load-balancing/docs/tcp/internal-proxy](https://docs.cloud.google.com/load-balancing/docs/tcp/internal-proxy)
- [https://docs.cloud.google.com/load-balancing/docs/internal](https://docs.cloud.google.com/load-balancing/docs/internal)

## Supporting Pages

### "Internal Application Load Balancer overview \_|\_ Cloud Load Balancing \_\

- URL: [https://docs.cloud.google.com/load-balancing/docs/l7-internal](https://docs.cloud.google.com/load-balancing/docs/l7-internal)
- Source ID: `site-docs-root`
- Final score: 149
- Re-rank relevance: N/A

Evidence snippets:
- Load balancer mode Supported backends on a backend service 1 Supports backend buckets Supports Cloud Armor Supports Cloud CDN Supports IAP Supports Service Extensions Instance groups 2 Zonal NEGs 3 Internet NEGs Serverless NEGs Hybrid NEGs Private Service Connect NEGs Cross-region internal Application Load Balancer Cloud Run Regional internal Application Load Balancer Cloud Run 1 Backends on a backend service must be the same type: all instance groups or all the same type of NEG.
- Table: Supported session affinity settings Product Session affinity options Cross-region internal Application Load Balancer Regional internal Application Load Balancer None ( NONE ) Client IP ( CLIENT IP ) Generated cookie ( GENERATED COOKIE ) Header field ( HEADER FIELD ) HTTP cookie ( HTTP COOKIE ) Stateful cookie-based affinity ( STRONG COOKIE AFFINITY ) Also note: The effective default value of the load balancing locality policy ( localityLbPolicy ) changes according to your session affinity settings.
- The following table specifies the type of URL map required by internal Application Load Balancers in each mode: Load balancer mode URL map type Cross-region internal Application Load Balancer urlMaps Regional internal Application Load Balancer regionUrlMaps Backend service A backend service provides configuration information to the load balancer so that it can direct requests to its backends—for example, Compute Engine instance groups or network endpoint groups (NEGs).
- Load balancer mode Load balancer type Access type Region Cross-region internal Application Load Balancer Application Internal Regional internal Application Load Balancer Application Internal Specifies a region gcloud To determine the mode of a load balancer, run the following command: gcloud compute forwarding-rules describe FORWARDING RULE NAME In the command output, check the load balancing scheme, region, and network tier.

### "Internal proxy Network Load Balancer overview \_|\_ Cloud Load Balancing\

- URL: [https://docs.cloud.google.com/load-balancing/docs/tcp/internal-proxy](https://docs.cloud.google.com/load-balancing/docs/tcp/internal-proxy)
- Source ID: `site-docs-root`
- Final score: 141
- Re-rank relevance: N/A

Evidence snippets:
- The following table specifies the backend service APIs for internal proxy Network Load Balancers: Load balancer mode Backend service type Regional internal proxy Network Load Balancer Regional regionBackendServices Cross-region internal proxy Network Load Balancer Global backendServices Supported backends The internal proxy Network Load Balancer supports the following types of backends: Load balancer mode Supported backends on a backend service Instance groups Zonal NEGs Internet NEGs Serverless NEGs Hybrid NEGs Private Service Connect NEGs GKE Regional internal proxy Network Load Balancer GCE VM IP PORT type endpoints Regional NEGs only Add a Private Service Connect NEG Cross-region internal proxy Network Load Balancer GCE VM IP PORT type endpoints Add a Private Service Connect NEG All of the backends must be of the same type (instance groups or NEGs).
- Traffic distribution An internal proxy Network Load Balancer distributes traffic to its backends as follows: Connections originating from a single client are sent to the same zone as long as healthy backends (instance groups or NEGs) within that zone are available and have capacity, as determined by the balancing mode .
- The following table shows the forwarding rule requirements for internal proxy Network Load Balancers: Load balancer mode Forwarding rule, IP address, and proxy-only subnet --purpose Routing from the client to the load balancer's frontend Regional internal proxy Network Load Balancer Regional forwardingRules Regional IP address Load balancing scheme: INTERNAL MANAGED Proxy-only subnet --purpose : REGIONAL MANAGED PROXY IP address --purpose : SHARED LOADBALANCER VIP You can enable global access to allow clients from any region to access your load balancer.
- Load balancer mode Load balancer type Access type Region Regional internal proxy Network Load Balancer Network (Proxy) Internal Specifies a region Cross-region internal proxy Network Load Balancer Network (Proxy) Internal gcloud To determine the mode of a load balancer, run the following command: gcloud compute forwarding-rules describe FORWARDING RULE NAME In the command output, check the load balancing scheme, region, and network tier.

### "Internal passthrough Network Load Balancer overview \_|\_ Cloud Load Balancing\

- URL: [https://docs.cloud.google.com/load-balancing/docs/internal](https://docs.cloud.google.com/load-balancing/docs/internal)
- Source ID: `site-docs-reference-required-4`
- Final score: 134
- Re-rank relevance: N/A

Evidence snippets:
- Protocols, scheme, and scope Each internal passthrough Network Load Balancer supports the following: One backend service with load balancing scheme INTERNAL and a supported protocol.
- An internal passthrough Network Load Balancer doesn't support the following: Backend VMs in multiple regions Balancing traffic that originates from the internet, unless you're using it with an external load balancer IPv6 packets with fragmented headers Internal IP address Internal passthrough Network Load Balancers support IPv4-only, dual-stack, and IPv6-only subnets.
- You can use either instance groups or zonal NEGs, but not a combination of both, as backends for an internal passthrough Network Load Balancer: If you choose instance groups, you can use unmanaged instance groups, zonal managed instance groups, regional managed instance groups, or a combination of instance group types.
- Home Documentation Networking Load Balancing Guides Send feedback Internal passthrough Network Load Balancer overview Stay organized with collections Save and categorize content based on your preferences.

