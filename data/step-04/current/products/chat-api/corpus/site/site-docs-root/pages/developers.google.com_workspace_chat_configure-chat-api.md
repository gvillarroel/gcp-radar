---
title: "Configure the Google Chat API \_|\_ Google for Developers"
url: https://developers.google.com/workspace/chat/configure-chat-api
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/workspace/chat/overview
source_metadata:
  url: https://developers.google.com/workspace/chat/configure-chat-api
  title: "Configure the Google Chat API \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Google Chat
Guides
Send feedback
Configure the Google Chat API
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Every Google Chat app needs its own Google Cloud project with the Chat API enabled and configured, following specific prerequisites.
Chat apps require a display name, avatar URL, and description, which are visible to users and used by Chat for attributions.
The Chat API is configured in the Google Cloud console, where you can set the app's details, enable/disable interactive features, and optionally enable error logging.
Access to the Chat app configuration page can be granted to other users via specific Google Cloud IAM roles.
Each Google Chat app that you create requires its own
Google Cloud project with the Chat API enabled and configured. This page
shows you how to configure the Chat API.
Prerequisites
A Business or Enterprise
Google Workspace account with access to
Google Chat .
Create a Google Cloud project .
Configure the OAuth consent screen .
Enable the Google Chat API .
Choose a display name, avatar, and description for your Chat app
When you enable the Chat API, you configure the details about your
Chat app that appear to users in Chat,
including a display name, avatar, and description. These details only appear
in Chat. To publish your Chat app to the
Marketplace, you must also specify the details that
appear in your Chat app's
Marketplace listing .
To call the Chat API, you must set up a
Google Chat app with the following information:
Field
Description
Format
App name
The display name for the Chat app.
Up to 25 alphanumeric characters
Avatar URL
The image that displays as your Chat app's
avatar.
An HTTPS URL pointing to a square graphics image (PNG or JPEG).
Recommended size is 256 by 256 pixels or more.
Description
A brief description of the purpose of the
Chat app.
Up to 40 alphanumeric characters
The Chat app's name, avatar, and description are
displayed to users in the Chat UI. For some Chat API
write requests, Chat uses this information to attribute the
actions that a Chat app takes in Chat.
For example, if you call the spaces.create() method, Chat
includes the name of the Chat app in the
description of who created the space, as shown in the following image:
Figure 1 . The attribution message that Chat
displays when the spaces.create() method is used to create a
space on behalf of a user.
To interact with Chat apps, users can also see or use this
information in the following ways:
Invoke the Chat app by @mentioning its name.
Find and start a direct message with the Chat app.
In the Apps menu, direct messages display the
Chat app's name and avatar.
From the compose bar, users can browse Chat apps and see
their name, avatar, and description.
Configure your Chat app in the Google Cloud console
When you have your Chat app details, open your
Cloud project and configure the Chat API:
In the Google Cloud console, go to the Chat API page and click the
Configuration page:
Go to Chat API Configuration page
Under Application info , fill out the App name , Avatar URL ,
and Description fields.
Under Interactive features, click the Enable interactive features toggle
to the off position to disable interactive features for the
Chat app. You can set this up later. To learn about
configuring and building interactive features, see
Receive and respond to user interactions .
Optional: Under Logs , select the Log errors to Logging checkbox to
use Google Cloud Logging. For more information, see
Query error logs for Chat apps .
Click Save .
Grant other people permission to configure the Chat API
You can
give specific users access
to the Chat app configuration page by granting them
the Chat apps Owner or Chat apps Viewer
Google Cloud Identity Access Management (IAM) role .
Users with these roles can't navigate to the Chat apps
configuration page by using the APIs & Services dashboard, but can
access the configuration page by navigating to the Google Cloud console for the
Chat app's host Cloud project as follows:
https://console.developers.google.com/apis/api/chat.googleapis.com/hangouts-chat?project= PROJECT_ID
Where PROJECT_ID is the project ID of the
Google Cloud project hosting the Chat app.
Users with Project roles can also access the app configuration page.
Users with custom roles containing the
resourcemanager.projects.(get|update) permissions cannot access
the Chat app configuration. For custom roles, use
the chat.bots.(get|update) permissions instead.
Related topics
Choose a Chat app architecture
To configure your Chat app for interactive features,
see Receive and respond to user interactions
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],["Each Google Chat app requires a dedicated Google Cloud project with the Chat API enabled. Configuration involves setting up the app's display name (up to 25 characters), avatar URL (square image, 256x256 pixels or more), and description (up to 40 characters). In the Google Cloud console, you must fill out these application details, and optionally, enable or disable interactive features and log errors. Additionally, you can grant specific users access to configure the Chat API by assigning them the \"Chat apps Owner\" or \"Chat apps Viewer\" IAM roles.\n"]]
