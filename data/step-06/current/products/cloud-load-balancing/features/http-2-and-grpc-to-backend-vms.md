---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:54:57.798Z"
product_name: "Cloud Load Balancing"
product_slug: "cloud-load-balancing"
feature_name: "HTTP/2 and gRPC to backend VMs"
feature_slug: "http-2-and-grpc-to-backend-vms"
latest_feature_date: "2018-06-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/load-balancing/docs/backend-service"
  - "https://docs.cloud.google.com/load-balancing/docs/https"
  - "https://docs.cloud.google.com/load-balancing/docs/l7-internal"
keywords:
  - "http"
  - "grpc"
  - "backend"
  - "vms"
  - "load"
  - "balancing"
  - "supports"
  - "traffic"
---

# HTTP/2 and gRPC to backend VMs

Product: Cloud Load Balancing
Coverage: MEDIUM

## Step 02 Summary

Load balancing supports HTTP/2 and gRPC traffic from the load balancer to backend virtual machines.

## Extended Definition

Load balancing supports HTTP/2 and gRPC traffic from the load balancer to backend virtual machines.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/load-balancing/docs/backend-service](https://docs.cloud.google.com/load-balancing/docs/backend-service)
- [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https)
- [https://docs.cloud.google.com/load-balancing/docs/l7-internal](https://docs.cloud.google.com/load-balancing/docs/l7-internal)

## Supporting Pages

### "Backend services overview \_|\_ Cloud Load Balancing \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/load-balancing/docs/backend-service](https://docs.cloud.google.com/load-balancing/docs/backend-service)
- Source ID: `site-docs-reference-required-3`
- Final score: 183
- Re-rank relevance: N/A

Evidence snippets:
- Custom metrics target capacity parameters for Application Load Balancer backends with a long traffic duration setting Application Load Balancer backends with a long traffic duration setting can use the CUSTOM METRICS balancing mode with one of the following target capacity parameters or combinations of parameters: Table: CUSTOM METRICS balancing mode target capacity parameters and parameter combinations for Application Load Balancer backends with a long traffic duration setting ( Preview ) Target capacity parameter or parameter combination Supported backend Zonal (managed or unmanaged) instance groups Regional managed instance groups Zonal NEGs with GCE VM IP PORT endpoints Zonal hybrid connectivity NEGs backends[].customMetrics[].maxUtilization Target custom metric utilization per backend zone max-in-flight-requests Target number of in-progress HTTP requests per backend zone max-in-flight-requests and backends[].customMetrics[].maxUtilization Target is the first to be reached in the backend zone: Zone's target custom metric utilization Zone's target number of in-progress HTTP requests max-in-flight-requests-per-instance Target number of in-progress HTTP requests per VM instance.
- Utilization target capacity parameters for Application Load Balancer and Cloud Service Mesh backends with a long traffic duration setting Application Load Balancer and Cloud Service Mesh backends with a long traffic duration setting ( Preview ) can use the UTILIZATION balancing mode with one of the following target capacity parameters or combinations of parameters: Table: UTILIZATION balancing mode target capacity parameters and parameter combinations for Application Load Balancer and Cloud Service Mesh backends with a long traffic duration setting ( Preview ) Target capacity parameter or parameter combination Supported backend Zonal (managed or unmanaged) instance groups Regional managed instance groups Zonal NEGs with GCE VM IP PORT endpoints Zonal hybrid connectivity NEGs max-utilization Target utilization per backend zone max-in-flight-requests Target number of in-progress HTTP requests per backend zone max-in-flight-requests and max-utilization Target is the first to be reached in the backend zone: Zone's target utilization Zone's target number of in-progress HTTP requests max-in-flight-requests-per-instance Target number of in-progress HTTP requests per VM instance.
- Custom metrics target capacity parameters for Application Load Balancer backends with an unspecified or short traffic duration setting Application Load Balancer backends with an unspecified or short traffic duration setting ( Preview ) can use the CUSTOM METRICS balancing mode with one of the following target capacity parameters or combinations of parameters: Table : CUSTOM METRICS balancing mode target capacity parameters and parameter combinations for Application Load Balancer backends with an unspecified or short traffic duration setting Target capacity parameter or parameter combination Supported backend Zonal (managed or unmanaged) instance groups Regional managed instance groups Zonal NEGs with GCE VM IP PORT endpoints Zonal hybrid connectivity NEGs backends[].customMetrics[].maxUtilization Target custom metric utilization per backend zone max-rate Target HTTP request rate per backend zone max-rate and backends[].customMetrics[].maxUtilization Target is the first to be reached in the backend zone: Zone's target custom metric utilization Zone's target HTTP request rate max-rate-per-instance Target HTTP request rate per VM instance.
- Utilization target capacity parameters for Application Load Balancer and Cloud Service Mesh backends with an unspecified or short traffic duration setting Application Load Balancer and Cloud Service Mesh backends with an unspecified or short traffic duration setting ( Preview ) can use the UTILIZATION balancing mode with one of the following target capacity parameters or combinations of parameters: Table: UTILIZATION balancing mode target capacity parameters and parameter combinations for Application Load Balancer and Cloud Service Mesh backends with an unspecified or short traffic duration setting Target capacity parameter or parameter combination Supported backend Zonal (managed or unmanaged) instance groups Regional managed instance groups Zonal NEGs with GCE VM IP PORT endpoints Zonal hybrid connectivity NEGs max-utilization Target utilization per backend zone max-rate Target HTTP request rate per backend zone max-rate and max-utilization Target is the first to be reached in the backend zone: Zone's target utilization Zone's target HTTP request rate max-rate-per-instance Target HTTP request rate per VM instance.

### "External Application Load Balancer overview \_|\_ Cloud Load Balancing \_\

- URL: [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https)
- Source ID: `site-docs-reference-required-3`
- Final score: 167
- Re-rank relevance: N/A

Evidence snippets:
- In the Premium Network Service Tier , this load balancer offers multi-region load balancing, attempts to direct traffic to the closest healthy backend that has capacity, and terminates HTTP(S) traffic as close as possible to your users.
- Compatible with GKE using Gateway (fully orchestrated) or Standalone NEGs (manual orchestration) Supports advanced traffic management Global Anycast external IP addresses over Premium Tier Can access backends across multiple regions Supports Cloud CDN Supports Cloud Armor Classic Application Load Balancer This load balancer is global in Premium Tier.
- Compatible with GKE using Standalone NEGs (manual orchestration) Supports advanced traffic management capabilities Regional VIPs using Standard Network Tier Terminates TLS in a single region that you configure Serves content from the configured region only For the complete list, see Load balancing features .
- The external Application Load Balancer distributes HTTP and HTTPS traffic to backends hosted on a variety of Google Cloud platforms (such as Compute Engine, Google Kubernetes Engine (GKE), and Cloud Storage), as well as external backends connected over the internet or through hybrid connectivity.

### "Internal Application Load Balancer overview \_|\_ Cloud Load Balancing \_\

- URL: [https://docs.cloud.google.com/load-balancing/docs/l7-internal](https://docs.cloud.google.com/load-balancing/docs/l7-internal)
- Source ID: `site-docs-root`
- Final score: 157
- Re-rank relevance: N/A

Evidence snippets:
- Additionally, you must make sure that the backends can handle TLS traffic and configure the load balancer to use HTTP/2 for encrypted connections between the load balancer and its backends by setting the backend service protocol to HTTP2 .
- The internal Application Load Balancer distributes HTTP and HTTPS traffic to backends hosted on a variety of Google Cloud platforms such as Compute Engine, Google Kubernetes Engine (GKE), and Cloud Run.
- Forwarding rule and IP address Forwarding rules route traffic by IP address, port, and protocol to a load balancing configuration that consists of a target proxy and a backend service.
- For serverless NEGs on a backend service: 60 minutes For all other backend types on a backend service: 30 seconds Client HTTP keepalive timeout The maximum amount of time that the TCP connection between a client and the load balancer's managed Envoy proxy can be idle. (The same TCP connection might be used for multiple HTTP requests.) 610 seconds Backend HTTP keepalive timeout The maximum amount of time that the TCP connection between the load balancer's managed Envoy proxy and a backend can be idle. (The same TCP connection might be used for multiple HTTP requests.) 10 minutes (600 seconds) Backend service timeout The configurable backend service timeout represents the maximum amount of time that the load balancer waits for your backend to process an HTTP request and return the corresponding HTTP response.

