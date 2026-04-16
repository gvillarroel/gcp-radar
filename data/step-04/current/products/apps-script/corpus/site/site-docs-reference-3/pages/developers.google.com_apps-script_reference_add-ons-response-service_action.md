---
title: "Class Action \_|\_ Apps Script \_|\_ Google for Developers"
url: https://developers.google.com/apps-script/reference/add-ons-response-service/action
knowledge_key: corpus
source_id: site-docs-reference-3
source_type: site
entrypoint: https://developers.google.com/apps-script/reference/content
source_metadata:
  url: https://developers.google.com/apps-script/reference/add-ons-response-service/action
  title: "Class Action \_|\_ Apps Script \_|\_ Google for Developers"
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
Class Action
Stay organized with collections
Save and categorize content based on your preferences.
Action
An action that Google Workspace add-ons that extend Google Workspace Studio can use to render a
new card.
Only available for Google Workspace add-ons that extend Google Workspace Studio.
const link = AddOnsResponseService . newLink (). setUrl ( 'https://www.google.com' );
const action =
AddOnsResponseService . newAction ()
. setLink ( link );
const renderAction = AddOnsResponseService . newRenderActionBuilder (). setAction ( action ). build ();
Methods
Method Return type Brief description
add Modify Card(modifyCard) Action Adds a ModifyCard operation to the action.
add Navigation(navigation) Action Adds a card navigation to the action.
Detailed documentation
addModifyCard(modifyCard)
Adds a ModifyCard operation to the action.
Parameters
Name Type Description
modify Card Modify Card The Modify Card to use.
Return
Action — This action object, for chaining.
addNavigation(navigation)
Adds a card navigation to the action.
Parameters
Name Type Description
navigation Navigation The Navigation to use.
Return
Action — This action object, for chaining.
Throws
Error — if the navigation argument is invalid.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
