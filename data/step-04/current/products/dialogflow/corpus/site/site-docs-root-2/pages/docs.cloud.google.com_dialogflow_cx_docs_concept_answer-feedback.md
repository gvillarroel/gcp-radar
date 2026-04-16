---
title: "Answer feedback \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dialogflow/cx/docs/concept/answer-feedback
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/dialogflow/cx/docs/basics
source_metadata:
  url: https://docs.cloud.google.com/dialogflow/cx/docs/concept/answer-feedback
  title: "Answer feedback \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Some products and features are in the process of being renamed. Generative playbook and flow features are also being migrated to a single consolidated console. See the details .
Home
Documentation
AI and ML
Dialogflow
Dialogflow CX
Send feedback
Answer feedback
Stay organized with collections
Save and categorize content based on your preferences.
To help track agent performance,
Dialogflow provides tools for collecting
and analyzing end-user feedback on agent answers during a conversation.
Enable feedback
Before collecting answer feedback,
you must enable the following settings in the
general agent settings :
Enable conversation history
Enable Answer Feedback
Collect feedback with Dialogflow CX Messenger
If you use
Dialogflow CX Messenger ,
you can enable answer feedback collection for the chat dialog by setting the following
HTML attribute :
allow-feedback="all" .
This will add thumbs up thumb_up
and thumbs down thumb_down
buttons to the user interface.
During the conversation,
an end-user can click these buttons to provide feedback on the agent responses.
If the user selects thumbs down,
they can optionally provide a reason for the negative feedback.
Collect feedback with custom user interfaces
If you have developed a custom user interface,
you can add feedback collection to your interface
and call the Sessions.submitAnswerFeedback method.
Go to the Session API reference
Select a protocol and version for the Session reference:
Protocol
V3
V3beta1
REST
Session resource
Session resource
RPC
Session interface
Session interface
C++
SessionsClient
Not available
C#
SessionsClient
Not available
Go
SessionsClient
Not available
Java
SessionsClient
SessionsClient
Node.js
SessionsClient
SessionsClient
PHP
Not available
Not available
Python
SessionsClient
SessionsClient
Ruby
Not available
Not available
Close
Custom feedback data structure
You can have feedback data stored in your custom data structure filling the answerFeedback.customRating field in the
Sessions.submitAnswerFeedback method.
If you use Dialogflow CX Messenger ,
you can set up custom feedback collection by defining your custom feedback component .
Browse feedback using the Dialogflow CX console
You can access and filter feedbacks using the Conversation history tool.
Read feedback with BigQuery conversation history
You can analyze the feedback data with
BigQuery conversation history .
If you have already created your BigQuery table,
you can alter your existing table with the following SQL command if it doesn't have the required bot_answer_feedback column:
ALTER TABLE < your_dataset_name > . < your_table_name >
ADD COLUMN bot_answer_feedback JSON ;
Read feedback with the API
The conversation history resource contains
answerFeedback fields that contain feedback data.
See the GetConversation method in the RPC documentation.
Previous
arrow_back
Audit logging
Next
Validation
arrow_forward
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
