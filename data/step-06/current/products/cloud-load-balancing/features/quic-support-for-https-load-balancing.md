---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:54:57.798Z"
product_name: "Cloud Load Balancing"
product_slug: "cloud-load-balancing"
feature_name: "QUIC support for HTTPS Load Balancing"
feature_slug: "quic-support-for-https-load-balancing"
latest_feature_date: "2018-06-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/load-balancing/docs/https"
  - "https://docs.cloud.google.com/load-balancing/docs/tutorials/faster-performance-improved-protection"
  - "https://docs.cloud.google.com/load-balancing/docs/backend-service"
keywords:
  - "quic"
  - "https"
  - "load"
  - "balancing"
  - "supports"
  - "improve"
  - "transport"
  - "performance"
---

# QUIC support for HTTPS Load Balancing

Product: Cloud Load Balancing
Coverage: MEDIUM

## Step 02 Summary

HTTPS Load Balancing supports QUIC to improve transport performance for client connections; HTTPS Load Balancing supports QUIC to improve transport performance for client connections.

## Extended Definition

HTTPS Load Balancing supports QUIC to improve transport performance for client connections; HTTPS Load Balancing supports QUIC to improve transport performance for client connections.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https)
- [https://docs.cloud.google.com/load-balancing/docs/tutorials/faster-performance-improved-protection](https://docs.cloud.google.com/load-balancing/docs/tutorials/faster-performance-improved-protection)
- [https://docs.cloud.google.com/load-balancing/docs/backend-service](https://docs.cloud.google.com/load-balancing/docs/backend-service)

## Supporting Pages

### "External Application Load Balancer overview \_|\_ Cloud Load Balancing \_\

- URL: [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https)
- Source ID: `site-docs-reference-required-3`
- Final score: 165
- Re-rank relevance: N/A

Evidence snippets:
- TLS 1.3 early data is supported on the target HTTPS proxy of the following external Application Load Balancers for both HTTPS over TCP (HTTP/1.1, HTTP/2) and HTTP/3 over QUIC: Global external Application Load Balancers Classic Application Load Balancers TLS 1.3 was defined in RFC 8446 and introduces the concept of early data , also known as zero-round-trip time (0-RTT) data , which can improve application performance for resumed connections by 30 to 50%.
- Specifically: IETF QUIC is a transport layer protocol that provides congestion control and reliability similar to TCP, uses TLS 1.3 for security, and improved performance.
- Compatible with GKE using Standalone NEGs (manual orchestration) Supports advanced traffic management capabilities Regional VIPs using Standard Network Tier Terminates TLS in a single region that you configure Serves content from the configured region only For the complete list, see Load balancing features .
- Compatible with GKE using Gateway (fully orchestrated), Ingress (fully orchestrated), or Standalone NEGs (manual orchestration) Supports Google Cloud Armor Fewer traffic routing features See the Load balancing features page for the full list of capabilities.

### "Faster web performance and improved web protection for load balancing \_\

- URL: [https://docs.cloud.google.com/load-balancing/docs/tutorials/faster-performance-improved-protection](https://docs.cloud.google.com/load-balancing/docs/tutorials/faster-performance-improved-protection)
- Source ID: `site-docs-reference-required-3`
- Final score: 146
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Improving web performance with Cloud CDN Using the external Application Load Balancer already improves web performance by setting up HTTP(S) connections on Google's global edge closer to the requesting client and by negotiating connections using modern protocols such as QUIC, HTTP/2, and TLS 1.3 to reduce the number of round trips and enhance throughput.
- Home Documentation Networking Load Balancing Guides Send feedback Faster web performance and improved web protection for load balancing Stay organized with collections Save and categorize content based on your preferences.
- You can further improve performance and reduce your serving costs by enabling Cloud CDN as part of your external Application Load Balancer deployment.
- How Cloud CDN can improve web performance There are multiple ways that Cloud CDN improves performance.

### "Backend services overview \_|\_ Cloud Load Balancing \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/load-balancing/docs/backend-service](https://docs.cloud.google.com/load-balancing/docs/backend-service)
- Source ID: `site-docs-reference-required-3`
- Final score: 115
- Re-rank relevance: N/A

Evidence snippets:
- Table: Backend services and supported backend types Product Maximum number of backend services Scope of backend service Supported backend types Load balancing scheme Global external Application Load Balancer Multiple Global Each backend service supports one of the following backend combinations: All instance group backends: One or more managed, unmanaged, or a combination of managed and unmanaged instance group backends 1 All zonal NEGs: One or more GCE VM IP PORT type zonal NEGs 1 All hybrid connectivity NEGs: One or more NON GCP PRIVATE IP PORT type NEGs A combination of zonal and hybrid NEGs: GCE VM IP PORT and NON GCP PRIVATE IP PORT type NEGs 2 All serverless NEGs: One or more App Engine, Cloud Run, or Cloud Run functions resources One global internet NEG for an external backend Private Service Connect NEGs: Google APIs: a single Private Service Connect NEG Managed services: one or more Private Service Connect NEGs EXTERNAL MANAGED Classic Application Load Balancer Multiple Global 3 Each backend service supports one of the following backend combinations: All instance group backends: One or more managed, unmanaged, or a combination of managed and unmanaged instance group backends All zonal NEGs: One or more GCE VM IP PORT type zonal NEGs All hybrid connectivity NEGs: One or more NON GCP PRIVATE IP PORT type NEGs A combination of zonal and hybrid NEGs: GCE VM IP PORT and NON GCP PRIVATE IP PORT type NEGs 2 All serverless NEGs: One or more App Engine, Cloud Run, or Cloud Run functions resources One global internet NEG for an external backend EXTERNAL 4 Regional external Application Load Balancer Multiple Regional Each backend service supports one of the following backend combinations: All instance group backends: One or more managed, unmanaged, or a combination of managed and unmanaged instance group backends 1 All zonal NEGs: One or more GCE VM IP PORT type zonal NEGs 1 All hybrid connectivity NEGs: One or more NON GCP PRIVATE IP PORT type NEGs A combination of zonal and hybrid NEGs: GCE VM IP PORT and NON GCP PRIVATE IP PORT type NEGs 2 A single serverless NEG (for Cloud Run or Cloud Run functions 2nd gen only) A single Private Service Connect NEG All regional internet NEGs for an external backend All published service backends ( Preview ) EXTERNAL MANAGED Cross-region internal Application Load Balancer Multiple Global Each backend service supports one of the following backend combinations: All instance group backends: One or more managed, unmanaged, or a combination of managed and unmanaged instance group backends 1 All zonal NEGs: One or more GCE VM IP PORT type zonal NEGs 1 All hybrid connectivity NEGs: One or more NON GCP PRIVATE IP PORT type NEGs A combination of zonal and hybrid NEGs: GCE VM IP PORT and NON GCP PRIVATE IP PORT type NEGs 2 A single serverless NEG (for Cloud Run or Cloud Run functions 2nd gen only) Private Service Connect NEGs: Google APIs: a single Private Service Connect NEG Managed services: one or more Private Service Connect NEGs INTERNAL MANAGED Regional internal Application Load Balancer Multiple Regional Each backend service supports one of the following backend combinations: All instance group backends: One or more managed, unmanaged, or a combination of managed and unmanaged instance group backends 1 All zonal NEGs: One or more GCE VM IP PORT type zonal NEGs 1 All hybrid connectivity NEGs: One or more NON GCP PRIVATE IP PORT type NEGs A combination of zonal and hybrid NEGs: GCE VM IP PORT and NON GCP PRIVATE IP PORT type NEGs 2 A single serverless NEG (for Cloud Run or Cloud Run functions 2nd gen only) A single Private Service Connect NEG All regional internet NEGs for an external backend All published service backends ( Preview ) INTERNAL MANAGED Global external proxy Network Load Balancer 1 Global 3 The backend service supports one of the following backend combinations: All instance group backends: One or more managed, unmanaged, or a combination of managed and unmanaged instance group backends 1 All zonal NEGs: One or more GCE VM IP PORT type zonal NEGs 1 All hybrid connectivity NEGs: One or more NON GCP PRIVATE IP PORT type NEGs A combination of zonal and hybrid NEGs: GCE VM IP PORT and NON GCP PRIVATE IP PORT type NEGs 2 Private Service Connect NEGs: Google APIs: a single Private Service Connect NEG Managed services: one or more Private Service Connect NEGs EXTERNAL MANAGED Classic proxy Network Load Balancer 1 Global 3 The backend service supports one of the following backend combinations: All instance group backends: One or more managed, unmanaged, or a combination of managed and unmanaged instance group backends All zonal NEGs: One or more GCE VM IP PORT type zonal NEGs All hybrid connectivity NEGs: One or more NON GCP PRIVATE IP PORT type NEGs A combination of zonal and hybrid NEGs: GCE VM IP PORT and NON GCP PRIVATE IP PORT type NEGs 2 EXTERNAL Regional external proxy Network Load Balancer Without TLS routes: 1 With TLS routes: Multiple Regional The backend service supports one of the following backend combinations: All instance group backends: One or more managed, unmanaged, or a combination of managed and unmanaged instance group backends 1 All zonal NEGs: One or more GCE VM IP PORT type zonal NEGs 1 All hybrid connectivity NEGs: One or more NON GCP PRIVATE IP PORT type NEGs A combination of zonal and hybrid NEGs: GCE VM IP PORT and NON GCP PRIVATE IP PORT type NEGs All regional internet NEGs for an external backend A single Private Service Connect NEG All published service backends ( Preview ) EXTERNAL MANAGED Regional internal proxy Network Load Balancer Without TLS routes: 1 With TLS routes: Multiple Regional The backend service supports one of the following backend combinations: All instance group backends: One or more managed, unmanaged, or a combination of managed and unmanaged instance group backends 1 All zonal NEGs: One or more GCE VM IP PORT type zonal NEGs 1 All hybrid connectivity NEGs: One or more NON GCP PRIVATE IP PORT type NEGs A combination of zonal and hybrid NEGs: GCE VM IP PORT and NON GCP PRIVATE IP PORT type NEGs All regional internet NEGs for an external backend A single Private Service Connect NEG All published service backends ( Preview ) INTERNAL MANAGED Cross-region internal proxy Network Load Balancer Without TLS routes: 1 With TLS routes: Multiple Global The backend service supports one of the following backend combinations: All instance group backends: One or more managed, unmanaged, or a combination of managed and unmanaged instance group backends 1 All zonal NEGs: One or more GCE VM IP PORT type zonal NEGs 1 All hybrid connectivity NEGs: One or more NON GCP PRIVATE IP PORT type NEGs A combination of zonal and hybrid NEGs: GCE VM IP PORT and NON GCP PRIVATE IP PORT type NEGs Private Service Connect NEGs: Google APIs: a single Private Service Connect NEG Managed services: one or more Private Service Connect NEGs INTERNAL MANAGED Regional external passthrough Network Load Balancer 1 Regional The backend service supports one of the following backend combinations: All instance group backends: One or more managed, unmanaged, or a combination of managed and unmanaged instance group backends All zonal NEGs: One or more GCE VM IP type zonal NEGs EXTERNAL Internal passthrough Network Load Balancer 1 Regional, but configurable to be globally accessible The backend service supports one of the following backend combinations: All instance group backends: One or more managed, unmanaged, or a combination of managed and unmanaged instance group backends All zonal NEGs: One or more GCE VM IP type zonal NEGs One port mapping NEG INTERNAL Cloud Service Mesh Multiple Global Each backend service supports one of the following backend combinations: All instance group backends: One or more managed, unmanaged, or a combination of managed and unmanaged instance group backends All zonal NEGs: One or more GCE VM IP PORT or NON GCP PRIVATE IP PORT type zonal NEGs One internet NEG of type INTERNET FQDN PORT One or more Service Directory service bindings ( Preview ) All published service backends ( Preview ) INTERNAL SELF MANAGED 1 These load balancers support IPv4-only and dual-stack (IPv4 and IPv6) instance groups and zonal NEG backends.
- Advanced traffic management features To learn about advanced traffic management features that are configured on the backend services and URL maps associated with load balancers, see the following: Traffic management overview for internal Application Load Balancers Traffic management overview for global external Application Load Balancers Traffic management overview for regional external Application Load Balancers API and gcloud reference For more information about the properties of the backend service resource, see the following references: Global backend service API resource Regional backend service API resource gcloud compute backend-services page, for both global and regional backend services What's next For related documentation and information about how backend services are used in load balancing, review the following: Create custom headers Create an external Application Load Balancer External Application Load Balancer overview Enable connection draining Encryption in transit in Google Cloud For related videos: How to configure backend services for global external Application Load Balancers Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Custom metrics target capacity parameters for Application Load Balancer backends with a long traffic duration setting Application Load Balancer backends with a long traffic duration setting can use the CUSTOM METRICS balancing mode with one of the following target capacity parameters or combinations of parameters: Table: CUSTOM METRICS balancing mode target capacity parameters and parameter combinations for Application Load Balancer backends with a long traffic duration setting ( Preview ) Target capacity parameter or parameter combination Supported backend Zonal (managed or unmanaged) instance groups Regional managed instance groups Zonal NEGs with GCE VM IP PORT endpoints Zonal hybrid connectivity NEGs backends[].customMetrics[].maxUtilization Target custom metric utilization per backend zone max-in-flight-requests Target number of in-progress HTTP requests per backend zone max-in-flight-requests and backends[].customMetrics[].maxUtilization Target is the first to be reached in the backend zone: Zone's target custom metric utilization Zone's target number of in-progress HTTP requests max-in-flight-requests-per-instance Target number of in-progress HTTP requests per VM instance.
- Utilization target capacity parameters for Application Load Balancer and Cloud Service Mesh backends with a long traffic duration setting Application Load Balancer and Cloud Service Mesh backends with a long traffic duration setting ( Preview ) can use the UTILIZATION balancing mode with one of the following target capacity parameters or combinations of parameters: Table: UTILIZATION balancing mode target capacity parameters and parameter combinations for Application Load Balancer and Cloud Service Mesh backends with a long traffic duration setting ( Preview ) Target capacity parameter or parameter combination Supported backend Zonal (managed or unmanaged) instance groups Regional managed instance groups Zonal NEGs with GCE VM IP PORT endpoints Zonal hybrid connectivity NEGs max-utilization Target utilization per backend zone max-in-flight-requests Target number of in-progress HTTP requests per backend zone max-in-flight-requests and max-utilization Target is the first to be reached in the backend zone: Zone's target utilization Zone's target number of in-progress HTTP requests max-in-flight-requests-per-instance Target number of in-progress HTTP requests per VM instance.

