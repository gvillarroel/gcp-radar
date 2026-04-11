---
title: "Design Center API \_|\_ Application Design Center \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/application-design-center/docs/reference/rest
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/application-design-center/docs
source_metadata:
  url: https://docs.cloud.google.com/application-design-center/docs/reference/rest
  title: "Design Center API \_|\_ Application Design Center \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Application Design Center
Reference
Send feedback
Design Center API
Stay organized with collections
Save and categorize content based on your preferences.
REST Resource: v1alpha.projects.locations
REST Resource: v1alpha.projects.locations.operations
REST Resource: v1alpha.projects.locations.spaces
REST Resource: v1alpha.projects.locations.spaces.applicationTemplates
REST Resource:
v1alpha.projects.locations.spaces.applicationTemplates.components
REST Resource:
v1alpha.projects.locations.spaces.applicationTemplates.components.connections
REST Resource:
v1alpha.projects.locations.spaces.applicationTemplates.revisions
REST Resource: v1alpha.projects.locations.spaces.applications
REST Resource: v1alpha.projects.locations.spaces.catalogs
REST Resource: v1alpha.projects.locations.spaces.catalogs.shares
REST Resource: v1alpha.projects.locations.spaces.catalogs.templates
REST Resource:
v1alpha.projects.locations.spaces.catalogs.templates.revisions
REST Resource: v1alpha.projects.locations.spaces.sharedTemplates
REST Resource: v1alpha.projects.locations.spaces.sharedTemplates.revisions
Service: designcenter.googleapis.com
To call this service, we recommend that you use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery document:
https://designcenter.googleapis.com/$discovery/rest?version=v1alpha
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://designcenter.googleapis.com
REST Resource: v1alpha.projects.locations
Methods
get
GET /v1alpha/{name=projects/*/locations/*}
Gets information about a location.
list
GET /v1alpha/{name=projects/*}/locations
Lists information about the supported locations for this service.
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
REST Resource: v1alpha.projects.locations.spaces
Methods
create
POST /v1alpha/{parent=projects/*/locations/*}/spaces
Creates a space.
delete
DELETE /v1alpha/{name=projects/*/locations/*/spaces/*}
Deletes a space.
get
GET /v1alpha/{name=projects/*/locations/*/spaces/*}
Gets details about a space.
getIamPolicy
GET /v1alpha/{resource=projects/*/locations/*/spaces/*}:getIamPolicy
Gets the access control policy for a resource.
inferConnections
POST /v1alpha/{name=projects/*/locations/*/spaces/*}:inferConnections
Infers and suggests connections between components within a space.
list
GET /v1alpha/{parent=projects/*/locations/*}/spaces
Lists spaces in a given project and location.
patch
PATCH /v1alpha/{space.name=projects/*/locations/*/spaces/*}
Updates a space.
setIamPolicy
POST /v1alpha/{resource=projects/*/locations/*/spaces/*}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v1alpha/{resource=projects/*/locations/*/spaces/*}:testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1alpha.projects.locations.spaces.applicationTemplates
Methods
commit
POST /v1alpha/{name=projects/*/locations/*/spaces/*/applicationTemplates/*}:commit
Commits an application template to create a new revision.
create
POST /v1alpha/{parent=projects/*/locations/*/spaces/*}/applicationTemplates
Creates an application template.
delete
DELETE /v1alpha/{name=projects/*/locations/*/spaces/*/applicationTemplates/*}
Deletes an application template.
generate
POST /v1alpha/{name=projects/*/locations/*/spaces/*/applicationTemplates/*}:generate
Generates Terraform files for an application template.
get
GET /v1alpha/{name=projects/*/locations/*/spaces/*/applicationTemplates/*}
Gets details about an application template.
import
POST /v1alpha/{name=projects/*/locations/*/spaces/*/applicationTemplates/*}:import
Imports to an existing application template from a given shared template.
list
GET /v1alpha/{parent=projects/*/locations/*/spaces/*}/applicationTemplates
Lists application templates in a given space.
patch
PATCH /v1alpha/{applicationTemplate.name=projects/*/locations/*/spaces/*/applicationTemplates/*}
Updates an application template.
REST Resource: v1alpha.projects.locations.spaces.applicationTemplates.components
Methods
create
POST /v1alpha/{parent=projects/*/locations/*/spaces/*/applicationTemplates/*}/components
Creates a component.
delete
DELETE /v1alpha/{name=projects/*/locations/*/spaces/*/applicationTemplates/*/components/*}
Deletes a component.
get
GET /v1alpha/{name=projects/*/locations/*/spaces/*/applicationTemplates/*/components/*}
Gets details about a Component.
list
GET /v1alpha/{parent=projects/*/locations/*/spaces/*/applicationTemplates/*}/components
Lists components in an application template.
patch
PATCH /v1alpha/{component.name=projects/*/locations/*/spaces/*/applicationTemplates/*/components/*}
Updates a component.
REST Resource: v1alpha.projects.locations.spaces.applicationTemplates.components.connections
Methods
create
POST /v1alpha/{parent=projects/*/locations/*/spaces/*/applicationTemplates/*/components/*}/connections
Creates a connection.
delete
DELETE /v1alpha/{name=projects/*/locations/*/spaces/*/applicationTemplates/*/components/*/connections/*}
Deletes a connection.
get
GET /v1alpha/{name=projects/*/locations/*/spaces/*/applicationTemplates/*/components/*/connections/*}
Gets details about a connection.
list
GET /v1alpha/{parent=projects/*/locations/*/spaces/*/applicationTemplates/*/components/*}/connections
Lists connections in an application template.
patch
PATCH /v1alpha/{connection.name=projects/*/locations/*/spaces/*/applicationTemplates/*/components/*/connections/*}
Updates a connection.
REST Resource: v1alpha.projects.locations.spaces.applicationTemplates.revisions
Methods
delete
DELETE /v1alpha/{name=projects/*/locations/*/spaces/*/applicationTemplates/*/revisions/*}
Deletes an application template revision.
get
GET /v1alpha/{name=projects/*/locations/*/spaces/*/applicationTemplates/*/revisions/*}
Gets details about an application template revision.
list
GET /v1alpha/{parent=projects/*/locations/*/spaces/*/applicationTemplates/*}/revisions
Lists application template revisions in a given application template.
REST Resource: v1alpha.projects.locations.spaces.applications
Methods
create
POST /v1alpha/{parent=projects/*/locations/*/spaces/*}/applications
Creates an application.
delete
DELETE /v1alpha/{name=projects/*/locations/*/spaces/*/applications/*}
Deletes an application.
deploy
POST /v1alpha/{name=projects/*/locations/*/spaces/*/applications/*}:deploy
Deploys an application.
generate
POST /v1alpha/{name=projects/*/locations/*/spaces/*/applications/*}:generate
Generates Terraform files for an application.
get
GET /v1alpha/{name=projects/*/locations/*/spaces/*/applications/*}
Gets details about an application.
list
GET /v1alpha/{parent=projects/*/locations/*/spaces/*}/applications
Lists applications in a given space.
patch
PATCH /v1alpha/{application.name=projects/*/locations/*/spaces/*/applications/*}
Updates an application.
preview
POST /v1alpha/{name=projects/*/locations/*/spaces/*/applications/*}:preview
Previews deployment of an application.
REST Resource: v1alpha.projects.locations.spaces.catalogs
Methods
create
POST /v1alpha/{parent=projects/*/locations/*/spaces/*}/catalogs
Creates a catalog.
delete
DELETE /v1alpha/{name=projects/*/locations/*/spaces/*/catalogs/*}
Deletes a catalog.
get
GET /v1alpha/{name=projects/*/locations/*/spaces/*/catalogs/*}
Gets details about a catalog.
list
GET /v1alpha/{parent=projects/*/locations/*/spaces/*}/catalogs
Lists catalogs in a given space.
patch
PATCH /v1alpha/{catalog.name=projects/*/locations/*/spaces/*/catalogs/*}
Updates a catalog.
REST Resource: v1alpha.projects.locations.spaces.catalogs.shares
Methods
create
POST /v1alpha/{parent=projects/*/locations/*/spaces/*/catalogs/*}/shares
Shares a catalog from one space to another space.
delete
DELETE /v1alpha/{name=projects/*/locations/*/spaces/*/catalogs/*/shares/*}
Deletes a catalog share.
get
GET /v1alpha/{name=projects/*/locations/*/spaces/*/catalogs/*/shares/*}
Get catalog share object for the space.
list
GET /v1alpha/{parent=projects/*/locations/*/spaces/*/catalogs/*}/shares
Lists catalog share objects for the space.
sync
POST /v1alpha/{name=projects/*/locations/*/spaces/*/catalogs/*/shares/*}:sync
Synchronizes a share and updates the destination workspace to reflect.
REST Resource: v1alpha.projects.locations.spaces.catalogs.templates
Methods
create
POST /v1alpha/{parent=projects/*/locations/*/spaces/*/catalogs/*}/templates
Adds a template to a catalog.
delete
DELETE /v1alpha/{name=projects/*/locations/*/spaces/*/catalogs/*/templates/*}
Deletes a catalog template.
get
GET /v1alpha/{name=projects/*/locations/*/spaces/*/catalogs/*/templates/*}
Gets a catalog template.
list
GET /v1alpha/{parent=projects/*/locations/*/spaces/*/catalogs/*}/templates
Lists catalog templates.
patch
PATCH /v1alpha/{catalogTemplate.name=projects/*/locations/*/spaces/*/catalogs/*/templates/*}
Updates a catalog template resource.
REST Resource: v1alpha.projects.locations.spaces.catalogs.templates.revisions
Methods
create
POST /v1alpha/{parent=projects/*/locations/*/spaces/*/catalogs/*/templates/*}/revisions
Creates a template revision.
delete
DELETE /v1alpha/{name=projects/*/locations/*/spaces/*/catalogs/*/templates/*/revisions/*}
Deletes a template revision.
get
GET /v1alpha/{name=projects/*/locations/*/spaces/*/catalogs/*/templates/*/revisions/*}
Gets details about a template revision.
list
GET /v1alpha/{parent=projects/*/locations/*/spaces/*/catalogs/*/templates/*}/revisions
Lists template revisions.
REST Resource: v1alpha.projects.locations.spaces.sharedTemplates
Methods
get
GET /v1alpha/{name=projects/*/locations/*/spaces/*/sharedTemplates/*}
Gets details about a shared template.
list
GET /v1alpha/{parent=projects/*/locations/*/spaces/*}/sharedTemplates
Lists shared templates in a given space.
REST Resource: v1alpha.projects.locations.spaces.sharedTemplates.revisions
Methods
get
GET /v1alpha/{name=projects/*/locations/*/spaces/*/sharedTemplates/*/revisions/*}
Gets details about a shared template revision.
list
GET /v1alpha/{parent=projects/*/locations/*/spaces/*/sharedTemplates/*}/revisions
Lists shared template revisions in a given space.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-09-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-09-10 UTC."],[],[]]
