---
title: "GetIamPolicyRequest \_|\_ API Gateway \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/api-gateway/docs/reference/rest/Shared.Types/GetIamPolicyRequest
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/api-gateway/docs/reference
source_metadata:
  url: https://docs.cloud.google.com/api-gateway/docs/reference/rest/Shared.Types/GetIamPolicyRequest
  title: "GetIamPolicyRequest \_|\_ API Gateway \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
API Gateway
Reference
Send feedback
GetIamPolicyRequest
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
GetPolicyOptions
JSON representation
Request message for gateways.getIamPolicy method.
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
REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
options
object ( GetPolicyOptions )
OPTIONAL: A GetPolicyOptions object for specifying options to gateways.getIamPolicy .
GetPolicyOptions
Encapsulates settings provided to gateways.getIamPolicy.
JSON representation
{
"requestedPolicyVersion" : integer
}
Fields
requestedPolicyVersion
integer
Optional. The policy format version to be returned.
Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.
Requests for policies with any conditional bindings must specify version 3. Policies without any conditional bindings may specify any valid value or leave the field unset.
To learn which resources support conditions in their IAM policies, see the IAM documentation .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-28 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-28 UTC."],[],[]]
