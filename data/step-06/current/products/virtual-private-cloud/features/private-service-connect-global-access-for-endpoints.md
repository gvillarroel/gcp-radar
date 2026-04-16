---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.470Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "Private Service Connect global access for endpoints"
feature_slug: "private-service-connect-global-access-for-endpoints"
latest_feature_date: "2023-04-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/about-accessing-vpc-hosted-services-endpoints"
  - "https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-services"
  - "https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer"
  - "https://docs.cloud.google.com/vpc/docs/access-apis-managed-services-private-service-connect-backends"
keywords:
  - "private"
  - "connect"
  - "global"
  - "access"
  - "for"
  - "endpoints"
  - "published"
  - "services"
---

# Private Service Connect global access for endpoints

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

Private Service Connect endpoints for published services gained the ability to be configured with global access so clients in any region can reach them.

## Extended Definition

Private Service Connect endpoints for published services gained the ability to be configured with global access so clients in any region can reach them.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/about-accessing-vpc-hosted-services-endpoints](https://docs.cloud.google.com/vpc/docs/about-accessing-vpc-hosted-services-endpoints)
- [https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-services](https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-services)
- [https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer](https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer)
- [https://docs.cloud.google.com/vpc/docs/access-apis-managed-services-private-service-connect-backends](https://docs.cloud.google.com/vpc/docs/access-apis-managed-services-private-service-connect-backends)

## Supporting Pages

### "About accessing published services through endpoints \_|\_ Virtual Private\

- URL: [https://docs.cloud.google.com/vpc/docs/about-accessing-vpc-hosted-services-endpoints](https://docs.cloud.google.com/vpc/docs/about-accessing-vpc-hosted-services-endpoints)
- Source ID: `site-docs-root-2`
- Final score: 335
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Target producer Consumer configuration (endpoint) Consumer global access Hybrid access Automatic DNS configuration (IPv4-only) VPC Network Peering access NCC connection propagation (IPv4 only) Supported target services for IPv4 endpoints Supported target services for IPv6 endpoints Cross-region internal Application Load Balancer IPv4 services IPv4 services Internal passthrough Network Load Balancer Only if global access is enabled on the load balancer ( known issue ) IPv4 services IPv4 services IPv6 services Internal protocol forwarding (target instance) Only if global access is enabled on the producer forwarding rule ( known issue ) IPv4 services IPv4 services IPv6 services Port mapping services Only if global access is enabled on the producer forwarding rule IPv4 services IPv4 services IPv6 services Regional internal Application Load Balancer Only if global access is enabled on the load balancer before the service attachment is created IPv4 services IPv4 services Regional internal proxy Network Load Balancer Only if global access is enabled on the load balancer before the service attachment is created IPv4 services IPv4 services Secure Web Proxy IPv4 services IPv4 services Producer configuration This table summarizes the supported configuration options and capabilities of published services that are accessed by endpoints .
- IP version translation For Private Service Connect endpoints that connect to published services (service attachments), the IP version of the consumer forwarding rule's IP address determines the IP version of the endpoint and traffic that egresses the endpoint.
- About accessing published services through endpoints This document provides an overview of connecting to services in another VPC network by using Private Service Connect endpoints.
- Global access Private Service Connect endpoints that are used to access services are regional resources.

### "Access published services through endpoints \_|\_ Virtual Private Cloud\

- URL: [https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-services](https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-services)
- Source ID: `site-docs-root-2`
- Final score: 335
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to access published services through endpoints: To create, view, and delete endpoints in your project: compute.networks.use on your project compute.subnetworks.use on your project compute.addresses.createInternal on your project compute.addresses.deleteInternal on your project compute.addresses.get on your project compute.addresses.list on your project compute.addresses.use on your project compute.forwardingRules.create on your project compute.forwardingRules.delete on your project compute.forwardingRules.get on your project compute.forwardingRules.list on your project compute.forwardingRules.pscCreate on your project compute.forwardingRules.pscDelete on your project compute.regionOperations.get on your project servicedirectory.namespaces.create on your project servicedirectory.namespaces.delete on your project servicedirectory.services.create on your project servicedirectory.services.delete on your project To create, view, and delete endpoints in a service project that is attached to a Shared VPC network: compute.addresses.createInternal on the service project compute.addresses.deleteInternal on the service project compute.addresses.get on the service project compute.addresses.list on the service project compute.addresses.use on the service project compute.forwardingRules.create on the service project compute.forwardingRules.delete on the service project compute.forwardingRules.get on the service project compute.forwardingRules.list on the service project compute.forwardingRules.pscCreate on the service project compute.forwardingRules.pscDelete on the service project compute.regionOperations.get on the service project servicedirectory.namespaces.create on the service project servicedirectory.namespaces.delete on the service project servicedirectory.services.create on the service project servicedirectory.services.delete on the service project compute.networks.use on the host project compute.subnetworks.use on the host project To automatically or manually configure DNS entries for an endpoint in your project: dns.managedZones.create on your project dns.managedZones.delete on your project dns.networks.bindPrivateDNSZone on your project servicedirectory.namespaces.associatePrivateZone on your project To automatically or manually configure DNS entries for an endpoint in a Shared VPC network: dns.managedZones.create on the service project dns.managedZones.delete on the service project dns.networks.bindPrivateDNSZone on the service project servicedirectory.namespaces.associatePrivateZone on the service project To access the Private Service Connect page in the Google Cloud console: compute.forwardingRules.list on your project compute.globalForwardingRules.list on your project compute.networkEndpointGroups.list on your project compute.regionNetworkEndpointGroups.list on your project compute.urlMaps.list on your project compute.backendService.list on your project compute.regionBackendService.list on your project compute.backendBucket.list on your project compute.targetHttpProxy.list on your project compute.targetHttpsProxy.list on your project compute.regionTargetTcpProxy.list on your project compute.targetTcpProxy.list on your project compute.targetSslProxy.list on your project compute.sslCertificate.list on your project compute.sslPolicy.list on your project compute.regionHealthCheck.list on your project compute.healthCheck.list on your project compute.httpHealthCheck.list on your project compute.httpsHealthCheck.list on your project You might also be able to get these permissions with custom roles or other predefined roles .
- Endpoint creation fails when global access is configured Not all Private Service Connect published services support endpoints with global access.
- If you create an endpoint with global access and the published service doesn't support it, you see this error message: Private Service Connect global access is not supported for the given forwarding rule, since its producer service does not support consumer global access.
- Known issues Unhealthy backends receive traffic with global access endpoints It's possible to connect a global access endpoint to a published service that's not configured for global access.

### "Publish services by using Private Service Connect \_|\_ Virtual Private\

- URL: [https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer](https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer)
- Source ID: `site-docs-root-2`
- Final score: 309
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Private Service Connect provides two methods to connect to published services: Endpoints (based on a forwarding rule) Backends (based on a load balancer) These endpoint types require slightly different producer configurations.
- Known issues Health check failures with global access consumer endpoints Consumers can connect a global access endpoint to a published service that's not configured for global access.
- Update any automation so that new producer load balancers that support global access Private Service Connect endpoints are configured for global access.
- To create an IPv4-only Private Service Connect subnet, do the following: POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION /subnetworks { "ipCidrRange": " SUBNET RANGE ", "name": " SUBNET NAME ", "network": "projects/ PROJECT ID /global/networks/ NETWORK NAME ", "purpose": "PRIVATE SERVICE CONNECT" } To create a dual-stack Private Service Connect subnet, do the following: POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION /subnetworks { "ipCidrRange": " SUBNET RANGE ", "name": " SUBNET NAME ", "network": "projects/ PROJECT ID /global/networks/ NETWORK NAME ", "purpose": "PRIVATE SERVICE CONNECT", "stackType": "IPV4 IPV6", "ipv6AccessType": "INTERNAL" } To create an IPv6-only Private Service Connect subnet, do the following: POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION /subnetworks { "name": " SUBNET NAME ", "network": "projects/ PROJECT ID /global/networks/ NETWORK NAME ", "purpose": "PRIVATE SERVICE CONNECT", "stackType": "IPV6 ONLY", "ipv6AccessType": "INTERNAL" } Replace the following: PROJECT ID : the project for the subnet.

### "Create a Private Service Connect backend \_|\_ Virtual Private Cloud \_\

- URL: [https://docs.cloud.google.com/vpc/docs/access-apis-managed-services-private-service-connect-backends](https://docs.cloud.google.com/vpc/docs/access-apis-managed-services-private-service-connect-backends)
- Source ID: `site-docs-root-2`
- Final score: 303
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For instructions that include creating a load balancer with a Private Service Connect backend, see the following: Create an internal Application Load Balancer to access Google APIs Create a global external Application Load Balancer to access a published service Roles The Compute Load Balancer Admin role ( roles/compute.loadBalancerAdmin ) contains the permission required to perform the tasks described in this guide.
- Create a Private Service Connect NEG When you create a NEG, you choose which type of target it connects to: A published service A regional Google API A global Google API Create a NEG to connect to a published service When you create a Private Service Connect NEG that points to a published service, you need the service attachment URI for the service.
- For complete instructions about creating a cross-region internal Application Load Balancer and a Private Service Connect NEG to access global Google APIs, see Access global Google APIs .
- If you are configuring a global external Application Load Balancer to connect to a published service in multiple regions, and you have created more than one Private Service Connect NEG, click Add backend to select another NEG.

