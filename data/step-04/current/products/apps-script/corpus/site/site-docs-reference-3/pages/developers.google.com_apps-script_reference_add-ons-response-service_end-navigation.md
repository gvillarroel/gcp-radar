---
title: "Enum EndNavigation \_|\_ Apps Script \_|\_ Google for Developers"
url: https://developers.google.com/apps-script/reference/add-ons-response-service/end-navigation
knowledge_key: corpus
source_id: site-docs-reference-3
source_type: site
entrypoint: https://developers.google.com/apps-script/reference/content
source_metadata:
  url: https://developers.google.com/apps-script/reference/add-ons-response-service/end-navigation
  title: "Enum EndNavigation \_|\_ Apps Script \_|\_ Google for Developers"
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
Enum EndNavigation
Stay organized with collections
Save and categorize content based on your preferences.
EndNavigation
An enum that specifies the action during navigation.
Available for Google Workspace add-ons that extend Google Chat.
const navigation = AddOnsResponseService . newNavigation ()
. setEndNavigation ( AddOnsResponseService . EndNavigation . CLOSE_DIALOG );
To call an enum, you call its parent class, name, and property. For example,
AddOnsResponseService.EndNavigation.CLOSE_DIALOG .
Properties
Property Type Description
ACTION_UNSPECIFIED Enum Action unspecified.
CLOSE_DIALOG Enum Closes a dialog .
CLOSE_DIALOG_AND_EXECUTE Enum Closes a dialog and
refreshes the card that opened the dialog.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
