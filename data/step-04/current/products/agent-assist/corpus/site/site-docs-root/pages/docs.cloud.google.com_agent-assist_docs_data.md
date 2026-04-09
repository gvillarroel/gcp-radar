---
title: "Upload data \_|\_ Agent Assist \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/agent-assist/docs/data
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/agent-assist/docs
source_metadata:
  url: https://docs.cloud.google.com/agent-assist/docs/data
  title: "Upload data \_|\_ Agent Assist \_|\_ Google Cloud Documentation"
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
Upload data
Stay organized with collections
Save and categorize content based on your preferences.
Overview
In order to make suggestions, Agent Assist relies on data in the form of
either documents or conversation transcripts. You must upload your data
before you can use Agent Assist. The linked tutorials at the bottom of
this page walk you through the steps required to upload your data using the
Agent Assist console .
You can use the console to configure Agent Assist features and test out
how they function.
Note: The Agent Assist console can be used during design-time and model
testing phases only. All runtime operations must call the API directly. You can
use the API to carry out the same actions described in the
tutorials , which focus on using the console. See
the Agent Assist how-to guides for details
on sending API requests.
Data types
Agent Assist uses two types of data to make suggestions to human agents:
Conversation datasets , which are collections of conversation transcripts,
and knowledge bases , which are collections of knowledge documents
(articles or FAQ documents). Agent Assist features analyze a conversation
in real time and make suggestions to human agents based on either conversation
datasets or knowledge bases.
Smart Reply and
Summarization surface suggestions
trained on conversation datasets. Smart Reply suggests text responses to agents
as they converse with an end-user, and Summarization suggests conversation
summaries after an exchange with an end-user has completed. Each model is custom
by definition because each conversation dataset is made up of your own
conversation transcript data.
The FAQ Assist and
Article Suggestion features draw on
knowledge bases to make recommendations instead of conversation datsets. Article
Suggestion suggests knowledge documents (such as articles) to agents during a
conversation. FAQ Assist makes suggestions based on FAQ pairs (an FAQ question
and its associated answer) rather than entire articles. You do not need
to train a custom model in order to use these features: Agent Assist
uses default baseline suggestion models to make suggestions from your
knowledge base. If you want to upload your own conversation data to train a
custom suggestion model for Article Suggestion, please contact your Google
representative. Custom suggestion models are not available for FAQ Assist.
What's next
Create a conversation dataset or a
knowledge base .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
