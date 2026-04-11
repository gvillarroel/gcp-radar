---
title: "Extend Google Chat \_|\_ Google Workspace add-ons \_|\_ Google for Developers"
url: https://developers.google.com/workspace/add-ons/chat
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/workspace/add-ons/reference
source_metadata:
  url: https://developers.google.com/workspace/add-ons/chat
  title: "Extend Google Chat \_|\_ Google Workspace add-ons \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Add-ons
Send feedback
Extend Google Chat
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Extend Google Chat with add-ons to preview links, automate tasks, and receive alerts.
Google Chat add-ons function as Chat apps, enabling interactions like sending messages, responding to commands, and opening dialogs.
To build a Chat add-on, developers can utilize Apps Script or HTTP services, configure the app through the Chat API, and design interfaces using triggers and actions.
Certain features like Dialogflow, Card Service, custom authorization cards, and add-on homepages are currently unavailable for Chat add-ons.
Existing add-ons need specific configurations, including enabling the Chat API, allowing individual and admin installations, and using the Chat API's visibility setting for deployment.
Note: If you've built and published an interactive Google Chat app
based on Chat API interaction events,
you can convert it to a Google Workspace add-on that extends Google Chat.
See
Convert an interactive Google Chat app to a Google Workspace add-on .
This page provides an overview of how to build Google Workspace add-ons that extend
Google Chat.
Google Workspace add-ons that extend Chat can help users do any of the
following:
Preview links from Chat messages, and take action
without leaving the conversation.
Automate or perform tasks across Google Workspace applications.
Receive alerts or notifications about external tools or services.
How Google Workspace add-ons work in Chat
In Chat, add-ons appear to users as
Google Chat apps. To interact with users, Chat apps
can do the following:
Send messages that contain text,
cards, and interactive UI elements.
Respond to quick commands .
Respond to slash commands .
Open dialogs to
help users complete multi-step processes, like filling in form data.
Preview links in messages by
attaching cards with helpful information that let users take action
directly from the conversation.
Get started
To start building Google Workspace add-ons that work in Chat, see the
following documentation:
Try a quickstart to build a basic Chat app using
Google Apps Script or
an HTTP service .
Configure a Chat app
and its interactive features using the Chat API.
Learn about the ways you can
build Chat interfaces
using add-on triggers, actions, and event objects.
Limitations and known issues
Note: This documentation explains how to build a
Chat app as a Google Workspace add-on. You can also
build Chat apps using interaction events . To learn
about each framework and its available features, see
Build an interactive Google Chat app
in the Google Chat API documentation.
The following Chat and add-on features
are unavailable:
AppSheet
Chat app architecture is unavailable.
Instead, build the Chat app using an
HTTP service ,
Apps Script ,
Dialogflow ES or
Dialogflow CX ,
or Pub/Sub .
Custom authorization cards. To authenticate and grant authorization to your
service from Chat, the Chat app must
return a basic authorization card .
Add-on homepages
in the Chat sidebar. If you've configured a
homepage trigger for your
add-on, the homepage only appears in the sidebar of
the other Google Workspace applications that your
add-on extends.
Chat app homepages ,
which appear in the Home tab of direct messages with the
Chat app.
If you're updating an existing Google Workspace add-on, consider the following
configuration requirements
for Chat apps:
The
Google Workspace Marketplace installation settings
must permit both individuals and Google Workspace administrators to
install the add-on.
Any common configuration settings in the add-on's
manifest
( addons.common ) are ignored in Chat. To configure the
add-on to work in
Chat, you must enable and configure the
Chat API. For steps, see
Configure a Google Chat app .
To deploy and test an add-on in Chat,
you must use the Chat API's Visibility setting. Any
visibility or testing settings that you've configured in the
Google Workspace Marketplace SDK are ignored. To deploy a test version of
the add-on in Chat, see
Test interactive features for Google Chat apps
in the Chat API documentation.
If your add-ons is published to the
Google Workspace Marketplace, you can't save a draft of any changes to the
Google Chat API configuration settings .
When you update Chat API configuration settings, the
updated Chat app is immediately available to all
existing users. To update your Marketplace listing,
you can
create a draft
before submitting any changes.
Related topics
Google Chat API documentation overview
Try a sample:
Schedule meetings from Google Chat
Integrate fundamental AI concepts in Chat apps
Plan travels with an AI agent accessible across Google Workspace
Build Gemini Enterprise agents that are tightly integrated with Workspace data stores, APIs, and Chat apps
Build Vertex AI agents that are tightly integrated with Workspace data stores, APIs, and Chat apps
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-03 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-03 UTC."],[],["Google Workspace add-ons in Chat function as Chat apps, allowing users to preview links, automate tasks, and receive alerts. These apps can send interactive messages, respond to commands, open dialogs, and preview links. To start, developers can use Google Apps Script or an HTTP service. Key limitations include the unavailability of Dialogflow, Pub/Sub, and certain Card Service features. Configuration must be done through the Chat API, as Marketplace settings are ignored in Chat.\n"]]
