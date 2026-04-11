---
title: "Target \_|\_ Dataform \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataform/reference/rest/v1/Target
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/dataform/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/dataform/reference/rest/v1/Target
  title: "Target \_|\_ Dataform \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Technology areas
Dataform
Reference
Send feedback
Target
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
Represents an action identifier. If the action writes output, the output will be written to the referenced database object.
JSON representation
{
"database" : string ,
"schema" : string ,
"name" : string
}
Fields
database
string
Optional. The action's database (Google Cloud project ID) .
schema
string
Optional. The action's schema (BigQuery dataset ID), within database .
name
string
Optional. The action's name, within database and schema .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-21 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-21 UTC."],[],[]]
