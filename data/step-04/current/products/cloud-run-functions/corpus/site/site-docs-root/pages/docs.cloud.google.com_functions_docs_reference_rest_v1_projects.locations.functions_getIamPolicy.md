---
title: "Method: projects.locations.functions.getIamPolicy \_|\_ Cloud Run functions\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/getIamPolicy
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/functions/docs
source_metadata:
  url: https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/getIamPolicy
  title: "Method: projects.locations.functions.getIamPolicy \_|\_ Cloud Run functions\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

If you are creating a new function, see the Console Quickstart on Cloud Run.
Home
Documentation
Application hosting
Cloud Run
Cloud Run functions
Reference
Send feedback
Method: projects.locations.functions.getIamPolicy
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Query parameters
Request body
Response body
Authorization scopes
Try it!
Gets the IAM access control policy for a function. Returns an empty policy if the function exists and does not have a policy set.
HTTP request
GET https://cloudfunctions.googleapis.com/v1/{resource}:getIamPolicy
Path parameters
Parameters
resource
string
REQUIRED: The resource for which the policy is being requested. See Resource names for the appropriate value for this field.
Query parameters
Parameters
options
object ( GetPolicyOptions )
OPTIONAL: A GetPolicyOptions object for specifying options to functions.getIamPolicy .
Request body
The request body must be empty.
Response body
If successful, the response body contains an instance of Policy .
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/cloudfunctions
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-16 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-16 UTC."],[],[]]
