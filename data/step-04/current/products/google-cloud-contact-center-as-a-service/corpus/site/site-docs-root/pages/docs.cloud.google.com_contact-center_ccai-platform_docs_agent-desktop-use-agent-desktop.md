---
title: "Use the agent desktop \_|\_ Google Cloud Contact Center as a Service \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-desktop-use-agent-desktop
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/contact-center/ccai-platform/docs
source_metadata:
  url: https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-desktop-use-agent-desktop
  title: "Use the agent desktop \_|\_ Google Cloud Contact Center as a Service \_\
    |\_ Google Cloud Documentation"
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
Use the agent desktop
Stay organized with collections
Save and categorize content based on your preferences.
This page explains how to use the agent desktop.
Open the agent desktop
To open the agent desktop, append /agent-desktop to the URL for your
Contact Center AI Platform (CCAI Platform) instance—for example,
https://{my-instance-name}.ccaiplatform.com/agent-desktop . The agent desktop
appears.
Change the display language
To change the display language, click language Languages , and then
click the language to switch to.
Answer an incoming call
To answer incoming calls using the agent adapter, you need to have the
CCAI Platform portal open in a separate browser window or tab.
When an incoming call arrives, the agent desktop displays the Incoming call
pane.
To answer the call, do the following:
Click Answer on the Incoming call pane. A new session tab opens and
a desktop layout for receiving incoming calls appears. The specific layout
that appears depends on how your administrator configured the agent desktop.
For more information, see Set desktop layouts for
agents .
Use the call adapter to assist you in handling the call. It works the same
way as the call adapter in the CCAI Platform portal. For more information, see
Agent call adapter .
Note: If you're using an external call adapter instead of the
CCAI Platform call adapter, the external call adapter appears
outside of the agent desktop.
Use the capabilities in the panels of the agent desktop to assist you in
handling the call.
End the call, or let the end-user end it.
If your instance is configured for wrap-up, then complete your wrap-up tasks.
The session tab remains open until you close it or until the maximum time that a
session tab can remain open is reached. For information about how an
administrator configures session tab limits, see Session tab
limits .
Place an outgoing call
To place an outgoing call, do the following:
Click dial pad . A new session tab opens and the
call adapter appears.
Note: The panels in the agent desktop don't populate until you place your
call.
Place your call.
Use the call adapter to assist you in handling the call. It works the same
way as the call adapter in the CCAI Platform portal. For more information, see
Agent call adapter .
Use the capabilities in the panels of the agent adapter to assist you in
handling the call.
End the call, or let the end-user end it.
If your instance is configured for wrap-up, then complete your wrap-up tasks.
The session tab remains open until you close it or until the maximum time that a
session tab can remain open is reached. For information about how an
administrator configures session tab limits, see Session tab
limits .
Handle an incoming chat
When an incoming chat arrives, the agent desktop displays the New Chat
button.
To handle the incoming chat, do the following:
Click New Chat . A new session tab opens and a desktop layout for
handling chats appears. The specific layout that appears depends on how your
administrator configured agent desktop. For more information, see Set
desktop layouts for agents .
Use the chat adapter to assist you in handling the chat. It works the same
way as the chat adapter in the CCAI Platform portal. For more information, see
Handle a chat .
Use the capabilities in the panels of the agent adapter to assist you in
handling the chat.
End the chat, or let the end-user end it.
If your instance is configured for wrap-up, then complete your wrap-up tasks.
The session tab remains open until you close it or until the maximum time that a
session tab can remain open is reached. For more information, see Session tab
limits .
You can click the session tabs of multiple active chat sessions to switch
between them.
Announcements
Your administrator can send you announcements to communicate updates, alerts,
and other important information. Announcements appear in the agent desktop as
notification banners . These banners persist until you
dismiss them by clicking Okay . Announcements also appear in the
announcement list .
There are two types of announcements:
One-time : For one-time announcements, notification banners appear only
once. You can remove one-time announcements from the announcement list.
Persistent . For persistent announcements, notification banners reappear
every time you sign into the agent desktop. You can't remove persistent
announcements from the announcement list.
Notification banners
Notification banners appear in the agent desktop in the following circumstances:
Your administrator sends you a new announcement. The announcement
immediately appears.
You sign into the agent desktop. Persistent announcements appear, even if
you dismissed them previously.
The following image shows a notification banner:
The Announcements button displays the number of new announcements for which
you haven't yet dismissed the notification banner—for example, . In this example, you have two new
notification banners that you haven't yet dismissed. Dismissing a new
notification banner lowers the number on the Announcements button. When you
dismiss all new notification banners, the Announcements button no longer
displays a number.
When you dismiss a notification banner for a persistent announcement, the
notification banner reappears the next time you sign into the agent desktop.
Because this notification banner isn't for a new announcement, it's not included
in the number count of the Announcements button.
View announcements in the announcement list
In addition to the notification banners that appear in the agent adapter, you
can view announcements in the announcement list.
To view announcements in the announcement list, do the following. In the agent
desktop, click Announcements . The announcement list appears.
Remove one-time announcements from the announcement list
You can remove one-time announcements from the announcement list. You can't
remove persistent announcements from the announcements list.
To remove one-time announcements from the announcement list, do the following:
In the agent desktop, click Announcements . The announcement list appears.
To remove a one-time announcement, click
Delete for the announcement that you want to remove.
To remove all one-time announcements, for Announcements , click Delete All .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
