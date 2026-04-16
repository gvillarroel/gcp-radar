---
title: "Roles and permissions \_|\_ Cloud Asset Inventory \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/asset-inventory/docs/roles-permissions
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/asset-inventory/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/asset-inventory/docs/roles-permissions
  title: "Roles and permissions \_|\_ Cloud Asset Inventory \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Cloud Asset Inventory
Guides
Send feedback
Roles and permissions
Stay organized with collections
Save and categorize content based on your preferences.
Cloud Asset Inventory uses Identity and Access Management (IAM) for access
control. Every Cloud Asset Inventory API method requires the caller to have the necessary
permissions.
Roles
To get the permissions that
you need to work with asset metadata,
ask your administrator to grant you the
following IAM roles on the organization, folder, or project:
To view asset metadata:
Cloud Asset Viewer ( roles/cloudasset.viewer )
Service Usage Consumer ( roles/serviceusage.serviceUsageConsumer )
To view asset metadata and work with feeds:
Cloud Asset Owner ( roles/cloudasset.owner )
Service Usage Consumer ( roles/serviceusage.serviceUsageConsumer )
For more information about granting roles, see Manage access to projects, folders, and organizations .
These predefined roles contain
the permissions required to work with asset metadata. To see the exact permissions that are
required, expand the Required permissions section:
Required permissions
The following permissions are required to work with asset metadata:
To view asset metadata:
cloudasset.assets.*
recommender.cloudAssetInsights.get
recommender.cloudAssetInsights.list
serviceusage.services.use
To view asset metadata and work with feeds:
cloudasset.*
recommender.cloudAssetInsights.*
serviceusage.services.use
You might also be able to get
these permissions
with custom roles or
other predefined roles .
Permissions
The following table lists the permissions that the caller must have to call each
API method in Cloud Asset Inventory, or to perform tasks using Google Cloud tools that
use Cloud Asset Inventory such as the Google Cloud console or gcloud CLI.
The Cloud Asset Viewer ( roles/cloudasset.viewer ) and Cloud Asset Owner
( roles/cloudasset.owner ) roles include many of these
permissions. If the caller has been granted one of these roles and the
Service Usage Consumer ( roles/serviceusage.serviceUsageConsumer ) role, they
might already have the permissions they need to use Cloud Asset Inventory.
RPC
Method
Required permissions
All APIs
All Cloud Asset Inventory calls
All Cloud Asset Inventory calls require the serviceusage.services.use
permission.
Analysis APIs
AnalyzeIamPolicy
AnalyzeIamPolicyLongRunning
BatchGetEffectiveIamPolicies
All of the following permissions:
cloudasset. assets. analyzeIamPolicy
cloudasset. assets. searchAllIamPolicies
cloudasset. assets. searchAllResources
iam.roles.get
to analyze policies with custom roles
Additional permissions are required for working with Google Workspace .
AnalyzeMove
cloudasset.assets.analyzeMove
AnalyzeOrgPolicies
AnalyzeOrgPolicyGovernedContainers
All of the following permissions:
cloudasset. assets. analyzeOrgPolicy
cloudasset. assets. searchAllResources
AnalyzeOrgPolicyGovernedAssets
All of the following permissions:
cloudasset. assets. analyzeOrgPolicy
cloudasset. assets. searchAllIamPolicies
cloudasset. assets. searchAllResources
Feed APIs
CreateFeed
cloudasset.feeds.create
You also need one of the following permissions, depending on the
content type :
cloudasset. assets. exportIamPolicy
cloudasset. assets. exportResource
DeleteFeed
cloudasset.feeds.delete
GetFeed
cloudasset.feeds.get
ListFeed
cloudasset.feeds.list
UpdateFeed
cloudasset.feeds.update
You also need one of the following permissions, depending on the
content type :
cloudasset. assets. exportIamPolicy
cloudasset. assets. exportResource
Inventory APIs
BatchGetAssetsHistory
ExportAssets
One of the following permissions, depending on the
content type :
cloudasset. assets. exportAccessPolicy
When using the ACCESS_POLICY content type.
cloudasset. assets. exportIamPolicy
When using the IAM_POLICY content type.
cloudasset. assets. exportOrgPolicy
When using the ORG_POLICY content type.
cloudasset. assets. exportOSInventories
When using the OS_INVENTORY content type.
cloudasset. assets. exportResource
When using the RELATIONSHIP or RESOURCE content types.
Limiting resource access
Granting the
cloudasset. assets. exportResource
permission to a user allows them to export all resource types. To restrict what
resource types a user can export, you can grant permissions for each resource type
instead. For example, you can grant the
cloudasset.assets.exportComputeDisks permission by itself to allow a user
to only export the compute.googleapis.com/Disk resource type.
These granular permissions only apply to RESOURCE and unspecified
content types .
View the list of granular cloudasset.assets.export* permissions .
ListAssets
One of the following permissions, depending on the
content type :
cloudasset. assets. listAccessPolicy
cloudasset. assets. listIamPolicy
cloudasset. assets. listOrgPolicy
cloudasset. assets. listOSInventories
cloudasset.assets.listResource
When using the RELATIONSHIP or RESOURCE content types.
Limiting resource access
Granting the
cloudasset.assets.listResource
permission to a user allows them to list all resource types. To restrict what resource
types a user can list, you can grant permissions for each resource type instead. For
example, you can grant the cloudasset.assets.listComputeDisks permission
by itself to allow a user to only list the compute.googleapis.com/Disk
resource type.
These granular permissions only apply to RESOURCE and unspecified
content types .
View the list of granular cloudasset.assets.list* permissions .
QueryAssets
One of the following permissions, depending on the
content type :
cloudasset. assets. queryAccessPolicy
cloudasset. assets. queryIamPolicy
cloudasset. assets. queryOSInventories
cloudasset. assets. queryResource
When using the RELATIONSHIP or RESOURCE content types.
Search APIs
SearchAllIamPolicies
cloudasset. assets. searchAllIamPolicies
SearchAllResources
cloudasset. assets. searchAllResources
You also need
cloudasset. assets. searchEnrichmentResourceOwners
if
searching for resource owner enrichment.
REST
Method
Required permissions
All APIs
All Cloud Asset Inventory calls
All Cloud Asset Inventory calls require the serviceusage.services.use
permission.
Analysis APIs
analyzeIamPolicy
analyzeIamPolicyLongRunning
effectiveIamPolicies.batchGet
All of the following permissions:
cloudasset. assets. analyzeIamPolicy
cloudasset. assets. searchAllIamPolicies
cloudasset. assets. searchAllResources
iam.roles.get
to analyze policies with custom roles
Additional permissions are required for working with Google Workspace .
analyzeMove
cloudasset.assets.analyzeMove
analyzeOrgPolicies
analyzeOrgPolicyGovernedContainers
All of the following permissions:
cloudasset. assets. analyzeOrgPolicy
cloudasset. assets. searchAllResources
analyzeOrgPolicyGovernedAssets
All of the following permissions:
cloudasset. assets. analyzeOrgPolicy
cloudasset. assets. searchAllIamPolicies
cloudasset. assets. searchAllResources
Feed APIs
feeds.create
cloudasset.feeds.create
You also need one of the following permissions, depending on the
content type :
cloudasset. assets. exportIamPolicy
cloudasset. assets. exportResource
feeds.delete
cloudasset.feeds.delete
feeds.get
cloudasset.feeds.get
feeds.list
cloudasset.feeds.list
feeds.patch
cloudasset.feeds.update
You also need one of the following permissions, depending on the
content type :
cloudasset. assets. exportIamPolicy
cloudasset. assets. exportResource
Inventory APIs
batchGetAssetsHistory
exportAssets
One of the following permissions, depending on the
content type :
cloudasset. assets. exportAccessPolicy
When using the ACCESS_POLICY content type.
cloudasset. assets. exportIamPolicy
When using the IAM_POLICY content type.
cloudasset. assets. exportOrgPolicy
When using the ORG_POLICY content type.
cloudasset. assets. exportOSInventories
When using the OS_INVENTORY content type.
cloudasset. assets. exportResource
When using the RELATIONSHIP or RESOURCE content types.
Limiting resource access
Granting the
cloudasset. assets. exportResource
permission to a user allows them to export all resource types. To restrict what
resource types a user can export, you can grant permissions for each resource type
instead. For example, you can grant the
cloudasset.assets.exportComputeDisks permission by itself to allow a user
to only export the compute.googleapis.com/Disk resource type.
These granular permissions only apply to RESOURCE and unspecified
content types .
View the list of granular cloudasset.assets.export* permissions .
assets.list
One of the following permissions, depending on the
content type :
cloudasset. assets. listAccessPolicy
cloudasset. assets. listIamPolicy
cloudasset. assets. listOrgPolicy
cloudasset. assets. listOSInventories
cloudasset.assets.listResource
When using the RELATIONSHIP or RESOURCE content types.
Limiting resource access
Granting the
cloudasset.assets.listResource
permission to a user allows them to list all resource types. To restrict what resource
types a user can list, you can grant permissions for each resource type instead. For
example, you can grant the cloudasset.assets.listComputeDisks permission
by itself to allow a user to only list the compute.googleapis.com/Disk
resource type.
These granular permissions only apply to RESOURCE and unspecified
content types .
View the list of granular cloudasset.assets.list* permissions .
queryAssets
One of the following permissions, depending on the
content type :
cloudasset. assets. queryAccessPolicy
cloudasset. assets. queryIamPolicy
cloudasset. assets. queryOSInventories
cloudasset. assets. queryResource
When using the RELATIONSHIP or RESOURCE content types.
Search APIs
searchAllIamPolicies
cloudasset. assets. searchAllIamPolicies
searchAllResources
cloudasset. assets. searchAllResources
You also need
cloudasset. assets. searchEnrichmentResourceOwners
if
searching for resource owner enrichment.
gcloud
Positional statement
Required permissions
All APIs
All Cloud Asset Inventory calls
All Cloud Asset Inventory calls require the serviceusage.services.use
permission.
Analysis APIs
analyze-iam-policy
analyze-iam-policy-longrunning
get-effective-iam-policy
All of the following permissions:
cloudasset. assets. analyzeIamPolicy
cloudasset. assets. searchAllIamPolicies
cloudasset. assets. searchAllResources
iam.roles.get
to analyze policies with custom roles
Additional permissions are required for working with Google Workspace .
analyze-move
cloudasset.assets.analyzeMove
analyze-org-policies
analyze-org-policy-governed-containers
All of the following permissions:
cloudasset. assets. analyzeOrgPolicy
cloudasset. assets. searchAllResources
analyze-org-policy-governed-assets
All of the following permissions:
cloudasset. assets. analyzeOrgPolicy
cloudasset. assets. searchAllIamPolicies
cloudasset. assets. searchAllResources
Feed APIs
feeds create
cloudasset.feeds.create
You also need one of the following permissions, depending on the
content type :
cloudasset. assets. exportIamPolicy
cloudasset. assets. exportResource
feeds delete
cloudasset.feeds.delete
feeds describe
cloudasset.feeds.get
feeds list
cloudasset.feeds.list
feeds update
cloudasset.feeds.update
You also need one of the following permissions, depending on the
content type :
cloudasset. assets. exportIamPolicy
cloudasset. assets. exportResource
Inventory APIs
export
get-history
One of the following permissions, depending on the
content type :
cloudasset. assets. exportAccessPolicy
When using the ACCESS_POLICY content type.
cloudasset. assets. exportIamPolicy
When using the IAM_POLICY content type.
cloudasset. assets. exportOrgPolicy
When using the ORG_POLICY content type.
cloudasset. assets. exportOSInventories
When using the OS_INVENTORY content type.
cloudasset. assets. exportResource
When using the RELATIONSHIP or RESOURCE content types.
Limiting resource access
Granting the
cloudasset. assets. exportResource
permission to a user allows them to export all resource types. To restrict what
resource types a user can export, you can grant permissions for each resource type
instead. For example, you can grant the
cloudasset.assets.exportComputeDisks permission by itself to allow a user
to only export the compute.googleapis.com/Disk resource type.
These granular permissions only apply to RESOURCE and unspecified
content types .
View the list of granular cloudasset.assets.export* permissions .
list
One of the following permissions, depending on the
content type :
cloudasset. assets. listAccessPolicy
cloudasset. assets. listIamPolicy
cloudasset. assets. listOrgPolicy
cloudasset. assets. listOSInventories
cloudasset.assets.listResource
When using the RELATIONSHIP or RESOURCE content types.
Limiting resource access
Granting the
cloudasset.assets.listResource
permission to a user allows them to list all resource types. To restrict what resource
types a user can list, you can grant permissions for each resource type instead. For
example, you can grant the cloudasset.assets.listComputeDisks permission
by itself to allow a user to only list the compute.googleapis.com/Disk
resource type.
These granular permissions only apply to RESOURCE and unspecified
content types .
View the list of granular cloudasset.assets.list* permissions .
query
One of the following permissions, depending on the
content type :
cloudasset. assets. queryAccessPolicy
cloudasset. assets. queryIamPolicy
cloudasset. assets. queryOSInventories
cloudasset. assets. queryResource
When using the RELATIONSHIP or RESOURCE content types.
Search APIs
search-all-iam-policies
cloudasset. assets. searchAllIamPolicies
search-all-resources
cloudasset. assets. searchAllResources
You also need
cloudasset. assets. searchEnrichmentResourceOwners
if
searching for resource owner enrichment.
Console
The Google Cloud console uses the SearchAllResources API to
request data. To use Cloud Asset Inventory in the Google Cloud console, grant the
following permissions:
cloudasset. assets. searchAllResources
serviceusage.services.use
VPC Service Controls
VPC Service Controls can be used with Cloud Asset Inventory to provide
additional security for your assets. To learn more about
VPC Service Controls, see the
Overview of VPC Service Controls .
To learn about the limitations in using Cloud Asset Inventory with
VPC Service Controls, see the
supported products and limitations .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
