---
title: "Configure desktop layouts for agents \_|\_ Google Cloud Contact Center as\
  \ a Service \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-desktop-set-desktop-layouts
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/contact-center/ccai-platform/docs
source_metadata:
  url: https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-desktop-set-desktop-layouts
  title: "Configure desktop layouts for agents \_|\_ Google Cloud Contact Center as\
    \ a Service \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Google Cloud CCaaS
User Guides
Send feedback
Configure desktop layouts for agents
Stay organized with collections
Save and categorize content based on your preferences.
You can configure which desktop layout
that agents see when they answer an inbound call, place an outbound call, or
handle a chat. You can configure this globally, at the queue level, and at the
team level. Queue-level layout settings take priority over global settings.
Team-level settings take priority over both queue-level settings and default
settings. For more information, see Create desktop
layouts .
Configure desktop layouts globally
You can configure desktop layouts globally for agents receiving inbound calls,
placing outbound calls, and handling messages.
To configure desktop layouts globally, follow these steps:
In the CCAI Platform portal, click Settings > Operation
Management . If you don't see the Settings menu, click menu Menu .
Go to the Agent Desktop page.
For Desktop Layout , select a layout from each of the following fields:
Default inbound voice layout : sets the layout for receiving inbound
calls
Default outbound voice layout : sets the layout for placing outbound
calls
Default messaging layout : sets the layout for handling chats
Click Save Agent Desktop . A confirmation dialog appears.
Click Save .
Configure desktop layouts at the queue level
You can configure desktop layouts at the queue level for agents receiving inbound
calls and handling messages (mobile and web only). There is no queue-level
option for setting layouts for placing outbound calls.
Desktop layout settings at the queue level take priority over global settings.
For more information, see Configure desktop layouts
globally .
To configure desktop layouts at the queue level, follow these steps:
In the CCAI Platform portal, click Settings > Queue . If you don't
see the Settings menu, click menu
Menu .
Depending on the channel you want, do one of the following:
In the IVR (Interactive Voice Response) pane, click Edit
> View .
In the Mobile pane, click Edit / View .
In the Web pane, click Edit / View .
In the SMS Messaging pane, click Edit / View .
In the WhatsApp pane, click Edit / View .
Click the queue that you want to edit.
In the Settings pane, for Agent Desktop Layout , click Configure .
The Agent Desktop Layout pane appears. For Desktop Layout List , one
or both of the following fields appears, depending on the channel:
Default inbound voice layout : sets the layout for receiving inbound
calls (IVR, web, and mobile only)
Default messaging layout : sets the layout for handling chats (web,
mobile, SMS, and WhatsApp only)
Click the available field(s) to select the layout for the session type.
Click Save .
Configure desktop layouts at the team level
You can configure desktop layouts at the team level for agents receiving inbound
calls, placing outbound calls, and handling messages.
Desktop layout settings at the team level take priority over queue-level
settings and global settings. For more information, see Configure desktop
layouts at the queue level and
Configure desktop layouts globally .
To configure desktop layouts at the team level, follow these steps:
In the CCAI Platform portal, click Settings > Users & Teams . If
you don't see the Settings menu, click menu Menu .
For the team that you want to edit, click edit Edit . The Edit Team dialog
appears.
For Agent Desktop Layout , click expand_more to see the layout options.
For Agent desktop layout list , select a layout from each of the
following fields:
Default inbound voice layout : sets the layout for receiving inbound
calls
Default outbound voice layout : sets the layout for placing outbound
calls
Default messaging layout : sets the layout for handling chats
Click Save .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
