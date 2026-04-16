---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.436Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "Cross-region internal Application Load Balancer support for Private Service Connect"
feature_slug: "cross-region-internal-application-load-balancer-support-for-private-service-connect"
latest_feature_date: "2025-09-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-health-failover"
  - "https://docs.cloud.google.com/vpc/docs/about-private-service-connect-health"
  - "https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer"
  - "https://docs.cloud.google.com/vpc/docs/access-apis-managed-services-private-service-connect-backends"
keywords:
  - "cross"
  - "region"
  - "internal"
  - "application"
  - "load"
  - "balancer"
  - "for"
  - "private"
---

# Cross-region internal Application Load Balancer support for Private Service Connect

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

Service producers can publish services from cross-region internal Application Load Balancers via Private Service Connect in Google Cloud.

## Extended Definition

Service producers can publish services from cross-region internal Application Load Balancers via Private Service Connect in Google Cloud.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-health-failover](https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-health-failover)
- [https://docs.cloud.google.com/vpc/docs/about-private-service-connect-health](https://docs.cloud.google.com/vpc/docs/about-private-service-connect-health)
- [https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer](https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer)
- [https://docs.cloud.google.com/vpc/docs/access-apis-managed-services-private-service-connect-backends](https://docs.cloud.google.com/vpc/docs/access-apis-managed-services-private-service-connect-backends)

## Supporting Pages

### "Configure Private Service Connect health for automatic cross-region failover\

- URL: [https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-health-failover](https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-health-failover)
- Source ID: `site-docs-root-2`
- Final score: 286
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- HEALTH DESTINATION : the URI of the forwarding rule that receives the composite health state from this composite health check—for example, projects/ PROJECT ID /regions/ REGION /forwardingRules/ FORWARDING RULE The forwarding rule must be associated with a producer load balancer that supports Private Service Connect health and fulfills the following requirements: It must have a load balancing scheme of INTERNAL or INTERNAL MANAGED .
- It must use one of the following internal load balancers: Internal passthrough Network Load Balancer Regional internal Application Load Balancer Regional internal proxy Network Load Balancer It must use one of the following backend types: A zonal network endpoint group (NEG) with network endpoint type GCE VM IP or GCE VM IP PORT An instance group The steps to create your target services depend on the load balancer and backend types that you choose.
- Understand that to use Private Service Connect health, consumers must access your service with a load balancer that supports cross-region failover .
- Configure Private Service Connect health for automatic cross-region failover Preview This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .

### "About Private Service Connect health for automatic cross-region failover\

- URL: [https://docs.cloud.google.com/vpc/docs/about-private-service-connect-health](https://docs.cloud.google.com/vpc/docs/about-private-service-connect-health)
- Source ID: `site-docs-root-2`
- Final score: 274
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The backend must be based on a load balancer that supports cross-region failover and includes the following configuration: A Private Service Connect NEG in each region that points to that region's service attachment A global backend service that contains the NEG backends The following diagram shows a multi-region deployment: This example shows a consumer global external Application Load Balancer that connects to a service that is published in multiple regions.
- Accessing a multi-region service with a supported global or cross-regional load balancer lets the service consumer take advantage of Private Service Connect health for automatic cross-region failover (click to enlarge).
- About Private Service Connect health for automatic cross-region failover Preview This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- Private Service Connect health lets service producers define health states that support automatic cross-region failover for service consumers that use Private Service Connect backends.

### "Publish services by using Private Service Connect \_|\_ Virtual Private\

- URL: [https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer](https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer)
- Source ID: `site-docs-root-2`
- Final score: 264
- Re-rank relevance: N/A

Evidence snippets:
- When you configure ingress firewall rules for backend services, the source of traffic depends on the type of load balancer that your service uses: Category Source of traffic to backends Passthrough load balancers: Internal passthrough Network Load Balancer Internal protocol forwarding Port mapping service The IP address ranges of the Private Service Connect (NAT) subnets associated with the service Proxy load balancers: Cross-region internal Application Load Balancer Regional internal Application Load Balancer Regional internal proxy Network Load Balancer Secure Web Proxy The IP address ranges of the associated proxy-only subnets Services with health checks The probe IP address ranges of your load balancer type Publish a service To publish a service, you create a service attachment.
- Create a target service To host the service, create one of the following target services in a service producer VPC network: Internal passthrough Network Load Balancer Regional internal Application Load Balancer Cross-region internal Application Load Balancer Internal protocol forwarding Regional internal proxy Network Load Balancer Secure Web Proxy instance For information about supported configurations for each target service, see Features and compatibility .
- For Cross-region internal Application Load Balancers, use the following format: projects/ PROJECT ID /global/forwardingRules/ RULE NAME For all other producer forwarding rules, use the following format: projects/ PROJECT ID /regions/ RULE REGION /forwardingRules/ RULE NAME Service Project Admins can specify the forwarding rule of an internal load balancer that has an IP address from a Shared VPC network .
- For Cross-region internal Application Load Balancers, use the following format: projects/ PROJECT ID /global/forwardingRules/ RULE NAME For all other producer forwarding rules, use the following format: projects/ PROJECT ID /regions/ RULE REGION /forwardingRules/ RULE NAME Service Project Admins can specify the forwarding rule of an internal load balancer that has an IP address from a Shared VPC network .

### "Create a Private Service Connect backend \_|\_ Virtual Private Cloud \_\

- URL: [https://docs.cloud.google.com/vpc/docs/access-apis-managed-services-private-service-connect-backends](https://docs.cloud.google.com/vpc/docs/access-apis-managed-services-private-service-connect-backends)
- Source ID: `site-docs-root-2`
- Final score: 248
- Re-rank relevance: N/A

Evidence snippets:
- For complete instructions about creating a cross-region internal Application Load Balancer and a Private Service Connect NEG to access global Google APIs, see Access global Google APIs .
- For instructions that include creating a load balancer with a Private Service Connect backend, see the following: Create an internal Application Load Balancer to access Google APIs Create a global external Application Load Balancer to access a published service Roles The Compute Load Balancer Admin role ( roles/compute.loadBalancerAdmin ) contains the permission required to perform the tasks described in this guide.
- If you are configuring a global external Application Load Balancer to connect to a published service in multiple regions, and you have created more than one Private Service Connect NEG, click Add backend to select another NEG.
- Add a backend to a regional internal proxy Network Load Balancer You can add a Private Service Connect NEG backend to a regional internal proxy Network Load Balancer if the NEG is pointing to a published service.

