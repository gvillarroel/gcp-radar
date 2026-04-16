---
title: "Class ActionResponseBuilder \_|\_ Apps Script \_|\_ Google for Developers"
url: https://developers.google.com/apps-script/reference/add-ons-response-service/action-response-builder
knowledge_key: corpus
source_id: site-docs-reference-3
source_type: site
entrypoint: https://developers.google.com/apps-script/reference/content
source_metadata:
  url: https://developers.google.com/apps-script/reference/add-ons-response-service/action-response-builder
  title: "Class ActionResponseBuilder \_|\_ Apps Script \_|\_ Google for Developers"
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
Class ActionResponseBuilder
Stay organized with collections
Save and categorize content based on your preferences.
ActionResponseBuilder
A builder for ActionResponse objects.
Available for Google Workspace add-ons.
const notification = AddOnsResponseService . newNotification (). setText ( "You closed a dialog!" );
const navigation = AddOnsResponseService . newNavigation ()
. setEndNavigation ( AddOnsResponseService . EndNavigation . CLOSE_DIALOG );
const action = AddOnsResponseService . newActionResponseBuilder ()
. setNavigation ( navigation )
. setNotification ( notification )
. build ();
Methods
Method Return type Brief description
add Modify Card(modifyCard) Action Response Builder Sets the modify card operation to the action.
build() Action Response Builds the current action response and validates it.
set Link Preview(linkPreview) Action Response Builder Sets the LinkPreview to the action.
set Navigation(navigation) Action Response Builder Sets the response to a Navigation action.
set Notification(notification) Action Response Builder Sets the notification to display when the action is activated.
set Open Link(openLink) Action Response Builder Sets the URL to navigate to when the action is activated.
set State Changed(stateChanged) Action Response Builder Sets a flag to indicate that this action changed the existing data state.
Detailed documentation
addModifyCard(modifyCard)
Sets the modify card operation to the action.
Parameters
Name Type Description
modify Card Modify Card The Modify Card to use.
Return
ActionResponseBuilder — This object, for chaining.
build()
Builds the current action response and validates it.
Return
ActionResponse — A validated ActionResponse.
Throws
Error — if the constructed action response isn't valid.
setLinkPreview(linkPreview)
Sets the LinkPreview to the action.
Parameters
Name Type Description
link Preview Link Preview The Link Preview to use.
Return
ActionResponseBuilder — This object, for chaining.
setNavigation(navigation)
Sets the response to a Navigation action.
const navigation = AddOnsResponseService . newNavigation ()
. setEndNavigation ( AddOnsResponseService . EndNavigation . CLOSE_DIALOG );
const action = AddOnsResponseService . newActionResponseBuilder ()
. setNavigation ( navigation )
. build ();
Parameters
Name Type Description
navigation Navigation The Navigation to use.
Return
ActionResponseBuilder — This object, for chaining.
setNotification(notification)
Sets the notification to display when the action is activated.
const notification = AddOnsResponseService . newNotification (). setText ( "You closed a dialog!" );
const action = AddOnsResponseService . newActionResponseBuilder ()
. setNotification ( notification )
. build ();
Parameters
Name Type Description
notification Notification The Notification to use.
Return
ActionResponseBuilder — This object, for chaining.
setOpenLink(openLink)
Sets the URL to navigate to when the action is activated.
Parameters
Name Type Description
open Link Open Link The Open Link to use.
Return
ActionResponseBuilder — This object, for chaining.
setStateChanged(stateChanged)
Sets a flag to indicate that this action changed the existing data state. For example, if the
action created a task or updated contact information. When this flag is set to true ,
services such as Gmail can attempt to clear any cached state data associated with this action.
Parameters
Name Type Description
state Changed Boolean Whether this action has changed the existing state data. Defaults to false .
Return
ActionResponseBuilder — This object, for chaining.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
