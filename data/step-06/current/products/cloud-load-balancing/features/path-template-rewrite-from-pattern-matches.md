---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:54:57.774Z"
product_name: "Cloud Load Balancing"
product_slug: "cloud-load-balancing"
feature_name: "Path template rewrite from pattern matches"
feature_slug: "path-template-rewrite-from-pattern-matches"
latest_feature_date: "2024-04-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/load-balancing/docs/url-map-concepts"
  - "https://docs.cloud.google.com/load-balancing/docs/auth-policy/set-up-auth-policy-app-lb"
  - "https://docs.cloud.google.com/load-balancing/docs/https/setting-up-https"
keywords:
  - "path"
  - "template"
  - "rewrite"
  - "pattern"
  - "matches"
  - "application"
  - "load"
  - "balancers"
---

# Path template rewrite from pattern matches

Product: Cloud Load Balancing
Coverage: MEDIUM

## Step 02 Summary

Supported Application Load Balancers can rewrite request paths using values captured from flexible pattern matching; Global external HTTP(S) load balancers can rewrite request paths using values captured from flexible pattern matching.

## Extended Definition

Supported Application Load Balancers can rewrite request paths using values captured from flexible pattern matching; Global external HTTP(S) load balancers can rewrite request paths using values captured from flexible pattern matching.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/load-balancing/docs/url-map-concepts](https://docs.cloud.google.com/load-balancing/docs/url-map-concepts)
- [https://docs.cloud.google.com/load-balancing/docs/auth-policy/set-up-auth-policy-app-lb](https://docs.cloud.google.com/load-balancing/docs/auth-policy/set-up-auth-policy-app-lb)
- [https://docs.cloud.google.com/load-balancing/docs/https/setting-up-https](https://docs.cloud.google.com/load-balancing/docs/https/setting-up-https)

## Supporting Pages

### URL maps overview \_|\_ Cloud Load Balancing \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/load-balancing/docs/url-map-concepts](https://docs.cloud.google.com/load-balancing/docs/url-map-concepts)
- Source ID: `site-docs-root`
- Final score: 202
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can configure routeRules with flexible pattern matching operators and named variables to send the user's unique ID to a user account details page and the user's cart information to a cart processing service after rewriting the URL. pathMatchers: - name: cart-matcher routeRules: - description: CartService matchRules: - pathTemplateMatch: '/xyzwebservices/v2/xyz/users/{username= }/carts/{cartid= }' service: cart-backend priority: 1 routeAction: urlRewrite: pathTemplateRewrite: '/{username}-{cartid}/' - name: user-matcher routeRules: - description: UserService matchRules: - pathTemplateMatch: '/xyzwebservices/v2/xyz/users/ /accountinfo/ ' service: user-backend priority: 1 Here's what happens when a client requests /xyzwebservices/v2/xyz/users/abc@xyz.com/carts/FL0001090004/entries/SJFI38u3401nms?fields=FULL&client type=WEB , which has both user information and cart information: The request path matches the pathTemplateMatch within the cart-matcher pathMatcher.
- For regional external Application Load Balancers, internal Application Load Balancers, and Cloud Service Mesh, possible destinations are the following: Default backend service Non-default backend service Additionally, global external Application Load Balancers support the following: Default backend bucket Non-default backend bucket For example, assume that you have the following setup: One IP address: All requests to your organization go to the same IP address and the same load balancer.
- Pattern matching with wildcards is supported only for the following products: Global external Application Load Balancer Regional external Application Load Balancer Regional internal Application Load Balancer Cross-region internal Application Load Balancer Cloud Service Mesh The following example routes traffic for an eCommerce application that has separate services for cart information and user information.
- Global urlMaps are used by global external Application Load Balancers, classic Application Load Balancers, cross-region internal Application Load Balancers, and Cloud Service Mesh. regionUrlMaps are used by regional external Application Load Balancers, regional internal Application Load Balancers, and Cloud Service Mesh.

### "Set up authorization policies for Application Load Balancers \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/load-balancing/docs/auth-policy/set-up-auth-policy-app-lb](https://docs.cloud.google.com/load-balancing/docs/auth-policy/set-up-auth-policy-app-lb)
- Source ID: `site-docs-reference-required-3`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- The following example command imports the previously created policy file and creates an authorization policy in the LOCATION region: gcloud network-security authz-policies import my-authz-policy-allow \ --source=authz-policy-allow.yaml \ --location= LOCATION Authorization policy based on service accounts or tags You can apply authorization policies based on service accounts or tags only on internal Application Load Balancers.
- Create and attach service accounts or tags to Google Cloud VMs For internal Application Load Balancers, you can apply authorization policies based on service accounts or tags attached to different Google Cloud resources .
- Home Documentation Networking Load Balancing Guides Send feedback Set up authorization policies for Application Load Balancers Stay organized with collections Save and categorize content based on your preferences.
- Applying authorization policies based on service accounts or tags is not supported for external Application Load Balancers.

### "Request routing to a multi-region classic Application Load Balancer \_|\_\

- URL: [https://docs.cloud.google.com/load-balancing/docs/https/setting-up-https](https://docs.cloud.google.com/load-balancing/docs/https/setting-up-https)
- Source ID: `site-docs-root`
- Final score: 143
- Re-rank relevance: N/A

Evidence snippets:
- For advanced routing, such as HTTP rewrites and redirects, see Traffic management for external Application Load Balancers .
- Note: Because the external Application Load Balancer is a proxy, you don't need to select Allow HTTPS traffic under Firewall . gcloud Create an instance template. gcloud compute instance-templates create video-us-template \ --region=us-central1 \ --network=lb-network \ --subnet=us-subnet \ --tags=allow-health-check,allow-ssh \ --image-family=debian-12 \ --image-project=debian-cloud \ --metadata=startup-script='#! /bin/bash apt-get update apt-get install apache2 -y a2ensite default-ssl a2enmod ssl vm hostname="$(curl -H "Metadata-Flavor:Google" \ http://metadata.google.internal/computeMetadata/v1/instance/name)" mkdir -p /var/www/html/video echo "Page served from: $vm hostname" \ tee /var/www/html/index.html /var/www/html/video/index.html systemctl restart apache2' Create a managed instance group based on the template. gcloud compute instance-groups managed create ig-video-us \ --template=video-us-template --size=2 --zone=us-central1-b Repeat this procedure four times for the four instance groups.
- PATCH https : // www . googleapis . com / compute / v1 / projects /[ PROJECT ID ]/ global / backendServices / video - backend - service { "sessionAffinity" : "GENERATED COOKIE" } Removing external IP addresses from backend VMs External Application Load Balancers communicate with backends using their internal IP addresses and special load balancer routes .
- For external Application Load Balancers, the cookie is named GCLB .

