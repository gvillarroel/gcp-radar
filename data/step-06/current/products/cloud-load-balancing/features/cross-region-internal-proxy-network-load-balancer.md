---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:54:57.773Z"
product_name: "Cloud Load Balancing"
product_slug: "cloud-load-balancing"
feature_name: "Cross-region internal proxy Network Load Balancer"
feature_slug: "cross-region-internal-proxy-network-load-balancer"
latest_feature_date: "2024-04-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/load-balancing/docs/tcp/internal-proxy"
  - "https://docs.cloud.google.com/load-balancing/docs/negs"
  - "https://docs.cloud.google.com/load-balancing/docs/forwarding-rule-concepts"
keywords:
  - "cross"
  - "region"
  - "internal"
  - "proxy"
  - "network"
  - "load"
  - "balancer"
  - "balancers"
---

# Cross-region internal proxy Network Load Balancer

Product: Cloud Load Balancing
Coverage: MEDIUM

## Step 02 Summary

Cross-region internal proxy Network Load Balancers support multi-region backends, cross-region failover, and global client access.

## Extended Definition

Cross-region internal proxy Network Load Balancers support multi-region backends, cross-region failover, and global client access.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/load-balancing/docs/tcp/internal-proxy](https://docs.cloud.google.com/load-balancing/docs/tcp/internal-proxy)
- [https://docs.cloud.google.com/load-balancing/docs/negs](https://docs.cloud.google.com/load-balancing/docs/negs)
- [https://docs.cloud.google.com/load-balancing/docs/forwarding-rule-concepts](https://docs.cloud.google.com/load-balancing/docs/forwarding-rule-concepts)

## Supporting Pages

### "Internal proxy Network Load Balancer overview \_|\_ Cloud Load Balancing\

- URL: [https://docs.cloud.google.com/load-balancing/docs/tcp/internal-proxy](https://docs.cloud.google.com/load-balancing/docs/tcp/internal-proxy)
- Source ID: `site-docs-root`
- Final score: 350
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following table specifies the backend service APIs for internal proxy Network Load Balancers: Load balancer mode Backend service type Regional internal proxy Network Load Balancer Regional regionBackendServices Cross-region internal proxy Network Load Balancer Global backendServices Supported backends The internal proxy Network Load Balancer supports the following types of backends: Load balancer mode Supported backends on a backend service Instance groups Zonal NEGs Internet NEGs Serverless NEGs Hybrid NEGs Private Service Connect NEGs GKE Regional internal proxy Network Load Balancer GCE VM IP PORT type endpoints Regional NEGs only Add a Private Service Connect NEG Cross-region internal proxy Network Load Balancer GCE VM IP PORT type endpoints Add a Private Service Connect NEG All of the backends must be of the same type (instance groups or NEGs).
- The following table specifies the scope of health checks supported by internal proxy Network Load Balancers in each mode: Load balancer mode Health check type Regional internal proxy Network Load Balancer Regional regionHealthChecks Cross-region internal proxy Network Load Balancer Global healthChecks For more information about health checks, see the following: Health checks overview Use health checks Firewall rules Internal proxy Network Load Balancers require the following firewall rules: An ingress allow rule that permits traffic from the Google health check probes.
- The following table describes proxy-only subnet requirements for internal proxy Network Load Balancers: Load balancer mode Value of the proxy-only subnet --purpose flag Regional internal proxy Network Load Balancer REGIONAL MANAGED PROXY Regional and cross-region load balancers cannot share the same subnets All the regional Envoy-based load balancers in a region and VPC network share the same proxy-only subnet.
- Cross-region internal proxy Network Load Balancer GLOBAL MANAGED PROXY Regional and cross-region load balancers cannot share the same subnets The cross-region Envoy-based load balancer must have a proxy-only subnet in each region in which the load balancer is configured.

### "Network endpoint groups overview \_|\_ Cloud Load Balancing \_|\_ Google\

- URL: [https://docs.cloud.google.com/load-balancing/docs/negs](https://docs.cloud.google.com/load-balancing/docs/negs)
- Source ID: `site-docs-root`
- Final score: 280
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Number of endpoints 1 or more Health checks for NEGs attached to backend services Centralized health checks when you use this NEG with the following load balancers: Global external Application Load Balancer Classic Application Load Balancer Global external proxy Network Load Balancer Classic proxy Network Load Balancer Distributed Envoy health checks when you use this NEG with the following load balancers: Regional external Application Load Balancer Regional internal Application Load Balancer Regional external proxy Network Load Balancer Regional internal proxy Network Load Balancer Cross-region internal Application Load Balancer Cross-region internal proxy Network Load Balancer Scope Zonal Routing To an on-premises network or another Cloud provider network by way of Cloud Interconnect VLAN attachment, Cloud VPN tunnel, or Router appliance VM in a VPC network Google Cloud products that use this NEG External Application Load Balancer Set up a global external Application Load Balancer with hybrid connectivity Set up a classic Application Load Balancer with hybrid connectivity Set up a regional external Application Load Balancer with hybrid connectivity Internal Application Load Balancer Set up a regional internal Application Load Balancer with hybrid connectivity Set up a cross-region internal Application Load Balancer with hybrid connectivity External proxy Network Load Balancer Global external proxy Network Load Balancer Classic proxy Network Load Balancer Set up a regional external proxy Network Load Balancer with hybrid connectivity Internal proxy Network Load Balancer Set up a regional internal proxy Network Load Balancer with hybrid connectivity Set up a cross-region internal proxy Network Load Balancer with zonal and hybrid connectivity Cloud Service Mesh: Cloud Service Mesh with hybrid connectivity network endpoint groups Set up network edge services for multi‑environment deployments Private Service Connect NEG Features Details Purpose A single endpoint that resolves to one of the following: A Google-managed regional API endpoint A Google-managed global API endpoint A managed service published using Private Service Connect NetworkEndpointType API name PRIVATE SERVICE CONNECT Number of endpoints 1 Health checks for NEGs attached to backend services Not applicable Scope Regional Routing Private Service Connect: Supported load balancers and targets Google Cloud products that use this NEG Cross-region internal Application Load Balancer Regional internal Application Load Balancer Global external Application Load Balancer Private Service Connect NEGs are not supported by the classic Application Load Balancer.
- Scope Zonal Routing VPC network Google Cloud products that use this NEG Internal passthrough Network Load Balancer ( GCE VM IP endpoints): Set up zonal NEGs for internal passthrough Network Load Balancers External passthrough Network Load Balancer ( GCE VM IP endpoints): Set up zonal NEGs for external passthrough Network Load Balancers Regional internal proxy Network Load Balancer ( GCE VM IP PORT endpoints) Set up zonal NEGs for regional internal proxy Network Load Balancers Cross-region internal proxy Network Load Balancer ( GCE VM IP PORT endpoints) Set up zonal and hybrid NEGs for cross-region internal proxy Network Load Balancers Regional external proxy Network Load Balancer ( GCE VM IP PORT endpoints) Set up zonal NEGs for regional external proxy Network Load Balancers Internal Application Load Balancer ( GCE VM IP PORT endpoints) Set up a regional internal Application Load Balancer with zonal and hybrid NEGs Set up a cross-region internal Application Load Balancer with zonal and hybrid NEGs Global external Application Load Balancer ( GCE VM IP PORT endpoints) Classic Application Load Balancer ( GCE VM IP PORT endpoints) Regional external Application Load Balancer ( GCE VM IP PORT endpoints) Global external proxy Network Load Balancer ( GCE VM IP PORT endpoints) Classic proxy Network Load Balancer ( GCE VM IP PORT endpoints) Cloud Service Mesh ( GCE VM IP PORT endpoints) Related documentation: Zonal NEGs overview Set up Zonal NEGs Internet NEG Features Details Purpose A single internet-routable endpoint that is hosted outside of Google Cloud.
- Regional internal proxy Network Load Balancer Cross-region internal proxy Network Load Balancer Regional external proxy Network Load Balancer For more information about Private Service Connect NEGs, see About Private Service Connect backends .
- OR INTERNET FQDN PORT FQDN:Port Number of endpoints Global NEGs: 1 Regional NEGs: 256 Health checks for NEGs attached to backend services Global NEGs: not supported Regional NEGs: distributed Envoy health checks Scope Global or regional Routing Internet Google Cloud products that use this NEG Global internet NEGs Cloud CDN ( INTERNET IP PORT or INTERNET FQDN PORT endpoint): Set up Cloud CDN with an external backend External Application Load Balancer ( INTERNET IP PORT or INTERNET FQDN PORT endpoint): Set up a global external Application Load Balancer with an external backend Set up a classic Application Load Balancer with an external backend Cloud Service Mesh ( INTERNET FQDN PORT endpoint): Cloud Service Mesh with internet NEGs overview Set up Cloud Service Mesh with an external backend Regional internet NEGs ( INTERNET IP PORT or INTERNET FQDN PORT endpoint) Set up a regional external Application Load Balancer with an external backend Set up a regional internal Application Load Balancer with an external backend Set up a regional external proxy Network Load Balancer with an external backend Set up a regional internal proxy Network Load Balancer with an external backend Serverless NEG Features Details Purpose A single endpoint within Google's network that resolves to an App Engine, Cloud Run functions, API Gateway, or Cloud Run resource.

### "Forwarding rules overview \_|\_ Cloud Load Balancing \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/load-balancing/docs/forwarding-rule-concepts](https://docs.cloud.google.com/load-balancing/docs/forwarding-rule-concepts)
- Source ID: `site-docs-reference-required-3`
- Final score: 262
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cross-region internal Application Load Balancer Regional internal Application Load Balancer Regional internal proxy Network Load Balancer Cross-region internal proxy Network Load Balancer Internal passthrough Network Load Balancer These load balancers support traffic within a VPC network (including networks connected to it).
- Product Load balancing scheme Target Port requirements Global external Application Load Balancer Regional external Application Load Balancer EXTERNAL MANAGED Target HTTP proxy Target HTTPS proxy Can reference exactly one port from 1-65535 Classic Application Load Balancer EXTERNAL Target HTTP proxy Target HTTPS proxy Can reference exactly one port from 1-65535 Cross-region internal Application Load Balancer Regional internal Application Load Balancer INTERNAL MANAGED Target HTTP proxy Target HTTPS proxy Can reference exactly one port from 1-65535 Global external proxy Network Load Balancer EXTERNAL MANAGED Target TCP proxy Target SSL proxy Can reference exactly one port from 1-65535 Classic proxy Network Load Balancer EXTERNAL Target TCP proxy Target SSL proxy Can reference exactly one port from 1-65535 Regional external proxy Network Load Balancer EXTERNAL MANAGED Target TCP proxy Can reference exactly one port from 1-65535 Regional internal proxy Network Load Balancer INTERNAL MANAGED Target TCP proxy Can reference exactly one port from 1-65535 Cross-region internal proxy Network Load Balancer INTERNAL MANAGED Target TCP proxy Can reference exactly one port from 1-65535 Regional external passthrough Network Load Balancer EXTERNAL Backend service If the forwarding rule protocol is TCP or UDP , you can configure: A list of up to five (contiguous or non-contiguous) ports, or, A single port range (contiguous), or, All ports.
- Global external proxy Network Load Balancer EXTERNAL MANAGED Target SSL proxy Target TCP proxy External Global Premium Tier Yes, optional IPv6 available Classic proxy Network Load Balancer EXTERNAL Target SSL proxy Target TCP proxy External Regional or global, matching the forwarding rule Premium Tier: Global external IPv4 or IPv6 address and forwarding rule Standard Tier: Regional external IPv4 address and forwarding rule Yes, optional IPv6 available with a global external address (Premium Tier) Regional external proxy Network Load Balancer EXTERNAL MANAGED Target TCP proxy External Regional Premium Tier or Standard Tier Yes, optional IPv6 not available Regional internal proxy Network Load Balancer INTERNAL MANAGED Target TCP proxy Internal Regional Premium Tier Yes, optional Forwarding rule address must be within the primary IPv4 address range of the associated subnet Cross-region internal proxy Network Load Balancer INTERNAL MANAGED Target TCP proxy Internal Regional Premium Tier Yes, optional Forwarding rule address must be within the primary IPv4 address range of the associated subnet Regional external passthrough Network Load Balancer EXTERNAL Backend service Target pool External Regional Standard (IPv4 addresses) Premium (IPv4 or IPv6 addresses) Yes, optional IPv6 support requires a backend service-based regional external passthrough Network Load Balancer.
- Product Load balancing scheme IP protocol options Global external Application Load Balancer EXTERNAL MANAGED TCP Classic Application Load Balancer EXTERNAL TCP Regional external Application Load Balancer EXTERNAL MANAGED TCP Cross-region internal Application Load Balancer INTERNAL MANAGED TCP Regional internal Application Load Balancer INTERNAL MANAGED TCP Global external proxy Network Load Balancer EXTERNAL MANAGED TCP or SSL Classic proxy Network Load Balancer EXTERNAL TCP or SSL Regional external proxy Network Load Balancer EXTERNAL MANAGED TCP Regional internal proxy Network Load Balancer INTERNAL MANAGED TCP Cross-region internal proxy Network Load Balancer INTERNAL MANAGED TCP Regional external passthrough Network Load Balancer EXTERNAL TCP, UDP, or L3 DEFAULT Internal passthrough Network Load Balancer INTERNAL TCP, UDP, or L3 DEFAULT Cloud Service Mesh INTERNAL SELF MANAGED TCP IP address specifications The forwarding rule must have an IP address that your customers use to reach your load balancer.

