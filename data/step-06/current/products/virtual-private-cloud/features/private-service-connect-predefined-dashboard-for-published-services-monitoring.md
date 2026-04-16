---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.454Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "Private Service Connect predefined dashboard for published services monitoring"
feature_slug: "private-service-connect-predefined-dashboard-for-published-services-monitoring"
latest_feature_date: "2024-07-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-services"
  - "https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer"
  - "https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-health-failover"
  - "https://docs.cloud.google.com/vpc/docs/about-private-service-connect-health"
keywords:
  - "private"
  - "connect"
  - "predefined"
  - "dashboard"
  - "for"
  - "published"
  - "services"
  - "monitoring"
---

# Private Service Connect predefined dashboard for published services monitoring

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

The predefined Private Service Connect dashboard for published services has been enhanced with additional monitoring metrics.

## Extended Definition

The predefined Private Service Connect dashboard for published services has been enhanced with additional monitoring metrics.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-services](https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-services)
- [https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer](https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer)
- [https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-health-failover](https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-health-failover)
- [https://docs.cloud.google.com/vpc/docs/about-private-service-connect-health](https://docs.cloud.google.com/vpc/docs/about-private-service-connect-health)

## Supporting Pages

### "Access published services through endpoints \_|\_ Virtual Private Cloud\

- URL: [https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-services](https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-services)
- Source ID: `site-docs-root-2`
- Final score: 235
- Re-rank relevance: N/A

Evidence snippets:
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to access published services through endpoints: To create, view, and delete endpoints in your project: compute.networks.use on your project compute.subnetworks.use on your project compute.addresses.createInternal on your project compute.addresses.deleteInternal on your project compute.addresses.get on your project compute.addresses.list on your project compute.addresses.use on your project compute.forwardingRules.create on your project compute.forwardingRules.delete on your project compute.forwardingRules.get on your project compute.forwardingRules.list on your project compute.forwardingRules.pscCreate on your project compute.forwardingRules.pscDelete on your project compute.regionOperations.get on your project servicedirectory.namespaces.create on your project servicedirectory.namespaces.delete on your project servicedirectory.services.create on your project servicedirectory.services.delete on your project To create, view, and delete endpoints in a service project that is attached to a Shared VPC network: compute.addresses.createInternal on the service project compute.addresses.deleteInternal on the service project compute.addresses.get on the service project compute.addresses.list on the service project compute.addresses.use on the service project compute.forwardingRules.create on the service project compute.forwardingRules.delete on the service project compute.forwardingRules.get on the service project compute.forwardingRules.list on the service project compute.forwardingRules.pscCreate on the service project compute.forwardingRules.pscDelete on the service project compute.regionOperations.get on the service project servicedirectory.namespaces.create on the service project servicedirectory.namespaces.delete on the service project servicedirectory.services.create on the service project servicedirectory.services.delete on the service project compute.networks.use on the host project compute.subnetworks.use on the host project To automatically or manually configure DNS entries for an endpoint in your project: dns.managedZones.create on your project dns.managedZones.delete on your project dns.networks.bindPrivateDNSZone on your project servicedirectory.namespaces.associatePrivateZone on your project To automatically or manually configure DNS entries for an endpoint in a Shared VPC network: dns.managedZones.create on the service project dns.managedZones.delete on the service project dns.networks.bindPrivateDNSZone on the service project servicedirectory.namespaces.associatePrivateZone on the service project To access the Private Service Connect page in the Google Cloud console: compute.forwardingRules.list on your project compute.globalForwardingRules.list on your project compute.networkEndpointGroups.list on your project compute.regionNetworkEndpointGroups.list on your project compute.urlMaps.list on your project compute.backendService.list on your project compute.regionBackendService.list on your project compute.backendBucket.list on your project compute.targetHttpProxy.list on your project compute.targetHttpsProxy.list on your project compute.regionTargetTcpProxy.list on your project compute.targetTcpProxy.list on your project compute.targetSslProxy.list on your project compute.sslCertificate.list on your project compute.sslPolicy.list on your project compute.regionHealthCheck.list on your project compute.healthCheck.list on your project compute.httpHealthCheck.list on your project compute.httpsHealthCheck.list on your project You might also be able to get these permissions with custom roles or other predefined roles .
- Dropped packets from published services The private service connect/consumer/dropped received packets count metric tracks packets sent from a published service to a Private Service Connect consumer such as an endpoint that are dropped because Private Service Connect can't find a matching connection for response packets.
- If you create an endpoint with global access and the published service doesn't support it, you see this error message: Private Service Connect global access is not supported for the given forwarding rule, since its producer service does not support consumer global access.
- Endpoint creation succeeds, but connectivity is not established If you successfully create an endpoint for published services but connectivity is not established, check the endpoint's connection status .

### "Publish services by using Private Service Connect \_|\_ Virtual Private\

- URL: [https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer](https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer)
- Source ID: `site-docs-root-2`
- Final score: 226
- Re-rank relevance: N/A

Evidence snippets:
- Private Service Connect provides two methods to connect to published services: Endpoints (based on a forwarding rule) Backends (based on a load balancer) These endpoint types require slightly different producer configurations.
- When you configure ingress firewall rules for backend services, the source of traffic depends on the type of load balancer that your service uses: Category Source of traffic to backends Passthrough load balancers: Internal passthrough Network Load Balancer Internal protocol forwarding Port mapping service The IP address ranges of the Private Service Connect (NAT) subnets associated with the service Proxy load balancers: Cross-region internal Application Load Balancer Regional internal Application Load Balancer Regional internal proxy Network Load Balancer Secure Web Proxy The IP address ranges of the associated proxy-only subnets Services with health checks The probe IP address ranges of your load balancer type Publish a service To publish a service, you create a service attachment.
- Details are displayed for each endpoint, including the Endpoint ID that you can use to accept or reject connections from individual Private Service Connect endpoints. gcloud To view details for a published service, use the gcloud compute service-attachments describe command .
- Dropped packets to consumers The private service connect/producer/dropped sent packets count metric tracks packets sent from a published service to an endpoint or backend that are dropped because Private Service Connect can't find a matching connection for response packets.

### "Configure Private Service Connect health for automatic cross-region failover\

- URL: [https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-health-failover](https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-health-failover)
- Source ID: `site-docs-root-2`
- Final score: 225
- Re-rank relevance: N/A

Evidence snippets:
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to configure Private Service Connect health: compute.regionHealthAggregationPolicies.list compute.regionHealthAggregationPolicies.get compute.regionHealthAggregationPolicies.create compute.regionHealthAggregationPolicies.update compute.regionHealthAggregationPolicies.delete compute.regionHealthSources.list compute.regionHealthSources.get compute.regionHealthSources.create compute.regionHealthSources.update compute.regionHealthSources.delete compute.regionCompositeHealthChecks.list compute.regionCompositeHealthChecks.get compute.regionCompositeHealthChecks.create compute.regionCompositeHealthChecks.update compute.regionCompositeHealthChecks.delete You might also be able to get these permissions with custom roles or other predefined roles .
- HEALTH DESTINATION : the URI of the forwarding rule that receives the composite health state from this composite health check—for example, projects/ PROJECT ID /regions/ REGION /forwardingRules/ FORWARDING RULE The forwarding rule must be associated with a producer load balancer that supports Private Service Connect health and fulfills the following requirements: It must have a load balancing scheme of INTERNAL or INTERNAL MANAGED .
- Configure Private Service Connect health for automatic cross-region failover Preview This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- Configure Private Service Connect health to support automatic cross-region failover The following sections describe how to configure Private Service Connect health for automatic cross-region failover.

### "About Private Service Connect health for automatic cross-region failover\

- URL: [https://docs.cloud.google.com/vpc/docs/about-private-service-connect-health](https://docs.cloud.google.com/vpc/docs/about-private-service-connect-health)
- Source ID: `site-docs-root-2`
- Final score: 221
- Re-rank relevance: N/A

Evidence snippets:
- All Private Service Connect health resources, including the backend services and forwarding rules they reference, must exist in the same project.
- Private Service Connect health only supports Private Service Connect backends that access published services.
- Consumer configuration : Create a Private Service Connect backend to access published services .
- The backend must be based on a load balancer that supports cross-region failover and includes the following configuration: A Private Service Connect NEG in each region that points to that region's service attachment A global backend service that contains the NEG backends The following diagram shows a multi-region deployment: This example shows a consumer global external Application Load Balancer that connects to a service that is published in multiple regions.

