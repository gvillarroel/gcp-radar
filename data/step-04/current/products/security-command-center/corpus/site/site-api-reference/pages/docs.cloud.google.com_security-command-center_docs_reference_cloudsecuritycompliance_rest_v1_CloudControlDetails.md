---
title: "CloudControlDetails \_|\_ Security Command Center \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/security-command-center/docs/reference/cloudsecuritycompliance/rest/v1/CloudControlDetails
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/security-command-center/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/security-command-center/docs/reference/cloudsecuritycompliance/rest/v1/CloudControlDetails
  title: "CloudControlDetails \_|\_ Security Command Center \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Security Command Center
Reference
Send feedback
CloudControlDetails
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
The details of a cloud control.
JSON representation
{
"name" : string ,
"majorRevisionId" : string ,
"parameters" : [
{
object ( Parameter )
}
]
}
Fields
name
string
Required. The name of the cloud control, in the format organizations/{organization}/locations/{location}/cloudControls/{cloud-control} . The only supported location is global .
majorRevisionId
string ( int64 format)
Required. The major version of the cloud control.
parameters[]
object ( Parameter )
Optional. Parameters are key-value pairs that let you provide your custom location requirements, environment requirements, or other settings that are relevant to the cloud control. An example parameter is {"name": "location","value": "us-west-1"} .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-10-15 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-10-15 UTC."],[],[]]
