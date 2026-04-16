---
title: "Create a conversation profile \_|\_ Agent Assist \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/agent-assist/docs/conversation-profile
knowledge_key: corpus
source_id: site-docs-reference-required-2
source_type: site
entrypoint: https://docs.cloud.google.com/agent-assist/docs/generative-knowledge-assist
source_metadata:
  url: https://docs.cloud.google.com/agent-assist/docs/conversation-profile
  title: "Create a conversation profile \_|\_ Agent Assist \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Agent Assist
Guides
Send feedback
Create a conversation profile
Stay organized with collections
Save and categorize content based on your preferences.
To start a conversation with an end user, create a conversation profile. This profile sets up parameters that control suggestions to a Dialogflow virtual agent or a human agent during runtime. If it's a human agent, you can also configure the category of suggestions to appear: summarization with custom sections or (proactive) generative knowledge assist. To create a conversation profile, you can click the Conversation Profile tab in the Agent Assist console or you can use the console tutorials. For (proactive) generative knowledge assist feature you can use the Application programming interface (API) method as well.
Note: You can only use the Agent Assist console during design-time and model testing phases. Runtime operations must call the API directly. For instructions on how to send API calls, see the Agent Assist how-to guides
Before you begin
To implement (proactive) generative knowledge assist, you must create a flow-based data store agent or playbook-based data store agent .
To implement summarization with custom sections, you must create a summarization generator .
Create a conversation profile
Use the following resources to create a conversation profile:
Agent Assist console
Application programming interface (API)
We recommend that you use the console tutorials first, as follows.
Navigate to the Agent Assist console.
Go to the Agent Assist console .
Click Get started for the feature you'd like to use.
Optional: Depending on which feature you're using, follow the steps in one of the following pages:
Summarization with custom sections
Generative knowledge assist
Verify the conversation profile in the Agent Assist simulator .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
