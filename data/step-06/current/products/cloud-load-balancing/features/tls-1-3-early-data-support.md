---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:54:57.760Z"
product_name: "Cloud Load Balancing"
product_slug: "cloud-load-balancing"
feature_name: "TLS 1.3 early data support"
feature_slug: "tls-1-3-early-data-support"
latest_feature_date: "2025-02-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/load-balancing/docs/https"
  - "https://docs.cloud.google.com/load-balancing/docs/https/setting-up-https"
  - "https://docs.cloud.google.com/load-balancing/docs/application-load-balancer"
keywords:
  - "tls"
  - "early"
  - "global"
  - "external"
  - "classic"
  - "application"
  - "load"
  - "balancers"
---

# TLS 1.3 early data support

Product: Cloud Load Balancing
Coverage: MEDIUM

## Step 02 Summary

Global external and classic Application Load Balancers support TLS 1.3 early data for resumed connections on target HTTPS proxies.

## Extended Definition

Global external and classic Application Load Balancers support TLS 1.3 early data for resumed connections on target HTTPS proxies.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https)
- [https://docs.cloud.google.com/load-balancing/docs/https/setting-up-https](https://docs.cloud.google.com/load-balancing/docs/https/setting-up-https)
- [https://docs.cloud.google.com/load-balancing/docs/application-load-balancer](https://docs.cloud.google.com/load-balancing/docs/application-load-balancer)

## Supporting Pages

### "External Application Load Balancer overview \_|\_ Cloud Load Balancing \_\

- URL: [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https)
- Source ID: `site-docs-reference-required-3`
- Final score: 243
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- TLS 1.3 early data is supported on the target HTTPS proxy of the following external Application Load Balancers for both HTTPS over TCP (HTTP/1.1, HTTP/2) and HTTP/3 over QUIC: Global external Application Load Balancers Classic Application Load Balancers TLS 1.3 was defined in RFC 8446 and introduces the concept of early data , also known as zero-round-trip time (0-RTT) data , which can improve application performance for resumed connections by 30 to 50%.
- Backend service scope The following table indicates which backend service resource and scope is used by external Application Load Balancers: Load balancer mode Backend service resource Global external Application Load Balancer backendServices (global) Classic Application Load Balancer backendServices (global) Regional external Application Load Balancer regionBackendServices (regional) Protocol to the backends Backend services for Application Load Balancers must use one of the following protocols to send requests to backends: HTTP, which uses HTTP/1.1 and no TLS HTTPS, which uses HTTP/1.1 and TLS HTTP/2, which uses HTTP/2 and TLS (HTTP/2 without encryption isn't supported.) H2C, which uses HTTP/2 over TCP.
- Load balancer mode Health check type Global external Application Load Balancer Global Classic Application Load Balancer Global Regional external Application Load Balancer Regional For more information about health checks, see the following: Health checks overview Creating health checks Firewall rules The load balancer requires the following firewall rules: For the global external Application Load Balancers, an ingress allow rule to permit traffic from Google Front Ends (GFEs) to reach your backends.
- Load balancer mode URL map type Global external Application Load Balancer Global Classic Application Load Balancer Global (with only a subset of the features supported ) Regional external Application Load Balancer Regional SSL certificates External Application Load Balancers using target HTTPS proxies require private keys and SSL certificates as part of the load balancer configuration.

### "Request routing to a multi-region classic Application Load Balancer \_|\_\

- URL: [https://docs.cloud.google.com/load-balancing/docs/https/setting-up-https](https://docs.cloud.google.com/load-balancing/docs/https/setting-up-https)
- Source ID: `site-docs-root`
- Final score: 158
- Re-rank relevance: N/A

Evidence snippets:
- For an classic Application Load Balancer, use load-balancing-scheme=EXTERNAL . gcloud compute forwarding-rules create https-content-rule \ --load-balancing-scheme= LOAD BALANCING SCHEME \ --network-tier=PREMIUM \ --address=lb-ipv4-1 \ --global \ --target-https-proxy=https-lb-proxy \ --ports=443 gcloud compute forwarding-rules create https-content-ipv6-rule \ --load-balancing-scheme= LOAD BALANCING SCHEME \ --network-tier=PREMIUM \ --address=lb-ipv6-1 \ --global \ --target-https-proxy=https-lb-proxy \ --ports=443 After creating the global forwarding rule, it can take several minutes for your configuration to propagate worldwide.
- For an classic Application Load Balancer, use load-balancing-scheme=EXTERNAL . gcloud compute backend-services create video-backend-service \ --load-balancing-scheme= LOAD BALANCING SCHEME \ --global-health-checks \ --protocol=HTTP \ --port-name=http \ --health-checks=http-basic-check \ --global gcloud compute backend-services create web-backend-service \ --load-balancing-scheme= LOAD BALANCING SCHEME \ --global-health-checks \ --protocol=HTTP \ --port-name=http \ --health-checks=http-basic-check \ --global Add your instance groups as backends to the backend services.
- PATCH https : // www . googleapis . com / compute / v1 / projects /[ PROJECT ID ]/ global / backendServices / video - backend - service { "sessionAffinity" : "GENERATED COOKIE" } Removing external IP addresses from backend VMs External Application Load Balancers communicate with backends using their internal IP addresses and special load balancer routes .
- Reviewing and finalizing In the left panel of the Create global external Application Load Balancer page, click Review and finalize .

### "Application Load Balancer overview \_|\_ Cloud Load Balancing \_|\_ Google\

- URL: [https://docs.cloud.google.com/load-balancing/docs/application-load-balancer](https://docs.cloud.google.com/load-balancing/docs/application-load-balancer)
- Source ID: `site-docs-reference-required-3`
- Final score: 157
- Re-rank relevance: N/A

Evidence snippets:
- High availability and cross-region failover Cross-region failover is only available with global external Application Load Balancers, classic Application Load Balancers, and cross-region internal Application Load Balancers.
- Global external Application Load Balancers and classic Application Load Balancers use GFEs that are distributed globally , operating together by using Google's global network and control plane.
- Supported only by the global external Application Load Balancers, classic Application Load Balancers, and regional internal Application Load Balancers.
- Related documentation: Serverless NEGs overview Set up a global external Application Load Balancer with a Cloud Run, Cloud Run functions, or App Engine backend Set up a regional external Application Load Balancer with a Cloud Run backend Set up a regional internal Application Load Balancer with a Cloud Run backend Set up a cross-region internal Application Load Balancer with Cloud Run Load balancing to backends outside Google Cloud Application Load Balancers support load-balancing traffic to endpoints that extend beyond Google Cloud, such as on-premises data centers and other cloud environments.

