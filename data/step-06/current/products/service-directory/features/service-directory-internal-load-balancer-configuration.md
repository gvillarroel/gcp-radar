---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:47.455Z"
product_name: "Service Directory"
product_slug: "service-directory"
feature_name: "Service Directory internal load balancer configuration"
feature_slug: "service-directory-internal-load-balancer-configuration"
latest_feature_date: "2021-01-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/service-directory/docs/configuring-ilb-in-sd"
  - "https://docs.cloud.google.com/service-directory/docs/configuring-private-network-access"
  - "https://docs.cloud.google.com/service-directory/docs/sd-lb-overview"
  - "https://docs.cloud.google.com/service-directory/docs/configuring-netlb-in-sd"
keywords:
  - "directory"
  - "internal"
  - "load"
  - "balancer"
  - "configuration"
  - "now"
  - "supports"
  - "configuring"
---

# Service Directory internal load balancer configuration

Product: Service Directory
Coverage: MEDIUM

## Step 02 Summary

Service Directory now supports configuring an internal load balancer.

## Extended Definition

Service Directory now supports configuring an internal load balancer.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/service-directory/docs/configuring-ilb-in-sd](https://docs.cloud.google.com/service-directory/docs/configuring-ilb-in-sd)
- [https://docs.cloud.google.com/service-directory/docs/configuring-private-network-access](https://docs.cloud.google.com/service-directory/docs/configuring-private-network-access)
- [https://docs.cloud.google.com/service-directory/docs/sd-lb-overview](https://docs.cloud.google.com/service-directory/docs/sd-lb-overview)
- [https://docs.cloud.google.com/service-directory/docs/configuring-netlb-in-sd](https://docs.cloud.google.com/service-directory/docs/configuring-netlb-in-sd)

## Supporting Pages

### "Register an internal load balancer \_|\_ Service Directory \_|\_ Google\

- URL: [https://docs.cloud.google.com/service-directory/docs/configuring-ilb-in-sd](https://docs.cloud.google.com/service-directory/docs/configuring-ilb-in-sd)
- Source ID: `site-iam-reference`
- Final score: 233
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Register an internal passthrough Network Load Balancer To register an internal passthrough Network Load Balancer, run the gcloud compute forwarding-rules create command and set the service-directory-registration flag: gcloud compute forwarding-rules create FORWARDING RULE NAME \ --region= REGION \ --load-balancing-scheme=INTERNAL \ --network= NETWORK NAME \ --subnet= SUBNET NAME \ --address= RESERVED IP ADDRESS \ --ip-protocol= PROTOCOL TYPE \ --ports= PORT NUMBER \ --backend-service= BACKEND SERVICE NAME \ --backend-service-region= REGION \ --service-directory-registration= SD SERVICE NAME Replace the following: FORWARDING RULE NAME : a name for the forwarding rule that you want to create REGION : the region to create the forwarding rule in NETWORK NAME : the network that this forwarding rule applies to SUBNET NAME : the subnetwork that this forwarding rule applies to RESERVED IP ADDRESS : the IP address that the forwarding rule serves PROTOCOL TYPE : the IP protocol that the rule will serve PORT NUMBER : a list of comma-separated ports BACKEND SERVICE NAME : target backend service that receives the traffic SD SERVICE NAME : the fully qualified name of the Service Directory service where you want to register the endpoint.
- To register a regional internal Application Load Balancer, run the gcloud compute forwarding-rules create command and set the service-directory-registration flag: gcloud beta compute forwarding-rules create FORWARDING RULE NAME \ --region= REGION \ --load-balancing-scheme=INTERNAL MANAGED \ --network= NETWORK NAME \ --address= RESERVED IP ADDRESS \ --target-https-proxy= PROXY NAME \ --target-https-proxy-region= PROXY REGION \ --ports= PORT NUMBER \ --service-directory-registration= SD SERVICE NAME Replace the following: FORWARDING RULE NAME : a name for the forwarding rule that you want to create REGION : the region to create the forwarding rule in NETWORK NAME : the network that this forwarding rule applies to RESERVED IP ADDRESS : the IP address that the forwarding rule serves PROXY NAME : the target proxy that receives the traffic PROXY REGION : the region of the proxy to operate on PORT NUMBER : a list of comma-separated ports SD SERVICE NAME : the fully qualified name of the Service Directory service where you want to register the endpoint.
- Permissions servicedirectory.endpoints.create servicedirectory.endpoints.delete Roles roles/compute.networkAdmin roles/compute.securityAdmin roles/compute.instanceAdmin Limitations Service Directory integration with internal load balancing has the following limitations: Automatic registration only applies to internal and network load balancers.
- Verify the endpoint One or more Service Directory endpoints that are created when you register an internal load balancer have the following characteristics: The endpoint has the same name as the name of the forwarding rule with the specified port number ( <forwarding rule name>-<port> ).

### "Configure private network access \_|\_ Service Directory \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/service-directory/docs/configuring-private-network-access](https://docs.cloud.google.com/service-directory/docs/configuring-private-network-access)
- Source ID: `site-docs-root`
- Final score: 206
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Configure the Service Directory project To configure the Service Directory project, follow these steps: In the VPC network, create a VM or an internal load balancer .
- If the target is an internal Application Load Balancer or an internal proxy Network Load Balancer, firewall rules must permit TCP traffic from the 35.199.192.0/19 range to the IP address and ports used by the load balancer.
- To set up private network access, you configure three projects: A project that contains a Virtual Private Cloud (VPC) network to be used by the target virtual machine instance (VM) or target internal load balancer.
- If the target is a VM or an internal passthrough Network Load Balancer, firewall rules must permit TCP traffic from the 35.199.192.0/19 range to the ports used by the software running on the target VM instances.

### Service Directory and load balancers \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/service-directory/docs/sd-lb-overview](https://docs.cloud.google.com/service-directory/docs/sd-lb-overview)
- Source ID: `site-docs-root`
- Final score: 189
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Registering your load balancer with Service Directory lets you do the following: Choose custom DNS names to serve the network locations of your internal load balancers as opposed to DNS accessing your internal load balancer only through an internally generated DNS name in the .internal domain.
- For instructions about how to register an internal load balancer in Service Directory, see Configure an internal load balancer in Service Directory .
- Home Documentation Distributed, hybrid, and multicloud Service Directory Guides Send feedback Service Directory and load balancers Stay organized with collections Save and categorize content based on your preferences.
- For instructions about how to register a network load balancer in Service Directory, see Configure an external passthrough Network Load Balancer in Service Directory .

### "Register an external passthrough Network Load Balancer \_|\_ Service Directory\

- URL: [https://docs.cloud.google.com/service-directory/docs/configuring-netlb-in-sd](https://docs.cloud.google.com/service-directory/docs/configuring-netlb-in-sd)
- Source ID: `site-iam-reference`
- Final score: 186
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Permissions servicedirectory.endpoints.create servicedirectory.endpoints.delete Roles roles/compute.networkAdmin roles/compute.securityAdmin roles/compute.instanceAdmin Limitations Service Directory integration with external passthrough Network Load Balancers has the following limitations: Automatic registration only supports external Layer 4 load balancers.
- Register an external passthrough Network Load Balancer To register a regional external passthrough Network Load Balancer, run the gcloud compute forwarding-rules create command and set the service-directory-registration flag: gcloud beta compute forwarding-rules create FORWARDING RULE NAME \ --region= REGION \ --load-balancing-scheme=EXTERNAL \ --address= RESERVED IP ADDRESS \ --ip-protocol= PROTOCOL TYPE \ --ports= PORT NUMBER \ --backend-service= BACKEND SERVICE NAME \ --backend-service-region= REGION \ --service-directory-registration= SD SERVICE NAME Replace the following: FORWARDING RULE NAME : a name for the forwarding rule that you want to create REGION : the region to create the forwarding rule in RESERVED IP ADDRESS : the IP address that the forwarding rule serves PROTOCOL TYPE : the IP protocol that the rule is to serve PORT NUMBER : a list of comma-separated ports BACKEND SERVICE NAME : the target backend service that receives the traffic SD SERVICE NAME : the fully qualified name of the Service Directory service where you want to register the endpoint.
- Service Directory does not provide connectivity, which means that although Service Directory stores the virtual IP address of the external passthrough Network Load Balancer, looking up the external passthrough Network Load Balancer in Service Directory does not guarantee that you can connect to the virtual IP address.
- Verify the endpoint The Service Directory endpoints that are created when you register an external passthrough Network Load Balancer have the following characteristics: The endpoint has the same name as the name of the forwarding rule with the specified port number ( <forwarding rule name>-<port> ).

