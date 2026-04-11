---
title: "REST Resource: projects.locations.codeToolsSettings.settingBindings \_|\_\
  \ Gemini for Google Cloud \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/gemini/docs/api/reference/rest/v1/projects.locations.codeToolsSettings.settingBindings
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/gemini/docs/api/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/gemini/docs/api/reference/rest/v1/projects.locations.codeToolsSettings.settingBindings
  title: "REST Resource: projects.locations.codeToolsSettings.settingBindings \_|\_\
    \ Gemini for Google Cloud \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Gemini for Google Cloud
API and references
Send feedback
REST Resource: projects.locations.codeToolsSettings.settingBindings
Stay organized with collections
Save and categorize content based on your preferences.
Resource: SettingBinding
JSON representation
Product
Methods
Resource: SettingBinding
Message describing SettingBinding object
JSON representation
{
"name" : string ,
"createTime" : string ,
"updateTime" : string ,
"labels" : {
string : string ,
...
} ,
"target" : string ,
"product" : enum ( Product )
}
Fields
name
string
Identifier. Name of the resource. Format:projects/{project}/locations/{location}/{settingType}/{setting}/settingBindings/{settingBinding}
createTime
string ( Timestamp format)
Output only. [Output only] Create time stamp.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
updateTime
string ( Timestamp format)
Output only. [Output only] Update time stamp.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
labels
map (key: string, value: string)
Optional. Labels as key value pairs.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
target
string
Required. Target of the binding.
product
enum ( Product )
Optional. Product type of the setting binding.
Product
Product type of the setting binding.
Enums
PRODUCT_UNSPECIFIED
Unspecified product.
GEMINI_CLOUD_ASSIST
Gemini Cloud Assist.
GEMINI_CODE_ASSIST
Gemini Code Assist.
GEMINI_IN_BIGQUERY
Gemini in BigQuery.
Methods
create
Creates a new SettingBinding in a given project and location.
delete
Deletes a single SettingBinding.
get
Gets details of a single SettingBinding.
list
Lists SettingBindings in a given project and location.
patch
Updates the parameters of a single SettingBinding.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-09-12 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-09-12 UTC."],[],[]]
