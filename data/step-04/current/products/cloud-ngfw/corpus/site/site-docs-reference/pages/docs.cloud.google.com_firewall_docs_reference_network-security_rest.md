---
title: "Network Security API \_|\_ Cloud Next Generation Firewall \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/firewall/docs/reference/network-security/rest
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/firewall/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/firewall/docs/reference/network-security/rest
  title: "Network Security API \_|\_ Cloud Next Generation Firewall \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Cloud NGFW
Reference
Send feedback
Network Security API
Stay organized with collections
Save and categorize content based on your preferences.
Service: networksecurity.googleapis.com
To call this service, we recommend that you use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery documents:
https://networksecurity.googleapis.com/$discovery/rest?version=v1
https://networksecurity.googleapis.com/$discovery/rest?version=v1beta1
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://networksecurity.googleapis.com
REST Resource: v1beta1.organizations.locations.addressGroups
Methods
addItems
POST /v1beta1/{addressGroup=organizations/*/locations/*/addressGroups/*}:addItems
Adds items to an address group.
cloneItems
POST /v1beta1/{addressGroup=organizations/*/locations/*/addressGroups/*}:cloneItems
Clones items from one address group to another.
create
POST /v1beta1/{parent=organizations/*/locations/*}/addressGroups
Creates a new address group in a given project and location.
delete
DELETE /v1beta1/{name=organizations/*/locations/*/addressGroups/*}
Deletes an address group.
get
GET /v1beta1/{name=organizations/*/locations/*/addressGroups/*}
Gets details of a single address group.
list
GET /v1beta1/{parent=organizations/*/locations/*}/addressGroups
Lists address groups in a given project and location.
listReferences
GET /v1beta1/{addressGroup=organizations/*/locations/*/addressGroups/*}:listReferences
Lists references of an address group.
patch
PATCH /v1beta1/{addressGroup.name=organizations/*/locations/*/addressGroups/*}
Updates parameters of an address group.
removeItems
POST /v1beta1/{addressGroup=organizations/*/locations/*/addressGroups/*}:removeItems
Removes items from an address group.
REST Resource: v1beta1.organizations.locations.firewallEndpoints
Methods
create
POST /v1beta1/{parent=organizations/*/locations/*}/firewallEndpoints
Creates a new FirewallEndpoint in a given organization and location.
delete
DELETE /v1beta1/{name=organizations/*/locations/*/firewallEndpoints/*}
Deletes a single org Endpoint.
get
GET /v1beta1/{name=organizations/*/locations/*/firewallEndpoints/*}
Gets details of a single org Endpoint.
list
GET /v1beta1/{parent=organizations/*/locations/*}/firewallEndpoints
Lists FirewallEndpoints in a given organization and location.
patch
PATCH /v1beta1/{firewallEndpoint.name=organizations/*/locations/*/firewallEndpoints/*}
Update a single org Endpoint.
REST Resource: v1beta1.organizations.locations.operations
Methods
cancel
POST /v1beta1/{name=organizations/*/locations/*/operations/*}:cancel
Starts asynchronous cancellation on a long-running operation.
delete
DELETE /v1beta1/{name=organizations/*/locations/*/operations/*}
Deletes a long-running operation.
get
GET /v1beta1/{name=organizations/*/locations/*/operations/*}
Gets the latest state of a long-running operation.
list
GET /v1beta1/{name=organizations/*/locations/*}/operations
Lists operations that match the specified filter in the request.
REST Resource: v1beta1.organizations.locations.securityProfileGroups
Methods
create
POST /v1beta1/{parent=organizations/*/locations/*}/securityProfileGroups
Creates a new SecurityProfileGroup in a given organization and location.
delete
DELETE /v1beta1/{name=organizations/*/locations/*/securityProfileGroups/*}
Deletes a single SecurityProfileGroup.
get
GET /v1beta1/{name=organizations/*/locations/*/securityProfileGroups/*}
Gets details of a single SecurityProfileGroup.
list
GET /v1beta1/{parent=organizations/*/locations/*}/securityProfileGroups
Lists SecurityProfileGroups in a given organization and location.
patch
PATCH /v1beta1/{securityProfileGroup.name=organizations/*/locations/*/securityProfileGroups/*}
Updates the parameters of a single SecurityProfileGroup.
REST Resource: v1beta1.organizations.locations.securityProfiles
Methods
create
POST /v1beta1/{parent=organizations/*/locations/*}/securityProfiles
Creates a new SecurityProfile in a given organization and location.
delete
DELETE /v1beta1/{name=organizations/*/locations/*/securityProfiles/*}
Deletes a single SecurityProfile.
get
GET /v1beta1/{name=organizations/*/locations/*/securityProfiles/*}
Gets details of a single SecurityProfile.
list
GET /v1beta1/{parent=organizations/*/locations/*}/securityProfiles
Lists SecurityProfiles in a given organization and location.
patch
PATCH /v1beta1/{securityProfile.name=organizations/*/locations/*/securityProfiles/*}
Updates the parameters of a single SecurityProfile.
REST Resource: v1beta1.projects.locations
Methods
get
GET /v1beta1/{name=projects/*/locations/*}
Gets information about a location.
list
GET /v1beta1/{name=projects/*}/locations
Lists information about the supported locations for this service.
REST Resource: v1beta1.projects.locations.addressGroups
Methods
addItems
POST /v1beta1/{addressGroup=projects/*/locations/*/addressGroups/*}:addItems
Adds items to an address group.
cloneItems
POST /v1beta1/{addressGroup=projects/*/locations/*/addressGroups/*}:cloneItems
Clones items from one address group to another.
create
POST /v1beta1/{parent=projects/*/locations/*}/addressGroups
Creates a new address group in a given project and location.
delete
DELETE /v1beta1/{name=projects/*/locations/*/addressGroups/*}
Deletes a single address group.
get
GET /v1beta1/{name=projects/*/locations/*/addressGroups/*}
Gets details of a single address group.
list
GET /v1beta1/{parent=projects/*/locations/*}/addressGroups
Lists address groups in a given project and location.
listReferences
GET /v1beta1/{addressGroup=projects/*/locations/*/addressGroups/*}:listReferences
Lists references of an address group.
patch
PATCH /v1beta1/{addressGroup.name=projects/*/locations/*/addressGroups/*}
Updates the parameters of a single address group.
removeItems
POST /v1beta1/{addressGroup=projects/*/locations/*/addressGroups/*}:removeItems
Removes items from an address group.
REST Resource: v1beta1.projects.locations.firewallEndpointAssociations
Methods
create
POST /v1beta1/{parent=projects/*/locations/*}/firewallEndpointAssociations
Creates a new FirewallEndpointAssociation in a given project and location.
delete
DELETE /v1beta1/{name=projects/*/locations/*/firewallEndpointAssociations/*}
Deletes a single FirewallEndpointAssociation.
get
GET /v1beta1/{name=projects/*/locations/*/firewallEndpointAssociations/*}
Gets details of a single FirewallEndpointAssociation.
list
GET /v1beta1/{parent=projects/*/locations/*}/firewallEndpointAssociations
Lists Associations in a given project and location.
patch
PATCH /v1beta1/{firewallEndpointAssociation.name=projects/*/locations/*/firewallEndpointAssociations/*}
Update a single FirewallEndpointAssociation.
REST Resource: v1beta1.projects.locations.firewallEndpoints
Methods
create
POST /v1beta1/{parent=projects/*/locations/*}/firewallEndpoints
Creates a new FirewallEndpoint in a given project and location.
delete
DELETE /v1beta1/{name=projects/*/locations/*/firewallEndpoints/*}
Deletes a single project Endpoint.
get
GET /v1beta1/{name=projects/*/locations/*/firewallEndpoints/*}
Gets details of a single project Endpoint.
list
GET /v1beta1/{parent=projects/*/locations/*}/firewallEndpoints
Lists FirewallEndpoints in a given project and location.
patch
PATCH /v1beta1/{firewallEndpoint.name=projects/*/locations/*/firewallEndpoints/*}
Update a single project Endpoint.
REST Resource: v1beta1.projects.locations.operations
Methods
cancel
POST /v1beta1/{name=projects/*/locations/*/operations/*}:cancel
Starts asynchronous cancellation on a long-running operation.
delete
DELETE /v1beta1/{name=projects/*/locations/*/operations/*}
Deletes a long-running operation.
get
GET /v1beta1/{name=projects/*/locations/*/operations/*}
Gets the latest state of a long-running operation.
list
GET /v1beta1/{name=projects/*/locations/*}/operations
Lists operations that match the specified filter in the request.
REST Resource: v1beta1.projects.locations.tlsInspectionPolicies
Methods
create
POST /v1beta1/{parent=projects/*/locations/*}/tlsInspectionPolicies
Creates a new TlsInspectionPolicy in a given project and location.
delete
DELETE /v1beta1/{name=projects/*/locations/*/tlsInspectionPolicies/*}
Deletes a single TlsInspectionPolicy.
get
GET /v1beta1/{name=projects/*/locations/*/tlsInspectionPolicies/*}
Gets details of a single TlsInspectionPolicy.
list
GET /v1beta1/{parent=projects/*/locations/*}/tlsInspectionPolicies
Lists TlsInspectionPolicies in a given project and location.
patch
PATCH /v1beta1/{tlsInspectionPolicy.name=projects/*/locations/*/tlsInspectionPolicies/*}
Updates the parameters of a single TlsInspectionPolicy.
REST Resource: v1.organizations.locations.addressGroups
Methods
addItems
POST /v1/{addressGroup=organizations/*/locations/*/addressGroups/*}:addItems
Adds items to an address group.
cloneItems
POST /v1/{addressGroup=organizations/*/locations/*/addressGroups/*}:cloneItems
Clones items from one address group to another.
create
POST /v1/{parent=organizations/*/locations/*}/addressGroups
Creates a new address group in a given project and location.
delete
DELETE /v1/{name=organizations/*/locations/*/addressGroups/*}
Deletes an address group.
get
GET /v1/{name=organizations/*/locations/*/addressGroups/*}
Gets details of a single address group.
list
GET /v1/{parent=organizations/*/locations/*}/addressGroups
Lists address groups in a given project and location.
listReferences
GET /v1/{addressGroup=organizations/*/locations/*/addressGroups/*}:listReferences
Lists references of an address group.
patch
PATCH /v1/{addressGroup.name=organizations/*/locations/*/addressGroups/*}
Updates parameters of an address group.
removeItems
POST /v1/{addressGroup=organizations/*/locations/*/addressGroups/*}:removeItems
Removes items from an address group.
REST Resource: v1.organizations.locations.firewallEndpoints
Methods
create
POST /v1/{parent=organizations/*/locations/*}/firewallEndpoints
Creates a new FirewallEndpoint in a given organization and location.
delete
DELETE /v1/{name=organizations/*/locations/*/firewallEndpoints/*}
Deletes a single org Endpoint.
get
GET /v1/{name=organizations/*/locations/*/firewallEndpoints/*}
Gets details of a single org Endpoint.
list
GET /v1/{parent=organizations/*/locations/*}/firewallEndpoints
Lists FirewallEndpoints in a given organization and location.
patch
PATCH /v1/{firewallEndpoint.name=organizations/*/locations/*/firewallEndpoints/*}
Update a single org Endpoint.
REST Resource: v1.organizations.locations.operations
Methods
cancel
POST /v1/{name=organizations/*/locations/*/operations/*}:cancel
Starts asynchronous cancellation on a long-running operation.
delete
DELETE /v1/{name=organizations/*/locations/*/operations/*}
Deletes a long-running operation.
get
GET /v1/{name=organizations/*/locations/*/operations/*}
Gets the latest state of a long-running operation.
list
GET /v1/{name=organizations/*/locations/*}/operations
Lists operations that match the specified filter in the request.
REST Resource: v1.organizations.locations.securityProfileGroups
Methods
create
POST /v1/{parent=organizations/*/locations/*}/securityProfileGroups
Creates a new SecurityProfileGroup in a given organization and location.
delete
DELETE /v1/{name=organizations/*/locations/*/securityProfileGroups/*}
Deletes a single SecurityProfileGroup.
get
GET /v1/{name=organizations/*/locations/*/securityProfileGroups/*}
Gets details of a single SecurityProfileGroup.
list
GET /v1/{parent=organizations/*/locations/*}/securityProfileGroups
Lists SecurityProfileGroups in a given organization and location.
patch
PATCH /v1/{securityProfileGroup.name=organizations/*/locations/*/securityProfileGroups/*}
Updates the parameters of a single SecurityProfileGroup.
REST Resource: v1.organizations.locations.securityProfiles
Methods
create
POST /v1/{parent=organizations/*/locations/*}/securityProfiles
Creates a new SecurityProfile in a given organization and location.
delete
DELETE /v1/{name=organizations/*/locations/*/securityProfiles/*}
Deletes a single SecurityProfile.
get
GET /v1/{name=organizations/*/locations/*/securityProfiles/*}
Gets details of a single SecurityProfile.
list
GET /v1/{parent=organizations/*/locations/*}/securityProfiles
Lists SecurityProfiles in a given organization and location.
patch
PATCH /v1/{securityProfile.name=organizations/*/locations/*/securityProfiles/*}
Updates the parameters of a single SecurityProfile.
REST Resource: v1.projects.locations
Methods
get
GET /v1/{name=projects/*/locations/*}
Gets information about a location.
list
GET /v1/{name=projects/*}/locations
Lists information about the supported locations for this service.
REST Resource: v1.projects.locations.addressGroups
Methods
addItems
POST /v1/{addressGroup=projects/*/locations/*/addressGroups/*}:addItems
Adds items to an address group.
cloneItems
POST /v1/{addressGroup=projects/*/locations/*/addressGroups/*}:cloneItems
Clones items from one address group to another.
create
POST /v1/{parent=projects/*/locations/*}/addressGroups
Creates a new address group in a given project and location.
delete
DELETE /v1/{name=projects/*/locations/*/addressGroups/*}
Deletes a single address group.
get
GET /v1/{name=projects/*/locations/*/addressGroups/*}
Gets details of a single address group.
list
GET /v1/{parent=projects/*/locations/*}/addressGroups
Lists address groups in a given project and location.
listReferences
GET /v1/{addressGroup=projects/*/locations/*/addressGroups/*}:listReferences
Lists references of an address group.
patch
PATCH /v1/{addressGroup.name=projects/*/locations/*/addressGroups/*}
Updates the parameters of a single address group.
removeItems
POST /v1/{addressGroup=projects/*/locations/*/addressGroups/*}:removeItems
Removes items from an address group.
REST Resource: v1.projects.locations.firewallEndpointAssociations
Methods
create
POST /v1/{parent=projects/*/locations/*}/firewallEndpointAssociations
Creates a new FirewallEndpointAssociation in a given project and location.
delete
DELETE /v1/{name=projects/*/locations/*/firewallEndpointAssociations/*}
Deletes a single FirewallEndpointAssociation.
get
GET /v1/{name=projects/*/locations/*/firewallEndpointAssociations/*}
Gets details of a single FirewallEndpointAssociation.
list
GET /v1/{parent=projects/*/locations/*}/firewallEndpointAssociations
Lists Associations in a given project and location.
patch
PATCH /v1/{firewallEndpointAssociation.name=projects/*/locations/*/firewallEndpointAssociations/*}
Update a single FirewallEndpointAssociation.
REST Resource: v1.projects.locations.firewallEndpoints
Methods
create
POST /v1/{parent=projects/*/locations/*}/firewallEndpoints
Creates a new FirewallEndpoint in a given project and location.
delete
DELETE /v1/{name=projects/*/locations/*/firewallEndpoints/*}
Deletes a single project Endpoint.
get
GET /v1/{name=projects/*/locations/*/firewallEndpoints/*}
Gets details of a single project Endpoint.
list
GET /v1/{parent=projects/*/locations/*}/firewallEndpoints
Lists FirewallEndpoints in a given project and location.
patch
PATCH /v1/{firewallEndpoint.name=projects/*/locations/*/firewallEndpoints/*}
Update a single project Endpoint.
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
REST Resource: v1.projects.locations.tlsInspectionPolicies
Methods
create
POST /v1/{parent=projects/*/locations/*}/tlsInspectionPolicies
Creates a new TlsInspectionPolicy in a given project and location.
delete
DELETE /v1/{name=projects/*/locations/*/tlsInspectionPolicies/*}
Deletes a single TlsInspectionPolicy.
get
GET /v1/{name=projects/*/locations/*/tlsInspectionPolicies/*}
Gets details of a single TlsInspectionPolicy.
list
GET /v1/{parent=projects/*/locations/*}/tlsInspectionPolicies
Lists TlsInspectionPolicies in a given project and location.
patch
PATCH /v1/{tlsInspectionPolicy.name=projects/*/locations/*/tlsInspectionPolicies/*}
Updates the parameters of a single TlsInspectionPolicy.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-24 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-24 UTC."],[],[]]
