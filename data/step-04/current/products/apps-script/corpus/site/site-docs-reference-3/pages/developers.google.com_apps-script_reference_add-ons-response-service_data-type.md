---
title: "Class DataType \_|\_ Apps Script \_|\_ Google for Developers"
url: https://developers.google.com/apps-script/reference/add-ons-response-service/data-type
knowledge_key: corpus
source_id: site-docs-reference-3
source_type: site
entrypoint: https://developers.google.com/apps-script/reference/content
source_metadata:
  url: https://developers.google.com/apps-script/reference/add-ons-response-service/data-type
  title: "Class DataType \_|\_ Apps Script \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Apps Script
Reference
Send feedback
Class DataType
Stay organized with collections
Save and categorize content based on your preferences.
DataType
A DataType is used to set the type of a variable. The type can be one of the basic data type or a
Workspace Studio-specific resource type.
Only available for Google Workspace add-ons that extend Google Workspace Studio.
Sample usage:
const dataType = AddOnsResponseService . newDataType ()
. setBasicDataType (
AddOnsResponseService . BasicDataType . STRING
)
. setValueMetadata (
AddOnsResponseService . newValueMetadata ()
. addEnumValue ( "sample_enum_value" )
);
let resourceField = AddOnsResponseService . newResourceField ()
. setSelector ( "question_1" )
. setDisplayText ( "Question 1" )
. setDataType ( dataType );
}
Methods
Method Return type Brief description
set Basic Data Type(basicDataType) Data Type Sets the data type to one of the supported Basic Data Type s.
set Resource Type(resourceType) Data Type Sets the data type to a custom defined Resource Type .
set Value Metadata(valueMetadata) Data Type Sets the Value Metadata , which contains type-related information related to the
variable.
Detailed documentation
setBasicDataType(basicDataType)
Sets the data type to one of the supported BasicDataType s.
Parameters
Name Type Description
basic Data Type Basic Data Type The basic data type that the variable belongs to.
Return
DataType — This data type object, for chaining.
setResourceType(resourceType)
Sets the data type to a custom defined ResourceType .
Parameters
Name Type Description
resource Type Resource Type The application specific(custom) resource type of the variable.
Return
DataType — This data type object, for chaining.
setValueMetadata(valueMetadata)
Sets the ValueMetadata , which contains type-related information related to the
variable.
Parameters
Name Type Description
value Metadata Value Metadata The value metadata information about the potential values of the variable.
Return
DataType — This data type object, for chaining.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
