---
title: "RuntimeActionSchema \_|\_ Integration Connectors \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/integration-connectors/docs/reference/rest/v1/RuntimeActionSchema
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/integration-connectors/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/integration-connectors/docs/reference/rest/v1/RuntimeActionSchema
  title: "RuntimeActionSchema \_|\_ Integration Connectors \_|\_ Google Cloud Documentation"
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
RuntimeActionSchema
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
InputParameter
JSON representation
ResultMetadata
JSON representation
Schema of a runtime action.
JSON representation
{
"action" : string ,
"inputParameters" : [
{
object ( InputParameter )
}
] ,
"resultMetadata" : [
{
object ( ResultMetadata )
}
] ,
"inputJsonSchema" : {
object ( JsonSchema )
} ,
"resultJsonSchema" : {
object ( JsonSchema )
} ,
"displayName" : string ,
"description" : string ,
"inputSchemaAsString" : string ,
"resultSchemaAsString" : string
}
Fields
action
string
Output only. Name of the action.
inputParameters[]
object ( InputParameter )
Output only. List of input parameter metadata for the action.
resultMetadata[]
object ( ResultMetadata )
Output only. List of result field metadata.
inputJsonSchema
object ( JsonSchema )
Output only. JsonSchema representation of this action's input metadata
resultJsonSchema
object ( JsonSchema )
Output only. JsonSchema representation of this action's result metadata
displayName
string
Output only. Display Name of action to be shown on client side
description
string
Output only. Brief Description of action
inputSchemaAsString
string
Output only. Input schema as string.
resultSchemaAsString
string
Output only. Result schema as string.
InputParameter
Metadata of an input parameter.
JSON representation
{
"parameter" : string ,
"description" : string ,
"dataType" : enum ( DataType ) ,
"nullable" : boolean ,
"defaultValue" : value ,
"jsonSchema" : {
object ( JsonSchema )
}
}
Fields
parameter
string
Name of the Parameter.
description
string
A brief description of the Parameter.
dataType
enum ( DataType )
The data type of the Parameter.
nullable
boolean
Specifies whether a null value is allowed.
defaultValue
value ( Value format)
The following field specifies the default value of the Parameter provided by the external system if a value is not provided.
jsonSchema
object ( JsonSchema )
JsonSchema representation of this action's parameter
ResultMetadata
Metadata of result field.
JSON representation
{
"field" : string ,
"description" : string ,
"dataType" : enum ( DataType ) ,
"jsonSchema" : {
object ( JsonSchema )
} ,
"nullable" : boolean ,
"defaultValue" : value
}
Fields
field
string
Name of the result field.
description
string
A brief description of the field.
dataType
enum ( DataType )
The data type of the field.
jsonSchema
object ( JsonSchema )
JsonSchema representation of this action's result
nullable
boolean
Specifies whether a null value is allowed.
defaultValue
value ( Value format)
The following field specifies the default value of the Parameter provided by the external system if a value is not provided.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-27 UTC."],[],[]]
