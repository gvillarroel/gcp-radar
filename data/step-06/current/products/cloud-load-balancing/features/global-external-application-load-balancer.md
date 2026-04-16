---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:54:57.781Z"
product_name: "Cloud Load Balancing"
product_slug: "cloud-load-balancing"
feature_name: "Global external Application Load Balancer"
feature_slug: "global-external-application-load-balancer"
latest_feature_date: "2022-06-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/load-balancing/docs/https"
  - "https://docs.cloud.google.com/load-balancing/docs/application-load-balancer"
  - "https://docs.cloud.google.com/load-balancing/docs/https/setting-up-https"
keywords:
  - "global"
  - "external"
  - "application"
  - "load"
  - "balancer"
  - "provides"
  - "advanced"
  - "traffic"
---

# Global external Application Load Balancer

Product: Cloud Load Balancing
Coverage: MEDIUM

## Step 02 Summary

The new global external Application Load Balancer provides advanced traffic management capabilities beyond the classic external HTTP(S) load balancer.

## Extended Definition

The new global external Application Load Balancer provides advanced traffic management capabilities beyond the classic external HTTP(S) load balancer.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https)
- [https://docs.cloud.google.com/load-balancing/docs/application-load-balancer](https://docs.cloud.google.com/load-balancing/docs/application-load-balancer)
- [https://docs.cloud.google.com/load-balancing/docs/https/setting-up-https](https://docs.cloud.google.com/load-balancing/docs/https/setting-up-https)

## Supporting Pages

### "External Application Load Balancer overview \_|\_ Cloud Load Balancing \_\

- URL: [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https)
- Source ID: `site-docs-reference-required-3`
- Final score: 300
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Compatible with GKE using Gateway (fully orchestrated) or Standalone NEGs (manual orchestration) Supports advanced traffic management Global Anycast external IP addresses over Premium Tier Can access backends across multiple regions Supports Cloud CDN Supports Cloud Armor Classic Application Load Balancer This load balancer is global in Premium Tier.
- To learn how to configure advanced traffic management capabilities available with the global external Application Load Balancer, see Traffic management overview for global external Application Load Balancers .
- The following table summarizes the required source IP address ranges for the firewall rules: Load balancer mode Health check source ranges Request source ranges Global external Application Load Balancer 35.191.0.0/16 130.211.0.0/22 For IPv6 traffic to the backends: 2600:2d00:1:b029::/64 The source of GFE traffic depends on the backend type: Instance groups and zonal NEGs ( GCE VM IP PORT ): 130.211.0.0/22 35.191.0.0/16 For IPv6 traffic to the backends: 2600:2d00:1:1::/64 Hybrid connectivity NEGs ( NON GCP PRIVATE IP PORT ): 130.211.0.0/22 35.191.0.0/16 Internet NEGs ( INTERNET FQDN PORT and INTERNET IP PORT ): 34.96.0.0/20 34.127.192.0/18 SERVERLESS NEGs and backend buckets: Google's production network handles packet routing Classic Application Load Balancer 35.191.0.0/16 130.211.0.0/22 The source of GFE traffic depends on the backend type: Instance groups, zonal NEGs ( GCE VM IP PORT ), and hybrid connectivity NEGs ( NON GCP PRIVATE IP PORT ): 35.191.0.0/16 130.211.0.0/22 Internet NEGs ( INTERNET FQDN PORT and INTERNET IP PORT ): 34.96.0.0/20 34.127.192.0/18 SERVERLESS NEGs and backend buckets: Google's production network handles packet routing.
- Load balancer mode Health check type Global external Application Load Balancer Global Classic Application Load Balancer Global Regional external Application Load Balancer Regional For more information about health checks, see the following: Health checks overview Creating health checks Firewall rules The load balancer requires the following firewall rules: For the global external Application Load Balancers, an ingress allow rule to permit traffic from Google Front Ends (GFEs) to reach your backends.

### "Application Load Balancer overview \_|\_ Cloud Load Balancing \_|\_ Google\

- URL: [https://docs.cloud.google.com/load-balancing/docs/application-load-balancer](https://docs.cloud.google.com/load-balancing/docs/application-load-balancer)
- Source ID: `site-docs-reference-required-3`
- Final score: 276
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Global external Application Load Balancers and regional external Application Load Balancers use the open source Envoy proxy software to enable advanced traffic management capabilities.
- Related documentation: Serverless NEGs overview Set up a global external Application Load Balancer with a Cloud Run, Cloud Run functions, or App Engine backend Set up a regional external Application Load Balancer with a Cloud Run backend Set up a regional internal Application Load Balancer with a Cloud Run backend Set up a cross-region internal Application Load Balancer with Cloud Run Load balancing to backends outside Google Cloud Application Load Balancers support load-balancing traffic to endpoints that extend beyond Google Cloud, such as on-premises data centers and other cloud environments.
- For more details, see the following: Traffic management overview for global external Application Load Balancers Traffic management overview for regional external Application Load Balancers Extensibility with Service Extensions The integration with Service Extensions lets you inject custom logic into the load balancing path of supported Application Load Balancers .
- External Application Load Balancers support the following capabilities: Advanced traffic management such as traffic mirroring, weight-based traffic splitting, and request/response-based header transformations.

### "Request routing to a multi-region classic Application Load Balancer \_|\_\

- URL: [https://docs.cloud.google.com/load-balancing/docs/https/setting-up-https](https://docs.cloud.google.com/load-balancing/docs/https/setting-up-https)
- Source ID: `site-docs-root`
- Final score: 266
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For advanced routing, such as HTTP rewrites and redirects, see Traffic management for external Application Load Balancers .
- Note: Because the external Application Load Balancer is a proxy, you don't need to select Allow HTTPS traffic under Firewall . gcloud Create an instance template. gcloud compute instance-templates create video-us-template \ --region=us-central1 \ --network=lb-network \ --subnet=us-subnet \ --tags=allow-health-check,allow-ssh \ --image-family=debian-12 \ --image-project=debian-cloud \ --metadata=startup-script='#! /bin/bash apt-get update apt-get install apache2 -y a2ensite default-ssl a2enmod ssl vm hostname="$(curl -H "Metadata-Flavor:Google" \ http://metadata.google.internal/computeMetadata/v1/instance/name)" mkdir -p /var/www/html/video echo "Page served from: $vm hostname" \ tee /var/www/html/index.html /var/www/html/video/index.html systemctl restart apache2' Create a managed instance group based on the template. gcloud compute instance-groups managed create ig-video-us \ --template=video-us-template --size=2 --zone=us-central1-b Repeat this procedure four times for the four instance groups.
- For an classic Application Load Balancer, use load-balancing-scheme=EXTERNAL . gcloud compute forwarding-rules create https-content-rule \ --load-balancing-scheme= LOAD BALANCING SCHEME \ --network-tier=PREMIUM \ --address=lb-ipv4-1 \ --global \ --target-https-proxy=https-lb-proxy \ --ports=443 gcloud compute forwarding-rules create https-content-ipv6-rule \ --load-balancing-scheme= LOAD BALANCING SCHEME \ --network-tier=PREMIUM \ --address=lb-ipv6-1 \ --global \ --target-https-proxy=https-lb-proxy \ --ports=443 After creating the global forwarding rule, it can take several minutes for your configuration to propagate worldwide.
- For an classic Application Load Balancer, use load-balancing-scheme=EXTERNAL . gcloud compute backend-services create video-backend-service \ --load-balancing-scheme= LOAD BALANCING SCHEME \ --global-health-checks \ --protocol=HTTP \ --port-name=http \ --health-checks=http-basic-check \ --global gcloud compute backend-services create web-backend-service \ --load-balancing-scheme= LOAD BALANCING SCHEME \ --global-health-checks \ --protocol=HTTP \ --port-name=http \ --health-checks=http-basic-check \ --global Add your instance groups as backends to the backend services.

