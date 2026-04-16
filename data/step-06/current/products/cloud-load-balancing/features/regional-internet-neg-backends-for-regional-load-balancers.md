---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:54:57.777Z"
product_name: "Cloud Load Balancing"
product_slug: "cloud-load-balancing"
feature_name: "Regional internet NEG backends for regional load balancers"
feature_slug: "regional-internet-neg-backends-for-regional-load-balancers"
latest_feature_date: "2023-11-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/load-balancing/docs/application-load-balancer"
  - "https://docs.cloud.google.com/load-balancing/docs/tcp/internal-proxy"
  - "https://docs.cloud.google.com/load-balancing/docs/https"
keywords:
  - "regional"
  - "internet"
  - "neg"
  - "backends"
  - "load"
  - "balancers"
  - "application"
  - "proxy"
---

# Regional internet NEG backends for regional load balancers

Product: Cloud Load Balancing
Coverage: MEDIUM

## Step 02 Summary

Regional Application Load Balancers and regional proxy Network Load Balancers support external backends outside Google Cloud through regional internet NEGs; Regional Application Load Balancers and regional proxy Network Load Balancers support external backends outside Google Cloud through regional internet NEGs.

## Extended Definition

Regional Application Load Balancers and regional proxy Network Load Balancers support external backends outside Google Cloud through regional internet NEGs; Regional Application Load Balancers and regional proxy Network Load Balancers support external backends outside Google Cloud through regional internet NEGs.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/load-balancing/docs/application-load-balancer](https://docs.cloud.google.com/load-balancing/docs/application-load-balancer)
- [https://docs.cloud.google.com/load-balancing/docs/tcp/internal-proxy](https://docs.cloud.google.com/load-balancing/docs/tcp/internal-proxy)
- [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https)

## Supporting Pages

### "Application Load Balancer overview \_|\_ Cloud Load Balancing \_|\_ Google\

- URL: [https://docs.cloud.google.com/load-balancing/docs/application-load-balancer](https://docs.cloud.google.com/load-balancing/docs/application-load-balancer)
- Source ID: `site-docs-reference-required-3`
- Final score: 196
- Re-rank relevance: N/A

Evidence snippets:
- Related documentation: Serverless NEGs overview Set up a global external Application Load Balancer with a Cloud Run, Cloud Run functions, or App Engine backend Set up a regional external Application Load Balancer with a Cloud Run backend Set up a regional internal Application Load Balancer with a Cloud Run backend Set up a cross-region internal Application Load Balancer with Cloud Run Load balancing to backends outside Google Cloud Application Load Balancers support load-balancing traffic to endpoints that extend beyond Google Cloud, such as on-premises data centers and other cloud environments.
- Internal Application Load Balancer The internal Application Load Balancers are Envoy proxy-based regional Layer 7 load balancers that enable you to run and scale your HTTP application traffic behind an internal IP address.
- Organization of global, regional, and cross-region Application Load Balancers and proxy Network Load Balancers in App Hub applications to understand the load balancer interactions and support business functions.
- Global external Application Load Balancers and regional external Application Load Balancers use the open source Envoy proxy software to enable advanced traffic management capabilities.

### "Internal proxy Network Load Balancer overview \_|\_ Cloud Load Balancing\

- URL: [https://docs.cloud.google.com/load-balancing/docs/tcp/internal-proxy](https://docs.cloud.google.com/load-balancing/docs/tcp/internal-proxy)
- Source ID: `site-docs-root`
- Final score: 196
- Re-rank relevance: N/A

Evidence snippets:
- The following table specifies the backend service APIs for internal proxy Network Load Balancers: Load balancer mode Backend service type Regional internal proxy Network Load Balancer Regional regionBackendServices Cross-region internal proxy Network Load Balancer Global backendServices Supported backends The internal proxy Network Load Balancer supports the following types of backends: Load balancer mode Supported backends on a backend service Instance groups Zonal NEGs Internet NEGs Serverless NEGs Hybrid NEGs Private Service Connect NEGs GKE Regional internal proxy Network Load Balancer GCE VM IP PORT type endpoints Regional NEGs only Add a Private Service Connect NEG Cross-region internal proxy Network Load Balancer GCE VM IP PORT type endpoints Add a Private Service Connect NEG All of the backends must be of the same type (instance groups or NEGs).
- What's next Set up a cross-region internal Application Load Balancer with VM instance group backends Set up a cross-region internal Application Load Balancer with hybrid connectivity Set up a regional internal proxy Network Load Balancer with an instance group backend Set up a regional internal proxy Network Load Balancer with a zonal NEG backend Set up a regional internal proxy Network Load Balancer with a hybrid NEG backend Set up a regional internal proxy Network Load Balancer with an internet NEG backend View metrics with Cloud Monitoring Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- The following table describes the failover behavior for internal proxy Network Load Balancers: Load balancer mode Failover behavior Behavior when all backends are unhealthy Regional internal proxy Network Load Balancer The load balancer implements a gentle failover algorithm per zone.
- Traffic from load balancers using regional internet NEGs originates from the proxy-only subnet and is then NAT-translated (by using Cloud NAT) to either manually or automatically allocated NAT IP addresses.

### "External Application Load Balancer overview \_|\_ Cloud Load Balancing \_\

- URL: [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https)
- Source ID: `site-docs-reference-required-3`
- Final score: 186
- Re-rank relevance: N/A

Evidence snippets:
- Architecture The following resources are required for an external Application Load Balancer deployment: For regional external Application Load Balancers only , a proxy-only subnet is used to send connections from the load balancer to the backends.
- Regional external Application Load Balancers that use hybrid NEG backends are an exception to this rule because their health checks originate from the proxy-only subnet instead.
- With regional external Application Load Balancers, you can't reference a cross-project backend service if the backend service has regional internet NEG backends.
- Regional external Application Load Balancers require an additional firewall rule to allow traffic from the proxy-only subnet to reach the backends.

