---
title: "Configure announcements \_|\_ Google Cloud Contact Center as a Service \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-desktop-configure-announcements
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/contact-center/ccai-platform/docs
source_metadata:
  url: https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-desktop-configure-announcements
  title: "Configure announcements \_|\_ Google Cloud Contact Center as a Service \_\
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
Configure announcements
Stay organized with collections
Save and categorize content based on your preferences.
With announcements, you can communicate updates, alerts, and other important
information directly to agents. Announcements appear in the agent desktop as
notification banners that persist until the agent dismisses them. Announcements
also appear in the agent's announcement list. For more information, see
Announcements .
There are two types of announcements:
One-time : For one-time announcements, notification banners appear only
once. An agent can remove one-time announcements from their announcement
list.
Persistent . For persistent announcements, notification banners reappear
every time an agent signs into the agent desktop. An agent can't remove
persistent announcements from their announcement list.
You schedule announcements to be active during a specific timeframe. Outside of
that timeframe, announcements are inactive. Inactive announcements don't display
notification banners and don't appear in an agent's announcement list.
You can add translations of announcement titles and messages. If a translation
is not available for an agent's specified language, English is displayed by
default.
Create an announcement
To create an announcement, follow these steps:
In the CCAI Platform portal, click Settings > Operation
Management . If you don't see the Settings menu, click menu Menu .
Go to the Announcements pane, and then click Manage announcements .
The Announcements page appears.
Click Create announcement . The Create announcement pane appears.
In the Internal label field, enter a label for your announcement. This
label identifies announcements when you view or edit them, but it's not
visible to agents.
In the Title (English US) field, enter a title for your message in
English.
In the Message (English US) field, enter your message in English.
Note: You must have either a title or a message (or both) in your
announcement.
To add a translation, do the following:
Click Add Translation . The Add a translation pane appears.
Click the Language field, and then click the language for your
translation.
In the Title field, enter the title of your message in the
translation language.
In the Message field, enter your message in the translation
language.
Note: You must have either a title or a message (or both) in your
translation.
Click Add .
To add another translation, click Add Translation and repeat these steps
with a different language.
To set the announcement schedule, which determines the timeframe that the
announcement is active, do the following:
Click the Time Zone field, and then click the time zone for your
schedule.
In the Start date and time fields, enter the start date and start
time in the indicated format.
In the End date and time fields, enter the end date and end time in
the indicated format.
Optional: Click the All day checkbox to use a start date and an end
date with no start time and end time. The time fields return to 00:00 .
For Notify , specify whether the announcement is one-time or persistent.
Persistent notification banners reappear every time an agent signs into the
agent desktop. One-time notification banners appear only once.
To specify which agents receive the announcement, do the following:
To specify that all agents receive the announcement, select the All
agents checkbox.
To specify that agents assigned to certain queues receive the
announcement, make sure that the All agents checkbox is cleared, and
then do the following:
Select the Select Queues checkbox. A field appears.
In the field, type part of the queue name. Matching queues appear.
Select the queue that you want.
To select additional queues, repeat these steps.
To specify that agents assigned to certain teams receive the
announcement, follow a similar process using the Select Teams
checkbox.
To specify that certain agents receive the announcement, follow a
similar process using the Select Agents checkbox.
Note: If an announcement is assigned to an agent in multiple ways (for
example, by the queue and the team that the agent is assigned to), the
agent doesn't receive extra notification banners.
Click Save .
Edit an announcement
You can edit an announcement. Be aware that making the following edits to an
announcement can cause it to be resent:
Edit the title or message.
Edit the schedule of an expired announcement so that it becomes active.
Change an announcement from one-time to persistent.
Add a new assignment.
To edit an announcement, follow these steps:
In the CCAI Platform portal, click Settings > Operation
Management . If you don't see the Settings menu, click menu Menu .
Go to the Announcements pane, and then click Manage announcements .
The Announcements page appears.
Do one of the following:
To edit an active announcement, click Active .
To edit an expired announcement, click Expired .
For the announcement you want to edit, click more_horiz More , and then click Edit
announcement . The Edit announcement pane appears.
Make your changes to the announcement, and then click Save .
Delete an announcement
To delete an announcement, follow these steps:
In the CCAI Platform portal, click Settings > Operation
Management . If you don't see the Settings menu, click menu Menu .
Go to the Announcements pane, and then click Manage announcements .
The Announcements page appears.
Do one of the following:
To delete an active announcement, click Active .
To delete an expired announcement, click Expired .
For the announcement you want to delete, click more_horiz More , and then click Delete
announcement .
In the confirmation dialog, click Delete .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
