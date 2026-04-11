---
title: "EventType \_|\_ Google Chat \_|\_ Google for Developers"
url: https://developers.google.com/workspace/chat/api/reference/rest/v1/EventType
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/workspace/chat/api/reference/rest
source_metadata:
  url: https://developers.google.com/workspace/chat/api/reference/rest/v1/EventType
  title: "EventType \_|\_ Google Chat \_|\_ Google for Developers"
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
EventType
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Google Chat app interaction events are triggered by various user actions, such as sending messages, adding/removing the app, interacting with cards, and updating widgets.
These events provide context about the interaction, like the user, space, and specific action taken, allowing your app to respond appropriately.
ADDED_TO_SPACE and REMOVED_FROM_SPACE events help manage the app's presence in spaces, while CARD_CLICKED enables handling user interactions with card elements.
MESSAGE events cover various scenarios, including direct messages, @mentions, slash commands, and link previews, enabling diverse app functionalities.
APP_HOME and SUBMIT_FORM events allow for interactions specific to apps that utilize the app home feature for a more integrated experience within Google Chat.
Types of Google Chat app interaction events .
To configure your Chat app to receive interaction events, see Receive and respond to user interactions .
Note: This EventType is only used for Chat interaction events . If your Chat app is built as a Google Workspace add-on , see Chat event objects in the add-ons documentation.
Enums
UNSPECIFIED
Default value for the enum. DO NOT USE.
MESSAGE
A user sends the Chat app a message, or invokes the Chat app in a space. Examples of message events include:
Any message in a direct message (DM) space with the Chat app.
A message in a multi-person space where a person @mentions the Chat app, or uses one of its slash commands .
If you've configured link previews for your Chat app, a user posts a message that contains a link that matches the configured URL pattern.
ADDED_TO_SPACE
A user adds the Chat app to a space, or a Google Workspace administrator installs the Chat app in direct message spaces for users in their organization. Chat apps typically respond to this interaction event by posting a welcome message in the space.
When administrators install Chat apps, the space.adminInstalled field is set to true and users can't uninstall them. To learn about Chat apps installed by administrators, see Google Workspace Admin Help's documentation, Install Marketplace apps in your domain .
REMOVED_FROM_SPACE
A user removes the Chat app from a space, or a Google Workspace administrator uninstalls the Chat app for a user in their organization. Chat apps can't respond with messages to this event, because they have already been removed.
When administrators uninstall Chat apps, the space.adminInstalled field is set to false . If a user installed the Chat app before the administrator, the Chat app remains installed for the user and the Chat app doesn't receive a REMOVED_FROM_SPACE interaction event.
CARD_CLICKED
A user clicks an interactive element of a card or dialog from a Chat app, such as a button. To receive an interaction event, the button must trigger another interaction with the Chat app. For example, a Chat app doesn't receive a CARD_CLICKED interaction event if a user clicks a button that opens a link to a website, but receives interaction events in the following examples:
The user clicks a Send feedback button on a card, which opens a dialog for the user to input information.
The user clicks a Submit button after inputting information into a card or dialog.
If a user clicks a button to open, submit, or cancel a dialog, the CARD_CLICKED interaction event's isDialogEvent field is set to true and includes a DialogEventType .
WIDGET_UPDATED
A user updates a widget in a card message or dialog. This event is triggered when a user interacts with a widget that has an associated action.
APP_COMMAND
A user uses a Chat app command , including slash commands and quick commands.
APP_HOME
A user opens a direct message from a Chat app that uses app home. Only the type , user , and space fields are included for events of this type. For more information, see Build a homepage for a Google Chat app .
SUBMIT_FORM
A user submits information in an app home card. Only the type , user , and space fields are included for events of this type. For more information, see Build a homepage for a Google Chat app .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-09-11 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-09-11 UTC."],[],["Google Chat apps can receive various interaction events. These include `MESSAGE` (user messages or @mentions), `ADDED_TO_SPACE` (app added to space), `REMOVED_FROM_SPACE` (app removed), `CARD_CLICKED` (user clicks a card element), `WIDGET_UPDATED` (widget update), `APP_COMMAND` (user command), `APP_HOME` (user opens app home), and `SUBMIT_FORM` (user submits app home card). Each event triggers specific app actions, like posting welcome messages or responding to user input.\n"]]
