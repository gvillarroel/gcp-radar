---
title: "JsonSchema \_|\_ Integration Connectors \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/integration-connectors/docs/reference/rest/v1/JsonSchema
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/integration-connectors/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/integration-connectors/docs/reference/rest/v1/JsonSchema
  title: "JsonSchema \_|\_ Integration Connectors \_|\_ Google Cloud Documentation"
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
JsonSchema
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
JsonSchema representation of schema metadata
JSON representation
{
"description" : string ,
"default" : value ,
"required" : [
string
] ,
"type" : [
string
] ,
"items" : {
object ( JsonSchema )
} ,
"properties" : {
string : {
object ( JsonSchema )
} ,
...
} ,
"enum" : [
value
] ,
"jdbcType" : enum ( DataType ) ,
"format" : string ,
"additionalDetails" : {
object
}
}
Fields
description
string
A description of this schema.
default
value ( Value format)
The default value of the field or object described by this schema.
required[]
string
Whether this property is required.
type[]
string
JSON Schema Validation: A Vocabulary for Structural Validation of JSON
items
object ( JsonSchema )
Schema that applies to array values, applicable only if this is of type array .
properties
map (key: string, value: object ( JsonSchema ))
The child schemas, applicable only if this is of type object . The key is the name of the property and the value is the json schema that describes that property
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
enum[]
value ( Value format)
Possible values for an enumeration. This works in conjunction with type to represent types with a fixed set of legal values
jdbcType
enum ( DataType )
JDBC datatype of the field.
format
string
Format of the value as per https://json-schema.org/understanding-json-schema/reference/string.html#format
additionalDetails
object ( Struct format)
Additional details apart from standard json schema fields, this gives flexibility to store metadata about the schema
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-27 UTC."],[],[]]
