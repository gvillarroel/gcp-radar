---
title: "RuntimeEntitySchema \_|\_ Integration Connectors \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/integration-connectors/docs/reference/rest/v1/RuntimeEntitySchema
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/integration-connectors/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/integration-connectors/docs/reference/rest/v1/RuntimeEntitySchema
  title: "RuntimeEntitySchema \_|\_ Integration Connectors \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Integration Connectors
Reference
Send feedback
RuntimeEntitySchema
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
Field
JSON representation
Operation
Schema of a runtime entity.
JSON representation
{
"entity" : string ,
"fields" : [
{
object ( Field )
}
] ,
"jsonSchema" : {
object ( JsonSchema )
} ,
"operations" : [
enum ( Operation )
]
}
Fields
entity
string
Output only. Name of the entity.
fields[]
object ( Field )
Output only. List of fields in the entity.
jsonSchema
object ( JsonSchema )
Output only. JsonSchema representation of this entity's metadata
operations[]
enum ( Operation )
List of operations supported by this entity
Field
Metadata of an entity field.
JSON representation
{
"field" : string ,
"description" : string ,
"dataType" : enum ( DataType ) ,
"key" : boolean ,
"readonly" : boolean ,
"nullable" : boolean ,
"defaultValue" : value ,
"additionalDetails" : {
object
} ,
"jsonSchema" : {
object ( JsonSchema )
}
}
Fields
field
string
Name of the Field.
description
string
A brief description of the Field.
dataType
enum ( DataType )
The data type of the Field.
key
boolean
The following boolean field specifies if the current Field acts as a primary key or id if the parent is of type entity.
readonly
boolean
Specifies if the Field is readonly.
nullable
boolean
Specifies whether a null value is allowed.
defaultValue
value ( Value format)
The following field specifies the default value of the Field provided by the external system if a value is not provided.
additionalDetails
object ( Struct format)
The following map contains fields that are not explicitly mentioned above,this give connectors the flexibility to add new metadata fields.
jsonSchema
object ( JsonSchema )
JsonSchema representation of this entity's schema
Operation
Operation values
Enums
OPERATION_UNSPECIFIED
Operation unspecified.
LIST
This operation means entity type supports LIST entities.
GET
This operation means entity type supports GET entity.
CREATE
This operation means entity type supports CREATE entity.
UPDATE
This operation means entity type supports UPDATE entity.
DELETE
This operation means entity type supports DELETE entity.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-27 UTC."],[],[]]
