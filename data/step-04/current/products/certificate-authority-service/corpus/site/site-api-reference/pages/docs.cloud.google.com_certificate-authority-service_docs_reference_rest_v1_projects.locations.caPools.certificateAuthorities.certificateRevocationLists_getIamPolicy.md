---
title: "Method: projects.locations.caPools.certificateAuthorities.certificateRevocationLists.getIamPolicy\
  \ \_|\_ Certificate Authority Service \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/certificate-authority-service/docs/reference/rest/v1/projects.locations.caPools.certificateAuthorities.certificateRevocationLists/getIamPolicy
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/certificate-authority-service/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/certificate-authority-service/docs/reference/rest/v1/projects.locations.caPools.certificateAuthorities.certificateRevocationLists/getIamPolicy
  title: "Method: projects.locations.caPools.certificateAuthorities.certificateRevocationLists.getIamPolicy\
    \ \_|\_ Certificate Authority Service \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Certificate Authority Service
Reference
Send feedback
Method: projects.locations.caPools.certificateAuthorities.certificateRevocationLists.getIamPolicy
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Query parameters
Request body
Response body
Authorization scopes
Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
HTTP request
GET https://privateca.googleapis.com/v1/{resource=projects/*/locations/*/caPools/*/certificateAuthorities/*/certificateRevocationLists/*}:getIamPolicy
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
OPTIONAL: A GetPolicyOptions object for specifying options to certificateRevocationLists.getIamPolicy .
Request body
The request body must be empty.
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
