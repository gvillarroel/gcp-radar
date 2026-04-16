---
title: "Standard Reports: Voicemail Details Data Set \_|\_ Google Cloud Contact Center\
  \ as a Service \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Voicemail_Details_Data_Set
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/contact-center/ccai-platform/docs/get-started
source_metadata:
  url: https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Voicemail_Details_Data_Set
  title: "Standard Reports: Voicemail Details Data Set \_|\_ Google Cloud Contact\
    \ Center as a Service \_|\_ Google Cloud Documentation"
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
Standard Reports: Voicemail Details Data Set
Stay organized with collections
Save and categorize content based on your preferences.
Voicemail Details Report
Overview
The Voicemail Details report reflects the number of voicemails
received. The report displays one line for each interaction that
resulted in a voicemail being left by the customer.
This report includes the name of the queue, timestamps, the duration of
the voicemail along with the URL link to the voicemail recording.
IMPORTANT: The term read is used throughout this report. Since
the recordings are stored in the customer CRM, from a reporting
perspective there is no way to acknowledge that a recording was listened
to. In this report read means that an agent was assigned .
The Voicemail Details report can be found at Reports > Queues .
The metrics included in this report are as follows:
Metric Name
Definition
Queue Name
The name of the queue including the full path names if the queue
is a sub queue - where the interaction came into.
In this report - this is specifically where the
voicemail function would be offered to the
caller.
Language
The language associated with the queue.
Agent Name
The name of the Agent. In this report - this is specifically the
Agent that read the voicemail.
Agent ID
The ID of the Agent that read the voicemail.
Agent Email
The email address of the Agent that read the voicemail.
Start Time stamp
The timestamp of when the voicemail started being recorded.
This formats as date and hh:mm:ss UTC timestamp.
VM Duration
The length of time of the voicemail.
This formats in seconds.
Deflected from Transfer
Indicates whether the voicemail was a deflection after a
transfer
Voicemail Received
Indicates whether the voicemail was received.
This formats as True or False .
Note: If there is an error with the voicemail
recording, the columns Voicemail Received and
Voicemail Read will both display
FALSE .
Voicemail Read
Indicates whether the voicemail was read.
This formats as True or False .
Note: If there is an error with the voicemail
recording, the columns Voicemail Received and
Voicemail Read will both display
FALSE .
URL Link
The URL link to the voicemail recording. The recordings are
stored in the Customer's CRM.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
