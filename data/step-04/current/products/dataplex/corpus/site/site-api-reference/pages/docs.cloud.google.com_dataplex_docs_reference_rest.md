---
title: "Cloud Dataplex API \_|\_ Knowledge Catalog \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataplex/docs/reference/rest
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/dataplex/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/dataplex/docs/reference/rest
  title: "Cloud Dataplex API \_|\_ Knowledge Catalog \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

As of April 10, 2026, Dataplex Universal Catalog is now called Knowledge Catalog. The API, client library, CLI, and IAM names remain unchanged.
Home
Documentation
Data analytics
Knowledge Catalog
Reference
Send feedback
Cloud Dataplex API
Stay organized with collections
Save and categorize content based on your preferences.
A unified, intelligent governance solution for data and AI assets.
REST Resource: v1.organizations.locations.encryptionConfigs
REST Resource: v1.organizations.locations.operations
REST Resource: v1.projects.locations
REST Resource: v1.projects.locations.aspectTypes
REST Resource: v1.projects.locations.dataAttributeBindings
REST Resource: v1.projects.locations.dataProducts
REST Resource: v1.projects.locations.dataProducts.dataAssets
REST Resource: v1.projects.locations.dataScans
REST Resource: v1.projects.locations.dataScans.jobs
REST Resource: v1.projects.locations.dataTaxonomies
REST Resource: v1.projects.locations.dataTaxonomies.attributes
REST Resource: v1.projects.locations.entryGroups
REST Resource: v1.projects.locations.entryGroups.entries
REST Resource: v1.projects.locations.entryGroups.entryLinks
REST Resource: v1.projects.locations.entryTypes
REST Resource: v1.projects.locations.glossaries
REST Resource: v1.projects.locations.glossaries.categories
REST Resource: v1.projects.locations.glossaries.terms
REST Resource: v1.projects.locations.lakes
REST Resource: v1.projects.locations.lakes.actions
REST Resource: v1.projects.locations.lakes.environments
REST Resource: v1.projects.locations.lakes.tasks
REST Resource: v1.projects.locations.lakes.tasks.jobs
REST Resource: v1.projects.locations.lakes.zones
REST Resource: v1.projects.locations.lakes.zones.actions
REST Resource: v1.projects.locations.lakes.zones.assets
REST Resource: v1.projects.locations.lakes.zones.assets.actions
REST Resource: v1.projects.locations.lakes.zones.entities
REST Resource: v1.projects.locations.lakes.zones.entities.partitions
REST Resource: v1.projects.locations.metadataFeeds
REST Resource: v1.projects.locations.metadataJobs
REST Resource: v1.projects.locations.operations
Service: dataplex.googleapis.com
To call this service, we recommend that you use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery document:
https://dataplex.googleapis.com/$discovery/rest?version=v1
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://dataplex.googleapis.com
REST Resource: v1.organizations.locations.encryptionConfigs
Methods
create
POST /v1/{parent=organizations/*/locations/*}/encryptionConfigs
Create an EncryptionConfig.
delete
DELETE /v1/{name=organizations/*/locations/*/encryptionConfigs/*}
Delete an EncryptionConfig.
get
GET /v1/{name=organizations/*/locations/*/encryptionConfigs/*}
Get an EncryptionConfig.
list
GET /v1/{parent=organizations/*/locations/*}/encryptionConfigs
List EncryptionConfigs.
patch
PATCH /v1/{encryptionConfig.name=organizations/*/locations/*/encryptionConfigs/*}
Update an EncryptionConfig.
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
REST Resource: v1.projects.locations
Methods
get
GET /v1/{name=projects/*/locations/*}
Gets information about a location.
list
GET /v1/{name=projects/*}/locations
Lists information about the supported locations for this service.
lookupContext
POST /v1/{name=projects/*/locations/*}:lookupContext
Looks up LLM Context for the specified resources.
lookupEntry
GET /v1/{name=projects/*/locations/*}:lookupEntry
Looks up an entry by name using the permission on the source system.
lookupEntryLinks
GET /v1/{name=projects/*/locations/*}:lookupEntryLinks
Looks up Entry Links referencing the specified Entry.
modifyEntry
POST /v1/{name=projects/*/locations/*}:modifyEntry
Modifies an entry using the permission on the source system.
searchEntries
POST /v1/{name=projects/*/locations/*}:searchEntries
Searches for Entries matching the given query and scope.
REST Resource: v1.projects.locations.aspectTypes
Methods
create
POST /v1/{parent=projects/*/locations/*}/aspectTypes
Creates an AspectType.
delete
DELETE /v1/{name=projects/*/locations/*/aspectTypes/*}
Deletes an AspectType.
get
GET /v1/{name=projects/*/locations/*/aspectTypes/*}
Gets an AspectType.
getIamPolicy
GET /v1/{resource=projects/*/locations/*/aspectTypes/*}:getIamPolicy
Gets the access control policy for a resource.
list
GET /v1/{parent=projects/*/locations/*}/aspectTypes
Lists AspectType resources in a project and location.
patch
PATCH /v1/{aspectType.name=projects/*/locations/*/aspectTypes/*}
Updates an AspectType.
setIamPolicy
POST /v1/{resource=projects/*/locations/*/aspectTypes/*}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v1/{resource=projects/*/locations/*/aspectTypes/*}:testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1.projects.locations.dataAttributeBindings
Methods
create (deprecated)
POST /v1/{parent=projects/*/locations/*}/dataAttributeBindings
Create a DataAttributeBinding resource.
delete (deprecated)
DELETE /v1/{name=projects/*/locations/*/dataAttributeBindings/*}
Deletes a DataAttributeBinding resource.
get (deprecated)
GET /v1/{name=projects/*/locations/*/dataAttributeBindings/*}
Retrieves a DataAttributeBinding resource.
getIamPolicy
GET /v1/{resource=projects/*/locations/*/dataAttributeBindings/*}:getIamPolicy
Gets the access control policy for a resource.
list (deprecated)
GET /v1/{parent=projects/*/locations/*}/dataAttributeBindings
Lists DataAttributeBinding resources in a project and location.
patch (deprecated)
PATCH /v1/{dataAttributeBinding.name=projects/*/locations/*/dataAttributeBindings/*}
Updates a DataAttributeBinding resource.
setIamPolicy
POST /v1/{resource=projects/*/locations/*/dataAttributeBindings/*}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v1/{resource=projects/*/locations/*/dataAttributeBindings/*}:testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1.projects.locations.dataProducts
Methods
create
POST /v1/{parent=projects/*/locations/*}/dataProducts
Creates a data product.
delete
DELETE /v1/{name=projects/*/locations/*/dataProducts/*}
Deletes a data product.
get
GET /v1/{name=projects/*/locations/*/dataProducts/*}
Gets a data product.
list
GET /v1/{parent=projects/*/locations/*}/dataProducts
Lists data products for a given project.
patch
PATCH /v1/{dataProduct.name=projects/*/locations/*/dataProducts/*}
Updates a data product.
REST Resource: v1.projects.locations.dataProducts.dataAssets
Methods
create
POST /v1/{parent=projects/*/locations/*/dataProducts/*}/dataAssets
Creates a data asset.
delete
DELETE /v1/{name=projects/*/locations/*/dataProducts/*/dataAssets/*}
Deletes a data asset.
get
GET /v1/{name=projects/*/locations/*/dataProducts/*/dataAssets/*}
Gets a data asset.
list
GET /v1/{parent=projects/*/locations/*/dataProducts/*}/dataAssets
Lists data assets for a given data product.
patch
PATCH /v1/{dataAsset.name=projects/*/locations/*/dataProducts/*/dataAssets/*}
Updates a data asset.
REST Resource: v1.projects.locations.dataScans
Methods
create
POST /v1/{parent=projects/*/locations/*}/dataScans
Creates a DataScan resource.
delete
DELETE /v1/{name=projects/*/locations/*/dataScans/*}
Deletes a DataScan resource.
generateDataQualityRules
POST /v1/{name=projects/*/locations/*/dataScans/*}:generateDataQualityRules
Generates recommended data quality rules based on the results of a data profiling scan.
get
GET /v1/{name=projects/*/locations/*/dataScans/*}
Gets a DataScan resource.
getIamPolicy
GET /v1/{resource=projects/*/locations/*/dataScans/*}:getIamPolicy
Gets the access control policy for a resource.
list
GET /v1/{parent=projects/*/locations/*}/dataScans
Lists DataScans.
patch
PATCH /v1/{dataScan.name=projects/*/locations/*/dataScans/*}
Updates a DataScan resource.
run
POST /v1/{name=projects/*/locations/*/dataScans/*}:run
Runs an on-demand execution of a DataScan
setIamPolicy
POST /v1/{resource=projects/*/locations/*/dataScans/*}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v1/{resource=projects/*/locations/*/dataScans/*}:testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1.projects.locations.dataScans.jobs
Methods
generateDataQualityRules
POST /v1/{name=projects/*/locations/*/dataScans/*/jobs/*}:generateDataQualityRules
Generates recommended data quality rules based on the results of a data profiling scan.
get
GET /v1/{name=projects/*/locations/*/dataScans/*/jobs/*}
Gets a DataScanJob resource.
list
GET /v1/{parent=projects/*/locations/*/dataScans/*}/jobs
Lists DataScanJobs under the given DataScan.
REST Resource: v1.projects.locations.dataTaxonomies
Methods
create (deprecated)
POST /v1/{parent=projects/*/locations/*}/dataTaxonomies
Create a DataTaxonomy resource.
delete (deprecated)
DELETE /v1/{name=projects/*/locations/*/dataTaxonomies/*}
Deletes a DataTaxonomy resource.
get (deprecated)
GET /v1/{name=projects/*/locations/*/dataTaxonomies/*}
Retrieves a DataTaxonomy resource.
getIamPolicy
GET /v1/{resource=projects/*/locations/*/dataTaxonomies/*}:getIamPolicy
Gets the access control policy for a resource.
list (deprecated)
GET /v1/{parent=projects/*/locations/*}/dataTaxonomies
Lists DataTaxonomy resources in a project and location.
patch (deprecated)
PATCH /v1/{dataTaxonomy.name=projects/*/locations/*/dataTaxonomies/*}
Updates a DataTaxonomy resource.
setIamPolicy
POST /v1/{resource=projects/*/locations/*/dataTaxonomies/*}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v1/{resource=projects/*/locations/*/dataTaxonomies/*}:testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1.projects.locations.dataTaxonomies.attributes
Methods
create (deprecated)
POST /v1/{parent=projects/*/locations/*/dataTaxonomies/*}/attributes
Create a DataAttribute resource.
delete (deprecated)
DELETE /v1/{name=projects/*/locations/*/dataTaxonomies/*/attributes/*}
Deletes a Data Attribute resource.
get (deprecated)
GET /v1/{name=projects/*/locations/*/dataTaxonomies/*/attributes/*}
Retrieves a Data Attribute resource.
getIamPolicy
GET /v1/{resource=projects/*/locations/*/dataTaxonomies/*/attributes/*}:getIamPolicy
Gets the access control policy for a resource.
list (deprecated)
GET /v1/{parent=projects/*/locations/*/dataTaxonomies/*}/attributes
Lists Data Attribute resources in a DataTaxonomy.
patch (deprecated)
PATCH /v1/{dataAttribute.name=projects/*/locations/*/dataTaxonomies/*/attributes/*}
Updates a DataAttribute resource.
setIamPolicy
POST /v1/{resource=projects/*/locations/*/dataTaxonomies/*/attributes/*}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v1/{resource=projects/*/locations/*/dataTaxonomies/*/attributes/*}:testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1.projects.locations.entryGroups
Methods
create
POST /v1/{parent=projects/*/locations/*}/entryGroups
Creates an EntryGroup.
delete
DELETE /v1/{name=projects/*/locations/*/entryGroups/*}
Deletes an EntryGroup.
get
GET /v1/{name=projects/*/locations/*/entryGroups/*}
Gets an EntryGroup.
getIamPolicy
GET /v1/{resource=projects/*/locations/*/entryGroups/*}:getIamPolicy
Gets the access control policy for a resource.
list
GET /v1/{parent=projects/*/locations/*}/entryGroups
Lists EntryGroup resources in a project and location.
patch
PATCH /v1/{entryGroup.name=projects/*/locations/*/entryGroups/*}
Updates an EntryGroup.
setIamPolicy
POST /v1/{resource=projects/*/locations/*/entryGroups/*}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v1/{resource=projects/*/locations/*/entryGroups/*}:testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1.projects.locations.entryGroups.entries
Methods
create
POST /v1/{parent=projects/*/locations/*/entryGroups/*}/entries
Creates an Entry.
delete
DELETE /v1/{name=projects/*/locations/*/entryGroups/*/entries/**}
Deletes an Entry.
get
GET /v1/{name=projects/*/locations/*/entryGroups/*/entries/**}
Gets an Entry.
list
GET /v1/{parent=projects/*/locations/*/entryGroups/*}/entries
Lists Entries within an EntryGroup.
patch
PATCH /v1/{entry.name=projects/*/locations/*/entryGroups/*/entries/**}
Updates an Entry.
REST Resource: v1.projects.locations.entryGroups.entryLinks
Methods
create
POST /v1/{parent=projects/*/locations/*/entryGroups/*}/entryLinks
Creates an Entry Link.
delete
DELETE /v1/{name=projects/*/locations/*/entryGroups/*/entryLinks/*}
Deletes an Entry Link.
get
GET /v1/{name=projects/*/locations/*/entryGroups/*/entryLinks/*}
Gets an Entry Link.
patch
PATCH /v1/{entryLink.name=projects/*/locations/*/entryGroups/*/entryLinks/**}
Updates an Entry Link.
REST Resource: v1.projects.locations.entryTypes
Methods
create
POST /v1/{parent=projects/*/locations/*}/entryTypes
Creates an EntryType.
delete
DELETE /v1/{name=projects/*/locations/*/entryTypes/*}
Deletes an EntryType.
get
GET /v1/{name=projects/*/locations/*/entryTypes/*}
Gets an EntryType.
getIamPolicy
GET /v1/{resource=projects/*/locations/*/entryTypes/*}:getIamPolicy
Gets the access control policy for a resource.
list
GET /v1/{parent=projects/*/locations/*}/entryTypes
Lists EntryType resources in a project and location.
patch
PATCH /v1/{entryType.name=projects/*/locations/*/entryTypes/*}
Updates an EntryType.
setIamPolicy
POST /v1/{resource=projects/*/locations/*/entryTypes/*}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v1/{resource=projects/*/locations/*/entryTypes/*}:testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1.projects.locations.glossaries
Methods
create
POST /v1/{parent=projects/*/locations/*}/glossaries
Creates a new Glossary resource.
delete
DELETE /v1/{name=projects/*/locations/*/glossaries/*}
Deletes a Glossary resource.
get
GET /v1/{name=projects/*/locations/*/glossaries/*}
Gets a Glossary resource.
getIamPolicy
GET /v1/{resource=projects/*/locations/*/glossaries/*}:getIamPolicy
Gets the access control policy for a resource.
list
GET /v1/{parent=projects/*/locations/*}/glossaries
Lists Glossary resources in a project and location.
patch
PATCH /v1/{glossary.name=projects/*/locations/*/glossaries/*}
Updates a Glossary resource.
setIamPolicy
POST /v1/{resource=projects/*/locations/*/glossaries/*}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v1/{resource=projects/*/locations/*/glossaries/*}:testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1.projects.locations.glossaries.categories
Methods
create
POST /v1/{parent=projects/*/locations/*/glossaries/*}/categories
Creates a new GlossaryCategory resource.
delete
DELETE /v1/{name=projects/*/locations/*/glossaries/*/categories/*}
Deletes a GlossaryCategory resource.
get
GET /v1/{name=projects/*/locations/*/glossaries/*/categories/*}
Gets a GlossaryCategory resource.
list
GET /v1/{parent=projects/*/locations/*/glossaries/*}/categories
Lists GlossaryCategory resources in a Glossary.
patch
PATCH /v1/{category.name=projects/*/locations/*/glossaries/*/categories/*}
Updates a GlossaryCategory resource.
REST Resource: v1.projects.locations.glossaries.terms
Methods
create
POST /v1/{parent=projects/*/locations/*/glossaries/*}/terms
Creates a new GlossaryTerm resource.
delete
DELETE /v1/{name=projects/*/locations/*/glossaries/*/terms/*}
Deletes a GlossaryTerm resource.
get
GET /v1/{name=projects/*/locations/*/glossaries/*/terms/*}
Gets a GlossaryTerm resource.
list
GET /v1/{parent=projects/*/locations/*/glossaries/*}/terms
Lists GlossaryTerm resources in a Glossary.
patch
PATCH /v1/{term.name=projects/*/locations/*/glossaries/*/terms/*}
Updates a GlossaryTerm resource.
REST Resource: v1.projects.locations.lakes
Methods
create
POST /v1/{parent=projects/*/locations/*}/lakes
Creates a lake resource.
delete
DELETE /v1/{name=projects/*/locations/*/lakes/*}
Deletes a lake resource.
get
GET /v1/{name=projects/*/locations/*/lakes/*}
Retrieves a lake resource.
getIamPolicy
GET /v1/{resource=projects/*/locations/*/lakes/*}:getIamPolicy
Gets the access control policy for a resource.
list
GET /v1/{parent=projects/*/locations/*}/lakes
Lists lake resources in a project and location.
patch
PATCH /v1/{lake.name=projects/*/locations/*/lakes/*}
Updates a lake resource.
setIamPolicy
POST /v1/{resource=projects/*/locations/*/lakes/*}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v1/{resource=projects/*/locations/*/lakes/*}:testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1.projects.locations.lakes.actions
Methods
list
GET /v1/{parent=projects/*/locations/*/lakes/*}/actions
Lists action resources in a lake.
REST Resource: v1.projects.locations.lakes.environments
Methods
getIamPolicy
GET /v1/{resource=projects/*/locations/*/lakes/*/environments/*}:getIamPolicy
Gets the access control policy for a resource.
setIamPolicy
POST /v1/{resource=projects/*/locations/*/lakes/*/environments/*}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v1/{resource=projects/*/locations/*/lakes/*/environments/*}:testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1.projects.locations.lakes.tasks
Methods
create
POST /v1/{parent=projects/*/locations/*/lakes/*}/tasks
Creates a task resource within a lake.
delete
DELETE /v1/{name=projects/*/locations/*/lakes/*/tasks/*}
Delete the task resource.
get
GET /v1/{name=projects/*/locations/*/lakes/*/tasks/*}
Get task resource.
getIamPolicy
GET /v1/{resource=projects/*/locations/*/lakes/*/tasks/*}:getIamPolicy
Gets the access control policy for a resource.
list
GET /v1/{parent=projects/*/locations/*/lakes/*}/tasks
Lists tasks under the given lake.
patch
PATCH /v1/{task.name=projects/*/locations/*/lakes/*/tasks/*}
Update the task resource.
run
POST /v1/{name=projects/*/locations/*/lakes/*/tasks/*}:run
Run an on demand execution of a Task.
setIamPolicy
POST /v1/{resource=projects/*/locations/*/lakes/*/tasks/*}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v1/{resource=projects/*/locations/*/lakes/*/tasks/*}:testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1.projects.locations.lakes.tasks.jobs
Methods
cancel
POST /v1/{name=projects/*/locations/*/lakes/*/tasks/*/jobs/*}:cancel
Cancel jobs running for the task resource.
get
GET /v1/{name=projects/*/locations/*/lakes/*/tasks/*/jobs/*}
Get job resource.
list
GET /v1/{parent=projects/*/locations/*/lakes/*/tasks/*}/jobs
Lists Jobs under the given task.
REST Resource: v1.projects.locations.lakes.zones
Methods
create
POST /v1/{parent=projects/*/locations/*/lakes/*}/zones
Creates a zone resource within a lake.
delete
DELETE /v1/{name=projects/*/locations/*/lakes/*/zones/*}
Deletes a zone resource.
get
GET /v1/{name=projects/*/locations/*/lakes/*/zones/*}
Retrieves a zone resource.
getIamPolicy
GET /v1/{resource=projects/*/locations/*/lakes/*/zones/*}:getIamPolicy
Gets the access control policy for a resource.
list
GET /v1/{parent=projects/*/locations/*/lakes/*}/zones
Lists zone resources in a lake.
patch
PATCH /v1/{zone.name=projects/*/locations/*/lakes/*/zones/*}
Updates a zone resource.
setIamPolicy
POST /v1/{resource=projects/*/locations/*/lakes/*/zones/*}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v1/{resource=projects/*/locations/*/lakes/*/zones/*}:testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1.projects.locations.lakes.zones.actions
Methods
list
GET /v1/{parent=projects/*/locations/*/lakes/*/zones/*}/actions
Lists action resources in a zone.
REST Resource: v1.projects.locations.lakes.zones.assets
Methods
create
POST /v1/{parent=projects/*/locations/*/lakes/*/zones/*}/assets
Creates an asset resource.
delete
DELETE /v1/{name=projects/*/locations/*/lakes/*/zones/*/assets/*}
Deletes an asset resource.
get
GET /v1/{name=projects/*/locations/*/lakes/*/zones/*/assets/*}
Retrieves an asset resource.
getIamPolicy
GET /v1/{resource=projects/*/locations/*/lakes/*/zones/*/assets/*}:getIamPolicy
Gets the access control policy for a resource.
list
GET /v1/{parent=projects/*/locations/*/lakes/*/zones/*}/assets
Lists asset resources in a zone.
patch
PATCH /v1/{asset.name=projects/*/locations/*/lakes/*/zones/*/assets/*}
Updates an asset resource.
setIamPolicy
POST /v1/{resource=projects/*/locations/*/lakes/*/zones/*/assets/*}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v1/{resource=projects/*/locations/*/lakes/*/zones/*/assets/*}:testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1.projects.locations.lakes.zones.assets.actions
Methods
list
GET /v1/{parent=projects/*/locations/*/lakes/*/zones/*/assets/*}/actions
Lists action resources in an asset.
REST Resource: v1.projects.locations.lakes.zones.entities
Methods
create
POST /v1/{parent=projects/*/locations/*/lakes/*/zones/*}/entities
Create a metadata entity.
delete
DELETE /v1/{name=projects/*/locations/*/lakes/*/zones/*/entities/*}
Delete a metadata entity.
get
GET /v1/{name=projects/*/locations/*/lakes/*/zones/*/entities/*}
Get a metadata entity.
list
GET /v1/{parent=projects/*/locations/*/lakes/*/zones/*}/entities
List metadata entities in a zone.
update
PUT /v1/{entity.name=projects/*/locations/*/lakes/*/zones/*/entities/*}
Update a metadata entity.
REST Resource: v1.projects.locations.lakes.zones.entities.partitions
Methods
create
POST /v1/{parent=projects/*/locations/*/lakes/*/zones/*/entities/*}/partitions
Create a metadata partition.
delete
DELETE /v1/{name=projects/*/locations/*/lakes/*/zones/*/entities/*/partitions/**}
Delete a metadata partition.
get
GET /v1/{name=projects/*/locations/*/lakes/*/zones/*/entities/*/partitions/**}
Get a metadata partition of an entity.
list
GET /v1/{parent=projects/*/locations/*/lakes/*/zones/*/entities/*}/partitions
List metadata partitions of an entity.
REST Resource: v1.projects.locations.metadataFeeds
Methods
create
POST /v1/{parent=projects/*/locations/*}/metadataFeeds
Creates a MetadataFeed.
delete
DELETE /v1/{name=projects/*/locations/*/metadataFeeds/*}
Deletes a MetadataFeed.
get
GET /v1/{name=projects/*/locations/*/metadataFeeds/*}
Gets a MetadataFeed.
list
GET /v1/{parent=projects/*/locations/*}/metadataFeeds
Retrieve a list of MetadataFeeds.
patch
PATCH /v1/{metadataFeed.name=projects/*/locations/*/metadataFeeds/*}
Updates a MetadataFeed.
REST Resource: v1.projects.locations.metadataJobs
Methods
cancel
POST /v1/{name=projects/*/locations/*/metadataJobs/*}:cancel
Cancels a metadata job.
create
POST /v1/{parent=projects/*/locations/*}/metadataJobs
Creates a metadata job.
get
GET /v1/{name=projects/*/locations/*/metadataJobs/*}
Gets a metadata job.
list
GET /v1/{parent=projects/*/locations/*}/metadataJobs
Lists metadata jobs.
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
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-26 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-26 UTC."],[],[]]
