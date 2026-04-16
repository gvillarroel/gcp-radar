---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:02.938Z"
product_name: "Network Connectivity Center"
product_slug: "network-connectivity-center"
feature_name: "Private Service Connect connection propagation"
feature_slug: "private-service-connect-connection-propagation"
latest_feature_date: "2025-02-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/psc-propagated-connection-overview"
  - "https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/producer-vpc-spokes-overview"
  - "https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/ncc-gateway-overview"
  - "https://docs.cloud.google.com/network-connectivity/docs/reference/networkconnectivity/rest"
keywords:
  - "private"
  - "connect"
  - "connection"
  - "propagation"
  - "propagates"
  - "endpoints"
  - "through"
  - "network"
---

# Private Service Connect connection propagation

Product: Network Connectivity Center
Coverage: MEDIUM

## Step 02 Summary

Propagates Private Service Connect endpoints through a Network Connectivity Center hub so they are reachable from other VPC networks; Propagates Private Service Connect endpoints through a Network Connectivity Center hub so they are reachable from other VPC networks.

## Extended Definition

Propagates Private Service Connect endpoints through a Network Connectivity Center hub so they are reachable from other VPC networks; Propagates Private Service Connect endpoints through a Network Connectivity Center hub so they are reachable from other VPC networks.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/psc-propagated-connection-overview](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/psc-propagated-connection-overview)
- [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/producer-vpc-spokes-overview](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/producer-vpc-spokes-overview)
- [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/ncc-gateway-overview](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/ncc-gateway-overview)
- [https://docs.cloud.google.com/network-connectivity/docs/reference/networkconnectivity/rest](https://docs.cloud.google.com/network-connectivity/docs/reference/networkconnectivity/rest)

## Supporting Pages

### "Private Service Connect connection propagation through NCC \_|\_ Network\

- URL: [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/psc-propagated-connection-overview](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/psc-propagated-connection-overview)
- Source ID: `site-iam-reference`
- Final score: 431
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Networking Network Connectivity Network Connectivity Center Guides Send feedback Private Service Connect connection propagation through NCC Stay organized with collections Save and categorize content based on your preferences.
- The NCC Private Service Connect connection propagation feature benefits the following use cases: You can use a common services VPC network to create multiple Private Service Connect consumer endpoints.
- Error, producer propagated connection limit exceeded The propagated Private Service Connect connection propagation failed because the VPC network or the project of the target spoke has exceeded the propagation connection limit set by the producer.
- The propagation of Private Service Connect services through the Network Connectivity Center (NCC) hub enables these services to be reachable by any other spoke VPC in the same hub through the route table.

### "Producer VPC spokes \_|\_ Network Connectivity Center \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/producer-vpc-spokes-overview](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/producer-vpc-spokes-overview)
- Source ID: `site-iam-reference`
- Final score: 273
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Properties unique to producer VPC spokes Producer VPC spokes have the following unique properties and requirements: Property Description Dependencies Creating a producer VPC spoke requires that you have the following existing resources and connections: A VPC network that consumes a supported service from a producer network through VPC Network Peering.
- All of the networks attached to the hub as VPC spokes can access the services in the producer network: The peered consumer network continues to access services by using the subnet routes exported from the service producer network through the existing VPC Network Peering connection.
- Private Service Connect connection propagation Private Service Connect connection propagation isn't supported on producer VPC spokes.
- Private services access uses a VPC Network Peering connection between a producer VPC network and your VPC network.

### "NCC Gateway overview \_|\_ Network Connectivity Center \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/ncc-gateway-overview](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/ncc-gateway-overview)
- Source ID: `site-iam-reference`
- Final score: 224
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Example: Branch users to private applications Suppose that a branch's on-premises network is connected to Google Cloud as shown in the Branch users to private applications use case, and that the branch and private applications need 1 Gbps full-duplex bandwidth: 1 Gbps for traffic from the branch to the applications and 1 Gbps for traffic from the applications to the branch.
- Secure remote workforce: You can securely connect remote workforces—such as those in branches, data centers, and remote offices—to private applications in Google Cloud, on-premises, or other cloud providers and to public applications, like Palo Alto Networks Prisma Access and Symantec Cloud Secure Web Gateway (Cloud SWG).
- Supported SSE products NCC Gateway supports connections to the following SSE products: Symantec Cloud SWG Palo Alto Networks Prisma Access Use cases NCC Gateway is ideal for organizations that want to secure hybrid workforce access to applications.
- This way, it's possible for one VLAN attachment to provide 1 Gbps of full-duplex bandwidth between the branch and private applications even when one VLAN attachment is offline (for example, due to interconnect connection maintenance).

### Network Connectivity API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/reference/networkconnectivity/rest](https://docs.cloud.google.com/network-connectivity/docs/reference/networkconnectivity/rest)
- Source ID: `site-docs-reference`
- Final score: 223
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- REST Resource: v1beta.projects.locations REST Resource: v1beta.projects.locations.global.hubs REST Resource: v1beta.projects.locations.global.hubs.groups REST Resource: v1beta.projects.locations.global.hubs.routeTables REST Resource: v1beta.projects.locations.global.hubs.routeTables.routes REST Resource: v1beta.projects.locations.global.policyBasedRoutes REST Resource: v1beta.projects.locations.multicloudDataTransferConfigs REST Resource: v1beta.projects.locations.multicloudDataTransferConfigs.destinations REST Resource: v1beta.projects.locations.multicloudDataTransferSupportedServices REST Resource: v1beta.projects.locations.operations REST Resource: v1beta.projects.locations.regionalEndpoints REST Resource: v1beta.projects.locations.remoteTransportProfiles REST Resource: v1beta.projects.locations.spokes REST Resource: v1beta.projects.locations.spokes.gatewayAdvertisedRoutes REST Resource: v1beta.projects.locations.transports REST Resource: v1alpha1.projects.locations REST Resource: v1alpha1.projects.locations.global.hubs REST Resource: v1alpha1.projects.locations.internalRanges REST Resource: v1alpha1.projects.locations.operations REST Resource: v1alpha1.projects.locations.spokes REST Resource: v1.projects.locations REST Resource: v1.projects.locations.global.hubs REST Resource: v1.projects.locations.global.hubs.groups REST Resource: v1.projects.locations.global.hubs.routeTables REST Resource: v1.projects.locations.global.hubs.routeTables.routes REST Resource: v1.projects.locations.global.policyBasedRoutes REST Resource: v1.projects.locations.internalRanges REST Resource: v1.projects.locations.multicloudDataTransferConfigs REST Resource: v1.projects.locations.multicloudDataTransferConfigs.destinations REST Resource: v1.projects.locations.multicloudDataTransferSupportedServices REST Resource: v1.projects.locations.operations REST Resource: v1.projects.locations.regionalEndpoints REST Resource: v1.projects.locations.serviceClasses REST Resource: v1.projects.locations.serviceConnectionMaps REST Resource: v1.projects.locations.serviceConnectionPolicies REST Resource: v1.projects.locations.serviceConnectionTokens REST Resource: v1.projects.locations.spokes Service: networkconnectivity.googleapis.com To call this service, we recommend that you use the Google-provided client libraries .
- REST Resource: v1beta.projects.locations.global.hubs Methods acceptSpoke POST /v1beta/{name=projects/ /locations/global/hubs/ }:acceptSpoke Accepts a proposal to attach a Network Connectivity Center spoke to a hub. acceptSpokeUpdate POST /v1beta/{name=projects/ /locations/global/hubs/ }:acceptSpokeUpdate Accepts a proposal to update a Network Connectivity Center spoke in a hub. create POST /v1beta/{parent=projects/ /locations/global}/hubs Creates a new Network Connectivity Center hub in the specified project. delete DELETE /v1beta/{name=projects/ /locations/global/hubs/ } Deletes a Network Connectivity Center hub. get GET /v1beta/{name=projects/ /locations/global/hubs/ } Gets details about a Network Connectivity Center hub. getIamPolicy GET /v1beta/{resource=projects/ /locations/global/hubs/ }:getIamPolicy Gets the access control policy for a resource. list GET /v1beta/{parent=projects/ /locations/global}/hubs Lists the Network Connectivity Center hubs associated with a given project. listSpokes GET /v1beta/{name=projects/ /locations/global/hubs/ }:listSpokes Lists the Network Connectivity Center spokes associated with a specified hub and location. patch PATCH /v1beta/{hub.name=projects/ /locations/global/hubs/ } Updates the description and/or labels of a Network Connectivity Center hub. queryStatus GET /v1beta/{name=projects/ /locations/global/hubs/ }:queryStatus Query the Private Service Connect propagation status of a Network Connectivity Center hub. rejectSpoke POST /v1beta/{name=projects/ /locations/global/hubs/ }:rejectSpoke Rejects a Network Connectivity Center spoke from being attached to a hub. rejectSpokeUpdate POST /v1beta/{name=projects/ /locations/global/hubs/ }:rejectSpokeUpdate Rejects a proposal to update a Network Connectivity Center spoke in a hub. setIamPolicy POST /v1beta/{resource=projects/ /locations/global/hubs/ }:setIamPolicy Sets the access control policy on the specified resource. testIamPermissions POST /v1beta/{resource=projects/ /locations/global/hubs/ }:testIamPermissions Returns permissions that a caller has on the specified resource.
- REST Resource: v1.projects.locations.global.hubs Methods acceptSpoke POST /v1/{name=projects/ /locations/global/hubs/ }:acceptSpoke Accepts a proposal to attach a Network Connectivity Center spoke to a hub. acceptSpokeUpdate POST /v1/{name=projects/ /locations/global/hubs/ }:acceptSpokeUpdate Accepts a proposal to update a Network Connectivity Center spoke in a hub. create POST /v1/{parent=projects/ /locations/global}/hubs Creates a new Network Connectivity Center hub in the specified project. delete DELETE /v1/{name=projects/ /locations/global/hubs/ } Deletes a Network Connectivity Center hub. get GET /v1/{name=projects/ /locations/global/hubs/ } Gets details about a Network Connectivity Center hub. getIamPolicy GET /v1/{resource=projects/ /locations/global/hubs/ }:getIamPolicy Gets the access control policy for a resource. list GET /v1/{parent=projects/ /locations/global}/hubs Lists the Network Connectivity Center hubs associated with a given project. listSpokes GET /v1/{name=projects/ /locations/global/hubs/ }:listSpokes Lists the Network Connectivity Center spokes associated with a specified hub and location. patch PATCH /v1/{hub.name=projects/ /locations/global/hubs/ } Updates the description and/or labels of a Network Connectivity Center hub. queryStatus GET /v1/{name=projects/ /locations/global/hubs/ }:queryStatus Query the Private Service Connect propagation status of a Network Connectivity Center hub. rejectSpoke POST /v1/{name=projects/ /locations/global/hubs/ }:rejectSpoke Rejects a Network Connectivity Center spoke from being attached to a hub. rejectSpokeUpdate POST /v1/{name=projects/ /locations/global/hubs/ }:rejectSpokeUpdate Rejects a proposal to update a Network Connectivity Center spoke in a hub. setIamPolicy POST /v1/{resource=projects/ /locations/global/hubs/ }:setIamPolicy Sets the access control policy on the specified resource. testIamPermissions POST /v1/{resource=projects/ /locations/global/hubs/ }:testIamPermissions Returns permissions that a caller has on the specified resource.
- REST Resource: v1.projects.locations Methods checkConsumerConfig POST /v1/{location=projects/ /locations/ }:checkConsumerConfig CheckConsumerConfig validates the consumer network and project for potential PSC connection creation. get GET /v1/{name=projects/ /locations/ } Gets information about a location. list GET /v1/{name=projects/ }/locations Lists information about the supported locations for this service.

