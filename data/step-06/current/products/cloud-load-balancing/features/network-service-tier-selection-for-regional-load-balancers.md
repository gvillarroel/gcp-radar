---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:54:57.777Z"
product_name: "Cloud Load Balancing"
product_slug: "cloud-load-balancing"
feature_name: "Network Service Tier selection for regional load balancers"
feature_slug: "network-service-tier-selection-for-regional-load-balancers"
latest_feature_date: "2024-01-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/load-balancing/docs/tcp/internal-proxy"
  - "https://docs.cloud.google.com/load-balancing/docs/tcp"
  - "https://docs.cloud.google.com/load-balancing/docs/network"
keywords:
  - "network"
  - "tier"
  - "selection"
  - "regional"
  - "load"
  - "balancers"
  - "application"
  - "proxy"
---

# Network Service Tier selection for regional load balancers

Product: Cloud Load Balancing
Coverage: MEDIUM

## Step 02 Summary

Supported regional Application Load Balancers and proxy Network Load Balancers can be configured in either Premium or Standard Network Service Tier.

## Extended Definition

Supported regional Application Load Balancers and proxy Network Load Balancers can be configured in either Premium or Standard Network Service Tier.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/load-balancing/docs/tcp/internal-proxy](https://docs.cloud.google.com/load-balancing/docs/tcp/internal-proxy)
- [https://docs.cloud.google.com/load-balancing/docs/tcp](https://docs.cloud.google.com/load-balancing/docs/tcp)
- [https://docs.cloud.google.com/load-balancing/docs/network](https://docs.cloud.google.com/load-balancing/docs/network)

## Supporting Pages

### "Internal proxy Network Load Balancer overview \_|\_ Cloud Load Balancing\

- URL: [https://docs.cloud.google.com/load-balancing/docs/tcp/internal-proxy](https://docs.cloud.google.com/load-balancing/docs/tcp/internal-proxy)
- Source ID: `site-docs-root`
- Final score: 204
- Re-rank relevance: N/A

Evidence snippets:
- The following table specifies the backend service APIs for internal proxy Network Load Balancers: Load balancer mode Backend service type Regional internal proxy Network Load Balancer Regional regionBackendServices Cross-region internal proxy Network Load Balancer Global backendServices Supported backends The internal proxy Network Load Balancer supports the following types of backends: Load balancer mode Supported backends on a backend service Instance groups Zonal NEGs Internet NEGs Serverless NEGs Hybrid NEGs Private Service Connect NEGs GKE Regional internal proxy Network Load Balancer GCE VM IP PORT type endpoints Regional NEGs only Add a Private Service Connect NEG Cross-region internal proxy Network Load Balancer GCE VM IP PORT type endpoints Add a Private Service Connect NEG All of the backends must be of the same type (instance groups or NEGs).
- What's next Set up a cross-region internal Application Load Balancer with VM instance group backends Set up a cross-region internal Application Load Balancer with hybrid connectivity Set up a regional internal proxy Network Load Balancer with an instance group backend Set up a regional internal proxy Network Load Balancer with a zonal NEG backend Set up a regional internal proxy Network Load Balancer with a hybrid NEG backend Set up a regional internal proxy Network Load Balancer with an internet NEG backend View metrics with Cloud Monitoring Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- The following table specifies the scope of health checks supported by internal proxy Network Load Balancers in each mode: Load balancer mode Health check type Regional internal proxy Network Load Balancer Regional regionHealthChecks Cross-region internal proxy Network Load Balancer Global healthChecks For more information about health checks, see the following: Health checks overview Use health checks Firewall rules Internal proxy Network Load Balancers require the following firewall rules: An ingress allow rule that permits traffic from the Google health check probes.
- The following table shows the forwarding rule requirements for internal proxy Network Load Balancers: Load balancer mode Forwarding rule, IP address, and proxy-only subnet --purpose Routing from the client to the load balancer's frontend Regional internal proxy Network Load Balancer Regional forwardingRules Regional IP address Load balancing scheme: INTERNAL MANAGED Proxy-only subnet --purpose : REGIONAL MANAGED PROXY IP address --purpose : SHARED LOADBALANCER VIP You can enable global access to allow clients from any region to access your load balancer.

### "External proxy Network Load Balancer overview \_|\_ Cloud Load Balancing\

- URL: [https://docs.cloud.google.com/load-balancing/docs/tcp](https://docs.cloud.google.com/load-balancing/docs/tcp)
- Source ID: `site-docs-root`
- Final score: 202
- Re-rank relevance: N/A

Evidence snippets:
- Load balancer mode Supported backends on a backend service Instance groups Zonal NEGs Internet NEGs Serverless NEGs Hybrid NEGs Private Service Connect NEGs GKE Classic proxy Network Load Balancer Use standalone zonal NEGs Global external proxy Network Load Balancer GCE VM IP PORT type endpoints Regional external proxy Network Load Balancer GCE VM IP PORT type endpoints Regional NEGs only Add a Private Service Connect NEG Global external proxy Network Load Balancers support IPv4 and IPv6 (dual stack) instance groups and zonal NEG backends with GCE VM IP PORT endpoints.
- Load balancer mode Load balancer type Access type Region Classic proxy Network Load Balancer Network (Proxy classic) External Global external proxy Network Load Balancer Network (Proxy) External Regional external proxy Network Load Balancer Network (Proxy) External Specifies a region gcloud Use the gcloud compute forwarding-rules describe command: gcloud compute forwarding-rules describe FORWARDING RULE NAME In the command output, check the load balancing scheme, region, and network tier.
- Load balancer mode Load balancing scheme Forwarding rule Network tier Classic proxy Network Load Balancer EXTERNAL Global Standard or Premium Global external proxy Network Load Balancer EXTERNAL MANAGED Global Premium Regional external proxy Network Load Balancer EXTERNAL MANAGED Regional Standard or Premium Important: After you create a load balancer, you can't edit its mode.
- For more information, see the following: Balancing modes Load balancing locality policy (regional backend service API documentation) SNI-based routing with TLS routes Note: SNI-based routing is supported only for regional external proxy Network Load Balancers.

### "Backend service-based regional external passthrough Network Load Balancer\

- URL: [https://docs.cloud.google.com/load-balancing/docs/network](https://docs.cloud.google.com/load-balancing/docs/network)
- Source ID: `site-docs-root`
- Final score: 199
- Re-rank relevance: N/A

Evidence snippets:
- Regional external passthrough Network Load Balancers support both Standard Tier and Premium Tier for regional external IPv4 addresses.
- Location of load balancing resources 1 Required location of IP address resource Host project Host project Service project Service project or host project 1 Includes the forwarding rule, backend service, health check, and backends (NEGs and managed or unmanaged instance groups) Traffic distribution Regional external passthrough Network Load Balancers support a variety of traffic distribution customization options, including session affinity, connection tracking, weighted load balancing, and failover.
- Related GKE documentation: LoadBalancer Service concepts Exposing applications using Services Architecture The following diagram illustrates the components of a regional external passthrough Network Load Balancer: Regional external passthrough Network Load Balancer with a regional backend service The load balancer is made up of several configuration components.
- Regional external passthrough Network Load Balancers can receive traffic from: Any client on the internet Google Cloud VMs with external IPs Google Cloud VMs that have internet access through Cloud NAT or instance-based NAT Regional external passthrough Network Load Balancers are not proxies .

