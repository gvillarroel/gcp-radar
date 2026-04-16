---
title: "Class InsertWidget \_|\_ Apps Script \_|\_ Google for Developers"
url: https://developers.google.com/apps-script/reference/add-ons-response-service/insert-widget
knowledge_key: corpus
source_id: site-docs-reference-3
source_type: site
entrypoint: https://developers.google.com/apps-script/reference/content
source_metadata:
  url: https://developers.google.com/apps-script/reference/add-ons-response-service/insert-widget
  title: "Class InsertWidget \_|\_ Apps Script \_|\_ Google for Developers"
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
Class InsertWidget
Stay organized with collections
Save and categorize content based on your preferences.
InsertWidget
A builder for InsertWidget objects. Developers cans insert a widget into a card by passing a
InsertWidget to ModifyCard
Only available for Google Workspace add-ons that extend Google Workspace Studio.
Sample usage:
const newWidget = CardService . newDecoratedText (). setText ( 'New Widget' );
const insertWidget = AddOnsResponseService . newInsertWidget ()
. insertAboveWidget ( 'sample_id' )
. setWidget ( newWidget );
const modifyCard = AddOnsResponseService . newModifyCard (). setInsertWidget ( insertWidget );
Methods
Method Return type Brief description
insert Above Widget(widgetId) Insert Widget Sets the widget ID, and the new widget is inserted above the widget with the given ID.
insert Below Widget(widgetId) Insert Widget Sets the widget ID, and the new widget is inserted below the widget with the given ID.
set Widget(widget) Insert Widget Sets the Widget to be inserted.
Detailed documentation
insertAboveWidget(widgetId)
Sets the widget ID, and the new widget is inserted above the widget with the given ID. An error
is thrown if the widget ID is not found.
Parameters
Name Type Description
widget Id String The ID of the widget to insert above.
Return
InsertWidget — The insert widget object, for chaining.
insertBelowWidget(widgetId)
Sets the widget ID, and the new widget is inserted below the widget with the given ID. An error
is thrown if the widget ID is not found.
Parameters
Name Type Description
widget Id String The ID of the widget to insert below.
Return
InsertWidget — The insert widget object, for chaining.
setWidget(widget)
Sets the Widget to be inserted. An error is thrown if there is a existing widget with
the same ID.
Parameters
Name Type Description
widget Widget The widget to be inserted.
Return
InsertWidget — The insert widget object, for chaining.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
