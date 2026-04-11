---
title: "Attributes \_|\_ Cloud Trace \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/trace/docs/reference/v2/rest/v2/Attributes
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/trace/docs/reference
source_metadata:
  url: https://docs.cloud.google.com/trace/docs/reference/v2/rest/v2/Attributes
  title: "Attributes \_|\_ Cloud Trace \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Observability
Cloud Trace
Reference
Send feedback
Attributes
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
AttributeValue
JSON representation
A set of attributes as key-value pairs.
JSON representation
{
"attributeMap" : {
string : {
object ( AttributeValue )
} ,
...
} ,
"droppedAttributesCount" : integer
}
Fields
attributeMap
map (key: string, value: object ( AttributeValue ))
A set of attributes. Each attribute's key can be up to 128 bytes long. The value can be a string up to 256 bytes, a signed 64-bit integer, or the boolean values true or false . For example:
"/instance_id": { "stringValue": { "value": "my-instance" } }
"/http/request_bytes": { "intValue": 300 }
"example.com/myattribute": { "boolValue": false }
droppedAttributesCount
integer
The number of attributes that were discarded. Attributes can be discarded because their keys are too long or because there are too many attributes. If this value is 0 then all attributes are valid.
AttributeValue
The allowed types for [VALUE] in a [KEY]:[VALUE] attribute.
JSON representation
{
// Union field value can be only one of the following:
"stringValue" : {
object ( TruncatableString )
} ,
"intValue" : string ,
"boolValue" : boolean
// End of list of possible types for union field value .
}
Fields
Union field value . The type of the value. value can be only one of the following:
stringValue
object ( TruncatableString )
A string up to 256 bytes long.
intValue
string ( int64 format)
A 64-bit signed integer.
boolValue
boolean
A Boolean value represented by true or false .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-23 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-23 UTC."],[],[]]
