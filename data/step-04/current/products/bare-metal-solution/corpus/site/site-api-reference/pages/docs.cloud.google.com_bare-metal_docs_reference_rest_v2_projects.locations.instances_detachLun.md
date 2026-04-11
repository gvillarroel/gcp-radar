---
title: "Method: projects.locations.instances.detachLun \_|\_ Bare Metal Solution \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bare-metal/docs/reference/rest/v2/projects.locations.instances/detachLun
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/bare-metal/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/bare-metal/docs/reference/rest/v2/projects.locations.instances/detachLun
  title: "Method: projects.locations.instances.detachLun \_|\_ Bare Metal Solution\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

The availability of Bare Metal Solution is transitioning to a specialized, allowlist-only model. If you are an existing customer, please contact your Google account team to explore the value of migrating to new Oracle and Google Cloud strategic partnership offerings .
Home
Documentation
Distributed, hybrid, and multicloud
Bare Metal
Reference
Send feedback
Method: projects.locations.instances.detachLun
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Request body
JSON representation
Response body
Authorization Scopes
Try it!
Detach LUN from Instance.
HTTP request
POST https://baremetalsolution.googleapis.com/v2/{instance=projects/*/locations/*/instances/*}:detachLun
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
instance
string
Required. Name of the instance.
Request body
The request body contains data with the following structure:
JSON representation
{
"lun" : string ,
"skipReboot" : boolean
}
Fields
lun
string
Required. Name of the Lun to detach.
skipReboot
boolean
If true, performs lun unmapping without instance reboot.
Response body
If successful, the response body contains an instance of Operation .
Authorization Scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-05-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-30 UTC."],[],[]]
