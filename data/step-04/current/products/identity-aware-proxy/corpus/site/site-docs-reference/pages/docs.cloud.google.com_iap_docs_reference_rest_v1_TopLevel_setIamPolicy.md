---
title: "Method: setIamPolicy \_|\_ Identity-Aware Proxy \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/iap/docs/reference/rest/v1/TopLevel/setIamPolicy
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/iap/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/iap/docs/reference/rest/v1/TopLevel/setIamPolicy
  title: "Method: setIamPolicy \_|\_ Identity-Aware Proxy \_|\_ Google Cloud Documentation"
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
Method: setIamPolicy
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Request body
JSON representation
Response body
Authorization scopes
IAM Permissions
Try it!
Sets the access control policy for an Identity-Aware Proxy protected resource. Replaces any existing policy. More information about managing access via IAP can be found at: https://cloud.google.com/iap/docs/managing-access#managing_access_via_the_api
HTTP request
POST https://iap.googleapis.com/v1/{resource=**}:setIamPolicy
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
}
}
Fields
policy
object ( Policy )
REQUIRED: The complete policy to be applied to the resource . The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Google Cloud services (such as Projects) might reject them.
Response body
If successful, the response body contains an instance of Policy .
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
IAM Permissions
Requires one of the following IAM permissions on the resource resource, depending on the resource type:
iap.gateway.setIamPolicy
iap.tunnel.setIamPolicy
iap.tunnelDestGroups.setIamPolicy
iap.tunnelInstances.setIamPolicy
iap.tunnelLocations.setIamPolicy
iap.tunnelZones.setIamPolicy
iap.web.setIamPolicy
iap.webServices.setIamPolicy
iap.webServiceVersions.setIamPolicy
iap.webTypes.setIamPolicy
For more information, see the IAM documentation .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-17 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-17 UTC."],[],[]]
