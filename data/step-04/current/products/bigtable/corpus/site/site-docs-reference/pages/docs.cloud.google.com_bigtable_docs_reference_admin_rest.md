---
title: "Cloud Bigtable Admin API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bigtable/docs/reference/admin/rest
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/bigtable/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/bigtable/docs/reference/admin/rest
  title: "Cloud Bigtable Admin API \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Bigtable
Reference
Send feedback
Cloud Bigtable Admin API
Stay organized with collections
Save and categorize content based on your preferences.
Administer your Cloud Bigtable tables and instances.
Service: bigtableadmin.googleapis.com
To call this service, we recommend that you use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery document:
https://bigtableadmin.googleapis.com/$discovery/rest?version=v2
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://bigtableadmin.googleapis.com
REST Resource: v2.operations
Methods
get
GET /v2/{name=operations/**}
Gets the latest state of a long-running operation.
REST Resource: v2.operations.projects.operations
Methods
list
GET /v2/{name=operations/projects/**}/operations
Lists operations that match the specified filter in the request.
REST Resource: v2.projects.instances
Methods
create
POST /v2/{parent=projects/*}/instances
Create an instance within a project.
delete
DELETE /v2/{name=projects/*/instances/*}
Delete an instance from a project.
get
GET /v2/{name=projects/*/instances/*}
Gets information about an instance.
getIamPolicy
POST /v2/{resource=projects/*/instances/*}:getIamPolicy
Gets the access control policy for an instance resource.
list
GET /v2/{parent=projects/*}/instances
Lists information about instances in a project.
partialUpdateInstance
PATCH /v2/{instance.name=projects/*/instances/*}
Partially updates an instance within a project.
setIamPolicy
POST /v2/{resource=projects/*/instances/*}:setIamPolicy
Sets the access control policy on an instance resource.
testIamPermissions
POST /v2/{resource=projects/*/instances/*}:testIamPermissions
Returns permissions that the caller has on the specified instance resource.
update
PUT /v2/{name=projects/*/instances/*}
Updates an instance within a project.
REST Resource: v2.projects.instances.appProfiles
Methods
create
POST /v2/{parent=projects/*/instances/*}/appProfiles
Creates an app profile within an instance.
delete
DELETE /v2/{name=projects/*/instances/*/appProfiles/*}
Deletes an app profile from an instance.
get
GET /v2/{name=projects/*/instances/*/appProfiles/*}
Gets information about an app profile.
list
GET /v2/{parent=projects/*/instances/*}/appProfiles
Lists information about app profiles in an instance.
patch
PATCH /v2/{appProfile.name=projects/*/instances/*/appProfiles/*}
Updates an app profile within an instance.
REST Resource: v2.projects.instances.clusters
Methods
create
POST /v2/{parent=projects/*/instances/*}/clusters
Creates a cluster within an instance.
delete
DELETE /v2/{name=projects/*/instances/*/clusters/*}
Deletes a cluster from an instance.
get
GET /v2/{name=projects/*/instances/*/clusters/*}
Gets information about a cluster.
list
GET /v2/{parent=projects/*/instances/*}/clusters
Lists information about clusters in an instance.
partialUpdateCluster
PATCH /v2/{cluster.name=projects/*/instances/*/clusters/*}
Partially updates a cluster within a project.
update
PUT /v2/{name=projects/*/instances/*/clusters/*}
Updates a cluster within an instance.
REST Resource: v2.projects.instances.clusters.backups
Methods
copy
POST /v2/{parent=projects/*/instances/*/clusters/*}/backups:copy
Copy a Cloud Bigtable backup to a new backup in the destination cluster located in the destination instance and project.
create
POST /v2/{parent=projects/*/instances/*/clusters/*}/backups
Starts creating a new Cloud Bigtable Backup.
delete
DELETE /v2/{name=projects/*/instances/*/clusters/*/backups/*}
Deletes a pending or completed Cloud Bigtable backup.
get
GET /v2/{name=projects/*/instances/*/clusters/*/backups/*}
Gets metadata on a pending or completed Cloud Bigtable Backup.
getIamPolicy
POST /v2/{resource=projects/*/instances/*/clusters/*/backups/*}:getIamPolicy
Gets the access control policy for a Bigtable resource.
list
GET /v2/{parent=projects/*/instances/*/clusters/*}/backups
Lists Cloud Bigtable backups.
patch
PATCH /v2/{backup.name=projects/*/instances/*/clusters/*/backups/*}
Updates a pending or completed Cloud Bigtable Backup.
setIamPolicy
POST /v2/{resource=projects/*/instances/*/clusters/*/backups/*}:setIamPolicy
Sets the access control policy on a Bigtable resource.
testIamPermissions
POST /v2/{resource=projects/*/instances/*/clusters/*/backups/*}:testIamPermissions
Returns permissions that the caller has on the specified Bigtable resource.
REST Resource: v2.projects.instances.clusters.hotTablets
Methods
list
GET /v2/{parent=projects/*/instances/*/clusters/*}/hotTablets
Lists hot tablets in a cluster, within the time range provided.
REST Resource: v2.projects.instances.logicalViews
Methods
create
POST /v2/{parent=projects/*/instances/*}/logicalViews
Creates a logical view within an instance.
delete
DELETE /v2/{name=projects/*/instances/*/logicalViews/*}
Deletes a logical view from an instance.
get
GET /v2/{name=projects/*/instances/*/logicalViews/*}
Gets information about a logical view.
getIamPolicy
POST /v2/{resource=projects/*/instances/*/logicalViews/*}:getIamPolicy
Gets the access control policy for an instance resource.
list
GET /v2/{parent=projects/*/instances/*}/logicalViews
Lists information about logical views in an instance.
patch
PATCH /v2/{logicalView.name=projects/*/instances/*/logicalViews/*}
Updates a logical view within an instance.
setIamPolicy
POST /v2/{resource=projects/*/instances/*/logicalViews/*}:setIamPolicy
Sets the access control policy on an instance resource.
testIamPermissions
POST /v2/{resource=projects/*/instances/*/logicalViews/*}:testIamPermissions
Returns permissions that the caller has on the specified instance resource.
REST Resource: v2.projects.instances.materializedViews
Methods
create
POST /v2/{parent=projects/*/instances/*}/materializedViews
Creates a materialized view within an instance.
delete
DELETE /v2/{name=projects/*/instances/*/materializedViews/*}
Deletes a materialized view from an instance.
get
GET /v2/{name=projects/*/instances/*/materializedViews/*}
Gets information about a materialized view.
getIamPolicy
POST /v2/{resource=projects/*/instances/*/materializedViews/*}:getIamPolicy
Gets the access control policy for an instance resource.
list
GET /v2/{parent=projects/*/instances/*}/materializedViews
Lists information about materialized views in an instance.
patch
PATCH /v2/{materializedView.name=projects/*/instances/*/materializedViews/*}
Updates a materialized view within an instance.
setIamPolicy
POST /v2/{resource=projects/*/instances/*/materializedViews/*}:setIamPolicy
Sets the access control policy on an instance resource.
testIamPermissions
POST /v2/{resource=projects/*/instances/*/materializedViews/*}:testIamPermissions
Returns permissions that the caller has on the specified instance resource.
REST Resource: v2.projects.instances.tables
Methods
checkConsistency
POST /v2/{name=projects/*/instances/*/tables/*}:checkConsistency
Checks replication consistency based on a consistency token, that is, if replication has caught up based on the conditions specified in the token and the check request.
create
POST /v2/{parent=projects/*/instances/*}/tables
Creates a new table in the specified instance.
delete
DELETE /v2/{name=projects/*/instances/*/tables/*}
Permanently deletes a specified table and all of its data.
dropRowRange
POST /v2/{name=projects/*/instances/*/tables/*}:dropRowRange
Permanently drop/delete a row range from a specified table.
generateConsistencyToken
POST /v2/{name=projects/*/instances/*/tables/*}:generateConsistencyToken
Generates a consistency token for a Table, which can be used in CheckConsistency to check whether mutations to the table that finished before this call started have been replicated.
get
GET /v2/{name=projects/*/instances/*/tables/*}
Gets metadata information about the specified table.
getIamPolicy
POST /v2/{resource=projects/*/instances/*/tables/*}:getIamPolicy
Gets the access control policy for a Bigtable resource.
list
GET /v2/{parent=projects/*/instances/*}/tables
Lists all tables served from a specified instance.
modifyColumnFamilies
POST /v2/{name=projects/*/instances/*/tables/*}:modifyColumnFamilies
Performs a series of column family modifications on the specified table.
patch
PATCH /v2/{table.name=projects/*/instances/*/tables/*}
Updates a specified table.
restore
POST /v2/{parent=projects/*/instances/*}/tables:restore
Create a new table by restoring from a completed backup.
setIamPolicy
POST /v2/{resource=projects/*/instances/*/tables/*}:setIamPolicy
Sets the access control policy on a Bigtable resource.
testIamPermissions
POST /v2/{resource=projects/*/instances/*/tables/*}:testIamPermissions
Returns permissions that the caller has on the specified Bigtable resource.
undelete
POST /v2/{name=projects/*/instances/*/tables/*}:undelete
Restores a specified table which was accidentally deleted.
REST Resource: v2.projects.instances.tables.authorizedViews
Methods
create
POST /v2/{parent=projects/*/instances/*/tables/*}/authorizedViews
Creates a new AuthorizedView in a table.
delete
DELETE /v2/{name=projects/*/instances/*/tables/*/authorizedViews/*}
Permanently deletes a specified AuthorizedView.
get
GET /v2/{name=projects/*/instances/*/tables/*/authorizedViews/*}
Gets information from a specified AuthorizedView.
getIamPolicy
POST /v2/{resource=projects/*/instances/*/tables/*/authorizedViews/*}:getIamPolicy
Gets the access control policy for a Bigtable resource.
list
GET /v2/{parent=projects/*/instances/*/tables/*}/authorizedViews
Lists all AuthorizedViews from a specific table.
patch
PATCH /v2/{authorizedView.name=projects/*/instances/*/tables/*/authorizedViews/*}
Updates an AuthorizedView in a table.
setIamPolicy
POST /v2/{resource=projects/*/instances/*/tables/*/authorizedViews/*}:setIamPolicy
Sets the access control policy on a Bigtable resource.
testIamPermissions
POST /v2/{resource=projects/*/instances/*/tables/*/authorizedViews/*}:testIamPermissions
Returns permissions that the caller has on the specified Bigtable resource.
REST Resource: v2.projects.instances.tables.schemaBundles
Methods
create
POST /v2/{parent=projects/*/instances/*/tables/*}/schemaBundles
Creates a new schema bundle in the specified table.
delete
DELETE /v2/{name=projects/*/instances/*/tables/*/schemaBundles/*}
Deletes a schema bundle in the specified table.
get
GET /v2/{name=projects/*/instances/*/tables/*/schemaBundles/*}
Gets metadata information about the specified schema bundle.
getIamPolicy
POST /v2/{resource=projects/*/instances/*/tables/*/schemaBundles/*}:getIamPolicy
Gets the access control policy for a Bigtable resource.
list
GET /v2/{parent=projects/*/instances/*/tables/*}/schemaBundles
Lists all schema bundles associated with the specified table.
patch
PATCH /v2/{schemaBundle.name=projects/*/instances/*/tables/*/schemaBundles/*}
Updates a schema bundle in the specified table.
setIamPolicy
POST /v2/{resource=projects/*/instances/*/tables/*/schemaBundles/*}:setIamPolicy
Sets the access control policy on a Bigtable resource.
testIamPermissions
POST /v2/{resource=projects/*/instances/*/tables/*/schemaBundles/*}:testIamPermissions
Returns permissions that the caller has on the specified Bigtable resource.
REST Resource: v2.projects.locations
Methods
list
GET /v2/{name=projects/*}/locations
Lists information about the supported locations for this service.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-11-04 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-11-04 UTC."],[],[]]
