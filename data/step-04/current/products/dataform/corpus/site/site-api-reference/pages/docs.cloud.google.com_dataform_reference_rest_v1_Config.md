---
title: "Config \_|\_ Dataform \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataform/reference/rest/v1/Config
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/dataform/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/dataform/reference/rest/v1/Config
  title: "Config \_|\_ Dataform \_|\_ Google Cloud Documentation"
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
Config
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
Config for all repositories in a given project and location.
JSON representation
{
"name" : string ,
"defaultKmsKeyName" : string ,
"internalMetadata" : string
}
Fields
name
string
Identifier. The config name.
defaultKmsKeyName
string
Optional. The default KMS key that is used if no encryption key is provided when a repository is created.
internalMetadata
string
Output only. All the metadata information that is used internally to serve the resource. For example: timestamps, flags, status fields, etc. The format of this field is a JSON string.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-01-28 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-01-28 UTC."],[],[]]
