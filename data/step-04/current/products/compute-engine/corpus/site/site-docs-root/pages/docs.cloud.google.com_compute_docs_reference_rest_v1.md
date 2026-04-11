---
title: "Compute Engine API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/compute/docs/reference/rest/v1
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/compute/docs
source_metadata:
  url: https://docs.cloud.google.com/compute/docs/reference/rest/v1
  title: "Compute Engine API \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Compute
Compute Engine
APIs & Reference
Send feedback
Compute Engine API
Stay organized with collections
Save and categorize content based on your preferences.
Creates and runs virtual machines on Google Cloud Platform.
REST Resource: v1.acceleratorTypes
REST Resource: v1.addresses
REST Resource: v1.advice
REST Resource: v1.autoscalers
REST Resource: v1.backendBuckets
REST Resource: v1.backendServices
REST Resource: v1.crossSiteNetworks
REST Resource: v1.diskTypes
REST Resource: v1.disks
REST Resource: v1.externalVpnGateways
REST Resource: v1.firewallPolicies
REST Resource: v1.firewalls
REST Resource: v1.forwardingRules
REST Resource: v1.futureReservations
REST Resource: v1.globalAddresses
REST Resource: v1.globalForwardingRules
REST Resource: v1.globalNetworkEndpointGroups
REST Resource: v1.globalOperations
REST Resource: v1.globalOrganizationOperations
REST Resource: v1.globalPublicDelegatedPrefixes
REST Resource: v1.healthChecks
REST Resource: v1.httpHealthChecks
REST Resource: v1.httpsHealthChecks
REST Resource: v1.imageFamilyViews
REST Resource: v1.images
REST Resource: v1.instanceGroupManagerResizeRequests
REST Resource: v1.instanceGroupManagers
REST Resource: v1.instanceGroups
REST Resource: v1.instanceSettings
REST Resource: v1.instanceTemplates
REST Resource: v1.instances
REST Resource: v1.instantSnapshots
REST Resource: v1.interconnectAttachmentGroups
REST Resource: v1.interconnectAttachments
REST Resource: v1.interconnectGroups
REST Resource: v1.interconnectLocations
REST Resource: v1.interconnectRemoteLocations
REST Resource: v1.interconnects
REST Resource: v1.licenseCodes
REST Resource: v1.licenses
REST Resource: v1.machineImages
REST Resource: v1.machineTypes
REST Resource: v1.networkAttachments
REST Resource: v1.networkEdgeSecurityServices
REST Resource: v1.networkEndpointGroups
REST Resource: v1.networkFirewallPolicies
REST Resource: v1.networkProfiles
REST Resource: v1.networks
REST Resource: v1.nodeGroups
REST Resource: v1.nodeTemplates
REST Resource: v1.nodeTypes
REST Resource: v1.organizationSecurityPolicies
REST Resource: v1.packetMirrorings
REST Resource: v1.previewFeatures
REST Resource: v1.projects
REST Resource: v1.publicAdvertisedPrefixes
REST Resource: v1.publicDelegatedPrefixes
REST Resource: v1.regionAutoscalers
REST Resource: v1.regionBackendBuckets
REST Resource: v1.regionBackendServices
REST Resource: v1.regionCommitments
REST Resource: v1.regionCompositeHealthChecks
REST Resource: v1.regionDiskTypes
REST Resource: v1.regionDisks
REST Resource: v1.regionHealthAggregationPolicies
REST Resource: v1.regionHealthCheckServices
REST Resource: v1.regionHealthChecks
REST Resource: v1.regionHealthSources
REST Resource: v1.regionInstanceGroupManagerResizeRequests
REST Resource: v1.regionInstanceGroupManagers
REST Resource: v1.regionInstanceGroups
REST Resource: v1.regionInstanceTemplates
REST Resource: v1.regionInstances
REST Resource: v1.regionInstantSnapshots
REST Resource: v1.regionNetworkEndpointGroups
REST Resource: v1.regionNetworkFirewallPolicies
REST Resource: v1.regionNotificationEndpoints
REST Resource: v1.regionOperations
REST Resource: v1.regionSecurityPolicies
REST Resource: v1.regionSslCertificates
REST Resource: v1.regionSslPolicies
REST Resource: v1.regionTargetHttpProxies
REST Resource: v1.regionTargetHttpsProxies
REST Resource: v1.regionTargetTcpProxies
REST Resource: v1.regionUrlMaps
REST Resource: v1.regionZones
REST Resource: v1.regions
REST Resource: v1.reservationBlocks
REST Resource: v1.reservationSlots
REST Resource: v1.reservationSubBlocks
REST Resource: v1.reservations
REST Resource: v1.resourcePolicies
REST Resource: v1.routers
REST Resource: v1.routes
REST Resource: v1.securityPolicies
REST Resource: v1.serviceAttachments
REST Resource: v1.snapshotSettings
REST Resource: v1.snapshots
REST Resource: v1.sslCertificates
REST Resource: v1.sslPolicies
REST Resource: v1.storagePoolTypes
REST Resource: v1.storagePools
REST Resource: v1.subnetworks
REST Resource: v1.targetGrpcProxies
REST Resource: v1.targetHttpProxies
REST Resource: v1.targetHttpsProxies
REST Resource: v1.targetInstances
REST Resource: v1.targetPools
REST Resource: v1.targetSslProxies
REST Resource: v1.targetTcpProxies
REST Resource: v1.targetVpnGateways
REST Resource: v1.urlMaps
REST Resource: v1.vpnGateways
REST Resource: v1.vpnTunnels
REST Resource: v1.wireGroups
REST Resource: v1.zoneOperations
REST Resource: v1.zoneVmExtensionPolicies
REST Resource: v1.zones
Service: compute.googleapis.com
To call this service, we recommend that you use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery document:
https://www.googleapis.com/discovery/v1/apis/compute/v1/rest
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://compute.googleapis.com
REST Resource: v1.acceleratorTypes
Methods
aggregatedList
GET /compute/v1/projects/{project}/aggregated/acceleratorTypes
Retrieves an aggregated list of accelerator types.
get
GET /compute/v1/projects/{project}/zones/{zone}/acceleratorTypes/{acceleratorType}
Returns the specified accelerator type.
list
GET /compute/v1/projects/{project}/zones/{zone}/acceleratorTypes
Retrieves a list of accelerator types that are available to the specified project.
REST Resource: v1.addresses
Methods
aggregatedList
GET /compute/v1/projects/{project}/aggregated/addresses
Retrieves an aggregated list of addresses.
delete
DELETE /compute/v1/projects/{project}/regions/{region}/addresses/{address}
Deletes the specified address resource.
get
GET /compute/v1/projects/{project}/regions/{region}/addresses/{address}
Returns the specified address resource.
insert
POST /compute/v1/projects/{project}/regions/{region}/addresses
Creates an address resource in the specified project by using the data included in the request.
list
GET /compute/v1/projects/{project}/regions/{region}/addresses
Retrieves a list of addresses contained within the specified region.
move
POST /compute/v1/projects/{project}/regions/{region}/addresses/{address}/move
Moves the specified address resource.
setLabels
POST /compute/v1/projects/{project}/regions/{region}/addresses/{resource}/setLabels
Sets the labels on an Address.
testIamPermissions
POST /compute/v1/projects/{project}/regions/{region}/addresses/{resource}/testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1.advice
Methods
calendarMode
POST /compute/v1/projects/{project}/regions/{region}/advice/calendarMode
Advise how, where and when to create the requested amount of instances with specified accelerators, within the specified time and location limits.
REST Resource: v1.autoscalers
Methods
aggregatedList
GET /compute/v1/projects/{project}/aggregated/autoscalers
Retrieves an aggregated list of autoscalers.
delete
DELETE /compute/v1/projects/{project}/zones/{zone}/autoscalers/{autoscaler}
Deletes the specified autoscaler.
get
GET /compute/v1/projects/{project}/zones/{zone}/autoscalers/{autoscaler}
Returns the specified autoscaler resource.
insert
POST /compute/v1/projects/{project}/zones/{zone}/autoscalers
Creates an autoscaler in the specified project using the data included in the request.
list
GET /compute/v1/projects/{project}/zones/{zone}/autoscalers
Retrieves a list of autoscalers contained within the specified zone.
patch
PATCH /compute/v1/projects/{project}/zones/{zone}/autoscalers
Updates an autoscaler in the specified project using the data included in the request.
testIamPermissions
POST /compute/v1/projects/{project}/zones/{zone}/autoscalers/{resource}/testIamPermissions
Returns permissions that a caller has on the specified resource.
update
PUT /compute/v1/projects/{project}/zones/{zone}/autoscalers
Updates an autoscaler in the specified project using the data included in the request.
REST Resource: v1.backendBuckets
Methods
addSignedUrlKey
POST /compute/v1/projects/{project}/global/backendBuckets/{backendBucket}/addSignedUrlKey
Adds a key for validating requests with signed URLs for this backend bucket.
aggregatedList
GET /compute/v1/projects/{project}/aggregated/backendBuckets
Retrieves the list of all BackendBucket resources, regional and global, available to the specified project.
delete
DELETE /compute/v1/projects/{project}/global/backendBuckets/{backendBucket}
Deletes the specified BackendBucket resource.
deleteSignedUrlKey
POST /compute/v1/projects/{project}/global/backendBuckets/{backendBucket}/deleteSignedUrlKey
Deletes a key for validating requests with signed URLs for this backend bucket.
get
GET /compute/v1/projects/{project}/global/backendBuckets/{backendBucket}
Returns the specified BackendBucket resource.
getIamPolicy
GET /compute/v1/projects/{project}/global/backendBuckets/{resource}/getIamPolicy
Gets the access control policy for a resource.
insert
POST /compute/v1/projects/{project}/global/backendBuckets
Creates a BackendBucket resource in the specified project using the data included in the request.
list
GET /compute/v1/projects/{project}/global/backendBuckets
Retrieves the list of BackendBucket resources available to the specified project.
listUsable
GET /compute/v1/projects/{project}/global/backendBuckets/listUsable
Retrieves a list of all usable backend buckets in the specified project.
patch
PATCH /compute/v1/projects/{project}/global/backendBuckets/{backendBucket}
Updates the specified BackendBucket resource with the data included in the request.
setEdgeSecurityPolicy
POST /compute/v1/projects/{project}/global/backendBuckets/{backendBucket}/setEdgeSecurityPolicy
Sets the edge security policy for the specified backend bucket.
setIamPolicy
POST /compute/v1/projects/{project}/global/backendBuckets/{resource}/setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /compute/v1/projects/{project}/global/backendBuckets/{resource}/testIamPermissions
Returns permissions that a caller has on the specified resource.
update
PUT /compute/v1/projects/{project}/global/backendBuckets/{backendBucket}
Updates the specified BackendBucket resource with the data included in the request.
REST Resource: v1.backendServices
Methods
addSignedUrlKey
POST /compute/v1/projects/{project}/global/backendServices/{backendService}/addSignedUrlKey
Adds a key for validating requests with signed URLs for this backend service.
aggregatedList
GET /compute/v1/projects/{project}/aggregated/backendServices
Retrieves the list of all BackendService resources, regional and global, available to the specified project.
delete
DELETE /compute/v1/projects/{project}/global/backendServices/{backendService}
Deletes the specified BackendService resource.
deleteSignedUrlKey
POST /compute/v1/projects/{project}/global/backendServices/{backendService}/deleteSignedUrlKey
Deletes a key for validating requests with signed URLs for this backend service.
get
GET /compute/v1/projects/{project}/global/backendServices/{backendService}
Returns the specified BackendService resource.
getEffectiveSecurityPolicies
GET /compute/v1/projects/{project}/global/backendServices/{backendService}/getEffectiveSecurityPolicies
Returns effective security policies applied to this backend service.
getHealth
POST /compute/v1/projects/{project}/global/backendServices/{backendService}/getHealth
Gets the most recent health check results for this BackendService.
getIamPolicy
GET /compute/v1/projects/{project}/global/backendServices/{resource}/getIamPolicy
Gets the access control policy for a resource.
insert
POST /compute/v1/projects/{project}/global/backendServices
Creates a BackendService resource in the specified project using the data included in the request.
list
GET /compute/v1/projects/{project}/global/backendServices
Retrieves the list of BackendService resources available to the specified project.
listUsable
GET /compute/v1/projects/{project}/global/backendServices/listUsable
Retrieves a list of all usable backend services in the specified project.
patch
PATCH /compute/v1/projects/{project}/global/backendServices/{backendService}
Patches the specified BackendService resource with the data included in the request.
setEdgeSecurityPolicy
POST /compute/v1/projects/{project}/global/backendServices/{backendService}/setEdgeSecurityPolicy
Sets the edge security policy for the specified backend service.
setIamPolicy
POST /compute/v1/projects/{project}/global/backendServices/{resource}/setIamPolicy
Sets the access control policy on the specified resource.
setSecurityPolicy
POST /compute/v1/projects/{project}/global/backendServices/{backendService}/setSecurityPolicy
Sets the Google Cloud Armor security policy for the specified backend service.
testIamPermissions
POST /compute/v1/projects/{project}/global/backendServices/{resource}/testIamPermissions
Returns permissions that a caller has on the specified resource.
update
PUT /compute/v1/projects/{project}/global/backendServices/{backendService}
Updates the specified BackendService resource with the data included in the request.
REST Resource: v1.crossSiteNetworks
Methods
delete
DELETE /compute/v1/projects/{project}/global/crossSiteNetworks/{crossSiteNetwork}
Deletes the specified cross-site network in the given scope.
get
GET /compute/v1/projects/{project}/global/crossSiteNetworks/{crossSiteNetwork}
Returns the specified cross-site network in the given scope.
insert
POST /compute/v1/projects/{project}/global/crossSiteNetworks
Creates a cross-site network in the specified project in the given scope using the parameters that are included in the request.
list
GET /compute/v1/projects/{project}/global/crossSiteNetworks
Lists the cross-site networks for a project in the given scope.
patch
PATCH /compute/v1/projects/{project}/global/crossSiteNetworks/{crossSiteNetwork}
Updates the specified cross-site network with the data included in the request.
REST Resource: v1.diskTypes
Methods
aggregatedList
GET /compute/v1/projects/{project}/aggregated/diskTypes
Retrieves an aggregated list of disk types.
get
GET /compute/v1/projects/{project}/zones/{zone}/diskTypes/{diskType}
Returns the specified disk type.
list
GET /compute/v1/projects/{project}/zones/{zone}/diskTypes
Retrieves a list of disk types available to the specified project.
REST Resource: v1.disks
Methods
addResourcePolicies
POST /compute/v1/projects/{project}/zones/{zone}/disks/{disk}/addResourcePolicies
Adds existing resource policies to a disk.
aggregatedList
GET /compute/v1/projects/{project}/aggregated/disks
Retrieves an aggregated list of persistent disks.
bulkInsert
POST /compute/v1/projects/{project}/zones/{zone}/disks/bulkInsert
Bulk create a set of disks.
bulkSetLabels
POST /compute/v1/projects/{project}/zones/{zone}/disks/bulkSetLabels
Sets the labels on many disks at once.
createSnapshot
POST /compute/v1/projects/{project}/zones/{zone}/disks/{disk}/createSnapshot
Creates a snapshot of a specified persistent disk.
delete
DELETE /compute/v1/projects/{project}/zones/{zone}/disks/{disk}
Deletes the specified persistent disk.
get
GET /compute/v1/projects/{project}/zones/{zone}/disks/{disk}
Returns the specified persistent disk.
getIamPolicy
GET /compute/v1/projects/{project}/zones/{zone}/disks/{resource}/getIamPolicy
Gets the access control policy for a resource.
insert
POST /compute/v1/projects/{project}/zones/{zone}/disks
Creates a persistent disk in the specified project using the data in the request.
list
GET /compute/v1/projects/{project}/zones/{zone}/disks
Retrieves a list of persistent disks contained within the specified zone.
removeResourcePolicies
POST /compute/v1/projects/{project}/zones/{zone}/disks/{disk}/removeResourcePolicies
Removes resource policies from a disk.
resize
POST /compute/v1/projects/{project}/zones/{zone}/disks/{disk}/resize
Resizes the specified persistent disk.
setIamPolicy
POST /compute/v1/projects/{project}/zones/{zone}/disks/{resource}/setIamPolicy
Sets the access control policy on the specified resource.
setLabels
POST /compute/v1/projects/{project}/zones/{zone}/disks/{resource}/setLabels
Sets the labels on a disk.
startAsyncReplication
POST /compute/v1/projects/{project}/zones/{zone}/disks/{disk}/startAsyncReplication
Starts asynchronous replication.
stopAsyncReplication
POST /compute/v1/projects/{project}/zones/{zone}/disks/{disk}/stopAsyncReplication
Stops asynchronous replication.
stopGroupAsyncReplication
POST /compute/v1/projects/{project}/zones/{zone}/disks/stopGroupAsyncReplication
Stops asynchronous replication for a consistency group of disks.
testIamPermissions
POST /compute/v1/projects/{project}/zones/{zone}/disks/{resource}/testIamPermissions
Returns permissions that a caller has on the specified resource.
update
PATCH /compute/v1/projects/{project}/zones/{zone}/disks/{disk}
Updates the specified disk with the data included in the request.
updateKmsKey
POST /compute/v1/projects/{project}/zones/{zone}/disks/{disk}/updateKmsKey
Rotates the customer-managed encryption key to the latest version for the specified persistent disk.
REST Resource: v1.externalVpnGateways
Methods
delete
DELETE /compute/v1/projects/{project}/global/externalVpnGateways/{externalVpnGateway}
Deletes the specified externalVpnGateway.
get
GET /compute/v1/projects/{project}/global/externalVpnGateways/{externalVpnGateway}
Returns the specified externalVpnGateway.
insert
POST /compute/v1/projects/{project}/global/externalVpnGateways
Creates a ExternalVpnGateway in the specified project using the data included in the request.
list
GET /compute/v1/projects/{project}/global/externalVpnGateways
Retrieves the list of ExternalVpnGateway available to the specified project.
setLabels
POST /compute/v1/projects/{project}/global/externalVpnGateways/{resource}/setLabels
Sets the labels on an ExternalVpnGateway.
testIamPermissions
POST /compute/v1/projects/{project}/global/externalVpnGateways/{resource}/testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1.firewallPolicies
Methods
addAssociation
POST /compute/v1/locations/global/{firewallPolicy=firewallPolicies/*}/addAssociation
Inserts an association for the specified firewall policy.
addRule
POST /compute/v1/locations/global/{firewallPolicy=firewallPolicies/*}/addRule
Inserts a rule into a firewall policy.
cloneRules
POST /compute/v1/locations/global/{firewallPolicy=firewallPolicies/*}/cloneRules
Copies rules to the specified firewall policy.
delete
DELETE /compute/v1/locations/global/{firewallPolicy=firewallPolicies/*}
Deletes the specified policy.
get
GET /compute/v1/locations/global/{firewallPolicy=firewallPolicies/*}
Returns the specified firewall policy.
getAssociation
GET /compute/v1/locations/global/{firewallPolicy=firewallPolicies/*}/getAssociation
Gets an association with the specified name.
getIamPolicy
GET /compute/v1/locations/global/{resource=firewallPolicies/*}/getIamPolicy
Gets the access control policy for a resource.
getRule
GET /compute/v1/locations/global/{firewallPolicy=firewallPolicies/*}/getRule
Gets a rule of the specified priority.
insert
POST /compute/v1/locations/global/firewallPolicies
Creates a new policy in the specified project using the data included in the request.
list
GET /compute/v1/locations/global/firewallPolicies
Lists all the policies that have been configured for the specified folder or organization.
listAssociations
GET /compute/v1/locations/global/firewallPolicies/listAssociations
Lists associations of a specified target, i.e., organization or folder.
move
POST /compute/v1/locations/global/{firewallPolicy=firewallPolicies/*}/move
Moves the specified firewall policy.
patch
PATCH /compute/v1/locations/global/{firewallPolicy=firewallPolicies/*}
Patches the specified policy with the data included in the request.
patchRule
POST /compute/v1/locations/global/{firewallPolicy=firewallPolicies/*}/patchRule
Patches a rule of the specified priority.
removeAssociation
POST /compute/v1/locations/global/{firewallPolicy=firewallPolicies/*}/removeAssociation
Removes an association for the specified firewall policy.
removeRule
POST /compute/v1/locations/global/{firewallPolicy=firewallPolicies/*}/removeRule
Deletes a rule of the specified priority.
setIamPolicy
POST /compute/v1/locations/global/{resource=firewallPolicies/*}/setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /compute/v1/locations/global/{resource=firewallPolicies/*}/testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1.firewalls
Methods
delete
DELETE /compute/v1/projects/{project}/global/firewalls/{firewall}
Deletes the specified firewall.
get
GET /compute/v1/projects/{project}/global/firewalls/{firewall}
Returns the specified firewall.
insert
POST /compute/v1/projects/{project}/global/firewalls
Creates a firewall rule in the specified project using the data included in the request.
list
GET /compute/v1/projects/{project}/global/firewalls
Retrieves the list of firewall rules available to the specified project.
patch
PATCH /compute/v1/projects/{project}/global/firewalls/{firewall}
Updates the specified firewall rule with the data included in the request.
testIamPermissions
POST /compute/v1/projects/{project}/global/firewalls/{resource}/testIamPermissions
Returns permissions that a caller has on the specified resource.
update
PUT /compute/v1/projects/{project}/global/firewalls/{firewall}
Updates the specified firewall rule with the data included in the request.
REST Resource: v1.forwardingRules
Methods
aggregatedList
GET /compute/v1/projects/{project}/aggregated/forwardingRules
Retrieves an aggregated list of forwarding rules.
delete
DELETE /compute/v1/projects/{project}/regions/{region}/forwardingRules/{forwardingRule}
Deletes the specified ForwardingRule resource.
get
GET /compute/v1/projects/{project}/regions/{region}/forwardingRules/{forwardingRule}
Returns the specified ForwardingRule resource.
insert
POST /compute/v1/projects/{project}/regions/{region}/forwardingRules
Creates a ForwardingRule resource in the specified project and region using the data included in the request.
list
GET /compute/v1/projects/{project}/regions/{region}/forwardingRules
Retrieves a list of ForwardingRule resources available to the specified project and region.
patch
PATCH /compute/v1/projects/{project}/regions/{region}/forwardingRules/{forwardingRule}
Updates the specified forwarding rule with the data included in the request.
setLabels
POST /compute/v1/projects/{project}/regions/{region}/forwardingRules/{resource}/setLabels
Sets the labels on the specified resource.
setTarget
POST /compute/v1/projects/{project}/regions/{region}/forwardingRules/{forwardingRule}/setTarget
Changes target URL for forwarding rule.
REST Resource: v1.futureReservations
Methods
aggregatedList
GET /compute/v1/projects/{project}/aggregated/futureReservations
Retrieves an aggregated list of future reservations.
cancel
POST /compute/v1/projects/{project}/zones/{zone}/futureReservations/{futureReservation}/cancel
Cancel the specified future reservation.
delete
DELETE /compute/v1/projects/{project}/zones/{zone}/futureReservations/{futureReservation}
Deletes the specified future reservation.
get
GET /compute/v1/projects/{project}/zones/{zone}/futureReservations/{futureReservation}
Retrieves information about the specified future reservation.
insert
POST /compute/v1/projects/{project}/zones/{zone}/futureReservations
Creates a new Future Reservation.
list
GET /compute/v1/projects/{project}/zones/{zone}/futureReservations
A list of all the future reservations that have been configured for the specified project in specified zone.
update
PATCH /compute/v1/projects/{project}/zones/{zone}/futureReservations/{futureReservation}
Updates the specified future reservation.
REST Resource: v1.globalAddresses
Methods
delete
DELETE /compute/v1/projects/{project}/global/addresses/{address}
Deletes the specified address resource.
get
GET /compute/v1/projects/{project}/global/addresses/{address}
Returns the specified address resource.
insert
POST /compute/v1/projects/{project}/global/addresses
Creates an address resource in the specified project by using the data included in the request.
list
GET /compute/v1/projects/{project}/global/addresses
Retrieves a list of global addresses.
move
POST /compute/v1/projects/{project}/global/addresses/{address}/move
Moves the specified address resource from one project to another project.
setLabels
POST /compute/v1/projects/{project}/global/addresses/{resource}/setLabels
Sets the labels on a GlobalAddress.
testIamPermissions
POST /compute/v1/projects/{project}/global/addresses/{resource}/testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1.globalForwardingRules
Methods
delete
DELETE /compute/v1/projects/{project}/global/forwardingRules/{forwardingRule}
Deletes the specified GlobalForwardingRule resource.
get
GET /compute/v1/projects/{project}/global/forwardingRules/{forwardingRule}
Returns the specified GlobalForwardingRule resource.
insert
POST /compute/v1/projects/{project}/global/forwardingRules
Creates a GlobalForwardingRule resource in the specified project using the data included in the request.
list
GET /compute/v1/projects/{project}/global/forwardingRules
Retrieves a list of GlobalForwardingRule resources available to the specified project.
patch
PATCH /compute/v1/projects/{project}/global/forwardingRules/{forwardingRule}
Updates the specified forwarding rule with the data included in the request.
setLabels
POST /compute/v1/projects/{project}/global/forwardingRules/{resource}/setLabels
Sets the labels on the specified resource.
setTarget
POST /compute/v1/projects/{project}/global/forwardingRules/{forwardingRule}/setTarget
Changes target URL for the GlobalForwardingRule resource.
REST Resource: v1.globalNetworkEndpointGroups
Methods
attachNetworkEndpoints
POST /compute/v1/projects/{project}/global/networkEndpointGroups/{networkEndpointGroup}/attachNetworkEndpoints
Attach a network endpoint to the specified network endpoint group.
delete
DELETE /compute/v1/projects/{project}/global/networkEndpointGroups/{networkEndpointGroup}
Deletes the specified network endpoint group.Note that the NEG cannot be deleted if there are backend services referencing it.
detachNetworkEndpoints
POST /compute/v1/projects/{project}/global/networkEndpointGroups/{networkEndpointGroup}/detachNetworkEndpoints
Detach the network endpoint from the specified network endpoint group.
get
GET /compute/v1/projects/{project}/global/networkEndpointGroups/{networkEndpointGroup}
Returns the specified network endpoint group.
insert
POST /compute/v1/projects/{project}/global/networkEndpointGroups
Creates a network endpoint group in the specified project using the parameters that are included in the request.
list
GET /compute/v1/projects/{project}/global/networkEndpointGroups
Retrieves the list of network endpoint groups that are located in the specified project.
listNetworkEndpoints
POST /compute/v1/projects/{project}/global/networkEndpointGroups/{networkEndpointGroup}/listNetworkEndpoints
Lists the network endpoints in the specified network endpoint group.
REST Resource: v1.globalOperations
Methods
aggregatedList
GET /compute/v1/projects/{project}/aggregated/operations
Retrieves an aggregated list of all operations.
delete
DELETE /compute/v1/projects/{project}/global/operations/{operation}
Deletes the specified Operations resource.
get
GET /compute/v1/projects/{project}/global/operations/{operation}
Retrieves the specified Operations resource.
list
GET /compute/v1/projects/{project}/global/operations
Retrieves a list of Operation resources contained within the specified project.
wait
POST /compute/v1/projects/{project}/global/operations/{operation}/wait
Waits for the specified Operation resource to return as DONE or for the request to approach the 2 minute deadline, and retrieves the specified Operation resource.
REST Resource: v1.globalOrganizationOperations
Methods
delete
DELETE /compute/v1/locations/global/operations/{operation}
Deletes the specified Operations resource.
get
GET /compute/v1/locations/global/operations/{operation}
Retrieves the specified Operations resource.
list
GET /compute/v1/locations/global/operations
Retrieves a list of Operation resources contained within the specified organization.
REST Resource: v1.globalPublicDelegatedPrefixes
Methods
delete
DELETE /compute/v1/projects/{project}/global/publicDelegatedPrefixes/{publicDelegatedPrefix}
Deletes the specified global PublicDelegatedPrefix.
get
GET /compute/v1/projects/{project}/global/publicDelegatedPrefixes/{publicDelegatedPrefix}
Returns the specified global PublicDelegatedPrefix resource.
insert
POST /compute/v1/projects/{project}/global/publicDelegatedPrefixes
Creates a global PublicDelegatedPrefix in the specified project using the parameters that are included in the request.
list
GET /compute/v1/projects/{project}/global/publicDelegatedPrefixes
Lists the global PublicDelegatedPrefixes for a project.
patch
PATCH /compute/v1/projects/{project}/global/publicDelegatedPrefixes/{publicDelegatedPrefix}
Patches the specified global PublicDelegatedPrefix resource with the data included in the request.
REST Resource: v1.healthChecks
Methods
aggregatedList
GET /compute/v1/projects/{project}/aggregated/healthChecks
Retrieves the list of all HealthCheck resources, regional and global, available to the specified project.
delete
DELETE /compute/v1/projects/{project}/global/healthChecks/{healthCheck}
Deletes the specified HealthCheck resource.
get
GET /compute/v1/projects/{project}/global/healthChecks/{healthCheck}
Returns the specified HealthCheck resource.
insert
POST /compute/v1/projects/{project}/global/healthChecks
Creates a HealthCheck resource in the specified project using the data included in the request.
list
GET /compute/v1/projects/{project}/global/healthChecks
Retrieves the list of HealthCheck resources available to the specified project.
patch
PATCH /compute/v1/projects/{project}/global/healthChecks/{healthCheck}
Updates a HealthCheck resource in the specified project using the data included in the request.
testIamPermissions
POST /compute/v1/projects/{project}/global/healthChecks/{resource}/testIamPermissions
Returns permissions that a caller has on the specified resource.
update
PUT /compute/v1/projects/{project}/global/healthChecks/{healthCheck}
Updates a HealthCheck resource in the specified project using the data included in the request.
REST Resource: v1.httpHealthChecks
Methods
delete
DELETE /compute/v1/projects/{project}/global/httpHealthChecks/{httpHealthCheck}
Deletes the specified HttpHealthCheck resource.
get
GET /compute/v1/projects/{project}/global/httpHealthChecks/{httpHealthCheck}
Returns the specified HttpHealthCheck resource.
insert
POST /compute/v1/projects/{project}/global/httpHealthChecks
Creates a HttpHealthCheck resource in the specified project using the data included in the request.
list
GET /compute/v1/projects/{project}/global/httpHealthChecks
Retrieves the list of HttpHealthCheck resources available to the specified project.
patch
PATCH /compute/v1/projects/{project}/global/httpHealthChecks/{httpHealthCheck}
Updates a HttpHealthCheck resource in the specified project using the data included in the request.
testIamPermissions
POST /compute/v1/projects/{project}/global/httpHealthChecks/{resource}/testIamPermissions
Returns permissions that a caller has on the specified resource.
update
PUT /compute/v1/projects/{project}/global/httpHealthChecks/{httpHealthCheck}
Updates a HttpHealthCheck resource in the specified project using the data included in the request.
REST Resource: v1.httpsHealthChecks
Methods
delete
DELETE /compute/v1/projects/{project}/global/httpsHealthChecks/{httpsHealthCheck}
Deletes the specified HttpsHealthCheck resource.
get
GET /compute/v1/projects/{project}/global/httpsHealthChecks/{httpsHealthCheck}
Returns the specified HttpsHealthCheck resource.
insert
POST /compute/v1/projects/{project}/global/httpsHealthChecks
Creates a HttpsHealthCheck resource in the specified project using the data included in the request.
list
GET /compute/v1/projects/{project}/global/httpsHealthChecks
Retrieves the list of HttpsHealthCheck resources available to the specified project.
patch
PATCH /compute/v1/projects/{project}/global/httpsHealthChecks/{httpsHealthCheck}
Updates a HttpsHealthCheck resource in the specified project using the data included in the request.
testIamPermissions
POST /compute/v1/projects/{project}/global/httpsHealthChecks/{resource}/testIamPermissions
Returns permissions that a caller has on the specified resource.
update
PUT /compute/v1/projects/{project}/global/httpsHealthChecks/{httpsHealthCheck}
Updates a HttpsHealthCheck resource in the specified project using the data included in the request.
REST Resource: v1.imageFamilyViews
Methods
get
GET /compute/v1/projects/{project}/zones/{zone}/imageFamilyViews/{family}
Returns the latest image that is part of an image family, is not deprecated and is rolled out in the specified zone.
REST Resource: v1.images
Methods
delete
DELETE /compute/v1/projects/{project}/global/images/{image}
Deletes the specified image.
deprecate
POST /compute/v1/projects/{project}/global/images/{image}/deprecate
Sets the deprecation status of an image.
get
GET /compute/v1/projects/{project}/global/images/{image}
Returns the specified image.
getFromFamily
GET /compute/v1/projects/{project}/global/images/family/{family}
Returns the latest image that is part of an image family and is not deprecated.
getIamPolicy
GET /compute/v1/projects/{project}/global/images/{resource}/getIamPolicy
Gets the access control policy for a resource.
insert
POST /compute/v1/projects/{project}/global/images
Creates an image in the specified project using the data included in the request.
list
GET /compute/v1/projects/{project}/global/images
Retrieves the list of custom images available to the specified project.
patch
PATCH /compute/v1/projects/{project}/global/images/{image}
Patches the specified image with the data included in the request.
setIamPolicy
POST /compute/v1/projects/{project}/global/images/{resource}/setIamPolicy
Sets the access control policy on the specified resource.
setLabels
POST /compute/v1/projects/{project}/global/images/{resource}/setLabels
Sets the labels on an image.
testIamPermissions
POST /compute/v1/projects/{project}/global/images/{resource}/testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1.instanceGroupManagerResizeRequests
Methods
cancel
POST /compute/v1/projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/resizeRequests/{resizeRequest}/cancel
Cancels the specified resize request and removes it from the queue.
delete
DELETE /compute/v1/projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/resizeRequests/{resizeRequest}
Deletes the specified, inactive resize request.
get
GET /compute/v1/projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/resizeRequests/{resizeRequest}
Returns all of the details about the specified resize request.
insert
POST /compute/v1/projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/resizeRequests
Creates a new resize request that starts provisioning VMs immediately or queues VM creation.
list
GET /compute/v1/projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/resizeRequests
Retrieves a list of resize requests that are contained in the managed instance group.
REST Resource: v1.instanceGroupManagers
Methods
abandonInstances
POST /compute/v1/projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/abandonInstances
Flags the specified instances to be removed from the managed instance group.
aggregatedList
GET /compute/v1/projects/{project}/aggregated/instanceGroupManagers
Retrieves the list of managed instance groups and groups them by zone.
applyUpdatesToInstances
POST /compute/v1/projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/applyUpdatesToInstances
Applies changes to selected instances on the managed instance group.
createInstances
POST /compute/v1/projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/createInstances
Creates instances with per-instance configurations in this managed instance group.
delete
DELETE /compute/v1/projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}
Deletes the specified managed instance group and all of the instances in that group.
deleteInstances
POST /compute/v1/projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/deleteInstances
Flags the specified instances in the managed instance group for immediate deletion.
deletePerInstanceConfigs
POST /compute/v1/projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/deletePerInstanceConfigs
Deletes selected per-instance configurations for the managed instance group.
get
GET /compute/v1/projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}
Returns all of the details about the specified managed instance group.
insert
POST /compute/v1/projects/{project}/zones/{zone}/instanceGroupManagers
Creates a managed instance group using the information that you specify in the request.
list
GET /compute/v1/projects/{project}/zones/{zone}/instanceGroupManagers
Retrieves a list of managed instance groups that are contained within the specified project and zone.
listErrors
GET /compute/v1/projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/listErrors
Lists all errors thrown by actions on instances for a given managed instance group.
listManagedInstances
POST /compute/v1/projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/listManagedInstances
Lists all of the instances in the managed instance group.
listPerInstanceConfigs
POST /compute/v1/projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/listPerInstanceConfigs
Lists all of the per-instance configurations defined for the managed instance group.
patch
PATCH /compute/v1/projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}
Updates a managed instance group using the information that you specify in the request.
patchPerInstanceConfigs
POST /compute/v1/projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/patchPerInstanceConfigs
Inserts or patches per-instance configurations for the managed instance group.
recreateInstances
POST /compute/v1/projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/recreateInstances
Flags the specified VM instances in the managed instance group to be immediately recreated.
resize
POST /compute/v1/projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/resize
Resizes the managed instance group.
resumeInstances
POST /compute/v1/projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/resumeInstances
Flags the specified instances in the managed instance group to be resumed.
setInstanceTemplate
POST /compute/v1/projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/setInstanceTemplate
Specifies the instance template to use when creating new instances in this group.
setTargetPools
POST /compute/v1/projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/setTargetPools
Modifies the target pools to which all instances in this managed instance group are assigned.
startInstances
POST /compute/v1/projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/startInstances
Flags the specified instances in the managed instance group to be started.
stopInstances
POST /compute/v1/projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/stopInstances
Flags the specified instances in the managed instance group to be immediately stopped.
suspendInstances
POST /compute/v1/projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/suspendInstances
Flags the specified instances in the managed instance group to be immediately suspended.
updatePerInstanceConfigs
POST /compute/v1/projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/updatePerInstanceConfigs
Inserts or updates per-instance configurations for the managed instance group.
REST Resource: v1.instanceGroups
Methods
addInstances
POST /compute/v1/projects/{project}/zones/{zone}/instanceGroups/{instanceGroup}/addInstances
Adds a list of instances to the specified instance group.
aggregatedList
GET /compute/v1/projects/{project}/aggregated/instanceGroups
Retrieves the list of instance groups and sorts them by zone.
delete
DELETE /compute/v1/projects/{project}/zones/{zone}/instanceGroups/{instanceGroup}
Deletes the specified instance group.
get
GET /compute/v1/projects/{project}/zones/{zone}/instanceGroups/{instanceGroup}
Returns the specified zonal instance group.
insert
POST /compute/v1/projects/{project}/zones/{zone}/instanceGroups
Creates an instance group in the specified project using the parameters that are included in the request.
list
GET /compute/v1/projects/{project}/zones/{zone}/instanceGroups
Retrieves the list of zonal instance group resources contained within the specified zone.
listInstances
POST /compute/v1/projects/{project}/zones/{zone}/instanceGroups/{instanceGroup}/listInstances
Lists the instances in the specified instance group.
removeInstances
POST /compute/v1/projects/{project}/zones/{zone}/instanceGroups/{instanceGroup}/removeInstances
Removes one or more instances from the specified instance group, but does not delete those instances.
setNamedPorts
POST /compute/v1/projects/{project}/zones/{zone}/instanceGroups/{instanceGroup}/setNamedPorts
Sets the named ports for the specified instance group.
testIamPermissions
POST /compute/v1/projects/{project}/zones/{zone}/instanceGroups/{resource}/testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1.instanceSettings
Methods
get
GET /compute/v1/projects/{project}/zones/{zone}/instanceSettings
Get Instance settings.
patch
PATCH /compute/v1/projects/{project}/zones/{zone}/instanceSettings
Patch Instance settings
REST Resource: v1.instanceTemplates
Methods
aggregatedList
GET /compute/v1/projects/{project}/aggregated/instanceTemplates
Retrieves the list of all InstanceTemplates resources, regional and global, available to the specified project.
delete
DELETE /compute/v1/projects/{project}/global/instanceTemplates/{instanceTemplate}
Deletes the specified instance template.
get
GET /compute/v1/projects/{project}/global/instanceTemplates/{instanceTemplate}
Returns the specified instance template.
getIamPolicy
GET /compute/v1/projects/{project}/global/instanceTemplates/{resource}/getIamPolicy
Gets the access control policy for a resource.
insert
POST /compute/v1/projects/{project}/global/instanceTemplates
Creates an instance template in the specified project using the data that is included in the request.
list
GET /compute/v1/projects/{project}/global/instanceTemplates
Retrieves a list of instance templates that are contained within the specified project.
setIamPolicy
POST /compute/v1/projects/{project}/global/instanceTemplates/{resource}/setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /compute/v1/projects/{project}/global/instanceTemplates/{resource}/testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1.instances
Methods
addAccessConfig
POST /compute/v1/projects/{project}/zones/{zone}/instances/{instance}/addAccessConfig
Adds an access config to an instance's network interface.
addNetworkInterface
POST /compute/v1/projects/{project}/zones/{zone}/instances/{instance}/addNetworkInterface
Adds one dynamic network interface to an active instance.
addResourcePolicies
POST /compute/v1/projects/{project}/zones/{zone}/instances/{instance}/addResourcePolicies
Adds existing resource policies to an instance.
aggregatedList
GET /compute/v1/projects/{project}/aggregated/instances
Retrieves an aggregated list of all of the instances in your project across all regions and zones.
attachDisk
POST /compute/v1/projects/{project}/zones/{zone}/instances/{instance}/attachDisk
Attaches an existing Disk resource to an instance.
bulkInsert
POST /compute/v1/projects/{project}/zones/{zone}/instances/bulkInsert
Creates multiple instances.
delete
DELETE /compute/v1/projects/{project}/zones/{zone}/instances/{instance}
Deletes the specified Instance resource.
deleteAccessConfig
POST /compute/v1/projects/{project}/zones/{zone}/instances/{instance}/deleteAccessConfig
Deletes an access config from an instance's network interface.
deleteNetworkInterface
POST /compute/v1/projects/{project}/zones/{zone}/instances/{instance}/deleteNetworkInterface
Deletes one dynamic network interface from an active instance.
detachDisk
POST /compute/v1/projects/{project}/zones/{zone}/instances/{instance}/detachDisk
Detaches a disk from an instance.
get
GET /compute/v1/projects/{project}/zones/{zone}/instances/{instance}
Returns the specified Instance resource.
getEffectiveFirewalls
GET /compute/v1/projects/{project}/zones/{zone}/instances/{instance}/getEffectiveFirewalls
Returns effective firewalls applied to an interface of the instance.
getGuestAttributes
GET /compute/v1/projects/{project}/zones/{zone}/instances/{instance}/getGuestAttributes
Returns the specified guest attributes entry.
getIamPolicy
GET /compute/v1/projects/{project}/zones/{zone}/instances/{resource}/getIamPolicy
Gets the access control policy for a resource.
getPartnerMetadata
GET /compute/v1/projects/{project}/zones/{zone}/instances/{instance}/getPartnerMetadata
Gets partner metadata of the specified instance and namespaces.
getScreenshot
GET /compute/v1/projects/{project}/zones/{zone}/instances/{instance}/screenshot
Returns the screenshot from the specified instance.
getSerialPortOutput
GET /compute/v1/projects/{project}/zones/{zone}/instances/{instance}/serialPort
Returns the last 1 MB of serial port output from the specified instance.
getShieldedInstanceIdentity
GET /compute/v1/projects/{project}/zones/{zone}/instances/{instance}/getShieldedInstanceIdentity
Returns the Shielded Instance Identity of an instance
insert
POST /compute/v1/projects/{project}/zones/{zone}/instances
Creates an instance resource in the specified project using the data included in the request.
list
GET /compute/v1/projects/{project}/zones/{zone}/instances
Retrieves the list of instances contained within the specified zone.
listReferrers
GET /compute/v1/projects/{project}/zones/{zone}/instances/{instance}/referrers
Retrieves a list of resources that refer to the VM instance specified in the request.
patchPartnerMetadata
POST /compute/v1/projects/{project}/zones/{zone}/instances/{instance}/patchPartnerMetadata
Patches partner metadata of the specified instance.
performMaintenance
POST /compute/v1/projects/{project}/zones/{zone}/instances/{instance}/performMaintenance
Perform a manual maintenance on the instance.
removeResourcePolicies
POST /compute/v1/projects/{project}/zones/{zone}/instances/{instance}/removeResourcePolicies
Removes resource policies from an instance.
reportHostAsFaulty
POST /compute/v1/projects/{project}/zones/{zone}/instances/{instance}/reportHostAsFaulty
Mark the host as faulty and try to restart the instance on a new host.
reset
POST /compute/v1/projects/{project}/zones/{zone}/instances/{instance}/reset
Performs a reset on the instance.
resume
POST /compute/v1/projects/{project}/zones/{zone}/instances/{instance}/resume
Resumes an instance that was suspended using the instances().suspend method .
sendDiagnosticInterrupt
POST /compute/v1/projects/{project}/zones/{zone}/instances/{instance}/sendDiagnosticInterrupt
Sends diagnostic interrupt to the instance.
setDeletionProtection
POST /compute/v1/projects/{project}/zones/{zone}/instances/{resource}/setDeletionProtection
Sets deletion protection on the instance.
setDiskAutoDelete
POST /compute/v1/projects/{project}/zones/{zone}/instances/{instance}/setDiskAutoDelete
Sets the auto-delete flag for a disk attached to an instance.
setIamPolicy
POST /compute/v1/projects/{project}/zones/{zone}/instances/{resource}/setIamPolicy
Sets the access control policy on the specified resource.
setLabels
POST /compute/v1/projects/{project}/zones/{zone}/instances/{instance}/setLabels
Sets labels on an instance.
setMachineResources
POST /compute/v1/projects/{project}/zones/{zone}/instances/{instance}/setMachineResources
Changes the number and/or type of accelerator for a stopped instance to the values specified in the request.
setMachineType
POST /compute/v1/projects/{project}/zones/{zone}/instances/{instance}/setMachineType
Changes the machine type for a stopped instance to the machine type specified in the request.
setMetadata
POST /compute/v1/projects/{project}/zones/{zone}/instances/{instance}/setMetadata
Sets metadata for the specified instance to the data included in the request.
setMinCpuPlatform
POST /compute/v1/projects/{project}/zones/{zone}/instances/{instance}/setMinCpuPlatform
Changes the minimum CPU platform that this instance should use.
setName
POST /compute/v1/projects/{project}/zones/{zone}/instances/{instance}/setName
Sets name of an instance.
setScheduling
POST /compute/v1/projects/{project}/zones/{zone}/instances/{instance}/setScheduling
Sets an instance's scheduling options.
setSecurityPolicy
POST /compute/v1/projects/{project}/zones/{zone}/instances/{instance}/setSecurityPolicy
Sets the Google Cloud Armor security policy for the specified instance.
setServiceAccount
POST /compute/v1/projects/{project}/zones/{zone}/instances/{instance}/setServiceAccount
Sets the service account on the instance.
setShieldedInstanceIntegrityPolicy
PATCH /compute/v1/projects/{project}/zones/{zone}/instances/{instance}/setShieldedInstanceIntegrityPolicy
Sets the Shielded Instance integrity policy for an instance.
setTags
POST /compute/v1/projects/{project}/zones/{zone}/instances/{instance}/setTags
Sets network tags for the specified instance to the data included in the request.
simulateMaintenanceEvent
POST /compute/v1/projects/{project}/zones/{zone}/instances/{instance}/simulateMaintenanceEvent
Simulates a host maintenance event on a VM.
start
POST /compute/v1/projects/{project}/zones/{zone}/instances/{instance}/start
Starts an instance that was stopped using the instances().stop method.
startWithEncryptionKey
POST /compute/v1/projects/{project}/zones/{zone}/instances/{instance}/startWithEncryptionKey
Starts an instance that was stopped using the instances().stop method.
stop
POST /compute/v1/projects/{project}/zones/{zone}/instances/{instance}/stop
Stops a running instance, shutting it down cleanly, and allows you to restart the instance at a later time.
suspend
POST /compute/v1/projects/{project}/zones/{zone}/instances/{instance}/suspend
This method suspends a running instance, saving its state to persistent storage, and allows you to resume the instance at a later time.
testIamPermissions
POST /compute/v1/projects/{project}/zones/{zone}/instances/{resource}/testIamPermissions
Returns permissions that a caller has on the specified resource.
update
PUT /compute/v1/projects/{project}/zones/{zone}/instances/{instance}
Updates an instance only if the necessary resources are available.
updateAccessConfig
POST /compute/v1/projects/{project}/zones/{zone}/instances/{instance}/updateAccessConfig
Updates the specified access config from an instance's network interface with the data included in the request.
updateDisplayDevice
PATCH /compute/v1/projects/{project}/zones/{zone}/instances/{instance}/updateDisplayDevice
Updates the Display config for a VM instance.
updateNetworkInterface
PATCH /compute/v1/projects/{project}/zones/{zone}/instances/{instance}/updateNetworkInterface
Updates an instance's network interface.
updateShieldedInstanceConfig
PATCH /compute/v1/projects/{project}/zones/{zone}/instances/{instance}/updateShieldedInstanceConfig
Updates the Shielded Instance config for an instance.
REST Resource: v1.instantSnapshots
Methods
aggregatedList
GET /compute/v1/projects/{project}/aggregated/instantSnapshots
Retrieves an aggregated list of instantSnapshots.
delete
DELETE /compute/v1/projects/{project}/zones/{zone}/instantSnapshots/{instantSnapshot}
Deletes the specified InstantSnapshot resource.
get
GET /compute/v1/projects/{project}/zones/{zone}/instantSnapshots/{instantSnapshot}
Returns the specified InstantSnapshot resource in the specified zone.
getIamPolicy
GET /compute/v1/projects/{project}/zones/{zone}/instantSnapshots/{resource}/getIamPolicy
Gets the access control policy for a resource.
insert
POST /compute/v1/projects/{project}/zones/{zone}/instantSnapshots
Creates an instant snapshot in the specified zone.
list
GET /compute/v1/projects/{project}/zones/{zone}/instantSnapshots
Retrieves the list of InstantSnapshot resources contained within the specified zone.
setIamPolicy
POST /compute/v1/projects/{project}/zones/{zone}/instantSnapshots/{resource}/setIamPolicy
Sets the access control policy on the specified resource.
setLabels
POST /compute/v1/projects/{project}/zones/{zone}/instantSnapshots/{resource}/setLabels
Sets the labels on a instantSnapshot in the given zone.
testIamPermissions
POST /compute/v1/projects/{project}/zones/{zone}/instantSnapshots/{resource}/testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1.interconnectAttachmentGroups
Methods
delete
DELETE /compute/v1/projects/{project}/global/interconnectAttachmentGroups/{interconnectAttachmentGroup}
Deletes the specified InterconnectAttachmentGroup in the given scope
get
GET /compute/v1/projects/{project}/global/interconnectAttachmentGroups/{interconnectAttachmentGroup}
Returns the specified InterconnectAttachmentGroup resource in the given scope.
getIamPolicy
GET /compute/v1/projects/{project}/global/interconnectAttachmentGroups/{resource}/getIamPolicy
Gets the access control policy for a resource.
getOperationalStatus
GET /compute/v1/projects/{project}/global/interconnectAttachmentGroups/{interconnectAttachmentGroup}/getOperationalStatus
Returns the InterconnectAttachmentStatuses for the specified InterconnectAttachmentGroup resource.
insert
POST /compute/v1/projects/{project}/global/interconnectAttachmentGroups
Creates a InterconnectAttachmentGroup in the specified project in the given scope using the parameters that are included in the request.
list
GET /compute/v1/projects/{project}/global/interconnectAttachmentGroups
Lists the InterconnectAttachmentGroups for a project in the given scope.
patch
PATCH /compute/v1/projects/{project}/global/interconnectAttachmentGroups/{interconnectAttachmentGroup}
Patches the specified InterconnectAttachmentGroup resource with the data included in the request.
setIamPolicy
POST /compute/v1/projects/{project}/global/interconnectAttachmentGroups/{resource}/setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /compute/v1/projects/{project}/global/interconnectAttachmentGroups/{resource}/testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1.interconnectAttachments
Methods
aggregatedList
GET /compute/v1/projects/{project}/aggregated/interconnectAttachments
Retrieves an aggregated list of interconnect attachments.
delete
DELETE /compute/v1/projects/{project}/regions/{region}/interconnectAttachments/{interconnectAttachment}
Deletes the specified interconnect attachment.
get
GET /compute/v1/projects/{project}/regions/{region}/interconnectAttachments/{interconnectAttachment}
Returns the specified interconnect attachment.
insert
POST /compute/v1/projects/{project}/regions/{region}/interconnectAttachments
Creates an InterconnectAttachment in the specified project using the data included in the request.
list
GET /compute/v1/projects/{project}/regions/{region}/interconnectAttachments
Retrieves the list of interconnect attachments contained within the specified region.
patch
PATCH /compute/v1/projects/{project}/regions/{region}/interconnectAttachments/{interconnectAttachment}
Updates the specified interconnect attachment with the data included in the request.
setLabels
POST /compute/v1/projects/{project}/regions/{region}/interconnectAttachments/{resource}/setLabels
Sets the labels on an InterconnectAttachment.
REST Resource: v1.interconnectGroups
Methods
createMembers
POST /compute/v1/projects/{project}/global/interconnectGroups/{interconnectGroup}/createMembers
Create Interconnects with redundancy by creating them in a specified interconnect group.
delete
DELETE /compute/v1/projects/{project}/global/interconnectGroups/{interconnectGroup}
Deletes the specified InterconnectGroup in the given scope
get
GET /compute/v1/projects/{project}/global/interconnectGroups/{interconnectGroup}
Returns the specified InterconnectGroup resource in the given scope.
getIamPolicy
GET /compute/v1/projects/{project}/global/interconnectGroups/{resource}/getIamPolicy
Gets the access control policy for a resource.
getOperationalStatus
GET /compute/v1/projects/{project}/global/interconnectGroups/{interconnectGroup}/getOperationalStatus
Returns the interconnectStatuses for the specified InterconnectGroup.
insert
POST /compute/v1/projects/{project}/global/interconnectGroups
Creates a InterconnectGroup in the specified project in the given scope using the parameters that are included in the request.
list
GET /compute/v1/projects/{project}/global/interconnectGroups
Lists the InterconnectGroups for a project in the given scope.
patch
PATCH /compute/v1/projects/{project}/global/interconnectGroups/{interconnectGroup}
Patches the specified InterconnectGroup resource with the data included in the request.
setIamPolicy
POST /compute/v1/projects/{project}/global/interconnectGroups/{resource}/setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /compute/v1/projects/{project}/global/interconnectGroups/{resource}/testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1.interconnectLocations
Methods
get
GET /compute/v1/projects/{project}/global/interconnectLocations/{interconnectLocation}
Returns the details for the specified interconnect location.
list
GET /compute/v1/projects/{project}/global/interconnectLocations
Retrieves the list of interconnect locations available to the specified project.
REST Resource: v1.interconnectRemoteLocations
Methods
get
GET /compute/v1/projects/{project}/global/interconnectRemoteLocations/{interconnectRemoteLocation}
Returns the details for the specified interconnect remote location.
list
GET /compute/v1/projects/{project}/global/interconnectRemoteLocations
Retrieves the list of interconnect remote locations available to the specified project.
REST Resource: v1.interconnects
Methods
delete
DELETE /compute/v1/projects/{project}/global/interconnects/{interconnect}
Deletes the specified Interconnect.
get
GET /compute/v1/projects/{project}/global/interconnects/{interconnect}
Returns the specified Interconnect.
getDiagnostics
GET /compute/v1/projects/{project}/global/interconnects/{interconnect}/getDiagnostics
Returns the interconnectDiagnostics for the specified Interconnect.
getMacsecConfig
GET /compute/v1/projects/{project}/global/interconnects/{interconnect}/getMacsecConfig
Returns the interconnectMacsecConfig for the specified Interconnect.
insert
POST /compute/v1/projects/{project}/global/interconnects
Creates an Interconnect in the specified project using the data included in the request.
list
GET /compute/v1/projects/{project}/global/interconnects
Retrieves the list of Interconnects available to the specified project.
patch
PATCH /compute/v1/projects/{project}/global/interconnects/{interconnect}
Updates the specified Interconnect with the data included in the request.
setLabels
POST /compute/v1/projects/{project}/global/interconnects/{resource}/setLabels
Sets the labels on an Interconnect.
REST Resource: v1.licenseCodes
Methods
get
GET /compute/v1/projects/{project}/global/licenseCodes/{licenseCode}
Return a specified license code.
testIamPermissions
POST /compute/v1/projects/{project}/global/licenseCodes/{resource}/testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1.licenses
Methods
delete
DELETE /compute/v1/projects/{project}/global/licenses/{license}
Deletes the specified license.
get
GET /compute/v1/projects/{project}/global/licenses/{license}
Returns the specified License resource.
getIamPolicy
GET /compute/v1/projects/{project}/global/licenses/{resource}/getIamPolicy
Gets the access control policy for a resource.
insert
POST /compute/v1/projects/{project}/global/licenses
Create a License resource in the specified project.
list
GET /compute/v1/projects/{project}/global/licenses
Retrieves the list of licenses available in the specified project.
setIamPolicy
POST /compute/v1/projects/{project}/global/licenses/{resource}/setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /compute/v1/projects/{project}/global/licenses/{resource}/testIamPermissions
Returns permissions that a caller has on the specified resource.
update
PATCH /compute/v1/projects/{project}/global/licenses/{license}
Updates a License resource in the specified project.
REST Resource: v1.machineImages
Methods
delete
DELETE /compute/v1/projects/{project}/global/machineImages/{machineImage}
Deletes the specified machine image.
get
GET /compute/v1/projects/{project}/global/machineImages/{machineImage}
Returns the specified machine image.
getIamPolicy
GET /compute/v1/projects/{project}/global/machineImages/{resource}/getIamPolicy
Gets the access control policy for a resource.
insert
POST /compute/v1/projects/{project}/global/machineImages
Creates a machine image in the specified project using the data that is included in the request.
list
GET /compute/v1/projects/{project}/global/machineImages
Retrieves a list of machine images that are contained within the specified project.
setIamPolicy
POST /compute/v1/projects/{project}/global/machineImages/{resource}/setIamPolicy
Sets the access control policy on the specified resource.
setLabels
POST /compute/v1/projects/{project}/global/machineImages/{resource}/setLabels
Sets the labels on a machine image.
testIamPermissions
POST /compute/v1/projects/{project}/global/machineImages/{resource}/testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1.machineTypes
Methods
aggregatedList
GET /compute/v1/projects/{project}/aggregated/machineTypes
Retrieves an aggregated list of machine types.
get
GET /compute/v1/projects/{project}/zones/{zone}/machineTypes/{machineType}
Returns the specified machine type.
list
GET /compute/v1/projects/{project}/zones/{zone}/machineTypes
Retrieves a list of machine types available to the specified project.
REST Resource: v1.networkAttachments
Methods
aggregatedList
GET /compute/v1/projects/{project}/aggregated/networkAttachments
Retrieves the list of all NetworkAttachment resources, regional and global, available to the specified project.
delete
DELETE /compute/v1/projects/{project}/regions/{region}/networkAttachments/{networkAttachment}
Deletes the specified NetworkAttachment in the given scope
get
GET /compute/v1/projects/{project}/regions/{region}/networkAttachments/{networkAttachment}
Returns the specified NetworkAttachment resource in the given scope.
getIamPolicy
GET /compute/v1/projects/{project}/regions/{region}/networkAttachments/{resource}/getIamPolicy
Gets the access control policy for a resource.
insert
POST /compute/v1/projects/{project}/regions/{region}/networkAttachments
Creates a NetworkAttachment in the specified project in the given scope using the parameters that are included in the request.
list
GET /compute/v1/projects/{project}/regions/{region}/networkAttachments
Lists the NetworkAttachments for a project in the given scope.
patch
PATCH /compute/v1/projects/{project}/regions/{region}/networkAttachments/{networkAttachment}
Patches the specified NetworkAttachment resource with the data included in the request.
setIamPolicy
POST /compute/v1/projects/{project}/regions/{region}/networkAttachments/{resource}/setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /compute/v1/projects/{project}/regions/{region}/networkAttachments/{resource}/testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1.networkEdgeSecurityServices
Methods
aggregatedList
GET /compute/v1/projects/{project}/aggregated/networkEdgeSecurityServices
Retrieves the list of all NetworkEdgeSecurityService resources available to the specified project.
delete
DELETE /compute/v1/projects/{project}/regions/{region}/networkEdgeSecurityServices/{networkEdgeSecurityService}
Deletes the specified service.
get
GET /compute/v1/projects/{project}/regions/{region}/networkEdgeSecurityServices/{networkEdgeSecurityService}
Gets a specified NetworkEdgeSecurityService.
insert
POST /compute/v1/projects/{project}/regions/{region}/networkEdgeSecurityServices
Creates a new service in the specified project using the data included in the request.
patch
PATCH /compute/v1/projects/{project}/regions/{region}/networkEdgeSecurityServices/{networkEdgeSecurityService}
Patches the specified policy with the data included in the request.
REST Resource: v1.networkEndpointGroups
Methods
aggregatedList
GET /compute/v1/projects/{project}/aggregated/networkEndpointGroups
Retrieves the list of network endpoint groups and sorts them by zone.
attachNetworkEndpoints
POST /compute/v1/projects/{project}/zones/{zone}/networkEndpointGroups/{networkEndpointGroup}/attachNetworkEndpoints
Attach a list of network endpoints to the specified network endpoint group.
delete
DELETE /compute/v1/projects/{project}/zones/{zone}/networkEndpointGroups/{networkEndpointGroup}
Deletes the specified network endpoint group.
detachNetworkEndpoints
POST /compute/v1/projects/{project}/zones/{zone}/networkEndpointGroups/{networkEndpointGroup}/detachNetworkEndpoints
Detach a list of network endpoints from the specified network endpoint group.
get
GET /compute/v1/projects/{project}/zones/{zone}/networkEndpointGroups/{networkEndpointGroup}
Returns the specified network endpoint group.
insert
POST /compute/v1/projects/{project}/zones/{zone}/networkEndpointGroups
Creates a network endpoint group in the specified project using the parameters that are included in the request.
list
GET /compute/v1/projects/{project}/zones/{zone}/networkEndpointGroups
Retrieves the list of network endpoint groups that are located in the specified project and zone.
listNetworkEndpoints
POST /compute/v1/projects/{project}/zones/{zone}/networkEndpointGroups/{networkEndpointGroup}/listNetworkEndpoints
Lists the network endpoints in the specified network endpoint group.
testIamPermissions
POST /compute/v1/projects/{project}/zones/{zone}/networkEndpointGroups/{resource}/testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1.networkFirewallPolicies
Methods
addAssociation
POST /compute/v1/projects/{project}/global/firewallPolicies/{firewallPolicy}/addAssociation
Inserts an association for the specified firewall policy.
addPacketMirroringRule
POST /compute/v1/projects/{project}/global/firewallPolicies/{firewallPolicy}/addPacketMirroringRule
Inserts a packet mirroring rule into a firewall policy.
addRule
POST /compute/v1/projects/{project}/global/firewallPolicies/{firewallPolicy}/addRule
Inserts a rule into a firewall policy.
aggregatedList
GET /compute/v1/projects/{project}/aggregated/firewallPolicies
Retrieves an aggregated list of network firewall policies, listing network firewall policies from all applicable scopes (global and regional) and grouping the results per scope.
cloneRules
POST /compute/v1/projects/{project}/global/firewallPolicies/{firewallPolicy}/cloneRules
Copies rules to the specified firewall policy.
delete
DELETE /compute/v1/projects/{project}/global/firewallPolicies/{firewallPolicy}
Deletes the specified policy.
get
GET /compute/v1/projects/{project}/global/firewallPolicies/{firewallPolicy}
Returns the specified network firewall policy.
getAssociation
GET /compute/v1/projects/{project}/global/firewallPolicies/{firewallPolicy}/getAssociation
Gets an association with the specified name.
getIamPolicy
GET /compute/v1/projects/{project}/global/firewallPolicies/{resource}/getIamPolicy
Gets the access control policy for a resource.
getPacketMirroringRule
GET /compute/v1/projects/{project}/global/firewallPolicies/{firewallPolicy}/getPacketMirroringRule
Gets a packet mirroring rule of the specified priority.
getRule
GET /compute/v1/projects/{project}/global/firewallPolicies/{firewallPolicy}/getRule
Gets a rule of the specified priority.
insert
POST /compute/v1/projects/{project}/global/firewallPolicies
Creates a new policy in the specified project using the data included in the request.
list
GET /compute/v1/projects/{project}/global/firewallPolicies
Lists all the policies that have been configured for the specified project.
patch
PATCH /compute/v1/projects/{project}/global/firewallPolicies/{firewallPolicy}
Patches the specified policy with the data included in the request.
patchPacketMirroringRule
POST /compute/v1/projects/{project}/global/firewallPolicies/{firewallPolicy}/patchPacketMirroringRule
Patches a packet mirroring rule of the specified priority.
patchRule
POST /compute/v1/projects/{project}/global/firewallPolicies/{firewallPolicy}/patchRule
Patches a rule of the specified priority.
removeAssociation
POST /compute/v1/projects/{project}/global/firewallPolicies/{firewallPolicy}/removeAssociation
Removes an association for the specified firewall policy.
removePacketMirroringRule
POST /compute/v1/projects/{project}/global/firewallPolicies/{firewallPolicy}/removePacketMirroringRule
Deletes a packet mirroring rule of the specified priority.
removeRule
POST /compute/v1/projects/{project}/global/firewallPolicies/{firewallPolicy}/removeRule
Deletes a rule of the specified priority.
setIamPolicy
POST /compute/v1/projects/{project}/global/firewallPolicies/{resource}/setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /compute/v1/projects/{project}/global/firewallPolicies/{resource}/testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1.networkProfiles
Methods
get
GET /compute/v1/projects/{project}/global/networkProfiles/{networkProfile}
Returns the specified network profile.
list
GET /compute/v1/projects/{project}/global/networkProfiles
Retrieves a list of network profiles available to the specified project.
REST Resource: v1.networks
Methods
addPeering
POST /compute/v1/projects/{project}/global/networks/{network}/addPeering
Adds a peering to the specified network.
delete
DELETE /compute/v1/projects/{project}/global/networks/{network}
Deletes the specified network.
get
GET /compute/v1/projects/{project}/global/networks/{network}
Returns the specified network.
getEffectiveFirewalls
GET /compute/v1/projects/{project}/global/networks/{network}/getEffectiveFirewalls
Returns the effective firewalls on a given network.
insert
POST /compute/v1/projects/{project}/global/networks
Creates a network in the specified project using the data included in the request.
list
GET /compute/v1/projects/{project}/global/networks
Retrieves the list of networks available to the specified project.
listPeeringRoutes
GET /compute/v1/projects/{project}/global/networks/{network}/listPeeringRoutes
Lists the peering routes exchanged over peering connection.
patch
PATCH /compute/v1/projects/{project}/global/networks/{network}
Patches the specified network with the data included in the request.
removePeering
POST /compute/v1/projects/{project}/global/networks/{network}/removePeering
Removes a peering from the specified network.
requestRemovePeering
POST /compute/v1/projects/{project}/global/networks/{network}/requestRemovePeering
Requests to remove a peering from the specified network.
switchToCustomMode
POST /compute/v1/projects/{project}/global/networks/{network}/switchToCustomMode
Switches the network mode from auto subnet mode to custom subnet mode.
updatePeering
PATCH /compute/v1/projects/{project}/global/networks/{network}/updatePeering
Updates the specified network peering with the data included in the request.
REST Resource: v1.nodeGroups
Methods
addNodes
POST /compute/v1/projects/{project}/zones/{zone}/nodeGroups/{nodeGroup}/addNodes
Adds specified number of nodes to the node group.
aggregatedList
GET /compute/v1/projects/{project}/aggregated/nodeGroups
Retrieves an aggregated list of node groups.
delete
DELETE /compute/v1/projects/{project}/zones/{zone}/nodeGroups/{nodeGroup}
Deletes the specified NodeGroup resource.
deleteNodes
POST /compute/v1/projects/{project}/zones/{zone}/nodeGroups/{nodeGroup}/deleteNodes
Deletes specified nodes from the node group.
get
GET /compute/v1/projects/{project}/zones/{zone}/nodeGroups/{nodeGroup}
Returns the specified NodeGroup.
getIamPolicy
GET /compute/v1/projects/{project}/zones/{zone}/nodeGroups/{resource}/getIamPolicy
Gets the access control policy for a resource.
insert
POST /compute/v1/projects/{project}/zones/{zone}/nodeGroups
Creates a NodeGroup resource in the specified project using the data included in the request.
list
GET /compute/v1/projects/{project}/zones/{zone}/nodeGroups
Retrieves a list of node groups available to the specified project.
listNodes
POST /compute/v1/projects/{project}/zones/{zone}/nodeGroups/{nodeGroup}/listNodes
Lists nodes in the node group.
patch
PATCH /compute/v1/projects/{project}/zones/{zone}/nodeGroups/{nodeGroup}
Updates the specified node group.
performMaintenance
POST /compute/v1/projects/{project}/zones/{zone}/nodeGroups/{nodeGroup}/performMaintenance
Perform maintenance on a subset of nodes in the node group.
setIamPolicy
POST /compute/v1/projects/{project}/zones/{zone}/nodeGroups/{resource}/setIamPolicy
Sets the access control policy on the specified resource.
setNodeTemplate
POST /compute/v1/projects/{project}/zones/{zone}/nodeGroups/{nodeGroup}/setNodeTemplate
Updates the node template of the node group.
simulateMaintenanceEvent
POST /compute/v1/projects/{project}/zones/{zone}/nodeGroups/{nodeGroup}/simulateMaintenanceEvent
Simulates maintenance event on specified nodes from the node group.
testIamPermissions
POST /compute/v1/projects/{project}/zones/{zone}/nodeGroups/{resource}/testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1.nodeTemplates
Methods
aggregatedList
GET /compute/v1/projects/{project}/aggregated/nodeTemplates
Retrieves an aggregated list of node templates.
delete
DELETE /compute/v1/projects/{project}/regions/{region}/nodeTemplates/{nodeTemplate}
Deletes the specified NodeTemplate resource.
get
GET /compute/v1/projects/{project}/regions/{region}/nodeTemplates/{nodeTemplate}
Returns the specified node template.
getIamPolicy
GET /compute/v1/projects/{project}/regions/{region}/nodeTemplates/{resource}/getIamPolicy
Gets the access control policy for a resource.
insert
POST /compute/v1/projects/{project}/regions/{region}/nodeTemplates
Creates a NodeTemplate resource in the specified project using the data included in the request.
list
GET /compute/v1/projects/{project}/regions/{region}/nodeTemplates
Retrieves a list of node templates available to the specified project.
setIamPolicy
POST /compute/v1/projects/{project}/regions/{region}/nodeTemplates/{resource}/setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /compute/v1/projects/{project}/regions/{region}/nodeTemplates/{resource}/testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1.nodeTypes
Methods
aggregatedList
GET /compute/v1/projects/{project}/aggregated/nodeTypes
Retrieves an aggregated list of node types.
get
GET /compute/v1/projects/{project}/zones/{zone}/nodeTypes/{nodeType}
Returns the specified node type.
list
GET /compute/v1/projects/{project}/zones/{zone}/nodeTypes
Retrieves a list of node types available to the specified project.
REST Resource: v1.organizationSecurityPolicies
Methods
addAssociation
POST /compute/v1/locations/global/{securityPolicy=securityPolicies/*}/addAssociation
Inserts an association for the specified security policy.
addRule
POST /compute/v1/locations/global/{securityPolicy=securityPolicies/*}/addRule
Inserts a rule into a security policy.
copyRules
POST /compute/v1/locations/global/{securityPolicy=securityPolicies/*}/copyRules
Copies rules to the specified security policy.
delete
DELETE /compute/v1/locations/global/{securityPolicy=securityPolicies/*}
Deletes the specified policy.
get
GET /compute/v1/locations/global/{securityPolicy=securityPolicies/*}
List all of the ordered rules present in a single specified policy.
getAssociation
GET /compute/v1/locations/global/{securityPolicy=securityPolicies/*}/getAssociation
Gets an association with the specified name.
getRule
GET /compute/v1/locations/global/{securityPolicy=securityPolicies/*}/getRule
Gets a rule at the specified priority.
insert
POST /compute/v1/locations/global/securityPolicies
Creates a new policy in the specified organization using the data included in the request.
list
GET /compute/v1/locations/global/securityPolicies
List all the policies that have been configured for the specified organization.
listAssociations
GET /compute/v1/locations/global/securityPolicies/listAssociations
Lists associations of a specified target, i.e., organization or folder.
listPreconfiguredExpressionSets
GET /compute/v1/locations/global/securityPolicies/listPreconfiguredExpressionSets
Gets the current list of preconfigured Web Application Firewall (WAF) expressions.
move
POST /compute/v1/locations/global/{securityPolicy=securityPolicies/*}/move
Moves the specified security policy.
patch
PATCH /compute/v1/locations/global/{securityPolicy=securityPolicies/*}
Patches the specified policy with the data included in the request.
patchRule
POST /compute/v1/locations/global/{securityPolicy=securityPolicies/*}/patchRule
Patches a rule at the specified priority.
removeAssociation
POST /compute/v1/locations/global/{securityPolicy=securityPolicies/*}/removeAssociation
Removes an association for the specified security policy.
removeRule
POST /compute/v1/locations/global/{securityPolicy=securityPolicies/*}/removeRule
Deletes a rule at the specified priority.
REST Resource: v1.packetMirrorings
Methods
aggregatedList
GET /compute/v1/projects/{project}/aggregated/packetMirrorings
Retrieves an aggregated list of packetMirrorings.
delete
DELETE /compute/v1/projects/{project}/regions/{region}/packetMirrorings/{packetMirroring}
Deletes the specified PacketMirroring resource.
get
GET /compute/v1/projects/{project}/regions/{region}/packetMirrorings/{packetMirroring}
Returns the specified PacketMirroring resource.
insert
POST /compute/v1/projects/{project}/regions/{region}/packetMirrorings
Creates a PacketMirroring resource in the specified project and region using the data included in the request.
list
GET /compute/v1/projects/{project}/regions/{region}/packetMirrorings
Retrieves a list of PacketMirroring resources available to the specified project and region.
patch
PATCH /compute/v1/projects/{project}/regions/{region}/packetMirrorings/{packetMirroring}
Patches the specified PacketMirroring resource with the data included in the request.
testIamPermissions
POST /compute/v1/projects/{project}/regions/{region}/packetMirrorings/{resource}/testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1.previewFeatures
Methods
get
GET /compute/v1/projects/{project}/global/previewFeatures/{previewFeature}
Returns the details of the given PreviewFeature.
list
GET /compute/v1/projects/{project}/global/previewFeatures
Returns the details of the given PreviewFeature.
update
PATCH /compute/v1/projects/{project}/global/previewFeatures/{previewFeature}
Patches the given PreviewFeature.
REST Resource: v1.projects
Methods
disableXpnHost
POST /compute/v1/projects/{project}/disableXpnHost
Disable this project as a shared VPC host project.
disableXpnResource
POST /compute/v1/projects/{project}/disableXpnResource
Disable a service resource (also known as service project) associated with this host project.
enableXpnHost
POST /compute/v1/projects/{project}/enableXpnHost
Enable this project as a shared VPC host project.
enableXpnResource
POST /compute/v1/projects/{project}/enableXpnResource
Enable service resource (a.k.a service project) for a host project, so that subnets in the host project can be used by instances in the service project.
get
GET /compute/v1/projects/{project}
Returns the specified Project resource.
getXpnHost
GET /compute/v1/projects/{project}/getXpnHost
Gets the shared VPC host project that this project links to.
getXpnResources
GET /compute/v1/projects/{project}/getXpnResources
Gets service resources (a.k.a service project) associated with this host project.
listXpnHosts
POST /compute/v1/projects/{project}/listXpnHosts
Lists all shared VPC host projects visible to the user in an organization.
moveDisk (deprecated)
POST /compute/v1/projects/{project}/moveDisk
Moves a persistent disk from one zone to another.
moveInstance (deprecated)
POST /compute/v1/projects/{project}/moveInstance
Moves an instance and its attached persistent disks from one zone to another.
setCloudArmorTier
POST /compute/v1/projects/{project}/setCloudArmorTier
Sets the Cloud Armor tier of the project.
setCommonInstanceMetadata
POST /compute/v1/projects/{project}/setCommonInstanceMetadata
Sets metadata common to all instances within the specified project using the data included in the request.
setDefaultNetworkTier
POST /compute/v1/projects/{project}/setDefaultNetworkTier
Sets the default network tier of the project.
setUsageExportBucket
POST /compute/v1/projects/{project}/setUsageExportBucket
Enables the usage export feature and sets the usage export bucket where reports are stored.
REST Resource: v1.publicAdvertisedPrefixes
Methods
announce
POST /compute/v1/projects/{project}/global/publicAdvertisedPrefixes/{publicAdvertisedPrefix}/announce
Announces the specified PublicAdvertisedPrefix
delete
DELETE /compute/v1/projects/{project}/global/publicAdvertisedPrefixes/{publicAdvertisedPrefix}
Deletes the specified PublicAdvertisedPrefix
get
GET /compute/v1/projects/{project}/global/publicAdvertisedPrefixes/{publicAdvertisedPrefix}
Returns the specified PublicAdvertisedPrefix resource.
insert
POST /compute/v1/projects/{project}/global/publicAdvertisedPrefixes
Creates a PublicAdvertisedPrefix in the specified project using the parameters that are included in the request.
list
GET /compute/v1/projects/{project}/global/publicAdvertisedPrefixes
Lists the PublicAdvertisedPrefixes for a project.
patch
PATCH /compute/v1/projects/{project}/global/publicAdvertisedPrefixes/{publicAdvertisedPrefix}
Patches the specified Router resource with the data included in the request.
withdraw
POST /compute/v1/projects/{project}/global/publicAdvertisedPrefixes/{publicAdvertisedPrefix}/withdraw
Withdraws the specified PublicAdvertisedPrefix
REST Resource: v1.publicDelegatedPrefixes
Methods
aggregatedList
GET /compute/v1/projects/{project}/aggregated/publicDelegatedPrefixes
Lists all PublicDelegatedPrefix resources owned by the specific project across all scopes.
announce
POST /compute/v1/projects/{project}/regions/{region}/publicDelegatedPrefixes/{publicDelegatedPrefix}/announce
Announces the specified PublicDelegatedPrefix in the given region.
delete
DELETE /compute/v1/projects/{project}/regions/{region}/publicDelegatedPrefixes/{publicDelegatedPrefix}
Deletes the specified PublicDelegatedPrefix in the given region.
get
GET /compute/v1/projects/{project}/regions/{region}/publicDelegatedPrefixes/{publicDelegatedPrefix}
Returns the specified PublicDelegatedPrefix resource in the given region.
insert
POST /compute/v1/projects/{project}/regions/{region}/publicDelegatedPrefixes
Creates a PublicDelegatedPrefix in the specified project in the given region using the parameters that are included in the request.
list
GET /compute/v1/projects/{project}/regions/{region}/publicDelegatedPrefixes
Lists the PublicDelegatedPrefixes for a project in the given region.
patch
PATCH /compute/v1/projects/{project}/regions/{region}/publicDelegatedPrefixes/{publicDelegatedPrefix}
Patches the specified PublicDelegatedPrefix resource with the data included in the request.
withdraw
POST /compute/v1/projects/{project}/regions/{region}/publicDelegatedPrefixes/{publicDelegatedPrefix}/withdraw
Withdraws the specified PublicDelegatedPrefix in the given region.
REST Resource: v1.regionAutoscalers
Methods
delete
DELETE /compute/v1/projects/{project}/regions/{region}/autoscalers/{autoscaler}
Deletes the specified autoscaler.
get
GET /compute/v1/projects/{project}/regions/{region}/autoscalers/{autoscaler}
Returns the specified autoscaler.
insert
POST /compute/v1/projects/{project}/regions/{region}/autoscalers
Creates an autoscaler in the specified project using the data included in the request.
list
GET /compute/v1/projects/{project}/regions/{region}/autoscalers
Retrieves a list of autoscalers contained within the specified region.
patch
PATCH /compute/v1/projects/{project}/regions/{region}/autoscalers
Updates an autoscaler in the specified project using the data included in the request.
testIamPermissions
POST /compute/v1/projects/{project}/regions/{region}/autoscalers/{resource}/testIamPermissions
Returns permissions that a caller has on the specified resource.
update
PUT /compute/v1/projects/{project}/regions/{region}/autoscalers
Updates an autoscaler in the specified project using the data included in the request.
REST Resource: v1.regionBackendBuckets
Methods
delete
DELETE /compute/v1/projects/{project}/regions/{region}/backendBuckets/{backendBucket}
Deletes the specified regional BackendBucket resource.
get
GET /compute/v1/projects/{project}/regions/{region}/backendBuckets/{backendBucket}
Returns the specified regional BackendBucket resource.
getIamPolicy
GET /compute/v1/projects/{project}/regions/{region}/backendBuckets/{resource}/getIamPolicy
Gets the access control policy for a resource.
insert
POST /compute/v1/projects/{project}/regions/{region}/backendBuckets
Creates a RegionBackendBucket in the specified project in the given scope using the parameters that are included in the request.
list
GET /compute/v1/projects/{project}/regions/{region}/backendBuckets
Retrieves the list of BackendBucket resources available to the specified project in the given region.
listUsable
GET /compute/v1/projects/{project}/regions/{region}/backendBuckets/listUsable
Retrieves a list of all usable backend buckets in the specified project in the given region.
patch
PATCH /compute/v1/projects/{project}/regions/{region}/backendBuckets/{backendBucket}
Updates the specified BackendBucket resource with the data included in the request.
setIamPolicy
POST /compute/v1/projects/{project}/regions/{region}/backendBuckets/{resource}/setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /compute/v1/projects/{project}/regions/{region}/backendBuckets/{resource}/testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1.regionBackendServices
Methods
delete
DELETE /compute/v1/projects/{project}/regions/{region}/backendServices/{backendService}
Deletes the specified regional BackendService resource.
get
GET /compute/v1/projects/{project}/regions/{region}/backendServices/{backendService}
Returns the specified regional BackendService resource.
getHealth
POST /compute/v1/projects/{project}/regions/{region}/backendServices/{backendService}/getHealth
Gets the most recent health check results for this regional BackendService.
getIamPolicy
GET /compute/v1/projects/{project}/regions/{region}/backendServices/{resource}/getIamPolicy
Gets the access control policy for a resource.
insert
POST /compute/v1/projects/{project}/regions/{region}/backendServices
Creates a regional BackendService resource in the specified project using the data included in the request.
list
GET /compute/v1/projects/{project}/regions/{region}/backendServices
Retrieves the list of regional BackendService resources available to the specified project in the given region.
listUsable
GET /compute/v1/projects/{project}/regions/{region}/backendServices/listUsable
Retrieves a list of all usable backend services in the specified project in the given region.
patch
PATCH /compute/v1/projects/{project}/regions/{region}/backendServices/{backendService}
Updates the specified regional BackendService resource with the data included in the request.
setIamPolicy
POST /compute/v1/projects/{project}/regions/{region}/backendServices/{resource}/setIamPolicy
Sets the access control policy on the specified resource.
setSecurityPolicy
POST /compute/v1/projects/{project}/regions/{region}/backendServices/{backendService}/setSecurityPolicy
Sets the Google Cloud Armor security policy for the specified backend service.
testIamPermissions
POST /compute/v1/projects/{project}/regions/{region}/backendServices/{resource}/testIamPermissions
Returns permissions that a caller has on the specified resource.
update
PUT /compute/v1/projects/{project}/regions/{region}/backendServices/{backendService}
Updates the specified regional BackendService resource with the data included in the request.
REST Resource: v1.regionCommitments
Methods
aggregatedList
GET /compute/v1/projects/{project}/aggregated/commitments
Retrieves an aggregated list of commitments by region.
get
GET /compute/v1/projects/{project}/regions/{region}/commitments/{commitment}
Returns the specified commitment resource.
insert
POST /compute/v1/projects/{project}/regions/{region}/commitments
Creates a commitment in the specified project using the data included in the request.
list
GET /compute/v1/projects/{project}/regions/{region}/commitments
Retrieves a list of commitments contained within the specified region.
update
PATCH /compute/v1/projects/{project}/regions/{region}/commitments/{commitment}
Updates the specified commitment with the data included in the request.
REST Resource: v1.regionCompositeHealthChecks
Methods
aggregatedList
GET /compute/v1/projects/{project}/aggregated/compositeHealthChecks
Retrieves the list of all CompositeHealthCheck resources (all regional) available to the specified project.
delete
DELETE /compute/v1/projects/{project}/regions/{region}/compositeHealthChecks/{compositeHealthCheck}
Deletes the specified CompositeHealthCheck in the given region
get
GET /compute/v1/projects/{project}/regions/{region}/compositeHealthChecks/{compositeHealthCheck}
Returns the specified CompositeHealthCheck resource in the given region.
getHealth
GET /compute/v1/projects/{project}/regions/{region}/compositeHealthChecks/{compositeHealthCheck}/getHealth
Gets the most recent health check results for this regional CompositeHealthCheck.
insert
POST /compute/v1/projects/{project}/regions/{region}/compositeHealthChecks
Create a CompositeHealthCheck in the specified project in the given region using the parameters that are included in the request.
list
GET /compute/v1/projects/{project}/regions/{region}/compositeHealthChecks
Lists the CompositeHealthChecks for a project in the given region.
patch
PATCH /compute/v1/projects/{project}/regions/{region}/compositeHealthChecks/{compositeHealthCheck}
Updates the specified regional CompositeHealthCheck resource with the data included in the request.
testIamPermissions
POST /compute/v1/projects/{project}/regions/{region}/compositeHealthChecks/{resource}/testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1.regionDiskTypes
Methods
get
GET /compute/v1/projects/{project}/regions/{region}/diskTypes/{diskType}
Returns the specified regional disk type.
list
GET /compute/v1/projects/{project}/regions/{region}/diskTypes
Retrieves a list of regional disk types available to the specified project.
REST Resource: v1.regionDisks
Methods
addResourcePolicies
POST /compute/v1/projects/{project}/regions/{region}/disks/{disk}/addResourcePolicies
Adds existing resource policies to a regional disk.
bulkInsert
POST /compute/v1/projects/{project}/regions/{region}/disks/bulkInsert
Bulk create a set of disks.
createSnapshot
POST /compute/v1/projects/{project}/regions/{region}/disks/{disk}/createSnapshot
Creates a snapshot of a specified persistent disk.
delete
DELETE /compute/v1/projects/{project}/regions/{region}/disks/{disk}
Deletes the specified regional persistent disk.
get
GET /compute/v1/projects/{project}/regions/{region}/disks/{disk}
Returns a specified regional persistent disk.
getIamPolicy
GET /compute/v1/projects/{project}/regions/{region}/disks/{resource}/getIamPolicy
Gets the access control policy for a resource.
insert
POST /compute/v1/projects/{project}/regions/{region}/disks
Creates a persistent regional disk in the specified project using the data included in the request.
list
GET /compute/v1/projects/{project}/regions/{region}/disks
Retrieves the list of persistent disks contained within the specified region.
removeResourcePolicies
POST /compute/v1/projects/{project}/regions/{region}/disks/{disk}/removeResourcePolicies
Removes resource policies from a regional disk.
resize
POST /compute/v1/projects/{project}/regions/{region}/disks/{disk}/resize
Resizes the specified regional persistent disk.
setIamPolicy
POST /compute/v1/projects/{project}/regions/{region}/disks/{resource}/setIamPolicy
Sets the access control policy on the specified resource.
setLabels
POST /compute/v1/projects/{project}/regions/{region}/disks/{resource}/setLabels
Sets the labels on the target regional disk.
startAsyncReplication
POST /compute/v1/projects/{project}/regions/{region}/disks/{disk}/startAsyncReplication
Starts asynchronous replication.
stopAsyncReplication
POST /compute/v1/projects/{project}/regions/{region}/disks/{disk}/stopAsyncReplication
Stops asynchronous replication.
stopGroupAsyncReplication
POST /compute/v1/projects/{project}/regions/{region}/disks/stopGroupAsyncReplication
Stops asynchronous replication for a consistency group of disks.
testIamPermissions
POST /compute/v1/projects/{project}/regions/{region}/disks/{resource}/testIamPermissions
Returns permissions that a caller has on the specified resource.
update
PATCH /compute/v1/projects/{project}/regions/{region}/disks/{disk}
Update the specified disk with the data included in the request.
updateKmsKey
POST /compute/v1/projects/{project}/regions/{region}/disks/{disk}/updateKmsKey
Rotates the customer-managed encryption key to the latest version for the specified persistent disk.
REST Resource: v1.regionHealthAggregationPolicies
Methods
aggregatedList
GET /compute/v1/projects/{project}/aggregated/healthAggregationPolicies
Retrieves the list of all HealthAggregationPolicy resources, regional and global, available to the specified project.
delete
DELETE /compute/v1/projects/{project}/regions/{region}/healthAggregationPolicies/{healthAggregationPolicy}
Deletes the specified HealthAggregationPolicy in the given region.
get
GET /compute/v1/projects/{project}/regions/{region}/healthAggregationPolicies/{healthAggregationPolicy}
Returns the specified HealthAggregationPolicy resource in the given region.
insert
POST /compute/v1/projects/{project}/regions/{region}/healthAggregationPolicies
Create a HealthAggregationPolicy in the specified project in the given region using the parameters that are included in the request.
list
GET /compute/v1/projects/{project}/regions/{region}/healthAggregationPolicies
Lists the HealthAggregationPolicies for a project in the given region.
patch
PATCH /compute/v1/projects/{project}/regions/{region}/healthAggregationPolicies/{healthAggregationPolicy}
Updates the specified regional HealthAggregationPolicy resource with the data included in the request.
testIamPermissions
POST /compute/v1/projects/{project}/regions/{region}/healthAggregationPolicies/{resource}/testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1.regionHealthCheckServices
Methods
aggregatedList
GET /compute/v1/projects/{project}/aggregated/healthCheckServices
Retrieves the list of all HealthCheckService resources, regional and global, available to the specified project.
delete
DELETE /compute/v1/projects/{project}/regions/{region}/healthCheckServices/{healthCheckService}
Deletes the specified regional HealthCheckService.
get
GET /compute/v1/projects/{project}/regions/{region}/healthCheckServices/{healthCheckService}
Returns the specified regional HealthCheckService resource.
insert
POST /compute/v1/projects/{project}/regions/{region}/healthCheckServices
Creates a regional HealthCheckService resource in the specified project and region using the data included in the request.
list
GET /compute/v1/projects/{project}/regions/{region}/healthCheckServices
Lists all the HealthCheckService resources that have been configured for the specified project in the given region.
patch
PATCH /compute/v1/projects/{project}/regions/{region}/healthCheckServices/{healthCheckService}
Updates the specified regional HealthCheckService resource with the data included in the request.
testIamPermissions
POST /compute/v1/projects/{project}/regions/{region}/healthCheckServices/{resource}/testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1.regionHealthChecks
Methods
delete
DELETE /compute/v1/projects/{project}/regions/{region}/healthChecks/{healthCheck}
Deletes the specified HealthCheck resource.
get
GET /compute/v1/projects/{project}/regions/{region}/healthChecks/{healthCheck}
Returns the specified HealthCheck resource.
insert
POST /compute/v1/projects/{project}/regions/{region}/healthChecks
Creates a HealthCheck resource in the specified project using the data included in the request.
list
GET /compute/v1/projects/{project}/regions/{region}/healthChecks
Retrieves the list of HealthCheck resources available to the specified project.
patch
PATCH /compute/v1/projects/{project}/regions/{region}/healthChecks/{healthCheck}
Updates a HealthCheck resource in the specified project using the data included in the request.
testIamPermissions
POST /compute/v1/projects/{project}/regions/{region}/healthChecks/{resource}/testIamPermissions
Returns permissions that a caller has on the specified resource.
update
PUT /compute/v1/projects/{project}/regions/{region}/healthChecks/{healthCheck}
Updates a HealthCheck resource in the specified project using the data included in the request.
REST Resource: v1.regionHealthSources
Methods
aggregatedList
GET /compute/v1/projects/{project}/aggregated/healthSources
Retrieves the list of all HealthSource resources (all regional) available to the specified project.
delete
DELETE /compute/v1/projects/{project}/regions/{region}/healthSources/{healthSource}
Deletes the specified HealthSource in the given region
get
GET /compute/v1/projects/{project}/regions/{region}/healthSources/{healthSource}
Returns the specified HealthSource resource in the given region.
getHealth
GET /compute/v1/projects/{project}/regions/{region}/healthSources/{healthSource}/getHealth
Gets the most recent health check results for this regional HealthSource.
insert
POST /compute/v1/projects/{project}/regions/{region}/healthSources
Create a HealthSource in the specified project in the given region using the parameters that are included in the request.
list
GET /compute/v1/projects/{project}/regions/{region}/healthSources
Lists the HealthSources for a project in the given region.
patch
PATCH /compute/v1/projects/{project}/regions/{region}/healthSources/{healthSource}
Updates the specified regional HealthSource resource with the data included in the request.
testIamPermissions
POST /compute/v1/projects/{project}/regions/{region}/healthSources/{resource}/testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1.regionInstanceGroupManagerResizeRequests
Methods
cancel
POST /compute/v1/projects/{project}/regions/{region}/instanceGroupManagers/{instanceGroupManager}/resizeRequests/{resizeRequest}/cancel
Cancels the specified resize request.
delete
DELETE /compute/v1/projects/{project}/regions/{region}/instanceGroupManagers/{instanceGroupManager}/resizeRequests/{resizeRequest}
Deletes the specified, inactive resize request.
get
GET /compute/v1/projects/{project}/regions/{region}/instanceGroupManagers/{instanceGroupManager}/resizeRequests/{resizeRequest}
Returns all of the details about the specified resize request.
insert
POST /compute/v1/projects/{project}/regions/{region}/instanceGroupManagers/{instanceGroupManager}/resizeRequests
Creates a new Resize Request that starts provisioning VMs immediately or queues VM creation.
list
GET /compute/v1/projects/{project}/regions/{region}/instanceGroupManagers/{instanceGroupManager}/resizeRequests
Retrieves a list of Resize Requests that are contained in the managed instance group.
REST Resource: v1.regionInstanceGroupManagers
Methods
abandonInstances
POST /compute/v1/projects/{project}/regions/{region}/instanceGroupManagers/{instanceGroupManager}/abandonInstances
Flags the specified instances to be immediately removed from the managed instance group.
applyUpdatesToInstances
POST /compute/v1/projects/{project}/regions/{region}/instanceGroupManagers/{instanceGroupManager}/applyUpdatesToInstances
Apply updates to selected instances the managed instance group.
createInstances
POST /compute/v1/projects/{project}/regions/{region}/instanceGroupManagers/{instanceGroupManager}/createInstances
Creates instances with per-instance configurations in this regional managed instance group.
delete
DELETE /compute/v1/projects/{project}/regions/{region}/instanceGroupManagers/{instanceGroupManager}
Deletes the specified managed instance group and all of the instances in that group.
deleteInstances
POST /compute/v1/projects/{project}/regions/{region}/instanceGroupManagers/{instanceGroupManager}/deleteInstances
Flags the specified instances in the managed instance group to be immediately deleted.
deletePerInstanceConfigs
POST /compute/v1/projects/{project}/regions/{region}/instanceGroupManagers/{instanceGroupManager}/deletePerInstanceConfigs
Deletes selected per-instance configurations for the managed instance group.
get
GET /compute/v1/projects/{project}/regions/{region}/instanceGroupManagers/{instanceGroupManager}
Returns all of the details about the specified managed instance group.
insert
POST /compute/v1/projects/{project}/regions/{region}/instanceGroupManagers
Creates a managed instance group using the information that you specify in the request.
list
GET /compute/v1/projects/{project}/regions/{region}/instanceGroupManagers
Retrieves the list of managed instance groups that are contained within the specified region.
listErrors
GET /compute/v1/projects/{project}/regions/{region}/instanceGroupManagers/{instanceGroupManager}/listErrors
Lists all errors thrown by actions on instances for a given regional managed instance group.
listManagedInstances
POST /compute/v1/projects/{project}/regions/{region}/instanceGroupManagers/{instanceGroupManager}/listManagedInstances
Lists the instances in the managed instance group and instances that are scheduled to be created.
listPerInstanceConfigs
POST /compute/v1/projects/{project}/regions/{region}/instanceGroupManagers/{instanceGroupManager}/listPerInstanceConfigs
Lists all of the per-instance configurations defined for the managed instance group.
patch
PATCH /compute/v1/projects/{project}/regions/{region}/instanceGroupManagers/{instanceGroupManager}
Updates a managed instance group using the information that you specify in the request.
patchPerInstanceConfigs
POST /compute/v1/projects/{project}/regions/{region}/instanceGroupManagers/{instanceGroupManager}/patchPerInstanceConfigs
Inserts or patches per-instance configurations for the managed instance group.
recreateInstances
POST /compute/v1/projects/{project}/regions/{region}/instanceGroupManagers/{instanceGroupManager}/recreateInstances
Flags the specified VM instances in the managed instance group to be immediately recreated.
resize
POST /compute/v1/projects/{project}/regions/{region}/instanceGroupManagers/{instanceGroupManager}/resize
Changes the intended size of the managed instance group.
resumeInstances
POST /compute/v1/projects/{project}/regions/{region}/instanceGroupManagers/{instanceGroupManager}/resumeInstances
Flags the specified instances in the managed instance group to be resumed.
setInstanceTemplate
POST /compute/v1/projects/{project}/regions/{region}/instanceGroupManagers/{instanceGroupManager}/setInstanceTemplate
Sets the instance template to use when creating new instances or recreating instances in this group.
setTargetPools
POST /compute/v1/projects/{project}/regions/{region}/instanceGroupManagers/{instanceGroupManager}/setTargetPools
Modifies the target pools to which all new instances in this group are assigned.
startInstances
POST /compute/v1/projects/{project}/regions/{region}/instanceGroupManagers/{instanceGroupManager}/startInstances
Flags the specified instances in the managed instance group to be started.
stopInstances
POST /compute/v1/projects/{project}/regions/{region}/instanceGroupManagers/{instanceGroupManager}/stopInstances
Flags the specified instances in the managed instance group to be immediately stopped.
suspendInstances
POST /compute/v1/projects/{project}/regions/{region}/instanceGroupManagers/{instanceGroupManager}/suspendInstances
Flags the specified instances in the managed instance group to be immediately suspended.
updatePerInstanceConfigs
POST /compute/v1/projects/{project}/regions/{region}/instanceGroupManagers/{instanceGroupManager}/updatePerInstanceConfigs
Inserts or updates per-instance configurations for the managed instance group.
REST Resource: v1.regionInstanceGroups
Methods
get
GET /compute/v1/projects/{project}/regions/{region}/instanceGroups/{instanceGroup}
Returns the specified instance group resource.
list
GET /compute/v1/projects/{project}/regions/{region}/instanceGroups
Retrieves the list of instance group resources contained within the specified region.
listInstances
POST /compute/v1/projects/{project}/regions/{region}/instanceGroups/{instanceGroup}/listInstances
Lists the instances in the specified instance group and displays information about the named ports.
setNamedPorts
POST /compute/v1/projects/{project}/regions/{region}/instanceGroups/{instanceGroup}/setNamedPorts
Sets the named ports for the specified regional instance group.
testIamPermissions
POST /compute/v1/projects/{project}/regions/{region}/instanceGroups/{resource}/testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1.regionInstanceTemplates
Methods
delete
DELETE /compute/v1/projects/{project}/regions/{region}/instanceTemplates/{instanceTemplate}
Deletes the specified instance template.
get
GET /compute/v1/projects/{project}/regions/{region}/instanceTemplates/{instanceTemplate}
Returns the specified instance template.
insert
POST /compute/v1/projects/{project}/regions/{region}/instanceTemplates
Creates an instance template in the specified project and region using the global instance template whose URL is included in the request.
list
GET /compute/v1/projects/{project}/regions/{region}/instanceTemplates
Retrieves a list of instance templates that are contained within the specified project and region.
REST Resource: v1.regionInstances
Methods
bulkInsert
POST /compute/v1/projects/{project}/regions/{region}/instances/bulkInsert
Creates multiple instances in a given region.
REST Resource: v1.regionInstantSnapshots
Methods
delete
DELETE /compute/v1/projects/{project}/regions/{region}/instantSnapshots/{instantSnapshot}
Deletes the specified InstantSnapshot resource.
get
GET /compute/v1/projects/{project}/regions/{region}/instantSnapshots/{instantSnapshot}
Returns the specified InstantSnapshot resource in the specified region.
getIamPolicy
GET /compute/v1/projects/{project}/regions/{region}/instantSnapshots/{resource}/getIamPolicy
Gets the access control policy for a resource.
insert
POST /compute/v1/projects/{project}/regions/{region}/instantSnapshots
Creates an instant snapshot in the specified region.
list
GET /compute/v1/projects/{project}/regions/{region}/instantSnapshots
Retrieves the list of InstantSnapshot resources contained within the specified region.
setIamPolicy
POST /compute/v1/projects/{project}/regions/{region}/instantSnapshots/{resource}/setIamPolicy
Sets the access control policy on the specified resource.
setLabels
POST /compute/v1/projects/{project}/regions/{region}/instantSnapshots/{resource}/setLabels
Sets the labels on a instantSnapshot in the given region.
testIamPermissions
POST /compute/v1/projects/{project}/regions/{region}/instantSnapshots/{resource}/testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1.regionNetworkEndpointGroups
Methods
attachNetworkEndpoints
POST /compute/v1/projects/{project}/regions/{region}/networkEndpointGroups/{networkEndpointGroup}/attachNetworkEndpoints
Attach a list of network endpoints to the specified network endpoint group.
delete
DELETE /compute/v1/projects/{project}/regions/{region}/networkEndpointGroups/{networkEndpointGroup}
Deletes the specified network endpoint group.
detachNetworkEndpoints
POST /compute/v1/projects/{project}/regions/{region}/networkEndpointGroups/{networkEndpointGroup}/detachNetworkEndpoints
Detach the network endpoint from the specified network endpoint group.
get
GET /compute/v1/projects/{project}/regions/{region}/networkEndpointGroups/{networkEndpointGroup}
Returns the specified network endpoint group.
insert
POST /compute/v1/projects/{project}/regions/{region}/networkEndpointGroups
Creates a network endpoint group in the specified project using the parameters that are included in the request.
list
GET /compute/v1/projects/{project}/regions/{region}/networkEndpointGroups
Retrieves the list of regional network endpoint groups available to the specified project in the given region.
listNetworkEndpoints
POST /compute/v1/projects/{project}/regions/{region}/networkEndpointGroups/{networkEndpointGroup}/listNetworkEndpoints
Lists the network endpoints in the specified network endpoint group.
REST Resource: v1.regionNetworkFirewallPolicies
Methods
addAssociation
POST /compute/v1/projects/{project}/regions/{region}/firewallPolicies/{firewallPolicy}/addAssociation
Inserts an association for the specified network firewall policy.
addRule
POST /compute/v1/projects/{project}/regions/{region}/firewallPolicies/{firewallPolicy}/addRule
Inserts a rule into a network firewall policy.
cloneRules
POST /compute/v1/projects/{project}/regions/{region}/firewallPolicies/{firewallPolicy}/cloneRules
Copies rules to the specified network firewall policy.
delete
DELETE /compute/v1/projects/{project}/regions/{region}/firewallPolicies/{firewallPolicy}
Deletes the specified network firewall policy.
get
GET /compute/v1/projects/{project}/regions/{region}/firewallPolicies/{firewallPolicy}
Returns the specified network firewall policy.
getAssociation
GET /compute/v1/projects/{project}/regions/{region}/firewallPolicies/{firewallPolicy}/getAssociation
Gets an association with the specified name.
getEffectiveFirewalls
GET /compute/v1/projects/{project}/regions/{region}/firewallPolicies/getEffectiveFirewalls
Returns the effective firewalls on a given network.
getIamPolicy
GET /compute/v1/projects/{project}/regions/{region}/firewallPolicies/{resource}/getIamPolicy
Gets the access control policy for a resource.
getRule
GET /compute/v1/projects/{project}/regions/{region}/firewallPolicies/{firewallPolicy}/getRule
Gets a rule of the specified priority.
insert
POST /compute/v1/projects/{project}/regions/{region}/firewallPolicies
Creates a new network firewall policy in the specified project and region.
list
GET /compute/v1/projects/{project}/regions/{region}/firewallPolicies
Lists all the network firewall policies that have been configured for the specified project in the given region.
patch
PATCH /compute/v1/projects/{project}/regions/{region}/firewallPolicies/{firewallPolicy}
Patches the specified network firewall policy.
patchRule
POST /compute/v1/projects/{project}/regions/{region}/firewallPolicies/{firewallPolicy}/patchRule
Patches a rule of the specified priority.
removeAssociation
POST /compute/v1/projects/{project}/regions/{region}/firewallPolicies/{firewallPolicy}/removeAssociation
Removes an association for the specified network firewall policy.
removeRule
POST /compute/v1/projects/{project}/regions/{region}/firewallPolicies/{firewallPolicy}/removeRule
Deletes a rule of the specified priority.
setIamPolicy
POST /compute/v1/projects/{project}/regions/{region}/firewallPolicies/{resource}/setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /compute/v1/projects/{project}/regions/{region}/firewallPolicies/{resource}/testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1.regionNotificationEndpoints
Methods
aggregatedList
GET /compute/v1/projects/{project}/aggregated/notificationEndpoints
Retrieves the list of all NotificationEndpoint resources, regional and global, available to the specified project.
delete
DELETE /compute/v1/projects/{project}/regions/{region}/notificationEndpoints/{notificationEndpoint}
Deletes the specified NotificationEndpoint in the given region
get
GET /compute/v1/projects/{project}/regions/{region}/notificationEndpoints/{notificationEndpoint}
Returns the specified NotificationEndpoint resource in the given region.
insert
POST /compute/v1/projects/{project}/regions/{region}/notificationEndpoints
Create a NotificationEndpoint in the specified project in the given region using the parameters that are included in the request.
list
GET /compute/v1/projects/{project}/regions/{region}/notificationEndpoints
Lists the NotificationEndpoints for a project in the given region.
testIamPermissions
POST /compute/v1/projects/{project}/regions/{region}/notificationEndpoints/{resource}/testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1.regionOperations
Methods
delete
DELETE /compute/v1/projects/{project}/regions/{region}/operations/{operation}
Deletes the specified region-specific Operations resource.
get
GET /compute/v1/projects/{project}/regions/{region}/operations/{operation}
Retrieves the specified region-specific Operations resource.
list
GET /compute/v1/projects/{project}/regions/{region}/operations
Retrieves a list of Operation resources contained within the specified region.
wait
POST /compute/v1/projects/{project}/regions/{region}/operations/{operation}/wait
Waits for the specified Operation resource to return as DONE or for the request to approach the 2 minute deadline, and retrieves the specified Operation resource.
REST Resource: v1.regionSecurityPolicies
Methods
addRule
POST /compute/v1/projects/{project}/regions/{region}/securityPolicies/{securityPolicy}/addRule
Inserts a rule into a security policy.
delete
DELETE /compute/v1/projects/{project}/regions/{region}/securityPolicies/{securityPolicy}
Deletes the specified policy.
get
GET /compute/v1/projects/{project}/regions/{region}/securityPolicies/{securityPolicy}
List all of the ordered rules present in a single specified policy.
getRule
GET /compute/v1/projects/{project}/regions/{region}/securityPolicies/{securityPolicy}/getRule
Gets a rule at the specified priority.
insert
POST /compute/v1/projects/{project}/regions/{region}/securityPolicies
Creates a new policy in the specified project using the data included in the request.
list
GET /compute/v1/projects/{project}/regions/{region}/securityPolicies
List all the policies that have been configured for the specified project and region.
patch
PATCH /compute/v1/projects/{project}/regions/{region}/securityPolicies/{securityPolicy}
Patches the specified policy with the data included in the request.
patchRule
POST /compute/v1/projects/{project}/regions/{region}/securityPolicies/{securityPolicy}/patchRule
Patches a rule at the specified priority.
removeRule
POST /compute/v1/projects/{project}/regions/{region}/securityPolicies/{securityPolicy}/removeRule
Deletes a rule at the specified priority.
setLabels
POST /compute/v1/projects/{project}/regions/{region}/securityPolicies/{resource}/setLabels
Sets the labels on a security policy.
REST Resource: v1.regionSslCertificates
Methods
delete
DELETE /compute/v1/projects/{project}/regions/{region}/sslCertificates/{sslCertificate}
Deletes the specified SslCertificate resource in the region.
get
GET /compute/v1/projects/{project}/regions/{region}/sslCertificates/{sslCertificate}
Returns the specified SslCertificate resource in the specified region.
insert
POST /compute/v1/projects/{project}/regions/{region}/sslCertificates
Creates a SslCertificate resource in the specified project and region using the data included in the request
list
GET /compute/v1/projects/{project}/regions/{region}/sslCertificates
Retrieves the list of SslCertificate resources available to the specified project in the specified region.
REST Resource: v1.regionSslPolicies
Methods
delete
DELETE /compute/v1/projects/{project}/regions/{region}/sslPolicies/{sslPolicy}
Deletes the specified SSL policy.
get
GET /compute/v1/projects/{project}/regions/{region}/sslPolicies/{sslPolicy}
Lists all of the ordered rules present in a single specified policy.
insert
POST /compute/v1/projects/{project}/regions/{region}/sslPolicies
Creates a new policy in the specified project and region using the data included in the request.
list
GET /compute/v1/projects/{project}/regions/{region}/sslPolicies
Lists all the SSL policies that have been configured for the specified project and region.
listAvailableFeatures
GET /compute/v1/projects/{project}/regions/{region}/sslPolicies/listAvailableFeatures
Lists all features that can be specified in the SSL policy when using custom profile.
patch
PATCH /compute/v1/projects/{project}/regions/{region}/sslPolicies/{sslPolicy}
Patches the specified SSL policy with the data included in the request.
REST Resource: v1.regionTargetHttpProxies
Methods
delete
DELETE /compute/v1/projects/{project}/regions/{region}/targetHttpProxies/{targetHttpProxy}
Deletes the specified TargetHttpProxy resource.
get
GET /compute/v1/projects/{project}/regions/{region}/targetHttpProxies/{targetHttpProxy}
Returns the specified TargetHttpProxy resource in the specified region.
insert
POST /compute/v1/projects/{project}/regions/{region}/targetHttpProxies
Creates a TargetHttpProxy resource in the specified project and region using the data included in the request.
list
GET /compute/v1/projects/{project}/regions/{region}/targetHttpProxies
Retrieves the list of TargetHttpProxy resources available to the specified project in the specified region.
setUrlMap
POST /compute/v1/projects/{project}/regions/{region}/targetHttpProxies/{targetHttpProxy}/setUrlMap
Changes the URL map for TargetHttpProxy.
REST Resource: v1.regionTargetHttpsProxies
Methods
delete
DELETE /compute/v1/projects/{project}/regions/{region}/targetHttpsProxies/{targetHttpsProxy}
Deletes the specified TargetHttpsProxy resource.
get
GET /compute/v1/projects/{project}/regions/{region}/targetHttpsProxies/{targetHttpsProxy}
Returns the specified TargetHttpsProxy resource in the specified region.
insert
POST /compute/v1/projects/{project}/regions/{region}/targetHttpsProxies
Creates a TargetHttpsProxy resource in the specified project and region using the data included in the request.
list
GET /compute/v1/projects/{project}/regions/{region}/targetHttpsProxies
Retrieves the list of TargetHttpsProxy resources available to the specified project in the specified region.
patch
PATCH /compute/v1/projects/{project}/regions/{region}/targetHttpsProxies/{targetHttpsProxy}
Patches the specified regional TargetHttpsProxy resource with the data included in the request.
setSslCertificates
POST /compute/v1/projects/{project}/regions/{region}/targetHttpsProxies/{targetHttpsProxy}/setSslCertificates
Replaces SslCertificates for TargetHttpsProxy.
setUrlMap
POST /compute/v1/projects/{project}/regions/{region}/targetHttpsProxies/{targetHttpsProxy}/setUrlMap
Changes the URL map for TargetHttpsProxy.
REST Resource: v1.regionTargetTcpProxies
Methods
delete
DELETE /compute/v1/projects/{project}/regions/{region}/targetTcpProxies/{targetTcpProxy}
Deletes the specified TargetTcpProxy resource.
get
GET /compute/v1/projects/{project}/regions/{region}/targetTcpProxies/{targetTcpProxy}
Returns the specified TargetTcpProxy resource.
insert
POST /compute/v1/projects/{project}/regions/{region}/targetTcpProxies
Creates a TargetTcpProxy resource in the specified project and region using the data included in the request.
list
GET /compute/v1/projects/{project}/regions/{region}/targetTcpProxies
Retrieves a list of TargetTcpProxy resources available to the specified project in a given region.
REST Resource: v1.regionUrlMaps
Methods
delete
DELETE /compute/v1/projects/{project}/regions/{region}/urlMaps/{urlMap}
Deletes the specified UrlMap resource.
get
GET /compute/v1/projects/{project}/regions/{region}/urlMaps/{urlMap}
Returns the specified UrlMap resource.
insert
POST /compute/v1/projects/{project}/regions/{region}/urlMaps
Creates a UrlMap resource in the specified project using the data included in the request.
list
GET /compute/v1/projects/{project}/regions/{region}/urlMaps
Retrieves the list of UrlMap resources available to the specified project in the specified region.
patch
PATCH /compute/v1/projects/{project}/regions/{region}/urlMaps/{urlMap}
Patches the specified UrlMap resource with the data included in the request.
update
PUT /compute/v1/projects/{project}/regions/{region}/urlMaps/{urlMap}
Updates the specified UrlMap resource with the data included in the request.
validate
POST /compute/v1/projects/{project}/regions/{region}/urlMaps/{urlMap}/validate
Runs static validation for the UrlMap.
REST Resource: v1.regionZones
Methods
list
GET /compute/v1/projects/{project}/regions/{region}/zones
Retrieves the list of Zone resources under the specific region available to the specified project.
REST Resource: v1.regions
Methods
get
GET /compute/v1/projects/{project}/regions/{region}
Returns the specified Region resource.
list
GET /compute/v1/projects/{project}/regions
Retrieves the list of region resources available to the specified project.
REST Resource: v1.reservationBlocks
Methods
get
GET /compute/v1/projects/{project}/zones/{zone}/reservations/{reservation}/reservationBlocks/{reservationBlock}
Retrieves information about the specified reservation block.
getIamPolicy
GET /compute/v1/projects/{project}/zones/{zone}/reservations/{parentResource}/reservationBlocks/{resource}/getIamPolicy
Gets the access control policy for a resource.
list
GET /compute/v1/projects/{project}/zones/{zone}/reservations/{reservation}/reservationBlocks
Retrieves a list of reservation blocks under a single reservation.
performMaintenance
POST /compute/v1/projects/{project}/zones/{zone}/reservations/{reservation}/reservationBlocks/{reservationBlock}/performMaintenance
Allows customers to perform maintenance on a reservation block
setIamPolicy
POST /compute/v1/projects/{project}/zones/{zone}/reservations/{parentResource}/reservationBlocks/{resource}/setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /compute/v1/projects/{project}/zones/{zone}/reservations/{parentResource}/reservationBlocks/{resource}/testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1.reservationSlots
Methods
get
GET /compute/v1/projects/{project}/zones/{zone}/{parentName=reservations/*/reservationBlocks/*/reservationSubBlocks/*}/reservationSlots/{reservationSlot}
Retrieves information about the specified reservation slot.
getVersion
POST /compute/v1/projects/{project}/zones/{zone}/{parentName=reservations/*/reservationBlocks/*/reservationSubBlocks/*}/reservationSlots/{reservationSlot}/getVersion
Allows customers to get SBOM versions of a reservation slot.
list
GET /compute/v1/projects/{project}/zones/{zone}/{parentName=reservations/*/reservationBlocks/*/reservationSubBlocks/*}/reservationSlots
Retrieves a list of reservation slots under a single reservation.
update
POST /compute/v1/projects/{project}/zones/{zone}/{parentName=reservations/*/reservationBlocks/*/reservationSubBlocks/*}/reservationSlots/{reservationSlot}
Update a reservation slot in the specified sub-block.
REST Resource: v1.reservationSubBlocks
Methods
get
GET /compute/v1/projects/{project}/zones/{zone}/{parentName=reservations/*/reservationBlocks/*}/reservationSubBlocks/{reservationSubBlock}
Retrieves information about the specified reservation subBlock.
getIamPolicy
GET /compute/v1/projects/{project}/zones/{zone}/{parentResource=reservations/*/reservationBlocks/*}/reservationSubBlocks/{resource}/getIamPolicy
Gets the access control policy for a resource.
getVersion
POST /compute/v1/projects/{project}/zones/{zone}/{parentName=reservations/*/reservationBlocks/*}/reservationSubBlocks/{reservationSubBlock}/getVersion
Allows customers to get SBOM versions of a reservation subBlock.
list
GET /compute/v1/projects/{project}/zones/{zone}/{parentName=reservations/*/reservationBlocks/*}/reservationSubBlocks
Retrieves a list of reservation subBlocks under a single reservation.
performMaintenance
POST /compute/v1/projects/{project}/zones/{zone}/{parentName=reservations/*/reservationBlocks/*}/reservationSubBlocks/{reservationSubBlock}/performMaintenance
Allows customers to perform maintenance on a reservation subBlock
reportFaulty
POST /compute/v1/projects/{project}/zones/{zone}/{parentName=reservations/*/reservationBlocks/*}/reservationSubBlocks/{reservationSubBlock}/reportFaulty
Allows customers to report a faulty subBlock.
setIamPolicy
POST /compute/v1/projects/{project}/zones/{zone}/{parentResource=reservations/*/reservationBlocks/*}/reservationSubBlocks/{resource}/setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /compute/v1/projects/{project}/zones/{zone}/{parentResource=reservations/*/reservationBlocks/*}/reservationSubBlocks/{resource}/testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1.reservations
Methods
aggregatedList
GET /compute/v1/projects/{project}/aggregated/reservations
Retrieves an aggregated list of reservations.
delete
DELETE /compute/v1/projects/{project}/zones/{zone}/reservations/{reservation}
Deletes the specified reservation.
get
GET /compute/v1/projects/{project}/zones/{zone}/reservations/{reservation}
Retrieves information about the specified reservation.
getIamPolicy
GET /compute/v1/projects/{project}/zones/{zone}/reservations/{resource}/getIamPolicy
Gets the access control policy for a resource.
insert
POST /compute/v1/projects/{project}/zones/{zone}/reservations
Creates a new reservation.
list
GET /compute/v1/projects/{project}/zones/{zone}/reservations
A list of all the reservations that have been configured for the specified project in specified zone.
performMaintenance
POST /compute/v1/projects/{project}/zones/{zone}/reservations/{reservation}/performMaintenance
Perform maintenance on an extended reservation
resize
POST /compute/v1/projects/{project}/zones/{zone}/reservations/{reservation}/resize
Resizes the reservation (applicable to standalone reservations only).
setIamPolicy
POST /compute/v1/projects/{project}/zones/{zone}/reservations/{resource}/setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /compute/v1/projects/{project}/zones/{zone}/reservations/{resource}/testIamPermissions
Returns permissions that a caller has on the specified resource.
update
PATCH /compute/v1/projects/{project}/zones/{zone}/reservations/{reservation}
Update share settings of the reservation.
REST Resource: v1.resourcePolicies
Methods
aggregatedList
GET /compute/v1/projects/{project}/aggregated/resourcePolicies
Retrieves an aggregated list of resource policies.
delete
DELETE /compute/v1/projects/{project}/regions/{region}/resourcePolicies/{resourcePolicy}
Deletes the specified resource policy.
get
GET /compute/v1/projects/{project}/regions/{region}/resourcePolicies/{resourcePolicy}
Retrieves all information of the specified resource policy.
getIamPolicy
GET /compute/v1/projects/{project}/regions/{region}/resourcePolicies/{resource}/getIamPolicy
Gets the access control policy for a resource.
insert
POST /compute/v1/projects/{project}/regions/{region}/resourcePolicies
Creates a new resource policy.
list
GET /compute/v1/projects/{project}/regions/{region}/resourcePolicies
A list all the resource policies that have been configured for the specified project in specified region.
patch
PATCH /compute/v1/projects/{project}/regions/{region}/resourcePolicies/{resourcePolicy}
Modify the specified resource policy.
setIamPolicy
POST /compute/v1/projects/{project}/regions/{region}/resourcePolicies/{resource}/setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /compute/v1/projects/{project}/regions/{region}/resourcePolicies/{resource}/testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1.routers
Methods
aggregatedList
GET /compute/v1/projects/{project}/aggregated/routers
Retrieves an aggregated list of routers.
delete
DELETE /compute/v1/projects/{project}/regions/{region}/routers/{router}
Deletes the specified Router resource.
deleteRoutePolicy
POST /compute/v1/projects/{project}/regions/{region}/routers/{router}/deleteRoutePolicy
Deletes Route Policy
get
GET /compute/v1/projects/{project}/regions/{region}/routers/{router}
Returns the specified Router resource.
getNatIpInfo
GET /compute/v1/projects/{project}/regions/{region}/routers/{router}/getNatIpInfo
Retrieves runtime NAT IP information.
getNatMappingInfo
GET /compute/v1/projects/{project}/regions/{region}/routers/{router}/getNatMappingInfo
Retrieves runtime Nat mapping information of VM endpoints.
getRoutePolicy
GET /compute/v1/projects/{project}/regions/{region}/routers/{router}/getRoutePolicy
Returns specified Route Policy
getRouterStatus
GET /compute/v1/projects/{project}/regions/{region}/routers/{router}/getRouterStatus
Retrieves runtime information of the specified router.
insert
POST /compute/v1/projects/{project}/regions/{region}/routers
Creates a Router resource in the specified project and region using the data included in the request.
list
GET /compute/v1/projects/{project}/regions/{region}/routers
Retrieves a list of Router resources available to the specified project.
listBgpRoutes
GET /compute/v1/projects/{project}/regions/{region}/routers/{router}/listBgpRoutes
Retrieves a list of router bgp routes available to the specified project.
listRoutePolicies
GET /compute/v1/projects/{project}/regions/{region}/routers/{router}/listRoutePolicies
Retrieves a list of router route policy subresources available to the specified project.
patch
PATCH /compute/v1/projects/{project}/regions/{region}/routers/{router}
Patches the specified Router resource with the data included in the request.
patchRoutePolicy
POST /compute/v1/projects/{project}/regions/{region}/routers/{router}/patchRoutePolicy
Patches Route Policy
preview
POST /compute/v1/projects/{project}/regions/{region}/routers/{router}/preview
Preview fields auto-generated during router create and update operations.
update
PUT /compute/v1/projects/{project}/regions/{region}/routers/{router}
Updates the specified Router resource with the data included in the request.
updateRoutePolicy
POST /compute/v1/projects/{project}/regions/{region}/routers/{router}/updateRoutePolicy
Updates or creates new Route Policy
REST Resource: v1.routes
Methods
delete
DELETE /compute/v1/projects/{project}/global/routes/{route}
Deletes the specified Route resource.
get
GET /compute/v1/projects/{project}/global/routes/{route}
Returns the specified Route resource.
insert
POST /compute/v1/projects/{project}/global/routes
Creates a Route resource in the specified project using the data included in the request.
list
GET /compute/v1/projects/{project}/global/routes
Retrieves the list of Route resources available to the specified project.
testIamPermissions
POST /compute/v1/projects/{project}/global/routes/{resource}/testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1.securityPolicies
Methods
addRule
POST /compute/v1/projects/{project}/global/securityPolicies/{securityPolicy}/addRule
Inserts a rule into a security policy.
aggregatedList
GET /compute/v1/projects/{project}/aggregated/securityPolicies
Retrieves the list of all SecurityPolicy resources, regional and global, available to the specified project.
delete
DELETE /compute/v1/projects/{project}/global/securityPolicies/{securityPolicy}
Deletes the specified policy.
get
GET /compute/v1/projects/{project}/global/securityPolicies/{securityPolicy}
List all of the ordered rules present in a single specified policy.
getRule
GET /compute/v1/projects/{project}/global/securityPolicies/{securityPolicy}/getRule
Gets a rule at the specified priority.
insert
POST /compute/v1/projects/{project}/global/securityPolicies
Creates a new policy in the specified project using the data included in the request.
list
GET /compute/v1/projects/{project}/global/securityPolicies
List all the policies that have been configured for the specified project.
listPreconfiguredExpressionSets
GET /compute/v1/projects/{project}/global/securityPolicies/listPreconfiguredExpressionSets
Gets the current list of preconfigured Web Application Firewall (WAF) expressions.
patch
PATCH /compute/v1/projects/{project}/global/securityPolicies/{securityPolicy}
Patches the specified policy with the data included in the request.
patchRule
POST /compute/v1/projects/{project}/global/securityPolicies/{securityPolicy}/patchRule
Patches a rule at the specified priority.
removeRule
POST /compute/v1/projects/{project}/global/securityPolicies/{securityPolicy}/removeRule
Deletes a rule at the specified priority.
setLabels
POST /compute/v1/projects/{project}/global/securityPolicies/{resource}/setLabels
Sets the labels on a security policy.
REST Resource: v1.serviceAttachments
Methods
aggregatedList
GET /compute/v1/projects/{project}/aggregated/serviceAttachments
Retrieves the list of all ServiceAttachment resources, regional and global, available to the specified project.
delete
DELETE /compute/v1/projects/{project}/regions/{region}/serviceAttachments/{serviceAttachment}
Deletes the specified ServiceAttachment in the given scope
get
GET /compute/v1/projects/{project}/regions/{region}/serviceAttachments/{serviceAttachment}
Returns the specified ServiceAttachment resource in the given scope.
getIamPolicy
GET /compute/v1/projects/{project}/regions/{region}/serviceAttachments/{resource}/getIamPolicy
Gets the access control policy for a resource.
insert
POST /compute/v1/projects/{project}/regions/{region}/serviceAttachments
Creates a ServiceAttachment in the specified project in the given scope using the parameters that are included in the request.
list
GET /compute/v1/projects/{project}/regions/{region}/serviceAttachments
Lists the ServiceAttachments for a project in the given scope.
patch
PATCH /compute/v1/projects/{project}/regions/{region}/serviceAttachments/{serviceAttachment}
Patches the specified ServiceAttachment resource with the data included in the request.
setIamPolicy
POST /compute/v1/projects/{project}/regions/{region}/serviceAttachments/{resource}/setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /compute/v1/projects/{project}/regions/{region}/serviceAttachments/{resource}/testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1.snapshotSettings
Methods
get
GET /compute/v1/projects/{project}/global/snapshotSettings
Get snapshot settings.
patch
PATCH /compute/v1/projects/{project}/global/snapshotSettings
Patch snapshot settings.
REST Resource: v1.snapshots
Methods
delete
DELETE /compute/v1/projects/{project}/global/snapshots/{snapshot}
Deletes the specified Snapshot resource.
get
GET /compute/v1/projects/{project}/global/snapshots/{snapshot}
Returns the specified Snapshot resource.
getIamPolicy
GET /compute/v1/projects/{project}/global/snapshots/{resource}/getIamPolicy
Gets the access control policy for a resource.
insert
POST /compute/v1/projects/{project}/global/snapshots
Creates a snapshot in the specified project using the data included in the request.
list
GET /compute/v1/projects/{project}/global/snapshots
Retrieves the list of Snapshot resources contained within the specified project.
setIamPolicy
POST /compute/v1/projects/{project}/global/snapshots/{resource}/setIamPolicy
Sets the access control policy on the specified resource.
setLabels
POST /compute/v1/projects/{project}/global/snapshots/{resource}/setLabels
Sets the labels on a snapshot.
testIamPermissions
POST /compute/v1/projects/{project}/global/snapshots/{resource}/testIamPermissions
Returns permissions that a caller has on the specified resource.
updateKmsKey
POST /compute/v1/projects/{project}/global/snapshots/{snapshot}/updateKmsKey
Rotates the customer-managed encryption key to the latest version for the specified snapshot.
REST Resource: v1.sslCertificates
Methods
aggregatedList
GET /compute/v1/projects/{project}/aggregated/sslCertificates
Retrieves the list of all SslCertificate resources, regional and global, available to the specified project.
delete
DELETE /compute/v1/projects/{project}/global/sslCertificates/{sslCertificate}
Deletes the specified SslCertificate resource.
get
GET /compute/v1/projects/{project}/global/sslCertificates/{sslCertificate}
Returns the specified SslCertificate resource.
insert
POST /compute/v1/projects/{project}/global/sslCertificates
Creates a SslCertificate resource in the specified project using the data included in the request.
list
GET /compute/v1/projects/{project}/global/sslCertificates
Retrieves the list of SslCertificate resources available to the specified project.
REST Resource: v1.sslPolicies
Methods
aggregatedList
GET /compute/v1/projects/{project}/aggregated/sslPolicies
Retrieves the list of all SslPolicy resources, regional and global, available to the specified project.
delete
DELETE /compute/v1/projects/{project}/global/sslPolicies/{sslPolicy}
Deletes the specified SSL policy.
get
GET /compute/v1/projects/{project}/global/sslPolicies/{sslPolicy}
Lists all of the ordered rules present in a single specified policy.
insert
POST /compute/v1/projects/{project}/global/sslPolicies
Returns the specified SSL policy resource.
list
GET /compute/v1/projects/{project}/global/sslPolicies
Lists all the SSL policies that have been configured for the specified project.
listAvailableFeatures
GET /compute/v1/projects/{project}/global/sslPolicies/listAvailableFeatures
Lists all features that can be specified in the SSL policy when using custom profile.
patch
PATCH /compute/v1/projects/{project}/global/sslPolicies/{sslPolicy}
Patches the specified SSL policy with the data included in the request.
REST Resource: v1.storagePoolTypes
Methods
aggregatedList
GET /compute/v1/projects/{project}/aggregated/storagePoolTypes
Retrieves an aggregated list of storage pool types.
get
GET /compute/v1/projects/{project}/zones/{zone}/storagePoolTypes/{storagePoolType}
Returns the specified storage pool type.
list
GET /compute/v1/projects/{project}/zones/{zone}/storagePoolTypes
Retrieves a list of storage pool types available to the specified project.
REST Resource: v1.storagePools
Methods
aggregatedList
GET /compute/v1/projects/{project}/aggregated/storagePools
Retrieves an aggregated list of storage pools.
delete
DELETE /compute/v1/projects/{project}/zones/{zone}/storagePools/{storagePool}
Deletes the specified storage pool.
get
GET /compute/v1/projects/{project}/zones/{zone}/storagePools/{storagePool}
Returns a specified storage pool.
getIamPolicy
GET /compute/v1/projects/{project}/zones/{zone}/storagePools/{resource}/getIamPolicy
Gets the access control policy for a resource.
insert
POST /compute/v1/projects/{project}/zones/{zone}/storagePools
Creates a storage pool in the specified project using the data in the request.
list
GET /compute/v1/projects/{project}/zones/{zone}/storagePools
Retrieves a list of storage pools contained within the specified zone.
listDisks
GET /compute/v1/projects/{project}/zones/{zone}/storagePools/{storagePool}/listDisks
Lists the disks in a specified storage pool.
setIamPolicy
POST /compute/v1/projects/{project}/zones/{zone}/storagePools/{resource}/setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /compute/v1/projects/{project}/zones/{zone}/storagePools/{resource}/testIamPermissions
Returns permissions that a caller has on the specified resource.
update
PATCH /compute/v1/projects/{project}/zones/{zone}/storagePools/{storagePool}
Updates the specified storagePool with the data included in the request.
REST Resource: v1.subnetworks
Methods
aggregatedList
GET /compute/v1/projects/{project}/aggregated/subnetworks
Retrieves an aggregated list of subnetworks.
delete
DELETE /compute/v1/projects/{project}/regions/{region}/subnetworks/{subnetwork}
Deletes the specified subnetwork.
expandIpCidrRange
POST /compute/v1/projects/{project}/regions/{region}/subnetworks/{subnetwork}/expandIpCidrRange
Expands the IP CIDR range of the subnetwork to a specified value.
get
GET /compute/v1/projects/{project}/regions/{region}/subnetworks/{subnetwork}
Returns the specified subnetwork.
getIamPolicy
GET /compute/v1/projects/{project}/regions/{region}/subnetworks/{resource}/getIamPolicy
Gets the access control policy for a resource.
insert
POST /compute/v1/projects/{project}/regions/{region}/subnetworks
Creates a subnetwork in the specified project using the data included in the request.
list
GET /compute/v1/projects/{project}/regions/{region}/subnetworks
Retrieves a list of subnetworks available to the specified project.
listUsable
GET /compute/v1/projects/{project}/aggregated/subnetworks/listUsable
Retrieves an aggregated list of all usable subnetworks in the project.
patch
PATCH /compute/v1/projects/{project}/regions/{region}/subnetworks/{subnetwork}
Patches the specified subnetwork with the data included in the request.
setIamPolicy
POST /compute/v1/projects/{project}/regions/{region}/subnetworks/{resource}/setIamPolicy
Sets the access control policy on the specified resource.
setPrivateIpGoogleAccess
POST /compute/v1/projects/{project}/regions/{region}/subnetworks/{subnetwork}/setPrivateIpGoogleAccess
Set whether VMs in this subnet can access Google services without assigning external IP addresses through Private Google Access.
testIamPermissions
POST /compute/v1/projects/{project}/regions/{region}/subnetworks/{resource}/testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1.targetGrpcProxies
Methods
delete
DELETE /compute/v1/projects/{project}/global/targetGrpcProxies/{targetGrpcProxy}
Deletes the specified TargetGrpcProxy in the given scope
get
GET /compute/v1/projects/{project}/global/targetGrpcProxies/{targetGrpcProxy}
Returns the specified TargetGrpcProxy resource in the given scope.
insert
POST /compute/v1/projects/{project}/global/targetGrpcProxies
Creates a TargetGrpcProxy in the specified project in the given scope using the parameters that are included in the request.
list
GET /compute/v1/projects/{project}/global/targetGrpcProxies
Lists the TargetGrpcProxies for a project in the given scope.
patch
PATCH /compute/v1/projects/{project}/global/targetGrpcProxies/{targetGrpcProxy}
Patches the specified TargetGrpcProxy resource with the data included in the request.
REST Resource: v1.targetHttpProxies
Methods
aggregatedList
GET /compute/v1/projects/{project}/aggregated/targetHttpProxies
Retrieves the list of all TargetHttpProxy resources, regional and global, available to the specified project.
delete
DELETE /compute/v1/projects/{project}/global/targetHttpProxies/{targetHttpProxy}
Deletes the specified TargetHttpProxy resource.
get
GET /compute/v1/projects/{project}/global/targetHttpProxies/{targetHttpProxy}
Returns the specified TargetHttpProxy resource.
insert
POST /compute/v1/projects/{project}/global/targetHttpProxies
Creates a TargetHttpProxy resource in the specified project using the data included in the request.
list
GET /compute/v1/projects/{project}/global/targetHttpProxies
Retrieves the list of TargetHttpProxy resources available to the specified project.
patch
PATCH /compute/v1/projects/{project}/global/targetHttpProxies/{targetHttpProxy}
Patches the specified TargetHttpProxy resource with the data included in the request.
setUrlMap
POST /compute/v1/projects/{project}/targetHttpProxies/{targetHttpProxy}/setUrlMap
Changes the URL map for TargetHttpProxy.
REST Resource: v1.targetHttpsProxies
Methods
aggregatedList
GET /compute/v1/projects/{project}/aggregated/targetHttpsProxies
Retrieves the list of all TargetHttpsProxy resources, regional and global, available to the specified project.
delete
DELETE /compute/v1/projects/{project}/global/targetHttpsProxies/{targetHttpsProxy}
Deletes the specified TargetHttpsProxy resource.
get
GET /compute/v1/projects/{project}/global/targetHttpsProxies/{targetHttpsProxy}
Returns the specified TargetHttpsProxy resource.
insert
POST /compute/v1/projects/{project}/global/targetHttpsProxies
Creates a TargetHttpsProxy resource in the specified project using the data included in the request.
list
GET /compute/v1/projects/{project}/global/targetHttpsProxies
Retrieves the list of TargetHttpsProxy resources available to the specified project.
patch
PATCH /compute/v1/projects/{project}/global/targetHttpsProxies/{targetHttpsProxy}
Patches the specified TargetHttpsProxy resource with the data included in the request.
setCertificateMap
POST /compute/v1/projects/{project}/global/targetHttpsProxies/{targetHttpsProxy}/setCertificateMap
Changes the Certificate Map for TargetHttpsProxy.
setQuicOverride
POST /compute/v1/projects/{project}/global/targetHttpsProxies/{targetHttpsProxy}/setQuicOverride
Sets the QUIC override policy for TargetHttpsProxy.
setSslCertificates
POST /compute/v1/projects/{project}/targetHttpsProxies/{targetHttpsProxy}/setSslCertificates
Replaces SslCertificates for TargetHttpsProxy.
setSslPolicy
POST /compute/v1/projects/{project}/global/targetHttpsProxies/{targetHttpsProxy}/setSslPolicy
Sets the SSL policy for TargetHttpsProxy.
setUrlMap
POST /compute/v1/projects/{project}/targetHttpsProxies/{targetHttpsProxy}/setUrlMap
Changes the URL map for TargetHttpsProxy.
REST Resource: v1.targetInstances
Methods
aggregatedList
GET /compute/v1/projects/{project}/aggregated/targetInstances
Retrieves an aggregated list of target instances.
delete
DELETE /compute/v1/projects/{project}/zones/{zone}/targetInstances/{targetInstance}
Deletes the specified TargetInstance resource.
get
GET /compute/v1/projects/{project}/zones/{zone}/targetInstances/{targetInstance}
Returns the specified TargetInstance resource.
insert
POST /compute/v1/projects/{project}/zones/{zone}/targetInstances
Creates a TargetInstance resource in the specified project and zone using the data included in the request.
list
GET /compute/v1/projects/{project}/zones/{zone}/targetInstances
Retrieves a list of TargetInstance resources available to the specified project and zone.
setSecurityPolicy
POST /compute/v1/projects/{project}/zones/{zone}/targetInstances/{targetInstance}/setSecurityPolicy
Sets the Google Cloud Armor security policy for the specified target instance.
testIamPermissions
POST /compute/v1/projects/{project}/zones/{zone}/targetInstances/{resource}/testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1.targetPools
Methods
addHealthCheck
POST /compute/v1/projects/{project}/regions/{region}/targetPools/{targetPool}/addHealthCheck
Adds health check URLs to a target pool.
addInstance
POST /compute/v1/projects/{project}/regions/{region}/targetPools/{targetPool}/addInstance
Adds an instance to a target pool.
aggregatedList
GET /compute/v1/projects/{project}/aggregated/targetPools
Retrieves an aggregated list of target pools.
delete
DELETE /compute/v1/projects/{project}/regions/{region}/targetPools/{targetPool}
Deletes the specified target pool.
get
GET /compute/v1/projects/{project}/regions/{region}/targetPools/{targetPool}
Returns the specified target pool.
getHealth
POST /compute/v1/projects/{project}/regions/{region}/targetPools/{targetPool}/getHealth
Gets the most recent health check results for each IP for the instance that is referenced by the given target pool.
insert
POST /compute/v1/projects/{project}/regions/{region}/targetPools
Creates a target pool in the specified project and region using the data included in the request.
list
GET /compute/v1/projects/{project}/regions/{region}/targetPools
Retrieves a list of target pools available to the specified project and region.
removeHealthCheck
POST /compute/v1/projects/{project}/regions/{region}/targetPools/{targetPool}/removeHealthCheck
Removes health check URL from a target pool.
removeInstance
POST /compute/v1/projects/{project}/regions/{region}/targetPools/{targetPool}/removeInstance
Removes instance URL from a target pool.
setBackup
POST /compute/v1/projects/{project}/regions/{region}/targetPools/{targetPool}/setBackup
Changes a backup target pool's configurations.
setSecurityPolicy
POST /compute/v1/projects/{project}/regions/{region}/targetPools/{targetPool}/setSecurityPolicy
Sets the Google Cloud Armor security policy for the specified target pool.
testIamPermissions
POST /compute/v1/projects/{project}/regions/{region}/targetPools/{resource}/testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1.targetSslProxies
Methods
delete
DELETE /compute/v1/projects/{project}/global/targetSslProxies/{targetSslProxy}
Deletes the specified TargetSslProxy resource.
get
GET /compute/v1/projects/{project}/global/targetSslProxies/{targetSslProxy}
Returns the specified TargetSslProxy resource.
insert
POST /compute/v1/projects/{project}/global/targetSslProxies
Creates a TargetSslProxy resource in the specified project using the data included in the request.
list
GET /compute/v1/projects/{project}/global/targetSslProxies
Retrieves the list of TargetSslProxy resources available to the specified project.
setBackendService
POST /compute/v1/projects/{project}/global/targetSslProxies/{targetSslProxy}/setBackendService
Changes the BackendService for TargetSslProxy.
setCertificateMap
POST /compute/v1/projects/{project}/global/targetSslProxies/{targetSslProxy}/setCertificateMap
Changes the Certificate Map for TargetSslProxy.
setProxyHeader
POST /compute/v1/projects/{project}/global/targetSslProxies/{targetSslProxy}/setProxyHeader
Changes the ProxyHeaderType for TargetSslProxy.
setSslCertificates
POST /compute/v1/projects/{project}/global/targetSslProxies/{targetSslProxy}/setSslCertificates
Changes SslCertificates for TargetSslProxy.
setSslPolicy
POST /compute/v1/projects/{project}/global/targetSslProxies/{targetSslProxy}/setSslPolicy
Sets the SSL policy for TargetSslProxy.
testIamPermissions
POST /compute/v1/projects/{project}/global/targetSslProxies/{resource}/testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1.targetTcpProxies
Methods
aggregatedList
GET /compute/v1/projects/{project}/aggregated/targetTcpProxies
Retrieves the list of all TargetTcpProxy resources, regional and global, available to the specified project.
delete
DELETE /compute/v1/projects/{project}/global/targetTcpProxies/{targetTcpProxy}
Deletes the specified TargetTcpProxy resource.
get
GET /compute/v1/projects/{project}/global/targetTcpProxies/{targetTcpProxy}
Returns the specified TargetTcpProxy resource.
insert
POST /compute/v1/projects/{project}/global/targetTcpProxies
Creates a TargetTcpProxy resource in the specified project using the data included in the request.
list
GET /compute/v1/projects/{project}/global/targetTcpProxies
Retrieves the list of TargetTcpProxy resources available to the specified project.
setBackendService
POST /compute/v1/projects/{project}/global/targetTcpProxies/{targetTcpProxy}/setBackendService
Changes the BackendService for TargetTcpProxy.
setProxyHeader
POST /compute/v1/projects/{project}/global/targetTcpProxies/{targetTcpProxy}/setProxyHeader
Changes the ProxyHeaderType for TargetTcpProxy.
testIamPermissions
POST /compute/v1/projects/{project}/global/targetTcpProxies/{resource}/testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1.targetVpnGateways
Methods
aggregatedList
GET /compute/v1/projects/{project}/aggregated/targetVpnGateways
Retrieves an aggregated list of target VPN gateways.
delete
DELETE /compute/v1/projects/{project}/regions/{region}/targetVpnGateways/{targetVpnGateway}
Deletes the specified target VPN gateway.
get
GET /compute/v1/projects/{project}/regions/{region}/targetVpnGateways/{targetVpnGateway}
Returns the specified target VPN gateway.
insert
POST /compute/v1/projects/{project}/regions/{region}/targetVpnGateways
Creates a target VPN gateway in the specified project and region using the data included in the request.
list
GET /compute/v1/projects/{project}/regions/{region}/targetVpnGateways
Retrieves a list of target VPN gateways available to the specified project and region.
setLabels
POST /compute/v1/projects/{project}/regions/{region}/targetVpnGateways/{resource}/setLabels
Sets the labels on a TargetVpnGateway.
REST Resource: v1.urlMaps
Methods
aggregatedList
GET /compute/v1/projects/{project}/aggregated/urlMaps
Retrieves the list of all UrlMap resources, regional and global, available to the specified project.
delete
DELETE /compute/v1/projects/{project}/global/urlMaps/{urlMap}
Deletes the specified UrlMap resource.
get
GET /compute/v1/projects/{project}/global/urlMaps/{urlMap}
Returns the specified UrlMap resource.
insert
POST /compute/v1/projects/{project}/global/urlMaps
Creates a UrlMap resource in the specified project using the data included in the request.
invalidateCache
POST /compute/v1/projects/{project}/global/urlMaps/{urlMap}/invalidateCache
Initiates a cache invalidation operation, invalidating the specified path, scoped to the specified UrlMap.
list
GET /compute/v1/projects/{project}/global/urlMaps
Retrieves the list of UrlMap resources available to the specified project.
patch
PATCH /compute/v1/projects/{project}/global/urlMaps/{urlMap}
Patches the specified UrlMap resource with the data included in the request.
testIamPermissions
POST /compute/v1/projects/{project}/global/urlMaps/{resource}/testIamPermissions
Returns permissions that a caller has on the specified resource.
update
PUT /compute/v1/projects/{project}/global/urlMaps/{urlMap}
Updates the specified UrlMap resource with the data included in the request.
validate
POST /compute/v1/projects/{project}/global/urlMaps/{urlMap}/validate
Runs static validation for the UrlMap.
REST Resource: v1.vpnGateways
Methods
aggregatedList
GET /compute/v1/projects/{project}/aggregated/vpnGateways
Retrieves an aggregated list of VPN gateways.
delete
DELETE /compute/v1/projects/{project}/regions/{region}/vpnGateways/{vpnGateway}
Deletes the specified VPN gateway.
get
GET /compute/v1/projects/{project}/regions/{region}/vpnGateways/{vpnGateway}
Returns the specified VPN gateway.
getStatus
GET /compute/v1/projects/{project}/regions/{region}/vpnGateways/{vpnGateway}/getStatus
Returns the status for the specified VPN gateway.
insert
POST /compute/v1/projects/{project}/regions/{region}/vpnGateways
Creates a VPN gateway in the specified project and region using the data included in the request.
list
GET /compute/v1/projects/{project}/regions/{region}/vpnGateways
Retrieves a list of VPN gateways available to the specified project and region.
setLabels
POST /compute/v1/projects/{project}/regions/{region}/vpnGateways/{resource}/setLabels
Sets the labels on a VpnGateway.
testIamPermissions
POST /compute/v1/projects/{project}/regions/{region}/vpnGateways/{resource}/testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1.vpnTunnels
Methods
aggregatedList
GET /compute/v1/projects/{project}/aggregated/vpnTunnels
Retrieves an aggregated list of VPN tunnels.
delete
DELETE /compute/v1/projects/{project}/regions/{region}/vpnTunnels/{vpnTunnel}
Deletes the specified VpnTunnel resource.
get
GET /compute/v1/projects/{project}/regions/{region}/vpnTunnels/{vpnTunnel}
Returns the specified VpnTunnel resource.
insert
POST /compute/v1/projects/{project}/regions/{region}/vpnTunnels
Creates a VpnTunnel resource in the specified project and region using the data included in the request.
list
GET /compute/v1/projects/{project}/regions/{region}/vpnTunnels
Retrieves a list of VpnTunnel resources contained in the specified project and region.
setLabels
POST /compute/v1/projects/{project}/regions/{region}/vpnTunnels/{resource}/setLabels
Sets the labels on a VpnTunnel.
REST Resource: v1.wireGroups
Methods
delete
DELETE /compute/v1/projects/{project}/global/crossSiteNetworks/{crossSiteNetwork}/wireGroups/{wireGroup}
Deletes the specified wire group in the given scope.
get
GET /compute/v1/projects/{project}/global/crossSiteNetworks/{crossSiteNetwork}/wireGroups/{wireGroup}
Gets the specified wire group resource in the given scope.
insert
POST /compute/v1/projects/{project}/global/crossSiteNetworks/{crossSiteNetwork}/wireGroups
Creates a wire group in the specified project in the given scope using the parameters that are included in the request.
list
GET /compute/v1/projects/{project}/global/crossSiteNetworks/{crossSiteNetwork}/wireGroups
Lists the wire groups for a project in the given scope.
patch
PATCH /compute/v1/projects/{project}/global/crossSiteNetworks/{crossSiteNetwork}/wireGroups/{wireGroup}
Updates the specified wire group resource with the data included in the request.
REST Resource: v1.zoneOperations
Methods
delete
DELETE /compute/v1/projects/{project}/zones/{zone}/operations/{operation}
Deletes the specified zone-specific Operations resource.
get
GET /compute/v1/projects/{project}/zones/{zone}/operations/{operation}
Retrieves the specified zone-specific Operations resource.
list
GET /compute/v1/projects/{project}/zones/{zone}/operations
Retrieves a list of Operation resources contained within the specified zone.
wait
POST /compute/v1/projects/{project}/zones/{zone}/operations/{operation}/wait
Waits for the specified Operation resource to return as DONE or for the request to approach the 2 minute deadline, and retrieves the specified Operation resource.
REST Resource: v1.zoneVmExtensionPolicies
Methods
delete
DELETE /compute/v1/projects/{project}/zones/{zone}/vmExtensionPolicies/{vmExtensionPolicy}
Deletes a specified zone VM extension policy.
get
GET /compute/v1/projects/{project}/zones/{zone}/vmExtensionPolicies/{vmExtensionPolicy}
Retrieves details of a specific zone VM extension policy.
insert
POST /compute/v1/projects/{project}/zones/{zone}/vmExtensionPolicies
Creates a new zone-level VM extension policy within a project.
list
GET /compute/v1/projects/{project}/zones/{zone}/vmExtensionPolicies
Lists all VM extension policies within a specific zone for a project.
update
PATCH /compute/v1/projects/{project}/zones/{zone}/vmExtensionPolicies/{vmExtensionPolicy}
Modifies an existing zone VM extension policy.
REST Resource: v1.zones
Methods
get
GET /compute/v1/projects/{project}/zones/{zone}
Returns the specified Zone resource.
list
GET /compute/v1/projects/{project}/zones
Retrieves the list of Zone resources available to the specified project.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
