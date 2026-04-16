---
title: "Class DynamicResourceDefinition \_|\_ Apps Script \_|\_ Google for Developers"
url: https://developers.google.com/apps-script/reference/add-ons-response-service/dynamic-resource-definition
knowledge_key: corpus
source_id: site-docs-reference-3
source_type: site
entrypoint: https://developers.google.com/apps-script/reference/content
source_metadata:
  url: https://developers.google.com/apps-script/reference/add-ons-response-service/dynamic-resource-definition
  title: "Class DynamicResourceDefinition \_|\_ Apps Script \_|\_ Google for Developers"
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
Class DynamicResourceDefinition
Stay organized with collections
Save and categorize content based on your preferences.
DynamicResourceDefinition
A DynamicResourceDefinition is a building block for a ResourceFieldsDefinitionRetrievedAction , it can contain one or more numbers of ResourceField to dynamically define the number of output variables provided by a step in Google
Workspace Studio.
Only available for Google Workspace add-ons that extend Google Workspace Studio.
Sample usage:
let dynamicResourceDefinition = AddOnsResponseService . newDynamicResourceDefinition ()
. setResourceId ( "resource_definition_1" ) // The resource ID must match the one defined in the manifest.
. addResourceField (
AddOnsResponseService . newResourceField ()
. setSelector ( "question_1" )
. setDisplayText ( "Question 1" )
);
Methods
Method Return type Brief description
add Resource Field(resourceField) Dynamic Resource Definition Adds a resource field to the dynamic resource definition.
set Resource Id(resourceId) Dynamic Resource Definition Sets the ID for the dynamic resource definition, this ID corresponds to the workflow Resource Definition Id in the manifest.
Detailed documentation
addResourceField(resourceField)
Adds a resource field to the dynamic resource definition.
Parameters
Name Type Description
resource Field Resource Field The resource field to add.
Return
DynamicResourceDefinition — This object, for chaining.
setResourceId(resourceId)
Sets the ID for the dynamic resource definition, this ID corresponds to the workflowResourceDefinitionId in the manifest.
Parameters
Name Type Description
resource Id String The unique identifier for the dynamic resource definition.
Return
DynamicResourceDefinition — This object, for chaining.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
