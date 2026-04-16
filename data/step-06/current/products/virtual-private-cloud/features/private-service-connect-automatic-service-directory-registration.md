---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.483Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "Private Service Connect automatic Service Directory registration"
feature_slug: "private-service-connect-automatic-service-directory-registration"
latest_feature_date: "2021-11-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-services"
  - "https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer"
  - "https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-apis"
  - "https://docs.cloud.google.com/vpc/docs/about-private-service-connect-health"
keywords:
  - "private"
  - "connect"
  - "automatic"
  - "directory"
  - "registration"
  - "now"
  - "automatically"
  - "registers"
---

# Private Service Connect automatic Service Directory registration

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

Private Service Connect now automatically registers managed-service endpoints in Service Directory so consumers can discover them without manual registration.

## Extended Definition

Private Service Connect now automatically registers managed-service endpoints in Service Directory so consumers can discover them without manual registration.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-services](https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-services)
- [https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer](https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer)
- [https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-apis](https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-apis)
- [https://docs.cloud.google.com/vpc/docs/about-private-service-connect-health](https://docs.cloud.google.com/vpc/docs/about-private-service-connect-health)

## Supporting Pages

### "Access published services through endpoints \_|\_ Virtual Private Cloud\

- URL: [https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-services](https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-services)
- Source ID: `site-docs-root-2`
- Final score: 223
- Re-rank relevance: N/A

Evidence snippets:
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to access published services through endpoints: To create, view, and delete endpoints in your project: compute.networks.use on your project compute.subnetworks.use on your project compute.addresses.createInternal on your project compute.addresses.deleteInternal on your project compute.addresses.get on your project compute.addresses.list on your project compute.addresses.use on your project compute.forwardingRules.create on your project compute.forwardingRules.delete on your project compute.forwardingRules.get on your project compute.forwardingRules.list on your project compute.forwardingRules.pscCreate on your project compute.forwardingRules.pscDelete on your project compute.regionOperations.get on your project servicedirectory.namespaces.create on your project servicedirectory.namespaces.delete on your project servicedirectory.services.create on your project servicedirectory.services.delete on your project To create, view, and delete endpoints in a service project that is attached to a Shared VPC network: compute.addresses.createInternal on the service project compute.addresses.deleteInternal on the service project compute.addresses.get on the service project compute.addresses.list on the service project compute.addresses.use on the service project compute.forwardingRules.create on the service project compute.forwardingRules.delete on the service project compute.forwardingRules.get on the service project compute.forwardingRules.list on the service project compute.forwardingRules.pscCreate on the service project compute.forwardingRules.pscDelete on the service project compute.regionOperations.get on the service project servicedirectory.namespaces.create on the service project servicedirectory.namespaces.delete on the service project servicedirectory.services.create on the service project servicedirectory.services.delete on the service project compute.networks.use on the host project compute.subnetworks.use on the host project To automatically or manually configure DNS entries for an endpoint in your project: dns.managedZones.create on your project dns.managedZones.delete on your project dns.networks.bindPrivateDNSZone on your project servicedirectory.namespaces.associatePrivateZone on your project To automatically or manually configure DNS entries for an endpoint in a Shared VPC network: dns.managedZones.create on the service project dns.managedZones.delete on the service project dns.networks.bindPrivateDNSZone on the service project servicedirectory.namespaces.associatePrivateZone on the service project To access the Private Service Connect page in the Google Cloud console: compute.forwardingRules.list on your project compute.globalForwardingRules.list on your project compute.networkEndpointGroups.list on your project compute.regionNetworkEndpointGroups.list on your project compute.urlMaps.list on your project compute.backendService.list on your project compute.regionBackendService.list on your project compute.backendBucket.list on your project compute.targetHttpProxy.list on your project compute.targetHttpsProxy.list on your project compute.regionTargetTcpProxy.list on your project compute.targetTcpProxy.list on your project compute.targetSslProxy.list on your project compute.sslCertificate.list on your project compute.sslPolicy.list on your project compute.regionHealthCheck.list on your project compute.healthCheck.list on your project compute.httpHealthCheck.list on your project compute.httpsHealthCheck.list on your project You might also be able to get these permissions with custom roles or other predefined roles .
- For example, projects/ SERVICE PROJECT /regions/ REGION /serviceAttachments/ SERVICE NAME Required roles To get the permissions that you need to access published services through endpoints, ask your administrator to grant you the following IAM roles: Create, view, and delete endpoints in your project: Compute Network Admin ( roles/compute.networkAdmin ) on your project Create, view, and delete endpoints in a Shared VPC service project: Compute Network Admin ( roles/compute.networkAdmin ) on the service project Compute Network User ( roles/compute.networkUser ) on the host project Automatically or manually configure DNS entries for an endpoint in your project: DNS Administrator ( roles/dns.admin ) on your project Service Directory Editor ( roles/servicedirectory.editor ) on your project Automatically or manually configure DNS entries for an endpoint in a Shared VPC service project: DNS Administrator ( roles/dns.admin ) on the service project Service Directory Editor ( roles/servicedirectory.editor ) on the service project For more information about granting roles, see Manage access to projects, folders, and organizations .
- With this configuration, if you have configured a Service Directory DNS zone with the us-west1.p.example.com DNS name, and you create an endpoint with the name analytics , a DNS record for analytics.us-west1.p.example.com is automatically created.
- When you create an endpoint, it is automatically registered with Service Directory , using a namespace that you choose, or the default namespace, goog-psc-default .

### "Publish services by using Private Service Connect \_|\_ Virtual Private\

- URL: [https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer](https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer)
- Source ID: `site-docs-root-2`
- Final score: 203
- Re-rank relevance: N/A

Evidence snippets:
- All existing Private Service Connect connections are closed, and new connections are not automatically re-established.
- Recreated service attachments don't automatically re-establish Private Service Connect connections.
- Health check failures with global access Private Service Connect NEGs There is a known issue with consumer Private Service Connect NEGs that are configured for global access.
- Publish a service with automatic approval Use these instructions to publish a service and automatically let any consumer connect to this service.

### "Access Google APIs through endpoints \_|\_ Virtual Private Cloud \_|\_ Google\

- URL: [https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-apis](https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-apis)
- Source ID: `site-docs-root-2`
- Final score: 199
- Re-rank relevance: N/A

Evidence snippets:
- Private Service Connect does not automatically enable any API.
- Task Roles Create an endpoint All of the following roles: Compute Network Admin ( roles/compute.networkAdmin ), Service Directory Editor ( roles/servicedirectory.editor ), and DNS Administrator ( roles/dns.admin ) Configure Private Google Access (optional) Compute Network Admin ( roles/compute.networkAdmin ) Before you begin Read About connecting to Google APIs by using endpoints for more information, including DNS configuration and limitations.
- Create a forwarding rule to connect the endpoint to Google APIs and services. gcloud compute forwarding-rules create ENDPOINT NAME \ --global \ --network= NETWORK NAME \ --address= ADDRESS NAME \ --target-google-apis-bundle= API BUNDLE \ [ --service-directory-registration= REGION NAMESPACE URI ] Replace the following: ENDPOINT NAME : the name to assign to the endpoint.
- If a Service Directory namespace is not already configured for this VPC network, configure the namespace you want to use: To use an automatically assigned namespace, click the Namespace drop-down menu and select the automatically assigned namespace.

### "About Private Service Connect health for automatic cross-region failover\

- URL: [https://docs.cloud.google.com/vpc/docs/about-private-service-connect-health](https://docs.cloud.google.com/vpc/docs/about-private-service-connect-health)
- Source ID: `site-docs-root-2`
- Final score: 179
- Re-rank relevance: N/A

Evidence snippets:
- When you configure Private Service Connect health, the health state of each regional published service is automatically propagated to the consumer's load balancer.
- Deployment requirements To use Private Service Connect health for automatic failover, both the service producer and the service consumer must configure their resources for a multi-region deployment, as described in this section.
- Accessing a multi-region service with a supported global or cross-regional load balancer lets the service consumer take advantage of Private Service Connect health for automatic cross-region failover (click to enlarge).
- About Private Service Connect health for automatic cross-region failover Preview This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .

