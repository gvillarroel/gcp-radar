---
title: "Method: folders.getOrgPolicy \_|\_ Resource Manager \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/resource-manager/reference/rest/v1/folders/getOrgPolicy
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/resource-manager/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/resource-manager/reference/rest/v1/folders/getOrgPolicy
  title: "Method: folders.getOrgPolicy \_|\_ Resource Manager \_|\_ Google Cloud Documentation"
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
Method: folders.getOrgPolicy
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Request body
JSON representation
Response body
Authorization scopes
Try it!
Gets a Policy on a resource.
If no Policy is set on the resource, a Policy is returned with default values including POLICY_TYPE_NOT_SET for the policyType oneof . The etag value can be used with folders.setOrgPolicy() to create or update a Policy during read-modify-write.
HTTP request
POST https://cloudresourcemanager.googleapis.com/v1/{resource=folders/*}:getOrgPolicy
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
resource
string
Name of the resource the Policy is set on.
Authorization requires the following IAM permission on the specified resource resource :
orgpolicy.policy.get
Request body
The request body contains data with the following structure:
JSON representation
{
"constraint" : string
}
Fields
constraint
string
Name of the Constraint to get the Policy .
Response body
If successful, the response body contains an instance of Policy .
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
