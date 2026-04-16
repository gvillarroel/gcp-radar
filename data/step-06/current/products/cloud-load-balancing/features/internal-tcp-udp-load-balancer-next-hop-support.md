---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:54:57.794Z"
product_name: "Cloud Load Balancing"
product_slug: "cloud-load-balancing"
feature_name: "Internal TCP/UDP load balancer next-hop support"
feature_slug: "internal-tcp-udp-load-balancer-next-hop-support"
latest_feature_date: "2019-12-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/load-balancing/docs/l7-internal"
  - "https://docs.cloud.google.com/load-balancing/docs/tcp/internal-proxy"
  - "https://docs.cloud.google.com/load-balancing/docs/internal"
keywords:
  - "internal"
  - "tcp"
  - "udp"
  - "load"
  - "balancer"
  - "next"
  - "hop"
  - "balancers"
---

# Internal TCP/UDP load balancer next-hop support

Product: Cloud Load Balancing
Coverage: MEDIUM

## Step 02 Summary

Internal TCP/UDP load balancers can be used as next hops in routing configurations; Internal TCP/UDP load balancers can be used as next hops in routing configurations.

## Extended Definition

Internal TCP/UDP load balancers can be used as next hops in routing configurations; Internal TCP/UDP load balancers can be used as next hops in routing configurations.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/load-balancing/docs/l7-internal](https://docs.cloud.google.com/load-balancing/docs/l7-internal)
- [https://docs.cloud.google.com/load-balancing/docs/tcp/internal-proxy](https://docs.cloud.google.com/load-balancing/docs/tcp/internal-proxy)
- [https://docs.cloud.google.com/load-balancing/docs/internal](https://docs.cloud.google.com/load-balancing/docs/internal)

## Supporting Pages

### "Internal Application Load Balancer overview \_|\_ Cloud Load Balancing \_\

- URL: [https://docs.cloud.google.com/load-balancing/docs/l7-internal](https://docs.cloud.google.com/load-balancing/docs/l7-internal)
- Source ID: `site-docs-root`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- Backend service scope The following table indicates which backend service resource and scope is used by internal Application Load Balancers: Load balancer mode Backend service resource Cross-region internal Application Load Balancer backendServices Regional internal Application Load Balancer regionBackendServices Protocol to the backends Backend services for Application Load Balancers must use one of the following protocols to send requests to backends: HTTP, which uses HTTP/1.1 and no TLS HTTPS, which uses HTTP/1.1 and TLS HTTP/2, which uses HTTP/2 and TLS (HTTP/2 without encryption isn't supported.) H2C, which uses HTTP/2 over TCP.
- The following table specifies the scope of health checks supported by internal Application Load Balancers: Load balancer mode Health check type Cross-region internal Application Load Balancer healthChecks Regional internal Application Load Balancer regionHealthChecks For more information about health checks, see the following: Health checks overview Create health checks Firewall rules An internal Application Load Balancer requires the following firewall rules: An ingress allow rule that permits traffic from Google's central health check ranges.
- Types of session affinity The session affinity for internal Application Load Balancers can be classified into one of the following categories: Hash-based session affinity ( NONE , CLIENT IP ) HTTP header-based session affinity ( HEADER FIELD ) Cookie-based session affinity ( GENERATED COOKIE , HTTP COOKIE , STRONG COOKIE AFFINITY ) Hash-based session affinity For hash-based session affinity, the load balancer uses the consistent hashing algorithm to select an eligible backend.
- The following table specifies the type of URL map required by internal Application Load Balancers in each mode: Load balancer mode URL map type Cross-region internal Application Load Balancer urlMaps Regional internal Application Load Balancer regionUrlMaps Backend service A backend service provides configuration information to the load balancer so that it can direct requests to its backends—for example, Compute Engine instance groups or network endpoint groups (NEGs).

### "Internal passthrough Network Load Balancer overview \_|\_ Cloud Load Balancing\

- URL: [https://docs.cloud.google.com/load-balancing/docs/internal](https://docs.cloud.google.com/load-balancing/docs/internal)
- Source ID: `site-docs-reference-required-4`
- Final score: 149
- Re-rank relevance: N/A

Evidence snippets:
- An internal passthrough Network Load Balancer doesn't support the following: Backend VMs in multiple regions Balancing traffic that originates from the internet, unless you're using it with an external load balancer IPv6 packets with fragmented headers Internal IP address Internal passthrough Network Load Balancers support IPv4-only, dual-stack, and IPv6-only subnets.
- Firewall configuration Internal passthrough Network Load Balancers require the following configuration for hierarchical firewall policies and VPC firewall rules: Allow ingress from IPv4 or IPv6 health check source ranges .
- Instances that participate as backend VMs for internal passthrough Network Load Balancers must be running the appropriate Linux or Windows guest environment or other processes that provide equivalent functionality.
- For details about how internal passthrough Network Load Balancers distribute traffic, and how these options interact with each other, see Traffic distribution for internal passthrough Network Load Balancers .

### "Internal proxy Network Load Balancer overview \_|\_ Cloud Load Balancing\

- URL: [https://docs.cloud.google.com/load-balancing/docs/tcp/internal-proxy](https://docs.cloud.google.com/load-balancing/docs/tcp/internal-proxy)
- Source ID: `site-docs-root`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- The following table specifies the backend service APIs for internal proxy Network Load Balancers: Load balancer mode Backend service type Regional internal proxy Network Load Balancer Regional regionBackendServices Cross-region internal proxy Network Load Balancer Global backendServices Supported backends The internal proxy Network Load Balancer supports the following types of backends: Load balancer mode Supported backends on a backend service Instance groups Zonal NEGs Internet NEGs Serverless NEGs Hybrid NEGs Private Service Connect NEGs GKE Regional internal proxy Network Load Balancer GCE VM IP PORT type endpoints Regional NEGs only Add a Private Service Connect NEG Cross-region internal proxy Network Load Balancer GCE VM IP PORT type endpoints Add a Private Service Connect NEG All of the backends must be of the same type (instance groups or NEGs).
- What's next Set up a cross-region internal Application Load Balancer with VM instance group backends Set up a cross-region internal Application Load Balancer with hybrid connectivity Set up a regional internal proxy Network Load Balancer with an instance group backend Set up a regional internal proxy Network Load Balancer with a zonal NEG backend Set up a regional internal proxy Network Load Balancer with a hybrid NEG backend Set up a regional internal proxy Network Load Balancer with an internet NEG backend View metrics with Cloud Monitoring Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- The following table specifies the scope of health checks supported by internal proxy Network Load Balancers in each mode: Load balancer mode Health check type Regional internal proxy Network Load Balancer Regional regionHealthChecks Cross-region internal proxy Network Load Balancer Global healthChecks For more information about health checks, see the following: Health checks overview Use health checks Firewall rules Internal proxy Network Load Balancers require the following firewall rules: An ingress allow rule that permits traffic from the Google health check probes.
- The following table shows the forwarding rule requirements for internal proxy Network Load Balancers: Load balancer mode Forwarding rule, IP address, and proxy-only subnet --purpose Routing from the client to the load balancer's frontend Regional internal proxy Network Load Balancer Regional forwardingRules Regional IP address Load balancing scheme: INTERNAL MANAGED Proxy-only subnet --purpose : REGIONAL MANAGED PROXY IP address --purpose : SHARED LOADBALANCER VIP You can enable global access to allow clients from any region to access your load balancer.

