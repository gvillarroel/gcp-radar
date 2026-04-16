---
title: "Class ListContainer \_|\_ Apps Script \_|\_ Google for Developers"
url: https://developers.google.com/apps-script/reference/add-ons-response-service/list-container
knowledge_key: corpus
source_id: site-docs-reference-3
source_type: site
entrypoint: https://developers.google.com/apps-script/reference/content
source_metadata:
  url: https://developers.google.com/apps-script/reference/add-ons-response-service/list-container
  title: "Class ListContainer \_|\_ Apps Script \_|\_ Google for Developers"
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
Class ListContainer
Stay organized with collections
Save and categorize content based on your preferences.
ListContainer
Container for list items, where each list item can contain multiple TextFormatElement . *
Only available for Google Workspace add-ons that extend Google Workspace Studio.
const listContainer = AddOnsResponseService . newListContainer ()
. setListType ( AddOnsResponseService . ListType . UNORDERED )
. addListItem (
AddOnsResponseService . newListItem ()
. addTextFormatElement (
AddOnsResponseService . newTextFormatElement ()
. setStyledText ( sampleStyledText )
));
Methods
Method Return type Brief description
add List Item(listItem) List Container Adds a list item to the list container.
set List Nest Level(listLevel) List Container Sets the level of the list, starts from 0 for the top level, and increases by 1 for each nested
list.
set List Type(listType) List Container Sets the type of the list to be ordered or unordered.
Detailed documentation
addListItem(listItem)
Adds a list item to the list container.
Parameters
Name Type Description
list Item List Item The List Item to be added to the list container.
Return
ListContainer — This list container object, for chaining.
setListNestLevel(listLevel)
Sets the level of the list, starts from 0 for the top level, and increases by 1 for each nested
list.
Parameters
Name Type Description
list Level Integer The number of nest levels of the list.
Return
ListContainer — This list container object, for chaining.
setListType(listType)
Sets the type of the list to be ordered or unordered.
Parameters
Name Type Description
list Type List Type The List Type of the list.
Return
ListContainer — This list container object, for chaining.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
