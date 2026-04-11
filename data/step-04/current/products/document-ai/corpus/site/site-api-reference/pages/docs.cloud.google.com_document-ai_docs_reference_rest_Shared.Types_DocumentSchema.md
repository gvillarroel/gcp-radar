---
title: "DocumentSchema \_|\_ Document AI \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/document-ai/docs/reference/rest/Shared.Types/DocumentSchema
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/document-ai/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/document-ai/docs/reference/rest/Shared.Types/DocumentSchema
  title: "DocumentSchema \_|\_ Document AI \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Document AI
Reference
Send feedback
DocumentSchema
Stay organized with collections
Save and categorize content based on your preferences.
The schema defines the output of the processed document by a processor.
JSON representation
{
"displayName" : string ,
"description" : string ,
"entityTypes" : [
{
object ( EntityType )
}
] ,
"metadata" : {
object ( Metadata )
}
}
Fields
displayName
string
Display name to show users.
description
string
Description of the schema.
entityTypes[]
object ( EntityType )
Entity types of the schema.
metadata
object ( Metadata )
Metadata of the schema.
EntityType
EntityType is the wrapper of a label of the corresponding model with detailed attributes and limitations for entity-based processors. Multiple types can also compose a dependency tree to represent nested types.
JSON representation
{
"displayName" : string ,
"name" : string ,
"description" : string ,
"baseTypes" : [
string
] ,
"properties" : [
{
object ( Property )
}
] ,
"entityTypeMetadata" : {
object ( EntityTypeMetadata )
} ,
// Union field value_source can be only one of the following:
"enumValues" : {
object ( EnumValues )
}
// End of list of possible types for union field value_source .
}
Fields
displayName
string
User defined name for the type.
name
string
Name of the type. It must be unique within the schema file and cannot be a "Common Type". The following naming conventions are used:
Use snake_casing .
Name matching is case-sensitive.
Maximum 64 characters.
Must start with a letter.
Allowed characters: ASCII letters [a-z0-9_-] . (For backward compatibility, internal infrastructure and tooling can handle any ASCII character.)
The / is sometimes used to denote a property of a type. For example line_item/amount . This convention is deprecated, but will still be honored for backward compatibility.
description
string
The description of the entity type. Could be used to provide more information about the entity type for model calls.
baseTypes[]
string
The entity type that this type is derived from. For now, one and only one should be set.
properties[]
object ( Property )
Description the nested structure, or composition of an entity.
entityTypeMetadata
object ( EntityTypeMetadata )
Metadata for the entity type.
Union field value_source .
value_source can be only one of the following:
enumValues
object ( EnumValues )
If specified, lists all the possible values for this entity. This should not be more than a handful of values. If the number of values is >10 or could change frequently, use the EntityType.value_ontology field and specify a list of all possible values in a value ontology file.
EnumValues
Defines the a list of enum values.
JSON representation
{
"values" : [
string
]
}
Fields
values[]
string
The individual values that this enum values type can include.
Property
Defines properties that can be part of the entity type.
JSON representation
{
"name" : string ,
"description" : string ,
"displayName" : string ,
"valueType" : string ,
"occurrenceType" : enum ( OccurrenceType ) ,
"method" : enum ( Method ) ,
"propertyMetadata" : {
object ( PropertyMetadata )
}
}
Fields
name
string
The name of the property. Follows the same guidelines as the EntityType name.
description
string
The description of the property. Could be used to provide more information about the property for model calls.
displayName
string
User defined name for the property.
valueType
string
A reference to the value type of the property. This type is subject to the same conventions as the Entity.base_types field.
occurrenceType
enum ( OccurrenceType )
Occurrence type limits the number of instances an entity type appears in the document.
method
enum ( Method )
Specifies how the entity's value is obtained.
propertyMetadata
object ( PropertyMetadata )
Any additional metadata about the property can be added here.
PropertyMetadata
Metadata about a property.
JSON representation
{
"inactive" : boolean ,
"fieldExtractionMetadata" : {
object ( FieldExtractionMetadata )
}
}
Fields
inactive
boolean
Whether the property should be considered as "inactive".
fieldExtractionMetadata
object ( FieldExtractionMetadata )
Field extraction metadata on the property.
FieldExtractionMetadata
Metadata for how this field value is extracted.
JSON representation
{
"summaryOptions" : {
object ( SummaryOptions )
}
}
Fields
summaryOptions
object ( SummaryOptions )
Summary options config.
SummaryOptions
Metadata for document summarization.
JSON representation
{
"length" : enum ( Length ) ,
"format" : enum ( Format )
}
Fields
length
enum ( Length )
How long the summary should be.
format
enum ( Format )
The format the summary should be in.
EntityTypeMetadata
Metadata about an entity type.
JSON representation
{
"inactive" : boolean
}
Fields
inactive
boolean
Whether the entity type should be considered inactive.
Metadata
Metadata for global schema behavior.
JSON representation
{
"documentSplitter" : boolean ,
"documentAllowMultipleLabels" : boolean ,
"prefixedNamingOnProperties" : boolean ,
"skipNamingValidation" : boolean
}
Fields
documentSplitter
boolean
If true, a document entity type can be applied to subdocument (splitting). Otherwise, it can only be applied to the entire document (classification).
documentAllowMultipleLabels
boolean
If true, on a given page, there can be multiple document annotations covering it.
prefixedNamingOnProperties
boolean
If set, all the nested entities must be prefixed with the parents.
skipNamingValidation
boolean
If set, this will skip the naming format validation in the schema. So the string values in DocumentSchema.EntityType.name and DocumentSchema.EntityType.Property.name won't be checked.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
