---
title: "Google Cloud Data Catalog API \_|\_ Data Catalog Documentation \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/data-catalog/docs/reference/rest
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/data-catalog/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/data-catalog/docs/reference/rest
  title: "Google Cloud Data Catalog API \_|\_ Data Catalog Documentation \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Data Catalog API methods that are related to Data Catalog search and metadata are deprecated and will be discontinued on January 30, 2026. See Transition from Data Catalog to Dataplex Universal Catalog . Methods that are related to policy tags and policy tag taxonomies are not deprecated.
Home
Technology areas
Data Catalog
Documentation
Reference
Send feedback
Google Cloud Data Catalog API
Stay organized with collections
Save and categorize content based on your preferences.
A fully managed and highly scalable data discovery and metadata management service.
REST Resource: v1beta1.catalog
REST Resource: v1beta1.entries
REST Resource: v1beta1.projects.locations.entryGroups
REST Resource: v1beta1.projects.locations.entryGroups.entries
REST Resource: v1beta1.projects.locations.entryGroups.entries.tags
REST Resource: v1beta1.projects.locations.entryGroups.tags
REST Resource: v1beta1.projects.locations.tagTemplates
REST Resource: v1beta1.projects.locations.tagTemplates.fields
REST Resource: v1beta1.projects.locations.tagTemplates.fields.enumValues
REST Resource: v1beta1.projects.locations.taxonomies
REST Resource: v1beta1.projects.locations.taxonomies.policyTags
REST Resource: v1.catalog
REST Resource: v1.entries
REST Resource: v1.organizations.locations
REST Resource: v1.projects.locations
REST Resource: v1.projects.locations.entryGroups
REST Resource: v1.projects.locations.entryGroups.entries
REST Resource: v1.projects.locations.entryGroups.entries.tags
REST Resource: v1.projects.locations.entryGroups.tags
REST Resource: v1.projects.locations.operations
REST Resource: v1.projects.locations.tagTemplates
REST Resource: v1.projects.locations.tagTemplates.fields
REST Resource: v1.projects.locations.tagTemplates.fields.enumValues
REST Resource: v1.projects.locations.taxonomies
REST Resource: v1.projects.locations.taxonomies.policyTags
Service: datacatalog.googleapis.com
To call this service, we recommend that you use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery documents:
https://datacatalog.googleapis.com/$discovery/rest?version=v1
https://datacatalog.googleapis.com/$discovery/rest?version=v1beta1
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://datacatalog.googleapis.com
REST Resource: v1beta1.catalog
Methods
search (deprecated)
POST /v1beta1/catalog:search
Searches Data Catalog for multiple resources like entries, tags that match a query.
REST Resource: v1beta1.entries
Methods
lookup (deprecated)
GET /v1beta1/entries:lookup
Get an entry by target resource name.
REST Resource: v1beta1.projects.locations.entryGroups
Methods
create (deprecated)
POST /v1beta1/{parent}/entryGroups
A maximum of 10,000 entry groups may be created per organization across all locations.
delete (deprecated)
DELETE /v1beta1/{name}
Deletes an EntryGroup.
get (deprecated)
GET /v1beta1/{name}
Gets an EntryGroup.
getIamPolicy (deprecated)
POST /v1beta1/{resource}:getIamPolicy
Gets the access control policy for a resource.
list (deprecated)
GET /v1beta1/{parent}/entryGroups
Lists entry groups.
patch (deprecated)
PATCH /v1beta1/{entryGroup.name}
Updates an EntryGroup.
setIamPolicy (deprecated)
POST /v1beta1/{resource}:setIamPolicy
Sets the access control policy for a resource.
testIamPermissions (deprecated)
POST /v1beta1/{resource}:testIamPermissions
Returns the caller's permissions on a resource.
REST Resource: v1beta1.projects.locations.entryGroups.entries
Methods
create (deprecated)
POST /v1beta1/{parent}/entries
Creates an entry.
delete (deprecated)
DELETE /v1beta1/{name}
Deletes an existing entry.
get (deprecated)
GET /v1beta1/{name}
Gets an entry.
getIamPolicy (deprecated)
POST /v1beta1/{resource}:getIamPolicy
Gets the access control policy for a resource.
list (deprecated)
GET /v1beta1/{parent}/entries
Lists entries.
patch (deprecated)
PATCH /v1beta1/{entry.name}
Updates an existing entry.
testIamPermissions (deprecated)
POST /v1beta1/{resource}:testIamPermissions
Returns the caller's permissions on a resource.
REST Resource: v1beta1.projects.locations.entryGroups.entries.tags
Methods
create (deprecated)
POST /v1beta1/{parent}/tags
Creates a tag on an Entry .
delete (deprecated)
DELETE /v1beta1/{name}
Deletes a tag.
list (deprecated)
GET /v1beta1/{parent}/tags
Lists tags assigned to an Entry .
patch (deprecated)
PATCH /v1beta1/{tag.name}
Updates an existing tag.
REST Resource: v1beta1.projects.locations.entryGroups.tags
Methods
create (deprecated)
POST /v1beta1/{parent}/tags
Creates a tag on an Entry .
delete (deprecated)
DELETE /v1beta1/{name}
Deletes a tag.
list (deprecated)
GET /v1beta1/{parent}/tags
Lists tags assigned to an Entry .
patch (deprecated)
PATCH /v1beta1/{tag.name}
Updates an existing tag.
REST Resource: v1beta1.projects.locations.tagTemplates
Methods
create (deprecated)
POST /v1beta1/{parent}/tagTemplates
Creates a tag template.
delete (deprecated)
DELETE /v1beta1/{name}
Deletes a tag template and all tags using the template.
get (deprecated)
GET /v1beta1/{name}
Gets a tag template.
getIamPolicy (deprecated)
POST /v1beta1/{resource}:getIamPolicy
Gets the access control policy for a resource.
patch (deprecated)
PATCH /v1beta1/{tagTemplate.name}
Updates a tag template.
setIamPolicy (deprecated)
POST /v1beta1/{resource}:setIamPolicy
Sets the access control policy for a resource.
testIamPermissions (deprecated)
POST /v1beta1/{resource}:testIamPermissions
Returns the caller's permissions on a resource.
REST Resource: v1beta1.projects.locations.tagTemplates.fields
Methods
create (deprecated)
POST /v1beta1/{parent}/fields
Creates a field in a tag template.
delete (deprecated)
DELETE /v1beta1/{name}
Deletes a field in a tag template and all uses of that field.
patch (deprecated)
PATCH /v1beta1/{name}
Updates a field in a tag template.
rename (deprecated)
POST /v1beta1/{name}:rename
Renames a field in a tag template.
REST Resource: v1beta1.projects.locations.tagTemplates.fields.enumValues
Methods
rename (deprecated)
POST /v1beta1/{name}:rename
Renames an enum value in a tag template.
REST Resource: v1beta1.projects.locations.taxonomies
Methods
create
POST /v1beta1/{parent}/taxonomies
Creates a taxonomy in the specified project.
delete
DELETE /v1beta1/{name}
Deletes a taxonomy.
export
GET /v1beta1/{parent}/taxonomies:export
Exports all taxonomies and their policy tags in a project.
get
GET /v1beta1/{name}
Gets a taxonomy.
getIamPolicy
POST /v1beta1/{resource}:getIamPolicy
Gets the IAM policy for a taxonomy or a policy tag.
import
POST /v1beta1/{parent}/taxonomies:import
Imports all taxonomies and their policy tags to a project as new taxonomies.
list
GET /v1beta1/{parent}/taxonomies
Lists all taxonomies in a project in a particular location that the caller has permission to view.
patch
PATCH /v1beta1/{taxonomy.name}
Updates a taxonomy.
setIamPolicy
POST /v1beta1/{resource}:setIamPolicy
Sets the IAM policy for a taxonomy or a policy tag.
testIamPermissions
POST /v1beta1/{resource}:testIamPermissions
Returns the permissions that a caller has on the specified taxonomy or policy tag.
REST Resource: v1beta1.projects.locations.taxonomies.policyTags
Methods
create
POST /v1beta1/{parent}/policyTags
Creates a policy tag in the specified taxonomy.
delete
DELETE /v1beta1/{name}
Deletes a policy tag.
get
GET /v1beta1/{name}
Gets a policy tag.
getIamPolicy
POST /v1beta1/{resource}:getIamPolicy
Gets the IAM policy for a taxonomy or a policy tag.
list
GET /v1beta1/{parent}/policyTags
Lists all policy tags in a taxonomy.
patch
PATCH /v1beta1/{policyTag.name}
Updates a policy tag.
setIamPolicy
POST /v1beta1/{resource}:setIamPolicy
Sets the IAM policy for a taxonomy or a policy tag.
testIamPermissions
POST /v1beta1/{resource}:testIamPermissions
Returns the permissions that a caller has on the specified taxonomy or policy tag.
REST Resource: v1.catalog
Methods
search (deprecated)
POST /v1/catalog:search
Searches Data Catalog for multiple resources like entries and tags that match a query.
REST Resource: v1.entries
Methods
lookup (deprecated)
GET /v1/entries:lookup
Gets an entry by its target resource name.
REST Resource: v1.organizations.locations
Methods
retrieveConfig (deprecated)
GET /v1/{name}:retrieveConfig
Retrieves the configuration related to the migration from Data Catalog to Dataplex Universal Catalog for a specific organization, including all the projects under it which have a separate configuration set.
retrieveEffectiveConfig (deprecated)
GET /v1/{name}:retrieveEffectiveConfig
Retrieves the effective configuration related to the migration from Data Catalog to Dataplex Universal Catalog for a specific organization or project.
setConfig (deprecated)
POST /v1/{name}:setConfig
Sets the configuration related to the migration to Dataplex Universal Catalog for an organization or project.
REST Resource: v1.projects.locations
Methods
retrieveEffectiveConfig (deprecated)
GET /v1/{name}:retrieveEffectiveConfig
Retrieves the effective configuration related to the migration from Data Catalog to Dataplex Universal Catalog for a specific organization or project.
setConfig (deprecated)
POST /v1/{name}:setConfig
Sets the configuration related to the migration to Dataplex Universal Catalog for an organization or project.
REST Resource: v1.projects.locations.entryGroups
Methods
create (deprecated)
POST /v1/{parent}/entryGroups
Creates an entry group.
delete (deprecated)
DELETE /v1/{name}
Deletes an entry group.
get (deprecated)
GET /v1/{name}
Gets an entry group.
getIamPolicy (deprecated)
POST /v1/{resource}:getIamPolicy
Gets the access control policy for a resource.
list (deprecated)
GET /v1/{parent}/entryGroups
Lists entry groups.
patch (deprecated)
PATCH /v1/{entryGroup.name}
Updates an entry group.
setIamPolicy (deprecated)
POST /v1/{resource}:setIamPolicy
Sets an access control policy for a resource.
testIamPermissions (deprecated)
POST /v1/{resource}:testIamPermissions
Gets your permissions on a resource.
REST Resource: v1.projects.locations.entryGroups.entries
Methods
create (deprecated)
POST /v1/{parent}/entries
Creates an entry.
delete (deprecated)
DELETE /v1/{name}
Deletes an existing entry.
get (deprecated)
GET /v1/{name}
Gets an entry.
getIamPolicy (deprecated)
POST /v1/{resource}:getIamPolicy
Gets the access control policy for a resource.
list (deprecated)
GET /v1/{parent}/entries
Lists entries.
modifyEntryContacts (deprecated)
POST /v1/{name}:modifyEntryContacts
Modifies contacts, part of the business context of an Entry .
modifyEntryOverview (deprecated)
POST /v1/{name}:modifyEntryOverview
Modifies entry overview, part of the business context of an Entry .
patch (deprecated)
PATCH /v1/{entry.name}
Updates an existing entry.
star (deprecated)
POST /v1/{name}:star
Marks an Entry as starred by the current user.
testIamPermissions (deprecated)
POST /v1/{resource}:testIamPermissions
Gets your permissions on a resource.
unstar (deprecated)
POST /v1/{name}:unstar
Marks an Entry as NOT starred by the current user.
REST Resource: v1.projects.locations.entryGroups.entries.tags
Methods
create (deprecated)
POST /v1/{parent}/tags
Creates a tag and assigns it to:
An Entry if the method name is projects.locations.entryGroups.entries.tags.create .
delete (deprecated)
DELETE /v1/{name}
Deletes a tag.
list (deprecated)
GET /v1/{parent}/tags
Lists tags assigned to an Entry .
patch (deprecated)
PATCH /v1/{tag.name}
Updates an existing tag.
reconcile (deprecated)
POST /v1/{parent}/tags:reconcile
ReconcileTags creates or updates a list of tags on the entry.
REST Resource: v1.projects.locations.entryGroups.tags
Methods
create (deprecated)
POST /v1/{parent}/tags
Creates a tag and assigns it to:
An Entry if the method name is projects.locations.entryGroups.entries.tags.create .
delete (deprecated)
DELETE /v1/{name}
Deletes a tag.
list (deprecated)
GET /v1/{parent}/tags
Lists tags assigned to an Entry .
patch (deprecated)
PATCH /v1/{tag.name}
Updates an existing tag.
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
REST Resource: v1.projects.locations.tagTemplates
Methods
create (deprecated)
POST /v1/{parent}/tagTemplates
Creates a tag template.
delete (deprecated)
DELETE /v1/{name}
Deletes a tag template and all tags that use it.
get (deprecated)
GET /v1/{name}
Gets a tag template.
getIamPolicy (deprecated)
POST /v1/{resource}:getIamPolicy
Gets the access control policy for a resource.
patch (deprecated)
PATCH /v1/{tagTemplate.name}
Updates a tag template.
setIamPolicy (deprecated)
POST /v1/{resource}:setIamPolicy
Sets an access control policy for a resource.
testIamPermissions (deprecated)
POST /v1/{resource}:testIamPermissions
Gets your permissions on a resource.
REST Resource: v1.projects.locations.tagTemplates.fields
Methods
create (deprecated)
POST /v1/{parent}/fields
Creates a field in a tag template.
delete (deprecated)
DELETE /v1/{name}
Deletes a field in a tag template and all uses of this field from the tags based on this template.
patch (deprecated)
PATCH /v1/{name}
Updates a field in a tag template.
rename (deprecated)
POST /v1/{name}:rename
Renames a field in a tag template.
REST Resource: v1.projects.locations.tagTemplates.fields.enumValues
Methods
rename (deprecated)
POST /v1/{name}:rename
Renames an enum value in a tag template.
REST Resource: v1.projects.locations.taxonomies
Methods
create
POST /v1/{parent}/taxonomies
Creates a taxonomy in a specified project.
delete
DELETE /v1/{name}
Deletes a taxonomy, including all policy tags in this taxonomy, their associated policies, and the policy tags references from BigQuery columns.
export
GET /v1/{parent}/taxonomies:export
Exports taxonomies in the requested type and returns them, including their policy tags.
get
GET /v1/{name}
Gets a taxonomy.
getIamPolicy
POST /v1/{resource}:getIamPolicy
Gets the IAM policy for a policy tag or a taxonomy.
import
POST /v1/{parent}/taxonomies:import
Creates new taxonomies (including their policy tags) in a given project by importing from inlined or cross-regional sources.
list
GET /v1/{parent}/taxonomies
Lists all taxonomies in a project in a particular location that you have a permission to view.
patch
PATCH /v1/{taxonomy.name}
Updates a taxonomy, including its display name, description, and activated policy types.
replace
POST /v1/{name}:replace
Replaces (updates) a taxonomy and all its policy tags.
setIamPolicy
POST /v1/{resource}:setIamPolicy
Sets the IAM policy for a policy tag or a taxonomy.
testIamPermissions
POST /v1/{resource}:testIamPermissions
Returns your permissions on a specified policy tag or taxonomy.
REST Resource: v1.projects.locations.taxonomies.policyTags
Methods
create
POST /v1/{parent}/policyTags
Creates a policy tag in a taxonomy.
delete
DELETE /v1/{name}
Deletes a policy tag together with the following:
All of its descendant policy tags, if any
Policies associated with the policy tag and its descendants
References from BigQuery table schema of the policy tag and its descendants
get
GET /v1/{name}
Gets a policy tag.
getIamPolicy
POST /v1/{resource}:getIamPolicy
Gets the IAM policy for a policy tag or a taxonomy.
list
GET /v1/{parent}/policyTags
Lists all policy tags in a taxonomy.
patch
PATCH /v1/{policyTag.name}
Updates a policy tag, including its display name, description, and parent policy tag.
setIamPolicy
POST /v1/{resource}:setIamPolicy
Sets the IAM policy for a policy tag or a taxonomy.
testIamPermissions
POST /v1/{resource}:testIamPermissions
Returns your permissions on a specified policy tag or taxonomy.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-17 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-17 UTC."],[],[]]
