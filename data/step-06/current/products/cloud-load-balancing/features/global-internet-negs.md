---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:54:57.790Z"
product_name: "Cloud Load Balancing"
product_slug: "cloud-load-balancing"
feature_name: "Global internet NEGs"
feature_slug: "global-internet-negs"
latest_feature_date: "2020-03-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/load-balancing/docs/negs"
  - "https://docs.cloud.google.com/load-balancing/docs/quotas"
  - "https://docs.cloud.google.com/load-balancing/docs/https"
keywords:
  - "global"
  - "internet"
  - "negs"
  - "network"
  - "endpoint"
  - "groups"
  - "endpoints"
  - "so"
---

# Global internet NEGs

Product: Cloud Load Balancing
Coverage: MEDIUM

## Step 02 Summary

Network endpoint groups support global internet endpoints so Cloud CDN can use custom origins hosted on-premises or in other clouds; Network endpoint groups support global internet endpoints so Cloud CDN can use custom origins hosted on-premises or in other clouds.

## Extended Definition

Network endpoint groups support global internet endpoints so Cloud CDN can use custom origins hosted on-premises or in other clouds; Network endpoint groups support global internet endpoints so Cloud CDN can use custom origins hosted on-premises or in other clouds.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/load-balancing/docs/negs](https://docs.cloud.google.com/load-balancing/docs/negs)
- [https://docs.cloud.google.com/load-balancing/docs/quotas](https://docs.cloud.google.com/load-balancing/docs/quotas)
- [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https)

## Supporting Pages

### "Network endpoint groups overview \_|\_ Cloud Load Balancing \_|\_ Google\

- URL: [https://docs.cloud.google.com/load-balancing/docs/negs](https://docs.cloud.google.com/load-balancing/docs/negs)
- Source ID: `site-docs-root`
- Final score: 267
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Number of endpoints 1 or more Health checks for NEGs attached to backend services Centralized health checks when you use this NEG with the following load balancers: Global external Application Load Balancer Classic Application Load Balancer Global external proxy Network Load Balancer Classic proxy Network Load Balancer Distributed Envoy health checks when you use this NEG with the following load balancers: Regional external Application Load Balancer Regional internal Application Load Balancer Regional external proxy Network Load Balancer Regional internal proxy Network Load Balancer Cross-region internal Application Load Balancer Cross-region internal proxy Network Load Balancer Scope Zonal Routing To an on-premises network or another Cloud provider network by way of Cloud Interconnect VLAN attachment, Cloud VPN tunnel, or Router appliance VM in a VPC network Google Cloud products that use this NEG External Application Load Balancer Set up a global external Application Load Balancer with hybrid connectivity Set up a classic Application Load Balancer with hybrid connectivity Set up a regional external Application Load Balancer with hybrid connectivity Internal Application Load Balancer Set up a regional internal Application Load Balancer with hybrid connectivity Set up a cross-region internal Application Load Balancer with hybrid connectivity External proxy Network Load Balancer Global external proxy Network Load Balancer Classic proxy Network Load Balancer Set up a regional external proxy Network Load Balancer with hybrid connectivity Internal proxy Network Load Balancer Set up a regional internal proxy Network Load Balancer with hybrid connectivity Set up a cross-region internal proxy Network Load Balancer with zonal and hybrid connectivity Cloud Service Mesh: Cloud Service Mesh with hybrid connectivity network endpoint groups Set up network edge services for multi‑environment deployments Private Service Connect NEG Features Details Purpose A single endpoint that resolves to one of the following: A Google-managed regional API endpoint A Google-managed global API endpoint A managed service published using Private Service Connect NetworkEndpointType API name PRIVATE SERVICE CONNECT Number of endpoints 1 Health checks for NEGs attached to backend services Not applicable Scope Regional Routing Private Service Connect: Supported load balancers and targets Google Cloud products that use this NEG Cross-region internal Application Load Balancer Regional internal Application Load Balancer Global external Application Load Balancer Private Service Connect NEGs are not supported by the classic Application Load Balancer.
- Scope Zonal Routing VPC network Google Cloud products that use this NEG Internal passthrough Network Load Balancer ( GCE VM IP endpoints): Set up zonal NEGs for internal passthrough Network Load Balancers External passthrough Network Load Balancer ( GCE VM IP endpoints): Set up zonal NEGs for external passthrough Network Load Balancers Regional internal proxy Network Load Balancer ( GCE VM IP PORT endpoints) Set up zonal NEGs for regional internal proxy Network Load Balancers Cross-region internal proxy Network Load Balancer ( GCE VM IP PORT endpoints) Set up zonal and hybrid NEGs for cross-region internal proxy Network Load Balancers Regional external proxy Network Load Balancer ( GCE VM IP PORT endpoints) Set up zonal NEGs for regional external proxy Network Load Balancers Internal Application Load Balancer ( GCE VM IP PORT endpoints) Set up a regional internal Application Load Balancer with zonal and hybrid NEGs Set up a cross-region internal Application Load Balancer with zonal and hybrid NEGs Global external Application Load Balancer ( GCE VM IP PORT endpoints) Classic Application Load Balancer ( GCE VM IP PORT endpoints) Regional external Application Load Balancer ( GCE VM IP PORT endpoints) Global external proxy Network Load Balancer ( GCE VM IP PORT endpoints) Classic proxy Network Load Balancer ( GCE VM IP PORT endpoints) Cloud Service Mesh ( GCE VM IP PORT endpoints) Related documentation: Zonal NEGs overview Set up Zonal NEGs Internet NEG Features Details Purpose A single internet-routable endpoint that is hosted outside of Google Cloud.
- OR INTERNET FQDN PORT FQDN:Port Number of endpoints Global NEGs: 1 Regional NEGs: 256 Health checks for NEGs attached to backend services Global NEGs: not supported Regional NEGs: distributed Envoy health checks Scope Global or regional Routing Internet Google Cloud products that use this NEG Global internet NEGs Cloud CDN ( INTERNET IP PORT or INTERNET FQDN PORT endpoint): Set up Cloud CDN with an external backend External Application Load Balancer ( INTERNET IP PORT or INTERNET FQDN PORT endpoint): Set up a global external Application Load Balancer with an external backend Set up a classic Application Load Balancer with an external backend Cloud Service Mesh ( INTERNET FQDN PORT endpoint): Cloud Service Mesh with internet NEGs overview Set up Cloud Service Mesh with an external backend Regional internet NEGs ( INTERNET IP PORT or INTERNET FQDN PORT endpoint) Set up a regional external Application Load Balancer with an external backend Set up a regional internal Application Load Balancer with an external backend Set up a regional external proxy Network Load Balancer with an external backend Set up a regional internal proxy Network Load Balancer with an external backend Serverless NEG Features Details Purpose A single endpoint within Google's network that resolves to an App Engine, Cloud Run functions, API Gateway, or Cloud Run resource.
- Number of endpoints 1 Health checks for NEGs attached to backend services Not applicable Scope Regional Routing To Google APIs and Services Google Cloud products that use this NEG External Application Load Balancer: Set up a global external Application Load Balancer with an App Engine, Cloud Run functions, or Cloud Run backend Set up a classic Application Load Balancer with an App Engine, Cloud Run functions, or Cloud Run backend Set up a regional external Application Load Balancer with a Cloud Run backend Get started with an external Application Load Balancer for API Gateway Regional internal Application Load Balancer (Cloud Run and Cloud Run functions 2nd gen only): Set up a regional internal Application Load Balancer with a Cloud Run backend Cross-region internal Application Load Balancer (Cloud Run and Cloud Run functions 2nd gen only): Set up a cross-region internal Application Load Balancer with a Cloud Run backend Hybrid connectivity NEG Features Details Purpose One or more endpoints that resolve to on-premises services, server applications in another cloud, and other internet-reachable services outside Google Cloud.

### Quotas and limits \_|\_ Cloud Load Balancing \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/load-balancing/docs/quotas](https://docs.cloud.google.com/load-balancing/docs/quotas)
- Source ID: `site-docs-root`
- Final score: 229
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Maximum number of configured primary or configured failover backends (instances in instance groups or endpoints in GCE VM IP NEGs) on an internal passthrough Network Load Balancer backend service Without backend subsetting: 250 With backend subsetting enabled: 2000 These limits cannot be increased.
- Maximum number of VMs per zonal managed instance group or per zonal unmanaged instance group connected to a pass-through load balancer's backend service Maximum for zonal managed instance groups: 1,000 Maximum for zonal unmanaged instance groups: 2,000 Internal passthrough Network Load Balancers also have a limit on the number of individual VM instances or endpoints to which a backend service can distribute packets.
- Endpoints per global internet NEG 1 This limit cannot be increased.
- Item Quotas and limits Notes Maximum number of VMs per regional managed instance group connected to a pass-through load balancer's backend service 2,000 Internal passthrough Network Load Balancers also have a limit on the number of individual VM instances or endpoints to which a backend service can distribute packets.

### "External Application Load Balancer overview \_|\_ Cloud Load Balancing \_\

- URL: [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https)
- Source ID: `site-docs-reference-required-3`
- Final score: 219
- Re-rank relevance: N/A

Evidence snippets:
- Note: For internet Network Endpoint Groups (NEGs), requests from the load balancer come from different IP ranges depending on the type of NEG (global or regional).
- The following table summarizes the required source IP address ranges for the firewall rules: Load balancer mode Health check source ranges Request source ranges Global external Application Load Balancer 35.191.0.0/16 130.211.0.0/22 For IPv6 traffic to the backends: 2600:2d00:1:b029::/64 The source of GFE traffic depends on the backend type: Instance groups and zonal NEGs ( GCE VM IP PORT ): 130.211.0.0/22 35.191.0.0/16 For IPv6 traffic to the backends: 2600:2d00:1:1::/64 Hybrid connectivity NEGs ( NON GCP PRIVATE IP PORT ): 130.211.0.0/22 35.191.0.0/16 Internet NEGs ( INTERNET FQDN PORT and INTERNET IP PORT ): 34.96.0.0/20 34.127.192.0/18 SERVERLESS NEGs and backend buckets: Google's production network handles packet routing Classic Application Load Balancer 35.191.0.0/16 130.211.0.0/22 The source of GFE traffic depends on the backend type: Instance groups, zonal NEGs ( GCE VM IP PORT ), and hybrid connectivity NEGs ( NON GCP PRIVATE IP PORT ): 35.191.0.0/16 130.211.0.0/22 Internet NEGs ( INTERNET FQDN PORT and INTERNET IP PORT ): 34.96.0.0/20 34.127.192.0/18 SERVERLESS NEGs and backend buckets: Google's production network handles packet routing.
- Load balancer mode SSL policies supported Global external Application Load Balancer Classic Application Load Balancer Regional external Application Load Balancer Backend services A backend service provides configuration information to the load balancer so that it can direct requests to its backends—for example, Compute Engine instance groups or network endpoint groups (NEGs).
- Load balancer mode Supported backends on a backend service 1 Supports backend buckets Supports Cloud Armor Supports Cloud CDN 2 Supports IAP 2 Supports Service Extensions Instance groups 3 Zonal NEGs 4 Internet NEGs Serverless NEGs Hybrid NEGs Private Service Connect NEGs Global external Application Load Balancer Classic Application Load Balancer Premium Tier Regional external Application Load Balancer 1 Backends on a backend service must be the same type: all instance groups or all the same type of NEG.

