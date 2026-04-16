---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.470Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "Private Service Connect consumer HTTP(S) controls"
feature_slug: "private-service-connect-consumer-http-s-controls"
latest_feature_date: "2023-04-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer"
  - "https://docs.cloud.google.com/vpc/docs/about-private-service-connect-interfaces"
  - "https://docs.cloud.google.com/vpc/docs/about-accessing-google-apis-endpoints"
  - "https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-services"
keywords:
  - "private"
  - "connect"
  - "consumer"
  - "http"
  - "controls"
  - "endpoints"
  - "gained"
  - "general"
---

# Private Service Connect consumer HTTP(S) controls

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

Private Service Connect endpoints gained General Availability support for consumer HTTP(S) controls to access regional Google APIs and published services through regional internal and external HTTP(S) load balancers.

## Extended Definition

Private Service Connect endpoints gained General Availability support for consumer HTTP(S) controls to access regional Google APIs and published services through regional internal and external HTTP(S) load balancers.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer](https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer)
- [https://docs.cloud.google.com/vpc/docs/about-private-service-connect-interfaces](https://docs.cloud.google.com/vpc/docs/about-private-service-connect-interfaces)
- [https://docs.cloud.google.com/vpc/docs/about-accessing-google-apis-endpoints](https://docs.cloud.google.com/vpc/docs/about-accessing-google-apis-endpoints)
- [https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-services](https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-services)

## Supporting Pages

### "Publish services by using Private Service Connect \_|\_ Virtual Private\

- URL: [https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer](https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer)
- Source ID: `site-docs-root-2`
- Final score: 223
- Re-rank relevance: N/A

Evidence snippets:
- To accept users based on individual Private Service Connect endpoints, publish a service with explicit approval, but don't add any values to the consumer lists.
- To publish a service and explicitly approve consumers based on VPC network, send the following request: POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ ATTACHMENT REGION /serviceAttachments { "name": " ATTACHMENT NAME ", "region": " ATTACHMENT REGION ", "connectionPreference": "ACCEPT MANUAL", "targetService": " TARGET SERVICE ", "enableProxyProtocol": false, "natSubnets": [ " PSC SUBNET 1 URI ", " PSC SUBNET 2 URI " ], "consumerRejectLists": [ "projects/ REJECTED PROJECT ID 1 /global/networks/ REJECTED NETWORK 1 ", "projects/ REJECTED PROJECT ID 2 /global/networks/ REJECTED NETWORK 2 " ], "consumerAcceptLists": [ { "networkUrl": "projects/ ACCEPTED PROJECT ID 1 /global/networks/ ACCEPTED NETWORK 1 ", "connectionLimit": " LIMIT 1 " }, { "networkUrl": "projects/ ACCEPTED PROJECT ID 2 /global/networks/ ACCEPTED NETWORK 2 ", "connectionLimit": " LIMIT 2 " } ], "propagatedConnectionLimit": PROPAGATED CONNECTION LIMIT , "domainNames": [ " DOMAIN NAME " ] } Replace the following: REJECTED PROJECT ID 1 and REJECTED PROJECT ID 2 : the IDs of the parent projects of the networks that you want to reject. consumerRejectLists is optional and can contain one or more networks.
- To create an IPv4-only Private Service Connect subnet, do the following: POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION /subnetworks { "ipCidrRange": " SUBNET RANGE ", "name": " SUBNET NAME ", "network": "projects/ PROJECT ID /global/networks/ NETWORK NAME ", "purpose": "PRIVATE SERVICE CONNECT" } To create a dual-stack Private Service Connect subnet, do the following: POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION /subnetworks { "ipCidrRange": " SUBNET RANGE ", "name": " SUBNET NAME ", "network": "projects/ PROJECT ID /global/networks/ NETWORK NAME ", "purpose": "PRIVATE SERVICE CONNECT", "stackType": "IPV4 IPV6", "ipv6AccessType": "INTERNAL" } To create an IPv6-only Private Service Connect subnet, do the following: POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION /subnetworks { "name": " SUBNET NAME ", "network": "projects/ PROJECT ID /global/networks/ NETWORK NAME ", "purpose": "PRIVATE SERVICE CONNECT", "stackType": "IPV6 ONLY", "ipv6AccessType": "INTERNAL" } Replace the following: PROJECT ID : the project for the subnet.
- To publish a service and explicitly approve consumers based on project, send the following request: POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ ATTACHMENT REGION /serviceAttachments { "name": " ATTACHMENT NAME ", "region": " ATTACHMENT REGION ", "connectionPreference": "ACCEPT MANUAL", "targetService": " TARGET SERVICE ", "enableProxyProtocol": false, "natSubnets": [ " PSC SUBNET 1 URI ", " PSC SUBNET 2 URI " ], "consumerRejectLists": [ " REJECTED PROJECT 1 ", " REJECTED PROJECT 2 " ], "consumerAcceptLists": [ { "projectIdOrNum": " ACCEPTED PROJECT 1 ", "connectionLimit": " LIMIT 1 " }, { "projectIdOrNum": " ACCEPTED PROJECT 2 ", "connectionLimit": " LIMIT 2 " } ], "propagatedConnectionLimit": " PROPAGATED CONNECTION LIMIT ", "domainNames": [ " DOMAIN NAME " ] } Replace the following: PROJECT ID : the project for the service attachment.

### "About Private Service Connect interfaces \_|\_ Virtual Private Cloud \_\

- URL: [https://docs.cloud.google.com/vpc/docs/about-private-service-connect-interfaces](https://docs.cloud.google.com/vpc/docs/about-private-service-connect-interfaces)
- Source ID: `site-docs-root-2`
- Final score: 215
- Re-rank relevance: N/A

Evidence snippets:
- Private Service Connect endpoints let service consumers initiate connections to service producers, while Private Service Connect interfaces let service producers initiate connections to service consumers (click to enlarge).
- Published services and Google APIs that are reachable from the consumer VPC network through Private Service Connect endpoints and backends .
- A connection between a Private Service Connect interface and a network attachment is similar to the connection between a Private Service Connect endpoint and a service attachment , but it has two key differences: A Private Service Connect interface lets a producer VPC network initiate connections to a consumer VPC network (managed service egress).
- Connecting to workloads in other networks Because Private Service Connect interface connections are transitive, if the consumer VPC network configuration allows it, resources in producer VPC networks can communicate with workloads that are connected to the consumer network.

### "About accessing Google APIs through endpoints \_|\_ Virtual Private Cloud\

- URL: [https://docs.cloud.google.com/vpc/docs/about-accessing-google-apis-endpoints](https://docs.cloud.google.com/vpc/docs/about-accessing-google-apis-endpoints)
- Source ID: `site-docs-root-2`
- Final score: 208
- Re-rank relevance: N/A

Evidence snippets:
- Configuration Details Consumer configuration (endpoint) Global reachability Uses an internal global IP address Cloud Interconnect traffic Cloud VPN traffic Access through VPC Network Peering Connection propagation through NCC Automatic DNS configuration IP version IPv4 Producer Supported services Supported global Google APIs On-premises access Private Service Connect endpoints that you use to access Google APIs can be accessed from supported connected on-premises hosts.
- Organization policy constraints An Organization Policy Administrator can use the constraints/compute.disablePrivateServiceConnectCreationForConsumers constraint to define the set of endpoint types for which users cannot create forwarding rules.
- Quotas The number of Private Service Connect endpoints that you can create for accessing Google APIs is controlled by the PSC Google APIs Forwarding Rules per VPC Network quota.
- You can have a firewall rule on a VM instance that disallows all traffic to the internet; traffic sent to Private Service Connect endpoints still reaches Google.

### "Access published services through endpoints \_|\_ Virtual Private Cloud\

- URL: [https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-services](https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-services)
- Source ID: `site-docs-root-2`
- Final score: 207
- Re-rank relevance: N/A

Evidence snippets:
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to access published services through endpoints: To create, view, and delete endpoints in your project: compute.networks.use on your project compute.subnetworks.use on your project compute.addresses.createInternal on your project compute.addresses.deleteInternal on your project compute.addresses.get on your project compute.addresses.list on your project compute.addresses.use on your project compute.forwardingRules.create on your project compute.forwardingRules.delete on your project compute.forwardingRules.get on your project compute.forwardingRules.list on your project compute.forwardingRules.pscCreate on your project compute.forwardingRules.pscDelete on your project compute.regionOperations.get on your project servicedirectory.namespaces.create on your project servicedirectory.namespaces.delete on your project servicedirectory.services.create on your project servicedirectory.services.delete on your project To create, view, and delete endpoints in a service project that is attached to a Shared VPC network: compute.addresses.createInternal on the service project compute.addresses.deleteInternal on the service project compute.addresses.get on the service project compute.addresses.list on the service project compute.addresses.use on the service project compute.forwardingRules.create on the service project compute.forwardingRules.delete on the service project compute.forwardingRules.get on the service project compute.forwardingRules.list on the service project compute.forwardingRules.pscCreate on the service project compute.forwardingRules.pscDelete on the service project compute.regionOperations.get on the service project servicedirectory.namespaces.create on the service project servicedirectory.namespaces.delete on the service project servicedirectory.services.create on the service project servicedirectory.services.delete on the service project compute.networks.use on the host project compute.subnetworks.use on the host project To automatically or manually configure DNS entries for an endpoint in your project: dns.managedZones.create on your project dns.managedZones.delete on your project dns.networks.bindPrivateDNSZone on your project servicedirectory.namespaces.associatePrivateZone on your project To automatically or manually configure DNS entries for an endpoint in a Shared VPC network: dns.managedZones.create on the service project dns.managedZones.delete on the service project dns.networks.bindPrivateDNSZone on the service project servicedirectory.namespaces.associatePrivateZone on the service project To access the Private Service Connect page in the Google Cloud console: compute.forwardingRules.list on your project compute.globalForwardingRules.list on your project compute.networkEndpointGroups.list on your project compute.regionNetworkEndpointGroups.list on your project compute.urlMaps.list on your project compute.backendService.list on your project compute.regionBackendService.list on your project compute.backendBucket.list on your project compute.targetHttpProxy.list on your project compute.targetHttpsProxy.list on your project compute.regionTargetTcpProxy.list on your project compute.targetTcpProxy.list on your project compute.targetSslProxy.list on your project compute.sslCertificate.list on your project compute.sslPolicy.list on your project compute.regionHealthCheck.list on your project compute.healthCheck.list on your project compute.httpHealthCheck.list on your project compute.httpsHealthCheck.list on your project You might also be able to get these permissions with custom roles or other predefined roles .
- The service producer might need this URI if the service attachment's consumer accept list is configured to accept consumers based on individual Private Service Connect endpoints.
- Dropped packets from published services The private service connect/consumer/dropped received packets count metric tracks packets sent from a published service to a Private Service Connect consumer such as an endpoint that are dropped because Private Service Connect can't find a matching connection for response packets.
- Dropped packets to published service The private service connect/consumer/dropped sent packets count metric tracks packets from a Private Service Connect consumer such as an endpoint to a published service that are dropped because the endpoint exceeded its maximum connections to the service.

