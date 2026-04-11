---
title: "Database Migration API \_|\_ Database Migration Service \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/database-migration/docs/reference/rest
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/database-migration/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/database-migration/docs/reference/rest
  title: "Database Migration API \_|\_ Database Migration Service \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Database Migration Service
APIs and reference
Send feedback
Database Migration API
Stay organized with collections
Save and categorize content based on your preferences.
Manage Cloud Database Migration Service resources on Google Cloud Platform.
REST Resource: v1beta1.projects.locations
REST Resource: v1beta1.projects.locations.connectionProfiles
REST Resource: v1beta1.projects.locations.migrationJobs
REST Resource: v1beta1.projects.locations.operations
REST Resource: v1alpha2.projects.locations
REST Resource: v1alpha2.projects.locations.connectionProfiles
REST Resource: v1alpha2.projects.locations.migrationJobs
REST Resource: v1alpha2.projects.locations.operations
REST Resource: v1.projects.locations
REST Resource: v1.projects.locations.connectionProfiles
REST Resource: v1.projects.locations.conversionWorkspaces
REST Resource: v1.projects.locations.conversionWorkspaces.mappingRules
REST Resource: v1.projects.locations.migrationJobs
REST Resource: v1.projects.locations.migrationJobs.objects
REST Resource: v1.projects.locations.operations
REST Resource: v1.projects.locations.privateConnections
Service: datamigration.googleapis.com
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery documents:
https://datamigration.googleapis.com/$discovery/rest?version=v1
https://datamigration.googleapis.com/$discovery/rest?version=v1beta1
https://datamigration.googleapis.com/$discovery/rest?version=v1alpha2
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://datamigration.googleapis.com
REST Resource: v1beta1.projects.locations
Methods
get
GET /v1beta1/{name}
Gets information about a location.
list
GET /v1beta1/{name}/locations
Lists information about the supported locations for this service.
REST Resource: v1beta1.projects.locations.connectionProfiles
Methods
create
POST /v1beta1/{parent}/connectionProfiles
Creates a new connection profile in a given project and location.
delete
DELETE /v1beta1/{name}
Deletes a single Database Migration Service connection profile.
get
GET /v1beta1/{name}
Gets details of a single connection profile.
getIamPolicy
GET /v1beta1/{resource}:getIamPolicy
Gets the access control policy for a resource.
list
GET /v1beta1/{parent}/connectionProfiles
Retrieve a list of all connection profiles in a given project and location.
patch
PATCH /v1beta1/{connectionProfile.name}
Update the configuration of a single connection profile.
setIamPolicy
POST /v1beta1/{resource}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v1beta1/{resource}:testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1beta1.projects.locations.migrationJobs
Methods
create
POST /v1beta1/{parent}/migrationJobs
Creates a new migration job in a given project and location.
delete
DELETE /v1beta1/{name}
Deletes a single migration job.
generateSshScript
POST /v1beta1/{migrationJob}:generateSshScript
Generate a SSH configuration script to configure the reverse SSH connectivity.
get
GET /v1beta1/{name}
Gets details of a single migration job.
getIamPolicy
GET /v1beta1/{resource}:getIamPolicy
Gets the access control policy for a resource.
list
GET /v1beta1/{parent}/migrationJobs
Lists migration jobs in a given project and location.
patch
PATCH /v1beta1/{migrationJob.name}
Updates the parameters of a single migration job.
promote
POST /v1beta1/{name}:promote
Promote a migration job, stopping replication to the destination and promoting the destination to be a standalone database.
restart
POST /v1beta1/{name}:restart
Restart a stopped or failed migration job, resetting the destination instance to its original state and starting the migration process from scratch.
resume
POST /v1beta1/{name}:resume
Resume a migration job that is currently stopped and is resumable (was stopped during CDC phase).
setIamPolicy
POST /v1beta1/{resource}:setIamPolicy
Sets the access control policy on the specified resource.
start
POST /v1beta1/{name}:start
Start an already created migration job.
stop
POST /v1beta1/{name}:stop
Stops a running migration job.
testIamPermissions
POST /v1beta1/{resource}:testIamPermissions
Returns permissions that a caller has on the specified resource.
verify
POST /v1beta1/{name}:verify
Verify a migration job, making sure the destination can reach the source and that all configuration and prerequisites are met.
REST Resource: v1beta1.projects.locations.operations
Methods
cancel
POST /v1beta1/{name}:cancel
Starts asynchronous cancellation on a long-running operation.
delete
DELETE /v1beta1/{name}
Deletes a long-running operation.
get
GET /v1beta1/{name}
Gets the latest state of a long-running operation.
list
GET /v1beta1/{name}/operations
Lists operations that match the specified filter in the request.
REST Resource: v1alpha2.projects.locations
Methods
get
GET /v1alpha2/{name}
Gets information about a location.
list
GET /v1alpha2/{name}/locations
Lists information about the supported locations for this service.
REST Resource: v1alpha2.projects.locations.connectionProfiles
Methods
create
POST /v1alpha2/{parent}/connectionProfiles
Creates a new connection profile in a given project and location.
delete
DELETE /v1alpha2/{name}
Deletes a single Database Migration Service connection profile.
get
GET /v1alpha2/{name}
Gets details of a single connection profile.
getIamPolicy
GET /v1alpha2/{resource}:getIamPolicy
Gets the access control policy for a resource.
list
GET /v1alpha2/{parent}/connectionProfiles
Retrieve a list of all connection profiles in a given project and location.
patch
PATCH /v1alpha2/{connectionProfile.name}
Update the configuration of a single connection profile.
setIamPolicy
POST /v1alpha2/{resource}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v1alpha2/{resource}:testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1alpha2.projects.locations.migrationJobs
Methods
create
POST /v1alpha2/{parent}/migrationJobs
Creates a new migration job in a given project and location.
delete
DELETE /v1alpha2/{name}
Deletes a single migration job.
generateSshScript
POST /v1alpha2/{name}:generateSshScript
Generate a SSH configuration script to configure the reverse SSH connectivity.
get
GET /v1alpha2/{name}
Gets details of a single migration job.
getIamPolicy
GET /v1alpha2/{resource}:getIamPolicy
Gets the access control policy for a resource.
list
GET /v1alpha2/{parent}/migrationJobs
Lists migration jobs in a given project and location.
patch
PATCH /v1alpha2/{migrationJob.name}
Updates the parameters of a single migration job.
promote
POST /v1alpha2/{name}:promote
Promote a migration job, stopping replication to the destination and promoting the destination to be a standalone database.
restart
POST /v1alpha2/{name}:restart
Restart a stopped or failed migration job, resetting the destination instance to its original state and starting the migration process from scratch.
resume
POST /v1alpha2/{name}:resume
Resume a migration job that is currently stopped and is resumable (was stopped during CDC phase).
setIamPolicy
POST /v1alpha2/{resource}:setIamPolicy
Sets the access control policy on the specified resource.
start
POST /v1alpha2/{name}:start
Start an already created migration job.
stop
POST /v1alpha2/{name}:stop
Stops a running migration job.
testIamPermissions
POST /v1alpha2/{resource}:testIamPermissions
Returns permissions that a caller has on the specified resource.
verify
POST /v1alpha2/{name}:verify
Verify a migration job, making sure the destination can reach the source and that all configuration and prerequisites are met.
REST Resource: v1alpha2.projects.locations.operations
Methods
cancel
POST /v1alpha2/{name}:cancel
Starts asynchronous cancellation on a long-running operation.
delete
DELETE /v1alpha2/{name}
Deletes a long-running operation.
get
GET /v1alpha2/{name}
Gets the latest state of a long-running operation.
list
GET /v1alpha2/{name}/operations
Lists operations that match the specified filter in the request.
REST Resource: v1.projects.locations
Methods
fetchStaticIps
GET /v1/{name}:fetchStaticIps
Fetches a set of static IP addresses that need to be allowlisted by the customer when using the static-IP connectivity method.
get
GET /v1/{name}
Gets information about a location.
list
GET /v1/{name}/locations
Lists information about the supported locations for this service.
REST Resource: v1.projects.locations.connectionProfiles
Methods
create
POST /v1/{parent}/connectionProfiles
Creates a new connection profile in a given project and location.
delete
DELETE /v1/{name}
Deletes a single Database Migration Service connection profile.
get
GET /v1/{name}
Gets details of a single connection profile.
getIamPolicy
GET /v1/{resource}:getIamPolicy
Gets the access control policy for a resource.
list
GET /v1/{parent}/connectionProfiles
Retrieves a list of all connection profiles in a given project and location.
patch
PATCH /v1/{connectionProfile.name}
Update the configuration of a single connection profile.
setIamPolicy
POST /v1/{resource}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v1/{resource}:testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1.projects.locations.conversionWorkspaces
Methods
apply
POST /v1/{name}:apply
Applies draft tree onto a specific destination database.
commit
POST /v1/{name}:commit
Marks all the data in the conversion workspace as committed.
convert
POST /v1/{name}:convert
Creates a draft tree schema for the destination database.
create
POST /v1/{parent}/conversionWorkspaces
Creates a new conversion workspace in a given project and location.
delete
DELETE /v1/{name}
Deletes a single conversion workspace.
describeConversionWorkspaceRevisions
GET /v1/{conversionWorkspace}:describeConversionWorkspaceRevisions
Retrieves a list of committed revisions of a specific conversion workspace.
describeDatabaseEntities
GET /v1/{conversionWorkspace}:describeDatabaseEntities
Describes the database entities tree for a specific conversion workspace and a specific tree type.
get
GET /v1/{name}
Gets details of a single conversion workspace.
getIamPolicy
GET /v1/{resource}:getIamPolicy
Gets the access control policy for a resource.
list
GET /v1/{parent}/conversionWorkspaces
Lists conversion workspaces in a given project and location.
patch
PATCH /v1/{conversionWorkspace.name}
Updates the parameters of a single conversion workspace.
rollback
POST /v1/{name}:rollback
Rolls back a conversion workspace to the last committed snapshot.
searchBackgroundJobs
GET /v1/{conversionWorkspace}:searchBackgroundJobs
Searches/lists the background jobs for a specific conversion workspace.
seed
POST /v1/{name}:seed
Imports a snapshot of the source database into the conversion workspace.
setIamPolicy
POST /v1/{resource}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v1/{resource}:testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1.projects.locations.conversionWorkspaces.mappingRules
Methods
create
POST /v1/{parent}/mappingRules
Creates a new mapping rule for a given conversion workspace.
delete
DELETE /v1/{name}
Deletes a single mapping rule.
get
GET /v1/{name}
Gets the details of a mapping rule.
import
POST /v1/{parent}/mappingRules:import
Imports the mapping rules for a given conversion workspace.
list
GET /v1/{parent}/mappingRules
Lists the mapping rules for a specific conversion workspace.
REST Resource: v1.projects.locations.migrationJobs
Methods
create
POST /v1/{parent}/migrationJobs
Creates a new migration job in a given project and location.
delete
DELETE /v1/{name}
Deletes a single migration job.
demoteDestination
POST /v1/{name}:demoteDestination
Demotes the destination database to become a read replica of the source.
fetchSourceObjects
GET /v1/{name}:fetchSourceObjects
Retrieves objects from the source database that can be selected for data migration.
generateSshScript
POST /v1/{migrationJob}:generateSshScript
Generate a SSH configuration script to configure the reverse SSH connectivity.
generateTcpProxyScript
POST /v1/{migrationJob}:generateTcpProxyScript
Generate a TCP Proxy configuration script to configure a cloud-hosted VM running a TCP Proxy.
get
GET /v1/{name}
Gets details of a single migration job.
getIamPolicy
GET /v1/{resource}:getIamPolicy
Gets the access control policy for a resource.
list
GET /v1/{parent}/migrationJobs
Lists migration jobs in a given project and location.
patch
PATCH /v1/{migrationJob.name}
Updates the parameters of a single migration job.
promote
POST /v1/{name}:promote
Promote a migration job, stopping replication to the destination and promoting the destination to be a standalone database.
restart
POST /v1/{name}:restart
Restart a stopped or failed migration job, resetting the destination instance to its original state and starting the migration process from scratch.
resume
POST /v1/{name}:resume
Resume a migration job that is currently stopped and is resumable (was stopped during CDC phase).
setIamPolicy
POST /v1/{resource}:setIamPolicy
Sets the access control policy on the specified resource.
start
POST /v1/{name}:start
Start an already created migration job.
stop
POST /v1/{name}:stop
Stops a running migration job.
testIamPermissions
POST /v1/{resource}:testIamPermissions
Returns permissions that a caller has on the specified resource.
verify
POST /v1/{name}:verify
Verify a migration job, making sure the destination can reach the source and that all configuration and prerequisites are met.
REST Resource: v1.projects.locations.migrationJobs.objects
Methods
get
GET /v1/{name}
Use this method to get details about a migration job object.
getIamPolicy
GET /v1/{resource}:getIamPolicy
Gets the access control policy for a resource.
list
GET /v1/{parent}/objects
Use this method to list the objects of a specific migration job.
lookup
POST /v1/{parent}/objects:lookup
Use this method to look up a migration job object by its source object identifier.
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
REST Resource: v1.projects.locations.privateConnections
Methods
create
POST /v1/{parent}/privateConnections
Creates a new private connection in a given project and location.
delete
DELETE /v1/{name}
Deletes a single Database Migration Service private connection.
get
GET /v1/{name}
Gets details of a single private connection.
getIamPolicy
GET /v1/{resource}:getIamPolicy
Gets the access control policy for a resource.
list
GET /v1/{parent}/privateConnections
Retrieves a list of private connections in a given project and location.
setIamPolicy
POST /v1/{resource}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v1/{resource}:testIamPermissions
Returns permissions that a caller has on the specified resource.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-26 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-26 UTC."],[],[]]
