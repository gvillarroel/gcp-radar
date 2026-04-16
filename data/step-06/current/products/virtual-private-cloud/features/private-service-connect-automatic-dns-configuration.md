---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.479Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "Private Service Connect automatic DNS configuration"
feature_slug: "private-service-connect-automatic-dns-configuration"
latest_feature_date: "2022-04-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer"
  - "https://docs.cloud.google.com/vpc/docs/about-private-service-connect-health"
  - "https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-services"
  - "https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-apis"
keywords:
  - "private"
  - "connect"
  - "automatic"
  - "dns"
  - "configuration"
  - "adds"
  - "for"
  - "endpoints"
---

# Private Service Connect automatic DNS configuration

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

Adds automatic DNS configuration for Private Service Connect endpoints by creating a DNS entry when a managed service specifies a domain name and a consumer creates an endpoint to that service.

## Extended Definition

Adds automatic DNS configuration for Private Service Connect endpoints by creating a DNS entry when a managed service specifies a domain name and a consumer creates an endpoint to that service.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer](https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer)
- [https://docs.cloud.google.com/vpc/docs/about-private-service-connect-health](https://docs.cloud.google.com/vpc/docs/about-private-service-connect-health)
- [https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-services](https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-services)
- [https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-apis](https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-apis)

## Supporting Pages

### "Publish services by using Private Service Connect \_|\_ Virtual Private\

- URL: [https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer](https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer)
- Source ID: `site-docs-root-2`
- Final score: 262
- Re-rank relevance: N/A

Evidence snippets:
- Private Service Connect provides two methods to connect to published services: Endpoints (based on a forwarding rule) Backends (based on a load balancer) These endpoint types require slightly different producer configurations.
- For each endpoint in the list of connected endpoints, the endpointWithId field contains the endpoint's ID-based URI that you can use to accept or reject connections from individual Private Service Connect endpoints. gcloud compute service-attachments describe \ ATTACHMENT NAME --region= REGION Replace the following: ATTACHMENT NAME : the name of the service attachment.
- Details are displayed for each endpoint, including the Endpoint ID that you can use to accept or reject connections from individual Private Service Connect endpoints. gcloud To view details for a published service, use the gcloud compute service-attachments describe command .
- For each endpoint in the list of connected endpoints, the endpointWithId field contains the endpoint's ID-based URI that you can use to accept or reject connections from individual Private Service Connect endpoints.

### "About Private Service Connect health for automatic cross-region failover\

- URL: [https://docs.cloud.google.com/vpc/docs/about-private-service-connect-health](https://docs.cloud.google.com/vpc/docs/about-private-service-connect-health)
- Source ID: `site-docs-root-2`
- Final score: 249
- Re-rank relevance: N/A

Evidence snippets:
- Deployment requirements To use Private Service Connect health for automatic failover, both the service producer and the service consumer must configure their resources for a multi-region deployment, as described in this section.
- Accessing a multi-region service with a supported global or cross-regional load balancer lets the service consumer take advantage of Private Service Connect health for automatic cross-region failover (click to enlarge).
- About Private Service Connect health for automatic cross-region failover Preview This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- Private Service Connect health lets service producers define health states that support automatic cross-region failover for service consumers that use Private Service Connect backends.

### "Access published services through endpoints \_|\_ Virtual Private Cloud\

- URL: [https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-services](https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-services)
- Source ID: `site-docs-root-2`
- Final score: 246
- Re-rank relevance: N/A

Evidence snippets:
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to access published services through endpoints: To create, view, and delete endpoints in your project: compute.networks.use on your project compute.subnetworks.use on your project compute.addresses.createInternal on your project compute.addresses.deleteInternal on your project compute.addresses.get on your project compute.addresses.list on your project compute.addresses.use on your project compute.forwardingRules.create on your project compute.forwardingRules.delete on your project compute.forwardingRules.get on your project compute.forwardingRules.list on your project compute.forwardingRules.pscCreate on your project compute.forwardingRules.pscDelete on your project compute.regionOperations.get on your project servicedirectory.namespaces.create on your project servicedirectory.namespaces.delete on your project servicedirectory.services.create on your project servicedirectory.services.delete on your project To create, view, and delete endpoints in a service project that is attached to a Shared VPC network: compute.addresses.createInternal on the service project compute.addresses.deleteInternal on the service project compute.addresses.get on the service project compute.addresses.list on the service project compute.addresses.use on the service project compute.forwardingRules.create on the service project compute.forwardingRules.delete on the service project compute.forwardingRules.get on the service project compute.forwardingRules.list on the service project compute.forwardingRules.pscCreate on the service project compute.forwardingRules.pscDelete on the service project compute.regionOperations.get on the service project servicedirectory.namespaces.create on the service project servicedirectory.namespaces.delete on the service project servicedirectory.services.create on the service project servicedirectory.services.delete on the service project compute.networks.use on the host project compute.subnetworks.use on the host project To automatically or manually configure DNS entries for an endpoint in your project: dns.managedZones.create on your project dns.managedZones.delete on your project dns.networks.bindPrivateDNSZone on your project servicedirectory.namespaces.associatePrivateZone on your project To automatically or manually configure DNS entries for an endpoint in a Shared VPC network: dns.managedZones.create on the service project dns.managedZones.delete on the service project dns.networks.bindPrivateDNSZone on the service project servicedirectory.namespaces.associatePrivateZone on the service project To access the Private Service Connect page in the Google Cloud console: compute.forwardingRules.list on your project compute.globalForwardingRules.list on your project compute.networkEndpointGroups.list on your project compute.regionNetworkEndpointGroups.list on your project compute.urlMaps.list on your project compute.backendService.list on your project compute.regionBackendService.list on your project compute.backendBucket.list on your project compute.targetHttpProxy.list on your project compute.targetHttpsProxy.list on your project compute.regionTargetTcpProxy.list on your project compute.targetTcpProxy.list on your project compute.targetSslProxy.list on your project compute.sslCertificate.list on your project compute.sslPolicy.list on your project compute.regionHealthCheck.list on your project compute.healthCheck.list on your project compute.httpHealthCheck.list on your project compute.httpsHealthCheck.list on your project You might also be able to get these permissions with custom roles or other predefined roles .
- For example, projects/ SERVICE PROJECT /regions/ REGION /serviceAttachments/ SERVICE NAME Required roles To get the permissions that you need to access published services through endpoints, ask your administrator to grant you the following IAM roles: Create, view, and delete endpoints in your project: Compute Network Admin ( roles/compute.networkAdmin ) on your project Create, view, and delete endpoints in a Shared VPC service project: Compute Network Admin ( roles/compute.networkAdmin ) on the service project Compute Network User ( roles/compute.networkUser ) on the host project Automatically or manually configure DNS entries for an endpoint in your project: DNS Administrator ( roles/dns.admin ) on your project Service Directory Editor ( roles/servicedirectory.editor ) on your project Automatically or manually configure DNS entries for an endpoint in a Shared VPC service project: DNS Administrator ( roles/dns.admin ) on the service project Service Directory Editor ( roles/servicedirectory.editor ) on the service project For more information about granting roles, see Manage access to projects, folders, and organizations .
- Go to Cloud DNS zones Look for a private zone with the name NAMESPACE -- REGION . gcloud Run the following command to list all private DNS zones: gcloud dns managed-zones list \ --filter="visibility=private" Run the following command to get details for a zone with the name NAMESPACE -- REGION . gcloud dns managed-zones describe NAMESPACE -- REGION If the zone is not present, view the details for the endpoint and check if the endpoint configuration includes a value for the namespace.
- Configure DNS manually If you've prevented automatic DNS configuration, or if it is not enabled in your configuration, you can use Cloud DNS to manually create DNS records For more information, see the following pages: Access Control : the DNS Administrator role ( roles/dns.admin ) provides the permissions needed to create DNS zones and records.

### "Access Google APIs through endpoints \_|\_ Virtual Private Cloud \_|\_ Google\

- URL: [https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-apis](https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-apis)
- Source ID: `site-docs-root-2`
- Final score: 244
- Re-rank relevance: N/A

Evidence snippets:
- Task Roles Create an endpoint All of the following roles: Compute Network Admin ( roles/compute.networkAdmin ), Service Directory Editor ( roles/servicedirectory.editor ), and DNS Administrator ( roles/dns.admin ) Configure Private Google Access (optional) Compute Network Admin ( roles/compute.networkAdmin ) Before you begin Read About connecting to Google APIs by using endpoints for more information, including DNS configuration and limitations.
- Configure on-premises systems and on-premises DNS name servers to forward the DNS names for the Private Service Connect endpoints to an inbound forwarder entry point in the same region as the Cloud VPN tunnel or VLAN attachment that connects to the VPC network.
- If your on-premises network uses equal-cost multi-path (ECMP) routing to distribute traffic to Private Service Connect endpoints, you must ensure that all packets for a single TCP connection are routed through the same Cloud VPN tunnel or VLAN attachment.
- To create DNS records that point to your Private Service Connect endpoint, follow these instructions: Create a DNS zone for the domain you need to use (for example, googleapis.com or gcr.io ).

