---
title: "DialogEventType \_|\_ Google Chat \_|\_ Google for Developers"
url: https://developers.google.com/workspace/chat/api/reference/rest/v1/DialogEventType
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/workspace/chat/api/reference
source_metadata:
  url: https://developers.google.com/workspace/chat/api/reference/rest/v1/DialogEventType
  title: "DialogEventType \_|\_ Google Chat \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Google Chat
Reference
Send feedback
DialogEventType
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
CARD_CLICKED and MESSAGE events provide insights into user interactions with dialogs in Google Chat apps.
These events utilize specific enums like REQUEST_DIALOG , SUBMIT_DIALOG , and CANCEL_DIALOG to indicate user actions within the dialog.
REQUEST_DIALOG signifies opening a dialog, SUBMIT_DIALOG represents submitting information, and CANCEL_DIALOG denotes closing without submission.
The CANCEL_DIALOG event is only triggered when the user explicitly closes the dialog using the close icon, not through other methods like refreshing or clicking outside.
For further information on Google Chat app interactions, refer to the provided documentation link: Receive and respond to interactions with your Google Chat app .
For CARD_CLICKED and MESSAGE interaction events, the types of interactions with dialogs .
To learn more about Google Chat app interaction events, see Receive and respond to interactions with your Google Chat app .
Enums
TYPE_UNSPECIFIED
Default value. Unspecified.
REQUEST_DIALOG
A user opens a dialog.
SUBMIT_DIALOG
A user clicks an interactive element of a dialog. For example, a user fills out information in a dialog and clicks a button to submit the information.
CANCEL_DIALOG
A user closes a dialog without submitting information. The Chat app only receives this interaction event when users click the close icon in the top right corner of the dialog. When the user closes the dialog by other means (such as refreshing the browser, clicking outside the dialog box, or pressing the escape key), no event is sent.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-05-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-30 UTC."],[],["The core content defines interaction event types related to dialogs within Google Chat apps. `REQUEST_DIALOG` signifies a user opening a dialog. `SUBMIT_DIALOG` indicates a user submitting information within a dialog. `CANCEL_DIALOG` represents a user closing a dialog via the close icon without submitting data. These events are triggered by `CARD_CLICKED` and `MESSAGE` actions, providing data about user interactions with dialogs. `TYPE_UNSPECIFIED` is a default value.\n"]]
