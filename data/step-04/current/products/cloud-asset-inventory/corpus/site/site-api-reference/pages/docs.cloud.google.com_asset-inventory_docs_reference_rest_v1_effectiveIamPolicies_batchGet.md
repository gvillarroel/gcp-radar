---
title: "Method: effectiveIamPolicies.batchGet \_|\_ Cloud Asset Inventory \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/effectiveIamPolicies/batchGet
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/asset-inventory/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/effectiveIamPolicies/batchGet
  title: "Method: effectiveIamPolicies.batchGet \_|\_ Cloud Asset Inventory \_|\_\
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
Method: effectiveIamPolicies.batchGet
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Query parameters
Request body
Response body
JSON representation
Authorization scopes
EffectiveIamPolicy
JSON representation
PolicyInfo
JSON representation
Try it!
Gets effective IAM policies for a batch of resources.
HTTP request
GET https://cloudasset.googleapis.com/v1/{scope=*/*}/effectiveIamPolicies:batchGet
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
scope
string
Required. Only IAM policies on or below the scope will be returned.
This can only be an organization number (such as "organizations/123"), a folder number (such as "folders/123"), a project ID (such as "projects/my-project-id"), or a project number (such as "projects/12345").
To know how to get organization ID, visit here .
To know how to get folder or project ID, visit here .
Authorization requires one or more of the following IAM permissions on the specified resource scope :
cloudasset.assets.analyzeIamPolicy
cloudasset.assets.searchAllResources
cloudasset.assets.searchAllIamPolicies
Query parameters
Parameters
names[]
string
Required. The names refer to the full_resource_names of the asset types supported by search APIs . A maximum of 20 resources' effective policies can be retrieved in a batch.
Request body
The request body must be empty.
Response body
A response message for AssetService.BatchGetEffectiveIamPolicies .
If successful, the response body contains data with the following structure:
JSON representation
{
"policyResults" : [
{
object ( EffectiveIamPolicy )
}
]
}
Fields
policyResults[]
object ( EffectiveIamPolicy )
The effective policies for a batch of resources. Note that the results order is the same as the order of BatchGetEffectiveIamPoliciesRequest.names . When a resource does not have any effective IAM policies, its corresponding policy_result will contain empty EffectiveIamPolicy.policies .
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
EffectiveIamPolicy
The effective IAM policies on one resource.
JSON representation
{
"fullResourceName" : string ,
"policies" : [
{
object ( PolicyInfo )
}
]
}
Fields
fullResourceName
string
The fullResourceName for which the policies are computed. This is one of the BatchGetEffectiveIamPoliciesRequest.names the caller provides in the request.
policies[]
object ( PolicyInfo )
The effective policies for the fullResourceName .
These policies include the policy set on the fullResourceName and those set on its parents and ancestors up to the BatchGetEffectiveIamPoliciesRequest.scope . Note that these policies are not filtered according to the resource type of the fullResourceName .
These policies are hierarchically ordered by PolicyInfo.attached_resource starting from fullResourceName itself to its parents and ancestors, such that policies[i]'s PolicyInfo.attached_resource is the child of policies[i+1]'s PolicyInfo.attached_resource , if policies[i+1] exists.
PolicyInfo
The IAM policy and its attached resource.
JSON representation
{
"attachedResource" : string ,
"policy" : {
object ( Policy )
}
}
Fields
attachedResource
string
The full resource name the policy is directly attached to.
policy
object ( Policy )
The IAM policy that's directly attached to the attachedResource .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-30 UTC."],[],[]]
