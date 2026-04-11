---
title: "Method: analyzeOrgPolicyGovernedAssets \_|\_ Cloud Asset Inventory \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/analyzeOrgPolicyGovernedAssets
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/asset-inventory/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/analyzeOrgPolicyGovernedAssets
  title: "Method: analyzeOrgPolicyGovernedAssets \_|\_ Cloud Asset Inventory \_|\_\
    \ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Cloud Asset Inventory
Reference
Send feedback
Method: analyzeOrgPolicyGovernedAssets
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Query parameters
Request body
Response body
JSON representation
Authorization scopes
GovernedAsset
JSON representation
GovernedResource
JSON representation
GovernedIamPolicy
JSON representation
Try it!
Analyzes organization policies governed assets (Google Cloud resources or policies) under a scope. This RPC supports custom constraints and the following canned constraints:
constraints/ainotebooks.accessMode
constraints/ainotebooks.disableFileDownloads
constraints/ainotebooks.disableRootAccess
constraints/ainotebooks.disableTerminal
constraints/ainotebooks.environmentOptions
constraints/ainotebooks.requireAutoUpgradeSchedule
constraints/ainotebooks.restrictVpcNetworks
constraints/compute.disableGuestAttributesAccess
constraints/compute.disableInstanceDataAccessApis
constraints/compute.disableNestedVirtualization
constraints/compute.disableSerialPortAccess
constraints/compute.disableSerialPortLogging
constraints/compute.disableVpcExternalIpv6
constraints/compute.requireOsLogin
constraints/compute.requireShieldedVm
constraints/compute.restrictLoadBalancerCreationForTypes
constraints/compute.restrictProtocolForwardingCreationForTypes
constraints/compute.restrictXpnProjectLienRemoval
constraints/compute.setNewProjectDefaultToZonalDNSOnly
constraints/compute.skipDefaultNetworkCreation
constraints/compute.trustedImageProjects
constraints/compute.vmCanIpForward
constraints/compute.vmExternalIpAccess
constraints/gcp.detailedAuditLoggingMode
constraints/gcp.resourceLocations
constraints/iam.allowedPolicyMemberDomains
constraints/iam.automaticIamGrantsForDefaultServiceAccounts
constraints/iam.disableServiceAccountCreation
constraints/iam.disableServiceAccountKeyCreation
constraints/iam.disableServiceAccountKeyUpload
constraints/iam.restrictCrossProjectServiceAccountLienRemoval
constraints/iam.serviceAccountKeyExpiryHours
constraints/resourcemanager.accessBoundaries
constraints/resourcemanager.allowedExportDestinations
constraints/sql.restrictAuthorizedNetworks
constraints/sql.restrictNoncompliantDiagnosticDataAccess
constraints/sql.restrictNoncompliantResourceCreation
constraints/sql.restrictPublicIp
constraints/storage.publicAccessPrevention
constraints/storage.restrictAuthTypes
constraints/storage.uniformBucketLevelAccess
This RPC only returns either resources of types supported by search APIs or IAM policies.
HTTP request
GET https://cloudasset.googleapis.com/v1/{scope=*/*}:analyzeOrgPolicyGovernedAssets
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
scope
string
Required. The organization to scope the request. Only organization policies within the scope will be analyzed. The output assets will also be limited to the ones governed by those in-scope organization policies.
organizations/{ORGANIZATION_NUMBER} (e.g., "organizations/123456")
Authorization requires one or more of the following IAM permissions on the specified resource scope :
cloudasset.assets.searchAllResources
cloudasset.assets.searchAllIamPolicies
cloudasset.assets.analyzeOrgPolicy
Query parameters
Parameters
constraint
string
Required. The name of the constraint to analyze governed assets for. The analysis only contains analyzed organization policies for the provided constraint.
filter
string
The expression to filter AnalyzeOrgPolicyGovernedAssetsResponse.governed_assets .
For governed resources, filtering is currently available for bare literal values and the following fields: * governedResource.project * governedResource.folders * consolidatedPolicy.rules.enforce When filtering by governedResource.project or consolidatedPolicy.rules.enforce , the only supported operator is = . When filtering by governedResource.folders , the supported operators are = and : . For example, filtering by governedResource.project="projects/12345678" will return all the governed resources under "projects/12345678", including the project itself if applicable.
For governed IAM policies, filtering is currently available for bare literal values and the following fields: * governedIamPolicy.project * governedIamPolicy.folders * consolidatedPolicy.rules.enforce When filtering by governedIamPolicy.project or consolidatedPolicy.rules.enforce , the only supported operator is = . When filtering by governedIamPolicy.folders , the supported operators are = and : . For example, filtering by governedIamPolicy.folders:"folders/12345678" will return all the governed IAM policies under "folders/001".
pageToken
string
The pagination token to retrieve the next page.
pageSize
integer
The maximum number of items to return per page. If unspecified, AnalyzeOrgPolicyGovernedAssetsResponse.governed_assets will contain 100 items with a maximum of 200.
Request body
The request body must be empty.
Response body
The response message for AssetService.AnalyzeOrgPolicyGovernedAssets .
If successful, the response body contains data with the following structure:
JSON representation
{
"governedAssets" : [
{
object ( GovernedAsset )
}
] ,
"constraint" : {
object ( AnalyzerOrgPolicyConstraint )
} ,
"nextPageToken" : string
}
Fields
governedAssets[]
object ( GovernedAsset )
The list of the analyzed governed assets.
constraint
object ( AnalyzerOrgPolicyConstraint )
The definition of the constraint in the request.
nextPageToken
string
The page token to fetch the next page for AnalyzeOrgPolicyGovernedAssetsResponse.governed_assets .
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
GovernedAsset
Represents a Google Cloud asset(resource or IAM policy) governed by the organization policies of the AnalyzeOrgPolicyGovernedAssetsRequest.constraint .
JSON representation
{
"consolidatedPolicy" : {
object ( AnalyzerOrgPolicy )
} ,
"policyBundle" : [
{
object ( AnalyzerOrgPolicy )
}
] ,
// Union field governed_asset can be only one of the following:
"governedResource" : {
object ( GovernedResource )
} ,
"governedIamPolicy" : {
object ( GovernedIamPolicy )
}
// End of list of possible types for union field governed_asset .
}
Fields
consolidatedPolicy
object ( AnalyzerOrgPolicy )
The consolidated policy for the analyzed asset. The consolidated policy is computed by merging and evaluating AnalyzeOrgPolicyGovernedAssetsResponse.GovernedAsset.policy_bundle . The evaluation will respect the organization policy hierarchy rules .
policyBundle[]
object ( AnalyzerOrgPolicy )
The ordered list of all organization policies from the consolidatedPolicy.attached_resource to the scope specified in the request.
If the constraint is defined with default policy, it will also appear in the list.
Union field governed_asset .
governed_asset can be only one of the following:
governedResource
object ( GovernedResource )
A Google Cloud resource governed by the organization policies of the AnalyzeOrgPolicyGovernedAssetsRequest.constraint .
governedIamPolicy
object ( GovernedIamPolicy )
An IAM policy governed by the organization policies of the AnalyzeOrgPolicyGovernedAssetsRequest.constraint .
GovernedResource
The Google Cloud resources governed by the organization policies of the AnalyzeOrgPolicyGovernedAssetsRequest.constraint .
JSON representation
{
"fullResourceName" : string ,
"parent" : string ,
"project" : string ,
"folders" : [
string
] ,
"organization" : string ,
"assetType" : string ,
"effectiveTags" : [
{
object ( EffectiveTagDetails )
}
]
}
Fields
fullResourceName
string
The full resource name of the Google Cloud resource.
parent
string
The full resource name of the parent of AnalyzeOrgPolicyGovernedAssetsResponse.GovernedResource.full_resource_name .
project
string
The project that this resource belongs to, in the format of projects/{PROJECT_NUMBER}. This field is available when the resource belongs to a project.
folders[]
string
The folder(s) that this resource belongs to, in the format of folders/{FOLDER_NUMBER}. This field is available when the resource belongs (directly or cascadingly) to one or more folders.
organization
string
The organization that this resource belongs to, in the format of organizations/{ORGANIZATION_NUMBER}. This field is available when the resource belongs (directly or cascadingly) to an organization.
assetType
string
The asset type of the AnalyzeOrgPolicyGovernedAssetsResponse.GovernedResource.full_resource_name Example: cloudresourcemanager.googleapis.com/Project See Cloud Asset Inventory Supported Asset Types for all supported asset types.
effectiveTags[]
object ( EffectiveTagDetails )
The effective tags on this resource.
GovernedIamPolicy
The IAM policies governed by the organization policies of the AnalyzeOrgPolicyGovernedAssetsRequest.constraint .
JSON representation
{
"attachedResource" : string ,
"policy" : {
object ( Policy )
} ,
"project" : string ,
"folders" : [
string
] ,
"organization" : string ,
"assetType" : string
}
Fields
attachedResource
string
The full resource name of the resource on which this IAM policy is set. Example: //compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1 . See Cloud Asset Inventory Resource Name Format for more information.
policy
object ( Policy )
The IAM policy directly set on the given resource.
project
string
The project that this IAM policy belongs to, in the format of projects/{PROJECT_NUMBER}. This field is available when the IAM policy belongs to a project.
folders[]
string
The folder(s) that this IAM policy belongs to, in the format of folders/{FOLDER_NUMBER}. This field is available when the IAM policy belongs (directly or cascadingly) to one or more folders.
organization
string
The organization that this IAM policy belongs to, in the format of organizations/{ORGANIZATION_NUMBER}. This field is available when the IAM policy belongs (directly or cascadingly) to an organization.
assetType
string
The asset type of the AnalyzeOrgPolicyGovernedAssetsResponse.GovernedIamPolicy.attached_resource . Example: cloudresourcemanager.googleapis.com/Project See Cloud Asset Inventory Supported Asset Types for all supported asset types.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-30 UTC."],[],[]]
