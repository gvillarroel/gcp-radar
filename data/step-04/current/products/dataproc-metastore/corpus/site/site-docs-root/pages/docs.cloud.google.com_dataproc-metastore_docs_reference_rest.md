---
title: "Dataproc Metastore API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataproc-metastore/docs/reference/rest
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/dataproc-metastore/docs
source_metadata:
  url: https://docs.cloud.google.com/dataproc-metastore/docs/reference/rest
  title: "Dataproc Metastore API \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Dataproc Metastore
Reference
Send feedback
Dataproc Metastore API
Stay organized with collections
Save and categorize content based on your preferences.
The Dataproc Metastore API is used to manage the lifecycle and configuration of metastore services.
REST Resource: v1beta.projects.locations
REST Resource: v1beta.projects.locations.federations
REST Resource: v1beta.projects.locations.operations
REST Resource: v1beta.projects.locations.services
REST Resource: v1beta.projects.locations.services.backups
REST Resource: v1beta.projects.locations.services.databases
REST Resource: v1beta.projects.locations.services.databases.tables
REST Resource: v1beta.projects.locations.services.metadataImports
REST Resource: v1beta.projects.locations.services.migrationExecutions
REST Resource: v1alpha.projects.locations
REST Resource: v1alpha.projects.locations.federations
REST Resource: v1alpha.projects.locations.operations
REST Resource: v1alpha.projects.locations.services
REST Resource: v1alpha.projects.locations.services.backups
REST Resource: v1alpha.projects.locations.services.databases
REST Resource: v1alpha.projects.locations.services.databases.tables
REST Resource: v1alpha.projects.locations.services.metadataImports
REST Resource: v1alpha.projects.locations.services.migrationExecutions
REST Resource: v1.projects.locations
REST Resource: v1.projects.locations.federations
REST Resource: v1.projects.locations.operations
REST Resource: v1.projects.locations.services
REST Resource: v1.projects.locations.services.backups
REST Resource: v1.projects.locations.services.databases
REST Resource: v1.projects.locations.services.databases.tables
REST Resource: v1.projects.locations.services.metadataImports
REST Resource: v1.projects.locations.services.migrationExecutions
Service: metastore.googleapis.com
To call this service, we recommend that you use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery documents:
https://metastore.googleapis.com/$discovery/rest?version=v1
https://metastore.googleapis.com/$discovery/rest?version=v1beta
https://metastore.googleapis.com/$discovery/rest?version=v1alpha
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://metastore.googleapis.com
REST Resource: v1beta.projects.locations
Methods
get
GET /v1beta/{name}
Gets information about a location.
list
GET /v1beta/{name}/locations
Lists information about the supported locations for this service.
REST Resource: v1beta.projects.locations.federations
Methods
create
POST /v1beta/{parent}/federations
Creates a metastore federation in a project and location.
delete
DELETE /v1beta/{name}
Deletes a single federation.
get
GET /v1beta/{name}
Gets the details of a single federation.
getIamPolicy
GET /v1beta/{resource}:getIamPolicy
Gets the access control policy for a resource.
list
GET /v1beta/{parent}/federations
Lists federations in a project and location.
patch
PATCH /v1beta/{federation.name}
Updates the fields of a federation.
setIamPolicy
POST /v1beta/{resource}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v1beta/{resource}:testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1beta.projects.locations.operations
Methods
cancel
POST /v1beta/{name}:cancel
Starts asynchronous cancellation on a long-running operation.
delete
DELETE /v1beta/{name}
Deletes a long-running operation.
get
GET /v1beta/{name}
Gets the latest state of a long-running operation.
list
GET /v1beta/{name}/operations
Lists operations that match the specified filter in the request.
REST Resource: v1beta.projects.locations.services
Methods
alterLocation
POST /v1beta/{service}:alterLocation
Alter metadata resource location.
alterTableProperties
POST /v1beta/{service}:alterTableProperties
Alter metadata table properties.
cancelMigration
POST /v1beta/{service}:cancelMigration
Cancels the ongoing Managed Migration process.
completeMigration
POST /v1beta/{service}:completeMigration
Completes the managed migration process.
create
POST /v1beta/{parent}/services
Creates a metastore service in a project and location.
delete
DELETE /v1beta/{name}
Deletes a single service.
exportMetadata
POST /v1beta/{service}:exportMetadata
Exports metadata from a service.
get
GET /v1beta/{name}
Gets the details of a single service.
getIamPolicy
GET /v1beta/{resource}:getIamPolicy
Gets the access control policy for a resource.
list
GET /v1beta/{parent}/services
Lists services in a project and location.
moveTableToDatabase
POST /v1beta/{service}:moveTableToDatabase
Move a table to another database.
patch
PATCH /v1beta/{service.name}
Updates the parameters of a single service.
queryMetadata
POST /v1beta/{service}:queryMetadata
Query Dataproc Metastore metadata.
removeIamPolicy
POST /v1beta/{resource}:removeIamPolicy
Removes the attached IAM policies for a resource
restore
POST /v1beta/{service}:restore
Restores a service from a backup.
setIamPolicy
POST /v1beta/{resource}:setIamPolicy
Sets the access control policy on the specified resource.
startMigration
POST /v1beta/{service}:startMigration
Starts the Managed Migration process.
testIamPermissions
POST /v1beta/{resource}:testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1beta.projects.locations.services.backups
Methods
create
POST /v1beta/{parent}/backups
Creates a new backup in a given project and location.
delete
DELETE /v1beta/{name}
Deletes a single backup.
get
GET /v1beta/{name}
Gets details of a single backup.
getIamPolicy
GET /v1beta/{resource}:getIamPolicy
Gets the access control policy for a resource.
list
GET /v1beta/{parent}/backups
Lists backups in a service.
setIamPolicy
POST /v1beta/{resource}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v1beta/{resource}:testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1beta.projects.locations.services.databases
Methods
getIamPolicy
GET /v1beta/{resource}:getIamPolicy
Gets the access control policy for a resource.
setIamPolicy
POST /v1beta/{resource}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v1beta/{resource}:testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1beta.projects.locations.services.databases.tables
Methods
getIamPolicy
GET /v1beta/{resource}:getIamPolicy
Gets the access control policy for a resource.
setIamPolicy
POST /v1beta/{resource}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v1beta/{resource}:testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1beta.projects.locations.services.metadataImports
Methods
create
POST /v1beta/{parent}/metadataImports
Creates a new MetadataImport in a given project and location.
get
GET /v1beta/{name}
Gets details of a single import.
list
GET /v1beta/{parent}/metadataImports
Lists imports in a service.
patch
PATCH /v1beta/{metadataImport.name}
Updates a single import.
REST Resource: v1beta.projects.locations.services.migrationExecutions
Methods
delete
DELETE /v1beta/{name}
Deletes a single migration execution.
get
GET /v1beta/{name}
Gets details of a single migration execution.
list
GET /v1beta/{parent}/migrationExecutions
Lists migration executions on a service.
REST Resource: v1alpha.projects.locations
Methods
get
GET /v1alpha/{name}
Gets information about a location.
list
GET /v1alpha/{name}/locations
Lists information about the supported locations for this service.
REST Resource: v1alpha.projects.locations.federations
Methods
create
POST /v1alpha/{parent}/federations
Creates a metastore federation in a project and location.
delete
DELETE /v1alpha/{name}
Deletes a single federation.
get
GET /v1alpha/{name}
Gets the details of a single federation.
getIamPolicy
GET /v1alpha/{resource}:getIamPolicy
Gets the access control policy for a resource.
list
GET /v1alpha/{parent}/federations
Lists federations in a project and location.
patch
PATCH /v1alpha/{federation.name}
Updates the fields of a federation.
setIamPolicy
POST /v1alpha/{resource}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v1alpha/{resource}:testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1alpha.projects.locations.operations
Methods
cancel
POST /v1alpha/{name}:cancel
Starts asynchronous cancellation on a long-running operation.
delete
DELETE /v1alpha/{name}
Deletes a long-running operation.
get
GET /v1alpha/{name}
Gets the latest state of a long-running operation.
list
GET /v1alpha/{name}/operations
Lists operations that match the specified filter in the request.
REST Resource: v1alpha.projects.locations.services
Methods
alterLocation
POST /v1alpha/{service}:alterLocation
Alter metadata resource location.
alterTableProperties
POST /v1alpha/{service}:alterTableProperties
Alter metadata table properties.
cancelMigration
POST /v1alpha/{service}:cancelMigration
Cancels the ongoing Managed Migration process.
completeMigration
POST /v1alpha/{service}:completeMigration
Completes the managed migration process.
create
POST /v1alpha/{parent}/services
Creates a metastore service in a project and location.
delete
DELETE /v1alpha/{name}
Deletes a single service.
exportMetadata
POST /v1alpha/{service}:exportMetadata
Exports metadata from a service.
get
GET /v1alpha/{name}
Gets the details of a single service.
getIamPolicy
GET /v1alpha/{resource}:getIamPolicy
Gets the access control policy for a resource.
list
GET /v1alpha/{parent}/services
Lists services in a project and location.
moveTableToDatabase
POST /v1alpha/{service}:moveTableToDatabase
Move a table to another database.
patch
PATCH /v1alpha/{service.name}
Updates the parameters of a single service.
queryMetadata
POST /v1alpha/{service}:queryMetadata
Query Dataproc Metastore metadata.
removeIamPolicy
POST /v1alpha/{resource}:removeIamPolicy
Removes the attached IAM policies for a resource
restore
POST /v1alpha/{service}:restore
Restores a service from a backup.
setIamPolicy
POST /v1alpha/{resource}:setIamPolicy
Sets the access control policy on the specified resource.
startMigration
POST /v1alpha/{service}:startMigration
Starts the Managed Migration process.
testIamPermissions
POST /v1alpha/{resource}:testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1alpha.projects.locations.services.backups
Methods
create
POST /v1alpha/{parent}/backups
Creates a new backup in a given project and location.
delete
DELETE /v1alpha/{name}
Deletes a single backup.
get
GET /v1alpha/{name}
Gets details of a single backup.
getIamPolicy
GET /v1alpha/{resource}:getIamPolicy
Gets the access control policy for a resource.
list
GET /v1alpha/{parent}/backups
Lists backups in a service.
setIamPolicy
POST /v1alpha/{resource}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v1alpha/{resource}:testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1alpha.projects.locations.services.databases
Methods
getIamPolicy
GET /v1alpha/{resource}:getIamPolicy
Gets the access control policy for a resource.
setIamPolicy
POST /v1alpha/{resource}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v1alpha/{resource}:testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1alpha.projects.locations.services.databases.tables
Methods
getIamPolicy
GET /v1alpha/{resource}:getIamPolicy
Gets the access control policy for a resource.
setIamPolicy
POST /v1alpha/{resource}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v1alpha/{resource}:testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1alpha.projects.locations.services.metadataImports
Methods
create
POST /v1alpha/{parent}/metadataImports
Creates a new MetadataImport in a given project and location.
get
GET /v1alpha/{name}
Gets details of a single import.
list
GET /v1alpha/{parent}/metadataImports
Lists imports in a service.
patch
PATCH /v1alpha/{metadataImport.name}
Updates a single import.
REST Resource: v1alpha.projects.locations.services.migrationExecutions
Methods
delete
DELETE /v1alpha/{name}
Deletes a single migration execution.
get
GET /v1alpha/{name}
Gets details of a single migration execution.
list
GET /v1alpha/{parent}/migrationExecutions
Lists migration executions on a service.
REST Resource: v1.projects.locations
Methods
get
GET /v1/{name}
Gets information about a location.
list
GET /v1/{name}/locations
Lists information about the supported locations for this service.
REST Resource: v1.projects.locations.federations
Methods
create
POST /v1/{parent}/federations
Creates a metastore federation in a project and location.
delete
DELETE /v1/{name}
Deletes a single federation.
get
GET /v1/{name}
Gets the details of a single federation.
getIamPolicy
GET /v1/{resource}:getIamPolicy
Gets the access control policy for a resource.
list
GET /v1/{parent}/federations
Lists federations in a project and location.
patch
PATCH /v1/{federation.name}
Updates the fields of a federation.
setIamPolicy
POST /v1/{resource}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v1/{resource}:testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1.projects.locations.operations
Methods
cancel
POST /v1/{name}:cancel
Starts asynchronous cancellation on a long-running operation.
delete
DELETE /v1/{name}
Deletes a long-running operation.
get
GET /v1/{name}
Gets the latest state of a long-running operation.
list
GET /v1/{name}/operations
Lists operations that match the specified filter in the request.
REST Resource: v1.projects.locations.services
Methods
alterLocation
POST /v1/{service}:alterLocation
Alter metadata resource location.
alterTableProperties
POST /v1/{service}:alterTableProperties
Alter metadata table properties.
cancelMigration
POST /v1/{service}:cancelMigration
Cancels the ongoing Managed Migration process.
completeMigration
POST /v1/{service}:completeMigration
Completes the managed migration process.
create
POST /v1/{parent}/services
Creates a metastore service in a project and location.
delete
DELETE /v1/{name}
Deletes a single service.
exportMetadata
POST /v1/{service}:exportMetadata
Exports metadata from a service.
get
GET /v1/{name}
Gets the details of a single service.
getIamPolicy
GET /v1/{resource}:getIamPolicy
Gets the access control policy for a resource.
list
GET /v1/{parent}/services
Lists services in a project and location.
moveTableToDatabase
POST /v1/{service}:moveTableToDatabase
Move a table to another database.
patch
PATCH /v1/{service.name}
Updates the parameters of a single service.
queryMetadata
POST /v1/{service}:queryMetadata
Query Dataproc Metastore metadata.
restore
POST /v1/{service}:restore
Restores a service from a backup.
setIamPolicy
POST /v1/{resource}:setIamPolicy
Sets the access control policy on the specified resource.
startMigration
POST /v1/{service}:startMigration
Starts the Managed Migration process.
testIamPermissions
POST /v1/{resource}:testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1.projects.locations.services.backups
Methods
create
POST /v1/{parent}/backups
Creates a new backup in a given project and location.
delete
DELETE /v1/{name}
Deletes a single backup.
get
GET /v1/{name}
Gets details of a single backup.
getIamPolicy
GET /v1/{resource}:getIamPolicy
Gets the access control policy for a resource.
list
GET /v1/{parent}/backups
Lists backups in a service.
setIamPolicy
POST /v1/{resource}:setIamPolicy
Sets the access control policy on the specified resource.
REST Resource: v1.projects.locations.services.databases
Methods
getIamPolicy
GET /v1/{resource}:getIamPolicy
Gets the access control policy for a resource.
setIamPolicy
POST /v1/{resource}:setIamPolicy
Sets the access control policy on the specified resource.
REST Resource: v1.projects.locations.services.databases.tables
Methods
getIamPolicy
GET /v1/{resource}:getIamPolicy
Gets the access control policy for a resource.
setIamPolicy
POST /v1/{resource}:setIamPolicy
Sets the access control policy on the specified resource.
REST Resource: v1.projects.locations.services.metadataImports
Methods
create
POST /v1/{parent}/metadataImports
Creates a new MetadataImport in a given project and location.
get
GET /v1/{name}
Gets details of a single import.
list
GET /v1/{parent}/metadataImports
Lists imports in a service.
patch
PATCH /v1/{metadataImport.name}
Updates a single import.
REST Resource: v1.projects.locations.services.migrationExecutions
Methods
delete
DELETE /v1/{name}
Deletes a single migration execution.
get
GET /v1/{name}
Gets details of a single migration execution.
list
GET /v1/{parent}/migrationExecutions
Lists migration executions on a service.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-30 UTC."],[],[]]
