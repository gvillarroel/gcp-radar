---
title: "GetIamPolicyRequest \_|\_ Media CDN \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/media-cdn/docs/reference/rest/Shared.Types/GetIamPolicyRequest
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/media-cdn/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/media-cdn/docs/reference/rest/Shared.Types/GetIamPolicyRequest
  title: "GetIamPolicyRequest \_|\_ Media CDN \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Media CDN
Reference
Send feedback
GetIamPolicyRequest
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
GetPolicyOptions
JSON representation
Request message for edgeCacheKeysets.getIamPolicy method.
JSON representation
{
"resource" : string ,
"options" : {
object ( GetPolicyOptions )
}
}
Fields
resource
string
REQUIRED: The resource for which the policy is being requested. See Resource names for the appropriate value for this field.
options
object ( GetPolicyOptions )
OPTIONAL: A GetPolicyOptions object for specifying options to edgeCacheKeysets.getIamPolicy .
GetPolicyOptions
Encapsulates settings provided to edgeCacheKeysets.getIamPolicy.
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
Last updated 2025-06-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-30 UTC."],[],[]]
