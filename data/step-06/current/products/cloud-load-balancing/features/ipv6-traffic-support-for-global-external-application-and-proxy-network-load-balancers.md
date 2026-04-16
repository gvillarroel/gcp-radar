---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:54:57.765Z"
product_name: "Cloud Load Balancing"
product_slug: "cloud-load-balancing"
feature_name: "IPv6 traffic support for global external Application and proxy Network Load Balancers"
feature_slug: "ipv6-traffic-support-for-global-external-application-and-proxy-network-load-balancers"
latest_feature_date: "2024-10-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/load-balancing/docs/tcp"
  - "https://docs.cloud.google.com/load-balancing/docs/https"
  - "https://docs.cloud.google.com/load-balancing/docs/application-load-balancer"
keywords:
  - "ipv6"
  - "traffic"
  - "global"
  - "external"
  - "application"
  - "proxy"
  - "network"
  - "load"
---

# IPv6 traffic support for global external Application and proxy Network Load Balancers

Product: Cloud Load Balancing
Coverage: MEDIUM

## Step 02 Summary

Global external Application Load Balancers and global external proxy Network Load Balancers can load balance IPv6 traffic with dual-stack backends.

## Extended Definition

Global external Application Load Balancers and global external proxy Network Load Balancers can load balance IPv6 traffic with dual-stack backends.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/load-balancing/docs/tcp](https://docs.cloud.google.com/load-balancing/docs/tcp)
- [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https)
- [https://docs.cloud.google.com/load-balancing/docs/application-load-balancer](https://docs.cloud.google.com/load-balancing/docs/application-load-balancer)

## Supporting Pages

### "External proxy Network Load Balancer overview \_|\_ Cloud Load Balancing\

- URL: [https://docs.cloud.google.com/load-balancing/docs/tcp](https://docs.cloud.google.com/load-balancing/docs/tcp)
- Source ID: `site-docs-root`
- Final score: 250
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Load balancer mode Health check source ranges Request source ranges Global external proxy Network Load Balancer 35.191.0.0/16 130.211.0.0/22 For IPv6 traffic to the backends: 2600:2d00:1:b029::/64 The source of GFE traffic depends on the backend type: Instance groups and zonal NEGs ( GCE VM IP PORT ): 130.211.0.0/22 35.191.0.0/16 For IPv6 traffic to the backends: 2600:2d00:1:1::/64 Classic proxy Network Load Balancer 35.191.0.0/16 130.211.0.0/22 These ranges apply to health check probes and requests from the GFE.
- Load balancer mode Supported backends on a backend service Instance groups Zonal NEGs Internet NEGs Serverless NEGs Hybrid NEGs Private Service Connect NEGs GKE Classic proxy Network Load Balancer Use standalone zonal NEGs Global external proxy Network Load Balancer GCE VM IP PORT type endpoints Regional external proxy Network Load Balancer GCE VM IP PORT type endpoints Regional NEGs only Add a Private Service Connect NEG Global external proxy Network Load Balancers support IPv4 and IPv6 (dual stack) instance groups and zonal NEG backends with GCE VM IP PORT endpoints.
- Global external proxy Network Load Balancer For the global external proxy Network Load Balancer, traffic distribution is based on the load balancing mode and the load balancing locality policy.
- Depending on the type of traffic your application needs to handle, you can configure an external proxy Network Load Balancer with either a target TCP proxy or a target SSL proxy.

### "External Application Load Balancer overview \_|\_ Cloud Load Balancing \_\

- URL: [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https)
- Source ID: `site-docs-reference-required-3`
- Final score: 238
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following table summarizes the required source IP address ranges for the firewall rules: Load balancer mode Health check source ranges Request source ranges Global external Application Load Balancer 35.191.0.0/16 130.211.0.0/22 For IPv6 traffic to the backends: 2600:2d00:1:b029::/64 The source of GFE traffic depends on the backend type: Instance groups and zonal NEGs ( GCE VM IP PORT ): 130.211.0.0/22 35.191.0.0/16 For IPv6 traffic to the backends: 2600:2d00:1:1::/64 Hybrid connectivity NEGs ( NON GCP PRIVATE IP PORT ): 130.211.0.0/22 35.191.0.0/16 Internet NEGs ( INTERNET FQDN PORT and INTERNET IP PORT ): 34.96.0.0/20 34.127.192.0/18 SERVERLESS NEGs and backend buckets: Google's production network handles packet routing Classic Application Load Balancer 35.191.0.0/16 130.211.0.0/22 The source of GFE traffic depends on the backend type: Instance groups, zonal NEGs ( GCE VM IP PORT ), and hybrid connectivity NEGs ( NON GCP PRIVATE IP PORT ): 35.191.0.0/16 130.211.0.0/22 Internet NEGs ( INTERNET FQDN PORT and INTERNET IP PORT ): 34.96.0.0/20 34.127.192.0/18 SERVERLESS NEGs and backend buckets: Google's production network handles packet routing.
- Load balancer mode Health check type Global external Application Load Balancer Global Classic Application Load Balancer Global Regional external Application Load Balancer Regional For more information about health checks, see the following: Health checks overview Creating health checks Firewall rules The load balancer requires the following firewall rules: For the global external Application Load Balancers, an ingress allow rule to permit traffic from Google Front Ends (GFEs) to reach your backends.
- Load balancer mode Target proxy types Proxy-added headers Custom headers supported Global external Application Load Balancer Global HTTP , Global HTTPS The proxies set HTTP request/response headers as follows: Via: 1.1 google (requests and responses) X-Forwarded-Proto : [http https] (requests only) X-Forwarded-For : [<supplied-value>,]<client-ip>,<load-balancer-ip> (see X-Forwarded-For header ) (requests only) The proxies also set the X-Cloud-Trace-Context header if it is not already present.
- Load balancer mode Load balancer type Access type Region Global external Application Load Balancer Application External Classic Application Load Balancer Application(Classic) External Regional external Application Load Balancer Application External Specifies a region gcloud To determine the mode of a load balancer, run the following command: gcloud compute forwarding-rules describe FORWARDING RULE NAME In the command output, check the load balancing scheme, region, and network tier.

### "Application Load Balancer overview \_|\_ Cloud Load Balancing \_|\_ Google\

- URL: [https://docs.cloud.google.com/load-balancing/docs/application-load-balancer](https://docs.cloud.google.com/load-balancing/docs/application-load-balancer)
- Source ID: `site-docs-reference-required-3`
- Final score: 220
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Global external Application Load Balancers and regional external Application Load Balancers use the open source Envoy proxy software to enable advanced traffic management capabilities.
- Related documentation: Serverless NEGs overview Set up a global external Application Load Balancer with a Cloud Run, Cloud Run functions, or App Engine backend Set up a regional external Application Load Balancer with a Cloud Run backend Set up a regional internal Application Load Balancer with a Cloud Run backend Set up a cross-region internal Application Load Balancer with Cloud Run Load balancing to backends outside Google Cloud Application Load Balancers support load-balancing traffic to endpoints that extend beyond Google Cloud, such as on-premises data centers and other cloud environments.
- For more details, see the following: Traffic management overview for global external Application Load Balancers Traffic management overview for regional external Application Load Balancers Extensibility with Service Extensions The integration with Service Extensions lets you inject custom logic into the load balancing path of supported Application Load Balancers .
- Organization of global, regional, and cross-region Application Load Balancers and proxy Network Load Balancers in App Hub applications to understand the load balancer interactions and support business functions.

