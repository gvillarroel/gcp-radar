---
title: "Method: projects.locations.codeRepositoryIndexes.repositoryGroups.getIamPolicy\
  \ \_|\_ Gemini for Google Cloud \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/gemini/docs/api/reference/rest/v1/projects.locations.codeRepositoryIndexes.repositoryGroups/getIamPolicy
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/gemini/docs/api/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/gemini/docs/api/reference/rest/v1/projects.locations.codeRepositoryIndexes.repositoryGroups/getIamPolicy
  title: "Method: projects.locations.codeRepositoryIndexes.repositoryGroups.getIamPolicy\
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
Method: projects.locations.codeRepositoryIndexes.repositoryGroups.getIamPolicy
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Query parameters
Request body
Response body
Authorization scopes
IAM Permissions
GetPolicyOptions
JSON representation
Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
HTTP request
GET https://cloudaicompanion.googleapis.com/v1/{resource=projects/*/locations/*/codeRepositoryIndexes/*/repositoryGroups/*}:getIamPolicy
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
resource
string
REQUIRED: The resource for which the policy is being requested. See Resource names for the appropriate value for this field.
Query parameters
Parameters
options
object ( GetPolicyOptions )
OPTIONAL: A GetPolicyOptions object for specifying options to repositoryGroups.getIamPolicy .
Request body
The request body must be empty.
Response body
If successful, the response body contains an instance of Policy .
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
IAM Permissions
Requires one of the following IAM permissions on the resource resource, depending on the resource type:
cloudaicompanion.repositoryGroups.getIamPolicy
cloudaicompanion.topics.getIamPolicy
For more information, see the IAM documentation .
GetPolicyOptions
Encapsulates settings provided to repositoryGroups.getIamPolicy.
JSON representation
{
"requestedPolicyVersion" : integer
}
Fields
requestedPolicyVersion
integer
Optional. The maximum policy version that will be used to format the policy.
Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.
Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset.
The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1.
To learn which resources support conditions in their IAM policies, see the IAM documentation .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-05-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-30 UTC."],[],[]]
