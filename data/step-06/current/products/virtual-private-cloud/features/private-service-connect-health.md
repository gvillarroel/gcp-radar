---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.433Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "Private Service Connect health"
feature_slug: "private-service-connect-health"
latest_feature_date: "2025-10-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/about-private-service-connect-health"
  - "https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-health-failover"
  - "https://docs.cloud.google.com/vpc/docs/about-private-service-connect-port-mapping"
  - "https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer"
keywords:
  - "private"
  - "connect"
  - "health"
  - "is"
  - "introduced"
  - "in"
  - "preview"
  - "to"
---

# Private Service Connect health

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

Private Service Connect health is introduced in preview to let service producers define health states for automatic cross-region failover of consumers using Private Service Connect backends.

## Extended Definition

Private Service Connect health is introduced in preview to let service producers define health states for automatic cross-region failover of consumers using Private Service Connect backends.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/about-private-service-connect-health](https://docs.cloud.google.com/vpc/docs/about-private-service-connect-health)
- [https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-health-failover](https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-health-failover)
- [https://docs.cloud.google.com/vpc/docs/about-private-service-connect-port-mapping](https://docs.cloud.google.com/vpc/docs/about-private-service-connect-port-mapping)
- [https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer](https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer)

## Supporting Pages

### "About Private Service Connect health for automatic cross-region failover\

- URL: [https://docs.cloud.google.com/vpc/docs/about-private-service-connect-health](https://docs.cloud.google.com/vpc/docs/about-private-service-connect-health)
- Source ID: `site-docs-root-2`
- Final score: 336
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- About Private Service Connect health for automatic cross-region failover Preview This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- Deployment requirements To use Private Service Connect health for automatic failover, both the service producer and the service consumer must configure their resources for a multi-region deployment, as described in this section.
- Limitations Private Service Connect health has the following limitations: Composite health states produced by Private Service Connect health are only visible to the consumer load balancer and can't be viewed in logs.
- The backend must be based on a load balancer that supports cross-region failover and includes the following configuration: A Private Service Connect NEG in each region that points to that region's service attachment A global backend service that contains the NEG backends The following diagram shows a multi-region deployment: This example shows a consumer global external Application Load Balancer that connects to a service that is published in multiple regions.

### "Configure Private Service Connect health for automatic cross-region failover\

- URL: [https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-health-failover](https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-health-failover)
- Source ID: `site-docs-root-2`
- Final score: 336
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Configure Private Service Connect health for automatic cross-region failover Preview This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to configure Private Service Connect health: compute.regionHealthAggregationPolicies.list compute.regionHealthAggregationPolicies.get compute.regionHealthAggregationPolicies.create compute.regionHealthAggregationPolicies.update compute.regionHealthAggregationPolicies.delete compute.regionHealthSources.list compute.regionHealthSources.get compute.regionHealthSources.create compute.regionHealthSources.update compute.regionHealthSources.delete compute.regionCompositeHealthChecks.list compute.regionCompositeHealthChecks.get compute.regionCompositeHealthChecks.create compute.regionCompositeHealthChecks.update compute.regionCompositeHealthChecks.delete You might also be able to get these permissions with custom roles or other predefined roles .
- Required roles To get the permissions that you need to configure Private Service Connect health, ask your administrator to grant you the Compute Network Admin ( roles/compute.networkAdmin ) IAM role on your project.
- This predefined role contains the permissions required to configure Private Service Connect health.

### "About Private Service Connect port mapping \_|\_ Virtual Private Cloud \_\

- URL: [https://docs.cloud.google.com/vpc/docs/about-private-service-connect-port-mapping](https://docs.cloud.google.com/vpc/docs/about-private-service-connect-port-mapping)
- Source ID: `site-docs-root-2`
- Final score: 272
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Private Service Connect port mapping forwards traffic from client destination ports of an endpoint to service ports of producer VMs based on mapping that is configured for a port mapping NEG (click to enlarge).
- Private Service Connect port mapping supports propagated connections ( Preview ) for endpoints that connect to port mapping services.
- Specifications Private Service Connect port mapping has the following specifications: A Private Service Connect port mapping connection requires a Private Service Connect endpoint in a consumer VPC network that connects to a service attachment in a producer VPC network.
- Deployment Deploying a Private Service Connect port mapping connection differs from deploying a regular Private Service Connect endpoint connection for published services in the following ways: The service producer creates a port mapping service.

### "Publish services by using Private Service Connect \_|\_ Virtual Private\

- URL: [https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer](https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer)
- Source ID: `site-docs-root-2`
- Final score: 264
- Re-rank relevance: N/A

Evidence snippets:
- When you configure ingress firewall rules for backend services, the source of traffic depends on the type of load balancer that your service uses: Category Source of traffic to backends Passthrough load balancers: Internal passthrough Network Load Balancer Internal protocol forwarding Port mapping service The IP address ranges of the Private Service Connect (NAT) subnets associated with the service Proxy load balancers: Cross-region internal Application Load Balancer Regional internal Application Load Balancer Regional internal proxy Network Load Balancer Secure Web Proxy The IP address ranges of the associated proxy-only subnets Services with health checks The probe IP address ranges of your load balancer type Publish a service To publish a service, you create a service attachment.
- To create an IPv4-only Private Service Connect subnet, do the following: POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION /subnetworks { "ipCidrRange": " SUBNET RANGE ", "name": " SUBNET NAME ", "network": "projects/ PROJECT ID /global/networks/ NETWORK NAME ", "purpose": "PRIVATE SERVICE CONNECT" } To create a dual-stack Private Service Connect subnet, do the following: POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION /subnetworks { "ipCidrRange": " SUBNET RANGE ", "name": " SUBNET NAME ", "network": "projects/ PROJECT ID /global/networks/ NETWORK NAME ", "purpose": "PRIVATE SERVICE CONNECT", "stackType": "IPV4 IPV6", "ipv6AccessType": "INTERNAL" } To create an IPv6-only Private Service Connect subnet, do the following: POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION /subnetworks { "name": " SUBNET NAME ", "network": "projects/ PROJECT ID /global/networks/ NETWORK NAME ", "purpose": "PRIVATE SERVICE CONNECT", "stackType": "IPV6 ONLY", "ipv6AccessType": "INTERNAL" } Replace the following: PROJECT ID : the project for the subnet.
- For each endpoint in the list of connected endpoints, the endpointWithId field contains the endpoint's ID-based URI that you can use to accept or reject connections from individual Private Service Connect endpoints. gcloud compute service-attachments describe \ ATTACHMENT NAME --region= REGION Replace the following: ATTACHMENT NAME : the name of the service attachment.
- Details are displayed for each endpoint, including the Endpoint ID that you can use to accept or reject connections from individual Private Service Connect endpoints. gcloud To view details for a published service, use the gcloud compute service-attachments describe command .

