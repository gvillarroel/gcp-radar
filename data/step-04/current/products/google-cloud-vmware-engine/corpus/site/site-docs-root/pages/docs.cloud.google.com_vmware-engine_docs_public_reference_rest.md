---
title: "VMware Engine API \_|\_ Google Cloud VMware Engine \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vmware-engine/docs/public/reference/rest
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/vmware-engine/docs
source_metadata:
  url: https://docs.cloud.google.com/vmware-engine/docs/public/reference/rest
  title: "VMware Engine API \_|\_ Google Cloud VMware Engine \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Compute
VMware Engine
Reference
Send feedback
VMware Engine API
Stay organized with collections
Save and categorize content based on your preferences.
The Google VMware Engine API lets you programmatically manage VMware environments.
REST Resource: v1.projects.locations
REST Resource: v1.projects.locations.announcements
REST Resource: v1.projects.locations.datastores
REST Resource: v1.projects.locations.dnsBindPermission
REST Resource: v1.projects.locations.networkPeerings
REST Resource: v1.projects.locations.networkPeerings.peeringRoutes
REST Resource: v1.projects.locations.networkPolicies
REST Resource: v1.projects.locations.networkPolicies.externalAccessRules
REST Resource: v1.projects.locations.nodeTypes
REST Resource: v1.projects.locations.operations
REST Resource: v1.projects.locations.privateClouds
REST Resource: v1.projects.locations.privateClouds.clusters
REST Resource: v1.projects.locations.privateClouds.clusters.nodes
REST Resource: v1.projects.locations.privateClouds.externalAddresses
REST Resource: v1.projects.locations.privateClouds.hcxActivationKeys
REST Resource: v1.projects.locations.privateClouds.loggingServers
REST Resource: v1.projects.locations.privateClouds.managementDnsZoneBindings
REST Resource: v1.projects.locations.privateClouds.subnets
REST Resource: v1.projects.locations.privateClouds.upgrades
REST Resource: v1.projects.locations.privateConnections
REST Resource: v1.projects.locations.privateConnections.peeringRoutes
REST Resource: v1.projects.locations.vmwareEngineNetworks
Service: vmwareengine.googleapis.com
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://vmwareengine.googleapis.com
REST Resource: v1.projects.locations
Methods
get
GET /v1/{name=projects/*/locations/*}
Gets information about a location.
getDnsBindPermission
GET /v1/{name=projects/*/locations/*/dnsBindPermission}
Gets all the principals having bind permission on the intranet VPC associated with the consumer project granted by the Grant API.
list
GET /v1/{name=projects/*}/locations
Lists information about the supported locations for this service.
REST Resource: v1.projects.locations.announcements
Methods
get
GET /v1/{name=projects/*/locations/*/announcements/*}
Retrieves a Announcement by its resource name.
list
GET /v1/{parent=projects/*/locations/*}/announcements
Lists Announcements for a given region and project
REST Resource: v1.projects.locations.datastores
Methods
create
POST /v1/{parent=projects/*/locations/*}/datastores
Creates a new Datastore resource in a given project and location.
delete
DELETE /v1/{name=projects/*/locations/*/datastores/*}
Deletes a Datastore resource.
get
GET /v1/{name=projects/*/locations/*/datastores/*}
Retrieves a Datastore resource by its resource name.
list
GET /v1/{parent=projects/*/locations/*}/datastores
Lists Datastore resources in a given project and location.
patch
PATCH /v1/{datastore.name=projects/*/locations/*/datastores/*}
Modifies a Datastore resource.
REST Resource: v1.projects.locations.dnsBindPermission
Methods
grant
POST /v1/{name=projects/*/locations/*/dnsBindPermission}:grant
Grants the bind permission to the customer provided principal(user / service account) to bind their DNS zone with the intranet VPC associated with the project.
revoke
POST /v1/{name=projects/*/locations/*/dnsBindPermission}:revoke
Revokes the bind permission from the customer provided principal(user / service account) on the intranet VPC associated with the consumer project.
REST Resource: v1.projects.locations.networkPeerings
Methods
create
POST /v1/{parent=projects/*/locations/*}/networkPeerings
Creates a new network peering between the peer network and VMware Engine network provided in a NetworkPeering resource.
delete
DELETE /v1/{name=projects/*/locations/*/networkPeerings/*}
Deletes a NetworkPeering resource.
get
GET /v1/{name=projects/*/locations/*/networkPeerings/*}
Retrieves a NetworkPeering resource by its resource name.
list
GET /v1/{parent=projects/*/locations/*}/networkPeerings
Lists NetworkPeering resources in a given project.
patch
PATCH /v1/{networkPeering.name=projects/*/locations/*/networkPeerings/*}
Modifies a NetworkPeering resource.
REST Resource: v1.projects.locations.networkPeerings.peeringRoutes
Methods
list
GET /v1/{parent=projects/*/locations/*/networkPeerings/*}/peeringRoutes
Lists the network peering routes exchanged over a peering connection.
REST Resource: v1.projects.locations.networkPolicies
Methods
create
POST /v1/{parent=projects/*/locations/*}/networkPolicies
Creates a new network policy in a given VMware Engine network of a project and location (region).
delete
DELETE /v1/{name=projects/*/locations/*/networkPolicies/*}
Deletes a NetworkPolicy resource.
fetchExternalAddresses
GET /v1/{networkPolicy=projects/*/locations/*/networkPolicies/*}:fetchExternalAddresses
Lists external IP addresses assigned to VMware workload VMs within the scope of the given network policy.
get
GET /v1/{name=projects/*/locations/*/networkPolicies/*}
Retrieves a NetworkPolicy resource by its resource name.
list
GET /v1/{parent=projects/*/locations/*}/networkPolicies
Lists NetworkPolicy resources in a specified project and location.
patch
PATCH /v1/{networkPolicy.name=projects/*/locations/*/networkPolicies/*}
Modifies a NetworkPolicy resource.
REST Resource: v1.projects.locations.networkPolicies.externalAccessRules
Methods
create
POST /v1/{parent=projects/*/locations/*/networkPolicies/*}/externalAccessRules
Creates a new external access rule in a given network policy.
delete
DELETE /v1/{name=projects/*/locations/*/networkPolicies/*/externalAccessRules/*}
Deletes a single external access rule.
get
GET /v1/{name=projects/*/locations/*/networkPolicies/*/externalAccessRules/*}
Gets details of a single external access rule.
list
GET /v1/{parent=projects/*/locations/*/networkPolicies/*}/externalAccessRules
Lists ExternalAccessRule resources in the specified network policy.
patch
PATCH /v1/{externalAccessRule.name=projects/*/locations/*/networkPolicies/*/externalAccessRules/*}
Updates the parameters of a single external access rule.
REST Resource: v1.projects.locations.nodeTypes
Methods
get
GET /v1/{name=projects/*/locations/*/nodeTypes/*}
Gets details of a single NodeType .
list
GET /v1/{parent=projects/*/locations/*}/nodeTypes
Lists node types
REST Resource: v1.projects.locations.operations
Methods
delete
DELETE /v1/{name=projects/*/locations/*/operations/*}
Deletes a long-running operation.
get
GET /v1/{name=projects/*/locations/*/operations/*}
Gets the latest state of a long-running operation.
list
GET /v1/{name=projects/*/locations/*}/operations
Lists operations that match the specified filter in the request.
REST Resource: v1.projects.locations.privateClouds
Methods
create
POST /v1/{parent=projects/*/locations/*}/privateClouds
Creates a new PrivateCloud resource in a given project and location.
delete
DELETE /v1/{name=projects/*/locations/*/privateClouds/*}
Schedules a PrivateCloud resource for deletion.
get
GET /v1/{name=projects/*/locations/*/privateClouds/*}
Retrieves a PrivateCloud resource by its resource name.
getDnsForwarding
GET /v1/{name=projects/*/locations/*/privateClouds/*/dnsForwarding}
Gets details of the DnsForwarding config.
getIamPolicy
GET /v1/{resource=projects/*/locations/*/privateClouds/*}:getIamPolicy
Gets the access control policy for a resource.
list
GET /v1/{parent=projects/*/locations/*}/privateClouds
Lists PrivateCloud resources in a given project and location.
patch
PATCH /v1/{privateCloud.name=projects/*/locations/*/privateClouds/*}
Modifies a PrivateCloud resource.
privateCloudDeletionNow
POST /v1/{name=projects/*/locations/*/privateClouds/*}:privateCloudDeletionNow
Accelerates the deletion of a private cloud that is currently in soft deletion A PrivateCloud resource in soft deletion has PrivateCloud.state set to SOFT_DELETED and PrivateCloud.expireTime set to the time when deletion can no longer be reversed.
resetNsxCredentials
POST /v1/{privateCloud=projects/*/locations/*/privateClouds/*}:resetNsxCredentials
Resets credentials of the NSX appliance.
resetVcenterCredentials
POST /v1/{privateCloud=projects/*/locations/*/privateClouds/*}:resetVcenterCredentials
Resets credentials of the Vcenter appliance.
setIamPolicy
POST /v1/{resource=projects/*/locations/*/privateClouds/*}:setIamPolicy
Sets the access control policy on the specified resource.
showNsxCredentials
GET /v1/{privateCloud=projects/*/locations/*/privateClouds/*}:showNsxCredentials
Gets details of credentials for NSX appliance.
showVcenterCredentials
GET /v1/{privateCloud=projects/*/locations/*/privateClouds/*}:showVcenterCredentials
Gets details of credentials for Vcenter appliance.
testIamPermissions
POST /v1/{resource=projects/*/locations/*/privateClouds/*}:testIamPermissions
Returns permissions that a caller has on the specified resource.
undelete
POST /v1/{name=projects/*/locations/*/privateClouds/*}:undelete
Restores a private cloud that was previously scheduled for deletion by DeletePrivateCloud .
updateDnsForwarding
PATCH /v1/{dnsForwarding.name=projects/*/locations/*/privateClouds/*/dnsForwarding}
Updates the parameters of the DnsForwarding config, like associated domains.
REST Resource: v1.projects.locations.privateClouds.clusters
Methods
create
POST /v1/{parent=projects/*/locations/*/privateClouds/*}/clusters
Creates a new cluster in a given private cloud.
delete
DELETE /v1/{name=projects/*/locations/*/privateClouds/*/clusters/*}
Deletes a Cluster resource.
get
GET /v1/{name=projects/*/locations/*/privateClouds/*/clusters/*}
Retrieves a Cluster resource by its resource name.
getIamPolicy
GET /v1/{resource=projects/*/locations/*/privateClouds/*/clusters/*}:getIamPolicy
Gets the access control policy for a resource.
list
GET /v1/{parent=projects/*/locations/*/privateClouds/*}/clusters
Lists Cluster resources in a given private cloud.
mountDatastore
POST /v1/{name=projects/*/locations/*/privateClouds/*/clusters/*}:mountDatastore
Mounts a Datastore on a cluster resource
patch
PATCH /v1/{cluster.name=projects/*/locations/*/privateClouds/*/clusters/*}
Modifies a Cluster resource.
setIamPolicy
POST /v1/{resource=projects/*/locations/*/privateClouds/*/clusters/*}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v1/{resource=projects/*/locations/*/privateClouds/*/clusters/*}:testIamPermissions
Returns permissions that a caller has on the specified resource.
unmountDatastore
POST /v1/{name=projects/*/locations/*/privateClouds/*/clusters/*}:unmountDatastore
Unmounts a Datastore on a cluster resource
REST Resource: v1.projects.locations.privateClouds.clusters.nodes
Methods
get
GET /v1/{name=projects/*/locations/*/privateClouds/*/clusters/*/nodes/*}
Gets details of a single node.
list
GET /v1/{parent=projects/*/locations/*/privateClouds/*/clusters/*}/nodes
Lists nodes in a given cluster.
REST Resource: v1.projects.locations.privateClouds.externalAddresses
Methods
create
POST /v1/{parent=projects/*/locations/*/privateClouds/*}/externalAddresses
Creates a new ExternalAddress resource in a given private cloud.
delete
DELETE /v1/{name=projects/*/locations/*/privateClouds/*/externalAddresses/*}
Deletes a single external IP address.
get
GET /v1/{name=projects/*/locations/*/privateClouds/*/externalAddresses/*}
Gets details of a single external IP address.
list
GET /v1/{parent=projects/*/locations/*/privateClouds/*}/externalAddresses
Lists external IP addresses assigned to VMware workload VMs in a given private cloud.
patch
PATCH /v1/{externalAddress.name=projects/*/locations/*/privateClouds/*/externalAddresses/*}
Updates the parameters of a single external IP address.
REST Resource: v1.projects.locations.privateClouds.hcxActivationKeys
Methods
create
POST /v1/{parent=projects/*/locations/*/privateClouds/*}/hcxActivationKeys
Creates a new HCX activation key in a given private cloud.
get
GET /v1/{name=projects/*/locations/*/privateClouds/*/hcxActivationKeys/*}
Retrieves a HcxActivationKey resource by its resource name.
getIamPolicy
GET /v1/{resource=projects/*/locations/*/privateClouds/*/hcxActivationKeys/*}:getIamPolicy
Gets the access control policy for a resource.
list
GET /v1/{parent=projects/*/locations/*/privateClouds/*}/hcxActivationKeys
Lists HcxActivationKey resources in a given private cloud.
setIamPolicy
POST /v1/{resource=projects/*/locations/*/privateClouds/*/hcxActivationKeys/*}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v1/{resource=projects/*/locations/*/privateClouds/*/hcxActivationKeys/*}:testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1.projects.locations.privateClouds.loggingServers
Methods
create
POST /v1/{parent=projects/*/locations/*/privateClouds/*}/loggingServers
Create a new logging server for a given private cloud.
delete
DELETE /v1/{name=projects/*/locations/*/privateClouds/*/loggingServers/*}
Deletes a single logging server.
get
GET /v1/{name=projects/*/locations/*/privateClouds/*/loggingServers/*}
Gets details of a logging server.
list
GET /v1/{parent=projects/*/locations/*/privateClouds/*}/loggingServers
Lists logging servers configured for a given private cloud.
patch
PATCH /v1/{loggingServer.name=projects/*/locations/*/privateClouds/*/loggingServers/*}
Updates the parameters of a single logging server.
REST Resource: v1.projects.locations.privateClouds.managementDnsZoneBindings
Methods
create
POST /v1/{parent=projects/*/locations/*/privateClouds/*}/managementDnsZoneBindings
Creates a new ManagementDnsZoneBinding resource in a private cloud.
delete
DELETE /v1/{name=projects/*/locations/*/privateClouds/*/managementDnsZoneBindings/*}
Deletes a ManagementDnsZoneBinding resource.
get
GET /v1/{name=projects/*/locations/*/privateClouds/*/managementDnsZoneBindings/*}
Retrieves a 'ManagementDnsZoneBinding' resource by its resource name.
list
GET /v1/{parent=projects/*/locations/*/privateClouds/*}/managementDnsZoneBindings
Lists Consumer VPCs bound to Management DNS Zone of a given private cloud.
patch
PATCH /v1/{managementDnsZoneBinding.name=projects/*/locations/*/privateClouds/*/managementDnsZoneBindings/*}
Updates a ManagementDnsZoneBinding resource.
repair
POST /v1/{name=projects/*/locations/*/privateClouds/*/managementDnsZoneBindings/*}:repair
Retries to create a ManagementDnsZoneBinding resource that is in failed state.
REST Resource: v1.projects.locations.privateClouds.subnets
Methods
get
GET /v1/{name=projects/*/locations/*/privateClouds/*/subnets/*}
Gets details of a single subnet.
list
GET /v1/{parent=projects/*/locations/*/privateClouds/*}/subnets
Lists subnets in a given private cloud.
patch
PATCH /v1/{subnet.name=projects/*/locations/*/privateClouds/*/subnets/*}
Updates the parameters of a single subnet.
REST Resource: v1.projects.locations.privateClouds.upgrades
Methods
get
GET /v1/{name=projects/*/locations/*/privateClouds/*/upgrades/*}
Retrieves a private cloud Upgrade resource by its resource name.
list
GET /v1/{parent=projects/*/locations/*/privateClouds/*}/upgrades
Lists past, ongoing and upcoming Upgrades for the given private cloud.
patch
PATCH /v1/{upgrade.name=projects/*/locations/*/privateClouds/*/upgrades/*}
Update the private cloud Upgrade resource.
REST Resource: v1.projects.locations.privateConnections
Methods
create
POST /v1/{parent=projects/*/locations/*}/privateConnections
Creates a new private connection that can be used for accessing private Clouds.
delete
DELETE /v1/{name=projects/*/locations/*/privateConnections/*}
Deletes a PrivateConnection resource.
get
GET /v1/{name=projects/*/locations/*/privateConnections/*}
Retrieves a PrivateConnection resource by its resource name.
list
GET /v1/{parent=projects/*/locations/*}/privateConnections
Lists PrivateConnection resources in a given project and location.
patch
PATCH /v1/{privateConnection.name=projects/*/locations/*/privateConnections/*}
Modifies a PrivateConnection resource.
REST Resource: v1.projects.locations.privateConnections.peeringRoutes
Methods
list
GET /v1/{parent=projects/*/locations/*/privateConnections/*}/peeringRoutes
Lists the private connection routes exchanged over a peering connection.
REST Resource: v1.projects.locations.vmwareEngineNetworks
Methods
create
POST /v1/{parent=projects/*/locations/*}/vmwareEngineNetworks
Creates a new VMware Engine network that can be used by a private cloud.
delete
DELETE /v1/{name=projects/*/locations/*/vmwareEngineNetworks/*}
Deletes a VmwareEngineNetwork resource.
get
GET /v1/{name=projects/*/locations/*/vmwareEngineNetworks/*}
Retrieves a VmwareEngineNetwork resource by its resource name.
list
GET /v1/{parent=projects/*/locations/*}/vmwareEngineNetworks
Lists VmwareEngineNetwork resources in a given project and location.
patch
PATCH /v1/{vmwareEngineNetwork.name=projects/*/locations/*/vmwareEngineNetworks/*}
Modifies a VMware Engine network resource.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-11 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-11 UTC."],[],[]]
