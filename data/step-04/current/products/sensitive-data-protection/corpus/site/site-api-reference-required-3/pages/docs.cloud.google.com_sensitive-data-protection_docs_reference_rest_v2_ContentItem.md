---
title: "ContentItem \_|\_ Sensitive Data Protection \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/sensitive-data-protection/docs/reference/rest/v2/ContentItem
knowledge_key: corpus
source_id: site-api-reference-required-3
source_type: site
entrypoint: https://docs.cloud.google.com/sensitive-data-protection/docs/reference/rest/v2
source_metadata:
  url: https://docs.cloud.google.com/sensitive-data-protection/docs/reference/rest/v2/ContentItem
  title: "ContentItem \_|\_ Sensitive Data Protection \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Cloud Data Loss Prevention (Cloud DLP) is now a part of Sensitive Data Protection. The API name remains the same: Cloud Data Loss Prevention API (DLP API). For information about the services that make up Sensitive Data Protection, see Sensitive Data Protection overview .
Home
Documentation
Security
Sensitive Data Protection
Reference
Send feedback
ContentItem
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
Table
JSON representation
Row
JSON representation
ContentMetadata
JSON representation
KeyValueMetadataProperty
JSON representation
Type of content to inspect.
JSON representation
{
"contentMetadata" : {
object ( ContentMetadata )
} ,
// Union field data_item can be only one of the following:
"value" : string ,
"table" : {
object ( Table )
} ,
"byteItem" : {
object ( ByteContentItem )
}
// End of list of possible types for union field data_item .
}
Fields
contentMetadata
object ( ContentMetadata )
User provided metadata for the content.
Union field data_item . Data of the item either in the byte array or UTF-8 string form, or table. data_item can be only one of the following:
value
string
String data to inspect or redact.
table
object ( Table )
Structured content for inspection. See https://cloud.google.com/sensitive-data-protection/docs/inspecting-text#inspecting_a_table to learn more.
byteItem
object ( ByteContentItem )
Content data to inspect or redact. Replaces type and data .
Table
Structured content to inspect. Up to 50,000 Value s per request allowed. See https://cloud.google.com/sensitive-data-protection/docs/inspecting-structured-text#inspecting_a_table to learn more.
JSON representation
{
"headers" : [
{
object ( FieldId )
}
] ,
"rows" : [
{
object ( Row )
}
]
}
Fields
headers[]
object ( FieldId )
Headers of the table.
rows[]
object ( Row )
Rows of the table.
Row
Values of the row.
JSON representation
{
"values" : [
{
object ( Value )
}
]
}
Fields
values[]
object ( Value )
Individual cells.
ContentMetadata
Metadata on content to be scanned.
JSON representation
{
"properties" : [
{
object ( KeyValueMetadataProperty )
}
]
}
Fields
properties[]
object ( KeyValueMetadataProperty )
User provided key-value pairs of content metadata.
KeyValueMetadataProperty
A key-value pair in the Metadata.
JSON representation
{
"key" : string ,
"value" : string
}
Fields
key
string
The key of the property.
value
string
The value of the property.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-24 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-24 UTC."],[],[]]
