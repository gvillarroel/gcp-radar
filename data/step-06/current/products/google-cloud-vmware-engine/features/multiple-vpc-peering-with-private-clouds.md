---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:51:38.728Z"
product_name: "Google Cloud VMware Engine"
product_slug: "google-cloud-vmware-engine"
feature_name: "Multiple VPC peering with private clouds"
feature_slug: "multiple-vpc-peering-with-private-clouds"
latest_feature_date: "2021-02-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vmware-engine/docs/networking/peer-vpc-network"
  - "https://docs.cloud.google.com/vmware-engine/docs/public/reference/rest"
  - "https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.pagers"
keywords:
  - "multiple"
  - "vpc"
  - "peering"
  - "private"
  - "clouds"
  - "vpcs"
  - "can"
  - "peer"
---

# Multiple VPC peering with private clouds

Product: Google Cloud VMware Engine
Coverage: MEDIUM

## Step 02 Summary

Multiple VPCs can peer with private clouds in a region, enabling many-to-many connectivity across VPCs and regions.

## Extended Definition

Multiple VPCs can peer with private clouds in a region, enabling many-to-many connectivity across VPCs and regions.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vmware-engine/docs/networking/peer-vpc-network](https://docs.cloud.google.com/vmware-engine/docs/networking/peer-vpc-network)
- [https://docs.cloud.google.com/vmware-engine/docs/public/reference/rest](https://docs.cloud.google.com/vmware-engine/docs/public/reference/rest)
- [https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.pagers](https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.pagers)

## Supporting Pages

### Peer a VPC network \_|\_ Google Cloud VMware Engine \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vmware-engine/docs/networking/peer-vpc-network](https://docs.cloud.google.com/vmware-engine/docs/networking/peer-vpc-network)
- Source ID: `site-docs-root`
- Final score: 162
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Peer a VPC network Virtual Private Cloud network peerings define network connectivity between Google Cloud VMware Engine networks, Google VPCs, and other services.
- If you are peering to a network in a different project, you must complete creation of the VPC network peering in both projects by completing the peering in the project where the VMware Engine network and private cloud are located.
- For example, those routes can come from on-premises networks, peered VPC networks, and other private clouds in the same VPC network.
- API To create a new VPC network peering with another VMware Engine using the VMware Engine API, make a POST request: POST "https://vmwareengine.googleapis.com/v1/projects/ PROJECT ID /locations/global/networkPeerings?network peering id= NETWORK PEERING ID " -d '{ "vmware engine network": "projects/ PROJECT ID /locations/global/vmwareEngineNetworks/ VMWARE NETWORK ID 1 ", "description": " DESCRIPTION ", "peer network type": "VMWARE ENGINE NETWORK", "peer network": "projects/ PROJECT ID /global/networks/vmwareEngineNetworks/ VMWARE NETWORK ID 2 " }' Replace the following: + PROJECT ID : the project ID for your VMware Engine network . + NETWORK PEERING ID : a name for your network peering .

### "Module pagers (1.11.0) \_|\_ Python client libraries \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.pagers](https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.pagers)
- Source ID: `site-python-reference`
- Final score: 147
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If there are more pages, the aiter method will make additional ListPrivateConnectionPeeringRoutes requests and continue to iterate through the peering routes field on the corresponding responses.
- If there are more pages, the iter method will make additional ListPrivateConnectionPeeringRoutes requests and continue to iterate through the peering routes field on the corresponding responses.
- This class thinly wraps an initial ListPrivateConnectionPeeringRoutesResponse object, and provides an aiter method to iterate through its peering routes field.
- This class thinly wraps an initial ListPrivateConnectionPeeringRoutesResponse object, and provides an iter method to iterate through its peering routes field.

### VMware Engine API \_|\_ Google Cloud VMware Engine \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vmware-engine/docs/public/reference/rest](https://docs.cloud.google.com/vmware-engine/docs/public/reference/rest)
- Source ID: `site-docs-root`
- Final score: 142
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- REST Resource: v1.projects.locations REST Resource: v1.projects.locations.announcements REST Resource: v1.projects.locations.datastores REST Resource: v1.projects.locations.dnsBindPermission REST Resource: v1.projects.locations.networkPeerings REST Resource: v1.projects.locations.networkPeerings.peeringRoutes REST Resource: v1.projects.locations.networkPolicies REST Resource: v1.projects.locations.networkPolicies.externalAccessRules REST Resource: v1.projects.locations.nodeTypes REST Resource: v1.projects.locations.operations REST Resource: v1.projects.locations.privateClouds REST Resource: v1.projects.locations.privateClouds.clusters REST Resource: v1.projects.locations.privateClouds.clusters.nodes REST Resource: v1.projects.locations.privateClouds.externalAddresses REST Resource: v1.projects.locations.privateClouds.hcxActivationKeys REST Resource: v1.projects.locations.privateClouds.loggingServers REST Resource: v1.projects.locations.privateClouds.managementDnsZoneBindings REST Resource: v1.projects.locations.privateClouds.subnets REST Resource: v1.projects.locations.privateClouds.upgrades REST Resource: v1.projects.locations.privateConnections REST Resource: v1.projects.locations.privateConnections.peeringRoutes REST Resource: v1.projects.locations.vmwareEngineNetworks Service: vmwareengine.googleapis.com Service endpoint A service endpoint is a base URL that specifies the network address of an API service.
- REST Resource: v1.projects.locations.privateClouds.managementDnsZoneBindings Methods create POST /v1/{parent=projects/ /locations/ /privateClouds/ }/managementDnsZoneBindings Creates a new ManagementDnsZoneBinding resource in a private cloud. delete DELETE /v1/{name=projects/ /locations/ /privateClouds/ /managementDnsZoneBindings/ } Deletes a ManagementDnsZoneBinding resource. get GET /v1/{name=projects/ /locations/ /privateClouds/ /managementDnsZoneBindings/ } Retrieves a 'ManagementDnsZoneBinding' resource by its resource name. list GET /v1/{parent=projects/ /locations/ /privateClouds/ }/managementDnsZoneBindings Lists Consumer VPCs bound to Management DNS Zone of a given private cloud. patch PATCH /v1/{managementDnsZoneBinding.name=projects/ /locations/ /privateClouds/ /managementDnsZoneBindings/ } Updates a ManagementDnsZoneBinding resource. repair POST /v1/{name=projects/ /locations/ /privateClouds/ /managementDnsZoneBindings/ }:repair Retries to create a ManagementDnsZoneBinding resource that is in failed state.
- REST Resource: v1.projects.locations.privateConnections.peeringRoutes Methods list GET /v1/{parent=projects/ /locations/ /privateConnections/ }/peeringRoutes Lists the private connection routes exchanged over a peering connection.
- REST Resource: v1.projects.locations.privateClouds Methods create POST /v1/{parent=projects/ /locations/ }/privateClouds Creates a new PrivateCloud resource in a given project and location. delete DELETE /v1/{name=projects/ /locations/ /privateClouds/ } Schedules a PrivateCloud resource for deletion. get GET /v1/{name=projects/ /locations/ /privateClouds/ } Retrieves a PrivateCloud resource by its resource name. getDnsForwarding GET /v1/{name=projects/ /locations/ /privateClouds/ /dnsForwarding} Gets details of the DnsForwarding config. getIamPolicy GET /v1/{resource=projects/ /locations/ /privateClouds/ }:getIamPolicy Gets the access control policy for a resource. list GET /v1/{parent=projects/ /locations/ }/privateClouds Lists PrivateCloud resources in a given project and location. patch PATCH /v1/{privateCloud.name=projects/ /locations/ /privateClouds/ } Modifies a PrivateCloud resource. privateCloudDeletionNow POST /v1/{name=projects/ /locations/ /privateClouds/ }:privateCloudDeletionNow Accelerates the deletion of a private cloud that is currently in soft deletion A PrivateCloud resource in soft deletion has PrivateCloud.state set to SOFT DELETED and PrivateCloud.expireTime set to the time when deletion can no longer be reversed. resetNsxCredentials POST /v1/{privateCloud=projects/ /locations/ /privateClouds/ }:resetNsxCredentials Resets credentials of the NSX appliance. resetVcenterCredentials POST /v1/{privateCloud=projects/ /locations/ /privateClouds/ }:resetVcenterCredentials Resets credentials of the Vcenter appliance. setIamPolicy POST /v1/{resource=projects/ /locations/ /privateClouds/ }:setIamPolicy Sets the access control policy on the specified resource. showNsxCredentials GET /v1/{privateCloud=projects/ /locations/ /privateClouds/ }:showNsxCredentials Gets details of credentials for NSX appliance. showVcenterCredentials GET /v1/{privateCloud=projects/ /locations/ /privateClouds/ }:showVcenterCredentials Gets details of credentials for Vcenter appliance. testIamPermissions POST /v1/{resource=projects/ /locations/ /privateClouds/ }:testIamPermissions Returns permissions that a caller has on the specified resource. undelete POST /v1/{name=projects/ /locations/ /privateClouds/ }:undelete Restores a private cloud that was previously scheduled for deletion by DeletePrivateCloud . updateDnsForwarding PATCH /v1/{dnsForwarding.name=projects/ /locations/ /privateClouds/ /dnsForwarding} Updates the parameters of the DnsForwarding config, like associated domains.

