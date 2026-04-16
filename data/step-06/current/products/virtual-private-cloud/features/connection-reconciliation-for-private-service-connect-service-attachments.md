---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.463Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "Connection reconciliation for Private Service Connect service attachments"
feature_slug: "connection-reconciliation-for-private-service-connect-service-attachments"
latest_feature_date: "2023-08-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer"
  - "https://docs.cloud.google.com/vpc/docs/about-controlling-access-published-services"
  - "https://docs.cloud.google.com/vpc/docs/about-private-service-connect-port-mapping"
  - "https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-services"
keywords:
  - "connection"
  - "reconciliation"
  - "for"
  - "private"
  - "connect"
  - "attachments"
  - "is"
  - "now"
---

# Connection reconciliation for Private Service Connect service attachments

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

Connection reconciliation is now available for Private Service Connect service attachments, allowing changes to consumer accept or reject lists to affect existing connections as well as new and pending ones.

## Extended Definition

Connection reconciliation is now available for Private Service Connect service attachments, allowing changes to consumer accept or reject lists to affect existing connections as well as new and pending ones.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer](https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer)
- [https://docs.cloud.google.com/vpc/docs/about-controlling-access-published-services](https://docs.cloud.google.com/vpc/docs/about-controlling-access-published-services)
- [https://docs.cloud.google.com/vpc/docs/about-private-service-connect-port-mapping](https://docs.cloud.google.com/vpc/docs/about-private-service-connect-port-mapping)
- [https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-services](https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-services)

## Supporting Pages

### "Publish services by using Private Service Connect \_|\_ Virtual Private\

- URL: [https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer](https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer)
- Source ID: `site-docs-root-2`
- Final score: 304
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For each endpoint in the list of connected endpoints, the endpointWithId field contains the endpoint's ID-based URI that you can use to accept or reject connections from individual Private Service Connect endpoints. gcloud compute service-attachments describe \ ATTACHMENT NAME --region= REGION Replace the following: ATTACHMENT NAME : the name of the service attachment.
- Details are displayed for each endpoint, including the Endpoint ID that you can use to accept or reject connections from individual Private Service Connect endpoints. gcloud To view details for a published service, use the gcloud compute service-attachments describe command .
- When you run terraform apply after upgrading to versions 4.76.0 through 4.81.x, Terraform might unintentionally delete and recreate the service attachments and close existing Private Service Connect connections.
- To publish a service and explicitly approve consumers based on project, send the following request: POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ ATTACHMENT REGION /serviceAttachments { "name": " ATTACHMENT NAME ", "region": " ATTACHMENT REGION ", "connectionPreference": "ACCEPT MANUAL", "targetService": " TARGET SERVICE ", "enableProxyProtocol": false, "natSubnets": [ " PSC SUBNET 1 URI ", " PSC SUBNET 2 URI " ], "consumerRejectLists": [ " REJECTED PROJECT 1 ", " REJECTED PROJECT 2 " ], "consumerAcceptLists": [ { "projectIdOrNum": " ACCEPTED PROJECT 1 ", "connectionLimit": " LIMIT 1 " }, { "projectIdOrNum": " ACCEPTED PROJECT 2 ", "connectionLimit": " LIMIT 2 " } ], "propagatedConnectionLimit": " PROPAGATED CONNECTION LIMIT ", "domainNames": [ " DOMAIN NAME " ] } Replace the following: PROJECT ID : the project for the service attachment.

### "About controlling access to published services \_|\_ Virtual Private Cloud\

- URL: [https://docs.cloud.google.com/vpc/docs/about-controlling-access-published-services](https://docs.cloud.google.com/vpc/docs/about-controlling-access-published-services)
- Source ID: `site-docs-root-2`
- Final score: 256
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For information about configuring connection reconciliation for new service attachments, see Publish a service with explicit approval .
- For information about configuring connection reconciliation for existing service attachments, see Configure connection reconciliation .
- Prevention of quota exhaustion The total number of Private Service Connect endpoints and propagated connections, from any consumer, that can access your producer VPC network is controlled by the PSC ILB consumer forwarding rules per producer VPC network quota .
- Connection reconciliation Connection reconciliation determines whether updates to a service attachment's accept or reject lists can affect existing Private Service Connect connections.

### "About Private Service Connect port mapping \_|\_ Virtual Private Cloud \_\

- URL: [https://docs.cloud.google.com/vpc/docs/about-private-service-connect-port-mapping](https://docs.cloud.google.com/vpc/docs/about-private-service-connect-port-mapping)
- Source ID: `site-docs-root-2`
- Final score: 237
- Re-rank relevance: N/A

Evidence snippets:
- Deployment Deploying a Private Service Connect port mapping connection differs from deploying a regular Private Service Connect endpoint connection for published services in the following ways: The service producer creates a port mapping service.
- A consumer's on-premises workload can reach producer VMs by accessing the Private Service Connect endpoint through VLAN attachments for Cloud Interconnect or Cloud VPN .
- A regular (load balanced) connection between a Private Service Connect endpoint and a service attachment is not ideal for this situation.
- Private Service Connect port mapping forwards traffic from client destination ports of an endpoint to service ports of producer VMs based on mapping that is configured for a port mapping NEG (click to enlarge).

### "Access published services through endpoints \_|\_ Virtual Private Cloud\

- URL: [https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-services](https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-services)
- Source ID: `site-docs-root-2`
- Final score: 237
- Re-rank relevance: N/A

Evidence snippets:
- Dropped packets from published services The private service connect/consumer/dropped received packets count metric tracks packets sent from a published service to a Private Service Connect consumer such as an endpoint that are dropped because Private Service Connect can't find a matching connection for response packets.
- Private Service Connect might not find a match for a response packet if a published service sends response packets after a connection has timed out.
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to access published services through endpoints: To create, view, and delete endpoints in your project: compute.networks.use on your project compute.subnetworks.use on your project compute.addresses.createInternal on your project compute.addresses.deleteInternal on your project compute.addresses.get on your project compute.addresses.list on your project compute.addresses.use on your project compute.forwardingRules.create on your project compute.forwardingRules.delete on your project compute.forwardingRules.get on your project compute.forwardingRules.list on your project compute.forwardingRules.pscCreate on your project compute.forwardingRules.pscDelete on your project compute.regionOperations.get on your project servicedirectory.namespaces.create on your project servicedirectory.namespaces.delete on your project servicedirectory.services.create on your project servicedirectory.services.delete on your project To create, view, and delete endpoints in a service project that is attached to a Shared VPC network: compute.addresses.createInternal on the service project compute.addresses.deleteInternal on the service project compute.addresses.get on the service project compute.addresses.list on the service project compute.addresses.use on the service project compute.forwardingRules.create on the service project compute.forwardingRules.delete on the service project compute.forwardingRules.get on the service project compute.forwardingRules.list on the service project compute.forwardingRules.pscCreate on the service project compute.forwardingRules.pscDelete on the service project compute.regionOperations.get on the service project servicedirectory.namespaces.create on the service project servicedirectory.namespaces.delete on the service project servicedirectory.services.create on the service project servicedirectory.services.delete on the service project compute.networks.use on the host project compute.subnetworks.use on the host project To automatically or manually configure DNS entries for an endpoint in your project: dns.managedZones.create on your project dns.managedZones.delete on your project dns.networks.bindPrivateDNSZone on your project servicedirectory.namespaces.associatePrivateZone on your project To automatically or manually configure DNS entries for an endpoint in a Shared VPC network: dns.managedZones.create on the service project dns.managedZones.delete on the service project dns.networks.bindPrivateDNSZone on the service project servicedirectory.namespaces.associatePrivateZone on the service project To access the Private Service Connect page in the Google Cloud console: compute.forwardingRules.list on your project compute.globalForwardingRules.list on your project compute.networkEndpointGroups.list on your project compute.regionNetworkEndpointGroups.list on your project compute.urlMaps.list on your project compute.backendService.list on your project compute.regionBackendService.list on your project compute.backendBucket.list on your project compute.targetHttpProxy.list on your project compute.targetHttpsProxy.list on your project compute.regionTargetTcpProxy.list on your project compute.targetTcpProxy.list on your project compute.targetSslProxy.list on your project compute.sslCertificate.list on your project compute.sslPolicy.list on your project compute.regionHealthCheck.list on your project compute.healthCheck.list on your project compute.httpHealthCheck.list on your project compute.httpsHealthCheck.list on your project You might also be able to get these permissions with custom roles or other predefined roles .
- Dropped packets to published service The private service connect/consumer/dropped sent packets count metric tracks packets from a Private Service Connect consumer such as an endpoint to a published service that are dropped because the endpoint exceeded its maximum connections to the service.

