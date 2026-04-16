---
title: "Extend the assistant with actions \_|\_ Gemini Enterprise \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/gemini/enterprise/docs/assistant-use-actions
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/gemini/enterprise/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/gemini/enterprise/docs/assistant-use-actions
  title: "Extend the assistant with actions \_|\_ Gemini Enterprise \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Note: This documentation applies to the Standard, Plus, and Frontline editions of Gemini Enterprise. For information about the Business edition, see the Gemini Enterprise - Business edition Help Center .
Home
Documentation
AI and ML
Gemini Enterprise
Use Gemini Enterprise
Send feedback
Extend the assistant with actions
Stay organized with collections
Save and categorize content based on your preferences.
With assistant actions, you can ask the assistant to perform tasks for you in
other applications, like scheduling a meeting in Google Calendar or sending an
email in Gmail. This lets you handle relatively low-effort tasks
efficiently, freeing you up for other work that requires more involvement.
See the following sections for information about available actions.
Note: The actions available to you depend on which services your administrator
has configured. If you don't see an option you expect, contact your
organization's administrator.
Authorize your connected services
Before you can use actions in the assistant, you must authorize the specific
connected service to act using your account.
To authorize actions for a service:
In the chat box, click the
table_rows Manage your data
icon.
Find the service you want to authorize, and click Enable actions .
Sign in to the service if necessary, and follow the prompts to authorize it.
Authorize a connected service
After you authorize the connected service, you can ask the assistant to perform
actions using that service on your behalf.
Schedule an event in Google Calendar
If your administrator has configured Google Calendar actions, you can ask the
assistant to create Google Calendar events for you.
To create an event, do the following:
Ask the assistant to schedule the event, providing some basic information.
For example, you can say, "Schedule a meeting with Amal, Charlie, and Kim at
3 PM tomorrow."
Edit the draft event created by the assistant.
Provide event details to the assistant
Enter any of the following for your event:
Field
Description
Attendees
A list of email addresses for everyone who should be invited. You're automatically included.
Title
The name of the event.
Start time
When the event begins.
Duration
How long the event lasts. The default is 30 minutes.
Time zone
The time zone for the event. If you don't specify one, your own time zone is used.
Description
Any additional information about the event.
If you have not previously used the assistant to manage Google Calendar,
click Authorize to grant the necessary permissions.
Note: The first time that you use the assistant to manage your
Google Calendar, you might be asked to grant permissions for both Google Calendar
and Gmail. Gemini Enterprise uses a single connection for both
tools, so you only have to grant permission once. Approving this request
allows the assistant to help you with both your calendar and email seamlessly.
Click Send . The assistant creates the event in Google Calendar and
sends an email to your selected attendees.
Send an email in Gmail
If your administrator has configured Gmail actions, you can ask the
assistant to send emails for you.
To create and send an email, do the following:
Ask the assistant to send the email, providing some basic information. For
example, you can say, "Send an email to Ariel and ask about the status of the
design revisions. CC Izumi and Tristan."
Edit the draft email created by the assistant.
Provide email details to the assistant
Enter any of the following for your email:
Field
Description
To
A list of everyone who should receive the email.
Subject
The subject line of the email.
Content
The body of the email, which can be in Markdown format.
CC
A list of anyone who should be CC'd on the email.
BCC
A list of anyone who should be BCC'd on the email.
If you have not previously used the assistant to manage Gmail, click
Authorize to grant the necessary permissions.
Note: The first time that you use the assistant to manage your Gmail,
you might be asked to grant permissions for both Gmail and
Google Calendar. Gemini Enterprise uses a single connection for both
tools, so you only have to grant permission once. Approving this request
allows the assistant to help you with both your email and calendar seamlessly.
Click Send . The assistant sends the email to your selected recipients.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
