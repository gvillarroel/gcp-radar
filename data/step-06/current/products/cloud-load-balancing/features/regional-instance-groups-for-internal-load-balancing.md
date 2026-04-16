---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:54:57.800Z"
product_name: "Cloud Load Balancing"
product_slug: "cloud-load-balancing"
feature_name: "Regional instance groups for Internal Load Balancing"
feature_slug: "regional-instance-groups-for-internal-load-balancing"
latest_feature_date: "2017-07-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/load-balancing/docs/internal"
  - "https://docs.cloud.google.com/load-balancing/docs/l7-internal"
  - "https://docs.cloud.google.com/load-balancing/docs/backend-service"
keywords:
  - "regional"
  - "instance"
  - "groups"
  - "internal"
  - "load"
  - "balancing"
  - "supports"
  - "backend"
---

# Regional instance groups for Internal Load Balancing

Product: Cloud Load Balancing
Coverage: MEDIUM

## Step 02 Summary

Internal Load Balancing supports regional instance groups as backend targets.

## Extended Definition

Internal Load Balancing supports regional instance groups as backend targets.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/load-balancing/docs/internal](https://docs.cloud.google.com/load-balancing/docs/internal)
- [https://docs.cloud.google.com/load-balancing/docs/l7-internal](https://docs.cloud.google.com/load-balancing/docs/l7-internal)
- [https://docs.cloud.google.com/load-balancing/docs/backend-service](https://docs.cloud.google.com/load-balancing/docs/backend-service)

## Supporting Pages

### "Internal Application Load Balancer overview \_|\_ Cloud Load Balancing \_\

- URL: [https://docs.cloud.google.com/load-balancing/docs/l7-internal](https://docs.cloud.google.com/load-balancing/docs/l7-internal)
- Source ID: `site-docs-root`
- Final score: 197
- Re-rank relevance: N/A

Evidence snippets:
- Load balancer mode Supported backends on a backend service 1 Supports backend buckets Supports Cloud Armor Supports Cloud CDN Supports IAP Supports Service Extensions Instance groups 2 Zonal NEGs 3 Internet NEGs Serverless NEGs Hybrid NEGs Private Service Connect NEGs Cross-region internal Application Load Balancer Cloud Run Regional internal Application Load Balancer Cloud Run 1 Backends on a backend service must be the same type: all instance groups or all the same type of NEG.
- The following table specifies the type of URL map required by internal Application Load Balancers in each mode: Load balancer mode URL map type Cross-region internal Application Load Balancer urlMaps Regional internal Application Load Balancer regionUrlMaps Backend service A backend service provides configuration information to the load balancer so that it can direct requests to its backends—for example, Compute Engine instance groups or network endpoint groups (NEGs).
- Timeouts and retries Internal Application Load Balancers support the following types of timeouts: Timeout type and description Default values Supports custom values Cross-region Regional Backend service timeout A request and response timeout.
- Backend subsetting is an optional feature supported by regional internal Application Load Balancers that improves performance and scalability by assigning a subset of backends to each of the proxy instances.

### "Internal passthrough Network Load Balancer overview \_|\_ Cloud Load Balancing\

- URL: [https://docs.cloud.google.com/load-balancing/docs/internal](https://docs.cloud.google.com/load-balancing/docs/internal)
- Source ID: `site-docs-reference-required-4`
- Final score: 197
- Re-rank relevance: N/A

Evidence snippets:
- You can use either instance groups or zonal NEGs, but not a combination of both, as backends for an internal passthrough Network Load Balancer: If you choose instance groups, you can use unmanaged instance groups, zonal managed instance groups, regional managed instance groups, or a combination of instance group types.
- Protocols, scheme, and scope Each internal passthrough Network Load Balancer supports the following: One backend service with load balancing scheme INTERNAL and a supported protocol.
- The following table summarizes how to use these settings for different protocols: Traffic to be load-balanced Forwarding rule protocol Backend service protocol TCP (IPv4 or IPv6) TCP TCP or UNSPECIFIED UDP (IPv4 or IPv6) UDP UDP or UNSPECIFIED TCP, UDP, ICMP, ICMPv6, SCTP, ESP, AH, and GRE L3 DEFAULT UNSPECIFIED Forwarding rules and global access An internal passthrough Network Load Balancer's forwarding rules are regional, even when global access is enabled.
- An internal passthrough Network Load Balancer doesn't support the following: Backend VMs in multiple regions Balancing traffic that originates from the internet, unless you're using it with an external load balancer IPv6 packets with fragmented headers Internal IP address Internal passthrough Network Load Balancers support IPv4-only, dual-stack, and IPv6-only subnets.

### "Backend services overview \_|\_ Cloud Load Balancing \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/load-balancing/docs/backend-service](https://docs.cloud.google.com/load-balancing/docs/backend-service)
- Source ID: `site-docs-reference-required-3`
- Final score: 195
- Re-rank relevance: N/A

Evidence snippets:
- Table: Backend services and supported backend types Product Maximum number of backend services Scope of backend service Supported backend types Load balancing scheme Global external Application Load Balancer Multiple Global Each backend service supports one of the following backend combinations: All instance group backends: One or more managed, unmanaged, or a combination of managed and unmanaged instance group backends 1 All zonal NEGs: One or more GCE VM IP PORT type zonal NEGs 1 All hybrid connectivity NEGs: One or more NON GCP PRIVATE IP PORT type NEGs A combination of zonal and hybrid NEGs: GCE VM IP PORT and NON GCP PRIVATE IP PORT type NEGs 2 All serverless NEGs: One or more App Engine, Cloud Run, or Cloud Run functions resources One global internet NEG for an external backend Private Service Connect NEGs: Google APIs: a single Private Service Connect NEG Managed services: one or more Private Service Connect NEGs EXTERNAL MANAGED Classic Application Load Balancer Multiple Global 3 Each backend service supports one of the following backend combinations: All instance group backends: One or more managed, unmanaged, or a combination of managed and unmanaged instance group backends All zonal NEGs: One or more GCE VM IP PORT type zonal NEGs All hybrid connectivity NEGs: One or more NON GCP PRIVATE IP PORT type NEGs A combination of zonal and hybrid NEGs: GCE VM IP PORT and NON GCP PRIVATE IP PORT type NEGs 2 All serverless NEGs: One or more App Engine, Cloud Run, or Cloud Run functions resources One global internet NEG for an external backend EXTERNAL 4 Regional external Application Load Balancer Multiple Regional Each backend service supports one of the following backend combinations: All instance group backends: One or more managed, unmanaged, or a combination of managed and unmanaged instance group backends 1 All zonal NEGs: One or more GCE VM IP PORT type zonal NEGs 1 All hybrid connectivity NEGs: One or more NON GCP PRIVATE IP PORT type NEGs A combination of zonal and hybrid NEGs: GCE VM IP PORT and NON GCP PRIVATE IP PORT type NEGs 2 A single serverless NEG (for Cloud Run or Cloud Run functions 2nd gen only) A single Private Service Connect NEG All regional internet NEGs for an external backend All published service backends ( Preview ) EXTERNAL MANAGED Cross-region internal Application Load Balancer Multiple Global Each backend service supports one of the following backend combinations: All instance group backends: One or more managed, unmanaged, or a combination of managed and unmanaged instance group backends 1 All zonal NEGs: One or more GCE VM IP PORT type zonal NEGs 1 All hybrid connectivity NEGs: One or more NON GCP PRIVATE IP PORT type NEGs A combination of zonal and hybrid NEGs: GCE VM IP PORT and NON GCP PRIVATE IP PORT type NEGs 2 A single serverless NEG (for Cloud Run or Cloud Run functions 2nd gen only) Private Service Connect NEGs: Google APIs: a single Private Service Connect NEG Managed services: one or more Private Service Connect NEGs INTERNAL MANAGED Regional internal Application Load Balancer Multiple Regional Each backend service supports one of the following backend combinations: All instance group backends: One or more managed, unmanaged, or a combination of managed and unmanaged instance group backends 1 All zonal NEGs: One or more GCE VM IP PORT type zonal NEGs 1 All hybrid connectivity NEGs: One or more NON GCP PRIVATE IP PORT type NEGs A combination of zonal and hybrid NEGs: GCE VM IP PORT and NON GCP PRIVATE IP PORT type NEGs 2 A single serverless NEG (for Cloud Run or Cloud Run functions 2nd gen only) A single Private Service Connect NEG All regional internet NEGs for an external backend All published service backends ( Preview ) INTERNAL MANAGED Global external proxy Network Load Balancer 1 Global 3 The backend service supports one of the following backend combinations: All instance group backends: One or more managed, unmanaged, or a combination of managed and unmanaged instance group backends 1 All zonal NEGs: One or more GCE VM IP PORT type zonal NEGs 1 All hybrid connectivity NEGs: One or more NON GCP PRIVATE IP PORT type NEGs A combination of zonal and hybrid NEGs: GCE VM IP PORT and NON GCP PRIVATE IP PORT type NEGs 2 Private Service Connect NEGs: Google APIs: a single Private Service Connect NEG Managed services: one or more Private Service Connect NEGs EXTERNAL MANAGED Classic proxy Network Load Balancer 1 Global 3 The backend service supports one of the following backend combinations: All instance group backends: One or more managed, unmanaged, or a combination of managed and unmanaged instance group backends All zonal NEGs: One or more GCE VM IP PORT type zonal NEGs All hybrid connectivity NEGs: One or more NON GCP PRIVATE IP PORT type NEGs A combination of zonal and hybrid NEGs: GCE VM IP PORT and NON GCP PRIVATE IP PORT type NEGs 2 EXTERNAL Regional external proxy Network Load Balancer Without TLS routes: 1 With TLS routes: Multiple Regional The backend service supports one of the following backend combinations: All instance group backends: One or more managed, unmanaged, or a combination of managed and unmanaged instance group backends 1 All zonal NEGs: One or more GCE VM IP PORT type zonal NEGs 1 All hybrid connectivity NEGs: One or more NON GCP PRIVATE IP PORT type NEGs A combination of zonal and hybrid NEGs: GCE VM IP PORT and NON GCP PRIVATE IP PORT type NEGs All regional internet NEGs for an external backend A single Private Service Connect NEG All published service backends ( Preview ) EXTERNAL MANAGED Regional internal proxy Network Load Balancer Without TLS routes: 1 With TLS routes: Multiple Regional The backend service supports one of the following backend combinations: All instance group backends: One or more managed, unmanaged, or a combination of managed and unmanaged instance group backends 1 All zonal NEGs: One or more GCE VM IP PORT type zonal NEGs 1 All hybrid connectivity NEGs: One or more NON GCP PRIVATE IP PORT type NEGs A combination of zonal and hybrid NEGs: GCE VM IP PORT and NON GCP PRIVATE IP PORT type NEGs All regional internet NEGs for an external backend A single Private Service Connect NEG All published service backends ( Preview ) INTERNAL MANAGED Cross-region internal proxy Network Load Balancer Without TLS routes: 1 With TLS routes: Multiple Global The backend service supports one of the following backend combinations: All instance group backends: One or more managed, unmanaged, or a combination of managed and unmanaged instance group backends 1 All zonal NEGs: One or more GCE VM IP PORT type zonal NEGs 1 All hybrid connectivity NEGs: One or more NON GCP PRIVATE IP PORT type NEGs A combination of zonal and hybrid NEGs: GCE VM IP PORT and NON GCP PRIVATE IP PORT type NEGs Private Service Connect NEGs: Google APIs: a single Private Service Connect NEG Managed services: one or more Private Service Connect NEGs INTERNAL MANAGED Regional external passthrough Network Load Balancer 1 Regional The backend service supports one of the following backend combinations: All instance group backends: One or more managed, unmanaged, or a combination of managed and unmanaged instance group backends All zonal NEGs: One or more GCE VM IP type zonal NEGs EXTERNAL Internal passthrough Network Load Balancer 1 Regional, but configurable to be globally accessible The backend service supports one of the following backend combinations: All instance group backends: One or more managed, unmanaged, or a combination of managed and unmanaged instance group backends All zonal NEGs: One or more GCE VM IP type zonal NEGs One port mapping NEG INTERNAL Cloud Service Mesh Multiple Global Each backend service supports one of the following backend combinations: All instance group backends: One or more managed, unmanaged, or a combination of managed and unmanaged instance group backends All zonal NEGs: One or more GCE VM IP PORT or NON GCP PRIVATE IP PORT type zonal NEGs One internet NEG of type INTERNET FQDN PORT One or more Service Directory service bindings ( Preview ) All published service backends ( Preview ) INTERNAL SELF MANAGED 1 These load balancers support IPv4-only and dual-stack (IPv4 and IPv6) instance groups and zonal NEG backends.
- Custom metrics target capacity parameters for Application Load Balancer backends with a long traffic duration setting Application Load Balancer backends with a long traffic duration setting can use the CUSTOM METRICS balancing mode with one of the following target capacity parameters or combinations of parameters: Table: CUSTOM METRICS balancing mode target capacity parameters and parameter combinations for Application Load Balancer backends with a long traffic duration setting ( Preview ) Target capacity parameter or parameter combination Supported backend Zonal (managed or unmanaged) instance groups Regional managed instance groups Zonal NEGs with GCE VM IP PORT endpoints Zonal hybrid connectivity NEGs backends[].customMetrics[].maxUtilization Target custom metric utilization per backend zone max-in-flight-requests Target number of in-progress HTTP requests per backend zone max-in-flight-requests and backends[].customMetrics[].maxUtilization Target is the first to be reached in the backend zone: Zone's target custom metric utilization Zone's target number of in-progress HTTP requests max-in-flight-requests-per-instance Target number of in-progress HTTP requests per VM instance.
- Utilization target capacity parameters for Application Load Balancer and Cloud Service Mesh backends with a long traffic duration setting Application Load Balancer and Cloud Service Mesh backends with a long traffic duration setting ( Preview ) can use the UTILIZATION balancing mode with one of the following target capacity parameters or combinations of parameters: Table: UTILIZATION balancing mode target capacity parameters and parameter combinations for Application Load Balancer and Cloud Service Mesh backends with a long traffic duration setting ( Preview ) Target capacity parameter or parameter combination Supported backend Zonal (managed or unmanaged) instance groups Regional managed instance groups Zonal NEGs with GCE VM IP PORT endpoints Zonal hybrid connectivity NEGs max-utilization Target utilization per backend zone max-in-flight-requests Target number of in-progress HTTP requests per backend zone max-in-flight-requests and max-utilization Target is the first to be reached in the backend zone: Zone's target utilization Zone's target number of in-progress HTTP requests max-in-flight-requests-per-instance Target number of in-progress HTTP requests per VM instance.
- Custom metrics target capacity parameters for Application Load Balancer backends with an unspecified or short traffic duration setting Application Load Balancer backends with an unspecified or short traffic duration setting ( Preview ) can use the CUSTOM METRICS balancing mode with one of the following target capacity parameters or combinations of parameters: Table : CUSTOM METRICS balancing mode target capacity parameters and parameter combinations for Application Load Balancer backends with an unspecified or short traffic duration setting Target capacity parameter or parameter combination Supported backend Zonal (managed or unmanaged) instance groups Regional managed instance groups Zonal NEGs with GCE VM IP PORT endpoints Zonal hybrid connectivity NEGs backends[].customMetrics[].maxUtilization Target custom metric utilization per backend zone max-rate Target HTTP request rate per backend zone max-rate and backends[].customMetrics[].maxUtilization Target is the first to be reached in the backend zone: Zone's target custom metric utilization Zone's target HTTP request rate max-rate-per-instance Target HTTP request rate per VM instance.

