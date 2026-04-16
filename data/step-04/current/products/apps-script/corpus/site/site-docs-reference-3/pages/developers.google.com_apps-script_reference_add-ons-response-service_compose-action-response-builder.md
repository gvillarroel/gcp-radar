---
title: "Class ComposeActionResponseBuilder \_|\_ Apps Script \_|\_ Google for Developers"
url: https://developers.google.com/apps-script/reference/add-ons-response-service/compose-action-response-builder
knowledge_key: corpus
source_id: site-docs-reference-3
source_type: site
entrypoint: https://developers.google.com/apps-script/reference/content
source_metadata:
  url: https://developers.google.com/apps-script/reference/add-ons-response-service/compose-action-response-builder
  title: "Class ComposeActionResponseBuilder \_|\_ Apps Script \_|\_ Google for Developers"
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
Class ComposeActionResponseBuilder
Stay organized with collections
Save and categorize content based on your preferences.
ComposeActionResponseBuilder
A builder for ComposeActionResponse objects.
Note : This object isn't related to compose actions that are
used to extend the compose UI . Rather,
this builder creates responses to an Action that composes draft messages when a specific
UI element is selected.
Methods
Method Return type Brief description
build() Compose Action Response Builds the current compose action response and validates it.
set Gmail Draft(draft) Compose Action Response Builder Sets the draft Gmail Message created
using Gmail Message.createDraftReply(body) or
similar functions.
Detailed documentation
build()
Builds the current compose action response and validates it.
Return
ComposeActionResponse — A validated ComposeActionResponse .
Throws
Error — if the constructed compose action response isn't valid.
setGmailDraft(draft)
Sets the draft GmailMessage created
using GmailMessage.createDraftReply(body) or
similar functions.
Parameters
Name Type Description
draft Gmail Draft The Gmail Draft to use.
Return
ComposeActionResponseBuilder — This object, for chaining.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
