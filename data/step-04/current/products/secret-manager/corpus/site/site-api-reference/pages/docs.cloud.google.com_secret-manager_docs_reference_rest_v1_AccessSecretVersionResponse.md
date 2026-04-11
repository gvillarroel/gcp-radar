---
title: "AccessSecretVersionResponse \_|\_ Secret Manager \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/secret-manager/docs/reference/rest/v1/AccessSecretVersionResponse
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/secret-manager/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/secret-manager/docs/reference/rest/v1/AccessSecretVersionResponse
  title: "AccessSecretVersionResponse \_|\_ Secret Manager \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Secret Manager
Reference
Send feedback
AccessSecretVersionResponse
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
Response message for SecretManagerService.AccessSecretVersion .
JSON representation
{
"name" : string ,
"payload" : {
object ( SecretPayload )
}
}
Fields
name
string
The resource name of the SecretVersion in the format projects/*/secrets/*/versions/* or projects/*/locations/*/secrets/*/versions/* .
payload
object ( SecretPayload )
Secret payload
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-05-15 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-15 UTC."],[],[]]
