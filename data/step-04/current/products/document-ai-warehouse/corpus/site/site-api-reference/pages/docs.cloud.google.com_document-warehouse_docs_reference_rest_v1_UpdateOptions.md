---
title: "UpdateOptions \_|\_ Document AI Warehouse \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/document-warehouse/docs/reference/rest/v1/UpdateOptions
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/document-warehouse/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/document-warehouse/docs/reference/rest/v1/UpdateOptions
  title: "UpdateOptions \_|\_ Document AI Warehouse \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Document AI Warehouse
Reference
Send feedback
UpdateOptions
Stay organized with collections
Save and categorize content based on your preferences.
options for Update operations.
JSON representation
{
"updateType" : enum ( UpdateType ) ,
"updateMask" : string ,
"mergeFieldsOptions" : {
object ( MergeFieldsOptions )
}
}
Fields
updateType
enum ( UpdateType )
type for update.
updateMask
string ( FieldMask format)
Field mask for merging Document fields. For the FieldMask definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
This is a comma-separated list of fully qualified names of fields. Example: "user.displayName,photo" .
mergeFieldsOptions
object ( MergeFieldsOptions )
options for merging.
UpdateType
Update type of the requests.
Enums
UPDATE_TYPE_UNSPECIFIED
Defaults to full replace behavior, ie. FULL_REPLACE.
UPDATE_TYPE_REPLACE
Fully replace all the fields (including previously linked raw document). Any field masks will be ignored.
UPDATE_TYPE_MERGE
Merge the fields into the existing entities.
UPDATE_TYPE_INSERT_PROPERTIES_BY_NAMES
Inserts the properties by names.
UPDATE_TYPE_REPLACE_PROPERTIES_BY_NAMES
Replace the properties by names.
UPDATE_TYPE_DELETE_PROPERTIES_BY_NAMES
Delete the properties by names.
UPDATE_TYPE_MERGE_AND_REPLACE_OR_INSERT_PROPERTIES_BY_NAMES
For each of the property, replaces the property if the it exists, otherwise inserts a new property. And for the rest of the fields, merge them based on update mask and merge fields options.
MergeFieldsOptions
options for merging updated fields.
JSON representation
{
"replaceMessageFields" : boolean ,
"replaceRepeatedFields" : boolean
}
Fields
replaceMessageFields
boolean
When merging message fields, the default behavior is to merge the content of two message fields together. If you instead want to use the field from the source message to replace the corresponding field in the destination message, set this flag to true. When this flag is set, specified submessage fields that are missing in source will be cleared in destination.
replaceRepeatedFields
boolean
When merging repeated fields, the default behavior is to append entries from the source repeated field to the destination repeated field. If you instead want to keep only the entries from the source repeated field, set this flag to true.
If you want to replace a repeated field within a message field on the destination message, you must set both replaceRepeatedFields and replaceMessageFields to true, otherwise the repeated fields will be appended.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-05-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-08 UTC."],[],[]]
