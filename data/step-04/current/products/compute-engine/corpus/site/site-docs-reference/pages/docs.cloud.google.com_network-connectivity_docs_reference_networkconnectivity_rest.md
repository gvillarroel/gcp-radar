---
title: "Network Connectivity API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/network-connectivity/docs/reference/networkconnectivity/rest
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/apis
source_metadata:
  url: https://docs.cloud.google.com/network-connectivity/docs/reference/networkconnectivity/rest
  title: "Network Connectivity API \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Network Connectivity
Reference
Send feedback
Network Connectivity API
Stay organized with collections
Save and categorize content based on your preferences.
This API enables connectivity with and between Google Cloud resources.
REST Resource: v1beta.projects.locations
REST Resource: v1beta.projects.locations.global.hubs
REST Resource: v1beta.projects.locations.global.hubs.groups
REST Resource: v1beta.projects.locations.global.hubs.routeTables
REST Resource: v1beta.projects.locations.global.hubs.routeTables.routes
REST Resource: v1beta.projects.locations.global.policyBasedRoutes
REST Resource: v1beta.projects.locations.multicloudDataTransferConfigs
REST Resource:
v1beta.projects.locations.multicloudDataTransferConfigs.destinations
REST Resource:
v1beta.projects.locations.multicloudDataTransferSupportedServices
REST Resource: v1beta.projects.locations.operations
REST Resource: v1beta.projects.locations.regionalEndpoints
REST Resource: v1beta.projects.locations.remoteTransportProfiles
REST Resource: v1beta.projects.locations.spokes
REST Resource: v1beta.projects.locations.spokes.gatewayAdvertisedRoutes
REST Resource: v1beta.projects.locations.transports
REST Resource: v1alpha1.projects.locations
REST Resource: v1alpha1.projects.locations.global.hubs
REST Resource: v1alpha1.projects.locations.internalRanges
REST Resource: v1alpha1.projects.locations.operations
REST Resource: v1alpha1.projects.locations.spokes
REST Resource: v1.projects.locations
REST Resource: v1.projects.locations.global.hubs
REST Resource: v1.projects.locations.global.hubs.groups
REST Resource: v1.projects.locations.global.hubs.routeTables
REST Resource: v1.projects.locations.global.hubs.routeTables.routes
REST Resource: v1.projects.locations.global.policyBasedRoutes
REST Resource: v1.projects.locations.internalRanges
REST Resource: v1.projects.locations.multicloudDataTransferConfigs
REST Resource:
v1.projects.locations.multicloudDataTransferConfigs.destinations
REST Resource: v1.projects.locations.multicloudDataTransferSupportedServices
REST Resource: v1.projects.locations.operations
REST Resource: v1.projects.locations.regionalEndpoints
REST Resource: v1.projects.locations.serviceClasses
REST Resource: v1.projects.locations.serviceConnectionMaps
REST Resource: v1.projects.locations.serviceConnectionPolicies
REST Resource: v1.projects.locations.serviceConnectionTokens
REST Resource: v1.projects.locations.spokes
Service: networkconnectivity.googleapis.com
To call this service, we recommend that you use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery documents:
https://networkconnectivity.googleapis.com/$discovery/rest?version=v1
https://networkconnectivity.googleapis.com/$discovery/rest?version=v1beta
https://networkconnectivity.googleapis.com/$discovery/rest?version=v1alpha1
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://networkconnectivity.googleapis.com
REST Resource: v1beta.projects.locations
Methods
get
GET /v1beta/{name=projects/*/locations/*}
Gets information about a location.
list
GET /v1beta/{name=projects/*}/locations
Lists information about the supported locations for this service.
REST Resource: v1beta.projects.locations.global.hubs
Methods
acceptSpoke
POST /v1beta/{name=projects/*/locations/global/hubs/*}:acceptSpoke
Accepts a proposal to attach a Network Connectivity Center spoke to a hub.
acceptSpokeUpdate
POST /v1beta/{name=projects/*/locations/global/hubs/*}:acceptSpokeUpdate
Accepts a proposal to update a Network Connectivity Center spoke in a hub.
create
POST /v1beta/{parent=projects/*/locations/global}/hubs
Creates a new Network Connectivity Center hub in the specified project.
delete
DELETE /v1beta/{name=projects/*/locations/global/hubs/*}
Deletes a Network Connectivity Center hub.
get
GET /v1beta/{name=projects/*/locations/global/hubs/*}
Gets details about a Network Connectivity Center hub.
getIamPolicy
GET /v1beta/{resource=projects/*/locations/global/hubs/*}:getIamPolicy
Gets the access control policy for a resource.
list
GET /v1beta/{parent=projects/*/locations/global}/hubs
Lists the Network Connectivity Center hubs associated with a given project.
listSpokes
GET /v1beta/{name=projects/*/locations/global/hubs/*}:listSpokes
Lists the Network Connectivity Center spokes associated with a specified hub and location.
patch
PATCH /v1beta/{hub.name=projects/*/locations/global/hubs/*}
Updates the description and/or labels of a Network Connectivity Center hub.
queryStatus
GET /v1beta/{name=projects/*/locations/global/hubs/*}:queryStatus
Query the Private Service Connect propagation status of a Network Connectivity Center hub.
rejectSpoke
POST /v1beta/{name=projects/*/locations/global/hubs/*}:rejectSpoke
Rejects a Network Connectivity Center spoke from being attached to a hub.
rejectSpokeUpdate
POST /v1beta/{name=projects/*/locations/global/hubs/*}:rejectSpokeUpdate
Rejects a proposal to update a Network Connectivity Center spoke in a hub.
setIamPolicy
POST /v1beta/{resource=projects/*/locations/global/hubs/*}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v1beta/{resource=projects/*/locations/global/hubs/*}:testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1beta.projects.locations.global.hubs.groups
Methods
get
GET /v1beta/{name=projects/*/locations/global/hubs/*/groups/*}
Gets details about a Network Connectivity Center group.
getIamPolicy
GET /v1beta/{resource=projects/*/locations/global/hubs/*/groups/*}:getIamPolicy
Gets the access control policy for a resource.
list
GET /v1beta/{parent=projects/*/locations/global/hubs/*}/groups
Lists groups in a given hub.
patch
PATCH /v1beta/{group.name=projects/*/locations/global/hubs/*/groups/*}
Updates the parameters of a Network Connectivity Center group.
setIamPolicy
POST /v1beta/{resource=projects/*/locations/global/hubs/*/groups/*}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v1beta/{resource=projects/*/locations/global/hubs/*/groups/*}:testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1beta.projects.locations.global.hubs.routeTables
Methods
get
GET /v1beta/{name=projects/*/locations/global/hubs/*/routeTables/*}
Gets details about a Network Connectivity Center route table.
list
GET /v1beta/{parent=projects/*/locations/global/hubs/*}/routeTables
Lists route tables in a given hub.
REST Resource: v1beta.projects.locations.global.hubs.routeTables.routes
Methods
get
GET /v1beta/{name=projects/*/locations/global/hubs/*/routeTables/*/routes/*}
Gets details about the specified route.
list
GET /v1beta/{parent=projects/*/locations/global/hubs/*/routeTables/*}/routes
Lists routes in a given route table.
REST Resource: v1beta.projects.locations.global.policyBasedRoutes
Methods
create
POST /v1beta/{parent=projects/*/locations/global}/policyBasedRoutes
Creates a new policy-based route in a given project and location.
delete
DELETE /v1beta/{name=projects/*/locations/global/policyBasedRoutes/*}
Deletes a single policy-based route.
get
GET /v1beta/{name=projects/*/locations/global/policyBasedRoutes/*}
Gets details of a single policy-based route.
getIamPolicy
GET /v1beta/{resource=projects/*/locations/global/policyBasedRoutes/*}:getIamPolicy
Gets the access control policy for a resource.
list
GET /v1beta/{parent=projects/*/locations/global}/policyBasedRoutes
Lists policy-based routes in a given project and location.
setIamPolicy
POST /v1beta/{resource=projects/*/locations/global/policyBasedRoutes/*}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v1beta/{resource=projects/*/locations/global/policyBasedRoutes/*}:testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1beta.projects.locations.multicloudDataTransferConfigs
Methods
create
POST /v1beta/{parent=projects/*/locations/*}/multicloudDataTransferConfigs
Creates a MulticloudDataTransferConfig resource in a specified project and location.
delete
DELETE /v1beta/{name=projects/*/locations/*/multicloudDataTransferConfigs/*}
Deletes a MulticloudDataTransferConfig resource.
get
GET /v1beta/{name=projects/*/locations/*/multicloudDataTransferConfigs/*}
Gets the details of a MulticloudDataTransferConfig resource.
list
GET /v1beta/{parent=projects/*/locations/*}/multicloudDataTransferConfigs
Lists the MulticloudDataTransferConfig resources in a specified project and location.
patch
PATCH /v1beta/{multicloudDataTransferConfig.name=projects/*/locations/*/multicloudDataTransferConfigs/*}
Updates a MulticloudDataTransferConfig resource in a specified project and location.
REST Resource: v1beta.projects.locations.multicloudDataTransferConfigs.destinations
Methods
create
POST /v1beta/{parent=projects/*/locations/*/multicloudDataTransferConfigs/*}/destinations
Creates a Destination resource in a specified project and location.
delete
DELETE /v1beta/{name=projects/*/locations/*/multicloudDataTransferConfigs/*/destinations/*}
Deletes a Destination resource.
get
GET /v1beta/{name=projects/*/locations/*/multicloudDataTransferConfigs/*/destinations/*}
Gets the details of a Destination resource.
list
GET /v1beta/{parent=projects/*/locations/*/multicloudDataTransferConfigs/*}/destinations
Lists the Destination resources in a specified project and location.
patch
PATCH /v1beta/{destination.name=projects/*/locations/*/multicloudDataTransferConfigs/*/destinations/*}
Updates a Destination resource in a specified project and location.
REST Resource: v1beta.projects.locations.multicloudDataTransferSupportedServices
Methods
get
GET /v1beta/{name=projects/*/locations/*/multicloudDataTransferSupportedServices/*}
Gets the details of a service that is supported for Data Transfer Essentials.
list
GET /v1beta/{parent=projects/*/locations/*}/multicloudDataTransferSupportedServices
Lists the services in the project for a region that are supported for Data Transfer Essentials.
REST Resource: v1beta.projects.locations.operations
Methods
cancel
POST /v1beta/{name=projects/*/locations/*/operations/*}:cancel
Starts asynchronous cancellation on a long-running operation.
delete
DELETE /v1beta/{name=projects/*/locations/*/operations/*}
Deletes a long-running operation.
get
GET /v1beta/{name=projects/*/locations/*/operations/*}
Gets the latest state of a long-running operation.
list
GET /v1beta/{name=projects/*/locations/*}/operations
Lists operations that match the specified filter in the request.
REST Resource: v1beta.projects.locations.regionalEndpoints
Methods
create
POST /v1beta/{parent=projects/*/locations/*}/regionalEndpoints
Creates a new RegionalEndpoint in a given project and location.
delete
DELETE /v1beta/{name=projects/*/locations/*/regionalEndpoints/*}
Deletes a single RegionalEndpoint.
get
GET /v1beta/{name=projects/*/locations/*/regionalEndpoints/*}
Gets details of a single RegionalEndpoint.
list
GET /v1beta/{parent=projects/*/locations/*}/regionalEndpoints
Lists RegionalEndpoints in a given project and location.
REST Resource: v1beta.projects.locations.remoteTransportProfiles
Methods
get
GET /v1beta/{name=projects/*/locations/*/remoteTransportProfiles/*}
Gets details of a single RemoteTransportProfile.
list
GET /v1beta/{parent=projects/*/locations/*}/remoteTransportProfiles
Lists RemoteTransportProfiles in a given project and location.
REST Resource: v1beta.projects.locations.spokes
Methods
create
POST /v1beta/{parent=projects/*/locations/*}/spokes
Creates a Network Connectivity Center spoke.
delete
DELETE /v1beta/{name=projects/*/locations/*/spokes/*}
Deletes a Network Connectivity Center spoke.
get
GET /v1beta/{name=projects/*/locations/*/spokes/*}
Gets details about a Network Connectivity Center spoke.
getIamPolicy
GET /v1beta/{resource=projects/*/locations/*/spokes/*}:getIamPolicy
Gets the access control policy for a resource.
list
GET /v1beta/{parent=projects/*/locations/*}/spokes
Lists the Network Connectivity Center spokes in a specified project and location.
patch
PATCH /v1beta/{spoke.name=projects/*/locations/*/spokes/*}
Updates the parameters of a Network Connectivity Center spoke.
setIamPolicy
POST /v1beta/{resource=projects/*/locations/*/spokes/*}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v1beta/{resource=projects/*/locations/*/spokes/*}:testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1beta.projects.locations.spokes.gatewayAdvertisedRoutes
Methods
create
POST /v1beta/{parent=projects/*/locations/*/spokes/*}/gatewayAdvertisedRoutes
Create a GatewayAdvertisedRoute
delete
DELETE /v1beta/{name=projects/*/locations/*/spokes/*/gatewayAdvertisedRoutes/*}
Delete a GatewayAdvertisedRoute
get
GET /v1beta/{name=projects/*/locations/*/spokes/*/gatewayAdvertisedRoutes/*}
Get a GatewayAdvertisedRoute
list
GET /v1beta/{parent=projects/*/locations/*/spokes/*}/gatewayAdvertisedRoutes
List GatewayAdvertisedRoutes
patch
PATCH /v1beta/{gatewayAdvertisedRoute.name=projects/*/locations/*/spokes/*/gatewayAdvertisedRoutes/*}
Update a GatewayAdvertisedRoute
REST Resource: v1beta.projects.locations.transports
Methods
create
POST /v1beta/{parent=projects/*/locations/*}/transports
Creates a new Transport in a given project and location.
delete
DELETE /v1beta/{name=projects/*/locations/*/transports/*}
Deletes a single Transport.
get
GET /v1beta/{name=projects/*/locations/*/transports/*}
Gets details of a single Transport.
list
GET /v1beta/{parent=projects/*/locations/*}/transports
Lists Transports in a given project and location.
patch
PATCH /v1beta/{transport.name=projects/*/locations/*/transports/*}
Updates the parameters of a single Transport.
REST Resource: v1alpha1.projects.locations
Methods
get
GET /v1alpha1/{name=projects/*/locations/*}
Gets information about a location.
list
GET /v1alpha1/{name=projects/*}/locations
Lists information about the supported locations for this service.
REST Resource: v1alpha1.projects.locations.global.hubs
Methods
create
POST /v1alpha1/{parent=projects/*/locations/global}/hubs
Creates a new Network Connectivity Center hub in the specified project.
delete
DELETE /v1alpha1/{name=projects/*/locations/global/hubs/*}
Deletes a Network Connectivity Center hub.
get
GET /v1alpha1/{name=projects/*/locations/global/hubs/*}
Gets details about a Network Connectivity Center hub.
getIamPolicy
GET /v1alpha1/{resource=projects/*/locations/global/hubs/*}:getIamPolicy
Gets the access control policy for a resource.
list
GET /v1alpha1/{parent=projects/*/locations/global}/hubs
Lists the Network Connectivity Center hubs associated with a given project.
patch
PATCH /v1alpha1/{hub.name=projects/*/locations/global/hubs/*}
Updates the description and/or labels of a Network Connectivity Center hub.
setIamPolicy
POST /v1alpha1/{resource=projects/*/locations/global/hubs/*}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v1alpha1/{resource=projects/*/locations/global/hubs/*}:testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1alpha1.projects.locations.internalRanges
Methods
create
POST /v1alpha1/{parent=projects/*/locations/*}/internalRanges
Creates a new internal range in a given project and location.
delete
DELETE /v1alpha1/{name=projects/*/locations/*/internalRanges/*}
Deletes a single internal range.
get
GET /v1alpha1/{name=projects/*/locations/*/internalRanges/*}
Gets details of a single internal range.
list
GET /v1alpha1/{parent=projects/*/locations/*}/internalRanges
Lists internal ranges in a given project and location.
patch
PATCH /v1alpha1/{internalRange.name=projects/*/locations/*/internalRanges/*}
Updates the parameters of a single internal range.
REST Resource: v1alpha1.projects.locations.operations
Methods
cancel
POST /v1alpha1/{name=projects/*/locations/*/operations/*}:cancel
Starts asynchronous cancellation on a long-running operation.
delete
DELETE /v1alpha1/{name=projects/*/locations/*/operations/*}
Deletes a long-running operation.
get
GET /v1alpha1/{name=projects/*/locations/*/operations/*}
Gets the latest state of a long-running operation.
list
GET /v1alpha1/{name=projects/*/locations/*}/operations
Lists operations that match the specified filter in the request.
REST Resource: v1alpha1.projects.locations.spokes
Methods
create
POST /v1alpha1/{parent=projects/*/locations/*}/spokes
Creates a Network Connectivity Center spoke.
delete
DELETE /v1alpha1/{name=projects/*/locations/*/spokes/*}
Deletes a Network Connectivity Center spoke.
get
GET /v1alpha1/{name=projects/*/locations/*/spokes/*}
Gets details about a Network Connectivity Center spoke.
getIamPolicy
GET /v1alpha1/{resource=projects/*/locations/*/spokes/*}:getIamPolicy
Gets the access control policy for a resource.
list
GET /v1alpha1/{parent=projects/*/locations/*}/spokes
Lists the Network Connectivity Center spokes in a specified project and location.
patch
PATCH /v1alpha1/{spoke.name=projects/*/locations/*/spokes/*}
Updates the parameters of a Network Connectivity Center spoke.
setIamPolicy
POST /v1alpha1/{resource=projects/*/locations/*/spokes/*}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v1alpha1/{resource=projects/*/locations/*/spokes/*}:testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1.projects.locations
Methods
checkConsumerConfig
POST /v1/{location=projects/*/locations/*}:checkConsumerConfig
CheckConsumerConfig validates the consumer network and project for potential PSC connection creation.
get
GET /v1/{name=projects/*/locations/*}
Gets information about a location.
list
GET /v1/{name=projects/*}/locations
Lists information about the supported locations for this service.
REST Resource: v1.projects.locations.global.hubs
Methods
acceptSpoke
POST /v1/{name=projects/*/locations/global/hubs/*}:acceptSpoke
Accepts a proposal to attach a Network Connectivity Center spoke to a hub.
acceptSpokeUpdate
POST /v1/{name=projects/*/locations/global/hubs/*}:acceptSpokeUpdate
Accepts a proposal to update a Network Connectivity Center spoke in a hub.
create
POST /v1/{parent=projects/*/locations/global}/hubs
Creates a new Network Connectivity Center hub in the specified project.
delete
DELETE /v1/{name=projects/*/locations/global/hubs/*}
Deletes a Network Connectivity Center hub.
get
GET /v1/{name=projects/*/locations/global/hubs/*}
Gets details about a Network Connectivity Center hub.
getIamPolicy
GET /v1/{resource=projects/*/locations/global/hubs/*}:getIamPolicy
Gets the access control policy for a resource.
list
GET /v1/{parent=projects/*/locations/global}/hubs
Lists the Network Connectivity Center hubs associated with a given project.
listSpokes
GET /v1/{name=projects/*/locations/global/hubs/*}:listSpokes
Lists the Network Connectivity Center spokes associated with a specified hub and location.
patch
PATCH /v1/{hub.name=projects/*/locations/global/hubs/*}
Updates the description and/or labels of a Network Connectivity Center hub.
queryStatus
GET /v1/{name=projects/*/locations/global/hubs/*}:queryStatus
Query the Private Service Connect propagation status of a Network Connectivity Center hub.
rejectSpoke
POST /v1/{name=projects/*/locations/global/hubs/*}:rejectSpoke
Rejects a Network Connectivity Center spoke from being attached to a hub.
rejectSpokeUpdate
POST /v1/{name=projects/*/locations/global/hubs/*}:rejectSpokeUpdate
Rejects a proposal to update a Network Connectivity Center spoke in a hub.
setIamPolicy
POST /v1/{resource=projects/*/locations/global/hubs/*}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v1/{resource=projects/*/locations/global/hubs/*}:testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1.projects.locations.global.hubs.groups
Methods
get
GET /v1/{name=projects/*/locations/global/hubs/*/groups/*}
Gets details about a Network Connectivity Center group.
getIamPolicy
GET /v1/{resource=projects/*/locations/global/hubs/*/groups/*}:getIamPolicy
Gets the access control policy for a resource.
list
GET /v1/{parent=projects/*/locations/global/hubs/*}/groups
Lists groups in a given hub.
patch
PATCH /v1/{group.name=projects/*/locations/global/hubs/*/groups/*}
Updates the parameters of a Network Connectivity Center group.
setIamPolicy
POST /v1/{resource=projects/*/locations/global/hubs/*/groups/*}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v1/{resource=projects/*/locations/global/hubs/*/groups/*}:testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1.projects.locations.global.hubs.routeTables
Methods
get
GET /v1/{name=projects/*/locations/global/hubs/*/routeTables/*}
Gets details about a Network Connectivity Center route table.
list
GET /v1/{parent=projects/*/locations/global/hubs/*}/routeTables
Lists route tables in a given hub.
REST Resource: v1.projects.locations.global.hubs.routeTables.routes
Methods
get
GET /v1/{name=projects/*/locations/global/hubs/*/routeTables/*/routes/*}
Gets details about the specified route.
list
GET /v1/{parent=projects/*/locations/global/hubs/*/routeTables/*}/routes
Lists routes in a given route table.
REST Resource: v1.projects.locations.global.policyBasedRoutes
Methods
create
POST /v1/{parent=projects/*/locations/global}/policyBasedRoutes
Creates a new policy-based route in a given project and location.
delete
DELETE /v1/{name=projects/*/locations/global/policyBasedRoutes/*}
Deletes a single policy-based route.
get
GET /v1/{name=projects/*/locations/global/policyBasedRoutes/*}
Gets details of a single policy-based route.
getIamPolicy
GET /v1/{resource=projects/*/locations/global/policyBasedRoutes/*}:getIamPolicy
Gets the access control policy for a resource.
list
GET /v1/{parent=projects/*/locations/global}/policyBasedRoutes
Lists policy-based routes in a given project and location.
setIamPolicy
POST /v1/{resource=projects/*/locations/global/policyBasedRoutes/*}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v1/{resource=projects/*/locations/global/policyBasedRoutes/*}:testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1.projects.locations.internalRanges
Methods
create
POST /v1/{parent=projects/*/locations/*}/internalRanges
Creates a new internal range in a given project and location.
delete
DELETE /v1/{name=projects/*/locations/*/internalRanges/*}
Deletes a single internal range.
get
GET /v1/{name=projects/*/locations/*/internalRanges/*}
Gets details of a single internal range.
getIamPolicy
GET /v1/{resource=projects/*/locations/*/internalRanges/*}:getIamPolicy
Gets the access control policy for a resource.
list
GET /v1/{parent=projects/*/locations/*}/internalRanges
Lists internal ranges in a given project and location.
patch
PATCH /v1/{internalRange.name=projects/*/locations/*/internalRanges/*}
Updates the parameters of a single internal range.
setIamPolicy
POST /v1/{resource=projects/*/locations/*/internalRanges/*}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v1/{resource=projects/*/locations/*/internalRanges/*}:testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1.projects.locations.multicloudDataTransferConfigs
Methods
create
POST /v1/{parent=projects/*/locations/*}/multicloudDataTransferConfigs
Creates a MulticloudDataTransferConfig resource in a specified project and location.
delete
DELETE /v1/{name=projects/*/locations/*/multicloudDataTransferConfigs/*}
Deletes a MulticloudDataTransferConfig resource.
get
GET /v1/{name=projects/*/locations/*/multicloudDataTransferConfigs/*}
Gets the details of a MulticloudDataTransferConfig resource.
list
GET /v1/{parent=projects/*/locations/*}/multicloudDataTransferConfigs
Lists the MulticloudDataTransferConfig resources in a specified project and location.
patch
PATCH /v1/{multicloudDataTransferConfig.name=projects/*/locations/*/multicloudDataTransferConfigs/*}
Updates a MulticloudDataTransferConfig resource in a specified project and location.
REST Resource: v1.projects.locations.multicloudDataTransferConfigs.destinations
Methods
create
POST /v1/{parent=projects/*/locations/*/multicloudDataTransferConfigs/*}/destinations
Creates a Destination resource in a specified project and location.
delete
DELETE /v1/{name=projects/*/locations/*/multicloudDataTransferConfigs/*/destinations/*}
Deletes a Destination resource.
get
GET /v1/{name=projects/*/locations/*/multicloudDataTransferConfigs/*/destinations/*}
Gets the details of a Destination resource.
list
GET /v1/{parent=projects/*/locations/*/multicloudDataTransferConfigs/*}/destinations
Lists the Destination resources in a specified project and location.
patch
PATCH /v1/{destination.name=projects/*/locations/*/multicloudDataTransferConfigs/*/destinations/*}
Updates a Destination resource in a specified project and location.
REST Resource: v1.projects.locations.multicloudDataTransferSupportedServices
Methods
get
GET /v1/{name=projects/*/locations/*/multicloudDataTransferSupportedServices/*}
Gets the details of a service that is supported for Data Transfer Essentials.
list
GET /v1/{parent=projects/*/locations/*}/multicloudDataTransferSupportedServices
Lists the services in the project for a region that are supported for Data Transfer Essentials.
REST Resource: v1.projects.locations.operations
Methods
cancel
POST /v1/{name=projects/*/locations/*/operations/*}:cancel
Starts asynchronous cancellation on a long-running operation.
delete
DELETE /v1/{name=projects/*/locations/*/operations/*}
Deletes a long-running operation.
get
GET /v1/{name=projects/*/locations/*/operations/*}
Gets the latest state of a long-running operation.
list
GET /v1/{name=projects/*/locations/*}/operations
Lists operations that match the specified filter in the request.
REST Resource: v1.projects.locations.regionalEndpoints
Methods
create
POST /v1/{parent=projects/*/locations/*}/regionalEndpoints
Creates a new RegionalEndpoint in a given project and location.
delete
DELETE /v1/{name=projects/*/locations/*/regionalEndpoints/*}
Deletes a single RegionalEndpoint.
get
GET /v1/{name=projects/*/locations/*/regionalEndpoints/*}
Gets details of a single RegionalEndpoint.
list
GET /v1/{parent=projects/*/locations/*}/regionalEndpoints
Lists RegionalEndpoints in a given project and location.
REST Resource: v1.projects.locations.serviceClasses
Methods
delete
DELETE /v1/{name=projects/*/locations/*/serviceClasses/*}
Deletes a single ServiceClass.
get
GET /v1/{name=projects/*/locations/*/serviceClasses/*}
Gets details of a single ServiceClass.
list
GET /v1/{parent=projects/*/locations/*}/serviceClasses
Lists ServiceClasses in a given project and location.
patch
PATCH /v1/{serviceClass.name=projects/*/locations/*/serviceClasses/*}
Updates the parameters of a single ServiceClass.
REST Resource: v1.projects.locations.serviceConnectionMaps
Methods
create
POST /v1/{parent=projects/*/locations/*}/serviceConnectionMaps
Creates a new ServiceConnectionMap in a given project and location.
delete
DELETE /v1/{name=projects/*/locations/*/serviceConnectionMaps/*}
Deletes a single ServiceConnectionMap.
get
GET /v1/{name=projects/*/locations/*/serviceConnectionMaps/*}
Gets details of a single ServiceConnectionMap.
list
GET /v1/{parent=projects/*/locations/*}/serviceConnectionMaps
Lists ServiceConnectionMaps in a given project and location.
patch
PATCH /v1/{serviceConnectionMap.name=projects/*/locations/*/serviceConnectionMaps/*}
Updates the parameters of a single ServiceConnectionMap.
REST Resource: v1.projects.locations.serviceConnectionPolicies
Methods
create
POST /v1/{parent=projects/*/locations/*}/serviceConnectionPolicies
Creates a new ServiceConnectionPolicy in a given project and location.
delete
DELETE /v1/{name=projects/*/locations/*/serviceConnectionPolicies/*}
Deletes a single ServiceConnectionPolicy.
get
GET /v1/{name=projects/*/locations/*/serviceConnectionPolicies/*}
Gets details of a single ServiceConnectionPolicy.
list
GET /v1/{parent=projects/*/locations/*}/serviceConnectionPolicies
Lists ServiceConnectionPolicies in a given project and location.
patch
PATCH /v1/{serviceConnectionPolicy.name=projects/*/locations/*/serviceConnectionPolicies/*}
Updates the parameters of a single ServiceConnectionPolicy.
REST Resource: v1.projects.locations.serviceConnectionTokens
Methods
create
POST /v1/{parent=projects/*/locations/*}/serviceConnectionTokens
Creates a new ServiceConnectionToken in a given project and location.
delete
DELETE /v1/{name=projects/*/locations/*/serviceConnectionTokens/*}
Deletes a single ServiceConnectionToken.
get
GET /v1/{name=projects/*/locations/*/serviceConnectionTokens/*}
Gets details of a single ServiceConnectionToken.
list
GET /v1/{parent=projects/*/locations/*}/serviceConnectionTokens
Lists ServiceConnectionTokens in a given project and location.
REST Resource: v1.projects.locations.spokes
Methods
create
POST /v1/{parent=projects/*/locations/*}/spokes
Creates a Network Connectivity Center spoke.
delete
DELETE /v1/{name=projects/*/locations/*/spokes/*}
Deletes a Network Connectivity Center spoke.
get
GET /v1/{name=projects/*/locations/*/spokes/*}
Gets details about a Network Connectivity Center spoke.
getIamPolicy
GET /v1/{resource=projects/*/locations/*/spokes/*}:getIamPolicy
Gets the access control policy for a resource.
list
GET /v1/{parent=projects/*/locations/*}/spokes
Lists the Network Connectivity Center spokes in a specified project and location.
patch
PATCH /v1/{spoke.name=projects/*/locations/*/spokes/*}
Updates the parameters of a Network Connectivity Center spoke.
setIamPolicy
POST /v1/{resource=projects/*/locations/*/spokes/*}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v1/{resource=projects/*/locations/*/spokes/*}:testIamPermissions
Returns permissions that a caller has on the specified resource.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-11-29 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-11-29 UTC."],[],[]]
