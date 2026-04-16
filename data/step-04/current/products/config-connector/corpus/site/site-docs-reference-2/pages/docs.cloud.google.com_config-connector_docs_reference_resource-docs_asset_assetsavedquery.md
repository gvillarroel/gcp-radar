---
title: "AssetSavedQuery \_|\_ Config Connector \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/asset/assetsavedquery
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/config-connector/docs/reference/overview
source_metadata:
  url: https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/asset/assetsavedquery
  title: "AssetSavedQuery \_|\_ Config Connector \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Access and resource management
Config Connector
API and reference
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
AssetSavedQuery
Property
Value
Google Cloud Service Name
Cloud Asset Inventory
Google Cloud Service Documentation
/asset-inventory/docs/
Google Cloud REST Resource Name
v1.savedQueries
Google Cloud REST Resource Documentation
/asset-inventory/docs/reference/rest/v1/savedQueries
Config Connector Resource Short Names
gcpassetsavedquery gcpassetsavedqueries assetsavedquery
Config Connector Service Name
cloudasset.googleapis.com
Config Connector Resource Fully Qualified Name
assetsavedqueries.asset.cnrm.cloud.google.com
Can Be Referenced by IAMPolicy/IAMPolicyMember
No
Config Connector Default Average Reconcile Interval In Seconds
600
Custom Resource Definition Properties
Spec
Schema
content :
iamPolicyAnalysisQuery :
accessSelector :
permissions :
- string
roles :
- string
conditionContext :
accessTime : string
identitySelector :
identity : string
options :
analyzeServiceAccountImpersonation : boolean
expandGroups : boolean
expandResources : boolean
expandRoles : boolean
outputGroupEdges : boolean
outputResourceEdges : boolean
resourceSelector :
fullResourceName : string
scope : string
description : string
folderRef :
external : string
name : string
namespace : string
labels :
string : string
organizationRef :
external : string
projectRef :
external : string
kind : string
name : string
namespace : string
resourceID : string
Fields
content
Optional
object
The query content.
content.iamPolicyAnalysisQuery
Optional
object
An IAM Policy Analysis query, which could be used in the [AssetService.AnalyzeIamPolicy][google.cloud.asset.v1.AssetService.AnalyzeIamPolicy] RPC or the [AssetService.AnalyzeIamPolicyLongrunning][google.cloud.asset.v1.AssetService.AnalyzeIamPolicyLongrunning] RPC.
content.iamPolicyAnalysisQuery.accessSelector
Optional
object
Optional. Specifies roles or permissions for analysis.
content.iamPolicyAnalysisQuery.accessSelector.permissions
Optional
list (string)
Optional. The permissions to appear in result.
content.iamPolicyAnalysisQuery.accessSelector.permissions[]
Optional
string
content.iamPolicyAnalysisQuery.accessSelector.roles
Optional
list (string)
Optional. The roles to appear in result.
content.iamPolicyAnalysisQuery.accessSelector.roles[]
Optional
string
content.iamPolicyAnalysisQuery.conditionContext
Optional
object
Optional. The hypothetical context for IAM conditions evaluation.
content.iamPolicyAnalysisQuery.conditionContext.accessTime
Optional
string
The hypothetical access timestamp to evaluate IAM conditions. Note that this value must not be earlier than the current time; otherwise, an INVALID_ARGUMENT error will be returned.
content.iamPolicyAnalysisQuery.identitySelector
Optional
object
Optional. Specifies an identity for analysis.
content.iamPolicyAnalysisQuery.identitySelector.identity
Required
string
Required when 'identitySelector' is specified. The identity appearing in the form of principals in
IAM policy binding .
The examples of supported forms are:
"user:mike@example.com",
"group:admins@example.com",
"domain:google.com",
"serviceAccount:my-project-id@appspot.gserviceaccount.com".
Notice that wildcard characters (such as * and ?) are not supported.
You must give a specific identity.
content.iamPolicyAnalysisQuery.options
Optional
object
Optional. The query options.
content.iamPolicyAnalysisQuery.options.analyzeServiceAccountImpersonation
Optional
boolean
Optional. If true, the response will include access analysis from
identities to resources via service account impersonation. This is a very
expensive operation, because many derived queries will be executed. We
highly recommend you use
[AssetService.AnalyzeIamPolicyLongrunning][google.cloud.asset.v1.AssetService.AnalyzeIamPolicyLongrunning]
RPC instead. See for more information.
Default is false.
content.iamPolicyAnalysisQuery.options.expandGroups
Optional
boolean
Optional. If true, the identities section of the result will expand any
Google groups appearing in an IAM policy binding.
If
[IamPolicyAnalysisQuery.identity_selector][google.cloud.asset.v1.IamPolicyAnalysisQuery.identity_selector]
is specified, the identity in the result will be determined by the
selector, and this flag is not allowed to set.
If true, the default max expansion per group is 1000 for
AssetService.AnalyzeIamPolicy][].
Default is false.
content.iamPolicyAnalysisQuery.options.expandResources
Optional
boolean
Optional. If true and
[IamPolicyAnalysisQuery.resource_selector][google.cloud.asset.v1.IamPolicyAnalysisQuery.resource_selector]
is not specified, the resource section of the result will expand any
resource attached to an IAM policy to include resources lower in the
resource hierarchy.
See https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/savedQueries#options for more information.
content.iamPolicyAnalysisQuery.options.expandRoles
Optional
boolean
{% verbatim %}Optional. If true, the access section of result will expand any roles
appearing in IAM policy bindings to include their permissions.
If [IamPolicyAnalysisQuery.access_selector][google.cloud.asset.v1.IamPolicyAnalysisQuery.access_selector] is specified, the access section of the result is determined by the selector, and this flag isn't used.
Default is false.
content.iamPolicyAnalysisQuery.options.outputGroupEdges
Optional
boolean
Optional. If true, the result will output the relevant membership relationships between groups and other groups, and between groups and principals. Default is false.
content.iamPolicyAnalysisQuery.options.outputResourceEdges
Optional
boolean
Optional. If true, the result will output the relevant parent or child relationships between resources. Default is false.
content.iamPolicyAnalysisQuery.resourceSelector
Optional
object
Optional. Specifies a resource for analysis.
content.iamPolicyAnalysisQuery.resourceSelector.fullResourceName
Required
string
Required when 'resourceSelector' is specified. The full resource name of a resource of supported resource types .
content.iamPolicyAnalysisQuery.scope
Required
string
Required when 'iamPolicyAnalysisQuery' is specified. The relative name of the root asset. Only resources and IAM
policies within the scope will be analyzed.
This can only be an organization number (such as "organizations/123"), a
folder number (such as "folders/123"), a project ID (such as
"projects/my-project-id"), or a project number (such as "projects/12345").
To know how to get organization ID, visit here .
To know how to get folder or project ID, visit here .
description
Optional
string
The description of this saved query. This value should be fewer than 255 characters.
folderRef
Optional
object
FolderRef represents the Folder that this resource belongs to.
folderRef.external
Optional
string
The 'name' field of a folder, when not managed by Config Connector. This field must be set when 'name' field is not set.
folderRef.name
Optional
string
The 'name' field of a 'Folder' resource. This field must be set when 'external' field is not set.
folderRef.namespace
Optional
string
The 'namespace' field of a 'Folder' resource. If unset, the namespace is defaulted to the namespace of the referencer resource.
labels
Optional
map (key: string, value: string)
Labels applied on the resource. This value should not contain more than 10 entries. The key and value of each entry must be non-empty and fewer than 64 characters.
organizationRef
Optional
object
OrganizationRef represents the Organization that this resource belongs to.
organizationRef.external
Required
string
Required when 'organizationRef' is specified. The 'name' field of an organization, when not managed by Config Connector.
projectRef
Optional
object
The Project that this resource belongs to.
projectRef.external
Optional
string
The `projectID` field of a project, when not managed by Config Connector.
projectRef.kind
Optional
string
The kind of the Project resource; optional but must be `Project` if provided.
projectRef.name
Optional
string
The `name` field of a `Project` resource.
projectRef.namespace
Optional
string
The `namespace` field of a `Project` resource.
resourceID
Optional
string
The AssetSavedQuery name. If not given, the metadata.name will be used.
Status
Schema
conditions :
- lastTransitionTime : string
message : string
reason : string
status : string
type : string
externalRef : string
observedGeneration : integer
observedState :
createTime : string
creator : string
lastUpdateTime : string
lastUpdater : string
Fields
conditions
list (object)
Conditions represent the latest available observations of the object's current state.
conditions[]
object
conditions[].lastTransitionTime
string
Last time the condition transitioned from one status to another.
conditions[].message
string
Human-readable message indicating details about last transition.
conditions[].reason
string
Unique, one-word, CamelCase reason for the condition's last transition.
conditions[].status
string
Status is the status of the condition. Can be True, False, Unknown.
conditions[].type
string
Type is the type of the condition.
externalRef
string
A unique specifier for the AssetSavedQuery resource in Google Cloud.
observedGeneration
integer
ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
observedState
object
ObservedState is the state of the resource as most recently observed in Google Cloud.
observedState.createTime
string
Output only. The create time of this saved query.
observedState.creator
string
Output only. The account's email address who has created this saved query.
observedState.lastUpdateTime
string
Output only. The last update time of this saved query.
observedState.lastUpdater
string
Output only. The account's email address who has updated this saved query most recently.
Note: If you have any trouble with instantiating the resource, refer to Troubleshoot Config Connector .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
