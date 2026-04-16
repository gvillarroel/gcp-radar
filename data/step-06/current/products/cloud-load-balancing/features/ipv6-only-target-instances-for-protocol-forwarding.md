---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:54:57.679Z"
product_name: "Cloud Load Balancing"
product_slug: "cloud-load-balancing"
feature_name: "IPv6-only target instances for protocol forwarding"
feature_slug: "ipv6-only-target-instances-for-protocol-forwarding"
latest_feature_date: "2025-08-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/load-balancing/docs/forwarding-rule-concepts"
  - "https://docs.cloud.google.com/load-balancing/docs/https"
  - "https://docs.cloud.google.com/load-balancing/docs/backend-service"
keywords:
  - "ipv6"
  - "only"
  - "target"
  - "instances"
  - "protocol"
  - "forwarding"
  - "supports"
---

# IPv6-only target instances for protocol forwarding

Product: Cloud Load Balancing
Coverage: MEDIUM

## Step 02 Summary

Protocol forwarding supports IPv6-only target instances.

## Extended Definition

Protocol forwarding supports IPv6-only target instances.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/load-balancing/docs/forwarding-rule-concepts](https://docs.cloud.google.com/load-balancing/docs/forwarding-rule-concepts)
- [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https)
- [https://docs.cloud.google.com/load-balancing/docs/backend-service](https://docs.cloud.google.com/load-balancing/docs/backend-service)

## Supporting Pages

### "Forwarding rules overview \_|\_ Cloud Load Balancing \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/load-balancing/docs/forwarding-rule-concepts](https://docs.cloud.google.com/load-balancing/docs/forwarding-rule-concepts)
- Source ID: `site-docs-reference-required-3`
- Final score: 221
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Product Load balancing scheme Target Port requirements Global external Application Load Balancer Regional external Application Load Balancer EXTERNAL MANAGED Target HTTP proxy Target HTTPS proxy Can reference exactly one port from 1-65535 Classic Application Load Balancer EXTERNAL Target HTTP proxy Target HTTPS proxy Can reference exactly one port from 1-65535 Cross-region internal Application Load Balancer Regional internal Application Load Balancer INTERNAL MANAGED Target HTTP proxy Target HTTPS proxy Can reference exactly one port from 1-65535 Global external proxy Network Load Balancer EXTERNAL MANAGED Target TCP proxy Target SSL proxy Can reference exactly one port from 1-65535 Classic proxy Network Load Balancer EXTERNAL Target TCP proxy Target SSL proxy Can reference exactly one port from 1-65535 Regional external proxy Network Load Balancer EXTERNAL MANAGED Target TCP proxy Can reference exactly one port from 1-65535 Regional internal proxy Network Load Balancer INTERNAL MANAGED Target TCP proxy Can reference exactly one port from 1-65535 Cross-region internal proxy Network Load Balancer INTERNAL MANAGED Target TCP proxy Can reference exactly one port from 1-65535 Regional external passthrough Network Load Balancer EXTERNAL Backend service If the forwarding rule protocol is TCP or UDP , you can configure: A list of up to five (contiguous or non-contiguous) ports, or, A single port range (contiguous), or, All ports.
- Global external proxy Network Load Balancer EXTERNAL MANAGED Target SSL proxy Target TCP proxy External Global Premium Tier Yes, optional IPv6 available Classic proxy Network Load Balancer EXTERNAL Target SSL proxy Target TCP proxy External Regional or global, matching the forwarding rule Premium Tier: Global external IPv4 or IPv6 address and forwarding rule Standard Tier: Regional external IPv4 address and forwarding rule Yes, optional IPv6 available with a global external address (Premium Tier) Regional external proxy Network Load Balancer EXTERNAL MANAGED Target TCP proxy External Regional Premium Tier or Standard Tier Yes, optional IPv6 not available Regional internal proxy Network Load Balancer INTERNAL MANAGED Target TCP proxy Internal Regional Premium Tier Yes, optional Forwarding rule address must be within the primary IPv4 address range of the associated subnet Cross-region internal proxy Network Load Balancer INTERNAL MANAGED Target TCP proxy Internal Regional Premium Tier Yes, optional Forwarding rule address must be within the primary IPv4 address range of the associated subnet Regional external passthrough Network Load Balancer EXTERNAL Backend service Target pool External Regional Standard (IPv4 addresses) Premium (IPv4 or IPv6 addresses) Yes, optional IPv6 support requires a backend service-based regional external passthrough Network Load Balancer.
- Product and scheme Target IP address type IP address scope IP address tier Reservable IP address Notes Global external Application Load Balancer EXTERNAL MANAGED Target HTTP proxy Target HTTPS proxy External Global Premium Tier: Global external IP address and forwarding rule Yes, optional IPv6 available Classic Application Load Balancer EXTERNAL Target HTTP proxy Target HTTPS proxy External Regional or global, matching the forwarding rule Premium Tier: Global external IPv4 or IPv6 address and forwarding rule Standard Tier: Regional external IPv4 address and forwarding rule Yes, optional IPv6 available with a global external address (Premium Tier) Regional external Application Load Balancer EXTERNAL MANAGED Target HTTP proxy Target HTTPS proxy External Regional Premium Tier or Standard Tier Yes, optional IPv6 not available Cross-region internal Application Load Balancer INTERNAL MANAGED Target HTTP proxy Target HTTPS proxy Internal Regional Premium Tier Yes, optional Global forwarding rule is configured with a regional IP address within the primary IPv4 address range of the associated regional subnet.
- For information about configuring regional external passthrough Network Load Balancers, see one of the following: Setting up a regional external passthrough Network Load Balancer with a backend service (TCP or UDP traffic only) Setting up a regional external passthrough Network Load Balancer with a backend service (multiple protocols) Setting up a regional external passthrough Network Load Balancer with a target pool How Network Service Tiers affect load balancers In Network Service Tiers , the distinction between Standard Tier and Premium Tier depends on how far traffic is routed over the public internet: Standard Tier : Offloads traffic as close as possible to the data center.

### "Backend services overview \_|\_ Cloud Load Balancing \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/load-balancing/docs/backend-service](https://docs.cloud.google.com/load-balancing/docs/backend-service)
- Source ID: `site-docs-reference-required-3`
- Final score: 191
- Re-rank relevance: N/A

Evidence snippets:
- Table: Backend services and supported backend types Product Maximum number of backend services Scope of backend service Supported backend types Load balancing scheme Global external Application Load Balancer Multiple Global Each backend service supports one of the following backend combinations: All instance group backends: One or more managed, unmanaged, or a combination of managed and unmanaged instance group backends 1 All zonal NEGs: One or more GCE VM IP PORT type zonal NEGs 1 All hybrid connectivity NEGs: One or more NON GCP PRIVATE IP PORT type NEGs A combination of zonal and hybrid NEGs: GCE VM IP PORT and NON GCP PRIVATE IP PORT type NEGs 2 All serverless NEGs: One or more App Engine, Cloud Run, or Cloud Run functions resources One global internet NEG for an external backend Private Service Connect NEGs: Google APIs: a single Private Service Connect NEG Managed services: one or more Private Service Connect NEGs EXTERNAL MANAGED Classic Application Load Balancer Multiple Global 3 Each backend service supports one of the following backend combinations: All instance group backends: One or more managed, unmanaged, or a combination of managed and unmanaged instance group backends All zonal NEGs: One or more GCE VM IP PORT type zonal NEGs All hybrid connectivity NEGs: One or more NON GCP PRIVATE IP PORT type NEGs A combination of zonal and hybrid NEGs: GCE VM IP PORT and NON GCP PRIVATE IP PORT type NEGs 2 All serverless NEGs: One or more App Engine, Cloud Run, or Cloud Run functions resources One global internet NEG for an external backend EXTERNAL 4 Regional external Application Load Balancer Multiple Regional Each backend service supports one of the following backend combinations: All instance group backends: One or more managed, unmanaged, or a combination of managed and unmanaged instance group backends 1 All zonal NEGs: One or more GCE VM IP PORT type zonal NEGs 1 All hybrid connectivity NEGs: One or more NON GCP PRIVATE IP PORT type NEGs A combination of zonal and hybrid NEGs: GCE VM IP PORT and NON GCP PRIVATE IP PORT type NEGs 2 A single serverless NEG (for Cloud Run or Cloud Run functions 2nd gen only) A single Private Service Connect NEG All regional internet NEGs for an external backend All published service backends ( Preview ) EXTERNAL MANAGED Cross-region internal Application Load Balancer Multiple Global Each backend service supports one of the following backend combinations: All instance group backends: One or more managed, unmanaged, or a combination of managed and unmanaged instance group backends 1 All zonal NEGs: One or more GCE VM IP PORT type zonal NEGs 1 All hybrid connectivity NEGs: One or more NON GCP PRIVATE IP PORT type NEGs A combination of zonal and hybrid NEGs: GCE VM IP PORT and NON GCP PRIVATE IP PORT type NEGs 2 A single serverless NEG (for Cloud Run or Cloud Run functions 2nd gen only) Private Service Connect NEGs: Google APIs: a single Private Service Connect NEG Managed services: one or more Private Service Connect NEGs INTERNAL MANAGED Regional internal Application Load Balancer Multiple Regional Each backend service supports one of the following backend combinations: All instance group backends: One or more managed, unmanaged, or a combination of managed and unmanaged instance group backends 1 All zonal NEGs: One or more GCE VM IP PORT type zonal NEGs 1 All hybrid connectivity NEGs: One or more NON GCP PRIVATE IP PORT type NEGs A combination of zonal and hybrid NEGs: GCE VM IP PORT and NON GCP PRIVATE IP PORT type NEGs 2 A single serverless NEG (for Cloud Run or Cloud Run functions 2nd gen only) A single Private Service Connect NEG All regional internet NEGs for an external backend All published service backends ( Preview ) INTERNAL MANAGED Global external proxy Network Load Balancer 1 Global 3 The backend service supports one of the following backend combinations: All instance group backends: One or more managed, unmanaged, or a combination of managed and unmanaged instance group backends 1 All zonal NEGs: One or more GCE VM IP PORT type zonal NEGs 1 All hybrid connectivity NEGs: One or more NON GCP PRIVATE IP PORT type NEGs A combination of zonal and hybrid NEGs: GCE VM IP PORT and NON GCP PRIVATE IP PORT type NEGs 2 Private Service Connect NEGs: Google APIs: a single Private Service Connect NEG Managed services: one or more Private Service Connect NEGs EXTERNAL MANAGED Classic proxy Network Load Balancer 1 Global 3 The backend service supports one of the following backend combinations: All instance group backends: One or more managed, unmanaged, or a combination of managed and unmanaged instance group backends All zonal NEGs: One or more GCE VM IP PORT type zonal NEGs All hybrid connectivity NEGs: One or more NON GCP PRIVATE IP PORT type NEGs A combination of zonal and hybrid NEGs: GCE VM IP PORT and NON GCP PRIVATE IP PORT type NEGs 2 EXTERNAL Regional external proxy Network Load Balancer Without TLS routes: 1 With TLS routes: Multiple Regional The backend service supports one of the following backend combinations: All instance group backends: One or more managed, unmanaged, or a combination of managed and unmanaged instance group backends 1 All zonal NEGs: One or more GCE VM IP PORT type zonal NEGs 1 All hybrid connectivity NEGs: One or more NON GCP PRIVATE IP PORT type NEGs A combination of zonal and hybrid NEGs: GCE VM IP PORT and NON GCP PRIVATE IP PORT type NEGs All regional internet NEGs for an external backend A single Private Service Connect NEG All published service backends ( Preview ) EXTERNAL MANAGED Regional internal proxy Network Load Balancer Without TLS routes: 1 With TLS routes: Multiple Regional The backend service supports one of the following backend combinations: All instance group backends: One or more managed, unmanaged, or a combination of managed and unmanaged instance group backends 1 All zonal NEGs: One or more GCE VM IP PORT type zonal NEGs 1 All hybrid connectivity NEGs: One or more NON GCP PRIVATE IP PORT type NEGs A combination of zonal and hybrid NEGs: GCE VM IP PORT and NON GCP PRIVATE IP PORT type NEGs All regional internet NEGs for an external backend A single Private Service Connect NEG All published service backends ( Preview ) INTERNAL MANAGED Cross-region internal proxy Network Load Balancer Without TLS routes: 1 With TLS routes: Multiple Global The backend service supports one of the following backend combinations: All instance group backends: One or more managed, unmanaged, or a combination of managed and unmanaged instance group backends 1 All zonal NEGs: One or more GCE VM IP PORT type zonal NEGs 1 All hybrid connectivity NEGs: One or more NON GCP PRIVATE IP PORT type NEGs A combination of zonal and hybrid NEGs: GCE VM IP PORT and NON GCP PRIVATE IP PORT type NEGs Private Service Connect NEGs: Google APIs: a single Private Service Connect NEG Managed services: one or more Private Service Connect NEGs INTERNAL MANAGED Regional external passthrough Network Load Balancer 1 Regional The backend service supports one of the following backend combinations: All instance group backends: One or more managed, unmanaged, or a combination of managed and unmanaged instance group backends All zonal NEGs: One or more GCE VM IP type zonal NEGs EXTERNAL Internal passthrough Network Load Balancer 1 Regional, but configurable to be globally accessible The backend service supports one of the following backend combinations: All instance group backends: One or more managed, unmanaged, or a combination of managed and unmanaged instance group backends All zonal NEGs: One or more GCE VM IP type zonal NEGs One port mapping NEG INTERNAL Cloud Service Mesh Multiple Global Each backend service supports one of the following backend combinations: All instance group backends: One or more managed, unmanaged, or a combination of managed and unmanaged instance group backends All zonal NEGs: One or more GCE VM IP PORT or NON GCP PRIVATE IP PORT type zonal NEGs One internet NEG of type INTERNET FQDN PORT One or more Service Directory service bindings ( Preview ) All published service backends ( Preview ) INTERNAL SELF MANAGED 1 These load balancers support IPv4-only and dual-stack (IPv4 and IPv6) instance groups and zonal NEG backends.
- Using the max-in-flight-requests-per-instance or max-in-flight-requests-per-endpoint parameters When you specify either the max-in-flight-requests-per-instance or max-in-flight-requests-per-endpoint parameter, the load balancer uses the value you provide to calculate a per-zone capacity: For a zonal instance group with N total instances and h healthy instances (where h ≤ N ), the calculations are as follows: If you set max-in-flight-requests-per-instance to X , the zonal target capacity is N X in-progress HTTP requests.
- Using the max-connections-per-instance or max-connections-per-endpoint parameter When you specify either the max-connections-per-instance or max-connections-per-endpoint parameter, the load balancer uses the value you provide to calculate a per-zone capacity: For a zonal instance group with N total instances and h healthy instances (where h ≤ N ), the calculations are as follows: If you set max-connections-per-instance to X , the zonal target capacity is N X .
- Using the max-rate-per-instance or max-rate-per-endpoint parameter When you specify either the max-rate-per-instance or max-rate-per-endpoint parameter, the load balancer uses the value you provide to calculate a per-zone capacity: For a zonal instance group with N total instances and h healthy instances (where h ≤ N ), the calculations are as follows: If you set max-rate-per-instance to X , the zonal target capacity is N X requests per second.

### "External Application Load Balancer overview \_|\_ Cloud Load Balancing \_\

- URL: [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https)
- Source ID: `site-docs-reference-required-3`
- Final score: 191
- Re-rank relevance: N/A

Evidence snippets:
- You can configure multiple forwarding rules to use the same external IP address (VIP) and to reference the same target HTTP(S) proxy as long as the overall combination of IP address, port, and protocol is unique for each forwarding rule.
- Forwarding rules and IP addresses Forwarding rules route traffic by IP address, port, and protocol to a load balancing configuration consisting of a target proxy, URL map, and one or more backend services.
- You must configure subnet route exchanges to allow communication between the proxy-only subnet in the forwarding rule's VPC network and the subnets used by the backend instances or endpoints.
- Import and export filters must allow communication between the proxy-only subnet in the forwarding rule's VPC network and the subnets used by backend instances or endpoints.

