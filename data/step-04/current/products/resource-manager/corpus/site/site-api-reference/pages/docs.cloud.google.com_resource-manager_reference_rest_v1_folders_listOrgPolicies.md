---
title: "Method: folders.listOrgPolicies \_|\_ Resource Manager \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/resource-manager/reference/rest/v1/folders/listOrgPolicies
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/resource-manager/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/resource-manager/reference/rest/v1/folders/listOrgPolicies
  title: "Method: folders.listOrgPolicies \_|\_ Resource Manager \_|\_ Google Cloud\
    \ Documentation"
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
Method: folders.listOrgPolicies
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Request body
JSON representation
Response body
Authorization scopes
Try it!
Lists all the Policies set for a particular resource.
HTTP request
POST https://cloudresourcemanager.googleapis.com/v1/{resource=folders/*}:listOrgPolicies
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
resource
string
Name of the resource to list Policies for.
Authorization requires the following IAM permission on the specified resource resource :
orgpolicy.policy.get
Request body
The request body contains data with the following structure:
JSON representation
{
"pageSize" : integer ,
"pageToken" : string
}
Fields
pageSize
integer
Size of the pages to be returned. This is currently unsupported and will be ignored. The server may at any point start using this field to limit page size.
pageToken
string
Page token used to retrieve the next page. This is currently unsupported and will be ignored. The server may at any point start using this field.
Response body
If successful, the response body contains an instance of ListOrgPoliciesResponse .
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/cloud-platform
https://www.googleapis.com/auth/cloud-platform.read-only
https://www.googleapis.com/auth/cloudplatformorganizations
https://www.googleapis.com/auth/cloudplatformorganizations.readonly
https://www.googleapis.com/auth/cloudplatformprojects
https://www.googleapis.com/auth/cloudplatformprojects.readonly
https://www.googleapis.com/auth/cloudplatformfolders
https://www.googleapis.com/auth/cloudplatformfolders.readonly
For more information, see the Authentication Overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-11 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-11 UTC."],[],[]]
