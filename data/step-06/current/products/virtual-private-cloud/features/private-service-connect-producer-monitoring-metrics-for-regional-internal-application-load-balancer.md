---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.454Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "Private Service Connect producer monitoring metrics for Regional Internal Application Load Balancer"
feature_slug: "private-service-connect-producer-monitoring-metrics-for-regional-internal-application-load-balancer"
latest_feature_date: "2024-07-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer"
  - "https://docs.cloud.google.com/vpc/docs/quota"
  - "https://docs.cloud.google.com/vpc/docs/access-apis-managed-services-private-service-connect-backends"
  - "https://docs.cloud.google.com/vpc/docs/about-private-service-connect-health"
keywords:
  - "private"
  - "connect"
  - "producer"
  - "monitoring"
  - "metrics"
  - "for"
  - "regional"
  - "internal"
---

# Private Service Connect producer monitoring metrics for Regional Internal Application Load Balancer

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

Regional Internal Application Load Balancer is now supported as a producer load balancer for all Private Service Connect monitoring metrics.

## Extended Definition

Regional Internal Application Load Balancer is now supported as a producer load balancer for all Private Service Connect monitoring metrics.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer](https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer)
- [https://docs.cloud.google.com/vpc/docs/quota](https://docs.cloud.google.com/vpc/docs/quota)
- [https://docs.cloud.google.com/vpc/docs/access-apis-managed-services-private-service-connect-backends](https://docs.cloud.google.com/vpc/docs/access-apis-managed-services-private-service-connect-backends)
- [https://docs.cloud.google.com/vpc/docs/about-private-service-connect-health](https://docs.cloud.google.com/vpc/docs/about-private-service-connect-health)

## Supporting Pages

### "Publish services by using Private Service Connect \_|\_ Virtual Private\

- URL: [https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer](https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer)
- Source ID: `site-docs-root-2`
- Final score: 258
- Re-rank relevance: N/A

Evidence snippets:
- When you configure ingress firewall rules for backend services, the source of traffic depends on the type of load balancer that your service uses: Category Source of traffic to backends Passthrough load balancers: Internal passthrough Network Load Balancer Internal protocol forwarding Port mapping service The IP address ranges of the Private Service Connect (NAT) subnets associated with the service Proxy load balancers: Cross-region internal Application Load Balancer Regional internal Application Load Balancer Regional internal proxy Network Load Balancer Secure Web Proxy The IP address ranges of the associated proxy-only subnets Services with health checks The probe IP address ranges of your load balancer type Publish a service To publish a service, you create a service attachment.
- To create an IPv4-only Private Service Connect subnet, do the following: POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION /subnetworks { "ipCidrRange": " SUBNET RANGE ", "name": " SUBNET NAME ", "network": "projects/ PROJECT ID /global/networks/ NETWORK NAME ", "purpose": "PRIVATE SERVICE CONNECT" } To create a dual-stack Private Service Connect subnet, do the following: POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION /subnetworks { "ipCidrRange": " SUBNET RANGE ", "name": " SUBNET NAME ", "network": "projects/ PROJECT ID /global/networks/ NETWORK NAME ", "purpose": "PRIVATE SERVICE CONNECT", "stackType": "IPV4 IPV6", "ipv6AccessType": "INTERNAL" } To create an IPv6-only Private Service Connect subnet, do the following: POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION /subnetworks { "name": " SUBNET NAME ", "network": "projects/ PROJECT ID /global/networks/ NETWORK NAME ", "purpose": "PRIVATE SERVICE CONNECT", "stackType": "IPV6 ONLY", "ipv6AccessType": "INTERNAL" } Replace the following: PROJECT ID : the project for the subnet.
- Create a target service To host the service, create one of the following target services in a service producer VPC network: Internal passthrough Network Load Balancer Regional internal Application Load Balancer Cross-region internal Application Load Balancer Internal protocol forwarding Regional internal proxy Network Load Balancer Secure Web Proxy instance For information about supported configurations for each target service, see Features and compatibility .
- Dropped packets to consumers The private service connect/producer/dropped sent packets count metric tracks packets sent from a published service to an endpoint or backend that are dropped because Private Service Connect can't find a matching connection for response packets.

### Quotas and limits \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/quota](https://docs.cloud.google.com/vpc/docs/quota)
- Source ID: `site-docs-root`
- Final score: 242
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Limit name: VARIABLE-IPV6-PUBLIC-DELEGATED-PREFIXES-per-project-region Metric: compute.googleapis.com/regional variable prefix length public delegated prefixes Private Service Connect PSC internal LB forwarding rules The maximum number of Private Service Connect endpoints (forwarding rules) that a service consumer can create to connect to producer services.
- Quota name: PSC PROPAGATED CONNECTIONS PER VPC NETWORK Available metrics: compute.googleapis.com/quota/psc propagated connections per vpc network/limit compute.googleapis.com/quota/psc propagated connections per vpc network/usage compute.googleapis.com/quota/psc propagated connections per vpc network/exceeded PSC ILB consumer forwarding rules per producer VPC network The maximum number of Private Service Connect endpoints and propagated connections that can access a service producer VPC network.
- Quota name: PSC-INTERNAL-LB-FORWARDING-RULES-per-project-region Number of Regional Endpoints per project per region The maximum number of Private Service Connect endpoints that a service consumer can create to connect to regional endpoints.
- Quota name: PSC GOOGLE APIS FORWARDING RULES PER NETWORK Available metrics: compute.googleapis.com/quota/psc google apis forwarding rules per vpc network/limit compute.googleapis.com/quota/psc google apis forwarding rules per vpc network/usage compute.googleapis.com/quota/psc google apis forwarding rules per vpc network/exceeded PSC propagated connections per VPC network The maximum number of Private Service Connect propagated connections that can exist in a consumer's VPC network .

### "Create a Private Service Connect backend \_|\_ Virtual Private Cloud \_\

- URL: [https://docs.cloud.google.com/vpc/docs/access-apis-managed-services-private-service-connect-backends](https://docs.cloud.google.com/vpc/docs/access-apis-managed-services-private-service-connect-backends)
- Source ID: `site-docs-root-2`
- Final score: 240
- Re-rank relevance: N/A

Evidence snippets:
- For instructions that include creating a load balancer with a Private Service Connect backend, see the following: Create an internal Application Load Balancer to access Google APIs Create a global external Application Load Balancer to access a published service Roles The Compute Load Balancer Admin role ( roles/compute.loadBalancerAdmin ) contains the permission required to perform the tasks described in this guide.
- Create a Private Service Connect NEG When you create a NEG, you choose which type of target it connects to: A published service A regional Google API A global Google API Create a NEG to connect to a published service When you create a Private Service Connect NEG that points to a published service, you need the service attachment URI for the service.
- Add a backend to a regional internal proxy Network Load Balancer You can add a Private Service Connect NEG backend to a regional internal proxy Network Load Balancer if the NEG is pointing to a published service.
- For complete instructions about creating a cross-region internal Application Load Balancer and a Private Service Connect NEG to access global Google APIs, see Access global Google APIs .

### "About Private Service Connect health for automatic cross-region failover\

- URL: [https://docs.cloud.google.com/vpc/docs/about-private-service-connect-health](https://docs.cloud.google.com/vpc/docs/about-private-service-connect-health)
- Source ID: `site-docs-root-2`
- Final score: 238
- Re-rank relevance: N/A

Evidence snippets:
- Deployment requirements To use Private Service Connect health for automatic failover, both the service producer and the service consumer must configure their resources for a multi-region deployment, as described in this section.
- Accessing a multi-region service with a supported global or cross-regional load balancer lets the service consumer take advantage of Private Service Connect health for automatic cross-region failover (click to enlarge).
- Private Service Connect health lets service producers define health states that support automatic cross-region failover for service consumers that use Private Service Connect backends.
- All Private Service Connect health resources are regional and must be in the same region as the service that you are monitoring.

