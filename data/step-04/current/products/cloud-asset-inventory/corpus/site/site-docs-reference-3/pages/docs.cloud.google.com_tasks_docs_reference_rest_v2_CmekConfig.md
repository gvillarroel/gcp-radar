---
title: "CmekConfig \_|\_ Cloud Tasks \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/tasks/docs/reference/rest/v2/CmekConfig
knowledge_key: corpus
source_id: site-docs-reference-3
source_type: site
entrypoint: https://docs.cloud.google.com/tasks/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/tasks/docs/reference/rest/v2/CmekConfig
  title: "CmekConfig \_|\_ Cloud Tasks \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Cloud Tasks
Reference
Send feedback
CmekConfig
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
Describes the customer-managed encryption key (CMEK) configuration associated with a project and location.
JSON representation
{
"name" : string ,
"kmsKey" : string
}
Fields
name
string
Output only. The config resource name which includes the project and location and must end in 'cmekConfig', in the format projects/PROJECT_ID/locations/LOCATION_ID/cmekConfig`
kmsKey
string
Resource name of the Cloud KMS key, of the form projects/PROJECT_ID/locations/LOCATION_ID/keyRings/KEY_RING_ID/cryptoKeys/KEY_ID , that will be used to encrypt the Queues & Tasks in the region. Setting this as blank will turn off CMEK encryption.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-04-23 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-04-23 UTC."],[],[]]
