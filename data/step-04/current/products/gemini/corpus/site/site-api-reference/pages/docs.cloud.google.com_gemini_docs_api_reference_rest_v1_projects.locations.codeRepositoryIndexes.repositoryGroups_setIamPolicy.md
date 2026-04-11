---
title: "Method: projects.locations.codeRepositoryIndexes.repositoryGroups.setIamPolicy\
  \ \_|\_ Gemini for Google Cloud \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/gemini/docs/api/reference/rest/v1/projects.locations.codeRepositoryIndexes.repositoryGroups/setIamPolicy
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/gemini/docs/api/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/gemini/docs/api/reference/rest/v1/projects.locations.codeRepositoryIndexes.repositoryGroups/setIamPolicy
  title: "Method: projects.locations.codeRepositoryIndexes.repositoryGroups.setIamPolicy\
    \ \_|\_ Gemini for Google Cloud \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Gemini for Google Cloud
API and references
Send feedback
Method: projects.locations.codeRepositoryIndexes.repositoryGroups.setIamPolicy
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Request body
JSON representation
Response body
Authorization scopes
Sets the access control policy on the specified resource. Replaces any existing policy.
Can return NOT_FOUND , INVALID_ARGUMENT , and PERMISSION_DENIED errors.
HTTP request
POST https://cloudaicompanion.googleapis.com/v1/{resource=projects/*/locations/*/codeRepositoryIndexes/*/repositoryGroups/*}:setIamPolicy
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
resource
string
REQUIRED: The resource for which the policy is being specified. See Resource names for the appropriate value for this field.
Request body
The request body contains data with the following structure:
JSON representation
{
"policy" : {
object ( Policy )
} ,
"updateMask" : string
}
Fields
policy
object ( Policy )
REQUIRED: The complete policy to be applied to the resource . The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Google Cloud services (such as Projects) might reject them.
updateMask
string ( FieldMask format)
OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used:
paths: "bindings, etag"
This is a comma-separated list of fully qualified names of fields. Example: "user.displayName,photo" .
Response body
If successful, the response body contains an instance of Policy .
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-05-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-30 UTC."],[],[]]
