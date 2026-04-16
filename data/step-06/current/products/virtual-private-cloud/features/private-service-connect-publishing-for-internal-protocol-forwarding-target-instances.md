---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.477Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "Private Service Connect publishing for internal protocol forwarding (target instances)"
feature_slug: "private-service-connect-publishing-for-internal-protocol-forwarding-target-instances"
latest_feature_date: "2022-07-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer"
  - "https://docs.cloud.google.com/vpc/docs/access-apis-managed-services-private-service-connect-backends"
  - "https://docs.cloud.google.com/vpc/docs/private-service-connect"
  - "https://docs.cloud.google.com/vpc/docs/about-migrating-peering-services-private-service-connect"
keywords:
  - "private"
  - "connect"
  - "publishing"
  - "for"
  - "internal"
  - "protocol"
  - "forwarding"
  - "target"
---

# Private Service Connect publishing for internal protocol forwarding (target instances)

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

Private Service Connect supports publishing services that are hosted behind internal protocol forwarding using target instances.

## Extended Definition

Private Service Connect supports publishing services that are hosted behind internal protocol forwarding using target instances.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer](https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer)
- [https://docs.cloud.google.com/vpc/docs/access-apis-managed-services-private-service-connect-backends](https://docs.cloud.google.com/vpc/docs/access-apis-managed-services-private-service-connect-backends)
- [https://docs.cloud.google.com/vpc/docs/private-service-connect](https://docs.cloud.google.com/vpc/docs/private-service-connect)
- [https://docs.cloud.google.com/vpc/docs/about-migrating-peering-services-private-service-connect](https://docs.cloud.google.com/vpc/docs/about-migrating-peering-services-private-service-connect)

## Supporting Pages

### "Publish services by using Private Service Connect \_|\_ Virtual Private\

- URL: [https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer](https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer)
- Source ID: `site-docs-root-2`
- Final score: 288
- Re-rank relevance: N/A

Evidence snippets:
- When you configure ingress firewall rules for backend services, the source of traffic depends on the type of load balancer that your service uses: Category Source of traffic to backends Passthrough load balancers: Internal passthrough Network Load Balancer Internal protocol forwarding Port mapping service The IP address ranges of the Private Service Connect (NAT) subnets associated with the service Proxy load balancers: Cross-region internal Application Load Balancer Regional internal Application Load Balancer Regional internal proxy Network Load Balancer Secure Web Proxy The IP address ranges of the associated proxy-only subnets Services with health checks The probe IP address ranges of your load balancer type Publish a service To publish a service, you create a service attachment.
- Create a target service To host the service, create one of the following target services in a service producer VPC network: Internal passthrough Network Load Balancer Regional internal Application Load Balancer Cross-region internal Application Load Balancer Internal protocol forwarding Regional internal proxy Network Load Balancer Secure Web Proxy instance For information about supported configurations for each target service, see Features and compatibility .
- If you publish a service by using an internal passthrough Network Load Balancer or internal protocol forwarding (target instance), and your service is affected by this issue, do the following.
- To create an IPv4-only Private Service Connect subnet, do the following: POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION /subnetworks { "ipCidrRange": " SUBNET RANGE ", "name": " SUBNET NAME ", "network": "projects/ PROJECT ID /global/networks/ NETWORK NAME ", "purpose": "PRIVATE SERVICE CONNECT" } To create a dual-stack Private Service Connect subnet, do the following: POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION /subnetworks { "ipCidrRange": " SUBNET RANGE ", "name": " SUBNET NAME ", "network": "projects/ PROJECT ID /global/networks/ NETWORK NAME ", "purpose": "PRIVATE SERVICE CONNECT", "stackType": "IPV4 IPV6", "ipv6AccessType": "INTERNAL" } To create an IPv6-only Private Service Connect subnet, do the following: POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION /subnetworks { "name": " SUBNET NAME ", "network": "projects/ PROJECT ID /global/networks/ NETWORK NAME ", "purpose": "PRIVATE SERVICE CONNECT", "stackType": "IPV6 ONLY", "ipv6AccessType": "INTERNAL" } Replace the following: PROJECT ID : the project for the subnet.

### "Create a Private Service Connect backend \_|\_ Virtual Private Cloud \_\

- URL: [https://docs.cloud.google.com/vpc/docs/access-apis-managed-services-private-service-connect-backends](https://docs.cloud.google.com/vpc/docs/access-apis-managed-services-private-service-connect-backends)
- Source ID: `site-docs-root-2`
- Final score: 252
- Re-rank relevance: N/A

Evidence snippets:
- For instructions that include creating a load balancer with a Private Service Connect backend, see the following: Create an internal Application Load Balancer to access Google APIs Create a global external Application Load Balancer to access a published service Roles The Compute Load Balancer Admin role ( roles/compute.loadBalancerAdmin ) contains the permission required to perform the tasks described in this guide.
- Create a Private Service Connect NEG When you create a NEG, you choose which type of target it connects to: A published service A regional Google API A global Google API Create a NEG to connect to a published service When you create a Private Service Connect NEG that points to a published service, you need the service attachment URI for the service.
- If not, double-check that you have completed all of the steps. gcloud Create a backend service for the target service. gcloud compute backend-services create BACKEND SERVICE NAME \ --load-balancing-scheme=INTERNAL MANAGED \ --protocol=TCP \ --region= REGION Replace the following: BACKEND SERVICE NAME : the name of the backend service.
- Click Create . gcloud Use the gcloud compute network-endpoint-groups create command: gcloud compute network-endpoint-groups create NEG NAME \ --network-endpoint-type=private-service-connect \ --psc-target-service= TARGET SERVICE \ --region= REGION Replace the following: NEG NAME : a name for the network endpoint group.

### Private Service Connect \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/private-service-connect](https://docs.cloud.google.com/vpc/docs/private-service-connect)
- Source ID: `site-docs-root`
- Final score: 240
- Re-rank relevance: N/A

Evidence snippets:
- Backends let you create configurations such as the following: Customer-owned domains and certificates in front of managed services Consumer-controlled failover between managed services in different regions Centralized security configuration and access control for managed services The following diagram shows an internal Application Load Balancer deployed with Private Service Connect backends that reference a published service.
- Using Private Service Connect lets you do the following: Create one or more internal IP addresses to access Google APIs for different use cases.
- Endpoints are deployed by using forwarding rules that provide the consumer an IP address that is mapped to the Private Service Connect service.
- To learn more about the internal design of Private Service Connect, see Private Service Connect architecture and performance .

### "About migrating peering-based services to Private Service Connect \_|\_\

- URL: [https://docs.cloud.google.com/vpc/docs/about-migrating-peering-services-private-service-connect](https://docs.cloud.google.com/vpc/docs/about-migrating-peering-services-private-service-connect)
- Source ID: `site-docs-root-2`
- Final score: 238
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Task Producer Consumer Deploy a Private Service Connect service Deploy the service in a new subnet in a new VPC network in the producer project and publish it by using Private Service Connect Performed by producer Shut down the peering-based service Reserve the producer subnet CIDR range by creating an internal range in the producer project Performed by producer Consumer provides the subnet name to use for the migration target Delete all resources in the producer subnet, and then delete the subnet Performed by producer The consumer can no longer access the service Create a Private Service Connect endpoint in the consumer network Create a migration subnet in the consumer network If consumer didn't choose the subnet name, the producer provides the subnet name to consumer Performed by consumer (or by producer through a service agent) Create a Private Service Connect endpoint in the consumer network Producer provides service attachment URI to consumer Performed by consumer (or by producer through a service agent) The consumer can access the service Validate access through the Private Service Connect endpoint Performed by consumer Finalize the migration Delete the internal range Performed by producer Update the consumer's migration subnet to convert it to a regular subnet Performed by consumer (or by producer through a service agent) If it's not needed for other services, delete the peering connection in the producer and consumer networks Performed by producer Performed by consumer (or by producer through a service agent) Considerations If you are a service producer who wants to migrate your peering-based service to Private Service Connect, consider the following: The Private Service Connect implementation of the service must offer the same features as the peering-based service.
- A Private Service Connect endpoint is created in the migration subnet, configured with the same IP address that was previously used by the producer load balancer forwarding rule.
- The consumer's Private Service Connect endpoint and the producer's service attachment and forwarding rule must all be in the same region.
- Create and delete Private Service Connect endpoints (forwarding rules) in peer migration subnets.

