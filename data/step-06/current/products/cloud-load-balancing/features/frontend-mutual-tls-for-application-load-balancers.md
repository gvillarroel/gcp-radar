---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:54:57.768Z"
product_name: "Cloud Load Balancing"
product_slug: "cloud-load-balancing"
feature_name: "Frontend mutual TLS for Application Load Balancers"
feature_slug: "frontend-mutual-tls-for-application-load-balancers"
latest_feature_date: "2024-08-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/load-balancing/docs/https"
  - "https://docs.cloud.google.com/load-balancing/docs/l7-internal"
  - "https://docs.cloud.google.com/load-balancing/docs/application-load-balancer"
keywords:
  - "frontend"
  - "mutual"
  - "tls"
  - "application"
  - "load"
  - "balancers"
  - "regional"
  - "external"
---

# Frontend mutual TLS for Application Load Balancers

Product: Cloud Load Balancing
Coverage: MEDIUM

## Step 02 Summary

Regional external, regional internal, and cross-region internal Application Load Balancers support frontend mutual TLS by requesting and validating client certificates during the TLS handshake.

## Extended Definition

Regional external, regional internal, and cross-region internal Application Load Balancers support frontend mutual TLS by requesting and validating client certificates during the TLS handshake.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https)
- [https://docs.cloud.google.com/load-balancing/docs/l7-internal](https://docs.cloud.google.com/load-balancing/docs/l7-internal)
- [https://docs.cloud.google.com/load-balancing/docs/application-load-balancer](https://docs.cloud.google.com/load-balancing/docs/application-load-balancer)

## Supporting Pages

### "External Application Load Balancer overview \_|\_ Cloud Load Balancing \_\

- URL: [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https)
- Source ID: `site-docs-reference-required-3`
- Final score: 198
- Re-rank relevance: N/A

Evidence snippets:
- Backend service scope The following table indicates which backend service resource and scope is used by external Application Load Balancers: Load balancer mode Backend service resource Global external Application Load Balancer backendServices (global) Classic Application Load Balancer backendServices (global) Regional external Application Load Balancer regionBackendServices (regional) Protocol to the backends Backend services for Application Load Balancers must use one of the following protocols to send requests to backends: HTTP, which uses HTTP/1.1 and no TLS HTTPS, which uses HTTP/1.1 and TLS HTTP/2, which uses HTTP/2 and TLS (HTTP/2 without encryption isn't supported.) H2C, which uses HTTP/2 over TCP.
- Load balancer mode Health check type Global external Application Load Balancer Global Classic Application Load Balancer Global Regional external Application Load Balancer Regional For more information about health checks, see the following: Health checks overview Creating health checks Firewall rules The load balancer requires the following firewall rules: For the global external Application Load Balancers, an ingress allow rule to permit traffic from Google Front Ends (GFEs) to reach your backends.
- Load balancer mode URL map type Global external Application Load Balancer Global Classic Application Load Balancer Global (with only a subset of the features supported ) Regional external Application Load Balancer Regional SSL certificates External Application Load Balancers using target HTTPS proxies require private keys and SSL certificates as part of the load balancer configuration.
- For more information, see the following: Traffic management overview for global external Application Load Balancer Traffic management overview for regional external Application Load Balancer The following table specifies the type of URL map required by external Application Load Balancers in each mode.

### "Internal Application Load Balancer overview \_|\_ Cloud Load Balancing \_\

- URL: [https://docs.cloud.google.com/load-balancing/docs/l7-internal](https://docs.cloud.google.com/load-balancing/docs/l7-internal)
- Source ID: `site-docs-root`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- Backend service scope The following table indicates which backend service resource and scope is used by internal Application Load Balancers: Load balancer mode Backend service resource Cross-region internal Application Load Balancer backendServices Regional internal Application Load Balancer regionBackendServices Protocol to the backends Backend services for Application Load Balancers must use one of the following protocols to send requests to backends: HTTP, which uses HTTP/1.1 and no TLS HTTPS, which uses HTTP/1.1 and TLS HTTP/2, which uses HTTP/2 and TLS (HTTP/2 without encryption isn't supported.) H2C, which uses HTTP/2 over TCP.
- The following table specifies the scope of health checks supported by internal Application Load Balancers: Load balancer mode Health check type Cross-region internal Application Load Balancer healthChecks Regional internal Application Load Balancer regionHealthChecks For more information about health checks, see the following: Health checks overview Create health checks Firewall rules An internal Application Load Balancer requires the following firewall rules: An ingress allow rule that permits traffic from Google's central health check ranges.
- The following table specifies the type of URL map required by internal Application Load Balancers in each mode: Load balancer mode URL map type Cross-region internal Application Load Balancer urlMaps Regional internal Application Load Balancer regionUrlMaps Backend service A backend service provides configuration information to the load balancer so that it can direct requests to its backends—for example, Compute Engine instance groups or network endpoint groups (NEGs).
- The following table shows the target proxy APIs required by internal Application Load Balancers: Load balancer mode Target proxy Cross-region internal Application Load Balancer targetHttpProxies targetHttpsProxies Regional internal Application Load Balancer regionTargetHttpProxies regionTargetHttpsProxies SSL certificates Internal Application Load Balancers using target HTTPS proxies require private keys and SSL certificates as part of the load balancer configuration.

### "Application Load Balancer overview \_|\_ Cloud Load Balancing \_|\_ Google\

- URL: [https://docs.cloud.google.com/load-balancing/docs/application-load-balancer](https://docs.cloud.google.com/load-balancing/docs/application-load-balancer)
- Source ID: `site-docs-reference-required-3`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- Related documentation: Serverless NEGs overview Set up a global external Application Load Balancer with a Cloud Run, Cloud Run functions, or App Engine backend Set up a regional external Application Load Balancer with a Cloud Run backend Set up a regional internal Application Load Balancer with a Cloud Run backend Set up a cross-region internal Application Load Balancer with Cloud Run Load balancing to backends outside Google Cloud Application Load Balancers support load-balancing traffic to endpoints that extend beyond Google Cloud, such as on-premises data centers and other cloud environments.
- For more details, see the following: Traffic management overview for global external Application Load Balancers Traffic management overview for regional external Application Load Balancers Extensibility with Service Extensions The integration with Service Extensions lets you inject custom logic into the load balancing path of supported Application Load Balancers .
- Global external Application Load Balancers and regional external Application Load Balancers use the open source Envoy proxy software to enable advanced traffic management capabilities.
- Supported only by the global external Application Load Balancers, classic Application Load Balancers, and regional internal Application Load Balancers.

