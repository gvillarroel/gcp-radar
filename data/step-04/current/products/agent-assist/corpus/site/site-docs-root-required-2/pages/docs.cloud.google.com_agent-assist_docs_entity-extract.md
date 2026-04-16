---
title: "Real-time entity extraction \_|\_ Agent Assist \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/agent-assist/docs/entity-extract
knowledge_key: corpus
source_id: site-docs-root-required-2
source_type: site
entrypoint: https://docs.cloud.google.com/agent-assist/docs/features
source_metadata:
  url: https://docs.cloud.google.com/agent-assist/docs/entity-extract
  title: "Real-time entity extraction \_|\_ Agent Assist \_|\_ Google Cloud Documentation"
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
Real-time entity extraction
Stay organized with collections
Save and categorize content based on your preferences.
Preview
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
You can request real-time entity extraction during an Agent Assist
conversation. This feature automatically extracts data that matches any
Dialogflow system entity
in end-user expressions.
For example, if the end-user says "I want three tickets for Friday", "3" will
be extracted as a @sys.number entity, and "Friday" will be extracted as a
@sys.date entity. Agent Assist provides this data to your system during
the conversation, so you can display it on the human agent's user interface.
You can then use this data to provide the human agent with additional tools,
such as a button to schedule an event when a date is extracted.
Enable real-time entity extraction
To enable real-time entity extraction, set the
human_agent_assistant_config.message_analysis_config.enable_entity_extraction
field to true when creating or updating a
ConversationProfile .
Get extracted data
When you call the analyzeContent or streamingAnalyzeContent method for the
Participant
resource, the
message.message_annotations.parts field of the response contains the extracted
data.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
