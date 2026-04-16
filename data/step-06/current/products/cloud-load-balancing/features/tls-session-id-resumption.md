---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:54:57.767Z"
product_name: "Cloud Load Balancing"
product_slug: "cloud-load-balancing"
feature_name: "TLS session ID resumption"
feature_slug: "tls-session-id-resumption"
latest_feature_date: "2024-08-28"
deprecation_date: "2024-08-28"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/load-balancing/docs/https"
  - "https://docs.cloud.google.com/load-balancing/docs/https/setting-up-https"
  - "https://docs.cloud.google.com/load-balancing/docs/tcp"
keywords:
  - "tls"
  - "session"
  - "id"
  - "resumption"
  - "global"
  - "external"
  - "classic"
  - "application"
---

# TLS session ID resumption

Product: Cloud Load Balancing
Coverage: MEDIUM

## Step 02 Summary

Global external and classic Application Load Balancers supported the legacy TLS sessionID resumption mechanism for abbreviated handshakes; deprecated on 2024-08-28.

## Extended Definition

Global external and classic Application Load Balancers supported the legacy TLS sessionID resumption mechanism for abbreviated handshakes; deprecated on 2024-08-28.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https)
- [https://docs.cloud.google.com/load-balancing/docs/https/setting-up-https](https://docs.cloud.google.com/load-balancing/docs/https/setting-up-https)
- [https://docs.cloud.google.com/load-balancing/docs/tcp](https://docs.cloud.google.com/load-balancing/docs/tcp)

## Supporting Pages

### "External Application Load Balancer overview \_|\_ Cloud Load Balancing \_\

- URL: [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https)
- Source ID: `site-docs-reference-required-3`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- The following table summarizes the required source IP address ranges for the firewall rules: Load balancer mode Health check source ranges Request source ranges Global external Application Load Balancer 35.191.0.0/16 130.211.0.0/22 For IPv6 traffic to the backends: 2600:2d00:1:b029::/64 The source of GFE traffic depends on the backend type: Instance groups and zonal NEGs ( GCE VM IP PORT ): 130.211.0.0/22 35.191.0.0/16 For IPv6 traffic to the backends: 2600:2d00:1:1::/64 Hybrid connectivity NEGs ( NON GCP PRIVATE IP PORT ): 130.211.0.0/22 35.191.0.0/16 Internet NEGs ( INTERNET FQDN PORT and INTERNET IP PORT ): 34.96.0.0/20 34.127.192.0/18 SERVERLESS NEGs and backend buckets: Google's production network handles packet routing Classic Application Load Balancer 35.191.0.0/16 130.211.0.0/22 The source of GFE traffic depends on the backend type: Instance groups, zonal NEGs ( GCE VM IP PORT ), and hybrid connectivity NEGs ( NON GCP PRIVATE IP PORT ): 35.191.0.0/16 130.211.0.0/22 Internet NEGs ( INTERNET FQDN PORT and INTERNET IP PORT ): 34.96.0.0/20 34.127.192.0/18 SERVERLESS NEGs and backend buckets: Google's production network handles packet routing.
- Backend service scope The following table indicates which backend service resource and scope is used by external Application Load Balancers: Load balancer mode Backend service resource Global external Application Load Balancer backendServices (global) Classic Application Load Balancer backendServices (global) Regional external Application Load Balancer regionBackendServices (regional) Protocol to the backends Backend services for Application Load Balancers must use one of the following protocols to send requests to backends: HTTP, which uses HTTP/1.1 and no TLS HTTPS, which uses HTTP/1.1 and TLS HTTP/2, which uses HTTP/2 and TLS (HTTP/2 without encryption isn't supported.) H2C, which uses HTTP/2 over TCP.
- Load balancer mode Supported backends on a backend service 1 Supports backend buckets Supports Cloud Armor Supports Cloud CDN 2 Supports IAP 2 Supports Service Extensions Instance groups 3 Zonal NEGs 4 Internet NEGs Serverless NEGs Hybrid NEGs Private Service Connect NEGs Global external Application Load Balancer Classic Application Load Balancer Premium Tier Regional external Application Load Balancer 1 Backends on a backend service must be the same type: all instance groups or all the same type of NEG.
- Load balancer mode Health check type Global external Application Load Balancer Global Classic Application Load Balancer Global Regional external Application Load Balancer Regional For more information about health checks, see the following: Health checks overview Creating health checks Firewall rules The load balancer requires the following firewall rules: For the global external Application Load Balancers, an ingress allow rule to permit traffic from Google Front Ends (GFEs) to reach your backends.

### "Request routing to a multi-region classic Application Load Balancer \_|\_\

- URL: [https://docs.cloud.google.com/load-balancing/docs/https/setting-up-https](https://docs.cloud.google.com/load-balancing/docs/https/setting-up-https)
- Source ID: `site-docs-root`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- For an classic Application Load Balancer, use load-balancing-scheme=EXTERNAL . gcloud compute forwarding-rules create https-content-rule \ --load-balancing-scheme= LOAD BALANCING SCHEME \ --network-tier=PREMIUM \ --address=lb-ipv4-1 \ --global \ --target-https-proxy=https-lb-proxy \ --ports=443 gcloud compute forwarding-rules create https-content-ipv6-rule \ --load-balancing-scheme= LOAD BALANCING SCHEME \ --network-tier=PREMIUM \ --address=lb-ipv6-1 \ --global \ --target-https-proxy=https-lb-proxy \ --ports=443 After creating the global forwarding rule, it can take several minutes for your configuration to propagate worldwide.
- For an classic Application Load Balancer, use load-balancing-scheme=EXTERNAL . gcloud compute backend-services create video-backend-service \ --load-balancing-scheme= LOAD BALANCING SCHEME \ --global-health-checks \ --protocol=HTTP \ --port-name=http \ --health-checks=http-basic-check \ --global gcloud compute backend-services create web-backend-service \ --load-balancing-scheme= LOAD BALANCING SCHEME \ --global-health-checks \ --protocol=HTTP \ --port-name=http \ --health-checks=http-basic-check \ --global Add your instance groups as backends to the backend services.
- PATCH https : // www . googleapis . com / compute / v1 / projects /[ PROJECT ID ]/ global / backendServices / video - backend - service { "sessionAffinity" : "GENERATED COOKIE" } Removing external IP addresses from backend VMs External Application Load Balancers communicate with backends using their internal IP addresses and special load balancer routes .
- Reviewing and finalizing In the left panel of the Create global external Application Load Balancer page, click Review and finalize .

### "External proxy Network Load Balancer overview \_|\_ Cloud Load Balancing\

- URL: [https://docs.cloud.google.com/load-balancing/docs/tcp](https://docs.cloud.google.com/load-balancing/docs/tcp)
- Source ID: `site-docs-root`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- For Global external proxy Network Load Balancers and Classic proxy Network Load Balancers, session affinity can break if a different first-layer Google Front End (GFE) is used for subsequent requests or connections after the change in routing path.
- Load balancer mode Supported backends on a backend service Instance groups Zonal NEGs Internet NEGs Serverless NEGs Hybrid NEGs Private Service Connect NEGs GKE Classic proxy Network Load Balancer Use standalone zonal NEGs Global external proxy Network Load Balancer GCE VM IP PORT type endpoints Regional external proxy Network Load Balancer GCE VM IP PORT type endpoints Regional NEGs only Add a Private Service Connect NEG Global external proxy Network Load Balancers support IPv4 and IPv6 (dual stack) instance groups and zonal NEG backends with GCE VM IP PORT endpoints.
- Load balancer mode Health check source ranges Request source ranges Global external proxy Network Load Balancer 35.191.0.0/16 130.211.0.0/22 For IPv6 traffic to the backends: 2600:2d00:1:b029::/64 The source of GFE traffic depends on the backend type: Instance groups and zonal NEGs ( GCE VM IP PORT ): 130.211.0.0/22 35.191.0.0/16 For IPv6 traffic to the backends: 2600:2d00:1:1::/64 Classic proxy Network Load Balancer 35.191.0.0/16 130.211.0.0/22 These ranges apply to health check probes and requests from the GFE.
- Load balancer mode Load balancer type Access type Region Classic proxy Network Load Balancer Network (Proxy classic) External Global external proxy Network Load Balancer Network (Proxy) External Regional external proxy Network Load Balancer Network (Proxy) External Specifies a region gcloud Use the gcloud compute forwarding-rules describe command: gcloud compute forwarding-rules describe FORWARDING RULE NAME In the command output, check the load balancing scheme, region, and network tier.

