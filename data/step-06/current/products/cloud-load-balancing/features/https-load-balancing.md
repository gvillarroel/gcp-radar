---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:54:57.803Z"
product_name: "Cloud Load Balancing"
product_slug: "cloud-load-balancing"
feature_name: "HTTPS Load Balancing"
feature_slug: "https-load-balancing"
latest_feature_date: "2015-06-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/load-balancing/docs/https"
  - "https://docs.cloud.google.com/load-balancing/docs/https/setting-up-https"
  - "https://docs.cloud.google.com/load-balancing/docs/tutorials/http-https-over-same-domain"
keywords:
  - "https"
  - "load"
  - "balancing"
  - "distributes"
  - "traffic"
  - "across"
  - "backend"
---

# HTTPS Load Balancing

Product: Cloud Load Balancing
Coverage: MEDIUM

## Step 02 Summary

HTTPS Load Balancing distributes HTTPS traffic across backend services.

## Extended Definition

HTTPS Load Balancing distributes HTTPS traffic across backend services.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https)
- [https://docs.cloud.google.com/load-balancing/docs/https/setting-up-https](https://docs.cloud.google.com/load-balancing/docs/https/setting-up-https)
- [https://docs.cloud.google.com/load-balancing/docs/tutorials/http-https-over-same-domain](https://docs.cloud.google.com/load-balancing/docs/tutorials/http-https-over-same-domain)

## Supporting Pages

### "External Application Load Balancer overview \_|\_ Cloud Load Balancing \_\

- URL: [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https)
- Source ID: `site-docs-reference-required-3`
- Final score: 169
- Re-rank relevance: N/A

Evidence snippets:
- The external Application Load Balancer distributes HTTP and HTTPS traffic to backends hosted on a variety of Google Cloud platforms (such as Compute Engine, Google Kubernetes Engine (GKE), and Cloud Storage), as well as external backends connected over the internet or through hybrid connectivity.
- Compatible with GKE using Gateway (fully orchestrated) or Standalone NEGs (manual orchestration) Supports advanced traffic management Global Anycast external IP addresses over Premium Tier Can access backends across multiple regions Supports Cloud CDN Supports Cloud Armor Classic Application Load Balancer This load balancer is global in Premium Tier.
- In the Premium Network Service Tier , this load balancer offers multi-region load balancing, attempts to direct traffic to the closest healthy backend that has capacity, and terminates HTTP(S) traffic as close as possible to your users.
- Forwarding rules and IP addresses Forwarding rules route traffic by IP address, port, and protocol to a load balancing configuration consisting of a target proxy, URL map, and one or more backend services.

### "Deliver HTTP and HTTPS content over the same published domain \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/load-balancing/docs/tutorials/http-https-over-same-domain](https://docs.cloud.google.com/load-balancing/docs/tutorials/http-https-over-same-domain)
- Source ID: `site-docs-reference-required-3`
- Final score: 147
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- When configuring the external Application Load Balancer, the frontend configuration includes four forwarding rules that use the reserved IP addresses: Name Protocol IP:Port ipv4-http HTTP 34.95.111.204:80 ipv4-https HTTPS 34.95.111.204:443 ipv6-http HTTP [2600:1901:0:b13e::]:80 ipv6-https HTTPS [2600:1901:0:b13e::]:443 For Cloud CDN cache misses, the load balancer distributes requests to the backend origins, based on settings defined in the load balancer's URL map.
- For an classic Application Load Balancer, use load-balancing-scheme=EXTERNAL . gcloud compute forwarding-rules create ipv4-http \ --load-balancing-scheme= LOAD BALANCING SCHEME \ --network-tier=PREMIUM \ --address=ipv4-address \ --global \ --target-http-proxy=http-lb-proxy \ --ports=80 gcloud compute forwarding-rules create ipv4-https \ --load-balancing-scheme= LOAD BALANCING SCHEME \ --network-tier=PREMIUM \ --address=ipv4-address \ --global \ --target-https-proxy=https-lb-proxy \ --ports=443 After creating the global forwarding rules, it can take several minutes for your configuration to propagate worldwide.
- The proxy is the portion of the load balancer that holds the SSL certificate for HTTPS Load Balancing, so you also load your certificate in this step. gcloud compute target-https-proxies create https-lb-proxy \ --url-map=web-map --ssl-certificates=www-ssl-cert Create two global forwarding rules to route incoming requests to the proxy, one for each of the IP address(es) you created.
- Home Documentation Networking Load Balancing Guides Send feedback Deliver HTTP and HTTPS content over the same published domain Stay organized with collections Save and categorize content based on your preferences.

### "Request routing to a multi-region classic Application Load Balancer \_|\_\

- URL: [https://docs.cloud.google.com/load-balancing/docs/https/setting-up-https](https://docs.cloud.google.com/load-balancing/docs/https/setting-up-https)
- Source ID: `site-docs-root`
- Final score: 147
- Re-rank relevance: N/A

Evidence snippets:
- If backends in one region become unhealthy or reach capacity, the HTTPS load balancer automatically sends traffic to the next-closest region .
- Note: Because the external Application Load Balancer is a proxy, you don't need to select Allow HTTPS traffic under Firewall . gcloud Create an instance template. gcloud compute instance-templates create video-us-template \ --region=us-central1 \ --network=lb-network \ --subnet=us-subnet \ --tags=allow-health-check,allow-ssh \ --image-family=debian-12 \ --image-project=debian-cloud \ --metadata=startup-script='#! /bin/bash apt-get update apt-get install apache2 -y a2ensite default-ssl a2enmod ssl vm hostname="$(curl -H "Metadata-Flavor:Google" \ http://metadata.google.internal/computeMetadata/v1/instance/name)" mkdir -p /var/www/html/video echo "Page served from: $vm hostname" \ tee /var/www/html/index.html /var/www/html/video/index.html systemctl restart apache2' Create a managed instance group based on the template. gcloud compute instance-groups managed create ig-video-us \ --template=video-us-template --size=2 --zone=us-central1-b Repeat this procedure four times for the four instance groups.
- Delete the forwarding rules: gcloud compute forwarding-rules delete https-content-rule \ --global gcloud compute forwarding-rules delete https-content-ipv6-rule \ --global Delete the global external IP addresses: gcloud compute addresses delete lb-ipv4-1 \ --global gcloud compute addresses delete lb-ipv6-1 \ --global Delete the target proxy: gcloud compute target-https-proxies delete https-lb-proxy Delete the SSL certificate: gcloud compute ssl-certificates delete www-ssl-cert Delete the URL map: gcloud compute url-maps delete web-map Delete the backend services: gcloud compute backend-services delete web-backend-service \ --global gcloud compute backend-services delete video-backend-service \ --global Delete the health checks: gcloud compute health-checks delete http-basic-check You have deleted all of the load balancer resources.
- For an classic Application Load Balancer, use load-balancing-scheme=EXTERNAL . gcloud compute forwarding-rules create https-content-rule \ --load-balancing-scheme= LOAD BALANCING SCHEME \ --network-tier=PREMIUM \ --address=lb-ipv4-1 \ --global \ --target-https-proxy=https-lb-proxy \ --ports=443 gcloud compute forwarding-rules create https-content-ipv6-rule \ --load-balancing-scheme= LOAD BALANCING SCHEME \ --network-tier=PREMIUM \ --address=lb-ipv6-1 \ --global \ --target-https-proxy=https-lb-proxy \ --ports=443 After creating the global forwarding rule, it can take several minutes for your configuration to propagate worldwide.

