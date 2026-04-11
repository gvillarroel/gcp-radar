---
title: "Cloud Resource Manager API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/resource-manager/reference/rest
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/resource-manager/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/resource-manager/reference/rest
  title: "Cloud Resource Manager API \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Technology areas
Resource Manager
Reference
Send feedback
Cloud Resource Manager API
Stay organized with collections
Save and categorize content based on your preferences.
Creates, reads, and updates metadata for Google Cloud Platform resource containers.
REST Resource: v3.effectiveTags
REST Resource: v3.folders
REST Resource: v3.folders.capabilities
REST Resource: v3.liens
REST Resource: v3.locations.effectiveTagBindingCollections
REST Resource: v3.locations.tagBindingCollections
REST Resource: v3.operations
REST Resource: v3.organizations
REST Resource: v3.projects
REST Resource: v3.tagBindings
REST Resource: v3.tagKeys
REST Resource: v3.tagValues
REST Resource: v3.tagValues.tagHolds
REST Resource: v2beta1.folders
REST Resource: v2.folders
REST Resource: v1beta1.organizations
REST Resource: v1beta1.projects
REST Resource: v1.folders
REST Resource: v1.liens
REST Resource: v1.operations
REST Resource: v1.organizations
REST Resource: v1.projects
Service: cloudresourcemanager.googleapis.com
To call this service, we recommend that you use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery documents:
https://cloudresourcemanager.googleapis.com/$discovery/rest?version=v3
https://cloudresourcemanager.googleapis.com/$discovery/rest?version=v2
https://cloudresourcemanager.googleapis.com/$discovery/rest?version=v2beta1
https://cloudresourcemanager.googleapis.com/$discovery/rest?version=v1
https://cloudresourcemanager.googleapis.com/$discovery/rest?version=v1beta1
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://cloudresourcemanager.googleapis.com
REST Resource: v3.effectiveTags
Methods
list
GET /v3/effectiveTags
Return a list of effective tags for the given Google Cloud resource, as specified in parent .
REST Resource: v3.folders
Methods
create
POST /v3/folders
Creates a folder in the resource hierarchy.
delete
DELETE /v3/{name=folders/*}
Requests deletion of a folder.
get
GET /v3/{name=folders/*}
Retrieves a folder identified by the supplied resource name.
getIamPolicy
POST /v3/{resource=folders/*}:getIamPolicy
Gets the access control policy for a folder.
list
GET /v3/folders
Lists the folders that are direct descendants of supplied parent resource.
move
POST /v3/{name=folders/*}:move
Moves a folder under a new resource parent.
patch
PATCH /v3/{folder.name=folders/*}
Updates a folder, changing its display_name .
search
GET /v3/folders:search
Search for folders that match specific filter criteria.
setIamPolicy
POST /v3/{resource=folders/*}:setIamPolicy
Sets the access control policy on a folder, replacing any existing policy.
testIamPermissions
POST /v3/{resource=folders/*}:testIamPermissions
Returns permissions that a caller has on the specified folder.
undelete
POST /v3/{name=folders/*}:undelete
Cancels the deletion request for a folder.
REST Resource: v3.folders.capabilities
Methods
get
GET /v3/{name=folders/*/capabilities/*}
Retrieves the Capability identified by the supplied resource name.
patch
PATCH /v3/{capability.name=folders/*/capabilities/*}
Updates the Capability.
REST Resource: v3.liens
Methods
create
POST /v3/liens
Create a Lien which applies to the resource denoted by the parent field.
delete
DELETE /v3/{name=liens/**}
Delete a Lien by name .
get
GET /v3/{name=liens/**}
Retrieve a Lien by name .
list
GET /v3/liens
List all Liens applied to the parent resource.
REST Resource: v3.locations.effectiveTagBindingCollections
Methods
get
GET /v3/{name=locations/*/effectiveTagBindingCollections/*}
Returns effective tag bindings on a Google Cloud resource.
REST Resource: v3.locations.tagBindingCollections
Methods
get
GET /v3/{name=locations/*/tagBindingCollections/*}
Returns tag bindings directly attached to a Google Cloud resource.
patch
PATCH /v3/{tagBindingCollection.name=locations/*/tagBindingCollections/*}
Updates tag bindings directly attached to a Google Cloud resource.
REST Resource: v3.operations
Methods
get
GET /v3/{name=operations/**}
Gets the latest state of a long-running operation.
REST Resource: v3.organizations
Methods
get
GET /v3/{name=organizations/*}
Fetches an organization resource identified by the specified resource name.
getIamPolicy
POST /v3/{resource=organizations/*}:getIamPolicy
Gets the access control policy for an organization resource.
search
GET /v3/organizations:search
Searches organization resources that are visible to the user and satisfy the specified filter.
setIamPolicy
POST /v3/{resource=organizations/*}:setIamPolicy
Sets the access control policy on an organization resource.
testIamPermissions
POST /v3/{resource=organizations/*}:testIamPermissions
Returns the permissions that a caller has on the specified organization.
REST Resource: v3.projects
Methods
create
POST /v3/projects
Request that a new project be created.
delete
DELETE /v3/{name=projects/*}
Marks the project identified by the specified name (for example, projects/415104041262 ) for deletion.
get
GET /v3/{name=projects/*}
Retrieves the project identified by the specified name (for example, projects/415104041262 ).
getIamPolicy
POST /v3/{resource=projects/*}:getIamPolicy
Returns the IAM access control policy for the specified project, in the format projects/{ProjectIdOrNumber} e.g.
list
GET /v3/projects
Lists projects that are direct children of the specified folder or organization resource.
move
POST /v3/{name=projects/*}:move
Move a project to another place in your resource hierarchy, under a new resource parent.
patch
PATCH /v3/{project.name=projects/*}
Updates the display_name and labels of the project identified by the specified name (for example, projects/415104041262 ).
search
GET /v3/projects:search
Search for projects that the caller has the resourcemanager.projects.get permission on, and also satisfy the specified query.
setIamPolicy
POST /v3/{resource=projects/*}:setIamPolicy
Sets the IAM access control policy for the specified project, in the format projects/{ProjectIdOrNumber} e.g.
testIamPermissions
POST /v3/{resource=projects/*}:testIamPermissions
Returns permissions that a caller has on the specified project, in the format projects/{ProjectIdOrNumber} e.g.
undelete
POST /v3/{name=projects/*}:undelete
Restores the project identified by the specified name (for example, projects/415104041262 ).
REST Resource: v3.tagBindings
Methods
create
POST /v3/tagBindings
Creates a TagBinding between a TagValue and a Google Cloud resource.
delete
DELETE /v3/{name=tagBindings/**}
Deletes a TagBinding.
list
GET /v3/tagBindings
Lists the TagBindings for the given Google Cloud resource, as specified with parent .
REST Resource: v3.tagKeys
Methods
create
POST /v3/tagKeys
Creates a new TagKey.
delete
DELETE /v3/{name=tagKeys/*}
Deletes a TagKey.
get
GET /v3/{name=tagKeys/*}
Retrieves a TagKey.
getIamPolicy
POST /v3/{resource=tagKeys/*}:getIamPolicy
Gets the access control policy for a TagKey.
getNamespaced
GET /v3/tagKeys/namespaced
Retrieves a TagKey by its namespaced name.
list
GET /v3/tagKeys
Lists all TagKeys for a parent resource.
patch
PATCH /v3/{tagKey.name=tagKeys/*}
Updates the attributes of the TagKey resource.
setIamPolicy
POST /v3/{resource=tagKeys/*}:setIamPolicy
Sets the access control policy on a TagKey, replacing any existing policy.
testIamPermissions
POST /v3/{resource=tagKeys/*}:testIamPermissions
Returns permissions that a caller has on the specified TagKey.
REST Resource: v3.tagValues
Methods
create
POST /v3/tagValues
Creates a TagValue as a child of the specified TagKey.
delete
DELETE /v3/{name=tagValues/*}
Deletes a TagValue.
get
GET /v3/{name=tagValues/*}
Retrieves a TagValue.
getIamPolicy
POST /v3/{resource=tagValues/*}:getIamPolicy
Gets the access control policy for a TagValue.
getNamespaced
GET /v3/tagValues/namespaced
Retrieves a TagValue by its namespaced name.
list
GET /v3/tagValues
Lists all TagValues for a specific TagKey.
patch
PATCH /v3/{tagValue.name=tagValues/*}
Updates the attributes of the TagValue resource.
setIamPolicy
POST /v3/{resource=tagValues/*}:setIamPolicy
Sets the access control policy on a TagValue, replacing any existing policy.
testIamPermissions
POST /v3/{resource=tagValues/*}:testIamPermissions
Returns permissions that a caller has on the specified TagValue.
REST Resource: v3.tagValues.tagHolds
Methods
create
POST /v3/{parent=tagValues/*}/tagHolds
Creates a TagHold.
delete
DELETE /v3/{name=tagValues/*/tagHolds/*}
Deletes a TagHold.
list
GET /v3/{parent=tagValues/*}/tagHolds
Lists TagHolds under a TagValue.
REST Resource: v2beta1.folders
Methods
create
POST /v2beta1/folders
Creates a Folder in the resource hierarchy.
delete
DELETE /v2beta1/{name=folders/*}
Requests deletion of a Folder.
get
GET /v2beta1/{name=folders/*}
Retrieves a Folder identified by the supplied resource name.
getIamPolicy
POST /v2beta1/{resource=folders/*}:getIamPolicy
Gets the access control policy for a Folder.
list
GET /v2beta1/folders
Lists the Folders that are direct descendants of supplied parent resource.
move
POST /v2beta1/{name=folders/*}:move
Moves a Folder under a new resource parent.
patch
PATCH /v2beta1/{folder.name=folders/*}
Updates a Folder, changing its display_name.
search
POST /v2beta1/folders:search
Search for folders that match specific filter criteria.
setIamPolicy
POST /v2beta1/{resource=folders/*}:setIamPolicy
Sets the access control policy on a Folder, replacing any existing policy.
testIamPermissions
POST /v2beta1/{resource=folders/*}:testIamPermissions
Returns permissions that a caller has on the specified Folder.
undelete
POST /v2beta1/{name=folders/*}:undelete
Cancels the deletion request for a Folder.
REST Resource: v2.folders
Methods
create
POST /v2/folders
Creates a Folder in the resource hierarchy.
delete
DELETE /v2/{name=folders/*}
Requests deletion of a Folder.
get
GET /v2/{name=folders/*}
Retrieves a Folder identified by the supplied resource name.
getIamPolicy
POST /v2/{resource=folders/*}:getIamPolicy
Gets the access control policy for a Folder.
list
GET /v2/folders
Lists the Folders that are direct descendants of supplied parent resource.
move
POST /v2/{name=folders/*}:move
Moves a Folder under a new resource parent.
patch
PATCH /v2/{folder.name=folders/*}
Updates a Folder, changing its display_name.
search
POST /v2/folders:search
Search for folders that match specific filter criteria.
setIamPolicy
POST /v2/{resource=folders/*}:setIamPolicy
Sets the access control policy on a Folder, replacing any existing policy.
testIamPermissions
POST /v2/{resource=folders/*}:testIamPermissions
Returns permissions that a caller has on the specified Folder.
undelete
POST /v2/{name=folders/*}:undelete
Cancels the deletion request for a Folder.
REST Resource: v1beta1.organizations
Methods
get
GET /v1beta1/{name=organizations/*}
Fetches an Organization resource identified by the specified resource name.
getIamPolicy
POST /v1beta1/{resource=organizations/*}:getIamPolicy
Gets the access control policy for an Organization resource.
list
GET /v1beta1/organizations
Lists Organization resources that are visible to the user and satisfy the specified filter.
setIamPolicy
POST /v1beta1/{resource=organizations/*}:setIamPolicy
Sets the access control policy on an Organization resource.
testIamPermissions
POST /v1beta1/{resource=organizations/*}:testIamPermissions
Returns permissions that a caller has on the specified Organization.
update (deprecated)
PUT /v1beta1/{name=organizations/*}
Updates an Organization resource identified by the specified resource name.
REST Resource: v1beta1.projects
Methods
create
POST /v1beta1/projects
Creates a Project resource.
delete
DELETE /v1beta1/projects/{projectId}
Marks the Project identified by the specified project_id (for example, my-project-123 ) for deletion.
get
GET /v1beta1/projects/{projectId}
Retrieves the Project identified by the specified project_id (for example, my-project-123 ).
getAncestry
POST /v1beta1/projects/{projectId}:getAncestry
Gets a list of ancestors in the resource hierarchy for the Project identified by the specified project_id (for example, my-project-123 ).
getIamPolicy
POST /v1beta1/projects/{resource}:getIamPolicy
Returns the IAM access control policy for the specified Project.
list
GET /v1beta1/projects
Lists Projects that the caller has the resourcemanager.projects.get permission on and satisfy the specified filter.
setIamPolicy
POST /v1beta1/projects/{resource}:setIamPolicy
Sets the IAM access control policy for the specified Project.
testIamPermissions
POST /v1beta1/projects/{resource}:testIamPermissions
Returns permissions that a caller has on the specified Project.
undelete
POST /v1beta1/projects/{projectId}:undelete
Restores the Project identified by the specified project_id (for example, my-project-123 ).
update
PUT /v1beta1/projects/{projectId}
Updates the attributes of the Project identified by the specified project_id (for example, my-project-123 ).
REST Resource: v1.folders
Methods
clearOrgPolicy
POST /v1/{resource=folders/*}:clearOrgPolicy
Clears a Policy from a resource.
getEffectiveOrgPolicy
POST /v1/{resource=folders/*}:getEffectiveOrgPolicy
Gets the effective Policy on a resource.
getOrgPolicy
POST /v1/{resource=folders/*}:getOrgPolicy
Gets a Policy on a resource.
listAvailableOrgPolicyConstraints
POST /v1/{resource=folders/*}:listAvailableOrgPolicyConstraints
Lists Constraints that could be applied on the specified resource.
listOrgPolicies
POST /v1/{resource=folders/*}:listOrgPolicies
Lists all the Policies set for a particular resource.
setOrgPolicy
POST /v1/{resource=folders/*}:setOrgPolicy
Updates the specified Policy on the resource.
REST Resource: v1.liens
Methods
create
POST /v1/liens
Create a Lien which applies to the resource denoted by the parent field.
delete
DELETE /v1/{name=liens/**}
Delete a Lien by name .
get
GET /v1/{name=liens/**}
Retrieve a Lien by name .
list
GET /v1/liens
List all Liens applied to the parent resource.
REST Resource: v1.operations
Methods
get
GET /v1/{name=operations/**}
Gets the latest state of a long-running operation.
REST Resource: v1.organizations
Methods
clearOrgPolicy
POST /v1/{resource=organizations/*}:clearOrgPolicy
Clears a Policy from a resource.
get
GET /v1/{name=organizations/*}
Fetches an Organization resource identified by the specified resource name.
getEffectiveOrgPolicy
POST /v1/{resource=organizations/*}:getEffectiveOrgPolicy
Gets the effective Policy on a resource.
getIamPolicy
POST /v1/{resource=organizations/*}:getIamPolicy
Gets the access control policy for an Organization resource.
getOrgPolicy
POST /v1/{resource=organizations/*}:getOrgPolicy
Gets a Policy on a resource.
listAvailableOrgPolicyConstraints
POST /v1/{resource=organizations/*}:listAvailableOrgPolicyConstraints
Lists Constraints that could be applied on the specified resource.
listOrgPolicies
POST /v1/{resource=organizations/*}:listOrgPolicies
Lists all the Policies set for a particular resource.
search
POST /v1/organizations:search
Searches Organization resources that are visible to the user and satisfy the specified filter.
setIamPolicy
POST /v1/{resource=organizations/*}:setIamPolicy
Sets the access control policy on an Organization resource.
setOrgPolicy
POST /v1/{resource=organizations/*}:setOrgPolicy
Updates the specified Policy on the resource.
testIamPermissions
POST /v1/{resource=organizations/*}:testIamPermissions
Returns permissions that a caller has on the specified Organization.
REST Resource: v1.projects
Methods
clearOrgPolicy
POST /v1/{resource=projects/*}:clearOrgPolicy
Clears a Policy from a resource.
create
POST /v1/projects
Request that a new Project be created.
delete
DELETE /v1/projects/{projectId}
Marks the Project identified by the specified project_id (for example, my-project-123 ) for deletion.
get
GET /v1/projects/{projectId}
Retrieves the Project identified by the specified project_id (for example, my-project-123 ).
getAncestry
POST /v1/projects/{projectId}:getAncestry
Gets a list of ancestors in the resource hierarchy for the Project identified by the specified project_id (for example, my-project-123 ).
getEffectiveOrgPolicy
POST /v1/{resource=projects/*}:getEffectiveOrgPolicy
Gets the effective Policy on a resource.
getIamPolicy
POST /v1/projects/{resource}:getIamPolicy
Returns the IAM access control policy for the specified Project.
getOrgPolicy
POST /v1/{resource=projects/*}:getOrgPolicy
Gets a Policy on a resource.
list
GET /v1/projects
Lists Projects that the caller has the resourcemanager.projects.get permission on and satisfy the specified filter.
listAvailableOrgPolicyConstraints
POST /v1/{resource=projects/*}:listAvailableOrgPolicyConstraints
Lists Constraints that could be applied on the specified resource.
listOrgPolicies
POST /v1/{resource=projects/*}:listOrgPolicies
Lists all the Policies set for a particular resource.
setIamPolicy
POST /v1/projects/{resource}:setIamPolicy
Sets the IAM access control policy for the specified Project.
setOrgPolicy
POST /v1/{resource=projects/*}:setOrgPolicy
Updates the specified Policy on the resource.
testIamPermissions
POST /v1/projects/{resource}:testIamPermissions
Returns permissions that a caller has on the specified Project.
undelete
POST /v1/projects/{projectId}:undelete
Restores the Project identified by the specified project_id (for example, my-project-123 ).
update
PUT /v1/projects/{projectId}
Updates the attributes of the Project identified by the specified project_id (for example, my-project-123 ).
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-01 UTC."],[],[]]
