---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.474Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "Connected consumer forwarding rules metric for Private Service Connect producers"
feature_slug: "connected-consumer-forwarding-rules-metric-for-private-service-connect-producers"
latest_feature_date: "2022-09-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer"
  - "https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-services"
  - "https://docs.cloud.google.com/vpc/docs/quota"
  - "https://docs.cloud.google.com/vpc/docs/about-private-service-connect-health"
keywords:
  - "connected"
  - "consumer"
  - "forwarding"
  - "rules"
  - "metric"
  - "for"
  - "private"
  - "connect"
---

# Connected consumer forwarding rules metric for Private Service Connect producers

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

Cloud Monitoring now supports the Private Service Connect producer metric for connected consumer forwarding rules.

## Extended Definition

Cloud Monitoring now supports the Private Service Connect producer metric for connected consumer forwarding rules.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer](https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer)
- [https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-services](https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-services)
- [https://docs.cloud.google.com/vpc/docs/quota](https://docs.cloud.google.com/vpc/docs/quota)
- [https://docs.cloud.google.com/vpc/docs/about-private-service-connect-health](https://docs.cloud.google.com/vpc/docs/about-private-service-connect-health)

## Supporting Pages

### "Publish services by using Private Service Connect \_|\_ Virtual Private\

- URL: [https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer](https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer)
- Source ID: `site-docs-root-2`
- Final score: 272
- Re-rank relevance: N/A

Evidence snippets:
- When you configure ingress firewall rules for backend services, the source of traffic depends on the type of load balancer that your service uses: Category Source of traffic to backends Passthrough load balancers: Internal passthrough Network Load Balancer Internal protocol forwarding Port mapping service The IP address ranges of the Private Service Connect (NAT) subnets associated with the service Proxy load balancers: Cross-region internal Application Load Balancer Regional internal Application Load Balancer Regional internal proxy Network Load Balancer Secure Web Proxy The IP address ranges of the associated proxy-only subnets Services with health checks The probe IP address ranges of your load balancer type Publish a service To publish a service, you create a service attachment.
- Dropped packets to consumers The private service connect/producer/dropped sent packets count metric tracks packets sent from a published service to an endpoint or backend that are dropped because Private Service Connect can't find a matching connection for response packets.
- For each endpoint in the list of connected endpoints, the endpointWithId field contains the endpoint's ID-based URI that you can use to accept or reject connections from individual Private Service Connect endpoints. gcloud compute service-attachments describe \ ATTACHMENT NAME --region= REGION Replace the following: ATTACHMENT NAME : the name of the service attachment.
- Dropped packets from consumers The private service connect/producer/dropped received packets count metric tracks packets from an endpoint or backend to a published service that are dropped because the endpoint or backend exceeded its maximum connections to the service.

### "Access published services through endpoints \_|\_ Virtual Private Cloud\

- URL: [https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-services](https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-services)
- Source ID: `site-docs-root-2`
- Final score: 256
- Re-rank relevance: N/A

Evidence snippets:
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to access published services through endpoints: To create, view, and delete endpoints in your project: compute.networks.use on your project compute.subnetworks.use on your project compute.addresses.createInternal on your project compute.addresses.deleteInternal on your project compute.addresses.get on your project compute.addresses.list on your project compute.addresses.use on your project compute.forwardingRules.create on your project compute.forwardingRules.delete on your project compute.forwardingRules.get on your project compute.forwardingRules.list on your project compute.forwardingRules.pscCreate on your project compute.forwardingRules.pscDelete on your project compute.regionOperations.get on your project servicedirectory.namespaces.create on your project servicedirectory.namespaces.delete on your project servicedirectory.services.create on your project servicedirectory.services.delete on your project To create, view, and delete endpoints in a service project that is attached to a Shared VPC network: compute.addresses.createInternal on the service project compute.addresses.deleteInternal on the service project compute.addresses.get on the service project compute.addresses.list on the service project compute.addresses.use on the service project compute.forwardingRules.create on the service project compute.forwardingRules.delete on the service project compute.forwardingRules.get on the service project compute.forwardingRules.list on the service project compute.forwardingRules.pscCreate on the service project compute.forwardingRules.pscDelete on the service project compute.regionOperations.get on the service project servicedirectory.namespaces.create on the service project servicedirectory.namespaces.delete on the service project servicedirectory.services.create on the service project servicedirectory.services.delete on the service project compute.networks.use on the host project compute.subnetworks.use on the host project To automatically or manually configure DNS entries for an endpoint in your project: dns.managedZones.create on your project dns.managedZones.delete on your project dns.networks.bindPrivateDNSZone on your project servicedirectory.namespaces.associatePrivateZone on your project To automatically or manually configure DNS entries for an endpoint in a Shared VPC network: dns.managedZones.create on the service project dns.managedZones.delete on the service project dns.networks.bindPrivateDNSZone on the service project servicedirectory.namespaces.associatePrivateZone on the service project To access the Private Service Connect page in the Google Cloud console: compute.forwardingRules.list on your project compute.globalForwardingRules.list on your project compute.networkEndpointGroups.list on your project compute.regionNetworkEndpointGroups.list on your project compute.urlMaps.list on your project compute.backendService.list on your project compute.regionBackendService.list on your project compute.backendBucket.list on your project compute.targetHttpProxy.list on your project compute.targetHttpsProxy.list on your project compute.regionTargetTcpProxy.list on your project compute.targetTcpProxy.list on your project compute.targetSslProxy.list on your project compute.sslCertificate.list on your project compute.sslPolicy.list on your project compute.regionHealthCheck.list on your project compute.healthCheck.list on your project compute.httpHealthCheck.list on your project compute.httpsHealthCheck.list on your project You might also be able to get these permissions with custom roles or other predefined roles .
- Dropped packets from published services The private service connect/consumer/dropped received packets count metric tracks packets sent from a published service to a Private Service Connect consumer such as an endpoint that are dropped because Private Service Connect can't find a matching connection for response packets.
- If you create an endpoint with global access and the published service doesn't support it, you see this error message: Private Service Connect global access is not supported for the given forwarding rule, since its producer service does not support consumer global access.
- Each forwarding rule counts toward the per project quota for Private Service Connect forwarding rules to access services in another VPC network.

### Quotas and limits \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc/docs/quota](https://docs.cloud.google.com/vpc/docs/quota)
- Source ID: `site-docs-root`
- Final score: 240
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Quota name: PSC PROPAGATED CONNECTIONS PER VPC NETWORK Available metrics: compute.googleapis.com/quota/psc propagated connections per vpc network/limit compute.googleapis.com/quota/psc propagated connections per vpc network/usage compute.googleapis.com/quota/psc propagated connections per vpc network/exceeded PSC ILB consumer forwarding rules per producer VPC network The maximum number of Private Service Connect endpoints and propagated connections that can access a service producer VPC network.
- Quota name: PSC GOOGLE APIS FORWARDING RULES PER NETWORK Available metrics: compute.googleapis.com/quota/psc google apis forwarding rules per vpc network/limit compute.googleapis.com/quota/psc google apis forwarding rules per vpc network/usage compute.googleapis.com/quota/psc google apis forwarding rules per vpc network/exceeded PSC propagated connections per VPC network The maximum number of Private Service Connect propagated connections that can exist in a consumer's VPC network .
- Limit name: VARIABLE-IPV6-PUBLIC-DELEGATED-PREFIXES-per-project-region Metric: compute.googleapis.com/regional variable prefix length public delegated prefixes Private Service Connect PSC internal LB forwarding rules The maximum number of Private Service Connect endpoints (forwarding rules) that a service consumer can create to connect to producer services.
- Quota name: PSC-INTERNAL-LB-FORWARDING-RULES-per-project-region Number of Regional Endpoints per project per region The maximum number of Private Service Connect endpoints that a service consumer can create to connect to regional endpoints.

### "About Private Service Connect health for automatic cross-region failover\

- URL: [https://docs.cloud.google.com/vpc/docs/about-private-service-connect-health](https://docs.cloud.google.com/vpc/docs/about-private-service-connect-health)
- Source ID: `site-docs-root-2`
- Final score: 238
- Re-rank relevance: N/A

Evidence snippets:
- All Private Service Connect health resources, including the backend services and forwarding rules they reference, must exist in the same project.
- Deployment requirements To use Private Service Connect health for automatic failover, both the service producer and the service consumer must configure their resources for a multi-region deployment, as described in this section.
- Accessing a multi-region service with a supported global or cross-regional load balancer lets the service consumer take advantage of Private Service Connect health for automatic cross-region failover (click to enlarge).
- Private Service Connect health lets service producers define health states that support automatic cross-region failover for service consumers that use Private Service Connect backends.

