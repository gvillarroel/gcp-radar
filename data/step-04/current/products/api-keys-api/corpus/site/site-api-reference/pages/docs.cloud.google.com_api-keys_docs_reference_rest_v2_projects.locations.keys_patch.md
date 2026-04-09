---
title: "Method: projects.locations.keys.patch \_|\_ API Keys API Documentation \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/api-keys/docs/reference/rest/v2/projects.locations.keys/patch
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/api-keys/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/api-keys/docs/reference/rest/v2/projects.locations.keys/patch
  title: "Method: projects.locations.keys.patch \_|\_ API Keys API Documentation \_\
    |\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
API Keys API Documentation
Reference
Send feedback
Method: projects.locations.keys.patch
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Query parameters
Request body
Response body
Authorization scopes
IAM Permissions
Try it!
Patches the modifiable fields of an API key. The key string of the API key isn't included in the response.
NOTE: Key is a global resource; hence the only supported value for location is global .
HTTP request
PATCH https://apikeys.googleapis.com/v2/{key.name=projects/*/locations/*/keys/*}
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
key.name
string
Output only. The resource name of the key. The name has the form: projects/<PROJECT_NUMBER>/locations/global/keys/<KEY_ID> . For example: projects/123456867718/locations/global/keys/b7ff1f9f-8275-410a-94dd-3855ee9b5dd2
NOTE: Key is a global resource; hence the only supported value for location is global .
Query parameters
Parameters
updateMask
string ( FieldMask format)
The field mask specifies which fields to be updated as part of this request. All other fields are ignored. Mutable fields are: displayName , restrictions , and annotations . If an update mask is not provided, the service treats it as an implied mask equivalent to all allowed fields that are set on the wire. If the field mask has a special value "*", the service treats it equivalent to replace all allowed mutable fields.
This is a comma-separated list of fully qualified names of fields. Example: "user.displayName,photo" .
Request body
The request body contains an instance of Key .
Response body
If successful, the response body contains an instance of Operation .
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
IAM Permissions
Requires the following IAM permission on the name resource:
apikeys.keys.update
For more information, see the IAM documentation .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-26 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-26 UTC."],[],[]]
