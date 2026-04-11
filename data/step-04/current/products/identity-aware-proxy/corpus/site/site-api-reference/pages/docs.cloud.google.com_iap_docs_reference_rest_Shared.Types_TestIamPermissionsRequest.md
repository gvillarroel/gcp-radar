---
title: "TestIamPermissionsRequest \_|\_ Identity-Aware Proxy \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/iap/docs/reference/rest/Shared.Types/TestIamPermissionsRequest
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/iap/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/iap/docs/reference/rest/Shared.Types/TestIamPermissionsRequest
  title: "TestIamPermissionsRequest \_|\_ Identity-Aware Proxy \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Identity-Aware Proxy
Reference
Send feedback
TestIamPermissionsRequest
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
Request message for TestIamPermissions method.
JSON representation
{
"resource" : string ,
"permissions" : [
string
]
}
Fields
resource
string
REQUIRED: The resource for which the policy detail is being requested. See Resource names for the appropriate value for this field.
permissions[]
string
The set of permissions to check for the resource . Permissions with wildcards (such as * or storage.* ) are not allowed. For more information see IAM Overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-17 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-17 UTC."],[],[]]
