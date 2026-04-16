---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:54:57.773Z"
product_name: "Cloud Load Balancing"
product_slug: "cloud-load-balancing"
feature_name: "Google-managed certificates for cross-region internal Application Load Balancer"
feature_slug: "google-managed-certificates-for-cross-region-internal-application-load-balancer"
latest_feature_date: "2024-04-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/load-balancing/docs/l7-internal"
  - "https://docs.cloud.google.com/load-balancing/docs/https/setting-up-https"
  - "https://docs.cloud.google.com/load-balancing/docs/application-load-balancer"
keywords:
  - "managed"
  - "certificates"
  - "cross"
  - "region"
  - "internal"
  - "application"
  - "load"
  - "balancer"
---

# Google-managed certificates for cross-region internal Application Load Balancer

Product: Cloud Load Balancing
Coverage: MEDIUM

## Step 02 Summary

Cross-region internal Application Load Balancers support Google-managed certificates through Certificate Manager and Certificate Authority Service.

## Extended Definition

Cross-region internal Application Load Balancers support Google-managed certificates through Certificate Manager and Certificate Authority Service.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/load-balancing/docs/l7-internal](https://docs.cloud.google.com/load-balancing/docs/l7-internal)
- [https://docs.cloud.google.com/load-balancing/docs/https/setting-up-https](https://docs.cloud.google.com/load-balancing/docs/https/setting-up-https)
- [https://docs.cloud.google.com/load-balancing/docs/application-load-balancer](https://docs.cloud.google.com/load-balancing/docs/application-load-balancer)

## Supporting Pages

### "Internal Application Load Balancer overview \_|\_ Cloud Load Balancing \_\

- URL: [https://docs.cloud.google.com/load-balancing/docs/l7-internal](https://docs.cloud.google.com/load-balancing/docs/l7-internal)
- Source ID: `site-docs-root`
- Final score: 264
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following table specifies the type of SSL certificates required by internal Application Load Balancers in each mode: Load balancer mode SSL certificate type Cross-region internal Application Load Balancer Certificate Manager self-managed certificates and Google-managed certificates.
- The following table shows the target proxy APIs required by internal Application Load Balancers: Load balancer mode Target proxy Cross-region internal Application Load Balancer targetHttpProxies targetHttpsProxies Regional internal Application Load Balancer regionTargetHttpProxies regionTargetHttpsProxies SSL certificates Internal Application Load Balancers using target HTTPS proxies require private keys and SSL certificates as part of the load balancer configuration.
- Cross-region internal Application Load Balancer Forwarding rule globalForwardingRules.insert method Regional IP address addresses.insert method Load balancing scheme INTERNAL MANAGED IP address (optional) SHARED LOADBALANCER VIP Routing from the client to the load balancer's frontend Global access is enabled by default to allow clients from any region in a VPC to access your load balancer.
- Load balancer mode Load balancing scheme Forwarding rule Cross-region internal Application Load Balancer INTERNAL MANAGED Global Regional internal Application Load Balancer INTERNAL MANAGED Regional Important: After you create a load balancer, you can't edit its mode.

### "Request routing to a multi-region classic Application Load Balancer \_|\_\

- URL: [https://docs.cloud.google.com/load-balancing/docs/https/setting-up-https](https://docs.cloud.google.com/load-balancing/docs/https/setting-up-https)
- Source ID: `site-docs-root`
- Final score: 232
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note: Because the external Application Load Balancer is a proxy, you don't need to select Allow HTTPS traffic under Firewall . gcloud Create an instance template. gcloud compute instance-templates create video-us-template \ --region=us-central1 \ --network=lb-network \ --subnet=us-subnet \ --tags=allow-health-check,allow-ssh \ --image-family=debian-12 \ --image-project=debian-cloud \ --metadata=startup-script='#! /bin/bash apt-get update apt-get install apache2 -y a2ensite default-ssl a2enmod ssl vm hostname="$(curl -H "Metadata-Flavor:Google" \ http://metadata.google.internal/computeMetadata/v1/instance/name)" mkdir -p /var/www/html/video echo "Page served from: $vm hostname" \ tee /var/www/html/index.html /var/www/html/video/index.html systemctl restart apache2' Create a managed instance group based on the template. gcloud compute instance-groups managed create ig-video-us \ --template=video-us-template --size=2 --zone=us-central1-b Repeat this procedure four times for the four instance groups.
- PATCH https : // www . googleapis . com / compute / v1 / projects /[ PROJECT ID ]/ global / backendServices / video - backend - service { "sessionAffinity" : "GENERATED COOKIE" } Removing external IP addresses from backend VMs External Application Load Balancers communicate with backends using their internal IP addresses and special load balancer routes .
- Home Documentation Networking Load Balancing Guides Send feedback Request routing to a multi-region classic Application Load Balancer Stay organized with collections Save and categorize content based on your preferences.
- Overview This guide provides instructions for creating a load balancer that directs traffic based on the path in the request URL and balances traffic across multiple regions.

### "Application Load Balancer overview \_|\_ Cloud Load Balancing \_|\_ Google\

- URL: [https://docs.cloud.google.com/load-balancing/docs/application-load-balancer](https://docs.cloud.google.com/load-balancing/docs/application-load-balancer)
- Source ID: `site-docs-reference-required-3`
- Final score: 231
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Related documentation: Serverless NEGs overview Set up a global external Application Load Balancer with a Cloud Run, Cloud Run functions, or App Engine backend Set up a regional external Application Load Balancer with a Cloud Run backend Set up a regional internal Application Load Balancer with a Cloud Run backend Set up a cross-region internal Application Load Balancer with Cloud Run Load balancing to backends outside Google Cloud Application Load Balancers support load-balancing traffic to endpoints that extend beyond Google Cloud, such as on-premises data centers and other cloud environments.
- To learn more about how failover works, see the following topics: Global external Application Load Balancers: How requests are distributed Cross-region internal Application Load Balancers: High availability and cross-region failover Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- High availability and cross-region failover Cross-region failover is only available with global external Application Load Balancers, classic Application Load Balancers, and cross-region internal Application Load Balancers.
- You can use rules in Cloud NGFW firewall policies to control access to the Envoy proxies used by regional internal Application Load Balancers and cross-region internal Application Load Balancers.

