---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:54:57.777Z"
product_name: "Cloud Load Balancing"
product_slug: "cloud-load-balancing"
feature_name: "Single-port forwarding rules for Application Load Balancers"
feature_slug: "single-port-forwarding-rules-for-application-load-balancers"
latest_feature_date: "2023-11-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/load-balancing/docs/forwarding-rule-concepts"
  - "https://docs.cloud.google.com/load-balancing/docs/https"
  - "https://docs.cloud.google.com/load-balancing/docs/l7-internal"
keywords:
  - "single"
  - "port"
  - "forwarding"
  - "rules"
  - "application"
  - "load"
  - "balancers"
  - "balancer"
---

# Single-port forwarding rules for Application Load Balancers

Product: Cloud Load Balancing
Coverage: MEDIUM

## Step 02 Summary

Application Load Balancer forwarding rules can specify any single port from 1 through 65535.

## Extended Definition

Application Load Balancer forwarding rules can specify any single port from 1 through 65535.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/load-balancing/docs/forwarding-rule-concepts](https://docs.cloud.google.com/load-balancing/docs/forwarding-rule-concepts)
- [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https)
- [https://docs.cloud.google.com/load-balancing/docs/l7-internal](https://docs.cloud.google.com/load-balancing/docs/l7-internal)

## Supporting Pages

### "Forwarding rules overview \_|\_ Cloud Load Balancing \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/load-balancing/docs/forwarding-rule-concepts](https://docs.cloud.google.com/load-balancing/docs/forwarding-rule-concepts)
- Source ID: `site-docs-reference-required-3`
- Final score: 249
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Internal forwarding rules are used by the following Google Cloud load balancers: Internal Application Load Balancer Internal proxy Network Load Balancer Internal passthrough Network Load Balancer Internal Application Load Balancer The internal Application Load Balancer supports IPv4 traffic using either the HTTP, HTTPS, or HTTP/2 protocols.
- Target pool Must be a single port range (contiguous) Specifying a port is optional for forwarding rules used with target pool-based regional external passthrough Network Load Balancers.
- Product Load balancing scheme Target Port requirements Global external Application Load Balancer Regional external Application Load Balancer EXTERNAL MANAGED Target HTTP proxy Target HTTPS proxy Can reference exactly one port from 1-65535 Classic Application Load Balancer EXTERNAL Target HTTP proxy Target HTTPS proxy Can reference exactly one port from 1-65535 Cross-region internal Application Load Balancer Regional internal Application Load Balancer INTERNAL MANAGED Target HTTP proxy Target HTTPS proxy Can reference exactly one port from 1-65535 Global external proxy Network Load Balancer EXTERNAL MANAGED Target TCP proxy Target SSL proxy Can reference exactly one port from 1-65535 Classic proxy Network Load Balancer EXTERNAL Target TCP proxy Target SSL proxy Can reference exactly one port from 1-65535 Regional external proxy Network Load Balancer EXTERNAL MANAGED Target TCP proxy Can reference exactly one port from 1-65535 Regional internal proxy Network Load Balancer INTERNAL MANAGED Target TCP proxy Can reference exactly one port from 1-65535 Cross-region internal proxy Network Load Balancer INTERNAL MANAGED Target TCP proxy Can reference exactly one port from 1-65535 Regional external passthrough Network Load Balancer EXTERNAL Backend service If the forwarding rule protocol is TCP or UDP , you can configure: A list of up to five (contiguous or non-contiguous) ports, or, A single port range (contiguous), or, All ports.
- For more information about internal passthrough Network Load Balancers, see the following pages: Internal passthrough Network Load Balancer overview Set up an internal passthrough Network Load Balancer Internal passthrough Network Load Balancers and connected networks External forwarding rules External forwarding rules accept traffic from client systems that have internet access, including: A client outside of Google Cloud A Google Cloud VM with an external IP address A Google Cloud VM without an external IP address using Cloud NAT or an instance-based NAT system Note: For an on-premises network connected through Cloud VPN or Cloud Interconnect, use an internal forwarding rule with an internal passthrough Network Load Balancer or internal Application Load Balancer.

### "External Application Load Balancer overview \_|\_ Cloud Load Balancing \_\

- URL: [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https)
- Source ID: `site-docs-reference-required-3`
- Final score: 235
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Forwarding rules and VPC networks This section describes how forwarding rules used by external Application Load Balancers are associated with VPC networks.
- For the complete list of protocols supported by external Application Load Balancer forwarding rules in each mode, see Load balancer features .
- Each forwarding rule for an Application Load Balancer can reference a single port from 1-65535 .
- The following table summarizes the required source IP address ranges for the firewall rules: Load balancer mode Health check source ranges Request source ranges Global external Application Load Balancer 35.191.0.0/16 130.211.0.0/22 For IPv6 traffic to the backends: 2600:2d00:1:b029::/64 The source of GFE traffic depends on the backend type: Instance groups and zonal NEGs ( GCE VM IP PORT ): 130.211.0.0/22 35.191.0.0/16 For IPv6 traffic to the backends: 2600:2d00:1:1::/64 Hybrid connectivity NEGs ( NON GCP PRIVATE IP PORT ): 130.211.0.0/22 35.191.0.0/16 Internet NEGs ( INTERNET FQDN PORT and INTERNET IP PORT ): 34.96.0.0/20 34.127.192.0/18 SERVERLESS NEGs and backend buckets: Google's production network handles packet routing Classic Application Load Balancer 35.191.0.0/16 130.211.0.0/22 The source of GFE traffic depends on the backend type: Instance groups, zonal NEGs ( GCE VM IP PORT ), and hybrid connectivity NEGs ( NON GCP PRIVATE IP PORT ): 35.191.0.0/16 130.211.0.0/22 Internet NEGs ( INTERNET FQDN PORT and INTERNET IP PORT ): 34.96.0.0/20 34.127.192.0/18 SERVERLESS NEGs and backend buckets: Google's production network handles packet routing.

### "Internal Application Load Balancer overview \_|\_ Cloud Load Balancing \_\

- URL: [https://docs.cloud.google.com/load-balancing/docs/l7-internal](https://docs.cloud.google.com/load-balancing/docs/l7-internal)
- Source ID: `site-docs-root`
- Final score: 235
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following table specifies the scope of health checks supported by internal Application Load Balancers: Load balancer mode Health check type Cross-region internal Application Load Balancer healthChecks Regional internal Application Load Balancer regionHealthChecks For more information about health checks, see the following: Health checks overview Create health checks Firewall rules An internal Application Load Balancer requires the following firewall rules: An ingress allow rule that permits traffic from Google's central health check ranges.
- Forwarding rules and VPC networks This section describes how forwarding rules used by internal Application Load Balancers are associated with VPC networks.
- Each forwarding rule for an Application Load Balancer can reference a single port from 1-65535 .
- Backend service scope The following table indicates which backend service resource and scope is used by internal Application Load Balancers: Load balancer mode Backend service resource Cross-region internal Application Load Balancer backendServices Regional internal Application Load Balancer regionBackendServices Protocol to the backends Backend services for Application Load Balancers must use one of the following protocols to send requests to backends: HTTP, which uses HTTP/1.1 and no TLS HTTPS, which uses HTTP/1.1 and TLS HTTP/2, which uses HTTP/2 and TLS (HTTP/2 without encryption isn't supported.) H2C, which uses HTTP/2 over TCP.

