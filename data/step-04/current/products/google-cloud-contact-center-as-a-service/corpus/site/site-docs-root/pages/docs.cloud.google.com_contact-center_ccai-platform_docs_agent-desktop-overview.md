---
title: "Agent desktop \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-desktop-overview
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/contact-center/ccai-platform/docs
source_metadata:
  url: https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-desktop-overview
  title: "Agent desktop \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\
    \ Cloud Documentation"
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
Agent desktop
Stay organized with collections
Save and categorize content based on your preferences.
Agent desktop is a customizable interface that provides agents quick access to
the information and tools they need to handle customer sessions. The desktop
layout includes the agent adapter as well
as configurable panels that display information or tools. You can configure a
distinct desktop layout for each session type: inbound calls, outbound calls, or
chats. You can then configure which desktop layout that an agent
sees when they answer an inbound call, place
an outbound call, or handle a chat. You can also configure announcements to
communicate updates, alerts, and other important information directly to agents.
Before you begin
Before you can use the agent desktop, you need to turn on the agent desktop
extension.
To turn on the agent desktop extension, follow these steps:
In the Google Cloud console, go to the project selector dashboard and select the
project that contains your instance.
Project selector dashboard
In the navigation menu, click CCAI Platform .
CCAI Platform instances
The CCAI Platform instances page appears.
Click the instance that you want to edit. The CCAI Platform instance
Detail page appears.
Click Edit > Configure extensions .
For Extensions , select the Agent desktop checkbox, and then click
Save .
Permissions
Users with the Admin role can configure agent desktop settings and announcements
but can't use the agent desktop. Conversely, users with the Agent role can use
the agent desktop but can't configure agent desktop settings and announcements.
If you're an administrator who needs to use the agent desktop, be sure that your
user has both the Admin and the Agent roles. For more information, see User
roles and permissions .
You can create a custom role if the default user
roles in CCAI Platform don't meet your needs. If you want a custom role
that lets a user configure the agent desktop, configure announcements, or use
the agent desktop, you need to select the correct permission settings for that
custom role. The following procedure shows you how to find the agent desktop
permission settings that you need when you create a custom
role .
To find the permission settings for the agent desktop, do the following:
In the CCAI Platform portal, click Settings > Users & Teams . If
you don't see the Settings menu, click menu Menu .
Click Roles & Permissions .
Do either of the following:
To find the permission settings for configuring the agent desktop and
announcements, do the following:
For Admin , click visibility
View . The Edit Role dialog appears.
For Settings > Agent Desktop , click expand_more to display the remaining
Agent Desktop permission settings. The following agent desktop
permissions for administrators display:
Settings > Operation Management > All
Settings > Agent Desktop > All
Settings > Agent Desktop > Layout and
panel Management
Settings > Announcement Management
To find the permission settings for using the agent desktop, do the
following:
For Agent , click visibility
View . The Edit Role dialog appears.
For Function > Agent > All , click expand_more to display the Agent
permission settings. The following agent desktop permissions for
agents display:
Function > Agent > All
Function > Agent > Calls, chats,
messaging
Function > Agent > Agent Desktop
Click Cancel .
Important: The preceding procedure is for finding the agent desktop settings you
need if you want to create a custom role for an
agent desktop.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
