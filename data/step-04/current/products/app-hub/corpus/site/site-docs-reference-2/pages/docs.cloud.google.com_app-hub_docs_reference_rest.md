---
title: "App Hub API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/app-hub/docs/reference/rest
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/app-hub/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/app-hub/docs/reference/rest
  title: "App Hub API \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
App Hub
Reference
Send feedback
App Hub API
Stay organized with collections
Save and categorize content based on your preferences.
App Hub lets you build, operate, and manage applications on Google Cloud.
REST Resource: v1alpha.projects.locations
REST Resource: v1alpha.projects.locations.applications
REST Resource: v1alpha.projects.locations.applications.services
REST Resource: v1alpha.projects.locations.applications.workloads
REST Resource: v1alpha.projects.locations.discoveredServices
REST Resource: v1alpha.projects.locations.discoveredWorkloads
REST Resource: v1alpha.projects.locations.extendedMetadataSchemas
REST Resource: v1alpha.projects.locations.operations
REST Resource: v1alpha.projects.locations.serviceProjectAttachments
REST Resource: v1.projects.locations
REST Resource: v1.projects.locations.applications
REST Resource: v1.projects.locations.applications.services
REST Resource: v1.projects.locations.applications.workloads
REST Resource: v1.projects.locations.discoveredServices
REST Resource: v1.projects.locations.discoveredWorkloads
REST Resource: v1.projects.locations.extendedMetadataSchemas
REST Resource: v1.projects.locations.operations
REST Resource: v1.projects.locations.serviceProjectAttachments
Service: apphub.googleapis.com
To call this service, we recommend that you use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery documents:
https://apphub.googleapis.com/$discovery/rest?version=v1
https://apphub.googleapis.com/$discovery/rest?version=v1alpha
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://apphub.googleapis.com
REST Resource: v1alpha.projects.locations
Methods
detachServiceProjectAttachment
POST /v1alpha/{name=projects/*/locations/*}:detachServiceProjectAttachment
Detaches a service project from a host project.
get
GET /v1alpha/{name=projects/*/locations/*}
Gets information about a location.
getBoundary
GET /v1alpha/{name=projects/*/locations/*/boundary}
Gets a Boundary.
list
GET /v1alpha/{name=projects/*}/locations
Lists information about the supported locations for this service.
lookupServiceProjectAttachment
GET /v1alpha/{name=projects/*/locations/*}:lookupServiceProjectAttachment
Lists a service project attachment for a given service project.
updateBoundary
PATCH /v1alpha/{boundary.name=projects/*/locations/*/boundary}
Updates a Boundary.
REST Resource: v1alpha.projects.locations.applications
Methods
create
POST /v1alpha/{parent=projects/*/locations/*}/applications
Creates an Application in a host project and location.
delete
DELETE /v1alpha/{name=projects/*/locations/*/applications/*}
Deletes an Application in a host project and location.
get
GET /v1alpha/{name=projects/*/locations/*/applications/*}
Gets an Application in a host project and location.
getIamPolicy
GET /v1alpha/{resource=projects/*/locations/*/applications/*}:getIamPolicy
Gets the access control policy for a resource.
list
GET /v1alpha/{parent=projects/*/locations/*}/applications
Lists Applications in a host project and location.
patch
PATCH /v1alpha/{application.name=projects/*/locations/*/applications/*}
Updates an Application in a host project and location.
setIamPolicy
POST /v1alpha/{resource=projects/*/locations/*/applications/*}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v1alpha/{resource=projects/*/locations/*/applications/*}:testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1alpha.projects.locations.applications.services
Methods
create
POST /v1alpha/{parent=projects/*/locations/*/applications/*}/services
Creates a Service in an Application.
delete
DELETE /v1alpha/{name=projects/*/locations/*/applications/*/services/*}
Deletes a Service from an Application.
get
GET /v1alpha/{name=projects/*/locations/*/applications/*/services/*}
Gets a Service in an Application.
list
GET /v1alpha/{parent=projects/*/locations/*/applications/*}/services
Lists Services in an Application.
patch
PATCH /v1alpha/{service.name=projects/*/locations/*/applications/*/services/*}
Updates a Service in an Application.
REST Resource: v1alpha.projects.locations.applications.workloads
Methods
create
POST /v1alpha/{parent=projects/*/locations/*/applications/*}/workloads
Creates a Workload in an Application.
delete
DELETE /v1alpha/{name=projects/*/locations/*/applications/*/workloads/*}
Deletes a Workload from an Application.
get
GET /v1alpha/{name=projects/*/locations/*/applications/*/workloads/*}
Gets a Workload in an Application.
list
GET /v1alpha/{parent=projects/*/locations/*/applications/*}/workloads
Lists Workloads in an Application.
patch
PATCH /v1alpha/{workload.name=projects/*/locations/*/applications/*/workloads/*}
Updates a Workload in an Application.
REST Resource: v1alpha.projects.locations.discoveredServices
Methods
findUnregistered
GET /v1alpha/{parent=projects/*/locations/*}/discoveredServices:findUnregistered
Finds unregistered services in a host project and location.
get
GET /v1alpha/{name=projects/*/locations/*/discoveredServices/*}
Gets a Discovered Service in a host project and location.
list
GET /v1alpha/{parent=projects/*/locations/*}/discoveredServices
Lists Discovered Services that can be added to an Application in a host project and location.
lookup
GET /v1alpha/{parent=projects/*/locations/*}/discoveredServices:lookup
Lists a Discovered Service in a host project and location, with a given resource URI.
REST Resource: v1alpha.projects.locations.discoveredWorkloads
Methods
findUnregistered
GET /v1alpha/{parent=projects/*/locations/*}/discoveredWorkloads:findUnregistered
Finds unregistered workloads in a host project and location.
get
GET /v1alpha/{name=projects/*/locations/*/discoveredWorkloads/*}
Gets a Discovered Workload in a host project and location.
list
GET /v1alpha/{parent=projects/*/locations/*}/discoveredWorkloads
Lists Discovered Workloads that can be added to an Application in a host project and location.
lookup
GET /v1alpha/{parent=projects/*/locations/*}/discoveredWorkloads:lookup
Lists a Discovered Workload in a host project and location, with a given resource URI.
REST Resource: v1alpha.projects.locations.extendedMetadataSchemas
Methods
get
GET /v1alpha/{name=projects/*/locations/*/extendedMetadataSchemas/**}
Gets an Extended Metadata Schema.
list
GET /v1alpha/{parent=projects/*/locations/*}/extendedMetadataSchemas
Lists Extended Metadata Schemas available in a host project and location.
REST Resource: v1alpha.projects.locations.operations
Methods
cancel
POST /v1alpha/{name=projects/*/locations/*/operations/*}:cancel
Starts asynchronous cancellation on a long-running operation.
delete
DELETE /v1alpha/{name=projects/*/locations/*/operations/*}
Deletes a long-running operation.
get
GET /v1alpha/{name=projects/*/locations/*/operations/*}
Gets the latest state of a long-running operation.
list
GET /v1alpha/{name=projects/*/locations/*}/operations
Lists operations that match the specified filter in the request.
REST Resource: v1alpha.projects.locations.serviceProjectAttachments
Methods
create
POST /v1alpha/{parent=projects/*/locations/*}/serviceProjectAttachments
Attaches a service project to the host project.
delete
DELETE /v1alpha/{name=projects/*/locations/*/serviceProjectAttachments/*}
Deletes a service project attachment.
get
GET /v1alpha/{name=projects/*/locations/*/serviceProjectAttachments/*}
Gets a service project attachment.
list
GET /v1alpha/{parent=projects/*/locations/*}/serviceProjectAttachments
Lists service projects attached to the host project.
REST Resource: v1.projects.locations
Methods
detachServiceProjectAttachment
POST /v1/{name=projects/*/locations/*}:detachServiceProjectAttachment
Detaches a service project from a host project.
get
GET /v1/{name=projects/*/locations/*}
Gets information about a location.
getBoundary
GET /v1/{name=projects/*/locations/*/boundary}
Gets a Boundary.
list
GET /v1/{name=projects/*}/locations
Lists information about the supported locations for this service.
lookupServiceProjectAttachment
GET /v1/{name=projects/*/locations/*}:lookupServiceProjectAttachment
Lists a service project attachment for a given service project.
updateBoundary
PATCH /v1/{boundary.name=projects/*/locations/*/boundary}
Updates a Boundary.
REST Resource: v1.projects.locations.applications
Methods
create
POST /v1/{parent=projects/*/locations/*}/applications
Creates an Application in a host project and location.
delete
DELETE /v1/{name=projects/*/locations/*/applications/*}
Deletes an Application in a host project and location.
get
GET /v1/{name=projects/*/locations/*/applications/*}
Gets an Application in a host project and location.
getIamPolicy
GET /v1/{resource=projects/*/locations/*/applications/*}:getIamPolicy
Gets the access control policy for a resource.
list
GET /v1/{parent=projects/*/locations/*}/applications
Lists Applications in a host project and location.
patch
PATCH /v1/{application.name=projects/*/locations/*/applications/*}
Updates an Application in a host project and location.
setIamPolicy
POST /v1/{resource=projects/*/locations/*/applications/*}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v1/{resource=projects/*/locations/*/applications/*}:testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1.projects.locations.applications.services
Methods
create
POST /v1/{parent=projects/*/locations/*/applications/*}/services
Creates a Service in an Application.
delete
DELETE /v1/{name=projects/*/locations/*/applications/*/services/*}
Deletes a Service from an Application.
get
GET /v1/{name=projects/*/locations/*/applications/*/services/*}
Gets a Service in an Application.
list
GET /v1/{parent=projects/*/locations/*/applications/*}/services
Lists Services in an Application.
patch
PATCH /v1/{service.name=projects/*/locations/*/applications/*/services/*}
Updates a Service in an Application.
REST Resource: v1.projects.locations.applications.workloads
Methods
create
POST /v1/{parent=projects/*/locations/*/applications/*}/workloads
Creates a Workload in an Application.
delete
DELETE /v1/{name=projects/*/locations/*/applications/*/workloads/*}
Deletes a Workload from an Application.
get
GET /v1/{name=projects/*/locations/*/applications/*/workloads/*}
Gets a Workload in an Application.
list
GET /v1/{parent=projects/*/locations/*/applications/*}/workloads
Lists Workloads in an Application.
patch
PATCH /v1/{workload.name=projects/*/locations/*/applications/*/workloads/*}
Updates a Workload in an Application.
REST Resource: v1.projects.locations.discoveredServices
Methods
get
GET /v1/{name=projects/*/locations/*/discoveredServices/*}
Gets a Discovered Service in a host project and location.
list
GET /v1/{parent=projects/*/locations/*}/discoveredServices
Lists Discovered Services that can be added to an Application in a host project and location.
lookup
GET /v1/{parent=projects/*/locations/*}/discoveredServices:lookup
Lists a Discovered Service in a host project and location, with a given resource URI.
REST Resource: v1.projects.locations.discoveredWorkloads
Methods
get
GET /v1/{name=projects/*/locations/*/discoveredWorkloads/*}
Gets a Discovered Workload in a host project and location.
list
GET /v1/{parent=projects/*/locations/*}/discoveredWorkloads
Lists Discovered Workloads that can be added to an Application in a host project and location.
lookup
GET /v1/{parent=projects/*/locations/*}/discoveredWorkloads:lookup
Lists a Discovered Workload in a host project and location, with a given resource URI.
REST Resource: v1.projects.locations.extendedMetadataSchemas
Methods
get
GET /v1/{name=projects/*/locations/*/extendedMetadataSchemas/**}
Gets an Extended Metadata Schema.
list
GET /v1/{parent=projects/*/locations/*}/extendedMetadataSchemas
Lists Extended Metadata Schemas available in a host project and location.
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
REST Resource: v1.projects.locations.serviceProjectAttachments
Methods
create
POST /v1/{parent=projects/*/locations/*}/serviceProjectAttachments
Attaches a service project to the host project.
delete
DELETE /v1/{name=projects/*/locations/*/serviceProjectAttachments/*}
Deletes a service project attachment.
get
GET /v1/{name=projects/*/locations/*/serviceProjectAttachments/*}
Gets a service project attachment.
list
GET /v1/{parent=projects/*/locations/*}/serviceProjectAttachments
Lists service projects attached to the host project.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-01-06 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-01-06 UTC."],[],[]]
