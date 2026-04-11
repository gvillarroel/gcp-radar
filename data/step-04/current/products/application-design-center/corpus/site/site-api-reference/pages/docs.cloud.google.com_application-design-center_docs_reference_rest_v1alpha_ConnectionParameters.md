---
title: "ConnectionParameters \_|\_ Application Design Center \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/application-design-center/docs/reference/rest/v1alpha/ConnectionParameters
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/application-design-center/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/application-design-center/docs/reference/rest/v1alpha/ConnectionParameters
  title: "ConnectionParameters \_|\_ Application Design Center \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Application Design Center
Reference
Send feedback
ConnectionParameters
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
Connection level parameters associated with each component within an application.
JSON representation
{
"connection" : string ,
"parameters" : [
{
object ( Parameter )
}
]
}
Fields
connection
string
Required. The name of the connection parameter.
parameters[]
object ( Parameter )
Optional. A list of parameters associated with the connection.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-09-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-09-10 UTC."],[],[]]
