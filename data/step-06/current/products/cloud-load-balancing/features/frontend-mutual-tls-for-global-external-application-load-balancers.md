---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:54:57.778Z"
product_name: "Cloud Load Balancing"
product_slug: "cloud-load-balancing"
feature_name: "Frontend mutual TLS for global external Application Load Balancers"
feature_slug: "frontend-mutual-tls-for-global-external-application-load-balancers"
latest_feature_date: "2023-09-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/load-balancing/docs/https"
  - "https://docs.cloud.google.com/load-balancing/docs/tutorials/about-capacity-optimization-with-global-lb"
  - "https://docs.cloud.google.com/load-balancing/docs/application-load-balancer"
keywords:
  - "frontend"
  - "mutual"
  - "tls"
  - "global"
  - "external"
  - "application"
  - "load"
  - "balancers"
---

# Frontend mutual TLS for global external Application Load Balancers

Product: Cloud Load Balancing
Coverage: MEDIUM

## Step 02 Summary

Global external Application Load Balancers, including classic, support frontend mutual TLS with configurable client certificate validation.

## Extended Definition

Global external Application Load Balancers, including classic, support frontend mutual TLS with configurable client certificate validation.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https)
- [https://docs.cloud.google.com/load-balancing/docs/tutorials/about-capacity-optimization-with-global-lb](https://docs.cloud.google.com/load-balancing/docs/tutorials/about-capacity-optimization-with-global-lb)
- [https://docs.cloud.google.com/load-balancing/docs/application-load-balancer](https://docs.cloud.google.com/load-balancing/docs/application-load-balancer)

## Supporting Pages

### "External Application Load Balancer overview \_|\_ Cloud Load Balancing \_\

- URL: [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https)
- Source ID: `site-docs-reference-required-3`
- Final score: 202
- Re-rank relevance: N/A

Evidence snippets:
- Cross-project service referencing support differs based on the type of load balancer: For global external Application Load Balancers : your load balancer's frontend and URL map can reference backend services or backend buckets from any project within the same organization.
- Backend service scope The following table indicates which backend service resource and scope is used by external Application Load Balancers: Load balancer mode Backend service resource Global external Application Load Balancer backendServices (global) Classic Application Load Balancer backendServices (global) Regional external Application Load Balancer regionBackendServices (regional) Protocol to the backends Backend services for Application Load Balancers must use one of the following protocols to send requests to backends: HTTP, which uses HTTP/1.1 and no TLS HTTPS, which uses HTTP/1.1 and TLS HTTP/2, which uses HTTP/2 and TLS (HTTP/2 without encryption isn't supported.) H2C, which uses HTTP/2 over TCP.
- Load balancer mode Health check type Global external Application Load Balancer Global Classic Application Load Balancer Global Regional external Application Load Balancer Regional For more information about health checks, see the following: Health checks overview Creating health checks Firewall rules The load balancer requires the following firewall rules: For the global external Application Load Balancers, an ingress allow rule to permit traffic from Google Front Ends (GFEs) to reach your backends.
- TLS 1.3 early data is supported on the target HTTPS proxy of the following external Application Load Balancers for both HTTPS over TCP (HTTP/1.1, HTTP/2) and HTTP/3 over QUIC: Global external Application Load Balancers Classic Application Load Balancers TLS 1.3 was defined in RFC 8446 and introduces the concept of early data , also known as zero-round-trip time (0-RTT) data , which can improve application performance for resumed connections by 30 to 50%.

### "Application capacity optimizations with global load balancing \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/load-balancing/docs/tutorials/about-capacity-optimization-with-global-lb](https://docs.cloud.google.com/load-balancing/docs/tutorials/about-capacity-optimization-with-global-lb)
- Source ID: `site-docs-reference-required-3`
- Final score: 176
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Addressing these challenges with global load balancing The external Application Load Balancers and external proxy Network Load Balancers are global load balancing products proxied through globally synchronized Google Front End (GFE) servers, making it easier to mitigate these types of load balancing challenges.
- Using an external Application Load Balancer to address capacity challenges To help address the challenges discussed earlier, external Application Load Balancers and external proxy Network Load Balancers can overflow capacity to other regions.
- Note: The algorithm described here is equivalent for all GFE-based load balancers on Google Cloud, including the external Application Load Balancer and external proxy Network Load Balancer .
- The external Application Load Balancer is available through a single stable IP address that is announced globally at the edge nodes, and the connections are terminated by any of the GFEs.

### "Application Load Balancer overview \_|\_ Cloud Load Balancing \_|\_ Google\

- URL: [https://docs.cloud.google.com/load-balancing/docs/application-load-balancer](https://docs.cloud.google.com/load-balancing/docs/application-load-balancer)
- Source ID: `site-docs-reference-required-3`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- Related documentation: Serverless NEGs overview Set up a global external Application Load Balancer with a Cloud Run, Cloud Run functions, or App Engine backend Set up a regional external Application Load Balancer with a Cloud Run backend Set up a regional internal Application Load Balancer with a Cloud Run backend Set up a cross-region internal Application Load Balancer with Cloud Run Load balancing to backends outside Google Cloud Application Load Balancers support load-balancing traffic to endpoints that extend beyond Google Cloud, such as on-premises data centers and other cloud environments.
- To learn more about how failover works, see the following topics: Global external Application Load Balancers: How requests are distributed Cross-region internal Application Load Balancers: High availability and cross-region failover Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- For more details, see the following: Traffic management overview for global external Application Load Balancers Traffic management overview for regional external Application Load Balancers Extensibility with Service Extensions The integration with Service Extensions lets you inject custom logic into the load balancing path of supported Application Load Balancers .
- High availability and cross-region failover Cross-region failover is only available with global external Application Load Balancers, classic Application Load Balancers, and cross-region internal Application Load Balancers.

