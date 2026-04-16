---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:54:57.796Z"
product_name: "Cloud Load Balancing"
product_slug: "cloud-load-balancing"
feature_name: "Network endpoint groups"
feature_slug: "network-endpoint-groups"
latest_feature_date: "2019-06-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/load-balancing/docs/negs"
  - "https://docs.cloud.google.com/load-balancing/docs/network"
  - "https://docs.cloud.google.com/load-balancing/docs/backend-service"
keywords:
  - "network"
  - "endpoint"
  - "groups"
  - "let"
  - "load"
  - "balancers"
  - "target"
  - "individual"
---

# Network endpoint groups

Product: Cloud Load Balancing
Coverage: MEDIUM

## Step 02 Summary

Network endpoint groups let load balancers target individual endpoints rather than only whole instance groups.

## Extended Definition

Network endpoint groups let load balancers target individual endpoints rather than only whole instance groups.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/load-balancing/docs/negs](https://docs.cloud.google.com/load-balancing/docs/negs)
- [https://docs.cloud.google.com/load-balancing/docs/network](https://docs.cloud.google.com/load-balancing/docs/network)
- [https://docs.cloud.google.com/load-balancing/docs/backend-service](https://docs.cloud.google.com/load-balancing/docs/backend-service)

## Supporting Pages

### "Network endpoint groups overview \_|\_ Cloud Load Balancing \_|\_ Google\

- URL: [https://docs.cloud.google.com/load-balancing/docs/negs](https://docs.cloud.google.com/load-balancing/docs/negs)
- Source ID: `site-docs-root`
- Final score: 217
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Number of endpoints 1 or more Health checks for NEGs attached to backend services Centralized health checks when you use this NEG with the following load balancers: Global external Application Load Balancer Classic Application Load Balancer Global external proxy Network Load Balancer Classic proxy Network Load Balancer Distributed Envoy health checks when you use this NEG with the following load balancers: Regional external Application Load Balancer Regional internal Application Load Balancer Regional external proxy Network Load Balancer Regional internal proxy Network Load Balancer Cross-region internal Application Load Balancer Cross-region internal proxy Network Load Balancer Scope Zonal Routing To an on-premises network or another Cloud provider network by way of Cloud Interconnect VLAN attachment, Cloud VPN tunnel, or Router appliance VM in a VPC network Google Cloud products that use this NEG External Application Load Balancer Set up a global external Application Load Balancer with hybrid connectivity Set up a classic Application Load Balancer with hybrid connectivity Set up a regional external Application Load Balancer with hybrid connectivity Internal Application Load Balancer Set up a regional internal Application Load Balancer with hybrid connectivity Set up a cross-region internal Application Load Balancer with hybrid connectivity External proxy Network Load Balancer Global external proxy Network Load Balancer Classic proxy Network Load Balancer Set up a regional external proxy Network Load Balancer with hybrid connectivity Internal proxy Network Load Balancer Set up a regional internal proxy Network Load Balancer with hybrid connectivity Set up a cross-region internal proxy Network Load Balancer with zonal and hybrid connectivity Cloud Service Mesh: Cloud Service Mesh with hybrid connectivity network endpoint groups Set up network edge services for multi‑environment deployments Private Service Connect NEG Features Details Purpose A single endpoint that resolves to one of the following: A Google-managed regional API endpoint A Google-managed global API endpoint A managed service published using Private Service Connect NetworkEndpointType API name PRIVATE SERVICE CONNECT Number of endpoints 1 Health checks for NEGs attached to backend services Not applicable Scope Regional Routing Private Service Connect: Supported load balancers and targets Google Cloud products that use this NEG Cross-region internal Application Load Balancer Regional internal Application Load Balancer Global external Application Load Balancer Private Service Connect NEGs are not supported by the classic Application Load Balancer.
- Scope Zonal Routing VPC network Google Cloud products that use this NEG Internal passthrough Network Load Balancer ( GCE VM IP endpoints): Set up zonal NEGs for internal passthrough Network Load Balancers External passthrough Network Load Balancer ( GCE VM IP endpoints): Set up zonal NEGs for external passthrough Network Load Balancers Regional internal proxy Network Load Balancer ( GCE VM IP PORT endpoints) Set up zonal NEGs for regional internal proxy Network Load Balancers Cross-region internal proxy Network Load Balancer ( GCE VM IP PORT endpoints) Set up zonal and hybrid NEGs for cross-region internal proxy Network Load Balancers Regional external proxy Network Load Balancer ( GCE VM IP PORT endpoints) Set up zonal NEGs for regional external proxy Network Load Balancers Internal Application Load Balancer ( GCE VM IP PORT endpoints) Set up a regional internal Application Load Balancer with zonal and hybrid NEGs Set up a cross-region internal Application Load Balancer with zonal and hybrid NEGs Global external Application Load Balancer ( GCE VM IP PORT endpoints) Classic Application Load Balancer ( GCE VM IP PORT endpoints) Regional external Application Load Balancer ( GCE VM IP PORT endpoints) Global external proxy Network Load Balancer ( GCE VM IP PORT endpoints) Classic proxy Network Load Balancer ( GCE VM IP PORT endpoints) Cloud Service Mesh ( GCE VM IP PORT endpoints) Related documentation: Zonal NEGs overview Set up Zonal NEGs Internet NEG Features Details Purpose A single internet-routable endpoint that is hosted outside of Google Cloud.
- Home Documentation Networking Load Balancing Guides Send feedback Network endpoint groups overview Stay organized with collections Save and categorize content based on your preferences.
- OR INTERNET FQDN PORT FQDN:Port Number of endpoints Global NEGs: 1 Regional NEGs: 256 Health checks for NEGs attached to backend services Global NEGs: not supported Regional NEGs: distributed Envoy health checks Scope Global or regional Routing Internet Google Cloud products that use this NEG Global internet NEGs Cloud CDN ( INTERNET IP PORT or INTERNET FQDN PORT endpoint): Set up Cloud CDN with an external backend External Application Load Balancer ( INTERNET IP PORT or INTERNET FQDN PORT endpoint): Set up a global external Application Load Balancer with an external backend Set up a classic Application Load Balancer with an external backend Cloud Service Mesh ( INTERNET FQDN PORT endpoint): Cloud Service Mesh with internet NEGs overview Set up Cloud Service Mesh with an external backend Regional internet NEGs ( INTERNET IP PORT or INTERNET FQDN PORT endpoint) Set up a regional external Application Load Balancer with an external backend Set up a regional internal Application Load Balancer with an external backend Set up a regional external proxy Network Load Balancer with an external backend Set up a regional internal proxy Network Load Balancer with an external backend Serverless NEG Features Details Purpose A single endpoint within Google's network that resolves to an App Engine, Cloud Run functions, API Gateway, or Cloud Run resource.

### "Backend service-based regional external passthrough Network Load Balancer\

- URL: [https://docs.cloud.google.com/load-balancing/docs/network](https://docs.cloud.google.com/load-balancing/docs/network)
- Source ID: `site-docs-root`
- Final score: 201
- Re-rank relevance: N/A

Evidence snippets:
- Regional external passthrough Network Load Balancers are regional, Layer 4 load balancers that distribute external traffic among backends (instance groups or network endpoint groups (NEGs)) in the same region as the load balancer.
- Location of load balancing resources 1 Required location of IP address resource Host project Host project Service project Service project or host project 1 Includes the forwarding rule, backend service, health check, and backends (NEGs and managed or unmanaged instance groups) Traffic distribution Regional external passthrough Network Load Balancers support a variety of traffic distribution customization options, including session affinity, connection tracking, weighted load balancing, and failover.
- Traffic steering Forwarding rules for regional external passthrough Network Load Balancers can be configured to direct traffic coming from a specific source IP address or a range of IP addresses to a specific backend service (or target instance).
- Regional external passthrough Network Load Balancer with zonal instance groups Zonal NEGs A regional external passthrough Network Load Balancer distributes connections among GCE VM IP endpoints contained within zonal network endpoint groups .

### "Backend services overview \_|\_ Cloud Load Balancing \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/load-balancing/docs/backend-service](https://docs.cloud.google.com/load-balancing/docs/backend-service)
- Source ID: `site-docs-reference-required-3`
- Final score: 191
- Re-rank relevance: N/A

Evidence snippets:
- Table: Balancing modes for Proxy Network Load Balancers Supported backend Balancing mode CONNECTION RATE IN FLIGHT UTILIZATION CUSTOM METRICS Instance groups Zonal NEGs with GCE VM IP PORT endpoints Zonal hybrid connectivity NEGs Target capacity specifications Target capacity specifications are relevant to Application Load Balancer, Cloud Service Mesh, and proxy Network Load Balancer backends that support balancing mode, target capacity, and capacity scaler settings.
- For more information about how passthrough Network Load Balancers distribute new connections, see the following: Traffic distribution for internal passthrough Network Load Balancers Traffic distribution for regional external passthrough Network Load Balancers Supported backends For Application Load Balancers, Cloud Service Mesh, and proxy Network Load Balancers, the following types of backends support the balancing mode, target capacity, and capacity scaler parameters: Instance group backends Zonal NEGs with GCE VM IP PORT endpoints Zonal hybrid connectivity NEGs Internet NEGs, serverless NEGs, and Private Service Connect NEGs don't support the balancing mode, target capacity, and capacity scaler parameters.
- Application Load Balancers (except classic Application Load Balancers) and Cloud Service Mesh backends with a long traffic duration setting can use the IN FLIGHT balancing mode with one of the following required target capacity parameters: Table : Target capacity parameters for the IN FLIGHT balancing mode Target capacity parameter Supported backend Zonal (managed or unmanaged) instance groups Regional managed instance groups Zonal NEGs with GCE VM IP PORT endpoints Zonal hybrid connectivity NEGs max-in-flight-requests Target number of in-progress HTTP requests per backend zone max-in-flight-requests-per-instance Target number of in-progress HTTP requests per VM instance.
- Table : UTILIZATION balancing mode target capacity parameters and parameter combinations for proxy Network Load Balancer backends Target capacity parameter or parameter combination Supported backend Zonal (managed or unmanaged) instance groups Regional managed instance groups Zonal NEGs with GCE VM IP PORT endpoints Zonal hybrid connectivity NEGs max-utilization Target utilization per backend zone max-connections Target TCP connections per backend zone max-connections and max-utilization Target is the first to be reached in the backend zone: Zone's target utilization Zone's target TCP connections max-connections-per-instance Target TCP connections per VM instance.

