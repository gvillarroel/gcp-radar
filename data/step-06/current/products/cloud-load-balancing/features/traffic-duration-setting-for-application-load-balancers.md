---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:54:57.674Z"
product_name: "Cloud Load Balancing"
product_slug: "cloud-load-balancing"
feature_name: "Traffic duration setting for Application Load Balancers"
feature_slug: "traffic-duration-setting-for-application-load-balancers"
latest_feature_date: "2026-01-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/load-balancing/docs/l7-internal"
  - "https://docs.cloud.google.com/load-balancing/docs/backend-service"
  - "https://docs.cloud.google.com/load-balancing/docs/https"
keywords:
  - "traffic"
  - "duration"
  - "setting"
  - "application"
  - "load"
  - "balancers"
  - "let"
  - "you"
---

# Traffic duration setting for Application Load Balancers

Product: Cloud Load Balancing
Coverage: MEDIUM

## Step 02 Summary

Application Load Balancers let you classify backend traffic duration as SHORT or LONG when configuring backend services.

## Extended Definition

Application Load Balancers let you classify backend traffic duration as SHORT or LONG when configuring backend services.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/load-balancing/docs/l7-internal](https://docs.cloud.google.com/load-balancing/docs/l7-internal)
- [https://docs.cloud.google.com/load-balancing/docs/backend-service](https://docs.cloud.google.com/load-balancing/docs/backend-service)
- [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https)

## Supporting Pages

### "Internal Application Load Balancer overview \_|\_ Cloud Load Balancing \_\

- URL: [https://docs.cloud.google.com/load-balancing/docs/l7-internal](https://docs.cloud.google.com/load-balancing/docs/l7-internal)
- Source ID: `site-docs-root`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- The following table specifies the scope of health checks supported by internal Application Load Balancers: Load balancer mode Health check type Cross-region internal Application Load Balancer healthChecks Regional internal Application Load Balancer regionHealthChecks For more information about health checks, see the following: Health checks overview Create health checks Firewall rules An internal Application Load Balancer requires the following firewall rules: An ingress allow rule that permits traffic from Google's central health check ranges.
- For cross-region internal Application Load Balancers You can set up a cross-region internal Application Load Balancer in multiple regions to get the following benefits: If the cross-region internal Application Load Balancer in a region fails, the DNS routing policies route traffic to a cross-region internal Application Load Balancer in another region.
- Returns HTTP 503 High availability and cross-region failover For regional internal Application Load Balancers To achieve high availability, deploy multiple individual regional internal Application Load Balancers in regions that best support your application's traffic.
- Backend subsetting is an optional feature supported by regional internal Application Load Balancers that improves performance and scalability by assigning a subset of backends to each of the proxy instances.

### "Backend services overview \_|\_ Cloud Load Balancing \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/load-balancing/docs/backend-service](https://docs.cloud.google.com/load-balancing/docs/backend-service)
- Source ID: `site-docs-reference-required-3`
- Final score: 148
- Re-rank relevance: N/A

Evidence snippets:
- Application Load Balancers (except classic Application Load Balancers) and Cloud Service Mesh backends with a long traffic duration setting can use the IN FLIGHT balancing mode with one of the following required target capacity parameters: Table : Target capacity parameters for the IN FLIGHT balancing mode Target capacity parameter Supported backend Zonal (managed or unmanaged) instance groups Regional managed instance groups Zonal NEGs with GCE VM IP PORT endpoints Zonal hybrid connectivity NEGs max-in-flight-requests Target number of in-progress HTTP requests per backend zone max-in-flight-requests-per-instance Target number of in-progress HTTP requests per VM instance.
- Table : Balancing modes for Application Load Balancer and Cloud Service Mesh backends using the long traffic duration setting Supported backend Balancing mode CONNECTION RATE IN FLIGHT UTILIZATION CUSTOM METRICS Instance groups Zonal NEGs with GCE VM IP PORT endpoints Zonal hybrid connectivity NEGs Balancing modes for Proxy Network Load Balancers Available balancing modes for proxy Network Load Balancer backends depend on the type of supported backend.
- Balancing modes for Application Load Balancers and Cloud Service Mesh Available balancing modes for Application Load Balancer and Cloud Service Mesh backends depend on the type of supported backend and a traffic duration setting ( Preview ).
- Custom metrics target capacity parameters for Application Load Balancer backends with a long traffic duration setting Application Load Balancer backends with a long traffic duration setting can use the CUSTOM METRICS balancing mode with one of the following target capacity parameters or combinations of parameters: Table: CUSTOM METRICS balancing mode target capacity parameters and parameter combinations for Application Load Balancer backends with a long traffic duration setting ( Preview ) Target capacity parameter or parameter combination Supported backend Zonal (managed or unmanaged) instance groups Regional managed instance groups Zonal NEGs with GCE VM IP PORT endpoints Zonal hybrid connectivity NEGs backends[].customMetrics[].maxUtilization Target custom metric utilization per backend zone max-in-flight-requests Target number of in-progress HTTP requests per backend zone max-in-flight-requests and backends[].customMetrics[].maxUtilization Target is the first to be reached in the backend zone: Zone's target custom metric utilization Zone's target number of in-progress HTTP requests max-in-flight-requests-per-instance Target number of in-progress HTTP requests per VM instance.

### "External Application Load Balancer overview \_|\_ Cloud Load Balancing \_\

- URL: [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https)
- Source ID: `site-docs-reference-required-3`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- Load balancer mode Health check type Global external Application Load Balancer Global Classic Application Load Balancer Global Regional external Application Load Balancer Regional For more information about health checks, see the following: Health checks overview Creating health checks Firewall rules The load balancer requires the following firewall rules: For the global external Application Load Balancers, an ingress allow rule to permit traffic from Google Front Ends (GFEs) to reach your backends.
- For more information, see the following: Traffic management overview for global external Application Load Balancer Traffic management overview for regional external Application Load Balancer The following table specifies the type of URL map required by external Application Load Balancers in each mode.
- When using regional external Application Load Balancers with Cloud Run in a Shared VPC environment, standalone VPC networks in service projects can send traffic to any other Cloud Run services deployed in any other service projects within the same Shared VPC environment.
- To learn how to configure advanced traffic management capabilities available with the regional external Application Load Balancer, see Traffic management overview for regional external Application Load Balancers .

