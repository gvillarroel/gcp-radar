---
title: "Customer Experience Insights and Quality AI \_|\_ Google Cloud Contact Center\
  \ as a Service \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/contact-center/ccai-platform/docs/conversational-insights
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/contact-center/ccai-platform/docs/conversational-insights
source_metadata:
  url: https://docs.cloud.google.com/contact-center/ccai-platform/docs/conversational-insights
  title: "Customer Experience Insights and Quality AI \_|\_ Google Cloud Contact Center\
    \ as a Service \_|\_ Google Cloud Documentation"
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
Customer Experience Insights and Quality AI
Stay organized with collections
Save and categorize content based on your preferences.
Customer Experience Insights helps you detect and
visualize patterns in your contact center data. Understanding conversational
data drives business value, improves operational efficiency, and provides a
voice for customer feedback.
You can use CX Insights to analyze conversation data in order
to:
Run machine learning analytics to gain additional information such as agent
and caller sentiment, entity identification, and call topics. Automatically
identify interesting interactions in need of further review.
Review a conversation with audio playback, transcript synchronization and
analytics annotations.
CX Insights seamlessly integrates with other products, allowing
you to import conversations from Dialogflow CX and
Agent Assist.
Quality AI builds on
CX Insights to enable comprehensive contact center quality
evaluations, including individual conversations, live agents, and virtual
agents.
Prerequisites
Enable
CX Insights
on a Google Cloud project. As a part of the process you must also enable the
following APIs:
Speech-to-Text : to be able to generate transcripts from the call audio
recordings.
Cloud Storage API : to be able to access the stored call recordings and
transcripts from the Cloud Storage bucket. You can either use a
pre-existing Cloud Storage bucket or create a new one.
Service account requirements
Before you can set up CX Insights, you need to create a
Google Cloud Service Account and key in
the project where you will be using CX Insights. In addition,
you need to grant the following IAM roles to your service
account:
Storage Admin
Contact Center AI Insights editor
Cloud Speech-to-Text Service Agent
For more information on granting roles to a service account see the Google IAM
Manage Access
documentation .
Important: Failure to grant the correct IAM Role will prevent
CX Insights from functioning correctly. Caution: Follow Google's best practices for managing service account keys .
Configure new storage
Google recommends configuring a new Cloud Storage bucket specifically for
CX Insights, with its own service account key. The following
procedure explains how to do this.
Note: This tab will be enabled only when external storage is turned ON with
GCS selected.
GCS Bucket Name : Enter your Cloud Storage bucket name.
Service Account Key : Drop service account key (JSON). To upload a key
you will need a JSON service account key from your Service account. For more
information on creating (and downloading) a service account key see Create
a service account key .
Browse your files > Folder Path : Enter the path to your
Cloud Storage bucket to connect your data to
CX Insights. For more information on using variables in
this folder path see the Developer Settings documentation .
File destinations : Voice and chat preview file paths will be generated
based on your folder path entered.
Click Save .
Turn on CX Insights
To turn on CX Insights, follow these steps:
In the CCAI Platform portal, click Settings > Developer Settings .
If you don't see the Settings menu, click menu Menu .
Go to the CCAI Insights pane, and then click Setup Insights . The
Enable CCAI Insights dialog appears.
Click the Enable CCAI Insights toggle to the on position.
In the CCAI Project ID field, enter your CCAI Platform project
ID. This must be in lower case.
In the Region field, select the region.
Optional: Click the Send call recordings toggle to the on position to
send call recordings to CX Insights. These are sent as MP3
files.
Optional: Click the Send chat transcripts toggle to the on position to
send chat transcripts to CX Insights. These are sent as
JSON files.
For Server Setup , select Existing External Google Cloud Storage .
Click Save .
View CX Insights data
After your conversation data has been uploaded, you can view your
CX Insights data in the CX Insights
Console . The conversation ID
in CX Insights is either the CCAI Platform call or
chat ID—for example, call-123 or chat-987 .
You can't use the same CX Insights instance to consume
conversations from multiple Google Cloud Contact Center as a Service instances. This leads to duplicate
conversation IDs, which is not supported. Conversations with duplicate
conversation ID fail to be uploaded to CX Insights.
Session metadata is also passed from Google Cloud Contact Center as a Service when the conversation is
uploaded to CX Insights. The metadata values are provided as
labels in the CX Insights information section when viewing a
conversation.
The provided labels are imported:
Metadata key
Calls
Chats
Description
hold_duration
✔
Duration that the end-user was put on hold for in seconds.
customer_phone_number
✔
The phone number of the end-user.
outbound_number
✔
The phone number that the outbound call was placed from (outbound calls only).
transfers
✔
✔
The number of times the call was transferred.
has_feedback
✔
✔
Whether the conversation had a feedback response.
fail_reason
✔
✔
The reason for the failure of the conversation.
out_ticket_id
✔
✔
The ticket ID of the conversation.
agent_assist_conversation_id_X*
✔
✔
The Agent Assist conversation ID of the conversation.
dialogflow_conversation_id_X*
✔
✔
The Dialogflow CX conversation ID of the conversation.
queue_priority_level
✔
✔
The priority level of the conversation.
answer_type
✔
✔
The type of the answer.
session_type_v2
✔
✔
The type of the session.
menu
✔
✔
The menu of the conversation.
Note: * X is a number based on the leg of the conversation where multiple
Agent Assist or Dialogflow CX sessions existed.
Other metadata values that are used within CX Insights include
the following:
Metadata key
Calls
Chats
Description
id
✔
✔
The call or chat ID of the session used for the conversation ID.
agent_name
✔
✔
The name of the human agent that handled the conversation.
agent_id
✔
✔
The internal CCaaS ID that identified the human agent.
virtual_agent_id
✔
✔
The internal CCaaS ID that identified the virtual agent.
Session metadata stored in Cloud Storage is updated 15 minutes after completion
of the session.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
