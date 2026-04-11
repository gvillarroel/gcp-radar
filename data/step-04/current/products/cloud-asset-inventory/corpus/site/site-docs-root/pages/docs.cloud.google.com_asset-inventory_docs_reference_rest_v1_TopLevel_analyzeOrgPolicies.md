---
title: "Method: analyzeOrgPolicies \_|\_ Cloud Asset Inventory \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/analyzeOrgPolicies
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/asset-inventory/docs
source_metadata:
  url: https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/analyzeOrgPolicies
  title: "Method: analyzeOrgPolicies \_|\_ Cloud Asset Inventory \_|\_ Google Cloud\
    \ Documentation"
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
Method: analyzeOrgPolicies
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Query parameters
Request body
Response body
JSON representation
Authorization scopes
OrgPolicyResult
JSON representation
Try it!
Analyzes organization policies under a scope.
HTTP request
GET https://cloudasset.googleapis.com/v1/{scope=*/*}:analyzeOrgPolicies
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
scope
string
Required. The organization to scope the request. Only organization policies within the scope will be analyzed.
organizations/{ORGANIZATION_NUMBER} (e.g., "organizations/123456")
Authorization requires one or more of the following IAM permissions on the specified resource scope :
cloudasset.assets.searchAllResources
cloudasset.assets.analyzeOrgPolicy
Query parameters
Parameters
constraint
string
Required. The name of the constraint to analyze organization policies for. The response only contains analyzed organization policies for the provided constraint.
filter
string
The expression to filter AnalyzeOrgPoliciesResponse.org_policy_results . Filtering is currently available for bare literal values and the following fields: * consolidatedPolicy.attached_resource * consolidatedPolicy.rules.enforce
When filtering by a specific field, the only supported operator is = . For example, filtering by consolidatedPolicy.attached_resource="//cloudresourcemanager.googleapis.com/folders/001" will return all the Organization Policy results attached to "folders/001".
pageToken
string
The pagination token to retrieve the next page.
pageSize
integer
The maximum number of items to return per page. If unspecified, AnalyzeOrgPoliciesResponse.org_policy_results will contain 20 items with a maximum of 200.
Request body
The request body must be empty.
Response body
The response message for AssetService.AnalyzeOrgPolicies .
If successful, the response body contains data with the following structure:
JSON representation
{
"orgPolicyResults" : [
{
object ( OrgPolicyResult )
}
] ,
"constraint" : {
object ( AnalyzerOrgPolicyConstraint )
} ,
"nextPageToken" : string
}
Fields
orgPolicyResults[]
object ( OrgPolicyResult )
The organization policies under the AnalyzeOrgPoliciesRequest.scope with the AnalyzeOrgPoliciesRequest.constraint .
constraint
object ( AnalyzerOrgPolicyConstraint )
The definition of the constraint in the request.
nextPageToken
string
The page token to fetch the next page for AnalyzeOrgPoliciesResponse.org_policy_results .
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
OrgPolicyResult
The organization policy result to the query.
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
"project" : string ,
"folders" : [
string
] ,
"organization" : string
}
Fields
consolidatedPolicy
object ( AnalyzerOrgPolicy )
The consolidated organization policy for the analyzed resource. The consolidated organization policy is computed by merging and evaluating policyBundle . The evaluation will respect the organization policy hierarchy rules .
policyBundle[]
object ( AnalyzerOrgPolicy )
The ordered list of all organization policies from the consolidatedPolicy.attached_resource . to the scope specified in the request.
If the constraint is defined with default policy, it will also appear in the list.
project
string
The project that this consolidated policy belongs to, in the format of projects/{PROJECT_NUMBER}. This field is available when the consolidated policy belongs to a project.
folders[]
string
The folder(s) that this consolidated policy belongs to, in the format of folders/{FOLDER_NUMBER}. This field is available when the consolidated policy belongs (directly or cascadingly) to one or more folders.
organization
string
The organization that this consolidated policy belongs to, in the format of organizations/{ORGANIZATION_NUMBER}. This field is available when the consolidated policy belongs (directly or cascadingly) to an organization.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-30 UTC."],[],[]]
